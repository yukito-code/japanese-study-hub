import { getLocale } from "../i18n/client";
import { ui, fillTemplate } from "../i18n/ui";
import {
  getStoredJlptLevel,
  JLPT_LEVEL_CHANGE,
  type JlptLevelFilter,
} from "../i18n/level";

export type GoiQuestion = {
  level: string;
  n: number;
  prompt: string;
  choices: string[];
  correctIndex: number;
  explanation: string;
};

export type GoiCategory = {
  id: string;
  sheet: string;
  questions: GoiQuestion[];
};

function readPayload(id: string): GoiCategory {
  const el = document.getElementById(id);
  const raw = el?.textContent?.trim();
  if (!raw) throw new Error(`Missing JSON payload #${id}`);
  return JSON.parse(raw);
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let j = a.length - 1; j > 0; j--) {
    const k = Math.floor(Math.random() * (j + 1));
    [a[j], a[k]] = [a[k], a[j]];
  }
  return a;
}

/** N1–N5 語彙四択（漢字読み・文脈規定・言い換え）。レベルはメニューバーの LevelBar と同期 */
export function mountGoiQuiz(payloadId = "goi-quiz-payload"): void {
  const cat = readPayload(payloadId);
  const all = cat.questions;

  let levelFilter: JlptLevelFilter = getStoredJlptLevel();
  let order: number[] = [];
  let pool: GoiQuestion[] = [];
  let qi = 0;
  let locked = false;
  let lastOk: boolean | null = null;

  const elPrompt = document.getElementById("goi-prompt");
  const elProg = document.getElementById("goi-progress");
  const elOpts = document.getElementById("goi-options");
  const elFb = document.getElementById("goi-feedback");
  const elFbHead = document.getElementById("goi-feedback-head");
  const elFbCorrect = document.getElementById("goi-correct-line");
  const elFbExpl = document.getElementById("goi-explain-body");
  const btnNext = document.getElementById("goi-next");

  function loc() {
    return getLocale();
  }

  function filteredPool() {
    return all.filter((q) => q.level === levelFilter);
  }

  function newRound() {
    pool = filteredPool();
    order = shuffle(pool.map((_, i) => i));
    qi = 0;
  }

  function progressText() {
    const L = loc();
    return fillTemplate(ui[L]["goi.progress"], {
      n: qi + 1,
      total: Math.max(order.length, 1),
    });
  }

  function showQuestion() {
    locked = false;
    lastOk = null;
    if (btnNext) btnNext.disabled = true;
    if (elFb) elFb.hidden = true;
    if (!pool.length) {
      if (elPrompt) elPrompt.textContent = "—";
      if (elProg) elProg.textContent = "";
      elOpts?.replaceChildren();
      return;
    }
    const q = pool[order[qi]];
    if (!elPrompt || !elProg || !elOpts) return;
    elPrompt.textContent = q.prompt;
    elProg.textContent = progressText();
    elOpts.replaceChildren();
    q.choices.forEach((text, idx) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "quiz-option";
      b.textContent = text;
      b.dataset.choiceIndex = String(idx);
      b.addEventListener("click", () => onPick(b, q));
      elOpts.appendChild(b);
    });
  }

  function onPick(btn: HTMLButtonElement, q: GoiQuestion) {
    if (locked || !pool.length) return;
    const idx = Number(btn.dataset.choiceIndex);
    locked = true;
    const ok = idx === q.correctIndex;
    lastOk = ok;
    const L = loc();
    const correctText = q.choices[q.correctIndex];
    const buttons = elOpts?.querySelectorAll("button");
    buttons?.forEach((node) => {
      const b = node as HTMLButtonElement;
      b.disabled = true;
      const bi = Number(b.dataset.choiceIndex);
      if (bi === q.correctIndex) b.classList.add("is-correct");
      else if (b === btn && !ok) b.classList.add("is-wrong");
    });
    if (elFb && elFbHead && elFbCorrect && elFbExpl) {
      elFb.hidden = false;
      elFbHead.textContent = ok ? ui[L]["goi.feedback.ok"] : ui[L]["goi.feedback.ng"];
      elFbCorrect.textContent = fillTemplate(ui[L]["goi.correctChoice"], {
        choice: correctText,
      });
      elFbExpl.textContent = q.explanation;
    }
    if (btnNext) btnNext.disabled = false;
  }

  function paintFeedbackLocale() {
    if (!elFb || elFb.hidden || lastOk === null || !pool.length) return;
    const q = pool[order[qi]];
    const L = loc();
    const correctText = q.choices[q.correctIndex];
    if (elFbHead)
      elFbHead.textContent = lastOk ? ui[L]["goi.feedback.ok"] : ui[L]["goi.feedback.ng"];
    if (elFbCorrect)
      elFbCorrect.textContent = fillTemplate(ui[L]["goi.correctChoice"], { choice: correctText });
  }

  function onLevelChange() {
    levelFilter = getStoredJlptLevel();
    newRound();
    showQuestion();
  }

  btnNext?.addEventListener("click", () => {
    qi++;
    if (qi >= order.length) {
      newRound();
    }
    showQuestion();
  });

  window.addEventListener(JLPT_LEVEL_CHANGE, onLevelChange);

  newRound();
  showQuestion();

  window.addEventListener("localechange", () => {
    if (elProg) elProg.textContent = progressText();
    paintFeedbackLocale();
  });
}
