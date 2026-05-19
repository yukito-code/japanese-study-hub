/**
 * data/source/jlpt-hand-questions.data.mjs から四択問題 JSON を生成する。
 */
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { handQuestions } from "../data/source/jlpt-hand-questions.data.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

/** @typedef {{ level: string; n: number; prompt: string; choices: string[]; correctIndex: number; explanation: string }} Q */

const LEVELS = ["N1", "N2", "N3", "N4", "N5"];

const CATEGORY_META = [
  { id: "kanji-yomi", sheet: "漢字読み" },
  { id: "bunmyaku", sheet: "文脈規定" },
  { id: "iikae", sheet: "言い換え" },
];

/** @param {string} id */
function bakeCategory(id) {
  const byLevel = handQuestions[id];
  if (!byLevel) throw new Error(`Missing category: ${id}`);

  /** @type {Q[]} */
  const questions = [];
  let n = 1;

  for (const level of LEVELS) {
    const arr = byLevel[level];
    if (!Array.isArray(arr) || arr.length !== 10) {
      throw new Error(`${id}/${level}: expected 10 questions, got ${arr?.length ?? 0}`);
    }
    for (const q of arr) {
      const { prompt, choices, correctIndex, explanation } = q;
      if (!prompt || !Array.isArray(choices) || choices.length !== 4) {
        throw new Error(`${id}/${level} #${n}: invalid question shape`);
      }
      if (!Number.isInteger(correctIndex) || correctIndex < 0 || correctIndex > 3) {
        throw new Error(`${id}/${level} #${n}: invalid correctIndex`);
      }
      questions.push({
        level,
        n: n++,
        prompt,
        choices,
        correctIndex,
        explanation: String(explanation ?? "").trim(),
      });
    }
  }

  if (questions.length !== 50) {
    throw new Error(`${id}: expected 50 questions, got ${questions.length}`);
  }
  return questions;
}

const categories = CATEGORY_META.map(({ id, sheet }) => ({
  id,
  sheet,
  questions: bakeCategory(id),
}));

const out = {
  version: 1,
  generatedFrom: "jlpt-hand-questions.data.mjs",
  categories,
};

const outPath = join(root, "src", "data", "jlpt-questions.json");
writeFileSync(outPath, JSON.stringify(out, null, 2), "utf8");
console.log("wrote", outPath, "categories:", categories.length);
