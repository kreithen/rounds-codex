#!/usr/bin/env node
/* build_asset_packs.js <web-clone> <out-dir> [--copy] [--only <pack-id>]
 *
 * Emit the Play Asset Delivery modules that carry the 742 MB of gallery artwork and audio the
 * Android base module cannot. HANDOFF-android-app.md §4.3, option A.
 *
 * WHY THIS EXISTS AT ALL. Apple's ceiling is 4 GB, so iOS v1 bundles everything and needs none of
 * this. Play caps the base module at 200 MB of compressed download, which is a limit on the upload
 * rather than a warning, so on Android the media has to leave the base module. There are two ways
 * out (packs, or streaming via RC_MEDIA_ROOT) and this is the one that keeps the offline claim the
 * app is actually sold on.
 *
 * THE LAYOUT IS THE WHOLE EXPERIMENT, AND IT IS NOT VERIFIED. Capacitor serves www/ out of
 * assets/public/ in the base APK, through AndroidProtocolHandler -> context.getAssets(). Install-time
 * asset packs are delivered as split APKs and their assets are reachable through that same
 * AssetManager. So IF the merged asset namespace behaves as documented, laying a pack's files out at
 *
 *     src/main/assets/public/assets/<gallery-id>/<file>
 *
 * -- byte-for-byte where the base module would have put them -- means WebViewLocalServer finds them
 * with no code change anywhere, no plugin, and no Java. That is the hypothesis. NOBODY HAS RUN IT.
 * A container has no Android SDK (dl.google.com is blocked by the agent proxy), so this script makes
 * the experiment cheap and correct-by-construction as far as reasoning goes, and native/ANDROID-RUNBOOK.md
 * step 6 is where it gets its answer: build, install, Airplane Mode, open a gallery.
 *
 * If it fails, the fallback is RC_MEDIA_ROOT streaming and nothing here is wasted -- the plan, the
 * manifests and the payload's --asset-packs mode are shared by both routes.
 *
 * SIZES, CHECKED 2026-09-09 RATHER THAN ASSUMED. Play allows up to 1.5 GB per asset pack; the
 * largest here is rc-cardiac at 148 MB, so the handoff's "≤ ~100 MB each" was describing the
 * manifests and not a limit, and no repacking is needed. 742 MB total sits well inside the
 * install-time allowance.
 *
 * PACK IDS ARE STABLE AND MUST STAY THAT WAY. Renaming a shipped pack makes it a new pack and every
 * device re-downloads it -- native/asset-packs.json says so at the top and it is the reason this
 * script reads ids from that file rather than deriving them from category names.
 *
 * Usage:
 *   node scripts/build_asset_packs.js <web-clone> <out-dir>              skeletons only (fast)
 *   node scripts/build_asset_packs.js <web-clone> <out-dir> --copy       + the 742 MB of assets
 *   node scripts/build_asset_packs.js <web-clone> <out-dir> --copy --only rc-ob-and-peds
 */
'use strict';
const fs = require('fs');
const path = require('path');

const SRC = process.argv[2], OUT = process.argv[3];
const COPY = process.argv.includes('--copy');
const oAt = process.argv.indexOf('--only');
const ONLY = oAt > -1 ? process.argv[oAt + 1] : null;
if (!SRC || !OUT) {
  console.error('usage: build_asset_packs.js <web-clone> <out-dir> [--copy] [--only <pack-id>]');
  process.exit(2);
}

const PLAN = path.join(__dirname, '..', 'native', 'asset-packs.json');
if (!fs.existsSync(PLAN)) { console.error(`FAIL: ${PLAN} not found -- run scripts/plan_asset_packs.js`); process.exit(1); }
const plan = JSON.parse(fs.readFileSync(PLAN, 'utf8'));

const MB = n => (n / 1048576).toFixed(1);

/* ---- the plan must still match the tree ------------------------------------------------------
 * A file in the plan that is not in the clone means the plan is stale, and shipping a pack whose
 * list does not match what exists is how a gallery goes half-missing on a device. Same check the
 * payload builder makes, for the same reason. */
const missing = [];
const seen = new Map();
for (const p of plan.packs) {
  for (const rel of p.files) {
    if (seen.has(rel)) { console.error(`FAIL: ${rel} is in both ${seen.get(rel)} and ${p.id}`); process.exit(1); }
    seen.set(rel, p.id);
    if (!fs.existsSync(path.join(SRC, rel))) missing.push(rel);
  }
}
if (missing.length) {
  console.error(`FAIL: ${missing.length} planned file(s) are not in ${SRC}, e.g. ${missing.slice(0, 3).join(', ')}`);
  console.error('      The pack plan is stale. Re-run scripts/plan_asset_packs.js --manifest.');
  process.exit(1);
}

const packs = plan.packs.filter(p => !ONLY || p.id === ONLY);
if (ONLY && !packs.length) { console.error(`FAIL: no pack named ${ONLY}`); process.exit(1); }

fs.mkdirSync(OUT, { recursive: true });
console.log('--- build_asset_packs.js ---');
console.log(`  plan: ${plan.packs.length} packs, ${seen.size} files, ${MB(plan.packs.reduce((a, b) => a + b.bytes, 0))} MB`);
if (ONLY) console.log(`  --only ${ONLY}`);
console.log(`  mode: ${COPY ? 'COPY (assets included)' : 'skeleton only (build files + file lists)'}`);
console.log('');

let copied = 0, copiedBytes = 0;
for (const p of packs) {
  const dir = path.join(OUT, p.id);
  fs.mkdirSync(dir, { recursive: true });

  /* The asset-pack module's own build file. `install-time` is the delivery mode that makes the
     files present from first launch, which is the only mode that preserves "offline from install".
     fast-follow and on-demand both need the Play Core API called from Java, i.e. a native plugin --
     out of scope for v1 and noted as option C in the handoff. */
  fs.writeFileSync(path.join(dir, 'build.gradle'),
`// ${p.id} -- ${p.category}: ${p.galleries.length} galleries, ${p.files.length} files, ${MB(p.bytes)} MB.
// Generated by scripts/build_asset_packs.js. Do not rename packName after this has shipped:
// a renamed pack is a new pack and every device re-downloads it.
plugins { id 'com.android.asset-pack' }

assetPack {
    packName = "${p.id}"
    dynamicDelivery {
        // install-time: present from first launch, no Play Core call, no Java.
        deliveryType = "install-time"
    }
}
`);

  /* The file list ships beside the module so the copy can be repeated, audited or done on another
     machine without re-deriving it from the plan. */
  fs.writeFileSync(path.join(dir, 'files.txt'), p.files.join('\n') + '\n');

  if (COPY) {
    for (const rel of p.files) {
      /* assets/public/<rel> -- exactly where the base module would have put it. */
      const dest = path.join(dir, 'src', 'main', 'assets', 'public', rel);
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.copyFileSync(path.join(SRC, rel), dest);
      copied++; copiedBytes += fs.statSync(dest).size;
    }
  }
  console.log(`  ${p.id.padEnd(24)} ${String(p.files.length).padStart(5)} files  ${MB(p.bytes).padStart(7)} MB${COPY ? '  copied' : ''}`);
}

/* ---- the two lines that wire the packs into the app ------------------------------------------ */
const ids = plan.packs.map(p => p.id);
const wiring = `// Generated by scripts/build_asset_packs.js -- paste into the Capacitor Android project.
//
// 1. android/settings.gradle -- after the existing include lines:

${ids.map(i => `include ':${i}'`).join('\n')}

// 2. android/app/build.gradle -- inside android { }:

    assetPacks = [${ids.map(i => `":${i}"`).join(', ')}]

// 3. Copy each pack directory into android/ so the module path matches the include above:
//
//      android/${ids[0]}/build.gradle
//      android/${ids[0]}/src/main/assets/public/assets/<gallery-id>/...
//
// 4. npx cap sync android, then Build > Generate Signed App Bundle.
//
// THEN THE EXPERIMENT (native/ANDROID-RUNBOOK.md step 6): install on an emulator, turn on Airplane
// Mode, open a gallery and open a full-size page. If it renders, the merged AssetManager namespace
// works as documented and option A is settled. If it 404s, stop and take the RC_MEDIA_ROOT fallback
// rather than spending a day on it.
`;
fs.writeFileSync(path.join(OUT, 'WIRING.txt'), wiring);

console.log('');
console.log(`  wrote ${packs.length} module(s) to ${OUT}`);
if (COPY) console.log(`  copied ${copied} files, ${MB(copiedBytes)} MB`);
else console.log('  skeletons only -- re-run with --copy to include the assets');
console.log(`  WIRING.txt has the settings.gradle and app/build.gradle lines`);
console.log('');
console.log(`next: node scripts/verify_asset_packs.js ${OUT}${COPY ? '' : '   (after --copy)'}`);
