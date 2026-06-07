export const LECTURES = [
  {
    "id": "all",
    "label": "전체"
  },
  {
    "id": "8강",
    "label": "8강 GP"
  },
  {
    "id": "9강",
    "label": "9강 Contact"
  },
  {
    "id": "10강",
    "label": "10강 BEOL"
  },
  {
    "id": "11강",
    "label": "11강 DRAM Cell Tr"
  },
  {
    "id": "12강",
    "label": "12강 DRAM Cell Cap"
  },
  {
    "id": "13강",
    "label": "13강 Logic 3D"
  }
]

export const questions = [
  {
    "id": 1,
    "type": "multiple",
    "lecture": "8강",
    "category": "GP 구성과 역할",
    "question": "GP(Gate Pattern) 구성요소 중 Gate Stack의 역할로 올바른 것은?",
    "options": [
      "S/D Doping 영역 결정 및 Gate stack 측벽 보호, Contact와 분리",
      "Transistor 유전막, Gate와 Si 절연, Capacitor 유전막 역할",
      "Transistor Gate 전극, 배선, Capacitor 상부 전극, Resistor 역할",
      "Active에 직접 연결되는 전도체 역할"
    ],
    "answer": 2,
    "explanation": "Gate Stack은 Transistor의 Gate 전극·배선, Capacitor 상부 전극, Resistor 역할을 한다. S/D 영역 결정은 Spacer, 유전막은 Gate Oxide의 역할이다."
  },
  {
    "id": 2,
    "type": "multiple",
    "lecture": "8강",
    "category": "GP 구성과 역할",
    "question": "GP 구성요소 중 Spacer의 역할로 올바른 것은?",
    "options": [
      "Gate와 Si 사이 절연 및 Capacitor 유전막 역할",
      "S/D Doping 영역 결정, Gate stack 측벽 보호, Contact와 분리",
      "Transistor Gate 전극, 배선, Resistor 역할",
      "Active와 배선을 저저항으로 연결하는 통로 역할"
    ],
    "answer": 1,
    "explanation": "Spacer는 S/D Doping 영역을 결정하고, Gate stack 측벽을 보호하며, Contact와 Gate stack을 분리하는 역할을 한다."
  },
  {
    "id": 3,
    "type": "multiple",
    "lecture": "8강",
    "category": "GP 구성과 역할",
    "question": "GP 구성요소 중 Gate Oxide의 역할로 올바른 것은?",
    "options": [
      "Transistor Gate 전극, 배선, Resistor 역할",
      "S/D Doping 영역 결정, Contact와 Gate 분리 역할",
      "Transistor 유전막, Gate와 Si 절연, Capacitor 유전막 역할",
      "Active Si와 상부 배선을 저저항으로 연결하는 역할"
    ],
    "answer": 2,
    "explanation": "Gate Oxide는 Transistor 유전막, Gate와 Si 사이를 절연하고, Capacitor 유전막 역할을 한다."
  },
  {
    "id": 4,
    "type": "multiple",
    "lecture": "8강",
    "category": "GP 종류",
    "question": "Logic GP에서 현재 주로 사용되는 Gate 방식은?",
    "options": [
      "Polycide Gate",
      "Salicide Gate",
      "Polysilicon Gate",
      "Metal Gate"
    ],
    "answer": 3,
    "explanation": "현재 Logic은 Metal Gate를 사용한다. 예전에는 Poly Si 재질을 사용했으나 현재는 Metal Gate로 전환되었다."
  },
  {
    "id": 5,
    "type": "multiple",
    "lecture": "8강",
    "category": "GP 종류 Logic",
    "question": "Logic GP 구조의 발전 순서로 올바른 것은?",
    "options": [
      "FinFET → Planar FET → GAAFET → MBCFET",
      "Planar FET → FinFET → GAAFET → MBCFET",
      "Planar FET → GAAFET → FinFET → MBCFET",
      "GAAFET → FinFET → Planar FET → MBCFET"
    ],
    "answer": 1,
    "explanation": "Logic GP는 Planar FET → FinFET → GAAFET(Nanowire) → MBCFET(Nanosheet) 순으로 발전했다."
  },
  {
    "id": 6,
    "type": "multiple",
    "lecture": "8강",
    "category": "Gate Stack History",
    "question": "Logic에서 Salicide Gate를 사용하는 주요 이유는?",
    "options": [
      "High Power, High Resistance가 필요하기 때문",
      "Low Power, Low Resistance가 필요하기 때문",
      "High Power, Low Resistance가 필요하기 때문",
      "Low Power, High Resistance가 필요하기 때문"
    ],
    "answer": 1,
    "explanation": "Logic은 Low Power, Low Resistance를 요구하며, 높은 공정 노드일수록 낮은 저항이 필수적이다. Salicide는 이런 요구에 맞는 Gate 구조이다."
  },
  {
    "id": 7,
    "type": "multiple",
    "lecture": "8강",
    "category": "Gate Stack History",
    "question": "Polycide Gate가 Salicide Gate보다 유리한 점은?",
    "options": [
      "Dual Poly 및 저항 분리가 어렵다",
      "Silicide 공정이 Control 어렵다",
      "Dual Poly 및 저항 분리가 용이하다",
      "Single Poly만 사용 가능하다"
    ],
    "answer": 2,
    "explanation": "Polycide Gate는 Silicide 공정이 용이하여 Dual Poly 및 저항 분리가 쉽다. 반면 Salicide Gate는 Silicide 공정 Control이 어려워 Dual Poly 및 저항 분리가 어렵다."
  },
  {
    "id": 8,
    "type": "multiple",
    "lecture": "8강",
    "category": "Gate Stack",
    "question": "PMOS에서 N+Poly를 사용했을 때 발생하는 주요 문제는?",
    "options": [
      "Gate Oxide가 파괴된다",
      "Contact 형성이 불가능해진다",
      "Poly Depletion(폴리 공핍) 문제가 발생한다",
      "S/D Doping이 불균일해진다"
    ],
    "answer": 2,
    "explanation": "PMOS에서 N+Poly를 사용하면 Gate와 채널 사이에 Poly Depletion(폴리 공핍)이 발생하여 유효 게이트 산화막 두께가 증가하는 문제가 생긴다."
  },
  {
    "id": 9,
    "type": "multiple",
    "lecture": "8강",
    "category": "Gate Stack Memory",
    "question": "Memory DRAM의 FinGate에서 Poly Si와 High-k 사이에 W(텅스텐)을 추가하는 이유는?",
    "options": [
      "산화를 방지하기 위해",
      "절연 특성을 향상시키기 위해",
      "Gate 저항을 낮추기 위해",
      "Capacitor 용량을 높이기 위해"
    ],
    "answer": 2,
    "explanation": "DRAM FinGate에서 Poly Si 위에 W을 추가하는 것은 개구선(Word Line)의 저항을 낮추기 위함이다."
  },
  {
    "id": 10,
    "type": "multiple",
    "lecture": "8강",
    "category": "Silicidation",
    "question": "Poly Si를 Fully Silicidation 했을 때의 결과는?",
    "options": [
      "Poly Si가 남아 부분적으로만 금속화된다",
      "Gate Oxide도 함께 금속화된다",
      "전체 Poly Si가 완전히 금속화(Metal化)된다",
      "Silicide가 형성되지 않는다"
    ],
    "answer": 2,
    "explanation": "Fully Silicidation을 진행하면 Poly Si 전체가 금속과 반응하여 완전히 금속화된다. Partial Silicidation은 일부만 금속화된다."
  },
  {
    "id": 11,
    "type": "multiple",
    "lecture": "9강",
    "category": "Contact 구성과 역할",
    "question": "Contact의 주요 역할로 올바른 것은?",
    "options": [
      "Gate와 Si 사이 절연막을 형성하고 누설 전류를 낮추는 역할",
      "전기 신호 Loss를 줄이며 ACT Si·Gate·배선 등을 저저항으로 연결",
      "S/D Doping 위치를 정하고 Gate stack 측벽을 보호하는 역할",
      "Capacitor 전극 사이에서 전하 저장용 유전막을 형성하는 역할"
    ],
    "answer": 1,
    "explanation": "Contact는 전기 신호 Loss를 최소화하면서 Active Si, Gate, 배선 등을 연결하는 역할을 하며, 저저항 구현이 핵심이다."
  },
  {
    "id": 12,
    "type": "multiple",
    "lecture": "9강",
    "category": "Contact 구성요소",
    "question": "Contact 구성요소 중 Barrier Metal의 역할은?",
    "options": [
      "Si 표면의 도핑 농도를 높여 접촉 저항을 낮추는 Layer",
      "Metal 배선 자체로 전류가 흐르는 주 통로가 되는 Layer",
      "물질 간 확산·화학 반응을 억제해 계면을 안정화하는 Layer",
      "Gate stack 측벽을 덮어 S/D Implant 영역을 정하는 Layer"
    ],
    "answer": 2,
    "explanation": "Barrier Metal은 Si/Metal bulk 사이에서 물질 간 화학 반응(확산)을 방지하는 층이다."
  },
  {
    "id": 13,
    "type": "multiple",
    "lecture": "9강",
    "category": "Contact 구성요소",
    "question": "Contact 구성요소 중 Silicide의 역할은?",
    "options": [
      "Si 표면의 도핑 농도 프로파일을 직접 조절",
      "Si와 Metal 사이에 저저항 Ohmic Contact 형성",
      "Contact hole 측벽을 절연막으로 보호",
      "Metal 원자의 확산을 막는 Barrier 역할만 수행"
    ],
    "answer": 1,
    "explanation": "Silicide는 Si와 Metal 사이에 위치하여 Ohmic Contact(저저항 접합)를 형성하는 역할을 한다."
  },
  {
    "id": 14,
    "type": "multiple",
    "lecture": "9강",
    "category": "Contact 종류",
    "question": "Contact의 종류(구조 관점) 순서로 올바른 것은?",
    "options": [
      "Si to Poly-Si contact → Si to Metal contact → Metal to Metal contact",
      "Metal to Metal → Si to Poly-Si → Si to Metal",
      "Si to Metal → Si to Poly-Si → Metal to Metal",
      "Metal to Metal → Si to Metal → Si to Poly-Si"
    ],
    "answer": 0,
    "explanation": "Contact 종류를 구조 관점으로 나열하면 (1) Si to Poly-Si contact, (2) Si to Metal contact, (3) Metal to Metal contact 순이다."
  },
  {
    "id": 15,
    "type": "multiple",
    "lecture": "9강",
    "category": "Contact 역할 DRAM",
    "question": "DRAM Contact에서 Si-Si contact가 사용되는 이유는?",
    "options": [
      "Logic에서 저저항을 위해 사용된다",
      "DRAM에서 다른 면(하부↔상부)에 Si끼리 연결하는 구조로 사용된다",
      "M-Si contact와 동일한 역할로 사용된다",
      "Gate Oxide와 직접 접촉하기 위해 사용된다"
    ],
    "answer": 1,
    "explanation": "DRAM에서는 Si-Si contact가 서로 다른 면을 Si끼리 연결하는 구조로 사용된다. M-Si contact는 물질 비중과 Ohmic contact가 중요하다."
  },
  {
    "id": 16,
    "type": "multiple",
    "lecture": "9강",
    "category": "Contact 역할 NAND",
    "question": "NAND Flash의 Contact 구성의 특징으로 올바른 것은?",
    "options": [
      "Cell 내 Contact 있음, 하부 on ACT, on GP Metal",
      "Cell 내 Contact 없음, 하부 on ACT·on GP Metal, 상부 on Metal deep Contact",
      "Cell 내 Contact 있음, 전체 Metal Contact",
      "Cell 내 Contact 없음, 전체 Si-Si Contact"
    ],
    "answer": 1,
    "explanation": "NAND Flash는 Cell 내 Contact 없음, 하부 on ACT·on GP Metal, 상부 on Metal deep Contact로 구성된다."
  },
  {
    "id": 17,
    "type": "multiple",
    "lecture": "9강",
    "category": "Contact 역할 Logic",
    "question": "Logic Contact 구성의 특징으로 올바른 것은?",
    "options": [
      "하부 on ACT or SEG, on GP Metal로 구성되며 on Metal Deep Contact는 없음",
      "Cell 내부 Contact가 없고 하부 ACT·GP와 상부 Metal Deep Contact로 구성",
      "Cell 내부 Contact가 있으며 Metal Deep Contact가 반드시 포함되는 구성",
      "Si-Si Contact만 사용하고 Metal 계열 Contact는 배제되는 구성"
    ],
    "answer": 0,
    "explanation": "Logic은 하부 on ACT or SEG, on GP Metal로 구성되며, on Metal Deep Contact는 없다."
  },
  {
    "id": 18,
    "type": "multiple",
    "lecture": "9강",
    "category": "Contact 구성요소",
    "question": "Contact에서 Interface(계면층)의 정의는?",
    "options": [
      "Contact 내부에서 전류를 능동적으로 증폭하는 특수 반도체 층",
      "Metal 배선 사이를 절연하고 CMP 평탄화를 담당하는 절연막 층",
      "Si-Poly Si, Si-Metal 등 서로 다른 물질이 만나 형성되는 불균일 층",
      "금속 원자의 확산을 막기 위해 의도적으로 증착하는 Barrier 층"
    ],
    "answer": 2,
    "explanation": "Interface(계면층)는 Si-Poly Si, Si-Metal 등 서로 다른 물질이 만나는 경계에 형성되는 불균일한 층이다."
  },
  {
    "id": 19,
    "type": "multiple",
    "lecture": "9강",
    "category": "Contact 구성요소",
    "question": "Contact에서 Si/Metal bulk의 역할은?",
    "options": [
      "배선 사이 절연막을 형성하고 층간 평탄화를 담당하는 영역",
      "Contact 접촉부를 지나 전류가 실제로 흐르는 Main 통로",
      "S/D Implant의 도핑 농도와 Junction 깊이를 정하는 영역",
      "Gate Oxide를 외부 식각 손상으로부터 보호하는 측벽 영역"
    ],
    "answer": 1,
    "explanation": "Si/Metal bulk는 Contact에서 전류가 실제로 흐르는 Main 통로 역할을 한다."
  },
  {
    "id": 20,
    "type": "multiple",
    "lecture": "9강",
    "category": "Contact 구성요소",
    "question": "Ohmic Contact 형성에서 가장 중요한 Si 조건은?",
    "options": [
      "낮은 Si Doping 농도",
      "높은 온도 조건",
      "높은 Si Doping 농도",
      "두꺼운 Gate Oxide"
    ],
    "answer": 2,
    "explanation": "Ohmic Contact 형성을 위해서는 높은 Si Doping 농도가 필수적이다. 도핑 농도가 충분해야 저저항 접촉이 가능하다."
  },
  {
    "id": 21,
    "type": "multiple",
    "lecture": "10강",
    "category": "BEOL 구성과 역할",
    "question": "BEOL(Back End Of Line)의 주요 역할로 올바른 것은?",
    "options": [
      "Transistor 형성 및 Gate 패터닝",
      "전력 및 신호 전달 배선 연결, Via/Contact 연결, Chip 보호",
      "Contact 형성 및 Spacer 패터닝",
      "S/D Doping 및 Gate Oxide 형성"
    ],
    "answer": 1,
    "explanation": "BEOL은 기본 전력·신호 전달 배선으로 연결하고 Chip을 보호하는 역할을 하며, Cu 배선 중심으로 구성된다."
  },
  {
    "id": 22,
    "type": "multiple",
    "lecture": "10강",
    "category": "BEOL 구성요소",
    "question": "BEOL에서 현재 주로 사용되는 배선 금속은?",
    "options": [
      "Al(알루미늄)",
      "W(텅스텐)",
      "Cu(구리)",
      "Poly Si"
    ],
    "answer": 2,
    "explanation": "Cu Dual Damascene 공정을 기반으로 Cu를 주 배선 재료로 사용한다. Deep Contact에는 W(텅스텐) plug를 사용한다."
  },
  {
    "id": 23,
    "type": "multiple",
    "lecture": "10강",
    "category": "BEOL 구성요소",
    "question": "BEOL에서 Deep Contact에 주로 사용되는 금속은?",
    "options": [
      "Cu",
      "Al",
      "W(텅스텐) plug",
      "TiN"
    ],
    "answer": 2,
    "explanation": "Deep Contact에는 W(텅스텐) plug를 사용한다. Cu는 AL 배선에 사용하고, TiN은 Barrier Metal로 사용된다."
  },
  {
    "id": 24,
    "type": "multiple",
    "lecture": "10강",
    "category": "BEOL 구성요소",
    "question": "BEOL에서 RC delay를 줄이기 위한 ILD(절연막) 조건은?",
    "options": [
      "High-k(고유전율) IMD 사용",
      "Low-k(저유전율) IMD 사용",
      "SiO2만 사용",
      "SiN만 사용"
    ],
    "answer": 1,
    "explanation": "RC delay = R × C이므로, 배선 간 절연막의 유전율(k)을 낮추는 Low-k IMD를 사용하여 C를 줄이고 RC delay를 감소시킨다."
  },
  {
    "id": 25,
    "type": "multiple",
    "lecture": "10강",
    "category": "BEOL 구성요소",
    "question": "BEOL 구성요소 중 ILD(Inter-Layer Dielectric)의 역할은?",
    "options": [
      "전력과 신호를 직접 전달하는 Cu 중심 금속 배선층",
      "배선 사이를 절연하고 CMP로 층간 단차를 줄이는 절연층",
      "하부 Device와 상부 Metal을 연결하는 W plug 구조",
      "Chip pad 위치를 패키지 연결에 맞게 재배치하는 배선층"
    ],
    "answer": 1,
    "explanation": "ILD(층간 절연막)는 배선 층 사이를 절연하고 CMP 공정으로 평탄화하는 역할을 한다."
  },
  {
    "id": 26,
    "type": "multiple",
    "lecture": "10강",
    "category": "BEOL 구성과 역할",
    "question": "BEOL 구성 역할 중 Chip Guard Ring의 기능은?",
    "options": [
      "칩 내부 회로에 전력과 신호를 전달하는 주 배선 경로",
      "공정 중 Chemical과 가스를 공급하기 위한 임시 유로 구조",
      "스크라이브 라인 손상이 회로 영역으로 전파되지 않도록 외곽 보호",
      "Cu 배선의 비저항을 낮추기 위해 삽입하는 금속 보조층"
    ],
    "answer": 2,
    "explanation": "Chip Guard Ring은 Scribe Line 근처에서 Chip을 보호하여 다이싱 시 발생하는 균열이 회로 영역으로 전파되지 않도록 한다."
  },
  {
    "id": 27,
    "type": "multiple",
    "lecture": "10강",
    "category": "BEOL 구성요소 History",
    "question": "BEOL에서 Al 배선에서 Cu 배선으로 전환한 주요 이유는?",
    "options": [
      "Al보다 고온 안정성이 우수하기 때문",
      "Al보다 비저항이 낮아 RC delay를 감소시킬 수 있기 때문",
      "Cu가 Al보다 산화되지 않기 때문",
      "Cu 공정이 Al보다 단순하기 때문"
    ],
    "answer": 1,
    "explanation": "Cu는 Al보다 비저항이 낮아 RC delay를 줄일 수 있다. Cu Dual Damascene 공정으로 구현하며 BEOL 고성능화의 핵심이다."
  },
  {
    "id": 28,
    "type": "multiple",
    "lecture": "10강",
    "category": "BEOL 구성요소",
    "question": "BEOL 구성요소 중 RDL(Redistribution Layer)의 역할은?",
    "options": [
      "BEOL 내부에서 기본 전력·신호를 전달하는 주 금속 배선",
      "Chip 내부 패드를 패키지 연결 위치에 맞게 재배선하는 Layer",
      "FEOL 영역에서 Transistor Gate stack을 형성하는 Layer",
      "하부 Device와 상부 Metal을 수직으로 연결하는 W plug Layer"
    ],
    "answer": 1,
    "explanation": "RDL(Redistribution Layer)은 Chip 내부 패드(I/O)를 원하는 위치로 재배선하는 역할을 하며, 패키지 연결에 중요하다."
  },
  {
    "id": 29,
    "type": "multiple",
    "lecture": "11강",
    "category": "DRAM Cell Tr 구성과 역할",
    "question": "DRAM Unit Cell의 기본 구성은?",
    "options": [
      "1 Transistor + 2 Capacitor",
      "2 Transistor + 1 Capacitor",
      "1 Transistor + 1 Capacitor (1T1C)",
      "2 Transistor + 2 Capacitor"
    ],
    "answer": 2,
    "explanation": "DRAM의 기본 단위 셀은 1개의 Transistor + 1개의 Capacitor(1T1C) 구조이다."
  },
  {
    "id": 30,
    "type": "multiple",
    "lecture": "11강",
    "category": "DRAM Cell Tr 구성과 역할",
    "question": "DRAM에서 Word Line(WL)의 역할은?",
    "options": [
      "Cell Capacitor에 전하 형태로 데이터를 저장하는 역할",
      "저장된 전하를 일정 주기마다 다시 채워 유지하는 역할",
      "Row 방향 Cell Transistor를 선택해 ON/OFF하는 역할",
      "Column 방향으로 읽기·쓰기 데이터를 전달하는 역할"
    ],
    "answer": 2,
    "explanation": "Word Line(WL)은 Row Decoder에서 선택 신호를 보내 해당 행의 Cell Transistor를 ON/OFF하는 역할을 한다."
  },
  {
    "id": 31,
    "type": "multiple",
    "lecture": "11강",
    "category": "DRAM Cell Tr 구성과 역할",
    "question": "DRAM에서 Bit Line(BL)의 역할은?",
    "options": [
      "Row 방향 Cell Transistor를 선택해 Gate를 제어하는 통로",
      "Cell 내부에 전하를 저장해 0/1 데이터를 유지하는 소자",
      "Sense Amplifier와 연결되어 Column 방향 데이터를 읽고 쓰는 통로",
      "Capacitor 누설 전하를 주기적으로 보충하는 Refresh 회로"
    ],
    "answer": 2,
    "explanation": "Bit Line(BL)은 Column 방향의 데이터 전달 통로로, Sense Amplifier와 연결되어 데이터를 읽고 쓰는 역할을 한다."
  },
  {
    "id": 32,
    "type": "multiple",
    "lecture": "11강",
    "category": "DRAM Cell Tr 구성과 역할",
    "question": "DRAM Cell을 수조통에 비유할 때 '연결'에 해당하는 파라미터는?",
    "options": [
      "t.REF (Refresh 주기)",
      "t.RDL (Read/Write 연결 시간)",
      "R/H (분리)",
      "PGE (Power Gate Enable)"
    ],
    "answer": 1,
    "explanation": "DRAM 수조통 비유에서 '연결'은 t.RDL, '유지'는 t.REF, '분리'는 R/H에 해당한다."
  },
  {
    "id": 33,
    "type": "multiple",
    "lecture": "11강",
    "category": "DRAM vs Logic",
    "question": "Logic FinFET와 DRAM Cell FinFET(BCAT)의 구조적 차이점은?",
    "options": [
      "DRAM BCAT도 Logic과 동일하게 Si 위로 올라오는 구조이다",
      "DRAM BCAT은 Recess 공정으로 Si 아래에 매몰(Buried)되는 구조이다",
      "DRAM BCAT은 Planar 구조를 유지한다",
      "Logic FinFET만 3D 구조이고 DRAM은 2D이다"
    ],
    "answer": 1,
    "explanation": "Logic FinFET는 Si 위로 Fin이 올라오는 구조이지만, DRAM BCAT(Buried Cell Array Transistor)는 Recess 공정으로 Si 속에 매몰되는 구조이다."
  },
  {
    "id": 34,
    "type": "multiple",
    "lecture": "11강",
    "category": "DRAM 불량",
    "question": "DRAM에서 Row Hammer 현상의 정의는?",
    "options": [
      "BL을 반복 충전할 때 Sense Amplifier offset이 누적되어 데이터가 바뀌는 현상",
      "WL을 반복 선택할 때 인접 셀에 Parasitic Channel이 생겨 데이터가 변하는 현상",
      "Gate Oxide가 절연 파괴되어 Cell Transistor가 영구적으로 Short되는 현상",
      "Capacitor 과충전으로 유전막 누설이 증가해 저장 전하가 손실되는 현상"
    ],
    "answer": 1,
    "explanation": "Row Hammer는 특정 WL을 반복적으로 On/Off하면 인접 셀에 Parasitic Channel이 형성되어 데이터가 변하는 현상이다(WL Disturb의 일종)."
  },
  {
    "id": 35,
    "type": "multiple",
    "lecture": "11강",
    "category": "DRAM 불량",
    "question": "DRAM BL Disturb 중 tBDL(지접성부 불량)의 주요 원인은?",
    "options": [
      "WL 전압 부족으로 Cell Transistor가 충분히 켜지지 않아 발생",
      "Write 신호 이후 Cell Capacitor에 Data가 저장될 때까지 허용 시간이 초과되어 발생",
      "Gate Oxide 절연 파괴로 Cell Transistor가 영구적으로 Short되어 발생",
      "Spacer 손상으로 S/D Junction 위치가 변해 누설 경로가 생겨 발생"
    ],
    "answer": 1,
    "explanation": "BL Disturb는 Write 신호 이후 Cell Capacitor Data가 저장될 때까지 허용된 시간(tBDL)이 초과될 때 발생한다."
  },
  {
    "id": 36,
    "type": "multiple",
    "lecture": "11강",
    "category": "DRAM BCAT",
    "question": "DRAM BCAT(Buried Cell Array Transistor) 파라미터가 중요한 이유는?",
    "options": [
      "Gate Oxide 두께 편차가 커져 Vt 산포와 누설 전류가 동시에 증가하기 때문",
      "Si 재질 문제로 관련된 산화 문제 및 Si와 Metal의 강결합 형성 때문",
      "Bit Line 저항 증가가 Sense Amplifier 동작 시간을 직접 지배하기 때문",
      "Capacitor 용량 감소가 Refresh 주기를 직접 결정하는 유일한 인자이기 때문"
    ],
    "answer": 1,
    "explanation": "BCAT 파라미터는 Si 재질 관련 산화 문제와, 좁은 구조에서 Si와 Metal이 강하게 결합하여 Metal화되는 문제 때문에 중요하다."
  },
  {
    "id": 37,
    "type": "multiple",
    "lecture": "12강",
    "category": "Cell Cap 구성과 역할",
    "question": "DRAM Cell Capacitor의 역할은?",
    "options": [
      "전류를 증폭하는 소자",
      "데이터 0 또는 1을 전하 형태로 저장하는 소자",
      "신호를 차단하는 소자",
      "배선 간 절연하는 소자"
    ],
    "answer": 1,
    "explanation": "DRAM Cell Capacitor는 하부전극/유전막/상부전극으로 이루어지며, 데이터 0 또는 1을 전하 형태로 저장하는 소자이다."
  },
  {
    "id": 38,
    "type": "multiple",
    "lecture": "12강",
    "category": "Cell Cap Physics",
    "question": "평판형 capacitor에서 저장 capacitance를 키우는 변수 변화 조합으로 가장 적절한 것은?",
    "options": [
      "유전율을 낮추고 유효 전극 면적을 줄이며 유전체 두께를 얇게 한다",
      "유전율을 높이고 유효 전극 면적을 넓히며 유전체 두께를 얇게 한다",
      "유전율을 높이고 유효 전극 면적을 줄이며 유전체 두께를 두껍게 한다",
      "유전율을 낮추고 유효 전극 면적을 넓히며 유전체 두께를 두껍게 한다"
    ],
    "answer": 1,
    "explanation": "Capacitance는 유전율과 전극 면적이 클수록, 유전막 두께가 얇을수록 증가한다. 공식은 해설에서만 확인하면 된다."
  },
  {
    "id": 39,
    "type": "multiple",
    "lecture": "12강",
    "category": "Cell Cap Physics",
    "question": "DRAM Cell Capacitor에서 셀 면적 축소 이후에도 저장 용량(Cs)을 확보하기 위한 접근으로 가장 적절한 것은?",
    "options": [
      "Bit line capacitance를 키워 sense margin을 높이고 storage node 면적은 줄인다",
      "Planar plate 구조를 유지하고 유전체를 low-k로 바꾸어 leakage만 낮춘다",
      "Cylinder/Pillar 등 3D 구조로 유효 면적을 늘리고 high-k 유전체와 누설 제어를 함께 적용한다",
      "Storage node와 plate electrode 간 거리를 늘려 breakdown margin만 우선 확보한다"
    ],
    "answer": 2,
    "explanation": "DRAM scaling에서는 평면 면적만으로 Cs 확보가 어려워 Cylinder/Pillar 같은 3D 구조로 유효 면적을 키우고, high-k 유전체와 leakage 제어를 함께 고려한다."
  },
  {
    "id": 40,
    "type": "multiple",
    "lecture": "12강",
    "category": "Cell Cap 특성 및 품질",
    "question": "DRAM Sense Amplifier가 작은 Cell 신호를 더 잘 구분하게 하려면 어떤 조건이 가장 유리한가?",
    "options": [
      "Storage Capacitance를 줄이고 Bit Line Capacitance를 키운다",
      "Storage Capacitance를 키우고 Bit Line Capacitance의 부담을 줄인다",
      "Storage Capacitance와 Bit Line Capacitance를 모두 동일하게 낮춘다",
      "Bit Line Capacitance를 키우고 Cell 전하 저장량은 낮게 유지한다"
    ],
    "answer": 1,
    "explanation": "Sense margin은 Cell의 Storage Capacitance가 클수록 유리하고, Bit Line Capacitance가 너무 크면 작은 Cell 신호가 희석된다."
  },
  {
    "id": 41,
    "type": "multiple",
    "lecture": "12강",
    "category": "Cell Cap 구성과 역할",
    "question": "DRAM Cell Capacitor 구조에서 전하(데이터)가 실제로 저장되는 위치는?",
    "options": [
      "상부전극(Top Electrode)의 금속 내부에 전하가 고립되어 저장",
      "유전막(Dielectric) 자체 내부에 자유 전자가 직접 저장",
      "하부전극(Storage Node)과 상부전극 사이 전기장 형태로 저장",
      "하부전극과 유전막 경계면의 결함 Trap에만 전하가 저장"
    ],
    "answer": 2,
    "explanation": "Capacitor는 두 전극(하부/상부) 사이의 전기장을 통해 전하를 저장하며, Storage Node(하부전극)의 전위 차이로 0/1 데이터를 구분한다."
  },
  {
    "id": 42,
    "type": "multiple",
    "lecture": "12강",
    "category": "Cell Cap History",
    "question": "DRAM Cell Capacitor에서 3D 구조(Cylinder 형태, SPT)를 사용하는 이유는?",
    "options": [
      "평면 구조보다 Mask 수를 줄여 전체 공정 난이도를 낮추기 위해",
      "한정된 Cell 면적에서 수직 표면적을 늘려 Capacitance를 확보하기 위해",
      "Capacitor 유전막을 제거하고 금속 전극만으로 데이터를 저장하기 위해",
      "Transistor Gate Oxide를 식각 손상으로부터 직접 보호하기 위해"
    ],
    "answer": 1,
    "explanation": "Cell 크기가 작아지면서 충분한 Capacitance 확보가 어려워졌다. 3D Cylinder 구조로 수직 방향 표면적을 늘려 같은 면적에서 더 높은 Cs를 얻는다."
  },
  {
    "id": 43,
    "type": "multiple",
    "lecture": "12강",
    "category": "Cell Cap History",
    "question": "DRAM Capacitor에서 High-k 유전막을 사용하는 이유는?",
    "options": [
      "동일 구조에서 유전율을 낮춰 Bit Line Capacitance를 줄이기 위해",
      "같은 물리 두께에서 더 높은 Capacitance를 확보하기 위해",
      "Capacitor 전극을 Poly-Si로 유지하면서 공정 비용을 낮추기 위해",
      "Gate Leakage만 차단하고 Storage Capacitance와는 무관하게 만들기 위해"
    ],
    "answer": 1,
    "explanation": "C = εA/d에서 High-k(고유전율) 재료는 유전막 두께를 늘리지 않아도(EOT 감소 없이) 더 높은 Capacitance를 얻을 수 있어 누설 전류를 줄이면서 Cs를 높인다."
  },
  {
    "id": 44,
    "type": "multiple",
    "lecture": "12강",
    "category": "Cell Cap 구성과 역할",
    "question": "DRAM에서 Refresh가 필요한 이유는?",
    "options": [
      "Gate Oxide가 주기적으로 소모되어 다시 성장시켜야 하기 때문",
      "Capacitor 저장 전하가 시간이 지나며 누설되어 데이터가 약해지기 때문",
      "Bit Line 저항이 동작 중 계속 증가해 주기적으로 낮춰야 하기 때문",
      "Word Line 전압이 행 선택 후 영구적으로 사라져 다시 만들어야 하기 때문"
    ],
    "answer": 1,
    "explanation": "DRAM Capacitor는 전하를 완전히 밀봉하지 못하므로 시간이 지나면 전하가 누설된다. 따라서 주기적으로 Refresh하여 데이터를 재저장해야 한다."
  },
  {
    "id": 45,
    "type": "multiple",
    "lecture": "13강",
    "category": "3D Tr 구조의 필요성",
    "question": "삼성 Galaxy 시리즈에서 14nm 공정에 처음 도입된 트랜지스터 구조는?",
    "options": [
      "Planar FET",
      "GAAFET (Nanowire)",
      "MBCFET (Nanosheet)",
      "FinFET"
    ],
    "answer": 3,
    "explanation": "삼성은 14nm 공정부터 FinFET를 도입했다. Planar → FinFET 전환이 14nm에서 이루어졌으며, 이후 GAAFET, MBCFET로 발전하였다."
  },
  {
    "id": 46,
    "type": "multiple",
    "lecture": "13강",
    "category": "Classical Scaling 한계",
    "question": "Classical Scaling의 한계 중 S/D Leakage 원인이 아닌 것은?",
    "options": [
      "Thermionic emission over barrier",
      "QM tunneling through barrier",
      "Band to band tunneling from body to drain",
      "Contact 저항 증가"
    ],
    "answer": 3,
    "explanation": "S/D Leakage의 원인은 (1) Thermionic emission, (2) QM tunneling, (3) BTBT(Band-To-Band Tunneling)이다. Contact 저항은 S/D Leakage와 직접 관련 없다."
  },
  {
    "id": 47,
    "type": "multiple",
    "lecture": "13강",
    "category": "Classical Scaling 한계",
    "question": "Leakage 억제 방법 중 Higher body doping의 단점으로 올바른 것은?",
    "options": [
      "Random Dopant Fluctuation이 완전히 제거되어 Vth 조절이 불가능해진다",
      "Lower mobility, higher junction capacitance, increased junction leakage가 발생한다",
      "Gate Oxide 물리 두께가 자동으로 증가해 EOT scaling이 어려워진다",
      "Drain 전압이 낮아져 읽기 전류가 완전히 흐르지 않게 된다"
    ],
    "answer": 1,
    "explanation": "Higher body doping은 Leakage를 억제하지만 Mobility 감소, 접합 용량 증가, 접합 누설 증가라는 부작용이 생긴다."
  },
  {
    "id": 48,
    "type": "multiple",
    "lecture": "13강",
    "category": "Classical Scaling 한계",
    "question": "Ultra Shallow SD Junction 형성 시 발생하는 단점은?",
    "options": [
      "접합 용량(Junction Capacitance)이 감소한다",
      "외부 저항(Rext)이 높아진다",
      "Gate Oxide가 얇아진다",
      "Vth가 과도하게 높아진다"
    ],
    "answer": 1,
    "explanation": "Ultra Shallow SD Junction은 Short Channel Effect를 억제하지만 외부 저항(Rext)이 증가하는 단점이 있다."
  },
  {
    "id": 49,
    "type": "multiple",
    "lecture": "13강",
    "category": "Classical Scaling 한계 Vth",
    "question": "Ideal Subthreshold Swing(S.swing)의 물리적 하한값은?",
    "options": [
      "30 mV/dec",
      "45 mV/dec",
      "60 mV/dec",
      "90 mV/dec"
    ],
    "answer": 2,
    "explanation": "Ideal S.swing = 60 mV/dec × (1 + Cd/Cox)이며, 실온에서 이론적 최솟값은 60 mV/dec이다. 더 낮추려면 터널링 기반 소자(TFET)가 필요하다."
  },
  {
    "id": 50,
    "type": "multiple",
    "lecture": "13강",
    "category": "Classical Scaling 한계 Vth",
    "question": "Vth Scaling(문턱전압 낮추기)의 문제점은?",
    "options": [
      "Vth가 낮아지면 ION 전류가 감소한다",
      "Vth를 낮추면 VOD는 유지되지만 IOFF(누설 전류)가 증가한다",
      "S.swing이 감소하여 전력 소비가 줄어든다",
      "Gate 누설 전류가 감소한다"
    ],
    "answer": 1,
    "explanation": "Vth scaling은 Constant Vth-Vt(VOD)를 유지하지만 IOFF(Off-state Leakage)가 지수함수적으로 증가하는 문제가 있다."
  },
  {
    "id": 51,
    "type": "multiple",
    "lecture": "13강",
    "category": "Classical Scaling 한계 Gate",
    "question": "Gate Oxide Direct Tunneling이 문제가 되는 SiO2 두께 조건은?",
    "options": [
      "10nm 이하",
      "5nm 이하",
      "2nm 미만",
      "1nm 이하"
    ],
    "answer": 2,
    "explanation": "2nm 미만의 얇은 SiO2 게이트 산화막에서는 Non-zero wave-function 때문에 Direct Tunneling이 발생하여 누설 전류가 급격히 증가한다."
  },
  {
    "id": 52,
    "type": "multiple",
    "lecture": "13강",
    "category": "3D Tr 구조의 필요성",
    "question": "45nm 공정 이후 도입된 주요 재료 변화로 올바른 것은?",
    "options": [
      "SiON/Poly Si Gate → High-k/Metal Gate(+SiGe)",
      "SiO2/Metal Gate → SiON/Poly Si Gate",
      "High-k/Metal Gate → SiON/Poly Si Gate",
      "Poly Si → SiON Gate만 변경"
    ],
    "answer": 0,
    "explanation": "45nm(HK/MG 도입)부터 SiON/Poly Si Gate에서 High-k/Metal Gate(+SiGe S/D)로 전환되었다. 이는 Performance와 Leakage 모두를 개선하기 위한 재료 혁신이다."
  },
  {
    "id": 53,
    "type": "multiple",
    "lecture": "13강",
    "category": "Classical Scaling 한계",
    "question": "On current 포화(saturation)의 원인 중 Mobility degradation에서 Eeff가 증가하면?",
    "options": [
      "Mobility가 증가하여 ION이 커진다",
      "Mobility가 감소하여 ION이 줄어든다",
      "Vth가 감소하여 ION이 증가한다",
      "Gate 누설이 감소한다"
    ],
    "answer": 1,
    "explanation": "Substrate doping Ndep를 높이면 Eeff(유효 전기장)가 증가하고, 이로 인해 Mobility가 감소하여 ION이 줄어드는 Mobility degradation이 발생한다."
  },
  {
    "id": 54,
    "type": "multiple",
    "lecture": "13강",
    "category": "Classical Scaling 한계",
    "question": "DIBL(Drain Induced Barrier Lowering)을 줄이기 위한 효과적인 방법은?",
    "options": [
      "Gate Oxide 두께를 늘려 Gate 전기장이 Channel에 덜 전달되게 한다",
      "Drain 전압을 높여 Source-Drain 사이 전계 장벽을 더 낮춘다",
      "Channel 길이를 늘리거나 Gate가 Channel을 더 잘 감싸는 3D 구조를 사용한다",
      "Si 기판 도핑을 낮춰 공핍층을 넓히고 Drain 영향이 커지게 한다"
    ],
    "answer": 2,
    "explanation": "DIBL은 Short Channel Effect의 일종으로, Channel 길이를 늘리거나 FinFET/GAAFET처럼 Gate가 채널을 여러 면에서 감싸는 구조로 억제할 수 있다."
  },
  {
    "id": 55,
    "type": "multiple",
    "lecture": "8강",
    "category": "Gate Stack",
    "question": "Salicide 공정에서 Self-align 형성의 원리는?",
    "options": [
      "Metal과 Si의 도핑 농도 차이를 이용한다",
      "Metal의 Si와의 반응성과 SiO2와의 반응성 차이를 이용한다",
      "온도 차이를 이용한 선택적 증착으로 형성된다",
      "빛의 파장 차이를 이용한 선택적 식각으로 형성된다"
    ],
    "answer": 1,
    "explanation": "Salicide(Self-Aligned Silicide)는 Metal이 Si와는 반응하지만 SiO2(산화막)와는 반응하지 않는 반응성 차이를 이용하여 Self-align으로 형성된다."
  },
  {
    "id": 56,
    "type": "multiple",
    "lecture": "8강",
    "category": "Gate Stack Vertical 구성요소",
    "question": "Gate Stack Vertical 구성요소 중 TSN(thermal barrier)의 역할은?",
    "options": [
      "게이트 전극의 Work Function을 조절하는 역할",
      "일정 이상 온도에서 Poly+W 사이 Silicidation을 방지하는 열적 분리 역할",
      "W/M 패터닝을 위한 Mask 역할",
      "Gate의 전기 저항을 낮추는 역할"
    ],
    "answer": 1,
    "explanation": "TSN(thermal barrier)은 일정 이상 온도에서 Poly와 W 사이의 Silicidation 발생을 방지하고 열적 분리를 담당한다."
  },
  {
    "id": 57,
    "type": "multiple",
    "lecture": "8강",
    "category": "Gate Stack Vertical 구성요소",
    "question": "Gate Stack Vertical 구성요소 중 WSix(insert layer)의 역할은?",
    "options": [
      "Gate 유전막 역할",
      "HM 사이에 삽입되어 Gate Rs(저항)를 낮추는 역할",
      "S/D Doping 영역 보호 역할",
      "Boron 침투 방지 역할"
    ],
    "answer": 1,
    "explanation": "WSix(insert layer)는 HM(Hard Mask) 사이에 삽입되어 Gate 저항(Rs)을 낮추는 역할을 한다."
  },
  {
    "id": 58,
    "type": "multiple",
    "lecture": "8강",
    "category": "Gate Stack Polycide",
    "question": "Polycide Gate에서 W gate를 도입(Stack down)했을 때 얻는 효과가 아닌 것은?",
    "options": [
      "W/L Rs(저항) 개선",
      "Ti Stack Height 감소",
      "Speed 증가",
      "Gate Oxide 두께 증가"
    ],
    "answer": 3,
    "explanation": "Polycide Gate의 W gate 도입(Stack down)으로 W/L Rs 개선, Ti Stack Height 감소, Speed 증가 효과가 있다. Gate Oxide 두께는 Stack down과 무관하다."
  },
  {
    "id": 59,
    "type": "multiple",
    "lecture": "8강",
    "category": "Replacement Gate",
    "question": "Replacement Metal Gate(RMG) 공정에서 Dummy Gate의 재료는?",
    "options": [
      "W(텅스텐)",
      "TiN",
      "Poly Si",
      "HfO2(하프늄 산화막)"
    ],
    "answer": 2,
    "explanation": "RMG 공정에서 Dummy Gate는 Poly Si로 먼저 형성한 후, 공정 후반부에 제거하고 High-k/Metal Gate로 대체한다."
  },
  {
    "id": 60,
    "type": "multiple",
    "lecture": "8강",
    "category": "Gate Stack Dual Poly",
    "question": "Dual Poly Gate(Work Function Engineering)를 사용하는 목적은?",
    "options": [
      "Gate 저항을 낮추기 위해",
      "NMOS와 PMOS 각각의 Vth(문턱전압)를 최적화하기 위해",
      "Gate Oxide 두께를 줄이기 위해",
      "Salicide 공정을 단순화하기 위해"
    ],
    "answer": 1,
    "explanation": "Dual Poly는 NMOS에 N+Poly, PMOS에 P+Poly를 사용하여 각각의 Work Function을 조절함으로써 NMOS/PMOS의 Vth를 독립적으로 최적화한다."
  },
  {
    "id": 61,
    "type": "multiple",
    "lecture": "8강",
    "category": "Gate Stack Dual Poly",
    "question": "Boron penetration 현상에 대한 설명으로 옳은 것은?",
    "options": [
      "NMOS에서 N+Poly의 Boron이 Gate Oxide를 통과해 채널로 유입되는 현상",
      "PMOS에서 P+Poly Gate의 Boron이 Gate Oxide를 통과해 채널로 유입되는 현상",
      "S/D에서 Boron이 채널 방향으로 확산되는 현상",
      "Spacer에서 Boron이 제거되는 현상"
    ],
    "answer": 1,
    "explanation": "Boron penetration은 PMOS에서 P+ Gate poly의 Boron이 고온 공정 시 Gate Oxide를 통과해 채널(body)로 유입되어 Vth가 변화하는 현상이다."
  },
  {
    "id": 62,
    "type": "multiple",
    "lecture": "8강",
    "category": "Gate Stack Dual Poly",
    "question": "DPN(Decoupled Plasma Nitridation)을 Gate Oxide에 적용하는 이유는?",
    "options": [
      "Gate Oxide 두께를 늘리기 위해",
      "Boron의 채널 침투(Boron penetration)를 막기 위해",
      "S/D 도핑을 활성화하기 위해",
      "Metal Gate의 Work Function을 조절하기 위해"
    ],
    "answer": 1,
    "explanation": "DPN은 Gate Oxide(SiO2)에 Nitrogen을 주입하여 SiON을 형성함으로써 Boron이 채널로 침투하는 것을 방지한다."
  },
  {
    "id": 63,
    "type": "multiple",
    "lecture": "8강",
    "category": "Gate Stack Salicide 변천",
    "question": "Salicide Gate에서 High-k/Full Metal Gate로 전환한 이유는?",
    "options": [
      "High Power, High Resistance가 필요해졌기 때문",
      "Low Power, Low Resistance, Low Capacitance가 필요해졌기 때문",
      "Salicide 공정 비용이 급등했기 때문",
      "Gate Oxide 두께를 늘려야 했기 때문"
    ],
    "answer": 1,
    "explanation": "Salicide Gate에서 High-k/Full Metal Gate로 전환한 것은 Low Power, Low Resistance, Low Capacitance 요구를 동시에 만족시키기 위함이다(65nm → 45nm → 32nm 노드)."
  },
  {
    "id": 64,
    "type": "multiple",
    "lecture": "8강",
    "category": "Gate Stack 불량",
    "question": "1. 선택비(Selectivity) 문제에서 \"Gate Oxide 불량\"의 원인은?",
    "options": [
      "Metal을 식각할 때 HM이 함께 식각되어 Gate Oxide가 손상되는 경우",
      "Over Etch 정지 시 아래쪽 물질까지 식각하여 Gate Oxide가 손상되는 경우",
      "Poly-Si 박막 증착 불량으로 발생하는 경우",
      "Contact 형성 시 산화막이 제거되는 경우"
    ],
    "answer": 1,
    "explanation": "Gate Oxide 불량은 Over Etch 정지 시 목표 이상으로 식각이 진행되어 아래 Gate Oxide까지 손상시키는 경우에 발생한다."
  },
  {
    "id": 65,
    "type": "multiple",
    "lecture": "9강",
    "category": "Contact 저항 개선",
    "question": "Contact 저항을 낮추기 위한 조건으로 올바른 것은?",
    "options": [
      "면적이 작을수록, SBH(Schottky Barrier Height) 높을수록, Doping 낮을수록",
      "면적이 클수록, SBH 낮을수록, Doping 높을수록",
      "면적이 작을수록, SBH 낮을수록, Doping 높을수록",
      "면적이 클수록, SBH 높을수록, Doping 낮을수록"
    ],
    "answer": 1,
    "explanation": "Contact 저항(Rcnt = ρc/A)을 낮추려면 면적이 클수록, Schottky Barrier Height(SBH)이 낮을수록, Doping 농도가 높을수록 유리하다."
  },
  {
    "id": 66,
    "type": "multiple",
    "lecture": "9강",
    "category": "Contact Si-Metal",
    "question": "Metal to Semiconductor Contact에서 Ideal Ohmic Contact가 불가능한 이유는?",
    "options": [
      "금속과 반도체의 녹는점 차이로 접촉 계면이 공정 중 항상 녹기 때문",
      "Fermi-level pinning으로 실질 Barrier Height이 surface states에 의존하기 때문",
      "반도체 도핑 농도가 항상 낮아서 터널링 전류가 전혀 흐르지 않기 때문",
      "접촉 면적이 작으면 모든 금속-반도체 접촉이 Schottky로만 동작하기 때문"
    ],
    "answer": 1,
    "explanation": "Fermi-level pinning 현상으로 인해 실질적 Schottky Barrier Height은 Metal의 Work Function이 아니라 반도체 계면의 surface states에 의해 결정된다. 따라서 Ideal M-Si Contact에서 ΦB = ΦM - χ이지만, 실제로는 surface states 의존."
  },
  {
    "id": 67,
    "type": "multiple",
    "lecture": "9강",
    "category": "Contact Si-Metal",
    "question": "Metal-Si Contact의 종류 중 W/F Engineering + Tunneling을 이용하는 접합 방식은?",
    "options": [
      "Ideal Ohmic Contact",
      "Rectifying Contact(쇼트키 접합)",
      "Near-Ohmic Contact",
      "Insulating Contact"
    ],
    "answer": 2,
    "explanation": "Metal to Semiconductor에서 Ideal Ohmic은 불가능하고, 실제로는 Work Function Engineering과 Tunneling 효과를 이용한 Near-Ohmic Contact을 적용한다."
  },
  {
    "id": 68,
    "type": "multiple",
    "lecture": "9강",
    "category": "Contact Silicide",
    "question": "Silicide의 주요 특성으로 올바른 것은?",
    "options": [
      "높은 저항과 Si 공정과의 불량한 호환성",
      "낮은 저항(Low resistance)과 Si 공정과의 우수한 호환성",
      "높은 저항과 우수한 Si 공정 호환성",
      "낮은 저항과 Si 공정과의 불량한 호환성"
    ],
    "answer": 1,
    "explanation": "Silicide의 핵심 특성은 Low resistance(낮은 저항)와 Good process compatibility with Si(Si 공정 적합성)이다."
  },
  {
    "id": 69,
    "type": "multiple",
    "lecture": "9강",
    "category": "Contact Silicide 비교",
    "question": "TiSi2, CoSi2, NiSi 중 Native Oxide(자연 산화막)에 가장 둔감한(Insensitive) 실리사이드는?",
    "options": [
      "TiSi2",
      "CoSi2",
      "NiSi",
      "세 가지 모두 동일하게 민감"
    ],
    "answer": 2,
    "explanation": "TiSi2는 Native Oxide에 Sensitive, CoSi2는 Very Sensitive, NiSi는 Insensitive하다. NiSi가 Native Oxide 영향을 가장 적게 받는다."
  },
  {
    "id": 70,
    "type": "multiple",
    "lecture": "9강",
    "category": "Contact Silicide 비교",
    "question": "CoSi2 대비 NiSi의 가장 큰 단점은?",
    "options": [
      "저항(Resistivity)이 CoSi2보다 높다",
      "Si 소모량이 CoSi2보다 크다",
      "열적 안정성(Thermal Stability)이 매우 낮다(Very Bad)",
      "패터닝이 CoSi2보다 어렵다"
    ],
    "answer": 2,
    "explanation": "NiSi는 저저항, Native Oxide에 둔감 등 장점이 있지만, Thermal Stability가 Very Bad로 고온 공정에서 불안정하다는 치명적 단점이 있다. NiSi2 형성 온도가 약 40~50μΩcm으로 증가한다."
  },
  {
    "id": 71,
    "type": "multiple",
    "lecture": "9강",
    "category": "Contact Silicide 공정",
    "question": "Memory Contact Silicide(Co Silicide) 공정 순서로 올바른 것은?",
    "options": [
      "1st RTS → PVD Co/TiN Depo → LP_SPM Strip → 2nd RTS",
      "PVD Co/TiN Depo → 1st RTS(>540°C) → LP_SPM Strip → 2nd RTS(>700°C) Skip",
      "LP_SPM Strip → PVD Co/TiN Depo → 1st RTS → 2nd RTS",
      "PVD Co/TiN Depo → LP_SPM Strip → 1st RTS → 2nd RTS"
    ],
    "answer": 1,
    "explanation": "Memory Co Silicide 공정: PVD Co/TiN Depo → 1st RTS(>540°C, CoSi 형성) → LP_SPM Strip(미반응 Co 제거) → 2nd RTS(>700°C, CoSi2 형성). 단, 2nd RTS 이후에는 Skip(후속 heat 없음)."
  },
  {
    "id": 72,
    "type": "multiple",
    "lecture": "9강",
    "category": "Contact Silicide",
    "question": "Contact Silicide에서 Dopants redistribution(도펀트 재분포) 문제가 발생하는 주요 조건은?",
    "options": [
      "저온 어닐링으로 silicide grain이 전혀 성장하지 못해 도펀트가 고정될 때",
      "고온 어닐링으로 Si 내 도펀트가 Silicide로 확산되거나 증발할 때",
      "진공 조건에서 산소가 제거되어 native oxide가 완전히 사라질 때",
      "낮은 Doping 농도 조건에서 Fermi-level pinning이 완전히 억제될 때"
    ],
    "answer": 1,
    "explanation": "고온(> 800°C) 어닐링은 Si 내 도펀트(특히 B)가 Silicide층으로 확산되거나 표면에서 증발하여, Contact 저항 증가 또는 문턱전압 변화를 유발한다."
  },
  {
    "id": 73,
    "type": "multiple",
    "lecture": "9강",
    "category": "Contact Silicide",
    "question": "Silicide 형성 시 Annealing 온도와 저항의 관계로 옳은 것은?",
    "options": [
      "어닐링 온도가 높을수록 grain size가 감소하여 저항이 증가한다",
      "amorphous 상태의 silicide가 어닐링을 거쳐 grain size가 증가하면 저항이 감소한다",
      "어닐링 온도와 저항 변화는 무관하다",
      "grain size가 증가하면 저항이 증가한다"
    ],
    "answer": 1,
    "explanation": "Silicide는 처음 증착 시 amorphous 상태이며 저항이 높다. 어닐링을 통해 grain size가 증가하면 high resistivity → anneal → grain size 증가 → resistivity 감소의 과정을 거친다."
  },
  {
    "id": 74,
    "type": "multiple",
    "lecture": "9강",
    "category": "Contact RC delay",
    "question": "Contact 저항이 커질 때 회로 동작에 나타나는 영향으로 가장 적절한 것은?",
    "options": [
      "신호 지연은 줄고 전력 소모도 감소하여 고속 동작에 유리해진다",
      "전류 경로 손실이 커져 전력 소모와 신호 지연 문제가 함께 커진다",
      "Capacitance만 증가하고 저항 성분은 회로 성능에 거의 영향을 주지 않는다",
      "저항이 커질수록 contact barrier가 사라져 ohmic contact가 쉬워진다"
    ],
    "answer": 1,
    "explanation": "전력 손실은 P = I²R, 지연은 RC delay와 관련된다. 따라서 contact 저항이 커지면 전력과 속도 모두 불리하다."
  },
  {
    "id": 75,
    "type": "multiple",
    "lecture": "10강",
    "category": "BEOL ILD 평탄화",
    "question": "CMP(Chemical Mechanical Polishing) 공정의 원리는?",
    "options": [
      "단차가 높은 곳은 적게 깎이고 낮은 곳은 많이 깎임",
      "단차가 높은 곳은 많이 깎이고 낮은 곳은 적게 깎임",
      "단차에 관계없이 균일하게 깎임",
      "화학 반응만으로 제거됨"
    ],
    "answer": 1,
    "explanation": "CMP는 단차가 높은 곳(돌출부)이 패드와 먼저 접촉하여 더 많이 제거되고, 낮은 곳은 적게 깎이는 원리로 평탄화한다."
  },
  {
    "id": 76,
    "type": "multiple",
    "lecture": "10강",
    "category": "BEOL ILD 평탄화 DRAM",
    "question": "DRAM BEOL에서 ILD 평탄화의 시작점으로 올바른 것은?",
    "options": [
      "ILD1 NCI 단계에서 Gate stack 단차를 처음으로 평탄화하는 지점",
      "ILD2 NCI 단계에서 Bit Line 단차를 처음으로 평탄화하는 지점",
      "ILD4 NCI 단계에서 Capacitor 단차를 평탄화하는 DRAM BEOL 시작점",
      "ILD6 NCI 단계에서 RDL과 Pad 단차를 마지막으로 평탄화하는 지점"
    ],
    "answer": 2,
    "explanation": "DRAM BEOL에서 ILD 평탄화는 ILD4 NCI(Cap 단차 제거 공정)부터 시작되며, 이것이 DRAM BEOL의 시작점이다."
  },
  {
    "id": 77,
    "type": "multiple",
    "lecture": "10강",
    "category": "BEOL Deep Contact",
    "question": "Deep Contact의 핵심 역할은?",
    "options": [
      "Gate와 Source/Drain을 절연하는 역할",
      "하부 Device(ACT/GATE)와 상부 Metal 배선을 연결하여 Power와 Signal을 전달",
      "Capacitor 유전막 형성 역할",
      "Transistor와 Capacitor를 절연하는 역할"
    ],
    "answer": 1,
    "explanation": "Deep Contact는 하부 Device(ACT/GATE)와 상부 Metal 배선을 연결하여 Power와 Signal을 전달하는 역할을 한다."
  },
  {
    "id": 78,
    "type": "multiple",
    "lecture": "10강",
    "category": "BEOL Deep Contact",
    "question": "Deep Contact Bowing 제어가 중요한 이유는?",
    "options": [
      "Bowing이 Contact 저항에만 영향을 미치기 때문",
      "Bowing 제어가 Shrink 감소와 신뢰성(Reliability)에 직결되기 때문",
      "Bowing이 Gate Oxide 두께에 영향을 미치기 때문",
      "Bowing이 Doping 농도를 변화시키기 때문"
    ],
    "answer": 1,
    "explanation": "Deep Contact Bowing은 Contact의 형태 불균일을 야기하여 Shrink 및 신뢰성에 직접적인 영향을 준다. Bowing 제어가 핵심 공정 과제이다."
  },
  {
    "id": 79,
    "type": "multiple",
    "lecture": "10강",
    "category": "BEOL VNAND",
    "question": "Vertical NAND(VNAND) BEOL에서 CMC(Cell MC)의 역할은?",
    "options": [
      "각 CMC는 Source/Drain을 Metal 배선에 연결",
      "각 CMC는 WL(Word Line)과 BL(Bit Line)을 연결",
      "각 CMC는 Gate와 전원을 연결",
      "각 CMC는 층간 절연막 역할"
    ],
    "answer": 1,
    "explanation": "VNAND BEOL에서 CMC(Cell Metal Contact)는 각각 WL(Word Line)과 BL(Bit Line)을 연결하는 역할을 한다."
  },
  {
    "id": 80,
    "type": "multiple",
    "lecture": "10강",
    "category": "BEOL VNAND",
    "question": "VNAND BEOL에서 THV(Thru Via)/PCC의 역할은?",
    "options": [
      "Cell 내부를 절연하고 WL과 BL 사이 누설 전류를 차단하는 역할",
      "상부와 하부 배선을 수직 연결하고 상부/하부 Metal Line을 이어주는 역할",
      "Gate stack을 형성하고 Poly-Si와 Metal Gate의 work function을 조절하는 역할",
      "Capacitor 하부전극과 상부전극 사이 유전막을 형성하는 역할"
    ],
    "answer": 1,
    "explanation": "THV(Thru Via)/PCC는 VNAND에서 상부와 하부 배선을 수직으로 연결하고, 상/하부 Metal Line을 연결하는 역할을 한다."
  },
  {
    "id": 81,
    "type": "multiple",
    "lecture": "10강",
    "category": "BEOL ILD 평탄화",
    "question": "VNAND ILD 평탄화가 어려운 이유는?",
    "options": [
      "Cell 수가 적어 단차가 작기 때문",
      "Block size와 단차가 커서 단순 평탄화가 어렵기 때문",
      "금속 재료가 CMP에 적합하지 않기 때문",
      "ILD 재료의 유전율이 너무 낮기 때문"
    ],
    "answer": 1,
    "explanation": "VNAND는 Block size와 단차가 매우 커서 단순한 평탄화 공정으로는 Cell/Peri 간 단차를 해소하기 어렵다."
  },
  {
    "id": 82,
    "type": "multiple",
    "lecture": "10강",
    "category": "BEOL 구성요소",
    "question": "BEOL에서 PSPI(Photo Sensitive Polyimide)의 역할은?",
    "options": [
      "Gate 유전막으로 사용되어 Transistor channel 전계를 직접 제어하는 역할",
      "RDL 상부의 패시베이션 및 재배선 보호층으로 사용하는 감광성 절연막",
      "Deep Contact hole을 채우는 W plug로 하부 Device와 상부 Metal을 연결",
      "Cu 배선 사이를 채우는 Low-k IMD로 RC delay를 줄이는 역할"
    ],
    "answer": 1,
    "explanation": "PSPI(Photo Sensitive Polyimide)는 RDL 위에 형성되는 패시베이션 층으로, 재배선을 보호하고 외부 충격·수분으로부터 Chip을 보호한다."
  },
  {
    "id": 83,
    "type": "multiple",
    "lecture": "11강",
    "category": "DRAM Cell Tr 구조 발전",
    "question": "DRAM Cell Tr History의 구조 발전 순서로 올바른 것은?",
    "options": [
      "RCAT → PCAT → SRCAT → BCAT → FIN",
      "PCAT → RCAT → SRCAT → FFRCAT → BCAT→FIN → BCAT W → BCAT Dual WF",
      "BCAT → SRCAT → RCAT → PCAT",
      "PCAT → BCAT → RCAT → FIN"
    ],
    "answer": 1,
    "explanation": "DRAM Cell Tr 발전 순서: PCAT(Planar) → RCAT(Recess) → SRCAT(Spherical) → FFRCAT(Fence Free) → BCAT→FIN → BCAT W → BCAT Dual WF"
  },
  {
    "id": 84,
    "type": "multiple",
    "lecture": "11강",
    "category": "DRAM Cell Tr 구조 발전",
    "question": "RCAT(Recess Channel Array Transistor)의 핵심 장점은?",
    "options": [
      "Gate 저항을 낮춰 Word Line 신호 전달 속도를 향상시키는 효과",
      "유효 채널 길이를 늘려 Vt control 향상 및 Junction Leakage 감소 효과",
      "Capacitor 표면적을 늘려 Storage Capacitance를 직접 높이는 효과",
      "Bit Line 금속 저항을 낮춰 Sense Amplifier offset을 줄이는 효과"
    ],
    "answer": 1,
    "explanation": "RCAT는 Si에 Recess(파낸 홈)를 만들어 채널 길이를 depth로 확보함으로써 Eff. Lg를 늘리고 Vt Control ability를 향상시키며 Junction Leakage를 감소시킨다."
  },
  {
    "id": 85,
    "type": "multiple",
    "lecture": "11강",
    "category": "DRAM Cell Tr",
    "question": "RCAT에서 Channel length가 결정되는 방식은?",
    "options": [
      "Gate Oxide 두께로 결정",
      "Si 표면에 형성되는 Gate 길이로 결정",
      "Si에 Etch된 깊이(depth)로 결정",
      "Spacer 두께로 결정"
    ],
    "answer": 2,
    "explanation": "RCAT에서 채널 길이는 Si 표면이 아니라 Etch된 깊이(depth)로 결정된다. 세계 최초로 Etch한 Si 표면에 Gate oxide를 기르고 제품화했다."
  },
  {
    "id": 86,
    "type": "multiple",
    "lecture": "11강",
    "category": "DRAM Cell Tr",
    "question": "Planar Tr의 Short Channel 한계로 발생하는 두 가지 문제는?",
    "options": [
      "Thicker gate oxide → TDDB, Deep junction → Junction leakage",
      "Thinner gate oxide → TDDB(Time Dependent Dielectric Breakdown), Shallow junction → Junction leakage",
      "Thinner gate oxide → 저항 감소, Shallow junction → Vth 증가",
      "Thicker gate oxide → Vth 감소, Deep junction → 저항 증가"
    ],
    "answer": 1,
    "explanation": "Planar Tr Short Channel 대응: Thinner gate oxide → TDDB 문제, Shallow junction depth + high channel doping → Junction leakage 문제. 두 조건을 동시에 만족하기 어려워 Cell Transistor를 long channel로 설계해야 한다."
  },
  {
    "id": 87,
    "type": "multiple",
    "lecture": "11강",
    "category": "DRAM Cell Tr",
    "question": "S-RCAT가 RCAT 대비 개선된 주요 특성은?",
    "options": [
      "더 깊은 Recess로 채널 길이 단축",
      "곡율 완화(Bowing 개선)와 Channel Length 증가",
      "Metal Gate 도입으로 저항 감소",
      "Dual Work Function으로 Vth 최적화"
    ],
    "answer": 1,
    "explanation": "S-RCAT(Spherical-RCAT)는 RCAT의 곡율을 완화하고 Channel Length를 더 늘려 DIBL과 Junction leakage를 추가로 개선한다."
  },
  {
    "id": 88,
    "type": "multiple",
    "lecture": "11강",
    "category": "DRAM Cell Tr",
    "question": "DRAM Cell Tr에서 Z-Type ACT를 도입하는 목적은?",
    "options": [
      "Gate 저항을 낮추기 위해",
      "WL(Word Line) 공간 활용을 극대화하기 위해",
      "Capacitor 용량을 높이기 위해",
      "Bit Line 신호를 증폭하기 위해"
    ],
    "answer": 1,
    "explanation": "Z-Type ACT는 Active 영역의 형태를 Z자로 변형하여 WL(Word Line) 공간 활용을 극대화하고 Cell 면적을 효율적으로 사용한다."
  },
  {
    "id": 89,
    "type": "multiple",
    "lecture": "11강",
    "category": "DRAM DIBL",
    "question": "DRAM Cell에서 DIBL이 문제가 되는 이유는?",
    "options": [
      "Gate Oxide가 Drain 전압에 의해 직접 파괴되어 영구 불량이 생기기 때문",
      "Drain 전압 영향으로 Channel Barrier가 낮아져 Ioff 누설 전류가 증가하기 때문",
      "Capacitor 유전막 두께가 줄어들어 Storage Capacitance가 감소하기 때문",
      "Word Line 금속 저항이 증가해 Row decoder 신호가 지연되기 때문"
    ],
    "answer": 1,
    "explanation": "DIBL(Drain Induced Barrier Lowering)은 Drain 전압이 Channel의 Potential Barrier를 낮추어 Off 상태에서도 누설 전류(Ioff)가 증가하는 현상이다."
  },
  {
    "id": 90,
    "type": "multiple",
    "lecture": "11강",
    "category": "DRAM Cell Tr",
    "question": "DRAM Capacitor에 비유한 수조통 구조에서 \"유지\" 기능에 해당하는 것은?",
    "options": [
      "t.RDL (연결 시간)",
      "t.REF (Refresh - 물을 주기적으로 채우는 동작)",
      "R/H (분리)",
      "PGE (Power Gate Enable)"
    ],
    "answer": 1,
    "explanation": "수조통 비유에서 연결=t.RDL, 유지=t.REF(Refresh, 주기적으로 전하를 재충전), 분리=R/H(Read/Hold)에 해당한다."
  },
  {
    "id": 91,
    "type": "multiple",
    "lecture": "12강",
    "category": "Cell Cap 구조",
    "question": "DRAM Capacitor에서 Honeycomb Layout을 사용하는 이유는?",
    "options": [
      "Capacitor 식각 공정 수를 줄여 전체 제조 공정을 단순화하기 위해",
      "한정된 공간에서 Capacitor 배치 밀도를 높여 공간 활용을 극대화하기 위해",
      "유전막 물리 두께를 의도적으로 늘려 Leakage를 완전히 제거하기 위해",
      "Supporter 구조를 제거하고 높은 Cylinder가 쓰러지도록 유도하기 위해"
    ],
    "answer": 1,
    "explanation": "Honeycomb Layout은 원형 배열 대비 공간 손실을 최소화하여 단위 면적당 Capacitor 수를 극대화하는 배치 방식이다."
  },
  {
    "id": 92,
    "type": "multiple",
    "lecture": "12강",
    "category": "Cell Cap 구조",
    "question": "DRAM Capacitor에서 Supporter를 사용하는 이유는?",
    "options": [
      "유전막 두께를 증가시켜 Capacitance를 낮추고 Leakage를 줄이기 위해",
      "높은 3D 구조의 기계적 안정성을 유지하면서 Height와 면적을 키우기 위해",
      "Mask 수를 줄여 Capacitor 공정 비용을 낮추고 단순 평면 구조로 만들기 위해",
      "전극 금속 저항을 낮추기 위해 Capacitor 내부를 모두 금속으로 채우기 위해"
    ],
    "answer": 1,
    "explanation": "Cylinder/Pillar 등 3D Capacitor는 높이가 높아질수록 구조적으로 불안정해진다. Supporter는 이 구조를 기계적으로 지지하면서 Height Up과 3D 면적 최대화를 가능하게 한다."
  },
  {
    "id": 93,
    "type": "multiple",
    "lecture": "12강",
    "category": "Cell Cap History",
    "question": "DRAM Cell Capacitance 증대를 위한 두 가지 핵심 방향은?",
    "options": [
      "공정 속도 향상과 온도 감소를 통해 Capacitance보다 생산성을 높이는 방향",
      "Material의 Toxeq 감소·High-k 도입과 Structure의 면적 증대·3D화 방향",
      "전압 증가와 면적 감소를 동시에 적용해 Sense margin을 확보하는 방향",
      "공정 온도 증가와 유전막 두께 증가로 누설 전류만 줄이는 방향"
    ],
    "answer": 1,
    "explanation": "DRAM Cap 증대의 두 축: 1) Material - 유전체를 High-k(고유전율) 재료로 변경하여 Toxeq 감소 / 2) Structure - 3D 구조로 면적(Area) 증대."
  },
  {
    "id": 94,
    "type": "multiple",
    "lecture": "12강",
    "category": "Cell Cap History",
    "question": "DRAM Capacitor 유전체 재료의 역사적 발전 순서는?",
    "options": [
      "High-k → Al2O3/HfO2 → Ta2O5 → ONO",
      "ONO → Ta2O5 → Al2O3/HfO2 → High-k(ZrO2 등)",
      "Ta2O5 → ONO → High-k → Al2O3",
      "High-k → ONO → Ta2O5 → Al2O3"
    ],
    "answer": 1,
    "explanation": "DRAM Cap 유전체 변화: ONO(초기) → Ta2O5 → Al2O3/HfO2 → High-k(ZrO2 계열 등)로 Toxeq를 점점 낮추는 방향으로 발전했다."
  },
  {
    "id": 95,
    "type": "multiple",
    "lecture": "12강",
    "category": "Cell Cap History",
    "question": "DRAM 3D Capacitor의 역사에서 존재했던 두 가지 경쟁 구조는?",
    "options": [
      "Cylinder 구조 vs Crown 구조",
      "Stack 구조(종방향 SPT) vs Trench 구조(횡방향 DTC)",
      "MIM 구조 vs MIS 구조",
      "OCS 구조 vs Pillar 구조"
    ],
    "answer": 1,
    "explanation": "DRAM Capacitor는 기판 위로 세우는 Stack 구조(SPT)와 기판 안으로 파는 Trench 구조(DTC) 두 가지가 경쟁했다. 현재는 Stack 구조가 주류가 되었다."
  },
  {
    "id": 96,
    "type": "multiple",
    "lecture": "12강",
    "category": "Cell Cap 구조",
    "question": "DRAM Capacitor OCS vs Pillar 구조의 차이로 올바른 것은?",
    "options": [
      "OCS는 Outer 영역만 사용, Pillar는 Inner+Outer 영역 모두 사용",
      "OCS는 Inner+Outer 영역 모두 사용(Inner 기여 약 20%), Pillar는 Outer 영역만 사용",
      "두 구조 모두 Inner 영역만 사용",
      "두 구조 모두 Outer 영역만 사용"
    ],
    "answer": 1,
    "explanation": "OCS(Over Cell Stack)는 Inner+Outer 영역을 모두 활용(Inner 기여 약 20%)하고, Pillar 구조는 Outer 영역만 사용한다. 그러나 실제로는 Inner 영역 기여가 한계에 달해 Pillar로 전환하는 추세이다."
  },
  {
    "id": 97,
    "type": "multiple",
    "lecture": "12강",
    "category": "Cell Cap",
    "question": "Scaling이 진행됨에도 불구하고 DRAM Cell Cap 용량이 감소하는 추세의 원인은?",
    "options": [
      "유전체 재료 개발 한계와 구조적 한계로 Scaling에 따른 나이도가 증가하기 때문",
      "Scaling과 함께 Cap 용량이 자동으로 증가하기 때문",
      "Scaling과 Cap 용량은 완전히 무관하기 때문",
      "최신 공정에서 Cap 용량이 지수함수적으로 증가하기 때문"
    ],
    "answer": 0,
    "explanation": "엄청난 공정 개발 노력에도 불구하고 Scaling에 따른 나이도 증가로 인해 Cap 용량은 감소 추세이다. 대략 6D~7F 이후부터 Capacitor의 공간적 한계가 크게 작용한다."
  },
  {
    "id": 98,
    "type": "multiple",
    "lecture": "12강",
    "category": "Cell Cap 구조",
    "question": "DRAM Capacitor에서 MIM(Metal-Insulator-Metal) 구조를 채택하는 이유는?",
    "options": [
      "공정 비용을 낮추고 Poly-Si 전극의 공핍 효과를 적극 활용하기 위해",
      "Metal 전극으로 Poly-Si 공핍 효과를 줄이고 높은 유전율 재료를 활용하기 위해",
      "낮은 유전율 절연막을 사용해 Bit Line 신호 속도를 높이기 위해",
      "전극 구조를 단순화해 3D Cylinder 구조 없이 Capacitance를 확보하기 위해"
    ],
    "answer": 1,
    "explanation": "MIM 구조는 하부/상부 전극 모두 Metal을 사용하여 Poly Si의 공핍 효과 없이 High-k 유전체의 높은 유전율을 최대한 활용할 수 있다."
  },
  {
    "id": 99,
    "type": "multiple",
    "lecture": "13강",
    "category": "FinFET",
    "question": "FinFET의 Ultra-Thin Body(UTB) 두께 조건으로 옳은 것은?",
    "options": [
      "Body 두께가 Gate 길이의 2배 이상",
      "Body 두께가 Gate 길이의 1/4 이하(< ¼ Lg)",
      "Body 두께가 Gate 길이와 동일해야 함",
      "Body 두께와 Gate 길이는 무관"
    ],
    "answer": 1,
    "explanation": "FinFET UTB 조건: Body 두께 < ¼ Lg (Gate 길이의 1/4 이하). 이를 통해 채널 아래를 통한 누설 전류 경로를 제거한다."
  },
  {
    "id": 100,
    "type": "multiple",
    "lecture": "13강",
    "category": "FinFET",
    "question": "FinFET에서 Double-Gate 구조의 장점이 아닌 것은?",
    "options": [
      "Gate coupling을 강화하여 채널 제어력 향상",
      "Ultra-Thin Body보다 Scalability가 더 우수",
      "공정이 단순하고 제조가 쉬움",
      "기생 정전용량(Cdep) 제거 가능"
    ],
    "answer": 2,
    "explanation": "Double-Gate(FinFET)는 공정이 복잡하다(Require complex process). 장점은 Gate coupling 최대화, UTB보다 우수한 Scalability, Cdep 제거이다."
  },
  {
    "id": 101,
    "type": "multiple",
    "lecture": "13강",
    "category": "FinFET",
    "question": "Double Gate 구조의 발전 순서로 올바른 것은?",
    "options": [
      "Vertical 구조에서 bottom gate 문제를 해결한 뒤 Planar를 거쳐 FinFET으로 이동",
      "Planar의 bottom gate 한계, Vertical의 bottom source junction 한계를 거쳐 FinFET으로 이동",
      "FinFET에서 gate control 한계가 생겨 Planar와 Vertical 구조로 되돌아간 순서",
      "Vertical 구조와 FinFET을 먼저 사용한 뒤 Planar 구조로 공정 단순화를 진행"
    ],
    "answer": 1,
    "explanation": "이중 게이트 구조 발전: Planar(하부 Gate 제작 어려움) → Vertical(전류가 수직으로 흘러 하부 Source junction 제작 어려움) → FinFET(전류가 웨이퍼 표면에 평행하게 흐름, Self-aligned gate)"
  },
  {
    "id": 102,
    "type": "multiple",
    "lecture": "13강",
    "category": "FinFET",
    "question": "FinFET이 Short Channel Effect를 개선하는 원리로 옳은 것은?",
    "options": [
      "두꺼운 Gate Oxide로 Drain 전기장을 차단해 Gate control을 약하게 만든다",
      "Gate가 채널 양쪽 또는 3면을 감싸 DIBL과 Sub-threshold swing을 줄인다",
      "높은 Body Doping으로 Mobility를 높이고 Junction Capacitance를 낮춘다",
      "채널 폭을 넓혀 전류를 분산시키고 Gate와 Channel coupling을 줄인다"
    ],
    "answer": 1,
    "explanation": "FinFET은 Gate가 채널을 여러 면에서 감싸므로 Gate controllability가 향상되어 DIBL이 낮아지고 Sub-threshold swing이 감소한다."
  },
  {
    "id": 103,
    "type": "multiple",
    "lecture": "13강",
    "category": "FinFET",
    "question": "FinFET 도입으로 얻는 성능 이점으로 올바른 것은?",
    "options": [
      "같은 Vdd에서 46% AC 개선 및 동일 지연에서 110mV Vdd 감소 가능",
      "Gate 저항 46% 감소 및 110mV 전압 증가",
      "누설 전류 46% 증가 및 110mV 전압 감소",
      "채널 길이 46% 증가 및 110mV Vdd 증가"
    ],
    "answer": 0,
    "explanation": "FinFET은 같은 Vdd에서 46% AC 성능 개선, 동일 지연 조건에서 110mV Vdd scaling이 가능하다. Power와 Performance를 동시에 개선한다."
  },
  {
    "id": 104,
    "type": "multiple",
    "lecture": "13강",
    "category": "FinFET 공정",
    "question": "FinFET 공정 순서로 올바른 것은?",
    "options": [
      "Dummy Gate → Fin Pattern → Spacer → S/D SEG → Gate Removal → HK/MG → ILD → Contact",
      "Fin Pattern → Dummy Gate → Spacer → S/D SEG → Gate Removal → HK/MG → ILD → Contact",
      "Fin Pattern → Spacer → Dummy Gate → S/D SEG → HK/MG → Gate Removal → ILD → Contact",
      "Fin Pattern → S/D SEG → Dummy Gate → Spacer → Gate Removal → ILD → HK/MG → Contact"
    ],
    "answer": 1,
    "explanation": "FinFET 공정 순서: Fin Pattern → Dummy Gate → Spacer → S/D SEG → Gate Removal → HK(High-k)/MG(Metal Gate) → ILD → Contact. Replacement Gate 공정이 핵심이다."
  },
  {
    "id": 105,
    "type": "multiple",
    "lecture": "13강",
    "category": "3D Tr Parasitic",
    "question": "소자 Scaling이 진행될수록 Parasitic Components의 영향은 어떻게 변하는가?",
    "options": [
      "Parasitic이 줄어들어 Channel resistance가 지배적이 된다",
      "Parasitic components가 Ion current와 Capacitance를 지배하게 된다",
      "Parasitic과 Channel resistance의 영향이 동일해진다",
      "Parasitic 영향은 Scaling과 무관하게 일정하다"
    ],
    "answer": 1,
    "explanation": "소자가 Scaling될수록 S/D parasitic 저항과 capacitance가 Channel resistance·capacitance보다 상대적으로 커져 Ion current와 Cap를 지배하게 된다."
  },
  {
    "id": 106,
    "type": "multiple",
    "lecture": "13강",
    "category": "FinFET",
    "question": "SOI FinFET과 Bulk FinFET의 차이점으로 옳은 것은?",
    "options": [
      "SOI FinFET은 일반 Si 기판에 직접 형성되고 Bulk FinFET은 절연막 위에 형성",
      "SOI FinFET은 절연막 위 Si층을 사용하고 Bulk FinFET은 일반 Si 기판에 형성",
      "두 구조 모두 동일한 SOI 기판에 형성되며 차이는 Gate metal 종류뿐임",
      "SOI는 NMOS 전용 구조이고 Bulk는 PMOS 전용 구조로만 사용됨"
    ],
    "answer": 1,
    "explanation": "SOI FinFET은 Silicon on Insulator(절연막 위 Si) 기판을 사용하여 기생 정전용량이 작고 Fin 아래가 완전 절연된다. Bulk FinFET은 일반 Si 기판에 형성되어 제조비용이 낮지만 기생 정전용량 제어가 필요하다."
  },
  {
    "id": 107,
    "type": "multiple",
    "lecture": "8강",
    "category": "Spacer",
    "question": "Gate Spacer가 수행하는 역할을 모두 올바르게 나열한 것은?",
    "options": [
      "Gate 저항 감소와 유전막 보호",
      "S/D Doping 영역 결정, Gate stack 측벽 보호, Contact와 분리",
      "Silicide 형성 촉진과 채널 도핑 조절",
      "S/D Doping 영역 결정만 담당"
    ],
    "answer": 1,
    "explanation": "Gate Spacer의 역할: (1) S/D Doping 영역 결정, (2) Gate stack 측벽 보호, (3) Contact와 Gate stack 분리. 3가지 역할을 모두 수행한다."
  },
  {
    "id": 108,
    "type": "multiple",
    "lecture": "8강",
    "category": "Gox Scaling",
    "question": "SiO2 Gate Oxide 두께가 2nm 미만으로 얇아질 때 발생하는 주요 문제는?",
    "options": [
      "Gate Oxide 녹는점이 낮아져 열처리 불가",
      "S/D Doping 효율이 급격히 떨어짐",
      "Direct Tunneling에 의한 게이트 누설 전류가 지수함수적으로 증가",
      "Poly Depletion 효과가 완전히 사라짐"
    ],
    "answer": 2,
    "explanation": "SiO2 Gate Oxide 두께 < 2nm에서는 Non-zero wave-function에 의한 Direct Tunneling이 발생하여 게이트 누설 전류(Gate Leakage)가 급증한다. 이 때문에 High-k 재료 도입이 필요해졌다."
  },
  {
    "id": 109,
    "type": "multiple",
    "lecture": "8강",
    "category": "HKMG",
    "question": "Gate Last(RMG) 방식이 Gate First 방식보다 유리한 이유는?",
    "options": [
      "Dummy Gate가 필요 없어 공정이 단순해지기 때문",
      "Gate 저항이 Gate First보다 항상 낮아지기 때문",
      "Metal Gate가 후반부 공정에 형성되어 High Heat Budget을 피할 수 있기 때문",
      "High-k 유전막을 먼저 형성하지 않아도 되기 때문"
    ],
    "answer": 2,
    "explanation": "Gate Last(RMG: Replacement Metal Gate)는 소자 공정 후반부에 Metal Gate를 형성하므로 Metal Gate가 이후 고온 공정(High Heat Budget)에 노출되지 않는다. Gate First는 초기 형성 후 모든 고온 공정을 견뎌야 한다."
  },
  {
    "id": 110,
    "type": "multiple",
    "lecture": "8강",
    "category": "HKMG",
    "question": "HKMG(High-k Metal Gate)에서 NMOS에 적합한 Work Function Metal 후보는?",
    "options": [
      "TiN, Ru (High WF 금속)",
      "TaN, MoN (Low WF 금속)",
      "Pt, Ir (Mid-High WF 금속)",
      "W, Al (Mid WF 금속)"
    ],
    "answer": 1,
    "explanation": "NMOS에는 낮은 Work Function(Low WF ≈ Si 전도대 근처)이 필요하므로 TaN, MoN 등이 후보다. PMOS에는 높은 Work Function(High WF ≈ Si 가전자대 근처)이 필요하여 TiN, Ru, Pt 등이 후보다."
  },
  {
    "id": 111,
    "type": "multiple",
    "lecture": "8강",
    "category": "Shallow Junction",
    "question": "EOR(End-Of-Range) 결함이 발생하는 이온 주입 메커니즘은?",
    "options": [
      "이온이 Si 표면에서 즉시 반응하여 표면 결함만 형성",
      "이온이 결정 내 멈추는 지점(End of Range) 바로 아래에 격자 손상이 집중되어 형성",
      "열처리 온도가 너무 높을 때 임의의 위치에서 발생",
      "Boron(B) 주입에서만 발생하고 As, P에서는 발생하지 않음"
    ],
    "answer": 1,
    "explanation": "EOR 결함은 이온이 결정 내에서 멈추는 지점(End-Of-Range) 바로 아래에 격자 손상(displaced atoms)이 집중되어 형성된다. 이 결함은 접합 누설 전류를 증가시키며, SPER 어닐링으로 일부 회복 가능하다."
  },
  {
    "id": 112,
    "type": "multiple",
    "lecture": "8강",
    "category": "Heat Budget",
    "question": "MSA(Millisecond Anneal)를 Shallow Junction 형성에 사용하는 주목적은?",
    "options": [
      "Gate Oxide 두께를 늘려 TDDB를 방지하기 위해",
      "오랜 시간 고온 유지로 이온 주입 결함을 완전 회복하기 위해",
      "ms급 초단시간 고온으로 도펀트를 활성화하면서 Boron 확산은 최소화하기 위해",
      "Salicide 형성 온도를 낮추기 위해"
    ],
    "answer": 2,
    "explanation": "MSA(Millisecond Anneal)는 ms 단위의 극히 짧은 고온 열처리로 도펀트를 활성화하되, 장시간 고온 노출 시 발생하는 Boron 확산을 최소화한다. Shallow Junction 형성의 핵심 기술이다."
  },
  {
    "id": 113,
    "type": "multiple",
    "lecture": "9강",
    "category": "DRAM Cell Contact GBC",
    "question": "DRAM GBC Enlarge 공정(COR Enlarge → BT+IPE → Poly Depo)의 목적은?",
    "options": [
      "Gate 저항 감소를 위해 Poly 면적을 늘리는 것",
      "Scaling 진행에 따른 미접촉 발생을 Enlarge 개념으로 극복하여 접촉 면적 최대화",
      "BL 저항을 줄이기 위해 금속 두께를 늘리는 것",
      "Cell GOX 보호를 위해 Poly 막질을 추가하는 것"
    ],
    "answer": 1,
    "explanation": "GBC Enlarge: Scaling 진행 시 ACT와 GBC 사이 미접촉(Worst case에서 ACT에 닿지 않음)이 발생. COR Enlarge(Touch the ACT) → BT+IPE(Maximize Contact Area) → Poly Depo 순으로 접촉 면적을 최대화한다."
  },
  {
    "id": 114,
    "type": "multiple",
    "lecture": "9강",
    "category": "DRAM Cell Contact GBC",
    "question": "DRAM GBC(Gate to Bit-line Contact)가 Poly 구조에서 Full Metal 구조로 전환되는 이유는?",
    "options": [
      "Metal이 Poly Si보다 제조 비용이 낮아 경제성이 좋기 때문",
      "Scaling에 따른 Poly-Si Bulk 저항 증가를 해결하기 위해",
      "Metal GBC가 Poly GBC보다 누설 전류가 적기 때문",
      "Metal이 Poly Si보다 산화 저항성이 높기 때문"
    ],
    "answer": 1,
    "explanation": "Scaling이 지속되면 Poly GBC의 단면적이 줄어들면서 Poly-Si Bulk 저항이 급격히 증가한다. 이를 해결하기 위해 Poly GBC → Metal GBC → Full Metal GBC(Low Schottky Barrier Height material 사용)로 발전한다."
  },
  {
    "id": 115,
    "type": "multiple",
    "lecture": "9강",
    "category": "Contact Barrier Metal",
    "question": "Contact Barrier Metal이 반드시 갖춰야 할 4가지 조건으로 올바른 것은?",
    "options": [
      "높은 저항 / 단방향 전도 / 반도체 특성 / 저온 안정성",
      "낮은 저항 / 양물질 간 확산 방지 / 양물질과 접합성 / 열 안정성(고온 내성)",
      "낮은 저항 / 고유전율 / 양물질과 접합성 / 고압 내성",
      "높은 저항 / 확산 방지 / 단방향 전도 / 저온 안정성"
    ],
    "answer": 1,
    "explanation": "Barrier Metal의 4가지 조건: (1) 낮은 저항, (2) Si/Metal 양쪽 물질 간 확산 방지, (3) 양쪽 물질과의 접합성(Adhesion), (4) 고온 열처리에 견디는 열 안정성."
  },
  {
    "id": 116,
    "type": "multiple",
    "lecture": "9강",
    "category": "Contact Kirkendall Void",
    "question": "Kirkendall Void가 형성되는 원인은?",
    "options": [
      "금속과 반도체의 열팽창 계수 차이",
      "두 물질 사이 상호 확산(interdiffusion) 속도 차이로 느린 방향 쪽에 빈 공간 형성",
      "산화막이 증착 중 제거되면서 공간이 생기는 현상",
      "이온 주입 에너지가 너무 높아 격자가 빠지는 현상"
    ],
    "answer": 1,
    "explanation": "Kirkendall Void: 두 물질 사이 상호 확산에서 각 원자의 이동 속도(flux)가 달라 느린 방향 쪽에 빈 공간(Void)이 형성된다. Contact 내 Void는 저항 증가 및 신뢰성 저하의 원인이다."
  },
  {
    "id": 117,
    "type": "multiple",
    "lecture": "10강",
    "category": "BEOL ILD Low-k",
    "question": "BEOL IMD Low-k 재료의 발전 방향으로 올바른 것은?",
    "options": [
      "SiCOH(k=2.7) → PE-TEOS(k=4.3)로 k값을 높이는 방향",
      "DSIN(k=7.5) → SiCN(k=5.0)으로 중간 k값에서 시작",
      "PE-TEOS(k=4.3)에서 SiCOH(k=2.7) 방향으로 더 낮은 k 재료 도입",
      "SiCN(k=5.0) → DSIN(k=7.5)으로 k값을 높이는 방향"
    ],
    "answer": 2,
    "explanation": "IMD 발전: PE-TEOS(k=4.3) → SiCOH(k=2.7) 방향으로 Low-k 재료를 도입하여 Metal Parasitic Cap을 감소시키고 Speed/Power를 개선한다. 변경 공정: IMD10.2 → TEOS → SiCOH, Low-k Damage 최소화."
  },
  {
    "id": 118,
    "type": "multiple",
    "lecture": "10강",
    "category": "BEOL Cu Damascene",
    "question": "Cu 배선에서 Al과 달리 Dry Etch 대신 Damascene 공정을 사용하는 이유는?",
    "options": [
      "Cu의 녹는점(1085°C)이 Al(660°C)보다 높아 Etch가 어렵기 때문",
      "Cu Dry Etch 반응 부산물의 Vapor Pressure가 낮아 기화되지 않고 잔류하기 때문",
      "Cu와 Photo Resist가 반응하여 Resist가 손상되기 때문",
      "Cu의 전기 저항이 낮아 플라즈마 식각이 어렵기 때문"
    ],
    "answer": 1,
    "explanation": "Al은 Dry Etch 부산물(AlCl₃ 등)의 Vapor Pressure가 높아 쉽게 기화되지만, Cu의 Dry Etch 부산물은 Vapor Pressure가 낮아 잔류한다. 따라서 Cu는 식각 대신 Trench를 미리 만들고 Cu로 채운 후 CMP하는 Damascene 공정을 사용한다."
  },
  {
    "id": 119,
    "type": "multiple",
    "lecture": "10강",
    "category": "BEOL Cu Damascene",
    "question": "Cu Dual Damascene 공정 순서로 올바른 것은?",
    "options": [
      "EP-Cu Dep → BM/Seed-Cu Sputtering → Via/Trench Photo&Etch → CMP",
      "Via/Trench Photo&Etch → BM/Seed-Cu Sputtering → EP-Cu Dep & Anneal → CMP(Cu 1st, BM 2nd)",
      "BM/Seed-Cu Sputtering → Via/Trench Photo&Etch → EP-Cu Dep → CMP",
      "CMP → BM/Seed-Cu → Via/Trench Photo&Etch → EP-Cu Dep"
    ],
    "answer": 1,
    "explanation": "Cu Damascene 공정: ① Via/Metal Trench Photo & Etch → ② Sputtering(BM/Seed-Cu) → ③ EP-Cu Dep & Anneal → ④ CMP(1st Step: Cu CMP, 2nd Step: BM CMP). Trench를 먼저 형성하고 Cu를 채운 뒤 CMP로 평탄화한다."
  },
  {
    "id": 120,
    "type": "multiple",
    "lecture": "10강",
    "category": "HBM",
    "question": "HBM(High Bandwidth Memory)이 DDR3 대비 Watt/Performance가 우수한 4대 이유는?",
    "options": [
      "High I/O 수 + High Freq. + High VDD + Terminated",
      "Narrow I/O + Low Freq. + High VDD + Terminated",
      "Wide I/O + Low Freq. + Low VDD + Un-Terminated",
      "Wide I/O + High Freq. + Low VDD + Terminated"
    ],
    "answer": 2,
    "explanation": "HBM의 Watt/Performance 우수 4대 이유: ① Wide I/O(1024bit), ② Low Freq.(1GHz), ③ Low VDD(1.2V), ④ Un-Terminated. DDR3 대비 Power 32% 절감, Performance 400% 향상, Form Factor 65% 감소."
  },
  {
    "id": 121,
    "type": "multiple",
    "lecture": "10강",
    "category": "BEOL RC delay",
    "question": "BEOL 배선에서 일정 pitch 안에 metal width를 정할 때 RC 관점에서 가장 균형 잡힌 설계는?",
    "options": [
      "metal width를 pitch와 같게 만들어 배선 사이 간격을 없애는 설계",
      "metal width를 pitch의 1/4 수준으로 줄여 저항 증가를 감수하는 설계",
      "metal width와 space가 비슷해지도록 pitch의 절반 정도로 맞추는 설계",
      "metal width를 pitch보다 크게 만들어 인접 배선과 겹치게 하는 설계"
    ],
    "answer": 2,
    "explanation": "RC 최적화 식에서 a = w/p일 때 a(1-a)가 최대가 되는 지점은 a = 0.5이다. 즉 width와 space가 균형을 이룰 때 유리하다."
  },
  {
    "id": 122,
    "type": "multiple",
    "lecture": "10강",
    "category": "BEOL RDL",
    "question": "RDL(Re-Distribution Layer)의 3가지 구성요소와 역할로 올바른 것은?",
    "options": [
      "RDL Gate, RDL Source, RDL Drain - Transistor 구성",
      "RDL VIA(하부 Metal 연결) + RDL 배선(재배선) + RDL PAD(I/O 연결)",
      "RDL Contact + RDL ILD + RDL Passivation - 절연 구성",
      "RDL Trench + RDL Via + RDL CMP - 공정 단계"
    ],
    "answer": 1,
    "explanation": "RDL 구성 3요소: ① RDL VIA - 하부 Metal4와 상부 RDL 배선 연결, ② RDL 배선 - PKG 조립 시 필요한 PAD 위치까지 신호 재배선, ③ RDL PAD - 외부와 내부를 연결하는 I/O 역할. RDL 이전 세대와 차이점: Cell 위에 존재."
  },
  {
    "id": 123,
    "type": "multiple",
    "lecture": "11강",
    "category": "DRAM Cell Tr 구조",
    "question": "DRAM BCAT Fin이 형성되는 원리는?",
    "options": [
      "Photo 공정에서 직접 Fin 형태를 패터닝",
      "Si와 Ox/SiN의 식각율(ER) 차이에 의해 BCAT Fin이 자연 형성",
      "Epi 성장으로 Fin을 별도로 성장시켜 형성",
      "Wet Etch로 Si만 선택적으로 제거하여 형성"
    ],
    "answer": 1,
    "explanation": "BCAT Fin은 막질 Fill → 제거 공정 반복 과정에서 Si와 Ox/SiN의 식각율(ER) 차이를 이용하여 자연스럽게 형성된다. Fin Height는 STI SW-ox(Rox/MTO)와 Fin 경계에서 결정된다."
  },
  {
    "id": 124,
    "type": "multiple",
    "lecture": "11강",
    "category": "DRAM Cell Tr 구조",
    "question": "DRAM Cell Tr 구조 구현의 공정 순서로 올바른 것은?",
    "options": [
      "Cell GOX → BCAT Etch → TIN DEPO → W DEPO → MEB → SIN DEPO → SIN E/B",
      "BCAT Etch → TIN DEPO → Cell GOX → W DEPO → SIN DEPO → MEB → SIN E/B",
      "BCAT Etch → Cell GOX → TIN DEPO → W DEPO → MEB → SIN DEPO → SIN E/B",
      "TIN DEPO → BCAT Etch → Cell GOX → W DEPO → SIN DEPO → MEB → SIN E/B"
    ],
    "answer": 2,
    "explanation": "DRAM Cell Tr 공정 순서: BCAT Etch → Cell GOX(산화막 성장) → TIN DEPO(확산방지/일함수 조절) → W DEPO(저항 감소) → MEB(Mask Etch Back) → SIN DEPO(절연) → SIN E/B(Etch Back)."
  },
  {
    "id": 125,
    "type": "multiple",
    "lecture": "11강",
    "category": "DRAM Cell Tr 특성",
    "question": "S.tREF(Static)와 D.tREF(Dynamic)의 차이점으로 올바른 것은?",
    "options": [
      "S.tREF는 WL이 동작할 때, D.tREF는 WL이 off일 때 측정",
      "S.tREF와 D.tREF는 동일한 조건에서 동일한 값을 가짐",
      "S.tREF는 Tr off 상태에서 Data 1 저장 가능 시간, D.tREF는 주변 Cell 동작 시 실제 동작 상황",
      "S.tREF는 GIJL 관련, D.tREF는 GIDL 관련"
    ],
    "answer": 2,
    "explanation": "S.tREF: Tr off 상태(정적)에서 Data 1을 저장할 수 있는 시간 측정 (LKG/GIDL/GIJL/Defect 관련). D.tREF: 주변 Cell이 동작 중인 실제 상황(동적)에서 BL 반복 동작에 의한 추가 누설 포함."
  },
  {
    "id": 126,
    "type": "multiple",
    "lecture": "11강",
    "category": "DRAM Cell Tr 특성",
    "question": "GIDL(Gate-Induced Drain Leakage)의 발생 메커니즘으로 옳은 것은?",
    "options": [
      "높은 Gate 전압이 Drain을 과도하게 충전하여 열화 발생",
      "Gate 전압이 낮을 때 Gate-Drain 중첩 영역의 강한 전기장으로 BTBT가 발생하여 공핍층이 넓어지고 누설 전류 증가",
      "Gate Oxide가 얇아져 터널링 전류가 채널을 통해 흐르는 현상",
      "Source에서 Drain으로 열전자가 직접 이동하는 현상"
    ],
    "answer": 1,
    "explanation": "GIDL: Gate 전압이 낮을 때 Gate-Drain 중첩 영역에서 강한 전기장이 Band-to-Band Tunneling(BTBT)을 유발한다. 이로 인해 실제보다 더 넓은 공핍층이 형성되어 누설 전류가 증가한다(J_gidl = AE·exp(-B·Ei/E))."
  },
  {
    "id": 127,
    "type": "multiple",
    "lecture": "11강",
    "category": "DRAM Cell Tr 특성",
    "question": "DRAM Pass Gate Effect(PGE)의 정의로 올바른 것은?",
    "options": [
      "WL 반복 Access로 인접 셀의 데이터가 변하는 Row Hammer 현상",
      "Refresh 주기가 길어져 데이터가 손실되는 현상",
      "DC Disturb에 의해 인접 Active 영역의 Potential이 변화하여 VT가 낮아지거나 높아지는 현상",
      "Gate Oxide 파괴로 인한 영구적 불량"
    ],
    "answer": 2,
    "explanation": "Pass Gate Effect(PGE): 특정 WL Access 시 DC Disturb로 인해 인접 Active 영역의 Potential이 변화하여 VT가 낮아지거나(Boosting) 높아지는(Lowering) 현상. APG/VPG/FPG 관점에서 분석하며 BL 불량의 주요 원인이다."
  },
  {
    "id": 128,
    "type": "multiple",
    "lecture": "12강",
    "category": "Cell Cap History",
    "question": "DRAM Cell Capacitor 배열에서 Honeycomb(2.6F×3.0F)이 Square(2.8F×2.8F)보다 유리한 이유는?",
    "options": [
      "Honeycomb이 Square보다 단위 Cell 면적이 작아 더 많이 배치 가능",
      "Square 배열은 공정이 복잡해서 Honeycomb으로 전환",
      "Honeycomb 배열이 원형 Cap의 공간 활용도를 극대화하여 동일 면적에 더 많은 Cap 배치 가능",
      "Honeycomb 배열이 Supporter 없이도 구조적으로 안정적"
    ],
    "answer": 2,
    "explanation": "Honeycomb(2.6F×3.0F)은 원형 배열 시 공간 손실을 최소화하는 최밀 배치 방식으로 공간 활용도가 극대화된다. Cap 면적 최대화를 위한 Cell 아키텍처의 핵심이다."
  },
  {
    "id": 129,
    "type": "multiple",
    "lecture": "12강",
    "category": "Cell Cap Physics",
    "question": "Polarization Mechanism 중 유전율(k) 값이 가장 큰 것은?",
    "options": [
      "Electronic Polarization (k ~ 2)",
      "Ionic Polarization (k ~ 80)",
      "Ionic displacement - Ferroelectric (k > 100)",
      "세 가지 모두 동일한 k값을 가짐"
    ],
    "answer": 2,
    "explanation": "k값 비교: Electronic Polarization(k~2, 전자 중심 이동) < Ionic Polarization(k~80, 이온 평시 위치 이동) < Ionic displacement(k>100, Ferroelectric, 이온 영구적 위치 변경). DRAM은 높은 k를 위해 Ionic Polarization 이상의 재료를 사용한다."
  },
  {
    "id": 130,
    "type": "multiple",
    "lecture": "12강",
    "category": "Cell Cap Physics",
    "question": "실제 제작된 Capacitor가 Ideal Capacitor와 다른 두 가지 특성은?",
    "options": [
      "무한대 저항과 주파수 무관 Capacitance를 가지므로 손실이 전혀 없다",
      "완전 절연과 무한대 충전 용량을 가져 DC Leakage가 발생하지 않는다",
      "Dielectric loss(tan δ)와 DC Leakage Current가 존재해 이상적 특성과 다르다",
      "Capacitance 값이 고정되고 온도·주파수·재료 결함의 영향을 받지 않는다"
    ],
    "answer": 2,
    "explanation": "Real Capacitor는 Ideal과 달리: (1) Dielectric loss 존재(tan δ, 손실인자) - 고주파에서 유전 손실 발생, (2) DC Leakage Current 존재 - 직류에서도 누설 전류 흐름. 이를 개선하는 것이 Cap 개발의 핵심과제다."
  },
  {
    "id": 131,
    "type": "multiple",
    "lecture": "12강",
    "category": "Cell Cap Physics",
    "question": "Capacitor 누설 전류(LKG)에서 고전압 + 고온 조건에서 지배적인 메커니즘은?",
    "options": [
      "Direct Tunneling (두께에 지수 비례, 온도 무관)",
      "F-N Tunneling (전계 지수 의존, 온도 의존성 미약)",
      "Schottky emission (온도 의존성 강함)",
      "Poole-Frenkel (전압 영역 무관하게 동일)"
    ],
    "answer": 2,
    "explanation": "전압-온도에 따른 LKG 메커니즘: Low V → Direct Tunneling(온도 무관), Medium V → F-N Tunneling(온도 의존성 미약), High V + 고온 → Schottky emission(온도 의존성 강함). 고전압·고온에서는 Schottky 방출이 지배적이다."
  },
  {
    "id": 132,
    "type": "multiple",
    "lecture": "12강",
    "category": "Cell Cap Physics",
    "question": "ALD TaO와 CVD TaO의 누설 전류(LKG) 메커니즘 차이로 옳은 것은?",
    "options": [
      "ALD TaO가 defect 많아 Hopping 전도, 온도 의존성 강함",
      "CVD TaO가 defect 적어 Direct Tunneling, 온도 의존성 없음",
      "ALD TaO는 defect 적어 Tunneling(온도 의존성 없음), CVD TaO는 defect 많아 Hopping(온도 의존성 있음)",
      "두 방법 모두 동일한 메커니즘으로 온도 의존성 동일"
    ],
    "answer": 2,
    "explanation": "ALD TaO: 막내 defect가 적어 Tunneling 메커니즘 → 온도 의존성 없음. CVD TaO: 막내 defect가 많아 defect assisted tunneling(Hopping, Poole-Frenkel) → 온도 의존성 나타남."
  },
  {
    "id": 133,
    "type": "multiple",
    "lecture": "12강",
    "category": "Cell Cap Physics",
    "question": "Dielectric Relaxation Current의 특징으로 올바른 것은?",
    "options": [
      "전압 인가 즉시 사라지는 순간 과도 전류",
      "주파수가 높을수록 감소하는 교류 손실",
      "Dipole이 느리게 반응(~1초)하여 LKG가 긴 시간 동안 지속적으로 흐르는 전류",
      "온도가 낮아질수록 증가하는 열적 누설 전류"
    ],
    "answer": 2,
    "explanation": "Dielectric Relaxation Current: Dipole이 전기장에 느리게 반응(~1초)하여 전압 인가 후에도 LKG가 긴 시간 동안 감쇠하며 지속적으로 흐른다. 일반 DC 누설과 구분되는 이완(Relaxation) 전류 특성이다."
  },
  {
    "id": 134,
    "type": "multiple",
    "lecture": "13강",
    "category": "MBCFET",
    "question": "MBCFET(Multi-Bridge-Channel FET)가 FinFET 대비 Weff 확보에서 유리한 이유는?",
    "options": [
      "FinFET과 동일하게 측면 방향으로 Fin 폭을 늘려 Weff를 확보하기 때문",
      "MBCFET은 Gate Length를 늘려 Weff를 확보하기 때문",
      "MBCFET은 Nanosheet을 수직으로 쌓아 면적 페널티 없이 Weff를 증가시킬 수 있기 때문",
      "MBCFET은 채널 도핑을 높여 단위 면적당 전류를 늘리기 때문"
    ],
    "answer": 2,
    "explanation": "FinFET은 Fin 폭을 측면으로 늘려야 Weff 증가 → 면적 페널티 발생. MBCFET은 Nanosheet을 수직으로 적층(Multi-Stack)하여 Weff를 늘리므로 면적 페널티 없이 구현 가능하다."
  },
  {
    "id": 135,
    "type": "multiple",
    "lecture": "13강",
    "category": "MBCFET",
    "question": "MBCFET(GAA) 공정 flow의 주요 단계 순서로 올바른 것은?",
    "options": [
      "SiGe 식각 → Si/SiGe 다층 성장 → S/D 식각 → Gate 전극 형성",
      "Si/SiGe 다층 성장 → S/D 영역 식각 → Si SEG → STI 제거 → SiGe 식각 → Gate Ox/전극 형성",
      "Gate Ox 형성 → Si/SiGe 성장 → SiGe 식각 → S/D SEG → STI 제거",
      "STI 제거 → Si/SiGe 성장 → S/D 식각 → SiGe 식각 → Gate 형성"
    ],
    "answer": 1,
    "explanation": "MBCFET 공정: ① Si/SiGe 다층 성장 → ② S/D 영역 식각 → ③ Si SEG(S/D Epi) → ④ STI 희생막 제거 → ⑤ SiGe 선택 식각(Channel release, 채널 나노시트 노출) → ⑥ Gate Ox/전극 형성."
  },
  {
    "id": 136,
    "type": "multiple",
    "lecture": "13강",
    "category": "MBCFET",
    "question": "GAA NanoSheet의 폭(Width)에 따른 AC 성능 차이로 옳은 것은?",
    "options": [
      "좁은 NanoSheet(7nm Thin)이 넓은 것보다 AC 성능이 우수",
      "NanoSheet 폭과 AC 성능은 완전히 무관",
      "넓은 NanoSheet(>37nm Wide)은 AC 성능 이득이 있고, 좁은 NanoSheet(7nm Thin)은 AC 성능 이득이 없음",
      "넓은 NanoSheet은 공정 난이도가 낮아 성능보다 제조 편의성이 장점"
    ],
    "answer": 2,
    "explanation": "NanoSheet vs NanoWire: 넓은 NanoSheet(Wide, >37nm)은 Cpar < Cfin 조건 만족 시 FinFET 대비 AC 성능 이득 달성. 그러나 좁은 NanoSheet(Thin, 7nm)은 NanoWire와 동일하여 AC 이득이 없다."
  },
  {
    "id": 137,
    "type": "multiple",
    "lecture": "13강",
    "category": "반도체 아키텍처",
    "question": "메모리 중심 반도체 아키텍처의 발전 방향으로 올바른 것은?",
    "options": [
      "CIM → PIM → PNM → HBM → Von Neumann 순으로 회귀",
      "Von Neumann 기반 → HBM → PNM(Process Near Memory) → PIM(Process In Memory) → CIM(Compute In Memory)",
      "PNM → HBM → CIM → Von Neumann → PIM 순으로 혼합",
      "Von Neumann → CIM → PIM → PNM → HBM 순으로 단순화"
    ],
    "answer": 1,
    "explanation": "메모리 아키텍처 발전: Von Neumann(CPU+DRAM 분리) → HBM(High Bandwidth) → PNM(Memory 근처 연산) → PIM(Memory 내부 연산) → CIM(Compute In Memory). 연산과 메모리 통합을 통해 데이터 이동 병목을 줄이는 방향."
  },
  {
    "id": 138,
    "type": "multiple",
    "lecture": "13강",
    "category": "3D Logic",
    "question": "3DSFET(3D Stacked FET)의 핵심 특징은?",
    "options": [
      "더 많은 Fin을 수평 방향으로 나란히 배치해 Cell Width를 늘리는 방식",
      "Front-side와 Back-side interconnect를 함께 활용해 Cell Height를 줄이는 방식",
      "Si 기판을 완전히 제거하고 공중에 채널과 Gate를 독립 형성하는 방식",
      "Gate Length만 기존의 1/3로 줄이고 배선 구조는 기존과 동일하게 유지하는 방식"
    ],
    "answer": 1,
    "explanation": "3DSFET는 Pitch Scaling 둔화를 극복하기 위해 Front-side뿐 아니라 Back-side interconnect를 활용하여 Cell Height를 획기적으로 줄인다. FinFET → MBCFET → 3DSFET으로 이어지는 차세대 아키텍처(2027~2032 예상)."
  },
  {
    "id": 139,
    "type": "multiple",
    "lecture": "13강",
    "category": "FinFET",
    "question": "FinFET의 Scaling 한계에서 SCE(Short Channel Effect) 억제를 위한 Fin geometry 조건은?",
    "options": [
      "Fin Width가 Gate Length보다 항상 커야 SCE 억제 가능",
      "Fin Width가 클수록 Short Channel 억제에 유리하며 공정도 쉬움",
      "Fin Width가 작을수록 SCE 억제에 유리하나 공정 제어가 어려워지는 trade-off 존재",
      "Fin Width와 SCE는 서로 독립적인 관계"
    ],
    "answer": 2,
    "explanation": "FinFET에서 Fin Width가 작을수록 Natural Length가 작아져 SCE 억제에 유리하다. 그러나 Fin이 너무 좁으면(7nm 이하) 공정 제어가 어려워 process burden이 크게 증가한다. Wide(>37nm) NanoSheet이 sweet spot이다."
  },
  {
    "id": 140,
    "type": "multiple",
    "lecture": "8강",
    "category": "Gate 기본",
    "question": "T/R gate와 B/L을 비교한 설명으로 가장 적절한 것은?",
    "options": [
      "T/R gate는 switching 특성에 중요하고, B/L은 storage 영역의 데이터 유지와 관련된다",
      "T/R gate는 오염 방지 용기이고, B/L은 공정 가스를 공급하는 배관이다",
      "T/R gate는 배선 간 절연막이고, B/L은 CMP 평탄화 장비를 의미한다",
      "T/R gate는 패키지 외부 단자이고, B/L은 칩 외곽 보호 링을 의미한다"
    ],
    "answer": 0,
    "explanation": "요약본 기준 T/R gate는 switching 특성과 관련되고, B/L은 Storage 영역의 data 유지와 관련된다."
  },
  {
    "id": 141,
    "type": "multiple",
    "lecture": "8강",
    "category": "Gate Stack",
    "question": "Polycide gate를 Memory 계열에서 사용하는 이유로 가장 적절한 것은?",
    "options": [
      "Gate oxide를 완전히 제거해 채널과 금속을 직접 접촉시키기 위해",
      "Poly-Si 위에 WSix를 증착해 저항을 낮추고 안정적인 gate stack을 만들기 위해",
      "S/D junction을 깊게 만들어 punch-through를 의도적으로 키우기 위해",
      "Capacitor 표면적을 수직 방향으로 늘려 storage capacitance를 확보하기 위해"
    ],
    "answer": 1,
    "explanation": "Polycide gate는 Poly-Si 위에 WSix 등을 증착하여 저항을 낮추는 Memory용 gate stack으로 정리된다."
  },
  {
    "id": 142,
    "type": "multiple",
    "lecture": "8강",
    "category": "Salicide",
    "question": "Salicide 공정의 핵심 특징으로 가장 적절한 것은?",
    "options": [
      "Si 전체를 산화시켜 contact resistance를 의도적으로 높이는 공정이다",
      "금속이 oxide와 먼저 반응하여 gate oxide를 두껍게 성장시키는 공정이다",
      "금속이 노출된 Si와만 반응하여 필요한 영역에 self-aligned silicide를 형성한다",
      "Poly-Si를 완전히 제거하고 모든 gate를 oxide로 대체하는 공정이다"
    ],
    "answer": 2,
    "explanation": "Salicide는 metal-Si 반응을 이용해 Si 노출부에 선택적으로 silicide가 생기는 self-aligned 공정이다."
  },
  {
    "id": 143,
    "type": "multiple",
    "lecture": "8강",
    "category": "Silicidation",
    "question": "Full silicidation을 진행했을 때 gate poly-Si에 일어나는 변화는?",
    "options": [
      "Poly-Si와 gate oxide가 동시에 제거되어 channel이 노출된다",
      "Poly-Si 표면 일부만 반응하고 내부 Poly-Si는 대부분 그대로 남는다",
      "Poly-Si가 산화되어 SiO2로 바뀌며 저항이 급격히 증가한다",
      "Poly-Si 전체가 금속과 반응하여 metal-like silicide 상태로 전환된다"
    ],
    "answer": 3,
    "explanation": "Partial silicidation은 일부 Poly-Si가 남고, full silicidation은 Poly-Si가 대부분 silicide/metal화된다."
  },
  {
    "id": 144,
    "type": "multiple",
    "lecture": "8강",
    "category": "식각 안정성",
    "question": "Gate 식각 공정에서 식각 선택비가 중요한 이유는?",
    "options": [
      "금속층 식각 중 하부 gate oxide 손상과 잔류물 문제를 줄이기 위해",
      "Capacitor 높이를 키워 storage capacitance를 직접 증가시키기 위해",
      "Cu 배선을 electroplating 방식으로 bottom-up fill하기 위해",
      "Bit line과 active 영역 사이에 Si-Si contact를 만들기 위해"
    ],
    "answer": 0,
    "explanation": "식각 선택비가 낮으면 metal 식각 중 하부 gate oxide 손상, over-etch, poly-Si buffer 한계 문제가 생길 수 있다."
  },
  {
    "id": 145,
    "type": "multiple",
    "lecture": "8강",
    "category": "Replacement Gate",
    "question": "Logic에서 Replacement Metal Gate 방식이 유리한 이유로 가장 적절한 것은?",
    "options": [
      "금속 gate를 먼저 넣은 뒤 이후 모든 고온 공정에서 metal doping을 활성화하기 위해",
      "고온 공정 이후 dummy gate를 제거하고 metal을 채워 low heat budget으로 HKMG를 구현하기 위해",
      "SiO2를 두껍게 성장시켜 EOT를 키우고 leakage를 완전히 제거하기 위해",
      "Capacitor 형성 뒤 gate를 만들기 때문에 DRAM refresh time을 직접 늘리기 위해"
    ],
    "answer": 1,
    "explanation": "Logic Gate Last/Replacement Metal Gate는 고온 공정 이후 metal gate를 넣어 work function과 열 예산 문제를 줄인다."
  },
  {
    "id": 146,
    "type": "multiple",
    "lecture": "8강",
    "category": "Dual Gox",
    "question": "Dual Gate Oxide를 적용하는 가장 핵심적인 목적은?",
    "options": [
      "Contact plug 내부에 W 대신 Cu를 채워 galvanic corrosion을 막기 위해",
      "모든 gate oxide를 동일 두께로 만들어 device variation을 없애기 위해",
      "속도용 얇은 oxide와 신뢰성용 두꺼운 oxide를 소자 용도에 맞게 구분하기 위해",
      "Bit line pitch를 넓혀 DRAM cell array 면적을 의도적으로 늘리기 위해"
    ],
    "answer": 2,
    "explanation": "Dual Gox는 speed용 thin oxide와 신뢰성/SWD 영역용 thick oxide를 구분해 사용하는 개념이다."
  },
  {
    "id": 147,
    "type": "multiple",
    "lecture": "8강",
    "category": "HKMG",
    "question": "HKMG 도입이 필요한 배경으로 가장 적절한 것은?",
    "options": [
      "DRAM capacitor가 2D 구조로만 형성되어야 하기 때문",
      "Cu 배선의 oxidation으로 wire bonding이 항상 불가능해지기 때문",
      "Contact 면적이 커질수록 Rc가 증가해 scaling이 불가능하기 때문",
      "SiO2가 너무 얇아지면 gate leakage와 reliability 문제가 커지기 때문"
    ],
    "answer": 3,
    "explanation": "얇은 SiO2는 leakage와 신뢰성 문제가 커지므로 high-k로 EOT를 낮추면서 물리 두께를 확보한다."
  },
  {
    "id": 148,
    "type": "multiple",
    "lecture": "8강",
    "category": "Dipole Engineering",
    "question": "DRAM에서 Gate Last HKMG 대신 dipole engineering을 활용하는 이유로 가장 적절한 것은?",
    "options": [
      "Capacitor 이후 공정의 heat budget 제약 때문에 gate last 적용이 어렵기 때문",
      "Cu 배선을 wet etch로 쉽게 제거해 replacement gate를 만들 수 있기 때문",
      "Silicide grain boundary를 키워 contact resistance를 높일 수 있기 때문",
      "Low-k 손상을 증가시켜 capacitance를 더 크게 만들 수 있기 때문"
    ],
    "answer": 0,
    "explanation": "Memory는 후속 capacitor 공정 등 열 예산 제약이 커서 gate last가 어렵고, dipole engineering으로 Vt를 조정한다."
  },
  {
    "id": 149,
    "type": "multiple",
    "lecture": "8강",
    "category": "C-SiGe",
    "question": "Logic에서 C-SiGe가 PMOS 특성 개선에 도움을 주는 이유는?",
    "options": [
      "SiGe가 Bit line contact를 절연시켜 DRAM tRDL을 늘려주기 때문",
      "SiGe stress와 dipole 효과로 PMOS의 Vt 및 이동도 특성 개선에 기여하기 때문",
      "SiGe가 Cu diffusion barrier로 작동해 BEOL corrosion을 막기 때문",
      "SiGe가 capacitor dielectric loss를 제거해 refresh가 필요 없어지기 때문"
    ],
    "answer": 1,
    "explanation": "요약본은 C-SiGe가 Logic PMOS에만 적용되며 channel stress와 dipole 관련 특성 개선에 관여한다고 정리한다."
  },
  {
    "id": 150,
    "type": "multiple",
    "lecture": "8강",
    "category": "Spacer",
    "question": "Offset SiN spacer와 active spacer의 역할 차이로 가장 적절한 것은?",
    "options": [
      "Offset SiN은 capacitor supporter이고, active spacer는 honeycomb layout을 만든다",
      "Offset SiN은 Cu 배선을 형성하고, active spacer는 RDL pad 위치를 재배치한다",
      "Offset SiN은 LDD 침투를 막고, active spacer는 S/D implant 거리 확보와 SCE 개선에 관여한다",
      "Offset SiN은 FOUP 밀폐 용기이고, active spacer는 wafer 자동 이송 장치이다"
    ],
    "answer": 2,
    "explanation": "요약본은 lateral gate stack에서 offset SiN spacer와 active spacer가 LDD, S/D implant, SCE 개선과 관련된다고 정리한다."
  },
  {
    "id": 151,
    "type": "multiple",
    "lecture": "8강",
    "category": "EOR Defect",
    "question": "EOR(End Of Range) defect를 줄이기 위한 접근으로 가장 적절한 것은?",
    "options": [
      "ILD를 high-k로 바꿔 배선 간 capacitance를 증가시킨다",
      "Cu 배선에 electroplating을 적용해 bottom-up fill을 형성한다",
      "Capacitor pillar를 제거하고 planar capacitor로 되돌린다",
      "implant damage를 curing하고 diffusion stopper를 활용해 SCE와 defect를 완화한다"
    ],
    "answer": 3,
    "explanation": "EOR defect는 implant edge damage와 관련되며 curing, diffusion stopper 등이 언급된다."
  },
  {
    "id": 152,
    "type": "multiple",
    "lecture": "9강",
    "category": "Contact 종류",
    "question": "DRAM contact가 Logic/NAND보다 contact 종류가 많은 이유로 가장 적절한 것은?",
    "options": [
      "DRAM cell 특성상 Si-Si contact 등 cell 연결 구조가 추가로 필요하기 때문",
      "DRAM은 Cu damascene 공정을 쓰지 않기 때문에 contact가 전부 metal-metal이기 때문",
      "DRAM은 gate oxide가 없어서 모든 contact가 near-ohmic 형태로만 형성되기 때문",
      "DRAM은 BEOL이 없으므로 contact가 capacitor 내부에만 존재하기 때문"
    ],
    "answer": 0,
    "explanation": "요약본은 DRAM cell 유지를 위해 Si-Si contact 등이 존재해 Logic/NAND보다 contact 종류가 많다고 정리한다."
  },
  {
    "id": 153,
    "type": "multiple",
    "lecture": "9강",
    "category": "Bar Contact",
    "question": "Bar contact를 사용하는 주된 목적은?",
    "options": [
      "gate oxide 두께를 증가시켜 transistor leakage를 줄이기 위해",
      "contact 집적도를 높이고 산포와 저항 특성을 동시에 개선하기 위해",
      "Cu 배선을 wet etch로 제거해 via profile을 단순화하기 위해",
      "capacitor inner area를 제거해 pillar 구조로 바꾸기 위해"
    ],
    "answer": 1,
    "explanation": "요약본은 contact size가 작아지는 scaling에서 single→bar contact가 산포와 저항 개선에 쓰인다고 정리한다."
  },
  {
    "id": 154,
    "type": "multiple",
    "lecture": "9강",
    "category": "Borderless Contact",
    "question": "Borderless contact의 핵심 의미로 가장 적절한 것은?",
    "options": [
      "Capacitor 상하부 전극 사이를 직접 연결하는 short 구조",
      "금속과 산화막 사이에 의도적으로 두꺼운 절연막을 넣는 구조",
      "설계 여유가 작아진 contact에서 enclosure 없이도 면적 활용을 높이는 구조",
      "Cu 배선과 Al 배선을 전해질 안에서 직접 접촉시키는 구조"
    ],
    "answer": 2,
    "explanation": "요약본에는 borderless contact가 규제/enclosure 없는 contact로 면적 활용 측면에서 정리되어 있다."
  },
  {
    "id": 155,
    "type": "multiple",
    "lecture": "9강",
    "category": "Contact Resistance",
    "question": "Contact 저항을 낮추기 위한 방향으로 가장 적절한 것은?",
    "options": [
      "junction depth 증가, capacitor height 감소, refresh interval 감소",
      "contact 면적 축소, high-k ILD 적용, oxide thickness 증가",
      "dopant 농도 감소, silicide 제거, barrier metal 완전 제거",
      "contact 면적 확보, Schottky barrier height 감소, Si doping 농도 확보"
    ],
    "answer": 3,
    "explanation": "요약본은 contact size, SBH, doping 농도와 contact 저항/Rc delay/power를 연결한다."
  },
  {
    "id": 156,
    "type": "multiple",
    "lecture": "9강",
    "category": "Schottky Barrier",
    "question": "Metal-Si contact에서 Schottky barrier가 생기는 근본적인 이유로 가장 적절한 것은?",
    "options": [
      "금속과 Si의 work function 및 Fermi level 정렬 차이로 barrier가 형성되기 때문",
      "Cu가 산화되어 wire bonding이 불가능해지기 때문",
      "Low-k가 plasma damage를 받아 유전율이 다시 증가하기 때문",
      "Capacitor dielectric loss가 커져 DC leakage가 생기기 때문"
    ],
    "answer": 0,
    "explanation": "요약본의 band diagram은 metal work function, Si Fermi level, built-in potential/barrier 형성을 강조한다."
  },
  {
    "id": 157,
    "type": "multiple",
    "lecture": "9강",
    "category": "Fermi Level Pinning",
    "question": "Fermi level pinning을 contact 관점에서 줄이기 위해 사용되는 대표적 접근은?",
    "options": [
      "Cu 배선 위에 passivation oxide를 두껍게 성장시켜 barrier를 키운다",
      "Si 고농도 doping과 silicide 형성으로 barrier와 pinning 영향을 완화한다",
      "Capacitor supporter를 제거해 cylinder 구조를 pillar 구조로 바꾼다",
      "Gate oxide를 high-k에서 SiO2로 되돌려 EOT를 증가시킨다"
    ],
    "answer": 1,
    "explanation": "요약본은 ohmic contact를 위해 pinning 제거/완화, Si 고농도 doping, silicide를 연결해 정리한다."
  },
  {
    "id": 158,
    "type": "multiple",
    "lecture": "9강",
    "category": "Blanket Silicide",
    "question": "Blanket silicide 공정의 특징으로 가장 적절한 것은?",
    "options": [
      "Cu line과 via를 하나의 damascene 공정으로 동시에 채우는 방식",
      "contact hole을 만든 뒤 hole 내부 필요한 부분에만 silicide를 형성하는 방식",
      "contact 형성 전에 silicide를 만든 뒤 불필요 영역을 제거하는 방식",
      "photoresist를 남긴 채 HDP oxide를 증착해 passivation을 만드는 방식"
    ],
    "answer": 2,
    "explanation": "요약본은 blanket silicide와 trench silicide를 구분하며, blanket은 contact 뚫기 전 silicide를 형성하는 흐름으로 정리된다."
  },
  {
    "id": 159,
    "type": "multiple",
    "lecture": "9강",
    "category": "Trench Silicide",
    "question": "Trench silicide 공정의 특징으로 가장 적절한 것은?",
    "options": [
      "Low-k를 산화시켜 다시 SiO2로 바꾸는 passivation 공정이다",
      "contact 형성 전 wafer 전체에 silicide를 blanket으로 먼저 형성한다",
      "Cu seed를 PVD로 증착한 뒤 electroplating으로 via를 채운다",
      "contact hole을 형성한 뒤 필요한 contact 바닥 영역에 silicide를 형성한다"
    ],
    "answer": 3,
    "explanation": "Trench silicide는 contact를 뚫은 뒤 Ti/Co 등을 넣어 필요한 부분에 silicide를 만드는 방식으로 정리된다."
  },
  {
    "id": 160,
    "type": "multiple",
    "lecture": "9강",
    "category": "TiSi2",
    "question": "TiSi2가 Logic contact에서 쓰이는 이유로 가장 적절한 것은?",
    "options": [
      "후속 heat budget이 작은 환경에서 낮은 저항과 clean 기능을 기대할 수 있기 때문",
      "native oxide와 반응하지 않아 어떤 환경에서도 단차 문제가 없기 때문",
      "고온 열안정성이 가장 낮아 memory DRAM에만 제한적으로 쓰이기 때문",
      "Cu electroplating seed 역할을 하며 via bottom-up fill을 담당하기 때문"
    ],
    "answer": 0,
    "explanation": "요약본은 TiSi2를 Logic에서 사용하며 native oxide와 반응/clean 기능, heat budget 조건을 함께 언급한다."
  },
  {
    "id": 161,
    "type": "multiple",
    "lecture": "9강",
    "category": "CoSi2",
    "question": "CoSi2가 DRAM memory contact에서 선호되는 이유로 가장 적절한 것은?",
    "options": [
      "자연 산화막에 가장 민감하여 contact 전처리를 완전히 생략할 수 있기 때문",
      "열안정성이 비교적 좋고 native oxide와 반응이 작아 memory 조건에 적합하기 때문",
      "Cu보다 비저항이 낮아 BEOL metal line을 전부 대체할 수 있기 때문",
      "PVD seed 없이 electroplating이 가능해 barrier metal을 제거할 수 있기 때문"
    ],
    "answer": 1,
    "explanation": "요약본은 CoSi2가 DRAM에서 쓰이며 열안정성, native oxide 반응 억제, 낮은 저항 유지 측면을 언급한다."
  },
  {
    "id": 162,
    "type": "multiple",
    "lecture": "9강",
    "category": "Dopant Out Diffusion",
    "question": "Dopant out diffusion을 보상하기 위한 contact plug implant의 목적은?",
    "options": [
      "Capacitor dielectric loss를 줄여 refresh가 필요 없도록 만들기 위해",
      "Cu 배선 내부 void를 채워 electroplating 후 CMP dishing을 줄이기 위해",
      "도펀트 빠져나감을 보상해 contact 부근 저항이 임계적으로 커지는 것을 막기 위해",
      "Low-k damage layer를 산화시켜 유전율을 의도적으로 높이기 위해"
    ],
    "answer": 2,
    "explanation": "요약본은 dopant out diffusion을 보상하기 위해 contact plug implant를 사용하며 contact 저항에 critical하다고 정리한다."
  },
  {
    "id": 163,
    "type": "multiple",
    "lecture": "9강",
    "category": "Agglomeration",
    "question": "TiSi 계열에서 agglomeration이 문제가 되는 이유로 가장 적절한 것은?",
    "options": [
      "Capacitor supporter가 제거되어 cylinder height가 낮아지기 때문",
      "Cu가 oxide와 반응해 wire bonding을 완전히 불가능하게 만들기 때문",
      "Gate oxide가 두꺼워져 transistor drive current가 항상 증가하기 때문",
      "silicide가 뭉쳐 contact 저항이 증가하고 미세 contact에서 불리해지기 때문"
    ],
    "answer": 3,
    "explanation": "요약본은 TiSi에서 agglomeration이 surface energy, grain, contact resistance 문제와 연결된다고 정리한다."
  },
  {
    "id": 164,
    "type": "multiple",
    "lecture": "9강",
    "category": "PPN Barrier Metal",
    "question": "PPN(Pre Plasma Nitridation)을 Barrier Metal 공정에 적용하는 목적은?",
    "options": [
      "Ti 표면을 nitridation해 TiN 접착과 barrier 특성을 개선하기 위해",
      "Cu 배선을 wet etch로 제거해 dual damascene을 단순화하기 위해",
      "Capacitor dielectric을 high-k에서 low-k로 바꾸기 위해",
      "Gate oxide를 selective oxidation으로 두껍게 만들기 위해"
    ],
    "answer": 0,
    "explanation": "요약본은 PPN을 Ti nitridation 및 TiN 증착 전처리로 정리하며 B/M 특성 향상과 연결한다."
  },
  {
    "id": 165,
    "type": "multiple",
    "lecture": "9강",
    "category": "DCC/GBC",
    "question": "DCC, GBL, GBC의 연결 관계로 가장 적절한 것은?",
    "options": [
      "DCC는 capacitor 유전막, GBL은 passivation, GBC는 chip guard ring을 의미한다",
      "DCC는 B/L-ACT 연결, GBL은 Bit Line, GBC는 Capacitor-ACT 연결과 관련된다",
      "DCC는 Cu seed, GBL은 electroplating, GBC는 CMP dishing을 의미한다",
      "DCC는 FOUP, GBL은 AMHS, GBC는 clean room class를 의미한다"
    ],
    "answer": 1,
    "explanation": "요약본에는 DCC: B/L-ACT 연결, GBL: B/L, GBC: Capacitor-ACT 연결로 정리되어 있다."
  },
  {
    "id": 166,
    "type": "multiple",
    "lecture": "10강",
    "category": "BEOL 금속",
    "question": "BEOL 배선 재료가 Al에서 Cu로 전환된 핵심 이유로 가장 적절한 것은?",
    "options": [
      "Cu는 dry etch가 쉬워 damascene 없이 subtractive etch로만 배선을 만든다",
      "Cu는 Al보다 비저항이 높아 intentional delay를 만들어 신호 안정성을 높인다",
      "Cu는 비저항이 낮아 RC delay를 줄일 수 있지만 산화와 식각 측면의 공정 난점이 있다",
      "Cu는 oxide와 반응하지 않아 barrier metal이나 passivation이 전혀 필요 없다"
    ],
    "answer": 2,
    "explanation": "요약본은 Al→Cu 전환 이유를 낮은 비저항으로 설명하면서 Cu oxidation, dry etch 어려움도 함께 언급한다."
  },
  {
    "id": 167,
    "type": "multiple",
    "lecture": "10강",
    "category": "Dual Damascene",
    "question": "Dual damascene 공정의 장점으로 가장 적절한 것은?",
    "options": [
      "Capacitor supporter를 식각해 cylinder를 pillar로 바꾸는 공정이다",
      "Cu를 dry etch로 직접 패터닝해 barrier metal 없이 line을 만든다",
      "Gate oxide를 선택적으로 성장시켜 dual Gox를 형성하는 공정이다",
      "via와 metal line을 한 번에 채워 single damascene 대비 step을 줄일 수 있다"
    ],
    "answer": 3,
    "explanation": "요약본은 via와 metal line을 동시에 채우는 dual damascene을 single damascene보다 step이 적은 방식으로 정리한다."
  },
  {
    "id": 168,
    "type": "multiple",
    "lecture": "10강",
    "category": "Via First/Trench First",
    "question": "Via-first와 trench-first 비교로 가장 적절한 것은?",
    "options": [
      "Via-first는 alignment 이슈가 커질 수 있고, trench-first는 via 형상 자체가 작아지는 경향이 있다",
      "Via-first는 항상 dishing이 없고, trench-first는 barrier metal을 전혀 쓰지 않는다",
      "Via-first는 capacitor 공정이고, trench-first는 transistor S/D implant 공정이다",
      "Via-first는 W plug 전용이고, trench-first는 poly-Si gate 전용 공정이다"
    ],
    "answer": 0,
    "explanation": "요약본은 via-first에서 via와 metal line M/A에 따른 TDDP 신뢰성 이슈, trench-first에서 via 자체가 작아지는 경향을 정리한다."
  },
  {
    "id": 169,
    "type": "multiple",
    "lecture": "10강",
    "category": "Cu Fill",
    "question": "Cu 배선 형성에서 PVD seed와 electroplating을 함께 사용하는 이유는?",
    "options": [
      "PVD seed로 Cu를 전부 채우고 electroplating은 oxide를 식각하기 위해",
      "PVD seed로 전기적 경로를 만든 뒤 electroplating으로 bottom-up fill을 하기 위해",
      "electroplating으로 barrier metal을 만들고 PVD seed로 CMP를 수행하기 위해",
      "PVD seed와 electroplating 모두 gate oxide 성장에 쓰이는 열처리이기 때문"
    ],
    "answer": 1,
    "explanation": "요약본은 Cu dry etch가 어렵기 때문에 trench를 만들고 seed를 깐 뒤 electroplating으로 채우는 damascene 흐름을 정리한다."
  },
  {
    "id": 170,
    "type": "multiple",
    "lecture": "10강",
    "category": "CMP Dishing",
    "question": "Cu CMP에서 dishing을 줄이기 위한 설계/공정 조건으로 가장 적절한 것은?",
    "options": [
      "S/D implant 농도를 낮춰 junction depth를 깊게 만드는 조건만 조절한다",
      "gate oxide를 두껍게 만들어 channel electric field를 낮추는 조건만 조절한다",
      "metal/oxide 선택비와 pattern density를 고려하고 폭이 큰 line의 과연마를 제어한다",
      "FOUP 밀폐 압력을 높여 wafer 표면의 slurry를 완전히 제거한다"
    ],
    "answer": 2,
    "explanation": "요약본은 CMP dishing, metal:oxide 선택비, width/density, over-CMP 조건을 함께 정리한다."
  },
  {
    "id": 171,
    "type": "multiple",
    "lecture": "10강",
    "category": "Low-k/ULK",
    "question": "ULK 적용이 scaling에서 어려운 이유로 가장 적절한 것은?",
    "options": [
      "Gate last 공정을 반드시 막아 모든 transistor가 planar로만 형성되기 때문이다",
      "k가 너무 높아 배선 간 capacitance가 증가하고 RC delay가 항상 커지기 때문이다",
      "Cu와 직접 반응해 silicide를 만들기 때문에 contact resistance가 낮아지기 때문이다",
      "k는 낮지만 mechanical strength가 약하고 plasma damage를 받으면 유전율이 다시 증가할 수 있다"
    ],
    "answer": 3,
    "explanation": "요약본은 Low-k/ULK의 낮은 modulus/hardness, plasma damage, damaged layer와 유전율 증가 문제를 정리한다."
  },
  {
    "id": 172,
    "type": "multiple",
    "lecture": "10강",
    "category": "Low-k Etch",
    "question": "Low-k dual damascene에서 trench-first가 via-first보다 손상 관점에서 유리할 수 있는 이유는?",
    "options": [
      "hard mask가 low-k를 보호해 via-first 대비 전체 damage를 줄일 수 있기 때문",
      "via와 metal line이 항상 완벽히 정렬되어 TDDP가 완전히 사라지기 때문",
      "Cu dry etch가 쉬워져 damascene 구조가 필요 없어지기 때문",
      "oxide를 high-k로 바꾸어 배선 간 capacitance를 키울 수 있기 때문"
    ],
    "answer": 0,
    "explanation": "요약본은 trench-first가 hard mask로 low-k를 보호해 damage가 작고 ULK에 적합하다고 정리한다."
  },
  {
    "id": 173,
    "type": "multiple",
    "lecture": "10강",
    "category": "Cu Barrier",
    "question": "Cu 배선에서 Ta/TaN 계열 barrier가 필요한 이유로 가장 적절한 것은?",
    "options": [
      "Cu를 dry etch하기 쉽게 만들어 subtractive etch를 가능하게 하기 위해",
      "Cu diffusion과 주변 물질 반응을 막아 신뢰성을 확보하기 위해",
      "Gate oxide를 selective oxidation으로 성장시키기 위해",
      "Bit line refresh interval을 직접 8ns로 고정하기 위해"
    ],
    "answer": 1,
    "explanation": "요약본은 Cu가 확산/반응성이 있어 B/M이 필요하고 TaN이 주로 쓰인다고 정리한다."
  },
  {
    "id": 174,
    "type": "multiple",
    "lecture": "10강",
    "category": "Passivation",
    "question": "DRAM passivation 공정 흐름으로 가장 적절한 것은?",
    "options": [
      "Gate oxide 성장, S/D implant, spacer etch 순으로 RDL을 만든다",
      "PVD seed 증착, Cu plating, CMP 순으로 contact silicide를 형성한다",
      "HDP oxide 증착, alloy, PE-SiN 증착 순으로 보호막을 형성한다",
      "FOUP loading, AMHS 이동, wafer sort 순으로 dielectric을 만든다"
    ],
    "answer": 2,
    "explanation": "요약본은 현재 DRAM passivation을 HDP Depo → PE-SiN Depo → alloy 흐름으로 정리한다."
  },
  {
    "id": 175,
    "type": "multiple",
    "lecture": "10강",
    "category": "Alloy",
    "question": "BEOL alloy 공정의 목적과 trade-off로 가장 적절한 것은?",
    "options": [
      "FOUP 내부 산소를 제거하지만 chip guard ring에는 손상을 준다",
      "Cu line을 dry etch하기 쉽게 만들지만 barrier metal을 모두 제거해야 한다",
      "Gate oxide를 성장시키지만 transistor Vt 조절에는 전혀 영향이 없다",
      "수소로 dangling bond를 안정화하지만 capacitor 관점에서는 refresh 저하 위험이 있다"
    ],
    "answer": 3,
    "explanation": "요약본은 alloy가 외부에서 H를 주입해 DIBL/continuity 개선에 기여하지만 capacitor 관점 trade-off가 있다고 정리한다."
  },
  {
    "id": 176,
    "type": "multiple",
    "lecture": "10강",
    "category": "RDL/PSPI",
    "question": "RDL과 PSPI의 역할 조합으로 가장 적절한 것은?",
    "options": [
      "RDL은 pad 위치를 재배치하고, PSPI는 외부 충격과 soft error로부터 chip을 보호한다",
      "RDL은 gate oxide를 성장시키고, PSPI는 S/D junction depth를 조절한다",
      "RDL은 silicide를 형성하고, PSPI는 Schottky barrier height를 낮춘다",
      "RDL은 FOUP 역할을 하고, PSPI는 cleanroom class를 결정한다"
    ],
    "answer": 0,
    "explanation": "요약본은 RDL을 I/O pad를 edge 쪽으로 배치하는 재배선, PSPI를 chip 보호/soft error 방지와 연결한다."
  },
  {
    "id": 177,
    "type": "multiple",
    "lecture": "11강",
    "category": "Cell Tr 특성",
    "question": "DRAM Cell T/R이 Logic T/R과 다르게 특히 중시하는 특성은?",
    "options": [
      "고속 동작만을 위해 gate delay를 최소화하고 leakage는 거의 고려하지 않는 특성",
      "Capacitor charge가 빠져나가지 않도록 off/leakage와 retention을 관리하는 특성",
      "Cu 배선을 electroplating으로 채우는 BEOL metal fill 특성",
      "패키지 외부 pad 위치를 edge로 옮기는 redistribution 특성"
    ],
    "answer": 1,
    "explanation": "요약본은 DRAM은 data 저장을 위해 capacitor charge가 빠져나가지 않는 것이 중요하고, Logic은 빠른 data 전달이 중요하다고 정리한다."
  },
  {
    "id": 178,
    "type": "multiple",
    "lecture": "11강",
    "category": "DRAM 불량",
    "question": "GIDL과 BTBT의 관계로 가장 적절한 것은?",
    "options": [
      "Capacitor supporter가 무너져 honeycomb layout이 planar 구조로 바뀐다",
      "Bit line metal이 산화되어 Cu seed가 사라지면서 refresh가 완전히 멈춘다",
      "Gate-drain overlap 부근 강한 전계에서 BTBT가 발생해 junction leakage가 증가한다",
      "RDL pad가 edge로 이동하면서 chip guard ring이 사라지는 현상이다"
    ],
    "answer": 2,
    "explanation": "요약본은 GIDL을 gate-drain overlap 부근 강한 electric field와 BTBT, junction leakage 증가로 정리한다."
  },
  {
    "id": 179,
    "type": "multiple",
    "lecture": "11강",
    "category": "DRAM 불량",
    "question": "DTBT가 DRAM Cell에서 문제가 되는 이유로 가장 적절한 것은?",
    "options": [
      "Low-k가 damaged layer 없이 완전히 SiO2로 변환되기 때문이다",
      "Cu 배선이 wet etch되지 않아 damascene 공정이 불가능해진다",
      "Gate poly-Si가 전부 metal로 바뀌어 W roughness가 사라진다",
      "Drain 전압 때문에 channel barrier가 낮아져 원치 않는 tunneling current가 증가한다"
    ],
    "answer": 3,
    "explanation": "요약본은 DTBT를 drain 전압에 따른 tunneling current, SCE와 연결해 정리한다."
  },
  {
    "id": 180,
    "type": "multiple",
    "lecture": "11강",
    "category": "BCAT 구조",
    "question": "BCAT에서 channel이 짧아질 때 생기는 static/dynamic retention 문제 조합으로 가장 적절한 것은?",
    "options": [
      "Static retention은 junction leakage, dynamic retention은 DIBL 관련 leakage가 핵심이다",
      "Static retention은 Cu corrosion, dynamic retention은 wire bonding 실패가 핵심이다",
      "Static retention은 CMP dishing, dynamic retention은 slurry 응집이 핵심이다",
      "Static retention은 RDL pad 이동, dynamic retention은 PSPI crack이 핵심이다"
    ],
    "answer": 0,
    "explanation": "요약본은 static retention을 junction leakage, dynamic retention을 DIBL에 의한 leakage와 연결한다."
  },
  {
    "id": 181,
    "type": "multiple",
    "lecture": "11강",
    "category": "S-BCAT",
    "question": "S-BCAT 구조가 RCAT 대비 갖는 장점으로 가장 적절한 것은?",
    "options": [
      "Cu 배선의 dry etch가 쉬워져 BEOL 공정을 단순화할 수 있다",
      "곡률 완화와 channel 길이 증가로 SCE와 DIBL을 개선할 수 있다",
      "Capacitor inner area를 제거해 storage capacitance를 줄일 수 있다",
      "FOUP 내부 산소 농도를 낮춰 wafer 오염을 줄일 수 있다"
    ],
    "answer": 1,
    "explanation": "요약본은 S-BCAT이 곡률 완화, channel 길이 증가, gate controllability 향상, SCE/DIBL 개선과 관련된다고 정리한다."
  },
  {
    "id": 182,
    "type": "multiple",
    "lecture": "11강",
    "category": "FFRCAT",
    "question": "FFRCAT(Inner GP/Fence Free)의 구조적 의도는?",
    "options": [
      "Capacitor supporter를 제거해 mechanical stability를 낮추는 것",
      "Cu line의 overhang을 의도적으로 키워 electroplating void를 만드는 것",
      "Si oxide를 선택적으로 식각해 inner GP를 만들고 gate controllability를 높이는 것",
      "RDL pad를 chip 중심으로 모아 wire 길이를 늘리는 것"
    ],
    "answer": 2,
    "explanation": "요약본은 FFRCAT가 inner GP/fence free 구조로 gate controllability를 좋게 하기 위한 구조라고 정리한다."
  },
  {
    "id": 183,
    "type": "multiple",
    "lecture": "11강",
    "category": "BCAT W",
    "question": "BCAT W 구조에서 W를 도입하는 주된 목적은?",
    "options": [
      "Gate oxide를 두껍게 만들어 DIBL을 의도적으로 증가시키기 위해",
      "Cu 배선을 완전히 제거하고 Al wire bonding만 사용하기 위해",
      "Capacitor dielectric loss를 증가시켜 refresh 특성을 낮추기 위해",
      "WL 저항을 낮춰 특성을 개선하고 poly-Si depletion 문제를 완화하기 위해"
    ],
    "answer": 3,
    "explanation": "요약본은 BCAT에서 W 도입이 WL 저항 개선, poly-Si depletion 완화, 특성 개선과 관련된다고 정리한다."
  },
  {
    "id": 184,
    "type": "multiple",
    "lecture": "11강",
    "category": "Dual Work Function",
    "question": "BCAT Dual Work Function 구조의 목적은?",
    "options": [
      "cell 특성 극복을 위해 gate metal work function을 위치별로 조절하는 것",
      "Cu 배선의 work function을 바꾸어 electroplating 속도만 조절하는 것",
      "Capacitor 유전막의 k값을 위치별로 낮춰 capacitance를 줄이는 것",
      "FOUP 내부 기압을 조절해 wafer loading 시간을 줄이는 것"
    ],
    "answer": 0,
    "explanation": "요약본은 scaling에 따른 특성 한계 극복을 위해 dual work function을 도입한다고 정리한다."
  },
  {
    "id": 185,
    "type": "multiple",
    "lecture": "11강",
    "category": "tREF/tRDL",
    "question": "tRDL과 tREF의 의미 조합으로 가장 적절한 것은?",
    "options": [
      "tRDL은 Cu seed 증착 시간, tREF는 electroplating으로 via를 채우는 시간을 의미한다",
      "tRDL은 write 후 data가 cell capacitor에 저장될 때까지의 허용 시간, tREF는 refresh 주기와 관련된다",
      "tRDL은 gate oxide 성장 시간, tREF는 S/D implant activation 시간을 의미한다",
      "tRDL은 FOUP 이송 시간, tREF는 cleanroom particle count 측정 시간을 의미한다"
    ],
    "answer": 1,
    "explanation": "요약본은 tRDL을 data가 cell capacitor에 재생될 때까지 허용된 시간, tREF를 refresh time과 연결한다."
  },
  {
    "id": 186,
    "type": "multiple",
    "lecture": "11강",
    "category": "Pass Gate Effect",
    "question": "Pass Gate Effect(PGE)가 발생했을 때 victim cell에 나타나는 영향으로 가장 적절한 것은?",
    "options": [
      "Low-k modulus가 증가해 plasma damage가 완전히 사라진다",
      "Cu 배선의 grain size가 커져 contact resistance가 항상 낮아진다",
      "pass gate 전압 영향으로 potential이 변하고 Vt 변화와 leakage/retention 불량이 생긴다",
      "RDL pad가 edge로 이동해 chip size가 자동으로 감소한다"
    ],
    "answer": 2,
    "explanation": "요약본은 PGE를 pass gate가 victim potential에 영향을 주어 Vt 감소/증가와 tREF/tRDL 불량으로 이어지는 현상으로 정리한다."
  },
  {
    "id": 187,
    "type": "multiple",
    "lecture": "11강",
    "category": "Row Hammer",
    "question": "Row Hammer와 1RD 현상의 관계로 가장 적절한 것은?",
    "options": [
      "Silicide grain boundary가 커져 contact resistance가 낮아지는 현상이다",
      "Cu line의 bottom-up fill 실패가 passivation crack으로 이어지는 현상이다",
      "Gate last HKMG에서 dummy gate가 제거되지 않아 Vt가 고정되는 현상이다",
      "인접 WL 반복 동작이 victim cell capacitance 전하를 변화시켜 data flip을 유발할 수 있다"
    ],
    "answer": 3,
    "explanation": "요약본은 1RD/Row Hammer를 인근 WL 전압, coupling, victim cell 전하 변화, data 0↔1 변화와 연결한다."
  },
  {
    "id": 188,
    "type": "multiple",
    "lecture": "11강",
    "category": "방사선 영향",
    "question": "DRAM에서 thermal neutron 등 방사선 영향이 tRDL fail로 이어지는 경로로 가장 적절한 것은?",
    "options": [
      "He가 phosphorus dopant를 밀어내 저항이 증가하고 tRDL fail이 발생할 수 있다",
      "Cu가 산화되어 via가 모두 절연체로 바뀌며 RDL pad가 사라진다",
      "Gate oxide가 high-k로 변하면서 refresh가 완전히 불필요해진다",
      "Capacitor honeycomb layout이 자동으로 pillar 구조로 전환된다"
    ],
    "answer": 0,
    "explanation": "요약본은 thermal neutron에 의해 He가 방출되고 phosphorus dopant를 밀어내 저항 증가, tRDL fail로 이어질 수 있다고 정리한다."
  }
]
