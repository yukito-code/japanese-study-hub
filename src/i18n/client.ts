import {
  LOCALE_STORAGE_KEY,
  type Locale,
  type UiKey,
  ui,
} from "./ui";

export function getLocale(): Locale {
  if (typeof window === "undefined") return "ja";
  const v = localStorage.getItem(LOCALE_STORAGE_KEY);
  return v === "en" ? "en" : "ja";
}

export function setLocale(locale: Locale): void {
  localStorage.setItem(LOCALE_STORAGE_KEY, locale);
}

function applyMetaAndTitle(locale: Locale): void {
  const titleKey = document.body?.getAttribute("data-title-key") as UiKey | null;
  if (titleKey && ui[locale][titleKey]) {
    document.title = ui[locale][titleKey];
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
  document.documentElement.lang = locale === "en" ? "en" : "ja";
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
    if (locale === "en" && en) el.textContent = en;
    else if (ja) el.textContent = ja;
  }

  for (const el of document.querySelectorAll("[data-aria-label-ui]")) {
    const key = el.getAttribute("data-aria-label-ui") as UiKey | null;
    if (!key) continue;
    const val = ui[locale][key];
    if (val !== undefined) el.setAttribute("aria-label", val);
  }

  applyMetaAndTitle(locale);

  for (const btn of document.querySelectorAll("[data-set-lang]")) {
    const lang = btn.getAttribute("data-set-lang") as Locale | null;
    if (!lang) continue;
    btn.setAttribute("aria-pressed", locale === lang ? "true" : "false");
  }

  window.dispatchEvent(new CustomEvent("localechange", { detail: { locale } }));
}

function bindLanguageSwitch(): void {
  for (const btn of document.querySelectorAll("[data-set-lang]")) {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-set-lang") as Locale | null;
      if (lang !== "ja" && lang !== "en") return;
      setLocale(lang);
      applyDataUi();
    });
  }
}

export function initI18n(): void {
  bindLanguageSwitch();
  applyDataUi();
}
