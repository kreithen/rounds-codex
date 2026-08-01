#!/usr/bin/env node
/*
 * Stop the condition-page header overflowing horizontally on phones.
 *
 *     node scripts/fix_dtop_overflow.js <site-root> [--check]
 *
 * WHAT WAS WRONG
 * `.dtop` (the sticky header on a condition page) is a flex row of three items:
 *
 *     .tb-btn   44px, flex:none              the back arrow
 *     .tb-logo  113px, flex:1 BUT UNSHRINKABLE -- the <img> inside has max-width:none,
 *                                            so its intrinsic width is the min-content
 *                                            floor and flex-shrink can never get under it
 *     .toggle   221px, flex:none             nursing / medical / resident
 *
 * Plus 28px padding and two 10px gaps: a rigid 426px row, 459px above 414px where a media
 * query enlarges the toggle's font and padding. That is wider than every phone, so the page
 * scrolled sideways on ALL of them -- 79px at 320, 39 at 360, 24 at 375, 9 at 390, 31 at
 * 414, 15 at 430. It had previously been logged as a 9px nuisance at one width and blamed
 * on a `.fnode` flowchart element; `.flow` has overflow-x:auto, clips correctly, and was
 * never the cause.
 *
 * WHY THE LOGO GOES RATHER THAN SHRINKS
 * Making it shrinkable is the tidier-sounding fix and was tried first. It "works" -- and
 * produces a 23px-wide squashed logo at 320px, because `.dtop .tb-logo img` also sets
 * height:30px, so the mark distorts rather than scaling. Present in the box model,
 * unreadable on screen, worse than absent. Squeezing the toggle instead means squashing
 * three labelled buttons and the sliding `.thumb` that tracks them.
 *
 * The logo is redundant on THIS header specifically: the condition page already has a back
 * arrow and the condition's own name below it. The library page -- the actual branding
 * surface -- has a different header and is untouched, as is `.tb-logo` elsewhere.
 *
 * WHERE THE RULE HAS TO GO, AND WHY THIS SCRIPT LOOKS FOR THE LAST ONE
 * `.dtop .tb-logo{...display:flex}` is declared TWICE, late in the stylesheet. An override
 * with the same specificity (0,2,0) only wins if it comes after them, and the first version
 * of this patch inserted at the `.dtop{` rule -- which is earlier, so the media query parsed
 * fine, matched fine, and did nothing. The symptom was `matchMedia(...).matches === true`
 * with `getComputedStyle(logo).display === 'flex'`. So: anchor on the LAST occurrence.
 *
 * 480px is the breakpoint: above it the full 459px row fits with room to spare.
 *
 * `positionThumbs()` measures offsetLeft/offsetWidth and is already wired to resize, so the
 * sliding thumb follows the buttons. No JS change needed.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2];
const CHECK = process.argv.includes('--check');
if (!ROOT) { console.error('usage: fix_dtop_overflow.js <site-root> [--check]'); process.exit(2); }
const IDX = path.join(ROOT, 'index.html');
if (!fs.existsSync(IDX)) { console.error('missing: ' + IDX); process.exit(2); }

let html = fs.readFileSync(IDX, 'utf8');
if (html.includes('--- dtop overflow ---')) {
  console.error('FAILED: this build already carries the fix.');
  process.exit(2);
}

/* The rule this must outrank. Two identical copies exist; we go after the LAST. */
const RULE = '.dtop .tb-logo{height:30px;flex:1;display:flex;align-items:center;}';
const count = html.split(RULE).length - 1;
if (count < 1) { console.error('FAILED: the .dtop .tb-logo rule this overrides was not found'); process.exit(1); }
const at = html.lastIndexOf(RULE);
/* Insert after the whole declaration block that follows it, so we land past the img rule
   too rather than between the two. */
const IMG = '.dtop .tb-logo img{height:30px;filter:drop-shadow(0 0 10px rgba(0,160,255,.45));}';
let insertAt = html.indexOf(IMG, at);
if (insertAt < 0) { console.error('FAILED: the .dtop .tb-logo img rule was not found after it'); process.exit(1); }
insertAt += IMG.length;

const css = '\n' + [
  '/* --- dtop overflow --- The header row is rigid: the logo <img> has max-width:none so',
  '   .tb-logo cannot shrink below 113px, and .toggle is flex:none at 221px (254px above',
  '   414px). With padding and gaps that is a fixed 426-459px row, wider than every phone,',
  '   so every condition page scrolled sideways. Hiding the logo is the only lever big',
  '   enough -- letting it shrink instead gives a 23px squashed mark at 320px, because the',
  '   rule directly above pins the image height at 30px. There is already a back arrow here',
  '   and the condition name below; the library header keeps its logo.',
  '   This MUST stay after the two .dtop .tb-logo declarations above: same specificity,',
  '   so source order is what decides it. */',
  '@media(max-width:480px){ .dtop .tb-logo{display:none} }',
  '/* Second, independent cause of the same symptom, and the one still left at 320px once',
  '   the header fits. The Ask row is a flex row of .inbox and a 48px flex:none send button.',
  '   .inbox is flex:1 1 0% but min-width:auto, and it WRAPS the <input> -- so its',
  '   min-content floor is the input\'s default twenty characters (211px) plus 30px of its',
  '   own padding: 243px, against 254px of row, with 58px still needed for the gap and',
  '   button. 15px over, on every condition page, at 320px.',
  '   Both rules are required and neither is sufficient. min-width:0 on .inbox lets the FLEX',
  '   ITEM shrink; without the same on the input, .inbox\'s min-content is still the input.',
  '   Targeting only the input -- which is not the flex item -- changes nothing at all, which',
  '   is how the first attempt at this looked correct and measured identical. */',
  '.modask-row>.inbox{min-width:0}',
  '.modask-row .inbox input{min-width:0}'
].join('\n');

html = html.slice(0, insertAt) + css + html.slice(insertAt);

/* The Ask row must actually exist, or the second rule is dead weight that reads as cover. */
if (!html.includes('.modask-row{display:flex')) { console.error('FAILED: .modask-row rule not found'); process.exit(1); }
/* The flex item is .inbox, NOT the input -- verified against the live DOM. If the markup
   ever flattens, these selectors silently stop matching, so assert the wrapper exists. */
if (!html.includes('inbox')) { console.error('FAILED: .inbox wrapper not found in the Ask row markup'); process.exit(1); }

console.log(`found ${count} .dtop .tb-logo declaration(s); inserted the override after the last one`);
console.log('added .modask-row input{min-width:0} for the second overflow cause');
if (CHECK) { console.log('\n--check: nothing written'); process.exit(0); }
fs.writeFileSync(IDX, html);
console.log(`wrote ${path.relative(process.cwd(), IDX)}`);
