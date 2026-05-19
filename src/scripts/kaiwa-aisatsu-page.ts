import { getLocale } from "../i18n/client";
import { ui, fillTemplate } from "../i18n/ui";
import type { KaiwaAisatsuQuizItem } from "../data/kaiwa-aisatsu-quiz";

function readQuizPayload(id: string): { items: KaiwaAisatsuQuizItem[] } {
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

/** あいさつ記事：クイズ切替・四択（選択肢は常に日本語）・1問前へ戻る */
export function mountKaiwaAisatsuPage(
  payloadId = "kaiwa-quiz-payload",
): void {
  const readPanel = document.getElementById("kaiwa-read-panel");
  const quizPanel = document.getElementById("kaiwa-quiz-panel");
  const pageBackWrap = document.getElementById("kaiwa-page-back-wrap");
  const btnOpenQuiz = document.getElementById("kaiwa-btn-open-quiz");
  const btnBackRead = document.getElementById("kaiwa-btn-back-read");

  const elPrompt = document.getElementById("kaiwa-quiz-prompt");
  const elProg = document.getElementById("kaiwa-quiz-progress");
  const elOpts = document.getElementById("kaiwa-quiz-options");
  const elFb = document.getElementById("kaiwa-quiz-feedback");
  const elFbHead = document.getElementById("kaiwa-quiz-feedback-head");
  const elFbCorrect = document.getElementById("kaiwa-quiz-correct-line");
  const elFbExpl = document.getElementById("kaiwa-quiz-explain-body");
  const btnNext = document.getElementById("kaiwa-quiz-next");
  const btnPrev = document.getElementById("kaiwa-quiz-prev");

  const { items: allItems } = readQuizPayload(payloadId);

  let order = shuffle(allItems.map((_, i) => i));
  let qi = 0;
  let locked = false;
  let lastOk: boolean | null = null;
  /** 表示中の問題で、正解ボタンの index（毎回シャッフル） */
  let displayCorrectIndex = 0;

  function loc() {
    return getLocale();
  }

  function progressText() {
    const L = loc();
    return fillTemplate(ui[L]["learn.kaiwa.quiz.progress"], {
      n: qi + 1,
      total: Math.max(order.length, 1),
    });
  }

  function promptForItem(q: KaiwaAisatsuQuizItem): string {
    return loc() === "en" ? q.promptEn : q.promptJa;
  }

  function explainForItem(q: KaiwaAisatsuQuizItem): string {
    return loc() === "en" ? q.explainEn : q.explainJa;
  }

  function newRound() {
    order = shuffle(allItems.map((_, i) => i));
    qi = 0;
  }

  function updatePrevNextButtons() {
    if (btnPrev) btnPrev.disabled = qi <= 0;
  }

  function showQuestion() {
    locked = false;
    lastOk = null;
    if (btnNext) btnNext.disabled = true;
    if (elFb) elFb.hidden = true;
    const q = allItems[order[qi]];
    if (!q || !elPrompt || !elProg || !elOpts) return;
    elPrompt.textContent = promptForItem(q);
    elPrompt.lang = loc() === "en" ? "en" : "ja";
    elProg.textContent = progressText();
    elOpts.replaceChildren();
    const perm = shuffle([0, 1, 2, 3]);
    const shuffledChoices = perm.map((i) => q.choicesJa[i]);
    displayCorrectIndex = perm.indexOf(q.correctIndex);
    shuffledChoices.forEach((text, idx) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "quiz-option";
      b.textContent = text;
      b.dataset.choiceIndex = String(idx);
      b.lang = "ja";
      b.addEventListener("click", () => onPick(b, q, idx));
      elOpts.appendChild(b);
    });
    updatePrevNextButtons();
  }

  function onPick(btn: HTMLButtonElement, q: KaiwaAisatsuQuizItem, pickedIndex: number) {
    if (locked) return;
    locked = true;
    const ok = pickedIndex === displayCorrectIndex;
    lastOk = ok;
    const L = loc();
    const correctText = q.choicesJa[q.correctIndex];
    const buttons = elOpts?.querySelectorAll("button");
    buttons?.forEach((node) => {
      const b = node as HTMLButtonElement;
      b.disabled = true;
      const bi = Number(b.dataset.choiceIndex);
      if (bi === displayCorrectIndex) b.classList.add("is-correct");
      else if (b === btn && !ok) b.classList.add("is-wrong");
    });
    if (elFb && elFbHead && elFbCorrect && elFbExpl) {
      elFb.hidden = false;
      elFbHead.textContent = ok
        ? ui[L]["learn.kaiwa.quiz.feedbackOk"]
        : ui[L]["learn.kaiwa.quiz.feedbackNg"];
      elFbCorrect.textContent = fillTemplate(ui[L]["learn.kaiwa.quiz.correctLine"], {
        choice: correctText,
      });
      elFbCorrect.lang = "ja";
      elFbExpl.textContent = explainForItem(q);
      elFbExpl.lang = L === "en" ? "en" : "ja";
    }
    if (btnNext) btnNext.disabled = false;
    if (btnPrev) btnPrev.disabled = qi <= 0;
  }

  function paintFeedbackLocale() {
    if (!elFb || elFb.hidden || lastOk === null) return;
    const q = allItems[order[qi]];
    if (!q) return;
    const L = loc();
    if (elFbHead)
      elFbHead.textContent = lastOk
        ? ui[L]["learn.kaiwa.quiz.feedbackOk"]
        : ui[L]["learn.kaiwa.quiz.feedbackNg"];
    const correctText = q.choicesJa[q.correctIndex];
    if (elFbCorrect) {
      elFbCorrect.textContent = fillTemplate(ui[L]["learn.kaiwa.quiz.correctLine"], {
        choice: correctText,
      });
      elFbCorrect.lang = "ja";
    }
    if (elFbExpl) {
      elFbExpl.textContent = explainForItem(q);
      elFbExpl.lang = L === "en" ? "en" : "ja";
    }
  }

  function paintPromptLocale() {
    const q = allItems[order[qi]];
    if (!q || !elPrompt) return;
    elPrompt.textContent = promptForItem(q);
    elPrompt.lang = loc() === "en" ? "en" : "ja";
  }

  btnOpenQuiz?.addEventListener("click", () => {
    if (readPanel) readPanel.hidden = true;
    if (quizPanel) quizPanel.hidden = false;
    if (pageBackWrap) pageBackWrap.hidden = true;
    newRound();
    showQuestion();
  });

  btnBackRead?.addEventListener("click", () => {
    if (quizPanel) quizPanel.hidden = true;
    if (readPanel) readPanel.hidden = false;
    if (pageBackWrap) pageBackWrap.hidden = false;
  });

  btnNext?.addEventListener("click", () => {
    qi++;
    if (qi >= order.length) {
      newRound();
    }
    showQuestion();
  });

  btnPrev?.addEventListener("click", () => {
    if (qi <= 0) return;
    qi--;
    showQuestion();
  });

  window.addEventListener("localechange", () => {
    if (!quizPanel || quizPanel.hidden) return;
    if (elProg) elProg.textContent = progressText();
    paintPromptLocale();
    paintFeedbackLocale();
  });
}
