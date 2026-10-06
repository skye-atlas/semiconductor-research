// 由 tools/update_stats.py 自動產生，不要手改（來源：content/01-Companies/）
window.COMPANIES = [
 {
  "file": "Coherent",
  "notes": true,
  "cites": {
   "2025-03-27-NVIDIA-Silicon-Photonics-Network-Switching-Technical-Blog.md": 6,
   "2026-03-17-Coherent-OFC-2026-Technology-Innovation-Briefing.md": 6,
   "2025-09-25-Coherent-400mW-CW-Lasers-Sampling-Press-Release.md": 4,
   "2026-03-17-Coherent-CPO-Technologies-at-OFC-2026-Press-Release.md": 1,
   "2025-06-03-Yole-Co-packaged-Optics-for-Data-Centers-2025.md": 1,
   "2026-05-11-Yole-Optical-Transceivers-for-Datacom-and-Telecom-2026.md": 1,
   "2026-03-02-NVIDIA-Coherent-Strategic-Partnership-Press-Release.md": 4,
   "2026-09-21-Coherent-ECOC-2026-Presentation-Transcript.md": 1,
   "2026-06-16-Coherent-CHIPS-Letter-of-Intent-Press-Release.md": 1,
   "2026-08-14-Coherent-FY2026-Form-10-K.md": 2,
   "2026-09-29-NVIDIA-Silicon-Photonics-Product-Page.md": 1
  },
  "name": "Coherent",
  "aliases": [
   "Coherent Corp.",
   "COHR",
   "II-VI",
   "高意"
  ],
  "listing": [
   {
    "market": "us",
    "ticker": "COHR"
   }
  ],
  "summary": "光通訊雷射與光學元件大廠；本站追蹤它在 CPO 外部光源（InP CW 雷射與 ELS 模組）的角色。",
  "roles": [
   {
    "section": "d3-photonics",
    "role": "component",
    "offering": "CPO 用高功率 InP CW 雷射與外部光源（ELS）模組",
    "tags": [
     "InP CW 雷射",
     "ELS/ELSFP",
     "6 吋 InP 自有晶圓廠"
    ],
    "evidence": [
     {
      "status": "customer",
      "claim": "NVIDIA 點名 Lumentum、Sumitomo、Coherent 為 ELS 雷射與子組件夥伴，提供 ELS 組裝、光學對準與測試",
      "scope": "由採用方 NVIDIA 具名；沒有說明份額、金額或量產時間",
      "source": "2025-03-27-NVIDIA-Silicon-Photonics-Network-Switching-Technical-Blog.md",
      "date": "2025-03-27",
      "nature": "vendor",
      "relay": "",
      "sort": "2025-03-27",
      "key": true
     },
     {
      "status": "shipping",
      "claim": "公司稱高功率 CW DFB 雷射已全面量產，並取得一家 AI 資料中心龍頭客戶的 CPO 多年大量訂單",
      "scope": "公司說法；客戶未具名，沒有數量",
      "source": "2026-03-17-Coherent-OFC-2026-Technology-Innovation-Briefing.md",
      "date": "2026-03-17",
      "nature": "vendor",
      "relay": "",
      "sort": "2026-03-17"
     },
     {
      "status": "sampling",
      "claim": "400 mW、1311 nm CW 雷射以 chip-on-carrier 形式送樣，預計 2026 第三季量產",
      "scope": "送樣與量產時程是公司說法",
      "source": "2025-09-25-Coherent-400mW-CW-Lasers-Sampling-Press-Release.md",
      "date": "2025-09-25",
      "nature": "vendor",
      "relay": "",
      "sort": "2025-09-25"
     },
     {
      "status": "demo",
      "claim": "展示 6.4T 矽光子 CPO，搭配自家 ELS 模組與自製 InP CW 雷射；另展示符合 ELSFP、內含八顆 1310 nm 雷射的外部光源模組",
      "scope": "展示，不代表量產",
      "source": "2026-03-17-Coherent-CPO-Technologies-at-OFC-2026-Press-Release.md",
      "date": "2026-03-17",
      "nature": "vendor",
      "relay": "",
      "sort": "2026-03-17"
     },
     {
      "status": "capability",
      "claim": "Yole 把 Coherent 列在 CPO 產業生態圖的 PIC 設計、CW-DFB 光源、ELSFP 模組、EIC/DSP 四格，並列為 scale-out CPO 的雷射供應商之一",
      "scope": "研究機構的名單（註明非完整），只表示 Yole 認為它是參與者；不代表出貨、客戶或份額",
      "source": "2025-06-03-Yole-Co-packaged-Optics-for-Data-Centers-2025.md",
      "date": "2025 版・發布日期未確認",
      "nature": "industry",
      "relay": "",
      "sort": "2025-06-03",
      "ref": [
       "Y55",
       "Y57"
      ]
     },
     {
      "status": "capability",
      "claim": "Yole 列 Coherent 為全球主要 CW-DFB 雷射供應商之一（另有 Lumentum、Sumitomo、仕佳），並轉述它擴充 CW 產能供外售與自用、目標 2026 年底前擴充 InP 廠，把 200G 高功率 CW 雷射列為自家矽光子的策略重點",
      "scope": "研究機構的名單與轉述的擴產計畫；沒有產能數字，也沒有區分可插拔模組用與 CPO 外部光源用的 CW 雷射",
      "source": "2026-05-11-Yole-Optical-Transceivers-for-Datacom-and-Telecom-2026.md",
      "date": "2026-05",
      "nature": "industry",
      "relay": "",
      "sort": "2026-05",
      "ref": [
       "OT23",
       "OT24"
      ]
     }
    ],
    "state": {
     "summary": "公司稱 CW 雷射已全面量產；NVIDIA 官方點名為 ELS 夥伴",
     "mark": "said",
     "as_of": "2026-09-21"
    },
    "progress": [
     {
      "step": "客戶點名",
      "when": "2025-03",
      "mark": "fact",
      "lapsed": ""
     },
     {
      "step": "400 mW 送樣",
      "when": "2025-09",
      "mark": "said",
      "lapsed": ""
     },
     {
      "step": "策略合作",
      "when": "2026-03",
      "mark": "fact",
      "lapsed": ""
     },
     {
      "step": "CW 雷射量產",
      "when": "2026-03",
      "mark": "said",
      "lapsed": ""
     },
     {
      "step": "400 mW 量產",
      "when": "預計 2026 第三季",
      "mark": "plan",
      "lapsed": "原定期間已結束；本站 2026-10-06 查證未找到結果，結果未明，預定 2026-12-31 再查"
     },
     {
      "step": "ELS 用超高功率 CW 雷射放量",
      "when": "預計 2026 第四季",
      "mark": "plan",
      "lapsed": ""
     }
    ],
    "verify": [
     "CPO 大量多年訂單的客戶、以及 10-K 中占營收 20% 的客戶是否就是 NVIDIA",
     "雷射後段封裝外包了多少、外包給誰（聯鈞自述 2024 年起為 Coherent 做 COSA；元富指向 GIS-KY）",
     "CPO 用 CW 雷射與 ELS 的營收規模",
     "400 mW CW 雷射是否如期在 2026 第三季量產"
    ]
   }
  ],
  "relations": [
   {
    "type": "supply",
    "with": "NVIDIA",
    "what": "CPO 交換器的 ELS 雷射與子組件（ELS 組裝、光學對準、測試）；另有光纖與連接器組件",
    "status": "confirmed",
    "sources": [
     "2025-03-27-NVIDIA-Silicon-Photonics-Network-Switching-Technical-Blog.md",
     "2026-09-29-NVIDIA-Silicon-Photonics-Product-Page.md",
     "2026-03-02-NVIDIA-Coherent-Strategic-Partnership-Press-Release.md"
    ]
   }
  ],
  "mentions": []
 },
 {
  "file": "GIS-KY",
  "notes": true,
  "cites": {
   "2026-09-24-GIS-KY-2026Q2法人說明會逐字稿.md": 19,
   "2026-06-29-GIS-KY-2026Q1法人說明會逐字稿.md": 3,
   "2026-09-29-群益投顧-GIS-KY個股報告.md": 2,
   "2026-09-29-元富投顧-GIS-KY公司拜訪快報.md": 3,
   "2026-09-24-GIS-KY-2026Q2法人說明會簡報.md": 1,
   "2026-06-29-GIS-KY-2026Q1法人說明會簡報.md": 1,
   "2026-03-13-Yole-Photonics-Packaging-2026.md": 1
  },
  "name": "GIS-KY（業成）",
  "aliases": [
   "業成",
   "業成控股",
   "GIS Holding",
   "GIS",
   "General Interface Solution"
  ],
  "listing": [
   {
    "market": "tw",
    "ticker": "6456"
   }
  ],
  "summary": "本業是平板與筆電觸控顯示模組；本站追蹤它新做的光通訊雷射光源（CW laser）封裝與測試。",
  "roles": [
   {
    "section": "d3-photonics",
    "role": "packaging",
    "offering": "光通訊雷射光源封裝與測試",
    "tags": [
     "CW laser 為主",
     "目標 800G 以上"
    ],
    "evidence": [
     {
      "status": "customer",
      "claim": "財務長表示約十億元產線已投入、正在小量測試，順利的話今年（2026）底前開始出貨給客戶，希望 Q4 有貢獻，顯著貢獻從 2027 年開始；9 月初董事會另通過約 33 億元封測設備，2027 上半年之後才量產",
      "scope": "只限雷射光源封裝與測試，不代表雷射晶片製造；「年底前出貨」是預計，客戶未具名；公司說下游還沒有直接到 CSP",
      "source": "2026-09-24-GIS-KY-2026Q2法人說明會逐字稿.md",
      "date": "2026-09-24",
      "nature": "vendor",
      "relay": "",
      "sort": "2026-09-24",
      "key": true
     },
     {
      "status": "customer",
      "claim": "技術長表示主要大客戶的驗證「非常順利」，預期明年（2027）有營收貢獻；財務長稱順利的話明年上半年部分量產",
      "scope": "只限雷射光源封裝與測試；客戶未具名，驗證時數、產能與金額都未揭露",
      "source": "2026-06-29-GIS-KY-2026Q1法人說明會逐字稿.md",
      "date": "2026-06-29",
      "nature": "vendor",
      "relay": "",
      "sort": "2026-06-29"
     },
     {
      "status": "sampling",
      "claim": "群益轉述：以 800G 以上產品為佈局重心，訂單主要來自國際大廠，現正送樣測試中，預計 2026 年底出貨",
      "scope": "券商轉述公司資訊，不是管理層原話；客戶未具名",
      "source": "2026-09-29-群益投顧-GIS-KY個股報告.md",
      "date": "2026-09-29",
      "nature": "vendor",
      "relay": "群益投顧",
      "sort": "2026-09-29"
     },
     {
      "status": "customer",
      "claim": "元富稱 GIS 已接到美系 Coherent 的 CPO 光耦合元件（800G/1.6T）大單，光源封裝 2026 年底初步出貨、2027 上半年放量",
      "scope": "券商依公司拜訪寫成，沒有區分公司原話；客戶由券商具名，GIS 與 Coherent 都沒有證實；「光耦合元件」與公司說的「雷射光源封裝」是否同一件事待釐清",
      "source": "2026-09-29-元富投顧-GIS-KY公司拜訪快報.md",
      "date": "2026-09-29",
      "nature": "vendor",
      "relay": "元富投顧",
      "sort": "2026-09-29"
     },
     {
      "status": "capability",
      "claim": "被問到以 EML 或 CW 為主時，公司表示看客戶需求，目前技術上都可以做",
      "scope": "只是公司自述的技術能力；沒有 EML 的客戶或訂單資訊",
      "source": "2026-09-24-GIS-KY-2026Q2法人說明會逐字稿.md",
      "date": "2026-09-24",
      "nature": "vendor",
      "relay": "",
      "sort": "2026-09-24"
     }
    ],
    "state": {
     "summary": "客戶驗證與小量測試中，尚未出貨",
     "mark": "said",
     "as_of": "2026-09-24"
    },
    "progress": [
     {
      "step": "客戶驗證",
      "when": "2026-06",
      "mark": "said",
      "lapsed": ""
     },
     {
      "step": "小量測試",
      "when": "2026-09",
      "mark": "said",
      "lapsed": ""
     },
     {
      "step": "首批出貨",
      "when": "預計 2026 年底前",
      "mark": "plan",
      "lapsed": ""
     },
     {
      "step": "擴產設備量產",
      "when": "預計 2027 上半年之後",
      "mark": "plan",
      "lapsed": ""
     },
     {
      "step": "顯著營收",
      "when": "預計 2027",
      "mark": "plan",
      "lapsed": ""
     }
    ],
    "verify": [
     "是否真的開始出貨",
     "客戶是否為 Coherent（元富具名，GIS 與 Coherent 都沒有證實）、有幾家",
     "月產能與良率",
     "封裝好的雷射最後用在哪種模組（可插拔光模組、CPO 外部光源？）",
     "是否已經有營收",
     "單價與毛利率",
     "擴產會不會再加碼或延後"
    ]
   }
  ],
  "relations": [
   {
    "type": "capital",
    "with": "鴻海",
    "what": "鴻海集團成員；公司說集團內的夏普是平板與筆電 TFT 面板的重要來源，集團內光通訊相關公司有機會就會合作（未確認任何具名合作）",
    "status": "stated",
    "sources": [
     "2026-09-24-GIS-KY-2026Q2法人說明會逐字稿.md"
    ]
   },
   {
    "type": "supply",
    "with": "Coherent",
    "what": "CW 雷射光源封裝與測試（元富寫作「CPO 光耦合元件（800G/1.6T）」）",
    "status": "reported",
    "sources": [
     "2026-09-29-元富投顧-GIS-KY公司拜訪快報.md"
    ]
   }
  ],
  "mentions": []
 },
 {
  "file": "NVIDIA",
  "notes": false,
  "cites": {
   "2026-05-31-NVIDIA-Vera-Rubin-Full-Production-Press-Release.md": 11,
   "2025-03-27-NVIDIA-Silicon-Photonics-Network-Switching-Technical-Blog.md": 10,
   "2025-06-03-Yole-Co-packaged-Optics-for-Data-Centers-2025.md": 1,
   "2026-09-29-NVIDIA-Silicon-Photonics-Product-Page.md": 1,
   "2026-03-02-NVIDIA-Coherent-Strategic-Partnership-Press-Release.md": 1,
   "2025-06-30-Yole-Generative-AI-2025-Computing-and-AI-for-Data-Center.md": 6,
   "2026-03-17-heise-Nvidia-Feynman-Stacked-GPU-Dies.md": 1,
   "2026-07-24-NVIDIA-SK-Group-Strategic-Partnership-Press-Release.md": 2,
   "2025-05-20-Yole-High-End-Performance-Packaging-2025.md": 1,
   "2026-09-30-Micron-FQ4-2026-Prepared-Remarks.md": 1,
   "2026-03-16-Micron-HBM4-High-Volume-Production-Press-Release.md": 1,
   "2026-06-05-Investing-Nvidia-Certifies-Vera-Rubin-HBM4-Suppliers.md": 1
  },
  "name": "NVIDIA",
  "aliases": [
   "輝達",
   "NVDA",
   "英偉達"
  ],
  "listing": [
   {
    "market": "us",
    "ticker": "NVDA"
   }
  ],
  "summary": "AI 運算晶片與系統公司；本站追蹤它的 CPO 交換器（Quantum-X、Spectrum-X Photonics）、外部光源架構，以及資料中心 GPU。",
  "roles": [
   {
    "section": "d3-optics",
    "role": "system",
    "offering": "CPO 交換器（Quantum-X InfiniBand/Spectrum-X Ethernet Photonics）",
    "tags": [
     "200G SerDes",
     "前面板可插拔 ELS"
    ],
    "evidence": [
     {
      "status": "shipping",
      "claim": "公司稱 Spectrum-X Ethernet Photonics 是首款 200Gb/s SerDes 的 CPO 交換器，已在量產；首批採用者包括 CoreWeave、Lambda、Oracle Cloud Infrastructure",
      "scope": "公司說法；沒有出貨量",
      "source": "2026-05-31-NVIDIA-Vera-Rubin-Full-Production-Press-Release.md",
      "date": "2026-05-31",
      "nature": "vendor",
      "relay": "",
      "sort": "2026-05-31",
      "key": true
     },
     {
      "status": "demo",
      "claim": "GTC 2025 發表矽光子交換器；雷射放在前面板可插拔的 ELS（OSFP 外型）模組，方便診斷與更換",
      "scope": "架構說明，不代表出貨時程",
      "source": "2025-03-27-NVIDIA-Silicon-Photonics-Network-Switching-Technical-Blog.md",
      "date": "2025-03-27",
      "nature": "vendor",
      "relay": "",
      "sort": "2025-03-27"
     },
     {
      "status": "capability",
      "claim": "Yole 推算 Quantum-X800 Q3450-LD 用 4 顆 28.8T 交換晶片、24 個 4.8T 光學引擎、18 個 ELS 模組（共 144 顆雷射晶粒）；Spectrum-X SN6810 用 32 個 ELS、SN6800 用 64 個",
      "scope": "Yole 依公開資料與其假設的系統配置推算，NVIDIA 沒有公布 ELS 與雷射數量；報告未說明是否含備援 ELS；不含出貨量",
      "source": "2025-06-03-Yole-Co-packaged-Optics-for-Data-Centers-2025.md",
      "date": "2025 版・發布日期未確認",
      "nature": "industry",
      "relay": "",
      "sort": "2025-06-03",
      "ref": [
       "Y47",
       "Y48"
      ]
     }
    ],
    "state": {
     "summary": "公司稱 Spectrum-X Ethernet Photonics 已在量產",
     "mark": "said",
     "as_of": "2026-05-31"
    },
    "progress": [
     {
      "step": "發表",
      "when": "2025-03",
      "mark": "said",
      "lapsed": ""
     },
     {
      "step": "進入量產",
      "when": "2026-05",
      "mark": "said",
      "lapsed": ""
     },
     {
      "step": "上市出貨",
      "when": "預計 2026 下半年",
      "mark": "plan",
      "lapsed": ""
     }
    ],
    "verify": [
     "CPO 交換器的實際出貨量與占網路業務比重",
     "各 ELS 供應商（Lumentum、Sumitomo、Coherent）的份額",
     "每台 CPO 交換器實際用幾個 ELS、幾顆雷射（本站來源只有 Yole 推算 Quantum-X 18 個/144 顆）",
     "「已在量產」與「2026 下半年上市」之間的時間差"
    ]
   },
   {
    "section": "d1-chip",
    "role": "chip",
    "offering": "資料中心 GPU 與機櫃級系統（Hopper、Blackwell、Vera Rubin）",
    "tags": [
     "台積電 4/3 奈米",
     "chiplet"
    ],
    "evidence": [
     {
      "status": "shipping",
      "claim": "公司稱 Vera Rubin 平台正進入全面量產，台灣與全球伺服器廠正大規模製造 Vera Rubin 系統；量產出貨「今年秋天」（2026 年）開始",
      "scope": "公司說法；沒有出貨量，也沒有說各供應商",
      "source": "2026-05-31-NVIDIA-Vera-Rubin-Full-Production-Press-Release.md",
      "date": "2026-05-31",
      "nature": "vendor",
      "relay": "",
      "sort": "2026-05-31",
      "ref": [
       "VR5",
       "VR4",
       "VR7"
      ],
      "key": true
     },
     {
      "status": "shipping",
      "claim": "Yole 估 2024 年資料中心 GPU 營收 1,012 億美元，NVIDIA 占 94%；NVIDIA 旗艦 GPU 2024 年約 420 萬顆",
      "scope": "研究機構估計，NVIDIA 未揭露各產品出貨量；Yole 自己認為 GPU 營收的高成長長期不可持續",
      "source": "2025-06-30-Yole-Generative-AI-2025-Computing-and-AI-for-Data-Center.md",
      "date": "2025 版・發布日期未確認",
      "nature": "industry",
      "relay": "",
      "sort": "2025-06-30",
      "ref": [
       "GA2",
       "GA5",
       "GA10"
      ]
     }
    ],
    "state": {
     "summary": "公司 2026 年 5 月稱 Vera Rubin 平台正進入全面量產、量產出貨 2026 年秋天開始",
     "mark": "said",
     "as_of": "2026-05-31"
    },
    "progress": [
     {
      "step": "發表 Rubin",
      "when": "2025-03",
      "mark": "reported",
      "lapsed": ""
     },
     {
      "step": "全面量產",
      "when": "2026-05",
      "mark": "said",
      "lapsed": ""
     },
     {
      "step": "量產出貨",
      "when": "預計 2026 年秋天",
      "mark": "plan",
      "lapsed": ""
     },
     {
      "step": "Rubin Ultra",
      "when": "預計 2027 下半年",
      "mark": "plan",
      "lapsed": ""
     },
     {
      "step": "Feynman",
      "when": "預計 2028",
      "mark": "plan",
      "lapsed": ""
     }
    ],
    "verify": [
     "Rubin 的實際出貨量與時程（「全面量產」與「秋天量產出貨」之間的差距）",
     "雲端業者自研 AI ASIC 取代 GPU 的速度（Yole 稱 2024 年約一半伺服器 GPU 營收來自正在自研 ASIC 的雲端業者）",
     "Rubin 用哪一種封裝（NVIDIA 兩份技術文件都沒寫，CoWoS-L、SoIC 都只有媒體說法），以及各家 HBM4 的供應比重（NVIDIA 只具名 SK hynix，沒有揭露比重）",
     "Rubin Ultra 每個封裝幾顆運算晶粒、用什麼封裝（GTC 2025 路線圖是 8 個 chiplet，台灣媒體稱改為雙晶粒；NVIDIA 2026 年的技術文件沒有寫晶粒數與封裝）",
     "Feynman 用的客製 HBM 是否就是 NVHBM、由誰供應與代工（NVIDIA 只說「未來 GPU」「多家記憶體廠」；本站已核對的來源中，記憶體廠只有 Micron 自稱參與）",
     "GPU 何時開始用台積電 SoIC（媒體 2025 年稱 Rubin 就用；NVIDIA 只在 CPO 光學引擎上有台積電 SoIC 的公司說法；Feynman 的堆疊方式沒有說明）"
    ]
   }
  ],
  "relations": [],
  "mentions": [
   {
    "name": "Lumentum",
    "what": "ELS 雷射與子組件（ELS 組裝、光學對準、測試）",
    "sources": [
     "2025-03-27-NVIDIA-Silicon-Photonics-Network-Switching-Technical-Blog.md"
    ]
   },
   {
    "name": "Sumitomo Electric",
    "what": "ELS 雷射與子組件（ELS 組裝、光學對準、測試）",
    "sources": [
     "2025-03-27-NVIDIA-Silicon-Photonics-Network-Switching-Technical-Blog.md"
    ]
   },
   {
    "name": "Foxconn",
    "what": "系統層級 CPO 組裝與測試、整合進交換器機箱",
    "sources": [
     "2025-03-27-NVIDIA-Silicon-Photonics-Network-Switching-Technical-Blog.md"
    ]
   },
   {
    "name": "Fabrinet",
    "what": "系統層級 CPO 組裝與測試、整合進交換器機箱",
    "sources": [
     "2025-03-27-NVIDIA-Silicon-Photonics-Network-Switching-Technical-Blog.md"
    ]
   },
   {
    "name": "SK hynix",
    "what": "Vera Rubin 用 HBM4（SK Telecom 部署）；長期 AI 記憶體供應與共同開發",
    "sources": [
     "2026-07-24-NVIDIA-SK-Group-Strategic-Partnership-Press-Release.md"
    ]
   },
   {
    "name": "Micron",
    "what": "自稱 HBM4 為 Vera Rubin 設計、與 NVIDIA 合作 NVHBM（Micron 說法，NVIDIA 未點名）",
    "sources": [
     "2026-09-30-Micron-FQ4-2026-Prepared-Remarks.md",
     "2026-03-16-Micron-HBM4-High-Volume-Production-Press-Release.md"
    ]
   },
   {
    "name": "Samsung",
    "what": "HBM4 通過 Vera Rubin 認證（執行長口頭說法經媒體轉述）",
    "sources": [
     "2026-06-05-Investing-Nvidia-Certifies-Vera-Rubin-HBM4-Suppliers.md"
    ]
   },
   {
    "name": "Browave、Corning、Senko、TFC",
    "what": "光連接器與光纖組件（以保偏光纖連接 ELS 與矽光子引擎）",
    "sources": [
     "2025-03-27-NVIDIA-Silicon-Photonics-Network-Switching-Technical-Blog.md"
    ]
   }
  ]
 },
 {
  "file": "世芯-KY",
  "notes": true,
  "cites": {
   "2026-08-14-世芯-2026Q2法人說明會簡報.md": 5,
   "2026-09-14-世芯-AI-Infra-Summit-2026新聞稿.md": 2,
   "2025-06-30-Yole-Generative-AI-2025-Computing-and-AI-for-Data-Center.md": 5,
   "2026-05-27-世芯-2026Q1財報新聞稿.md": 1
  },
  "name": "世芯-KY",
  "aliases": [
   "世芯",
   "Alchip",
   "Alchip Technologies",
   "3661"
  ],
  "listing": [
   {
    "market": "tw",
    "ticker": "3661"
   }
  ],
  "summary": "ASIC 設計服務公司；本站追蹤它替雲端業者與晶片公司設計與量產 AI 加速器的角色。",
  "roles": [
   {
    "section": "d1-chip",
    "role": "chip",
    "offering": "AI 加速器的設計與量產服務（台積電先進製程與 CoWoS）",
    "tags": [
     "北美 CSP 3 奈米加速器",
     "CoWoS-S／R 量產"
    ],
    "evidence": [
     {
      "status": "shipping",
      "claim": "世芯稱最重要的量產項目是 N3 加速器，2026 年 5 月開始出貨給北美 CSP 客戶，3Q26 持續放量；2Q26 營收季增 82.6%",
      "scope": "公司說法與已實現營收；客戶不具名",
      "source": "2026-08-14-世芯-2026Q2法人說明會簡報.md",
      "date": "2026-08-14",
      "nature": "vendor",
      "relay": "",
      "sort": "2026-08-14",
      "ref": [
       "AS1",
       "AS2"
      ],
      "key": true
     },
     {
      "status": "shipping",
      "claim": "世芯稱台積電 CoWoS-S 與 CoWoS-R 設計量產中，CoWoS-L 與 SoIC-X 設計開發中；超過 20 個 CoWoS 設計",
      "scope": "公司說法；不具名客戶與產品",
      "source": "2026-09-14-世芯-AI-Infra-Summit-2026新聞稿.md",
      "date": "2026-09-14",
      "nature": "vendor",
      "relay": "",
      "sort": "2026-09-14",
      "ref": [
       "AX2",
       "AX3"
      ]
     },
     {
      "status": "customer",
      "claim": "Yole 的 AI ASIC 設計夥伴表：世芯協同設計 AWS Inferentia1、Inferentia2 與 Trainium1，Trainium2 改由 Marvell；Tesla Dojo 與 Intel Gaudi 3 也由世芯協同設計；都在台積電製造",
      "scope": "Yole 整理，標明部分為估計或非官方來源；世芯與客戶的官方來源都沒有寫（2026-10-06 查證）",
      "source": "2025-06-30-Yole-Generative-AI-2025-Computing-and-AI-for-Data-Center.md",
      "date": "2025 版・發布日期未確認",
      "nature": "industry",
      "relay": "",
      "sort": "2025-06-30",
      "ref": [
       "GA11"
      ]
     },
     {
      "status": "capability",
      "claim": "Yole 稱 Intel Gaudi 3 由世芯協同設計、台積電 5 奈米，並稱 Intel 預期 Gaudi 3 是最後一代",
      "scope": "研究機構轉述；不代表出貨規模",
      "source": "2025-06-30-Yole-Generative-AI-2025-Computing-and-AI-for-Data-Center.md",
      "date": "2025 版・發布日期未確認",
      "nature": "industry",
      "relay": "",
      "sort": "2025-06-30",
      "ref": [
       "GA14"
      ]
     }
    ],
    "state": {
     "summary": "2026 年 5 月起量產出貨 3 奈米 AI 加速器給一家北美雲端業者，2Q26 營收季增 83%，第三季持續放量",
     "mark": "said",
     "as_of": "2026-08-26"
    },
    "progress": [
     {
      "step": "3 奈米 AI 加速器開始量產出貨給北美 CSP",
      "when": "2026-05",
      "mark": "said",
      "lapsed": ""
     },
     {
      "step": "2 奈米加速器 tape-out",
      "when": "2026 年底",
      "mark": "plan",
      "lapsed": ""
     }
    ],
    "verify": [
     "北美 CSP 客戶是誰（世芯不具名；Yole 的 AWS、Tesla、Intel 名單本站 2026-10-06 查證沒有官方來源確認）",
     "NRE 與量產營收的金額（公司只說量產比重上升）",
     "Intel Gaudi 3 之後的合作（Yole 稱 Intel 預期 Gaudi 3 是最後一代）"
    ]
   }
  ],
  "relations": [],
  "mentions": [
   {
    "name": "AWS",
    "what": "Inferentia1／2、Trainium1 的設計夥伴；Trainium2 改由 Marvell（Yole 整理；官方未確認）",
    "sources": [
     "2025-06-30-Yole-Generative-AI-2025-Computing-and-AI-for-Data-Center.md"
    ]
   },
   {
    "name": "Tesla",
    "what": "Dojo 的設計夥伴（Yole 整理；官方未確認）",
    "sources": [
     "2025-06-30-Yole-Generative-AI-2025-Computing-and-AI-for-Data-Center.md"
    ]
   },
   {
    "name": "Intel",
    "what": "Gaudi 3 的設計夥伴（Yole 整理；官方未確認）",
    "sources": [
     "2025-06-30-Yole-Generative-AI-2025-Computing-and-AI-for-Data-Center.md"
    ]
   }
  ]
 },
 {
  "file": "光寶",
  "notes": false,
  "cites": {
   "2026-07-31-光寶-2026Q2法人說明會簡報.md": 7,
   "2026-09-09-光寶-券商第三季投資論壇逐字稿.md": 7,
   "2026-07-31-光寶-2026Q2法人說明會逐字稿.md": 8,
   "2025-10-15-光寶-OCP2025-800VDC電源架展示新聞稿.md": 2,
   "2025-05-23-Yole-Power-Electronics-for-Data-Centers-2025.md": 2,
   "2025-05-20-NVIDIA-800VDC-Architecture-Technical-Blog.md": 1,
   "2025-10-13-NVIDIA-OCP-Vera-Rubin-800VDC-Partners-Blog.md": 1
  },
  "name": "光寶",
  "aliases": [
   "光寶科",
   "Lite-On",
   "Liteon",
   "LITEON",
   "2301"
  ],
  "listing": [
   {
    "market": "tw",
    "ticker": "2301"
   }
  ],
  "summary": "光電與電源零組件公司；本站追蹤它的資料中心電源供應器（PSU）、AI 機櫃電源架與備援電池模組（BBU），以及透過投資 DenseLight 切入的雷射光源。",
  "roles": [
   {
    "section": "d4-rack",
    "role": "system",
    "offering": "資料中心電源供應器與 AI 機櫃電源架（PSU、Power Shelf、BBU）",
    "tags": [
     "110kW Power Shelf",
     "8.5kW PSU 與 BBU",
     "800 VDC 電源架"
    ],
    "evidence": [
     {
      "status": "revenue",
      "claim": "光寶 2Q26 雲端及物聯網部門營收 289 億元、占 55%，營業利益 69 億元；第二季 AI 營收占比已逾 25%",
      "scope": "部門數字是公司揭露；部門包含資料中心以外的物聯網與網通，AI 占比是口頭說法",
      "source": "2026-07-31-光寶-2026Q2法人說明會簡報.md",
      "date": "2026-07-31",
      "nature": "vendor",
      "relay": "",
      "sort": "2026-07-31",
      "ref": [
       "LS2",
       "LS3"
      ],
      "key": true
     },
     {
      "status": "shipping",
      "claim": "光寶 IR 稱 110kW Power Shelf 第三季已量產出貨、主要給 Vera Rubin 客戶群；8.5kW PSU 與 BBU 上半年已開始出貨給 ASIC 客戶；2025 下半年新增 Oracle 為第三家美系 CSP 客戶",
      "scope": "IR 在券商論壇的口頭說法（轉寫稿）；NVIDIA 與客戶都沒有確認",
      "source": "2026-09-09-光寶-券商第三季投資論壇逐字稿.md",
      "date": "2026-09-09",
      "nature": "vendor",
      "relay": "",
      "sort": "2026-09-09",
      "ref": [
       "LF2",
       "LF3",
       "LF5"
      ]
     },
     {
      "status": "shipping",
      "claim": "總經理稱另外兩家 CSP 已有產品正式交貨，主要是電源與機櫃，量還不大",
      "scope": "管理層口頭說法（轉寫稿）；沒有點名",
      "source": "2026-07-31-光寶-2026Q2法人說明會逐字稿.md",
      "date": "2026-07-31",
      "nature": "vendor",
      "relay": "",
      "sort": "2026-07-31",
      "ref": [
       "LT2"
      ]
     },
     {
      "status": "demo",
      "claim": "光寶在 OCP 2025 展示 NVIDIA 平台用的高效率電源系統：800 VDC Power Rack、BBU、Capacitor Shelf 與 Power Shelf",
      "scope": "公司說法；展示階段，沒有規格與出貨",
      "source": "2025-10-15-光寶-OCP2025-800VDC電源架展示新聞稿.md",
      "date": "2025-10-15",
      "nature": "vendor",
      "relay": "",
      "sort": "2025-10-15",
      "ref": [
       "LO1",
       "LO2"
      ]
     },
     {
      "status": "shipping",
      "claim": "Yole 估 2025 年資料中心 PSU 市占：台達 24%、光寶 15%、華為 11%；Yole 把光寶列為台灣的主要 PSU 廠之一",
      "scope": "研究機構以公司總營收乘上估計的 PSU 比重推算，不是公司揭露",
      "source": "2025-05-23-Yole-Power-Electronics-for-Data-Centers-2025.md",
      "date": "2025 版・發布日期未確認",
      "nature": "industry",
      "relay": "",
      "sort": "2025-05-23",
      "ref": [
       "PE7",
       "PE8"
      ]
     }
    ],
    "state": {
     "summary": "2Q26 雲端及物聯網部門營收 289 億元、占 55%；IR 稱 110kW Power Shelf 第三季已量產出貨給 Vera Rubin 客戶群，8.5kW PSU 與 BBU 上半年已開始出貨給 ASIC 客戶",
     "mark": "said",
     "as_of": "2026-09-09"
    },
    "progress": [
     {
      "step": "OCP 2025 展示 800 VDC Power Rack、BBU、Power Shelf",
      "when": "2025-10",
      "mark": "said",
      "lapsed": ""
     },
     {
      "step": "另外兩家 CSP 開始交貨電源與機櫃",
      "when": "2026 年 7 月前",
      "mark": "said",
      "lapsed": ""
     },
     {
      "step": "8.5kW PSU 與 BBU 量產、110kW Power Shelf 出貨",
      "when": "2026 第三季",
      "mark": "plan",
      "lapsed": ""
     },
     {
      "step": "800 VDC Power Rack 少量量產",
      "when": "2026-11",
      "mark": "plan",
      "lapsed": ""
     },
     {
      "step": "800 VDC Power Rack 較大量量產",
      "when": "2027 第一季",
      "mark": "plan",
      "lapsed": ""
     }
    ],
    "verify": [
     "110kW Power Shelf 第三季量產出貨與 Vera Rubin 客戶群（目前只有 IR 在券商論壇的口頭說法）",
     "800 VDC Power Rack 的送樣時間：7/31 稱 8 月 sample run，9/9 稱接下來幾個月送樣，兩者是否同一階段",
     "第一、二大 CSP 與「另外兩家 CSP」是誰（公司只點名 Oracle）"
    ]
   }
  ],
  "relations": [
   {
    "type": "collab",
    "with": "NVIDIA",
    "what": "NVIDIA 800 VDC 供電架構的電源系統元件合作夥伴（NVIDIA 列名；沒有說供應哪一項產品或哪一代平台）；光寶自稱 2017 年起與 NVIDIA 合作",
    "status": "confirmed",
    "sources": [
     "2025-05-20-NVIDIA-800VDC-Architecture-Technical-Blog.md",
     "2025-10-13-NVIDIA-OCP-Vera-Rubin-800VDC-Partners-Blog.md",
     "2026-09-09-光寶-券商第三季投資論壇逐字稿.md"
    ]
   }
  ],
  "mentions": [
   {
    "name": "Oracle",
    "what": "2025 下半年起成為光寶第三家美系 CSP 客戶（光寶 IR 說法）",
    "sources": [
     "2026-09-09-光寶-券商第三季投資論壇逐字稿.md"
    ]
   },
   {
    "name": "DenseLight",
    "what": "新加坡 InP 光通訊元件 IDM，光寶持股約 21.22%；CW DFB 雷射與 ELS",
    "sources": [
     "2026-07-31-光寶-2026Q2法人說明會簡報.md"
    ]
   }
  ]
 },
 {
  "file": "創意",
  "notes": false,
  "cites": {
   "2026-07-30-創意-2Q26財報管理報告.md": 5,
   "2025-06-30-Yole-Generative-AI-2025-Computing-and-AI-for-Data-Center.md": 2,
   "2026-04-23-創意-3奈米HBM4-IP新聞稿.md": 3,
   "2026-09-22-創意-2奈米HBM4E-IP新聞稿.md": 2,
   "2025-04-01-Yole-Next-Generation-DRAM-2025.md": 1
  },
  "name": "創意",
  "aliases": [
   "創意電子",
   "GUC",
   "Global Unichip",
   "3443"
  ],
  "listing": [
   {
    "market": "tw",
    "ticker": "3443"
   }
  ],
  "summary": "ASIC 設計服務公司；本站追蹤它替雲端客戶設計與量產 AI 加速器與 CPU，以及 HBM IP。",
  "roles": [
   {
    "section": "d1-chip",
    "role": "chip",
    "offering": "雲端 AI 加速器與 CPU 的設計與量產服務（台積電代工）",
    "tags": [
     "雲端類占營收 79%",
     "3 奈米以下量產"
    ],
    "evidence": [
     {
      "status": "revenue",
      "claim": "創意 2Q26 雲端類占營收 79%，2026 年此類營收主要來自 CPU、AI 加速器與 BMC 專案；量產營收 115.86 億元，3 奈米以下占量產營收 59%",
      "scope": "公司揭露的已實現比重；不具名客戶，也沒有拆分 AI 加速器與 CPU",
      "source": "2026-07-30-創意-2Q26財報管理報告.md",
      "date": "2026-07-30",
      "nature": "vendor",
      "relay": "",
      "sort": "2026-07-30",
      "ref": [
       "GQ1",
       "GQ2",
       "GQ3"
      ],
      "key": true
     },
     {
      "status": "customer",
      "claim": "Yole 的 AI ASIC 設計夥伴表：Microsoft MAIA 100（台積電 5 奈米）與 Cobalt 100 CPU 由創意協同設計",
      "scope": "Yole 整理，標明部分為估計或非官方來源；創意與 Microsoft 的官方來源都沒有寫（2026-10-06 查證）",
      "source": "2025-06-30-Yole-Generative-AI-2025-Computing-and-AI-for-Data-Center.md",
      "date": "2025 版・發布日期未確認",
      "nature": "industry",
      "relay": "",
      "sort": "2025-06-30",
      "ref": [
       "GA11"
      ]
     }
    ],
    "state": {
     "summary": "2Q26 雲端類占營收 79%，主要來自 CPU、AI 加速器與 BMC 專案；量產（turnkey）營收 115.9 億元，占八成以上",
     "mark": "fact",
     "as_of": "2026-07-30"
    },
    "progress": [],
    "verify": [
     "雲端客戶是誰（創意不具名；Yole 稱是 Microsoft MAIA 100 與 Cobalt 100 的設計夥伴，本站 2026-10-06 查證創意與 Microsoft 官方來源都沒有寫）",
     "雲端類 79% 裡 AI 加速器與 CPU 各占多少（財報只合併揭露）",
     "毛利率因產品組合下滑（2Q26 21.5%），量產比重提高後的獲利結構"
    ]
   },
   {
    "section": "d2-hbm",
    "role": "chip",
    "offering": "HBM PHY 與 controller IP（客戶 AI ASIC 用）",
    "tags": [
     "HBM3E 已量產",
     "HBM4E 已被採用"
    ],
    "evidence": [
     {
      "status": "shipping",
      "claim": "創意稱上一代 HBM3E PHY 與 controller 已用在客戶的 3 奈米產品，量產中速度高於規格 15%",
      "scope": "公司說法；不具名客戶與產品",
      "source": "2026-04-23-創意-3奈米HBM4-IP新聞稿.md",
      "date": "2026-04-23",
      "nature": "vendor",
      "relay": "",
      "sort": "2026-04-23",
      "ref": [
       "GB2"
      ],
      "key": true
     },
     {
      "status": "customer",
      "claim": "創意稱 HBM4E PHY 與 controller IP 已被客戶的 AI ASIC 採用，在台積電 N2P 與 CoWoS-L 上完成 tape-out",
      "scope": "公司說法；採用與 tape-out 都不是量產",
      "source": "2026-09-22-創意-2奈米HBM4E-IP新聞稿.md",
      "date": "2026-09-22",
      "nature": "vendor",
      "relay": "",
      "sort": "2026-09-22",
      "ref": [
       "GH1",
       "GH2"
      ]
     },
     {
      "status": "capability",
      "claim": "Yole 的 HBM 供應鏈圖把創意列在 HBM IP 名單",
      "scope": "研究機構列名，沒有說是哪一種 IP、客戶或營收",
      "source": "2025-04-01-Yole-Next-Generation-DRAM-2025.md",
      "date": "2025 版・發布日期未確認",
      "nature": "industry",
      "relay": "",
      "sort": "2025-04-01",
      "ref": [
       "DR22"
      ]
     }
    ],
    "state": {
     "summary": "HBM3E IP 已用在客戶的 3 奈米量產產品；2 奈米 HBM4E IP 已被客戶 AI ASIC 採用並完成 tape-out",
     "mark": "said",
     "as_of": "2026-09-22"
    },
    "progress": [
     {
      "step": "HBM3E IP 用在客戶 3 奈米量產產品",
      "when": "2026 年 4 月前",
      "mark": "said",
      "lapsed": ""
     },
     {
      "step": "3 奈米 HBM4 IP 展示",
      "when": "2026-04",
      "mark": "said",
      "lapsed": ""
     },
     {
      "step": "2 奈米 HBM4E IP 被客戶 AI ASIC 採用、完成 tape-out",
      "when": "2026-09",
      "mark": "said",
      "lapsed": ""
     }
    ],
    "verify": [
     "採用 HBM4E IP 的客戶與量產時間",
     "HBM IP 的營收（財報沒有單獨揭露）"
    ]
   }
  ],
  "relations": [],
  "mentions": [
   {
    "name": "Microsoft",
    "what": "MAIA 100 與 Cobalt 100 的設計夥伴（Yole 整理；創意與 Microsoft 官方未寫）",
    "sources": [
     "2025-06-30-Yole-Generative-AI-2025-Computing-and-AI-for-Data-Center.md"
    ]
   }
  ]
 },
 {
  "file": "台積電",
  "notes": true,
  "cites": {
   "2025-05-20-Yole-High-End-Performance-Packaging-2025.md": 13,
   "2025-07-15-Yole-Status-of-the-Back-End-Equipment-Industry-2025.md": 4,
   "2026-07-16-台積電-2026Q2法人說明會逐字稿摘錄.md": 3,
   "2025-06-30-Yole-Generative-AI-2025-Computing-and-AI-for-Data-Center.md": 1,
   "2025-03-27-NVIDIA-Silicon-Photonics-Network-Switching-Technical-Blog.md": 2,
   "2026-03-13-Yole-Photonics-Packaging-2026.md": 1
  },
  "name": "台積電",
  "aliases": [
   "TSMC",
   "台灣積體電路",
   "2330",
   "TSM"
  ],
  "listing": [
   {
    "market": "tw",
    "ticker": "2330"
   },
   {
    "market": "us",
    "ticker": "TSM"
   }
  ],
  "summary": "晶圓代工；本站追蹤它的先進封裝（CoWoS、SoIC）、AI 加速器的晶圓製造，以及 CPO 光學引擎製程（COUPE）。",
  "roles": [
   {
    "section": "d1-pkg",
    "role": "packaging",
    "offering": "CoWoS 2.5D 封裝（S/R/L）與 SoIC 3D 堆疊",
    "tags": [
     "CoWoS-L 用於 Blackwell",
     "晶圓廠自做 CoW"
    ],
    "evidence": [
     {
      "status": "shipping",
      "claim": "Yole 估 2024 年高階封裝營收台積電 22.05 億美元、市占 28% 居首；矽中介層 95%、超高密度扇出 85%、模封中介層 27%、3D SoC 100%",
      "scope": "研究機構以 ASP 與毛利率假設推算，只算封裝本身，不含載板與測試；不是台積電揭露",
      "source": "2025-05-20-Yole-High-End-Performance-Packaging-2025.md",
      "date": "2025-05",
      "nature": "industry",
      "relay": "",
      "sort": "2025-05",
      "ref": [
       "HP11",
       "HP12"
      ],
      "key": true
     },
     {
      "status": "customer",
      "claim": "Yole 整理的 CoWoS 產品：CoWoS-S 用於 Broadcom、Google TPU、NVIDIA Hopper；CoWoS-R 用於 AWS 自研晶片；NVIDIA Blackwell 是第一個採用 CoWoS-L 的產品",
      "scope": "Yole 整理（部分引用台積電資料），客戶未在本站來源中確認；報告內 CoWoS-L 的量產時間有兩種說法",
      "source": "2025-05-20-Yole-High-End-Performance-Packaging-2025.md",
      "date": "2025-05",
      "nature": "industry",
      "relay": "",
      "sort": "2025-05",
      "ref": [
       "HP16",
       "HP18"
      ]
     }
    ],
    "state": {
     "summary": "Yole 估 2024 年高階封裝營收市占 28%、矽中介層 95%；NVIDIA Blackwell 採用 CoWoS-L",
     "mark": "reported",
     "as_of": "Yole 2025 版報告"
    },
    "progress": [
     {
      "step": "CoWoS-S 量產",
      "when": "2011",
      "mark": "reported",
      "lapsed": ""
     },
     {
      "step": "CoWoS-R 量產",
      "when": "2022–2023",
      "mark": "reported",
      "lapsed": ""
     },
     {
      "step": "CoWoS-L 首用",
      "when": "截至 Yole 2025 版報告",
      "mark": "reported",
      "lapsed": ""
     },
     {
      "step": "擴充 CoWoS 廠",
      "when": "2025",
      "mark": "reported",
      "lapsed": ""
     },
     {
      "step": "法說會稱封裝產能短缺",
      "when": "2026-07",
      "mark": "said",
      "lapsed": ""
     }
    ],
    "verify": [
     "CoWoS 的實際月產能（2026 年兩次法說會都沒有公布；媒體數字不採用），以及 CoWoS-S 轉 CoWoS-L 的比重",
     "NVIDIA Rubin 用哪一種 CoWoS、占多少產能（台積電不談個別客戶，NVIDIA 公開文件沒有寫）",
     "HBM4E 基底晶粒由台積電代工到什麼程度（SK hynix 官方只確認到 HBM4；Micron 執行長稱 HBM4E 與台積電合作製造，依第三方逐字稿；Samsung 用自家晶圓代工）",
     "外包給封測廠（矽品、日月光、Amkor）的 CoWoS 後段比例",
     "Yole 的市占是用 ASP 與毛利率假設推算，不是公司揭露"
    ]
   },
   {
    "section": "d1-chip",
    "role": "foundry",
    "offering": "AI 加速器晶圓代工（4、3 奈米）",
    "tags": [
     "GPU 與 AI ASIC"
    ],
    "evidence": [
     {
      "status": "shipping",
      "claim": "Yole 整理的 AI ASIC 設計夥伴表中，Google TPU、AWS Inferentia/Trainium、Microsoft MAIA 100、Meta MTIA、Tesla Dojo、Intel Gaudi 3 等都在台積電 7/5/3 奈米製造；NVIDIA Blackwell 用台積電 4 奈米、Rubin 與 Rubin Ultra 用 3 奈米",
      "scope": "Yole 整理，部分為估計或非官方來源；不含各客戶的晶圓量",
      "source": "2025-06-30-Yole-Generative-AI-2025-Computing-and-AI-for-Data-Center.md",
      "date": "2025 版・發布日期未確認",
      "nature": "industry",
      "relay": "",
      "sort": "2025-06-30",
      "ref": [
       "GA11",
       "GA13"
      ],
      "key": true
     }
    ],
    "state": {
     "summary": "Yole 整理的主要 AI ASIC 都在台積電製造；NVIDIA Blackwell 用 4 奈米、Rubin 用 3 奈米",
     "mark": "reported",
     "as_of": "Yole 2025 版報告"
    },
    "progress": [],
    "verify": [
     "各 AI 加速器客戶的晶圓量與營收占比",
     "台積電替記憶體廠做 HBM 基底晶粒的節點與比重（HBM4：SK hynix 官方確認用台積電但沒寫節點；Micron 執行長稱用自家基底晶粒，依第三方逐字稿。HBM4E 起 Micron 稱與台積電合作）"
    ]
   },
   {
    "section": "d3-photonics",
    "role": "foundry",
    "offering": "COUPE 矽光子引擎製程（EIC 疊在 PIC 上）",
    "tags": [
     "NVIDIA CPO 交換器"
    ],
    "evidence": [
     {
      "status": "demo",
      "claim": "NVIDIA 技術部落格在「合作與突破」段列出生態系夥伴分工：台積電的 COUPE 製程以 3D 晶片對晶圓與晶片堆疊技術整合 EIC 與 PIC",
      "scope": "隨 GTC 2025 發表的夥伴分工說明；是合作關係，不代表供貨規模與量產階段",
      "source": "2025-03-27-NVIDIA-Silicon-Photonics-Network-Switching-Technical-Blog.md",
      "date": "2025-03-27",
      "nature": "vendor",
      "relay": "",
      "sort": "2025-03-27",
      "ref": [
       "NB7"
      ],
      "key": true
     },
     {
      "status": "shipping",
      "claim": "Yole 估台積電 COUPE（CoWoS 加 SoIC）平台在 2026 年就緒，處於首批產品與試產；NVIDIA Quantum-X 的光學引擎用 COUPE 疊合",
      "scope": "研究機構的成熟度判斷，不是出貨數字",
      "source": "2026-03-13-Yole-Photonics-Packaging-2026.md",
      "date": "2026-04",
      "nature": "industry",
      "relay": "",
      "sort": "2026-04",
      "ref": [
       "PP17",
       "PP18"
      ]
     }
    ],
    "state": {
     "summary": "NVIDIA 把台積電列為 CPO 開發的生態系合作夥伴，說明 COUPE 製程整合 EIC 與 PIC；Yole 估 COUPE 平台在 2026 版報告時處於首批產品與試產",
     "mark": "said",
     "as_of": "2026-05-31"
    },
    "progress": [],
    "verify": []
   }
  ],
  "relations": [
   {
    "type": "collab",
    "with": "NVIDIA",
    "what": "NVIDIA 列為 CPO 開發的生態系夥伴，以 COUPE 製程整合 EIC 與 PIC（2025 年 3 月；未說供貨階段與規模）",
    "status": "confirmed",
    "sources": [
     "2025-03-27-NVIDIA-Silicon-Photonics-Network-Switching-Technical-Blog.md"
    ]
   },
   {
    "type": "adopt",
    "with": "NVIDIA",
    "what": "Yole 稱 Blackwell 是第一個採用 CoWoS-L 的產品、Hopper 用 CoWoS-S（研究機構整理，雙方未在本站來源中確認）",
    "status": "reported",
    "sources": [
     "2025-05-20-Yole-High-End-Performance-Packaging-2025.md"
    ]
   }
  ],
  "mentions": []
 },
 {
  "file": "台達",
  "notes": false,
  "cites": {
   "2026-07-30-台達-2026Q2法人說明會逐字稿.md": 3,
   "2026-04-台達-GTC2026-800VDC方案展示.md": 3,
   "2025-05-23-Yole-Power-Electronics-for-Data-Centers-2025.md": 4,
   "2025-05-20-NVIDIA-800VDC-Architecture-Technical-Blog.md": 2,
   "2026-07-30-台達-2026Q2法人說明會簡報.md": 1,
   "2025-10-13-NVIDIA-OCP-Vera-Rubin-800VDC-Partners-Blog.md": 1
  },
  "name": "台達",
  "aliases": [
   "台達電",
   "Delta",
   "Delta Electronics",
   "2308"
  ],
  "listing": [
   {
    "market": "tw",
    "ticker": "2308"
   }
  ],
  "summary": "電源與電子零組件公司；本站追蹤它的資料中心電源供應器（PSU）、AI 機櫃電源與 800 VDC 供電方案。",
  "roles": [
   {
    "section": "d4-rack",
    "role": "system",
    "offering": "資料中心電源供應器與 AI 機櫃電源（含 800 VDC 電源機櫃）",
    "tags": [
     "HVDC ±400V／800V",
     "AI 產品逾營收 25%"
    ],
    "evidence": [
     {
      "status": "revenue",
      "claim": "台達稱 2026 上半年資料中心相關業務占合併營收過半，AI 相關產品今年一定超過營收 25%",
      "scope": "管理層口頭說法（公司英譯稿，以中文原話為準）；沒有拆分金額與客戶",
      "source": "2026-07-30-台達-2026Q2法人說明會逐字稿.md",
      "date": "2026-07-30",
      "nature": "vendor",
      "relay": "",
      "sort": "2026-07-30",
      "ref": [
       "DT1",
       "DT4"
      ],
      "key": true
     },
     {
      "status": "demo",
      "claim": "台達在 NVIDIA GTC 2026 展示 800 VDC In-Row 660kW 電源機櫃，每層內建 80kW BBU，AC-DC 效率最高 98%",
      "scope": "公司說法；展示階段，沒有送樣、量產或出貨",
      "source": "2026-04-台達-GTC2026-800VDC方案展示.md",
      "date": "2026-04",
      "nature": "vendor",
      "relay": "",
      "sort": "2026-04",
      "ref": [
       "DG1",
       "DG2"
      ]
     },
     {
      "status": "shipping",
      "claim": "Yole 估 2025 年資料中心 PSU 市占：台達 24%、光寶 15%、華為 11%、Advanced Energy 6%；全市場 75 億美元",
      "scope": "研究機構以公司總營收乘上估計的 PSU 比重推算，不是公司揭露",
      "source": "2025-05-23-Yole-Power-Electronics-for-Data-Centers-2025.md",
      "date": "2025 版・發布日期未確認",
      "nature": "industry",
      "relay": "",
      "sort": "2025-05-23",
      "ref": [
       "PE7"
      ]
     },
     {
      "status": "capability",
      "claim": "Yole 稱台達在 CRPS 外型展示最高的功率密度，並第一個在 OCP 外型達到 80 PLUS Ruby 效率標準；業界回饋稱台達現有產品已用 SiC 與 GaN",
      "scope": "研究機構的評價與業界回饋；沒有說產品出貨量與客戶",
      "source": "2025-05-23-Yole-Power-Electronics-for-Data-Centers-2025.md",
      "date": "2025 版・發布日期未確認",
      "nature": "industry",
      "relay": "",
      "sort": "2025-05-23",
      "ref": [
       "PE9",
       "PE10"
      ]
     }
    ],
    "state": {
     "summary": "2026 上半年資料中心相關業務占合併營收過半；AI 相關產品預期 2026 年超過營收 25%；HVDC 產品預期第三季開始量產",
     "mark": "said",
     "as_of": "2026-07-30"
    },
    "progress": [
     {
      "step": "GTC 2026 展示 800 VDC 660kW 電源機櫃與 BBU",
      "when": "2026-03",
      "mark": "said",
      "lapsed": ""
     },
     {
      "step": "HVDC ±400V 與 800V 產品開始量產",
      "when": "2026 第三季",
      "mark": "plan",
      "lapsed": "原定期間已結束；本站 2026-10-06 查證未找到結果，結果未明，預定 2026-11-30 再查"
     }
    ],
    "verify": [
     "AI 機櫃電源與 800 VDC 產品的營收與客戶（法說會只說資料中心過半、AI 產品逾 25%，客戶只稱 CSP）",
     "是否供應 NVIDIA GB300、Rubin 的電源架（NVIDIA 只把台達列為 800 VDC 電源系統元件夥伴；法說會回答「支援 Rubin 的 110kW PSU」提問時只說有信心居領先地位，沒有確認平台）",
     "SiC、GaN 在台達產品中的實際使用（Yole 引述業界回饋稱已使用；台達只說與供應商密切討論）"
    ]
   }
  ],
  "relations": [
   {
    "type": "collab",
    "with": "NVIDIA",
    "what": "NVIDIA 800 VDC 供電架構的電源系統元件合作夥伴（NVIDIA 列名；沒有說供應哪一項產品或哪一代平台）",
    "status": "confirmed",
    "sources": [
     "2025-05-20-NVIDIA-800VDC-Architecture-Technical-Blog.md",
     "2025-10-13-NVIDIA-OCP-Vera-Rubin-800VDC-Partners-Blog.md"
    ]
   }
  ],
  "mentions": []
 },
 {
  "file": "日月光投控",
  "notes": false,
  "cites": {
   "2025-05-20-Yole-High-End-Performance-Packaging-2025.md": 6,
   "2025-07-15-Yole-Status-of-the-Back-End-Equipment-Industry-2025.md": 2,
   "2026-03-13-Yole-Photonics-Packaging-2026.md": 2,
   "2025-05-23-Yole-Power-Electronics-for-Data-Centers-2025.md": 1
  },
  "name": "日月光投控",
  "aliases": [
   "ASE",
   "日月光",
   "ASEH",
   "ASE Technology Holding",
   "3711"
  ],
  "listing": [
   {
    "market": "tw",
    "ticker": "3711"
   },
   {
    "market": "us",
    "ticker": "ASX"
   }
  ],
  "summary": "封測控股公司，2018 年 4 月 30 日以股份轉換成立，同日取得日月光半導體與矽品全部已發行普通股（20-F）。本檔記研究報告標示為「ASE」的業務：報告沒有說明「ASE」只指日月光半導體或含其他子公司，保留原標示；矽品的業務另記在 矽品.md，兩者的市占不要和集團數字重複計算。",
  "roles": [
   {
    "section": "d1-pkg",
    "role": "packaging",
    "offering": "扇出型封裝（FOCoS、FOCoS-Bridge）與 HBM 上中介層組裝",
    "tags": [
     "封測廠",
     "超高密度扇出"
    ],
    "evidence": [
     {
      "status": "shipping",
      "claim": "Yole 估 2024 年超高密度扇出封裝市占：台積電 85%、「ASE」10%、矽品 2%（Yole 原標示；ASE 與矽品同屬日月光投控，報告分開列）",
      "scope": "研究機構估計，只算封裝本身；不是公司揭露，也沒有客戶名",
      "source": "2025-05-20-Yole-High-End-Performance-Packaging-2025.md",
      "date": "2025-05",
      "nature": "industry",
      "relay": "",
      "sort": "2025-05",
      "ref": [
       "HP12"
      ],
      "key": true
     },
     {
      "status": "capability",
      "claim": "Yole 把 ASE 的 FOCoS 列為 RDL 中介層平台、FOCoS-Bridge 列為模封中介層平台，並列為可做 HBM 上中介層與載板最終封裝的封測廠",
      "scope": "能力與平台分類；沒有說客戶與量",
      "source": "2025-05-20-Yole-High-End-Performance-Packaging-2025.md",
      "date": "2025-05",
      "nature": "industry",
      "relay": "",
      "sort": "2025-05",
      "ref": [
       "HP2",
       "HP29"
      ]
     }
    ],
    "state": {
     "summary": "Yole 估 2024 年標示為「ASE」的超高密度扇出封裝市占 10%；列為可做 HBM 上中介層與載板最終封裝的封測廠",
     "mark": "reported",
     "as_of": "Yole 2025 版報告"
    },
    "progress": [
     {
      "step": "擴充先進封裝廠",
      "when": "2023–2026",
      "mark": "reported",
      "lapsed": ""
     }
    ],
    "verify": [
     "K27、K28 承接的是 CoWoS 哪一段（晶圓、測試或最終組裝），客戶是誰",
     "FOCoS、FOCoS-Bridge 的具名客戶與出貨規模",
     "Yole 標示的「ASE」是只指日月光半導體，還是含投控其他子公司"
    ]
   },
   {
    "section": "d3-photonics",
    "role": "packaging",
    "offering": "CPO 光學引擎封裝（FOCoS/VIPack）",
    "tags": [
     "扇出型",
     "小量生產"
    ],
    "evidence": [
     {
      "status": "shipping",
      "claim": "Yole 稱 ASE 的 FOCoS（VIPack CPO）平台成熟、對特定客戶小量生產；並轉述日月光與矽品進入 Broadcom 的矽光子供應鏈、提供 CPO 後段封裝",
      "scope": "研究機構判斷與新聞轉述；客戶沒有自己確認，也沒有數量",
      "source": "2026-03-13-Yole-Photonics-Packaging-2026.md",
      "date": "2026-04",
      "nature": "industry",
      "relay": "",
      "sort": "2026-04",
      "ref": [
       "PP17",
       "PP21"
      ],
      "key": true
     },
     {
      "status": "capability",
      "claim": "Yole 高階封裝報告稱日月光最先宣布支援 CPO，但當時（2025 年中）認為和運算晶片同封裝的 CPO 短期不會商用",
      "scope": "宣布支援不等於出貨",
      "source": "2025-05-20-Yole-High-End-Performance-Packaging-2025.md",
      "date": "2025-05",
      "nature": "industry",
      "relay": "",
      "sort": "2025-05",
      "ref": [
       "HP26"
      ]
     }
    ],
    "state": {
     "summary": "Yole 稱 ASE 的 FOCoS CPO 平台成熟，2026 年對特定客戶小量生產；並與矽品進入 Broadcom 的 CPO 後段封裝供應鏈",
     "mark": "reported",
     "as_of": "Yole 2026 版報告"
    },
    "progress": [],
    "verify": [
     "CPO 封裝的具名客戶（Broadcom 是否由任一方確認）與出貨量"
    ]
   }
  ],
  "relations": [],
  "mentions": [
   {
    "name": "Broadcom",
    "what": "CPO 後段封裝的客戶（Yole 轉述新聞）",
    "sources": [
     "2026-03-13-Yole-Photonics-Packaging-2026.md"
    ]
   }
  ]
 },
 {
  "file": "矽品",
  "notes": false,
  "cites": {
   "2025-05-20-Yole-High-End-Performance-Packaging-2025.md": 7,
   "2025-07-15-Yole-Status-of-the-Back-End-Equipment-Industry-2025.md": 2,
   "2025-03-27-NVIDIA-Silicon-Photonics-Network-Switching-Technical-Blog.md": 2,
   "2026-03-13-Yole-Photonics-Packaging-2026.md": 1,
   "2021-04-06-日月光投控-2020年度20-F一般資訊附註.md": 1,
   "2026-10-06-日月光投控-投資人關係FAQ頁.md": 1,
   "2026-10-06-日月光投控-官網Milestones頁.md": 1
  },
  "name": "矽品",
  "aliases": [
   "SPIL",
   "矽品精密",
   "Siliconware Precision Industries"
  ],
  "listing": [],
  "summary": "封測公司，2018 年 4 月 30 日起為日月光投控的全資子公司（日月光投控 20-F；集團關係記在 日月光投控.md）；研究報告把矽品與「ASE」分開列市占，不要和集團數字重複計算。本站追蹤它的模封中介層（FOEB）與 NVIDIA CPO 模組封裝。",
  "roles": [
   {
    "section": "d1-pkg",
    "role": "packaging",
    "offering": "模封中介層封裝（FOEB、FO-EB-T）",
    "tags": [
     "內含矽橋",
     "CoWoS 後段"
    ],
    "evidence": [
     {
      "status": "shipping",
      "claim": "Yole 估 2024 年模封中介層市占：矽品 73%、台積電 27%；模封中介層 2021 年由矽品為 AMD MI200 首先量產",
      "scope": "研究機構估計；不是公司揭露，AMD 未在本站來源中確認",
      "source": "2025-05-20-Yole-High-End-Performance-Packaging-2025.md",
      "date": "2025-05",
      "nature": "industry",
      "relay": "",
      "sort": "2025-05",
      "ref": [
       "HP12",
       "HP16"
      ],
      "key": true
     }
    ],
    "state": {
     "summary": "Yole 估 2024 年模封中介層市占 73%；2021 年起為 AMD MI200 量產",
     "mark": "reported",
     "as_of": "Yole 2025 版報告"
    },
    "progress": [
     {
      "step": "模封中介層首例",
      "when": "2021",
      "mark": "reported",
      "lapsed": ""
     },
     {
      "step": "擴充 CoWoS 產能",
      "when": "2025",
      "mark": "reported",
      "lapsed": ""
     }
    ],
    "verify": [
     "模封中介層 73% 是否包含台積電外包給矽品的 CoWoS 後段",
     "二林新產能承接的是 CoWoS 哪一段、何時投產"
    ]
   },
   {
    "section": "d3-photonics",
    "role": "packaging",
    "offering": "CPO 多晶片模組的晶圓凸塊、測試、組裝與測試",
    "tags": [
     "NVIDIA CPO 交換器"
    ],
    "evidence": [
     {
      "status": "demo",
      "claim": "NVIDIA 技術部落格在「合作與突破」段列出生態系夥伴分工：SPIL（矽品）負責 NVIDIA CPO 多晶片模組的晶圓凸塊、晶圓測試、組裝與測試",
      "scope": "隨 GTC 2025 發表的夥伴分工說明；是合作關係，不代表供貨規模與量產階段",
      "source": "2025-03-27-NVIDIA-Silicon-Photonics-Network-Switching-Technical-Blog.md",
      "date": "2025-03-27",
      "nature": "vendor",
      "relay": "",
      "sort": "2025-03-27",
      "ref": [
       "NB8"
      ],
      "key": true
     },
     {
      "status": "capability",
      "claim": "Yole 的 Quantum-X800 分工圖把 3D EIC-on-PIC 疊層列給矽品與台積電；並轉述日月光與矽品進入 Broadcom 的 CPO 後段封裝供應鏈",
      "scope": "Yole 自己把矽品在 NVIDIA 的角色標為推論；Broadcom 是新聞轉述",
      "source": "2026-03-13-Yole-Photonics-Packaging-2026.md",
      "date": "2026-04",
      "nature": "industry",
      "relay": "",
      "sort": "2026-04",
      "ref": [
       "PP19",
       "PP20",
       "PP21"
      ]
     }
    ],
    "state": {
     "summary": "NVIDIA 把矽品列為 CPO 開發的生態系合作夥伴，負責其 CPO 多晶片模組的晶圓凸塊、晶圓測試、組裝與測試；沒有說供貨階段與數量",
     "mark": "said",
     "as_of": "2026-05-31"
    },
    "progress": [],
    "verify": []
   }
  ],
  "relations": [
   {
    "type": "capital",
    "with": "日月光投控",
    "what": "2018 年 4 月 30 日起為日月光投控的全資子公司（股份轉換生效，投控取得矽品與日月光半導體全部已發行普通股）；同年 2 月 12 日兩家股東會通過股份轉換",
    "status": "stated",
    "sources": [
     "2021-04-06-日月光投控-2020年度20-F一般資訊附註.md",
     "2026-10-06-日月光投控-投資人關係FAQ頁.md",
     "2026-10-06-日月光投控-官網Milestones頁.md"
    ]
   },
   {
    "type": "collab",
    "with": "NVIDIA",
    "what": "NVIDIA 列為 CPO 開發的生態系夥伴，負責 CPO 多晶片模組的晶圓凸塊、晶圓測試、組裝與測試（2025 年 3 月；未說供貨階段與規模）",
    "status": "confirmed",
    "sources": [
     "2025-03-27-NVIDIA-Silicon-Photonics-Network-Switching-Technical-Blog.md"
    ]
   }
  ],
  "mentions": [
   {
    "name": "AMD",
    "what": "MI200 是第一個模封中介層產品，由矽品量產（Yole 整理）",
    "sources": [
     "2025-05-20-Yole-High-End-Performance-Packaging-2025.md"
    ]
   }
  ]
 },
 {
  "file": "聯鈞",
  "notes": false,
  "cites": {
   "2026-08-18-聯鈞-2026Q2法人說明會逐字稿.md": 9,
   "2026-08-18-聯鈞-2026Q2法人說明會簡報.md": 7,
   "2026-09-24-福邦投顧-聯鈞個股早報.md": 4,
   "2024-09-30-凱基-聯鈞首評報告.md": 2,
   "2026-08-20-康和投顧-聯鈞投資速報.md": 2
  },
  "name": "聯鈞",
  "aliases": [
   "聯鈞光電",
   "Elite Advanced Laser",
   "eLaser",
   "3450"
  ],
  "listing": [
   {
    "market": "tw",
    "ticker": "3450"
   }
  ],
  "summary": "雷射二極體封測廠，旗下有捷敏-KY 與源傑；本站追蹤它的光通訊雷射 COSA 封裝與 ELSFP 外部光源。",
  "roles": [
   {
    "section": "d3-photonics",
    "role": "packaging",
    "offering": "光通訊雷射 COSA 封裝與測試（EML、CW 雷射）",
    "tags": [
     "CW 雷射 70–400 mW",
     "委外 COSA 封裝"
    ],
    "evidence": [
     {
      "status": "shipping",
      "claim": "總經理稱 2024 年起為 Coherent 做 COSA 並連續兩年獲選最佳供應商；COSA 產能從 2024 年起逐年幾乎翻倍",
      "scope": "公司說法；Coherent 未公開確認；沒有產能絕對數字",
      "source": "2026-08-18-聯鈞-2026Q2法人說明會逐字稿.md",
      "date": "2026-08-18",
      "nature": "vendor",
      "relay": "",
      "sort": "2026-08-18",
      "key": true
     },
     {
      "status": "customer",
      "claim": "簡報展示 Coherent 頒發的 2024、2025 年供應商獎",
      "scope": "由聯鈞展示；沒有說明是哪一類產品",
      "source": "2026-08-18-聯鈞-2026Q2法人說明會簡報.md",
      "date": "2026-08-18",
      "nature": "vendor",
      "relay": "",
      "sort": "2026-08-18"
     },
     {
      "status": "customer",
      "claim": "福邦轉述聯鈞客戶以美系光模組廠為主，Coherent 為其一，近期新增一家日系客戶",
      "scope": "券商轉述",
      "source": "2026-09-24-福邦投顧-聯鈞個股早報.md",
      "date": "2026-09-24",
      "nature": "vendor",
      "relay": "福邦投顧",
      "sort": "2026-09-24"
     },
     {
      "status": "shipping",
      "claim": "凱基稱兩家美系光通訊領導公司 2024 上半年起對聯鈞的雷射封裝需求轉強，COS 月出貨約 70–80 萬顆，既有 TO-CAN 業務逐漸減少",
      "scope": "券商轉述與預期；客戶未具名；當時寫的是 VCSEL 與 EML 封裝，沒有提到 CW 雷射",
      "source": "2024-09-30-凱基-聯鈞首評報告.md",
      "date": "2024-09-30",
      "nature": "vendor",
      "relay": "凱基證券",
      "sort": "2024-09-30",
      "ref": [
       "KG5",
       "KG6"
      ]
     }
    ],
    "state": {
     "summary": "COSA 已量產，公司稱產能逐年近倍增；客戶包括 Coherent",
     "mark": "said",
     "as_of": "2026-08-18"
    },
    "progress": [
     {
      "step": "開始為 Coherent 封裝",
      "when": "2024",
      "mark": "said",
      "lapsed": ""
     },
     {
      "step": "客戶頒獎",
      "when": "2024、2025",
      "mark": "said",
      "lapsed": ""
     },
     {
      "step": "產能倍增",
      "when": "2024–2026",
      "mark": "said",
      "lapsed": ""
     }
    ],
    "verify": [
     "Coherent 是否在自己的文件提到聯鈞或雷射封裝外包",
     "COSA 的絕對產能、各客戶占比",
     "分析師提到「美國光電大廠可能自製 COSA」是哪家、會不會影響外包比重（Yole 光收發器 2026 也說光學次組件越來越由大廠自製、Coherent 擴充 CW 產能供外售與自用）",
     "EML 與 CW 雷射在 COSA 營收中的比重"
    ]
   }
  ],
  "relations": [
   {
    "type": "supply",
    "with": "Coherent",
    "what": "雷射 COSA 封裝與測試（2024 年起；聯鈞展示 Coherent 頒發的 2024、2025 年供應商獎）",
    "status": "stated",
    "sources": [
     "2026-08-18-聯鈞-2026Q2法人說明會逐字稿.md",
     "2026-08-18-聯鈞-2026Q2法人說明會簡報.md",
     "2026-09-24-福邦投顧-聯鈞個股早報.md"
    ]
   }
  ],
  "mentions": [
   {
    "name": "捷敏-KY（6525）",
    "what": "子公司（持股約 51%），功率元件封裝測試",
    "sources": [
     "2026-08-20-康和投顧-聯鈞投資速報.md"
    ]
   },
   {
    "name": "源傑（7917）",
    "what": "子公司（持股約 54%），光收發模組與 AOC 設計，聯鈞負責後段量產",
    "sources": [
     "2026-08-20-康和投顧-聯鈞投資速報.md",
     "2026-09-24-福邦投顧-聯鈞個股早報.md"
    ]
   }
  ]
 }
];
