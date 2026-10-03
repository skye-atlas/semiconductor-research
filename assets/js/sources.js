/* ════════════════════════════════════════════════════════════
   來源庫頁：列出全部來源筆記（generated/sources.js），可依「誰說的」篩選、用關鍵字找
   每份顯示：日期、誰說的 · 來源類型、標題、一句重點、發布者、本站哪些頁面使用了它（由 tools/update_stats.py 算好放在 used）
   頁尾的「來源類型與標記說明」預設收起：各類型適合拿來確認什麼（sourceKinds 的 hint）、逐條說法的九種性質（claimKinds）
   來源類型與「誰說的」的用詞在 settings/supply-chain.js 的 sourceKinds。
   ════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function () {
  var C = window.SUPPLY_CHAIN || {}, S = window.SOURCES || [];
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  var kindBy = {};
  (C.sourceKinds || []).forEach(function (k) { kindBy[k.id] = k; });
  function voice(s) { return kindBy[s.kind] ? kindBy[s.kind].voice : '其他來源'; }
  function kind(s) { return kindBy[s.kind] ? kindBy[s.kind].label : '來源筆記'; }

  var list = document.getElementById('so-list');
  if (!S.length) {
    list.innerHTML = '<div class="so-empty"><p><b>目前還沒有來源筆記。</b></p><p>資料整理後，每份原始資料都會在這裡有一份筆記。</p></div>';
    return;
  }

  var state = { voice: '', q: '' };
  var voices = [];
  S.forEach(function (s) { if (voices.indexOf(voice(s)) < 0) voices.push(voice(s)); });
  var tools = document.getElementById('so-tools');
  tools.hidden = false;
  tools.innerHTML =
    '<div class="so-q"><label for="so-q">搜尋來源</label><input id="so-q" type="search" placeholder="標題、發布者或發言人" autocomplete="off"></div>' +
    '<div><p class="so-label" id="so-voice-label">誰說的</p><div class="so-voices" role="group" aria-labelledby="so-voice-label">' +
      '<button type="button" data-voice="">全部</button>' +
      voices.map(function (v) { return '<button type="button" data-voice="' + esc(v) + '">' + esc(v) + '</button>'; }).join('') +
    '</div></div>';
  tools.addEventListener('click', function (ev) {
    var b = ev.target.closest('[data-voice]');
    if (b) { state.voice = b.dataset.voice; render(); }
  });
  document.getElementById('so-q').addEventListener('input', function (ev) { state.q = ev.target.value; render(); });

  function render() {
    tools.querySelectorAll('[data-voice]').forEach(function (b) {
      b.setAttribute('aria-pressed', b.dataset.voice === state.voice ? 'true' : 'false');
    });
    var q = state.q.trim().toLowerCase();
    var hits = S.filter(function (s) {
      if (state.voice && voice(s) !== state.voice) return false;
      return !q || [s.title, s.summary, s.publisher, s.event, s.file].concat(s.speakers).join(' ').toLowerCase().indexOf(q) >= 0;
    }).sort(function (a, b) { return (b.date || '').localeCompare(a.date || ''); });
    if (!hits.length) {
      list.innerHTML = '<div class="so-empty"><p><b>沒有符合條件的來源。</b></p></div>';
      return;
    }
    list.innerHTML = '<p class="so-count">' + hits.length + ' 份來源' + (hits.length !== S.length ? '（共 ' + S.length + ' 份）' : '') + '</p>' +
      '<ul class="so-items">' + hits.map(function (s) {
        var url = '../generated/pages/04-Sources/' + encodeURI(s.file.replace(/\.md$/, '.html'));
        var uses = (s.used || []).map(function (u) {
          return '<a href="../' + u.url + '">' + esc(u.title) + '</a>';
        }).join('、');
        return '<li><span class="so-date">' + esc(s.date) + '</span><div>' +
          '<p class="so-prov"><b>' + esc(voice(s)) + '</b> · ' + esc(kind(s)) + (s.event ? ' · ' + esc(s.event) : '') + '</p>' +
          '<a class="art" href="' + url + '">' + esc(s.title) + '</a>' + (s.historical ? '<span class="so-hist">歷史文獻</span>' : '') +
          (s.summary ? '<p class="so-sum">' + esc(s.summary) + '</p>' : '') +
          '<p class="so-meta">' + esc(s.publisher) + (s.speakers.length ? '　' + s.speakers.map(esc).join('、') : '') + '</p>' +
          (uses ? '<p class="so-meta">本站使用於：' + uses + '</p>' : '') +
        '</div></li>';
      }).join('') + '</ul>';
  }
  render();

  // ── 來源類型與標記說明（預設收起）──
  var help = document.getElementById('so-help');
  if (help) {
    help.innerHTML = '<summary>來源類型與標記說明</summary>' +
      '<h3>來源類型：適合拿來確認什麼</h3><dl>' + (C.sourceKinds || []).filter(function (k) { return k.hint; }).map(function (k) {
        return '<dt>' + esc(k.label) + '<span>' + esc(k.voice) + '</span></dt><dd>' + esc(k.hint) + '</dd>';
      }).join('') + '</dl>' +
      '<h3>逐條說法的性質</h3><p>每一條說法標出這份來源怎麼說的；一份一手來源裡也可能有轉述，以每一條的標記為準。本站的推論不在這裡，只寫在各頁的「研究解讀」。</p>' +
      '<p class="so-kinds">' + (C.claimKinds || []).map(function (k) {
        return '<span class="ev ev-' + esc(k.style) + '"><b>' + esc(k.label) + '</b></span>';
      }).join('') + '</p>';
  }
});
