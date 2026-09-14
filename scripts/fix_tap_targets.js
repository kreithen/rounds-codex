#!/usr/bin/env node
/**
 * fix_tap_targets.js <tree> [--apply]
 *
 * Raise the condition-card bookmark button to Android's 48dp floor.
 *
 * `.card .cbm` ships at 44x44 and Google's accessibility scanner wants 48. It appears once per
 * condition, so it is 183 of the 236 sub-48dp findings in `native/PRE-LAUNCH-REPORT.md` -- one rule,
 * most of the report.
 *
 * It is `position:absolute` in the card's bottom-right corner, so growing it changes NO layout:
 * the card does not reflow and nothing moves. That is why this one is safe and the audio transport
 * buttons are not -- see the note in PRE-LAUNCH-REPORT.md section 3.
 *
 * Idempotent: running it on an already-fixed tree reports "already 48px" and writes nothing.
 * Works on both the build repo's patcher source and the live app's index.html, because the rule is
 * byte-identical in each -- which is checked rather than assumed.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const TREE = process.argv[2];
const APPLY = process.argv.includes('--apply');
if (!TREE) { console.error('usage: fix_tap_targets.js <tree> [--apply]'); process.exit(2); }

/* 50, not 48. Setting it to exactly 48 was measured and 168 of 181 buttons still came back
   UNDER the floor, at 47.x: the library is a two-up grid whose cards are 157.5px wide, so an
   absolutely-positioned child in one column lands on a fractional boundary and a 48px CSS box
   renders at 47.99. A threshold met exactly is a threshold missed half the time -- 50px gives two
   pixels of headroom against sub-pixel rounding on any device. */
const OLD = '.card .cbm{position:absolute;bottom:2px;right:2px;width:48px;height:48px;';
const NEW = '.card .cbm{position:absolute;bottom:2px;right:2px;width:50px;height:50px;';

/* --- the audio transport, which can only grow in ONE axis -------------------------------------
 * `.rcap-b` ships at 21x21 (a 17px glyph plus 2px padding) -- the worst target in the app and a
 * real problem on a ward, not just a Play warning.
 *
 * It CANNOT be widened. `.rcap-seekwrap` is `flex:1 1 auto`, so every pixel of horizontal padding
 * comes straight out of the scrubber, and CLAUDE.md records the floor: below ~90px of track, four
 * seconds of a six-minute recording share a pixel and it cannot be aimed at. Measured at 320px the
 * track is 98px. That is EIGHT pixels of slack across the whole bar, against five transport
 * buttons. Widening them trades one unhittable control for another.
 *
 * So this grows the HEIGHT only: 21x21 -> 21x44, with the bar's vertical padding reduced so the
 * bar itself goes 32px -> ~48px rather than ~54px. Width, and therefore the scrubber, is untouched
 * -- which is asserted after the change, not assumed.
 *
 * Stated plainly because it matters: this is a PARTIAL fix. For a row of buttons one pixel apart,
 * the hard axis is horizontal -- mis-hitting play for stop is a sideways error, not a vertical one.
 * Closing that needs a design decision (drop a transport control at narrow widths to buy gap), not
 * a CSS tweak, and it is left for the physician in PRE-LAUNCH-REPORT.md section 3. */
const AUDIO = [
  ['.rcap-b{background:none;border:0;padding:2px;cursor:pointer;color:#fff;',
   '.rcap-b{background:none;border:0;padding:2px;min-height:44px;box-sizing:border-box;cursor:pointer;color:#fff;'],
  ['.rcap-bar{position:relative;display:flex;align-items:center;gap:4px;',
   '.rcap-bar{position:relative;display:flex;align-items:center;gap:4px;min-height:48px;'],
  [" background:#131313;border-radius:7px;padding:5px 6px}",
   " background:#131313;border-radius:7px;padding:2px 6px}"],
];

const targets = [
  path.join(TREE, 'index.html'),
  path.join(TREE, 'scripts', 'add_persistence.js'),
].filter(fs.existsSync);

if (!targets.length) { console.error(`FAIL: neither index.html nor scripts/add_persistence.js under ${TREE}`); process.exit(1); }

let changed = 0, already = 0, missing = 0;
for (const f of targets) {
  const s = fs.readFileSync(f, 'utf8');
  const nOld = s.split(OLD).length - 1;
  const nNew = s.split(NEW).length - 1;
  const rel = path.relative(process.cwd(), f);
  if (!nOld && nNew) { console.log(`  ok   ${rel}: already 50px`); already++; continue; }
  if (!nOld) { console.error(`  FAIL ${rel}: the .card .cbm rule is not in its expected form -- do not guess`); missing++; continue; }
  if (nOld > 1) { console.error(`  FAIL ${rel}: ${nOld} copies of the rule; expected 1`); missing++; continue; }
  console.log(`  ${APPLY ? 'fix ' : 'would'} ${rel}: 48px -> 50px`);
  if (APPLY) fs.writeFileSync(f, s.replace(OLD, NEW));
  changed++;
}
/* The audio CSS lives in audio_player.js in the build repo and inlined in the app's index.html. */
const audioTargets = [
  path.join(TREE, 'index.html'),
  path.join(TREE, 'scripts', 'audio_player.js'),
].filter(fs.existsSync);

for (const f of audioTargets) {
  let s = fs.readFileSync(f, 'utf8');
  const rel = path.relative(process.cwd(), f);
  if (!s.includes('.rcap-b{')) continue;           // not the file that carries it
  let hits = 0, done = 0;
  for (const [o, n] of AUDIO) {
    if (s.includes(n)) { done++; continue; }
    if (!s.includes(o)) continue;
    s = s.replace(o, n); hits++;
  }
  if (done === AUDIO.length) { console.log(`  ok   ${rel}: audio bar already raised`); already++; continue; }
  if (hits !== AUDIO.length - done) {
    console.error(`  FAIL ${rel}: matched ${hits + done}/${AUDIO.length} audio rules -- not guessing`);
    missing++; continue;
  }
  console.log(`  ${APPLY ? 'fix ' : 'would'} ${rel}: .rcap-b 21x21 -> 21x44 (height only)`);
  if (APPLY) fs.writeFileSync(f, s);
  changed++;
}

if (missing) process.exit(1);
if (!APPLY && changed) console.log('\n(dry run -- pass --apply)');
