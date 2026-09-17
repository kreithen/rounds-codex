#!/usr/bin/env node
/**
 * fix_viewer_scale.js — let a gallery page use the screen it is on.
 *
 *   node scripts/fix_viewer_scale.js <site-root>
 *
 * WHY. `.vslide` is `width:min(94%,440px)`. There is no height term at all, so a 2:3 page renders
 * at width x 1.5 whatever the viewport is, and the 440px cap never lifts. Measured against v148:
 *
 *   360x640   phone portrait      338x508   fits
 *   1024x600  7" landscape        440x660   CROPS -- 30px lost off the top and 30 off the bottom
 *   1280x800  10" landscape       440x660   fits, uses 34% of the width
 *   800x1280  10" portrait        440x660   fits, uses 55% of the width
 *
 * The artwork is 1024x1536 as shipped (this one 1138x1707), so on a tablet the app's flagship
 * surface -- 1,020 original illustrations -- shows them smaller, relative to the screen, than a
 * phone does. v138-v147 built a large-screen layout; the viewer was not part of it.
 *
 * THE FIX is one declaration, and the 132px is not arbitrary. Today's phone render is
 * width-constrained at 338.4 (94% of 360) and sits with 66px of clearance above and below inside a
 * 640px viewport -- 132px in total, with `.vbot`'s scrim deliberately overlapping the lower edge of
 * the artwork. Expressing that as a height term reproduces the phone exactly and generalises it:
 *
 *   width: min(94%, (100svh - 132px) / 1.5, 1024px)
 *
 *   phone 360x640      94%=338.4  height term=338.7  -> 338.4   IDENTICAL to today
 *   7"    1024x600     94%=962.6  height term=312    -> 312     smaller, but COMPLETE
 *   10"   1280x800     94%=1203   height term=445.3  -> 445     landscape height is the binding
 *   10"p  800x1280     94%=752    height term=765.3  -> 752     71% wider than today
 *
 * The 7" case getting *smaller* is the correct answer, not a regression: a 2:3 page cannot be shown
 * any larger in a 600px-tall window without losing part of it.
 *
 * 1024px is the cap because that is the shipped page width -- past it the browser is upscaling a
 * JPEG, which costs memory and buys nothing.
 *
 * svh, NOT vh, AND BOTH. `.viewer` is `position:fixed;inset:0`, so its real height is the visual
 * viewport. On mobile Safari `100vh` is the LARGE viewport and exceeds that while the URL bar is
 * shown -- which would compute a width too big and reintroduce the exact crop this removes. The
 * rule carries the `vh` form first and the `svh` form second, so the second wins wherever `svh`
 * parses and the first is the fallback where it does not.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2];
if (!ROOT) { console.error('usage: fix_viewer_scale.js <site-root>'); process.exit(2); }
const FILE = path.join(ROOT, 'index.html');
let s = fs.readFileSync(FILE, 'utf8');

const FROM = '.vslide{width:min(94%,440px);transition:transform';
const TO   = '.vslide{width:min(94%,calc((100vh - 132px)/1.5),1024px);' +
                     'width:min(94%,calc((100svh - 132px)/1.5),1024px);transition:transform';

const n = s.split(FROM).length - 1;
const m = s.split(TO).length - 1;
if (n === 0 && m === 1) { console.log('  --  already applied'); process.exit(0); }
if (n !== 1) {
  console.error(`FAIL: anchor found ${n} time(s), expected exactly 1:\n      ${FROM}`);
  process.exit(1);
}
s = s.replace(FROM, TO);
fs.writeFileSync(FILE, s);
console.log('  ok  .vslide now has a height term and a 1024px cap');
console.log('Re-measure with the four-viewport probe; the phone must come back unchanged at 338x508.');
