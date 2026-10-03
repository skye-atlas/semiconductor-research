/* ════════════════════════════════════════════════════════════
   來源頁：側欄「本頁章節」跟著捲動標出目前所在的段落
   頁面由 tools/source_page.py 產生；逐條說法可以用網址 #編號（例：#T13）直接連到
   ════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function () {
  var links = document.querySelectorAll('.sp-toc a');
  if (!links.length) return;
  var secs = Array.prototype.map.call(links, function (a) { return document.getElementById(a.getAttribute('href').slice(1)); });
  var spy = function () {
    var cur = 0;
    secs.forEach(function (s, i) { if (s && s.getBoundingClientRect().top <= 120) cur = i; });
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) cur = secs.length - 1;
    links.forEach(function (a, i) { if (i === cur) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current'); });
  };
  window.addEventListener('scroll', spy, { passive: true });
  spy();
});
