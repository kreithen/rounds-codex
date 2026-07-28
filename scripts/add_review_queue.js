/* Spaced review over bookmarked conditions: a "due today" card in the Library, a session that
 * grades each item Again / Good / Easy, and Leitner scheduling in localStorage.
 *
 * Retrieval practice is the single biggest lever on retention, and the app already stores the
 * two things a review queue needs: which conditions the user cares about (bookmarks) and a
 * place to keep per-condition state (RC_STORE's pattern).
 *
 * Design decisions, all deliberate:
 *
 *  - **Bookmarks are the enrolment signal.** Tapping the star already means "I am studying
 *    this". Inventing a second gesture ("add to review") would split that meaning across two
 *    controls that mean nearly the same thing, and leave the star doing nothing. Un-bookmarking
 *    drops an item out of the queue but KEEPS its schedule, so re-starring resumes rather than
 *    restarts.
 *
 *  - **Self-rating, not quiz-driven.** Only 9 of 181 conditions have a quiz, so a quiz-gated
 *    queue would ship almost empty. Again/Good/Easy works on all 181 today and is the grading
 *    students already know from Anki. Quiz results can feed the same scheduler later without
 *    redesigning it.
 *
 *  - **Leitner boxes, not SM-2.** Fixed intervals [1,2,4,8,16,32,64] days. An ease factor is
 *    tunable to three decimal places and impossible to reason about when a schedule looks
 *    wrong; a box number is inspectable at a glance. Again -> box 0, Good -> +1, Easy -> +2.
 *
 *  - **Dates as YYYY-MM-DD, compared as strings.** Millisecond arithmetic on a 24h day gets
 *    DST wrong twice a year -- an item scheduled "tomorrow" becomes due in 23 hours and appears
 *    a day early. A local calendar date has no such edge.
 *
 *  - **The card hides itself when nothing is due.** It is a prompt, not furniture; a permanent
 *    "0 due" panel trains people to ignore that spot.
 *
 * Usage: node scripts/add_review_queue.js <index.html>
 */
'use strict';
const fs = require('fs');

const INDEX = process.argv[2];
if (!INDEX) { console.error('usage: add_review_queue.js <index.html>'); process.exit(2); }

function replaceOnce(s, old, neu, label) {
  const parts = s.split(old);
  if (parts.length !== 2) {
    console.error(`FAIL ${label}: found ${parts.length - 1} occurrences, expected 1`);
    process.exit(1);
  }
  console.log('  ok  ' + label);
  return parts[0] + neu + parts[1];
}

let s = fs.readFileSync(INDEX, 'utf8');
const n0 = s.length;
if (s.includes('RC_REVIEW')) { console.error('FAIL: already patched'); process.exit(1); }

/* ------------------------------------------------------------------ 1. the store */

s = replaceOnce(s, 'var RC_STORE=(function(){',
  `/* Spaced-review schedule. Its own key rather than a field inside RC_STORE: the schedule is
   the one piece of state a user would plausibly want to reset on its own ("start my reviews
   over") without losing their bookmarks and quiz scores. Same shape as RC_STORE otherwise --
   memory fallback so a private-mode Safari still behaves for the session. */
var RC_REVIEW=(function(){
  var KEY='rc.review.v1';
  var BOX=[1,2,4,8,16,32,64];          /* days until next sight, by box */
  var mem=null;
  function read(){
    if(mem) return mem;
    try{ var raw=window.localStorage.getItem(KEY); mem=raw?JSON.parse(raw):{}; }
    catch(e){ mem={}; }
    if(!mem||typeof mem!=='object') mem={};
    if(!mem.items) mem.items={};
    return mem;
  }
  function write(){ try{ window.localStorage.setItem(KEY,JSON.stringify(mem)); return true; }catch(e){ return false; } }
  function dstr(d){ return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); }
  function today(){ return dstr(new Date()); }
  function plus(n){ var d=new Date(); d.setDate(d.getDate()+n); return dstr(d); }

  /* Enrolled = bookmarked. An item with no schedule yet is new, and new means due now. */
  function enrolled(){
    try{ return RC_STORE.bookmarks().filter(function(id){ return byId[id]; }); }catch(e){ return []; }
  }
  function isDue(id){
    var it=read().items[id];
    return !it || !it.due || it.due<=today();
  }
  function due(){ return enrolled().filter(isDue); }

  /* Again sends it back to box 0 and re-shows it today; Good advances one box, Easy two. */
  function grade(id,g){
    var m=read(), it=m.items[id]||{box:0,reps:0,lapses:0};
    if(g==='again'){ it.box=0; it.lapses=(it.lapses||0)+1; }
    else it.box=Math.min(BOX.length-1,(it.box||0)+(g==='easy'?2:1));
    it.reps=(it.reps||0)+1;
    it.due=plus(g==='again'?0:BOX[it.box]);
    it.seen=today();
    m.items[id]=it; write();
    return it;
  }
  function stats(){
    var m=read(), e=enrolled();
    return {enrolled:e.length, due:due().length,
            learning:e.filter(function(id){ var it=m.items[id]; return it&&it.box<3; }).length,
            known:e.filter(function(id){ var it=m.items[id]; return it&&it.box>=3; }).length};
  }
  function resetAll(){ mem={items:{}}; write(); }
  return {due:due, isDue:isDue, grade:grade, stats:stats, enrolled:enrolled,
          resetAll:resetAll, today:today, BOX:BOX};
})();

var RC_STORE=(function(){`,
  'RC_REVIEW store');

/* --------------------------------------------------- 2. the card in the Library */

s = replaceOnce(s,
  `<span>All Image Galleries</span></button>\n <div class="chips" id="chips"></div>`,
  `<span>All Image Galleries</span></button>\n <div id="revCard"></div>\n <div class="chips" id="chips"></div>`,
  'card slot in the library');

s = replaceOnce(s, 'function libInit(){',
  `/* Rendered into its slot rather than baked into libHTML, so finishing a session can refresh
   just this card. Empty string when nothing is due -- see the note about furniture. */
function rcReviewCardHTML(){
  var st=RC_REVIEW.stats();
  if(!st.due) return '';
  return '<div class="revcard" onclick="rcStartReview()" role="button" tabindex="0">'
    +'<div class="rv-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" '
    +'stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 11-3.2-6.9"/>'
    +'<path d="M21 3v6h-6"/></svg></div>'
    +'<div class="rv-txt"><div class="rv-t">'+st.due+' condition'+(st.due===1?'':'s')+' due for review</div>'
    +'<div class="rv-s">'+st.enrolled+' bookmarked \\u00b7 tap to start</div></div>'
    +'<div class="rv-go">Start</div></div>';
}
function rcPaintReviewCard(){
  var el=document.getElementById('revCard');
  if(el) el.innerHTML=rcReviewCardHTML();
}

function libInit(){`,
  'review card markup');

s = replaceOnce(s,
  `window._specs=specs;libRender();}`,
  `window._specs=specs;rcPaintReviewCard();libRender();}`,
  'libInit paints the card');

/* ------------------------------------------------------- 3. the review session */

s = replaceOnce(s, '/* ---------- DETAIL ---------- */',
  `/* ---------- SPACED REVIEW ---------- */
/* The session's queue is frozen when it starts. Recomputing due() mid-session would make an
   item graded "Again" reappear as a fresh card and the progress count jump around; instead
   Again re-queues that id once at the end, which is what a student expects. */
var RV_Q=[], RV_I=0, RV_SHOW=false, RV_DONE=0;

function rcStartReview(){
  RV_Q=RC_REVIEW.due(); RV_I=0; RV_SHOW=false; RV_DONE=0;
  if(!RV_Q.length){ toast('Nothing due for review'); return; }
  go('review');
}

function reviewHTML(){
  return '<div class="rvwrap"><div class="rvhead">'
    +'<div class="tb-btn" onclick="back()" aria-label="Leave review"><svg viewBox="0 0 24 24" fill="none" '
    +'stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M15 5l-7 7 7 7"/></svg></div>'
    +'<div class="rvprog"><div class="rvbar"><span id="rvfill"></span></div><div id="rvcount" class="rvn"></div></div>'
    +'</div><div id="rvbody"></div></div>';
}

function reviewInit(){ rvRender(); }

function rvRender(){
  var body=document.getElementById('rvbody');
  if(RV_I>=RV_Q.length){ rvSummary(); return; }
  var d=byId[RV_Q[RV_I]];
  if(!d){ RV_I++; rvRender(); return; }
  var pair=sec(d.category), pearls=(d.pearls||[]).slice(0,3);

  document.getElementById('rvfill').style.width=Math.round(RV_DONE/RV_Q.length*100)+'%';
  document.getElementById('rvcount').textContent=(RV_I+1)+' / '+RV_Q.length;

  body.innerHTML='<div class="rvcard" style="--sec:'+pair[0]+';--sec2:'+pair[1]+'">'
    +'<div class="rv-cat">'+d.category+'</div>'
    +'<h2 class="rv-name">'+d.name+'</h2>'
    +(RV_SHOW
      ? '<div class="rv-back"><div class="rv-tag">'+d.tagline+'</div>'
        +(pearls.length?'<div class="rv-ph">High-yield</div><ul class="rv-pearls"><li>'
          +pearls.join('</li><li>')+'</li></ul>':'')
        +'<button class="rv-open" onclick="rcReviewOpen()">Open the full page</button></div>'
      : '<div class="rv-prompt">What is it, what confirms it, and what is the first-line '
        +'management?<span>Recall it, then check yourself.</span></div>')
    +'</div>'
    +(RV_SHOW
      ? '<div class="rv-grade"><button class="rvb again" onclick="rcGrade(\\'again\\')">Again'
        +'<span>today</span></button>'
        +'<button class="rvb good" onclick="rcGrade(\\'good\\')">Good<span id="rvgood"></span></button>'
        +'<button class="rvb easy" onclick="rcGrade(\\'easy\\')">Easy<span id="rveasy"></span></button></div>'
      : '<button class="rv-show" onclick="rcReviewShow()">Show answer</button>');

  if(RV_SHOW) rvLabelIntervals(RV_Q[RV_I]);
}

/* Tell the user what each button costs them. A grading UI that hides the schedule makes the
   choice arbitrary -- "Good" meaning 4 days is information they need to grade honestly. */
function rvLabelIntervals(id){
  var B=RC_REVIEW.BOX, box=0;
  try{ var m=JSON.parse(window.localStorage.getItem('rc.review.v1')||'{}');
       box=(m.items&&m.items[id]&&m.items[id].box)||0; }catch(e){}
  var fmt=function(n){ return n>=30?Math.round(n/30)+' mo':n+(n===1?' day':' days'); };
  var g=document.getElementById('rvgood'), e=document.getElementById('rveasy');
  if(g) g.textContent=fmt(B[Math.min(B.length-1,box+1)]);
  if(e) e.textContent=fmt(B[Math.min(B.length-1,box+2)]);
}

function rcReviewShow(){ RV_SHOW=true; rvRender(); }
function rcReviewOpen(){ go('detail',RV_Q[RV_I]); }

function rcGrade(g){
  var id=RV_Q[RV_I];
  RC_REVIEW.grade(id,g);
  /* Again: see it once more this session, at the end, not immediately -- immediate re-show is
     recognition, not recall. */
  if(g==='again') RV_Q.push(id); else RV_DONE++;
  RV_I++; RV_SHOW=false;
  rvRender();
  window.scrollTo(0,0);
}

function rvSummary(){
  var st=RC_REVIEW.stats();
  document.getElementById('rvfill').style.width='100%';
  document.getElementById('rvcount').textContent='done';
  document.getElementById('rvbody').innerHTML='<div class="rvdone">'
    +'<div class="rvd-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" '
    +'stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></div>'
    +'<h2>Review complete</h2>'
    +'<p>'+RV_DONE+' condition'+(RV_DONE===1?'':'s')+' scheduled forward.'
    +(st.due?' '+st.due+' still due.':' Nothing else due today.')+'</p>'
    +'<div class="rvd-stats"><div><b>'+st.enrolled+'</b><span>in review</span></div>'
    +'<div><b>'+st.learning+'</b><span>learning</span></div>'
    +'<div><b>'+st.known+'</b><span>consolidating</span></div></div>'
    +'<button class="rv-open" onclick="root(\\'library\\')">Back to the library</button></div>';
}

/* ---------- DETAIL ---------- */`,
  'review session');

/* ------------------------------------------------------------ 4. wire the view in */

s = replaceOnce(s,
  ` else if(r.v==='gallery'){s.innerHTML=galHTML(r.id);}`,
  ` else if(r.v==='gallery'){s.innerHTML=galHTML(r.id);}
 else if(r.v==='review'){s.innerHTML=reviewHTML();reviewInit();}`,
  'paint dispatches review');

s = replaceOnce(s,
  `const ROOTS=['library','or','ask','rx',"res",'about'],IMMERSIVE=['quiz','gallery'];`,
  `const ROOTS=['library','or','ask','rx',"res",'about'],IMMERSIVE=['quiz','gallery','review'];`,
  'review is immersive (no bottom bar)');

s = replaceOnce(s,
  ` const activeRoot=(r.v==='detail')?'library':(r.v==='rxdrug')?'rx':`,
  ` const activeRoot=(r.v==='detail'||r.v==='review')?'library':(r.v==='rxdrug')?'rx':`,
  'review counts as Library in the nav');

/* --------------------------------------------------------------- 5. styling */

s = replaceOnce(s, '.pdfbtn{',
  `/* ---- spaced review ---- */
.revcard{margin:10px 16px 2px;display:flex;align-items:center;gap:12px;cursor:pointer;
  padding:13px 14px;border-radius:16px;
  background:linear-gradient(135deg,color-mix(in srgb,var(--accent) 16%,transparent),
    color-mix(in srgb,var(--accent) 6%,transparent));
  border:1px solid color-mix(in srgb,var(--accent) 34%,transparent);
  transition:transform .14s,border-color .14s;}
.revcard:active{transform:scale(.99);}
.revcard:hover{border-color:color-mix(in srgb,var(--accent) 52%,transparent);}
.rv-ico{flex:none;width:34px;height:34px;border-radius:11px;display:flex;align-items:center;
  justify-content:center;color:var(--accent);
  background:color-mix(in srgb,var(--accent) 18%,transparent);}
.rv-ico svg{width:18px;height:18px;}
.rv-txt{flex:1;min-width:0;}
.rv-t{font-size:13.5px;font-weight:800;color:var(--white);}
.rv-s{font-size:11px;font-weight:600;color:var(--muted-2);margin-top:2px;}
.rv-go{flex:none;font-size:11.5px;font-weight:800;letter-spacing:.3px;color:var(--accent);
  padding:6px 12px;border-radius:9px;
  background:color-mix(in srgb,var(--accent) 15%,transparent);
  border:1px solid color-mix(in srgb,var(--accent) 34%,transparent);}

.rvwrap{padding:0 0 40px;}
.rvhead{display:flex;align-items:center;gap:12px;padding:14px 16px 6px;}
.rvprog{flex:1;display:flex;align-items:center;gap:10px;}
.rvbar{flex:1;height:5px;border-radius:3px;background:rgba(255,255,255,.09);overflow:hidden;}
.rvbar span{display:block;height:100%;width:0;border-radius:3px;background:var(--accent);
  transition:width .3s cubic-bezier(.2,.8,.2,1);}
.rvn{flex:none;font-size:11px;font-weight:800;color:var(--muted-2);letter-spacing:.3px;}
.rvcard{margin:8px 16px;padding:20px 18px;border-radius:20px;
  background:linear-gradient(160deg,rgba(20,29,52,.92),rgba(9,13,26,.94));
  border:1px solid var(--line);border-top:2px solid var(--sec);}
.rv-cat{font-size:10px;font-weight:800;letter-spacing:1.1px;text-transform:uppercase;color:var(--sec);}
.rv-name{margin:6px 0 0;font-size:26px;line-height:1.15;font-weight:800;color:var(--white);}
.rv-prompt{margin-top:16px;font-size:14px;line-height:1.5;color:var(--muted);}
.rv-prompt span{display:block;margin-top:8px;font-size:11.5px;font-style:italic;color:var(--muted-2);}
.rv-back{margin-top:14px;}
.rv-tag{font-size:14px;line-height:1.5;color:var(--muted);}
.rv-ph{margin:16px 0 6px;font-size:10px;font-weight:800;letter-spacing:1.1px;color:var(--sec);}
.rv-pearls{margin:0;padding-left:18px;}
.rv-pearls li{font-size:13px;line-height:1.5;color:var(--muted);margin-bottom:7px;}
.rv-open{margin-top:14px;width:100%;padding:11px;border-radius:12px;cursor:pointer;
  font-family:inherit;font-size:12.5px;font-weight:800;color:var(--accent);
  background:color-mix(in srgb,var(--accent) 12%,transparent);
  border:1px solid color-mix(in srgb,var(--accent) 30%,transparent);}
.rv-show{margin:8px 16px 0;width:calc(100% - 32px);padding:15px;border-radius:14px;cursor:pointer;
  font-family:inherit;font-size:14px;font-weight:800;color:#04121f;background:var(--accent);border:0;}
.rv-grade{display:flex;gap:8px;margin:10px 16px 0;}
.rvb{flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;
  font-family:inherit;font-size:13px;font-weight:800;padding:12px 4px;border-radius:13px;
  background:rgba(12,20,38,.6);border:1px solid var(--line-2);color:var(--white);}
.rvb span{font-size:9.5px;font-weight:700;letter-spacing:.3px;color:var(--muted-2);}
.rvb.again{border-color:rgba(255,107,107,.42);color:#ff8f8f;}
.rvb.good{border-color:color-mix(in srgb,var(--accent) 42%,transparent);color:var(--accent);}
.rvb.easy{border-color:rgba(80,227,160,.42);color:#67e8a8;}
.rvb:active{transform:scale(.97);}
.rvdone{margin:8px 16px;padding:28px 20px;border-radius:20px;text-align:center;
  background:linear-gradient(160deg,rgba(20,29,52,.92),rgba(9,13,26,.94));border:1px solid var(--line);}
.rvd-ico{width:52px;height:52px;margin:0 auto 14px;border-radius:50%;display:flex;
  align-items:center;justify-content:center;color:var(--accent);
  background:color-mix(in srgb,var(--accent) 16%,transparent);}
.rvd-ico svg{width:26px;height:26px;}
.rvdone h2{margin:0;font-size:21px;font-weight:800;color:var(--white);}
.rvdone p{margin:8px 0 0;font-size:13px;line-height:1.5;color:var(--muted-2);}
.rvd-stats{display:flex;gap:8px;margin:18px 0 4px;}
.rvd-stats div{flex:1;padding:11px 4px;border-radius:12px;background:rgba(255,255,255,.04);
  border:1px solid var(--line);}
.rvd-stats b{display:block;font-size:19px;font-weight:800;color:var(--accent);}
.rvd-stats span{font-size:9.5px;font-weight:700;letter-spacing:.4px;color:var(--muted-2);
  text-transform:uppercase;}
.pdfbtn{`,
  'review styling');

fs.writeFileSync(INDEX, s);
console.log(`\n${n0} -> ${s.length} chars (+${s.length - n0})`);
