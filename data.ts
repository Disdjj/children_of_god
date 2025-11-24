
import { Round, EndingType, EndingData } from './types';

export const ENDINGS: Record<string, EndingData> = {
  [EndingType.E0_Fantasy]: {
    id: EndingType.E0_Fantasy,
    title: {
      zh: "Ending 00: 虚构的夏日",
      en: "Ending 00: Fictional Summer",
      ja: "Ending 00: 虚構の夏",
      ko: "Ending 00: 허구의 여름"
    },
    description: {
      zh: "检测到致命系统错误。正在加载不存在的时间线... 你带着哥哥和妹妹逃离了。你们开了一家小居酒屋。哥哥还活着，妹妹在笑。但这只是电波中的幻影。",
      en: "FATAL SYSTEM ERROR. Loading non-existent timeline... You ran away with them. You opened a small Izakaya. He is alive. She is smiling. But this is just a phantom in the static.",
      ja: "致命的なシステムエラーを検出。存在しないタイムラインをロード中... あなたは兄と妹を連れて逃げ出した。小さな居酒屋を開いた。兄は生きていて、妹は笑っている。しかし、これは電波の中の幻影に過ぎない。",
      ko: "치명적인 시스템 오류 감지. 존재하지 않는 타임라인 로딩 중... 당신은 형과 여동생을 데리고 도망쳤다. 작은 이자카야를 열었다. 형은 살아있고, 여동생은 웃고 있다. 하지만 이것은 전파 속의 환영일 뿐이다."
    },
    cause: {
      zh: "死因：现实不存在",
      en: "Cause: Reality Not Found",
      ja: "死因：現実が存在しない",
      ko: "사인: 현실을 찾을 수 없음"
    }
  },
  [EndingType.E1_Homeless]: {
    id: EndingType.E1_Homeless,
    title: {
      zh: "Ending 01: 无声的饿殍",
      en: "Ending 01: Silent Starvation",
      ja: "Ending 01: 音もなき餓死",
      ko: "Ending 01: 소리 없는 아사"
    },
    description: {
      zh: "你试图依靠系统，但系统因为你的家庭背景拒绝了你。没有担保人，没有住址，没有未来。",
      en: "You tried to rely on the system, but it rejected you. No guarantor, no address, no future.",
      ja: "システムに頼ろうとしたが、家庭の事情を理由に拒絶された。保証人も、住所も、未来もない。",
      ko: "시스템에 의존하려 했으나, 가정 환경을 이유로 거절당했다. 보증인도, 주소도, 미래도 없다."
    },
    cause: {
      zh: "死因：贫困与社会性死亡",
      en: "Cause of Death: Poverty & Social Death",
      ja: "死因：貧困と社会的死",
      ko: "사인: 빈곤 및 사회적 죽음"
    }
  },
  [EndingType.E2_Lawsuit]: {
    id: EndingType.E2_Lawsuit,
    title: {
      zh: "Ending 02: 无效的起诉",
      en: "Ending 02: Ineffective Lawsuit",
      ja: "Ending 02: 無効な訴訟",
      ko: "Ending 02: 무효한 소송"
    },
    description: {
      zh: "你太相信法律了。官司拖了十年，母亲声称是自愿捐赠。你赢了道理，输了人生。",
      en: "You trusted the law too much. The lawsuit took a decade. You won the argument, but lost your life.",
      ja: "法律を信じすぎた。裁判は10年も続き、母は自発的な献金だと主張した。理屈では勝ったが、人生には負けた。",
      ko: "법을 너무 믿었다. 소송은 10년이나 끌었고, 어머니는 자발적인 헌금이었다고 주장했다. 논리에서는 이겼지만, 인생에서는 졌다."
    },
    cause: {
      zh: "死因：过劳死/心力交瘁",
      en: "Cause of Death: Karoshi (Exhaustion)",
      ja: "死因：過労死／極度の疲弊",
      ko: "사인: 과로사 / 심신 쇠약"
    }
  },
  [EndingType.E3_Hospital]: {
    id: EndingType.E3_Hospital,
    title: {
      zh: "Ending 03: 精神病房的常客",
      en: "Ending 03: Regular at the Ward",
      ja: "Ending 03: 精神病棟の常連",
      ko: "Ending 03: 정신병동의 단골"
    },
    description: {
      zh: "被强制退役并送入封闭式精神病院。没有任何收入，被社会遗忘。",
      en: "Forced discharge from SDF. Institutionalized in a closed ward. Forgotten by society.",
      ja: "強制的に除隊させられ、閉鎖病棟へ送られた。収入もなく、社会から忘れ去られた。",
      ko: "강제 전역 당하고 폐쇄 병동으로 보내졌다. 수입도 없이 사회에서 잊혀졌다."
    },
    cause: {
      zh: "死因：药物镇静下的终老",
      en: "Cause of Death: Life under sedation",
      ja: "死因：鎮静剤漬けの最期",
      ko: "사인: 진정제 투여 하의 생"
    }
  },
  [EndingType.E4_Cog]: {
    id: EndingType.E4_Cog,
    title: {
      zh: "Ending 04: 平庸的齿轮",
      en: "Ending 04: Mediocre Cog",
      ja: "Ending 04: 平凡な歯車",
      ko: "Ending 04: 평범한 부속품"
    },
    description: {
      zh: "为了生存，你切断了所有羁绊。你活着，但内心已经枯萎。",
      en: "To survive, you cut all ties. You live, but your heart has withered.",
      ja: "生き残るために、すべての絆を断ち切った。生きているが、心はすでに枯れ果てている。",
      ko: "살아남기 위해 모든 인연을 끊었다. 살아있지만, 마음은 이미 시들었다."
    },
    cause: {
      zh: "死因：孤独死",
      en: "Cause of Death: Kodokushi (Lonely Death)",
      ja: "死因：孤独死",
      ko: "사인: 고독사"
    }
  },
  [EndingType.E5_Arrested]: {
    id: EndingType.E5_Arrested,
    title: {
      zh: "Ending 05: 被捕的疯子",
      en: "Ending 05: Arrested Madman",
      ja: "Ending 05: 逮捕された狂人",
      ko: "Ending 05: 체포된 광인"
    },
    description: {
      zh: "行动太过鲁莽，或者目标选择错误。还没开始就结束了。",
      en: "Reckless action. It ended before it began.",
      ja: "行動があまりに無謀だった、あるいは標的を間違えた。始まる前に終わってしまった。",
      ko: "행동이 너무 무모했거나 목표 선택이 잘못되었다. 시작하기도 전에 끝났다."
    },
    cause: {
      zh: "死因：狱后生存失败",
      en: "Cause of Death: Post-prison survival failure",
      ja: "死因：出所後の生存失敗",
      ko: "사인: 출소 후 생존 실패"
    }
  },
  [EndingType.E6_Fanatic]: {
    id: EndingType.E6_Fanatic,
    title: {
      zh: "Ending 06: 完美的信徒",
      en: "Ending 06: The Perfect Believer",
      ja: "Ending 06: 完璧な信者",
      ko: "Ending 06: 완벽한 신도"
    },
    description: {
      zh: "你顺从了太久，最终成为了他们的一员。你成为了教会的干部，向下一个不幸的家庭伸出手。",
      en: "You obeyed for too long. You became one of them. Now you reach out to the next unfortunate family.",
      ja: "あまりに長く従順すぎた。結局、彼らの一員となった。あなたは教会の幹部となり、次の不幸な家族に手を差し伸べる。",
      ko: "너무 오랫동안 순종했다. 결국 그들의 일원이 되었다. 당신은 교회의 간부가 되어, 또 다른 불행한 가족에게 손을 뻗는다."
    },
    cause: {
      zh: "死因：灵魂的彻底同化",
      en: "Cause: Total assimilation of soul",
      ja: "死因：魂の完全なる同化",
      ko: "사인: 영혼의 완전한 동화"
    }
  },
  [EndingType.True_End]: {
    id: EndingType.True_End,
    title: {
      zh: "True End: 改变国家的枪声",
      en: "True End: The Gunshot",
      ja: "True End: 国を変えた銃声",
      ko: "True End: 국가를 바꾼 총성"
    },
    description: {
      zh: "历史事实。你自己毁灭了，但统一教问题终于被摆上台面。",
      en: "Historical Fact. You destroyed yourself, but the Unification Church issue was finally brought to light.",
      ja: "史実。自らを破滅させたが、統一教会の問題はようやく白日の下に晒された。",
      ko: "역사적 사실. 당신은 스스로를 파멸시켰지만, 통일교 문제는 마침내 수면 위로 드러났다."
    },
    cause: {
      zh: "唯一“成功”的结局",
      en: "The only 'success'",
      ja: "唯一の「成功」",
      ko: "유일한 '성공'"
    }
  }
};

export const ROUNDS: Round[] = [
  // Phase 1
  {
    id: 1,
    year: "1984",
    title: { zh: "父亲自杀", en: "Father's Suicide", ja: "父の自殺", ko: "아버지의 자살" },
    description: {
      zh: "父亲自杀。并没有儿童心理辅导介入。只有一群穿着黑西装的大人谈论保险金。",
      en: "Your father took his own life. The house is filled with black suits discussing insurance money.",
      ja: "父が自殺した。児童心理ケアの介入はない。黒いスーツを着た大人たちが保険金の話をしているだけだ。",
      ko: "아버지가 자살했다. 아동 심리 상담은 없었다. 검은 양복을 입은 어른들이 보험금 이야기를 하고 있을 뿐이다."
    },
    imageKeyword: "funeral",
    options: [
      { 
        id: "1a", 
        text: { zh: "哭泣并寻求安慰", en: "Cry for comfort", ja: "泣いて慰めを求める", ko: "울며 위로를 구한다" }, 
        feedback: { 
          zh: "并没有人理你。母亲忙着和教会的人说话。", 
          en: "No one answers. Mother is talking to the church.",
          ja: "誰も相手にしてくれない。母は教会の人と話すのに忙しい。",
          ko: "아무도 신경 쓰지 않는다. 어머니는 교회 사람들과 이야기하느라 바쁘다."
        },
        modifiers: { obe: 1 }
      },
      { 
        id: "1b", 
        text: { zh: "茫然", en: "Stare blankly", ja: "呆然とする", ko: "멍하니 바라본다" }, 
        feedback: { 
          zh: "你感到解离。大人们夸你“很安静”。", 
          en: "You dissociate. The adults praise you for being 'quiet'.",
          ja: "解離を感じる。大人たちは「静かだ」とあなたを褒める。",
          ko: "해리감을 느낀다. 어른들은 당신이 '얌전하다'고 칭찬한다."
        },
        modifiers: { sys: -1 }
      }
    ]
  },
  {
    id: 2,
    year: "1988",
    title: { zh: "昂贵的壶", en: "The Vase", ja: "高価な壺", ko: "비싼 항아리" },
    description: {
      zh: "母亲带回一尊昂贵的壶。她看起来比过去几年都要快乐。",
      en: "Mother brings home an expensive vase. She looks happier than she has in years.",
      ja: "母が高価な壺を持ち帰った。ここ数年で一番幸せそうに見える。",
      ko: "어머니가 비싼 항아리를 가져왔다. 지난 몇 년 중 가장 행복해 보인다."
    },
    imageKeyword: "vase",
    options: [
      { 
        id: "2a", 
        text: { zh: "询问价格", en: "Ask price", ja: "値段を聞く", ko: "가격을 묻는다" }, 
        feedback: { 
          zh: "母亲微笑着说：“这是能够安抚父亲怨灵的神器。” 价格是3000万日元。", 
          en: "Mother smiles: 'It calms your father's spirit.' Price: 30 million yen.",
          ja: "母は微笑んで言った。「これはお父さんの怨霊を鎮めるための神器なの」。価格は3000万円。",
          ko: "어머니는 미소 지으며 말했다. \"이건 아버지의 원한을 달래줄 신기(神器)란다.\" 가격은 3천만 엔."
        },
        modifiers: { obe: 1 }
      },
      { 
        id: "2b", 
        text: { zh: "试图打破", en: "Try to break it", ja: "壊そうとする", ko: "깨뜨리려 한다" }, 
        feedback: { 
          zh: "母亲死命护住壶，把你推倒在地。对她来说，这比你的命还重要。", 
          en: "Mother protects the vase violently. To her, it is worth more than you.",
          ja: "母は必死に壺をかばい、あなたを突き飛ばした。彼女にとって、それはあなたの命より重要なのだ。",
          ko: "어머니는 필사적으로 항아리를 감싸고 당신을 밀쳐냈다. 그녀에게는 그것이 당신의 목숨보다 중요하다."
        },
        modifiers: { obe: -1, fam: 1 }
      }
    ]
  },
  {
    id: 3,
    year: "1989",
    title: { zh: "哥哥的秘密", en: "Brother's Secret", ja: "兄の秘密", ko: "형의 비밀" },
    description: {
      zh: "哥哥虽然因为意外失去了一只眼睛，备受欺凌，但他偷偷把午饭钱省下来买了一台旧游戏机。",
      en: "Brother lost an eye in an accident and is bullied, but he saved his lunch money to buy an old game console.",
      ja: "兄は事故で片目を失い、いじめられているが、給食費をこっそり貯めて古いゲーム機を買った。",
      ko: "형은 사고로 한쪽 눈을 잃고 괴롭힘을 당하고 있지만, 몰래 점심값을 모아 낡은 게임기를 샀다."
    },
    imageKeyword: "gameboy",
    options: [
      {
        id: "3a",
        text: { zh: "告诉母亲", en: "Tell Mother", ja: "母に告げる", ko: "어머니에게 말한다" },
        feedback: { 
          zh: "游戏机被没收并砸碎了。哥哥在被窝里哭了一夜。", 
          en: "The console is smashed. Brother cries all night.",
          ja: "ゲーム機は没収され、粉々にされた。兄は布団の中で一晩中泣いていた。",
          ko: "게임기는 압수당하고 박살 났다. 형은 이불 속에서 밤새 울었다."
        },
        modifiers: { obe: 2, fam: -2 }
      },
      {
        id: "3b",
        text: { zh: "陪他一起玩", en: "Play with him", ja: "一緒に遊ぶ", ko: "함께 논다" },
        feedback: { 
          zh: "这是这个家里少有的笑声。虽然你们都饿着肚子。", 
          en: "Rare laughter in this house. Though you are both hungry.",
          ja: "この家では珍しい笑い声だ。二人ともお腹を空かせているけれど。",
          ko: "이 집에서 드문 웃음소리다. 둘 다 배를 곯고 있지만."
        },
        modifiers: { fam: 2, obe: -1 }
      }
    ]
  },
  {
    id: 4,
    year: "1991",
    title: { zh: "哥哥的暴力", en: "Brother's Violence", ja: "兄の暴力", ko: "형의 폭력" },
    description: {
      zh: "生活的压抑让哥哥性格大变，开始对你施暴。",
      en: "Life's pressure turns your brother violent against you.",
      ja: "生活の抑圧で兄の性格が豹変し、あなたに暴力を振るい始めた。",
      ko: "생활의 억압으로 형의 성격이 변했고, 당신에게 폭력을 휘두르기 시작했다."
    },
    imageKeyword: "violence",
    options: [
      { 
        id: "4a", 
        text: { zh: "报警", en: "Call Police", ja: "警察に通報", ko: "경찰에 신고" }, 
        feedback: { 
          zh: "警察上门：“这是家务事。” (体制信任度 +1)", 
          en: "Police: 'Domestic matter.' (System Faith +1)",
          ja: "警察が来た。「これは民事不介入（家庭の問題）です」 (体制信頼度 +1)",
          ko: "경찰이 왔다. \"가정사입니다.\" (체제 신뢰도 +1)"
        },
        modifiers: { sys: 1 }
      },
      { 
        id: "4b", 
        text: { zh: "忍耐", en: "Endure", ja: "耐える", ko: "참는다" }, 
        feedback: { 
          zh: "你锁上门。尖叫声持续了一整夜。", 
          en: "You lock your door. Screaming continues.",
          ja: "ドアに鍵をかけた。叫び声は一晩中続いた。",
          ko: "문을 잠갔다. 비명 소리가 밤새 계속되었다."
        },
        modifiers: { obe: 1 }
      }
    ]
  },
  {
    id: 5,
    year: "1995",
    title: { zh: "变卖遗产", en: "Heritage Sold", ja: "遺産売却", ko: "유산 매각" },
    description: { 
      zh: "母亲决定变卖祖父留下的土地。", 
      en: "Mother decides to sell the grandfather's land.",
      ja: "母は祖父が残した土地を売ることにした。",
      ko: "어머니는 할아버지가 남긴 땅을 팔기로 결정했다."
    },
    imageKeyword: "land",
    options: [
      { 
        id: "5a", 
        text: { zh: "找亲戚告状", en: "Beg relatives", ja: "親戚に訴える", ko: "친척에게 호소한다" }, 
        feedback: { 
          zh: "亲戚们无能为力。因为法律站在监护人那边。", 
          en: "Relatives can't help. The law is with the guardian.",
          ja: "親戚たちは無力だった。法律は保護者の味方だからだ。",
          ko: "친척들은 무력했다. 법은 보호자 편이기 때문이다."
        },
        modifiers: { sys: 1 }
      },
      { 
        id: "5b", 
        text: { zh: "藏起地契", en: "Hide the deed", ja: "権利書を隠す", ko: "문서를 숨긴다" }, 
        feedback: { 
          zh: "你被打了一顿，地还是卖了。", 
          en: "You are beaten. The land is sold.",
          ja: "殴られた挙句、土地は売られた。",
          ko: "얻어맞았고, 땅은 결국 팔렸다."
        },
        modifiers: { obe: -1 }
      }
    ]
  },
  {
    id: 6,
    year: "1998",
    title: { zh: "高中毕业", en: "Graduation", ja: "高校卒業", ko: "고교 졸업" },
    description: { 
      zh: "你本该有光明的未来。", 
      en: "You had a bright future.",
      ja: "本来なら明るい未来があったはずだ。",
      ko: "본래라면 밝은 미래가 있었을 것이다."
    },
    imageKeyword: "school",
    options: [
      { 
        id: "6a", 
        text: { zh: "努力学习", en: "Study", ja: "勉強する", ko: "공부한다" }, 
        feedback: { 
          zh: "你成绩优异，但没有学费。", 
          en: "Great grades, no money.",
          ja: "成績は優秀だが、学費がない。",
          ko: "성적은 우수하지만, 학비가 없다."
        },
        modifiers: { sys: 1 }
      },
      { 
        id: "6b", 
        text: { zh: "放弃", en: "Give up", ja: "諦める", ko: "포기한다" }, 
        feedback: { 
          zh: "书本像石头一样沉重。", 
          en: "Books feel like stones.",
          ja: "教科書が石のように重い。",
          ko: "책이 돌처럼 무겁다."
        }
      }
    ]
  },
  {
    id: 7,
    year: "1999",
    title: { zh: "捐赠", en: "Donation", ja: "献金", ko: "헌금" },
    description: { 
      zh: "“钱都捐给真父了”。冰箱是空的。", 
      en: "Fridge is empty. Money is gone.",
      ja: "「お金はすべて真のお父様に捧げた」。冷蔵庫は空っぽだ。",
      ko: "“돈은 모두 참아버님께 바쳤다.” 냉장고는 비어 있다."
    },
    imageKeyword: "empty",
    options: [
      { 
        id: "7a", 
        text: { zh: "愤怒质问", en: "Scream", ja: "怒鳴る", ko: "소리지른다" }, 
        feedback: { 
          zh: "“你被撒旦诱惑了。”", 
          en: "'You are possessed by Satan.'",
          ja: "「あなたはサタンに惑わされているのよ。」",
          ko: "“너는 사탄에게 홀렸다.”"
        },
        modifiers: { obe: -1 }
      },
      { 
        id: "7b", 
        text: { zh: "去市政厅申请低保", en: "Apply for Welfare", ja: "生活保護を申請", ko: "기초수급 신청" }, 
        feedback: { 
          zh: "“你母亲名下曾有巨额资产，不符合条件。” (进入结局)", 
          en: "Rejected due to mother's past assets. (Triggering End)",
          ja: "「お母様の名義にかつて巨額の資産があったため、条件を満たしません。」 (End)",
          ko: "“어머니 명의로 거액의 자산이 있었기 때문에, 조건에 부합하지 않습니다.” (End)"
        },
        triggersEnding: EndingType.E1_Homeless
      }
    ]
  },
  {
    id: 8,
    year: "2000",
    title: { zh: "妹妹的学费", en: "Sister's Tuition", ja: "妹の学費", ko: "여동생의 학비" },
    description: {
      zh: "妹妹想去修学旅行，需要2万日元。母亲说那是浪费。",
      en: "Sister needs 20,000 yen for a school trip. Mother says it's a waste.",
      ja: "妹が修学旅行に行きたがっている。2万円必要だが、母は無駄だと言う。",
      ko: "여동생이 수학여행을 가고 싶어 한다. 2만 엔이 필요하지만, 어머니는 낭비라고 한다."
    },
    imageKeyword: "coins",
    options: [
      {
        id: "8a",
        text: { zh: "拿出打工私房钱", en: "Give hidden savings", ja: "バイトのへそくりを渡す", ko: "아르바이트 비상금을 준다" },
        feedback: { 
          zh: "妹妹哭着抱住了你。你这周只能吃面包边了。", 
          en: "Sister hugs you crying. You eat bread crusts for a week.",
          ja: "妹は泣きながらあなたに抱きついた。あなたは今週、パンの耳だけで過ごす。",
          ko: "여동생은 울면서 당신을 안았다. 당신은 이번 주 빵 가장자리만 먹어야 한다."
        },
        modifiers: { fam: 2, obe: -1 }
      },
      {
        id: "8b",
        text: { zh: "听母亲的", en: "Listen to Mother", ja: "母に従う", ko: "어머니 말을 듣는다" },
        feedback: { 
          zh: "妹妹的眼神黯淡了下去。她开始恨这个家。", 
          en: "Sister's eyes go dull. She starts hating this home.",
          ja: "妹の瞳から光が消えた。彼女はこの家を憎み始めた。",
          ko: "여동생의 눈빛이 어두워졌다. 그녀는 이 집을 증오하기 시작했다."
        },
        modifiers: { obe: 1, fam: -2 }
      }
    ]
  },
  {
    id: 9,
    year: "2002",
    title: { zh: "大学录取", en: "University Acceptance", ja: "大学合格", ko: "대학 합격" },
    description: { 
      zh: "考上大学，但没学费。", 
      en: "Accepted, but no money.",
      ja: "大学に合格したが、学費がない。",
      ko: "대학에 합격했지만, 학비가 없다."
    },
    imageKeyword: "university",
    options: [
      { 
        id: "9a", 
        text: { zh: "申请奖学金", en: "Apply for Scholarship", ja: "奨学金を申請", ko: "장학금 신청" }, 
        feedback: { 
          zh: "母亲拒绝签字。申请失败。", 
          en: "Mother refuses to sign. Failed.",
          ja: "母が署名を拒否。申請失敗。",
          ko: "어머니가 서명을 거부했다. 신청 실패."
        },
        modifiers: { sys: 1 }
      },
      { 
        id: "9b", 
        text: { zh: "撕碎通知书", en: "Tear letter", ja: "通知書を破る", ko: "통지서를 찢는다" }, 
        feedback: { 
          zh: "你放弃了。", 
          en: "You gave up.",
          ja: "あなたは諦めた。",
          ko: "당신은 포기했다."
        },
        modifiers: { obe: 1 }
      }
    ]
  },
  {
    id: 10,
    year: "2002",
    title: { zh: "家庭破产", en: "Bankruptcy", ja: "自己破産", ko: "가정 파산" },
    description: { 
      zh: "家庭宣布破产。房子被查封。", 
      en: "Bankruptcy. House seized.",
      ja: "自己破産を宣告。家が差し押さえられた。",
      ko: "가정 파산 선고. 집이 압류되었다."
    },
    imageKeyword: "ruin",
    options: [
      { 
        id: "10a", 
        text: { zh: "逃离这个家", en: "Run away", ja: "家から逃げる", ko: "집에서 도망친다" }, 
        feedback: { 
          zh: "你抛弃了兄妹。你活下来了……但只是作为一个齿轮。", 
          en: "You abandoned them. You survived... as a cog.",
          ja: "兄妹を見捨てた。生き残ることはできた……歯車としてだけだが。",
          ko: "남매를 버렸다. 살아남았다... 하지만 하나의 부속품으로서."
        },
        triggersEnding: EndingType.E4_Cog
      },
      { 
        id: "10b", 
        text: { zh: "留下来", en: "Stay", ja: "留まる", ko: "남는다" }, 
        feedback: { 
          zh: "你们挤在廉价旅馆里。", 
          en: "You crowd into a cheap motel.",
          ja: "安いビジネスホテルに身を寄せ合う。",
          ko: "싸구려 여관방에 함께 묵는다."
        },
        modifiers: { fam: 1 }
      }
    ]
  },
  {
    id: 11,
    year: "2002",
    title: { zh: "海上自卫队", en: "SDF", ja: "海上自衛隊", ko: "해상자위대" },
    description: { 
      zh: "征兵海报。唯一包吃住的地方。", 
      en: "Recruitment poster. Free food/housing.",
      ja: "自衛官募集のポスター。衣食住が保証される唯一の場所。",
      ko: "모병 포스터. 숙식이 해결되는 유일한 곳."
    },
    imageKeyword: "ship",
    options: [
      { 
        id: "11a", 
        text: { zh: "为了爱国", en: "Patriotism", ja: "愛国のため", ko: "애국을 위해" }, 
        feedback: { 
          zh: "你感受不到荣耀。", 
          en: "No pride.",
          ja: "誇りなど感じない。",
          ko: "영광 따위는 느껴지지 않는다."
        },
        modifiers: { sys: 1 }
      },
      { 
        id: "11b", 
        text: { zh: "为了吃饭", en: "Survival", ja: "食べるため", ko: "밥을 먹기 위해" }, 
        feedback: { 
          zh: "你终于能吃饱了。", 
          en: "Finally full.",
          ja: "やっと腹一杯食べられる。",
          ko: "드디어 배불리 먹을 수 있다."
        }
      }
    ]
  },
  {
    id: 12,
    year: "2004",
    title: { zh: "母亲的信", en: "Mother's Letter", ja: "母の手紙", ko: "어머니의 편지" },
    description: { 
      zh: "她来信是为了要钱。", 
      en: "She wants money.",
      ja: "手紙は金の無心だった。",
      ko: "편지는 돈을 달라는 내용이었다."
    },
    imageKeyword: "letter",
    options: [
      { 
        id: "12a", 
        text: { zh: "撕毁", en: "Tear it up", ja: "破り捨てる", ko: "찢어 버린다" }, 
        feedback: { 
          zh: "教会骚扰部队。为了不被开除，你只能汇款。", 
          en: "Church harasses base. You pay to stay employed.",
          ja: "教会が部隊に嫌がらせをしてきた。除隊を防ぐため、送金するしかない。",
          ko: "교회가 부대에 행패를 부린다. 제대당하지 않으려면 송금할 수밖에 없다."
        },
        modifiers: { obe: -1 }
      },
      { 
        id: "12b", 
        text: { zh: "汇款", en: "Send money", ja: "送金する", ko: "송금한다" }, 
        feedback: { 
          zh: "钱消失在教会的黑洞里。", 
          en: "Money vanishes.",
          ja: "金は教会のブラックホールに消えた。",
          ko: "돈은 교회의 블랙홀로 사라졌다."
        },
        modifiers: { obe: 1 }
      }
    ]
  },
  {
    id: 13,
    year: "2005",
    title: { zh: "为了哥哥", en: "For Brother", ja: "兄のために", ko: "형을 위하여" },
    description: { 
      zh: "哥哥成年后被确诊为癌症。手术费是天文数字。你看着高额的人寿保险单，想到了一个办法。", 
      en: "Brother is diagnosed with cancer as an adult. Surgery costs are astronomical. You look at your life insurance policy and find a way.",
      ja: "兄は成人後に癌と診断された。手術費は天文学的数字だ。あなたは高額な生命保険証書を見て、ある方法を思いつく。",
      ko: "형은 성인이 된 후 암 진단을 받았다. 수술비는 천문학적이다. 당신은 고액의 생명보험 증서를 보고 한 가지 방법을 떠올린다."
    },
    imageKeyword: "rope",
    options: [
      { 
        id: "13a", 
        text: { zh: "尝试自杀骗保", en: "Suicide for Insurance", ja: "自殺して保険金を", ko: "자살로 보험금을" }, 
        feedback: { 
          zh: "你在最后时刻被救下。钱没拿到，只留下了伤疤。", 
          en: "Saved at the last moment. No money, only scars.",
          ja: "寸前で助けられた。金は手に入らず、傷跡だけが残った。",
          ko: "마지막 순간에 구조되었다. 돈은 못 받고 상처만 남았다."
        },
        modifiers: { fam: 2 }
      }
    ]
  },
  {
    id: 14,
    year: "2005",
    title: { zh: "强制退役", en: "Forced Discharge", ja: "強制除隊", ko: "강제 전역" },
    description: { 
      zh: "因为自杀未遂，自卫队认定你“精神不稳定”并强制退役。你失去了最后的安身之所。", 
      en: "Due to the suicide attempt, SDF deems you 'mentally unstable' and discharges you. You lost your last sanctuary.",
      ja: "自殺未遂により、自衛隊は「精神不安定」と認定し、強制除隊させた。最後の居場所を失った。",
      ko: "자살 미수로 자위대는 당신을 '정신 불안정'으로 판정하고 강제 전역 조치했다. 마지막 안식처를 잃었다."
    },
    imageKeyword: "gate_closed",
    options: [
      { 
        id: "14a", 
        text: { zh: "求助医生", en: "Ask Doctor", ja: "医師に相談", ko: "의사에게 도움 요청" }, 
        feedback: { 
          zh: "医疗系统治不了贫困。", 
          en: "Medicine cannot cure poverty.",
          ja: "医療制度は貧困を治療できない。",
          ko: "의료 시스템은 가난을 치료할 수 없다."
        },
        triggersEnding: EndingType.E3_Hospital,
        modifiers: { sys: 2 }
      },
      { 
        id: "14b", 
        text: { zh: "沉默离开", en: "Leave silently", ja: "無言で去る", ko: "묵묵히 떠난다" }, 
        feedback: { 
          zh: "你拿着少得可怜的退职金离开了。", 
          en: "You leave with meager severance pay.",
          ja: "わずかな退職金を持って立ち去った。",
          ko: "쥐꼬리만 한 퇴직금을 들고 떠났다."
        }
      }
    ]
  },
  {
    id: 15,
    year: "2006",
    title: { zh: "派遣工人生", en: "Temp Life", ja: "派遣生活", ko: "파견직 인생" },
    description: { 
      zh: "开始派遣工作。没有技能，只有体力。", 
      en: "Temp work begins. No skills, only labor.",
      ja: "派遣労働の始まり。スキルはなく、あるのは体力だけ。",
      ko: "파견직 시작. 기술은 없고 체력뿐이다."
    },
    imageKeyword: "factory",
    options: [
      { 
        id: "15a", 
        text: { zh: "寻找正职", en: "Look for full-time", ja: "正社員を探す", ko: "정규직을 찾는다" }, 
        feedback: { 
          zh: "只有高中学历且有自杀前科，只能做派遣工。", 
          en: "Only temp work available due to record.",
          ja: "高卒で自殺未遂歴ありでは、派遣しか道はない。",
          ko: "고졸에 자살 시도 전과가 있어 파견직밖에 할 수 없다."
        }
      }
    ]
  },
  {
    id: 16,
    year: "2010",
    title: { zh: "孤独的十年", en: "Lonely Decade", ja: "孤独な10年", ko: "고독한 10년" },
    description: { 
      zh: "住在1R公寓里。除了哥哥，没人联系你。", 
      en: "Living in 1R apartment. Only brother calls.",
      ja: "ワンルームのアパート暮らし。兄以外、誰からも連絡はない。",
      ko: "원룸 아파트 생활. 형 말고는 연락하는 사람이 없다."
    },
    imageKeyword: "apartment",
    options: [
      { 
        id: "16a", 
        text: { zh: "尝试交女朋友", en: "Try dating", ja: "彼女を作る", ko: "여자친구를 사귄다" }, 
        feedback: { 
          zh: "由于羞耻和贫穷，你放弃了。", 
          en: "Too ashamed and poor. Gave up.",
          ja: "恥と貧困のため、諦めた。",
          ko: "수치심과 가난 때문에 포기했다."
        },
        modifiers: { fam: -1 }
      },
      { 
        id: "16b", 
        text: { zh: "沉迷网络", en: "Isolate", ja: "ネットに没頭", ko: "인터넷 중독" }, 
        feedback: { 
          zh: "死一般的寂静。", 
          en: "Dead silence.",
          ja: "死のような静寂。",
          ko: "죽음 같은 정적."
        }
      }
    ]
  },
  {
    id: 17,
    year: "2013",
    title: { zh: "匕首", en: "The Dagger", ja: "短剣", ko: "단검" },
    description: { 
      zh: "哥哥的病情恶化，且身无分文。愤怒战胜了理智，他藏了一把刀，说要去教会总部找他们算账。", 
      en: "Brother's condition worsens. Penniless. Anger overcomes reason. He takes a dagger to the Church HQ.",
      ja: "兄の病状が悪化し、一文無しだ。怒りが理性を上回り、彼はナイフを隠し持ち、教会本部に乗り込むと言った。",
      ko: "형의 병세가 악화되고 빈털터리다. 분노가 이성을 압도하여, 그는 칼을 품고 교회 본부로 쳐들어가겠다고 했다."
    },
    imageKeyword: "knife",
    options: [
      { 
        id: "17a", 
        text: { zh: "阻拦他", en: "Stop him", ja: "止める", ko: "말린다" }, 
        feedback: { 
          zh: "“没用的。”你抱住虚弱的他。他倒在你怀里痛哭。", 
          en: "'It's useless.' You hold him. He collapses crying.",
          ja: "「無駄だ」。あなたは衰弱した彼を抱きしめる。彼は腕の中で泣き崩れた。",
          ko: "“소용없어.” 당신은 쇠약해진 형을 끌어안는다. 형은 품에 안겨 오열한다."
        },
        modifiers: { fam: 2, sys: 1 }
      },
      { 
        id: "17b", 
        text: { zh: "让他去", en: "Let him go", ja: "行かせる", ko: "보내준다" }, 
        feedback: { 
          zh: "他在门口就被保安拦下了。由于身体虚弱，他被像垃圾一样丢了出来。", 
          en: "Stopped by security immediately. Thrown out like trash.",
          ja: "入り口で警備員に止められた。体が弱っていたため、ゴミのように放り出された。",
          ko: "입구에서 경비원에게 제지당했다. 몸이 약해져 있었기에 쓰레기처럼 내던져졌다."
        },
        modifiers: { obe: -1 }
      }
    ]
  },
  {
    id: 18,
    year: "2014",
    title: { zh: "败北", en: "Defeat", ja: "敗北", ko: "패배" },
    description: { 
      zh: "突袭失败后，哥哥彻底绝望了。他不再提及复仇，整天盯着天花板。", 
      en: "After the failed raid, brother is in total despair. No more talk of revenge. Just staring at the ceiling.",
      ja: "襲撃失敗後、兄は完全に絶望した。復讐を口にすることなく、一日中天井を見つめている。",
      ko: "습격 실패 후, 형은 완전히 절망했다. 더 이상 복수를 언급하지 않고 하루 종일 천장만 바라본다."
    },
    imageKeyword: "ceiling",
    options: [
      { 
        id: "18a", 
        text: { zh: "鼓励他", en: "Encourage", ja: "励ます", ko: "격려한다" }, 
        feedback: { 
          zh: "你的话语很空洞。你知道没有希望。", 
          en: "Empty words. You know there is no hope.",
          ja: "あなたの言葉は空虚だ。希望がないことを知っている。",
          ko: "당신의 말은 공허하다. 희망이 없다는 걸 알고 있다."
        }
      },
      { 
        id: "18b", 
        text: { zh: "沉默陪伴", en: "Silent Company", ja: "ただ寄り添う", ko: "묵묵히 곁을 지킨다" }, 
        feedback: { 
          zh: "这就是结局的前奏。", 
          en: "The prelude to the end.",
          ja: "これが終わりの序曲だ。",
          ko: "이것이 종말의 서곡이다."
        }
      }
    ]
  },
  {
    id: 19,
    year: "2015",
    title: { zh: "哥哥自杀", en: "Brother's Death", ja: "兄の自殺", ko: "형의 자살" },
    description: { 
      zh: "哥哥自杀了。他不想再拖累你。", 
      en: "Brother commits suicide. He didn't want to be a burden.",
      ja: "兄が自殺した。もうお前の重荷になりたくない、と。",
      ko: "형이 자살했다. 더 이상 짐이 되고 싶지 않다고 했다."
    },
    imageKeyword: "funeral_adult",
    options: [
      { 
        id: "19a", 
        text: { zh: "去质问母亲", en: "Confront Mother", ja: "母を問い詰める", ko: "어머니에게 따진다" }, 
        feedback: { 
          zh: "母亲：“是因为我的钱还不够多，神才带走他。” 你崩溃了。", 
          en: "Mother: 'I didn't pay enough.' You break.",
          ja: "母：「私の献金が足りなかったから、神様が彼を連れて行かれたのよ」。あなたは崩れ落ちた。",
          ko: "어머니: “내 정성이 부족해서 하나님이 데려가신 거야.” 당신은 무너져 내렸다."
        },
        modifiers: { obe: -5, fam: 2 }
      },
      { 
        id: "19b", 
        text: { zh: "顺从母亲的解释", en: "Accept explanation", ja: "母の言葉を受け入れる", ko: "어머니의 설명을 받아들인다" }, 
        feedback: { 
          zh: "你麻木地点头。或许真的是这样？(顺从度极度上升)", 
          en: "You nod numbly. Maybe she is right? (Obedience Critical)",
          ja: "無感覚に頷く。もしかしたらそうなのかもしれない？ (従順度・極大)",
          ko: "멍하니 고개를 끄덕인다. 정말 그럴지도 몰라? (순종도 급상승)"
        },
        modifiers: { obe: 3, fam: -2 }
      }
    ]
  },
  {
    id: 20,
    year: "2017",
    title: { zh: "最后的挣扎", en: "Last Struggle", ja: "最後のあがき", ko: "마지막 발버둥" },
    description: { 
      zh: "考取了宅建资格。想要重新开始。", 
      en: "Got Real Estate license. Want to restart.",
      ja: "宅建の資格を取った。やり直したい。",
      ko: "공인중개사 자격증을 땄다. 다시 시작하고 싶다."
    },
    imageKeyword: "license",
    options: [
      { 
        id: "20a", 
        text: { zh: "去面试", en: "Interview", ja: "面接に行く", ko: "면접을 본다" }, 
        feedback: { 
          zh: "年纪大、无经验、眼神阴郁。面试失败。", 
          en: "Failed. Too old, too dark.",
          ja: "高齢、未経験、目が暗い。不採用。",
          ko: "나이 많고, 경험 없고, 눈빛이 어둡다. 면접 탈락."
        }
      }
    ]
  },
  {
    id: 21,
    year: "2019",
    title: { zh: "法律希望", en: "Legal Hope", ja: "法的希望", ko: "법적 희망" },
    description: { 
      zh: "母亲再次变卖家产。你考虑走法律途径。", 
      en: "Mother sells assets. Legal action?",
      ja: "母がまた資産を売却した。法的手段を考える。",
      ko: "어머니가 또 가산을 처분했다. 법적 대응을 고려한다."
    },
    imageKeyword: "gavel",
    options: [
      { 
        id: "21a", 
        text: { zh: "找反邪教律师", en: "Consult Lawyer", ja: "弁護士に相談", ko: "변호사와 상담" }, 
        feedback: { 
          zh: "如果你太相信系统，你会发现系统全是漏洞。", 
          en: "If you trust the system, you find only loops.",
          ja: "システムを過信すれば、それが穴だらけだと気づくだけだ。",
          ko: "시스템을 너무 믿는다면, 구멍투성이란 것만 알게 될 것이다."
        },
        triggersEnding: EndingType.E2_Lawsuit, 
        requiredStats: { sys: 2 }
      },
      { 
        id: "21b", 
        text: { zh: "放弃", en: "Give up", ja: "諦める", ko: "포기한다" }, 
        feedback: { 
          zh: "法律保护的是教会的财产权。", 
          en: "Law protects church property.",
          ja: "法律が守るのは、教会の財産権だ。",
          ko: "법이 보호하는 건 교회의 재산권이다."
        }
      }
    ]
  },
  {
    id: 22,
    year: "2020",
    title: { zh: "断供", en: "Lifeline Cut", ja: "援助打ち切り", ko: "지원 중단" },
    description: { 
      zh: "叔叔停止资助。", 
      en: "Uncle stops aid.",
      ja: "叔父からの援助が止まった。",
      ko: "삼촌의 지원이 끊겼다."
    },
    imageKeyword: "phone",
    options: [
      { 
        id: "22a", 
        text: { zh: "求叔叔", en: "Beg", ja: "懇願する", ko: "애원한다" }, 
        feedback: { 
          zh: "叔叔：“我已经到极限了。”", 
          en: "Uncle: 'I am at my limit.'",
          ja: "叔父：「もう限界だ。」",
          ko: "삼촌: “나도 한계다.”"
        }
      },
      { 
        id: "22b", 
        text: { zh: "理解", en: "Understand", ja: "理解する", ko: "이해한다" }, 
        feedback: { 
          zh: "你彻底变成了一个人。", 
          en: "Truly alone.",
          ja: "完全に一人になった。",
          ko: "철저히 혼자가 되었다."
        }
      }
    ]
  },
  {
    id: 23,
    year: "2020",
    title: { zh: "疫情", en: "Pandemic", ja: "パンデミック", ko: "팬데믹" },
    description: { 
      zh: "新冠疫情爆发。失去收入。", 
      en: "COVID. No income.",
      ja: "コロナ禍。収入が途絶える。",
      ko: "코로나 사태. 수입이 끊겼다."
    },
    imageKeyword: "mask",
    options: [
      { 
        id: "23a", 
        text: { zh: "申请疫情补助", en: "Apply Subsidy", ja: "給付金を申請", ko: "지원금 신청" }, 
        feedback: { 
          zh: "行政混乱。钱来得太晚了。", 
          en: "Money comes too late.",
          ja: "行政の混乱。金が届くのは遅すぎる。",
          ko: "행정 혼란. 돈은 너무 늦게 들어온다."
        },
        modifiers: { sys: 1 }
      },
      { 
        id: "23b", 
        text: { zh: "缩减开支", en: "Starve", ja: "食費を削る", ko: "지출을 줄인다" }, 
        feedback: { 
          zh: "你盯着墙壁发呆。", 
          en: "Staring at the wall.",
          ja: "壁を見つめて呆然とする。",
          ko: "벽을 멍하니 바라본다."
        }
      }
    ]
  },
  {
    id: 24,
    year: "2021",
    title: { zh: "祝贺视频", en: "The Video", ja: "祝賀ビデオ", ko: "축하 영상" },
    description: { 
      zh: "看到安倍给统一教的祝贺视频。", 
      en: "Abe congratulates Church.",
      ja: "安倍氏が統一教会へ送った祝賀ビデオを見た。",
      ko: "아베가 통일교에 보낸 축하 영상을 보았다."
    },
    imageKeyword: "video",
    options: [
      { 
        id: "24a", 
        text: { zh: "写信给记者", en: "Write Letter", ja: "記者に手紙を書く", ko: "기자에게 편지를 쓴다" }, 
        feedback: { 
          zh: "石沉大海。", 
          en: "No reply.",
          ja: "梨のつぶて。",
          ko: "감감무소식이다."
        }
      },
      { 
        id: "24b", 
        text: { zh: "砸电视", en: "Smash TV", ja: "テレビを壊す", ko: "TV를 부순다" }, 
        feedback: { 
          zh: "那个微笑留在了脑海里。", 
          en: "The smile remains.",
          ja: "あの笑顔が脳裏に焼き付いた。",
          ko: "그 미소가 뇌리에 박혔다."
        }
      }
    ]
  },
  {
    id: 25,
    year: "2021",
    title: { zh: "制定计划", en: "The Plan", ja: "計画", ko: "계획" },
    description: { 
      zh: "你决定行动。", 
      en: "You decide to act.",
      ja: "行動を決意する。",
      ko: "행동을 결심한다."
    },
    imageKeyword: "target",
    options: [
      {
        id: "25_fanatic",
        text: { zh: "向真父忏悔", en: "Repent to True Father", ja: "真のお父様に懺悔", ko: "참아버님께 참회" },
        feedback: { 
          zh: "你的愤怒消失了。你意识到这是神的考验。你决定回到教会。", 
          en: "Anger fades. It's a test from God. You return to the church.",
          ja: "怒りが消えた。これは神の試練だと気づく。あなたは教会に戻ることにした。",
          ko: "분노가 사라졌다. 이것은 신의 시련임을 깨닫는다. 당신은 교회로 돌아가기로 했다."
        },
        requiredStats: { obe: 4 },
        triggersEnding: EndingType.E6_Fanatic
      },
      { 
        id: "25a", 
        text: { zh: "韩鹤子（教主）", en: "Han Hak-ja", ja: "韓鶴子（総裁）", ko: "한학자 (총재)" }, 
        feedback: { 
          zh: "因疫情无法入境。目标未出现。", 
          en: "She cannot enter Japan.",
          ja: "コロナで入国できない。標的が現れない。",
          ko: "코로나로 입국 불가. 목표가 나타나지 않는다."
        },
        triggersEnding: EndingType.E5_Arrested
      },
      { 
        id: "25b", 
        text: { zh: "安倍晋三", en: "Shinzo Abe", ja: "安倍晋三", ko: "아베 신조" }, 
        feedback: { 
          zh: "他是象征。", 
          en: "He is the symbol.",
          ja: "彼は象徴だ。",
          ko: "그는 상징이다."
        }
      }
    ]
  },
  {
    id: 26,
    year: "Spring 2022",
    title: { zh: "购买材料", en: "Materials", ja: "材料購入", ko: "재료 구입" },
    description: { 
      zh: "你需要武器。", 
      en: "You need weapons.",
      ja: "武器が必要だ。",
      ko: "무기가 필요하다."
    },
    imageKeyword: "shopping",
    options: [
      { 
        id: "26a", 
        text: { zh: "网购化肥", en: "Buy fertilizer", ja: "肥料をネット注文", ko: "비료 인터넷 주문" }, 
        feedback: { 
          zh: "完全合法。", 
          en: "Legal.",
          ja: "完全に合法。",
          ko: "완전 합법."
        }
      },
      { 
        id: "26b", 
        text: { zh: "买铁管", en: "Buy pipes", ja: "鉄パイプを買う", ko: "쇠파이프 구입" }, 
        feedback: { 
          zh: "DIY材料。", 
          en: "DIY supplies.",
          ja: "DIYの材料。",
          ko: "DIY 재료."
        }
      }
    ]
  },
  {
    id: 27,
    year: "June 2022",
    title: { zh: "制作武器", en: "Fabrication", ja: "武器製造", ko: "무기 제조" },
    description: { 
      zh: "开始组装。", 
      en: "Assembly.",
      ja: "組み立て開始。",
      ko: "조립 시작."
    },
    imageKeyword: "workbench",
    options: [
      { 
        id: "27a", 
        text: { zh: "3管枪", en: "3-barrel", ja: "3連装銃", ko: "3연장 총" }, 
        feedback: { 
          zh: "太重了。", 
          en: "Too heavy.",
          ja: "重すぎる。",
          ko: "너무 무겁다."
        }
      },
      { 
        id: "27b", 
        text: { zh: "双管猎枪", en: "Shotgun", ja: "2連装銃", ko: "2연장 샷건" }, 
        feedback: { 
          zh: "足以致命。", 
          en: "Deadly.",
          ja: "十分に致死的だ。",
          ko: "충분히 치명적이다."
        }
      }
    ]
  },
  {
    id: 28,
    year: "July 7, 2022",
    title: { zh: "冈山", en: "Okayama", ja: "岡山", ko: "오카야마" },
    description: { 
      zh: "安检太严。", 
      en: "Security tight.",
      ja: "警備が厳しすぎる。",
      ko: "경비가 너무 삼엄하다."
    },
    imageKeyword: "crowd",
    options: [
      { 
        id: "28a", 
        text: { zh: "放弃", en: "Wait", ja: "諦める", ko: "포기한다" }, 
        feedback: { 
          zh: "明天他去奈良。", 
          en: "Tomorrow, Nara.",
          ja: "明日、彼は奈良へ行く。",
          ko: "내일, 그는 나라로 간다."
        }
      }
    ]
  },
  {
    id: 29,
    year: "July 8, 2022",
    title: { zh: "最后的试射", en: "Test Fire", ja: "最後の試射", ko: "마지막 시험 사격" },
    description: { 
      zh: "凌晨4点。对着墙壁。", 
      en: "4:00 AM. Against the wall.",
      ja: "午前4時。壁に向かって。",
      ko: "새벽 4시. 벽을 향해."
    },
    imageKeyword: "wall",
    options: [
      {
        id: "29_fantasy",
        text: { zh: "醒来 (!!!系统错误!!!)", en: "Wake Up (!!!SYSTEM ERROR!!!)", ja: "目覚める (!!!システムエラー!!!)", ko: "깨어난다 (!!!시스템 오류!!!)" },
        feedback: { 
          zh: "你放下了枪。这不是真的。你还在1995年。你要带他们走。", 
          en: "You drop the gun. Not real. Back to 1995. Save them.",
          ja: "銃を下ろした。これは現実じゃない。まだ1995年だ。彼らを連れて逃げるんだ。",
          ko: "총을 내려놓았다. 이건 현실이 아니다. 아직 1995년이다. 그들을 데리고 도망쳐야 한다."
        },
        requiredStats: { fam: 5 }, 
        triggersEnding: EndingType.E0_Fantasy
      },
      { 
        id: "29a", 
        text: { zh: "试射", en: "Test fire", ja: "試射", ko: "시험 사격" }, 
        feedback: { 
          zh: "砰。墙上留下了弹孔。", 
          en: "Bang. A hole in the wall.",
          ja: "バン。壁に弾痕が残った。",
          ko: "탕. 벽에 탄흔이 남았다."
        }
      }
    ]
  },
  {
    id: 30,
    year: "July 8, 2022 (Morning)",
    title: { zh: "大和西大寺", en: "Station", ja: "大和西大寺", ko: "야마토사이다이지" },
    description: { 
      zh: "他来了。", 
      en: "He is coming.",
      ja: "彼が来た。",
      ko: "그가 왔다."
    },
    imageKeyword: "station",
    options: [
      { 
        id: "30a", 
        text: { zh: "喝饮料", en: "Drink", ja: "飲み物を飲む", ko: "음료를 마신다" }, 
        feedback: { 
          zh: "没人注意你。", 
          en: "No one notices.",
          ja: "誰も気にしていない。",
          ko: "아무도 당신을 신경 쓰지 않는다."
        }
      },
      { 
        id: "30b", 
        text: { zh: "检查枪支", en: "Check gun", ja: "銃を確認", ko: "총을 확인한다" }, 
        feedback: { 
          zh: "准备好了。", 
          en: "Ready.",
          ja: "準備完了。",
          ko: "준비됐다."
        }
      }
    ]
  },
  {
    id: 31,
    year: "July 8, 2022 (11:30)",
    title: { zh: "演讲开始", en: "Speech", ja: "演説開始", ko: "연설 시작" },
    description: { 
      zh: "距离：7米。", 
      en: "Distance: 7m.",
      ja: "距離：7メートル。",
      ko: "거리: 7미터."
    },
    imageKeyword: "gun",
    options: [
      { 
        id: "31a", 
        text: { zh: "前进。开火。", en: "Fire.", ja: "前進。発砲。", ko: "전진. 발포." }, 
        feedback: { 
          zh: "声音撕裂了空气。结束了。", 
          en: "Done.",
          ja: "音が空気を切り裂いた。終わった。",
          ko: "소리가 공기를 갈랐다. 끝났다."
        },
        triggersEnding: EndingType.True_End
      }
    ]
  }
];