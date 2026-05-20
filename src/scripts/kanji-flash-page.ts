import { applyDataUi, getLocale } from "../i18n/client";
import { setStoredJlptLevel, type JlptLevelFilter } from "../i18n/level";
import { ui } from "../i18n/ui";
import { appendCompoundsBlock } from "./kanji-card-render";
import type { KanjiItem } from "./kanji-item";

function readJsonConfig<T>(id: string): T {
  const el = document.getElementById(id);
  const raw = el?.textContent?.trim();
  if (!raw) throw new Error(`Missing JSON config #${id}`);
  return JSON.parse(raw) as T;
}

function kanjiDataUrl(base: string, level: string): string {
  const b = base.endsWith("/") ? base : `${base}/`;
  return `${b}kanji/${level}.json`;
}

type KanjiBundle = { level: string; items: KanjiItem[]; note?: string };

/** 級固定の漢字フラッシュ（URL の級と localStorage を同期） */
export function mountKanjiFlashPage(configId: string): void {
  const elEmpty = document.getElementById("flash-empty");
  const elStage = document.getElementById("flash-stage");
  const elNav = document.getElementById("flash-nav-row");
  const elCard = document.getElementById("flash-card");
  const elFront = document.getElementById("flash-front-char");
  const elRead = document.getElementById("flash-back-reading");
  const elMean = document.getElementById("flash-back-meaning");
  const elComp = document.getElementById("flash-back-compounds");
  const elProg = document.getElementById("flash-progress");
  const btnPrev = document.getElementById("flash-prev");
  const btnNext = document.getElementById("flash-next");
  const btnFlip = document.getElementById("flash-flip");

  const { base, level } = readJsonConfig<{ base: string; level: string }>(configId);
  setStoredJlptLevel(level as JlptLevelFilter);

  let items: KanjiItem[] = [];
  let i = 0;
  let showBack = false;

  function loc() {
    return getLocale();
  }

  function flipLabel() {
    const L = loc();
    return showBack ? ui[L]["flash.flipToFront"] : ui[L]["flash.flipToBack"];
  }

  function paintFlipButton() {
    if (btnFlip) btnFlip.textContent = flipLabel();
  }

  function paintCompounds(item: KanjiItem) {
    if (!elComp) return;
    elComp.replaceChildren();
    const list = item.compounds ?? [];
    if (!list.length) {
      elComp.hidden = true;
      return;
    }
    elComp.hidden = false;
    appendCompoundsBlock(elComp, list);
  }

  function paint() {
    const item = items[i];
    if (!item || !elFront || !elRead || !elMean || !elProg) return;
    elFront.textContent = item.char;
    elRead.textContent = item.reading;
    const ja = (item.meaningJa || item.meaning || "").trim();
    const en = (item.meaningEn || item.meaning || "").trim();
    elMean.className = "js-meaning";
    elMean.setAttribute("data-meaning-ja", ja || en);
    elMean.setAttribute("data-meaning-en", en || ja);
    elMean.setAttribute("data-meaning-zh", ja || en);
    elMean.textContent = loc() === "en" ? en || ja : ja || en;
    paintCompounds(item);
    elProg.textContent = `${i + 1} / ${items.length}`;
    if (elCard) elCard.classList.toggle("is-flipped", showBack);
    paintFlipButton();
    if (btnPrev) btnPrev.disabled = i <= 0;
    if (btnNext) btnNext.disabled = i >= items.length - 1;
    applyDataUi();
  }

  async function load() {
    const res = await fetch(kanjiDataUrl(base, level));
    if (!res.ok) return;
    const data = (await res.json()) as KanjiBundle;
    items = data.items ?? [];
    if (!items.length) {
      if (elEmpty) elEmpty.hidden = false;
      if (elStage) elStage.hidden = true;
      if (elNav) elNav.hidden = true;
      if (elProg) elProg.textContent = "—";
      applyDataUi();
      return;
    }
    if (elEmpty) elEmpty.hidden = true;
    if (elStage) elStage.hidden = false;
    if (elNav) elNav.hidden = false;
    i = 0;
    showBack = false;
    paint();
  }

  btnFlip?.addEventListener("click", (e) => {
    e.stopPropagation();
    showBack = !showBack;
    paint();
  });

  elCard?.addEventListener("click", () => {
    showBack = !showBack;
    paint();
  });

  elCard?.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      showBack = !showBack;
      paint();
    }
  });

  btnPrev?.addEventListener("click", () => {
    if (i <= 0) return;
    i--;
    showBack = false;
    paint();
  });

  btnNext?.addEventListener("click", () => {
    if (i >= items.length - 1) return;
    i++;
    showBack = false;
    paint();
  });

  window.addEventListener("localechange", () => {
    paintFlipButton();
    paint();
  });

  void load();
}
