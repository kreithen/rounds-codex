#!/usr/bin/env node
/* Make the app's account and privacy copy true again, now that the login wall is back (v82).
 *
 * Restoring the wall left three reader-facing statements FALSE, one of them on the privacy page,
 * which is a legal surface:
 *
 *   1. Privacy, "the short version": "Rounds Codex has no accounts, no analytics, no advertising
 *      and no trackers." The app now shows a sign-in wall. Saying it has no accounts while asking
 *      for a password is the kind of contradiction that undermines every other privacy claim on the
 *      page -- and the rest of those claims are true and worth keeping.
 *   2. My account -> Subscription: "There is no account to sign in to yet, and nothing to pay for."
 *   3. My account -> Your data: study data is "not tied to a name or an account."
 *
 * (3) is the subtle one and the fix has to be precise rather than sweeping. Bookmarks, quiz
 * progress and practice history really are still device-local and really are not tied to the
 * account -- nothing about the wall changed that. What changed is that an email address now exists
 * on Supabase. So the sentence is split rather than deleted: the study data claim stays, and the
 * account is described separately.
 *
 * Also adds what an account-bearing app needs and this one lacked: the signed-in address, and a way
 * out. Sign out is real -- window.rcLogout already exists and works.
 *
 * DELETE ACCOUNT IS DELIBERATELY NOT ADDED HERE. Apple Guideline 5.1.1(v) requires it, and it
 * cannot be done from the client: removing a Supabase auth user needs the service_role key, which
 * must never reach the browser. It needs the edge function in supabase/functions/delete-account/,
 * which cannot be deployed while the Supabase connector is down. Shipping a Delete button that
 * cannot delete would repeat the gallery PDF button that toasted a description of what it would
 * do and survived months because a test asserting "a toast appeared" passed on the broken build.
 *
 * Usage: node scripts/fix_account_copy.js <app-root> [--apply]
 */
const fs = require('fs');

const root = process.argv[2];
const APPLY = process.argv.includes('--apply');
if (!root) { console.error('usage: fix_account_copy.js <app-root> [--apply]'); process.exit(2); }

const p = `${root}/index.html`;
let s = fs.readFileSync(p, 'utf8');
const before = s.length;
const edits = [];

function sub(label, find, repl) {
  if (!s.includes(find)) { console.error(`FAIL  ${label}: anchor not found`); process.exit(1); }
  if (s.split(find).length - 1 !== 1) { console.error(`FAIL  ${label}: anchor is not unique`); process.exit(1); }
  s = s.replace(find, repl);
  edits.push(label);
}

// ---- 1. privacy, the short version
sub('privacy: no-accounts claim',
  "key:'Rounds Codex has no accounts, no analytics, no advertising and no trackers. Your bookmarks, '+",
  "key:'Rounds Codex has no analytics, no advertising and no trackers. Access is by invitation and '+\n" +
  "      'needs an account, so we hold your email address; nothing else about you. Your bookmarks, '+");

// ---- 2. account: subscription paragraph
sub('account: subscription paragraph',
  "'<p class=\"ab-fine\">There is no account to sign in to yet, and nothing to pay for. When '+\n" +
  "      'subscriptions arrive, your plan and billing will appear here.</p></div>'+",
  "'<p class=\"ab-fine\">Rounds Codex is invitation-only while in development, and there is nothing '+\n" +
  "      'to pay for. When subscriptions arrive, your plan and billing will appear here.</p></div>'+\n\n" +
  "    '<div class=\"ab-sec\"><h4>Signed in</h4>'+\n" +
  "      '<div class=\"ab-plan\"><b>'+rcAccountEmail()+'</b><span>Invitation-only access</span></div>'+\n" +
  "      '<p class=\"ab-fine\">Signing out leaves everything saved on this device untouched; you can '+\n" +
  "      'sign back in with the same address. Deleting your account is not available in the app yet '+\n" +
  "      '&mdash; email us and we will remove it.</p>'+\n" +
  "      '<button class=\"ab-danger\" onclick=\"rcSignOut()\">Sign out</button></div>'+");

// ---- 3. account: the "not tied to an account" sentence
sub('account: your-data paragraph',
  "'<p>Bookmarks, quiz progress and practice results are stored <b>on this device only</b>. They are '+\n" +
  "      'not sent anywhere, and they are not tied to a name or an account. That also means they do not '+\n" +
  "      'follow you to another device, and clearing your browser data clears them.</p>'+",
  "'<p>Bookmarks, quiz progress and practice results are stored <b>on this device only</b>. They are '+\n" +
  "      'not sent anywhere and are not attached to your account, so they do not follow you to another '+\n" +
  "      'device, and clearing your browser data clears them.</p>'+");

// ---- 4. the two helpers the new markup calls
sub('helpers',
  'function accountReset(){',
  "/* The wall keeps the signed-in address in localStorage under its own key. Read it directly\n" +
  "   rather than exporting the wall's getEmail(): the wall is a self-contained block that a\n" +
  "   re-run of restore_login_wall.js rewrites wholesale, and a reference into it would not\n" +
  "   survive that. */\n" +
  "function rcAccountEmail(){\n" +
  "  try{ return localStorage.getItem('rc.app.email.v1') || 'Signed in'; }catch(e){ return 'Signed in'; }\n" +
  "}\n" +
  "function rcSignOut(){\n" +
  "  if(!window.confirm('Sign out of Rounds Codex on this device?')) return;\n" +
  "  if(typeof window.rcLogout==='function'){ window.rcLogout(); return; }\n" +
  "  try{ localStorage.removeItem('rc.app.session.v1'); }catch(e){}\n" +
  "  location.reload();\n" +
  "}\n" +
  'function accountReset(){');

// ---- assertions
const checks = [
  ['no "has no accounts" claim survives', !/has no accounts/.test(s)],
  ['no "no account to sign in to yet"',   !/no account to sign in to yet/.test(s)],
  ['no "not tied to a name or an account"', !/not tied to a name or an account/.test(s)],
  ['privacy keeps the true claims',        /no analytics, no advertising and no trackers/.test(s)],
  ['device-only storage claim kept',       /stored <b>on this device only<\/b>/.test(s)],
  ['signed-in section added',              /Signed in<\/h4>/.test(s)],
  ['sign out wired to the real logout',    /rcSignOut\(\)/.test(s) && /window\.rcLogout/.test(s)],
  ['email helper added',                   /function rcAccountEmail\(\)/.test(s)],
  ['no Delete-account button shipped',    !/Delete (my )?account<\/button>/i.test(s)],
  ['clear-my-data control still there',    /accountReset\(\)/.test(s)],
];
let bad = 0;
for (const [n, ok] of checks) { console.log(`  ${ok ? 'ok  ' : 'FAIL'} ${n}`); if (!ok) bad++; }
console.log(`\nedits: ${edits.join(', ')}`);
console.log(`index.html: ${before} -> ${s.length} bytes (+${s.length - before})`);
if (bad) { console.error(`${bad} assertion(s) failed -- not writing`); process.exit(1); }
if (APPLY) { fs.writeFileSync(p, s); console.log('written'); }
else { console.log('dry run -- pass --apply to write'); }
