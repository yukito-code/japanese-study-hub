import { applyDataUi } from "../i18n/client";
import {
  getStoredJlptLevel,
  JLPT_LEVEL_CHANGE,
  setStoredJlptLevel,
  type JlptLevelFilter,
} from "../i18n/level";
import { buildKanjiListRow } from "./kanji-card-render";
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

/** 級固定の漢字一覧（learn/kanji/[level]/） */
export function mountKanjiListPage(configId: string): void {
  const root = document.getElementById("kanji-list-root");
  const countEl = document.getElementById("kanji-list-count");
  if (!root) return;

  const cfg = readJsonConfig<{ base: string; level?: JlptLevelFilter }>(configId);
  const { base } = cfg;
  const fixedLevel = cfg.level;

  if (fixedLevel) setStoredJlptLevel(fixedLevel);

  async function load() {
    const level = fixedLevel ?? getStoredJlptLevel();
    const res = await fetch(kanjiDataUrl(base, level));
    root.replaceChildren();
    if (!res.ok) return;
    const data = (await res.json()) as KanjiBundle;
    const items = data.items ?? [];
    if (countEl) countEl.textContent = String(items.length);

    if (!items.length) {
      const p = document.createElement("p");
      p.className = "hero-lead";
      p.dataset.ui = "kanji.emptyLevel";
      root.appendChild(p);
      applyDataUi();
      return;
    }

    const ul = document.createElement("ul");
    ul.className = "kanji-list";
    ul.style.marginTop = "1.25rem";
    for (const item of items) {
      const li = document.createElement("li");
      li.appendChild(buildKanjiListRow(item));
      ul.appendChild(li);
    }
    root.appendChild(ul);
    applyDataUi();
  }

  void load();
  if (!fixedLevel) {
    window.addEventListener(JLPT_LEVEL_CHANGE, () => {
      window.location.reload();
    });
  }
}
