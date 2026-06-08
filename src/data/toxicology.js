const rawQuestions = [
  {
    "id": 1,
    "type": "multiple",
    "lecture": "9강",
    "category": "중금속 질환",
    "question": "이이타이이타이(Itai-Itai)병의 원인 중금속은?",
    "options": [
      "납(Pb)",
      "수은(Hg)",
      "카드뮴(Cd)",
      "비소(As)"
    ],
    "answer": 2,
    "explanation": "카드뮴이 철 부족 대신 뼈로 흡수 → 칼슘 흡수 방해 → 골연화증·골절. \"아프다 아프다\""
  },
  {
    "id": 2,
    "type": "multiple",
    "lecture": "9강",
    "category": "중금속 질환",
    "question": "미나마타(Minamata)병의 원인 물질은?",
    "options": [
      "무기납",
      "메틸수은(유기수은)",
      "6가 크롬",
      "카드뮴"
    ],
    "answer": 1,
    "explanation": "메틸수은에 오염된 어패류 섭취 → 신경독성. 언어장애·시야협착·운동실조."
  },
  {
    "id": 3,
    "type": "multiple",
    "lecture": "9강",
    "category": "중금속 질환",
    "question": "망간(Mn) 과다 노출로 발생하는 직업병은?",
    "options": [
      "납중독",
      "파킨슨증후군(망간증)",
      "미나마타병",
      "이이타이이타이병"
    ],
    "answer": 1,
    "explanation": "망간증은 파킨슨증후군과 유사한 증상. 용접공이 대표적 노출 집단."
  },
  {
    "id": 4,
    "type": "multiple",
    "lecture": "9강",
    "category": "중금속 질환",
    "question": "6가 크롬(Cr⁶⁺) 직업 노출로 발생하는 특징적 질환은?",
    "options": [
      "망간증",
      "골연화증",
      "비중격천공(코뚫림병)",
      "용혈성 빈혈"
    ],
    "answer": 2,
    "explanation": "6가 크롬 → 비중격천공(코 연골이 녹아 구멍), 폐암, 비강암. \"아린 브로코비치\" 사건."
  },
  {
    "id": 5,
    "type": "multiple",
    "lecture": "9강",
    "category": "중금속 기초",
    "question": "다음 중 중금속의 독성 기전으로 옳지 않은 것은?",
    "options": [
      "산화적 스트레스(ROS 생성)",
      "산-염기 중화 반응",
      "필수금속 치환",
      "항산화 방어 파괴"
    ],
    "answer": 1,
    "explanation": "중금속 4대 독성 기전: ①산화적 스트레스 ②단백질/효소 기능장애 ③필수금속 치환 ④항산화 방어 파괴. 산-염기 중화는 해당 없음."
  },
  {
    "id": 6,
    "type": "multiple",
    "lecture": "9강",
    "category": "방사성 원소",
    "question": "다음 중 방사선의 종류와 특성에 대한 설명으로 옳은 것은?",
    "options": [
      "알파선은 방사선 중 투과력이 가장 강하다",
      "베타선은 감마선보다 투과력이 강하다",
      "감마선은 납이나 콘크리트로 차폐가 필요한 강한 투과력을 가진다",
      "알파선은 차폐에 납 벽이 필요하다"
    ],
    "answer": 2,
    "explanation": "투과력: 감마선 > 베타선 > 알파선. 알파선은 종이 한 장으로 차단 가능. 감마선은 납·콘크리트 차폐 필요."
  },
  {
    "id": 7,
    "type": "multiple",
    "lecture": "9강",
    "category": "발암성",
    "question": "IARC 발암성 분류 중 \"인체 발암성 증거 충분(Carcinogenic to humans)\"에 해당하는 군은?",
    "options": [
      "3군",
      "2B군",
      "2A군",
      "1군"
    ],
    "answer": 3,
    "explanation": "IARC 1군: 인체 발암성 확정. 2A군: 가능성 높음. 2B군: 가능성 있음. 3군: 분류 불가."
  },
  {
    "id": 8,
    "type": "multiple",
    "lecture": "9강",
    "category": "중금속 기초",
    "question": "무기비소(Inorganic As)와 유기비소(Organic As)의 독성 비교로 옳은 것은?",
    "options": [
      "유기비소가 무기비소보다 독성 강함",
      "무기비소가 유기비소보다 독성 강함",
      "두 형태의 독성은 동일",
      "형태와 무관하게 양에만 의존"
    ],
    "answer": 1,
    "explanation": "무기비소(As³⁺·As⁵⁺) > 유기비소(MMAV·DMAV) 독성. 무기 3가(As³⁺)가 가장 독성 강함."
  },
  {
    "id": 9,
    "type": "multiple",
    "lecture": "9강",
    "category": "독성 개념",
    "question": "LD50(반수치사량)의 올바른 정의는?",
    "options": [
      "실험동물 10%를 사망시키는 투여량",
      "실험동물 50%를 사망시키는 투여량",
      "독성 영향이 처음 나타나는 최저 농도",
      "법적 허용 노출기준의 절반"
    ],
    "answer": 1,
    "explanation": "LD50(Lethal Dose 50): 집단의 50%를 사망시키는 투여량. mg/kg으로 표현. 낮을수록 독성 강함."
  },
  {
    "id": 10,
    "type": "multiple",
    "lecture": "9강",
    "category": "독성 개념",
    "question": "급성독성과 만성독성의 비교로 올바른 것은?",
    "options": [
      "급성독성은 저농도 반복 노출, 만성독성은 고농도 단기 노출",
      "급성독성은 단기 고농도 노출로 빠르게 나타나고, 만성독성은 저농도 장기 반복 노출로 서서히 나타남",
      "두 독성은 동일한 농도·시간에서 발생",
      "만성독성은 항상 급성독성보다 회복이 쉽다"
    ],
    "answer": 1,
    "explanation": "급성: 단기·고농도. 만성: 장기·저농도 반복. 직업성 질환 대부분이 만성독성(잠복기·다중원인·비특이성)."
  },
  {
    "id": 11,
    "type": "multiple",
    "lecture": "9강",
    "category": "중금속 기초",
    "question": "비소(As) 만성 노출에서 특이적으로 나타나는 피부 소견은?",
    "options": [
      "빌리루빈 상승으로 피부와 눈이 노랗게 변하는 황달 소견",
      "흑피증과 각화증처럼 색소침착·피부 과각화가 나타나는 소견",
      "말초 산소 부족으로 입술과 손끝이 파랗게 보이는 청색증",
      "알레르기성 혈관부종처럼 급성 부종과 두드러기가 주로 나타남"
    ],
    "answer": 1,
    "explanation": "비소 만성 노출 → 피부 흑피증, 손발바닥 각화증, Bowen병. 장기 노출 시 피부암 위험."
  },
  {
    "id": 12,
    "type": "multiple",
    "lecture": "9강",
    "category": "중금속 기초",
    "question": "벤젠 만성 노출의 주요 표적기관과 대표 질환은?",
    "options": [
      "신장 → 신장암",
      "골수 → 급성골수성백혈병(AML)",
      "폐 → 폐암",
      "간 → 간암"
    ],
    "answer": 1,
    "explanation": "벤젠: 골수독성. 대사체(에폭사이드)가 골수 세포 DNA 손상 → 급성골수성백혈병(AML), 재생불량성 빈혈."
  },
  {
    "id": 13,
    "type": "fill",
    "lecture": "9강",
    "category": "생체축적",
    "question": "먹이사슬을 통해 상위 영양단계 생물일수록 독성물질 농도가 높아지는 현상을 [①]이라 한다.",
    "blanks": [
      {
        "id": "①",
        "label": "①"
      }
    ],
    "answers": [
      [
        "생물농축",
        "Biomagnification",
        "biomagnification"
      ]
    ],
    "explanation": "생물농축(Biomagnification): 생체축적이 먹이사슬을 통해 증폭. DDT·메틸수은 등 지용성 물질에서 두드러짐."
  },
  {
    "id": 14,
    "type": "fill",
    "lecture": "9강",
    "category": "생체축적",
    "question": "간에서 담즙으로 분비된 물질이 장에서 재흡수되어 간으로 돌아오는 순환을 [①]이라 하며, 독성물질의 체내 축적을 증가시킨다.",
    "blanks": [
      {
        "id": "①",
        "label": "①"
      }
    ],
    "answers": [
      [
        "장간순환",
        "Enterohepatic Circulation",
        "enterohepatic circulation"
      ]
    ],
    "explanation": "장간순환(Enterohepatic Circulation): 담즙 분비→장 재흡수→간 재순환. 독성물질 체류시간 연장 → 축적 증가."
  },
  {
    "id": 15,
    "type": "fill",
    "lecture": "9강",
    "category": "발암성",
    "question": "IARC 1군 발암 중금속으로 지정된 물질: [①], 6가 크롬(Cr⁶⁺), 카드뮴(Cd), 니켈(Ni).",
    "blanks": [
      {
        "id": "①",
        "label": "①"
      }
    ],
    "answers": [
      [
        "비소",
        "As",
        "비소(As)",
        "arsenic"
      ]
    ],
    "explanation": "IARC Group 1(인체 발암성 충분 증거): 비소·6가 크롬·카드뮴·니켈. 산업보건 핵심 중금속."
  },
  {
    "id": 16,
    "type": "multiple",
    "lecture": "9강",
    "category": "독성 개념",
    "question": "독성 금속이 필수 금속을 대체하는 기전의 예로 올바른 것은?",
    "options": [
      "수은이 Na⁺ 대신 신경세포 나트륨 채널에 결합",
      "납(Pb)이 Ca²⁺ 대신 뼈에 축적되고 효소 반응에 개입",
      "비소가 Fe²⁺ 대신 헤모글로빈에 결합",
      "카드뮴이 Mg²⁺ 대신 뼈 기질에 결합"
    ],
    "answer": 1,
    "explanation": "납(Pb) ↔ Ca²⁺: 형태 유사 → 뼈에 축적, Ca 의존 효소(ALAD 등) 방해. Cd ↔ Zn²⁺, Hg ↔ -SH기 등도 유사 기전."
  },
  {
    "id": 17,
    "type": "multiple",
    "lecture": "9강",
    "category": "중금속 기초",
    "question": "킬레이트제(Chelating Agent)의 작용 원리는?",
    "options": [
      "항산화효소를 활성화하여 ROS 제거",
      "금속 이온과 안정적 복합체 형성 → 소변 배설 촉진",
      "장간순환을 차단하여 흡수 억제",
      "혈뇌장벽을 강화하여 신경 보호"
    ],
    "answer": 1,
    "explanation": "킬레이트제: 금속 이온과 결합 → 수용성 복합체 → 신장으로 배설 촉진. 체내 자유 이온 감소."
  },
  {
    "id": 18,
    "type": "multiple",
    "lecture": "9강",
    "category": "중금속 기초",
    "question": "유기수은(메틸수은)이 무기수은보다 독성이 강한 주된 이유는?",
    "options": [
      "수용성이 높아 빠르게 배설된다",
      "지용성으로 혈뇌장벽을 쉽게 통과한다",
      "신장에 선택적으로 축적된다",
      "반감기가 무기수은보다 짧다"
    ],
    "answer": 1,
    "explanation": "메틸수은은 지용성 → 혈뇌장벽 통과 → 뇌·중추신경계 손상 (미나마타병)."
  },
  {
    "id": 19,
    "type": "fill",
    "lecture": "9강",
    "category": "신경독성",
    "question": "어린이가 납(Pb) 독성에 특히 취약한 이유 중 하나는 [①]이(가) 성인보다 미발달 상태이기 때문이다.",
    "blanks": [
      {
        "id": "①",
        "label": "①"
      }
    ],
    "answers": [
      [
        "혈뇌장벽",
        "BBB",
        "blood-brain barrier"
      ]
    ],
    "explanation": "어린이 납 취약 이유: 호흡량 많음, Ca 대신 납 흡수, 혈뇌장벽(BBB) 미성숙, CNS 아직 발달 중."
  },
  {
    "id": 20,
    "type": "match",
    "lecture": "9강",
    "category": "중금속 기초",
    "question": "다음 설명이 가리키는 중금속 독성 메커니즘은?\n\n\"독성 금속이 아연·칼슘 등 필수 금속과 화학적으로 유사하여, 필수 금속이 결합하는 단백질/효소 자리를 빼앗아 정상 기능을 방해하는 메커니즘\"",
    "answer": "필수금속 치환(Essential Metal Displacement)",
    "accepts": [
      "필수금속 치환(Essential Metal Displacement)",
      "Essential",
      "Metal",
      "Displacement",
      "필수금속 치환"
    ],
    "explanation": "필수금속 치환. 예: 카드뮴→아연, 납→칼슘."
  },
  {
    "id": 21,
    "type": "multiple",
    "lecture": "10강",
    "category": "독성동태",
    "question": "다음 중 생체변환(biotransformation) 후 독성이 오히려 증가하는 경우(bioactivation)는?",
    "options": [
      "납 → 아세트산납",
      "벤젠 → 무코닉산",
      "메탄올 → 포름알데히드",
      "수은 → 황화수은"
    ],
    "answer": 2,
    "explanation": "메탄올 → 포름알데히드(독성 강화)가 대표적. 벤젠 → 에폭사이드(골수독성)도 해당."
  },
  {
    "id": 22,
    "type": "multiple",
    "lecture": "10강",
    "category": "표적 장기",
    "question": "납(Pb)의 주요 표적 장기가 아닌 것은?",
    "options": [
      "뼈(축적)",
      "혈액(조혈계)",
      "신경계",
      "폐(주 배설)"
    ],
    "answer": 3,
    "explanation": "납: 뼈(축적), 혈액(ALAD 억제), 신경계가 주 표적. 배설은 주로 신장(소변). 폐는 주 배설기관 아님."
  },
  {
    "id": 23,
    "type": "multiple",
    "lecture": "10강",
    "category": "독성동태",
    "question": "독성동태(Toxicokinetics) ADME의 올바른 순서는?",
    "options": [
      "대사(M) → 흡수(A) → 분포(D) → 배설(E)",
      "흡수(A) → 분포(D) → 대사(M) → 배설(E)",
      "흡수(A) → 대사(M) → 분포(D) → 배설(E)",
      "분포(D) → 흡수(A) → 대사(M) → 배설(E)"
    ],
    "answer": 1,
    "explanation": "ADME = Absorption(흡수) → Distribution(분포) → Metabolism(대사) → Excretion(배설)."
  },
  {
    "id": 24,
    "type": "multiple",
    "lecture": "10강",
    "category": "노출평가",
    "question": "작업환경 노출기준 중 \"단 한 순간도 초과해서는 안 되는\" 기준은?",
    "options": [
      "TWA(시간가중평균)",
      "STEL(단시간 노출기준)",
      "Ceiling(C, 최고허용농도)",
      "LOAEL"
    ],
    "answer": 2,
    "explanation": "Ceiling(최고허용농도): 순간이라도 초과 불가. TWA는 8시간 평균. STEL은 15분 평균 기준."
  },
  {
    "id": 25,
    "type": "multiple",
    "lecture": "10강",
    "category": "독성동태",
    "question": "혈뇌장벽(BBB)을 통과하기 어려운 물질의 특성은?",
    "options": [
      "지용성이 높고 분자량이 작다",
      "수용성이 높고 분자량이 크다",
      "이온화되지 않는 중성 분자",
      "지질이중막과 친화성이 높다"
    ],
    "answer": 1,
    "explanation": "BBB 통과 어려운 물질: 수용성↑·분자량 큰 물질·이온화된 분자. 유기수은은 지용성이라 BBB 쉽게 통과."
  },
  {
    "id": 26,
    "type": "multiple",
    "lecture": "10강",
    "category": "독성동태",
    "question": "독성물질의 흡수 속도를 빠른 순서대로 바르게 나열한 것은?",
    "options": [
      "경구>호흡기>경피",
      "호흡기>경피>경구",
      "경피>경구>호흡기",
      "경구>경피>호흡기"
    ],
    "answer": 1,
    "explanation": "흡수 속도: 호흡기(폐, 표면적 70㎡·혈관 풍부) > 경피(지용성 물질) > 경구(소화·간 통과). 직업 노출에서 흡입이 가장 중요."
  },
  {
    "id": 27,
    "type": "multiple",
    "lecture": "10강",
    "category": "독성동태",
    "question": "1차 통과효과(First-pass Effect)가 가장 크게 나타나는 투여 경로는?",
    "options": [
      "정맥 주사",
      "흡입(호흡기)",
      "경구(소화기)",
      "경피(피부)"
    ],
    "answer": 2,
    "explanation": "경구 투여: 흡수 → 간문맥 → 간 초회 대사 → 전신 도달량 감소. 정맥·흡입은 간 초회 통과 없음 → 생체이용률 높음."
  },
  {
    "id": 28,
    "type": "multiple",
    "lecture": "10강",
    "category": "역학",
    "question": "직업성 암의 특징으로 옳지 않은 것은?",
    "options": [
      "잠복기가 수년~수십년으로 길다",
      "다중 원인성을 가진다",
      "항상 특이적 증상으로 직업성 여부를 알 수 있다",
      "개인 감수성 차이가 존재한다"
    ],
    "answer": 2,
    "explanation": "직업성 암은 비특이적 → 일반 암과 구별 어려움. 잠복기·다중원인성·비특이성이 인과판단의 어려움."
  },
  {
    "id": 29,
    "type": "match",
    "lecture": "10강",
    "category": "바이오마커",
    "question": "다음 설명이 가리키는 개념은?\n\n\"노출, 생체 내 변화, 초기 생물학적 영향 등을 혈액·소변·호기 등 생체 시료에서 측정하는 지표\"",
    "answer": "바이오마커(Biomarker)",
    "accepts": [
      "바이오마커",
      "Biomarker",
      "생체지표",
      "생물학적 지표"
    ],
    "explanation": "바이오마커는 노출·영향·감수성 등을 생체 시료에서 측정하는 지표이다."
  },
  {
    "id": 30,
    "type": "match",
    "lecture": "10강",
    "category": "바이오마커",
    "question": "다음 설명이 가리키는 것은?\n\n\"유해물질이 실제로 체내에 들어왔는지, 또는 대사산물이 생겼는지를 보여주는 바이오마커\"",
    "answer": "노출 바이오마커",
    "accepts": [
      "노출 바이오마커",
      "노출마커",
      "Marker of Exposure",
      "Exposure Biomarker",
      "노출 지표"
    ],
    "explanation": "노출 바이오마커는 내부노출 또는 대사산물 존재를 보여준다."
  },
  {
    "id": 31,
    "type": "match",
    "lecture": "10강",
    "category": "바이오마커",
    "question": "다음 설명이 가리키는 것은?\n\n\"효소 활성 감소, DNA 손상, 생리 기능 변화처럼 독성작용의 초기 생물학적 변화를 보여주는 바이오마커\"",
    "answer": "영향 바이오마커",
    "accepts": [
      "영향 바이오마커",
      "영향마커",
      "Marker of Effect",
      "Effect Biomarker",
      "효과 바이오마커"
    ],
    "explanation": "영향 바이오마커는 노출 이후 생체 기능이나 분자 수준 변화가 나타났는지를 보여준다."
  },
  {
    "id": 32,
    "type": "match",
    "lecture": "10강",
    "category": "바이오마커",
    "question": "다음 설명이 가리키는 것은?\n\n\"같은 노출에서도 개인의 유전적·생리적 차이 때문에 독성 반응이 달라질 수 있음을 나타내는 바이오마커\"",
    "answer": "감수성 바이오마커",
    "accepts": [
      "감수성 바이오마커",
      "감수성마커",
      "Marker of Susceptibility",
      "Susceptibility Biomarker",
      "감수성 지표"
    ],
    "explanation": "감수성 바이오마커는 개인차에 따른 독성 반응 가능성을 보여주는 지표이다."
  },
  {
    "id": 33,
    "type": "fill",
    "lecture": "10강",
    "category": "독성 개념",
    "question": "취약성(Vulnerability)은 감수성(Susceptibility)보다 [①] 포괄적인 개념으로, 노출 수준과 사회경제적 대처능력까지 포함한다.",
    "blanks": [
      {
        "id": "①",
        "label": "①"
      }
    ],
    "answers": [
      [
        "더",
        "더욱",
        "훨씬"
      ]
    ],
    "explanation": "취약성(Vulnerability) ⊃ 감수성(Susceptibility). 취약성은 내재적 감수성 + 노출 수준 + 사회경제적 대처능력을 모두 포함."
  },
  {
    "id": 34,
    "type": "multiple",
    "lecture": "10강",
    "category": "노출평가",
    "question": "STEL(Short-Term Exposure Limit)에 대한 설명으로 올바른 것은?",
    "options": [
      "8시간 시간가중평균 농도 기준",
      "단 한 순간도 초과 불가한 최고치",
      "15분 이하 단시간 노출이 허용되는 최고 농도",
      "법적으로 금지된 최소 농도"
    ],
    "answer": 2,
    "explanation": "STEL(Short-Term Exposure Limit): 15분 이하 단시간 노출이 하루 4회까지 허용되는 최고 농도."
  },
  {
    "id": 35,
    "type": "multiple",
    "lecture": "10강",
    "category": "독성동태",
    "question": "휘발성 독성물질의 주요 배설 경로는?",
    "options": [
      "신장(소변)",
      "대장(대변)",
      "폐(호기, 날숨)",
      "모유"
    ],
    "answer": 2,
    "explanation": "휘발성 물질: 혈중 물질이 폐포에서 호기로 확산·배설. 에탄올(음주 측정), 아세톤·벤젠 대사체 호기 바이오마커 가능."
  },
  {
    "id": 36,
    "type": "multiple",
    "lecture": "10강",
    "category": "독성 개념",
    "question": "NOAEL(No Observed Adverse Effect Level)의 올바른 정의는?",
    "options": [
      "독성이 관찰된 최소 용량",
      "독성 영향이 관찰되지 않는 최대 용량",
      "사망을 일으키는 최소 용량",
      "모든 실험 동물이 생존하는 용량"
    ],
    "answer": 1,
    "explanation": "NOAEL: 실험에서 독성 영향이 관찰되지 않는 가장 높은 용량. 안전 기준 설정의 출발점."
  },
  {
    "id": 37,
    "type": "multiple",
    "lecture": "10강",
    "category": "노출평가",
    "question": "작업환경측정 주기(일반 유해인자)는?",
    "options": [
      "매월",
      "매 반기(6개월)마다",
      "매년",
      "3년마다"
    ],
    "answer": 1,
    "explanation": "일반: 매 반기(6개월). 발암성 물질·소음 등 특별 관리: 3개월마다. 개선 확인 후 연 1회 가능."
  },
  {
    "id": 38,
    "type": "multiple",
    "lecture": "10강",
    "category": "독성동태",
    "question": "납이 뼈에 축적되는 주요 이유는?",
    "options": [
      "뼈의 혈류량이 풍부하기 때문",
      "납이 칼슘과 화학적으로 유사하여 뼈 기질에 결합하기 때문",
      "뼈의 pH가 낮아 납이 안정적이기 때문",
      "뼈에 Metallothionein이 풍부하기 때문"
    ],
    "answer": 1,
    "explanation": "납(Pb)은 칼슘(Ca²⁺)과 화학적으로 유사 → 뼈 기질에 결합·축적 (총 납의 약 90%)."
  },
  {
    "id": 39,
    "type": "fill",
    "lecture": "10강",
    "category": "독성동태",
    "question": "납(Pb)의 최종 표적조직은 [①]와/과 조혈계이며, 카드뮴(Cd)의 대표 표적조직은 [②] 사구체이다.",
    "blanks": [
      {
        "id": "①",
        "label": "①"
      },
      {
        "id": "②",
        "label": "②"
      }
    ],
    "answers": [
      [
        "뼈",
        "골격",
        "bone"
      ],
      [
        "신장",
        "kidney",
        "콩팥"
      ]
    ],
    "explanation": "납→뼈(95% 축적)·조혈계. 카드뮴→신장 사구체(이타이이타이병). 벤젠→골수."
  },
  {
    "id": 40,
    "type": "multiple",
    "lecture": "11-12강",
    "category": "경영시스템",
    "question": "ISO 9000이 대상으로 하는 경영시스템은?",
    "options": [
      "품질경영(QMS)",
      "환경경영(EMS)",
      "안전보건경영(OSHMS)",
      "사회책임(CSR)"
    ],
    "answer": 0,
    "explanation": "ISO 9000 = 품질경영시스템(QMS). 1980년대 도입."
  },
  {
    "id": 41,
    "type": "multiple",
    "lecture": "11-12강",
    "category": "경영시스템",
    "question": "ISO 경영시스템의 공통 사이클(PDCA)에서 \"C\"가 뜻하는 것은?",
    "options": [
      "Control(통제)",
      "Check(점검·모니터링)",
      "Certify(인증)",
      "Correct(수정)"
    ],
    "answer": 1,
    "explanation": "PDCA = Plan(계획) → Do(실행) → Check(점검·모니터링) → Act(개선)."
  },
  {
    "id": 42,
    "type": "multiple",
    "lecture": "11-12강",
    "category": "ESG·CSR",
    "question": "ESG의 구성 요소로 올바른 것은?",
    "options": [
      "환경·안전·지배구조",
      "환경·사회·지배구조",
      "에너지·사회·거버넌스",
      "경제·사회·거버넌스"
    ],
    "answer": 1,
    "explanation": "ESG = Environment(환경) + Social(사회) + Governance(지배구조)."
  },
  {
    "id": 43,
    "type": "multiple",
    "lecture": "11-12강",
    "category": "ESG·CSR",
    "question": "다음 중 CSR과 ESG에 대한 설명으로 옳은 것은?",
    "options": [
      "CSR은 외부 투자자의 기업 평가 기준이고, ESG는 조직 내부 실천 지침이다",
      "CSR(ISO 26000)은 조직의 자발적 사회책임 실천 지침이며, ESG는 투자·공시 평가 기준이다",
      "CSR과 ESG는 동일한 목적과 평가 주체를 공유하는 같은 개념이다",
      "ESG는 ISO 인증을 통해 법적 강제력이 부여되는 규정이다"
    ],
    "answer": 1,
    "explanation": "CSR(ISO 26000): 조직의 자발적 사회책임 실천 지침. ESG: 외부 투자자·평가기관이 기업 성과를 평가하는 비재무적 기준."
  },
  {
    "id": 44,
    "type": "multiple",
    "lecture": "11-12강",
    "category": "연관·인과",
    "question": "다음 중 직업성 만성질환의 인과 관계 판단이 어려운 이유로 옳은 것은?",
    "options": [
      "직업성 질환은 특이적 증상과 명확한 진단 기준이 있어 판단이 용이하다",
      "장기 잠복기·다중 원인성·개인 감수성 차이가 복합적으로 작용하기 때문이다",
      "역학 연구로 연관성이 확인되면 반드시 인과관계로 인정된다",
      "의사 진단만으로 업무관련성을 즉시 확정할 수 있기 때문이다"
    ],
    "answer": 1,
    "explanation": "장기 잠복기(수년~수십년), 다중 원인성, 비특이성, 개인 감수성 차이로 인해 인과 판단이 어렵다."
  },
  {
    "id": 45,
    "type": "multiple",
    "lecture": "11-12강",
    "category": "탄소중립",
    "question": "도넛 경제학(Doughnut Economics)에서 \"도넛 안쪽 구멍\"은 무엇을 의미하는가?",
    "options": [
      "환경 한계 초과",
      "사회적 빈곤(최소기준 미충족)",
      "지속가능한 경제 공간",
      "거버넌스 실패"
    ],
    "answer": 1,
    "explanation": "도넛 구멍(안쪽) = 사회적 빈곤. 도넛 바깥 = 환경 한계 초과. 도넛 안 = 안전하고 공정한 공간."
  },
  {
    "id": 46,
    "type": "multiple",
    "lecture": "11-12강",
    "category": "경영시스템",
    "question": "중대재해처벌법(중처법)의 주요 내용으로 옳지 않은 것은?",
    "options": [
      "사업주·경영책임자의 안전·보건 확보 의무 부과",
      "사망 등 중대재해 발생 시 사업주·경영책임자 형사처벌",
      "5인 이상 사업장에 적용(일부 유예)",
      "기업의 환경 성과만 평가하는 기준"
    ],
    "answer": 3,
    "explanation": "중처법: 안전·보건 의무 미이행 → 경영책임자 형사처벌. 환경 평가 기준이 아님."
  },
  {
    "id": 47,
    "type": "multiple",
    "lecture": "11-12강",
    "category": "제도·법규",
    "question": "우리나라 특수건강검진 대상 유해인자로 지정되지 않은 것은?",
    "options": [
      "납(Pb)",
      "카드뮴(Cd)",
      "설탕(Sucrose)",
      "벤젠(Benzene)"
    ],
    "answer": 2,
    "explanation": "특수건강검진: 중금속(Pb, Cd, Hg, Cr)·유기용제(벤젠·톨루엔)·소음·분진 등 유해인자 대상. 설탕은 해당 없음."
  },
  {
    "id": 48,
    "type": "multiple",
    "lecture": "11-12강",
    "category": "탄소중립",
    "question": "파리협정(Paris Agreement)에서 설정한 지구 평균 기온 상승 억제 목표는?",
    "options": [
      "산업화 이전 대비 0.5°C 이내",
      "산업화 이전 대비 1.5°C 이내(노력), 2°C 이하(최대)",
      "현재 기온 대비 1°C 이내",
      "2050년 이후 기온 변화 없음"
    ],
    "answer": 1,
    "explanation": "파리협정: 1.5°C 이내 노력, 2°C 이하 유지가 공식 목표. NDC(국가결정기여) 5년마다 갱신 제출 의무."
  },
  {
    "id": 49,
    "type": "match",
    "lecture": "11-12강",
    "category": "ESG·CSR",
    "question": "다음 설명이 가리키는 것은?\n\n\"기업이 이해관계자와 사회·환경에 대해 자발적으로 책임 있는 경영을 수행한다는 개념. ISO 26000과 연결된다\"",
    "answer": "CSR",
    "accepts": [
      "CSR",
      "기업의 사회적 책임",
      "사회적 책임",
      "Corporate Social Responsibility",
      "기업 사회 책임"
    ],
    "explanation": "CSR은 Corporate Social Responsibility, 즉 기업의 사회적 책임이다."
  },
  {
    "id": 50,
    "type": "match",
    "lecture": "11-12강",
    "category": "제도·법규",
    "question": "사업장 위험성 평가의 4단계 순서를 → 로 구분하여 쓰시오.",
    "answer": "파악→추정→결정→감소대책",
    "accepts": [
      "파악→추정→결정→감소대책",
      "유해위험요인파악→위험성추정→위험성결정→감소대책수립"
    ],
    "explanation": "위험성 평가 4단계: 유해위험요인 파악 → 위험성 추정(빈도×심각도) → 위험성 결정(허용 여부) → 감소대책 수립. 산업안전보건법 기준."
  },
  {
    "id": 51,
    "type": "fill",
    "lecture": "11-12강",
    "category": "제도·법규",
    "question": "산업안전보건법 제125조에 의거한 작업환경측정은 원칙적으로 연 [①]회(반기 1회 이상) 의무 실시된다.",
    "blanks": [
      {
        "id": "①",
        "label": "①"
      }
    ],
    "answers": [
      [
        "2",
        "두",
        "2회"
      ]
    ],
    "explanation": "작업환경측정: 산안법 제125조 근거. 원칙 연 2회(반기 1회 이상). 고용노동부 지정 기관이 실시."
  },
  {
    "id": 52,
    "type": "fill",
    "lecture": "11-12강",
    "category": "제도·법규",
    "question": "특수건강검진의 법적 근거는 산업안전보건법 제[①]조이며, 유해인자 노출 근로자의 [②] 조기 발견이 목적이다.",
    "blanks": [
      {
        "id": "①",
        "label": "①"
      },
      {
        "id": "②",
        "label": "②"
      }
    ],
    "answers": [
      [
        "130"
      ],
      [
        "직업병",
        "건강 영향",
        "건강영향",
        "직업성 질병"
      ]
    ],
    "explanation": "특수건강검진: 산안법 제130조. 직업병 유소견자 조기 발견 목적. 배치 후 첫 검진 및 정기 주기 실시."
  },
  {
    "id": 53,
    "type": "multiple",
    "lecture": "11-12강",
    "category": "경영시스템",
    "question": "ISO 경영시스템 표준의 발전 순서로 올바른 것은?",
    "options": [
      "ISO 9000 → ISO 45000 → ISO 14000",
      "ISO 14000 → ISO 9000 → ISO 45000",
      "ISO 9000 → ISO 14000 → ISO 45000",
      "ISO 45000 → ISO 14000 → ISO 9000"
    ],
    "answer": 2,
    "explanation": "ISO 9000(1987, 품질) → ISO 14000(1996, 환경) → ISO 45000(2018, 안전보건) 순으로 발전."
  },
  {
    "id": 54,
    "type": "multiple",
    "lecture": "11-12강",
    "category": "경영시스템",
    "question": "ISO 45001(안전보건경영시스템) 발행 연도는?",
    "options": [
      "1987년",
      "1996년",
      "2018년",
      "2022년"
    ],
    "answer": 2,
    "explanation": "ISO 45001: 2018년 발행. ISO 9001(1987), ISO 14001(1996) 이후 안전보건 분야 국제 표준."
  },
  {
    "id": 55,
    "type": "multiple",
    "lecture": "11-12강",
    "category": "제도·법규",
    "question": "우리나라 산업안전보건법상 특수건강검진의 주요 목적은?",
    "options": [
      "일반 성인병 조기 발견",
      "유해물질 노출 근로자의 건강 영향 조기 발견",
      "사망 원인 통계 수집",
      "작업장 공기 중 농도 측정"
    ],
    "answer": 1,
    "explanation": "특수건강검진: 특정 유해물질 노출 근로자 대상. 직업성 건강 영향 조기 발견이 목적."
  },
  {
    "id": 56,
    "type": "multiple",
    "lecture": "11-12강",
    "category": "제도·법규",
    "question": "산업재해보상보험법에 따른 재해 근로자 급여 종류로 옳지 않은 것은?",
    "options": [
      "요양급여(치료비)",
      "휴업급여(소득보전)",
      "장해급여",
      "경력개발지원금"
    ],
    "answer": 3,
    "explanation": "산재법 급여: 요양·휴업·장해·유족·상병보상연금·간병·직업재활 급여. 경력개발지원금은 해당 없음."
  },
  {
    "id": 57,
    "type": "multiple",
    "lecture": "11-12강",
    "category": "탄소중립",
    "question": "RE100이란 무엇인가?",
    "options": [
      "재생에너지 100% 사용을 목표로 하는 글로벌 기업 이니셔티브",
      "온실가스 100% 감축 의무 협약",
      "UN 100개국 기후 행동 협약",
      "반도체 공장 재생에너지 의무 비율"
    ],
    "answer": 0,
    "explanation": "RE100: Renewable Energy 100%. 기업 사용 전력 100%를 재생에너지로 전환하겠다는 자발적 이니셔티브."
  },
  {
    "id": 58,
    "type": "multiple",
    "lecture": "11-12강",
    "category": "제도·법규",
    "question": "REACH 규정은 어느 지역의 화학물질 관리 규정인가?",
    "options": [
      "미국(EPA)",
      "EU(유럽연합)",
      "한국(환경부)",
      "일본(후생노동성)"
    ],
    "answer": 1,
    "explanation": "REACH: EU의 화학물질 등록·평가·허가·제한 규정(2006년). 제조·수입 화학물질 안전 정보 등록 의무."
  },
  {
    "id": 59,
    "type": "match",
    "lecture": "11-12강",
    "category": "경영시스템",
    "question": "다음 설명이 가리키는 것은?\n\n\"ISO 26000에서 제시한 기업의 사회적 책임 7대 핵심 주제 중 하나로, 조직의 의사결정 체계와 책임 구조를 의미하는 주제.\"",
    "answer": "조직 거버넌스",
    "accepts": [
      "조직거버넌스",
      "조직 거버넌스",
      "organizational governance",
      "거버넌스"
    ],
    "explanation": "ISO 26000 7대 핵심주제: 조직 거버넌스, 인권, 노동관행, 환경, 공정사업관행, 소비자, 지역사회."
  },
  {
    "id": 60,
    "type": "multiple",
    "lecture": "12-13강",
    "category": "반도체 기초",
    "question": "반도체 Fab 공정의 올바른 순서는?",
    "options": [
      "이온주입 → 산화 → 포토 → 식각",
      "산화 → 포토 → 식각 → 스트리핑 → 이온주입",
      "포토 → 산화 → 식각 → 이온주입",
      "식각 → 산화 → 포토 → 스트리핑"
    ],
    "answer": 1,
    "explanation": "산화 → 포토(PR도포→노광→현상) → 식각 → 스트리핑 → 이온주입 → 에피택시 → 금속증착."
  },
  {
    "id": 61,
    "type": "multiple",
    "lecture": "12-13강",
    "category": "반도체 공정",
    "question": "반도체 식각(Etching) 공정에서 SiO₂를 제거하는 주요 물질은?",
    "options": [
      "황산(H₂SO₄)",
      "불산(HF)",
      "암모니아(NH₃)",
      "아세톤"
    ],
    "answer": 1,
    "explanation": "불산(HF)은 SiO₂와 반응하여 제거하는 습식식각의 핵심 물질."
  },
  {
    "id": 62,
    "type": "multiple",
    "lecture": "12-13강",
    "category": "반도체 안전",
    "question": "다음 중 클린룸(Clean Room) 작업환경에 대한 설명으로 옳지 않은 것은?",
    "options": [
      "수직 층류 방식으로 공기를 공급한다",
      "단일 유해물질에 집중 노출되는 환경이다",
      "다종 화학물질에 저농도로 만성 노출된다",
      "방진복 착용으로 열 스트레스가 발생할 수 있다"
    ],
    "answer": 1,
    "explanation": "클린룸은 수십~수백 종 복합 화학물질 동시 노출 환경(복합노출). 단일 물질 집중 노출이 아님."
  },
  {
    "id": 63,
    "type": "multiple",
    "lecture": "12-13강",
    "category": "반도체 안전",
    "question": "반도체 이온주입 공정에서 사용되는 비소계 도판트 가스는?",
    "options": [
      "포스핀(PH₃)",
      "아르신(AsH₃)",
      "실란(SiH₄)",
      "보론트리플루오라이드(BF₃)"
    ],
    "answer": 1,
    "explanation": "아르신(AsH₃)은 n형 도핑 가스. 이온박스 내부 정비 시 가장 높은 노출."
  },
  {
    "id": 64,
    "type": "multiple",
    "lecture": "12-13강",
    "category": "반도체 안전",
    "question": "반도체 공정에서 백혈병(NHL·AML)과 역학적으로 가장 관련성이 확립된 물질은?",
    "options": [
      "TMAH",
      "불산(HF)",
      "벤젠(Benzene)",
      "아르신(AsH₃)"
    ],
    "answer": 2,
    "explanation": "벤젠은 골수독성 → 급성골수성백혈병(AML). 반도체 공정 내 직접 사용은 드물지만 혼재 가능."
  },
  {
    "id": 65,
    "type": "multiple",
    "lecture": "12-13강",
    "category": "반도체 공정",
    "question": "다음 중 반도체 N형(n-type) 도핑에 사용하지 않는 도판트는?",
    "options": [
      "비소(As)",
      "인(P)",
      "붕소(B)",
      "안티몬(Sb)"
    ],
    "answer": 2,
    "explanation": "붕소(B)는 p-type 도판트(정공 생성). n-type 도판트: As(비소), P(인), Sb(안티몬)."
  },
  {
    "id": 66,
    "type": "multiple",
    "lecture": "12-13강",
    "category": "반도체 안전",
    "question": "실란(SiH₄)의 가장 큰 위험 특성은?",
    "options": [
      "ppm 수준에서 치명적인 독성",
      "공기 중 자연발화(Pyrophoric) 특성",
      "강산성으로 피부 화학화상 유발",
      "피부 침투로 심장마비 유발"
    ],
    "answer": 1,
    "explanation": "실란 누출 시 공기 중 즉시 자연발화. 불꽃 불필요. 화재·폭발 위험. 누출 감지 후 즉시 대피."
  },
  {
    "id": 67,
    "type": "multiple",
    "lecture": "12-13강",
    "category": "반도체 공정",
    "question": "반도체 포토리소그래피에서 노광 후 PR 현상(Development)에 사용되는 물질은?",
    "options": [
      "황산(H₂SO₄)",
      "TMAH(테트라메틸암모늄수산화물)",
      "불산(HF)",
      "염산(HCl)"
    ],
    "answer": 1,
    "explanation": "TMAH는 반도체 현상액(Developer)으로 사용. 노광된 PR을 선택적으로 제거하여 회로 패턴 형성."
  },
  {
    "id": 68,
    "type": "multiple",
    "lecture": "12-13강",
    "category": "반도체 공정",
    "question": "반도체 건식식각(Dry Etching)에 사용되는 주요 방법은?",
    "options": [
      "불산(HF) 용액 침지",
      "황산·과산화수소 혼합 용액",
      "플라즈마(Plasma) 식각",
      "순수(DI Water) 세척"
    ],
    "answer": 2,
    "explanation": "건식식각 = 플라즈마 이용 식각(RIE, ICP 등). 습식식각이 화학 용액(HF 등) 이용."
  },
  {
    "id": 69,
    "type": "multiple",
    "lecture": "12-13강",
    "category": "반도체 공정",
    "question": "반도체 구리(Cu) 배선 형성 시 적용하는 공법은?",
    "options": [
      "이온주입법",
      "다마신(Damascene) 공법",
      "습식식각법",
      "포토리소그래피만으로 형성"
    ],
    "answer": 1,
    "explanation": "다마신 공법: 절연막에 홈을 파고 Cu를 전기도금으로 채운 후 CMP로 평탄화. Cu 배선 표준 공법."
  },
  {
    "id": 70,
    "type": "multiple",
    "lecture": "12-13강",
    "category": "반도체 기초",
    "question": "반도체 생산의 3대 공정을 순서대로 올바르게 나열한 것은?",
    "options": [
      "Fab(전공정) → 웨이퍼 제조 → 패키징·테스트",
      "패키징·테스트 → Fab(전공정) → 웨이퍼 제조",
      "웨이퍼 제조 → Fab(전공정) → 패키징·테스트(후공정)",
      "웨이퍼 제조 → 패키징·테스트 → Fab(전공정)"
    ],
    "answer": 2,
    "explanation": "웨이퍼 제조(잉곳→슬라이싱) → 전공정 Fab(회로 패턴) → 후공정(패키징·테스트·출하)."
  },
  {
    "id": 71,
    "type": "multiple",
    "lecture": "12-13강",
    "category": "반도체 기초",
    "question": "반도체 웨이퍼 크기가 역사적으로 변화해 온 순서로 올바른 것은?",
    "options": [
      "300mm → 200mm → 150mm → 100mm",
      "50mm → 100mm → 200mm → 300mm",
      "100mm → 50mm → 200mm → 300mm",
      "300mm → 150mm → 75mm → 50mm"
    ],
    "answer": 1,
    "explanation": "웨이퍼 크기: 50→75→100→125→150→200→300mm(현재 주력). 클수록 칩 생산량·생산성 향상."
  },
  {
    "id": 72,
    "type": "multiple",
    "lecture": "12-13강",
    "category": "반도체 기초",
    "question": "IC(Integrated Circuit)와 PCB(Printed Circuit Board)의 설명으로 올바른 것은?",
    "options": [
      "IC는 회로 배선 기판, PCB는 실리콘에 소자 집적",
      "IC는 실리콘 칩에 수백만 소자 집적, PCB는 소자 연결·지지 기판",
      "IC와 PCB는 동일한 개념",
      "PCB는 CPU이고 IC는 배선판"
    ],
    "answer": 1,
    "explanation": "IC: 반도체 칩에 트랜지스터·저항 등 수백만~수십억 소자 집적. PCB: 이 칩들을 배선으로 연결하는 인쇄회로기판."
  },
  {
    "id": 73,
    "type": "multiple",
    "lecture": "12-13강",
    "category": "반도체 기초",
    "question": "실리콘 웨이퍼 제조 과정의 올바른 순서는?",
    "options": [
      "웨이퍼 슬라이싱 → 잉곳 성장 → SiO₂ 환원",
      "SiO₂(모래) + C → 전기용광로 환원 → 순수 Si → 잉곳 성장 → 웨이퍼 슬라이싱",
      "잉곳 성장 → SiO₂ 환원 → 웨이퍼 슬라이싱",
      "웨이퍼 슬라이싱 → 순수 Si → 잉곳 성장 → SiO₂ 환원"
    ],
    "answer": 1,
    "explanation": "SiO₂(모래)+C → 전기용광로 → 순수 Si(야금용) → 정제(트리클로로실란 법) → 초크랄스키 잉곳 → 슬라이싱→연마 → 웨이퍼."
  },
  {
    "id": 74,
    "type": "fill",
    "lecture": "12-13강",
    "category": "반도체 안전",
    "question": "반도체 클린룸에서 다종 화학물질·방사선·야간 3교대 근무 등이 동시에 중첩되는 노출 형태를 [①](이)라 하며, 단일 노출기준(TWA) 만족 시에도 직업병 발생 가능성이 상존한다.",
    "blanks": [
      {
        "id": "①",
        "label": "①"
      }
    ],
    "answers": [
      [
        "복합노출",
        "mixed exposure",
        "복합 노출"
      ]
    ],
    "explanation": "복합노출(Mixed Exposure): 단일 기준 충족에도 시너지 효과(Synergy)로 직업병 발생. 클린룸의 핵심 위험."
  },
  {
    "id": 75,
    "type": "multiple",
    "lecture": "12-13강",
    "category": "반도체 공정",
    "question": "반도체 CMP(Chemical Mechanical Planarization) 공정의 목적은?",
    "options": [
      "도판트 이온을 웨이퍼에 주입",
      "웨이퍼 표면을 평탄화하여 다층 배선 형성",
      "회로 패턴을 감광제로 전사",
      "잔류 포토레지스트를 제거"
    ],
    "answer": 1,
    "explanation": "CMP: 슬러리+연마 패드로 표면 평탄화. 나노 수준 균일 평탄면 확보. 다층 배선 필수 공정."
  },
  {
    "id": 76,
    "type": "multiple",
    "lecture": "12-13강",
    "category": "반도체 공정",
    "question": "CVD(Chemical Vapor Deposition) 공정에서 자연발화 위험이 있는 가스는?",
    "options": [
      "질소(N₂)",
      "이산화탄소(CO₂)",
      "실란(SiH₄)",
      "아르곤(Ar)"
    ],
    "answer": 2,
    "explanation": "SiH₄(실란): 자연발화성(Pyrophoric). CVD에서 실리콘막 형성에 사용. 누출 즉시 공기와 반응하여 화재."
  },
  {
    "id": 77,
    "type": "multiple",
    "lecture": "12-13강",
    "category": "반도체 공정",
    "question": "포토리소그래피(Photolithography) 세부 단계의 올바른 순서는?",
    "options": [
      "노광 → PR 도포 → 현상",
      "현상 → 노광 → PR 도포",
      "PR 도포 → 현상 → 노광",
      "PR 도포 → 노광 → 현상"
    ],
    "answer": 3,
    "explanation": "PR 도포(Coat) → 소프트 베이크 → 노광(UV) → 현상(TMAH) → 하드 베이크."
  },
  {
    "id": 78,
    "type": "multiple",
    "lecture": "12-13강",
    "category": "반도체 공정",
    "question": "반도체 건식 식각(Dry Etching)에서 주로 사용하는 가스 종류는?",
    "options": [
      "수소(H₂)·질소(N₂)·아르곤(Ar)",
      "불화탄화수소(CF₄·CHF₃)·염소(Cl₂)·HBr",
      "산소(O₂)·이산화탄소(CO₂)·수증기",
      "실란(SiH₄)·포스핀(PH₃)·암모니아(NH₃)"
    ],
    "answer": 1,
    "explanation": "건식 식각 가스: CF₄, CHF₃, C₂F₆(불화계), Cl₂, HBr(염소계). 플라즈마로 활성화하여 Si, SiO₂ 등 선택적 제거."
  },
  {
    "id": 79,
    "type": "multiple",
    "lecture": "12-13강",
    "category": "반도체 공정",
    "question": "반도체 이온주입 공정에서 n형 도핑에 주로 사용하는 원소는?",
    "options": [
      "붕소(B)",
      "인(P) 또는 비소(As)",
      "알루미늄(Al)",
      "갈륨(Ga)"
    ],
    "answer": 1,
    "explanation": "n형 도핑: 5가 원소(인·비소·안티몬). p형 도핑: 3가 원소(붕소·알루미늄·갈륨)."
  },
  {
    "id": 80,
    "type": "fill",
    "lecture": "12-13강",
    "category": "반도체 공정",
    "question": "반도체 웨이퍼 기판 위에 결정 방향을 모방하며 단결정 실리콘 박막층을 추가 성장시키는 공정을 [①](이)라 하며, 이때 [②]계 맹독 가스가 사용된다.",
    "blanks": [
      {
        "id": "①",
        "label": "①"
      },
      {
        "id": "②",
        "label": "②"
      }
    ],
    "answers": [
      [
        "에피탁시",
        "Epitaxy",
        "epitaxy",
        "에피택시"
      ],
      [
        "실란",
        "SiH4",
        "SiH₄"
      ]
    ],
    "explanation": "에피탁시(Epitaxy): CVD 기법으로 단결정 실리콘 증착. 실란(SiH₄) 등 맹독 가스 사용."
  },
  {
    "id": 81,
    "type": "multiple",
    "lecture": "12-13강",
    "category": "반도체 공정",
    "question": "PVD(물리기상증착)에서 금속막을 형성하는 주요 방법은?",
    "options": [
      "기상 화학 반응(열분해)",
      "스퍼터링(Sputtering) 또는 열 증발(Evaporation)",
      "전기도금(Electroplating)",
      "화학 에칭(Chemical Etching)"
    ],
    "answer": 1,
    "explanation": "PVD: 스퍼터링(이온 충격→타깃 금속 원자 방출→기판 증착) 또는 열 증발. 화학 반응 없음. Al·Ti·W·Cu 배선 형성."
  },
  {
    "id": 82,
    "type": "multiple",
    "lecture": "13-14강",
    "category": "SEMI·위험성평가",
    "question": "SEMI S10 위험성평가 공식은?",
    "options": [
      "위험성 = 빈도 + 심각도",
      "위험성 = 심각도(Severity) × 가능성(Likelihood)",
      "위험성 = 노출량 ÷ 허용기준",
      "위험성 = 독성지수 + 노출경로"
    ],
    "answer": 1,
    "explanation": "Risk = Severity × Likelihood. 이를 기반으로 n×n 리스크 매트릭스(3×3 or 4×4) 구성."
  },
  {
    "id": 83,
    "type": "multiple",
    "lecture": "13-14강",
    "category": "SEMI·위험성평가",
    "question": "다음 중 SEMI S10 위험 매트릭스의 Catastrophic(매우 치명적) 수준에 해당하는 것으로 옳은 것은?",
    "options": [
      "일시적 불편 및 경미한 불쾌감",
      "경미한 부상(응급처치 수준)",
      "가역적 신경·장기 손상",
      "사망 또는 다수 사상자 발생 대형 사고"
    ],
    "answer": 3,
    "explanation": "Catastrophic(매우 치명적) = 사망/대형 폭발 사고. Critical(중대) = 신경·장기 등 심각 건강 손상."
  },
  {
    "id": 84,
    "type": "multiple",
    "lecture": "13-14강",
    "category": "반도체 안전",
    "question": "다음 중 TMAH에 대한 설명으로 옳지 않은 것은?",
    "options": [
      "반도체 현상액·박리제로 사용된다",
      "피부 침투성이 강하다",
      "강한 냄새가 있어 누출 시 쉽게 감지할 수 있다",
      "피부 접촉 시 신경 마비·심장마비를 유발할 수 있다"
    ],
    "answer": 2,
    "explanation": "TMAH는 무색·무취라 누출 감지가 어렵다. 감지 어려움이 가장 큰 위험 특성."
  },
  {
    "id": 85,
    "type": "multiple",
    "lecture": "13-14강",
    "category": "반도체 안전",
    "question": "다음 중 불산(HF) 전신 독성의 주요 기전으로 옳은 것은?",
    "options": [
      "폐포 손상으로 인한 급성 폐부종만 발생한다",
      "F⁻ 이온이 혈중 Ca²⁺와 결합하여 저칼슘혈증·심장마비를 유발한다",
      "적혈구 막 산화로 용혈성 빈혈이 주된 독성으로 나타난다",
      "간세포 괴사로 급성 간부전이 가장 먼저 발생한다"
    ],
    "answer": 1,
    "explanation": "F⁻ + Ca²⁺ → CaF₂(불용성 침전) → 혈중 Ca²⁺ 급감(저칼슘혈증) → 심실세동·심장마비."
  },
  {
    "id": 86,
    "type": "multiple",
    "lecture": "13-14강",
    "category": "반도체 안전",
    "question": "LOTO(Lockout/Tagout)에서 Lockout의 역할은?",
    "options": [
      "경고 표지를 부착하는 것",
      "에너지원을 잠금으로 물리적 차단하는 것",
      "작업 허가서를 발급하는 것",
      "비상 대피로를 표시하는 것"
    ],
    "answer": 1,
    "explanation": "Lockout = 에너지원(전기·가스·압축공기) 잠금 차단. Tagout = 경고 표지 부착."
  },
  {
    "id": 87,
    "type": "multiple",
    "lecture": "13-14강",
    "category": "반도체 안전",
    "question": "2015년 전자공장 건설현장에서 3명이 사망한 사고의 원인은?",
    "options": [
      "TMAH 노출",
      "불산(HF) 누출",
      "질소(N₂) 누출로 인한 산소결핍",
      "이온주입 X선 피폭"
    ],
    "answer": 2,
    "explanation": "2015년: 공조설비 관련 배기덕트 작업 중 질소 누출 → 산소결핍 → 3명 사망."
  },
  {
    "id": 88,
    "type": "multiple",
    "lecture": "13-14강",
    "category": "반도체 안전",
    "question": "반도체 공장 정비 작업 전 설비·배관 내 잔류 유해가스를 제거하는 작업은?",
    "options": [
      "인터록(Interlock)",
      "LOTO",
      "퍼지(Purge)",
      "AMHS 점검"
    ],
    "answer": 2,
    "explanation": "퍼지(Purge): 불활성 기체(N₂)나 공기로 잔류 가스를 밀어내는 작업. 정비 전 필수 안전 조치."
  },
  {
    "id": 89,
    "type": "multiple",
    "lecture": "13-14강",
    "category": "반도체 안전",
    "question": "FOUP(Front Opening Unified Pod)의 주요 역할은?",
    "options": [
      "클린룸 전체 공기 흐름을 조절해 파티클 농도를 낮추는 장치",
      "300mm 웨이퍼를 외부 오염으로부터 보호하는 밀폐 운반 용기",
      "특수가스를 장비까지 일정 압력으로 공급하는 배관 모듈",
      "현상액과 식각액을 임시 보관하는 자동 화학약품 저장 용기"
    ],
    "answer": 1,
    "explanation": "FOUP: SEMI 표준으로 규격화된 300mm 웨이퍼 표준 밀폐 운반 용기."
  },
  {
    "id": 90,
    "type": "multiple",
    "lecture": "13-14강",
    "category": "반도체 안전",
    "question": "다음 중 인터록(Interlock)에 대한 설명으로 옳은 것은?",
    "options": [
      "위험 작업 전 경고 표지와 출입금지 표지를 부착하는 행정 절차이다",
      "안전 조건 미충족 시 장비를 자동으로 정지·차단하는 설비 내장형 안전장치이다",
      "공정 중 발생한 유해가스를 외부로 배출하는 국소배기 장치이다",
      "웨이퍼를 클린룸 장비 사이에서 자동 운반하는 이송 시스템이다"
    ],
    "answer": 1,
    "explanation": "인터록: 차폐 커버 개방, 비정상 압력, 방사선 감지 시 장비를 즉각 가동 중단하는 안전장치. 우회(Bypass) 시 사고 발생."
  },
  {
    "id": 91,
    "type": "multiple",
    "lecture": "13-14강",
    "category": "반도체 안전",
    "question": "2013년 반도체 설비 보수 작업 중 배관에서 누출되어 작업자 사망·부상을 일으킨 물질은?",
    "options": [
      "불산(HF)",
      "이산화탄소(CO₂)",
      "이소프로필알코올(IPA)",
      "암모니아(NH₃)"
    ],
    "answer": 0,
    "explanation": "2013년: 설비 보수 중 배관·저장설비에서 불산(HF)이 누출되어 협력업체 정비 노동자 1명 사망 및 다수 부상."
  },
  {
    "id": 92,
    "type": "fill",
    "lecture": "13-14강",
    "category": "반도체 안전",
    "question": "산소결핍의 기준: 공기 중 산소 농도가 [①]% 미만인 경우.",
    "blanks": [
      {
        "id": "①",
        "label": "①"
      }
    ],
    "answers": [
      [
        "18"
      ]
    ],
    "explanation": "산소 18% 미만 = 산소결핍. 질소 누출이 주요 원인."
  },
  {
    "id": 93,
    "type": "multiple",
    "lecture": "13-14강",
    "category": "반도체 안전",
    "question": "반도체 공장 화학물질 누출 사고 시 대응 순서로 가장 적절한 것은?",
    "options": [
      "화학물질 확인 → 복구 → 신고 → 대피",
      "신고 → 확인 → 복구 → 대피",
      "감지·인지 → 즉시 대피·경보 → 신고 → 누출 차단",
      "누출 차단 → 피해자 구조 → 신고 → 대피"
    ],
    "answer": 2,
    "explanation": "화학물질 누출: 감지·인지 → 즉시 대피+경보 → 119 신고 → 전문가 지휘 하 누출 차단."
  },
  {
    "id": 94,
    "type": "multiple",
    "lecture": "13-14강",
    "category": "반도체 안전",
    "question": "SEMI S2의 주요 내용은?",
    "options": [
      "반도체 장비의 환경·안전·보건 기준",
      "클린룸 ISO 등급 기준",
      "초순수(UPW) 수질 기준",
      "화학물질 최대 보관량 기준"
    ],
    "answer": 0,
    "explanation": "SEMI S2: 반도체 제조 장비의 환경·안전·보건(EHS) 가이드라인. 장비 설계 및 운용 기준."
  },
  {
    "id": 95,
    "type": "fill",
    "lecture": "13-14강",
    "category": "반도체 안전",
    "question": "전자산업 직업병으로 인정된 혈액암 원인 인자 3가지: [①](유기용제), [②](PCB 공정), 전리방사선(X선 등).",
    "blanks": [
      {
        "id": "①",
        "label": "①"
      },
      {
        "id": "②",
        "label": "②"
      }
    ],
    "answers": [
      [
        "벤젠",
        "Benzene"
      ],
      [
        "포름알데히드",
        "Formaldehyde",
        "formaldehyde"
      ]
    ],
    "explanation": "혈액암(AML·NHL) 주요 원인 인자: 벤젠(1위) + 포름알데히드 + 전리방사선. 세 가지 모두 암기 필요."
  },
  {
    "id": 96,
    "type": "multiple",
    "lecture": "13-14강",
    "category": "반도체 안전",
    "question": "산소결핍 환경(O₂ < 18%)에서 사용해야 하는 올바른 호흡 보호구는?",
    "options": [
      "방진 마스크(P등급)",
      "방독 마스크(유기증기 카트리지)",
      "공기 공급식 마스크(SCBA)",
      "활성탄 마스크"
    ],
    "answer": 2,
    "explanation": "SCBA(Self-Contained Breathing Apparatus): 자체 공기 공급. 방독마스크는 필터 방식이라 산소결핍 시 사용 불가."
  },
  {
    "id": 97,
    "type": "multiple",
    "lecture": "13-14강",
    "category": "반도체 안전",
    "question": "밀폐공간 진입 전 가장 중요한 첫 번째 안전 조치는?",
    "options": [
      "방독마스크를 착용하면 산소 농도 측정과 환기는 생략할 수 있음",
      "작업 완료 후 산소 농도를 측정하여 작업 중 노출 여부만 확인",
      "진입 전 산소·유해가스 농도 측정과 충분한 환기를 먼저 확보",
      "FOUP 상태를 점검해 웨이퍼 오염 가능성을 우선 확인"
    ],
    "answer": 2,
    "explanation": "밀폐공간: ①진입 전 산소(18% 이상)·유해가스 농도 측정 ②충분한 환기 ③감시인 배치 ④SCBA 준비."
  },
  {
    "id": 98,
    "type": "multiple",
    "lecture": "13-14강",
    "category": "반도체 안전",
    "question": "반도체 공장에서 질소(N₂) 사용 시 가장 큰 위험은?",
    "options": [
      "가연성 가스로 폭발하므로 점화원 관리가 가장 중요한 위험",
      "불활성 가스 치환으로 산소결핍이 생길 수 있는 질식 위험",
      "강산성 액체로 피부 접촉 시 화학 화상을 일으키는 위험",
      "확정 발암성 물질로 소량 노출도 직접 암 발생을 유발하는 위험"
    ],
    "answer": 1,
    "explanation": "N₂는 무색·무취·불활성. 밀폐 공간 누출 시 O₂ 치환 → 산소결핍 → 수분 내 의식 상실·사망."
  },
  {
    "id": 99,
    "type": "multiple",
    "lecture": "13-14강",
    "category": "반도체 안전",
    "question": "석면(Asbestos) 노출로 발생하는 특이적 직업성 폐질환 2가지는?",
    "options": [
      "직업성 천식과 납 뇌병증처럼 기도 과민성과 신경독성이 함께 발생",
      "석면폐와 중피종처럼 섬유화성 폐질환과 흉막 종양이 특징적임",
      "규폐증과 카드뮴 폐처럼 무기분진과 금속 흄 노출 질환이 함께 발생",
      "망간증과 이타이이타이병처럼 신경계·골대사 질환이 주로 발생"
    ],
    "answer": 1,
    "explanation": "석면: 석면폐(폐섬유증) + 흉막 중피종(악성, 잠복기 20~40년). 이소시아네이트는 직업성 천식."
  },
  {
    "id": 100,
    "type": "multiple",
    "lecture": "13-14강",
    "category": "반도체 안전",
    "question": "불산(HF) 전신 독성에 대한 응급 처치로 정맥 또는 국소 투여하는 약물은?",
    "options": [
      "글루타치온(GSH)",
      "글루콘산 칼슘(Calcium Gluconate)",
      "황산나트륨(Na₂SO₄)",
      "아드레날린(Epinephrine)"
    ],
    "answer": 1,
    "explanation": "글루콘산 칼슘 정주: F⁻ 이온이 Ca²⁺와 결합 → 혈중 Ca²⁺ 급감 → 심장마비 예방 목적."
  }
]

const DIFFICULTY_LABELS = {
  basic: '기초',
  standard: '표준',
  advanced: '심화',
}

const aliasGroups = [
  ['ETS', '배출권 거래제', '탄소배출권 거래제', '탄소 배출권 거래제', 'Emission Trading System', 'Cap and Trade', '캡앤트레이드'],
  ['탄소중립', 'Net Zero', '넷제로', '순배출제로', 'Carbon Neutrality'],
  ['CSR', '기업의 사회적 책임', 'Corporate Social Responsibility', '기업 사회 책임'],
  ['ESG', 'Environment Social Governance', '환경 사회 지배구조', '환경·사회·지배구조'],
  ['PDCA', 'Plan Do Check Act', 'Plan-Do-Check-Act', '계획 실행 점검 개선'],
  ['LOTO', 'Lockout Tagout', 'Lockout/Tagout', '록아웃 태그아웃', '잠금표지'],
  ['TMAH', '테트라메틸암모늄하이드록사이드', 'Tetramethylammonium hydroxide'],
  ['HF', '불산', 'Hydrofluoric acid', '플루오르화수소산', '불화수소산'],
  ['SEMI S10', 'S10', '세미 S10', 'SEMI 위험성평가'],
  ['ADME', '흡수 분포 대사 배설', '흡수→분포→대사→배설', 'Absorption Distribution Metabolism Excretion'],
  ['바이오마커', 'Biomarker', '생체지표', '생물학적 지표'],
  ['미나마타병', 'Minamata disease', '메틸수은 중독'],
  ['이이타이이타이병', '이타이이타이병', 'Itai-Itai', 'Itai Itai disease'],
  ['Metallothionein', '메탈로티오네인', '금속결합단백질', 'MT'],
]

function relatedAliases(values) {
  const text = values.filter(Boolean).join(' ').toLowerCase()
  const aliases = new Set(values.filter(Boolean))
  for (const group of aliasGroups) {
    if (group.some(item => text.includes(String(item).toLowerCase()))) {
      group.forEach(item => aliases.add(item))
    }
  }
  return [...aliases]
}

function inferDifficulty(question) {
  if (question.difficulty) return question.difficulty
  const text = `${question.question ?? ''} ${question.category ?? ''} ${question.explanation ?? ''}`
  if (question.type === 'short') return 'advanced'
  if (/순서|비교|차이|계산|위험성평가|Hill|RR|OR|PSM|Scope|SEMI|사례|공정/.test(text)) return 'advanced'
  if (question.type === 'match' && /다음 설명|설명이 가리키는|가리키는/.test(text)) return 'basic'
  if (question.type === 'fill') return 'standard'
  if (/정의|약자|원인|대표|무엇|어느|어떤/.test(text)) return 'basic'
  return 'standard'
}

function enrichQuestion(question) {
  const difficulty = inferDifficulty(question)
  if (question.type === 'match') {
    const accepts = relatedAliases([question.answer, ...(question.accepts ?? [])])
    return { ...question, difficulty, difficultyLabel: DIFFICULTY_LABELS[difficulty], accepts }
  }
  if (question.type === 'fill' && Array.isArray(question.answers)) {
    const answers = question.answers.map(answerSet => relatedAliases(answerSet))
    return { ...question, difficulty, difficultyLabel: DIFFICULTY_LABELS[difficulty], answers }
  }
  return { ...question, difficulty, difficultyLabel: DIFFICULTY_LABELS[difficulty] }
}

export const questions = rawQuestions.map(enrichQuestion)

export const DIFFICULTIES = [
  { id: 'all', label: '전체 난이도' },
  { id: 'basic', label: '기초: 설명→키워드' },
  { id: 'standard', label: '표준: 보기 비교' },
  { id: 'advanced', label: '심화: 연결·서술' },
]

export const QUIZ_TYPES = [
  { "id": "all", "label": "전체 유형", "icon": "🎯", "color": "indigo" },
  { "id": "multiple", "label": "4지선다", "icon": "📝", "color": "blue" },
  { "id": "fill", "label": "빈칸 채우기", "icon": "✏️", "color": "violet" },
  { "id": "match", "label": "단답형", "icon": "🔗", "color": "rose" }
]

export const LECTURES = [
  { "id": "all", "label": "전체 강의" },
  { "id": "9강", "label": "9강 원소·중금속" },
  { "id": "10강", "label": "10강 노출·흡수·영향" },
  { "id": "11-12강", "label": "11-12강 제도·경영" },
  { "id": "12-13강", "label": "12-13강 반도체 공정" },
  { "id": "13-14강", "label": "13-14강 SEMI·안전" }
]
