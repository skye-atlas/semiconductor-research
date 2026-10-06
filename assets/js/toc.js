/* ════════════════════════════════════════════════════════════
   技術頁的側欄「本頁章節」：捲動時標出目前所在的段落
   側欄由 tools/build_pages.py（toc_of）轉檔時寫進頁面；樣式在 6-article.css
   ════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function () {
  var links = document.querySelectorAll('.ar-toc a');
  if (!links.length) return;
  var side = document.querySelector('.ar-side');
  var secs = Array.prototype.map.call(links, function (a) { return document.getElementById(a.getAttribute('href').slice(1)); });
  var last = -1;
  var spy = function () {
    var cur = 0;
    secs.forEach(function (s, i) { if (s && s.getBoundingClientRect().top <= 120) cur = i; });
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) cur = secs.length - 1;
    if (cur === last) return;
    last = cur;
    links.forEach(function (a, i) { if (i === cur) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current'); });
    // 側欄比畫面高時，讓目前的章節留在側欄看得到的範圍
    var a = links[cur], top = a.offsetTop, h = side.clientHeight;
    if (top < side.scrollTop || top + a.offsetHeight > side.scrollTop + h) side.scrollTop = top - h / 3;
  };
  window.addEventListener('scroll', spy, { passive: true });
  spy();
});
