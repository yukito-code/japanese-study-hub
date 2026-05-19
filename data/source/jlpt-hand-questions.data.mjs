/** @type {Record<string, Record<string, { prompt: string; choices: string[]; correctIndex: number; explanation: string }[]>>} */
export const handQuestions = {
  "kanji-yomi": {
    N1: [
      {
        prompt:
          "政府は物価上昇に対し、早急な対策を下線部「迫」られている。下線部の読み方は？",
        choices: ["せま", "はか", "しば", "うなが"],
        correctIndex: 0,
        explanation: "迫られる＝せまられる。急ぎを求められる意。",
      },
      {
        prompt:
          "新しい法律の下線部「施行」は来月一日から始まる。下線部の読み方は？",
        choices: ["せこう", "しこう", "しぎょう", "せぎょう"],
        correctIndex: 1,
        explanation: "法律を実際に運用し始めることは「施行（しこう）」。",
      },
      {
        prompt:
          "彼の説明は下線部「抽象的」で、具体例がほとんどなかった。下線部の読み方は？",
        choices: ["ちゅうぞうてき", "ちゅうしょうてき", "ちゅうじょうてき", "ちゅうそうてき"],
        correctIndex: 1,
        explanation: "抽象的＝ちゅうしょうてき。",
      },
      {
        prompt:
          "その研究は医学の発展に大きく下線部「貢献」した。下線部の読み方は？",
        choices: ["こうこん", "こうけん", "こうげん", "こうか"],
        correctIndex: 1,
        explanation: "貢献＝こうけん。",
      },
      {
        prompt:
          "会議では双方の主張に下線部「矛盾」が見られた。下線部の読み方は？",
        choices: ["むじゅん", "むじん", "ほじゅん", "ほじん"],
        correctIndex: 0,
        explanation: "矛盾＝むじゅん。食い違い。",
      },
      {
        prompt:
          "彼は混乱した相場に下線部「趁機」して優良株を買い集めた。下線部の読み方は？",
        choices: ["じんき", "ちんき", "しんき", "てんき"],
        correctIndex: 1,
        explanation: "趁機＝ちんき。好機につけ込むこと。",
      },
      {
        prompt:
          "新制度は従来の方針を下線部「踏襲」している。下線部の読み方は？",
        choices: ["ふくしゅう", "とうしゅう", "とうしょう", "ふくしょう"],
        correctIndex: 1,
        explanation: "踏襲＝とうしゅう。前例どおりに踏みならすこと。",
      },
      {
        prompt:
          "契約書に下線部「瑕疵」があれば、解除を求められることがある。下線部の読み方は？",
        choices: ["けし", "かし", "かび", "けいび"],
        correctIndex: 1,
        explanation: "瑕疵＝かし。欠陥（法律・契約の用語）。",
      },
      {
        prompt:
          "円安の効果は輸出企業の業績に下線部「顕著」に表れている。下線部の読み方は？",
        choices: ["げんちょ", "けんちょ", "けんちょう", "げんちょう"],
        correctIndex: 1,
        explanation: "顕著＝けんちょ。はっきり目立つこと。",
      },
      {
        prompt:
          "両国は領海の解釈で下線部「齟齬」が生じている。下線部の読み方は？",
        choices: ["そこう", "そご", "しんご", "さご"],
        correctIndex: 1,
        explanation: "齟齬＝そご。意見・解釈の食い違い。",
      },
    ],
    N2: [
      {
        prompt:
          "この案については、関係者で十分に下線部「検討」してから決めましょう。下線部の読み方は？",
        choices: ["けんとう", "けんと", "けんてい", "けんどう"],
        correctIndex: 0,
        explanation: "検討＝けんとう。くわしく考えること。",
      },
      {
        prompt:
          "プロジェクトの失敗について、リーダーが下線部「責任」を取ると述べた。下線部の読み方は？",
        choices: ["せきにん", "せきじん", "ぜきにん", "せっきん"],
        correctIndex: 0,
        explanation: "責任＝せきにん。",
      },
      {
        prompt:
          "新商品への下線部「需要」が予想を上回り、品切れが続いている。下線部の読み方は？",
        choices: ["じゅもと", "じゅよう", "じゅうよう", "しゅよう"],
        correctIndex: 1,
        explanation: "需要＝じゅよう。求める量・ニーズ。",
      },
      {
        prompt:
          "会議で彼は環境保護の重要性を力強く下線部「主張」した。下線部の読み方は？",
        choices: ["しゅちょう", "しゅじょう", "しゅてい", "しゅちゅう"],
        correctIndex: 0,
        explanation: "主張＝しゅちょう。自分の意見をはっきり言うこと。",
      },
      {
        prompt:
          "円安は輸出企業の収益に良い下線部「影響」を与えている。下線部の読み方は？",
        choices: ["えいきょう", "えいきゅう", "えいきょ", "えいけい"],
        correctIndex: 0,
        explanation: "影響＝えいきょう。",
      },
      {
        prompt:
          "二つの案を下線部「比較」した結果、後者の方が費用が抑えられる。下線部の読み方は？",
        choices: ["ひかく", "ひこう", "ひきゃく", "ひかい"],
        correctIndex: 0,
        explanation: "比較＝ひかく。",
      },
      {
        prompt:
          "長年の労使紛争がついに下線部「解決」に向かいつつある。下線部の読み方は？",
        choices: ["かいぜつ", "かいけつ", "かいせつ", "げいけつ"],
        correctIndex: 1,
        explanation: "解決＝かいけつ。問題を片づけること。",
      },
      {
        prompt:
          "その対応は、現在の状況に下線部「適切」だと評価された。下線部の読み方は？",
        choices: ["てきせつ", "てきぜつ", "てきしつ", "てきせち"],
        correctIndex: 0,
        explanation: "適切＝てきせつ。ふさわしいこと。",
      },
      {
        prompt:
          "会社は来年度の経営下線部「方針」を本日発表した。下線部の読み方は？",
        choices: ["ほうしん", "ほうじん", "ほうせん", "ぼうしん"],
        correctIndex: 0,
        explanation: "方針＝ほうしん。進むべき方向・基本方針。",
      },
      {
        prompt:
          "国内市場が飽和し、同社は東南アジアへ下線部「進出」した。下線部の読み方は？",
        choices: ["しんしゅつ", "しんしゅう", "しんじゅつ", "しんしゅ"],
        correctIndex: 0,
        explanation: "進出＝しんしゅつ。新しい分野・地域へ進むこと。",
      },
    ],
    N3: [
      {
        prompt:
          "出発前に、ホテルの予約をもう一度下線部「確認」してください。下線部の読み方は？",
        choices: ["かくにん", "かくじん", "かくに", "かっくにん"],
        correctIndex: 0,
        explanation: "確認＝かくにん。",
      },
      {
        prompt:
          "試験に合格するため、毎日コツコツ下線部「努力」している。下線部の読み方は？",
        choices: ["どうりょく", "どりょく", "どりく", "とりょく"],
        correctIndex: 1,
        explanation: "努力＝どりょく。",
      },
      {
        prompt:
          "初めてのプレゼンで下線部「失敗」してしまい、落ち込んだ。下線部の読み方は？",
        choices: ["しつぱい", "しっぱい", "しっはい", "しつはい"],
        correctIndex: 1,
        explanation: "失敗＝しっぱい。",
      },
      {
        prompt:
          "来週のボランティア活動に、多くの学生が下線部「参加」した。下線部の読み方は？",
        choices: ["ざんか", "せんか", "さんか", "さんが"],
        correctIndex: 2,
        explanation: "参加＝さんか。",
      },
      {
        prompt:
          "台風の接近で、沿岸部の下線部「状況」が刻一刻と変わっている。下線部の読み方は？",
        choices: ["じょきょう", "じょうきゅう", "じょうけい", "じょうきょう"],
        correctIndex: 3,
        explanation: "状況＝じょうきょう。",
      },
      {
        prompt:
          "顧客の意見を聞き、サービスを下線部「改善」することにした。下線部の読み方は？",
        choices: ["かいぜん", "かいせん", "かいぜい", "がいぜん"],
        correctIndex: 0,
        explanation: "改善＝かいぜん。よりよく直すこと。",
      },
      {
        prompt:
          "この研修の下線部「目的」は、チームワークを高めることだ。下線部の読み方は？",
        choices: ["もくてい", "もくじき", "もくてき", "ぼくてき"],
        correctIndex: 2,
        explanation: "目的＝もくてき。",
      },
      {
        prompt:
          "彼の下線部「態度」が急に冷たくなり、周囲が困惑した。下線部の読み方は？",
        choices: ["たいど", "たいと", "だいど", "たど"],
        correctIndex: 0,
        explanation: "態度＝たいど。",
      },
      {
        prompt:
          "情報が不足しているうちは、下線部「判断」を控えた方がよい。下線部の読み方は？",
        choices: ["はんたん", "はんだ", "ばんだん", "はんだん"],
        correctIndex: 3,
        explanation: "判断＝はんだん。",
      },
      {
        prompt:
          "進路について、担任の先生に下線部「相談」することにした。下線部の読み方は？",
        choices: ["しょうだん", "そうたん", "しょうたん", "そうだん"],
        correctIndex: 3,
        explanation: "相談＝そうだん。",
      },
    ],
    N4: [
      {
        prompt:
          "駅から会社まで地下鉄の方が下線部「便利」だ。下線部の読み方は？",
        choices: ["べんりい", "べんり", "へんり", "べいり"],
        correctIndex: 1,
        explanation: "便利＝べんり。",
      },
      {
        prompt:
          "雨で試合が中止になり、とても下線部「残念」だった。下線部の読み方は？",
        choices: ["さんねん", "ざんねん", "ざんれん", "ざんね"],
        correctIndex: 1,
        explanation: "残念＝ざんねん。",
      },
      {
        prompt:
          "新しいシステムの使い方を、丁寧に下線部「説明」してくれた。下線部の読み方は？",
        choices: ["せちめい", "ぜつめい", "せつめい", "せつめ"],
        correctIndex: 2,
        explanation: "説明＝せつめい。",
      },
      {
        prompt:
          "旅行先で撮った下線部「写真」を、家族に見せた。下線部の読み方は？",
        choices: ["さしん", "しゃじん", "しゃせん", "しゃしん"],
        correctIndex: 3,
        explanation: "写真＝しゃしん。",
      },
      {
        prompt:
          "来週、大阪へ三日間の下線部「出張」に行く予定だ。下線部の読み方は？",
        choices: ["しゅちょう", "しゅっしょう", "しゅっちょう", "しゅうちょう"],
        correctIndex: 2,
        explanation: "出張＝しゅっちょう。仕事で遠方へ行くこと。",
      },
      {
        prompt:
          "給料は毎月、指定の下線部「銀行」口座に振り込まれる。下線部の読み方は？",
        choices: ["きんこう", "ぎんごう", "ぎんこう", "ぎんかう"],
        correctIndex: 2,
        explanation: "銀行＝ぎんこう。",
      },
      {
        prompt:
          "この道は夜になると下線部「危険」なので、避けた方がいい。下線部の読み方は？",
        choices: ["きげん", "ぎけん", "きかん", "きけん"],
        correctIndex: 3,
        explanation: "危険＝きけん。",
      },
      {
        prompt:
          "夏休みに北海道へ下線部「旅行」に行った。下線部の読み方は？",
        choices: ["りょうこう", "りょこ", "りょこう", "りょこうう"],
        correctIndex: 2,
        explanation: "旅行＝りょこう。",
      },
      {
        prompt:
          "会員証の下線部「番号」を忘れたので、窓口で聞いた。下線部の読み方は？",
        choices: ["ばんこう", "はんごう", "ばんごう", "ばんがう"],
        correctIndex: 2,
        explanation: "番号＝ばんごう。",
      },
      {
        prompt:
          "レストランで料理と飲み物を下線部「注文」した。下線部の読み方は？",
        choices: ["ちゅもん", "ちゅうもう", "じゅうもん", "ちゅうもん"],
        correctIndex: 3,
        explanation: "注文＝ちゅうもん。",
      },
    ],
    N5: [
      {
        prompt: "わたしは下線部「毎日」、日本語を勉強します。下線部の読み方は？",
        choices: ["まいじつ", "まいにち", "まいひ", "まいに"],
        correctIndex: 1,
        explanation: "毎日＝まいにち。",
      },
      {
        prompt: "弟は下線部「学校」へ歩いて行きます。下線部の読み方は？",
        choices: ["がっこ", "がくこう", "がっこう", "がっこお"],
        correctIndex: 2,
        explanation: "学校＝がっこう。",
      },
      {
        prompt: "のどが渇いたので、下線部「水」を飲みました。下線部の読み方は？",
        choices: ["すい", "みづ", "みず", "すみ"],
        correctIndex: 2,
        explanation: "水＝みず（日常の「飲み水」）。",
      },
      {
        prompt: "図書館で面白い下線部「本」を借りました。下線部の読み方は？",
        choices: ["もと", "ぼん", "ほん", "ほんん"],
        correctIndex: 2,
        explanation: "本＝ほん。",
      },
      {
        prompt: "下線部「今日」は日曜日なので、休みです。下線部の読み方は？",
        choices: ["こんにち", "きょ", "きょう", "きょお"],
        correctIndex: 2,
        explanation: "今日＝きょう。",
      },
      {
        prompt: "この部屋はとても下線部「大きい」です。下線部の読み方は？",
        choices: ["だいきい", "おおきい", "おきい", "たいきい"],
        correctIndex: 1,
        explanation: "大きい＝おおきい。",
      },
      {
        prompt: "この箱は下線部「小さい」ので、持ち運びやすいです。下線部の読み方は？",
        choices: ["しょうさい", "こさい", "ちいさい", "ちさい"],
        correctIndex: 2,
        explanation: "小さい＝ちいさい。",
      },
      {
        prompt: "田中下線部「先生」はとても親切です。下線部の読み方は？",
        choices: ["せんせ", "せんせい", "せいせん", "せんしょう"],
        correctIndex: 1,
        explanation: "先生＝せんせい。",
      },
      {
        prompt: "父は新しい下線部「車」を買いました。下線部の読み方は？",
        choices: ["しゃ", "くる", "くるま", "かるま"],
        correctIndex: 2,
        explanation: "車＝くるま（日常語）。",
      },
      {
        prompt: "下線部「朝」はパンとコーヒーを食べます。下線部の読み方は？",
        choices: ["ちょう", "あさあ", "そう", "あさ"],
        correctIndex: 3,
        explanation: "朝＝あさ。",
      },
    ],
  },
  bunmyaku: {
    N1: [
      {
        prompt: "この法案は衆議院を＿＿したが、参議院では否決された。",
        choices: ["通過", "貫徹", "踏襲", "凌駕"],
        correctIndex: 0,
        explanation: "法案が議会を「通過」する。",
      },
      {
        prompt: "実験結果は、当初の仮説と＿＿するものだった。",
        choices: ["妥協", "矛盾", "網羅", "貢献"],
        correctIndex: 1,
        explanation: "仮説と結果が食い違うときは「矛盾」する。",
      },
      {
        prompt: "彼は会社の方針に＿＿し、経営陣に辞意を伝えた。",
        choices: ["弁明", "反発", "憂慮", "施行"],
        correctIndex: 1,
        explanation: "方針に逆らう気持ちから辞める文脈では「反発」。",
      },
      {
        prompt: "その発言は、SNS上で大きな批判を＿＿した。",
        choices: ["踏襲", "凌駕", "招いた", "網羅"],
        correctIndex: 2,
        explanation: "批判を「招く」＝引き起こす。",
      },
      {
        prompt: "長い議論の末、ようやく全会一致で＿＿が成立した。",
        choices: ["齟齬", "結論", "瑕疵", "逸話"],
        correctIndex: 1,
        explanation: "議論の結果として「結論」が成立する。",
      },
      {
        prompt: "彼の研究は、がん治療の分野に大きく＿＿した。",
        choices: ["貢献", "趁機", "更迭", "抽象"],
        correctIndex: 0,
        explanation: "学術分野に「貢献」する。",
      },
      {
        prompt: "証拠が不十分なため、被告は＿＿放免となった。",
        choices: ["有罪", "無罪", "執行", "施行"],
        correctIndex: 1,
        explanation: "「無罪放免」。有罪・執行・施行は文脈不適。",
      },
      {
        prompt: "人手不足が、事業拡大の＿＿となっている。",
        choices: ["弁明", "障害", "波紋", "逸話"],
        correctIndex: 1,
        explanation: "～の「障害」となる＝妨げになる。",
      },
      {
        prompt: "両国は経済協力を＿＿に、文化交流も深めている。",
        choices: ["凌駕", "通じて", "踏襲", "趁機"],
        correctIndex: 1,
        explanation: "～を「通じて」＝手段・媒介として。",
      },
      {
        prompt: "この論文は、従来の学説に新たな＿＿を与えた。",
        choices: ["視点", "憤り", "波紋", "瑕疵"],
        correctIndex: 0,
        explanation: "学説に新しい「視点」を与える。",
      },
    ],
    N2: [
      {
        prompt: "新製品の発売に合わせて、広告を＿＿することになった。",
        choices: ["強化", "縮小", "廃止", "延期"],
        correctIndex: 0,
        explanation: "発売に合わせて宣伝を「強化」する。",
      },
      {
        prompt: "会議の＿＿が長引き、結論が出るのは明日になった。",
        choices: ["結果", "議論", "目的", "効果"],
        correctIndex: 1,
        explanation: "「議論」が長引く。",
      },
      {
        prompt: "彼は自分の意見を＿＿に述べ、反対意見には耳を貸さなかった。",
        choices: ["曖昧", "明確", "消極的", "偶然"],
        correctIndex: 1,
        explanation: "意見を「明確」に述べる。",
      },
      {
        prompt: "この地域では、若者の人口＿＿が続いている。",
        choices: ["増加", "減少", "維持", "拡大"],
        correctIndex: 1,
        explanation: "若者が減り続ける＝「減少」が続く。",
      },
      {
        prompt: "契約の内容について、双方が＿＿した。",
        choices: ["合意", "対立", "無視", "延期"],
        correctIndex: 0,
        explanation: "双方が「合意」した。",
      },
      {
        prompt: "台風の影響で、多くの便が＿＿になった。",
        choices: ["運航", "欠航", "増便", "定刻"],
        correctIndex: 1,
        explanation: "飛行機・船が飛ばない＝「欠航」。",
      },
      {
        prompt: "彼の説明は分かりやすく、聞いている人の＿＿を得た。",
        choices: ["不信", "理解", "反対", "無関心"],
        correctIndex: 1,
        explanation: "理解を「得る」＝納得してもらう。",
      },
      {
        prompt: "環境問題に対する政府の＿＿が、世論の注目を集めている。",
        choices: ["対応", "無視", "放棄", "縮小"],
        correctIndex: 0,
        explanation: "問題への「対応」が注目される。",
      },
      {
        prompt: "この資料は、会議の＿＿として配布された。",
        choices: ["参考", "障害", "拒否", "延期"],
        correctIndex: 0,
        explanation: "～として「参考」にする＝見る材料として。",
      },
      {
        prompt: "来月から、電気料金が＿＿する見込みだ。",
        choices: ["値上がり", "値下がり", "固定", "廃止"],
        correctIndex: 0,
        explanation: "料金が上がる＝「値上がり」。",
      },
    ],
    N3: [
      {
        prompt: "会議の＿＿を確認してから、資料を配布してください。",
        choices: ["日程", "天気", "味", "色"],
        correctIndex: 0,
        explanation: "会議の「日程」を確認する。",
      },
      {
        prompt: "彼は失敗を＿＿に、もう一度挑戦することにした。",
        choices: ["きっかけ", "理由", "結果", "目的"],
        correctIndex: 0,
        explanation: "失敗を「きっかけ」に＝契機として。",
      },
      {
        prompt: "この問題は、個人ではなく社会全体で＿＿すべきだ。",
        choices: ["解決", "無視", "延期", "放棄"],
        correctIndex: 0,
        explanation: "問題に「解決」すべき。",
      },
      {
        prompt: "新しいルールは、来月の一日から＿＿される。",
        choices: ["施行", "廃止", "延期", "破棄"],
        correctIndex: 0,
        explanation: "ルールが「施行」される＝実施される。",
      },
      {
        prompt: "彼女は積極的に意見を＿＿した。",
        choices: ["発表", "隠した", "破棄", "延期"],
        correctIndex: 0,
        explanation: "意見を「発表」した。",
      },
      {
        prompt: "台風が近づいているので、外出は＿＿した方がよい。",
        choices: ["控え", "増や", "急い", "続け"],
        correctIndex: 0,
        explanation: "外出を「控える」＝やめる・少なくする。",
      },
      {
        prompt: "この店は品質が良く、客の＿＿も高い。",
        choices: ["評価", "拒否", "無視", "反対"],
        correctIndex: 0,
        explanation: "客の「評価」が高い。",
      },
      {
        prompt: "彼は約束の時間に＿＿して、みんなを待たせた。",
        choices: ["遅れ", "早く", "間に合い", "急い"],
        correctIndex: 0,
        explanation: "時間に「遅れる」。",
      },
      {
        prompt: "健康のために、毎日十分な＿＿を取るようにしている。",
        choices: ["睡眠", "運動", "休み", "食事"],
        correctIndex: 0,
        explanation: "十分な「睡眠」を取る。",
      },
      {
        prompt: "この仕事は経験が必要なので、初心者には＿＿だ。",
        choices: ["難しい", "簡単", "安い", "早い"],
        correctIndex: 0,
        explanation: "経験が要る仕事は初心者に「難しい」。",
      },
    ],
    N4: [
      {
        prompt: "会議は三時からです。＿＿を忘れないでください。",
        choices: ["時間", "天気", "味", "色"],
        correctIndex: 0,
        explanation: "会議の「時間」を忘れない。",
      },
      {
        prompt: "この料理はとても＿＿です。",
        choices: ["おいしい", "高い", "遠い", "早い"],
        correctIndex: 0,
        explanation: "料理の味は「おいしい」。",
      },
      {
        prompt: "電車が遅れたので、＿＿に間に合わなかった。",
        choices: ["約束", "宿題", "買い物", "旅行"],
        correctIndex: 0,
        explanation: "「約束」に間に合わない。",
      },
      {
        prompt: "部屋が暑いので、窓を＿＿ください。",
        choices: ["開けて", "閉めて", "壊して", "捨てて"],
        correctIndex: 0,
        explanation: "暑いとき窓を「開ける」。",
      },
      {
        prompt: "明日の試験のために、今夜は＿＿します。",
        choices: ["勉強", "旅行", "買い物", "散歩"],
        correctIndex: 0,
        explanation: "試験のため「勉強」する。",
      },
      {
        prompt: "この道は車が多くて＿＿です。",
        choices: ["危ない", "安い", "静か", "広い"],
        correctIndex: 0,
        explanation: "車が多い道は「危ない」。",
      },
      {
        prompt: "荷物が重いので、＿＿持ってください。",
        choices: ["二人で", "一人で", "早く", "静かに"],
        correctIndex: 0,
        explanation: "重い荷物は「二人で」持つ。",
      },
      {
        prompt: "雨が降っているので、傘を＿＿行きましょう。",
        choices: ["持って", "置いて", "捨てて", "壊して"],
        correctIndex: 0,
        explanation: "傘を「持って」行く。",
      },
      {
        prompt: "この店は安くて、＿＿もいいです。",
        choices: ["味", "天気", "時間", "距離"],
        correctIndex: 0,
        explanation: "店の「味」がいい。",
      },
      {
        prompt: "彼は日本に＿＿に住んでいます。",
        choices: ["三年", "三人", "三冊", "三台"],
        correctIndex: 0,
        explanation: "期間は「三年」に住んでいる。",
      },
    ],
    N5: [
      {
        prompt: "わたしは＿＿、七時に起きます。",
        choices: ["毎朝", "毎年", "毎週", "毎月"],
        correctIndex: 0,
        explanation: "朝起きる＝「毎朝」。",
      },
      {
        prompt: "これはわたしの＿＿です。",
        choices: ["本", "車", "先生", "学校"],
        correctIndex: 0,
        explanation: "「わたしの本」が自然。",
      },
      {
        prompt: "すみません、トイレは＿＿ですか。",
        choices: ["どこ", "だれ", "なに", "いつ"],
        correctIndex: 0,
        explanation: "場所を聞く＝「どこ」。",
      },
      {
        prompt: "きょうは＿＿がいいです。",
        choices: ["天気", "時間", "番号", "銀行"],
        correctIndex: 0,
        explanation: "「天気がいい」。",
      },
      {
        prompt: "コーヒーを＿＿ください。",
        choices: ["一杯", "一人", "一冊", "一台"],
        correctIndex: 0,
        explanation: "飲み物は「一杯」。",
      },
      {
        prompt: "駅は＿＿です。",
        choices: ["近い", "重い", "高い", "暗い"],
        correctIndex: 0,
        explanation: "距離が近い＝「近い」。",
      },
      {
        prompt: "これは＿＿のペンです。",
        choices: ["赤い", "赤", "あか", "赤いい"],
        correctIndex: 0,
        explanation: "い形容詞で「赤いペン」。",
      },
      {
        prompt: "わたしは＿＿を食べません。",
        choices: ["肉", "水", "空", "音"],
        correctIndex: 0,
        explanation: "「肉を食べない」が自然。",
      },
      {
        prompt: "電車で＿＿へ行きます。",
        choices: ["会社", "本", "水", "朝"],
        correctIndex: 0,
        explanation: "職場へ「会社」へ行く。",
      },
      {
        prompt: "友だちと＿＿をします。",
        choices: ["会話", "旅行", "銀行", "危険"],
        correctIndex: 0,
        explanation: "「会話をする」。",
      },
    ],
  },
  iikae: {
    N1: [
      {
        prompt:
          "彼の演奏は下線部「実に」みごとだった。下線部に最も近い意味は？",
        choices: ["まことに", "いっさい", "わずかに", "たまたま"],
        correctIndex: 0,
        explanation: "実に＝まことに（本当に）。",
      },
      {
        prompt:
          "その証言は下線部「信じがたい」内容だった。下線部に最も近い意味は？",
        choices: ["信じるべき", "信じられない", "信じたくない", "信じきれない"],
        correctIndex: 1,
        explanation: "信じがたい＝信じられない（疑わしい）。",
      },
      {
        prompt: "会場は下線部「雑然と」していた。下線部に最も近い意味は？",
        choices: ["整然と", "静かに", "乱雑に", "厳かに"],
        correctIndex: 2,
        explanation: "雑然＝乱雑。整然とは対義。",
      },
      {
        prompt:
          "彼は下線部「短気」で、すぐに声を荒げる。下線部に最も近い意味は？",
        choices: ["のんき", "せっかち", "冷静", "慎重"],
        correctIndex: 1,
        explanation: "短気＝せっかち。",
      },
      {
        prompt: "その計画は下線部「頓挫した」。下線部に最も近い意味は？",
        choices: ["成功した", "延期された", "承認された", "失敗して止まった"],
        correctIndex: 3,
        explanation: "頓挫＝物事が途中で失敗してとどまること。",
      },
      {
        prompt: "彼の態度は下線部「あからさま」だった。下線部に最も近い意味は？",
        choices: ["ひそかに", "公然と", "偶然", "わずかに"],
        correctIndex: 1,
        explanation: "あからさま＝公然と（隠さずはっきり）。",
      },
      {
        prompt:
          "彼女は周囲の反対を下線部「押し切って」留学した。下線部に最も近い意味は？",
        choices: ["あきらめて", "無理にでも通して", "相談して", "延期して"],
        correctIndex: 1,
        explanation: "押し切る＝反対をおしのけて最後までやり通す。",
      },
      {
        prompt:
          "その発言は多くの人の下線部「怒りを買った」。下線部に最も近い意味は？",
        choices: ["怒りを抑えた", "怒りを引き起こした", "怒りを和らげた", "怒りを避けた"],
        correctIndex: 1,
        explanation: "怒りを買う＝怒りを引き起こす（慣用句）。",
      },
      {
        prompt: "彼の主張は下線部「筋が通っている」。下線部に最も近い意味は？",
        choices: ["矛盾している", "論理的に一貫している", "感情だけだ", "証拠がない"],
        correctIndex: 1,
        explanation: "筋が通る＝理屈として一貫している。",
      },
      {
        prompt:
          "この問題を下線部「軽視する」べきではない。下線部に最も近い意味は？",
        choices: ["重視する", "大切に扱わない", "詳しく調べる", "推薦する"],
        correctIndex: 1,
        explanation: "軽視する＝大切にしない・重要視しない。",
      },
    ],
    N2: [
      {
        prompt:
          "彼は会議で自分の意見を下線部「はっきり」述べた。下線部に最も近い意味は？",
        choices: ["あいまいに", "明確に", "小声で", "後で"],
        correctIndex: 1,
        explanation: "はっきり＝明確に。",
      },
      {
        prompt:
          "この案は、現実的ではないと下線部「見なされた」。下線部に最も近い意味は？",
        choices: ["高く評価された", "そう判断された", "無視された", "推薦された"],
        correctIndex: 1,
        explanation: "見なされる＝そう判断・扱われる。",
      },
      {
        prompt:
          "彼女は失敗を下線部「ものともせず」再挑戦した。下線部に最も近い意味は？",
        choices: ["気にして", "気にせず", "喜んで", "恐れて"],
        correctIndex: 1,
        explanation: "ものともせず＝気にしないで。",
      },
      {
        prompt:
          "価格交渉は、双方が下線部「譲らず」膠着した。下線部に最も近い意味は？",
        choices: ["急いで譲った", "ゆずらなかった", "放棄した", "延期した"],
        correctIndex: 1,
        explanation: "譲らず＝ゆずらなかった。",
      },
      {
        prompt:
          "新しい制度は、来月から下線部「順次」導入される。下線部に最も近い意味は？",
        choices: ["一度に", "順番に", "永久に", "突然"],
        correctIndex: 1,
        explanation: "順次＝順番に（次々と）。",
      },
      {
        prompt:
          "彼の説明は、専門用語が多くて下線部「わかりにくい」。下線部に最も近い意味は？",
        choices: ["理解しやすい", "理解しづらい", "短い", "正確"],
        correctIndex: 1,
        explanation: "わかりにくい＝理解しづらい。",
      },
      {
        prompt:
          "この問題は、個人の努力だけでは下線部「解決しがたい」。下線部に最も近い意味は？",
        choices: ["簡単に解決できる", "解決しにくい", "すでに解決した", "解決不要"],
        correctIndex: 1,
        explanation: "解決しがたい＝解決しにくい。",
      },
      {
        prompt:
          "会議は予定より下線部「早々に」終わった。下線部に最も近い意味は？",
        choices: ["遅く", "思ったより早く", "突然", "やっと"],
        correctIndex: 1,
        explanation: "早々に＝思ったより早い時期・時点に。",
      },
      {
        prompt:
          "彼は上司の指示に下線部「従った」。下線部に最も近い意味は？",
        choices: ["逆らった", "したがった", "無視した", "変更した"],
        correctIndex: 1,
        explanation: "従う＝したがう。",
      },
      {
        prompt:
          "その企業は経営の立て直しを下線部「余儀なくされた」。下線部に最も近い意味は？",
        choices: [
          "自発的に選んだ",
          "しかるを得ずそうせざるを得なかった",
          "拒否した",
          "延期した",
        ],
        correctIndex: 1,
        explanation: "余儀なくされる＝他に方法がなく、しかたなくそうなる。",
      },
    ],
    N3: [
      {
        prompt:
          "彼は約束の時間に下線部「ぎりぎり」間に合った。下線部に最も近い意味は？",
        choices: ["余裕をもって", "やっと・かろうじて", "早く", "全く"],
        correctIndex: 1,
        explanation: "ぎりぎり＝かろうじて・やっと。",
      },
      {
        prompt:
          "この仕事は、経験がなくても下線部「なんとか」できる。下線部に最も近い意味は？",
        choices: ["絶対にできない", "どうにか", "すぐに", "ぜんぜん"],
        correctIndex: 1,
        explanation: "なんとか＝どうにか（何とか）。",
      },
      {
        prompt:
          "彼女は失敗を下線部「気にしない」性格だ。下線部に最も近い意味は？",
        choices: ["心配する", "こだわらない", "喜ぶ", "恐れる"],
        correctIndex: 1,
        explanation: "気にしない＝こだわらない・気に留めない。",
      },
      {
        prompt:
          "台風のニュースを聞いて、下線部「不安になった」。下線部に最も近い意味は？",
        choices: ["安心した", "心配した", "喜んだ", "怒った"],
        correctIndex: 1,
        explanation: "不安になる＝心配になる。",
      },
      {
        prompt:
          "会議は予定通り下線部「進んだ」。下線部に最も近い意味は？",
        choices: ["止まった", "すすんだ", "延期された", "中止された"],
        correctIndex: 1,
        explanation: "進む＝すすむ（会議が予定どおり進行）。",
      },
      {
        prompt:
          "この店はいつも下線部「混んでいる」。下線部に最も近い意味は？",
        choices: ["すいている", "人が多い", "閉まっている", "安い"],
        correctIndex: 1,
        explanation: "混んでいる＝人・客が多い。",
      },
      {
        prompt:
          "彼は意見を下線部「はっきり」言った。下線部に最も近い意味は？",
        choices: ["小声で", "明確に", "あとで", "やめて"],
        correctIndex: 1,
        explanation: "はっきり＝明確にはっきり。",
      },
      {
        prompt:
          "試験の結果を聞いて、下線部「ほっとした」。下線部に最も近い意味は？",
        choices: ["緊張した", "安心した", "怒った", "悲しんだ"],
        correctIndex: 1,
        explanation: "ほっとする＝安心する。",
      },
      {
        prompt:
          "この問題は、すぐには下線部「解決できない」。下線部に最も近い意味は？",
        choices: ["すぐ片づけられる", "すぐには片づけられない", "もう解決した", "関係ない"],
        correctIndex: 1,
        explanation: "解決できない＝片づけられない。",
      },
      {
        prompt:
          "彼は失敗しても下線部「あきらめない」。下線部に最も近い意味は？",
        choices: ["諦める", "諦めない", "喜ぶ", "逃げる"],
        correctIndex: 1,
        explanation: "あきらめない＝諦めない。",
      },
    ],
    N4: [
      {
        prompt:
          "この料理はとても下線部「おいしい」です。下線部に最も近い意味は？",
        choices: ["まずい", "味がよい", "高い", "熱い"],
        correctIndex: 1,
        explanation: "おいしい＝味がよい。",
      },
      {
        prompt:
          "電車が遅れて、下線部「困りました」。下線部に最も近い意味は？",
        choices: ["うれしかった", "大変だった", "早かった", "安かった"],
        correctIndex: 1,
        explanation: "困る＝大変・苦になる。",
      },
      {
        prompt:
          "彼はいつも下線部「親切」です。下線部に最も近い意味は？",
        choices: ["意地悪", "やさしい", "忙しい", "高い"],
        correctIndex: 1,
        explanation: "親切＝やさしい（人に親切）。",
      },
      {
        prompt:
          "この道は下線部「危ない」です。下線部に最も近い意味は？",
        choices: ["安全", "あぶない", "広い", "静か"],
        correctIndex: 1,
        explanation: "危ない＝あぶない。",
      },
      {
        prompt:
          "会議は下線部「長かった」です。下線部に最も近い意味は？",
        choices: ["短かった", "時間がかかった", "早かった", "楽しかった"],
        correctIndex: 1,
        explanation: "長い＝時間がかかる・長時間。",
      },
      {
        prompt:
          "荷物が下線部「重い」です。下線部に最も近い意味は？",
        choices: ["軽い", "おもい", "小さい", "安い"],
        correctIndex: 1,
        explanation: "重い＝おもい。",
      },
      {
        prompt:
          "きょうは下線部「暑い」です。下線部に最も近い意味は？",
        choices: ["寒い", "あつい", "涼しい", "暗い"],
        correctIndex: 1,
        explanation: "暑い＝あつい。",
      },
      {
        prompt:
          "この本は下線部「面白い」です。下線部に最も近い意味は？",
        choices: ["つまらない", "おもしろい", "難しい", "高い"],
        correctIndex: 1,
        explanation: "面白い＝おもしろい。",
      },
      {
        prompt:
          "彼は下線部「忙しい」そうです。下線部に最も近い意味は？",
        choices: ["ひま", "いそがしい", "早い", "遅い"],
        correctIndex: 1,
        explanation: "忙しい＝いそがしい。",
      },
      {
        prompt:
          "この部屋は下線部「静か」です。下線部に最も近い意味は？",
        choices: ["うるさい", "しずか", "広い", "明るい"],
        correctIndex: 1,
        explanation: "静か＝しずか。",
      },
    ],
    N5: [
      {
        prompt:
          "わたしは毎日、日本語を下線部「べんきょう」します。下線部に最も近い意味は？",
        choices: ["遊ぶ", "学ぶ", "食べる", "寝る"],
        correctIndex: 1,
        explanation: "べんきょうする＝学ぶ。",
      },
      {
        prompt:
          "このりんごはとても下線部「あまい」です。下線部に最も近い意味は？",
        choices: ["からい", "甘い", "すっぱい", "にがい"],
        correctIndex: 1,
        explanation: "あまい＝甘い。",
      },
      {
        prompt:
          "駅は下線部「ちかい」です。下線部に最も近い意味は？",
        choices: ["遠い", "近い", "高い", "低い"],
        correctIndex: 1,
        explanation: "ちかい＝近い。",
      },
      {
        prompt:
          "きょうは下線部「あつい」です。下線部に最も近い意味は？",
        choices: ["寒い", "暑い", "涼しい", "暗い"],
        correctIndex: 1,
        explanation: "あつい＝暑い。",
      },
      {
        prompt:
          "この本は下線部「たかい」です。下線部に最も近い意味は？",
        choices: ["安い", "高い", "低い", "短い"],
        correctIndex: 1,
        explanation: "たかい（値段）＝高い。",
      },
      {
        prompt:
          "彼はとても下線部「しんせつ」です。下線部に最も近い意味は？",
        choices: ["意地悪", "親切", "忙しい", "早い"],
        correctIndex: 1,
        explanation: "しんせつ＝親切。",
      },
      {
        prompt:
          "この道は下線部「ひろい」です。下線部に最も近い意味は？",
        choices: ["狭い", "広い", "短い", "暗い"],
        correctIndex: 1,
        explanation: "ひろい＝広い。",
      },
      {
        prompt:
          "わたしは毎朝、パンを下線部「たべます」。下線部に最も近い意味は？",
        choices: ["飲む", "食べる", "見る", "聞く"],
        correctIndex: 1,
        explanation: "たべます＝食べる。",
      },
      {
        prompt:
          "電車で下線部「いきます」。下線部に最も近い意味は？",
        choices: ["来る", "行く", "帰る", "止まる"],
        correctIndex: 1,
        explanation: "いきます＝行く。",
      },
      {
        prompt:
          "友だちと下線部「はなします」。下線部に最も近い意味は？",
        choices: ["聞く", "話す", "書く", "読む"],
        correctIndex: 1,
        explanation: "はなします＝話す。",
      },
    ],
  },
};
