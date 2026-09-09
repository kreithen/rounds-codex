#!/usr/bin/env node
/* verify_asset_packs.js <packs-dir> <web-clone> [--deep]
 *
 * Guard for the Play Asset Delivery modules. The thing that actually matters here is not that each
 * pack is well-formed -- Gradle will say so -- but the invariant no build tool checks:
 *
 *     what the base module keeps  +  what the packs carry  ==  everything the app can request
 *
 * Get that wrong in the safe direction and the app ships 742 MB twice. Get it wrong in the other
 * and a gallery is missing on a device, offline, with no error -- the exact failure the reader is
 * promised will not happen. Neither shows up in a build log.
 *
 * IT HASHES EVERY FILE BY DEFAULT, and that is a correction to my own first draft. I wrote this
 * with hashing behind a --deep flag and a comment saying it was off because 742 MB of SHA-256 is
 * expensive. Measured, the whole run is 2.3 seconds. A guard that is cheap and off by default is a
 * guard that does not run, so the flag is inverted: hashing is the default and --fast is the way
 * out. State the number before designing around it.
 *
 * Usage: node scripts/verify_asset_packs.js <packs-dir> <web-clone> [--fast]
 */
'use strict';
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const DIR = process.argv[2], SRC = process.argv[3];
const DEEP = !process.argv.includes('--fast');   // hashing is the default; see the header
if (!DIR || !SRC) { console.error('usage: verify_asset_packs.js <packs-dir> <web-clone> [--fast]'); process.exit(2); }

const plan = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'native', 'asset-packs.json'), 'utf8'));
const MB = n => (n / 1048576).toFixed(1);
const results = [];
const check = (name, ok, detail) => results.push([name, ok, detail]);

/* ---- per-pack structure ---------------------------------------------------------------------- */
const PER_PACK_LIMIT = 1.5 * 1024 * 1024 * 1024;      // Play's documented ceiling, checked 2026-09-09
let total = 0, allFiles = new Map();

for (const p of plan.packs) {
  const dir = path.join(DIR, p.id);
  if (!fs.existsSync(dir)) { check(`${p.id}: module present`, false, 'directory missing'); continue; }

  const gradle = path.join(dir, 'build.gradle');
  const g = fs.existsSync(gradle) ? fs.readFileSync(gradle, 'utf8') : '';
  check(`${p.id}: build.gradle`,
        g.includes("id 'com.android.asset-pack'") &&
        g.includes(`packName = "${p.id}"`) &&
        g.includes('deliveryType = "install-time"'),
        g ? 'plugin, packName or deliveryType wrong' : 'missing');

  /* Everything actually on disk under the pack's asset root, as app-relative paths. */
  const root = path.join(dir, 'src', 'main', 'assets', 'public');
  const on = [];
  if (fs.existsSync(root)) (function walk(d) {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const abs = path.join(d, e.name);
      if (e.isDirectory()) walk(abs); else if (e.isFile()) on.push(path.relative(root, abs));
    }
  })(root);

  const want = new Set(p.files);
  const have = new Set(on);
  const missing = [...want].filter(f => !have.has(f));
  const extra = [...have].filter(f => !want.has(f));
  check(`${p.id}: files match the plan`, missing.length === 0 && extra.length === 0,
        `${missing.length} missing, ${extra.length} unplanned` +
        (missing[0] ? ` (e.g. ${missing[0]})` : extra[0] ? ` (e.g. ${extra[0]})` : ''));

  let bytes = 0, wrong = [];
  for (const rel of on) {
    /* A file in two packs is shipped twice and is a real cost, not a tidiness point. */
    if (allFiles.has(rel)) wrong.push(`${rel} also in ${allFiles.get(rel)}`);
    allFiles.set(rel, p.id);
    const a = path.join(root, rel), b = path.join(SRC, rel);
    const sa = fs.statSync(a).size;
    bytes += sa;
    if (!fs.existsSync(b)) { wrong.push(`${rel} not in the clone`); continue; }
    if (sa !== fs.statSync(b).size) wrong.push(`${rel} size differs from source`);
    else if (DEEP) {
      const h = f => crypto.createHash('sha256').update(fs.readFileSync(f)).digest('hex');
      if (h(a) !== h(b)) wrong.push(`${rel} CONTENT differs from source`);
    }
  }
  total += bytes;
  check(`${p.id}: copies match the source${DEEP ? ' (hashed)' : ' (by size only)'}`, wrong.length === 0, wrong.slice(0, 2).join('; '));
  check(`${p.id}: under Play's 1.5 GB per-pack limit`, bytes <= PER_PACK_LIMIT, `${MB(bytes)} MB`);
}

/* ---- the invariant that matters --------------------------------------------------------------
 * Resolved from the SOURCE with the same resolver the payload builder uses, so the two can never
 * disagree about what the app can request. */
const { resolve } = require(path.join(__dirname, 'measure_bundle.js'));
const reachable = new Set(resolve(SRC).referenced.keys());
const packed = new Set(allFiles.keys());

const notReachable = [...packed].filter(f => !reachable.has(f));
check('every packed file is one the app can request', notReachable.length === 0,
      `${notReachable.length} unreachable, e.g. ${notReachable[0] || ''}`);

const base = [...reachable].filter(f => !packed.has(f));
check('base + packs covers everything reachable', base.length + packed.size === reachable.size,
      `base ${base.length} + packs ${packed.size} != reachable ${reachable.size}`);

/* And the split is the one the payload builder will actually produce. */
const planned = new Set(plan.packs.flatMap(p => p.files));
check('packs on disk match the plan exactly', planned.size === packed.size &&
      [...planned].every(f => packed.has(f)), `plan ${planned.size} vs disk ${packed.size}`);

check('WIRING.txt written', fs.existsSync(path.join(DIR, 'WIRING.txt')));

/* ---- report ----------------------------------------------------------------------------------- */
let bad = 0;
for (const [name, ok, detail] of results) {
  console.log(`  ${ok ? 'ok  ' : 'FAIL'} ${name}${detail && !ok ? '  -- ' + detail : ''}`);
  if (!ok) bad++;
}
console.log('');
console.log(`  packs      : ${plan.packs.length}`);
console.log(`  packed     : ${packed.size} files, ${MB(total)} MB`);
console.log(`  base module: ${base.length} files (everything else the app can request)`);
console.log('');
if (bad) { console.log(`${bad}/${results.length} checks FAILED`); process.exit(1); }
console.log(`all ${results.length} checks pass`);
console.log('\nNOTE: this proves the SPLIT is right, not that Android serves it. Whether Capacitor\'s');
console.log('      local server can read a file out of an install-time pack is unverified and can');
console.log('      only be settled on a device -- native/ANDROID-RUNBOOK.md step 6.');
