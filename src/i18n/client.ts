import { htmlLangFor, isLocale, LOCALES, type Locale } from "./locales";
import {
  LOCALE_STORAGE_KEY,
  type UiKey,
  ui,
} from "./ui";

export function getLocale(): Locale {
  if (typeof window === "undefined") return "ja";
  const v = localStorage.getItem(LOCALE_STORAGE_KEY);
  return isLocale(v) ? v : "ja";
}

export function setLocale(locale: Locale): void {
  localStorage.setItem(LOCALE_STORAGE_KEY, locale);
}

function applyMetaAndTitle(locale: Locale): void {
  const titleKey = document.body?.getAttribute("data-title-key") as UiKey | null;
  if (titleKey && ui[locale][titleKey]) {
    let title = ui[locale][titleKey];
    title = title.replace(/\|\s*日本語学習ハブ\s*$/, "| Japanese Study Hub");
    document.title = title;
  }
  const metaKey = document
    .querySelector('meta[name="description"][data-desc-key]')
    ?.getAttribute("data-desc-key") as UiKey | null;
  if (metaKey && ui[locale][metaKey]) {
    const m = document.querySelector(`meta[name="description"][data-desc-key="${metaKey}"]`);
    if (m) m.setAttribute("content", ui[locale][metaKey]);
  }
}

/** [data-ui="key"] の text を現在言語に合わせる */
export function applyDataUi(): void {
  const locale = getLocale();
  document.documentElement.lang = htmlLangFor(locale);
  document.documentElement.dataset.locale = locale;

  for (const el of document.querySelectorAll("[data-ui]")) {
    const key = el.getAttribute("data-ui") as UiKey | null;
    if (!key) continue;
    const val = ui[locale][key];
    if (val !== undefined) el.textContent = val;
  }

  for (const el of document.querySelectorAll("[data-ui-html]")) {
    const key = el.getAttribute("data-ui-html") as UiKey | null;
    if (!key) continue;
    const val = ui[locale][key];
    if (val !== undefined) el.innerHTML = val;
  }

  for (const el of document.querySelectorAll(".js-meaning")) {
    const ja = el.getAttribute("data-meaning-ja");
    const en = el.getAttribute("data-meaning-en");
    const zh = el.getAttribute("data-meaning-zh");
    if (locale === "zh" && zh) el.textContent = zh;
    else if (locale === "en" && en) el.textContent = en;
    else if (ja) el.textContent = ja;
  }

  for (const el of document.querySelectorAll("[data-aria-label-ui]")) {
    const key = el.getAttribute("data-aria-label-ui") as UiKey | null;
    if (!key) continue;
    const val = ui[locale][key];
    if (val !== undefined) el.setAttribute("aria-label", val);
  }

  applyMetaAndTitle(locale);

  const langSelect = document.getElementById("site-lang-select") as HTMLSelectElement | null;
  if (langSelect) langSelect.value = locale;
}

function bindLanguageSwitch(): void {
  const langSelect = document.getElementById("site-lang-select") as HTMLSelectElement | null;
  langSelect?.addEventListener("change", () => {
    const lang = langSelect.value;
    if (!isLocale(lang)) return;
    setLocale(lang);
    applyDataUi();
  });
}

export function initI18n(): void {
  bindLanguageSwitch();
  applyDataUi();
}

/** ヘッダー用：言語選択の option 一覧（Astro から利用可） */
export { LOCALES };
