/* ════════════════════════════════════════════════════════════
   研究領域頁：左側選領域，右側是「所有領域」總覽或單一領域
   網址後面的 #d3 這類 id 決定顯示哪個領域；沒有 id 就顯示總覽。
   單一領域：標題 → 核心問題 → 導讀 → 整合分析（有 guide 才出現）
             → 主要主題（文章掛在底下）→ 分類軸（收起）→ 延伸問題與閱讀（目的地有文章才出現）
   主要主題有公司資料時，旁邊出現「相關公司（N）」，連到公司與供應鏈頁並套用該主題。
   架構改 settings/landscape-frame.js，文章改 settings/landscape.js，不用改這裡。
   ════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function () {
  var F = window.LANDSCAPE_FRAME;
  var topics = window.LANDSCAPE || [];
  if (!F) return;

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  // ── 索引 ──
  var secOf = {}, layerById = {};
  F.layers.forEach(function (L) {
    layerById[L.id] = L;
    L.sections.forEach(function (s) { secOf[s.id] = { layer: L, sec: s }; });
  });
  topics = topics.filter(function (t) {
    if (secOf[t.section]) return true;
    console.warn('settings/landscape.js：主題 ' + t.id + ' 的 section「' + t.section + '」不存在');
  });
  // 各主題有幾家公司（generated/companies.js，由 tools/update_stats.py 產生）
  var coCount = {};
  (window.COMPANIES || []).forEach(function (c) {
    var seen = {};
    c.roles.forEach(function (r) { if (!seen[r.section]) { seen[r.section] = 1; coCount[r.section] = (coCount[r.section] || 0) + 1; } });
  });
  // content/ 的 .md 由 tools/update_stats.py 轉成 generated/pages/ 裡的網頁
  function pageUrl(folder, file) { return '../generated/pages/' + folder + '/' + encodeURI(file.replace(/\.md$/, '.html')); }
  // 掛在某主題底下的文章：section 是它，或 also 寫了它且在同一個領域（跨領域的 also 改成「另見」連結）
  function pagesIn(secId) {
    return topics.filter(function (t) {
      if (!t.page) return false;
      if (t.section === secId) return true;
      return (t.also || []).indexOf(secId) >= 0 && secOf[secId] && secOf[t.section] && secOf[secId].layer.id === secOf[t.section].layer.id;
    });
  }
  function countLayer(L) {
    return L.sections.reduce(function (n, s) { return n + pagesIn(s.id).length; }, 0);
  }
  // 依 band 分組（需求端／技術系統／共通支援），保持設定裡的順序
  var bands = [];
  F.layers.forEach(function (L) {
    var g = bands.filter(function (b) { return b.band === L.band; })[0];
    if (!g) bands.push(g = { band: L.band, label: (F.groups || {})[L.band] || '', layers: [] });
    g.layers.push(L);
  });

  // ── 左側導覽（桌面）與下拉選單（手機）──
  var nav = document.getElementById('gd-nav');
  var sel = document.getElementById('gd-select');
  document.getElementById('gd-scope').textContent = F.scopeName;
  function navLink(id, text, title) {
    return '<a href="#' + id + '" data-layer="' + id + '"' + (title ? ' title="' + esc(title) + '"' : '') + '>' + esc(text) + '</a>';
  }
  nav.innerHTML = navLink('', '所有領域') + bands.map(function (b) {
    return '<p class="gd-glabel">' + esc(b.label) + '</p>' +
      b.layers.map(function (L) { return navLink(L.id, L.short, L.label); }).join('');
  }).join('');
  sel.innerHTML = '<option value="">所有領域</option>' + bands.map(function (b) {
    return '<optgroup label="' + esc(b.label) + '">' + b.layers.map(function (L) {
      return '<option value="' + L.id + '">' + esc(L.short) + '</option>';
    }).join('') + '</optgroup>';
  }).join('');
  sel.addEventListener('change', function () { location.hash = sel.value; });   // 空字串＝所有領域

  // ── 一篇文章：標題連結＋一句用途 ──
  function articleItem(t) {
    var tags = (t.kind && F.kinds[t.kind] ? '<span class="tag">' + esc(F.kinds[t.kind]) + '</span>' : '') +
      (t.axes ? Object.keys(t.axes).map(function (k) { return '<span class="tag">' + esc(t.axes[k]) + '</span>'; }).join('') : '');
    // 另見：只連到已有文章的其他領域主題
    var also = (t.also || []).filter(function (id) {
      return secOf[id] && secOf[id].layer.id !== secOf[t.section].layer.id && pagesIn(id).length;
    }).map(function (id) {
      var o = secOf[id];
      return '<a href="#' + o.layer.id + '">' + esc(o.layer.short + '・' + o.sec.label) + '</a>';
    });
    var cases = (t.cases || []).map(function (c) {
      return '<li><span class="tag">' + esc(F.evidence[c.evidence] || c.evidence) + '</span>' + esc(c.who) + '｜' + esc(c.what) + '</li>';
    }).join('');
    return '<li>' +
      '<a class="art" href="' + pageUrl('03-Technologies', t.page) + '">' + esc(t.label) + '</a>' +
      (t.desc ? '<p>' + esc(t.desc) + '</p>' : '') +
      (tags || also.length ? '<div class="gd-meta">' + tags + (also.length ? '<span>另見 ' + also.join('、') + '</span>' : '') + '</div>' : '') +
      (cases ? '<ul class="gd-cases">' + cases + '</ul>' : '') +
    '</li>';
  }

  // ── 主要主題：分類骨架正常顯示；有文章掛在底下，登記了但還沒寫的列「待補」 ──
  function sections(L) {
    return '<h2 class="gd-h">主要主題</h2><div class="gd-secs">' + L.sections.map(function (s) {
      var arts = pagesIn(s.id);
      var todo = topics.filter(function (t) { return t.section === s.id && !t.page; });
      return '<div class="gd-sec">' +
        '<h3>' + esc(s.label) + '</h3><p>' + esc(s.desc) +
          (coCount[s.id] ? '<a class="gd-co" href="companies.html#' + s.id + '">相關公司（' + coCount[s.id] + '）</a>' : '') + '</p>' +
        // 代表關鍵字：只是閱讀提示（沒寫就不顯示），不做篩選
        ((s.keys || []).length ? '<p class="gd-keys">' + s.keys.map(function (k) { return '<span>' + esc(k) + '</span>'; }).join('') + '</p>' : '') +
        (arts.length ? '<ul class="gd-arts">' + arts.map(articleItem).join('') + '</ul>' : '') +
        (todo.length ? '<p class="gd-todo">待補內容：' + todo.map(function (t) { return esc(t.label); }).join('、') + '</p>' : '') +
      '</div>';
    }).join('') + '</div>';
  }

  function axes(L) {
    if (!L.axes) return '';
    return '<details class="gd-fold"><summary>分類軸：一項產品可以同時落在多條軸上</summary><table>' +
      L.axes.map(function (a) {
        return '<tr><th scope="row">' + esc(a.label) + '</th><td>' + a.options.map(esc).join('、') + '</td></tr>';
      }).join('') + '</table></details>';
  }

  // ── 延伸問題與閱讀：目的地主題有文章才出現，並直接連到那些文章 ──
  function further(L) {
    var items = (L.related || []).map(function (r) {
      var arts = [];
      (r.in || []).forEach(function (id) { arts = arts.concat(pagesIn(id)); });
      if (!arts.length || !layerById[r.to]) return '';
      return '<li><p>' + esc(r.q) + '</p>' +
        arts.slice(0, 3).map(function (t) {
          return '<a class="art" href="' + pageUrl('03-Technologies', t.page) + '">' + esc(t.label) + '</a>';
        }).join('、') +
        '<a class="gd-more" href="#' + r.to + '">看' + esc(layerById[r.to].short) + ' →</a></li>';
    }).join('');
    return items ? '<h2 class="gd-h">延伸問題與閱讀</h2><ul class="gd-further">' + items + '</ul>' : '';
  }

  // ── 單一領域 ──
  function domain(L) {
    return '<a class="gd-back" href="#">← 所有領域</a>' +
      '<h1 class="serif gd-title" title="' + esc(L.label) + '">' + esc(L.short) + '</h1>' +
      '<p class="gd-q measure">' + esc(L.question) + '</p>' +
      '<p class="gd-intro measure">' + esc(L.intro) + '</p>' +
      (L.guide ? '<p class="gd-guide"><a class="art" href="' + pageUrl('05-Domains', L.guide) + '">閱讀整合分析 →</a></p>' : '') +
      sections(L) + axes(L) + further(L);
  }

  // ── 所有領域總覽：依組別分組，有文章才顯示篇數 ──
  function overview() {
    return '<h1 class="serif gd-title">所有領域</h1>' +
      '<p class="gd-q measure">' + esc(F.scope) + '</p>' +
      bands.map(function (b) {
        return '<h2 class="gd-h">' + esc(b.label) + '</h2><ul class="gd-all">' + b.layers.map(function (L) {
          var n = countLayer(L);
          return '<li><a class="art" href="#' + L.id + '">' + esc(L.short) + '</a>' +
            '<p>' + esc(L.question) + '</p>' +
            (n ? '<span class="gd-meta">' + n + ' 篇文章</span>' : '') + '</li>';
        }).join('') + '</ul>';
      }).join('') +
      '<details class="gd-fold gd-method"><summary>研究方法</summary>' +
        '<p>每個領域依這個順序形成判斷：</p>' +
        '<ol>' + F.method.steps.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ol>' +
        '<p>' + F.method.roles.map(function (r) { return '<b>' + esc(r.label) + '</b>' + esc(r.text); }).join('；') + '。</p>' +
        '<p>產業證據按具體公司、產品或主張逐筆標示，種類有：' +
          Object.keys(F.evidence).map(function (k) { return esc(F.evidence[k]); }).join('、') +
        '。彼此不排順序，也不合成單一進度。</p></details>';
  }

  // ── 依網址顯示 ──
  var main = document.getElementById('gd-main');
  var crumb = document.getElementById('gd-crumb');
  function fromHash() {
    // 網址可以是領域代號，也可以是主題代號（含已退役的舊代號，例如 d3-link）：都顯示它所屬的領域
    var h = decodeURIComponent(location.hash.slice(1));
    var L = layerById[h] || (secOf[h] && secOf[h].layer) || layerById[h.split('-')[0]];
    nav.querySelectorAll('a').forEach(function (a) {
      if (a.dataset.layer === (L ? L.id : '')) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    sel.value = L ? L.id : '';
    crumb.innerHTML = L ? ' · ' + esc(L.short) : '';
    document.title = (L ? L.short + '｜' : '') + '研究領域｜天空研究室';
    main.innerHTML = L ? domain(L) : overview();
    if (main.getBoundingClientRect().top < 0) window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', fromHash);
  fromHash();
});
