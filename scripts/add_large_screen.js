#!/usr/bin/env node
/* add_large_screen.js <site-root> [--check]
 *
 * LEVEL 1 of large-screen-plan.md: let the app breathe above 468 px.
 *
 * WHAT SHIPPED BEFORE THIS. `.app{width:100%;max-width:468px}` and `.nav{max-width:440px}`, and
 * every one of the twenty media queries in index.html is `max-width` -- there was not a single
 * `min-width` rule in the file. The app is designed phone-down from 468 px to 320 px, and above
 * 468 px nothing changed: on an iPad it rendered as a phone-width ribbon down the middle of a
 * large black screen. Measured 2026-09-12 at a 1024 px viewport: every view reported .app = 468.
 *
 * THREE THINGS THIS DOES, AND THE ONE IT REFUSES TO DO
 *
 * 1. Raises the container at two `min-width` breakpoints (720 -> 680, 1024 -> 880).
 * 2. Reflows the grids that are NOT auto-fill, which is most of them.
 * 3. Caps the READING column separately, so the container widens and the measure does not.
 *
 * It does NOT restructure anything -- no two-pane layout, no sidebar nav. That is Level 2 of the
 * plan and it is a router change, not a CSS change.
 *
 * WHY THE PROSE CAP IS THE POINT, NOT AN AFTERTHOUGHT. Raising the cap on its own makes the app
 * WORSE to read. Measured at a 1024 px viewport with only the container widened: the About page
 * ran to 121 characters a line, Terms to 126, the OR disclaimer to 160. Comfortable prose is
 * 65-75. A naive `max-width` bump gives you a wide app you cannot read.
 *
 * WHERE THE 520 px READING CAP COMES FROM, AND THE MEASUREMENT THAT CHANGED THE ANSWER.
 * The first cut of this used 648 px on the reasoning that 648 - 32 padding is ~72 characters at
 * 15 px Inter. That arithmetic was wrong, and the honest finding is more interesting than the fix:
 * **the shipped 468 px column is already at a good measure.** Measured properly -- content width
 * divided by the block's own average character advance, from canvas measureText in the block's
 * computed font, not by counting rendered lines, which is useless on a short block (a 174-character
 * disclaimer dropping from three lines to two reports its measure jumping 58 -> 87 for a 32 px
 * change) -- the worst body prose at 468 px is:
 *
 *     cap  detail  or  about  terms  privacy  calc   | fine print: rxdrug .discl / account .ab-fine
 *     468     62   66     70     75       73    73   |   82 / 81
 *     520     71   75     79     84       81    82   |   92 / 90
 *     560     77   82     85     90       88    89   |  100 / 96
 *     648     92   97     99    104      101   105   |  117 / 112
 *
 * 520 is the largest cap at which no body-prose block passes ~84 characters and the app's primary
 * reading surface, the condition page, stays at 71 -- inside the classic band. So the reading views
 * gain 52 px, which is modest and is the truthful answer: there was never much headroom there. The
 * width goes to the grids, which is where it was always going to pay.
 *
 * The two blocks over 90 are 11 px fine print (`.discl`, `.ab-fine`), where a longer measure is
 * conventional and where they already ran to 82 and 81 on a phone.
 *
 * THE FOLLOW-UP THIS MEASUREMENT ARGUES FOR, recorded so the next session does not have to
 * re-derive it: the condition page is the one reading view with real headroom (62 -> 71 and still
 * room), and the way to spend an 880 px screen on it is not a wider ribbon but TWO COLUMNS of
 * `.panel` cards at roughly phone measure each. That is a restructure -- `.pad` becomes a grid,
 * `.dtop` and `.dhero` span both columns, and sticky-inside-grid has to be checked -- so it is
 * Level 2 work, not this.
 *
 * HOW A VIEW IS TOLD APART FROM ANOTHER, AND WHY IT IS AN ATTRIBUTE AND NOT A CLASS PER VIEW.
 * The reading views and the grid views share their root elements: `libHTML` (a grid) and
 * `detailHTML` (prose) both return `<div class="pad">`, and four resident-mode views share
 * `.res-wrap`. There is nothing in the markup to select on. So `paint()` -- the single funnel
 * every view goes through -- writes the view name to `.app[data-view]`, one line, and the CSS
 * addresses views by name.
 *
 * The alternative was a list of prose selectors (`.discl`, `.qtext`, `.ab-lede`, `.calc-note`,
 * `.cu-intro`, `.pl`, `li`, `p`, ...). That list is OPEN: a prose class added next year is missed
 * silently and renders at 140 characters. Capping the container is CLOSED -- everything in the
 * view is inside it, including markup that does not exist yet. That is the deciding argument.
 *
 * SPECIFICITY, NOT SOURCE ORDER, KEEPS THE READING CAP. `.app[data-view="detail"]` is (0,2,0) and
 * the plain `.app` rules are (0,1,0), so the 520 px cap survives the 1024 px block raising `.app`
 * to 880 even though that block comes later. Stated here because it is the kind of thing that
 * looks like a bug when someone adds a third breakpoint and wonders why detail did not widen.
 *
 * THE RESIZE FIX IS PART OF THIS JOB, NOT A DRIVE-BY. `positionThumbs()` measures offsetLeft and
 * offsetWidth of the mode-toggle buttons and is called from `setMode()` and from `paint()` -- and
 * from nothing else. `scripts/fix_dtop_overflow.js` says in a comment that it is "already wired to
 * resize"; it is not, and that comment is wrong. `@media(max-width:405px)` shrinks
 * `.toggle button` padding, so the buttons are 56 px below that width and 65 px above it, and a
 * rotation that crosses 405 px leaves the sliding `.thumb` 9 px short of the button it is meant to
 * be behind. Measured 2026-09-12: 390 -> 1024 gives btnW 65, thumbW 56. That is live today on any
 * iPhone whose portrait width is under 405 pt, and large-screen-plan.md names exactly this class
 * of bug ("anything that measured a width once at boot will be wrong after the fold"). One
 * listener fixes it.
 *
 * SAFE ON EVERY OTHER SURFACE. Every rule below is inside `@media (min-width:720px)` or
 * `(min-width:1024px)`, so at 320-719 px -- every phone the app was designed for, portrait -- not
 * one of them matches and the computed layout is byte-for-byte what shipped. Verified rather than
 * asserted: verify_large_screen.js diffs the rendered geometry at 320/375/390/430 against the
 * unpatched tree.
 *
 * add_safe_area.js's `.app is the container` anchor still passes, because the base
 * `.app{width:100%;max-width:468px...}` rule is left byte-identical and the widening happens in an
 * appended block. HANDOFF-app-code-edits.md predicted this edit would break that anchor. It does
 * not have to, and mobile-first is the reason: override at min-width, never edit the base rule.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2];
const CHECK = process.argv.includes('--check');
if (!ROOT) { console.error('usage: add_large_screen.js <site-root> [--check]'); process.exit(2); }

const FILE = path.join(ROOT, 'index.html');
if (!fs.existsSync(FILE)) { console.error('missing: ' + FILE); process.exit(2); }
let s = fs.readFileSync(FILE, 'utf8');

const MARK = 'rc-large-screen';
if (s.includes(MARK)) {
  console.error('FAILED: this tree already carries the large-screen block -- nothing to do.');
  process.exit(CHECK ? 0 : 2);
}

/* ---------------------------------------------------------------- anchors
 * Every one of these is either a rule the appended block overrides, or a line an edit is spliced
 * into. If the stylesheet moved under this script it must fail loudly rather than append a block
 * that overrides nothing. */
/* `.res-hero p` is expected TWICE, and only the first is real CSS. The second lives inside
   `const RES_CSS = \`...\`` -- a template literal referenced nowhere, left over from the resident
   build -- so it is never injected and never applies. add_safe_area.js records the same thing for
   `.res-wrap`, including the mistake of reading the second copy as a later override. Asserting 2
   rather than 1 is deliberate: if that dead literal is ever deleted this should fail and be
   re-read, not silently pass. */
const EXPECT = [
  ['.app is the 468px container', 1,
   '.app{width:100%;max-width:468px;min-height:100vh;position:relative;z-index:1;}'],
  ['.nav is capped at 440px', 1,
   '.nav{position:fixed;left:50%;transform:translateX(-50%);bottom:14px;width:calc(100% - 28px);max-width:440px;'],
  ['.grid is a fixed 2-column library grid', 1,
   '.grid{display:grid;grid-template-columns:1fr 1fr;gap:13px;padding:0 16px;}'],
  ['.ggrid is a fixed 2-column gallery grid', 1,
   '.ggrid{display:grid;grid-template-columns:1fr 1fr;gap:12px;padding:8px 16px 30px;}'],
  ['.rxgrid is a fixed 2-column drug grid', 1,
   '.rxgrid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:8px}'],
  ['.cu-list is a single column', 1,
   '.cu-list{display:flex;flex-direction:column;gap:14px}'],
  ['.cu-intro exists', 1, '.cu-intro{opacity:.78;'],
  ['.res-hero p (1 live + 1 in the dead RES_CSS literal)', 2, '.res-hero p{opacity:.75;'],
  ['.pdfbtn exists', 1, '.pdfbtn{'],
];

let bad = 0;
for (const [what, want, needle] of EXPECT) {
  const n = s.split(needle).length - 1;
  if (n !== want) { console.error(`FAIL: ${what} -- found ${n} occurrences, expected ${want}`); bad++; }
}

/* The two splice points. Both are asserted at exactly one occurrence for the same reason. */
const PAINT_ANCHOR =
  " const nav=document.getElementById('nav');nav.style.display=IMMERSIVE.includes(r.v)?'none':'flex';";
const THUMBS_ANCHOR =
  "th.style.left=b.offsetLeft+'px';th.style.width=b.offsetWidth+'px';}});}\n";
for (const [what, needle] of [['paint() nav line', PAINT_ANCHOR], ['positionThumbs() tail', THUMBS_ANCHOR]]) {
  const n = s.split(needle).length - 1;
  if (n !== 1) { console.error(`FAIL: ${what} -- found ${n} occurrences, expected 1`); bad++; }
}

/* add_safe_area.js appends against this exact anchor later in the native chain. Inserting our
   block immediately before </head> keeps it at exactly one occurrence -- our own </style> becomes
   the one it matches. Checked here rather than discovered during a payload build. */
const HEAD_ANCHOR = '</style></head>\n<body>';
{
  const n = s.split(HEAD_ANCHOR).length - 1;
  if (n !== 1) { console.error(`FAIL: head-close anchor -- found ${n}, expected 1`); bad++; }
}

if (bad) { console.error(`\n${bad} anchor(s) failed -- not writing`); process.exit(1); }
if (CHECK) { console.log('add_large_screen.js --check: all anchors present, patch not applied'); process.exit(0); }

/* ---------------------------------------------------------------- the views
 * READING views get the measure cap. Everything not listed keeps the full widened container.
 * Classified by measurement, not by guess: each view was rendered at 1024 px with the container
 * widened and its widest text-bearing block measured. The ones below all ran past 105 characters
 * a line; the ones left out (library, gallery, galleries, rx, res, resspec, review, clinupd) had
 * no text block over 90 characters, because they are grids of cards.
 *
 * `ask` is here even though build_ios_variant.js removes that view from the native builds -- the
 * selector is inert once the view cannot be reached, and the website still has it. */
const READ_VIEWS = ['detail', 'quiz', 'rxdrug', 'resdetail', 'resguide', 'calc', 'calcone',
                    'or', 'about', 'account', 'terms', 'privacy', 'ask'];
const READ_SEL = READ_VIEWS.map(v => `.app[data-view="${v}"]`).join(',\n');

const BLOCK = `<style id="${MARK}">
/* Large screens -- iPad today, a resized desktop window, and an unfolded foldable if one ever
   ships. Added by scripts/add_large_screen.js; see that file for why each part is here.

   Everything is min-width. Below 720px nothing here matches and the phone layout is untouched. */

/* 1. The container. 720 catches every iPad in portrait (mini 744, 11" 820, 13" 1024); 1024 catches
      the 11" and 13" in landscape. Not device widths -- breakpoints, which is what actually
      decides the layout, and which pays off on a screen nobody has announced yet. */
@media (min-width:720px){
  .app{max-width:680px;}
  /* The tab bar tracks the container rather than staying at 440. .nav button is flex:1 with
     min-width:auto, so the longest single word in any label sets a floor on every tab's width --
     more room here is what stops "Clinical Calculators" driving the whole row. */
  .nav{max-width:560px;}
}
@media (min-width:1024px){
  .app{max-width:880px;}
}

/* 2. The reading column. Written by paint() as .app[data-view=...]; (0,2,0) beats the (0,1,0)
      rules above, so this cap holds at 1024 as well without being repeated.
      520px is measured, not estimated -- it is the largest cap at which no body-prose block on any
      reading view passes ~84 characters a line, and the condition page stays at 71. The shipped
      468px column was already at 62-75, so this is deliberately a small gain. See the table in
      scripts/add_large_screen.js. */
@media (min-width:720px){
${READ_SEL}{max-width:520px;}
}

/* 3. The grids. Only .res-grid was ever auto-fill; large-screen-plan.md says the gallery grid is
      "already auto-fill" and that is wrong -- .ggrid, .grid and .rxgrid are all a hard 1fr 1fr and
      would have gone to two enormous columns. auto-fill only inside the min-width block, so the
      phone's two columns are still literally two columns.
      The minmax floors are chosen to land each card at roughly the width it has on a phone
      (a 468px .grid gives 211px cards; 196px gives 4 columns at 880 and 3 at 680). */
@media (min-width:720px){
  .grid{grid-template-columns:repeat(auto-fill,minmax(196px,1fr));}
  .ggrid{grid-template-columns:repeat(auto-fill,minmax(190px,1fr));}
  .rxgrid{grid-template-columns:repeat(auto-fill,minmax(200px,1fr));}
  /* Clinical Updates is a column of cards holding a specialty name and two year buttons -- at
     880px each one was a near-empty band the full width of the screen. */
  .cu-list{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));align-items:start;}
}

/* 4. Two ledes that sit inside views which are NOT reading views, so they get no container cap
      and would otherwise run the full 880. ch, not px: a measure is a property of the font. */
@media (min-width:720px){
  .cu-intro,.res-hero p{max-width:64ch;}
}

/* 5. One control that reads as broken when stretched: the gallery's download button is a single
      centred pill, and at 880px wide it stops looking like a button. */
@media (min-width:720px){
  .pdfbtn{max-width:420px;margin-left:auto;margin-right:auto;}
}
</style>`;

const before = s.length;

/* ---- edit 1: paint() publishes the view name ------------------------------------------------
 * Placed on the nav line rather than inside the if/else chain, because build_ios_variant.js cuts
 * `else if(r.v==='ask'){...}` out of that chain by exact string and an insertion near it is an
 * invitation to a conflict. This line runs for every view, including ones added later. */
s = s.replace(PAINT_ANCHOR,
  " /* Large screens: the stylesheet has to know which view is showing, because the reading views\n" +
  "    and the grid views share their root elements (.pad is both the library and a condition\n" +
  "    page). See scripts/add_large_screen.js. */\n" +
  " { const _app=document.querySelector('.app'); if(_app) _app.dataset.view=r.v; }\n" +
  PAINT_ANCHOR);

/* ---- edit 2: keep the mode toggle's thumb under its button across a rotation ---------------- */
s = s.replace(THUMBS_ANCHOR,
  THUMBS_ANCHOR +
  "/* The toggle's buttons change width at the 405px breakpoint, and positionThumbs() is otherwise\n" +
  "   called only by setMode() and paint() -- so before this line a rotation across 405px left the\n" +
  "   sliding thumb 9px short of the button. Measured, not theorised: 390 -> 1024 gave btnW 65,\n" +
  "   thumbW 56. */\naddEventListener('resize',positionThumbs);\n");

/* ---- edit 3: the stylesheet ------------------------------------------------------------------
 * NO newline between our closing </style> and </head>. add_safe_area.js, later in the native
 * chain, anchors on the literal '</style></head>\n<body>' -- inserting the block with a newline
 * there took that anchor to zero occurrences and stopped the iOS payload build with
 * "expected exactly 1 head-close anchor, found 0". Caught by running the chain, which is why the
 * chain is run after a CSS-only change. The post-condition below is asserted rather than trusted. */
s = s.replace(HEAD_ANCHOR, '</style>\n' + BLOCK + '</head>\n<body>');

{
  const n = s.split(HEAD_ANCHOR).length - 1;
  if (n !== 1) {
    console.error(`FAIL: after the edit, add_safe_area.js's head-close anchor occurs ${n} times, not 1.`);
    console.error('      The native payload build would stop here. Not writing.');
    process.exit(1);
  }
}

fs.writeFileSync(FILE, s);

console.log('--- add_large_screen.js ---');
for (const [what] of EXPECT) console.log(`  ok    ${what}`);
console.log('  ok    paint() nav line');
console.log('  ok    positionThumbs() tail');
console.log(`  edit  paint() writes .app[data-view]`);
console.log(`  edit  positionThumbs() wired to resize`);
console.log(`  edit  <style id="${MARK}"> appended before </head>`);
console.log(`  read views capped at 520px: ${READ_VIEWS.join(" ")}`);
console.log(`index.html: ${before} -> ${s.length} bytes (+${s.length - before})`);
console.log('');
console.log('  next: RC_PW=<dir> node scripts/verify_large_screen.js <site-root>');
