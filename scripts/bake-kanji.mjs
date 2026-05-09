/**
 * N5: 従来どおり学習用メタ付き JSON（src/data/n5-kanji.json）＋ public/kanji/N5.json
 * N4–N2: jlpt パッケージの英語意味ベースで public/kanji/N*.json
 * N1: データなし（空配列、後から差し替え可能）
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const publicKanji = join(root, "public", "kanji");

const NOTE =
  "JLPT に公式の漢字表はありません。出典は学習用の目安です。N4〜N2 は npm jlpt パッケージ由来（意味は英語表記を流用）。";

const rawN5 = JSON.parse(
  readFileSync(join(root, "node_modules", "jlpt", "src", "n5.json"), "utf8"),
);

/** @type {Record<string, { reading: string; meaning: string; meaningEn: string }>} */
const meta = {
  土: { reading: "つち", meaning: "土、土地", meaningEn: "earth, soil" },
  山: { reading: "やま", meaning: "山", meaningEn: "mountain" },
  先: { reading: "さき", meaning: "先、前、以前", meaningEn: "ahead, previous" },
  三: { reading: "さん", meaning: "三つの数", meaningEn: "three" },
  四: { reading: "よん", meaning: "四つの数", meaningEn: "four" },
  来: { reading: "くる", meaning: "来る", meaningEn: "to come" },
  語: { reading: "ご", meaning: "言葉、語", meaningEn: "word, language" },
  七: { reading: "なな", meaning: "七つの数", meaningEn: "seven" },
  日: { reading: "ひ", meaning: "日、太陽", meaningEn: "day, sun" },
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
  後: { reading: "うしろ", meaning: "後ろ、あと", meaningEn: "back, after" },
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
  金: { reading: "かね", meaning: "金、金属、お金", meaningEn: "gold, money, metal" },
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
  月: { reading: "つき", meaning: "月、つき", meaningEn: "moon, month" },
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
  行: { reading: "いく", meaning: "行く", meaningEn: "to go" },
  間: { reading: "あいだ", meaning: "あいだ、間", meaningEn: "interval, between" },
  六: { reading: "ろく", meaning: "六つの数", meaningEn: "six" },
  千: { reading: "せん", meaning: "千", meaningEn: "thousand" },
  中: { reading: "なか", meaning: "中、なか", meaningEn: "middle, inside" },
  生: { reading: "いきる", meaning: "生きる、生まれる", meaningEn: "to live, be born" },
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
  九: { reading: "きゅう", meaning: "九つの数", meaningEn: "nine" },
  食: { reading: "たべる", meaning: "食べる", meaningEn: "to eat" },
  入: { reading: "はいる", meaning: "入る", meaningEn: "to enter" },
  白: { reading: "しろ", meaning: "白、しろい", meaningEn: "white" },
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
  n5Items.push({ char, reading: m.reading, meaning: m.meaning, meaningEn: m.meaningEn });
}
for (const char of fromPackage) {
  if (seen.has(char)) continue;
  const m = meta[char];
  n5Items.push({ char, reading: m.reading, meaning: m.meaning, meaningEn: m.meaningEn });
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

function pickReading(entry) {
  const ku = (entry.kunyomi || "").replace(/^[\s・･]+/, "").trim();
  if (ku) {
    const raw = ku.split(/[・･]/)[0].replace(/\./g, "").trim();
    if (raw) return raw;
  }
  const on = (entry.onyomi || "").trim();
  if (on) {
    const raw = on.split(/[\s・･]/)[0].replace(/\./g, "").trim();
    if (raw) return raw;
  }
  return "—";
}

/** @param {{ kanji: string; onyomi?: string; kunyomi?: string; meaning?: string }} entry */
function mapJlptEntry(entry) {
  const m = (entry.meaning || "").trim() || "—";
  return {
    char: entry.kanji,
    reading: pickReading(entry),
    meaning: m,
    meaningEn: m,
  };
}

function writePublic(level, obj) {
  const path = join(publicKanji, `${level}.json`);
  writeFileSync(path, JSON.stringify(obj, null, 2), "utf8");
  console.log("wrote", path.replace(root + "/", ""), obj.items?.length ?? 0, "items");
}

writePublic("N5", { level: "N5", note: n5Out.note, items: n5Out.items });

for (const [file, level] of [
  ["n4.json", "N4"],
  ["n3.json", "N3"],
  ["n2.json", "N2"],
]) {
  const arr = JSON.parse(
    readFileSync(join(root, "node_modules", "jlpt", "src", file), "utf8"),
  );
  const items = arr.map(mapJlptEntry);
  writePublic(level, { level, note: NOTE, items });
}

writePublic("N1", {
  level: "N1",
  note: "N1 漢字データは未収録です（空リスト）。今後追加予定です。",
  items: [],
});
