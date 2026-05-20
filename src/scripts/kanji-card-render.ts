import { getLocale } from "../i18n/client";
import { ui } from "../i18n/ui";
import type { KanjiCompound, KanjiItem } from "./kanji-item";

function meaningForLocale(item: KanjiItem): string {
  const L = getLocale();
  const ja = (item.meaningJa || item.meaning || "").trim();
  const en = (item.meaningEn || item.meaning || "").trim();
  if (L === "en") return en || ja;
  if (L === "zh") return ja || en;
  return ja || en;
}

function appendField(
  parent: HTMLElement,
  labelKey: "kanji.label.reading" | "kanji.label.meaning",
  value: string,
  opts?: { lang?: string; meaningClass?: boolean },
): void {
  const row = document.createElement("p");
  row.className = "kanji-field";
  const label = document.createElement("span");
  label.className = "kanji-field-label";
  label.dataset.ui = labelKey;
  const val = document.createElement("span");
  val.className = opts?.meaningClass ? "kanji-field-value js-meaning" : "kanji-field-value";
  if (opts?.lang) val.lang = opts.lang;
  if (opts?.meaningClass) {
    val.setAttribute("data-meaning-ja", value);
    val.setAttribute("data-meaning-en", value);
    val.setAttribute("data-meaning-zh", value);
  }
  val.textContent = value;
  row.append(label, val);
  parent.appendChild(row);
}

/** 熟語ブロック（語（読み）のみ） */
export function appendCompoundsBlock(parent: HTMLElement, compounds: KanjiCompound[] | undefined): void {
  if (!compounds?.length) return;
  const wrap = document.createElement("div");
  wrap.className = "kanji-compounds";
  const title = document.createElement("p");
  title.className = "kanji-compounds-title";
  title.dataset.ui = "kanji.compounds.title";
  wrap.appendChild(title);
  const ul = document.createElement("ul");
  ul.className = "kanji-compounds-list";
  for (const c of compounds) {
    const li = document.createElement("li");
    li.className = "kanji-compound-line";
    const w = document.createElement("span");
    w.className = "kanji-compound-word";
    w.lang = "ja";
    w.textContent = c.word;
    const r = document.createElement("span");
    r.className = "kanji-compound-reading";
    r.lang = "ja";
    r.textContent = `（${c.reading}）`;
    li.append(w, r);
    ul.appendChild(li);
  }
  wrap.appendChild(ul);
  parent.appendChild(wrap);
}

/** 一覧カードの本文（読み・意味・熟語） */
export function buildKanjiCardBody(item: KanjiItem): HTMLElement {
  const body = document.createElement("div");
  body.className = "kanji-body";
  appendField(body, "kanji.label.reading", item.reading, { lang: "ja" });
  const mean = meaningForLocale(item);
  if (mean) {
    const ja = (item.meaningJa || item.meaning || "").trim();
    const en = (item.meaningEn || item.meaning || "").trim();
    const row = document.createElement("p");
    row.className = "kanji-field";
    const label = document.createElement("span");
    label.className = "kanji-field-label";
    label.dataset.ui = "kanji.label.meaning";
    const val = document.createElement("span");
    val.className = "kanji-field-value js-meaning";
    val.setAttribute("data-meaning-ja", ja || en);
    val.setAttribute("data-meaning-en", en || ja);
    val.setAttribute("data-meaning-zh", ja || en);
    val.textContent = mean;
    row.append(label, val);
    body.appendChild(row);
  }
  appendCompoundsBlock(body, item.compounds);
  return body;
}

/** 一覧用の1行カード */
export function buildKanjiListRow(item: KanjiItem): HTMLElement {
  const row = document.createElement("div");
  row.className = "kanji-row";
  row.setAttribute("role", "group");
  row.setAttribute("aria-label", `${item.char} ${item.reading}`);
  const ch = document.createElement("span");
  ch.className = "kanji-char";
  ch.textContent = item.char;
  row.append(ch, buildKanjiCardBody(item));
  return row;
}
