/* ════════════════════════════════════════════════════════════
   來源抽屜（公司檔案頁、公司與供應鏈頁共用）
   點出處時從右邊滑出，不離開頁面：你點的這一筆 → 這份來源 → 它能證明/不能證明什麼 → 本頁其他引用

   用法一（來源）：SourceDrawer.toggle(被點的連結, { file, voice, card, others })
     file   ：來源筆記檔名（content/04-Sources/ 裡的 .md）
     ref    ：（選填）關鍵陳述編號清單，例：["T13"]；「來源筆記 →」直接連到第一條
     voice  ：（選填）這一筆的「誰說的」；轉述時會和來源本身不同
     card   ：（選填）{ kind: "角色證據", fields: [[欄位名, 文字], …] }
     others ：（選填）[{ kind, text, go: function }]，點了執行 go()
   用法二（其他內容，例：公司與供應鏈頁的公司預覽）：SourceDrawer.panel(被點的元素, 已組好的 HTML, 抽屜名稱)
   來源的標題、類型、發言人、能證明/不能證明，取自 generated/sources.js（window.SOURCES）。
   關閉：右上角 ×、Esc、或再點同一個出處（或同一個被點的元素）。樣式在 assets/css/2-base.css 的「來源抽屜」。
   ════════════════════════════════════════════════════════════ */
(function () {
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  var drawer, body, opener = null, others = [];

  function root() { return (document.body.dataset.root || '.') + '/'; }
  function lookup(file) {
    var s = (window.SOURCES || []).filter(function (x) { return x.file === file; })[0];
    if (!s) return null;
    var kinds = (window.SUPPLY_CHAIN || {}).sourceKinds || [];
    var k = kinds.filter(function (x) { return x.id === s.kind; })[0] || { label: '來源筆記', voice: '' };
    return {
      title: s.title, kind: k.label, voice: k.voice, date: s.date, publisher: s.publisher, event: s.event,
      speakers: s.speakers || [], proves: s.proves || '',
      url: root() + 'generated/pages/04-Sources/' + encodeURI(file.replace(/\.md$/, '.html'))
    };
  }

  function build() {
    drawer = document.createElement('aside');
    drawer.className = 'dr';
    drawer.id = 'source-drawer';
    drawer.hidden = true;
    drawer.setAttribute('role', 'dialog');
    drawer.setAttribute('aria-label', '來源');
    drawer.innerHTML = '<button type="button" class="dr-close" aria-label="關閉抽屜">×</button><div class="dr-body" tabindex="-1"></div>';
    document.body.appendChild(drawer);
    body = drawer.querySelector('.dr-body');
    drawer.addEventListener('click', function (ev) {
      if (ev.target.closest('.dr-close')) { close(); return; }
      var go = ev.target.closest('[data-other]');
      if (go && others[+go.dataset.other] && others[+go.dataset.other].go) others[+go.dataset.other].go();
    });
    document.addEventListener('keydown', function (ev) { if (ev.key === 'Escape') close(); });
    window.addEventListener('resize', place);
  }
  // 抽屜貼在頂欄下方；內文的左緣固定不動，只有右邊會被抽屜蓋到時才往內縮（窄螢幕是整面覆蓋，不調整）
  var wrap = null;
  function place() {
    var header = document.getElementById('site-header');
    drawer.style.top = (header ? header.offsetHeight : 0) + 'px';
    release();
    if (drawer.hidden || window.innerWidth < 1000) return;
    wrap = document.querySelector('main.wrap');
    if (!wrap) return;
    var box = wrap.getBoundingClientRect();
    var room = document.documentElement.clientWidth - drawer.offsetWidth - 16 - box.left;   // 抽屜左邊留 16px
    wrap.style.marginLeft = box.left + 'px';
    wrap.style.marginRight = '0';
    wrap.style.maxWidth = Math.min(box.width, room) + 'px';
  }
  function release() {
    if (!wrap) return;
    wrap.style.marginLeft = wrap.style.marginRight = wrap.style.maxWidth = '';
    wrap = null;
  }
  function fields(list) {
    return '<dl class="dr-kv">' + list.filter(function (f) { return f[1]; }).map(function (f) {
      return '<div><dt>' + esc(f[0]) + '</dt><dd>' + esc(f[1]) + '</dd></div>';
    }).join('') + '</dl>';
  }

  function open(link, opt) {
    var s = lookup(opt.file);
    if (!s) return false;               // 找不到來源資料：讓連結照常打開來源筆記
    if (!drawer) build();
    others = opt.others || [];
    var ref = opt.ref || [];
    drawer.setAttribute('aria-label', '來源');
    body.innerHTML =
      '<p class="dr-prov"><b>' + esc(opt.voice || s.voice) + '</b> · ' + esc(s.kind) + (s.date ? ' · ' + esc(s.date) : '') + '</p>' +
      '<h2 class="dr-title">' + esc(s.title) + '</h2>' +
      '<p class="dr-go"><a class="art" href="' + s.url + (ref.length ? '#' + encodeURIComponent(ref[0]) : '') + '">' +
        (ref.length ? '來源筆記的 ' + esc(ref.join('、')) + ' →' : '來源筆記 →') + '</a></p>' +
      (opt.card ? '<section><h3>你點的這一筆<span class="tag">' + esc(opt.card.kind) + '</span></h3>' + fields(opt.card.fields) + '</section>' : '') +
      '<section><h3>這份來源</h3>' + fields([
        ['誰說的', s.voice], ['來源類型', s.kind], ['場合', s.event], ['發布者', s.publisher],
        ['發言人', s.speakers.join('、')], ['日期', s.date]]) +
        '</section>' +
      (s.proves ? '<section class="dr-proves"><h3>證據界線</h3>' + s.proves + '</section>' : '') +
      (others.length ? '<section><h3>本頁還有 ' + others.length + ' 處引用這份來源</h3><ul class="dr-uses">' +
        others.map(function (o, i) {
          return '<li><button type="button" data-other="' + i + '"><span class="tag">' + esc(o.kind) + '</span>' + esc(o.text) + '</button></li>';
        }).join('') + '</ul></section>' : '');
    return reveal(link);
  }
  // 其他內容：呼叫端組好 HTML，抽屜只負責開關與位置
  function openPanel(link, html, name) {
    if (!drawer) build();
    others = [];
    drawer.setAttribute('aria-label', name || '詳細資料');
    body.innerHTML = html;
    return reveal(link);
  }
  function reveal(link) {
    if (opener) opener.removeAttribute('aria-expanded');
    opener = link;
    link.setAttribute('aria-expanded', 'true');
    drawer.hidden = false;
    place();
    requestAnimationFrame(function () { drawer.classList.add('on'); });   // 下一格畫面再加，滑入動畫才會播
    document.body.classList.add('dr-open');
    body.scrollTop = 0;
    body.focus({ preventScroll: true });
    return true;
  }
  function close() {
    if (!drawer || drawer.hidden) return;
    drawer.classList.remove('on');
    drawer.hidden = true;
    release();
    document.body.classList.remove('dr-open');
    if (opener) {
      opener.removeAttribute('aria-expanded');
      if (document.contains(opener)) opener.focus({ preventScroll: true });
    }
    opener = null;
  }

  window.SourceDrawer = {
    // 再點同一個出處＝關閉；回傳 false 表示沒有開成（呼叫端就讓連結照常運作）
    toggle: function (link, opt) { if (link === opener) { close(); return true; } return open(link, opt); },
    panel: function (link, html, name) { if (link === opener) { close(); return true; } return openPanel(link, html, name); },
    close: close,
    isOpen: function () { return !!drawer && !drawer.hidden; }
  };
})();
