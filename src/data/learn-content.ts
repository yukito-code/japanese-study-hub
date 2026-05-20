/** 学習記事（表・段落）の共通型 */

export type LearnBlock =
  | { kind: "p"; text: string }
  | { kind: "table"; header: string[]; rows: string[][] };

export type LearnSectionLocale = {
  title: string;
  blocks: LearnBlock[];
};

export type LearnSection = {
  ja: LearnSectionLocale;
  en: LearnSectionLocale;
  zh: LearnSectionLocale;
};

export type LearnIntro = { ja: string; en: string; zh: string };
