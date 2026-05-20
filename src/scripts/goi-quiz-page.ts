import { getLocale } from "../i18n/client";
import { isGoiLevelReleased } from "../i18n/goi-levels";
import { ui, fillTemplate } from "../i18n/ui";
import {
  applyJlptLevelFromSearchParams,
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

function levelFromUrl(): JlptLevelFilter | null {
  const raw = new URLSearchParams(window.location.search).get("lv");
  if (raw === "N1" || raw === "N2" || raw === "N3" || raw === "N4" || raw === "N5") {
    return raw;
  }
  return null;
}

/** 下線部「…」マーカーを画面上の下線表示に置き換える（「下線部「」」の文字列は出さない） */
function renderGoiPrompt(el: HTMLElement, prompt: string): void {
  el.replaceChildren();
  const m = /下線部「([^」]+)」/.exec(prompt);
  if (!m) {
    el.textContent = prompt;
    return;
  }
  const target = m[1] ?? "";
  const before = prompt.slice(0, m.index ?? 0);
  const after = prompt.slice((m.index ?? 0) + m[0].length);

  function appendSpanTarget(text: string): void {
    const span = document.createElement("span");
    span.className = "prompt-target";
    span.textContent = text;
    el.appendChild(span);
  }

  if (target && before.includes(target)) {
    const pos = before.indexOf(target);
    el.appendChild(document.createTextNode(before.slice(0, pos)));
    appendSpanTarget(target);
    el.appendChild(document.createTextNode(before.slice(pos + target.length)));
  } else {
    el.appendChild(document.createTextNode(before));
    if (target) appendSpanTarget(target);
  }
  el.appendChild(document.createTextNode(after));
}

function roundStats(scores: (boolean | null)[]) {
  const total = scores.length;
  const correct = scores.filter((s) => s === true).length;
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
  return { correct, total, pct };
}

/** JLPT 語彙四択。級は URL の ?lv= のみ（カードの N1〜N5 リンク） */
export function mountGoiQuiz(payloadId = "goi-quiz-payload"): void {
  applyJlptLevelFromSearchParams();
  const cat = readPayload(payloadId);
  const all = cat.questions;

  const quizRoot = document.getElementById("goi-quiz-root");
  const unavailableRoot = document.getElementById("goi-level-unavailable");

  const urlLevel = levelFromUrl();
  if (!urlLevel || !isGoiLevelReleased(urlLevel)) {
    if (quizRoot) quizRoot.hidden = true;
    if (unavailableRoot) unavailableRoot.hidden = false;
    return;
  }

  if (quizRoot) quizRoot.hidden = false;
  if (unavailableRoot) unavailableRoot.hidden = true;

  const headingEl = document.getElementById("goi-page-heading");
  const titleKey = headingEl?.dataset.pageTitleKey;
  if (headingEl && titleKey && titleKey in ui.ja) {
    const L = getLocale();
    const key = titleKey as keyof (typeof ui)["ja"];
    headingEl.textContent = fillTemplate(`${ui[L][key]}${ui[L]["goi.levelSuffix"]}`, {
      level: urlLevel,
    });
  }

  const levelFilter = urlLevel;
  let order: number[] = [];
  let pool: GoiQuestion[] = [];
  let qi = 0;
  let locked = false;
  let lastOk: boolean | null = null;
  let summaryMode = false;
  let scores: (boolean | null)[] = [];

  const elPrompt = document.getElementById("goi-prompt");
  const elProg = document.getElementById("goi-progress");
  const elOpts = document.getElementById("goi-options");
  const elPlay = document.getElementById("goi-quiz-play");
  const elFb = document.getElementById("goi-feedback");
  const elFbHead = document.getElementById("goi-feedback-head");
  const elFbCorrect = document.getElementById("goi-correct-line");
  const elFbExpl = document.getElementById("goi-explain-body");
  const btnNext = document.getElementById("goi-next");
  const btnPrev = document.getElementById("goi-prev");
  const elSummary = document.getElementById("goi-round-summary");
  const elSummaryPct = document.getElementById("goi-round-summary-pct");
  const elSummaryDetail = document.getElementById("goi-round-summary-detail");
  const btnRestart = document.getElementById("goi-round-restart");

  function loc() {
    return getLocale();
  }

  function filteredPool() {
    return all.filter((q) => q.level === levelFilter);
  }

  function setPlayVisible(visible: boolean) {
    if (elPlay) elPlay.hidden = !visible;
    if (elPrompt) elPrompt.hidden = !visible;
    if (elProg) elProg.hidden = !visible;
  }

  function paintSummary() {
    const L = loc();
    const { correct, total, pct } = roundStats(scores);
    if (elSummaryPct) {
      elSummaryPct.textContent = fillTemplate(ui[L]["goi.roundSummary.score"], { pct });
    }
    if (elSummaryDetail) {
      elSummaryDetail.textContent = fillTemplate(ui[L]["goi.roundSummary.detail"], {
        correct,
        total,
      });
    }
  }

  function showRoundSummary() {
    summaryMode = true;
    setPlayVisible(false);
    if (elSummary) elSummary.hidden = false;
    if (elProg) {
      elProg.textContent = "";
      elProg.hidden = false;
    }
    paintSummary();
  }

  function hideRoundSummary() {
    summaryMode = false;
    if (elSummary) elSummary.hidden = true;
    setPlayVisible(true);
  }

  function newRound() {
    pool = filteredPool();
    order = shuffle(pool.map((_, i) => i));
    qi = 0;
    scores = new Array(order.length).fill(null);
    hideRoundSummary();
  }

  function progressText() {
    const L = loc();
    return fillTemplate(ui[L]["goi.progress"], {
      n: qi + 1,
      total: Math.max(order.length, 1),
    });
  }

  function updatePrevNextButtons() {
    if (btnPrev) btnPrev.disabled = summaryMode || qi <= 0;
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
      updatePrevNextButtons();
      return;
    }
    const q = pool[order[qi]];
    if (!elPrompt || !elProg || !elOpts) return;
    renderGoiPrompt(elPrompt, q.prompt);
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
    updatePrevNextButtons();
  }

  function onPick(btn: HTMLButtonElement, q: GoiQuestion) {
    if (locked || !pool.length || summaryMode) return;
    const idx = Number(btn.dataset.choiceIndex);
    locked = true;
    const ok = idx === q.correctIndex;
    lastOk = ok;
    scores[qi] = ok;
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
    updatePrevNextButtons();
  }

  function paintFeedbackLocale() {
    if (!elFb || elFb.hidden || lastOk === null || !pool.length || summaryMode) return;
    const q = pool[order[qi]];
    const L = loc();
    const correctText = q.choices[q.correctIndex];
    if (elFbHead)
      elFbHead.textContent = lastOk ? ui[L]["goi.feedback.ok"] : ui[L]["goi.feedback.ng"];
    if (elFbCorrect)
      elFbCorrect.textContent = fillTemplate(ui[L]["goi.correctChoice"], { choice: correctText });
  }

  btnNext?.addEventListener("click", () => {
    if (summaryMode) return;
    if (!locked) return;
    if (qi >= order.length - 1) {
      showRoundSummary();
      return;
    }
    qi++;
    showQuestion();
  });

  btnPrev?.addEventListener("click", () => {
    if (summaryMode || qi <= 0) return;
    qi--;
    showQuestion();
  });

  btnRestart?.addEventListener("click", () => {
    newRound();
    showQuestion();
  });

  newRound();
  showQuestion();

  window.addEventListener("localechange", () => {
    if (summaryMode) {
      paintSummary();
      return;
    }
    if (elProg) elProg.textContent = progressText();
    paintFeedbackLocale();
  });
}
