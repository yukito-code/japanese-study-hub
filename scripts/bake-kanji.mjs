/**
 * N5: 学習用メタ＋熟語 JSON → public/kanji/N5.json
 * N4–N2: jlpt 各級字表（級どうしで字が重ならないよう分割）+ EDICT 由来の熟語
 * N1: N2・N3 両方に載る字（パッケージに N1 字表なし）
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { COMPOUND_INDEX_PATH } from "./edict-compounds.mjs";
import { buildCompoundsForEntry, formatReadingDisplay } from "./kanji-readings.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const publicKanji = join(root, "public", "kanji");
const jlptSrc = join(root, "node_modules", "jlpt", "src");

const NOTE =
  "JLPT に公式の漢字表はありません。出典は学習用の目安です。N4〜N2 は npm jlpt パッケージ由来。";
const NOTE_N1 =
  "N1 字表は jlpt パッケージに N1 専用データがないため、N2・N3 字表の両方に載る字を掲載しています。N1〜N5 で同じ字は重複しません。";

if (!existsSync(COMPOUND_INDEX_PATH)) {
  console.error(
    "kanji-compound-index.json がありません。先に node scripts/build-kanji-compound-index.mjs を実行してください。",
  );
  process.exit(1);
}
const compoundIndex = JSON.parse(readFileSync(COMPOUND_INDEX_PATH, "utf8"));

let compoundsByChar = {};
try {
  compoundsByChar = JSON.parse(
    readFileSync(join(__dirname, "kanji-compounds-n5.json"), "utf8"),
  );
} catch (e) {
  console.warn("kanji-compounds-n5.json:", e?.message ?? e);
}

function normalizeCompound(c) {
  const word = c.word;
  const reading = c.reading;
  let glossJa = (c.glossJa || "").trim();
  const dup = `${word}（${reading}）`;
  if (glossJa === dup || glossJa === word) glossJa = "";
  return { word, reading, glossJa, glossEn: c.glossEn ?? c.glossJa ?? "" };
}

function compoundsFor(char, entry) {
  const manual = compoundsByChar[char];
  if (manual?.length) return manual.map(normalizeCompound);
  return buildCompoundsForEntry(entry, compoundIndex, compoundsByChar);
}

const rawN5 = JSON.parse(readFileSync(join(jlptSrc, "n5.json"), "utf8"));
const rawByCharN5 = Object.fromEntries(rawN5.map((e) => [e.kanji, e]));

/** @type {Record<string, { reading: string; meaning: string; meaningEn: string }>} */
const meta = {
  土: { reading: "つち", meaning: "土、土地", meaningEn: "earth, soil" },
  山: { reading: "やま", meaning: "山", meaningEn: "mountain" },
  先: { reading: "さき", meaning: "先、前、以前", meaningEn: "ahead, previous" },
  三: { reading: "さん", meaning: "三つの数", meaningEn: "three" },
  四: { reading: "よん、し", meaning: "四つの数", meaningEn: "four" },
  来: { reading: "くる", meaning: "来る", meaningEn: "to come" },
  語: { reading: "ご", meaning: "言葉、語", meaningEn: "word, language" },
  七: { reading: "なな、しち", meaning: "七つの数", meaningEn: "seven" },
  日: { reading: "ひ、にち", meaning: "日、太陽", meaningEn: "day, sun" },
  火: { reading: "か", meaning: "火", meaningEn: "fire" },
  下: { reading: "した", meaning: "下", meaningEn: "below, down" },
  話: { reading: "はなす", meaning: "話す、話", meaningEn: "to speak, talk" },
  学: { reading: "がく", meaning: "学ぶ、学問（学）", meaningEn: "study, learning" },
  八: { reading: "はち", meaning: "八つの数", meaningEn: "eight" },
  長: { reading: "ながい", meaning: "長い", meaningEn: "long, tall" },
  半: { reading: "はん", meaning: "半分", meaningEn: "half" },
  気: { reading: "き", meaning: "気、天気の気", meaningEn: "spirit, weather" },
  時: { reading: "とき", meaning: "時、時間", meaningEn: "time, hour" },
  今: { reading: "いま", meaning: "今", meaningEn: "now" },
  後: { reading: "うしろ、あと", meaning: "後ろ、あと", meaningEn: "back, after" },
  天: { reading: "てん", meaning: "天、空", meaningEn: "sky, heaven" },
  名: { reading: "な", meaning: "名前の名", meaningEn: "name" },
  校: { reading: "こう", meaning: "学校の校", meaningEn: "school (suffix)" },
  上: { reading: "うえ", meaning: "上", meaningEn: "above, up" },
  前: { reading: "まえ", meaning: "前", meaningEn: "front, before" },
  小: { reading: "ちいさい", meaning: "小さい", meaningEn: "small" },
  読: { reading: "よむ", meaning: "読む", meaningEn: "to read" },
  五: { reading: "ご", meaning: "五つの数", meaningEn: "five" },
  川: { reading: "かわ", meaning: "川", meaningEn: "river" },
  母: { reading: "はは", meaning: "母", meaningEn: "mother" },
  水: { reading: "みず", meaning: "水", meaningEn: "water" },
  金: { reading: "かね、きん", meaning: "金、金属、お金", meaningEn: "gold, money, metal" },
  休: { reading: "やすむ", meaning: "休む", meaningEn: "to rest" },
  年: { reading: "とし", meaning: "年", meaningEn: "year" },
  外: { reading: "そと", meaning: "外", meaningEn: "outside" },
  国: { reading: "くに", meaning: "国", meaningEn: "country" },
  友: { reading: "とも", meaning: "友（友だち）", meaningEn: "friend" },
  出: { reading: "でる", meaning: "出る", meaningEn: "to exit, go out" },
  毎: { reading: "まい", meaning: "毎〜", meaningEn: "every ~" },
  車: { reading: "くるま", meaning: "車", meaningEn: "car, vehicle" },
  午: { reading: "ご", meaning: "午（午前）", meaningEn: "noon (午前)" },
  聞: { reading: "きく", meaning: "聞く", meaningEn: "to hear, listen" },
  月: { reading: "つき、げつ", meaning: "月、つき", meaningEn: "moon, month" },
  書: { reading: "かく", meaning: "書く", meaningEn: "to write" },
  父: { reading: "ちち", meaning: "父", meaningEn: "father" },
  西: { reading: "にし", meaning: "西", meaningEn: "west" },
  高: { reading: "たかい", meaning: "高い", meaningEn: "high, tall" },
  本: { reading: "ほん", meaning: "本、〜さん", meaningEn: "book, counter (~)" },
  二: { reading: "に", meaning: "二つの数", meaningEn: "two" },
  何: { reading: "なん", meaning: "何", meaningEn: "what" },
  人: { reading: "ひと", meaning: "人", meaningEn: "person" },
  大: { reading: "おおきい", meaning: "大きい", meaningEn: "big" },
  雨: { reading: "あめ", meaning: "雨", meaningEn: "rain" },
  男: { reading: "おとこ", meaning: "男", meaningEn: "man" },
  行: { reading: "いく、こう", meaning: "行く", meaningEn: "to go" },
  間: { reading: "あいだ、かん", meaning: "あいだ、間", meaningEn: "interval, between" },
  六: { reading: "ろく", meaning: "六つの数", meaningEn: "six" },
  千: { reading: "せん", meaning: "千", meaningEn: "thousand" },
  中: { reading: "なか、ちゅう", meaning: "中、なか", meaningEn: "middle, inside" },
  生: { reading: "いきる、せい", meaning: "生きる、生まれる", meaningEn: "to live, be born" },
  百: { reading: "ひゃく", meaning: "百", meaningEn: "hundred" },
  円: { reading: "えん", meaning: "円、まるい", meaningEn: "yen, circle" },
  北: { reading: "きた", meaning: "北", meaningEn: "north" },
  十: { reading: "じゅう", meaning: "十の数", meaningEn: "ten" },
  子: { reading: "こ", meaning: "子ども", meaningEn: "child" },
  見: { reading: "みる", meaning: "見る", meaningEn: "to see" },
  電: { reading: "でん", meaning: "電気の電", meaningEn: "electricity" },
  右: { reading: "みぎ", meaning: "右", meaningEn: "right" },
  女: { reading: "おんな", meaning: "女", meaningEn: "woman" },
  一: { reading: "いち", meaning: "一つの数", meaningEn: "one" },
  左: { reading: "ひだり", meaning: "左", meaningEn: "left" },
  東: { reading: "ひがし", meaning: "東", meaningEn: "east" },
  万: { reading: "まん", meaning: "万", meaningEn: "ten thousand" },
  南: { reading: "みなみ", meaning: "南", meaningEn: "south" },
  木: { reading: "き", meaning: "木、樹木", meaningEn: "tree, wood" },
  九: { reading: "きゅう、く", meaning: "九つの数", meaningEn: "nine" },
  食: { reading: "たべる、しょく", meaning: "食べる", meaningEn: "to eat" },
  入: { reading: "はいる", meaning: "入る", meaningEn: "to enter" },
  白: { reading: "しろ、はく", meaning: "白、しろい", meaningEn: "white" },
};

const order = [
  "一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "百", "千", "万", "円",
  "日", "月", "火", "水", "木", "金", "土", "年", "時", "半", "午", "前", "後", "今",
  "先", "毎", "間", "人", "名", "男", "女", "子", "母", "父", "友", "生", "学", "大",
  "中", "小", "校", "外", "国", "語", "本", "何", "天", "気", "山", "川", "雨", "電",
  "上", "下", "左", "右", "中", "北", "南", "東", "西", "見", "聞", "食", "読", "書",
  "行", "来", "出", "入", "休", "車", "話", "白", "高", "長",
];

const fromPackage = new Set(rawN5.map((x) => x.kanji));
const missingMeta = [...fromPackage].filter((c) => !meta[c]);
if (missingMeta.length) {
  console.error("meta 未定義:", missingMeta);
  process.exit(1);
}

const seen = new Set();
const n5Items = [];
for (const char of order) {
  if (!fromPackage.has(char) || seen.has(char)) continue;
  seen.add(char);
  const m = meta[char];
  const raw = rawByCharN5[char];
  const reading =
    raw && (raw.kunyomi || raw.onyomi)
      ? formatReadingDisplay(raw)
      : m.reading;
  n5Items.push({
    char,
    reading,
    meaningJa: m.meaning,
    meaning: m.meaning,
    meaningEn: m.meaningEn,
    compounds: compoundsFor(char, raw ?? { kanji: char, kunyomi: m.reading }),
  });
}
for (const char of fromPackage) {
  if (seen.has(char)) continue;
  const m = meta[char];
  const raw = rawByCharN5[char];
  n5Items.push({
    char,
    reading: raw ? formatReadingDisplay(raw) : m.reading,
    meaningJa: m.meaning,
    meaning: m.meaning,
    meaningEn: m.meaningEn,
    compounds: compoundsFor(char, raw ?? { kanji: char }),
  });
}

const n5Out = {
  level: "N5",
  note: "JLPT に公式の漢字表はありません。出典は学習用の目安です。",
  items: n5Items,
};

writeFileSync(
  join(root, "src", "data", "n5-kanji.json"),
  JSON.stringify(n5Out, null, 2),
  "utf8",
);
console.log("wrote n5-kanji.json", n5Items.length, "items");

mkdirSync(publicKanji, { recursive: true });

/** @param {{ kanji: string; onyomi?: string; kunyomi?: string; meaning?: string }} entry */
function mapJlptEntry(entry) {
  const m = (entry.meaning || "").trim() || "—";
  const compounds = compoundsFor(entry.kanji, entry);
  return {
    char: entry.kanji,
    reading: formatReadingDisplay(entry),
    meaningJa: "",
    meaning: m,
    meaningEn: m,
    compounds,
  };
}

function writePublic(level, obj) {
  const path = join(publicKanji, `${level}.json`);
  writeFileSync(path, JSON.stringify(obj, null, 2), "utf8");
  console.log("wrote", path.replace(root + "/", ""), obj.items?.length ?? 0, "items");
}

writePublic("N5", { level: "N5", note: n5Out.note, items: n5Out.items });

const n2Arr = JSON.parse(readFileSync(join(jlptSrc, "n2.json"), "utf8"));
const n3Arr = JSON.parse(readFileSync(join(jlptSrc, "n3.json"), "utf8"));
const n2Chars = new Set(n2Arr.map((e) => e.kanji));
const n3Chars = new Set(n3Arr.map((e) => e.kanji));
const n3ByChar = Object.fromEntries(n3Arr.map((e) => [e.kanji, e]));
const n2ByChar = Object.fromEntries(n2Arr.map((e) => [e.kanji, e]));

const n4Arr = JSON.parse(readFileSync(join(jlptSrc, "n4.json"), "utf8"));
writePublic("N4", { level: "N4", note: NOTE, items: n4Arr.map(mapJlptEntry) });

const n3Items = n3Arr.filter((e) => !n2Chars.has(e.kanji)).map(mapJlptEntry);
writePublic("N3", { level: "N3", note: NOTE, items: n3Items });

const n2Items = n2Arr.filter((e) => !n3Chars.has(e.kanji)).map(mapJlptEntry);
writePublic("N2", { level: "N2", note: NOTE, items: n2Items });

const n1Kanji = [...n2Chars].filter((k) => n3Chars.has(k));
const n1Items = n1Kanji.map((k) => mapJlptEntry(n3ByChar[k] || n2ByChar[k]));
writePublic("N1", { level: "N1", note: NOTE_N1, items: n1Items });
