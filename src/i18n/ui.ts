export const LOCALE_STORAGE_KEY = "jlpt-locale";

export type Locale = "ja" | "en";

/** UI 文言（将来の言語追加はこの型＋オブジェクトを拡張） */
export const ui = {
  ja: {
    "site.name": "JLPT Study Hub",
    "lang.pick": "表示言語",
    "lang.ja": "日本語",
    "lang.en": "English",
    "nav.top": "トップ",
    "nav.kanjiIndex": "漢字一覧",
    "nav.kanjiHub": "漢字メニュー",
    "nav.goiHub": "語彙一覧",
    "nav.back": "もどる",
    "meta.home.description":
      "JLPT 学習サイト。漢字は級ごとの一覧・フラッシュ（学習コンテンツ）、語彙は四択の実践問題です。",
    "meta.kanji.hub":
      "漢字の学習メニュー。一覧かフラッシュを選び、出題級は N1〜N5 バーで切り替えます。",
    "meta.kanji.list":
      "選択中の級の漢字一覧（読み・意味）。JLPT 公式の漢字表はありません。",
    "meta.flash.description": "選択中の級の漢字フラッシュカード。",
    "title.home": "JLPT Study Hub",
    "title.kanjiHub": "漢字 | JLPT Study Hub",
    "title.kanjiList": "漢字一覧 | JLPT Study Hub",
    "title.flash": "フラッシュカード | JLPT Study Hub",
    "home.hero": "JLPT の学習を、すこしずつ。",
    "home.lead":
      "学習メニューは「学習コンテンツ」と「実践問題」に分かれています。漢字・語彙とも、上の N1〜N5（既定 N1）で級を切り替えられます。",
    "home.menuTitle": "学習メニュー",
    "home.sectionThinkTitle": "学習コンテンツ",
    "home.sectionThinkLead":
      "一覧やカードで内容を確認します（採点しません）。",
    "home.sectionProblemsTitle": "実践問題",
    "home.sectionProblemsLead": "四択など、選択して解答する形式です。",
    "home.think.kanji.title": "漢字",
    "home.think.kanji.desc": "一覧かフラッシュを選びます（級はバーで切り替え）。",
    "home.problem.kanjiyomi.title": "漢字読み",
    "home.problem.kanjiyomi.desc": "下線の漢字の読みを選ぶ語彙の四択です。",
    "home.problem.bunmyaku.title": "文脈規定",
    "home.problem.bunmyaku.desc": "空所に入る語を文脈から選びます。",
    "home.problem.iikae.title": "言い換え",
    "home.problem.iikae.desc": "下線表現に近い意味を選びます。",
    "home.footer":
      "静的サイト（GitHub Pages 想定）。ログインはありません。言語は右上から切り替えできます。",
    "kanji.hub.title": "漢字",
    "kanji.hub.lead": "学習したい形式を選びます。表示する級は上のバーで切り替えてから開いてください。",
    "kanji.hub.cardList.title": "漢字一覧",
    "kanji.hub.cardList.desc": "選んだ級の漢字と読み・意味を一覧します。",
    "kanji.hub.cardFlash.title": "フラッシュカード",
    "kanji.hub.cardFlash.desc": "選んだ級の漢字をカードで確認します。",
    "kanji.list.title": "漢字一覧",
    "kanji.emptyLevel": "この級の漢字データはまだありません。バーで別の級を選んでください。",
    "kanji.leadSuffix": "字 · よみと意味は学習用の目安です。",
    "kanji.flash": "フラッシュカード",
    "kanji.disclaimer":
      "JLPT に公式の漢字表はありません。出典は学習用の目安です。",
    "flash.title": "フラッシュカード",
    "flash.lead": "カードをタップして、うらがえします。",
    "flash.cardAria": "カードをめくる",
    "flash.prev": "まえへ",
    "flash.flipToBack": "うらをみる",
    "flash.flipToFront": "おもてをみる",
    "flash.next": "つぎへ",
    "levelBar.label": "出題レベル",
    "meta.goi.description":
      "JLPT 語彙の四択（漢字読み・文脈規定・言い換え）N1 から N5。",
    "title.goiHub": "語彙 | JLPT Study Hub",
    "title.goiKanjiYomi": "漢字読み（語彙）| JLPT Study Hub",
    "title.goiBunmyaku": "文脈規定（語彙）| JLPT Study Hub",
    "title.goiIikae": "言い換え（語彙）| JLPT Study Hub",
    "goi.hub.title": "語彙",
    "goi.hub.lead":
      "『JLPT_N1-N5_questions_kanji_context_paraphrase.xlsx』由来の四択です。出題レベルは上の N1〜N5（既定は N1）で選べます。",
    "goi.card.kanji.title": "漢字読み",
    "goi.card.kanji.desc": "下線部の読みを四択で選びます。",
    "goi.card.bunmyaku.title": "文脈規定",
    "goi.card.bunmyaku.desc": "空所に入る語を文脈から選びます。",
    "goi.card.iikae.title": "言い換え",
    "goi.card.iikae.desc": "下線表現に最も近い意味を選びます。",
    "goi.pageTitle.kanjiYomi": "漢字読み",
    "goi.pageTitle.bunmyaku": "文脈規定",
    "goi.pageTitle.iikae": "言い換え",
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
    "site.name": "JLPT Study Hub",
    "lang.pick": "Language",
    "lang.ja": "日本語",
    "lang.en": "English",
    "nav.top": "Home",
    "nav.kanjiIndex": "Kanji list",
    "nav.kanjiHub": "Kanji menu",
    "nav.goiHub": "Vocabulary hub",
    "nav.back": "Back",
    "meta.home.description":
      "JLPT study: kanji list & flashcards by level (study content), plus vocabulary MCQ (practice).",
    "meta.kanji.hub":
      "Kanji study hub: pick list or flashcards; JLPT level is chosen in the bar (N1–N5).",
    "meta.kanji.list":
      "Kanji list for the selected level (readings and meanings are informal notes).",
    "meta.flash.description": "Kanji flashcards for the selected level.",
    "title.home": "JLPT Study Hub",
    "title.kanjiHub": "Kanji | JLPT Study Hub",
    "title.kanjiList": "Kanji list | JLPT Study Hub",
    "title.flash": "Flashcards | JLPT Study Hub",
    "home.hero": "JLPT study, one step at a time.",
    "home.lead":
      "The menu is split into “Study content” and “Practice”. Kanji and vocabulary both follow the N1–N5 bar (default N1).",
    "home.menuTitle": "Study menu",
    "home.sectionThinkTitle": "Study content",
    "home.sectionThinkLead":
      "Lists and cards only—nothing is scored.",
    "home.sectionProblemsTitle": "Practice",
    "home.sectionProblemsLead": "Multiple-choice and other pick-an-answer drills.",
    "home.think.kanji.title": "Kanji",
    "home.think.kanji.desc": "Choose list or flashcards (level is set in the bar).",
    "home.problem.kanjiyomi.title": "Kanji reading",
    "home.problem.kanjiyomi.desc": "Pick the reading of the underlined kanji (vocabulary).",
    "home.problem.bunmyaku.title": "Context cloze",
    "home.problem.bunmyaku.desc": "Choose the word that fits the blank from context.",
    "home.problem.iikae.title": "Paraphrase",
    "home.problem.iikae.desc": "Choose the meaning closest to the underlined phrase.",
    "home.footer":
      "Static site (GitHub Pages). No login. Switch language from the header.",
    "kanji.hub.title": "Kanji",
    "kanji.hub.lead": "Pick a format. Set the level in the bar before you open list or flashcards.",
    "kanji.hub.cardList.title": "Kanji list",
    "kanji.hub.cardList.desc": "Browse kanji, readings, and meanings for the selected level.",
    "kanji.hub.cardFlash.title": "Flashcards",
    "kanji.hub.cardFlash.desc": "Flip cards for the selected level.",
    "kanji.list.title": "Kanji list",
    "kanji.emptyLevel": "No kanji data for this level yet. Choose another level in the bar.",
    "kanji.leadSuffix":
      " characters · Readings and meanings are informal study notes.",
    "kanji.flash": "Flashcards",
    "kanji.disclaimer":
      "The JLPT does not publish official kanji lists; this set is a study guide.",
    "flash.title": "Flashcards",
    "flash.lead": "Tap the card to flip it.",
    "flash.cardAria": "Flip card",
    "flash.prev": "Previous",
    "flash.flipToBack": "Show back",
    "flash.flipToFront": "Show front",
    "flash.next": "Next",
    "levelBar.label": "Quiz level",
    "meta.goi.description":
      "JLPT vocabulary quizzes: kanji reading, context cloze, and paraphrase (N1–N5).",
    "title.goiHub": "Vocabulary | JLPT Study Hub",
    "title.goiKanjiYomi": "Kanji reading (vocabulary) | JLPT Study Hub",
    "title.goiBunmyaku": "Context cloze (vocabulary) | JLPT Study Hub",
    "title.goiIikae": "Paraphrase (vocabulary) | JLPT Study Hub",
    "goi.hub.title": "Vocabulary",
    "goi.hub.lead":
      "Questions from JLPT_N1-N5_questions_kanji_context_paraphrase.xlsx. Set level to N1–N5 in the bar (default N1).",
    "goi.card.kanji.title": "Kanji reading",
    "goi.card.kanji.desc": "Choose the reading of the underlined kanji.",
    "goi.card.bunmyaku.title": "Context cloze",
    "goi.card.bunmyaku.desc": "Choose the word that best fits the blank.",
    "goi.card.iikae.title": "Paraphrase",
    "goi.card.iikae.desc": "Choose the meaning closest to the underlined phrase.",
    "goi.pageTitle.kanjiYomi": "Kanji reading",
    "goi.pageTitle.bunmyaku": "Context cloze",
    "goi.pageTitle.iikae": "Paraphrase",
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
