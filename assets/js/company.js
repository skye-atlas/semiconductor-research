/* ════════════════════════════════════════════════════════════
   公司檔案頁
   1. 側欄「本頁章節」跟著捲動標出目前所在的段落
   2. 點任何出處（.cp-srcbtn）→ 開來源抽屜（assets/js/drawer.js）
      每個出處的「你點的這一筆」資料在頁面裡的 <script id="cp-data">（tools/company_page.py 轉檔時寫入）。
      按住 Ctrl/⌘ 點擊則照常在新分頁開來源筆記。
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

  // 側欄的章節連結或「看清單 →」點到預設收起的段落（其他方向、來源）時，順便把它打開
  document.addEventListener('click', function (ev) {
    var a = ev.target.closest('.cp-side a[href^="#"]');
    var fold = a && document.querySelector(a.getAttribute('href') + ' > .cp-srcfold');   // 其他方向、來源
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
          // 目標可能在別的分頁或收起的段落裡（而且可能有兩層），先切分頁、再一路往外把它們都打開
          if (window.cpReveal) window.cpReveal(target);
          for (var d = target.closest('details'); d; d = d.parentElement.closest('details')) d.open = true;
          target.scrollIntoView({ block: 'center' });
          show(target);
        } };
      });
    return SourceDrawer.toggle(link, { file: link.dataset.src, ref: card && card.ref, voice: card && card.voice, card: card, others: others });
  }
  document.addEventListener('click', function (ev) {
    var link = ev.target.closest('.cp-srcbtn');
    if (!link || ev.ctrlKey || ev.metaKey || ev.shiftKey || ev.button) return;
    if (show(link)) ev.preventDefault();
  });
});

// 分頁（有「公司與能力」的公司頁）：.cp-tabs 的標籤對應 .cp-tab 容器；錨點不變，連到哪一段就切到它所在的分頁
//   沒有 JavaScript 時沒有 cp-tabbed，全部分頁照順序排下來
window.cpReveal = function (el) {
  var panel = el && el.closest && el.closest('.cp-tab');
  if (!panel || panel.classList.contains('is-on')) return;
  document.querySelectorAll('.cp-tab').forEach(function (p) { p.classList.toggle('is-on', p === panel); });
  document.querySelectorAll('.cp-tabs a').forEach(function (a) {
    var on = a.dataset.panel === panel.id;
    a.setAttribute('aria-selected', on ? 'true' : 'false');
    // 手機上標籤列會橫向捲動：把選中的標籤捲進可見範圍（只動標籤列，不動頁面）
    if (on) {
      var bar = a.parentElement;
      bar.scrollLeft = Math.max(0, a.offsetLeft - bar.offsetLeft - 16);
      bar.dispatchEvent(new Event('scroll'));     // 更新右緣淡出提示
    }
  });
};

// 標籤列右側還有看不到的標籤時，加 has-more 讓右緣淡出
document.addEventListener('DOMContentLoaded', function () {
  var bar = document.querySelector('.cp-tabs');
  if (!bar) return;
  var mark = function () { bar.classList.toggle('has-more', bar.scrollLeft + bar.clientWidth < bar.scrollWidth - 4); };
  bar.addEventListener('scroll', mark, { passive: true });
  window.addEventListener('resize', mark);
  mark();
});

// 目錄或頁內連結跳到別的分頁或收起的 <details> 裡（或它本身）時，先切分頁、展開，再捲過去
(function () {
  function openHash() {
    var id = decodeURIComponent(location.hash.slice(1));
    var el = id && document.getElementById(id);
    if (!el) return;
    window.cpReveal(el);
    // 點的是分頁標籤本身：捲到標籤列，讓讀者從這一頁的開頭讀
    var tab = document.querySelector('.cp-tabs a[href="#' + CSS.escape(id) + '"]');
    if (tab) { tab.parentElement.scrollIntoView(); return; }
    if (el.tagName === 'DETAILS') el.open = true;
    for (var d = el.parentElement && el.parentElement.closest('details'); d; d = d.parentElement && d.parentElement.closest('details')) d.open = true;
    el.scrollIntoView();
  }
  window.addEventListener('hashchange', openHash);
  document.addEventListener('DOMContentLoaded', function () {
    openHash();
    document.addEventListener('click', function (ev) {
      var a = ev.target.closest && ev.target.closest('a[href^="#"]');
      if (a && a.getAttribute('href') === location.hash) setTimeout(openHash, 0);
    });
  });
})();
