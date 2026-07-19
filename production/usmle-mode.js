/*
 * Rounds Codex - USMLE Mode engine (self-contained, drop-in).
 *
 * Usage:
 *     RoundsCodexUSMLE.mount('#usmle-root', USMLE_STEP1);
 *
 * - No external dependencies, no network calls.
 * - Injects its own CSS ONCE, fully scoped under the wrapper class `.rcusmle`,
 *   so it will not clobber the host app's styles (and the host's styles will
 *   not leak in, since every rule is prefixed).
 * - Reproduces every preview feature: Markdown-ish vignette rendering with lab
 *   tables and bold **[IMAGE: ...]** / **[ECG: ...]** anchor placeholders;
 *   Standard vs Explanation modes; system / difficulty / count / order filters;
 *   scoring; by-system breakdown; expandable review; keyboard support; and
 *   light/dark friendliness via prefers-color-scheme.
 *
 * Exposes a single global: window.RoundsCodexUSMLE = { mount, version }.
 */
(function () {
  "use strict";

  var LETTERS = ["A", "B", "C", "D", "E"];
  var STYLE_ID = "rcusmle-styles";

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  // -------------------------------------------------------------------------
  // Scoped CSS. Every selector is prefixed with `.rcusmle` so styles are
  // sandboxed to the mounted widget. Injected once per page.
  // -------------------------------------------------------------------------
  var CSS = [
    ".rcusmle{",
    "  --rc-bg:#f4f6f9; --rc-card:#ffffff; --rc-ink:#1b2430; --rc-muted:#5c6b7a;",
    "  --rc-line:#e3e8ee; --rc-brand:#1f6f54; --rc-brand-2:#2b7de9; --rc-brand-ink:#0f4c3a;",
    "  --rc-good:#1f8a4c; --rc-good-bg:#e7f6ec; --rc-bad:#c0392b; --rc-bad-bg:#fdecea;",
    "  --rc-chip:#eef2f7; --rc-shadow:0 1px 3px rgba(16,32,48,.08),0 6px 24px rgba(16,32,48,.06);",
    "  color:var(--rc-ink);",
    "  font:16px/1.55 -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;",
    "  -webkit-font-smoothing:antialiased;",
    "}",
    "@media (prefers-color-scheme: dark){",
    "  .rcusmle{ --rc-bg:#0f141a; --rc-card:#161d26; --rc-ink:#e7edf4; --rc-muted:#9fb0c0;",
    "    --rc-line:#26313d; --rc-chip:#1e2732; --rc-good-bg:#12331f; --rc-bad-bg:#3a1d1a;",
    "    --rc-shadow:0 1px 3px rgba(0,0,0,.4),0 6px 24px rgba(0,0,0,.35); }",
    "}",
    ".rcusmle *{box-sizing:border-box}",
    ".rcusmle .wrap{max-width:820px;margin:0 auto}",
    ".rcusmle a{color:var(--rc-brand-2)}",
    ".rcusmle header.top{display:flex;align-items:center;gap:12px;padding:20px 4px 8px}",
    ".rcusmle .logo{width:34px;height:34px;border-radius:9px;background:linear-gradient(135deg,var(--rc-brand),#2aa27a);",
    "  display:grid;place-items:center;color:#fff;font-weight:800;box-shadow:var(--rc-shadow)}",
    ".rcusmle .brand h1{font-size:17px;margin:0;letter-spacing:.2px}",
    ".rcusmle .brand p{margin:0;color:var(--rc-muted);font-size:12.5px}",
    ".rcusmle .pill{margin-left:auto;font-size:11px;color:var(--rc-muted);border:1px solid var(--rc-line);",
    "  padding:4px 9px;border-radius:999px;background:var(--rc-card)}",
    ".rcusmle .card{background:var(--rc-card);border:1px solid var(--rc-line);border-radius:16px;",
    "  box-shadow:var(--rc-shadow);padding:22px;margin-top:16px}",
    ".rcusmle h2{font-size:19px;margin:.1em 0 .5em}",
    ".rcusmle .sub{color:var(--rc-muted);font-size:14px;margin:0 0 18px}",
    ".rcusmle .grid{display:grid;gap:14px}",
    "@media(min-width:620px){.rcusmle .grid.two{grid-template-columns:1fr 1fr}}",
    ".rcusmle label.fld{display:block;font-size:12.5px;font-weight:700;color:var(--rc-muted);",
    "  text-transform:uppercase;letter-spacing:.4px;margin:0 0 6px}",
    ".rcusmle select,.rcusmle button{font:inherit}",
    ".rcusmle select{width:100%;padding:11px 12px;border:1px solid var(--rc-line);border-radius:10px;",
    "  background:var(--rc-card);color:var(--rc-ink);appearance:none}",
    ".rcusmle .seg{display:flex;gap:8px;flex-wrap:wrap}",
    ".rcusmle .seg button{flex:1;min-width:120px;padding:11px 12px;border:1px solid var(--rc-line);",
    "  border-radius:10px;background:var(--rc-card);color:var(--rc-ink);cursor:pointer;transition:.15s}",
    ".rcusmle .seg button.active{border-color:var(--rc-brand);background:var(--rc-brand);color:#fff;font-weight:700}",
    ".rcusmle .seg .desc{display:block;font-size:11.5px;font-weight:400;opacity:.85;margin-top:2px}",
    ".rcusmle .btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;cursor:pointer;",
    "  padding:12px 18px;border-radius:11px;border:1px solid transparent;font-weight:700;transition:.15s}",
    ".rcusmle .btn.primary{background:var(--rc-brand);color:#fff}",
    ".rcusmle .btn.primary:hover{filter:brightness(1.05)}",
    ".rcusmle .btn.ghost{background:var(--rc-card);border-color:var(--rc-line);color:var(--rc-ink)}",
    ".rcusmle .btn:disabled{opacity:.5;cursor:not-allowed}",
    ".rcusmle .row{display:flex;gap:10px;align-items:center;flex-wrap:wrap}",
    ".rcusmle .spacer{flex:1}",
    ".rcusmle .qmeta{display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:6px}",
    ".rcusmle .chip{font-size:11.5px;background:var(--rc-chip);color:var(--rc-muted);padding:3px 9px;border-radius:999px;",
    "  border:1px solid var(--rc-line)}",
    ".rcusmle .chip.sys{color:var(--rc-brand-ink);background:#e6f3ee;border-color:#cfe7dd}",
    "@media (prefers-color-scheme: dark){.rcusmle .chip.sys{color:#8fe0c1;background:#12331f;border-color:#1f5138}}",
    ".rcusmle .diff-easy{color:#1f8a4c} .rcusmle .diff-moderate{color:#b7791f} .rcusmle .diff-hard{color:#c0392b}",
    ".rcusmle .progress{height:6px;background:var(--rc-line);border-radius:99px;overflow:hidden;margin:4px 0 18px}",
    ".rcusmle .progress > i{display:block;height:100%;background:linear-gradient(90deg,var(--rc-brand),#2aa27a);transition:width .3s}",
    ".rcusmle .vignette{font-size:16px}",
    ".rcusmle .vignette p{margin:0 0 12px}",
    ".rcusmle .vignette table{border-collapse:collapse;width:100%;margin:6px 0 14px;font-size:14px}",
    ".rcusmle .vignette th,.rcusmle .vignette td{border:1px solid var(--rc-line);padding:7px 10px;text-align:left}",
    ".rcusmle .vignette th{background:var(--rc-chip);font-weight:700}",
    ".rcusmle .anchor-box{display:block;margin:6px 0 14px;padding:12px 14px;border:1px dashed var(--rc-brand);",
    "  border-radius:10px;background:linear-gradient(0deg,rgba(31,111,84,.05),rgba(31,111,84,.05));",
    "  color:var(--rc-muted);font-style:italic;font-size:14px}",
    ".rcusmle .anchor-tag{display:inline-block;font-style:normal;font-weight:800;font-size:10.5px;letter-spacing:.6px;",
    "  color:#fff;background:var(--rc-brand);border-radius:6px;padding:2px 7px;margin-right:8px;vertical-align:1px}",
    ".rcusmle .lead{font-weight:700;margin:16px 0 12px}",
    ".rcusmle .opts{display:grid;gap:10px}",
    ".rcusmle .opt{display:flex;gap:12px;align-items:flex-start;text-align:left;width:100%;",
    "  padding:12px 14px;border:1px solid var(--rc-line);border-radius:12px;background:var(--rc-card);",
    "  color:var(--rc-ink);cursor:pointer;transition:.12s}",
    ".rcusmle .opt:hover{border-color:var(--rc-brand)}",
    ".rcusmle .opt .key{flex:none;width:26px;height:26px;border-radius:7px;border:1px solid var(--rc-line);",
    "  display:grid;place-items:center;font-weight:800;font-size:13px;color:var(--rc-muted)}",
    ".rcusmle .opt.sel{border-color:var(--rc-brand-2);box-shadow:0 0 0 2px rgba(43,125,233,.15)}",
    ".rcusmle .opt.sel .key{background:var(--rc-brand-2);color:#fff;border-color:var(--rc-brand-2)}",
    ".rcusmle .opt.correct{border-color:var(--rc-good);background:var(--rc-good-bg)}",
    ".rcusmle .opt.correct .key{background:var(--rc-good);color:#fff;border-color:var(--rc-good)}",
    ".rcusmle .opt.wrong{border-color:var(--rc-bad);background:var(--rc-bad-bg)}",
    ".rcusmle .opt.wrong .key{background:var(--rc-bad);color:#fff;border-color:var(--rc-bad)}",
    ".rcusmle .opt.locked{cursor:default}",
    ".rcusmle .verdict{margin:16px 0 6px;font-weight:800}",
    ".rcusmle .verdict.good{color:var(--rc-good)} .rcusmle .verdict.bad{color:var(--rc-bad)}",
    ".rcusmle .exp{border-left:3px solid var(--rc-brand);background:var(--rc-chip);border-radius:0 10px 10px 0;",
    "  padding:12px 14px;margin:8px 0 4px;font-size:14.5px}",
    ".rcusmle .exp h4{margin:0 0 6px;font-size:13px;text-transform:uppercase;letter-spacing:.4px;color:var(--rc-muted)}",
    ".rcusmle .whys{list-style:none;margin:10px 0 0;padding:0;font-size:13.5px}",
    ".rcusmle .whys li{padding:5px 0;border-top:1px dashed var(--rc-line);color:var(--rc-muted)}",
    ".rcusmle .whys li b{color:var(--rc-ink)}",
    ".rcusmle .whys li.c{color:var(--rc-good)} .rcusmle .whys li.c b{color:var(--rc-good)}",
    ".rcusmle .score{font-size:44px;font-weight:800;line-height:1}",
    ".rcusmle .score small{font-size:16px;color:var(--rc-muted);font-weight:600}",
    ".rcusmle .bars{display:grid;gap:8px;margin-top:6px}",
    ".rcusmle .bar{display:grid;grid-template-columns:190px 1fr 46px;gap:10px;align-items:center;font-size:13px}",
    ".rcusmle .bar .t{color:var(--rc-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",
    ".rcusmle .bar .track{height:8px;background:var(--rc-line);border-radius:99px;overflow:hidden}",
    ".rcusmle .bar .track > i{display:block;height:100%;background:var(--rc-brand)}",
    ".rcusmle .review{margin-top:8px}",
    ".rcusmle details.rev{border:1px solid var(--rc-line);border-radius:12px;margin:8px 0;background:var(--rc-card);overflow:hidden}",
    ".rcusmle details.rev > summary{cursor:pointer;padding:12px 14px;font-size:14px;display:flex;gap:10px;align-items:center}",
    ".rcusmle details.rev > summary::-webkit-details-marker{display:none}",
    ".rcusmle .dot{width:9px;height:9px;border-radius:50%;flex:none}",
    ".rcusmle .dot.g{background:var(--rc-good)} .rcusmle .dot.b{background:var(--rc-bad)} .rcusmle .dot.n{background:var(--rc-muted)}",
    ".rcusmle .rev .body{padding:0 14px 14px}",
    ".rcusmle .foot{color:var(--rc-muted);font-size:12px;text-align:center;margin-top:26px}",
    ".rcusmle .hide{display:none!important}"
  ].join("\n");

  function injectStyles() {
    if (document.getElementById(STYLE_ID)) return;
    var st = document.createElement("style");
    st.id = STYLE_ID;
    st.textContent = CSS;
    document.head.appendChild(st);
  }

  // -------------------------------------------------------------------------
  // Markup for the widget (scoped inside the .rcusmle wrapper).
  // -------------------------------------------------------------------------
  var HTML = [
    '<div class="wrap">',
    '  <header class="top">',
    '    <div class="logo">R</div>',
    '    <div class="brand">',
    '      <h1>Rounds Codex &mdash; USMLE Mode</h1>',
    '      <p>Step 1 &middot; original vignettes</p>',
    '    </div>',
    '    <span class="pill" data-el="bankcount">&hellip;</span>',
    '  </header>',
    '  <section data-el="setup" class="card">',
    '    <h2>Start a set</h2>',
    '    <p class="sub">Original, blueprint-weighted Step&nbsp;1 items.</p>',
    '    <div class="grid">',
    '      <div>',
    '        <label class="fld">Mode</label>',
    '        <div class="seg" data-el="mode">',
    '          <button data-v="explanation" class="active">Explanation<span class="desc">Feedback after each answer</span></button>',
    '          <button data-v="standard">Standard<span class="desc">Exam sim &middot; score at the end</span></button>',
    '        </div>',
    '      </div>',
    '      <div class="grid two">',
    '        <div>',
    '          <label class="fld">System</label>',
    '          <select data-el="system"><option value="">All systems (blueprint mix)</option></select>',
    '        </div>',
    '        <div>',
    '          <label class="fld">Difficulty</label>',
    '          <select data-el="difficulty">',
    '            <option value="">All difficulties</option>',
    '            <option value="easy">Easy</option>',
    '            <option value="moderate">Moderate</option>',
    '            <option value="hard">Hard</option>',
    '          </select>',
    '        </div>',
    '      </div>',
    '      <div class="grid two">',
    '        <div>',
    '          <label class="fld">Number of questions</label>',
    '          <select data-el="count"></select>',
    '        </div>',
    '        <div>',
    '          <label class="fld">Order</label>',
    '          <select data-el="order">',
    '            <option value="shuffle">Shuffle</option>',
    '            <option value="sequential">Sequential (by ID)</option>',
    '          </select>',
    '        </div>',
    '      </div>',
    '      <div class="row">',
    '        <button class="btn primary" data-el="start">Start set</button>',
    '        <span class="spacer"></span>',
    '        <span class="chip" data-el="poolinfo"></span>',
    '      </div>',
    '    </div>',
    '  </section>',
    '  <section data-el="quiz" class="card hide">',
    '    <div class="row" style="margin-bottom:2px">',
    '      <span class="chip" data-el="counter">1 / 10</span>',
    '      <span class="chip" data-el="modechip">Explanation</span>',
    '      <span class="spacer"></span>',
    '      <span class="chip" data-el="livescore"></span>',
    '    </div>',
    '    <div class="progress"><i data-el="pbar" style="width:0%"></i></div>',
    '    <div class="qmeta" data-el="qmeta"></div>',
    '    <div class="vignette" data-el="vignette"></div>',
    '    <div class="lead" data-el="lead"></div>',
    '    <div class="opts" data-el="opts"></div>',
    '    <div data-el="feedback"></div>',
    '    <div class="row" style="margin-top:20px">',
    '      <button class="btn ghost" data-el="end">End test</button>',
    '      <span class="spacer"></span>',
    '      <button class="btn primary" data-el="next" disabled>Next</button>',
    '    </div>',
    '  </section>',
    '  <section data-el="results" class="card hide">',
    '    <h2>Results</h2>',
    '    <div class="row" style="align-items:flex-end;gap:18px">',
    '      <div class="score" data-el="scoreBig">0<small>/0</small></div>',
    '      <div class="sub" data-el="scorePct" style="margin:0"></div>',
    '    </div>',
    '    <h3 style="margin:20px 0 4px;font-size:14px">By system</h3>',
    '    <div class="bars" data-el="bars"></div>',
    '    <h3 style="margin:22px 0 4px;font-size:14px">Review</h3>',
    '    <div class="review" data-el="review"></div>',
    '    <div class="row" style="margin-top:18px">',
    '      <button class="btn primary" data-el="again">New set</button>',
    '    </div>',
    '  </section>',
    '  <p class="foot">All vignettes original &middot; not affiliated with the NBME or USMLE.</p>',
    '</div>'
  ].join("\n");

  // -------------------------------------------------------------------------
  // The instance factory. One per mount() so multiple widgets can coexist.
  // -------------------------------------------------------------------------
  function createInstance(root, BANK) {
    var cfg = { mode: "explanation" };
    var quiz = null;

    // element lookup scoped to this instance's root
    function $(name) { return root.querySelector('[data-el="' + name + '"]'); }

    function shuffle(a) {
      var r = a.slice();
      for (var i = r.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var t = r[i]; r[i] = r[j]; r[j] = t;
      }
      return r;
    }

    // ---------- vignette renderer (escape first, then limited formatting) ----
    function inlineFmt(s) {
      s = s.replace(/\*\*\[([^\]]+)\]\*\*/g, function (m, inner) {
        var idx = inner.indexOf(":");
        var label = idx > -1 ? inner.slice(0, idx).trim() : "VISUAL";
        var desc = idx > -1 ? inner.slice(idx + 1).trim() : inner.trim();
        return '<span class="anchor-box"><span class="anchor-tag">' + esc(label) + '</span>' + esc(desc) + '</span>';
      });
      s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
      return s;
    }
    function renderTable(block) {
      var rows = block.map(function (l) {
        return l.replace(/^\s*\|/, "").replace(/\|\s*$/, "").split("|").map(function (c) { return c.trim(); });
      });
      var body = rows.filter(function (r) {
        return !r.every(function (c) { return /^:?-{2,}:?$/.test(c) || c === ""; });
      });
      if (!body.length) return "";
      var head = body[0], out = '<table><thead><tr>';
      head.forEach(function (c) { out += "<th>" + inlineFmt(esc(c)) + "</th>"; });
      out += "</tr></thead><tbody>";
      body.slice(1).forEach(function (r) {
        out += "<tr>";
        r.forEach(function (c) { out += "<td>" + inlineFmt(esc(c)) + "</td>"; });
        out += "</tr>";
      });
      return out + "</tbody></table>";
    }
    function renderVignette(raw) {
      var lines = String(raw).split("\n"), html = "", i = 0;
      while (i < lines.length) {
        if (/^\s*\|/.test(lines[i])) {
          var blk = [];
          while (i < lines.length && /^\s*\|/.test(lines[i])) { blk.push(lines[i]); i++; }
          html += renderTable(blk);
        } else {
          var line = lines[i]; i++;
          if (line.trim() === "") continue;
          html += "<p>" + inlineFmt(esc(line)) + "</p>";
        }
      }
      return html;
    }

    // ---------- setup screen ----------
    function initSetup() {
      $("bankcount").textContent = BANK.length + " items loaded";
      var systems = {};
      BANK.forEach(function (q) { systems[q.system] = (systems[q.system] || 0) + 1; });
      var sysSel = $("system");
      Object.keys(systems).sort().forEach(function (s) {
        var o = document.createElement("option");
        o.value = s; o.textContent = s + " (" + systems[s] + ")";
        sysSel.appendChild(o);
      });
      $("mode").addEventListener("click", function (e) {
        var b = e.target.closest("button"); if (!b) return;
        cfg.mode = b.getAttribute("data-v");
        [].forEach.call(this.children, function (c) { c.classList.toggle("active", c === b); });
      });
      $("system").addEventListener("change", refreshPool);
      $("difficulty").addEventListener("change", refreshPool);
      refreshPool();
      $("start").addEventListener("click", startSet);
      $("again").addEventListener("click", function () { show("setup"); });
      $("next").addEventListener("click", nextQ);
      $("end").addEventListener("click", finish);
    }
    function filteredPool() {
      var sys = $("system").value, diff = $("difficulty").value;
      return BANK.filter(function (q) {
        return (!sys || q.system === sys) && (!diff || q.difficulty === diff);
      });
    }
    function refreshPool() {
      var pool = filteredPool();
      $("poolinfo").textContent = pool.length + " questions available";
      var cs = $("count"); cs.innerHTML = "";
      var opts = [5, 10, 20, 25, 40, 50].filter(function (n) { return n <= pool.length; });
      if (!opts.length || opts[opts.length - 1] < pool.length) opts.push(pool.length);
      opts.forEach(function (n) {
        var o = document.createElement("option");
        o.value = n;
        o.textContent = (n === pool.length ? "All " + n : n) + " questions";
        cs.appendChild(o);
      });
      cs.value = Math.min(10, pool.length) || pool.length;
      $("start").disabled = pool.length === 0;
    }

    function startSet() {
      var pool = filteredPool();
      if ($("order").value === "sequential") {
        pool = pool.slice().sort(function (a, b) { return a.id < b.id ? -1 : 1; });
      } else {
        pool = shuffle(pool);
      }
      var n = Math.min(parseInt($("count").value, 10) || pool.length, pool.length);
      quiz = { qs: pool.slice(0, n), i: 0, ans: [], revealed: false };
      for (var k = 0; k < n; k++) quiz.ans.push(null);
      $("modechip").textContent = cfg.mode === "explanation" ? "Explanation" : "Standard";
      show("quiz");
      renderQuestion();
    }

    // ---------- quiz screen ----------
    function renderQuestion() {
      var q = quiz.qs[quiz.i]; quiz.revealed = false;
      $("counter").textContent = (quiz.i + 1) + " / " + quiz.qs.length;
      $("pbar").style.width = Math.round((quiz.i) / quiz.qs.length * 100) + "%";
      var scored = quiz.ans.filter(function (a) { return a != null; }).length;
      $("livescore").textContent = cfg.mode === "explanation"
        ? runningCorrect() + " correct" : scored + " answered";
      var dc = "diff-" + q.difficulty;
      $("qmeta").innerHTML = '<span class="chip sys">' + esc(q.system) + '</span>' +
        '<span class="chip">' + esc(q.discipline) + '</span>' +
        '<span class="chip ' + dc + '">' + esc(q.difficulty) + '</span>' +
        (q.anchor ? '<span class="chip">' + esc(q.anchor) + '</span>' : '');
      $("vignette").innerHTML = renderVignette(q.vignette);
      $("lead").textContent = q.lead;
      var wrap = $("opts"); wrap.innerHTML = "";
      q.options.forEach(function (txt, idx) {
        var b = document.createElement("button");
        b.className = "opt"; b.setAttribute("data-i", idx);
        b.innerHTML = '<span class="key">' + LETTERS[idx] + '</span><span>' + esc(txt) + '</span>';
        b.addEventListener("click", function () { pick(idx); });
        wrap.appendChild(b);
      });
      var prev = quiz.ans[quiz.i];
      if (prev != null) {
        markSel(prev);
        if (cfg.mode === "explanation") { reveal(); }
      }
      $("feedback").innerHTML = "";
      $("next").textContent = (quiz.i === quiz.qs.length - 1) ? "Finish" : "Next";
      $("next").disabled = cfg.mode === "explanation" ? (prev == null) : false;
      if (prev != null && cfg.mode === "explanation") $("next").disabled = false;
    }
    function markSel(idx) {
      [].forEach.call($("opts").children, function (c) {
        c.classList.toggle("sel", +c.getAttribute("data-i") === idx);
      });
    }
    function pick(idx) {
      if (cfg.mode === "explanation") {
        if (quiz.revealed) return;
        quiz.ans[quiz.i] = idx; markSel(idx); reveal(); $("next").disabled = false;
      } else {
        quiz.ans[quiz.i] = idx; markSel(idx);
      }
    }
    function reveal() {
      quiz.revealed = true;
      var q = quiz.qs[quiz.i], chosen = quiz.ans[quiz.i], correct = q.answer;
      [].forEach.call($("opts").children, function (c) {
        var i = +c.getAttribute("data-i");
        c.classList.add("locked");
        c.classList.remove("sel");
        if (i === correct) c.classList.add("correct");
        else if (i === chosen) c.classList.add("wrong");
      });
      var ok = chosen === correct;
      var whys = "";
      q.why.forEach(function (w, i) {
        var isC = (i === correct);
        whys += '<li class="' + (isC ? "c" : "") + '"><b>' + LETTERS[i] + '.</b> ' + esc(w) + "</li>";
      });
      $("feedback").innerHTML =
        '<div class="verdict ' + (ok ? "good" : "bad") + '">' + (ok ? "Correct" : "Incorrect") +
          ' &middot; answer ' + LETTERS[correct] + '</div>' +
        '<div class="exp"><h4>Explanation</h4>' + esc(q.exp) +
          '<ul class="whys">' + whys + '</ul></div>';
    }
    function runningCorrect() {
      var n = 0; quiz.qs.forEach(function (q, i) { if (quiz.ans[i] === q.answer) n++; }); return n;
    }
    function nextQ() {
      if (quiz.i >= quiz.qs.length - 1) { finish(); return; }
      quiz.i++; renderQuestion();
    }

    // ---------- results ----------
    function finish() {
      var qs = quiz.qs, total = qs.length, correct = runningCorrect();
      $("scoreBig").innerHTML = correct + '<small>/' + total + '</small>';
      var pct = total ? Math.round(correct / total * 100) : 0;
      $("scorePct").innerHTML = '<b>' + pct + '%</b> &middot; ' + correct + ' of ' + total + ' correct';
      var bySys = {};
      qs.forEach(function (q, i) {
        var s = q.system; bySys[s] = bySys[s] || { c: 0, t: 0 };
        bySys[s].t++; if (quiz.ans[i] === q.answer) bySys[s].c++;
      });
      var bars = $("bars"); bars.innerHTML = "";
      Object.keys(bySys).sort().forEach(function (s) {
        var d = bySys[s], p = Math.round(d.c / d.t * 100);
        var el = document.createElement("div"); el.className = "bar";
        el.innerHTML = '<div class="t" title="' + esc(s) + '">' + esc(s) + '</div>' +
          '<div class="track"><i style="width:' + p + '%"></i></div>' +
          '<div style="text-align:right">' + d.c + '/' + d.t + '</div>';
        bars.appendChild(el);
      });
      var rev = $("review"); rev.innerHTML = "";
      qs.forEach(function (q, i) {
        var chosen = quiz.ans[i], correct2 = q.answer, ok = chosen === correct2, un = chosen == null;
        var dcls = un ? "n" : (ok ? "g" : "b");
        var d = document.createElement("details"); d.className = "rev";
        var picked = un ? "skipped" : LETTERS[chosen];
        d.innerHTML = '<summary><span class="dot ' + dcls + '"></span>' +
          '<b>Q' + (i + 1) + '</b> &middot; ' + esc(q.topic) +
          ' <span class="chip" style="margin-left:auto">you: ' + picked + ' &middot; key: ' + LETTERS[correct2] + '</span></summary>' +
          '<div class="body"><div class="vignette">' + renderVignette(q.vignette) + '</div>' +
          '<div class="lead">' + esc(q.lead) + '</div>' + optionReview(q, chosen) +
          '<div class="exp"><h4>Explanation</h4>' + esc(q.exp) + '</div></div>';
        rev.appendChild(d);
      });
      show("results");
    }
    function optionReview(q, chosen) {
      var out = '<div class="opts">';
      q.options.forEach(function (txt, i) {
        var cls = "opt locked";
        if (i === q.answer) cls += " correct"; else if (i === chosen) cls += " wrong";
        out += '<div class="' + cls + '"><span class="key">' + LETTERS[i] + '</span><span>' + esc(txt) +
          '<br><small style="color:var(--rc-muted)">' + esc(q.why[i]) + '</small></span></div>';
      });
      return out + "</div>";
    }

    // ---------- nav ----------
    function show(id) {
      ["setup", "quiz", "results"].forEach(function (s) {
        $(s).classList.toggle("hide", s !== id);
      });
      window.scrollTo(0, 0);
    }

    // ---------- keyboard support (scoped: only acts while quiz is visible) ----
    function onKey(e) {
      if (!quiz || $("quiz").classList.contains("hide")) return;
      var k = (e.key || "").toUpperCase(), i = LETTERS.indexOf(k);
      if (i > -1 && i < quiz.qs[quiz.i].options.length) { pick(i); }
      else if (e.key === "Enter" && !$("next").disabled) { nextQ(); }
    }

    // ---------- boot ----------
    if (!BANK || !BANK.length) {
      root.innerHTML = '<div class="wrap"><div class="card" style="margin-top:40px">' +
        '<h2>No questions loaded</h2><p class="sub">The USMLE data bundle did not load. ' +
        'Make sure <code>usmle-step1-data.js</code> is included before <code>usmle-mode.js</code>.</p></div></div>';
      return;
    }
    initSetup();
    document.addEventListener("keydown", onKey);
  }

  // -------------------------------------------------------------------------
  // Public API
  // -------------------------------------------------------------------------
  function mount(containerSelector, bankArray) {
    var root = typeof containerSelector === "string"
      ? document.querySelector(containerSelector)
      : containerSelector;
    if (!root) {
      throw new Error("RoundsCodexUSMLE.mount: container not found -> " + containerSelector);
    }
    injectStyles();
    if (root.classList) root.classList.add("rcusmle");
    root.innerHTML = HTML;
    createInstance(root, bankArray || []);
    return root;
  }

  window.RoundsCodexUSMLE = { mount: mount, version: "1.0.0" };
})();
