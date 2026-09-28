/* ════════════════════════════════════════════════════════════
   全站共用：頂欄、頁尾、深淺色切換、統計數字
   文字內容不在這裡改 — 改 settings/site.js。
   每頁的 <body> 要寫：
     data-page="…"  目前是哪一頁（對應 settings/site.js 的 nav id）
     data-root="…"  回到網站最外層的相對路徑（首頁寫 "."，pages/ 裡的頁寫 ".."）
   ════════════════════════════════════════════════════════════ */

// ── 深淺色：一載入就套用上次的選擇，避免畫面閃一下 ──
(function () {
  try {
    var saved = localStorage.getItem('theme');
    if (saved) document.documentElement.setAttribute('data-theme', saved);
  } catch (e) {}
})();

document.addEventListener('DOMContentLoaded', function () {
  var S = window.SITE || {};
  var body = document.body;
  var root = (body.dataset.root || '.') + '/';
  var page = body.dataset.page;

  // ── 頂欄 ──
  var nav = (S.nav || []).map(function (n) {
    return '<a href="' + root + n.href + '"' + (n.id === page ? ' class="on"' : '') + '>' + n.label + '</a>';
  }).join('');
  var header = document.getElementById('site-header');
  if (header) {
    header.className = 'top';
    header.innerHTML =
      '<div class="wrap">' +
        '<a class="brand" href="' + root + '"><b>' + S.name + '</b><small>' + S.subtitle + '</small></a>' +
        '<nav>' + nav + '</nav>' +
        '<form class="hsearch" role="search" onsubmit="return false">' +
          '<input type="search" placeholder="' + (S.searchPlaceholder || '') + '" aria-label="搜尋">' +
          '<button type="submit" aria-label="搜尋"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg></button>' +
        '</form>' +
        '<button class="theme-t" type="button" aria-label="切換深淺色">' +
          '<svg class="ic-moon" viewBox="0 0 24 24"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/></svg>' +
          '<svg class="ic-sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>' +
        '</button>' +
      '</div>';
  }

  // ── 頁尾 ──
  var F = S.footer || {};
  var footer = document.getElementById('site-footer');
  if (footer) {
    footer.className = 'sitefoot';
    footer.innerHTML =
      '<div class="wrap">' +
        '<div>' + (F.note || '') + '</div>' +
        '<div class="legendk">' + (F.legend || []).map(function (l) {
          return '<span><span class="mk mk-' + l.style + '">' + l.tag + '</span>' + l.text + '</span>';
        }).join('') + '</div>' +
        '<div class="stamp">' + (F.stampLabel || '') + ' <span data-stat="updated"></span></div>' +
      '</div>';
  }

  // ── 統計數字：來自 generated/stats.js（tools/update_stats.py 產生），沒有就顯示 0 ──
  var st = window.SITE_STATS || {};
  document.querySelectorAll('[data-stat]').forEach(function (el) {
    var v = st[el.dataset.stat];
    el.textContent = v !== undefined ? v : (el.dataset.stat === 'updated' ? '—' : 0);
  });
});

// ── 深淺色切換按鈕 ──
document.addEventListener('click', function (ev) {
  if (!ev.target.closest('.theme-t')) return;
  var r = document.documentElement;
  var cur = r.getAttribute('data-theme') ||
    (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  var next = cur === 'dark' ? 'light' : 'dark';
  r.setAttribute('data-theme', next);
  try { localStorage.setItem('theme', next); } catch (e) {}
});
