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
   "2026-03-02-NVIDIA-Coherent-Strategic-Partnership-Press-Release.md": 4,
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
     "ELS／ELSFP",
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
      "key": true
     },
     {
      "status": "shipping",
      "claim": "公司稱高功率 CW DFB 雷射已全面量產，並取得一家 AI 資料中心龍頭客戶的 CPO 多年大量訂單",
      "scope": "公司說法；客戶未具名，沒有數量",
      "source": "2026-03-17-Coherent-OFC-2026-Technology-Innovation-Briefing.md",
      "date": "2026-03-17",
      "nature": "vendor",
      "relay": ""
     },
     {
      "status": "sampling",
      "claim": "400 mW、1311 nm CW 雷射以 chip-on-carrier 形式送樣，預計 2026 第三季量產",
      "scope": "送樣與量產時程是公司說法",
      "source": "2025-09-25-Coherent-400mW-CW-Lasers-Sampling-Press-Release.md",
      "date": "2025-09-25",
      "nature": "vendor",
      "relay": ""
     },
     {
      "status": "demo",
      "claim": "展示 6.4T 矽光子 CPO，搭配自家 ELS 模組與自製 InP CW 雷射；另展示符合 ELSFP、內含八顆 1310 nm 雷射的外部光源模組",
      "scope": "展示，不代表量產",
      "source": "2026-03-17-Coherent-CPO-Technologies-at-OFC-2026-Press-Release.md",
      "date": "2026-03-17",
      "nature": "vendor",
      "relay": ""
     }
    ],
    "state": {
     "summary": "公司稱 CW 雷射已全面量產；NVIDIA 官方點名為 ELS 夥伴",
     "mark": "said",
     "as_of": "2026-03-17"
    },
    "progress": [
     {
      "step": "客戶點名",
      "when": "2025-03",
      "mark": "fact"
     },
     {
      "step": "400 mW 送樣",
      "when": "2025-09",
      "mark": "said"
     },
     {
      "step": "策略合作",
      "when": "2026-03",
      "mark": "fact"
     },
     {
      "step": "CW 雷射量產",
      "when": "2026-03",
      "mark": "said"
     },
     {
      "step": "400 mW 量產",
      "when": "預計 2026 第三季",
      "mark": "plan"
     }
    ],
    "verify": [
     "CPO 大量多年訂單的客戶是否就是 NVIDIA",
     "ELS 內 CW 雷射的後段封裝與測試是否全部自製，有沒有外包",
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
   "2026-06-29-GIS-KY-2026Q1法人說明會簡報.md": 1
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
      "claim": "財務長表示約十億元產線已投入、正在小量測試，順利的話今年底前開始出貨給客戶，希望 Q4 有貢獻，顯著貢獻從 2027 年開始；9 月初董事會另通過約 33 億元封測設備，2027 上半年之後才量產",
      "scope": "只限雷射光源封裝與測試，不代表雷射晶片製造；「年底前出貨」是預計，客戶未具名；公司說下游還沒有直接到 CSP",
      "source": "2026-09-24-GIS-KY-2026Q2法人說明會逐字稿.md",
      "date": "2026-09-24",
      "nature": "vendor",
      "relay": "",
      "key": true
     },
     {
      "status": "customer",
      "claim": "技術長表示主要大客戶的驗證「非常順利」，預期明年（2027）有營收貢獻；財務長稱順利的話明年上半年部分量產",
      "scope": "只限雷射光源封裝與測試；客戶未具名，驗證時數、產能與金額都未揭露",
      "source": "2026-06-29-GIS-KY-2026Q1法人說明會逐字稿.md",
      "date": "2026-06-29",
      "nature": "vendor",
      "relay": ""
     },
     {
      "status": "sampling",
      "claim": "群益轉述：以 800G 以上產品為佈局重心，訂單主要來自國際大廠，現正送樣測試中，預計 2026 年底出貨",
      "scope": "券商轉述公司資訊，不是管理層原話；客戶未具名",
      "source": "2026-09-29-群益投顧-GIS-KY個股報告.md",
      "date": "2026-09-29",
      "nature": "vendor",
      "relay": "群益投顧"
     },
     {
      "status": "customer",
      "claim": "元富稱 GIS 已接到美系 Coherent 的 CPO 光耦合元件（800G／1.6T）大單，光源封裝 2026 年底初步出貨、2027 上半年放量",
      "scope": "券商依公司拜訪寫成，沒有區分公司原話；客戶由券商具名，GIS 與 Coherent 都沒有證實；「光耦合元件」與公司說的「雷射光源封裝」是否同一件事待釐清",
      "source": "2026-09-29-元富投顧-GIS-KY公司拜訪快報.md",
      "date": "2026-09-29",
      "nature": "vendor",
      "relay": "元富投顧"
     },
     {
      "status": "capability",
      "claim": "被問到以 EML 或 CW 為主時，公司表示看客戶需求，目前技術上都可以做",
      "scope": "只是公司自述的技術能力；沒有 EML 的客戶或訂單資訊",
      "source": "2026-09-24-GIS-KY-2026Q2法人說明會逐字稿.md",
      "date": "2026-09-24",
      "nature": "vendor",
      "relay": ""
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
      "mark": "said"
     },
     {
      "step": "小量測試",
      "when": "2026-09",
      "mark": "said"
     },
     {
      "step": "首批出貨",
      "when": "預計 2026 年底前",
      "mark": "plan"
     },
     {
      "step": "擴產設備量產",
      "when": "預計 2027 上半年之後",
      "mark": "plan"
     },
     {
      "step": "顯著營收",
      "when": "預計 2027",
      "mark": "plan"
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
    "what": "CW 雷射光源封裝與測試（元富寫作「CPO 光耦合元件（800G／1.6T）」）",
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
   "2026-05-31-NVIDIA-Vera-Rubin-Full-Production-Press-Release.md": 5,
   "2025-03-27-NVIDIA-Silicon-Photonics-Network-Switching-Technical-Blog.md": 12,
   "2026-09-29-NVIDIA-Silicon-Photonics-Product-Page.md": 1,
   "2026-03-02-NVIDIA-Coherent-Strategic-Partnership-Press-Release.md": 1
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
  "summary": "AI 運算晶片與系統公司；本站追蹤它的 CPO 交換器（Quantum-X、Spectrum-X Photonics）與外部光源架構。",
  "roles": [
   {
    "section": "d3-optics",
    "role": "system",
    "offering": "CPO 交換器（Quantum-X InfiniBand／Spectrum-X Ethernet Photonics）",
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
      "key": true
     },
     {
      "status": "demo",
      "claim": "GTC 2025 發表矽光子交換器；雷射放在前面板可插拔的 ELS（OSFP 外型）模組，方便診斷與更換",
      "scope": "架構說明，不代表出貨時程",
      "source": "2025-03-27-NVIDIA-Silicon-Photonics-Network-Switching-Technical-Blog.md",
      "date": "2025-03-27",
      "nature": "vendor",
      "relay": ""
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
      "mark": "said"
     },
     {
      "step": "進入量產",
      "when": "2026-05",
      "mark": "said"
     },
     {
      "step": "上市出貨",
      "when": "預計 2026 下半年",
      "mark": "plan"
     }
    ],
    "verify": [
     "CPO 交換器的實際出貨量與占網路業務比重",
     "各 ELS 供應商（Lumentum、Sumitomo、Coherent）的份額",
     "「已在量產」與「2026 下半年上市」之間的時間差"
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
    "name": "台積電",
    "what": "COUPE 製程整合 EIC 與 PIC",
    "sources": [
     "2025-03-27-NVIDIA-Silicon-Photonics-Network-Switching-Technical-Blog.md"
    ]
   },
   {
    "name": "SPIL（矽品）",
    "what": "CPO 多晶片模組的晶圓凸塊、晶圓測試、組裝與測試",
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
    "name": "Browave、Corning、Senko、TFC",
    "what": "光連接器與光纖組件（以保偏光纖連接 ELS 與矽光子引擎）",
    "sources": [
     "2025-03-27-NVIDIA-Silicon-Photonics-Network-Switching-Technical-Blog.md"
    ]
   }
  ]
 }
];
