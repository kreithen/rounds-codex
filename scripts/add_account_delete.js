#!/usr/bin/env node
/* Add the in-app "Delete my account" control to My account.
 *
 * Apple Guideline 5.1.1(v): an app that lets you create an account must let you delete it from
 * inside the app. Required as of v82, when the invitation-only login wall came back.
 *
 * DO NOT RUN THIS UNTIL THE EDGE FUNCTION IS DEPLOYED AND YOU HAVE CALLED IT SUCCESSFULLY.
 * The control cannot work without supabase/functions/delete-account/. Shipping the button first
 * would repeat the gallery PDF control that toasted a description of what it would do and survived
 * months because every test only checked that a toast appeared. --i-verified-the-function-works is
 * a required flag for exactly that reason: it makes the claim explicit rather than implicit.
 *
 * Deletion is irreversible, so the control asks twice: a confirm, then typing DELETE. That is not
 * ceremony -- the wall is invitation-only, so a user who deletes cannot sign back up on their own.
 *
 * The Supabase URL and anon key are duplicated here rather than read from the wall. That is
 * deliberate: restore_login_wall.js rewrites the wall block wholesale, so a reference into it would
 * not survive a re-run. Both values are public and already shipped in this file.
 *
 * Usage:
 *   node scripts/add_account_delete.js <app-root> [--apply] --i-verified-the-function-works
 */
const fs = require('fs');

const root = process.argv[2];
const APPLY = process.argv.includes('--apply');
const VERIFIED = process.argv.includes('--i-verified-the-function-works');
if (!root) { console.error('usage: add_account_delete.js <app-root> [--apply] --i-verified-the-function-works'); process.exit(2); }
if (APPLY && !VERIFIED) {
  console.error('refusing to --apply without --i-verified-the-function-works.\n' +
    'Deploy supabase/functions/delete-account first and call it once for real. A Delete button\n' +
    'that cannot delete is worse than no button.');
  process.exit(1);
}

const p = `${root}/index.html`;
let s = fs.readFileSync(p, 'utf8');
const before = s.length;

const OLD_LINE =
  "'<p class=\"ab-fine\">Signing out leaves everything saved on this device untouched; you can '+\n" +
  "      'sign back in with the same address. Deleting your account is not available in the app yet '+\n" +
  "      '&mdash; email us and we will remove it.</p>'+\n" +
  "      '<button class=\"ab-danger\" onclick=\"rcSignOut()\">Sign out</button></div>'+";

const NEW_LINE =
  "'<p class=\"ab-fine\">Signing out leaves everything saved on this device untouched; you can '+\n" +
  "      'sign back in with the same address.</p>'+\n" +
  "      '<button class=\"ab-danger\" onclick=\"rcSignOut()\">Sign out</button>'+\n" +
  "      '<p class=\"ab-fine\" style=\"margin-top:18px\">Deleting your account removes your email '+\n" +
  "      'address and sign-in from our server permanently. Access is by invitation, so you would '+\n" +
  "      'need a new invitation to return. Study data saved on this device is not affected &mdash; '+\n" +
  "      'use <b>Clear my saved data</b> below for that.</p>'+\n" +
  "      '<button class=\"ab-danger\" onclick=\"rcDeleteAccount()\">Delete my account</button>'+\n" +
  "      '<div id=\"rc-del-msg\" class=\"ab-fine\"></div></div>'+";

if (!s.includes(OLD_LINE)) { console.error('FAIL: could not find the Signed-in block from v83'); process.exit(1); }
s = s.replace(OLD_LINE, NEW_LINE);

const FN = `
/* ---- account deletion (Apple 5.1.1(v)) ----
   The delete itself happens in a Supabase edge function, because removing an auth user needs the
   service_role key and that key must never reach a browser. This sends only the caller's own
   access token; the function identifies the user from the token, never from the body. */
var RC_SB_URL='https://emdrmxscgmnfxgvimbqn.supabase.co';
function rcDelMsg(t,cls){
  var el=document.getElementById('rc-del-msg');
  if(el){ el.textContent=t||''; el.style.color=(cls==='err')?'#ff6b6b':(cls==='ok')?'#4ade80':''; }
}
function rcDeleteAccount(){
  if(!window.confirm('Delete your Rounds Codex account?\\n\\nThis removes your sign-in permanently. '+
                     'Access is invitation-only, so you would need a new invitation to come back.')) return;
  var typed=window.prompt('This cannot be undone.\\n\\nType DELETE to confirm.');
  if(!typed || typed.trim().toUpperCase()!=='DELETE'){ rcDelMsg('Cancelled — your account was not deleted.',''); return; }

  var tok='';
  try{ tok=(JSON.parse(localStorage.getItem('rc.app.session.v1')||'null')||{}).access_token||''; }catch(e){}
  if(!tok){ rcDelMsg('You are not signed in on this device.','err'); return; }

  rcDelMsg('Deleting your account…','');
  fetch(RC_SB_URL+'/functions/v1/delete-account',{
    method:'POST',
    headers:{'Authorization':'Bearer '+tok,'Content-Type':'application/json'}
  }).then(function(r){
    if(r.status===401){ rcDelMsg('Your session has expired. Sign out, sign in again, then retry.','err'); return null; }
    if(!r.ok){ throw new Error('status '+r.status); }
    return r.json();
  }).then(function(j){
    if(!j) return;
    /* Clear every local trace before reloading, so the next visit is a genuine first run rather
       than a signed-out shell holding the deleted account's email. */
    try{ ['rc.app.session.v1','rc.app.email.v1','rc.app.passkey.v1'].forEach(function(k){ localStorage.removeItem(k); }); }catch(e){}
    rcDelMsg('Your account has been deleted.','ok');
    setTimeout(function(){ location.href='/'; },1200);
  }).catch(function(){
    rcDelMsg('Could not delete right now. Please try again, or email us and we will remove it.','err');
  });
}
`;
s = s.replace('function rcAccountEmail(){', FN.trim() + '\nfunction rcAccountEmail(){');

const checks = [
  ['delete button added',      /rcDeleteAccount\(\)">Delete my account/.test(s)],
  ['handler added',            /function rcDeleteAccount\(\)/.test(s)],
  ['double confirmation',      /Type DELETE to confirm/.test(s)],
  ['token read from session',  /rc\.app\.session\.v1/.test(s)],
  ['token sent as Bearer',     /'Bearer '\+tok/.test(s)],
  ['no user id in the body',  !/user_id|userId/.test(FN)],
  ['401 handled distinctly',   /status===401/.test(s)],
  ['local keys cleared',       /rc\.app\.passkey\.v1'\]\.forEach/.test(s)],
  ['old "not available" line gone', !/not available in the app yet/.test(s)],
  ['sign out still present',   /rcSignOut\(\)">Sign out/.test(s)],
];
let bad = 0;
for (const [n, ok] of checks) { console.log(`  ${ok ? 'ok  ' : 'FAIL'} ${n}`); if (!ok) bad++; }
console.log(`\nindex.html: ${before} -> ${s.length} bytes (+${s.length - before})`);
if (bad) { console.error(`${bad} assertion(s) failed -- not writing`); process.exit(1); }
if (APPLY) { fs.writeFileSync(p, s); console.log('written'); }
else { console.log('dry run -- pass --apply (with the verification flag) to write'); }
