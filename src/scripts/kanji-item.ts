/** N5 漢字データ（一覧・フラッシュで共有） */
export type KanjiCompound = {
  word: string;
  reading: string;
  glossJa: string;
  glossEn: string;
};

export type KanjiItem = {
  char: string;
  reading: string;
  /** 日本語の意味（N5 など）。未設定時は meaningEn を表示 */
  meaningJa?: string;
  meaning: string;
  meaningEn: string;
  /** その字を含む熟語の例（N5 は bake で付与、他級は空配列のことが多い） */
  compounds?: KanjiCompound[];
};
