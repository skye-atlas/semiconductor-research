// 由 tools/update_stats.py 自動產生，不要手改（來源：content/04-Sources/ 的開頭欄位）
window.SOURCES = [
 {
  "file": "2010-07-30-Nature-Photonics-Silicon-Optical-Modulators.md",
  "title": "Silicon optical modulators（Nature Photonics，2010-07-30）",
  "summary": "矽沒有好用的電光效應，矽調變器主要靠自由載子色散；整理到 2010 年各類矽調變器的做法、速度與能耗取捨。",
  "historical": true,
  "date": "2010-07-30",
  "publisher": "Nature Photonics",
  "kind": "paper",
  "event": "Silicon optical modulators（Vol. 4, pp. 518–526；doi:10.1038/nphoton.2010.179）",
  "speakers": [
   "G. T. Reed（University of Surrey）",
   "G. Mashanovich",
   "F. Y. Gardes",
   "D. J. Thomson"
  ],
  "about": [],
  "proves": "<h4>可以支持</h4><ul><li>矽本身沒有好用的電光效應，矽調變器主要靠自由載子色散，有注入、累積、空乏三種做法（N2、N3）</li><li>外部調變讓光源與調變分開，一個光源可以經各自的調變器供多個通道（N1）</li><li>MZI 與環形共振器的基本取捨：環形小、省電，但怕溫度（N6）</li></ul><h4>無法支持</h4><ul><li>現在的調變器效能 — 數字截至 2010 年，之後已大幅進步</li><li>任何公司的產品或量產狀態</li></ul>",
  "claims": 8,
  "used": []
 },
 {
  "file": "2016-Journal-of-Optics-Roadmap-on-Silicon-Photonics-Accepted-Manuscript.md",
  "title": "Roadmap on silicon photonics（2016，作者接受版）",
  "summary": "2016 年矽光子路線圖：矽光子強在類 CMOS 量產，弱在光源；分節整理光源、調變、偵測與封裝的挑戰。",
  "historical": true,
  "date": "2016",
  "publisher": "Journal of Optics",
  "kind": "paper",
  "event": "Roadmap on silicon photonics（作者接受版原稿）",
  "speakers": [
   "David Thomson 等 16 位作者（Southampton、UCSB、Rockley、CEA-Leti、STMicroelectronics、Tyndall 等）"
  ],
  "about": [],
  "proves": "<h4>可以支持</h4><ul><li>矽光子的優勢在製造（類 CMOS、大量），弱點在光源（R1、R4）</li><li>矽上光源有接合、磊晶等整合做法，不是只能外接（R5）</li><li>封裝與光纖耦合是矽光子的主要難點之一（R6）</li></ul><h4>無法支持</h4><ul><li>2016 年以後的技術現況 — 內容截至 2016 年</li><li>任何公司的產品進度</li></ul>",
  "claims": 6,
  "used": []
 },
 {
  "file": "2022-02-03-OIF-Co-Packaging-Framework-Document.md",
  "title": "OIF Co-Packaging Framework Document（2022-02-03）",
  "summary": "OIF 定義 co-packaging：光學引擎與主晶片同一基板；雷射可在引擎內或外部，外部可更換但損耗較高。",
  "historical": false,
  "date": "2022-02-03",
  "publisher": "OIF",
  "kind": "standard",
  "event": "Co-Packaging Framework Document（OIF-Co-Packaging-FD-01.0）",
  "speakers": [
   "Kenneth Jackson（Sumitomo Electric，技術編輯）"
  ],
  "about": [],
  "proves": "<h4>可以支持</h4><ul><li>產業組織對 co-packaging 的定義：重點是「與主晶片同一個基板」（O1）</li><li>產業組織認為雷射可以整合在引擎內或放外部，兩者各有取捨（O4–O6）</li><li>外部光源的主要理由是可更換與散熱分離，代價是損耗與更高輸出功率（O5）</li></ul><h4>無法支持</h4><ul><li>任何產品已採用哪一種光源 — 這是框架文件，不是產品資料</li><li>ELS 的具體外型規格 — 本文只說要標準化，規格見 2023 年的 ELSFP 實作協議</li></ul>",
  "claims": 8,
  "used": []
 },
 {
  "file": "2023-03-20-Frontiers-of-Optoelectronics-Co-packaged-Optics-Status-Challenges-and-Solutions.md",
  "title": "Co-packaged optics (CPO): status, challenges, and solutions（2023-03-20）",
  "summary": "CPO 綜述：拆解製造、光源、光功率傳送、電路與封裝；試算外部光源需約 100 mW 以上的 CW 雷射。",
  "historical": false,
  "date": "2023-03-20",
  "publisher": "Frontiers of Optoelectronics",
  "kind": "paper",
  "event": "Co-packaged optics (CPO): status, challenges, and solutions（16:1）",
  "speakers": [
   "Min Tan 等 32 位作者"
  ],
  "about": [],
  "proves": "<h4>可以支持</h4><ul><li>這份綜述把 CPO 拆成製造、光源、光功率傳送、電路、封裝、標準化分節討論（F3）</li><li>「光源整合在晶片上」與「外部光源」是 CPO 光源的兩種選擇，不是只有外部光源（F4）</li><li>在作者的假設下，ELS 需要的雷射功率遠高於可插拔模組用的 CW 雷射，耗電主要來自雷射與致冷器（F7、F8）</li></ul><h4>無法支持</h4><ul><li>任何公司實際的 ELS 設計或規格 — F6–F8 是作者為了試算設定的架構</li><li>CPO 何時普及 — F5 是作者判斷</li><li>2023 年以後的進展 — 內容截至 2022 年投稿</li></ul>",
  "claims": 11,
  "used": []
 },
 {
  "file": "2023-03-Broadcom-Tomahawk-5-Bailly-CPO-Press-Deck.md",
  "title": "Broadcom TH5 51.2T Bailly CPO 發表簡報（2023-03）",
  "summary": "51.2T Bailly CPO 原型：交換晶片與 8 個 6.4T 矽光子引擎共同封裝，公司稱 5.5 W/800G。",
  "historical": false,
  "date": "2023-03",
  "publisher": "Broadcom",
  "kind": "press",
  "event": "TH5 51.2T Bailly CPO 發表簡報（Optical Systems Division）",
  "speakers": [],
  "about": [],
  "proves": "<h4>可以支持</h4><ul><li>Broadcom 在 2023-03 公開 51.2T CPO 原型：交換晶片與 8 個矽光子引擎共同封裝（B3、B6）</li><li>Broadcom 主張 CPO 比可插拔省電的理由：少掉板上長距離電訊號的等化（B2）</li></ul><h4>無法支持</h4><ul><li>雷射放在哪裡 — 簡報文字完全沒提雷射或光源（另見 <a href=\"2024-04-29-Broadcom-BCM78909-51.2T-CPO-Switch-Product-Brief.md\">BCM78909 產品簡介</a>）</li><li>2023-03 時已量產 — 這份是原型展示（量產的說法另見 <a href=\"2025-05-15-Broadcom-Third-Generation-CPO-200G-per-Lane-Press-Release.md\">2025 新聞稿</a>）</li><li>功耗數字在第三方環境下成立</li></ul>",
  "claims": 6,
  "used": []
 },
 {
  "file": "2023-08-08-OIF-ELSFP-Implementation-Agreement.md",
  "title": "OIF ELSFP Implementation Agreement（2023-08-08）",
  "summary": "OIF 定義 ELSFP：插在前面板、可現場更換的外部雷射外型，提供不調變的 CW 光給共同封裝的光學引擎。",
  "historical": false,
  "date": "2023-08-08",
  "publisher": "OIF",
  "kind": "standard",
  "event": "External Laser Small Form Factor Pluggable (ELSFP) Implementation Agreement（OIF-ELSFP-01.0）",
  "speakers": [
   "Jock Bovington（Cisco，技術編輯）"
  ],
  "about": [],
  "proves": "<h4>可以支持</h4><ul><li>「外部光源放在前面板、可插拔更換」已有產業組織的實作規格（E1、E2）</li><li>ELSFP 是外部光源的「一種」外型；規格本身就列出多種提供雷射光的做法（E5）</li><li>外部光源的設計理由：雷射怕熱、要可更換、要符合眼睛安全（E4）</li></ul><h4>無法支持</h4><ul><li>有哪些產品採用 ELSFP — 規格不提產品</li><li>ELS 一定等於 ELSFP — 規格本身就列出多種提供雷射光的做法（E5）；產品實例另見 <a href=\"2024-11-07-Broadcom-ARLM-96F8DMZ-Pluggable-Laser-Module-Product-Brief.md\">ARLM-96F8DMZ 筆記</a></li></ul>",
  "claims": 8,
  "used": []
 },
 {
  "file": "2024-04-29-Broadcom-BCM78909-51.2T-CPO-Switch-Product-Brief.md",
  "title": "Broadcom BCM78909 51.2T CPO 交換器產品簡介（2024-04-29）",
  "summary": "Broadcom 51.2T CPO 交換器採 16 個可插拔、可現場更換的外部雷射模組，光學引擎用自有矽光子技術。",
  "historical": false,
  "date": "2024-04-29",
  "publisher": "Broadcom",
  "kind": "product",
  "event": "BCM78909 51.2-Tb/s Multilayer CPO Switch with 100G SerDes 產品簡介（BCM78909-PB101）",
  "speakers": [],
  "about": [],
  "proves": "<h4>可以支持</h4><ul><li>Broadcom 的 51.2T CPO 交換器採用外部、可插拔、可現場更換的雷射模組，共 16 個（C3）</li><li>這款交換器的光學引擎是矽光子，光源不在引擎內（C3、C4）</li></ul><h4>無法支持</h4><ul><li>BCM78909 就是 TH5-Bailly — 簡介沒有寫 Bailly 或 Tomahawk 5</li><li>出貨量或客戶</li></ul>",
  "claims": 5,
  "used": []
 },
 {
  "file": "2024-11-07-Broadcom-ARLM-96F8DMZ-Pluggable-Laser-Module-Product-Brief.md",
  "title": "Broadcom ARLM-96F8DMZ 可插拔雷射模組產品簡介（2024-11-07）",
  "summary": "Broadcom CPO 用外部雷射模組：QSFP-DD 外型、八通道 CWDM、每通道 100 mW，以保偏光纖送光。",
  "historical": false,
  "date": "2024-11-07",
  "publisher": "Broadcom",
  "kind": "product",
  "event": "ARLM-96F8DMZ QSFP-DD 800-mW CWDM Laser Module 產品簡介（ARLM-96F8DMZ-PB100）",
  "speakers": [],
  "about": [],
  "proves": "<h4>可以支持</h4><ul><li>Broadcom 的 CPO 外部光源是 QSFP-DD 外型、八通道 CWDM 的可插拔模組，監控介面依 CPO JDF 標準（A1、A2、A5）</li><li>外部光源送進光學引擎的是不調變的連續光，要用保偏光纖（A1、A4）</li><li>每通道輸出 100 mW，整個模組 800 mW（A3）</li></ul><h4>無法支持</h4><ul><li>雷射晶片由誰製造 — 簡介只說是 Broadcom 的 DFB 技術</li><li>出貨量</li></ul>",
  "claims": 6,
  "used": []
 },
 {
  "file": "2025-03-27-NVIDIA-Silicon-Photonics-Network-Switching-Technical-Blog.md",
  "title": "NVIDIA 技術部落格：矽光子交換器（2025-03-27）",
  "summary": "NVIDIA CPO 交換器把雷射放在前面板可插拔 ELS；點名 Coherent 等三家做 ELS 組裝與測試。",
  "historical": false,
  "date": "2025-03-27",
  "publisher": "NVIDIA",
  "kind": "web",
  "event": "NVIDIA Technical Blog：A New Era in Data Center Networking with NVIDIA Silicon Photonics-based Network Switching",
  "speakers": [
   "Brad Smith（LinkX 線纜與光收發器產品線行銷總監）"
  ],
  "about": [
   "NVIDIA",
   "Coherent"
  ],
  "proves": "<h4>可以支持</h4><ul><li>NVIDIA 交換器 CPO 採外部光源：雷射在前面板可插拔的 ELS（OSFP 外型）模組（NB5）</li><li>NVIDIA 在 2025-03 官方點名 Coherent、Lumentum、Sumitomo 為 ELS 雷射與子組件夥伴，負責組裝、光學對準與測試（NB9）</li><li>NVIDIA 官方點名的其他分工：台積電（COUPE）、SPIL（CPO 多晶片模組組裝測試）、Foxconn 與 Fabrinet（系統組裝）、Corning 等（光纖連接）（NB7、NB8、NB10、NB11）</li></ul><h4>無法支持</h4><ul><li>各夥伴的出貨量、份額或合約金額 — 文章只列名與分工</li><li>ELS 模組內的雷射晶片由誰製造、雷射封裝由誰做 — 文章只寫到「ELS 組裝、對準與測試」這一層</li><li>省電 3.5 倍、部署快 1.3 倍在第三方環境下成立</li></ul>",
  "claims": 11,
  "used": [
   {
    "kind": "公司檔案",
    "title": "Coherent",
    "url": "generated/pages/01-Companies/Coherent.html"
   },
   {
    "kind": "公司檔案",
    "title": "GIS-KY（業成）",
    "url": "generated/pages/01-Companies/GIS-KY.html"
   },
   {
    "kind": "公司檔案",
    "title": "NVIDIA",
    "url": "generated/pages/01-Companies/NVIDIA.html"
   }
  ]
 },
 {
  "file": "2025-05-15-Broadcom-Third-Generation-CPO-200G-per-Lane-Press-Release.md",
  "title": "Broadcom 第三代 200G/lane CPO 新聞稿（2025-05-15）",
  "summary": "推出第三代 200G/lane CPO，稱 TH5-Bailly 已量產，並轉述多家夥伴量產周邊元件與整機。",
  "historical": false,
  "date": "2025-05-15",
  "publisher": "Broadcom",
  "kind": "press",
  "event": "Broadcom Announces Third-Generation Co-Packaged Optics (CPO) Technology with 200G/lane Capability",
  "speakers": [
   "Near Margalit（Optical Systems Division 副總裁暨總經理）"
  ],
  "about": [],
  "proves": "<h4>可以支持</h4><ul><li>Broadcom 在 2025-05 宣稱 TH5-Bailly 已量產，並有多家夥伴宣布相關量產或出貨（P3、P5）</li><li>外部光源在 Broadcom 生態系裡另有「PLS」的叫法，且有夥伴量產它的插槽與連接器（P5）</li><li>CPO 供應鏈不只光學引擎，還包括插座、光纖、連接器、光源插槽、整機系統（P5）</li></ul><h4>無法支持</h4><ul><li>量產規模、出貨量或營收 — 新聞稿沒有數字</li><li>第三代的產品規格與上市時間</li><li>夥伴量產的內容 — 是 Broadcom 轉述，原始公告不在本站</li></ul>",
  "claims": 6,
  "used": []
 },
 {
  "file": "2025-09-25-Coherent-400mW-CW-Lasers-Sampling-Press-Release.md",
  "title": "Coherent 400 mW CW 雷射送樣新聞稿（2025-09-25）",
  "summary": "400 mW、1311 nm CW 雷射送樣，chip-on-carrier 形式，目標 2026 第三季量產。",
  "historical": false,
  "date": "2025-09-25",
  "publisher": "Coherent",
  "kind": "press",
  "event": "Coherent Samples Low-Noise 400 mW CW Lasers for Co-Packaged Optics and Silicon Photonics",
  "speakers": [
   "Kou-Wei Wang（Photonic Devices 副總暨總經理）"
  ],
  "about": [
   "Coherent"
  ],
  "proves": "<h4>可以支持</h4><ul><li>Coherent 的 400 mW CW 雷射以 chip-on-carrier 形式提供（CL2）</li><li>2025-09 時是送樣階段，Coherent 預計 2026 第三季量產（CL1、CL4）</li></ul><h4>無法支持</h4><ul><li>已量產 — 量產是 2026 第三季的目標（後續狀態另見 <a href=\"2026-03-17-Coherent-OFC-2026-Technology-Innovation-Briefing.md\">OFC 2026 簡報</a>）</li><li>chip-on-carrier 由誰封裝 — 新聞稿沒有說</li></ul>",
  "claims": 4,
  "used": [
   {
    "kind": "公司檔案",
    "title": "Coherent",
    "url": "generated/pages/01-Companies/Coherent.html"
   },
   {
    "kind": "公司檔案",
    "title": "GIS-KY（業成）",
    "url": "generated/pages/01-Companies/GIS-KY.html"
   }
  ]
 },
 {
  "file": "2025-09-28-Coherent-ECOC-2025-Press-Release.md",
  "title": "Coherent ECOC 2025 新聞稿（2025-09-28）",
  "summary": "展示符合 ELSFP 的外部光源模組，內含八顆 1310 nm 高功率雷射。",
  "historical": false,
  "date": "2025-09-28",
  "publisher": "Coherent",
  "kind": "press",
  "event": "Coherent Showcases Next-Generation Optical Innovations at ECOC 2025",
  "speakers": [
   "Sanjai Parthasarathi（行銷長）"
  ],
  "about": [
   "Coherent"
  ],
  "proves": "<h4>可以支持</h4><ul><li>Coherent 在 2025-09 展示符合 OIF ELSFP 規格的外部光源模組，內含八顆高功率 1310 nm 雷射（EA2）</li></ul><h4>無法支持</h4><ul><li>這款 ELSFP 模組已量產或有客戶 — 是展示</li><li>八顆雷射的封裝在哪裡做</li></ul>",
  "claims": 3,
  "used": []
 },
 {
  "file": "2026-03-02-NVIDIA-Coherent-Strategic-Partnership-Press-Release.md",
  "title": "NVIDIA × Coherent 策略合作新聞稿（2026-03-02）",
  "summary": "雙方簽多年策略合作：NVIDIA 數十億美元採購承諾，並投資 Coherent 20 億美元。",
  "historical": false,
  "date": "2026-03-02",
  "publisher": "NVIDIA",
  "kind": "press",
  "event": "NVIDIA and Coherent Announce Strategic Partnership to Develop Optics Technology to Scale Next-Generation Data Center Architecture",
  "speakers": [
   "Jensen Huang（NVIDIA 執行長）",
   "Jim Anderson（Coherent 執行長）"
  ],
  "about": [
   "NVIDIA",
   "Coherent"
  ],
  "proves": "<h4>可以支持</h4><ul><li>NVIDIA 與 Coherent 雙方具名簽訂多年、非獨家的策略合作，含 NVIDIA 數十億美元採購承諾與 20 億美元投資（NC1–NC3）</li><li>雙方稱這是既有供應關係的擴大（NC4、NC5）</li></ul><h4>無法支持</h4><ul><li>採購的是哪一項產品 — 只寫「先進雷射與光網路產品」，沒有寫 CPO 或 ELS</li><li>採購承諾的確切金額與期間 — 只寫「數十億美元」「多年」</li><li>Coherent 的供應商是誰</li></ul>",
  "claims": 5,
  "used": [
   {
    "kind": "公司檔案",
    "title": "Coherent",
    "url": "generated/pages/01-Companies/Coherent.html"
   },
   {
    "kind": "公司檔案",
    "title": "NVIDIA",
    "url": "generated/pages/01-Companies/NVIDIA.html"
   }
  ]
 },
 {
  "file": "2026-03-17-Coherent-CPO-Technologies-at-OFC-2026-Press-Release.md",
  "title": "Coherent OFC 2026 CPO 展示新聞稿（2026-03-17）",
  "summary": "展示 6.4T 矽光子 CPO，搭配自家 ELS 模組與自製高功率 InP CW 雷射。",
  "historical": false,
  "date": "2026-03-17",
  "publisher": "Coherent",
  "kind": "press",
  "event": "Coherent Demonstrates Multiple Co-Packaged Optics (CPO) Technologies at OFC 2026",
  "speakers": [
   "Lee Xu（資料中心執行副總）"
  ],
  "about": [
   "Coherent"
  ],
  "proves": "<h4>可以支持</h4><ul><li>Coherent 的 CPO 展示用的是自家 ELS 模組，ELS 內的高功率 InP CW 雷射也是自家的（CO1）</li><li>Coherent 自己稱 CPO 仍是早期方案（CO4）</li></ul><h4>無法支持</h4><ul><li>展示品已量產或有客戶 — 這是展示</li><li>ELS 內雷射的封裝在哪裡做</li></ul>",
  "claims": 4,
  "used": [
   {
    "kind": "公司檔案",
    "title": "Coherent",
    "url": "generated/pages/01-Companies/Coherent.html"
   }
  ]
 },
 {
  "file": "2026-03-17-Coherent-OFC-2026-Technology-Innovation-Briefing.md",
  "title": "Coherent OFC 2026 投資人技術簡報（2026-03-17）",
  "summary": "Coherent 稱 CW 雷射與 ELS 已全面量產放量，取得 AI 龍頭客戶的 CPO 多年大量訂單。",
  "historical": false,
  "date": "2026-03-17",
  "publisher": "Coherent",
  "kind": "slides",
  "event": "OFC 2026 Technology Innovation Briefing（投資人技術簡報，洛杉磯）",
  "speakers": [
   "Jim Anderson（執行長）",
   "Julie Sheridan Eng（技術長）",
   "Beck Mason（半導體元件執行副總）",
   "Sanjai Parthasarathi（行銷長）"
  ],
  "about": [
   "Coherent",
   "NVIDIA"
  ],
  "proves": "<h4>可以支持</h4><ul><li>Coherent 自述的 CPO 外部光源組成：InP CW 雷射、隔離器、致冷器，經保偏光纖接到 CPO 模組（CD4）</li><li>Coherent 自述能做 CPO 光學鏈的大部分環節：InP CW 雷射、ELS、FAU、保偏光纖、組裝測試（CD3）</li><li>Coherent 在 2026-03-17 稱高功率 CW 雷射已全面量產，並取得一家 AI 資料中心龍頭客戶的 CPO 多年大量訂單（CD9、CD10）</li></ul><h4>無法支持</h4><ul><li>那家 AI 資料中心客戶是誰 — 簡報沒有具名</li><li>Coherent 的雷射是否全部自己封裝、有沒有外包封測 — 簡報只列能力，沒有寫外包</li><li>CPO 市場規模的實際數字 — CD5 是估計</li></ul>",
  "claims": 10,
  "used": [
   {
    "kind": "公司檔案",
    "title": "Coherent",
    "url": "generated/pages/01-Companies/Coherent.html"
   },
   {
    "kind": "公司檔案",
    "title": "GIS-KY（業成）",
    "url": "generated/pages/01-Companies/GIS-KY.html"
   }
  ]
 },
 {
  "file": "2026-04-台積電-2025年報第五章營運概況.md",
  "title": "台積電 2025 年年報 第五章 營運概況（2026-04）",
  "summary": "COUPE 以矽光子與電路晶片 3D 堆疊成光學引擎，已與多家客戶達 200 Gbps，目標 2026 年量產。",
  "historical": false,
  "date": "2026-04",
  "publisher": "台積電",
  "kind": "filing",
  "event": "2025 年年報 第五章 營運概況",
  "speakers": [],
  "about": [],
  "proves": "<h4>可以支持</h4><ul><li>台積電的矽光子路線是「矽光子晶片＋電路晶片 3D 堆疊成光學引擎，再和運算晶片共同封裝」（T1、T2）</li><li>台積電在 2026 年 4 月的年報中說 COUPE 與 CPO 方案預計 2026 年量產（T3、T4）</li></ul><h4>無法支持</h4><ul><li>已經量產 — 2026 量產是目標</li><li>客戶是誰、200 Gbps 是哪一層的速率（每通道或每引擎） — 年報沒有說明</li><li>COUPE 用哪一種光源 — 年報沒提雷射</li></ul>",
  "claims": 5,
  "used": []
 },
 {
  "file": "2026-05-31-NVIDIA-Vera-Rubin-Full-Production-Press-Release.md",
  "title": "NVIDIA Vera Rubin 全面量產新聞稿（2026-05-31）",
  "summary": "NVIDIA 稱 Vera Rubin 全面量產，CPO 交換器 Spectrum-X Photonics 已在量產。",
  "historical": false,
  "date": "2026-05-31",
  "publisher": "NVIDIA",
  "kind": "press",
  "event": "NVIDIA Vera Rubin Ramps Into Full Production to Power Agentic AI Factories Worldwide（GTC Taipei）",
  "speakers": [
   "Jensen Huang（NVIDIA 執行長）"
  ],
  "about": [
   "NVIDIA"
  ],
  "proves": "<h4>可以支持</h4><ul><li>NVIDIA 在 2026-05-31 稱 Spectrum-X Ethernet Photonics（CPO 交換器）已在量產（VR1）</li><li>NVIDIA 稱 CoreWeave、Lambda、OCI 是 CPO 網路的首批採用者（VR3）</li></ul><h4>無法支持</h4><ul><li>CPO 交換器的出貨量 — 新聞稿沒有數字</li><li>ELS 或其他光學元件的供應商 — 新聞稿沒提</li></ul>",
  "claims": 4,
  "used": [
   {
    "kind": "公司檔案",
    "title": "NVIDIA",
    "url": "generated/pages/01-Companies/NVIDIA.html"
   }
  ]
 },
 {
  "file": "2026-06-16-Coherent-CHIPS-Letter-of-Intent-Press-Release.md",
  "title": "Coherent CHIPS 意向書新聞稿（2026-06-16）",
  "summary": "簽 CHIPS 意向書，最多 5,000 萬美元擴建德州 Sherman 6 吋 InP 廠，目標晶圓產能四倍。",
  "historical": false,
  "date": "2026-06-16",
  "publisher": "Coherent",
  "kind": "press",
  "event": "Coherent Announces a CHIPS Letter of Intent for $50 Million to Expand World-Leading Manufacturing Facility for AI Infrastructure",
  "speakers": [
   "Jim Anderson（執行長）"
  ],
  "about": [
   "Coherent",
   "NVIDIA"
  ],
  "proves": "<h4>可以支持</h4><ul><li>Coherent 在 2026-06 宣布擴建美國德州的 InP 晶圓廠，並簽 CHIPS 補助意向書（CH1、CH2）</li></ul><h4>無法支持</h4><ul><li>補助已撥付 — 只是意向書</li><li>Coherent 把封裝或其他產能移到美國以外 — 這份只談美國的晶圓廠擴建</li></ul>",
  "claims": 5,
  "used": [
   {
    "kind": "公司檔案",
    "title": "Coherent",
    "url": "generated/pages/01-Companies/Coherent.html"
   },
   {
    "kind": "公司檔案",
    "title": "GIS-KY（業成）",
    "url": "generated/pages/01-Companies/GIS-KY.html"
   }
  ]
 },
 {
  "file": "2026-06-29-GIS-KY-2026Q1法人說明會簡報.md",
  "title": "GIS-KY 2026 年第一季法人說明會簡報（2026-06-29）",
  "summary": "1Q26 營收與獲利的公司揭露數字；營收仍以平板與筆電觸控模組為主，另列 Micro-LED 等轉型方向。",
  "historical": false,
  "date": "2026-06-29",
  "publisher": "GIS-KY",
  "kind": "slides",
  "event": "2026 年第一季法人說明會",
  "speakers": [],
  "about": [
   "GIS-KY"
  ],
  "proves": "<h4>可以支持</h4><ul><li>1Q26 營收、毛利率、虧損與資產負債、現金流的公司揭露數字（S1–S7）</li><li>1Q26 營收仍以平板與筆電觸控顯示模組為主，合計 77%（S8）</li><li>公司在 2026-06 把 Micro-LED 光電傳輸、SRG 光波導、AR HUD、光學鏡片列為轉型方向（S9）</li></ul><h4>無法支持</h4><ul><li>任何新產品已出貨或有營收 — 簡報只列方向</li><li>光通訊雷射光源封測 — 這份簡報沒有提到，只在問答中出現（見逐字稿）</li><li>客戶是誰 — 簡報沒有具名</li></ul>",
  "claims": 9,
  "used": [
   {
    "kind": "公司檔案",
    "title": "GIS-KY（業成）",
    "url": "generated/pages/01-Companies/GIS-KY.html"
   }
  ]
 },
 {
  "file": "2026-06-29-GIS-KY-2026Q1法人說明會逐字稿.md",
  "title": "GIS-KY 2026 年第一季法人說明會逐字稿（2026-06-29）",
  "summary": "管理層稱光通訊做 CW 雷射光源封測、大客戶驗證順利，順利的話 2027 上半年部分量產、2027 年有營收。",
  "historical": false,
  "date": "2026-06-29",
  "publisher": "GIS-KY",
  "kind": "transcript",
  "event": "2026 年第一季法人說明會",
  "speakers": [
   "林原平（財務長）",
   "技術長",
   "蔡明宏（代理發言人）"
  ],
  "about": [
   "GIS-KY"
  ],
  "proves": "<h4>可以支持</h4><ul><li>管理層在 2026-06-29 說光通訊業務是 CW 雷射光源的封裝與測試，理由是指紋辨識的封測經驗（T4）</li><li>技術長當天說主要大客戶驗證「非常順利」、預期 2027 年有營收貢獻（T12）；財務長說順利的話 2027 上半年部分量產（T5）</li><li>當時的 2026 資本支出指引是 50–60 億元，其中光通訊約 13 億元（T6）</li></ul><h4>無法支持</h4><ul><li>客戶是誰、驗證是否真的通過 — 客戶未具名，「順利」是公司自述</li><li>與訊芯或鴻海集團其他公司有光通訊合作 — 公司沒有確認（T11）</li><li>光波導「小量出貨」的數量、金額或客戶（T3）</li><li>光通訊產能、單價、毛利率 — 這場沒有提</li></ul>",
  "claims": 14,
  "used": [
   {
    "kind": "公司檔案",
    "title": "GIS-KY（業成）",
    "url": "generated/pages/01-Companies/GIS-KY.html"
   }
  ]
 },
 {
  "file": "2026-08-14-Coherent-FY2026-Form-10-K.md",
  "title": "Coherent FY2026 年報 Form 10-K（2026-08-14）",
  "summary": "FY2026 營收 71.18 億美元、資料中心與通訊 52.75 億美元；最大客戶占 20%；台灣資產極少。",
  "historical": false,
  "date": "2026-08-14",
  "publisher": "Coherent",
  "kind": "filing",
  "event": "Form 10-K（會計年度截至 2026-06-30；SEC 文件編號 0000820318-26-000020）",
  "speakers": [
   "James R. Anderson（執行長）",
   "Sherri Luther（財務長）"
  ],
  "about": [
   "Coherent",
   "NVIDIA"
  ],
  "proves": "<h4>可以支持</h4><ul><li>Coherent FY2026 營收 71.18 億美元，資料中心與通訊部門 52.75 億美元（K1、K2）</li><li>一家未具名客戶占 FY2026 營收 20%（K7）</li><li>NVIDIA 以每股 256.80 美元認購約 779 萬股、共 20 億美元（K8）</li><li>Coherent 在台灣的長期資產只有約 430 萬美元，台灣也不在主要生產據點清單裡（K10、K13）</li><li>Coherent 有使用委外製造商（K11、K12）</li></ul><h4>無法支持</h4><ul><li>占營收 20% 的客戶是誰 — 10-K 沒有具名</li><li>委外製造商是誰、委外哪些工序 — 10-K 沒有列名</li><li>任何特定台灣廠商（聯鈞、GIS-KY）是 Coherent 的供應商</li></ul>",
  "claims": 16,
  "used": [
   {
    "kind": "公司檔案",
    "title": "Coherent",
    "url": "generated/pages/01-Companies/Coherent.html"
   },
   {
    "kind": "公司檔案",
    "title": "GIS-KY（業成）",
    "url": "generated/pages/01-Companies/GIS-KY.html"
   }
  ]
 },
 {
  "file": "2026-08-18-聯鈞-2026Q2法人說明會簡報.md",
  "title": "聯鈞 2026 年第二季法人說明會簡報（2026-08-18）",
  "summary": "聯鈞簡報列出 COSA、光收發模組、ELSFP 三平台；附 Coherent 頒發的 2024、2025 年供應商獎。",
  "historical": false,
  "date": "2026-08-18",
  "publisher": "聯鈞",
  "kind": "slides",
  "event": "2026 年第二季法人說明會",
  "speakers": [],
  "about": [
   "聯鈞",
   "Coherent"
  ],
  "proves": "<h4>可以支持</h4><ul><li>聯鈞在簡報展示 Coherent 頒發的 2024、2025 年供應商獎（S4）</li><li>聯鈞 AI 光學營收占比從 2025 年 32.7% 升到 2026 年 7 月 45.5%（S1）</li><li>聯鈞稱 ELSFP 已進入試產（S2）</li></ul><h4>無法支持</h4><ul><li>Coherent 自己公開承認聯鈞是供應商 — 獎牌出現在聯鈞的簡報裡，不是 Coherent 的文件</li><li>獎項是哪一類產品、多少金額</li><li>ELSFP 的客戶或量產時程</li></ul>",
  "claims": 8,
  "used": [
   {
    "kind": "公司檔案",
    "title": "聯鈞",
    "url": "generated/pages/01-Companies/%E8%81%AF%E9%88%9E.html"
   }
  ]
 },
 {
  "file": "2026-08-18-聯鈞-2026Q2法人說明會逐字稿.md",
  "title": "聯鈞 2026 年第二季法人說明會逐字稿（2026-08-18）",
  "summary": "聯鈞稱 2024 年起為 Coherent 做 COSA 封裝、產能逐年近倍增；ELSFP 已到工程樣品小量。",
  "historical": false,
  "date": "2026-08-18",
  "publisher": "聯鈞",
  "kind": "transcript",
  "event": "2026 年第二季法人說明會",
  "speakers": [
   "鄭祝良（董事長）",
   "宋天增（總經理）",
   "蔡麗秋（財會主管）",
   "吳鎮慶"
  ],
  "about": [
   "聯鈞",
   "Coherent"
  ],
  "proves": "<h4>可以支持</h4><ul><li>聯鈞管理層在 2026-08-18 具名說：2024 年起為 Coherent 做 COSA 封裝，並在 Coherent 開發初期就參與（L8）</li><li>聯鈞稱 COSA 產能 2024 年起逐年幾乎翻倍，機器設備資本支出由 2.6 億增到 11 億、2026 年預估 16 億元（L7、L16）</li><li>聯鈞稱外部光源與雷射晶片大廠共同開發，已到工程樣品小量生產，量產時程無法預估（L13、L15）</li></ul><h4>無法支持</h4><ul><li>Coherent 官方確認聯鈞是其供應商 — 這是聯鈞單方的說法（獎項見同場簡報）</li><li>外部光源的共同開發對象是誰 — 公司說因 NDA 不透露</li><li>COSA 的絕對產能或各客戶占比</li></ul>",
  "claims": 17,
  "used": [
   {
    "kind": "公司檔案",
    "title": "Coherent",
    "url": "generated/pages/01-Companies/Coherent.html"
   },
   {
    "kind": "公司檔案",
    "title": "GIS-KY（業成）",
    "url": "generated/pages/01-Companies/GIS-KY.html"
   },
   {
    "kind": "公司檔案",
    "title": "聯鈞",
    "url": "generated/pages/01-Companies/%E8%81%AF%E9%88%9E.html"
   }
  ]
 },
 {
  "file": "2026-08-20-兆豐投顧-聯鈞個股報告.md",
  "title": "兆豐投顧 聯鈞個股報告（2026-08-20）",
  "summary": "兆豐轉述聯鈞 AI 光學占比升到 45.5%、COSA 產能續擴、ELSFP 進入試產，三年機器設備支出約 30 億元。",
  "historical": false,
  "date": "2026-08-20",
  "publisher": "兆豐投顧",
  "kind": "broker",
  "event": "個股報告（法說會後）",
  "speakers": [
   "李彝安（研究員）"
  ],
  "about": [
   "聯鈞"
  ],
  "proves": "<h4>可以支持</h4><ul><li>兆豐在 2026-08-20 轉述聯鈞法說內容：AI 光學占比 45.5%、ELSFP 進入試產、資本支出全為機器設備（M1、M3、M4）</li></ul><h4>無法支持</h4><ul><li>聯鈞的客戶是誰 — 首頁沒有具名</li><li>「2026 年底與 2027 年底各倍增」是公司說法還是券商推估 — 報告沒有區分</li></ul>",
  "claims": 4,
  "used": []
 },
 {
  "file": "2026-08-20-康和投顧-聯鈞投資速報.md",
  "title": "康和投顧 聯鈞投資速報（2026-08-20）",
  "summary": "康和稱聯鈞 COSA 產能再次翻倍、源傑已打入 CSP 大廠供應鏈；聯鈞 2025 年營收 85.85 億元。",
  "historical": false,
  "date": "2026-08-20",
  "publisher": "康和投顧",
  "kind": "broker",
  "event": "投資速報",
  "speakers": [
   "林宥成（研究員）"
  ],
  "about": [
   "聯鈞"
  ],
  "proves": "<h4>可以支持</h4><ul><li>康和在 2026-08-20 轉述聯鈞 COSA 產能再次倍增（K2）</li><li>康和引用的聯鈞 2025 年營收結構（K4）</li></ul><h4>無法支持</h4><ul><li>「全球前三大」的排名依據 — 報告沒有說明</li><li>源傑的 CSP 客戶是誰</li></ul>",
  "claims": 4,
  "used": [
   {
    "kind": "公司檔案",
    "title": "聯鈞",
    "url": "generated/pages/01-Companies/%E8%81%AF%E9%88%9E.html"
   }
  ]
 },
 {
  "file": "2026-09-20-Coherent-ECOC-2026-Press-Release.md",
  "title": "Coherent ECOC 2026 新聞稿（2026-09-20）",
  "summary": "發表 CPO 光纖連接與耦合元件（含 ELS 耦合透鏡）、超高功率 CW 雷射與 PhotonLink。",
  "historical": false,
  "date": "2026-09-20",
  "publisher": "Coherent",
  "kind": "press",
  "event": "Coherent Showcases Optical Innovations to Scale AI Infrastructure at ECOC 2026",
  "speakers": [
   "Sanjai Parthasarathi（行銷長）"
  ],
  "about": [
   "Coherent"
  ],
  "proves": "<h4>可以支持</h4><ul><li>Coherent 在 2026-09 推出 CPO 與 ELS 的光纖連接、對準與耦合元件（EB3）</li><li>Coherent 推出超高功率 CW 雷射（EB5）</li></ul><h4>無法支持</h4><ul><li>這些元件已量產或用在哪個客戶的產品上</li><li>PhotonLink 的規格與時程 — 另行公布</li></ul>",
  "claims": 6,
  "used": [
   {
    "kind": "公司檔案",
    "title": "Coherent",
    "url": "generated/pages/01-Companies/Coherent.html"
   }
  ]
 },
 {
  "file": "2026-09-24-GIS-KY-2026Q2法人說明會簡報.md",
  "title": "GIS-KY 2026 年第二季法人說明會簡報（2026-09-24）",
  "summary": "2Q26 營收季減 34.7%、毛利率 3.3%、稅後淨損 10.53 億元；營收仍以平板與筆電觸控模組為主。",
  "historical": false,
  "date": "2026-09-24",
  "publisher": "GIS-KY",
  "kind": "slides",
  "event": "2026 年第二季法人說明會",
  "speakers": [],
  "about": [
   "GIS-KY"
  ],
  "proves": "<h4>可以支持</h4><ul><li>2Q26 營收季減 34.7%、毛利率降到 3.3%、稅後淨損 10.53 億元（S1–S3）</li><li>1H26 營業活動現金流僅 1.02 億元，同期資本支出 12.71 億元、借款減少 24.07 億元（S7）</li><li>2Q26 營收仍以平板與筆電觸控顯示模組為主，合計 75%（S8）</li></ul><h4>無法支持</h4><ul><li>光通訊或其他新產品的營收 — 簡報的營收占比沒有獨立列出，「其他」11% 的內容沒有說明</li><li>虧損原因 — 簡報只有數字，原因見逐字稿的公司說法</li></ul>",
  "claims": 9,
  "used": [
   {
    "kind": "公司檔案",
    "title": "GIS-KY（業成）",
    "url": "generated/pages/01-Companies/GIS-KY.html"
   }
  ]
 },
 {
  "file": "2026-09-24-GIS-KY-2026Q2法人說明會逐字稿.md",
  "title": "GIS-KY 2026 年第二季法人說明會逐字稿（2026-09-24）",
  "summary": "管理層稱雷射光源封測約十億元產線已投入、小量測試中，順利的話年底前出貨；9 月另通過約 33 億元設備。",
  "historical": false,
  "date": "2026-09-24",
  "publisher": "GIS-KY",
  "kind": "transcript",
  "event": "2026 年第二季法人說明會",
  "speakers": [
   "林原平（財務長）"
  ],
  "about": [
   "GIS-KY"
  ],
  "proves": "<h4>可以支持</h4><ul><li>管理層在 2026-09-24 說：雷射光源封測約十億元已投入並在小量測試，順利的話年底前開始出貨，顯著貢獻從 2027 年開始（T13、T14）</li><li>2026 年已核准的雷射光源封測資本支出約 40–50 億元，9 月初另通過約 33 億元，設備到量產在 2027 上半年之後（T10–T12）</li><li>公司自述目標規格是 800G 以上、客戶還不是 CSP、EML 與 CW 都能做（T21、T22、T24）</li><li>公司說夏普龜山廠關廠對 LCM 面板來源有顯著影響（T5）</li></ul><h4>無法支持</h4><ul><li>客戶是誰、有幾家、訂單多少 — 全部未具名（T16）</li><li>已出貨 — 當天說的是「預計」年底前出貨</li><li>產能、良率、單價與毛利率 — 公司明確不說明（T15、T18）</li><li>「客戶找上門是因為指紋封測經驗」— 是公司的自我說明（T19）</li></ul>",
  "claims": 24,
  "used": [
   {
    "kind": "公司檔案",
    "title": "GIS-KY（業成）",
    "url": "generated/pages/01-Companies/GIS-KY.html"
   }
  ]
 },
 {
  "file": "2026-09-24-福邦投顧-聯鈞個股早報.md",
  "title": "福邦投顧 聯鈞個股早報（2026-09-24）",
  "summary": "福邦稱聯鈞客戶以美系光模組廠為主、Coherent 是其中之一，近期新增日系客戶。",
  "historical": false,
  "date": "2026-09-24",
  "publisher": "福邦投顧",
  "kind": "broker",
  "event": "股市個股早報",
  "speakers": [],
  "about": [
   "聯鈞",
   "Coherent"
  ],
  "proves": "<h4>可以支持</h4><ul><li>福邦在 2026-09-24 具名稱 Coherent 是聯鈞的客戶之一（F2）</li><li>福邦轉述聯鈞的後段量產工序包括 die bonding 與最終測試（F3）</li></ul><h4>無法支持</h4><ul><li>Coherent 官方確認 — 這是券商報告</li><li>聯鈞對 Coherent 的營收占比</li></ul>",
  "claims": 4,
  "used": [
   {
    "kind": "公司檔案",
    "title": "聯鈞",
    "url": "generated/pages/01-Companies/%E8%81%AF%E9%88%9E.html"
   }
  ]
 },
 {
  "file": "2026-09-29-NVIDIA-Silicon-Photonics-Product-Page.md",
  "title": "NVIDIA 官網 Silicon Photonics 頁（2026-09-29 擷取）",
  "summary": "官網列出 Quantum-X 與 Spectrum-X 兩種 CPO 交換器，Coherent 等 11 家列為夥伴。",
  "historical": false,
  "date": "2026-09-29",
  "publisher": "NVIDIA",
  "kind": "web",
  "event": "官網 NVIDIA Silicon Photonics 頁（擷取）",
  "speakers": [],
  "about": [
   "NVIDIA",
   "Coherent"
  ],
  "proves": "<h4>可以支持</h4><ul><li>截至 2026-09-29，NVIDIA 官網仍把 Coherent 列為矽光子交換器的技術合作夥伴（NP6）</li><li>NVIDIA 的 CPO 交換器產品線是 Quantum-X InfiniBand 與 Spectrum-X Ethernet 兩種（NP2）</li></ul><h4>無法支持</h4><ul><li>各夥伴的分工 — 這頁只列標誌（分工另見 <a href=\"2025-03-27-NVIDIA-Silicon-Photonics-Network-Switching-Technical-Blog.md\">NVIDIA 技術部落格</a>）</li><li>首批採用者的部署規模 — 只有連結標題</li></ul>",
  "claims": 6,
  "used": [
   {
    "kind": "公司檔案",
    "title": "Coherent",
    "url": "generated/pages/01-Companies/Coherent.html"
   },
   {
    "kind": "公司檔案",
    "title": "NVIDIA",
    "url": "generated/pages/01-Companies/NVIDIA.html"
   }
  ]
 },
 {
  "file": "2026-09-29-元富投顧-GIS-KY公司拜訪快報.md",
  "title": "元富投顧 GIS-KY 公司拜訪快報（2026-09-29）",
  "summary": "元富稱 GIS 接到 Coherent 的 CPO 光耦合元件大單，2026 年底初步出貨、2027 放量。",
  "historical": false,
  "date": "2026-09-29",
  "publisher": "元富投顧",
  "kind": "broker",
  "event": "公司拜訪快報",
  "speakers": [],
  "about": [
   "GIS-KY",
   "Coherent"
  ],
  "proves": "<h4>可以支持</h4><ul><li>元富在 2026-09-29 具名稱 GIS 的光通訊客戶是 Coherent，產品寫作「CPO 光耦合元件（800G／1.6T）」（Y4）</li><li>元富轉述的時程：光源封裝 2026 年底初步出貨、2027 上半年放量（Y5）</li><li>元富稱 GIS 最大客戶是 Apple（Y1）</li></ul><h4>無法支持</h4><ul><li>GIS 或 Coherent 官方確認雙方關係 — 這是券商報告，當事雙方都沒有具名</li><li>「光耦合元件」具體是哪一道工序或哪種產品 — 報告沒有說明</li><li>訂單金額或數量 — 報告只寫「大單」</li></ul>",
  "claims": 7,
  "used": [
   {
    "kind": "公司檔案",
    "title": "GIS-KY（業成）",
    "url": "generated/pages/01-Companies/GIS-KY.html"
   }
  ]
 },
 {
  "file": "2026-09-29-群益投顧-GIS-KY個股報告.md",
  "title": "群益投顧 GIS-KY 個股報告（2026-09-29）",
  "summary": "群益轉述雷射光源封測送樣測試中、預計 2026 年底出貨、以 800G 以上為重心，並估 2H26 營收較佳。",
  "historical": false,
  "date": "2026-09-29",
  "publisher": "群益投顧",
  "kind": "broker",
  "event": "個股報告",
  "speakers": [
   "陳長榮（研究員）"
  ],
  "about": [
   "GIS-KY"
  ],
  "proves": "<h4>可以支持</h4><ul><li>群益在 2026-09-29 轉述：雷射光源封測送樣測試中、預計 2026 年底出貨、800G 以上為重心（B6）</li><li>群益 2026-09-29 判斷 2H26 營收優於 1H26、2Q–4Q26 逐季增加（B8）</li><li>群益稱最大客戶占營收超過 80%（B1）</li></ul><h4>無法支持</h4><ul><li>管理層原話 — 本報告是轉述；原話以法說會逐字稿為準</li><li>送樣或出貨已被客戶確認 — 本報告是轉述公司資訊</li><li>最大客戶是誰 — 報告沒有具名</li></ul>",
  "claims": 10,
  "used": [
   {
    "kind": "公司檔案",
    "title": "GIS-KY（業成）",
    "url": "generated/pages/01-Companies/GIS-KY.html"
   }
  ]
 },
 {
  "file": "2026-10-01-Broadcom-Co-Packaged-Optics-Product-Page.md",
  "title": "Broadcom 官網 Co-Packaged Optics 產品分類頁（2026-10-01 擷取）",
  "summary": "Broadcom 官網把 CPO 產品分成兩類：整合光學引擎的交換器 CPO，以及可插拔雷射光源。",
  "historical": false,
  "date": "2026-10-01",
  "publisher": "Broadcom",
  "kind": "web",
  "event": "官網產品分類頁 Co-Packaged Optics（擷取）",
  "speakers": [],
  "about": [],
  "proves": "<h4>可以支持</h4><ul><li>截至 2026-10-01，Broadcom 把「可插拔雷射光源」列為和 CPO 交換器並列的一類產品（W2）</li></ul><h4>無法支持</h4><ul><li>產品規格 — 見 <a href=\"2024-04-29-Broadcom-BCM78909-51.2T-CPO-Switch-Product-Brief.md\">BCM78909</a>、<a href=\"2024-11-07-Broadcom-ARLM-96F8DMZ-Pluggable-Laser-Module-Product-Brief.md\">ARLM-96F8DMZ</a> 產品簡介</li><li>102.4T CPO 交換器的內容 — 只有連結標題</li></ul>",
  "claims": 3,
  "used": []
 },
 {
  "file": "2026-10-01-Intel-Silicon-Photonics-Product-Page.md",
  "title": "Intel 官網 Silicon Photonics 頁（2026-10-01 擷取）",
  "summary": "Intel 稱 OCI 光學 I/O 晶粒把雷射整合在矽光子晶片上，不需要外部光源與保偏光纖；評估平台將推出。",
  "historical": false,
  "date": "2026-10-01",
  "publisher": "Intel",
  "kind": "web",
  "event": "官網 Intel Silicon Photonics 頁（擷取）",
  "speakers": [],
  "about": [],
  "proves": "<h4>可以支持</h4><ul><li>光源整合在矽光子晶片上的做法已有產品級說法：Intel 稱 OCI 不需要外部光源與保偏光纖（I1、I3）</li><li>Intel 稱已在可插拔光模組裡出貨大量晶片上雷射（I5）</li></ul><h4>無法支持</h4><ul><li>OCI 已量產或有客戶 — 評估平台「將會推出」（I4）</li><li>晶片上雷射適用於交換器 CPO — 頁面說的用途是和 CPU、GPU 等共同封裝的光學 I/O（I4）</li><li>頁面內容的時間 — 沒有發布日，只能證明 2026-10-01 時頁面這樣寫</li></ul>",
  "claims": 6,
  "used": []
 }
];
