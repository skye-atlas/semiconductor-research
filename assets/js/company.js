/* ════════════════════════════════════════════════════════════
   公司檔案頁
   1. 側欄「本頁章節」跟著捲動標出目前所在的段落
   2. 點任何出處（.cp-srcbtn）→ 開來源抽屜（assets/js/drawer.js）
      每個出處的「你點的這一筆」資料在頁面裡的 <script id="cp-data">（tools/company_page.py 轉檔時寫入）。
      按住 Ctrl／⌘ 點擊則照常在新分頁開來源筆記。
   ════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function () {
  // ── 1. 本頁章節 ──
  var links = document.querySelectorAll('.cp-toc a');
  if (links.length) {
    var secs = Array.prototype.map.call(links, function (a) { return document.getElementById(a.getAttribute('href').slice(1)); });
    var spy = function () {
      var cur = 0;
      secs.forEach(function (s, i) { if (s && s.getBoundingClientRect().top <= 120) cur = i; });
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) cur = secs.length - 1;
      links.forEach(function (a, i) { if (i === cur) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current'); });
    };
    window.addEventListener('scroll', spy, { passive: true });
    spy();
  }

  // 側欄的章節連結或「看清單 →」點到預設收起的段落（其他早期方向、來源）時，順便把它打開
  document.addEventListener('click', function (ev) {
    var a = ev.target.closest('.cp-side a[href^="#"]');
    var fold = a && document.querySelector(a.getAttribute('href') + ' > .cp-srcfold');   // 其他早期方向、來源
    if (fold) fold.open = true;
  });

  // ── 2. 來源抽屜 ──
  var dataEl = document.getElementById('cp-data');
  if (!dataEl || !window.SourceDrawer) return;
  var cards;
  try { cards = JSON.parse(dataEl.textContent).cards || []; } catch (e) { return; }

  function show(link) {
    var idx = link.dataset.card === undefined ? null : +link.dataset.card;
    var card = idx == null ? null : cards[idx];
    // 本頁其他引用同一份來源的地方：點了捲過去，抽屜換成那一筆
    var others = cards.map(function (c, i) { return { c: c, i: i }; })
      .filter(function (x) { return x.c.src === link.dataset.src && x.i !== idx; })
      .map(function (x) {
        return { kind: x.c.kind, text: (x.c.fields[0] || ['', ''])[1], go: function () {
          var target = document.querySelector('.cp-srcbtn[data-card="' + x.i + '"]');
          if (!target) return;
          // 目標可能在收起的段落裡（而且可能有兩層），一路往外把它們都打開
          for (var d = target.closest('details'); d; d = d.parentElement.closest('details')) d.open = true;
          target.scrollIntoView({ block: 'center' });
          show(target);
        } };
      });
    return SourceDrawer.toggle(link, { file: link.dataset.src, voice: card && card.voice, card: card, others: others });
  }
  document.addEventListener('click', function (ev) {
    var link = ev.target.closest('.cp-srcbtn');
    if (!link || ev.ctrlKey || ev.metaKey || ev.shiftKey || ev.button) return;
    if (show(link)) ev.preventDefault();
  });
});
