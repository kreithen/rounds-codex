#!/usr/bin/env node
/* add_android_to_legal.js <app-root> [--apply]
 *
 * Make the privacy policy describe TWO apps instead of one. Runs against the WEB tree — this is a
 * real content change to the shipped policy, not a build-time variant.
 *
 * WHY IT IS A BLOCKER RATHER THAN A TIDY-UP. Google Play's listing form requires a public privacy
 * policy URL and a reviewer follows it. Ours resolves to /privacy/, generated from RC_LEGAL, and it
 * currently says the product "runs in two places", names the *iOS app* three times, and never
 * mentions Android. A reviewer reading it while reviewing an Android app is reading a policy that
 * does not cover the thing in front of them, next to a Data safety form that declares no data
 * collected. That is the kind of contradiction that gets found by someone else.
 *
 * THE THREE PLACES, and there are exactly three — the rest of the file's "iOS" hits are code
 * comments about Safari's download and share behaviour, which are correctly iOS-specific and are
 * left alone:
 *   1. privacy.key            the short version, in the highlighted box at the top
 *   2. privacy.sections[0].h  the platform section's heading
 *   3. privacy.sections[0].p  its body
 *
 * THE HEADING GOES GENERIC ON PURPOSE. "The website and the apps" rather than "the iOS and Android
 * apps": the body names the platforms, the heading does not have to, and a generic heading does not
 * need editing again when a third platform arrives. The BODY keeps the platform names, because that
 * is the sentence a reviewer needs to be able to point at.
 *
 * WHAT DOES NOT CHANGE, and this is the substance of the policy rather than its wording: the app
 * still has no account and holds nothing, the website is still invitation-only, and the one
 * difference between them is still exactly one difference. Android changes the count, not the
 * meaning. If that ever stops being true this script is the wrong tool.
 *
 * VERSION BUMPED, RE-ACCEPTANCE NOT TRIGGERED — checked rather than assumed. The first-run gate
 * compares `RC_TERMS.accepted()` against the global `RC_TERMS_VERSION` (2026-07-26), NOT against
 * the per-document `version` field this script edits. So bumping the privacy document's own version
 * and date updates what the page displays and does not re-prompt anyone. Bumping RC_TERMS_VERSION
 * would re-prompt every user on their next visit, and this change does not warrant that: the terms
 * are unchanged and the policy's substance is unchanged.
 *
 * RUN build_legal_pages.js AFTER THIS. The public /privacy/ page is generated from RC_LEGAL and
 * will otherwise be stale — which its own --check catches, and which this script's closing note
 * repeats because a stale public policy is the exact failure this is meant to prevent.
 *
 * The iOS/Android VARIANT (scripts/build_ios_variant.js) anchors on the sentences below and will
 * abort rather than half-apply if they drift. That is correct behaviour and it is why this change
 * and the variant's anchors have to land in one commit.
 *
 * THIS IS THE UPGRADER; scripts/add_platform_privacy.js IS THE INSTALLER. That script wrote the
 * platform section in the first place (2026-08-14) and correctly refuses to run against a tree that
 * already has it -- the same installer/upgrader split as add_condition_audio.js and
 * upgrade_audio_player.js. It is now historical: its anchors describe the pre-Android wording and
 * it cannot run. Do not "fix" it to match this change; read it for why the section exists.
 *
 * Usage: node scripts/add_android_to_legal.js <app-root> [--apply]
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2];
const APPLY = process.argv.includes('--apply');
if (!ROOT) { console.error('usage: add_android_to_legal.js <app-root> [--apply]'); process.exit(2); }

const FILE = path.join(ROOT, 'index.html');
let s = fs.readFileSync(FILE, 'utf8');
const before = s.length;
/* The file mentions iOS in code comments too -- Safari's download and share quirks -- and those are
   correctly iOS-specific. Count them OUTSIDE the legal literal before editing, so the assertion at
   the end can prove the edit did not wander into them. Measured, not asserted from reading. */
const outsideLegal = t => {
  const a = t.indexOf('var RC_LEGAL='), b = t.indexOf('function rcTermsGate(');
  return (t.slice(0, a) + t.slice(b > 0 ? b : t.length)).match(/iOS/g) || [];
};
const iosOutsideBefore = outsideLegal(s).length;

const MARK = 'The website and the apps';
if (s.includes(MARK)) { console.log('already applied -- nothing to do'); process.exit(0); }

const log = [];
function sub(name, needle, replacement) {
  const n = s.split(needle).length - 1;
  if (n !== 1) {
    console.error(`FAIL: ${name}: expected exactly 1 occurrence of ${JSON.stringify(needle.slice(0, 90))}, found ${n}`);
    process.exit(1);
  }
  s = s.replace(needle, replacement);
  log.push(`  ${name}`);
}

console.log('--- add_android_to_legal.js ---');

/* ---- 1. the short version -------------------------------------------------------------------
 * "On both" meant website-and-app. With two apps it would have to mean three things, so it becomes
 * "In every case", which is the same promise and does not need counting. */
sub('privacy: the short version',
  "      'the <b>iOS app</b> has no account at all and we hold nothing. On both, your bookmarks, quiz '+\n" +
  "      'progress and practice history stay <b>on your device</b>. The one exception is described '+\n" +
  "      'below: if you use Ask Rounds Codex, your question is sent to us so it can be answered.',",
  "      'the <b>iOS and Android apps</b> have no account at all and we hold nothing. In every case, '+\n" +
  "      'your bookmarks, quiz progress and practice history stay <b>on your device</b>. The one '+\n" +
  "      'exception is described below: if you use Ask Rounds Codex, your question is sent to us so '+\n" +
  "      'it can be answered.',");

/* ---- 2. the platform section's heading ------------------------------------------------------- */
sub('privacy: platform section heading',
  "   {h:'The website and the iOS app', p:[",
  "   {h:'The website and the apps', p:[");

/* ---- 3. its body -----------------------------------------------------------------------------
 * "runs in two places" is now wrong by one. Recast so it does not count at all: the sentence is
 * about the website differing from the apps, and how many apps there are is not the point. */
sub('privacy: platform section body',
  "    'Rounds Codex runs in two places and they differ in exactly one way. The <b>website</b> at '+\n" +
  "    'roundscodex.com is invitation-only: you sign in with an email address, and that address is the '+\n" +
  "    'one thing about you held on our server. The <b>iOS app</b> has no accounts \\u2014 there is no '+\n" +
  "    'sign-in, nothing is asked of you, and nothing about you is held anywhere.',\n" +
  "    'Everything else on this page applies equally to both.']},",
  "    'Rounds Codex runs as a website and as apps, and they differ in exactly one way. The '+\n" +
  "    '<b>website</b> at roundscodex.com is invitation-only: you sign in with an email address, and '+\n" +
  "    'that address is the one thing about you held on our server. The <b>iOS and Android apps</b> '+\n" +
  "    'have no accounts \\u2014 there is no sign-in, nothing is asked of you, and nothing about you is '+\n" +
  "    'held anywhere.',\n" +
  "    'Everything else on this page applies equally to all of them.']},");

/* ---- 4. the document's own version and date --------------------------------------------------
 * Display-only: the gate reads RC_TERMS_VERSION, not this. Anchored on the privacy document's line
 * specifically -- the terms document has an identically shaped line and must not move. */
sub('privacy: version and date',
  "  title:'Privacy', version:'2026-08-09', updated:'2026-08-09',",
  "  title:'Privacy', version:'2026-09-09', updated:'2026-09-09',");

/* ---- assertions ------------------------------------------------------------------------------ */
const legalStart = s.indexOf('var RC_LEGAL=');
const legalEnd = s.indexOf('function rcTermsGate(');
const legal = s.slice(legalStart, legalEnd > 0 ? legalEnd : undefined);

const checks = [
  ['no "iOS app" left in the legal text', !/iOS app/.test(legal)],
  ['Android is named',                    /iOS and Android apps/.test(legal)],
  ['named in both the box and the body',  (legal.match(/iOS and Android apps/g) || []).length === 2],
  ['platform section still exists',       /\{h:'The website and the apps', p:\[/.test(legal)],
  ['website still invitation-only',       /invitation-only/.test(legal)],
  ['still "no accounts"',                 /have no accounts/.test(legal)],
  ['terms version untouched',             /var RC_TERMS_VERSION='2026-07-26';/.test(s)],
  ['terms document untouched',            /title:'Terms &amp; Conditions', version:'2026-07-26', updated:'2026-07-26',/.test(s)],
  /* The Safari comments are iOS-specific and correct; this proves the edit did not reach them. */
  ['iOS code comments untouched',         outsideLegal(s).length === iosOutsideBefore],
];
let bad = 0;
console.log('');
for (const [name, ok] of checks) { console.log(`  ${ok ? 'ok  ' : 'FAIL'} ${name}`); if (!ok) bad++; }
if (bad) { console.error(`\n${bad} assertion(s) failed -- not writing`); process.exit(1); }

/* The result must still parse: RC_LEGAL is string concatenation inside an inline <script>, and a
   broken quote there is a blank app rather than a visible error. */
{
  const scripts = [...s.matchAll(/<script(?![^>]*\ssrc=)[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]);
  let n = 0;
  for (const code of scripts) { if (!code.trim()) continue; try { new Function(code); n++; } catch (e) {
    console.error(`FAIL: an inline <script> no longer parses: ${e.message}`); process.exit(1); } }
  console.log(`  ok   all ${n} inline <script> blocks parse`);
}

console.log('\nsurgeries:');
log.forEach(l => console.log(l));
console.log(`\nindex.html: ${before} -> ${s.length} bytes (${s.length - before >= 0 ? '+' : ''}${s.length - before})`);
if (APPLY) {
  fs.writeFileSync(FILE, s);
  console.log('written: index.html');
  console.log('\nNEXT, and not optional:');
  console.log('  node scripts/build_legal_pages.js <app-root> --apply   # /privacy/ is generated and is now stale');
  console.log('  node scripts/build_legal_pages.js <app-root> --check   # proves it is not');
} else {
  console.log('dry run -- pass --apply to write');
}
