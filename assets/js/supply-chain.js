/* ════════════════════════════════════════════════════════════
   公司與供應鏈頁：找對公司的入口（讀深交給公司檔案頁）
   上方篩選區、下方結果區（公司清單＝預設／角色概覽）；點一列在右側抽屜快速預覽，點公司名稱開公司檔案。
   資料：generated/companies.js（tools/update_stats.py 由 content/01-Companies/ 轉出）
   用詞：settings/supply-chain.js；研究領域與主題：settings/landscape-frame.js（和研究領域頁共用）
   網址後面加 #d1（領域）或 #d1-sub（主題），打開時就會先套用那個條件；研究領域頁的「相關公司」就是這樣連過來的。
   網址後面加 #co=公司檔名，會清掉條件、捲到那一家並打開預覽（搜尋頁的公司結果就是這樣連過來的）。
   ════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function () {
  var C = window.SUPPLY_CHAIN, F = window.LANDSCAPE_FRAME;
  var CO = window.COMPANIES || [];
  if (!C || !F) return;

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function byId(list) { var m = {}; list.forEach(function (x) { m[x.id] = x; }); return m; }
  function label(map, id) { return map[id] ? map[id].label : id; }
  var $ = function (id) { return document.getElementById(id); };

  // ── 索引 ──
  var roleBy = byId(C.roles), statusBy = byId(C.status), natureBy = byId(C.nature),
      marketBy = byId(C.markets), relBy = byId(C.relations), markBy = byId(C.marks || []);
  var layerBy = byId(F.layers), secOf = {};
  F.layers.forEach(function (L) { L.sections.forEach(function (s) { secOf[s.id] = { layer: L, sec: s }; }); });
  var coByFile = {};
  CO.forEach(function (c) { coByFile[c.file] = c; });
  // 關係只記在一家公司的檔裡；別家記到本公司的（inbound）在這裡反查，篩選與預覽都算進去
  var inboundBy = {};
  CO.forEach(function (c) {
    c.relations.forEach(function (r) {
      if (coByFile[r.with] && r.with !== c.file) (inboundBy[r.with] = inboundBy[r.with] || []).push({ from: c, r: r });
    });
  });
  var rstatusBy = byId(C.relationStatus || []);
  var srcBy = {}, kindBy = byId(C.sourceKinds || []);
  (window.SOURCES || []).forEach(function (s) { srcBy[s.file] = s; });
  function companyUrl(c) { return '../generated/pages/01-Companies/' + encodeURIComponent(c.file) + '.html'; }

  $('sc-intro').textContent = C.intro;

  // ── 分類與證據說明（預設收起；跟使用位置有關的提醒另外放在結果旁）──
  $('sc-help').innerHTML =
    '<h3>產業角色</h3><p>只回答「做什麼」；「在哪個領域的哪一塊」看研究主題。分組沒有先後順序。</p>' +
    '<dl>' + C.roleGroups.map(function (g) {
      return '<dt>' + esc(g.label) + '</dt><dd>' + C.roles.filter(function (r) { return r.group === g.id; })
        .map(function (r) { return esc(r.label); }).join('、') + '</dd>';
    }).join('') + '</dl>' +
    '<h3>現況的標記</h3><p>' + (C.marks || []).filter(function (m) { return m.id !== 'plan'; }).map(function (m) { return esc(m.tag); }).join('、') +
      '：這句現況證實到哪。和來源性質無關，產業媒體轉述公司的話，仍然是公司說法。</p>' +
    '<h3>公開進展</h3><p>' + C.status.map(function (s) { return esc(s.label); }).join('、') +
      '。彼此不排順序，也不合成單一進度；「具備能力」「送樣」「已公開供貨給某客戶」是不同的事，請看每條證據實際說了什麼。</p>' +
    '<h3>來源性質</h3><p>' + C.nature.map(function (s) { return esc(s.label); }).join('、') + '，和頁尾的來源標籤相同。</p>' +
    '<h3>公司關係</h3><p>' + C.relations.map(function (r) { return esc(r.label); }).join('、') +
      '。只收來源明說的，一律從該公司的角度記錄。</p>';

  // ── 沒有資料：只顯示一次說明，不畫篩選 ──
  var results = $('sc-results');
  if (!CO.length) {
    var E = C.empty || {};
    results.innerHTML = '<div class="sc-empty"><p><b>' + esc(E.title || '目前還沒有整理公司資料。') + '</b></p>' +
      (E.text ? '<p class="sc-empty-text">' + esc(E.text) + '</p>' : '') +
      '<p>現在可以先到 <a class="art" href="domains.html">研究領域</a> 看各領域在研究什麼。</p></div>';
    return;
  }

  // ── 狀態 ──
  function blank(view, sort) {
    return { q: '', layer: '', section: '', role: '', markets: [], status: [], nature: [], rel: [], view: view || 'list', sort: sort || 'updated' };
  }
  var state = blank();
  var openFile = null;   // 要捲過去並預覽的公司
  function readHash() {
    var h = decodeURIComponent(location.hash.slice(1));
    if (h.indexOf('co=') === 0) { if (coByFile[h.slice(3)]) { state = blank(); openFile = h.slice(3); } }
    else if (secOf[h]) { state.layer = secOf[h].layer.id; state.section = h; }
    else if (layerBy[h]) { state.layer = h; state.section = ''; }
  }
  function writeHash() {
    var h = state.section || state.layer;
    history.replaceState(null, '', h ? '#' + h : location.pathname);
  }
  readHash();

  // ── 篩選區：第一層是領域、主題、角色；掛牌市場、公開進展、來源性質、公司關係收在「更多篩選」──
  var tools = $('sc-tools');
  tools.hidden = false;
  function opt(v, text) { return '<option value="' + esc(v) + '">' + esc(text) + '</option>'; }
  function checks(key, legend, list) {
    return '<fieldset class="sc-checks"><legend>' + esc(legend) + '</legend>' + list.map(function (x) {
      return '<label><input type="checkbox" data-k="' + key + '" value="' + esc(x.id) + '">' + esc(x.label) + '</label>';
    }).join('') + '</fieldset>';
  }
  var bands = [];
  F.layers.forEach(function (L) {
    var b = bands.filter(function (x) { return x.band === L.band; })[0];
    if (!b) bands.push(b = { band: L.band, layers: [] });
    b.layers.push(L);
  });
  tools.innerHTML =
    '<div class="sc-row">' +
      '<div class="sc-field sc-f-q"><label for="sc-q">搜尋公司或產品</label>' +
        '<input id="sc-q" type="search" placeholder="名稱、代號或產品" autocomplete="off"></div>' +
      '<div class="sc-field sc-f-wide"><label for="sc-layer">研究領域</label><select id="sc-layer">' + opt('', '所有領域') +
        bands.map(function (b) {
          return '<optgroup label="' + esc((F.groups || {})[b.band] || '') + '">' +
            b.layers.map(function (L) { return opt(L.id, L.short); }).join('') + '</optgroup>';
        }).join('') + '</select></div>' +
      '<div class="sc-field sc-f-wide"><label for="sc-section">研究主題</label><select id="sc-section"></select></div>' +
      '<div class="sc-field sc-f-wide"><label for="sc-role">產業角色</label><select id="sc-role"></select></div>' +
    '</div>' +
    '<div class="sc-row sc-row2">' +
      '<details class="sc-more"><summary>更多篩選<span id="sc-more-n"></span></summary><div>' +
        checks('markets', '掛牌市場', [{ id: 'none', label: '未掛牌' }].concat(C.markets)) +
        checks('status', '公開進展', C.status) +
        checks('nature', '來源性質', C.nature) +
        checks('rel', '公司關係', C.relations) +
      '</div></details>' +
      '<button type="button" class="sc-clear" id="sc-clear" hidden>清除篩選</button>' +
    '</div>';

  // 角色選單：每個角色後面加上「在目前其他條件下」有幾家公司；0 家的變灰
  function fillRoles() {
    var saved = state.role;
    $('sc-role').innerHTML = opt('', '所有角色') + C.roleGroups.map(function (g) {
      return '<optgroup label="' + esc(g.label) + '">' + C.roles.filter(function (r) { return r.group === g.id; }).map(function (r) {
        state.role = r.id;
        var n = CO.filter(matchCompany).length;
        return '<option value="' + r.id + '"' + (n ? '' : ' disabled') + '>' + esc(r.label) + '（' + n + '）</option>';
      }).join('') + '</optgroup>';
    }).join('');
    state.role = saved;
    $('sc-role').value = saved;
  }
  function fillSections() {
    var L = layerBy[state.layer];
    $('sc-section').innerHTML = opt('', L ? '這個領域的所有主題' : '先選研究領域') +
      (L ? L.sections.map(function (s) { return opt(s.id, s.label); }).join('') : '');
    $('sc-section').disabled = !L;
    $('sc-section').value = state.section;
  }
  function active() {
    return !!(state.q.trim() || state.layer || state.role || state.markets.length || state.status.length || state.nature.length || state.rel.length);
  }
  function syncControls() {
    if ($('sc-q').value !== state.q) $('sc-q').value = state.q;
    $('sc-layer').value = state.layer;
    fillSections();
    fillRoles();
    tools.querySelectorAll('input[type=checkbox]').forEach(function (b) { b.checked = state[b.dataset.k].indexOf(b.value) >= 0; });
    var n = state.markets.length + state.status.length + state.nature.length + state.rel.length;
    $('sc-more-n').textContent = n ? '（' + n + '）' : '';
    $('sc-clear').hidden = !active();
  }

  tools.addEventListener('input', function (ev) {
    var t = ev.target;
    if (t.id === 'sc-q') state.q = t.value;
    else if (t.id === 'sc-layer') { state.layer = t.value; state.section = ''; writeHash(); }   // 換領域就清掉主題
    else if (t.id === 'sc-section') { state.section = t.value; writeHash(); }
    else if (t.id === 'sc-role') state.role = t.value;
    else if (t.type === 'checkbox') {
      var k = t.dataset.k;
      state[k] = t.checked ? state[k].concat(t.value) : state[k].filter(function (v) { return v !== t.value; });
    } else return;
    render();
  });
  tools.addEventListener('click', function (ev) { if (ev.target.closest('#sc-clear')) clearAll(); });
  function clearAll() { state = blank(state.view, state.sort); writeHash(); render(); }
  window.addEventListener('hashchange', function () { readHash(); render(); });

  // ── 比對 ──
  function roleFiltered() { return state.layer || state.section || state.role || state.status.length || state.nature.length; }
  function matchRole(r) {
    var o = secOf[r.section];
    if (state.layer && (!o || o.layer.id !== state.layer)) return false;
    if (state.section && r.section !== state.section) return false;
    if (state.role && r.role !== state.role) return false;
    if (state.status.length && !r.evidence.some(function (e) { return state.status.indexOf(e.status) >= 0; })) return false;
    if (state.nature.length && !r.evidence.some(function (e) { return state.nature.indexOf(e.nature) >= 0; })) return false;
    return true;
  }
  function matchCompany(c) {
    var q = state.q.trim().toLowerCase();
    if (q) {
      var hay = [c.name, c.summary].concat(c.aliases, c.listing.map(function (l) { return l.ticker; }),
        c.roles.map(function (r) { return r.offering + ' ' + (r.tags || []).join(' '); })).join(' ').toLowerCase();
      if (hay.indexOf(q) < 0) return false;
    }
    if (state.markets.length && !state.markets.some(function (m) {
      return m === 'none' ? !c.listing.length : c.listing.some(function (l) { return l.market === m; });
    })) return false;
    if (state.rel.length && !c.relations.concat((inboundBy[c.file] || []).map(function (x) { return x.r; }))
        .some(function (r) { return state.rel.indexOf(r.type) >= 0; })) return false;
    if (roleFiltered() && !c.roles.some(matchRole)) return false;
    return true;
  }
  function hitRoles(c) { return roleFiltered() ? c.roles.filter(matchRole) : c.roles; }

  // ── 排序：最近更新（預設，依現況日期；沒寫就用最新證據日期）／公司名稱。不做「最成熟」這類評分排序 ──
  function updated(c) {
    return c.roles.map(function (r) {
      return (r.state && r.state.as_of) || r.evidence.map(function (e) { return e.date || ''; }).sort().pop() || '';
    }).sort().pop() || '';
  }
  function sorted(list) {
    return list.slice().sort(state.sort === 'name'
      ? function (a, b) { return a.name.localeCompare(b.name, 'zh-Hant'); }
      : function (a, b) { return updated(b).localeCompare(updated(a)) || a.name.localeCompare(b.name, 'zh-Hant'); });
  }

  // ── 目前條件：每個都能按 × 移除 ──
  function chips() {
    var out = [];
    function add(text, key, value) { out.push({ text: text, key: key, value: value }); }
    if (state.q.trim()) add('搜尋：' + state.q.trim(), 'q');
    if (state.layer) add(layerBy[state.layer].short, 'layer');
    if (state.section) add(secOf[state.section].sec.label, 'section');
    if (state.role) add(label(roleBy, state.role), 'role');
    state.markets.forEach(function (m) { add(m === 'none' ? '未掛牌' : label(marketBy, m), 'markets', m); });
    state.status.forEach(function (s) { add(label(statusBy, s), 'status', s); });
    state.nature.forEach(function (s) { add(label(natureBy, s), 'nature', s); });
    state.rel.forEach(function (s) { add('關係：' + label(relBy, s), 'rel', s); });
    return out.map(function (x) {
      return '<button type="button" class="sc-cond" data-key="' + x.key + '" data-value="' + esc(x.value || '') + '" aria-label="移除條件：' + esc(x.text) + '">' +
        esc(x.text) + '<span aria-hidden="true">×</span></button>';
    }).join('');
  }
  function removeCond(key, value) {
    if (key === 'q') state.q = '';
    else if (key === 'layer') { state.layer = ''; state.section = ''; writeHash(); }
    else if (key === 'section') { state.section = ''; writeHash(); }
    else if (key === 'role') state.role = '';
    else state[key] = state[key].filter(function (v) { return v !== value; });
  }

  // ── 畫面零件 ──
  // 證據狀態標記：文字與樣式讀 settings 的 marks（樣式在 2-base.css 的 .ev，和公司檔案頁共用）
  function evTag(mark) {
    var mk = markBy[mark] || markBy.said || { tag: '公司說法', style: 'said' };
    return '<span class="ev ev-' + esc(mk.style) + '"><b>' + esc(mk.tag) + '</b></span>';
  }
  // 現況：公司檔裡研究者寫的 state（把證據綜合起來的一句話），和公司檔案頁的現況一致。
  //   沒寫 state 的舊資料才退回「最新一手證據」的公開進展
  function mainEvidence(r) {
    var byDate = function (a, b) { return (b.date || '').localeCompare(a.date || ''); };
    return r.evidence.filter(function (e) { return e.key; })[0] ||
      r.evidence.filter(function (e) { return !e.relay; }).sort(byDate)[0] || r.evidence.slice().sort(byDate)[0];
  }
  function stateHtml(r) {
    var st = r.state || {};
    if (st.summary) return '<b class="sc-state">' + esc(st.summary) + '</b><span class="sc-mk">' + evTag(st.mark) + '</span>';
    var e = mainEvidence(r);
    return e ? '<b class="sc-state">' + esc(label(statusBy, e.status)) + '</b><span class="sc-mk">' + esc(e.date) + '</span>' : '';
  }
  // 公司名稱下面那行：掛牌代號 · ○○集團（只有資本關係放在這裡；其他關係在預覽與公司檔案頁）
  function subLine(c) {
    return c.listing.map(function (l) { return esc(label(marketBy, l.market)) + (l.ticker ? ' ' + esc(l.ticker) : ''); })
      .concat(c.relations.filter(function (r) { return r.type === 'capital'; }).map(function (r) { return esc(r.with) + '集團'; }))
      .join(' · ') || '未掛牌';
  }
  function where(r) {
    var o = secOf[r.section];
    return o ? esc(o.sec.label) : esc(r.section);
  }

  // 公司清單的一列：公司｜角色與技術｜現況｜更新。整列可點開預覽，公司名稱直接連公司檔案
  function companyRow(c) {
    return '<div class="sc-co" id="co-' + esc(c.file) + '">' +
      '<div class="sc-c-name"><a class="sc-name" href="' + companyUrl(c) + '">' + esc(c.name) + '</a><span class="sc-sub">' + subLine(c) + '</span></div>' +
      '<div class="sc-c-roles">' + hitRoles(c).map(function (r) {
        return '<div class="sc-r"><div class="sc-c-role"><b class="sc-off">' + esc(r.offering) + '</b>' +
          '<span class="sc-meta">' + esc(label(roleBy, r.role)) + ' · ' + where(r) + '</span></div>' +
          '<div class="sc-c-state">' + stateHtml(r) + '</div></div>';
      }).join('') + '</div>' +
      '<div class="sc-c-date">' + esc(updated(c)) + '</div>' +
      '<button type="button" class="sc-peek" data-file="' + esc(c.file) + '" aria-label="預覽 ' + esc(c.name) + '"></button>' +
    '</div>';
  }

  // 角色概覽：依角色分組，同一家公司可以因不同角色出現多次；每列只有公司與現況
  function overview(list) {
    return C.roleGroups.map(function (g) {
      var inGroup = {};
      var roles = C.roles.filter(function (r) { return r.group === g.id; }).map(function (role) {
        var rows = [];
        list.forEach(function (c) {
          hitRoles(c).filter(function (r) { return r.role === role.id; }).forEach(function (r) {
            inGroup[c.file] = 1;
            rows.push({ c: c, r: r });
          });
        });
        if (!rows.length) return '';
        return '<div class="sc-ov-role"><h4>' + esc(role.label) + '<small>' + rows.length + '</small></h4><ul>' +
          rows.map(function (x) {
            return '<li><button type="button" class="sc-jump" data-file="' + esc(x.c.file) + '">' + esc(x.c.name) + '</button>' +
              '<span class="sc-ov-state">' + stateHtml(x.r) + '</span></li>';
          }).join('') + '</ul></div>';
      }).join('');
      var n = Object.keys(inGroup).length;
      return roles ? '<details class="sc-ov-group" open><summary>' + esc(g.label) + '<small>' + n + ' 家</small></summary>' + roles + '</details>' : '';
    }).join('');
  }

  // ── 快速預覽（右側抽屜）：現況、進度、目前最大的未知、主要證據；讀深請開公司檔案 ──
  var SHAPE = { fact: '●', said: '◐', plan: '○' };
  function preview(c) {
    var rels = c.relations.filter(function (r) { return r.type !== 'capital'; }).map(function (r) {
      return { r: r, who: coByFile[r.with] ? coByFile[r.with].name : r.with };
    }).concat((inboundBy[c.file] || []).map(function (x) { return { r: x.r, who: x.from.name, inbound: true }; }));
    return '<p class="dr-prov"><b>公司預覽</b></p>' +
      '<h2 class="dr-title">' + esc(c.name) + '</h2>' +
      '<p class="pv-sub">' + subLine(c) + '</p>' +
      (c.summary ? '<p class="pv-sum">' + esc(c.summary) + '</p>' : '') +
      '<p class="dr-go"><a class="art" href="' + companyUrl(c) + '">開啟完整公司檔案 →</a></p>' +
      c.roles.map(function (r) {
        var st = r.state || {};
        var prog = r.progress || [];
        var last = -1;
        prog.forEach(function (p, i) { if (p.mark !== 'plan') last = i; });
        var here = last >= 0 && prog[last].mark === 'fact' ? '目前' : '目前｜' + ((markBy.said || {}).tag || '公司說法');
        var e = mainEvidence(r);
        var meta = e ? (srcBy[e.source] || {}) : {};
        var kind = kindBy[meta.kind] || { label: '來源筆記', voice: '' };
        return '<section><h3>' + esc(label(roleBy, r.role)) + ' · ' + where(r) + '</h3>' +
          '<p class="pv-off">' + esc(r.offering) + '</p>' +
          (st.summary ? '<p class="pv-state"><b>' + esc(st.summary) + '</b>' + evTag(st.mark) +
            (st.as_of ? '<span>截至 ' + esc(st.as_of) + '</span>' : '') + '</p>' : '') +
          (prog.length ? '<h4>進度</h4><ol class="pv-prog">' + prog.map(function (p, i) {
            return '<li class="pv-' + esc(p.mark) + '"><span>' + (SHAPE[p.mark] || SHAPE.said) + '</span><b>' + esc(p.step) + '</b>' +
              '<small>' + esc(p.when) + '</small>' + (i === last ? '<em>' + esc(here) + '</em>' : '') + '</li>';
          }).join('') + '</ol>' : '') +
          ((r.verify || []).length ? '<h4>目前最大的未知</h4><ul class="pv-list">' + r.verify.slice(0, 4).map(function (v) {
            return '<li>' + esc(v) + '</li>';
          }).join('') + '</ul>' : '') +
          (e ? '<h4>主要證據<small>共 ' + r.evidence.length + ' 筆</small></h4>' +
            '<p class="pv-src"><b>' + esc(e.relay ? e.relay + '轉述' : kind.voice) + '</b> · ' + esc(kind.label) + ' · ' + esc(meta.date || e.date) + '</p>' +
            '<p class="pv-claim">' + esc(e.claim) + '</p>' : '') +
          '</section>';
      }).join('') +
      (rels.length ? '<section><h3>供應鏈關係</h3><ul class="pv-list">' + rels.map(function (x) {
        var st = rstatusBy[x.r.status] || { label: x.r.status || '未標狀態', style: 'unknown' };
        return '<li>' + (x.inbound ? esc(x.who) + ' → 本公司' : '本公司 → ' + esc(x.who)) + '（' + esc(label(relBy, x.r.type)) + '）' +
          '<span class="ev ev-' + esc(st.style) + '"><b>' + esc(st.label) + '</b></span></li>';
      }).join('') + '</ul></section>' : '');
  }
  function openPreview(btn) {
    var c = coByFile[btn.dataset.file];
    if (!c || !window.SourceDrawer) { if (c) location.href = companyUrl(c); return; }
    SourceDrawer.panel(btn, preview(c), '公司預覽');   // 正在預覽的那一列：CSS 看按鈕的 aria-expanded 標亮
  }

  // ── 畫面 ──
  function render() {
    if (window.SourceDrawer) SourceDrawer.close();   // 清單重畫後，原本點的那一列已不在畫面上
    syncControls();
    var list = sorted(CO.filter(matchCompany));
    var nRoles = 0;
    CO.forEach(function (c) { nRoles += c.roles.length; });
    var count = active()
      ? '<b class="sc-count">' + list.length + ' / ' + CO.length + ' 家公司</b>'
      : '<b class="sc-count">' + CO.length + ' 家公司</b><span class="sc-of">· ' + nRoles + ' 個角色</span>';
    var head = '<div class="sc-reshead">' +
        '<div class="sc-conds">' + count + chips() + '</div>' +
        '<div class="sc-right">' +
          (state.view === 'list' ? '<label class="sc-sort">排序<select id="sc-sort">' +
            '<option value="updated"' + (state.sort === 'updated' ? ' selected' : '') + '>最近更新</option>' +
            '<option value="name"' + (state.sort === 'name' ? ' selected' : '') + '>公司名稱</option></select></label>' : '') +
          '<div class="sc-view" role="group" aria-label="檢視方式">' +
            '<button type="button" data-view="list" aria-pressed="' + (state.view === 'list') + '">公司清單</button>' +
            '<button type="button" data-view="roles" aria-pressed="' + (state.view === 'roles') + '">角色概覽</button></div>' +
        '</div>' +
      '</div>' +
      '<p class="sc-note">' + (state.view === 'roles'
        ? '同一家公司可以出現在多個角色，各角色的公司數不能加總。點公司名稱在右側預覽。'
        : '點一列在右側預覽，點公司名稱開公司檔案。「現況」是研究者把證據綜合起來的一句話，旁邊的標記是它證實到哪。') + '</p>';
    if (!list.length) {
      var L = layerBy[state.layer];
      results.innerHTML = head + '<div class="sc-empty"><p><b>' +
        (L && !state.q.trim() && !state.role ? '「' + esc(L.short) + '」還沒有整理公司資料。' : '沒有符合條件的公司。') + '</b></p>' +
        '<p><button type="button" class="sc-clear-inline">清除篩選</button>' +
        (L ? '或到 <a class="art" href="domains.html#' + L.id + '">研究領域・' + esc(L.short) + '</a> 看這個領域在研究什麼。' : '') + '</p></div>';
      return;
    }
    results.innerHTML = head + (state.view === 'roles'
      ? '<div class="sc-ov">' + overview(list) + '</div>'
      : '<div class="sc-list"><div class="sc-colhead" aria-hidden="true"><span>公司</span><span class="sc-r"><span>角色與技術</span><span>現況</span></span><span>更新</span></div>' +
        list.map(companyRow).join('') + '</div>');
    if (openFile) {
      var btn = results.querySelector('.sc-peek[data-file="' + openFile.replace(/"/g, '') + '"]');
      openFile = null;
      if (btn) { btn.closest('.sc-co').scrollIntoView({ block: 'start' }); openPreview(btn); }
    }
  }
  results.addEventListener('change', function (ev) {
    if (ev.target.id === 'sc-sort') { state.sort = ev.target.value; render(); }
  });
  results.addEventListener('click', function (ev) {
    var v = ev.target.closest('[data-view]');
    if (v) { state.view = v.dataset.view; render(); return; }
    var cond = ev.target.closest('.sc-cond');
    if (cond) { removeCond(cond.dataset.key, cond.dataset.value); render(); return; }
    if (ev.target.closest('.sc-clear-inline')) { clearAll(); return; }
    var peek = ev.target.closest('.sc-peek, .sc-jump');
    if (peek) openPreview(peek);
  });

  render();
});
