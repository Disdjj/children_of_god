import { Round, EndingType, EndingData } from './types';

export const ENDINGS: Record<string, EndingData> = {
  [EndingType.E1_Homeless]: {
    id: EndingType.E1_Homeless,
    title: {
      zh: "Ending 01: 无声的饿殍",
      en: "Ending 01: Silent Starvation"
    },
    description: {
      zh: "你流落街头，没有担保人无法租房，没有住址无法求职。",
      en: "You live on the streets. Without a guarantor, you cannot rent a room. Without an address, you cannot find a job."
    },
    cause: {
      zh: "死因：贫困与社会性死亡",
      en: "Cause of Death: Poverty & Social Death"
    }
  },
  [EndingType.E2_Lawsuit]: {
    id: EndingType.E2_Lawsuit,
    title: {
      zh: "Ending 02: 无效的起诉",
      en: "Ending 02: Ineffective Lawsuit"
    },
    description: {
      zh: "你耗尽积蓄请律师，胜诉了但母亲自愿捐赠无法强制执行，或者教会转移资产。",
      en: "You exhausted your savings on lawyers. You won, but your mother 'voluntarily' donated the assets, making enforcement impossible."
    },
    cause: {
      zh: "死因：过劳死/心力交瘁",
      en: "Cause of Death: Karoshi (Exhaustion)"
    }
  },
  [EndingType.E3_Hospital]: {
    id: EndingType.E3_Hospital,
    title: {
      zh: "Ending 03: 精神病房的常客",
      en: "Ending 03: Regular at the Ward"
    },
    description: {
      zh: "被强制退役并送入封闭式精神病院。没有任何收入，被社会遗忘。",
      en: "Forced discharge from SDF. Institutionalized in a closed ward. Forgotten by society."
    },
    cause: {
      zh: "死因：药物镇静下的终老",
      en: "Cause of Death: Life under sedation"
    }
  },
  [EndingType.E4_Cog]: {
    id: EndingType.E4_Cog,
    title: {
      zh: "Ending 04: 平庸的齿轮",
      en: "Ending 04: Mediocre Cog"
    },
    description: {
      zh: "放弃一切抵抗，甚至放弃救哥哥，彻底断绝关系去远方打工。你变成了一个行尸走肉般的派遣工。",
      en: "You abandoned your brother and fled. You became a walking corpse of a temp worker, unmarried, dying alone."
    },
    cause: {
      zh: "死因：孤独死",
      en: "Cause of Death: Kodokushi (Lonely Death)"
    }
  },
  [EndingType.E5_Arrested]: {
    id: EndingType.E5_Arrested,
    title: {
      zh: "Ending 05: 被捕的疯子",
      en: "Ending 05: Arrested Madman"
    },
    description: {
      zh: "还没进门就被安保按在地上。被判伤害未遂，入狱2年。出狱后有前科，更找不到工作。",
      en: "Security pinned you down before you entered the church. 2 years in prison. With a criminal record, society ignores the cause."
    },
    cause: {
      zh: "死因：狱后生存失败",
      en: "Cause of Death: Post-prison survival failure"
    }
  },
  [EndingType.True_End]: {
    id: EndingType.True_End,
    title: {
      zh: "True End: 改变国家的枪声",
      en: "True End: The Gunshot"
    },
    description: {
      zh: "历史事实。你自己毁灭了，但统一教问题终于被摆上台面。",
      en: "Historical Fact. You destroyed yourself, but the Unification Church issue was finally brought to light."
    },
    cause: {
      zh: "这是唯一“成功”的结局",
      en: "The only 'success'"
    }
  }
};

export const ROUNDS: Round[] = [
  // Phase 1
  {
    id: 1,
    year: "1984",
    title: {
      zh: "父亲自杀",
      en: "Father's Suicide"
    },
    description: {
      zh: "父亲自杀。并没有儿童心理辅导介入。只有一群穿着黑西装的大人谈论保险金。",
      en: "Your father took his own life. The house is filled with black suits discussing insurance money."
    },
    imageKeyword: "funeral",
    options: [
      { 
        id: "1a", 
        text: { zh: "哭泣", en: "Cry" }, 
        feedback: { 
          zh: "并没有儿童心理辅导介入。只有一群穿着黑西装的大人谈论保险金。", 
          en: "No child psychologist intervenes. The adults only care about the money." 
        } 
      },
      { 
        id: "1b", 
        text: { zh: "茫然", en: "Stare blankly" }, 
        feedback: { 
          zh: "你感到解离。大人们夸你“很安静”。", 
          en: "You dissociate. The adults praise you for being 'quiet'." 
        } 
      }
    ]
  },
  {
    id: 2,
    year: "1988",
    title: {
      zh: "昂贵的壶",
      en: "The Vase"
    },
    description: {
      zh: "母亲带回一尊昂贵的壶。她看起来比过去几年都要快乐。",
      en: "Mother brings home an expensive vase. She looks happier than she has in years."
    },
    imageKeyword: "vase",
    options: [
      { 
        id: "2a", 
        text: { zh: "询问价格", en: "Ask price" }, 
        feedback: { 
          zh: "母亲微笑着说：“这是能够安抚父亲怨灵的神器。” 价格是3000万日元。", 
          en: "Mother smiles: 'It calms your father's spirit.' Price: 30 million yen." 
        } 
      },
      { 
        id: "2b", 
        text: { zh: "试图打破", en: "Try to break it" }, 
        feedback: { 
          zh: "母亲死命护住壶。对她来说，这比你的命还重要。", 
          en: "Mother protects the vase violently. To her, it is worth more than you." 
        } 
      }
    ]
  },
  {
    id: 3,
    year: "1991",
    title: {
      zh: "哥哥的暴力",
      en: "Brother's Violence"
    },
    description: {
      zh: "哥哥开始表现出严重的暴力倾向。家里充满了尖叫声。",
      en: "Your older brother begins to show signs of severe violent behavior due to illness."
    },
    imageKeyword: "violence",
    options: [
      { 
        id: "3a", 
        text: { zh: "报警", en: "Call Police" }, 
        feedback: { 
          zh: "警察上门：“这是家务事，孩子还在叛逆期，家长多管教。” (System: 民事不介入)", 
          en: "Police: 'This is a domestic matter. Parents should discipline their children.' (System: Civil Non-intervention)" 
        } 
      },
      { 
        id: "3b", 
        text: { zh: "忍耐", en: "Endure" }, 
        feedback: { 
          zh: "你锁上门。尖叫声持续了一整夜。", 
          en: "You lock your door. The screaming continues all night." 
        } 
      }
    ]
  },
  {
    id: 4,
    year: "1995",
    title: {
      zh: "变卖遗产",
      en: "Heritage Sold"
    },
    description: {
      zh: "母亲决定变卖祖父留下的土地。",
      en: "Mother decides to sell the land left by your grandfather."
    },
    imageKeyword: "land",
    options: [
      { 
        id: "4a", 
        text: { zh: "找亲戚告状", en: "Beg relatives for help" }, 
        feedback: { 
          zh: "母亲是法定监护人，她有权处置遗产。亲戚们无能为力。", 
          en: "Relatives turn away. 'She is the legal guardian. We cannot interfere.'" 
        } 
      },
      { 
        id: "4b", 
        text: { zh: "藏起地契", en: "Hide the deed" }, 
        feedback: { 
          zh: "你藏起地契被打了一顿，地还是卖了。钱都流向了“真父”。", 
          en: "You are beaten. The land is sold anyway. The money goes to the 'True Father'." 
        } 
      }
    ]
  },
  {
    id: 5,
    year: "1998",
    title: {
      zh: "高中毕业",
      en: "Graduation"
    },
    description: {
      zh: "高中毕业，你也是全县名校的学生。你本该有光明的未来。",
      en: "You graduated from a top high school. You have the potential for a bright future."
    },
    imageKeyword: "school",
    options: [
      { 
        id: "5a", 
        text: { zh: "努力学习", en: "Study for University" }, 
        feedback: { 
          zh: "你成绩优异，模拟考判定为A。你看不到未来，但这是唯一的稻草。但你没有学费。", 
          en: "You get an 'A' in mocks. But you have no money for tuition." 
        } 
      },
      { 
        id: "5b", 
        text: { zh: "放弃", en: "Give up" }, 
        feedback: { 
          zh: "你盯着课本发呆。书本像石头一样沉重。", 
          en: "You stare at the textbook. It feels like a heavy stone." 
        } 
      }
    ]
  },
  {
    id: 6,
    year: "1999",
    title: {
      zh: "捐赠",
      en: "Donation"
    },
    description: {
      zh: "母亲宣布：“钱都捐给真父了”。冰箱是空的。",
      en: "Mother announces: 'All money has been donated to the True Father.' The fridge is empty."
    },
    imageKeyword: "empty",
    options: [
      { 
        id: "6a", 
        text: { zh: "愤怒质问", en: "Scream in anger" }, 
        feedback: { 
          zh: "她怜悯地看着你：“你被撒旦诱惑了，你应该去教会奉献。”", 
          en: "She looks at you with pity. 'You are possessed by Satan.'" 
        } 
      },
      { 
        id: "6b", 
        text: { zh: "去市政厅申请低保", en: "Apply for Welfare" }, 
        feedback: { 
          zh: "窗口公务员：“你身体健康，才19岁，而且你母亲名下曾有巨额资产流向，不符合低保条件。”", 
          en: "City Hall: 'You are healthy and 19. Your mother had assets recently. Application rejected.'", 
        },
        triggersEnding: EndingType.E1_Homeless 
      }
    ]
  },
  // Phase 2
  {
    id: 7,
    year: "2002",
    title: {
      zh: "大学录取",
      en: "University Acceptance"
    },
    description: {
      zh: "考上大学，但没学费。",
      en: "You passed the entrance exam. Admission fee is required."
    },
    imageKeyword: "university",
    options: [
      { 
        id: "7a", 
        text: { zh: "申请奖学金", en: "Apply for Scholarship" }, 
        feedback: { 
          zh: "需要父母收入证明和签字。母亲拒绝签字：“去上学是被撒旦诱惑。” 申请失败。", 
          en: "Requires parental signature. Mother refuses: 'Education is Satan's temptation.' Application Failed." 
        } 
      },
      { 
        id: "7b", 
        text: { zh: "放弃", en: "Give up" }, 
        feedback: { 
          zh: "你撕碎了录取通知书。", 
          en: "You tear up the acceptance letter." 
        } 
      }
    ]
  },
  {
    id: 8,
    year: "2002",
    title: {
      zh: "消防员考试",
      en: "Firefighter Exam"
    },
    description: {
      zh: "试图考消防员，想成为公务员摆脱贫困。",
      en: "You try to become a public servant to escape poverty."
    },
    imageKeyword: "firefighter",
    options: [
      { 
        id: "8a", 
        text: { zh: "进行体检", en: "Take Physical Exam" }, 
        feedback: { 
          zh: "因高度近视（没钱配好眼镜矫正）体检不合格。公务员之路断绝。", 
          en: "Failed due to extreme myopia. No money for corrective surgery. Public servant route closed." 
        } 
      }
    ]
  },
  {
    id: 9,
    year: "2002",
    title: {
      zh: "家庭破产",
      en: "Bankruptcy"
    },
    description: {
      zh: "家庭宣布破产。房子被法院查封。",
      en: "The family declares bankruptcy. The house is seized by the court."
    },
    imageKeyword: "ruin",
    options: [
      { 
        id: "9a", 
        text: { zh: "逃离这个家", en: "Run away alone" }, 
        feedback: { 
          zh: "你抛弃了一切。内疚感吞噬了你，你活下来了……但只是作为一个齿轮。", 
          en: "You leave them behind. The guilt gnaws at you, but you survive... as a cog." 
        },
        triggersEnding: EndingType.E4_Cog 
      },
      { 
        id: "9b", 
        text: { zh: "留下来照顾兄妹", en: "Stay for siblings" }, 
        feedback: { 
          zh: "你们被赶了出来。只能挤在廉价旅馆里。", 
          en: "You are all evicted. You sleep in a cheap motel." 
        } 
      }
    ]
  },
  {
    id: 10,
    year: "2002",
    title: {
      zh: "海上自卫队",
      en: "Maritime Self-Defense Force"
    },
    description: {
      zh: "你看到了征兵海报。那是唯一包吃住的地方。",
      en: "You see a recruitment poster. It offers food and a bed."
    },
    imageKeyword: "ship",
    options: [
      { 
        id: "10a", 
        text: { zh: "为了爱国", en: "Join for Patriotism" }, 
        feedback: { 
          zh: "穿上了制服，但你感受不到任何荣耀。", 
          en: "The uniform fits. But you feel no pride." 
        } 
      },
      { 
        id: "10b", 
        text: { zh: "为了吃饭", en: "Join for Food" }, 
        feedback: { 
          zh: "这是唯一不需要学历的地方。你终于能吃饱了。", 
          en: "It is the only place that doesn't ask for a degree. You eat until you are full." 
        } 
      }
    ]
  },
  {
    id: 11,
    year: "2004",
    title: {
      zh: "母亲的信",
      en: "Letter from Mother"
    },
    description: {
      zh: "母亲来信了。她不是来问候的，只是为了要钱。",
      en: "A letter arrives at the base. She isn't asking how you are. She wants money."
    },
    imageKeyword: "letter",
    options: [
      { 
        id: "11a", 
        text: { zh: "撕毁", en: "Tear it up" }, 
        feedback: { 
          zh: "即使撕毁，教会的人也会找到部队门口骚扰。为了不被开除，你只能汇款。", 
          en: "Church members harass the base gate. Your superior looks at you coldly. You must pay to make them stop." 
        } 
      },
      { 
        id: "11b", 
        text: { zh: "汇款", en: "Send money" }, 
        feedback: { 
          zh: "你汇去了微薄的薪水。钱瞬间消失在教会的黑洞里。", 
          en: "You send your meager salary. It vanishes into the church." 
        } 
      }
    ]
  },
  {
    id: 12,
    year: "2005",
    title: {
      zh: "哥哥病情恶化",
      en: "Brother's Worsening"
    },
    description: {
      zh: "哥哥病情恶化，没钱治病。",
      en: "Your brother needs surgery. There is no money."
    },
    imageKeyword: "hospital",
    options: [
      { 
        id: "12a", 
        text: { zh: "找保险公司咨询", en: "Consult Insurance" }, 
        feedback: { 
          zh: "“如果投保人自杀，只有在投保一定年限后（通常2-3年）才能赔付。” 你看着条款发呆。", 
          en: "Clause: 'Suicide payout only valid after 3 years of coverage.' You stare at the clause." 
        } 
      }
    ]
  },
  // Phase 3
  {
    id: 13,
    year: "2005",
    title: {
      zh: "骗保计划",
      en: "Insurance Fraud Attempt"
    },
    description: {
      zh: "决定自杀骗保。如果死了，哥哥能拿到钱。",
      en: "If you die, your brother gets the insurance money."
    },
    imageKeyword: "rope",
    options: [
      { 
        id: "13a", 
        text: { zh: "尝试自杀", en: "Attempt Suicide" }, 
        feedback: { 
          zh: "你实施了。但在最后时刻被救下。", 
          en: "You try. But you are saved at the last moment." 
        } 
      }
    ]
  },
  {
    id: 14,
    year: "2005",
    title: {
      zh: "精神病院",
      en: "Psychiatric Ward"
    },
    description: {
      zh: "你在精神病院醒来。医生问你为什么。",
      en: "You wake up in a hospital bed. The doctor asks why."
    },
    imageKeyword: "white_room",
    options: [
      { 
        id: "14a", 
        text: { zh: "告诉医生真相", en: "Tell the truth" }, 
        feedback: { 
          zh: "医生：“很遗憾，医疗系统只能治你的抑郁症，治不了你的穷。”", 
          en: "Doctor: 'We can treat depression, but we cannot cure poverty caused by religion.'" 
        },
        triggersEnding: EndingType.E3_Hospital 
      },
      { 
        id: "14b", 
        text: { zh: "保持沉默", en: "Stay silent" }, 
        feedback: { 
          zh: "被诊断为抑郁症。随后出院。", 
          en: "Diagnosed with depression. Discharged." 
        } 
      }
    ]
  },
  {
    id: 15,
    year: "2006",
    title: {
      zh: "退役",
      en: "Discharge"
    },
    description: {
      zh: "退役，开始派遣工作。你考了一堆证，比如叉车证。",
      en: "You leave the SDF. You have licenses for Forklift and Surveying."
    },
    imageKeyword: "factory",
    options: [
      { 
        id: "15a", 
        text: { zh: "寻找工作", en: "Look for work" }, 
        feedback: { 
          zh: "因为只有高中学历且有精神病史，你只能做派遣工。", 
          en: "With only a high school diploma and a suicide attempt history, you are hired as a temp worker." 
        } 
      }
    ]
  },
  {
    id: 16,
    year: "2010",
    title: {
      zh: "孤独的十年",
      en: "The Lonely Decade"
    },
    description: {
      zh: "住在1R公寓里。你渴望连接。",
      en: "You live in a 1R apartment. You crave connection."
    },
    imageKeyword: "apartment",
    options: [
      { 
        id: "16a", 
        text: { zh: "尝试交女朋友", en: "Try dating" }, 
        feedback: { 
          zh: "没钱约会，也无法向对方解释你的家庭。由于羞耻，你放弃了。", 
          en: "You cannot explain your family situation. The shame is too great." 
        } 
      },
      { 
        id: "16b", 
        text: { zh: "沉迷网络", en: "Isolate" }, 
        feedback: { 
          zh: "你主动切断了所有亲密关系。死一般的寂静。", 
          en: "You cut all ties. The silence is deafening." 
        } 
      }
    ]
  },
  {
    id: 17,
    year: "2012",
    title: {
      zh: "安倍再选",
      en: "The Return"
    },
    description: {
      zh: "安倍晋三再次当选首相。电视里，统一教的关联团体正在为自民党拉票。",
      en: "Shinzo Abe becomes Prime Minister again. TV shows the Unification Church supporting the LDP."
    },
    imageKeyword: "tv",
    options: [
      { 
        id: "17a", 
        text: { zh: "看新闻", en: "Watch News" }, 
        feedback: { 
          zh: "一阵恶心。毁了你家庭的人正在为这个国家的领导人欢呼。", 
          en: "Nausea. The people who destroyed your family are cheering for the leader of the country." 
        } 
      },
      { 
        id: "17b", 
        text: { zh: "无视", en: "Ignore" }, 
        feedback: { 
          zh: "你关掉电视。但现实没有改变。", 
          en: "You turn off the TV. But the reality doesn't change." 
        } 
      }
    ]
  },
  {
    id: 18,
    year: "2015",
    title: {
      zh: "哥哥自杀",
      en: "Brother's Death"
    },
    description: {
      zh: "哥哥自杀了。",
      en: "Your brother commits suicide. He couldn't take it anymore."
    },
    imageKeyword: "funeral_adult",
    options: [
      { 
        id: "18a", 
        text: { zh: "去质问母亲", en: "Confront Mother" }, 
        feedback: { 
          zh: "母亲在灵堂说：“是因为我的诚意还不够，神才带走他。” 你的理智线彻底断裂。", 
          en: "Mother at funeral: 'God took him because my sincerity (money) was not enough.' Something inside you snaps." 
        } 
      },
      { 
        id: "18b", 
        text: { zh: "哭泣", en: "Cry" }, 
        feedback: { 
          zh: "眼泪带不回他，眼泪也还不了债。", 
          en: "Tears do not bring him back. Tears do not pay debts." 
        } 
      }
    ]
  },
  // Phase 4
  {
    id: 19,
    year: "2017",
    title: {
      zh: "最后的挣扎",
      en: "Last Struggle"
    },
    description: {
      zh: "拼命工作，考取了宅建（房产经纪人）资格。",
      en: "You work desperately. You get a Real Estate Agent license."
    },
    imageKeyword: "license",
    options: [
      { 
        id: "19a", 
        text: { zh: "去面试", en: "Job Interview" }, 
        feedback: { 
          zh: "年纪大（37岁）、无相关经验、眼神阴郁。面试失败。", 
          en: "Age: 37. No experience. Dark eyes. 'We will contact you.' They never do." 
        } 
      },
      { 
        id: "19b", 
        text: { zh: "继续在工厂", en: "Stay in factory" }, 
        feedback: { 
          zh: "机器的轰鸣声让你感到安心。", 
          en: "The machine noise comforts you." 
        } 
      }
    ]
  },
  {
    id: 20,
    year: "2019",
    title: {
      zh: "法律希望",
      en: "Legal Hope"
    },
    description: {
      zh: "母亲再次变卖家产。你考虑走法律途径。",
      en: "Mother sells the last assets. You think about the law."
    },
    imageKeyword: "gavel",
    options: [
      { 
        id: "20a", 
        text: { zh: "找反邪教律师咨询", en: "Consult Lawyer" }, 
        feedback: { 
          zh: "律师：“集体诉讼可能需要10年。而且你母亲是自愿的，这很难。”", 
          en: "'Class actions take 10 years. Your mother gave voluntarily. It is nearly impossible.'" 
        },
        triggersEnding: EndingType.E2_Lawsuit 
      },
      { 
        id: "20b", 
        text: { zh: "放弃", en: "Give up" }, 
        feedback: { 
          zh: "法律保护的是教会的财产权，而不是你的生存权。", 
          en: "The law protects the church's property rights over your survival." 
        } 
      }
    ]
  },
  {
    id: 21,
    year: "2020",
    title: {
      zh: "断供",
      en: "Lifeline Cut"
    },
    description: {
      zh: "叔叔停止资助（2000万日元耗尽）。他也有自己的家庭。",
      en: "Your uncle stops sending financial aid. He has his own family."
    },
    imageKeyword: "phone",
    options: [
      { 
        id: "21a", 
        text: { zh: "求叔叔", en: "Beg" }, 
        feedback: { 
          zh: "叔叔：“已经到极限了。我也有家人。你爸死后这20年，我一直在出钱啊！”", 
          en: "Uncle: 'I've given you money for 20 years since your dad died! I'm at my limit!'" 
        } 
      },
      { 
        id: "21b", 
        text: { zh: "理解叔叔", en: "Understand" }, 
        feedback: { 
          zh: "最后的经济防线崩溃。你彻底变成了一个人。", 
          en: "You are truly alone now." 
        } 
      }
    ]
  },
  {
    id: 22,
    year: "2020",
    title: {
      zh: "疫情",
      en: "Pandemic"
    },
    description: {
      zh: "新冠疫情爆发。工厂停工，你失去了收入。",
      en: "COVID-19 hits. The factory reduces shifts."
    },
    imageKeyword: "mask",
    options: [
      { 
        id: "22a", 
        text: { zh: "申请疫情补助", en: "Apply for Subsidy" }, 
        feedback: { 
          zh: "行政混乱。钱来得太晚了。", 
          en: "Administrative chaos. The money comes too late." 
        } 
      },
      { 
        id: "22b", 
        text: { zh: "缩减开支", en: "Starve" }, 
        feedback: { 
          zh: "你坐在公寓里，盯着墙壁发呆。", 
          en: "You sit in your apartment, staring at the wall." 
        } 
      }
    ]
  },
  {
    id: 23,
    year: "2021",
    title: {
      zh: "祝贺视频",
      en: "The Video"
    },
    description: {
      zh: "看到安倍给统一教活动的祝贺视频。",
      en: "You see a video message from Abe congratulating a Unification Church event."
    },
    imageKeyword: "video",
    options: [
      { 
        id: "23a", 
        text: { zh: "写信给反邪教记者", en: "Write to Journalist" }, 
        feedback: { 
          zh: "你写了信：“我不再思考该怎么活，而是思考该怎么结束。” 但信石沉大海。", 
          en: "You write to Eiji Suzuki: 'I am not thinking about how to live, but how to end it.' No reply comes." 
        } 
      },
      { 
        id: "23b", 
        text: { zh: "砸电视", en: "Smash TV" }, 
        feedback: { 
          zh: "那个微笑的男人留在了你的脑海里。", 
          en: "The smile on the screen remains in your mind." 
        } 
      }
    ]
  },
  {
    id: 24,
    year: "2021",
    title: {
      zh: "制定计划",
      en: "The Plan"
    },
    description: {
      zh: "你决定行动。谁是目标？",
      en: "You decide to act. Who is the target?"
    },
    imageKeyword: "target",
    options: [
      { 
        id: "24a", 
        text: { zh: "韩鹤子（教主）", en: "Han Hak-ja (Leader)" }, 
        feedback: { 
          zh: "韩鹤子来日本的机会因疫情取消了。你把目光转向了那个在视频里微笑的男人。", 
          en: "COVID prevents her from visiting Japan. You cannot reach her." 
        },
        triggersEnding: EndingType.E5_Arrested 
      },
      { 
        id: "24b", 
        text: { zh: "安倍晋三", en: "Shinzo Abe" }, 
        feedback: { 
          zh: "他是象征。是连接教会和这个世界的桥梁。", 
          en: "He is the symbol. The bridge between the church and the world." 
        } 
      }
    ]
  },
  // Phase 5
  {
    id: 25,
    year: "Spring 2022",
    title: {
      zh: "购买材料",
      en: "Materials"
    },
    description: {
      zh: "你需要武器。",
      en: "You need weapons."
    },
    imageKeyword: "shopping",
    options: [
      { 
        id: "25a", 
        text: { zh: "网购化肥", en: "Buy fertilizer online" }, 
        feedback: { 
          zh: "没有任何系统预警。在日本，买这些东西完全合法。", 
          en: "No system alerts. It is completely legal." 
        } 
      },
      { 
        id: "25b", 
        text: { zh: "去五金店买铁管", en: "Buy pipes at hardware store" }, 
        feedback: { 
          zh: "这只是DIY材料。没人会多问一句。", 
          en: "Just DIY supplies. Nobody asks questions." 
        } 
      }
    ]
  },
  {
    id: 26,
    year: "June 2022",
    title: {
      zh: "制作武器",
      en: "Fabrication"
    },
    description: {
      zh: "利用你在自卫队学的知识。你开始组装。",
      en: "Using SDF knowledge, you construct the device."
    },
    imageKeyword: "workbench",
    options: [
      { 
        id: "26a", 
        text: { zh: "3管枪", en: "3-barrel gun" }, 
        feedback: { 
          zh: "太重了。", 
          en: "Too heavy." 
        } 
      },
      { 
        id: "26b", 
        text: { zh: "双管猎枪", en: "Double-barreled shotgun" }, 
        feedback: { 
          zh: "胶带、木头、铁管、火药。看起来很简陋，但足以致命。", 
          en: "Tape, wood, pipes, gunpowder. It looks crude, but deadly." 
        } 
      }
    ]
  },
  {
    id: 27,
    year: "July 7, 2022",
    title: {
      zh: "冈山的试探",
      en: "Okayama"
    },
    description: {
      zh: "安倍在冈山演讲。",
      en: "Abe is speaking in Okayama."
    },
    imageKeyword: "crowd",
    options: [
      { 
        id: "27a", 
        text: { zh: "在冈山会场下手", en: "Attack here" }, 
        feedback: { 
          zh: "安检太严，且需要实名登记。你放弃了。", 
          en: "Security is tight. Names are checked. You abandon the plan." 
        } 
      },
      { 
        id: "27b", 
        text: { zh: "放弃", en: "Wait" }, 
        feedback: { 
          zh: "你查到明天他要去奈良。", 
          en: "You learn he is going to Nara tomorrow." 
        } 
      }
    ]
  },
  {
    id: 28,
    year: "July 8, 2022 (Dawn)",
    title: {
      zh: "最后的试射",
      en: "Test Fire"
    },
    description: {
      zh: "凌晨4点，教会所属的建筑。",
      en: "4:00 AM. A Unification Church building."
    },
    imageKeyword: "wall",
    options: [
      { 
        id: "28a", 
        text: { zh: "试射", en: "Test fire" }, 
        feedback: { 
          zh: "砰。墙上留下了弹孔。这是一种仪式。", 
          en: "Bang. A hole in the wall. It works. It's a ritual." 
        } 
      }
    ]
  },
  {
    id: 29,
    year: "July 8, 2022 (Morning)",
    title: {
      zh: "大和西大寺站",
      en: "Yamato-Saidaiji Station"
    },
    description: {
      zh: "他来了。",
      en: "He is coming."
    },
    imageKeyword: "station",
    options: [
      { 
        id: "29a", 
        text: { zh: "喝最后一瓶饮料", en: "Drink a soda" }, 
        feedback: { 
          zh: "你看起来像个普通的游客。警察就在几米外，但没人注意你。", 
          en: "You look like a tourist. Police are meters away, looking at traffic, not you." 
        } 
      },
      { 
        id: "29b", 
        text: { zh: "检查枪支", en: "Check weapon" }, 
        feedback: { 
          zh: "就在包里。准备好了。", 
          en: "It's in the bag. Ready." 
        } 
      }
    ]
  },
  {
    id: 30,
    year: "July 8, 2022 (11:30)",
    title: {
      zh: "演讲开始",
      en: "The Speech"
    },
    description: {
      zh: "他站在演讲台上。距离：7米。",
      en: "He stands on the podium. Distance: 7 meters."
    },
    imageKeyword: "gun",
    options: [
      { 
        id: "30a", 
        text: { zh: "前进。开火。", en: "Step forward. Fire." }, 
        feedback: { 
          zh: "声音撕裂了空气。烟雾。混乱。结束了。", 
          en: "The sound tears through the air. Smoke. Confusion. It is done." 
        },
        triggersEnding: EndingType.True_End 
      }
    ]
  }
];