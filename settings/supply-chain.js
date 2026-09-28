/* ════════════════════════════════════════════════════════════
   公司與供應鏈頁的分類設定
   地圖的五欄、領域按鈕、每個下拉篩選的選項都從這裡產生。
   新增或改名一個選項：改這裡就好，不用碰 HTML。
   每一項的 id 是給程式辨認的代號（英文、不要重複），label 是畫面上的文字。
   ════════════════════════════════════════════════════════════ */
window.SUPPLY_CHAIN = {

  // ── 五段價值鏈（地圖的五欄，由左到右）──
  //   desc：欄位標題下方的小字說明
  stages: [
    { id: "materials",     label: "01 材料與關鍵元件",
      desc: "提供後續製造所需的材料或關鍵元件 — 含光學引擎、雷射光源、光纖陣列這類還要再被整合進封裝或系統的元件" },
    { id: "process",       label: "02 製程、設備與控制",
      desc: "提供加工、量測、檢測、製程控制的工具與服務" },
    { id: "manufacturing", label: "03 製造與封裝",
      desc: "實際製造晶圓、晶片、基板、封裝或相關的中間產品" },
    { id: "systems",       label: "04 產品與系統整合",
      desc: "提供可被系統或平台直接採用的產品：晶片設計、光模組、網通設備與整合系統 — 「產品」包含 IC 設計，不只指整合這個動作；光學引擎要再被共同封裝進去，所以在 01" },
    { id: "demand",        label: "05 平台與應用需求",
      desc: "使用上述產品建構平台、資料中心或終端系統，形成最終需求" }
  ],

  // ── 領域按鈕 ──
  domains: [
    { id: "d1", label: "晶片製造與封裝整合" },
    { id: "d2", label: "記憶體與儲存" },
    { id: "d3", label: "高速互連與網路" },
    { id: "d4", label: "供電與電力基礎設施" },
    { id: "d5", label: "散熱與熱管理" }
  ],

  // ── 下拉篩選：順序就是畫面上的順序 ──
  //   multi: true  可以複選；false 只能單選
  //   options 空的（[]）：選項要等有公司資料才會出現
  filters: [
    { id: "role", label: "角色", multi: true, options: [
      { id: "material",   label: "材料" },
      { id: "component",  label: "零組件" },
      { id: "equipment",  label: "製程設備" },
      { id: "inspection", label: "檢測與量測" },
      { id: "test",       label: "電性與光學測試、測試介面" },
      { id: "substrate",  label: "基板與中介層" },
      { id: "foundry",    label: "晶圓代工與 IDM" },
      { id: "packaging",  label: "封裝與測試服務" },
      { id: "service",    label: "分析與驗證服務" },
      { id: "chip",       label: "晶片設計" },
      { id: "system",     label: "模組與系統" },
      { id: "power",      label: "電源與電力設備" },
      { id: "cooling",    label: "冷卻設備" },
      { id: "customer",   label: "雲端與平台業者" }
    ]},
    { id: "cap", label: "能力", multi: true, options: [] },
    { id: "use", label: "應用", multi: true, options: [] },
    { id: "stage", label: "商業階段", multi: true, options: [
      { id: "research",      label: "研發" },
      { id: "prototype",     label: "展示或試作" },
      { id: "launch",        label: "產品發表" },
      { id: "sampling",      label: "送樣" },
      { id: "qualification", label: "驗證" },
      { id: "pilot",         label: "試產" },
      { id: "shipping",      label: "出貨" },
      { id: "volume",        label: "量產" },
      { id: "deployed",      label: "部署" },
      { id: "none",          label: "出處沒寫階段" }
    ]},
    { id: "mkt", label: "掛牌市場", multi: true, options: [
      { id: "tw",    label: "台股" },
      { id: "us",    label: "美股" },
      { id: "cn",    label: "中國 A 股" },
      { id: "hk",    label: "港股" },
      { id: "jp",    label: "日股" },
      { id: "kr",    label: "韓股" },
      { id: "eu",    label: "歐洲" },
      { id: "other", label: "其他" },
      { id: "none",  label: "掛牌資訊未登記" }
    ]},
    { id: "conf", label: "證據", multi: false, options: [
      { id: "1", label: "已有產品/用途證據" },
      { id: "0", label: "開發中、階段或用途待確認" }
    ]},
    { id: "rel", label: "關係", multi: false, options: [
      { id: "supply",  label: "供應與代理" },
      { id: "adopt",   label: "第三方採用" },
      { id: "collab",  label: "合作" },
      { id: "capital", label: "資本" },
      { id: "compete", label: "競爭與替代" }
    ]}
  ],

  // ── 說明文字裡的關係圖例（外框樣式在 assets/css/4-supply-chain.css 的 .rel-*）──
  relationLegend: ["supply", "adopt", "collab", "capital"]
};
