import { applyDataUi } from "../i18n/client";
import { getStoredJlptLevel, JLPT_LEVEL_CHANGE } from "../i18n/level";
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

export function mountKanjiListPage(configId: string): void {
  const root = document.getElementById("kanji-list-root");
  const countEl = document.getElementById("kanji-list-count");
  if (!root) return;

  const { base } = readJsonConfig<{ base: string }>(configId);

  async function load() {
    const level = getStoredJlptLevel();
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
      const row = document.createElement("div");
      row.className = "kanji-row";
      row.setAttribute("role", "group");
      row.setAttribute("aria-label", `${item.char} ${item.reading}`);
      const ch = document.createElement("span");
      ch.className = "kanji-char";
      ch.textContent = item.char;
      const meta = document.createElement("span");
      meta.className = "kanji-meta";
      meta.appendChild(document.createTextNode(item.reading));
      const br = document.createElement("br");
      meta.appendChild(br);
      const mean = document.createElement("span");
      mean.className = "js-meaning";
      mean.style.fontSize = "0.82rem";
      mean.setAttribute("data-meaning-ja", item.meaning);
      mean.setAttribute("data-meaning-en", item.meaningEn);
      mean.textContent = item.meaning;
      meta.appendChild(mean);
      row.append(ch, meta);
      li.appendChild(row);
      ul.appendChild(li);
    }
    root.appendChild(ul);
    applyDataUi();
  }

  void load();
  window.addEventListener(JLPT_LEVEL_CHANGE, () => {
    window.location.reload();
  });
}
