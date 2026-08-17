#!/usr/bin/env node
/* One privacy policy that covers both platforms, rather than two that drift.
 *
 * Surface 1.4 of app-store-checklist.md §1, decided 2026-08-14 and deliberately held until there
 * was an iOS app to describe. Apple links the privacy URL from the listing, so a reader arriving
 * from the App Store must find a policy that describes the app they just looked at -- and today's
 * policy describes the website, which has accounts.
 *
 * The alternative was a separate /privacy/ios/. That doubles the maintenance of a legal document,
 * which is the exact trap scripts/build_legal_pages.js exists to avoid, and the two would disagree
 * within a release or two.
 *
 * TWO EDITS, and the split matters:
 *
 *   The KEY paragraph gets platform-qualified. It is the highlighted box at the top and the part a
 *   reviewer actually reads, and today it says flatly that we hold your email address -- which is
 *   true of the website and false of the app.
 *
 *   A NEW FIRST SECTION states the difference once, plainly, so nothing further down has to hedge.
 *   It is written to read correctly in BOTH builds: the iOS variant rewrites the key paragraph and
 *   the deletion section, but this section is true as-is on either, so it needs no variant handling.
 *
 * THIS BREAKS scripts/build_ios_variant.js UNTIL THAT SCRIPT IS UPDATED, on purpose. It anchors on
 * the exact current wording of the key paragraph and will abort rather than half-apply -- which is
 * the behaviour you want, and is why that update ships in the same commit as this one.
 *
 * After running: re-run `node scripts/build_legal_pages.js <root> --apply` so the public pages
 * match, then the iOS chain, then verify_ios_variant.js.
 *
 * Usage: node scripts/add_platform_privacy.js <site-root> [--apply]
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2];
const APPLY = process.argv.includes('--apply');
if (!ROOT) { console.error('usage: add_platform_privacy.js <site-root> [--apply]'); process.exit(2); }

const file = path.join(ROOT, 'index.html');
let s = fs.readFileSync(file, 'utf8');
const before = s.length;

if (s.includes("{h:'The website and the iOS app'")) {
  console.error('FAIL: the platform section is already present -- run against a fresh tree');
  process.exit(1);
}

function sub(name, needle, replacement) {
  const n = s.split(needle).length - 1;
  if (n !== 1) {
    console.error(`FAIL: ${name}: expected 1 occurrence, found ${n}`);
    console.error(`  looked for: ${JSON.stringify(needle.slice(0, 90))}`);
    process.exit(1);
  }
  s = s.replace(needle, replacement);
  console.log(`  ${name}`);
}

/* ---- 1. the short version, qualified by platform ------------------------------------------- */
sub('privacy key: qualified by platform',
  "  key:'Rounds Codex has no analytics, no advertising and no trackers. Access is by invitation and '+\n" +
  "      'needs an account, so we hold your email address; nothing else about you. Your bookmarks, '+\n" +
  "      'quiz progress and practice history stay <b>on your device</b>. The one exception is described '+\n" +
  "      'below: if you use Ask Rounds Codex, your question is sent to us so it can be answered.',",
  "  key:'Rounds Codex has no analytics, no advertising and no trackers. The <b>website</b> is '+\n" +
  "      'invitation-only, so we hold the email address you sign in with and nothing else about you; '+\n" +
  "      'the <b>iOS app</b> has no account at all and we hold nothing. On both, your bookmarks, quiz '+\n" +
  "      'progress and practice history stay <b>on your device</b>. The one exception is described '+\n" +
  "      'below: if you use Ask Rounds Codex, your question is sent to us so it can be answered.',");

/* ---- 2. the platform section, first, before anything that depends on it ---------------------- */
sub('privacy: new first section',
  "  sections:[\n   {h:'What is stored on your device', p:[",
  "  sections:[\n" +
  "   {h:'The website and the iOS app', p:[\n" +
  "    'Rounds Codex runs in two places and they differ in exactly one way. The <b>website</b> at '+\n" +
  "    'roundscodex.com is invitation-only: you sign in with an email address, and that address is the '+\n" +
  "    'one thing about you held on our server. The <b>iOS app</b> has no accounts \\u2014 there is no '+\n" +
  "    'sign-in, nothing is asked of you, and nothing about you is held anywhere.',\n" +
  "    'Everything else on this page applies equally to both.']},\n\n" +
  "   {h:'What is stored on your device', p:[");

/* ---- assertions ------------------------------------------------------------------------------ */
const checks = [
  ['platform section present',   /\{h:'The website and the iOS app', p:\[/.test(s)],
  ['it is the FIRST section',    /sections:\[\n   \{h:'The website and the iOS app'/.test(s)],
  ['key names both platforms',   /The <b>website<\/b> is '\+\n\s+'invitation-only/.test(s)],
  ['key no longer states a bare "we hold your email address"',
   !/needs an account, so we hold your email address/.test(s)],
  ['device-storage section survives', /\{h:'What is stored on your device', p:\[/.test(s)],
  ['deletion section untouched', /\{h:'Deleting your account', p:\[/.test(s)],
  /* The generator refuses to emit app-only markup on a static page, so anything added here has to
     survive that guard. Cheaper to catch now than as a thrown build. */
  ['no app-only markup added',   !/onclick=|href="#"|javascript:/.test(
    (s.match(/\{h:'The website and the iOS app'[\s\S]{0,900}?\]\},/) || [''])[0])],
];
let bad = 0;
console.log('');
for (const [name, ok] of checks) { console.log(`  ${ok ? 'ok  ' : 'FAIL'} ${name}`); if (!ok) bad++; }
if (bad) { console.error(`\n${bad} assertion(s) failed -- not writing`); process.exit(1); }

{
  const blocks = [...s.matchAll(/<script(?![^>]*\ssrc=)[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]);
  let n = 0;
  for (const code of blocks) {
    if (!code.trim()) continue;
    try { new Function(code); n++; } catch (e) {
      console.error(`FAIL: an inline <script> no longer parses: ${e.message}`); process.exit(1);
    }
  }
  console.log(`  ok   all ${n} inline <script> blocks parse`);
}

console.log(`\nindex.html: ${before} -> ${s.length} bytes (+${s.length - before})`);
console.log('NEXT: build_legal_pages.js --apply, then the iOS chain (build_ios_variant.js was');
console.log('      updated for the new wording in the same commit).');
if (APPLY) { fs.writeFileSync(file, s); console.log('\nwritten'); }
else { console.log('\ndry run -- pass --apply to write'); }
