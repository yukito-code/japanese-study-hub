/**
 * 会話「あいさつ」：フレーズ＋短い解説を表中心で提示（JA / EN）
 */

export type LearnBlock =
  | { kind: "p"; text: string }
  | { kind: "table"; header: string[]; rows: string[][] };

export type LearnSectionLocale = {
  title: string;
  blocks: LearnBlock[];
};

import { kaiwaAisatsuIntroZh, kaiwaAisatsuSectionsZh } from "./kaiwa-aisatsu-zh";

export type LearnSection = {
  ja: LearnSectionLocale;
  en: LearnSectionLocale;
  zh: LearnSectionLocale;
};

/** 冒頭は一行のみ（表本体が主） */
export const kaiwaAisatsuIntro: { ja: string; en: string; zh: string } = {
  ja: "下の表は「フレーズ」と「いつ・どんな相手向きか」の対応です。",
  en: "Each table pairs a phrase with a short note on when and for whom it fits.",
  zh: kaiwaAisatsuIntroZh,
};

const kaiwaAisatsuSectionsBase = [
  {
    ja: {
      title: "時間帯のあいさつ",
      blocks: [
        {
          kind: "table",
          header: ["時間帯", "フレーズ", "解説"],
          rows: [
            [
              "朝〜昼前（一般的）",
              "おはようございます",
              "店・職場・初対面など幅広く無難。一日のはじめの挨拶として使う。",
            ],
            [
              "朝〜昼前（身内・友人）",
              "おはよう",
              "親しい相手向け。職場でも仲の良い同僚同士では使われる。",
            ],
            [
              "昼（日中に会う）",
              "こんにちは",
              "昼の定番。初対面・店頭・電話の取次ぎでも使える。",
            ],
            [
              "夜",
              "こんばんは",
              "日が落ちてからの定番。昼に「こんばんは」は不自然になりやすい。",
            ],
            [
              "夜（職場・学校など）",
              "お疲れ様です",
              "帰り際・廊下ですれ違うときの労い。お客様への別れでは使わない。",
            ],
            [
              "職場（その日はじめて会う）",
              "おはようございます／おはよう",
              "時計が午後でも、その人にとって「今日初めての挨拶」なら使うことがある。",
            ],
          ],
        },
      ],
    },
    en: {
      title: "Time-of-day greetings",
      blocks: [
        {
          kind: "table",
          header: ["Time / situation", "Phrase (Japanese)", "Note"],
          rows: [
            [
              "Morning–late morning",
              "おはようございます",
              "Safe default: shop, office, first meetings; “first hello of the day.”",
            ],
            [
              "Morning–late morning (close)",
              "おはよう",
              "Family/friends; sometimes close coworkers.",
            ],
            [
              "Daytime (meet in the day)",
              "こんにちは",
              "Standard daytime hello; shop, first contact, phone handoffs.",
            ],
            [
              "Evening / after dark",
              "こんばんは",
              "Standard after dark; avoid konnichiwa at night.",
            ],
            [
              "Evening (work / school)",
              "お疲れ様です",
              "Acknowledges effort; hallways / leaving work—not for customers as goodbye.",
            ],
            [
              "Office: first time that day",
              "おはようございます／おはよう",
              "Even in the afternoon, if it’s your first hello to that person today.",
            ],
          ],
        },
      ],
    },
  },
  {
    ja: {
      title: "初対面・名乗り",
      blocks: [
        {
          kind: "table",
          header: ["フレーズ", "解説"],
          rows: [
            ["はじめまして。", "初対面の定型。名乗りの直前に置くことが多い。"],
            [
              "〇〇と申します。",
              "仕事・面接・取引などで無難な名乗り。フルネーム＋部署名などを続ける。",
            ],
            ["〇〇です。", "カジュアル〜ふつうの名乗り。友人紹介の場でも使える。"],
            [
              "よろしくお願いします。",
              "これから関わる／お願いがある場面の万能句。短く「よろしく」も可。",
            ],
            [
              "よろしくお願いいたします。",
              "面接・メールの初回・取引先向けに一段丁寧。",
            ],
          ],
        },
      ],
    },
    en: {
      title: "First meetings & names",
      blocks: [
        {
          kind: "table",
          header: ["Phrase (Japanese)", "Note"],
          rows: [
            ["はじめまして。", "Fixed line before giving your name."],
            [
              "〇〇と申します。",
              "Business-safe self-name; add dept. / full name after.",
            ],
            ["〇〇です。", "Neutral / casual introductions."],
            [
              "よろしくお願いします。",
              "Catch-all for “let’s work together / please help me.”",
            ],
            [
              "よろしくお願いいたします。",
              "Politer: interviews, first client email, formal intros.",
            ],
          ],
        },
      ],
    },
  },
  {
    ja: {
      title: "久しぶりに会ったとき",
      blocks: [
        {
          kind: "table",
          header: ["フレーズ", "解説"],
          rows: [
            ["久しぶり。", "友人・同僚など近い関係。"],
            ["お久しぶりです。", "目上・あまり親しくない相手にも使いやすい。"],
            [
              "ご無沙汰しております。",
              "しばらく連絡がなかったあと。メール・対面の両方でビジネスでも可。",
            ],
            [
              "ご無沙汰しております。お変わりなくお過ごしでしたか。",
              "一段丁寧に続ける例。相手が年上・取引先なら安心。",
            ],
          ],
        },
      ],
    },
    en: {
      title: "After a long time",
      blocks: [
        {
          kind: "table",
          header: ["Phrase (Japanese)", "Note"],
          rows: [
            ["久しぶり。", "Peers / friends."],
            ["お久しぶりです。", "Safer with seniors or distant ties."],
            [
              "ご無沙汰しております。",
              "After silence; OK in email and in person, business-safe.",
            ],
            [
              "ご無沙汰しております。お変わりなくお過ごしでしたか。",
              "Extra polite follow-up for seniors / clients.",
            ],
          ],
        },
      ],
    },
  },
  {
    ja: {
      title: "別れのあいさつ",
      blocks: [
        {
          kind: "table",
          header: ["場面", "フレーズ", "解説"],
          rows: [
            [
              "その場で軽く別れる",
              "じゃあ、また。／またね。",
              "友人・同僚。目上には「また明日お願いします」などの方が無難なことも。",
            ],
            [
              "仕事・学校から帰る前後",
              "お疲れ様でした。",
              "労いの別れ。お客様には向けず、社内・仲間同士で多用。",
            ],
            [
              "来客・打合せの終わり",
              "本日はありがとうございました。",
              "相手が来訪した日の締めに。続けて「失礼いたします」も多い。",
            ],
            [
              "会話・面談の終わり",
              "失礼します。／失礼いたします。",
              "会を終える定型。「いたします」で一段丁寧。",
            ],
            [
              "電話の終わり",
              "失礼します。",
              "取引先・会社への電話でも汎用的。",
            ],
          ],
        },
      ],
    },
    en: {
      title: "Saying goodbye",
      blocks: [
        {
          kind: "table",
          header: ["Situation", "Phrase (Japanese)", "Note"],
          rows: [
            [
              "Light leave-taking",
              "じゃあ、また。／またね。",
              "Friends/peers; seniors may prefer a politer close.",
            ],
            [
              "Leaving work / school",
              "お疲れ様でした。",
              "Thanks-for-work tone; not for saying bye to customers.",
            ],
            [
              "After hosting / meeting",
              "本日はありがとうございました。",
              "When they visited you today; often + shitsurei itashimasu.",
            ],
            [
              "End talk / interview",
              "失礼します。／失礼いたします。",
              "Standard close; itashimasu is politer.",
            ],
            [
              "Hang up phone",
              "失礼します。",
              "Common phone closer with clients/companies.",
            ],
          ],
        },
      ],
    },
  },
  {
    ja: {
      title: "メール・チャットの冒頭",
      blocks: [
        {
          kind: "table",
          header: ["フレーズ", "解説"],
          rows: [
            [
              "お世話になっております。",
              "継続してやり取りする会社・担当への定番の一文目。",
            ],
            [
              "いつもお世話になっております。",
              "頻繁に連絡する相手。感謝の度合いを少し上げる。",
            ],
            [
              "突然のご連絡失礼いたします。",
              "初回・久しぶりの連絡の前置き。続けて用件へ。",
            ],
            [
              "平素より大変お世話になっております。",
              "やや硬いビジネス文書の冒頭。社外の正式メールで見かける。",
            ],
            [
              "お疲れ様です。〇〇です。",
              "社内チャットのよくある型。用件の前に名乗り。",
            ],
          ],
        },
      ],
    },
    en: {
      title: "Email / chat openings",
      blocks: [
        {
          kind: "table",
          header: ["Phrase (Japanese)", "Note"],
          rows: [
            [
              "お世話になっております。",
              "Default first line to an ongoing business contact.",
            ],
            [
              "いつもお世話になっております。",
              "When you mail them often; slightly warmer thanks.",
            ],
            [
              "突然のご連絡失礼いたします。",
              "First or rare mail; then state your request.",
            ],
            [
              "平素より大変お世話になっております。",
              "Stiff formal header; external formal email.",
            ],
            [
              "お疲れ様です。〇〇です。",
              "Typical internal chat opener before your ask.",
            ],
          ],
        },
      ],
    },
  },
  {
    ja: {
      title: "使い分けのヒント（表現ごと）",
      blocks: [
        {
          kind: "table",
          header: ["フレーズ・話題", "解説"],
          rows: [
            [
              "こんにちは",
              "昼のあいさつ。夜や閉店間際の店では「こんばんは」の方が自然なことが多い。",
            ],
            [
              "さようなら",
              "教材では出やすいが、大人同士の日常では「失礼します」「じゃあまた」の方が多い場面も。",
            ],
            [
              "お疲れ様です（お客様へ）",
              "お店・窓口の店員が客に使うのは不自然になりがち。客は「ありがとうございました」などが無難。",
            ],
          ],
        },
      ],
    },
    en: {
      title: "Usage tips (by expression)",
      blocks: [
        {
          kind: "table",
          header: ["Phrase / topic (Japanese)", "Note"],
          rows: [
            [
              "こんにちは",
              "Daytime hello; at night or late shops konbanwa often fits better.",
            ],
            [
              "さようなら",
              "Common in textbooks; adults often prefer shitsurei shimasu or jā, mata.",
            ],
            [
              "お疲れ様です（お客様へ）",
              "Staff say it to peers; customers usually thank with arigatō gozaimashita instead.",
            ],
          ],
        },
      ],
    },
  },
] as const;

export const kaiwaAisatsuSections: LearnSection[] = kaiwaAisatsuSectionsBase.map(
  (sec, i) => ({
    ja: sec.ja,
    en: sec.en,
    zh: kaiwaAisatsuSectionsZh[i]!,
  }),
);
