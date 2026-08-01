#!/usr/bin/env node
/*
 * Two small UI changes requested 2026-08-01, plus wiring the ECG illustration pack.
 *
 *     node scripts/add_ui_tweaks_0801.js <site-root>
 *
 *   1. Resident Mode gets a back arrow, top left, returning to the library.
 *   2. The About page gets a large centred "Leave us a review" button at the top.
 *   3. usmle/index.html loads illus-pM.js (the five ECG tracings) before
 *      illus-real.js, so a physician-approved real image can still override one.
 *
 * Every edit is asserted and the script refuses to run twice, in the same style as
 * add_calculators.js -- these are string insertions into a 0.65 MB file where a
 * silent duplicate would be very hard to spot.
 *
 * WHY navBack() AND NOT root('library')
 * Resident Mode is a nav-bar root, where the stack is one deep and back() is a dead
 * control -- CLAUDE.md records that trap from the calculator tab. navBack() is the
 * helper that already exists for it: `stack.length>1 ? back() : root('library')`.
 * So it lands on the library exactly as asked, and still does the right thing for
 * anyone who arrived from a deeper page rather than from the tab bar.
 *
 * WHY THE REVIEW BUTTON TOASTS
 * There is no App Store listing yet, so there is no URL to open. A button that
 * silently does nothing is the "Download Complete Gallery (PDF)" mistake, which sat
 * as a dead stub for months; this one says plainly that reviews open when the app
 * ships. RC_REVIEW_URL is the single constant to fill in on that day -- set it and
 * the button opens the store instead, with no other edit.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2];
if (!ROOT) { console.error('usage: add_ui_tweaks_0801.js <site-root>'); process.exit(2); }

const IDX = path.join(ROOT, 'index.html');
const UIDX = path.join(ROOT, 'usmle', 'index.html');
const PACK_SRC = path.join(__dirname, '..', 'applive', 'usmle', 'illus-pM.js');
const PACK_DST = path.join(ROOT, 'usmle', 'illus-pM.js');
for (const f of [IDX, UIDX, PACK_SRC]) if (!fs.existsSync(f)) { console.error('missing: ' + f); process.exit(2); }

let html = fs.readFileSync(IDX, 'utf8');
if (html.includes('RC_REVIEW_URL')) { console.error('FAILED: index.html already carries these tweaks.'); process.exit(2); }

const edits = [];
function sub(label, find, replace, expect = 1) {
  const n = html.split(find).length - 1;
  if (n !== expect) { console.error(`FAILED ${label}: found ${n} occurrences, expected ${expect}`); process.exit(1); }
  html = html.replace(find, replace);
  edits.push(label);
}

/* ── 1. Resident Mode back arrow ───────────────────────────────────────────── */
sub('resident back arrow',
  `let h='<div class="res-wrap"><div class="res-hero"><h2>Resident Mode</h2>`,
  `let h='<div class="res-wrap">'+
  '<div class="res-crumb" onclick="navBack()"><span class="res-back">\\u2190</span> Library</div>'+
  '<div class="res-hero"><h2>Resident Mode</h2>`);

/* ── 2. About page review button ───────────────────────────────────────────── */
sub('review button markup',
  `    \'<div class="ab-hero">\'+`,
  `    \'<div class="ab-review-wrap">\'+
      \'<button class="ab-review" onclick="rcReview()">\'+
        \'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">\'+
        \'<path d="M12 2.6l2.9 5.9 6.5.95-4.7 4.6 1.1 6.45L12 17.45 6.2 20.5l1.1-6.45-4.7-4.6 6.5-.95z"/>\'+
        \'</svg>Leave us a review\'+
      \'</button>\'+
      \'<div class="ab-review-s">It helps other students find Rounds Codex</div>\'+
    \'</div>\'+

    \'<div class="ab-hero">\'+`);

sub('rcReview handler',
  `function aboutHead(title,sub){`,
  `/* Fill this in when the App Store listing exists and the button opens the store.
   Kept as one named constant precisely so that is a one-line change. */
var RC_REVIEW_URL='';
function rcReview(){
  if(RC_REVIEW_URL){ window.open(RC_REVIEW_URL,'_blank','noopener'); return; }
  toast('Reviews open when Rounds Codex reaches the App Store \\u2014 thank you for wanting to leave one.');
}

function aboutHead(title,sub){`);

sub('review button CSS',
  `.ab-hero{margin:2px 0 18px;}`,
  `/* Centred and deliberately the loudest thing on the page: it is the one action
   here that asks something of the reader, and everything else is reference text.
   --accent is the mode colour, so this stays in step with nursing/medical/resident
   rather than introducing a fourth brand colour. */
.ab-review-wrap{text-align:center;margin:4px 0 20px}
.ab-review{display:inline-flex;align-items:center;justify-content:center;gap:9px;
 width:100%;max-width:340px;padding:15px 20px;border:0;border-radius:14px;cursor:pointer;
 background:var(--accent);color:#04121b;font:inherit;font-size:16.5px;font-weight:700;
 letter-spacing:.2px;box-shadow:0 6px 18px rgba(0,0,0,.34)}
.ab-review:active{transform:translateY(1px)}
.ab-review svg{width:19px;height:19px;flex:0 0 auto}
.ab-review-s{margin-top:8px;font-size:12.5px;color:var(--muted)}
.ab-hero{margin:2px 0 18px;}`);

fs.writeFileSync(IDX, html);

/* ── 3. the ECG pack into the USMLE page ───────────────────────────────────── */
let u = fs.readFileSync(UIDX, 'utf8');
if (u.includes('illus-pM.js')) { console.error('FAILED: usmle/index.html already loads illus-pM.js'); process.exit(1); }
const tag = '<script src="illus-real.js"></script>';
if (u.split(tag).length - 1 !== 1) { console.error('FAILED: illus-real.js script tag not found exactly once'); process.exit(1); }
// Before illus-real.js, never after: that file loads last on purpose so an
// approved real image wins over a schematic, and pack M is a schematic pack.
u = u.replace(tag, '<script src="illus-pM.js"></script>' + tag);
fs.writeFileSync(UIDX, u);
fs.copyFileSync(PACK_SRC, PACK_DST);
edits.push('usmle/index.html loads illus-pM.js');
edits.push('copied illus-pM.js into usmle/');

console.log(`${edits.length} edits:`);
edits.forEach(e => console.log('  - ' + e));
