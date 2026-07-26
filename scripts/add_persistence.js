/* Give the app persistent state. Run AFTER scripts/split_content.js.
 *
 * Nothing in this app survived a reload: not a bookmark, not quiz progress, not a
 * practice attempt. The library's star button toggled a class and showed a toast, which
 * looks like a bookmark feature and is not one.
 *
 * Two pieces, deliberately separate:
 *
 *  1. NCLEX_STORE -- the exam store from the medcodex-exam-module skill (store.js). It was
 *     written and never shipped, so the NCLEX engine has been falling back to its
 *     in-memory shim this whole time; the engine already calls the right seams
 *     (Storage.save / load / clear / has / record), they just landed nowhere. Inlining it
 *     and pointing it at localStorage turns on save-and-resume, attempt history and
 *     mastery with no engine changes.
 *
 *  2. RC_STORE -- app-level state the exam store does not cover: bookmarks and per-quiz
 *     progress. Same shape, same swap-the-adapter-later property.
 *
 * Both are device-local and never transmitted. That is deliberate: it keeps the App Store
 * privacy label at "Data Not Collected", and cross-device sync would mean accounts and a
 * backend. Both sit behind an interface so sync can be added later without touching call
 * sites.
 *
 *  3. nclex-report.js -- the shared report engine. The NCLEX engine's showReport() bails to
 *     a legacy summary when window.NCLEX_REPORT is absent, and the Storage.record call sits
 *     INSIDE that branch -- so with no engine in the root app, attempts could never be
 *     recorded no matter how good the store was. The engine was only ever shipped to
 *     usmle/. Inlining it here both fixes that and brings the NCLEX results screen up to
 *     the same report the USMLE page already shows.
 *
 * Usage: node scripts/add_persistence.js <index.html> <store.js> <nclex-report.js>
 */
const fs = require('fs');

const SRC = process.argv[2];
const STORE_JS = process.argv[3];
const REPORT_JS = process.argv[4];
if (!SRC || !STORE_JS || !REPORT_JS) {
  console.error('usage: node add_persistence.js <index.html> <store.js> <nclex-report.js>');
  process.exit(2);
}

let s = fs.readFileSync(SRC, 'utf8');
const n0 = s.length;
const done = [];

function replaceOnce(old, neu, label) {
  const parts = s.split(old);
  if (parts.length !== 2) {
    console.error('FAIL %s: found %d occurrences, expected 1', label, parts.length - 1);
    process.exit(1);
  }
  s = parts[0] + neu + parts[1];
  done.push(label);
}

/* ------------------------------------------------------------------ 1. the stores */

const storeSrc = fs.readFileSync(STORE_JS, 'utf8');
if (!/window\.NCLEX_STORE\s*=\s*STORE/.test(storeSrc)) {
  console.error('FAIL: %s does not look like the exam store (no window.NCLEX_STORE assignment)', STORE_JS);
  process.exit(1);
}
const reportSrc = fs.readFileSync(REPORT_JS, 'utf8');
if (!/window\.NCLEX_REPORT\s*=\s*RPT/.test(reportSrc)) {
  console.error('FAIL: %s does not look like the report engine (no window.NCLEX_REPORT assignment)', REPORT_JS);
  process.exit(1);
}

const RC_STORE = `
/* ---------- RC_STORE: app-level persistent state ----------------------------------
   Bookmarks and quiz progress. Deliberately separate from NCLEX_STORE, which owns exam
   attempts: different lifetimes, different sizes, and the exam store is shared with the
   USMLE page. Device-local and never transmitted -- see the header of
   scripts/add_persistence.js for why that is a decision, not an oversight.

   Writes are best-effort. Private browsing and a full quota both throw on setItem, and a
   failed bookmark must never take the app down with it.
--------------------------------------------------------------------------------- */
var RC_STORE=(function(){
  var KEY='rc.app.v1';
  var mem=null;                       /* fallback so the app still behaves within a session */
  function read(){
    if(mem) return mem;
    try{ var raw=window.localStorage.getItem(KEY); mem=raw?JSON.parse(raw):{}; }
    catch(e){ mem={}; }
    if(!mem||typeof mem!=='object') mem={};
    if(!mem.bookmarks) mem.bookmarks=[];
    if(!mem.quiz) mem.quiz={};
    return mem;
  }
  function write(){
    try{ window.localStorage.setItem(KEY, JSON.stringify(mem)); return true; }
    catch(e){ return false; }         /* keep the in-memory copy; the session still works */
  }
  return {
    available:(function(){try{var k='__rc_t';localStorage.setItem(k,'1');localStorage.removeItem(k);return true;}catch(e){return false;}})(),

    /* -- bookmarks -- */
    bookmarks:function(){ return read().bookmarks.slice(); },
    isBookmarked:function(id){ return read().bookmarks.indexOf(id)>=0; },
    toggleBookmark:function(id){
      var b=read().bookmarks, i=b.indexOf(id);
      if(i>=0) b.splice(i,1); else b.push(id);
      write();
      return i<0;                     /* true = now bookmarked */
    },

    /* -- quiz progress: best FIRST-TRY score per condition -- */
    quizResult:function(id){ return read().quiz[id]||null; },
    recordQuiz:function(id,firstTry,total){
      var q=read().quiz, prev=q[id];
      var rec={ best:(prev&&prev.best>firstTry)?prev.best:firstTry,
                total:total, runs:(prev&&prev.runs||0)+1, at:Date.now() };
      q[id]=rec; write();
      return rec;
    },

    reset:function(){ mem={bookmarks:[],quiz:{}}; write(); }
  };
})();
`;

replaceOnce(
  '<!-- ===== NCLEX-RN module (Phase 6 injected by apply-nclex.js) ===== -->',
  '<script>\n'
  + '/* ---------- exam store (medcodex-exam-module/scripts/store.js) -------------------\n'
  + '   Must be defined BEFORE the NCLEX engine block: that engine builds its `Storage`\n'
  + '   wrapper at parse time and silently falls back to an in-memory shim if\n'
  + '   window.NCLEX_STORE is absent -- which is exactly what has been happening.\n'
  + '--------------------------------------------------------------------------------- */\n'
  + storeSrc.trimEnd() + '\n'
  + '\n/* ---------- shared report engine (src/report/nclex-report.js) -------------------\n'
  + '   Also required BEFORE the NCLEX engine block. showReport() falls back to a legacy\n'
  + '   summary when this is missing -- and the Storage.record call lives inside the branch\n'
  + '   that needs it, so without the engine no attempt could ever be recorded. Ships the\n'
  + '   built-in `nclex` profile; the USMLE page registers its own profile on the same\n'
  + '   engine rather than forking it.\n'
  + '--------------------------------------------------------------------------------- */\n'
  + reportSrc.trimEnd() + '\n'
  + RC_STORE
  + '\n(function(){\n'
  + '  /* The store defaults to a memory adapter so it can run headless. Point it at\n'
  + '     localStorage in the browser; the native shell can swap in BridgeAdapter later\n'
  + '     without any call site changing. */\n'
  + '  try{\n'
  + '    if(window.NCLEX_STORE && RC_STORE.available){\n'
  + '      NCLEX_STORE.use(NCLEX_STORE.LocalStorageAdapter("rc."));\n'
  + '    }\n'
  + '  }catch(e){ if(window.console) console.warn("persistence unavailable, staying in memory:",e); }\n'
  + '})();\n'
  + '</script>\n'
  + '<!-- ===== NCLEX-RN module (Phase 6 injected by apply-nclex.js) ===== -->',
  'inline exam store + report engine + RC_STORE + localStorage adapter');

/* ----------------------------------------------------- 2. the star actually bookmarks */

replaceOnce(
  `<div class="tb-btn star" id="starBtn" onclick="this.classList.toggle('on');toast(this.classList.contains('on')?'★ <b>Bookmarks</b>':'Bookmarks off')">`,
  `<div class="tb-btn star" id="starBtn" onclick="libToggleStarFilter(this)" title="Show bookmarks only">`,
  'star button -> real filter');

/* Library filter: when the star is on, show only bookmarked conditions. */
replaceOnce(
  `function libRender(){const term=(document.getElementById('q').value||'').toLowerCase();
 let rows=DATA.filter(d=>(libSpec==='All'||d.category===libSpec)&&d.name.toLowerCase().includes(term));`,
  `let libStarOnly=false;
function libToggleStarFilter(el){
  libStarOnly=!libStarOnly;
  el.classList.toggle('on',libStarOnly);
  if(libStarOnly&&!RC_STORE.bookmarks().length) toast('No bookmarks yet — tap ☆ on a condition');
  libRender();
}
/* Bookmark from a card without opening it. stopPropagation keeps the card's own
   click handler (which navigates) from firing. */
function libToggleCard(ev,id){
  ev.stopPropagation();
  var on=RC_STORE.toggleBookmark(id);
  var el=ev.currentTarget; el.classList.toggle('on',on);
  el.setAttribute('aria-label',(on?'Remove ':'Add ')+'bookmark');
  if(libStarOnly) libRender();
}
function libRender(){const term=(document.getElementById('q').value||'').toLowerCase();
 const marks=RC_STORE.bookmarks();
 let rows=DATA.filter(d=>(libSpec==='All'||d.category===libSpec)&&d.name.toLowerCase().includes(term)
                         &&(!libStarOnly||marks.indexOf(d.id)>=0));`,
  'library bookmark filter + card toggle');

/* Empty state has to explain the filter, not just say "no matches". */
replaceOnce(
  `if(!rows.length){list.innerHTML='<div class="empty">No conditions match.</div>';return;}`,
  `if(!rows.length){list.innerHTML='<div class="empty">'+(libStarOnly
    ? 'No bookmarked conditions'+(term||libSpec!=='All'?' match this filter.':' yet. Tap ☆ on any condition to save it here.')
    : 'No conditions match.')+'</div>';return;}`,
  'bookmark-aware empty state');

/* A star on every card, reflecting saved state. */
replaceOnce(
  '<div class="eyebrow">${d.category}</div><h3>${d.name}</h3><div class="icd">ICD-10 ${d.icd10}</div></div>`;}).join(\'\');',
  '<div class="eyebrow">${d.category}</div><h3>${d.name}</h3><div class="icd">ICD-10 ${d.icd10}</div>'
  + '<div class="cbm${marks.indexOf(d.id)>=0?\' on\':\'\'}" onclick="libToggleCard(event,\'${d.id}\')" '
  + 'role="button" aria-label="${marks.indexOf(d.id)>=0?\'Remove\':\'Add\'} bookmark">'
  + '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round">'
  + '<path d="M12 3l2.6 5.6 6 .7-4.4 4.1 1.2 6-5.4-3-5.4 3 1.2-6L4 9.3l6-.7z"/></svg></div></div>`;}).join(\'\');',
  'per-card bookmark star');

/* ------------------------------------------------------- 3. quiz progress is recorded */

replaceOnce(
  `function qResults(){const q=QUIZZES[QID],n=q.questions.length,scc=qfirst.filter(Boolean).length,pct=Math.round(scc/n*100);`,
  `function qResults(){const q=QUIZZES[QID],n=q.questions.length,scc=qfirst.filter(Boolean).length,pct=Math.round(scc/n*100);
 try{ RC_STORE.recordQuiz(QID,scc,n); }catch(e){}   /* best first-try score, shown on the condition page */`,
  'record quiz result');

/* Surface it on the condition page's quiz button. */
replaceOnce(
  `\${(g||q)?\`<div class="cta">\${q?\`<button class="quiz" onclick="go('quiz','\${id}')">`,
  `\${(g||q)?\`<div class="cta">\${q?\`<button class="quiz" onclick="go('quiz','\${id}')" data-done="\${(function(){var r=RC_STORE.quizResult(id);return r?r.best+'/'+r.total:'';})()}">`,
  'quiz button carries the best score');

/* ------------------------------------------------- 3b. the condition count was stale */
// Two places said "180 conditions"; there are 181 since Metabolic Syndrome was added, and
// both are rendered after the content loads, so derive the number instead of hard-coding
// it again -- the next condition would otherwise make it wrong a third time.
replaceOnce('Search 180 conditions across 21 specialties',
            'Search ${DATA.length} conditions across ${ORDER.length} specialties',
            'search placeholder count');
replaceOnce('Cited answers grounded in the 180-condition library',
            'Cited answers grounded in the ${DATA.length}-condition library',
            'Ask subtitle count');

/* ------------------------------------------------------------------------ 4. styling */

replaceOnce('</style>\n<script>',
  `/* --- persistence UI ------------------------------------------------------- */
.tb-btn.star{transition:color .18s,border-color .18s,background .18s;}
.tb-btn.star.on{color:var(--gold);border-color:color-mix(in srgb,var(--gold) 45%,transparent);
  background:color-mix(in srgb,var(--gold) 12%,transparent);}
.tb-btn.star.on svg{fill:var(--gold);}
.card{position:relative;}
/* The card's bookmark tap target. 44x44 per Apple's minimum even though the icon is 17px:
   it gets hit with a thumb, and it sits inside a card that navigates away on tap.
   Anchored to the ICD line, NOT the top-right corner -- the cards are ~184px wide in the
   two-column grid and a long single word ("Hyperparathyroidism") overflows its box rather
   than wrapping, so a top-right star ends up sitting on top of the title. Reserving space
   with padding cannot fix an unbreakable word; only mid-word breaking or truncation would,
   and neither is acceptable on a medical term. The ICD line is short and predictable. */
.card .cbm{position:absolute;bottom:2px;right:2px;width:44px;height:44px;display:grid;place-items:center;
  border-radius:12px;color:var(--muted-2);opacity:.55;transition:opacity .15s,color .15s,background .15s;
  -webkit-tap-highlight-color:transparent;}
.card .cbm svg{width:17px;height:17px;}
.card .cbm:hover{opacity:1;background:rgba(255,255,255,.06);}
.card .cbm:active{background:rgba(255,255,255,.10);}
.card .cbm.on{opacity:1;color:var(--gold);}
.card .cbm.on svg{fill:var(--gold);}
.card .icd{padding-right:44px;}
/* best first-try score, shown only once the quiz has actually been taken */
.quiz[data-done]:not([data-done=""])::after{content:"Best " attr(data-done);margin-left:auto;
  font-size:11px;font-weight:800;letter-spacing:.3px;opacity:.85;
  background:rgba(0,0,0,.18);border-radius:999px;padding:3px 9px;}
</style>
<script>`, 'persistence styles');

fs.writeFileSync(SRC, s);
console.log('applied %d edits:', done.length);
done.forEach(d => console.log('  -', d));
console.log('%s -> %s chars (+%s)', n0, s.length, s.length - n0);
