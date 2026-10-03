/* ════════════════════════════════════════════════════════════
   搜尋頁：在瀏覽器裡直接比對，不需要伺服器
   搜尋範圍：研究領域與主要主題（settings/landscape-frame.js）、文章（settings/landscape.js）、
            公司（generated/companies.js）、轉成網頁的文章與來源筆記全文（generated/pages-index.js）
   多個關鍵字用空白隔開時，每個都要找得到才算符合。
   ════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function () {
  var F = window.LANDSCAPE_FRAME, C = window.SUPPLY_CHAIN || { roles: [] };
  var topics = window.LANDSCAPE || [], CO = window.COMPANIES || [], PI = window.PAGES_INDEX || [];
  if (!F) return;

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  // ── 建立索引：每筆 { kind, title, context, text, url（從網站最外層算）} ──
  var ORDER = ['研究領域', '研究主題', '技術', '整合分析', '公司', '公司檔案', '產品', '來源筆記'];
  var items = [];
  var secOf = {}, roleLabel = {};
  (C.roles || []).forEach(function (r) { roleLabel[r.id] = r.label; });
  F.layers.forEach(function (L) {
    items.push({ kind: '研究領域', title: L.short, context: L.label !== L.short ? L.label : '',
                 text: L.question + ' ' + (L.intro || ''), url: 'pages/domains.html#' + L.id });
    L.sections.forEach(function (s) {
      secOf[s.id] = { layer: L, sec: s };
      items.push({ kind: '研究主題', title: s.label, context: L.short, text: s.desc + ' ' + (s.keys || []).join(' '), url: 'pages/domains.html#' + L.id });
    });
  });
  // 轉成網頁的全文，依網址對應（比對前先解碼，避免中文檔名編碼方式不同）
  var textOf = {};
  PI.forEach(function (p) { textOf[decodeURIComponent(p.url)] = p; });
  var used = {};
  topics.forEach(function (t) {
    var o = secOf[t.section];
    if (!o || !t.page) return;   // 還沒有技術頁的主題不列（點了沒地方去）
    var key = 'generated/pages/03-Technologies/' + t.page.replace(/\.md$/, '') + '.html';
    used[key] = 1;
    items.push({ kind: '技術', title: t.label, context: o.layer.short + '・' + o.sec.label,
                 text: (t.desc || '') + ' ' + (textOf[key] ? textOf[key].text : ''), url: encodeURI(key) });
  });
  PI.forEach(function (p) {
    if (!used[decodeURIComponent(p.url)]) items.push({ kind: p.kind, title: p.title, context: p.context, text: p.text, url: p.url });
  });
  CO.forEach(function (c) {
    items.push({ kind: '公司', title: c.name,
      context: c.listing.map(function (l) { return l.ticker; }).filter(Boolean).join('、'),
      text: [c.summary].concat(c.aliases, c.roles.map(function (r) {
        return r.offering + ' ' + (roleLabel[r.role] || '') + ' ' + (secOf[r.section] ? secOf[r.section].sec.label : '') + ' ' +
          r.evidence.map(function (e) { return e.claim; }).join(' ');
      })).join(' '),
      url: 'pages/companies.html#co=' + encodeURIComponent(c.file) });
  });

  // ── 比對與排序：標題命中排前面 ──
  var q = (new URLSearchParams(location.search).get('q') || '').trim();
  var input = document.getElementById('sr-q');
  input.value = q;
  var out = document.getElementById('sr-results');
  if (!q) {
    out.innerHTML = '<p class="sr-hint">輸入關鍵字，例如 CPO、HBM、冷板；多個關鍵字用空白隔開。</p>';
    input.focus();
    return;
  }
  document.title = q + '｜搜尋｜天空研究室';
  var terms = q.toLowerCase().split(/\s+/);
  var hits = items.map(function (it) {
    var title = it.title.toLowerCase(), all = (it.title + ' ' + it.context + ' ' + it.text).toLowerCase();
    if (!terms.every(function (t) { return all.indexOf(t) >= 0; })) return null;
    var score = terms.reduce(function (s, t) { return s + (title.indexOf(t) >= 0 ? 10 : 1); }, 0) + (title === q.toLowerCase() ? 20 : 0);
    return { it: it, score: score };
  }).filter(Boolean);

  // ── 摘錄：找第一個關鍵字前後的文字，關鍵字標亮 ──
  function mark(s) {
    var h = esc(s);
    terms.forEach(function (t) {
      if (!t) return;
      h = h.replace(new RegExp(esc(t).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), function (m) { return '<mark>' + m + '</mark>'; });
    });
    return h;
  }
  function snippet(text) {
    var low = text.toLowerCase(), i = -1;
    terms.some(function (t) { i = low.indexOf(t); return i >= 0; });
    if (i < 0) return text.slice(0, 90) + (text.length > 90 ? '…' : '');
    var start = Math.max(0, i - 40);
    return (start ? '…' : '') + text.slice(start, start + 120) + (start + 120 < text.length ? '…' : '');
  }

  if (!hits.length) {
    out.innerHTML = '<div class="sr-empty"><p><b>找不到「' + esc(q) + '」。</b></p>' +
      '<p>可以換個關鍵字，或直接瀏覽 <a class="art" href="domains.html">研究領域</a>、<a class="art" href="companies.html">公司與供應鏈</a>。</p></div>';
    return;
  }
  var kinds = ORDER.concat(hits.map(function (h) { return h.it.kind; }).filter(function (k) { return ORDER.indexOf(k) < 0; }));
  out.innerHTML = '<p class="sr-count">「' + esc(q) + '」共 ' + hits.length + ' 筆</p>' + kinds.map(function (k) {
    var list = hits.filter(function (h) { return h.it.kind === k; }).sort(function (a, b) { return b.score - a.score; });
    if (!list.length) return '';
    return '<section class="sr-group"><h2>' + esc(k) + '<small>' + list.length + '</small></h2><ul>' +
      list.map(function (h) {
        var it = h.it;
        return '<li><a class="art" href="../' + it.url + '">' + mark(it.title) + '</a>' +
          (it.context ? '<span class="sr-ctx">' + esc(it.context) + '</span>' : '') +
          (it.text.trim() ? '<p>' + mark(snippet(it.text.trim())) + '</p>' : '') + '</li>';
      }).join('') + '</ul></section>';
  }).join('');
});
