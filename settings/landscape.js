/* ════════════════════════════════════════════════════════════
   技術主題清單
   首頁「N 個主題」數的是這份清單有幾項。
   層級與主要主題（section）的定義在 settings/landscape-frame.js。
   有 page 的會掛在研究領域頁對應的主要主題底下；沒有 page 的列在該主題的「待補內容」。

   一個主題一行，格式照下面的例子（要用雙引號，最後一項後面不加逗號，清單裡不能寫註解）：
     { "id": "hbm", "label": "高頻寬記憶體 HBM", "desc": "一句話說明這篇在回答什麼", "section": "d2-hbm" }
   必填
     id      ：代號（英文、不要重複）
     label   ：畫面上的名稱
     desc    ：一句用途（文章清單顯示在名稱下方）
     section ：放在哪一個主要主題（landscape-frame.js 裡 sections 的 id）
   選填
     kind    ："hub" 主頁／"option" 方案比較／"app" 應用頁；不寫就是一般技術
     axes    ：在分類軸上的位置，例如 { "conv": "共同封裝（CPO）" }（目前只有 ③ 有分類軸，值要和 landscape-frame.js 的 options 一字不差）
     also    ：也相關的主要主題 id。同一個領域的主題：文章也會列在那個主題底下；
               別的領域、而且那裡已有文章時：文章下方會出現「另見」連結
     page    ：已有技術頁時，寫 content/03-Technologies/ 裡的檔名
     cases   ：產業證據，一個具體產品或方案一筆：
               { "who": "公司", "what": "產品或方案", "evidence": "demo", "source": "來源筆記檔名" }
               evidence 用 landscape-frame.js 的 evidence id：demo／customer／shipping／revenue／profit
   主題要等 inbox 整理出資料後才加進來。
   ════════════════════════════════════════════════════════════ */
window.LANDSCAPE = [
];
