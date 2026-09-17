#!/usr/bin/env node
/**
 * fix_large_screen_taps.js — raise two controls to Android's 48dp tap-target floor.
 *
 *   node scripts/fix_large_screen_taps.js <site-root>
 *
 * WHY. Play's pre-launch report measures touch targets against 48dp and publishes what it finds on
 * the listing console, where the physician cannot edit it. `audit_a11y.js --widths 1280` measures
 * two controls a few pixels short, both of them in layout code that had never been measured:
 *
 *   .nav button  146x43  inside @media (min-width:1180px)   the side rail, five px short
 *   .allgal      238x47  global                             one px short
 *
 * WHAT IT CHANGES. Vertical padding only, on two rules:
 *
 *   .nav button (1180px)  padding:10px 11px -> 14px 11px   43 -> ~51  (icon ~22px + 28px padding)
 *   .allgal               padding:13px 18px -> 15px 18px   47 -> ~51
 *
 * The rail is a centred column of five with gap:2px, so its height goes 223 -> ~263px: still well
 * inside an 800px viewport, which is the shortest the rail can appear on (it needs 1180px of
 * width). `.allgal` is `width:fit-content` and `white-space:nowrap`, so vertical padding cannot
 * make it wrap or overflow -- the comment in that rule is about the horizontal axis and is
 * untouched here.
 *
 * WHY NOT 48 EXACTLY. `fix_tap_targets.js` records the reason: a box set to exactly 48 measured
 * 47.x on 168 of 181 cards, because sub-pixel layout rounds against you. Aim past the floor.
 *
 * EXACT-COUNT GUARDS. Each anchor must appear exactly once. That is not ceremony: the audio CSS
 * turned out to exist in TWO copies and only an exact-count guard caught it.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2];
if (!ROOT) { console.error('usage: fix_large_screen_taps.js <site-root>'); process.exit(2); }
const FILE = path.join(ROOT, 'index.html');
let s = fs.readFileSync(FILE, 'utf8');

const EDITS = [
  { what: '.nav button in @media (min-width:1180px)  43 -> ~51',
    from: 'gap:10px;padding:10px 11px;text-align:left;',
    to:   'gap:10px;padding:14px 11px;text-align:left;' },
  { what: '.allgal                                   47 -> ~51',
    from: 'margin:12px auto 2px;padding:13px 18px;border-radius:15px;',
    to:   'margin:12px auto 2px;padding:15px 18px;border-radius:15px;' },
];

let done = 0, already = 0;
for (const e of EDITS) {
  const n = s.split(e.from).length - 1;
  const m = s.split(e.to).length - 1;
  if (n === 0 && m === 1) { console.log(`  --  ${e.what}  (already applied)`); already++; continue; }
  if (n !== 1) {
    console.error(`FAIL: ${e.what}\n      anchor found ${n} time(s), expected exactly 1:\n      ${e.from}`);
    process.exit(1);
  }
  s = s.replace(e.from, e.to);
  console.log(`  ok  ${e.what}`);
  done++;
}

if (done) fs.writeFileSync(FILE, s);
console.log(`\n${done} edit(s) applied, ${already} already in place.`);
console.log('Re-measure with:  node scripts/audit_a11y.js <site-root> --widths 1280');
