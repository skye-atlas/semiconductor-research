/* ════════════════════════════════════════════════════════════
   技術主題清單
   首頁「N 個主題」數的是這份清單有幾項。
   層級與研究分區（section）的定義在 settings/landscape-frame.js。
   有 page 的會掛在研究領域頁對應的研究分區底下；沒有 page 的列在該分區的「待補內容」。

   一個主題一行，格式照下面的例子（要用雙引號，最後一項後面不加逗號，清單裡不能寫註解）：
     { "id": "hbm", "label": "高頻寬記憶體 HBM", "desc": "一句話說明這篇在回答什麼", "section": "d2-hbm" }
   必填
     id      ：代號（英文、不要重複）
     label   ：畫面上的名稱
     desc    ：一句用途（文章清單顯示在名稱下方）
     section ：主要分區，放在哪一個研究分區（landscape-frame.js 裡 sections 的 id）；完整卡片只在這裡出現
   選填
     kind    ："hub" 主頁/"option" 方案比較/"app" 應用頁；不寫就是一般技術（資料分類用，研究領域頁不顯示）
     axes    ：在分類軸上的位置，例如 { "conv": "共同封裝（CPO）" }（目前只有 ③ 有分類軸，值要和 landscape-frame.js 的 options 一字不差；研究領域頁不在卡片上顯示）
     also    ：也相關的研究分區。每一項可以只寫分區 id，或寫 { "id": "d1-pkg", "why": "一句關係說明", "anchor": "章節的固定 ID" }。
               被列入的分區只在一行淡色「延伸閱讀」裡出現連結（不重複整張卡片）；why 放在滑鼠提示，
               why 只能寫文章裡真的有討論的內容（40 字內），anchor 寫該篇章節的固定 ID（技術頁標題後面的 {#...}，例：supplier-progress），連結會直接跳到那一節，畫面上顯示章節標題。工具只檢查「連結完整性」（ID 存在），why 的意思是否正確要人工閱讀核對；
               沒有對應內容就只寫 id。
               技術頁標題下會列出「也列於」所有 also 分區
     page    ：已有技術頁時，寫 content/03-Technologies/ 裡的檔名。同一分區有多篇時，排在這份清單前面的是第一眼顯示的主要文章，其餘只列標題
     cases   ：產業證據，一個具體產品或方案一筆：
               { "who": "公司", "key": true, "what": "產品或方案", "evidence": "demo", "source": "來源筆記檔名" }
               研究領域頁只顯示一行分布（例：商業出貨 3・技術展示 1），點開才看到公司與產品；依等級由高到低排
               key：（選填）展開後，同一等級裡排在前面的代表案例
               evidence 用 landscape-frame.js 的 evidence id：demo/sampling/customer/production/shipping/revenue/profit
               report：（研究機構報告必填）依據是研究機構或券商報告（來源筆記 kind 是 industry 或 broker）時寫 "report": true，
                    證據分布會加註「含研究機構報告 N」；公司揭露、本站自己的估算都不寫。它只標「來源是報告」，不代表數字是估計：
                    what 裡要寫清楚這筆是報告的估計、轉述還是整理（例：「Yole 估…」「Yole 2026 版轉述：…」）。update_stats.py 會比對來源類型，並檢查 what 有沒有這幾個字
   主題要等 inbox 整理出資料後才加進來。
   ════════════════════════════════════════════════════════════ */
window.LANDSCAPE = [
  { "id": "cpo", "label": "共同封裝光學（CPO）", "desc": "光電轉換移進晶片封裝：解決什麼問題、有哪些做法、代價與目前證據", "section": "d3-optics", "kind": "hub", "axes": { "conv": "共同封裝（CPO）", "laser": "外部連續波雷射" }, "also": [{ "id": "d3-photonics", "why": "光學引擎疊合的三種封裝平台", "anchor": "engine-stacking" }, "d1-pkg"], "page": "共同封裝光學.md",
    "cases": [
      { "who": "Broadcom", "key": true, "what": "TH5 Bailly 51.2T CPO 交換器（公司 2024 年 3 月宣布已交付客戶，客戶未具名）", "evidence": "shipping", "source": "2024-03-14-Broadcom-Bailly-51.2T-CPO-Switch-Delivery-Press-Release.md" },
      { "who": "NVIDIA", "key": true, "what": "Spectrum-X Ethernet Photonics 交換器（公司 2026 年 5 月稱已在生產；官網稱 2026 下半年上市）", "evidence": "production", "source": "2026-05-31-NVIDIA-Vera-Rubin-Full-Production-Press-Release.md" },
      { "who": "Intel", "what": "OCI 光學 I/O 晶粒（內建雷射）", "evidence": "demo", "source": "2026-10-01-Intel-Silicon-Photonics-Product-Page.md" }
    ] },
  { "id": "pluggable", "label": "可插拔光模組", "desc": "800G 到 3.2T 的光模組：速率、DSP 與 LPO、EML 對矽光子、XPO 與 CPX 新外型", "section": "d3-optics", "kind": "hub", "axes": { "conv": "可插拔模組", "dsp": "線性驅動（LPO）" }, "also": [{ "id": "d3-photonics", "why": "模組光源的選擇：EML 或 CW-DFB 加矽光子", "anchor": "eml-vs-cw" }], "page": "可插拔光模組.md",
    "cases": [
      { "who": "旭創、新易盛", "key": true, "what": "800G/1.6T 光模組（Yole 估 2025 年 datacom 市占 27%、17%）", "evidence": "revenue", "report": true, "source": "2026-05-11-Yole-Optical-Transceivers-for-Datacom-and-Telecom-2026.md" },
      { "who": "Meta 等雲端業者", "key": true, "what": "LPO 模組（Yole 2026 版轉述：Meta 是最大的 LPO 用戶）", "evidence": "shipping", "report": true, "source": "2026-05-11-Yole-Optical-Transceivers-for-Datacom-and-Telecom-2026.md" },
      { "who": "Arista 等", "what": "XPO 12.8T 液冷可插拔（Yole 2026 版轉述 OFC 2026 展示）", "evidence": "demo", "report": true, "source": "2026-05-11-Yole-Optical-Transceivers-for-Datacom-and-Telecom-2026.md" }
    ] },
  { "id": "els", "label": "外部雷射光源（ELS/ELSFP）", "desc": "CPO 的雷射放到前面板可插拔模組：功率、外型標準、每台交換器用量與供應商", "section": "d3-photonics", "kind": "hub", "axes": { "laser": "外部連續波雷射", "conv": "共同封裝（CPO）" }, "also": [{ "id": "d3-optics", "why": "一台 CPO 交換器要幾個外部光源", "anchor": "els-per-switch" }], "page": "外部雷射光源.md",
    "cases": [
      { "who": "Coherent", "key": true, "what": "400 mW CW 雷射送樣、自有 ELS 模組展示", "evidence": "sampling", "source": "2025-09-25-Coherent-400mW-CW-Lasers-Sampling-Press-Release.md" },
      { "who": "聯鈞", "what": "ELSFP 模組工程樣品小量生產（公司說法）", "evidence": "demo", "source": "2026-08-18-聯鈞-2026Q2法人說明會逐字稿.md" }
    ] },
  { "id": "hep", "label": "高階封裝平台（2.5D 與 3D）", "desc": "CoWoS、EMIB、Foveros、SoIC 等平台：中介層與矽橋的取捨、尺寸路線圖、市場與市占", "section": "d1-pkg", "kind": "hub", "also": [{ "id": "d1-sub", "why": "矽、RDL 與模封三種中介層的取捨", "anchor": "interposers" }, { "id": "d1-d2d", "why": "以混合鍵合直接疊晶粒的 3D 整合", "anchor": "hybrid-bonding-3d" }, "d2-hbm"], "page": "高階封裝平台.md",
    "cases": [
      { "who": "台積電", "key": true, "what": "CoWoS-S/R/L 與 SoIC（Yole 估 2024 年高階封裝市占 28%、矽中介層 95%）", "evidence": "revenue", "report": true, "source": "2025-05-20-Yole-High-End-Performance-Packaging-2025.md" },
      { "who": "Intel", "what": "EMIB 與 Foveros（Yole 估 2024 年市占 25%）", "evidence": "revenue", "report": true, "source": "2025-05-20-Yole-High-End-Performance-Packaging-2025.md" },
      { "who": "矽品", "key": true, "what": "FOEB 模封中介層（2021 年起供 AMD MI200；Yole 估模封中介層市占 73%）", "evidence": "revenue", "report": true, "source": "2025-05-20-Yole-High-End-Performance-Packaging-2025.md" }
    ] },
  { "id": "hbm", "label": "高頻寬記憶體（HBM）", "desc": "HBM 的世代、堆疊與鍵合方式、客製基底晶粒、市場規模與供應商", "section": "d2-hbm", "kind": "hub", "also": ["d1-pkg", "d2-main"], "page": "高頻寬記憶體.md",
    "cases": [
      { "who": "SK hynix", "key": true, "what": "HBM4 2026 年第二季開始大量出貨（公司 2026 年 7 月財報稱）", "evidence": "shipping", "source": "2026-07-29-SK-hynix-2Q26-Financial-Results-Press-Release.md" },
      { "who": "Micron", "key": true, "what": "HBM4 36GB 12H 2026 年第一季開始量產出貨，稱為 NVIDIA Vera Rubin 設計（公司 2026 年 3 月稱）", "evidence": "shipping", "source": "2026-03-16-Micron-HBM4-High-Volume-Production-Press-Release.md" },
      { "who": "Samsung", "what": "HBM4 2026 年 2 月開始量產並出貨商用產品，未點名客戶（公司稱）", "evidence": "shipping", "source": "2026-02-12-Samsung-HBM4-Mass-Production-Shipment-Press-Release.md" }
    ] },
  { "id": "be-equip", "label": "後段封裝設備（切割、薄化與鍵合）", "desc": "薄化、切割、固晶、TCB 與混合鍵合設備：市場規模、廠商市占、HBM 鍵合路線與台灣設備廠", "section": "x-equip", "kind": "hub", "also": [{ "id": "x-inspect", "why": "後段量測檢測在流程中的位置與主要廠商", "anchor": "how-it-works" }, "d1-pkg", "d2-hbm"], "page": "後段封裝設備.md",
    "cases": [
      { "who": "Hanmi", "key": true, "what": "HBM 用 TCB，客戶 SK hynix、Micron（Yole 估 2024 年 TCB 市占約 43%）", "evidence": "revenue", "report": true, "source": "2025-07-15-Yole-Status-of-the-Back-End-Equipment-Industry-2025.md" },
      { "who": "BESI", "key": true, "what": "D2W 混合鍵合（Yole 估 2024 年約七成；AMAT 入股）", "evidence": "revenue", "report": true, "source": "2025-07-15-Yole-Status-of-the-Back-End-Equipment-Industry-2025.md" },
      { "who": "DISCO", "what": "切割與薄化（Yole 估 2024 年後段設備市占 20.7%）", "evidence": "revenue", "report": true, "source": "2025-07-15-Yole-Status-of-the-Back-End-Equipment-Industry-2025.md" }
    ] },
  { "id": "ai-accel", "label": "AI 加速器（GPU 與 AI ASIC）", "desc": "資料中心 GPU 與雲端業者自研 AI ASIC：市場規模、市占、設計夥伴、製程與 chiplet 趨勢", "section": "d1-chip", "kind": "hub", "also": [{ "id": "d1-split", "why": "Blackwell、Rubin、AMD 如何拆成多顆 chiplet", "anchor": "chiplets" }, { "id": "d1-pkg", "why": "大型晶片推動中介層與載板變大", "anchor": "chiplets" }, "d2-hbm"], "page": "AI加速器.md",
    "cases": [
      { "who": "NVIDIA", "key": true, "what": "Blackwell 旗艦 GPU（Yole 估 2024 年伺服器 GPU 市占 94%）", "evidence": "revenue", "report": true, "source": "2025-06-30-Yole-Generative-AI-2025-Computing-and-AI-for-Data-Center.md" },
      { "who": "Google", "key": true, "what": "TPU，Broadcom 協同設計（Yole 估 2024 年 AI ASIC 第一）", "evidence": "shipping", "report": true, "source": "2025-06-30-Yole-Generative-AI-2025-Computing-and-AI-for-Data-Center.md" },
      { "who": "AWS", "what": "Trainium3 UltraServers 2025 年 12 月正式上市（AWS 新聞稿）", "evidence": "shipping", "source": "2025-12-02-AWS-Trainium3-UltraServers-GA-Press-Release.md" }
    ] },
  { "id": "dc-psu", "label": "資料中心電源供應器（PSU）與供電架構", "desc": "AI 機櫃的 PSU 與電源架、配電架構演進、SiC 與 GaN 功率元件、BBU 與 400 V 直流，以及台灣電源廠", "section": "d4-rack", "kind": "hub", "also": [{ "id": "d4-board", "why": "IBC、POL 與垂直供電", "anchor": "near-chip-power" }, { "id": "d4-backup", "why": "機櫃內 BBU 逐漸取代上游 UPS", "anchor": "how-it-works" }, { "id": "d4-facility", "why": "固態變壓器與 400 V、800 V 直流配電", "anchor": "power-architecture" }], "page": "資料中心電源供應器.md",
    "cases": [
      { "who": "台達", "key": true, "what": "資料中心相關業務（公司稱 2026 上半年占合併營收過半；範圍含電源以外的產品，不是 PSU 單項貢獻）", "evidence": "revenue", "source": "2026-07-30-台達-2026Q2法人說明會逐字稿.md" },
      { "who": "光寶", "key": true, "what": "雲端及物聯網部門（2Q26 營收年增逾七成、占營收 55%；部門含 PSU 以外的產品，不是 AI 電源單項貢獻）", "evidence": "revenue", "source": "2026-07-31-光寶-2026Q2法人說明會簡報.md" },
      { "who": "日月光", "what": "powerSiP 垂直供電封裝平台（Yole 2025 版轉述公司發表）", "evidence": "demo", "report": true, "source": "2025-05-23-Yole-Power-Electronics-for-Data-Centers-2025.md" }
    ] }
];
