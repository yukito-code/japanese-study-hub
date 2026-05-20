/**
 * EDICT2 から漢字→実在する熟語・用例を索引（存在しない自動合成語を除外）
 */
import { readFileSync } from "node:fs";
import { spawn } from "node:child_process";
import { createInterface } from "node:readline";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
export const EDICT_GZ_PATH = join(__dirname, "data", "edict2.gz");
export const COMPOUND_INDEX_PATH = join(__dirname, "data", "kanji-compound-index.json");
export const EDICT_HEADWORDS_PATH = join(__dirname, "data", "edict-headwords.json");

const HAN = /\p{Script=Han}/u;
const HIRA = /[\u3040-\u309f]/;

/** @param {string} s */
function hanCount(s) {
  return [...s].filter((c) => HAN.test(c)).length;
}

/** @param {string} form */
export function cleanEdictForm(form) {
  return form.replace(/\{[^}]*\}/g, "").replace(/\([a-zA-Z0-9]+\)/g, "").trim();
}

/** 熟語は漢字のみ（々含む） */
function isKanjiJukugo(word) {
  if (hanCount(word) < 2) return false;
  return [...word].every((c) => HAN.test(c) || c === "々" || c === "〆");
}

/** 訓読み動詞: 表記のかな部分と読みが対応しているか */
function kunReadingPlausible(word, reading) {
  const m = word.match(/(\p{Script=Hiragana}+)$/u);
  if (!m) return true;
  return reading.endsWith(m[1]);
}

/** 漢字＋かな混じり（両利き・伝えるなど。末尾にかながあれば可） */
function isKanjiWithTrailingKana(word) {
  if (!/\p{Script=Hiragana}/u.test(word) || !/^\p{Script=Han}/u.test(word)) return false;
  return [...word].every((c) => HAN.test(c) || HIRA.test(c));
}

/** @param {string} word */
export function isCompoundCandidate(word) {
  if (isKanjiJukugo(word)) return true;
  if (isKanjiWithTrailingKana(word)) return true;
  return false;
}

/** @param {string} line */
function parseEdictLine(line) {
  if (!line || line.startsWith("#") || !line.includes("[")) return null;
  const bracket = line.indexOf("[");
  const left = line.slice(0, bracket).trim();
  const rest = line.slice(bracket + 1);
  const close = rest.indexOf("]");
  if (close < 0) return null;
  const readingPart = rest.slice(0, close);
  const defs = rest.slice(close + 1);
  const forms = left
    .split(";")
    .map((f) => f.trim())
    .filter((f) => f && HAN.test(f));
  const readings = readingPart
    .split(/[,;]\s*/)
    .map((r) => r.replace(/\([^)]*\)/g, "").trim())
    .filter(Boolean);
  if (!forms.length || !readings.length) return null;
  const common = defs.includes("(P)");
  return { forms, readings, common };
}

/** @param {string} targetKanji @param {string} word */
function scoreCompound(targetKanji, word, common) {
  if (!word.includes(targetKanji)) return -1;
  if (!isCompoundCandidate(word)) return -1;
  const h = hanCount(word);
  let score = 0;
  if (h === 2) score += 100;
  else if (h === 3) score += 85;
  else if (h === 4) score += 70;
  else if (h >= 5) score += 40;
  else score += 60; // 訓読み動詞（漢字1＋かな）
  if (word.length <= 4) score += 8;
  if (common) score += 25;
  return score;
}

/**
 * @param {string} gzPath
 * @returns {Promise<Record<string, { word: string; reading: string }[]>>}
 */
/**
 * @param {string} gzPath
 * @returns {Promise<{ index: Record<string, { word: string; reading: string }[]>; headwords: Set<string> }>}
 */
export async function buildCompoundIndexFromEdictGz(gzPath) {
  /** @type {Map<string, Map<string, { word: string; reading: string; score: number }>>} */
  const byKanji = new Map();
  /** @type {Set<string>} */
  const headwords = new Set();

  const proc = spawn("sh", [
    "-c",
    `zcat ${JSON.stringify(gzPath)} | iconv -f EUC-JP -t UTF-8//IGNORE`,
  ]);
  const rl = createInterface({ input: proc.stdout, crlfDelay: true });

  for await (const line of rl) {
    const parsed = parseEdictLine(line);
    if (!parsed) continue;
    const { forms, readings, common } = parsed;
    for (const rawForm of forms) {
      if (/\([a-zA-Z0-9]+\)/.test(rawForm) && /\(sK\)|\(iK\)|\(ik\)|\(sk\)/i.test(rawForm)) {
        continue;
      }
      const form = cleanEdictForm(rawForm);
      headwords.add(form);
      if (!common || !isCompoundCandidate(form)) continue;
      const reading = readings[0];
      if (!kunReadingPlausible(form, reading)) continue;
      const skPenalty = 0;
      const chars = [...new Set([...form].filter((c) => HAN.test(c)))];
      for (const ch of chars) {
        let bucket = byKanji.get(ch);
        if (!bucket) {
          bucket = new Map();
          byKanji.set(ch, bucket);
        }
        const score = scoreCompound(ch, form, common) - skPenalty;
        if (score < 0) continue;
        const key = `${form}\t${reading}`;
        const prev = bucket.get(key);
        if (!prev || score > prev.score) {
          bucket.set(key, { word: form, reading, score });
        }
      }
    }
  }

  await new Promise((resolve, reject) => {
    proc.on("error", reject);
    proc.on("close", (code) => (code === 0 ? resolve() : reject(new Error(`edict parse exit ${code}`))));
  });

  /** @param {{ word: string; reading: string; score: number }[]} items */
  function pickForKanji(items) {
    const jukugo = items.filter((i) => isKanjiJukugo(i.word)).sort((a, b) => b.score - a.score);
    const verbs = items
      .filter((i) => isKanjiWithTrailingKana(i.word) && hanCount(i.word) === 1)
      .sort((a, b) => b.score - a.score);
    const kanaCompounds = items
      .filter((i) => isKanjiWithTrailingKana(i.word) && hanCount(i.word) >= 2)
      .sort((a, b) => b.score - a.score);
    const out = [];
    const seen = new Set();
    const push = (x) => {
      if (seen.has(x.word) || out.length >= 6) return;
      seen.add(x.word);
      out.push(x);
    };
    for (const x of jukugo.slice(0, 2)) push(x);
    for (const x of verbs.slice(0, 2)) push(x);
    for (const x of kanaCompounds.slice(0, 1)) push(x);
    for (const x of jukugo.slice(2, 5)) push(x);
    return out.slice(0, 6).map(({ word, reading }) => ({ word, reading }));
  }

  /** @type {Record<string, { word: string; reading: string }[]>} */
  const index = {};
  for (const [ch, bucket] of byKanji) {
    index[ch] = pickForKanji([...bucket.values()]);
  }

  return { index, headwords };
}

/** @param {string} [path] */
export function loadEdictHeadwords(path = EDICT_HEADWORDS_PATH) {
  const arr = JSON.parse(readFileSync(path, "utf8"));
  return new Set(arr);
}

const KANJI_YOMI_TARGET_RE = /下線部「([^」]+)」/;

/** @param {string} prompt */
export function kanjiYomiTarget(prompt) {
  return KANJI_YOMI_TARGET_RE.exec(prompt)?.[1] ?? "";
}

/** @param {string} prompt @param {Set<string>} headwords */
export function assertKanjiYomiLemma(prompt, headwords) {
  const target = kanjiYomiTarget(prompt);
  if (!target || headwords.has(target)) return;
  throw new Error(`kanji-yomi: EDICT にない語「${target}」: ${prompt.slice(0, 60)}…`);
}
