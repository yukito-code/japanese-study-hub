/**
 * 会話「あいさつ」クイズ（問題文は JA/EN/ZH、選択肢・正答は常に日本語のフレーズ）
 */

import { kaiwaAisatsuQuizZh } from "./kaiwa-aisatsu-quiz-zh";

export type KaiwaAisatsuQuizItem = {
  promptJa: string;
  promptEn: string;
  promptZh: string;
  choicesJa: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explainJa: string;
  explainEn: string;
  explainZh: string;
};

const kaiwaAisatsuQuizItemsBase = [
  {
    promptJa: "昼間、初対面の人や店の人に使う定番のあいさつはどれですか？",
    promptEn:
      "It's daytime and you greet someone for the first time (e.g. in a shop or on the street). Which phrase fits best?",
    choicesJa: ["こんにちは", "おはようございます", "こんばんは", "お疲れ様です"],
    correctIndex: 0,
    explainJa: "昼のあいさつは「こんにちは」。夜なら「こんばんは」が自然です。",
    explainEn: "Konnichiwa is the daytime default; at night use konbanwa.",
  },
  {
    promptJa: "日が落ちてから、一般的なあいさつとして使うのはどれですか？",
    promptEn: "After dark, which greeting is the usual default?",
    choicesJa: ["こんばんは", "こんにちは", "おはようございます", "お疲れ様です"],
    correctIndex: 0,
    explainJa: "夜は「こんばんは」。昼に「こんばんは」は不自然になりがちです。",
    explainEn: "Use konbanwa after dark; avoid it in the daytime.",
  },
  {
    promptJa: "朝、職場や店などでていねいにあいさつするとき、広く使えるのはどれですか？",
    promptEn: "In the morning at work or in a shop, which polite greeting is widely used?",
    choicesJa: ["おはようございます", "こんにちは", "いってらっしゃい", "ごちそうさま"],
    correctIndex: 0,
    explainJa: "朝〜昼前のフォーマルな場では「おはようございます」が定番です。",
    explainEn: "Ohayō gozaimasu is the standard polite morning greeting.",
  },
  {
    promptJa:
      "職場で、その日はじめて廊下で会った同僚にあいさつするのにふさわしいのはどれですか？（午後でも可）",
    promptEn:
      "At the office you pass a coworker for the first time that day—even in the afternoon. Which fits?",
    choicesJa: ["おはようございます", "こんにちは", "こんばんは", "失礼します"],
    correctIndex: 0,
    explainJa: "その人にとって「今日初めて」なら午後でも「おはよう（ございます）」が使われます。",
    explainEn: "First hello of the day can be ohayō (gozaimasu) even in the afternoon.",
  },
  {
    promptJa: "仕事や学校が終わり、帰る前あいさつとして同僚によく使うのはどれですか？",
    promptEn: "When leaving work or school, peers often say which phrase?",
    choicesJa: ["お疲れ様でした", "おはようございます", "いらっしゃいませ", "いただきます"],
    correctIndex: 0,
    explainJa: "「お疲れ様でした」は労いの別れ。お客様への別れには向きません。",
    explainEn: "Otsukaresama deshita thanks peers for the day—not for customers.",
  },
  {
    promptJa: "はじめて会った人に、まず言う定番の一言はどれですか？",
    promptEn: "What do you typically say first when you meet someone for the first time?",
    choicesJa: ["はじめまして。", "お久しぶりです。", "失礼します。", "お世話になっております。"],
    correctIndex: 0,
    explainJa: "「はじめまして。」のあとに名乗り（〇〇です）が続きます。",
    explainEn: "Hajimemashite is fixed; then give your name.",
  },
  {
    promptJa: "名乗ったあと、これからよろしくという意味で使うのにふさわしいのはどれですか？",
    promptEn: "After your name, which phrase means “looking forward to working with you”?",
    choicesJa: ["よろしくお願いします。", "ごちそうさまでした。", "いってきます。", "かしこまりました。"],
    correctIndex: 0,
    explainJa: "「よろしくお願いします」は初対面〜仕事で多用する定型です。",
    explainEn: "Yoroshiku onegai shimasu is the standard follow-up.",
  },
  {
    promptJa: "親しい友人に、久しぶりに会ったときのあいさつとして自然なのはどれですか？",
    promptEn: "You meet a close friend after a long time. Which sounds natural?",
    choicesJa: ["久しぶり。", "ご無沙汰しております。", "失礼いたします。", "お世話になっております。"],
    correctIndex: 0,
    explainJa: "友人同士は「久しぶり。」。目上には「お久しぶりです。」などが無難です。",
    explainEn: "Hisashiburi with friends; politer forms for seniors.",
  },
  {
    promptJa: "しばらく連絡がなかった取引先に会う場面で、ていねいに使えるのはどれですか？",
    promptEn: "You meet a client you haven’t contacted in a while. Which polite line fits?",
    choicesJa: ["ご無沙汰しております。", "久しぶり。", "おはようございます。", "いただきます。"],
    correctIndex: 0,
    explainJa: "ビジネスでは「ご無沙汰しております。」が無難です。",
    explainEn: "Go-busata shite orimasu is business-safe after silence.",
  },
  {
    promptJa: "メールの冒頭で、継続してやり取りする相手によく使う定型はどれですか？",
    promptEn: "At the start of an email to an ongoing business contact, which opening is common?",
    choicesJa: ["お世話になっております。", "突然のご連絡失礼いたします。", "お疲れ様です。", "はじめまして。"],
    correctIndex: 0,
    explainJa: "継続関係なら「お世話になっております。」が定番の一文目です。",
    explainEn: "O-sewa ni natte orimasu is the default first line.",
  },
  {
    promptJa: "電話の会話を終えて切るとき、汎用的に使えるのはどれですか？",
    promptEn: "You’re about to hang up after a business call. Which closing is widely used?",
    choicesJa: ["失礼します。", "おはようございます。", "いただきます。", "いってらっしゃい。"],
    correctIndex: 0,
    explainJa: "電話の終わりは「失礼します。」がよく使われます。",
    explainEn: "Shitsurei shimasu is a common phone closer.",
  },
  {
    promptJa: "来客や打合せが終わり、相手が来訪した日の締めとして使いやすいのはどれですか？",
    promptEn: "A meeting or visit ends today; as host, which closing fits well?",
    choicesJa: ["本日はありがとうございました。", "お疲れ様です。", "いらっしゃいませ。", "かしこまりました。"],
    correctIndex: 0,
    explainJa: "来訪日の締めには「本日はありがとうございました。」が自然です。",
    explainEn: "Honjitsu wa arigatō gozaimashita thanks them for coming today.",
  },
] as const;

export const kaiwaAisatsuQuizItems: KaiwaAisatsuQuizItem[] = kaiwaAisatsuQuizItemsBase.map(
  (item, i) => ({
    ...item,
    promptZh: kaiwaAisatsuQuizZh[i]!.promptZh,
    explainZh: kaiwaAisatsuQuizZh[i]!.explainZh,
  }),
);
