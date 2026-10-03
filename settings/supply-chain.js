/* ════════════════════════════════════════════════════════════
   公司與供應鏈頁的用詞設定
   公司檔（content/01-Companies/）裡的 role、status、nature、mark、market、type 都要用這裡的 id；
   tools/update_stats.py 也用這裡檢查公司檔有沒有填錯。
   研究領域與主題不在這裡：直接用 settings/landscape-frame.js，兩頁共用同一份。

   格式注意：每個清單一項一行，寫成 { id: "…", label: "…" }，清單用獨立一行的 ] 結尾（檢查程式靠這個讀）。
   ════════════════════════════════════════════════════════════ */
window.SUPPLY_CHAIN = {

  // ── 頁首一句話 ──
  intro: "依研究領域查找公司，查看其產品、產業角色與公開證據。",

  // ── 還沒有任何公司資料時的說明（有資料後就不顯示）──
  empty: {
    title: "目前還沒有整理公司資料。",
    text: "整理後，這一頁可以依研究領域、研究主題、產業角色與掛牌市場篩選公司，" +
          "在清單上直接比較各家提供的具體產品與最新公開進展；點開一家公司，" +
          "可以看每項說法的證據、證據邊界、來源與公司之間的關係。"
  },

  // ── 角色分組（角色概覽用；沒有先後順序）──
  roleGroups: [
    { id: "matcomp",  label: "材料與零組件" },
    { id: "tools",    label: "設備與檢測" },
    { id: "make",     label: "設計與製造" },
    { id: "products", label: "產品與系統" },
    { id: "services", label: "服務與建置" },
    { id: "buyers",   label: "採購與部署" }
  ],

  // ── 產業角色：只回答「做什麼」；「在哪個領域的哪一塊」由公司檔的 section 回答 ──
  roles: [
    { id: "material",     label: "材料",               group: "matcomp" },
    { id: "component",    label: "零組件與中間產品",   group: "matcomp" },
    { id: "equipment",    label: "製程設備",           group: "tools" },
    { id: "inspection",   label: "檢測與量測設備",     group: "tools" },
    { id: "test",         label: "測試設備與測試介面", group: "tools" },
    { id: "chip",         label: "晶片設計",           group: "make" },
    { id: "foundry",      label: "晶圓製造",           group: "make" },
    { id: "packaging",    label: "封裝與測試服務",     group: "make" },
    { id: "system",       label: "模組與整機系統",     group: "products" },
    { id: "service",      label: "分析、驗證與工程服務", group: "services" },
    { id: "construction", label: "資料中心與機電建置", group: "services" },
    { id: "customer",     label: "雲端、平台與採購部署者", group: "buyers" }
  ],

  // ── 公開進展：彼此不排順序、不合成進度 ──
  status: [
    { id: "research",   label: "研發中" },
    { id: "capability", label: "具備能力" },
    { id: "demo",       label: "技術展示" },
    { id: "sampling",   label: "送樣" },
    { id: "customer",   label: "客戶驗證" },
    { id: "shipping",   label: "商業出貨" },
    { id: "revenue",    label: "相關收入" },
    { id: "profit",     label: "獲利與現金流" }
  ],

  // ── 來源性質：這是什麼來源（證據的 nature 用這裡的 id）。它不代表「證實到哪」，證實程度看下面的 marks ──
  //   推論不是來源，只寫在研究判讀裡
  nature: [
    { id: "academic",  label: "學術" },
    { id: "industry",  label: "產業" },
    { id: "vendor",    label: "廠商宣稱" }
  ],

  // ── 證據狀態：這件事證實到哪（角色的 state.mark 與 progress.mark 用這裡的 id）──
  //   label 是說明，tag 是畫面上的短標記；樣式在 assets/css/2-base.css 的 .ev-<style>
  //   fact：已有獨立或客觀可驗證的證據（正式公告的設備採購、實際揭露的營收、客戶端確認）
  //   said：被描述為已發生，但主要證據仍來自公司自己
  //   plan：還沒發生的時程或目標（只用在進度）
  //   inferred：研究者從幾筆證據推出來的（只用在現況）
  marks: [
    { id: "fact",     label: "已確認",       tag: "已確認",   style: "fact" },
    { id: "said",     label: "公司說法",     tag: "公司說法", style: "said" },
    { id: "plan",     label: "已宣布或計畫中", tag: "計畫",   style: "plan" },
    { id: "inferred", label: "研究者推論",   tag: "推論",     style: "inf" }
  ],

  // ── 來源類型：來源筆記開頭的 kind 用這裡的 id；voice 是「誰說的」，會顯示在每條證據旁；hint 是來源庫說明裡的「適合拿來確認什麼」──
  //   例：公司說法 · 法說會逐字稿 · 2026-09-24
  sourceKinds: [
    { id: "transcript", label: "法說會逐字稿", voice: "公司說法", hint: "管理層當天怎麼說、怎麼回答問題" },
    { id: "slides",     label: "法說會簡報",   voice: "公司說法", hint: "公司揭露的財務數字與官方說法" },
    { id: "filing",     label: "財報與年報",   voice: "公司申報", hint: "正式申報的事實與目標" },
    { id: "press",      label: "公司新聞稿",   voice: "公司說法", hint: "公司宣布的里程碑；未經第三方驗證" },
    { id: "web",        label: "公司官網",     voice: "公司說法", hint: "擷取當時的產品定位；內容會更新" },
    { id: "product",    label: "產品文件",     voice: "公司說法", hint: "產品規格與架構；不代表出貨量" },
    { id: "customer",   label: "客戶文件",     voice: "客戶說法", hint: "採用方的確認" },
    { id: "broker",     label: "券商報告",     voice: "券商轉述", hint: "轉述的公司資訊與券商自己的假設" },
    { id: "news",       label: "媒體報導",     voice: "媒體轉述", hint: "事件的時間點；說法以原始出處為準" },
    { id: "industry",   label: "產業報告",     voice: "產業分析", hint: "市場定義、分類與研究機構的估計" },
    { id: "paper",      label: "學術論文",     voice: "學術研究", hint: "原理、作者的試算與結論；注意年代" },
    { id: "standard",   label: "標準文件",     voice: "標準組織", hint: "定義、要求與架構選項；不代表有產品採用" },
    { id: "patent",     label: "專利",         voice: "專利文件", hint: "技術方向；不代表量產" },
    { id: "teardown",   label: "產品拆解",     voice: "實物驗證", hint: "產品實際用了什麼" },
    { id: "other",      label: "其他",         voice: "其他來源", hint: "" }
  ],

  // ── 來源筆記「關鍵陳述」的性質類別：每一條說法這份來源怎麼說的（定義見 content/04-Sources/_說明.md）──
  //   筆記裡寫 label（可加「（補充）」）；style 決定來源頁上的標記樣式（2-base.css 的 .ev-<style>）
  //   綠＝已發生；橘＝公司自己說；橘虛線＝未來；灰＝定義、規格以外的第三方或學術；灰虛線＝模型與分析
  claimKinds: [
    { id: "done",      label: "已實現",         style: "fact" },
    { id: "spec",      label: "產品規格",       style: "said" },
    { id: "standard",  label: "標準／框架定義", style: "unknown" },
    { id: "stated",    label: "公司陳述",       style: "said" },
    { id: "target",    label: "目標與預測",     style: "plan" },
    { id: "model",     label: "試算與假設",     style: "inf" },
    { id: "judgment",  label: "作者判斷",       style: "unknown" },
    { id: "relay",     label: "轉述",           style: "unknown" },
    { id: "analysis",  label: "外部分析",       style: "inf" }
  ],

  // ── 量產狀態的固定五格（公司檔角色裡 commercial 的 group 用這裡的 id；順序就是畫面順序）──
  commercialGroups: [
    { id: "invest",   label: "投入", hint: "資本支出、設備、廠房、產線" },
    { id: "qualify",  label: "驗證", hint: "送樣、客戶驗證" },
    { id: "capacity", label: "產能", hint: "月產能、設備數、良率" },
    { id: "ship",     label: "出貨", hint: "首批出貨、量產時間" },
    { id: "scale",    label: "規模", hint: "這項業務的營收、客戶數與客戶類型" }
  ],

  // ── 掛牌市場 ──
  markets: [
    { id: "tw",    label: "台股" },
    { id: "us",    label: "美股" },
    { id: "cn",    label: "中國 A 股" },
    { id: "hk",    label: "港股" },
    { id: "jp",    label: "日股" },
    { id: "kr",    label: "韓股" },
    { id: "eu",    label: "歐洲市場" },
    { id: "other", label: "其他市場" }
  ],

  // ── 關係的證實狀態：這段關係本身被證實到哪（和來源品質無關；來源類型由來源筆記帶出）──
  //   confirmed：對方或採用方官方具名確認　stated：只有本公司自己公開表示　reported：券商、媒體等第三方指向，雙方都沒具名
  //   再可信的券商寫得再明確，仍然是 reported；推論出來的關係不記成關係，寫在研究判讀
  relationStatus: [
    { id: "confirmed", label: "對方官方具名", style: "fact" },
    { id: "stated",    label: "公司自述",     style: "said" },
    { id: "reported",  label: "第三方指向",   style: "unknown" }
  ],

  // ── 公司關係：一律從公司檔本身的角度寫 ──
  relations: [
    { id: "supply",     label: "供應" },
    { id: "distribute", label: "代理" },
    { id: "adopt",      label: "採用" },
    { id: "collab",     label: "合作" },
    { id: "capital",    label: "資本" },
    { id: "compete",    label: "競爭與替代" }
  ]
};
