export const LOCALE_STORAGE_KEY = "jlpt-locale";

export type Locale = "ja" | "en";

/** UI 文言（将来の言語追加はこの型＋オブジェクトを拡張） */
export const ui = {
  ja: {
    "site.name": "Japanese Study Hub",
    "lang.pick": "表示言語",
    "lang.ja": "日本語",
    "lang.en": "English",
    "nav.top": "トップ",
    "nav.kanjiIndex": "漢字一覧",
    "nav.kanjiHub": "漢字メニュー",
    "nav.goiHub": "語彙問題",
    "nav.back": "もどる",
    "meta.home.description":
      "日本語の学習ハブ。学習コンテンツ（一覧・カード等）と JLPT 形式の四択（JLPT問題集）を分けて用意しています。",
    "meta.kanji.hub":
      "漢字の学習メニュー。漢字一覧のカードで級（N1〜N5）を選ぶと、その級の一覧が開きます。",
    "meta.kanji.list":
      "選択中の級の漢字一覧（読み・意味）。JLPT 公式の漢字表はありません。",
    "title.home": "Japanese Study Hub",
    "title.kanjiHub": "漢字 | Japanese Study Hub",
    "title.kanjiList": "漢字一覧 | Japanese Study Hub",
    "home.hero": "日本語の学習を、すこしずつ。",
    "home.lead":
      "「学習コンテンツ」は参考用の一覧・カードなど（JLPT 以外の教材もここに増やす予定です）。「JLPT問題集」は四択の問題です。級は各カードの N1〜N5 から選びます。",
    "home.menuTitle": "学習メニュー",
    "home.sectionThinkTitle": "学習コンテンツ",
    "home.sectionThinkLead":
      "一覧やカードで内容を確認します。漢字に加え、あいさつ表現などのガイドを追加中です。",
    "home.sectionProblemsTitle": "JLPT問題集",
    "home.sectionProblemsLead":
      "漢字の読み・空所補充・言い換えの四択。各カードの N1〜N5 から級を選んで始めます。",
    "home.think.kanji.title": "漢字",
    "home.think.kanji.desc":
      "漢字一覧のメニューへ。級はカード内の N1〜N5 から選びます。",
    "home.think.kaiwaAisatsu.title": "あいさつ表現",
    "home.think.kaiwaAisatsu.desc":
      "表でフレーズを確認し、記事表示時だけ目立つボタンから四択クイズでも練習できます。",
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
    "learn.kaiwa.quiz.feedbackOk": "せいかい！",
    "learn.kaiwa.quiz.feedbackNg": "ざんねん。",
    "learn.kaiwa.quiz.correctLine": "正答：{choice}",
    "learn.kaiwa.quiz.prevQuestion": "前の問題",
    "home.problem.kanjiYomi.title": "漢字の読み",
    "home.problem.kanjiYomi.desc": "文中の下線の漢字の読みを四択で選びます。",
    "home.problem.bunmyaku.title": "空所補充 (文脈)",
    "home.problem.bunmyaku.desc": "空欄に入る語を、文の流れから四択で選びます。",
    "home.problem.iikae.title": "言い換え (同義)",
    "home.problem.iikae.desc": "下線の語句と同じ意味に近い表現を四択で選びます。",
    "jlpt.level.unreleased": "準備中",
    "home.footer":
      "静的サイト（GitHub Pages 想定）。ログインはありません。言語は右上から切り替えできます。",
    "kanji.hub.title": "漢字",
    "kanji.hub.lead":
      "漢字一覧のカードで N1〜N5 を押すと、選んだ級の漢字一覧が開きます。",
    "kanji.hub.cardList.title": "漢字一覧",
    "kanji.hub.cardList.desc": "級のボタンから開くと、その級の漢字と読み・意味を一覧します。",
    "kanji.list.title": "漢字一覧",
    "kanji.emptyLevel": "この級の漢字データはまだありません。バーで別の級を選んでください。",
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
    "nav.top": "Home",
    "nav.kanjiIndex": "Kanji list",
    "nav.kanjiHub": "Kanji menu",
    "nav.goiHub": "Vocabulary quizzes",
    "nav.back": "Back",
    "meta.home.description":
      "Japanese study hub: study content (lists, cards, and more) plus JLPT-style multiple-choice practice sets.",
    "meta.kanji.hub":
      "Kanji hub: pick N1–N5 on the Kanji list card to open the list at the chosen level.",
    "meta.kanji.list":
      "Kanji list for the selected level (readings and meanings are informal notes).",
    "title.home": "Japanese Study Hub",
    "title.kanjiHub": "Kanji | Japanese Study Hub",
    "title.kanjiList": "Kanji list | Japanese Study Hub",
    "home.hero": "Japanese study, one step at a time.",
    "home.lead":
      "“Study content” is reference material (lists, cards, and non-JLPT topics we plan to add). “JLPT question sets” are multiple-choice drills. Pick a level (N1–N5) on each card.",
    "home.menuTitle": "Study menu",
    "home.sectionThinkTitle": "Study content",
    "home.sectionThinkLead":
      "Browse lists and cards. Kanji plus greeting-phrase guides (more topics coming).",
    "home.sectionProblemsTitle": "JLPT question sets",
    "home.sectionProblemsLead":
      "Kanji reading, context cloze, and paraphrase (four choices each). Pick N1–N5 on each card.",
    "home.think.kanji.title": "Kanji",
    "home.think.kanji.desc":
      "Kanji list menu. Pick a level from the N1–N5 chips on the card.",
    "home.think.kaiwaAisatsu.title": "Greeting phrases",
    "home.think.kaiwaAisatsu.desc":
      "Phrase tables and an optional quiz. Tap the prominent button at the top when in article view.",
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
    "learn.kaiwa.quiz.feedbackOk": "Correct!",
    "learn.kaiwa.quiz.feedbackNg": "Not quite.",
    "learn.kaiwa.quiz.correctLine": "Answer: {choice}",
    "learn.kaiwa.quiz.prevQuestion": "Previous",
    "home.problem.kanjiYomi.title": "Kanji reading",
    "home.problem.kanjiYomi.desc": "Pick the reading of the underlined kanji in the sentence.",
    "home.problem.bunmyaku.title": "Context cloze",
    "home.problem.bunmyaku.desc": "Choose the word that best fits the blank from context.",
    "home.problem.iikae.title": "Paraphrase (synonym)",
    "home.problem.iikae.desc": "Choose the expression closest in meaning to the underlined phrase.",
    "jlpt.level.unreleased": "Coming soon",
    "home.footer":
      "Static site (GitHub Pages). No login. Switch language from the header.",
    "kanji.hub.title": "Kanji",
    "kanji.hub.lead":
      "On the Kanji list card, tap N1–N5 to open the list at that level.",
    "kanji.hub.cardList.title": "Kanji list",
    "kanji.hub.cardList.desc": "Opens the list for the level you tap.",
    "kanji.list.title": "Kanji list",
    "kanji.emptyLevel": "No kanji data for this level yet. Choose another level in the bar.",
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
    "goi.progress": "Question {n} of {total}",
    "goi.explain.title": "Explanation",
    "goi.feedback.ok": "Correct!",
    "goi.feedback.ng": "Not quite.",
    "goi.correctChoice": "Answer: {choice}",
    "goi.footer":
      "Study-only material. Not affiliated with JLPT; format and coverage are not guaranteed.",
  },
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
