import { getLocale } from "../i18n/client";
import { ui } from "../i18n/ui";
import type { KanjiItem } from "./kanji-item";
import { getStoredJlptLevel, JLPT_LEVEL_CHANGE } from "../i18n/level";

function readPayload(id: string): KanjiItem[] {
  const el = document.getElementById(id);
  const raw = el?.textContent?.trim();
  if (!raw) throw new Error(`Missing JSON payload #${id}`);
  return JSON.parse(raw);
}

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

type KanjiBundle = { level: string; items: KanjiItem[] };

/** 取得した配列でフラッシュを初期化（1 ページにつき 1 回呼ぶ） */
export function mountKanjiFlashWithItems(items: KanjiItem[]): void {
  const elEmpty = document.getElementById("flash-empty");
  const elStage = document.getElementById("flash-stage");
  const elNav = document.getElementById("flash-nav-row");
  if (!items.length) {
    elEmpty?.removeAttribute("hidden");
    elStage?.setAttribute("hidden", "");
    elNav?.setAttribute("hidden", "");
    return;
  }
  elEmpty?.setAttribute("hidden", "");
  elStage?.removeAttribute("hidden");
  elNav?.removeAttribute("hidden");

  let i = 0;
  let flipped = false;

  const elCard = document.getElementById("flash-card");
  const elFront = document.getElementById("flash-front-char");
  const elRead = document.getElementById("flash-back-reading");
  const elMean = document.getElementById("flash-back-meaning");
  const elProg = document.getElementById("flash-progress");
  const btnPrev = document.getElementById("flash-prev");
  const btnNext = document.getElementById("flash-next");
  const btnFlip = document.getElementById("flash-flip");

  function meaningFor(it: KanjiItem) {
    return getLocale() === "en" ? it.meaningEn : it.meaning;
  }

  function flipLabel(showBack: boolean) {
    const loc = getLocale();
    return showBack ? ui[loc]["flash.flipToFront"] : ui[loc]["flash.flipToBack"];
  }

  function cardAria() {
    const loc = getLocale();
    return ui[loc]["flash.cardAria"];
  }

  function paintContent() {
    const it = items[i];
    if (!elFront || !elRead || !elMean || !elProg || !elCard) return;
    elFront.textContent = it.char;
    elRead.textContent = it.reading;
    elMean.textContent = meaningFor(it);
    elProg.textContent = `${i + 1} / ${items.length}`;
    elCard.setAttribute("aria-label", cardAria());
    if (btnFlip) btnFlip.textContent = flipLabel(flipped);
    if (btnPrev) btnPrev.textContent = ui[getLocale()]["flash.prev"];
    if (btnNext) btnNext.textContent = ui[getLocale()]["flash.next"];
  }

  function render() {
    if (!elCard) return;
    flipped = false;
    elCard.classList.remove("is-flipped");
    paintContent();
  }

  function setFlipped(v: boolean) {
    flipped = v;
    if (!elCard) return;
    elCard.classList.toggle("is-flipped", flipped);
    if (btnFlip) btnFlip.textContent = flipLabel(flipped);
  }

  function go(delta: number) {
    i = (i + delta + items.length) % items.length;
    render();
  }

  render();

  elCard?.addEventListener("click", () => setFlipped(!flipped));
  elCard?.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setFlipped(!flipped);
    }
  });

  btnFlip?.addEventListener("click", () => setFlipped(!flipped));
  btnPrev?.addEventListener("click", () => go(-1));
  btnNext?.addEventListener("click", () => go(1));

  window.addEventListener("localechange", () => {
    paintContent();
    if (elCard) elCard.classList.toggle("is-flipped", flipped);
  });
}

export function mountKanjiFlash(payloadId = "kanji-flash-payload"): void {
  mountKanjiFlashWithItems(readPayload(payloadId));
}

export function mountKanjiFlashDynamic(configId: string): void {
  const { base } = readJsonConfig<{ base: string }>(configId);

  async function load() {
    const level = getStoredJlptLevel();
    const res = await fetch(kanjiDataUrl(base, level));
    if (!res.ok) return;
    const data = (await res.json()) as KanjiBundle;
    mountKanjiFlashWithItems(data.items ?? []);
  }

  void load();
  window.addEventListener(JLPT_LEVEL_CHANGE, () => {
    window.location.reload();
  });
}
