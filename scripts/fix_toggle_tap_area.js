#!/usr/bin/env node
/**
 * fix_toggle_tap_area.js — the mode toggle reaches 48dp without the pill changing size.
 *
 *   node scripts/fix_toggle_tap_area.js <site-root>
 *
 * THE FINDING. Nursing / Medical Student / Resident measure 65x26, 110x26 and 71x26 -- three
 * controls, on every view, at every width, 22px under Android's 48dp floor. After v148 it is the
 * largest remaining touch-target finding by a wide margin.
 *
 * WHY NOT A ::after OVERLAY, which is the usual advice. An absolutely positioned pseudo-element
 * does not change its host's border box, and the border box is what both the audit here AND the
 * accessibility node WebView hands Android are computed from. A ::after would make the control
 * genuinely easier to hit and leave every automated report saying 26px -- fixing the symptom that
 * is measured while appearing not to.
 *
 * WHAT THIS DOES INSTEAD. Vertical padding grows the button's real border box to 48px; an equal
 * negative vertical margin removes the growth from the parent's layout again. So the button IS
 * 48px to the DOM, to the audit and to the accessibility tree, while `.toggle` keeps the exact
 * height it has today and nothing moves on screen.
 *
 *   >=406px   padding 7px -> 18px, margin -11px   border box 26 -> 48, layout 26 unchanged
 *   <=405px   padding 6px -> 18px, margin -12px   border box 24 -> 48, layout 24 unchanged
 *
 * The inner line box is 12px in both variants (26-14 and 24-12, measured), which is why one
 * padding value serves both and only the margin differs.
 *
 * THE PILL IS NOT DRAWN BY THE BUTTON. `.toggle .thumb` is absolutely positioned at top:3px;
 * bottom:3px inside `.toggle`, so it tracks the parent's height, not the button's -- and the parent
 * is unchanged. The buttons have `background:transparent` and `border:0`, so a 48px-tall button is
 * invisible. Only hit-testing changes.
 *
 * PLACEMENT MATTERS. `.toggle button{padding:7px 11px}` and the <=405px override are both (0,0,1,1),
 * the same specificity as this rule, so this must come AFTER them or the media query wins back the
 * block padding under 405px. It is appended immediately after that media query for that reason.
 * It sets padding-BLOCK only, so each variant keeps its own horizontal padding.
 *
 * ROOM TO GROW INTO, measured before choosing 48: at every width from 320 to 1280 the elements 12px
 * above and below the toggle are both `.topbar` itself -- its own padding. The 11px extension lands
 * inside it rather than over another control. Verified afterwards by hit-testing, not by assuming.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2];
if (!ROOT) { console.error('usage: fix_toggle_tap_area.js <site-root>'); process.exit(2); }
const FILE = path.join(ROOT, 'index.html');
let s = fs.readFileSync(FILE, 'utf8');

const ANCHOR = '@media(max-width:405px){.toggle button{padding:6px 8px;font-size:10.5px;}' +
               '.dtop{gap:6px;padding:12px 10px;}.topbar{gap:6px;}}';
const ADDED =
  '\n/* 48dp tap target without a 48px pill: the padding makes the border box real, the equal' +
  '\n   negative margin gives the height back to the parent. scripts/fix_toggle_tap_area.js. */' +
  '\n.toggle button{padding-block:18px;margin-block:-11px;}' +
  '\n@media(max-width:405px){.toggle button{margin-block:-12px;}}';

if (s.includes(ADDED.trim().split('\n').pop())) { console.log('  --  already applied'); process.exit(0); }
const n = s.split(ANCHOR).length - 1;
if (n !== 1) {
  console.error(`FAIL: anchor found ${n} time(s), expected exactly 1:\n      ${ANCHOR}`);
  process.exit(1);
}
s = s.replace(ANCHOR, ANCHOR + ADDED);
fs.writeFileSync(FILE, s);
console.log('  ok  .toggle button border box -> 48px, parent layout unchanged');
console.log('Verify by HIT-TESTING, not by reading the rule: the point of this change is a region.');
