/**
 * jlpt パッケージの onyomi / kunyomi を学習用表示に整形
 * 例: つと・める → つと (める)、ム → む
 */

/** カタカナ → ひらがな（音読み表示用） */
export function katakanaToHiragana(s) {
  return s.replace(/[\u30a1-\u30f6]/g, (ch) =>
    String.fromCharCode(ch.charCodeAt(0) - 0x60),
  );
}

/** jlpt の訓読み文字列を塊に分割（つた・う、つた・える → 2塊） */
export function splitKunyomiChunks(kunyomi) {
  const raw = (kunyomi || "").replace(/^[\s・･]+/, "").trim();
  if (!raw) return [];
  return raw
    .split(/[\s、,，]+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

/** 訓読み1塊: つと・める → つと (める) */
export function formatKunChunk(chunk) {
  const t = chunk.trim();
  if (!t) return "";
  const bits = t.split(/[・･]/).map((b) => b.replace(/\./g, "").trim()).filter(Boolean);
  if (bits.length >= 2) {
    return `${bits[0]} (${bits.slice(1).join("")})`;
  }
  return bits[0] ?? t;
}

/** @param {string} [kunyomi] */
export function formatKunyomiParts(kunyomi) {
  return splitKunyomiChunks(kunyomi).map(formatKunChunk).filter(Boolean);
}

/** @param {string} [onyomi] */
export function formatOnyomiParts(onyomi) {
  const raw = (onyomi || "").trim();
  if (!raw) return [];
  return raw
    .split(/[・･\s,、/／]+/)
    .map((p) => katakanaToHiragana(p.replace(/\./g, "").trim()))
    .filter(Boolean);
}

/** @param {{ kunyomi?: string; onyomi?: string }} entry */
export function formatReadingDisplay(entry) {
  const parts = [...formatKunyomiParts(entry.kunyomi), ...formatOnyomiParts(entry.onyomi)];
  return parts.length ? parts.join("、") : "—";
}

/** 一覧用の短い代表読み（先頭の訓 or 音） */
export function pickPrimaryReading(entry) {
  const ku = formatKunyomiParts(entry.kunyomi);
  if (ku.length) return ku[0].replace(/\s*\([^)]*\)/, "").trim();
  const on = formatOnyomiParts(entry.onyomi);
  if (on.length) return on[0];
  return "—";
}

/**
 * @param {{ kanji: string; meaning?: string }} entry
 * @param {Record<string, { word: string; reading: string }[]>} compoundIndex
 * @param {Record<string, { word: string; reading: string; glossJa?: string; glossEn?: string }[]>} [overrides]
 */
export function buildCompoundsForEntry(entry, compoundIndex, overrides = {}) {
  const glossEn = (entry.meaning || "").trim() || "—";
  const custom = overrides[entry.kanji];
  const source = custom?.length ? custom : compoundIndex?.[entry.kanji] || [];
  return source.slice(0, 4).map((c) => ({
    word: c.word,
    reading: c.reading,
    glossJa: "",
    glossEn: c.glossEn || glossEn,
  }));
}
