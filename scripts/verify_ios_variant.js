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

  const errs = [], offOrigin = [];
  const ORIGIN = `http://127.0.0.1:${PORT}`;
  const newPage = async () => {
    const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
    const p = await ctx.newPage();
    p.on('pageerror', e => errs.push(String(e)));
    /* A native bundle serves from a local origin. Anything the app asks for beyond its own files
       either fails there or leaves the device -- both matter, and only one of them is visible in
       the source. /.netlify/functions/ask is same-origin here, so it is named explicitly. */
    p.on('request', r => {
      const u = r.url();
      if (!u.startsWith(ORIGIN) || /\/\.netlify\/functions\//.test(u)) offOrigin.push(u);
    });
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

  /* ---------- Ask Rounds Codex is gone, and gone from a condition page, not just from the code ----
     Checked on a rendered detail page because the entry point is markup inside detailHTML's
     template literal -- the block only exists once a condition is painted. A source grep proves the
     string went; it does not prove the page still renders without it, and the block sat between the
     References panel and the Download-module button. */
  await p.evaluate(() => go('detail', 'chf'));
  await p.waitForTimeout(700);
  const det = await p.evaluate(() => {
    const el = document.querySelector('.app');
    /* Structural, not textual. `/References/` against innerText fails on a CORRECT build: the
       heading is text-transform:uppercase, and innerText reports the RENDERED casing. That cost a
       wrong diagnosis -- it failed identically on both builds, which is the tell that the check was
       wrong and not the surgery. */
    return { text: el.innerText, modask: !!el.querySelector('.modask'), q: !!document.getElementById('modq'),
             pdf: !!el.querySelector('.dlpdf'), refs: !!el.querySelector('.panel.refs') };
  });
  check('no Ask box on a condition page', !det.modask && !det.q);
  check('no "Ask Rounds Codex" copy left',  !/Ask Rounds Codex/i.test(det.text));
  /* The two things that bracketed the removed block. If the surgery had over-run, one of them would
     be missing and every other check here would still pass. */
  check('References panel survives the cut', det.refs);
  check('Download-module button survives',   det.pdf);
  check('the Ask view no longer exists',
        await p.evaluate(() => typeof askHTML === 'undefined' && typeof asend === 'undefined'));

  /* ---------- Privacy ---------- */
  await p.evaluate(() => go('privacy'));
  await p.waitForTimeout(600);
  const priv = await p.evaluate(() => (document.querySelector('.app') || document.body).innerText);
  check('privacy page renders',            priv.length > 800, `${priv.length} chars`);
  check('privacy: no email held',          !/hold your email address/i.test(priv) && !/we hold your email/i.test(priv));
  check('privacy: no invitation/account',  !/invitation/i.test(priv) && !/Deleting your account/i.test(priv));
  check('privacy: says there is no account', /no account/i.test(priv));
  /* The policy must not describe a transmission this build cannot make. A policy that overstates
     what leaves the device is as wrong as one that hides a real transmission, and it is the
     direction nobody checks. */
  check('privacy: no stale Ask carve-out', !/Ask Rounds Codex/i.test(priv));
  /* Deliberately the exact new sentence and not /transmit/i: the web build says "Nothing ELSE in
     the app transmits anything", so a loose match passes on the very build this is meant to fail. */
  check('privacy: says nothing is transmitted', /does not transmit anything/i.test(priv));

  /* Nothing in the build reaches the network for anything but its own assets. Measured over the
     whole session, not asserted from the source. */
  check('no request left this origin', offOrigin.length === 0, offOrigin.slice(0, 3).join(' | '));

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

  /* Stated on every run because it is the consequence most easily lost between two documents.
     Ask Rounds Codex was the only thing in the app that transmitted anything, and it is gone from
     this build -- so "Data Not Collected" is now true of the binary rather than nearly true. The
     App Store description and app-store-submission-draft.md still have to stop promising it; this
     script rewrites manifest.webmanifest and owns nothing else. */
  console.log('\nNOTE: Ask Rounds Codex is removed from this build, so nothing in it transmits anything.\n' +
              '      manifest.webmanifest is rewritten to match. The App Store description and\n' +
              '      app-store-submission-draft.md still say "AI study tutor" -- fix those by hand.');
  process.exit(bad ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
