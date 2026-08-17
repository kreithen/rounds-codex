#!/usr/bin/env node
/* Guard for the iOS variant (task #43). Drives the real app in a real browser and asserts that
 * nothing in it claims an account exists -- and, just as importantly, that removing the wall did
 * not take the medical disclaimer or the share routes with it.
 *
 * WHY THIS IS DRIVEN AND NOT GREPPED. Two of the three surfaces are strings inside JS string
 * concatenation that only becomes DOM when accountHTML() or legalBodyHTML() runs. A grep proves the
 * source changed; it does not prove the page renders, that accountHTML() still parses, or that the
 * privacy page is reachable. The content split means a broken concatenation is a BLANK APP, not an
 * error -- so the page has to be looked at.
 *
 * TWO THINGS THIS DOES DIFFERENTLY FROM EVERY OTHER VERIFIER IN THIS REPO, both load-bearing:
 *
 *   1. It does NOT call rc_test_auth.seedAuth(). Every other suite seeds a session to step around
 *      the wall. Seeding here would hide the entire bug class this file exists for -- a seeded
 *      session makes the wall call pass() and vanish, so a build with the wall still in it would
 *      pass. The context must be genuinely fresh.
 *   2. It HIT-TESTS the viewport centre. `document.querySelector('#rc-authgate')` returning null is
 *      necessary and not sufficient: what actually breaks a reviewer's first thirty seconds is a
 *      full-screen fixed overlay eating every tap, and elementFromPoint is what measures that. That
 *      is how the v82 wall's tap-swallowing was finally proved, after months of headless runs that
 *      never saw it.
 *
 * The disclaimer check is the mirror image and matters as much: #rc-gate MUST still appear on a
 * fresh run. The wall and the disclaimer collided on that id once and the disclaimer was silently
 * never built, for everyone, for days. A variant that removed both would look like a success here.
 *
 * Run against the unmodified web build and it fails 11 of 19 checks, naming each one -- including
 * the interception, with the overlay chain (#rc-login < div < #rc-authgate) printed. That is the
 * test that this file is a guard rather than decoration.
 *
 * Usage: RC_PW=<dir with node_modules/playwright-core> node scripts/verify_ios_variant.js <root> [port]
 */
'use strict';
const { chromium } = require(process.env.RC_PW + '/node_modules/playwright-core');
const { spawn } = require('child_process');
const path = require('path');

const ROOT = process.argv[2];
const PORT = Number(process.argv[3] || 8471);
if (!ROOT) { console.error('usage: verify_ios_variant.js <root> [port]'); process.exit(2); }

const results = [];
const check = (name, ok, detail) => { results.push([name, ok, detail]); };

(async () => {
  const srv = spawn('node', [path.join(__dirname, 'netlifysim.js'), ROOT, String(PORT)], { stdio: 'ignore' });
  await new Promise(r => setTimeout(r, 900));
  const browser = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox'] });

  const errs = [];
  const newPage = async () => {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
    const p = await ctx.newPage();
    p.on('pageerror', e => errs.push(String(e)));
    return { ctx, p };
  };

  /* ---------- first run, cold, no session seeded ---------- */
  const { ctx, p } = await newPage();
  await p.goto(`http://127.0.0.1:${PORT}/`, { waitUntil: 'domcontentloaded' });
  await p.waitForTimeout(3500);              // the content loader is still fetching content/*.json

  check('no #rc-authgate in the DOM', await p.evaluate(() => !document.getElementById('rc-authgate')));
  check('variant marker set',         await p.evaluate(() => window.RC_IOS_VARIANT === 1));

  /* The centre of the screen must belong to the disclaimer, not to a sign-in form. Reported as the
     id chain so a failure says WHICH overlay is in the way rather than just "not the disclaimer". */
  const centre = await p.evaluate(() => {
    let e = document.elementFromPoint(innerWidth / 2, innerHeight / 2), ids = [];
    while (e && ids.length < 8) { ids.push(e.id ? '#' + e.id : e.tagName.toLowerCase()); e = e.parentElement; }
    return ids.join(' < ');
  });
  check('viewport centre is not a sign-in wall', !/authgate|rc-login|rc-lock/.test(centre), centre);

  /* ---------- the disclaimer must SURVIVE the wall's removal ---------- */
  const gate = await p.$('#rc-gate');
  check('medical disclaimer still gates first run', !!gate);
  const ok = gate && await p.$('#rc-gate-ok');
  check('disclaimer has its accept control', !!ok);
  /* Clicked with a short timeout and NOT forced, because whether the click lands is the assertion.
     On the web build this is where the run stops: Playwright reports #rc-authgate's card
     intercepting pointer events, which is the tap-swallowing bug in one line. A forced click would
     have sailed through it and reported a green run on a build with the wall still in. */
  let accepted = false;
  if (ok) {
    try { await ok.click({ timeout: 2500 }); accepted = true; }
    catch (e) { check('disclaimer accept is reachable', false, String(e).split('\n')[0]); }
  }
  if (accepted) check('disclaimer accept is reachable', true);
  await p.waitForTimeout(500);

  /* Content actually loaded. A blank app from a broken string concatenation would otherwise sail
     past every DOM-absence check above -- absence is exactly what a blank app gives you. */
  const n = await p.evaluate(() => (typeof DATA !== 'undefined' && DATA.length) || 0);
  check('content loaded (183 conditions)', n === 183, `DATA.length=${n}`);

  /* ---------- My account ---------- */
  await p.evaluate(() => go('account'));
  await p.waitForTimeout(700);
  const acct = await p.evaluate(() => {
    const el = document.querySelector('.app') || document.body;
    return { text: el.innerText, html: el.innerHTML };
  });
  check('no "Signed in" section',       !/Signed in/.test(acct.text));
  check('no Sign out control',          !/rcSignOut/.test(acct.html) && !/\bSign out\b/.test(acct.text));
  check('no Delete my account control', !/rcDeleteAccount/.test(acct.html) && !/Delete my account/.test(acct.text));
  check('no invitation copy on the account page', !/invitation/i.test(acct.text));
  /* The one control on this page that must NOT disappear. The privacy page now points the reader at
     it by name, so losing it would leave the policy promising something the app cannot do. */
  check('"Clear my saved data" survives', /Clear my saved data/.test(acct.text));

  /* ---------- Privacy ---------- */
  await p.evaluate(() => go('privacy'));
  await p.waitForTimeout(600);
  const priv = await p.evaluate(() => (document.querySelector('.app') || document.body).innerText);
  check('privacy page renders',            priv.length > 800, `${priv.length} chars`);
  check('privacy: no email held',          !/hold your email address/i.test(priv) && !/we hold your email/i.test(priv));
  check('privacy: no invitation/account',  !/invitation/i.test(priv) && !/Deleting your account/i.test(priv));
  check('privacy: says there is no account', /no account/i.test(priv));

  await ctx.close();

  /* ---------- a share link still opens its condition ----------
     The wall carried RC_OPEN_ROUTES, the bypass that kept /c/<id> public. Removing the wall removes
     the bypass with it, which is correct -- but the routes themselves live in RC_ROOT and the
     router, and a surgery that clipped either would break every shared link with no visible error.
     Cold context again: a share link's reader has never opened the app. */
  {
    const { ctx: c2, p: p2 } = await newPage();
    await p2.goto(`http://127.0.0.1:${PORT}/c/dvt`, { waitUntil: 'domcontentloaded' });
    await p2.waitForTimeout(3500);
    const g2 = await p2.$('#rc-gate-ok');
    if (g2) { try { await g2.click({ timeout: 2500 }); } catch (e) { /* reported below as the view */ } }
    await p2.waitForTimeout(700);
    const st = await p2.evaluate(() => ({
      base: (document.querySelector('base') || {}).href || '',
      view: (typeof stack !== 'undefined' && stack.length) ? stack[stack.length - 1].v : null,
      text: (document.querySelector('.app') || document.body).innerText.slice(0, 400),
    }));
    check('/c/dvt opens the condition', st.view === 'detail' && /Deep Vein Thrombosis/i.test(st.text),
          `view=${st.view}`);
    check('<base> resolved to the site root', /\/$/.test(new URL(st.base || 'http://x/').pathname),
          st.base);
    await c2.close();
  }

  check('zero page errors', errs.length === 0, errs.slice(0, 3).join(' | '));

  await browser.close();
  srv.kill();

  let bad = 0;
  for (const [name, ok, detail] of results) {
    console.log(`  ${ok ? 'ok  ' : 'FAIL'} ${name}${detail && !ok ? '  -- ' + detail : ''}`);
    if (!ok) bad++;
  }
  console.log(bad ? `\n${bad}/${results.length} checks FAILED` : `\nall ${results.length} checks pass`);

  /* Stated on every run, pass or fail, because it is the one thing this file cannot settle and it
     is easy to read a green run as "the privacy label is now correct".
     Ask Rounds Codex POSTs the question text and the mode to /.netlify/functions/ask. That is a
     real transmission and it happens on iOS too, so "Data Not Collected" is a question for the
     physician and not a consequence of this variant. The privacy page discloses it in both builds. */
  console.log('\nNOTE: Ask Rounds Codex still POSTs question text to the server. Reconcile that with the\n' +
              '      App Store "Data Not Collected" label before submitting -- this variant does not.');
  process.exit(bad ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
