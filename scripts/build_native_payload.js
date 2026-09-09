#!/usr/bin/env node
/* Assemble the exact www/ directory a native app ships, and nothing else.
 *
 * One command between a clone of the web app and the tree Capacitor copies into the bundle. It
 * runs the patchers in order, drops every file the app cannot reach, and checks the result is the
 * size it should be.
 *
 * ONE CHAIN, TWO PLATFORMS. This was build_ios_payload.js until Android joined it (2026-09-09).
 * The tree it produces is BYTE-IDENTICAL for iOS and Android -- every patcher below is either
 * platform-neutral or inert on the platform it was not written for, which is checked rather than
 * assumed and recorded per step. --platform therefore changes no bytes; what it changes is the
 * SIZE RULE, because Apple allows 4 GB and Google Play does not (see step 5). A payload that is
 * fine on one store and unshippable on the other is the one thing the two builds do not share, so
 * it is the one thing the flag exists to say out loud.
 *
 * THE ORDER IS NOT ARBITRARY and each step depends on the one before:
 *   stamp_version        version.txt is the source of truth and RC_VERSION derives from it
 *   fix_root_authority   RC_ROOT keeps its host at capacitor://localhost, which has no path. Runs
 *                        before add_media_root because every media URL is resolved against it.
 *                        INERT ON ANDROID and kept anyway. Capacitor's Android shell serves from
 *                        https://localhost, and https is a WHATWG "special" scheme whose empty path
 *                        is normalised to "/" by the URL parser, so the strip the guard protects
 *                        against cannot bite there. Measured in this container's Chromium
 *                        (2026-09-09) rather than reasoned about, running RC_ROOT's own expression
 *                        over each origin:
 *                            https://localhost      -> href https://localhost/  -> RC_ROOT https://localhost/
 *                            capacitor://localhost  -> href capacitor://localhost -> RC_ROOT capacitor://
 *                        One line of difference, and it is the whole iOS bug. Scope of the claim:
 *                        that is new URL() in desktop Chromium, not location.href inside a real
 *                        Android WebView -- same URL serialiser and WebView is Chromium, but the
 *                        device reading has not been taken. The guard makes it moot either way.
 *   add_media_root       gallery pages, PDFs and audio resolve through RC_MEDIA_ROOT
 *   build_ios_variant    the wall, the account surfaces and Ask come out; anchors on the shipped
 *                        privacy wording, so it must run AFTER any RC_LEGAL change and will abort
 *                        loudly rather than half-apply if one landed that it does not know about.
 *                        Platform-neutral despite the name; its marker RC_IOS_VARIANT is kept
 *                        because 28 checks depend on the string, and renaming an implementation
 *                        detail is not worth breaking a guard for.
 *   fix_usmle_link       usmle/ -> usmle/index.html. NEEDED ON BOTH: Capacitor's Android
 *                        WebViewLocalServer routes an extensionless path back to the root
 *                        index.html, the same fallback as the iOS scheme handler, so usmle/ would
 *                        open the main app rather than the USMLE page.
 *   strip_service_worker the registration and sw.js come out. NEW FOR ANDROID and applied to both.
 *                        On iOS the worker could never run (WebKit does not run one on a custom
 *                        scheme); on Android it runs for real. See that script's header.
 *   add_safe_area        full-screen top/bottom insets. LAST, because it appends a stylesheet to
 *                        the head and every anchor above reads the head. env(safe-area-inset-*) is
 *                        what Android WebView populates under edge-to-edge too, so the same block
 *                        serves both -- but only if the activity opts into display-cutout layout;
 *                        that is a Capacitor/Gradle setting and belongs to native/ANDROID-RUNBOOK.md
 *                        section 3a, which measures how Capacitor 7 and 8 differ on it, rather than
 *                        to this script.
 *
 * WHY THE DROPPING IS DERIVED, NOT GLOBBED. What stays is what measure_bundle.js resolves as
 * reachable -- not a pattern. This tree keeps gallery pages in at least four different shapes:
 * assets/<id>/, a bare <id>/ directory, loose root JPEGs, and five *-upload folders that look
 * exactly like leftover staging and are live content. Any glob confident enough to catch the junk
 * is confident enough to delete something served.
 *
 * Usage: node scripts/build_native_payload.js <web-clone> <out-dir> --platform ios|android
 *                                             [--version v129-LABEL] [--asset-packs] [--allow-oversize]
 *
 * scripts/build_ios_payload.js is kept as an alias that supplies --platform ios.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const USAGE = 'usage: build_native_payload.js <web-clone> <out-dir> --platform ios|android ' +
             '[--version v129-LABEL] [--asset-packs] [--allow-oversize]';
const SRC = process.argv[2], OUT = process.argv[3];
const vAt = process.argv.indexOf('--version');
const LABEL = vAt > -1 ? process.argv[vAt + 1] : null;
const pAt = process.argv.indexOf('--platform');
/* Required, with no default. A default would be wrong for exactly one platform and silent about
   it, and the thing it selects is the check that stops an unshippable Android bundle. */
const PLATFORM = pAt > -1 ? process.argv[pAt + 1] : (process.env.RC_PLATFORM || null);
if (!SRC || !OUT) { console.error(USAGE); process.exit(2); }
if (PLATFORM !== 'ios' && PLATFORM !== 'android') {
  console.error(`FAIL: --platform must be ios or android (got ${JSON.stringify(PLATFORM)})`);
  console.error(USAGE);
  process.exit(2);
}
if (fs.existsSync(OUT)) {
  console.error(`FAIL: ${OUT} already exists. Remove it first -- this builds a payload from scratch`);
  console.error('      and refuses to write into a directory it did not create.');
  process.exit(1);
}

/* ---- the one thing the two stores do not share ------------------------------------------------
 * Apple's ceiling is 4 GB, so iOS v1 bundles all 826 MB and is comfortably inside it. Google Play
 * caps the BASE MODULE at 200 MB of compressed download -- a hard limit enforced at upload, not a
 * warning -- and separately shows a size warning on mobile data for any app whose install exceeds
 * 200 MB. A bundle-everything Android payload is therefore not a large app, it is a REJECTED
 * UPLOAD, and the place to find that out is here, in a second, rather than after a Gradle build
 * and an upload on the physician's Mac.
 *
 * The media leaves the base module one of two ways (HANDOFF-android-app.md 4.3): Play Asset
 * Delivery install-time packs, or RC_MEDIA_ROOT streaming. Both start from the same --asset-packs
 * payload, which is why one flag answers for both and the pack decision does not have to be settled
 * before this script can be run.
 *
 * --allow-oversize exists so an experiment is possible; it is not a normal path and says so. */
const PACKS = process.argv.includes('--asset-packs');
if (PLATFORM === 'android' && !PACKS && !process.argv.includes('--allow-oversize')) {
  console.error('FAIL: --platform android without --asset-packs would bundle ~826 MB into the base module.');
  console.error('      Google Play caps the base module at 200 MB compressed download. This upload would');
  console.error('      be rejected, so it is refused here instead of after a Gradle build.');
  console.error('      Pass --asset-packs (media is stripped for Play Asset Delivery or RC_MEDIA_ROOT');
  console.error('      streaming), or --allow-oversize if you are deliberately measuring the full tree.');
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
run('fix_usmle_link.js', [OUT]);
run('strip_service_worker.js', [OUT]);
run('add_safe_area.js', [OUT, '--platform', PLATFORM]);

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
/* PACKS is decided at the top, with the Play size guard that depends on it. */
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
const totalMB = total / 1048576;
console.log(`\n=== payload ===`);
console.log(`  platform                  : ${PLATFORM}`);
console.log(`  mode                      : ${PACKS ? 'asset packs (media stripped out)' : 'BUNDLE ALL (media included)'}`);
if (PACKS) console.log(`  stripped into asset packs : ${removed} files, ${MB(bytes)} MB`);
console.log(`  removed as unreachable    : ${junkN} files, ${MB(junkBytes)} MB`);
console.log(`  PAYLOAD                   : ${MB(total)} MB`);

/* A payload far off the expected size means something was stripped that should not have been, or
   not stripped that should. Warn rather than fail -- the number moves as content grows. */
const EXPECT = PACKS ? 84 : 826;
if (totalMB > EXPECT * 1.6 || totalMB < EXPECT * 0.6) {
  console.log(`\n  ! expected roughly ${EXPECT} MB.`);
  console.log(`    Off by that much means the resolved file set and the tree disagree -- check before shipping.`);
}

/* The store number, said here rather than left to be discovered in App Store Connect or rejected
   at upload. Two ceilings, two shapes of consequence: Apple's is a limit you are nowhere near,
   Play's is a limit that decides whether the artefact exists. */
if (PLATFORM === 'ios') {
  if (!PACKS) console.log(`\n  iOS: the App Store download will be roughly this size. Apple's ceiling is 4 GB.`);
} else {
  /* Compressed download is what Play measures and it is smaller than this figure -- the payload is
     mostly JPEG and MP3, which barely compress, so treat the two as the same number and leave the
     margin as margin. Being under on the uncompressed size is the only version of this check a
     container can actually make. */
  const LIMIT = 200;
  console.log(`\n  Android: Play caps the base module at ${LIMIT} MB compressed download.`);
  if (totalMB > LIMIT) {
    console.log(`  ! ${MB(total)} MB is OVER that. This will be rejected at upload.`);
    console.log(`    (You are seeing this because --allow-oversize was passed.)`);
  } else {
    console.log(`  ok  ${MB(total)} MB, with ${(LIMIT - totalMB).toFixed(1)} MB of headroom.`);
    if (PACKS) console.log(`      The stripped ${MB(bytes)} MB ships as Play Asset Delivery packs, or streams via`);
    if (PACKS) console.log(`      RC_MEDIA_ROOT. See HANDOFF-android-app.md 4.3 -- that decision is still open.`);
  }
}

console.log(`\nnext: RC_PW=<dir> node scripts/verify_ios_variant.js ${OUT}`);
console.log(`      then copy ${OUT} into the Capacitor project as its webDir, and cap sync ${PLATFORM}.`);
