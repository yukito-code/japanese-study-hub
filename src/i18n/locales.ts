/** 対応言語（追加時はここと ui のオブジェクトを拡張） */
export const LOCALES = [
  { id: "ja", labelKey: "lang.ja", htmlLang: "ja" },
  { id: "en", labelKey: "lang.en", htmlLang: "en" },
  { id: "zh", labelKey: "lang.zh", htmlLang: "zh-Hans" },
] as const;

export type Locale = (typeof LOCALES)[number]["id"];

const LOCALE_SET = new Set<string>(LOCALES.map((l) => l.id));

export function isLocale(value: string | null | undefined): value is Locale {
  return value != null && LOCALE_SET.has(value);
}

export function htmlLangFor(locale: Locale): string {
  return LOCALES.find((l) => l.id === locale)?.htmlLang ?? locale;
}

/** 多言語フィールドから現在言語の文字列を選ぶ（欠けたら en → ja） */
export function pickLocaleField<T extends Partial<Record<Locale, string>> & { ja: string }>(
  fields: T,
  locale: Locale,
): string {
  if (locale === "ja") return fields.ja;
  const v = fields[locale];
  if (v) return v;
  return fields.en ?? fields.ja;
}
