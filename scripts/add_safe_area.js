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
 * SAFE ON EVERY OTHER SURFACE. `env(safe-area-inset-*)` resolves to 0px wherever there is no inset
 * — desktop browsers, headless Chromium, an ordinary Safari tab — so every calc() below collapses
 * to the value that shipped. This changes nothing except on a device with an inset.
 *
 * The bottom rules are here because the top fix requires them. With `.never`, UIKit stops reserving
 * the home-indicator strip too, and `.nav` is pinned at `bottom:14px` with no inset of its own —
 * so fixing only the top would trade a clipped header for a tab bar under the home indicator.
 * `.pad` and `.res-wrap` carry the 112px clearance that keeps content off `.nav`, so they move by
 * the same amount or the last item on a page slides under the bar.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2];
if (!ROOT) { console.error('usage: add_safe_area.js <site-root>'); process.exit(2); }

const FILE = path.join(ROOT, 'index.html');
let s = fs.readFileSync(FILE, 'utf8');

const MARK = 'rc-safe-area';
if (s.includes(MARK)) { console.log('already patched -- nothing to do'); process.exit(0); }

/* Assert the shipped values this block overrides, so it fails loudly if the design moved under it
   rather than silently pinning a stale number. */
const EXPECT = [
  ['.nav bottom:14px',      /\.nav\{[^}]*bottom:14px/],
  ['.pad padding-bottom',   /\.pad\{padding-bottom:112px;?\}/],
  ['.app is the container', /\.app\{width:100%;max-width:468px/],
  ['.viewer is fixed',      /\.viewer\{position:fixed;inset:0/],
];

/* `.res-wrap` is declared TWICE, in two different <style> blocks, and the later one has no
   padding-bottom at all -- so the 112px nav clearance CLAUDE.md records as added on 2026-07-30 is
   currently overridden and the last element of every resident page sits under the tab bar. That is
   a live bug on the website too, not something this patch introduced. The block below happens to
   fix it for iOS because it is appended last; the web needs the duplicate rule removed at source. */
{
  const n = (s.match(/\.res-wrap\{/g) || []).length;
  if (n !== 2) console.log(`  note: expected 2 .res-wrap rules (the known duplicate), found ${n}`);
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
.viewer{padding-top:env(safe-area-inset-top);}
.nx-open{padding-top:env(safe-area-inset-top);}
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
console.log(`  six rules appended before </head>`);
console.log(`index.html: ${before} -> ${s.length} bytes (+${s.length - before})`);
console.log('');
console.log('  NOTE: this is half the fix. capacitor.config.json must also set');
console.log('        "ios": { "contentInset": "never" }  -- with "always" UIKit adds an inset the');
console.log('        page now provides itself, and leaves the first paint scrolled under it.');
