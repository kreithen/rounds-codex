#!/usr/bin/env node
/* add_large_screen_l2.js <site-root> [--check]
 *
 * Level 2 of large-screen-plan.md: the nav becomes a SIDEBAR and the list stays on screen beside
 * the thing you opened from it. Level 1 (add_large_screen.js, v138) widened the container and
 * reflowed the grids; the condition rail (add_detail_rail.js, v139) used the width on one page.
 * Neither changed how the app is NAVIGATED, and that is what this does.
 *
 * ONE BREAKPOINT, 1180px, AND IT IS MEASURED RATHER THAN CHOSEN. The sidebar is 168px in a 16px
 * gutter, so the content has to start at x >= 200. `.app` is centred by `body{justify-content:
 * center}` inside a `padding-left:200px`, which puts it at (W + 200)/2 - 440; that clears 200 from
 * W = 1080, and clears a 16px right gutter too from W = 1096. 1180 is the first round number above
 * that with room to spare, and it lands where it should: iPad 11" landscape is 1194 and 13"
 * landscape is 1366, both in; iPad 13" PORTRAIT is 1024, and stays out, correctly -- at 1024 the
 * container is already 880 and there are 72px a side, which is not a sidebar, it is a collision.
 *
 * WHAT THE TWO PANES ARE. Left is always the LIST you came from, right is the item. The pairs are
 * a table, not a guess, and they are the same parent relationships `paint()`'s `activeRoot` already
 * computes for the nav highlight -- library/detail, rx/rxdrug, calc/calcone, res/resspec and
 * resspec/resdetail. A list view with nothing selected shows a placeholder in the right pane
 * rather than going full width, because a list that changes width when you deselect is worse than
 * one that does not.
 *
 * THE ROUTER IS NOT REWRITTEN, and that was the one design decision worth taking care over.
 * large-screen-plan.md says the back-stack semantics "have to be decided rather than inherited",
 * and the decision is: the stack is untouched. `paint()` renders the stack top into the RIGHT pane
 * and its parent into the LEFT one. So `back()` still pops, `rcSyncURL()` still reflects the top,
 * a shared /c/<id> link still seeds the same history, and every existing guard still describes the
 * app. Two panes is a rendering fact, not a routing one.
 *
 * The chain of `else if(r.v===...)` branches is moved into `rcRenderView(s, v, id)` BYTE FOR BYTE
 * -- it already read `r.v` and `r.id`, so wrapping it in a function that builds `r` from arguments
 * changes no branch. That is deliberate: twenty-two views, and the diff should be about which
 * container they render into, not about their contents.
 *
 * THREE THINGS THAT FOLLOW AND ARE NOT OBVIOUS:
 *
 *   * SELECTING A SIBLING REPLACES, IT DOES NOT PUSH. With the list on screen you click through
 *     ten conditions in a row; `go()` pushing each one makes Back walk you out through all ten.
 *     `go()` now replaces the top when the target shares a pane-parent with it, which is exactly
 *     what `swipeTo()` has always done for the swipe gesture and for the same reason. Back from a
 *     selection returns to the list-with-placeholder, once.
 *   * THE CONDITION SWIPE IS OFF IN TWO-PANE. That handler is bound to `#screen`, which in
 *     two-pane holds the LIST -- so without a guard, dragging the library sideways would silently
 *     change which condition is open in the other pane. Both its entry points get the guard, not
 *     just `start()`: `end()` re-reads the stack and would otherwise still fire on a gesture that
 *     began before a resize.
 *   * THE RAIL IS OFF IN TWO-PANE, and this is a trade rather than an oversight. The rail needs
 *     520 + 360 and the list needs 340, which with the sidebar and body padding is 1208px of
 *     content -- a desktop, not an iPad. A persistent list beats a sticky rail on the screens this
 *     breakpoint is for, and the rail's four blocks fall back into the narrative flow, which is
 *     precisely where they sit on a phone. If both are ever wanted, it is one additive rule at a
 *     1440 tier, not a rewrite.
 *
 * The left pane scrolls independently -- `position:sticky` with its own `overflow-y`, the same
 * mechanism `.d-rail` already uses in this file. Not a real scroll container per pane: that would
 * mean `window.scrollY` no longer describes the page, and `rcRestoreScroll()`, `go()`'s departure
 * offset and every scroll assertion in the suite are written against it.
 *
 * Guarded by scripts/verify_large_screen_l2.js, which measures the geometry at six widths and
 * fails on the pre-patch tree.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const RC = require('./lib/pure_insertion').tracker(__filename);

const ROOT = process.argv[2];
const CHECK = process.argv.includes('--check');
if (!ROOT) { console.error('usage: add_large_screen_l2.js <site-root> [--check]'); process.exit(2); }

const FILE = path.join(ROOT, 'index.html');
if (!fs.existsSync(FILE)) { console.error('missing: ' + FILE); process.exit(2); }
let s = fs.readFileSync(FILE, 'utf8');
const RC_BEFORE = s;
const before = s.length;

const MARK = 'rc-large-screen-l2';
if (s.includes(MARK)) {
  console.error('FAILED: this tree already carries the Level 2 block -- nothing to do.');
  process.exit(CHECK ? 0 : 2);
}

/* Level 1 and the rail must already be here: this overrides rules both of them wrote, and
   appending a block that overrides nothing is the failure mode worth catching loudly. */
for (const [what, needle] of [
  ['Level 1 (rc-large-screen)', '<style id="rc-large-screen">'],
  ['the condition rail (rc-detail-rail)', '<style id="rc-detail-rail">'],
]) {
  if (!s.includes(needle)) { console.error(`FAILED: ${what} is not in this tree -- run it first`); process.exit(1); }
}

const done = [];
function sub(what, find, repl) {
  const n = s.split(find).length - 1;
  if (n !== 1) { console.error(`FAILED ${what}: found ${n} occurrences, expected 1`); process.exit(1); }
  RC.step(what, find, repl);
  s = s.replace(find, repl);
  done.push(what);
}

/* ---- 1. the second pane ---------------------------------------------------------------------
 * A sibling of #screen inside .app, empty and hidden until two-pane mode wants it. Hidden rather
 * than absent so paint() never has to create it, and so a tree where the JS half failed to apply
 * still renders exactly as it does today.
 *
 * AFTER #screen, not before, and the first cut had it before. Reading order then ran detail-then-
 * list while the grid drew list-then-detail -- and worse, it put the list on ROW 2. A grid item
 * with an explicit grid-column and no grid-row is still auto-PLACED: #screen2 took row 1 column 2,
 * which moved the cursor past row 1, so #screen's column:1 landed on row 2 and the list rendered
 * 5,224px below the fold. add_detail_rail.js records the same trap from the other direction and
 * that is what named it. Both panes now carry an explicit grid-row as well, so the layout does not
 * depend on DOM order at all -- but the DOM order is the right one regardless. */
sub('#screen2, the detail pane',
  'Loading\u2026</div></div>\n<nav class="nav" id="nav">',
  'Loading\u2026</div></div><div id="screen2" hidden></div>\n<nav class="nav" id="nav">');

/* ---- 2. the render chain becomes a function ---------------------------------------------------
 * Byte for byte: the branches already read r.v and r.id, so r is rebuilt from the arguments. */
sub('the view chain becomes rcRenderView(s,v,id)',
  "function paint(y){\n const r=stack[stack.length-1],s=document.getElementById('screen');closeViewer();\n if(r.v==='library')",
  "/* The twenty-two view branches, unchanged, in a function that takes its container. Two-pane\n"
  + "   renders two of them per paint; every other caller renders one, into #screen, as before. */\n"
  + "function rcRenderView(s,v,id){\n const r={v:v,id:id};\n if(r.v==='library')");

/* ---- 3. paint() decides how many panes -------------------------------------------------------- */
const PANE_JS = `}

/* ---- two-pane -------------------------------------------------------------------------------
 * The pairs, as a table. These are the same parent relationships activeRoot already computes for
 * the nav highlight; keeping them in one place is what stops the two drifting.
 * resspec is in BOTH, as res's child and resdetail's parent -- PARENT is consulted first, so an
 * open specialty sits in the right pane beside the picker, which is the way you arrived at it. */
const RC_PANE_PARENT={detail:'library',rxdrug:'rx',calcone:'calc',resspec:'res',resdetail:'resspec'};
const RC_PANE_CHILD={library:'detail',rx:'rxdrug',calc:'calcone',res:'resspec',resspec:'resdetail'};
const RC_WIDE=window.matchMedia?window.matchMedia('(min-width:1180px)'):{matches:false,addEventListener:function(){}};
function rcTwoPane(v){return !!(RC_WIDE.matches&&(RC_PANE_PARENT[v]||RC_PANE_CHILD[v]));}
/* Quiet, and it names the list rather than the app: the reader is looking at a list and needs to
   know the empty half belongs to it. */
const RC_PANE_HINT={library:'a condition',rx:'a drug',calc:'a calculator',res:'a specialty',resspec:'a topic'};
function rcPaneEmptyHTML(v){
  return '<div class="pane-empty"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" '
    +'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
    +'<rect x="3.5" y="4.5" width="17" height="15" rx="2.5"/><path d="M8 9.5h8M8 13h5"/></svg>'
    +'<p>Choose '+(RC_PANE_HINT[v]||'an item')+' to read it here.</p></div>';
}
/* A resize across the breakpoint has to re-lay the panes; paint() is the only thing that knows
   how. The current offset is passed through so the page does not jump to the top when a window is
   dragged wider. */
if(RC_WIDE.addEventListener) RC_WIDE.addEventListener('change',function(){paint(window.scrollY||0);});

function paint(y){
 const r=stack[stack.length-1];closeViewer();
 const s=document.getElementById('screen'),s2=document.getElementById('screen2');
 const two=rcTwoPane(r.v);
 if(two&&s2){
   const par=RC_PANE_PARENT[r.v];
   rcRenderView(s,par||r.v,null);
   s2.innerHTML='';
   if(par){rcRenderView(s2,r.v,r.id);}else{s2.innerHTML=rcPaneEmptyHTML(r.v);}
   s2.hidden=false;
 }else{
   rcRenderView(s,r.v,r.id);
   if(s2){s2.hidden=true;s2.innerHTML='';}
 }
 { const _a=document.querySelector('.app'); if(_a) _a.dataset.pane=two?'two':(RC_WIDE.matches?'side':'one'); }
`;
sub('paint() renders one pane or two',
  "else if(r.v==='galleries'){s.innerHTML=galleriesHTML();gxRender();}\n /* Large screens:",
  "else if(r.v==='galleries'){s.innerHTML=galleriesHTML();gxRender();}\n" + PANE_JS + " /* Large screens:");

/* ---- 4. go() replaces a sibling instead of stacking it ---------------------------------------- */
sub('go() replaces the selection in two-pane',
  'function go(v,id){stack[stack.length-1].y=window.scrollY||0;stack.push({v,id});paint();}',
  "/* With the list on screen, picking another item from it REPLACES the selection. Pushing would\n"
  + "   make Back walk out through every condition you clicked, which is not what a list beside a\n"
  + "   reading pane means. Same move swipeTo() has always made for the swipe gesture. */\n"
  + "function go(v,id){stack[stack.length-1].y=window.scrollY||0;\n"
  + " var _t=stack[stack.length-1];\n"
  + " if(typeof rcTwoPane==='function'&&rcTwoPane(v)&&_t&&RC_PANE_PARENT[v]&&RC_PANE_PARENT[_t.v]===RC_PANE_PARENT[v]){\n"
  + "   stack[stack.length-1]={v:v,id:id};paint();return;}\n"
  + " stack.push({v,id});paint();}");

/* ---- 5. the condition swipe is off in two-pane ------------------------------------------------
 * #screen holds the LIST there, so an unguarded drag on the library would change what is open in
 * the other pane. Both ends are guarded: end() re-reads the stack, so a gesture that began before
 * a resize would otherwise still fire. */
sub('swipe start ignores two-pane',
  "function start(x,y,target){const r=stack[stack.length-1];if(!r||r.v!=='detail'){on=false;return;}",
  "function start(x,y,target){const r=stack[stack.length-1];if(!r||r.v!=='detail'||rcTwoPane(r.v)){on=false;return;}");
sub('swipe end ignores two-pane',
  "function end(x,y){if(!on)return;on=false;if(flow)return;const r=stack[stack.length-1];if(!r||r.v!=='detail')return;",
  "function end(x,y){if(!on)return;on=false;if(flow)return;const r=stack[stack.length-1];if(!r||r.v!=='detail'||rcTwoPane(r.v))return;");

/* ---- 6. the stylesheet ------------------------------------------------------------------------
 * Appended last so it wins on source order where it shares specificity with Level 1 and the rail.
 * Where it has to beat a block that is appended LATER by the native chain -- add_safe_area.js
 * rewrites `.pad`'s padding-bottom -- it uses `body .pad`, which wins on specificity instead and
 * so does not depend on order at all. */
const BLOCK = `<style id="${MARK}">
/* Level 2. Everything is min-width:1180px; below that not one rule here matches and the layout is
   exactly what v138/v139 ship. scripts/add_large_screen_l2.js carries the reasoning. */

/* A. The nav becomes a left sidebar.
      168px rail in a 16px gutter, so the content starts at 200 -- which is what body's padding
      reserves. A bottom bar on a large screen is the wrong pattern: the thumb is nowhere near it. */
@media (min-width:1180px){
  body{padding-left:200px;}
  .nav{
    left:16px;right:auto;top:50%;bottom:auto;
    transform:translateY(-50%);
    width:168px;max-width:168px;
    flex-direction:column;gap:2px;padding:10px;border-radius:20px;
  }
  /* Icon beside the label rather than above it. This also retires the constraint Level 1 worked
     around: in a row, flex:1 with min-width:auto meant the longest single word in any label set a
     floor on EVERY tab's width. In a column each item is its own width and "Clinical Calculators"
     wraps to two lines without touching its neighbours. */
  .nav button{flex:0 0 auto;flex-direction:row;justify-content:flex-start;align-items:center;
    gap:10px;padding:10px 11px;text-align:left;font-size:12.5px;line-height:1.25;}
  .nav button svg{flex:0 0 auto;}

  /* The 112px .pad reserved for a bar at the bottom is dead space once the bar is at the side.
     \`body .pad\` rather than \`.pad\`: add_safe_area.js appends a \`.pad\` rule LATER in the native
     chain, and specificity beats source order where order is not ours to control. */
  body .pad{padding-bottom:40px;}
  body .res-wrap{padding-bottom:40px;}
}

/* B. Two panes: the list you came from, and the item.
      340 + 20 + 520 = 880, the container Level 1 already established at 1024. The right pane is
      520 because that is the reading measure Level 1 measured, so the prose column is the same
      width it is in single-view. */
@media (min-width:1180px){
  .app[data-pane="two"]{
    max-width:880px;
    display:grid;
    grid-template-columns:340px minmax(0,520px);
    column-gap:20px;
    align-items:start;
  }
  .app[data-pane="two"] > #screen{
    grid-column:1;grid-row:1;min-width:0;
    /* Sticky with its own overflow, the same mechanism .d-rail already uses here. NOT a real
       per-pane scroll container: that would mean window.scrollY no longer describes the page, and
       rcRestoreScroll(), go()'s departure offset and every scroll assertion in the suite are
       written against it. */
    /* top:0, not a small offset: a sticky element whose natural position is ABOVE its top value
       is pushed down to it, so top:8px put the list 8px below the pane beside it at scroll 0 --
       two columns of the same grid row that do not line up. */
    position:sticky;top:0;
    max-height:100vh;
    overflow-y:auto;overscroll-behavior:contain;
  }
  .app[data-pane="two"] > #screen2{grid-column:2;grid-row:1;min-width:0;}

  /* The rail folds back into the narrative. Both this and the rail's own rule are (0,2,0); this
     block is appended after rc-detail-rail, so it wins. See the docstring for why the list wins
     the width: the two together need 1208px of content, which is a desktop and not an iPad. */
  .app[data-pane="two"] .pad{display:block;}
  /* .pad > .d-rail, matching the rail's own selector element for element. rc-detail-rail writes
     .app[data-view="detail"] .pad > .d-rail{position:sticky} -- (0,2,0) plus two elements -- so a
     rule with one fewer element loses on specificity however late it is appended, and the rail
     stays sticky inside a pane that is no longer a grid. It did, until this was measured. */
  .app[data-pane="two"] .pad > .d-rail{position:static;max-height:none;overflow:visible;}
  .app[data-pane="two"] .pad > .d-main,
  .app[data-pane="two"] .pad > .dtop{grid-column:auto;grid-row:auto;}

  /* One toggle, not two. detailHTML's .dtop carries a mode toggle and so does libHTML's .topbar,
     and in two-pane both are on screen at once. The list is the persistent chrome, so its copy is
     the one that stays. */
  .app[data-pane="two"] > #screen2 .dtop .toggle{display:none;}

  .pane-empty{
    display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;
    min-height:min(60vh,520px);padding:24px;text-align:center;
    color:var(--muted-2);
  }
  .pane-empty svg{width:42px;height:42px;opacity:.5;}
  .pane-empty p{margin:0;font-size:14px;opacity:.8;}
}
</style>`;   /* no trailing newline: it would land between </style> and </head> */
/* Into the HEAD, on Level 1's anchor and with Level 1's discipline: NO newline between the closing
   </style> and </head>. add_safe_area.js, later in the native chain, matches the literal
   '</style></head>\n<body>' -- inserting with a newline there takes that anchor to zero occurrences
   and stops the payload build with "expected exactly 1 head-close anchor, found 0".
   The first cut anchored on `<div class="bg">` instead, which is in the BODY: legal HTML, later in
   source so it still won every cascade it needed to, and wrong. A stylesheet belongs in the head,
   and a rule that wins only because of where it accidentally landed is a rule waiting to lose. */
sub('the Level 2 stylesheet', '</style></head>\n<body>', '</style>\n' + BLOCK + '</head>\n<body>');

/* ---- post-conditions -------------------------------------------------------------------------- */
{
  const checks = [
    ['#screen2 follows #screen', 1, '</div><div id="screen2" hidden></div>'],
    ['both panes are pinned to row 1', 2, 'grid-row:1;'],
    /* add_safe_area.js anchors on this exact literal later in the native chain. Level 1 records
       the same requirement; breaking it stops the payload build, not this script. */
    ['the head-close anchor survives', 1, '</style></head>\n<body>'],
    ['rcRenderView exists once', 1, 'function rcRenderView(s,v,id){'],
    ['paint() exists exactly once', 1, 'function paint(y){'],
    ['the pane tables exist', 1, 'const RC_PANE_PARENT='],
    /* One breakpoint, stated four times: the matchMedia JS uses it, the two CSS blocks use it,
       and the block's own header comment names it. If those ever disagree the layout and the
       renderer switch at different widths, which shows up as a one-pane grid or a two-pane app
       with no second pane -- so they are counted together rather than separately. */
    ['the breakpoint is 1180 everywhere', 4, '1180'],
    ['the swipe guard is on both ends', 2, "||rcTwoPane(r.v)"],
    ['paint() asks for two panes once', 1, 'const two=rcTwoPane(r.v);'],
  ];
  let bad = 0;
  for (const [what, want, needle] of checks) {
    const n = s.split(needle).length - 1;
    const ok = n === want;
    if (!ok) bad++;
    console.log(`  ${ok ? 'ok  ' : 'FAIL'} ${what}${ok ? '' : ` -- found ${n}, expected ${want}`}`);
  }
  if (bad) { console.error(`${bad} post-condition(s) failed -- not writing`); process.exit(1); }
}

/* Every inline <script> must still parse: this moved a twenty-two branch chain into a new
   function, and a mismatched brace here is a blank app rather than a visible error. */
{
  const scripts = [...s.matchAll(/<script(?![^>]*\ssrc=)[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]);
  let k = 0;
  for (const code of scripts) {
    if (!code.trim()) continue;
    try { new Function(code); k++; } catch (e) {
      console.error(`FAIL: an inline <script> no longer parses: ${e.message}`); process.exit(1);
    }
  }
  console.log(`  ok   all ${k} inline <script> blocks parse`);
}

RC.assert(RC_BEFORE, s);

console.log('--- add_large_screen_l2.js ---');
done.forEach(d => console.log('  edit  ' + d));
console.log(`index.html: ${before} -> ${s.length} bytes (+${s.length - before})`);
if (CHECK) { console.log('\n--check: nothing written'); process.exit(0); }
fs.writeFileSync(FILE, s);
console.log('written');
console.log('  next: RC_PW=<dir> node scripts/verify_large_screen_l2.js <site-root>');
