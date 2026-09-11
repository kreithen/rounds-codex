#!/usr/bin/env node
/**
 * make_assetlinks.js — write (or check) /.well-known/assetlinks.json for Android App Links.
 *
 * Why this exists rather than hand-writing eight lines of JSON: App Links fail SILENTLY.
 * A wrong relation string, a lowercase namespace, a fingerprint with one pair transposed —
 * none of it errors anywhere. The link simply opens in Chrome instead of the app, and the
 * only signal is `adb shell pm get-app-links`, which nobody runs a week later. The order in
 * ANDROID-RUNBOOK.md step 7 also means this file is written under time pressure, straight
 * after reading a 95-character fingerprint out of a Play Console page.
 *
 *   node scripts/make_assetlinks.js <SHA256> [outfile]     write it
 *   node scripts/make_assetlinks.js --check <file>         validate one that exists
 *   --package <id>   override com.roundscodex.app
 *
 * The fingerprint is Play Console -> Test and release -> App integrity -> App signing key
 * certificate -> "SHA-256 certificate fingerprint". NOT the upload key: Play re-signs the
 * bundle, so the upload key's fingerprint produces a file that verifies against nothing.
 */
const fs = require('fs');

const DEFAULT_PACKAGE = 'com.roundscodex.app';
const RELATION = 'delegate_permission/common.handle_all_urls';

function normaliseFingerprint(raw) {
  const s = String(raw).trim().replace(/\s+/g, '');
  const hex = s.replace(/:/g, '').toUpperCase();
  if (!/^[0-9A-F]{64}$/.test(hex)) {
    const looksLikeSha1 = /^[0-9A-F]{40}$/.test(hex);
    throw new Error(
      looksLikeSha1
        ? `that is a SHA-1 fingerprint (${hex.length / 2} bytes). App Links need SHA-256 (32 bytes); ` +
          'Play Console shows both on the same page.'
        : `not a SHA-256 fingerprint: got ${hex.length / 2} bytes of hex, need 32. ` +
          'Expected 32 colon-separated pairs, e.g. AB:CD:...:EF'
    );
  }
  return hex.match(/../g).join(':');
}

function build(pkg, fingerprint) {
  return [{
    relation: [RELATION],
    target: {
      namespace: 'android_app',
      package_name: pkg,
      sha256_cert_fingerprints: [fingerprint],
    },
  }];
}

/**
 * Returns {bad, warn}. `bad` is non-empty only for something that will NOT verify;
 * a cosmetic difference goes in `warn` and does not fail. A checker that fails a file
 * Google would accept is the kind that gets ignored.
 */
function check(doc, pkg) {
  const bad = [];
  const warn = [];
  if (!Array.isArray(doc)) return { bad: ['top level is not an array — Digital Asset Links is a list of statements'], warn: [] };
  if (doc.length === 0) bad.push('no statements');
  doc.forEach((st, i) => {
    const at = `statement ${i}`;
    if (!Array.isArray(st.relation) || !st.relation.includes(RELATION)) {
      bad.push(`${at}: relation must include "${RELATION}" (got ${JSON.stringify(st.relation)})`);
    }
    const t = st.target || {};
    if (t.namespace !== 'android_app') bad.push(`${at}: namespace must be "android_app" (got ${JSON.stringify(t.namespace)})`);
    if (t.package_name !== pkg) bad.push(`${at}: package_name is ${JSON.stringify(t.package_name)}, expected "${pkg}"`);
    const fps = t.sha256_cert_fingerprints;
    if (!Array.isArray(fps) || fps.length === 0) {
      bad.push(`${at}: sha256_cert_fingerprints missing or empty`);
    } else {
      fps.forEach((fp, j) => {
        try {
          const norm = normaliseFingerprint(fp);
          // Case and separators do not affect verification — this is cosmetic, so it
          // warns rather than fails. Canonical form keeps a later diff readable.
          if (norm !== fp) warn.push(`${at}: fingerprint ${j} is not in canonical AB:CD:… uppercase form`);
        } catch (e) {
          bad.push(`${at}: fingerprint ${j}: ${e.message}`);
        }
      });
    }
  });
  return { bad, warn };
}

function main() {
  const argv = process.argv.slice(2);
  let pkg = DEFAULT_PACKAGE;
  const pi = argv.indexOf('--package');
  if (pi !== -1) { pkg = argv[pi + 1]; argv.splice(pi, 2); }

  const ci = argv.indexOf('--check');
  if (ci !== -1) {
    const file = argv[ci + 1];
    if (!file) { console.error('--check needs a file'); process.exit(2); }
    let doc;
    try { doc = JSON.parse(fs.readFileSync(file, 'utf8')); }
    catch (e) { console.error(`FAIL: ${file} is not valid JSON — ${e.message}`); process.exit(1); }
    const { bad, warn } = check(doc, pkg);
    warn.forEach(w => console.error(`warn: ${w}`));
    if (bad.length) { bad.forEach(b => console.error(`FAIL: ${b}`)); process.exit(1); }
    console.log(`OK  ${file}: ${doc.length} statement(s), package ${pkg}, fingerprint ${doc[0].target.sha256_cert_fingerprints[0]}`);
    return;
  }

  const [fp, out] = argv;
  if (!fp) {
    console.error('usage: node scripts/make_assetlinks.js <SHA256-fingerprint> [outfile]');
    console.error('       node scripts/make_assetlinks.js --check <file>');
    console.error('  SHA-256 comes from Play Console -> App integrity -> App signing key certificate.');
    process.exit(2);
  }
  let norm;
  try { norm = normaliseFingerprint(fp); }
  catch (e) { console.error(`FAIL: ${e.message}`); process.exit(1); }

  const doc = build(pkg, norm);
  const text = JSON.stringify(doc, null, 2) + '\n';

  // Round-trip: never emit something the checker would reject.
  const self = check(JSON.parse(text), pkg);
  if (self.bad.length || self.warn.length) {
    [...self.bad, ...self.warn].forEach(b => console.error(`FAIL(self): ${b}`));
    process.exit(1);
  }

  if (out) { fs.writeFileSync(out, text); console.log(`wrote ${out}`); }
  else process.stdout.write(text);
  console.error(`package ${pkg}, fingerprint ${norm}`);
  console.error('Deploy to the APP repo at .well-known/assetlinks.json and give _headers the');
  console.error('  /.well-known/assetlinks.json  Content-Type: application/json  line the AASA has.');
}

if (require.main === module) main();
module.exports = { normaliseFingerprint, build, check, RELATION, DEFAULT_PACKAGE };
