import { uiZh } from "./ui-zh";
import type { Locale } from "./locales";

export type { Locale } from "./locales";

export const LOCALE_STORAGE_KEY = "jlpt-locale";

/** UI 文言（将来の言語追加は ui-*.ts と zh ブロックを拡張） */
export const ui = {
  ja: {
    "site.name": "Japanese Study Hub",
    "lang.pick": "表示言語",
    "lang.ja": "日本語",
    "lang.en": "English",
    "lang.zh": "中文",
    "nav.top": "トップ",
    "nav.kanjiIndex": "漢字一覧",
    "nav.kanjiHub": "漢字メニュー",
    "nav.goiHub": "語彙問題",
    "nav.back": "戻る",
    "meta.home.description":
      "日本語の学習ハブ。学習コンテンツ（一覧・カード等）と JLPT 形式の四択（JLPT問題集）を分けて用意しています。",
    "meta.kanji.list":
      "級ごとの漢字一覧（読み・意味・熟語の例）。JLPT 公式の漢字表はありません。",
    "meta.kanji.flash": "級ごとの漢字フラッシュカード。タップで裏返し、熟語の例も表示します。",
    "meta.learn.kanjiHub":
      "JLPT N1〜N5 ごとに漢字一覧・フラッシュカード。基本（読み方の表）へのリンクあり。",
    "meta.learn.kanjiLevelHub": "選択した級の漢字を、一覧またはフラッシュカードで学習します。",
    "title.home": "Japanese Study Hub",
    "title.learnKanjiHub": "漢字（級の選択）| Japanese Study Hub",
    "title.learnKanjiLevelHub": "{level} · 漢字 | Japanese Study Hub",
    "title.kanjiListLevel": "漢字一覧（{level}）| Japanese Study Hub",
    "title.kanjiFlashLevel": "フラッシュカード（{level}）| Japanese Study Hub",
    "title.kanjiList": "漢字一覧 | Japanese Study Hub",
    "home.hero": "日本語の学習を、すこしずつ。",
    "home.lead":
      "「学習コンテンツ」は参考用の一覧・カードなど（JLPT 以外の教材もここに増やす予定です）。「JLPT問題集」は四択の問題です。級は各カードの N1〜N5 から選びます。",
    "home.menuTitle": "学習メニュー",
    "home.sectionThinkTitle": "学習コンテンツ",
    "home.sectionProblemsTitle": "JLPT問題集",
    "home.think.kanji.title": "漢字",
    "home.think.kanji.desc": "N1〜N5 の読み方・熟語の例を級ごとに確認。",
    "meta.learn.kanjiBasics":
      "漢字の音読み・訓読み、数字・自然・方位など N5 向けの学習メモ（表形式）。",
    "title.learnKanjiBasics": "漢字の基本 | Japanese Study Hub",
    "learn.kanji.disclaimer":
      "※ JLPT に公式の漢字表はありません。読み・意味は学習用の目安です。",
    "learn.kanji.levelPage.lead":
      "読み方（訓読み・音読み）と熟語の例です。訓読みは「つと (める)」のように送り仮名を括弧で示し、熟語は語（読み）のみ掲載します。",
    "home.think.kaiwaAisatsu.title": "あいさつ表現",
    "home.think.kaiwaAisatsu.desc": "場面別のあいさつフレーズを表で確認。",
    "meta.learn.kaiwaAisatsu":
      "あいさつ表現のフレーズを、時間帯・場面ごとに表（フレーズ＋解説）で整理。",
    "title.learnKaiwaAisatsu": "あいさつ表現 | Japanese Study Hub",
    "learn.kaiwa.aisatsu.h1": "あいさつ表現",
    "learn.kaiwa.disclaimer":
      "※ 例文は学習用です。地域・会社・世代によって自然さは異なります。",
    "learn.kaiwa.quiz.startButton": "クイズ形式で学ぶ",
    "learn.kaiwa.quiz.sectionTitle": "あいさつ表現 · クイズ",
    "learn.kaiwa.quiz.progress": "問題 {n} / {total}",
    "learn.kaiwa.quiz.next": "つぎの問題",
    "learn.kaiwa.quiz.roundSummary.title": "おつかれさま！",
    "learn.kaiwa.quiz.roundSummary.score": "正答率 {pct}%",
    "learn.kaiwa.quiz.roundSummary.detail": "正解 {correct} / {total} 問",
    "learn.kaiwa.quiz.roundSummary.restart": "もう一度挑戦",
    "learn.kaiwa.quiz.feedbackOk": "せいかい！",
    "learn.kaiwa.quiz.feedbackNg": "ざんねん。",
    "learn.kaiwa.quiz.correctLine": "正答：{choice}",
    "learn.kaiwa.quiz.prevQuestion": "前の問題",
    "home.problem.kanjiYomi.title": "漢字の読み",
    "home.problem.kanjiYomi.desc": "文中の漢字の読みを四択で選ぶ。",
    "home.problem.bunmyaku.title": "空所補充 (文脈)",
    "home.problem.bunmyaku.desc": "空欄に入る語を、文の意味から選ぶ。",
    "home.problem.iikae.title": "言い換え (同義)",
    "home.problem.iikae.desc": "下線の表現と同じ意味に近い語を選ぶ。",
    "jlpt.level.unreleased": "準備中",
    "home.footer":
      "静的サイト（GitHub Pages 想定）。ログインはありません。言語は右上から切り替えできます。",
    "learn.kanji.hub.h1": "漢字",
    "learn.kanji.hub.lead": "JLPT の級を選ぶと、その級の漢字・読み方・熟語の例が一覧で見られます。",
    "learn.kanji.levelCard.desc": "字・読み・熟語の例",
    "learn.kanji.levelHub.titleSep": " · ",
    "learn.kanji.levelHub.titleWord": "漢字",
    "learn.kanji.levelHub.lead": "学び方を選んでください。",
    "learn.kanji.link.list": "漢字一覧",
    "learn.kanji.link.list.desc": "字・読み・意味と、熟語の例（N5 はデータあり）。",
    "learn.kanji.link.flash": "フラッシュカード",
    "learn.kanji.link.flash.desc": "タップで裏返し、読み・意味・熟語の例を確認。",
    "flash.title": "フラッシュカード",
    "flash.lead": "カードをタップして、うらがえします。",
    "flash.cardAria": "カードをめくる",
    "flash.prev": "まえへ",
    "flash.flipToBack": "うらをみる",
    "flash.flipToFront": "おもてをみる",
    "flash.next": "つぎへ",
    "kanji.compounds.title": "熟語の例",
    "kanji.label.reading": "読み",
    "kanji.label.meaning": "意味",
    "kanji.hub.title": "漢字",
    "kanji.hub.lead":
      "（旧メニュー用・互換）基本記事や一覧への案内。現在は「漢字」トップから級を選びます。",
    "kanji.hub.cardList.title": "漢字一覧",
    "kanji.hub.cardList.desc": "級を選ぶと一覧が開きます。",
    "kanji.emptyLevel": "この級の漢字データはまだありません。別の級を選ぶか、しばらくしてからまた見てください。",
    "kanji.leadSuffix": "字 · よみと意味は学習用の目安です。",
    "kanji.disclaimer":
      "JLPT に公式の漢字表はありません。出典は学習用の目安です。",
    "meta.goi.description":
      "JLPT 語彙の四択（漢字の読み・空所補充・言い換え）。級はリンクの N1〜N5 で指定します。",
    "title.goiKanjiYomi": "漢字の読み | Japanese Study Hub",
    "title.goiBunmyaku": "空所補充 (文脈) | Japanese Study Hub",
    "title.goiIikae": "言い換え (同義) | Japanese Study Hub",
    "goi.pageTitle.kanjiYomi": "漢字の読み",
    "goi.pageTitle.bunmyaku": "空所補充 (文脈)",
    "goi.pageTitle.iikae": "言い換え (同義)",
    "goi.levelSuffix": "（{level}）",
    "goi.levelUnavailable":
      "級が指定されていません。トップのカードから N1〜N5 を選んでください。",
    "goi.prev": "前の問題",
    "goi.lead.kanjiYomi": "下線部の読みを、四つの選択肢から選びます。",
    "goi.lead.bunmyaku": "空所に入る語を、文脈に合うかたちで選びます。",
    "goi.lead.iikae": "下線の表現に、いちばん近い意味を選びます。",
    "goi.instruction": "正しいと思う選択肢をタップしてください。",
    "goi.next": "つぎの問題",
    "goi.roundSummary.title": "おつかれさま！",
    "goi.roundSummary.score": "正答率 {pct}%",
    "goi.roundSummary.detail": "正解 {correct} / {total} 問",
    "goi.roundSummary.restart": "もう一度挑戦",
    "goi.progress": "問題 {n} / {total}",
    "goi.explain.title": "解説",
    "goi.feedback.ok": "せいかい！",
    "goi.feedback.ng": "ざんねん。",
    "goi.correctChoice": "正答：{choice}",
    "goi.footer":
      "本問題集は学習用の自作資料です。JLPT の出題形式・範囲を保証するものではありません。",
  },
  en: {
    "site.name": "Japanese Study Hub",
    "lang.pick": "Language",
    "lang.ja": "日本語",
    "lang.en": "English",
    "lang.zh": "中文",
    "nav.top": "Home",
    "nav.kanjiIndex": "Kanji list",
    "nav.kanjiHub": "Kanji menu",
    "nav.goiHub": "Vocabulary quizzes",
    "nav.back": "Back",
    "meta.home.description":
      "Japanese study hub: study content (lists, cards, and more) plus JLPT-style multiple-choice practice sets.",
    "meta.kanji.list":
      "Kanji list by level: readings, meanings, and example compounds. The JLPT has no official kanji list.",
    "meta.kanji.flash":
      "Kanji flashcards by level; tap to flip and see example compounds when available.",
    "meta.learn.kanjiHub":
      "Pick JLPT N1–N5 for a kanji list or flashcards. Includes a link to the readings basics article.",
    "meta.learn.kanjiLevelHub": "Study the chosen level with a list view or flashcards.",
    "title.home": "Japanese Study Hub",
    "title.learnKanjiHub": "Kanji (pick a level) | Japanese Study Hub",
    "title.learnKanjiLevelHub": "{level} · Kanji | Japanese Study Hub",
    "title.kanjiListLevel": "Kanji list ({level}) | Japanese Study Hub",
    "title.kanjiFlashLevel": "Flashcards ({level}) | Japanese Study Hub",
    "title.kanjiList": "Kanji list | Japanese Study Hub",
    "home.hero": "Japanese study, one step at a time.",
    "home.lead":
      "“Study content” is reference material (lists, cards, and non-JLPT topics we plan to add). “JLPT question sets” are multiple-choice drills. Pick a level (N1–N5) on each card.",
    "home.menuTitle": "Study menu",
    "home.sectionThinkTitle": "Study content",
    "home.sectionProblemsTitle": "JLPT question sets",
    "home.think.kanji.title": "Kanji",
    "home.think.kanji.desc": "Readings and example compounds for each JLPT level (N1–N5).",
    "meta.learn.kanjiBasics":
      "Study notes on on/kun readings, numbers, nature, and directions—N5-focused tables.",
    "title.learnKanjiBasics": "Kanji basics | Japanese Study Hub",
    "learn.kanji.disclaimer":
      "The JLPT has no official kanji list; readings and meanings here are informal study notes.",
    "learn.kanji.levelPage.lead":
      "Readings (kun/on) and example compounds. Kun readings show okurigana in parentheses, e.g. つと (める).",
    "home.think.kaiwaAisatsu.title": "Greeting phrases",
    "home.think.kaiwaAisatsu.desc": "Greeting phrases by situation, in tables.",
    "meta.learn.kaiwaAisatsu":
      "Greeting phrases in tables: phrase + short notes by time of day and situation.",
    "title.learnKaiwaAisatsu": "Greeting phrases | Japanese Study Hub",
    "learn.kaiwa.aisatsu.h1": "Greeting phrases",
    "learn.kaiwa.disclaimer":
      "Examples are for study; naturalness varies by region, company, and generation.",
    "learn.kaiwa.quiz.startButton": "Learn with a quiz",
    "learn.kaiwa.quiz.sectionTitle": "Greeting phrases · Quiz",
    "learn.kaiwa.quiz.progress": "Question {n} of {total}",
    "learn.kaiwa.quiz.next": "Next question",
    "learn.kaiwa.quiz.roundSummary.title": "Well done!",
    "learn.kaiwa.quiz.roundSummary.score": "Score: {pct}%",
    "learn.kaiwa.quiz.roundSummary.detail": "{correct} of {total} correct",
    "learn.kaiwa.quiz.roundSummary.restart": "Try again",
    "learn.kaiwa.quiz.feedbackOk": "Correct!",
    "learn.kaiwa.quiz.feedbackNg": "Not quite.",
    "learn.kaiwa.quiz.correctLine": "Answer: {choice}",
    "learn.kaiwa.quiz.prevQuestion": "Previous",
    "home.problem.kanjiYomi.title": "Kanji reading",
    "home.problem.kanjiYomi.desc": "Pick the kanji reading in context (four choices).",
    "home.problem.bunmyaku.title": "Context cloze",
    "home.problem.bunmyaku.desc": "Choose the word that fits the blank.",
    "home.problem.iikae.title": "Paraphrase (synonym)",
    "home.problem.iikae.desc": "Pick the meaning closest to the underlined phrase.",
    "jlpt.level.unreleased": "Coming soon",
    "home.footer":
      "Static site (GitHub Pages). No login. Switch language from the header.",
    "learn.kanji.hub.h1": "Kanji",
    "learn.kanji.hub.lead": "Pick a JLPT level to browse characters with readings and example compounds.",
    "learn.kanji.levelCard.desc": "Readings & compounds",
    "learn.kanji.levelHub.titleSep": " · ",
    "learn.kanji.levelHub.titleWord": "Kanji",
    "learn.kanji.levelHub.lead": "Choose how you want to study.",
    "learn.kanji.link.list": "Kanji list",
    "learn.kanji.link.list.desc": "Characters, readings, meanings, and example compounds (N5 has data).",
    "learn.kanji.link.flash": "Flashcards",
    "learn.kanji.link.flash.desc": "Tap to flip; readings, meanings, and example compounds.",
    "flash.title": "Flashcards",
    "flash.lead": "Tap the card to flip it.",
    "flash.cardAria": "Flip card",
    "flash.prev": "Previous",
    "flash.flipToBack": "Show back",
    "flash.flipToFront": "Show front",
    "flash.next": "Next",
    "kanji.compounds.title": "Example compounds",
    "kanji.label.reading": "Reading",
    "kanji.label.meaning": "Meaning",
    "kanji.hub.title": "Kanji",
    "kanji.hub.lead":
      "Start with Kanji basics, then use the list or JLPT reading quizzes to practice.",
    "kanji.hub.cardList.title": "Kanji list",
    "kanji.hub.cardList.desc": "Opens the list for the level you tap.",
    "kanji.list.title": "Kanji list",
    "kanji.emptyLevel": "No kanji data for this level yet. Try another level or check back later.",
    "kanji.leadSuffix":
      " characters · Readings and meanings are informal study notes.",
    "kanji.disclaimer":
      "The JLPT does not publish official kanji lists; this set is a study guide.",
    "meta.goi.description":
      "JLPT vocabulary quizzes: kanji reading, context cloze, and paraphrase. Level is set via N1–N5 on each card link.",
    "title.goiKanjiYomi": "Kanji reading | Japanese Study Hub",
    "title.goiBunmyaku": "Context cloze | Japanese Study Hub",
    "title.goiIikae": "Paraphrase (synonym) | Japanese Study Hub",
    "goi.pageTitle.kanjiYomi": "Kanji reading",
    "goi.pageTitle.bunmyaku": "Context cloze",
    "goi.pageTitle.iikae": "Paraphrase (synonym)",
    "goi.levelSuffix": " ({level})",
    "goi.levelUnavailable":
      "No level selected. Pick N1–N5 from a card on the home page.",
    "goi.prev": "Previous",
    "goi.lead.kanjiYomi": "Pick the correct reading from four choices.",
    "goi.lead.bunmyaku": "Choose the word that fits the blank in context.",
    "goi.lead.iikae": "Choose the closest meaning for the underlined expression.",
    "goi.instruction": "Tap the option you think is correct.",
    "goi.next": "Next question",
    "goi.roundSummary.title": "Well done!",
    "goi.roundSummary.score": "Score: {pct}%",
    "goi.roundSummary.detail": "{correct} of {total} correct",
    "goi.roundSummary.restart": "Try again",
    "goi.progress": "Question {n} of {total}",
    "goi.explain.title": "Explanation",
    "goi.feedback.ok": "Correct!",
    "goi.feedback.ng": "Not quite.",
    "goi.correctChoice": "Answer: {choice}",
    "goi.footer":
      "Study-only material. Not affiliated with JLPT; format and coverage are not guaranteed.",
  },
  zh: uiZh,
} as const;

export type UiKey = keyof typeof ui.ja;

export function t(locale: Locale, key: UiKey): string {
  return ui[locale][key];
}

export function fillTemplate(
  template: string,
  vars: Record<string, string | number>,
): string {
  let s = template;
  for (const [k, v] of Object.entries(vars)) {
    s = s.replaceAll(`{${k}}`, String(v));
  }
  return s;
}
