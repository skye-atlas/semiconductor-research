/* ════════════════════════════════════════════════════════════
   全站共用設定：網站名稱、導覽列、頁尾
   改這裡，四個頁面會一起變（不用逐頁改 HTML）。
   ════════════════════════════════════════════════════════════ */
window.SITE = {

  // ── 左上角的網站名稱 ──
  name: "天空研究室",
  subtitle: "SEMICONDUCTOR & COMPUTE INFRASTRUCTURE · 知識版",

  // ── 頂欄導覽：順序就是顯示順序 ──
  //   id   ：對應頁面 <body data-page="…"> 的值，用來標出「目前在哪一頁」
  //   label：顯示的文字
  //   href ：從網站最外層算起的路徑（首頁要寫 index.html，直接開檔案時才不會跑到資料夾清單）
  nav: [
    { id: "home",      label: "首頁",         href: "index.html" },
    { id: "domains",   label: "研究領域",     href: "pages/domains.html" },
    { id: "companies", label: "公司與供應鏈", href: "pages/companies.html" },
    { id: "sources",   label: "來源庫",       href: "pages/sources.html" }
  ],

  // ── 頂欄搜尋框的提示字 ──
  searchPlaceholder: "搜尋領域、技術、公司",

  // ── 頁尾 ──
  footer: {
    // 可以用 <b>…</b> 加粗
    note: "<b>這是一份個人研究筆記，不是投資建議。</b>內容整理自公司公告、財報、專利、學術論文與產業媒體；" +
          "每一頁下方都列出它依據的資料，並標明<b>那份資料是什麼性質</b>、是一手還是轉述。",
    // 來源標籤圖例：style 決定樣式（acad/ind 是灰字、vendor 是橘底、inf 是虛線框）
    legend: [
      { tag: "學術",     style: "acad",   text: "同儕審查論文" },
      { tag: "產業",     style: "ind",    text: "多方可驗證的產業現況" },
      { tag: "廠商宣稱", style: "vendor", text: "未經獨立驗證" },
      { tag: "推論",     style: "inf",    text: "研究者的推導" }
    ],
    stampLabel: "全站內容更新至"   // 後面接的日期由 tools/update_stats.py 自動填：來源收錄日與技術頁更新紀錄中最新的一天（各技術頁自己的更新日寫在標題下）
  }
};
