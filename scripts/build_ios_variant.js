#!/usr/bin/env node
/* Build the iOS variant of index.html: no login wall, and no surface that claims an account exists.
 *
 * Task #43. This is the inverse of scripts/restore_login_wall.js, and the decision behind it was
 * taken on 2026-08-14: the wall stays on the WEB, and the App Store build has no accounts at all.
 * Apple does not allow an app to require registration unless registration buys the user something,
 * and this account buys nothing -- bookmarks, quiz scores and the review queue are all localStorage
 * and sync nowhere. Removing it also makes the "Data Not Collected" privacy label truthful and
 * removes the demo-account obligation.
 *
 * IT IS A BUILD-TIME VARIANT, NOT A FORK. One source tree, one script, run against a COPY of the
 * shipped tree on the way to the archive. Nothing here should ever be committed back into the web
 * app's index.html -- run it, verify it, wrap it.
 *
 * Removing the wall is the easy third of the job. THREE OF THE FOUR SURFACES ARE CONTENT, NOT CODE,
 * and each is a real rejection risk on its own:
 *
 *   1. My account -> "Signed in"     three controls (the address, Sign out, Delete my account) that
 *                                    cannot do anything with no account. Guideline 2.1, App
 *                                    Completeness -- the same shape as the gallery PDF stub that
 *                                    survived for months precisely because it looked plausible.
 *                                    rcAccountEmail() falls back to the literal string 'Signed in',
 *                                    so this block does NOT look broken in testing. That is why it
 *                                    needs a variant and not a runtime `if`.
 *   2. My account -> Subscription     "invitation-only while in development" is simply false here.
 *   3. Privacy -> the short version   "we hold your email address" contradicts a "Data Not Collected"
 *      and "Deleting your account"    label outright. Guideline 2.3.1, and the one a reviewer would
 *                                    have found rather than us.
 *
 * The fourth surface is the PUBLIC /privacy/ page that Apple links from the listing. That is a web
 * deploy, not a build step -- it is handled by adding a platform paragraph to RC_LEGAL in the web
 * index.html and re-running scripts/build_legal_pages.js. Out of scope here on purpose; see
 * app-store-checklist.md 1.4.
 *
 * THE DEAD HELPERS GO TOO, and that was not the first plan. rcSignOut(), rcDeleteAccount(),
 * rcDelMsg(), rcAccountEmail() and RC_SB_URL lose their only call site when the "Signed in" section
 * goes, and the precedent in this codebase (rcShareGallery, kept after v74 removed its button) says
 * to keep an unreachable function and comment it. The `no invitation copy left` assertion below is
 * what changed the answer: those functions carry user-facing prose -- "Access is invitation-only,
 * so you would need a new invitation to come back" -- and shipping that string inside a binary
 * whose privacy label says there is no account is the kind of contradiction that is only ever found
 * by someone else. Cutting them also takes the Supabase project URL out of the iOS bundle, which is
 * a free win. The region is bounded and every reference to it is asserted gone.
 *
 * Verify with: node scripts/verify_ios_variant.js <site-root>
 *   -- which fails 8/8 against the unmodified web build, so it is a guard and not decoration.
 *
 * Usage: node scripts/build_ios_variant.js <site-root> [--apply]
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2];
const APPLY = process.argv.includes('--apply');
if (!ROOT) { console.error('usage: build_ios_variant.js <site-root> [--apply]'); process.exit(2); }

const file = path.join(ROOT, 'index.html');
let s = fs.readFileSync(file, 'utf8');
const before = s.length;
const before_bases = (s.match(/<base /g) || []).length;

const MARKER = 'RC_IOS_VARIANT';
if (s.includes(MARKER)) {
  console.error('FAIL: this tree is already an iOS variant. Run against a fresh copy of the web build.');
  process.exit(1);
}

const log = [];
function surgery(name, fn) {
  const was = s.length;
  fn();
  log.push(`  ${name}: ${was} -> ${s.length} (${s.length - was >= 0 ? '+' : ''}${s.length - was})`);
}
function once(needle) {
  const n = s.split(needle).length - 1;
  if (n !== 1) { console.error(`FAIL: expected exactly 1 occurrence of ${JSON.stringify(needle.slice(0, 70))}, found ${n}`); process.exit(1); }
}
function sub(needle, replacement) { once(needle); s = s.replace(needle, replacement); }

/* ---------------------------------------------------------------- 1. the login wall
 * Walked, not byte-offset: the region is the HTML comment, the <div id="rc-authgate"> block
 * including its inline <style>, and the auth <script> immediately after. The walk steps over
 * <style> and <script> bodies so a "</div>" inside a stylesheet or a JS string cannot end it early.
 * The gate id is rc-authgate, NOT rc-gate -- rc-gate is the medical disclaimer, and the two
 * colliding is what suppressed the disclaimer for days before v82. Do not relax this to /rc-gate/. */
surgery('login wall', () => {
  const MARK = '<!-- Rounds Codex login wall';
  const start = s.indexOf(MARK);
  if (start < 0) { console.error('FAIL: no login wall found -- is this the web build?'); process.exit(1); }
  const divAt = s.indexOf('<div id="rc-authgate"', start);
  if (divAt < 0) { console.error('FAIL: the wall comment is present but its div is not'); process.exit(1); }

  let depth = 0, end = -1, p = divAt;
  while (p < s.length) {
    if (s.startsWith('<style', p))  { p = s.indexOf('</style>',  p) + 8; continue; }
    if (s.startsWith('<script', p)) { p = s.indexOf('</script>', p) + 9; continue; }
    if (s.startsWith('<div', p))    { depth++; p += 4; continue; }
    if (s.startsWith('</div>', p))  { depth--; if (depth === 0) { end = p + 6; break; } p += 6; continue; }
    p++;
  }
  if (end < 0) { console.error("FAIL: could not find the wall div's closing tag"); process.exit(1); }

  const sOpen = s.indexOf('<script', end);
  const gap = s.slice(end, sOpen);
  if (sOpen < 0 || gap.trim() !== '') {
    console.error(`FAIL: expected the auth script immediately after the wall, found ${JSON.stringify(gap.slice(0, 60))}`);
    process.exit(1);
  }
  const sClose = s.indexOf('</script>', sOpen) + 9;
  const block = s.slice(start, sClose);

  // assert we are cutting what we think we are, before cutting it
  for (const m of ['supabase.co', 'id="rc-authgate"', 'window.rcLogout', 'Sign in', 'RC_OPEN_ROUTES']) {
    if (!block.includes(m)) { console.error(`FAIL: the block to remove lacks ${m}`); process.exit(1); }
  }
  // and that it does not straddle the disclaimer, which lives further down and must survive
  if (block.includes('rcTermsGate') || block.includes('RC_TERMS')) {
    console.error('FAIL: the block overlaps the disclaimer code - aborting rather than removing it');
    process.exit(1);
  }
  console.log(`  wall block: ${block.length} bytes (${(block.length / 1024).toFixed(1)} kB)`);

  s = s.slice(0, start) +
      '<!-- Rounds Codex ' + MARKER + ': the login wall is removed for the App Store build.\n' +
      '     The wall stays on the web. Built by scripts/build_ios_variant.js -- do not hand-edit.\n' +
      '     The "Signed in" account section and its helpers are removed further down. -->\n' +
      '<script>window.' + MARKER + '=1;</script>\n' +
      s.slice(sClose);
});

/* ---------------------------------------------------------------- 2. My account -> Subscription
 * "invitation-only while in development" is false with no accounts. The <b>Free</b> plan row above
 * it is true on both platforms and is left alone. */
surgery('Subscription copy', () => {
  sub(
    "      '<p class=\"ab-fine\">Rounds Codex is invitation-only while in development, and there is nothing '+\n" +
    "      'to pay for. When subscriptions arrive, your plan and billing will appear here.</p></div>'+",
    "      '<p class=\"ab-fine\">Rounds Codex is free while in development. There is nothing to buy and no '+\n" +
    "      'subscription to manage. If subscriptions arrive, your plan and billing will appear here.</p></div>'+"
  );
});

/* ---------------------------------------------------------------- 3. My account -> "Signed in"
 * The whole section goes. Three controls that cannot act, on an app with no accounts, is the
 * Guideline 2.1 finding. Nothing replaces it: an empty section header saying "you have no account"
 * is worse than no section -- it raises a question the reader never had. */
surgery('"Signed in" section', () => {
  const OPEN = "    '<div class=\"ab-sec\"><h4>Signed in</h4>'+";
  const CLOSE = "      '<div id=\"rc-del-msg\" class=\"ab-fine\"></div></div>'+";
  once(OPEN); once(CLOSE);
  const a = s.indexOf(OPEN);
  const b = s.indexOf(CLOSE, a);
  if (b < 0) { console.error('FAIL: the "Signed in" section does not close where expected'); process.exit(1); }
  const block = s.slice(a, b + CLOSE.length);
  // it must be the block we think: all three controls, and nothing beyond them
  for (const m of ['rcSignOut()', 'rcDeleteAccount()', 'rcAccountEmail()']) {
    if (!block.includes(m)) { console.error(`FAIL: the "Signed in" block lacks ${m}`); process.exit(1); }
  }
  if (block.includes('ab-stat') || block.includes('Your data')) {
    console.error('FAIL: the "Signed in" block runs past its section - aborting'); process.exit(1);
  }
  s = s.slice(0, a) +
      "    /* " + MARKER + ": the \"Signed in\" section is removed - this build has no accounts. */\n" +
      s.slice(b + CLOSE.length + 1);   // +1 eats the trailing newline, leaving no blank line
});

/* ------------------------------------------------- 3b. the helpers that section was the only caller of
 * A contiguous region between accountHTML()'s closing brace and function accountReset(): the two
 * comments, RC_SB_URL, rcDelMsg, rcDeleteAccount, rcAccountEmail, rcSignOut. accountReset() is NOT
 * in it -- "Clear my saved data" is the one control on that page that still does something, and it
 * is the control the privacy page now points at, so losing it would be the worst outcome here. */
surgery('dead account helpers', () => {
  const OPEN = '/* The wall keeps the signed-in address in localStorage under its own key.';
  const CLOSE = 'function accountReset(){';
  once(OPEN); once(CLOSE);
  const a = s.indexOf(OPEN);
  const b = s.indexOf(CLOSE, a);
  if (b < 0) { console.error('FAIL: accountReset() does not follow the account helpers'); process.exit(1); }
  const block = s.slice(a, b);
  for (const m of ['var RC_SB_URL=', 'function rcDelMsg(', 'function rcDeleteAccount(',
                   'function rcAccountEmail(', 'function rcSignOut(']) {
    if (!block.includes(m)) { console.error(`FAIL: the helper region lacks ${m}`); process.exit(1); }
  }
  // nothing else may be hiding in there -- a future edit could drop a live function into this gap
  const fns = (block.match(/^function (\w+)\(/gm) || []).map(m => m.slice(9, -1));
  const EXPECT = ['rcDelMsg', 'rcDeleteAccount', 'rcAccountEmail', 'rcSignOut'];
  if (fns.join(',') !== EXPECT.join(',')) {
    console.error(`FAIL: the helper region declares [${fns}], expected [${EXPECT}] - aborting`);
    process.exit(1);
  }
  s = s.slice(0, a) +
      '/* ' + MARKER + ': RC_SB_URL, rcDelMsg, rcDeleteAccount, rcAccountEmail and rcSignOut are\n' +
      '   removed here. They existed only for the "Signed in" section, which this build does not\n' +
      '   have. They stay in the web build; do not port this deletion back. */\n' +
      s.slice(b);
  // and now nothing may still call them
  for (const ref of ['rcSignOut', 'rcDeleteAccount', 'rcAccountEmail', 'rcDelMsg', 'RC_SB_URL']) {
    const hits = (s.match(new RegExp(ref, 'g')) || []).length;
    const allowed = 1;                       // the replacement comment names each one once
    if (hits > allowed) {
      console.error(`FAIL: ${ref} still referenced ${hits} time(s) after removal - a live caller survives`);
      process.exit(1);
    }
  }
});

/* ---------------------------------------------------------------- 4. My account -> Your data
 * One clause, easy to miss because the paragraph is otherwise true: "not attached to your account"
 * presumes an account. */
surgery('"Your data" wording', () => {
  sub("'not sent anywhere and are not attached to your account, so they do not follow you to another '+",
      "'not sent anywhere and are not attached to any account, so they do not follow you to another '+");
});

/* ---------------------------------------------------------------- 5. Privacy -> the short version
 * This is the sentence that contradicts a "Data Not Collected" label. It is the first thing on the
 * privacy page, in the highlighted box, so it is also the sentence a reviewer actually reads.
 *
 * The Ask Rounds Codex carve-out is KEPT and is deliberate: asend() really does POST the question
 * text and the mode to /.netlify/functions/ask. That is a live transmission on iOS too, and it is
 * the one thing on this page that a "Data Not Collected" label has to be reconciled with. Saying so
 * plainly here is the honest position; see the note in verify_ios_variant.js. */
surgery('privacy short version', () => {
  sub(
    "  key:'Rounds Codex has no analytics, no advertising and no trackers. Access is by invitation and '+\n" +
    "      'needs an account, so we hold your email address; nothing else about you. Your bookmarks, '+\n" +
    "      'quiz progress and practice history stay <b>on your device</b>. The one exception is described '+\n" +
    "      'below: if you use Ask Rounds Codex, your question is sent to us so it can be answered.',",
    "  key:'Rounds Codex has no analytics, no advertising and no trackers. There is no account and no '+\n" +
    "      'sign-in, so we hold nothing about you at all. Your bookmarks, quiz progress and practice '+\n" +
    "      'history stay <b>on your device</b>. The one exception is described below: if you use Ask '+\n" +
    "      'Rounds Codex, your question is sent to us so it can be answered.',"
  );
});

/* ---------------------------------------------------------------- 6. Privacy -> Deleting your account
 * Replaced rather than deleted. A privacy policy that simply omits deletion invites the question
 * "so how do I get my data out?"; the honest answer on this build is that there is nothing held to
 * delete, and the on-device data has its own control. Same heading position, so the page's shape
 * is unchanged. */
surgery('privacy deletion section', () => {
  sub(
    "   {h:'Deleting your account', p:[\n" +
    "    'You can delete your account from inside the app at any time: <b>My account &rarr; Delete my '+\n" +
    "    'account</b>. That permanently removes your email address and your sign-in from our server. It '+\n" +
    "    'takes effect immediately and cannot be undone, and because access is by invitation you would '+\n" +
    "    'need a new invitation to come back.',\n" +
    "    'Deleting your account does not touch anything saved on this device. Use <b>Clear my saved '+\n" +
    "    'data</b> for that, or do both.']},",
    "   {h:'Accounts', p:[\n" +
    "    'This app has no accounts. You are not asked to register, sign in or give an email address, and '+\n" +
    "    'there is nothing about you held on our server to delete.',\n" +
    "    'Everything the app remembers is on this device. You can erase all of it at any time from '+\n" +
    "    '<b>My account &rarr; Clear my saved data</b>.']},"
  );
});

/* ---------------------------------------------------------------- assertions
 * Each one names a way this could have gone wrong, and several of them would have caught a real
 * historical bug in this codebase. */
const checks = [
  ['wall markup gone',            !/id="rc-authgate"/.test(s)],
  ['wall script gone',            !/RC_OPEN_ROUTES/.test(s) && !/rc\.app\.passkey\.v1'\)/.test(s)],
  ['no static id="rc-gate"',      !/id="rc-gate"/.test(s)],
  ['disclaimer builder intact',   /function rcTermsGate\(\)/.test(s)],
  ['disclaimer show intact',      /function rcGateShow\(/.test(s)],
  ['disclaimer overlay CSS',      /#rc-gate\{position:fixed/.test(s)],
  ['no "Signed in" section',      !/<h4>Signed in<\/h4>/.test(s)],
  ['no Sign out control',         !/onclick="rcSignOut\(\)"/.test(s)],
  ['no Delete account control',   !/onclick="rcDeleteAccount\(\)"/.test(s)],
  ['no invitation copy left',     !/invitation/i.test(s)],
  ['no "we hold your email"',     !/hold your email address/.test(s)],
  ['Clear my saved data intact',  /onclick="accountReset\(\)"/.test(s)],
  ['no supabase endpoint left',   !/supabase\.co/.test(s)],
  ['variant marker present',      s.includes('window.' + MARKER + '=1')],
  /* Not "<= 1": the file mentions <base> twice, once in a comment explaining why the tag is written
     by the RC_ROOT head script rather than hard-coded. The invariant is that this build ADDS none --
     a second real <base> is what breaks the native bundle specifically. */
  ['no <base> tag added',         (s.match(/<base /g) || []).length === (before_bases)],
  ['<base> still written once',   (s.match(/document\.write\('<base /g) || []).length === 1],
];
let bad = 0;
console.log('');
for (const [name, ok] of checks) { console.log(`  ${ok ? 'ok  ' : 'FAIL'} ${name}`); if (!ok) bad++; }
if (bad) { console.error(`\n${bad} assertion(s) failed -- not writing`); process.exit(1); }

/* The structural check the assertions cannot give: the result must still parse. The content split
 * means index.html is code only, so a broken string concatenation in accountHTML() or RC_LEGAL is a
 * blank app, not a visible error. */
{
  const scripts = [...s.matchAll(/<script(?![^>]*\ssrc=)[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]);
  let n = 0;
  for (const code of scripts) {
    if (!code.trim()) continue;
    try { new Function(code); n++; }
    catch (e) { console.error(`FAIL: an inline <script> no longer parses: ${e.message}`); process.exit(1); }
  }
  console.log(`  ok   all ${n} inline <script> blocks parse`);
}

console.log('\nsurgeries:');
log.forEach(l => console.log(l));
console.log(`\nindex.html: ${before} -> ${s.length} bytes (${s.length - before})`);
if (APPLY) { fs.writeFileSync(file, s); console.log('written'); }
else { console.log('dry run -- pass --apply to write'); }
