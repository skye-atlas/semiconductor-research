/* ════════════════════════════════════════════════════════════
   公司與供應鏈頁：依 settings/supply-chain.js 畫出篩選區與五欄地圖，並處理點選。
   分類與文字不在這裡改 — 改 settings/supply-chain.js。
   目前還沒有公司資料，所以篩選只更新按鈕狀態與「目前條件」；
   有資料後在 applyFilters() 接上實際的篩選。
   ════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function () {
  var C = window.SUPPLY_CHAIN;
  if (!C) return;
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

  // ════ 1. 畫出篩選區 ════
  function chip(kind, id, label, on) {
    return '<button type="button" class="sc-chip' + (on ? ' on' : '') + '" data-f="' + kind + '" data-v="' + esc(id) + '">' + esc(label) + '</button>';
  }
  function dropdown(f) {
    var opts = chip(f.id, '', '全部', true) + f.options.map(function (o) { return chip(f.id, o.id, o.label); }).join('');
    if (!f.options.length) opts += '<span class="sc-ddh">有公司資料後才會出現選項</span>';
    return '<details class="sc-dd" data-f="' + f.id + '"' + (f.multi ? ' data-multi="1"' : '') + '>' +
             '<summary><span>' + esc(f.label) + '</span><b>全部</b></summary><div class="sc-ddp">' + opts + '</div></details>';
  }
  document.getElementById('sc-domains').insertAdjacentHTML('beforeend',
    chip('dom', '', '全部', true) + C.domains.map(function (d) { return chip('dom', d.id, d.label); }).join(''));
  document.getElementById('sc-dropdowns').insertAdjacentHTML('afterbegin', C.filters.map(dropdown).join(''));

  var relFilter = C.filters.filter(function (f) { return f.id === 'rel'; })[0];
  document.getElementById('sc-legend').innerHTML = (C.relationLegend || []).map(function (id) {
    var o = relFilter.options.filter(function (x) { return x.id === id; })[0];
    return o ? '<i class="sc-rk rel-' + id + '">' + esc(o.label) + '</i>' : '';
  }).join('');

  // ════ 2. 畫出五欄地圖 ════
  document.getElementById('sc-map').innerHTML = C.stages.map(function (s) {
    return '<div class="sc-col sc-' + s.id + '">' +
             '<h2 title="' + esc(s.desc) + '">' + esc(s.label) + '<small><span data-sc-count="' + s.id + '">0</span> 家</small></h2>' +
             '<div class="sc-body"><p class="sc-cdesc">' + esc(s.desc) + '</p>' +
             '<p class="sc-empty">這一段本庫還沒有資料</p></div></div>';
  }).join('');

  // ════ 3. 篩選狀態與「目前條件」 ════
  var state = {};                         // { 篩選代號: [選到的值, …] }
  var labels = { dom: '領域' };
  C.filters.forEach(function (f) { labels[f.id] = f.label; });
  var cur = document.querySelector('.sc-curv');
  var box = document.querySelector('.sc-cur');

  function chipLabel(kind, v) {
    var b = document.querySelector('.sc-chip[data-f="' + kind + '"][data-v="' + v + '"]');
    return b ? b.textContent : v;
  }

  function render() {
    // 下拉框摘要：沒選寫「全部」，選一個寫名稱，選多個寫「N 項」
    document.querySelectorAll('.sc-dd').forEach(function (d) {
      var vs = state[d.dataset.f] || [];
      d.querySelector('summary b').textContent =
        vs.length === 0 ? '全部' : vs.length === 1 ? chipLabel(d.dataset.f, vs[0]) : vs.length + ' 項';
      d.classList.toggle('set', vs.length > 0);
    });
    document.querySelectorAll('.sc-chip').forEach(function (c) {
      var vs = state[c.dataset.f] || [];
      c.classList.toggle('on', c.dataset.v === '' ? vs.length === 0 : vs.indexOf(c.dataset.v) >= 0);
    });
    var items = Object.keys(state).filter(function (k) { return state[k].length; });
    box.classList.toggle('set', items.length > 0);
    applyFilters();
    if (!items.length) { cur.textContent = '沒有篩選：顯示全部位置'; return; }
    cur.innerHTML = '';
    items.forEach(function (k) {
      var s = document.createElement('span');
      s.className = 'sc-curi';
      s.innerHTML = '<b></b><span></span><button type="button" class="sc-curx" aria-label="拿掉這個條件">×</button>';
      s.querySelector('b').textContent = labels[k];
      s.querySelector('span').textContent = state[k].map(function (v) { return chipLabel(k, v); }).join('、');
      s.querySelector('button').addEventListener('click', function () { state[k] = []; render(); });
      cur.appendChild(s);
    });
    var clr = document.createElement('button');
    clr.type = 'button'; clr.className = 'sc-clear'; clr.textContent = '清除全部條件';
    clr.addEventListener('click', function () { state = {}; render(); });
    cur.appendChild(clr);
  }

  function applyFilters() { /* 有公司資料後：依 state 篩選地圖與公司清單 */ }

  // ════ 4. 點選 ════
  document.addEventListener('click', function (ev) {
    var c = ev.target.closest('.sc-chip');
    if (c) {
      var k = c.dataset.f, v = c.dataset.v;
      var dd = c.closest('.sc-dd');
      var multi = dd ? dd.dataset.multi === '1' : false;
      var vs = state[k] || [];
      if (v === '') vs = [];
      else if (multi) vs = vs.indexOf(v) >= 0 ? vs.filter(function (x) { return x !== v; }) : vs.concat(v);
      else vs = (vs.length === 1 && vs[0] === v) ? [] : [v];
      state[k] = vs;
      if (dd && !multi) dd.open = false;
      render();
      return;
    }
    var n = ev.target.closest('.sc-names');
    if (n) {   // 顯示方式：只看結構／展開公司／公司清單
      document.querySelectorAll('.sc-names').forEach(function (b) { b.setAttribute('aria-pressed', b === n ? 'true' : 'false'); });
      var list = n.dataset.v === 'list';
      document.getElementById('sc-map').hidden = list;
      document.getElementById('sc-list').hidden = !list;
      return;
    }
    // 點在下拉框外面：收起打開的下拉框
    document.querySelectorAll('.sc-dd[open]').forEach(function (d) {
      if (!d.contains(ev.target)) d.open = false;
    });
  });
});
