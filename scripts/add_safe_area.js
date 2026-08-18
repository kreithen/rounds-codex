#!/usr/bin/env node
/* add_safe_area.js <site-root>
 *
 * The app declares `viewport-fit=cover` and then handles only the BOTTOM safe area, in exactly two
 * places (the gallery viewer's control bar and the Ask input bar). There is no
 * `env(safe-area-inset-top)` anywhere in the shipped CSS.
 *
 * On the website that is invisible: Safari's own toolbar occupies the top strip, so nothing of the
 * page is ever under the clock. In a full-screen WKWebView it is the first thing you see — reported
 * from an iPhone 16 Pro Max on 2026-08-17, the specialty header and the three-mode switch rendered
 * UNDER the Dynamic Island on every cold load, and a downward swipe "fixed" it.
 *
 * The swipe is the tell. Capacitor was set to `contentInset: "always"`, which sets the scroll view's
 * contentInsetAdjustmentBehavior to .always: UIKit adds the safe-area inset to the scroll view, but
 * the initial contentOffset is not moved to match, so the first paint sits scrolled up by exactly
 * the inset and the first scroll snaps it right. Chasing that in Swift is the wrong end of the
 * problem. The fix is to stop UIKit adjusting anything (`contentInset: "never"`, set in
 * capacitor.config.json) and to let the page own its own insets, which is what `viewport-fit=cover`
 * is for.
 *
 * WHY AN APPENDED STYLE BLOCK RATHER THAN EDITING THE RULES. Five rules need insets and they are
 * scattered through a 700 kB single-line stylesheet. Editing each one is five anchors that can each
 * drift; appending one block that overrides them is one anchor, wins on cascade order at equal
 * specificity, and cannot damage a rule it fails to match.
 *
 * MEASURED, NOT ASSUMED (iPhone 17 Pro Max simulator, iOS 26.5, 2026-08-18). With
 * contentInset "never" the page reports .app padding-top 62px and .nav bottom 48px -- i.e. a 62px
 * top inset and 14+34 at the bottom. That settles the one thing I was unsure of: `.never` does NOT
 * zero the env() values WebKit hands the page. Read them off getComputedStyle in Safari's Web
 * Inspector before theorising about them.
 *
 * SAFE ON EVERY OTHER SURFACE. `env(safe-area-inset-*)` resolves to 0px wherever there is no inset
 * — desktop browsers, headless Chromium, an ordinary Safari tab — so every calc() below collapses
 * to the value that shipped. This changes nothing except on a device with an inset.
 *
 * The bottom rules are here because the top fix requires them. With `.never`, UIKit stops reserving
 * the home-indicator strip too, and `.nav` is pinned at `bottom:14px` with no inset of its own —
 * so fixing only the top would trade a clipped header for a tab bar under the home indicator.
 * `.pad` and `.res-wrap` carry the 112px clearance that keeps content off `.nav`, so they move by
 * the same amount or the last item on a page slides under the bar. (Both already had that
 * clearance -- see the note beside the .res-wrap count for a claim of mine that was wrong.)
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2];
if (!ROOT) { console.error('usage: add_safe_area.js <site-root>'); process.exit(2); }

const FILE = path.join(ROOT, 'index.html');
let s = fs.readFileSync(FILE, 'utf8');

const MARK = 'rc-safe-area';

/* ---- the USMLE module is a SEPARATE DOCUMENT --------------------------------------------------
 * /usmle/ is its own page (kept out of index.html to avoid doubling the big file), so none of the
 * above reaches it. Reported from the simulator: its header sat under the clock while the main app
 * was already fixed.
 *
 * It is a much simpler page -- no fixed, sticky or absolutely positioned elements anywhere in it,
 * checked rather than assumed -- so it needs only two things: `viewport-fit=cover`, without which
 * env() reports nothing, and the inset on <body>. */
{
  const U = path.join(ROOT, 'usmle', 'index.html');
  if (!fs.existsSync(U)) {
    console.log('\n  note: no usmle/index.html in this tree -- skipped');
  } else {
    let u = fs.readFileSync(U, 'utf8');
    if (u.includes(MARK)) {
      console.log('\n  usmle/index.html already patched');
    } else {
      const VP_FROM = '<meta name="viewport" content="width=device-width, initial-scale=1" />';
      const VP_TO   = '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />';
      const nvp = u.split(VP_FROM).length - 1;
      const nhd = u.split('</head>').length - 1;
      if (nvp !== 1 || nhd !== 1) {
        console.error(`FAIL: usmle/index.html -- viewport tags ${nvp}, </head> ${nhd}, expected 1 and 1`);
        process.exit(1);
      }
      const UBLOCK = `<style id="${MARK}">
/* The status bar and home indicator. env() is 0 anywhere without an inset, so this is inert on
   the web. This page has no fixed or sticky elements, so the body is the only thing to inset. */
body{padding-top:env(safe-area-inset-top);padding-bottom:env(safe-area-inset-bottom);}
</style>
</head>`;
      const ub = u.length;
      u = u.replace(VP_FROM, VP_TO).replace('</head>', UBLOCK);
      fs.writeFileSync(U, u);
      console.log(`\n  usmle/index.html: viewport-fit=cover + body insets  (${ub} -> ${u.length} bytes)`);
    }
  }
}


/* index.html's own guard. It comes AFTER the block above on purpose: an early exit here used to
   skip the USMLE page entirely whenever index.html was already patched, which is a guard that
   silently does half the work. */
if (s.includes(MARK)) { console.log('index.html already patched -- nothing to do'); process.exit(0); }

/* Assert the shipped values this block overrides, so it fails loudly if the design moved under it
   rather than silently pinning a stale number. */
const EXPECT = [
  ['.nav bottom:14px',      /\.nav\{[^}]*bottom:14px/],
  ['.pad padding-bottom',   /\.pad\{padding-bottom:112px;?\}/],
  ['.app is the container', /\.app\{width:100%;max-width:468px/],
  ['.viewer is fixed',      /\.viewer\{position:fixed;inset:0/],
  ['.vtop is absolute',     /\.vtop\{position:absolute;top:0;[^}]*padding:16px/],
  /* Order-agnostic: .ahead declares its padding BEFORE position, the others after. Matching on
     declaration order once cost a run here. */
  ['.topbar sticky 14px',   /\.topbar\{(?=[^}]*position:sticky;top:0)(?=[^}]*padding:14px 16px 10px)/],
  ['.dtop sticky 12px',     /\.dtop\{(?=[^}]*position:sticky;top:0)(?=[^}]*padding:12px 14px)/],
  ['.qhead sticky 14px',    /\.qhead\{(?=[^}]*position:sticky;top:0)(?=[^}]*padding:14px 16px 12px)/],
  ['.ghead sticky 14px',    /\.ghead\{(?=[^}]*position:sticky;top:0)(?=[^}]*padding:14px 16px)/],
  ['.ahead sticky 14px',    /\.ahead\{(?=[^}]*position:sticky;top:0)(?=[^}]*padding:14px 16px 12px)/],
  ['.rxletter sticky',      /\.rxletter\{(?=[^}]*position:sticky;top:0)/],
];

/* `.res-wrap` appears TWICE in the file and only the first is real CSS. The second lives inside
   `const RES_CSS = \`...\`` -- a template literal referenced exactly nowhere, left over from the
   resident build -- so it is never injected and never applies.

   Recorded because I got this wrong once and said so out loud: I read the second occurrence as a
   later stylesheet overriding the first, and reported a live bug on the website that does not
   exist. Grep for a variable's USES before concluding that a string of CSS is in the cascade. The
   .res-wrap rule in the block below is still correct -- it adds the bottom inset -- it just is not
   fixing anything that was broken. */
{
  const n = (s.match(/\.res-wrap\{/g) || []).length;
  if (n !== 2) console.log(`  note: expected 2 .res-wrap occurrences (one live, one dead), found ${n}`);
}
let bad = 0;
for (const [what, re] of EXPECT) {
  if (!re.test(s)) { console.error(`FAIL: expected to find ${what} -- the stylesheet moved`); bad++; }
}
if (bad) process.exit(1);

const BLOCK = `<style id="${MARK}">
/* iOS full-screen insets. env() is 0 wherever there is no inset, so this is inert on the web.
   Added by scripts/add_safe_area.js -- see that file for why it is a block and not five edits. */
.app{padding-top:env(safe-area-inset-top);}
.nx-open{padding-top:env(safe-area-inset-top);}
/* .vtop, not .viewer. The viewer's control bar is position:absolute;top:0, and an absolutely
   positioned box is laid out against its containing block's PADDING BOX -- whose top edge is above
   the padding -- so padding on .viewer does not move it. Padding the bar itself does. Its shipped
   padding is 16px on all four sides, so only the top is rewritten. */
.vtop{padding-top:calc(16px + env(safe-area-inset-top));}
/* STICKY BARS. A sticky element pins to the top of the SCROLLPORT, which ignores the padding on
   .app -- so the initial paint was right while the scrolled state put the bar back under the clock.
   Reported on the quiz screen after answering a question.

   Each bar keeps top:0 and instead grows upward: a negative margin equal to the inset cancels
   .app's padding so the bar starts at y=0, and the same amount is added to its own padding-top so
   its CONTENT still sits below the clock. Net effect: identical layout below the bar, the bar's
   own background now covers the status bar, and pinned and unpinned look the same. That is how a
   translucent iOS header is supposed to behave.

   .app's padding stays, because it is what protects every view that has no bar of its own. */
.topbar,.dtop,.qhead,.ghead,.ahead{margin-top:calc(-1 * env(safe-area-inset-top));}
.topbar{padding-top:calc(14px + env(safe-area-inset-top));}
.dtop{padding-top:calc(12px + env(safe-area-inset-top));}
.qhead{padding-top:calc(14px + env(safe-area-inset-top));}
.ghead{padding-top:calc(14px + env(safe-area-inset-top));}
.ahead{padding-top:calc(14px + env(safe-area-inset-top));}
/* .rxletter is a section letter inside a list, not a page header -- it should pin BELOW the strip
   rather than cover it, so it takes an offset instead of the grow-upward treatment. */
.rxletter{top:env(safe-area-inset-top);}
.nav{bottom:calc(14px + env(safe-area-inset-bottom));}
.pad{padding-bottom:calc(112px + env(safe-area-inset-bottom));}
.res-wrap{padding-bottom:calc(112px + env(safe-area-inset-bottom));}
</style>`;

/* NOT `</head>`: there are two, and the second is inside a JS string array that builds the
   printable report document. Anchor on the real one, which is the only one followed by a newline
   and <body>. */
const ANCHOR = '</style></head>\n<body>';
const n = s.split(ANCHOR).length - 1;
if (n !== 1) { console.error(`expected exactly 1 head-close anchor, found ${n}`); process.exit(1); }

const before = s.length;
s = s.replace(ANCHOR, '</style>\n' + BLOCK + '\n</head>\n<body>');
fs.writeFileSync(FILE, s);

/* capacitor.config.json lives in the Capacitor project, not in this tree, so it cannot be patched
   from here. Say so rather than leaving half the fix implied. */
console.log('--- add_safe_area.js ---');
for (const [what] of EXPECT) console.log(`  ok    ${what}`);
console.log(`  inset rules appended before </head>`);
console.log(`index.html: ${before} -> ${s.length} bytes (+${s.length - before})`);
console.log('');
console.log('');
console.log('  NOTE: this is half the fix. capacitor.config.json must also set');
console.log('        "ios": { "contentInset": "never" }  -- with "always" UIKit adds an inset the');
console.log('        page now provides itself, and leaves the first paint scrolled under it.');
