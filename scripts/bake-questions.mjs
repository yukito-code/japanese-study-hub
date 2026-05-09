/**
 * data/source の Excel から四択問題 JSON を生成する。
 */
import XLSX from "xlsx";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const xlsxPath = join(
  root,
  "data",
  "source",
  "JLPT_N1-N5_questions_kanji_context_paraphrase.xlsx",
);

/** @typedef {{ level: string; n: number; prompt: string; choices: string[]; correctIndex: number; explanation: string }} Q */

const SHEETS = [
  { sheet: "漢字読み", id: "kanji-yomi" },
  { sheet: "文脈規定", id: "bunmyaku" },
  { sheet: "言い換え", id: "iikae" },
];

function rowToQuestion(row) {
  const level = String(row["レベル"] ?? "").trim();
  const n = Number(row["問題番号"]);
  const prompt = String(row["問題文"] ?? "").trim();
  const choices = [1, 2, 3, 4].map((i) => String(row[`選択肢${i}`] ?? "").trim());
  const ans = Number(row["正答"]);
  const explanation = String(row["解説"] ?? "").trim();

  if (!["N1", "N2", "N3", "N4", "N5"].includes(level)) {
    throw new Error(`Unknown level: ${level}`);
  }
  if (!Number.isInteger(ans) || ans < 1 || ans > 4) {
    throw new Error(`Invalid 正答 for ${level} #${n}: ${ans}`);
  }
  if (choices.some((c) => !c)) {
    throw new Error(`Empty choice ${level} #${n}`);
  }

  return {
    level,
    n,
    prompt,
    choices,
    correctIndex: ans - 1,
    explanation,
  };
}

const wb = XLSX.readFile(xlsxPath);
const categories = [];

for (const { sheet, id } of SHEETS) {
  if (!wb.SheetNames.includes(sheet)) {
    console.error("Missing sheet:", sheet);
    process.exit(1);
  }
  const rows = XLSX.utils.sheet_to_json(wb.Sheets[sheet], { defval: "" });
  /** @type {Q[]} */
  const questions = rows.map(rowToQuestion);
  if (questions.length !== 50) {
    console.error(id, "expected 50 questions, got", questions.length);
    process.exit(1);
  }
  categories.push({ id, sheet, questions });
}

const out = {
  version: 1,
  generatedFrom: "JLPT_N1-N5_questions_kanji_context_paraphrase.xlsx",
  categories,
};

const outPath = join(root, "src", "data", "jlpt-questions.json");
writeFileSync(outPath, JSON.stringify(out, null, 2), "utf8");
console.log("wrote", outPath, "categories:", categories.length);
