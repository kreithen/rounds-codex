#!/usr/bin/env node
/* add_detail_rail.js <site-root> [--check]
 *
 * The condition page gets a side rail above 1024px. Follow-on to add_large_screen.js (v138).
 *
 * WHY THIS ONE VIEW. Level 1 measured every reading view and the condition page was the only one
 * with headroom left: 62 characters a line at the shipped 468px, 71 at the 520px cap it now gets,
 * and 183 pages of it. Everything else in the app either reflows as a grid or was already at a
 * good measure.
 *
 * WHAT WAS ASKED FOR AND WHAT IS BUILT ARE NOT QUITE THE SAME THING, deliberately. The brief was
 * "two columns of .panel cards". Measured against the real markup that is the wrong shape, and the
 * reason is in the numbers below: a condition page is 16-18 top-level blocks in a fixed clinical
 * sequence -- What It Is, the mode-specific Approach, Diagnosis & Workup, Medications, Clinical
 * Flow, Red Flags, Pearls, Impress Your Teachers -- and splitting a sequence across two columns
 * makes the reader zig-zag. The panels are also wildly uneven (275 to 883 px on the four conditions
 * measured), so equal columns leave ragged holes wherever a short panel sits opposite a long one.
 *
 * So: the narrative stays in ONE column at its measured-correct width, and the width that Level 1
 * freed goes to a rail carrying the things that are not narrative.
 *
 * WHAT IS IN THE RAIL, AND WHY IT IS EXACTLY THOSE FOUR. References, Ask Rounds Codex, Download
 * this module (PDF), and the educational-use disclaimer -- reference material and actions, none of
 * it part of the clinical argument.
 *
 * They were not chosen for being ancillary. They were chosen because they are the four TRAILING
 * blocks of the page and they are CONTIGUOUS in the DOM, which means the rail can be a pure wrapper
 * insertion that reorders nothing. That constraint is doing real work:
 *
 *   - Anything else in the rail (the Image Gallery panel is the obvious candidate -- 543px and the
 *     most visual block on the page) sits at DOM index 3, so railing it means either moving it in
 *     the markup, which changes what 183 pages look like ON A PHONE, or leaving it in place and
 *     using CSS `order`, which makes visual order disagree with DOM order. The app shipped
 *     accessibility fixes in v136 for exactly the audit that flags that. Neither is worth a
 *     bigger rail.
 *   - A rail assembled at runtime by moving nodes was the other option and is rejected for the
 *     same reason plus a resize dependency: the layout would then be JavaScript's to maintain
 *     rather than the stylesheet's.
 *
 * WHY THE RAIL IS STICKY. The narrative column is ~3,400px on a real condition and the rail is
 * ~445px. A static rail would be empty for 87% of the scroll, which reads as a broken layout
 * rather than a deliberate one. Sticky, it stays beside whatever you are reading, and Download and
 * Ask become reachable from anywhere in a long module instead of only at the bottom.
 *
 * WHY WRAPPERS AT ALL, since Level 1 managed without touching the markup. Grid rows are shared
 * between columns. With the four blocks placed individually in column 2, each one takes a row with
 * a narrative panel and the row is as tall as the taller of the two -- so the rail items end up
 * strewn 349, 413, 413 and 830px apart down the page. Two independent vertical flows need two
 * boxes. There is no CSS-only way around that: no masonry, and `display:contents` only removes a
 * box, it cannot create one.
 *
 * SAFE BELOW 1024px. The grid lives in a `min-width:1024px` block, and on a narrower screen the two
 * wrappers are plain unstyled divs around contiguous children. That should be invisible -- the
 * blocks carry their own `margin: ... 16px ...` and adjacent margins collapse through a wrapper
 * with no padding or border -- but "should be" is not a measurement, which is why
 * verify_detail_rail.js diffs the rendered geometry of the condition page against the unpatched
 * tree at 320/375/390/430/720/820 rather than asserting the reasoning.
 *
 * THE NUMBERS. The narrative track is pinned at 520px -- the width Level 1 measured as this page's
 * ceiling -- so the prose is 488px of text, byte-identical to what it is without the rail. The rail
 * takes the remainder, 360px at an 880px container, leaving it 328px of content after its own 16px
 * margins. Pinning the rail instead and letting the narrative have the rest was the first cut and
 * it silently widened the prose to 532px; the slack belongs to the rail. `.pad` supplies no horizontal padding of its own -- see
 * CLAUDE.md, it is `padding-bottom:112px` and nothing else -- so the column gap is those margins
 * rather than a grid `column-gap`, which keeps the existing rhythm instead of inventing a second
 * spacing system.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2];
const CHECK = process.argv.includes('--check');
if (!ROOT) { console.error('usage: add_detail_rail.js <site-root> [--check]'); process.exit(2); }

const FILE = path.join(ROOT, 'index.html');
if (!fs.existsSync(FILE)) { console.error('missing: ' + FILE); process.exit(2); }
let s = fs.readFileSync(FILE, 'utf8');
/* Kept for the pure-insertion post-condition at the bottom. */
const ORIGINAL = s;

const MARK = 'rc-detail-rail';
if (s.includes(MARK)) {
  console.error('FAILED: this tree already carries the detail rail -- nothing to do.');
  process.exit(CHECK ? 0 : 2);
}

/* This builds on Level 1: the rail overrides `.app[data-view="detail"]{max-width:520px}`, and that
   rule is what tells us paint() is publishing the attribute at all. Without it the rail would be
   styling a selector that never matches -- silently, because a media query that does not match
   raises nothing. */
if (!s.includes('rc-large-screen')) {
  console.error('FAILED: scripts/add_large_screen.js has not been applied to this tree.');
  console.error('        The rail overrides its .app[data-view="detail"] cap and needs paint() to');
  console.error('        be publishing that attribute. Run it first.');
  process.exit(1);
}

/* ---------------------------------------------------------------- anchors
 * The three splice points, each asserted at exactly one occurrence. These are inside a template
 * literal in detailHTML(), so a mismatch means the markup moved and the wrappers would land in the
 * wrong place -- which would not throw, it would just render a broken page. */
const OPEN_MAIN = '</div>\n  <div class="dhero">';
const OPEN_RAIL = '\n  ${d.refs?`<div class="panel refs">';
/* NOT just "policies.</div></div>`;" -- orHTML() ends with those exact bytes too, with its own
   disclaimer ("follow AORN standards, WHO Surgical Safety, and your facility's policies"). The
   loose anchor matched twice and the assertion refused to write, which is the assertion earning
   its place: a first-match replace would have closed a wrapper in the wrong function. */
const CLOSE_RAIL = "guidelines and your facility's policies.</div></div>`;";

/* rxInjectCond() runs after detailHTML() and inserts the Rx Guide panel relative to .pad.
   It is the ONLY code in the file that assumes .pad's direct children -- grepped, not assumed:
   one other insertBefore exists and it is the NCLEX module acting on its own mount. */
const RX_FROM = "  var refs=pad.querySelector('.refs')||pad.querySelector('.discl');\n  if(refs)pad.insertBefore(panel,refs);else pad.appendChild(panel);";
const RX_TO   = "  /* The Rx Guide is narrative -- the drugs for this condition -- so with a rail present it\n     belongs at the end of .d-main, which is exactly where it renders without one: the last\n     block before References. Anchoring it to .pad broke the moment .refs stopped being .pad's\n     direct child -- insertBefore throws NotFoundError, the catch below swallows it, and the\n     panel silently vanished from every condition page that has one. */\n  var main=pad.querySelector('.d-main')||pad;\n  var refs=pad.querySelector('.refs')||pad.querySelector('.discl');\n  if(refs&&refs.parentNode===main)main.insertBefore(panel,refs);else main.appendChild(panel);";

const ANCHORS = [
  ['.dtop closes, .dhero opens', OPEN_MAIN],
  ['the References panel starts the trailing run', OPEN_RAIL],
  ['the disclaimer closes .pad', CLOSE_RAIL],
  ['rxInjectCond inserts against .pad', RX_FROM],
];

let bad = 0;
for (const [what, needle] of ANCHORS) {
  const n = s.split(needle).length - 1;
  if (n !== 1) { console.error(`FAIL: ${what} -- found ${n} occurrences, expected 1`); bad++; }
}

/* The rail's four blocks, asserted present and asserted CONTIGUOUS-AND-TRAILING by the anchors
   above: OPEN_RAIL is the start of the run and CLOSE_RAIL is the end of the function's template,
   so anything that appeared between them would be swept into the rail. Named here so that if a
   new block is ever added at the end of a condition page, whoever adds it sees that it lands in
   the rail and has to decide whether that is right. */
for (const [what, needle] of [
  ['References panel',  'class="panel refs"'],
  ['Ask Rounds Codex',  'class="modask"'],
  ['Download PDF',      'class="dlpdf"'],
  ['the disclaimer',    'class="discl">Educational use only'],
]) {
  const n = s.split(needle).length - 1;
  if (n < 1) { console.error(`FAIL: ${what} not found -- the rail's contents moved`); bad++; }
}

const HEAD_ANCHOR = '</style></head>\n<body>';
{
  const n = s.split(HEAD_ANCHOR).length - 1;
  if (n !== 1) { console.error(`FAIL: head-close anchor -- found ${n}, expected 1`); bad++; }
}

if (bad) { console.error(`\n${bad} anchor(s) failed -- not writing`); process.exit(1); }
if (CHECK) { console.log('add_detail_rail.js --check: all anchors present, patch not applied'); process.exit(0); }

const BLOCK = `<style id="${MARK}">
/* The condition page's side rail, above 1024px only. scripts/add_detail_rail.js says why it is a
   rail and not two equal columns, and why it holds exactly the four blocks it holds.

   Below 1024px not one rule here matches: .d-main and .d-rail are plain divs and the page is the
   single column it has always been. */
@media (min-width:1024px){
  /* Overrides the 520px reading cap add_large_screen.js gives this view. Equal specificity (0,2,0),
     so this wins on source order -- this block is appended after rc-large-screen. If the two are
     ever reordered, the page silently goes back to one 520px column. */
  .app[data-view="detail"]{max-width:880px;}

  .app[data-view="detail"] .pad{
    display:grid;
    /* The narrative track is PINNED at 520px -- the width Level 1 measured as this page's ceiling --
       and the rail takes whatever is left (360px at an 880px container). Not the other way round.
       The first cut gave the rail a fixed 316 and let the narrative have the rest, which came to
       564 and quietly widened the prose from 488px of text to 532 (71 to 77 characters a line).
       That is small, but widening the reading column is the exact thing choosing a rail over two
       equal columns was meant to avoid, so the slack belongs to the rail.
       No column-gap: every block already carries a 16px horizontal margin, so the columns are
       separated by 32px of existing rhythm rather than by a second spacing system. */
    grid-template-columns:minmax(0,520px) minmax(0,1fr);
    align-items:start;
  }
  /* The sticky header spans both columns, as it did the full width before. */
  .app[data-view="detail"] .pad > .dtop{grid-column:1 / -1;}
  /* min-width:0 so a wide child -- the medication table, a long code string -- cannot push the
     narrative column past its track. A grid item's default min-width is auto, not 0, which is the
     usual cause of a "1fr" column refusing to stay in its lane. */
  .app[data-view="detail"] .pad > .d-main{grid-column:1;min-width:0;}
  /* grid-row:2 places the rail beside the narrative rather than after it -- it is the last child
     in the DOM, which is what keeps reading order and visual order in agreement, so without an
     explicit row it would auto-place below everything.
     The row is as tall as .d-main (~3,400px on a real condition), and align-self:start keeps the
     rail its own height inside it, which is the arrangement position:sticky needs. */
  .app[data-view="detail"] .pad > .d-rail{
    grid-column:2;grid-row:2;
    align-self:start;
    position:sticky;
    /* Clears .dtop, which is itself sticky at top:0 and 74px tall. The env() term is for the
       native builds: add_safe_area.js grows .dtop upward by the inset, so the rail has to come
       down by the same amount. env() is 0 anywhere without an inset, so this is inert on the web. */
    top:calc(86px + env(safe-area-inset-top));
    /* A rail taller than the viewport must scroll on its own or its lower half is unreachable. */
    max-height:calc(100vh - 110px - env(safe-area-inset-top));
    overflow-y:auto;
    scrollbar-width:none;
  }
  .app[data-view="detail"] .pad > .d-rail::-webkit-scrollbar{display:none;}
  /* The disclaimer is centred full-width copy at the bottom of a phone page; in a 284px rail its
     side padding eats half the line. */
  .app[data-view="detail"] .pad > .d-rail > .discl{padding-left:16px;padding-right:16px;}
}
</style>`;

const before = s.length;

/* ---- edit 1: open .d-main after the sticky header ------------------------------------------- */
s = s.replace(OPEN_MAIN, '</div>\n  <div class="d-main"><div class="dhero">');

/* ---- edit 2: close .d-main and open .d-rail at the References panel -------------------------- */
s = s.replace(OPEN_RAIL, '</div>\n  <div class="d-rail">\n  ${d.refs?`<div class="panel refs">');

/* ---- edit 3: close .d-rail before .pad closes ------------------------------------------------ */
/* Derived FROM the anchor rather than written out again. The first version of this was a separate
   literal, and when the anchor had to be lengthened (orHTML ends with the same bytes) the
   replacement was not lengthened with it -- so replace(longAnchor, shortReplacement) silently
   deleted "guidelines and your facility's " from the disclaimer on all 183 condition pages. It
   rendered as a shorter sentence that still read like a sentence. Two literals that must agree is
   the bug; one derived from the other cannot drift. */
s = s.replace(CLOSE_RAIL, CLOSE_RAIL.replace('</div></div>`;', '</div></div></div>`;'));

/* ---- edit 4: teach rxInjectCond about the wrapper ----------------------------------------- */
s = s.replace(RX_FROM, RX_TO);

/* ---- edit 5: the stylesheet ------------------------------------------------------------------
 * No newline before </head>: add_safe_area.js anchors on the literal '</style></head>\\n<body>'
 * later in the native chain, and a newline there takes that anchor to zero and stops the payload
 * build. add_large_screen.js learned this the same way. Asserted below rather than trusted. */
s = s.replace(HEAD_ANCHOR, '</style>\n' + BLOCK + '</head>\n<body>');

{
  const n = s.split(HEAD_ANCHOR).length - 1;
  if (n !== 1) {
    console.error(`FAIL: after the edit, add_safe_area.js's head anchor occurs ${n} times, not 1.`);
    process.exit(1);
  }
}

/* The wrappers must balance. detailHTML builds one template literal, so an unclosed div here
   renders a page that is wrong rather than a page that errors -- cheap to assert, invisible
   otherwise. */
{
  const fn = s.slice(s.indexOf('function detailHTML'), s.indexOf('/* ---------- QUIZ ---------- */'));
  for (const [what, want] of [['d-main', 1], ['d-rail', 1]]) {
    const n = fn.split(`class="${what}"`).length - 1;
    if (n !== want) { console.error(`FAIL: detailHTML has ${n} .${what} wrappers, expected ${want}`); process.exit(1); }
  }
}

/* POST-CONDITION: this must be a PURE INSERTION. Undo the four edits on the RESULT and it has to
   give back the input byte for byte -- no deletion, no reordering, nothing rewritten.

   This is here because the disclaimer bug got past every anchor assertion. All three anchors
   matched at exactly one occurrence, the wrappers balanced, the page rendered, and the only symptom
   was a clinical disclaimer quietly four words shorter. An assertion on what a patch FINDS cannot
   catch a patch that mangles what it finds; an assertion on the DIFF can.

   Inverted by replacing each edit's OUTPUT with its INPUT, not by deleting substrings: the first
   version of this check deleted '</div>' by indexOf and removed the first one in the 750 kB file,
   which made it fail on a correct run. Every needle below is long enough to be unique. */
{
  let t = s;
  const UNDO = [
    ['.d-main wrapper',
     '</div>\n  <div class="d-main"><div class="dhero">', OPEN_MAIN],
    ['.d-rail wrapper',
     '</div>\n  <div class="d-rail">\n  ${d.refs?`<div class="panel refs">', OPEN_RAIL],
    ['.d-rail close',
     CLOSE_RAIL.replace('</div></div>`;', '</div></div></div>`;'), CLOSE_RAIL],
    ['the rxInjectCond fix', RX_TO, RX_FROM],
    ['the stylesheet',
     '\n' + BLOCK, ''],
  ];
  for (const [what, out, back] of UNDO) {
    const n = t.split(out).length - 1;
    if (n !== 1) { console.error(`FAIL: post-check found ${n} copies of the ${what} it inserted, expected 1`); process.exit(1); }
    t = t.replace(out, back);
  }
  if (t !== ORIGINAL) {
    console.error('FAIL: this edit is not a pure insertion -- it changed or removed shipped bytes.');
    let i = 0; while (i < Math.min(t.length, ORIGINAL.length) && t[i] === ORIGINAL[i]) i++;
    console.error(`      first divergence at byte ${i}:`);
    console.error(`        shipped: ${JSON.stringify(ORIGINAL.slice(Math.max(0, i - 70), i + 70))}`);
    console.error(`        result : ${JSON.stringify(t.slice(Math.max(0, i - 70), i + 70))}`);
    process.exit(1);
  }
  console.log(`  ok    exactly the five intended edits (+${s.length - ORIGINAL.length} bytes, nothing else touched)`);
}

fs.writeFileSync(FILE, s);

console.log('--- add_detail_rail.js ---');
for (const [what] of ANCHORS) console.log(`  ok    ${what}`);
console.log('  edit  <div class="d-main"> wraps the narrative');
console.log('  edit  <div class="d-rail"> wraps References / Ask / Download PDF / disclaimer');
console.log('  edit  rxInjectCond() inserts into .d-main');
console.log(`  edit  <style id="${MARK}"> appended before </head>`);
console.log(`index.html: ${before} -> ${s.length} bytes (+${s.length - before})`);
console.log('');
console.log('  next: RC_PW=<dir> node scripts/verify_detail_rail.js <site-root> --before <clean-root>');
