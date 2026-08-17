#!/usr/bin/env node
/* Assemble the exact www/ directory the native app ships, and nothing else.
 *
 * One command between a clone of the web app and the tree Capacitor copies into the bundle. It
 * runs the five patchers in order, drops every file the app cannot reach, and checks the result is
 * the size it should be.
 *
 * v1 BUNDLES EVERYTHING -- ~826 MB, all the artwork and audio in the app, offline from install.
 * The asset-pack path is retained behind --asset-packs and is documented at step 3 below.
 *
 * THE ORDER IS NOT ARBITRARY and each step depends on the one before:
 *   stamp_version      version.txt is the source of truth and RC_VERSION derives from it
 *   fix_root_authority RC_ROOT keeps its host at capacitor://localhost, which has no path. Runs
 *                      before add_media_root because every media URL is resolved against it
 *   add_media_root     gallery pages, PDFs and audio resolve through RC_MEDIA_ROOT
 *   build_ios_variant  the wall, the account surfaces and Ask come out; anchors on the shipped
 *                      privacy wording, so it must run AFTER any RC_LEGAL change and will abort
 *                      loudly rather than half-apply if one landed that it does not know about
 *   add_safe_area      full-screen top/bottom insets. LAST, because it appends a stylesheet to the
 *                      head and every anchor above reads the head
 *
 * WHY THE DROPPING IS DERIVED, NOT GLOBBED. What stays is what measure_bundle.js resolves as
 * reachable -- not a pattern. This tree keeps gallery pages in at least four different shapes:
 * assets/<id>/, a bare <id>/ directory, loose root JPEGs, and five *-upload folders that look
 * exactly like leftover staging and are live content. Any glob confident enough to catch the junk
 * is confident enough to delete something served.
 *
 * Usage: node scripts/build_ios_payload.js <web-clone> <out-dir> [--version v129-LABEL] [--asset-packs]
 */
'use strict';
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const SRC = process.argv[2], OUT = process.argv[3];
const vAt = process.argv.indexOf('--version');
const LABEL = vAt > -1 ? process.argv[vAt + 1] : null;
if (!SRC || !OUT) {
  console.error('usage: build_ios_payload.js <web-clone> <out-dir> [--version v129-LABEL] [--asset-packs]');
  process.exit(2);
}
if (fs.existsSync(OUT)) {
  console.error(`FAIL: ${OUT} already exists. Remove it first -- this builds a payload from scratch`);
  console.error('      and refuses to write into a directory it did not create.');
  process.exit(1);
}

const HERE = __dirname;
const run = (script, args) => {
  process.stdout.write(`\n--- ${script} ---\n`);
  execFileSync('node', [path.join(HERE, script), ...args], { stdio: 'inherit' });
};
const MB = n => (n / 1048576).toFixed(1);
const sizeOf = dir => {
  let t = 0;
  (function walk(d) {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      if (e.name === '.git') continue;
      const p = path.join(d, e.name);
      if (e.isDirectory()) walk(p); else if (e.isFile()) t += fs.statSync(p).size;
    }
  })(dir);
  return t;
};

/* ---- 1. a real copy ---------------------------------------------------------------------------
 * cp -a, not cp -al. Hardlinks would make the patchers write THROUGH into the clone -- which
 * happened on 2026-08-17 and left the deploy clone dirty before a push. The copy is ~900 MB and
 * takes a moment; that is the correct price. */
console.log(`copying ${SRC} -> ${OUT} (a real copy, not hardlinks)`);
fs.mkdirSync(OUT, { recursive: true });
execFileSync('cp', ['-a', `${SRC}/.`, OUT]);
fs.rmSync(path.join(OUT, '.git'), { recursive: true, force: true });

/* ---- 2. the patcher chain --------------------------------------------------------------------- */
run('stamp_version.js', LABEL ? [OUT, '--set', LABEL, '--apply'] : [OUT, '--sync', '--apply']);
run('fix_root_authority.js', [OUT]);
run('add_media_root.js', [OUT, '--apply']);
run('build_ios_variant.js', [OUT, '--apply']);
run('add_safe_area.js', [OUT]);

/* ---- 3. asset packs: OFF by default ------------------------------------------------------------
 * The physician's call, 2026-08-17: v1 bundles all the artwork and audio in the app. ~830 MB, well
 * inside Apple's 4 GB ceiling, and it buys the thing the app is actually sold on -- every gallery
 * page and every recording available offline the moment it installs, on every supported iOS
 * version rather than only 26+.
 *
 * What that decision REMOVES is the point: no Background Assets capability, no downloader
 * extension question I could not answer from a container, no packs submitted for App Review
 * separately from the build, and no seam between a WKWebView and a container directory. Three
 * unverified pieces become zero. RC_MEDIA_ROOT stays unset, so rcMedia() returns its argument and
 * media resolves exactly as it does on the website -- the patcher stays in the chain because it
 * costs nothing and keeps the streaming option one string away.
 *
 * The cost is honest and worth stating: an artwork change now needs a new binary and a new review.
 *
 * --asset-packs restores the stripping for whoever revisits this. plan_asset_packs.js,
 * build_asset_pack_manifests.js and native/manifests/ are all still here and still current. */
const PACKS = process.argv.includes('--asset-packs');
let removed = 0, bytes = 0;
if (PACKS) {
  const planPath = path.join(HERE, '..', 'native', 'asset-packs.json');
  if (!fs.existsSync(planPath)) {
    console.error(`FAIL: ${planPath} not found -- run scripts/plan_asset_packs.js first`);
    process.exit(1);
  }
  const plan = JSON.parse(fs.readFileSync(planPath, 'utf8'));
  const packFiles = plan.packs.flatMap(p => p.files);
  const absent = [];
  for (const rel of packFiles) {
    const p = path.join(OUT, rel);
    if (!fs.existsSync(p)) { absent.push(rel); continue; }
    bytes += fs.statSync(p).size;
    fs.rmSync(p);
    removed++;
  }
  /* A file in the plan that is not in the tree means the plan is stale -- regenerate it rather than
     shipping a payload whose pack list does not match what exists. */
  if (absent.length) {
    console.error(`\nFAIL: ${absent.length} planned pack file(s) are not in the tree, e.g. ${absent.slice(0, 3).join(', ')}`);
    console.error('      The pack plan is stale. Re-run scripts/plan_asset_packs.js --manifest and try again.');
    process.exit(1);
  }
}
/* ---- 4. keep ONLY what the app can request -----------------------------------------------------
 * A hand-written list of junk was the first version of this, and it left 53 MB behind -- the eight
 * stale root gallery directories, four superseded MP3s, staging copies of the USMLE banks. The size
 * check caught it (137.6 MB against a planned 84), which is the whole reason that check exists.
 *
 * So the rule is inverted: the payload keeps exactly the set measure_bundle.js resolves as
 * reachable, and drops everything else. Same resolver, imported rather than reimplemented, so the
 * bundle and the measurement can never disagree about what the app needs.
 *
 * Resolved against the SOURCE tree, not this copy -- under --asset-packs the pack files are already
 * gone by now and resolving here would mark every gallery page unreachable. */
const { resolve } = require(path.join(HERE, 'measure_bundle.js'));
const keep = new Set(resolve(SRC).referenced.keys());
/* Netlify's own files are referenced by the resolver (it models a web deploy) and are meaningless
   in a bundle: no headers engine, no robots, no build config.
   _redirects is the exception and it STAYS, at ~600 bytes. Nothing in the app bundle reads it --
   a Universal Link hands /c/<id> to the app and the router takes it from there, with no server in
   the path. But scripts/netlifysim.js reads it, and dropping it made verify_ios_variant.js report
   "/c/dvt opens the condition -- view=null" on a payload whose routing is perfectly fine. That is
   the harness losing sight of the mechanism, which this project has now hit three times (Range,
   _headers, and here). Keeping one inert file so the same guard runs against both trees is the
   cheaper side of that trade. */
for (const f of ['_headers', 'robots.txt', 'netlify.toml', 'package.json']) keep.delete(f);

let junkBytes = 0, junkN = 0;
(function sweep(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const abs = path.join(d, e.name);
    const rel = path.relative(OUT, abs);
    if (e.isDirectory()) { sweep(abs); continue; }
    if (keep.has(rel)) continue;
    junkBytes += fs.statSync(abs).size; junkN++;
    fs.rmSync(abs);
  }
})(OUT);

/* Directories left empty by the two passes are noise in the bundle; removed bottom-up, after both. */
(function prune(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true }))
    if (e.isDirectory()) prune(path.join(d, e.name));
  if (d !== OUT && fs.readdirSync(d).length === 0) fs.rmdirSync(d);
})(OUT);

/* ---- report ------------------------------------------------------------------------------------ */
const total = sizeOf(OUT);
console.log(`\n=== payload ===`);
console.log(`  mode                      : ${PACKS ? 'asset packs (media stripped out)' : 'BUNDLE ALL (media included)'}`);
if (PACKS) console.log(`  stripped into asset packs : ${removed} files, ${MB(bytes)} MB`);
console.log(`  removed as unreachable    : ${junkN} files, ${MB(junkBytes)} MB`);
console.log(`  PAYLOAD                   : ${MB(total)} MB`);

/* A payload far off the expected size means something was stripped that should not have been, or
   not stripped that should. Warn rather than fail -- the number moves as content grows. */
const EXPECT = PACKS ? 84 : 826;
if (total / 1048576 > EXPECT * 1.6 || total / 1048576 < EXPECT * 0.6) {
  console.log(`\n  ! expected roughly ${EXPECT} MB.`);
  console.log(`    Off by that much means the resolved file set and the tree disagree -- check before shipping.`);
}
if (!PACKS) {
  /* The one number a reviewer of this build will ask about. Say it here rather than leaving it to
     be discovered in App Store Connect. */
  console.log(`\n  Bundled build: the App Store download will be roughly this size. Apple's ceiling is 4 GB.`);
}
console.log(`\nnext: node scripts/verify_ios_variant.js ${OUT}`);
console.log(`      then copy ${OUT} into the Capacitor project as its webDir.`);
