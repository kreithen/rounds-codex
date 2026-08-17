#!/usr/bin/env node
/* Guard for RC_MEDIA_ROOT. Four properties, in the order they matter.
 *
 * 1. THE WEB BUILD IS UNCHANGED. Not "looks fine" -- the same strings. Both builds are served side
 *    by side and driven through the same script, and every media URL the app constructs is compared
 *    exactly: gallery page srcs across a sample of galleries, thumbnails on the galleries index,
 *    the audio element's src after a real tap, and the PDF anchor's href. This is the check that
 *    proved the content split, and it catches what an assertion you thought to write would not.
 * 2. THE FULL PAGES ARE ROUTED and 3. THE THUMBNAILS ARE NOT. One expression in gframe() draws
 *    both, so this is the specific thing a careless edit breaks, and breaking it empties the browse
 *    surface in exactly the situation asset packs exist for.
 * 4. THE FALLBACK FIRES. RC_MEDIA_ROOT pointed at a dead path, and the image must end up resolved
 *    against RC_SHARE_ORIGIN rather than staying broken.
 *
 * Run against a build WITHOUT the patch and checks 2-4 fail, which is what makes this a guard.
 *
 * Usage: RC_PW=<dir with node_modules/playwright-core> node scripts/verify_media_root.js <patched> <unpatched> [port]
 */
'use strict';
const { chromium } = require(process.env.RC_PW + '/node_modules/playwright-core');
const { spawn } = require('child_process');
const path = require('path');

const NEW = process.argv[2], OLD = process.argv[3];
const PORT = Number(process.argv[4] || 8620);
if (!NEW || !OLD) {
  console.error('usage: verify_media_root.js <patched-root> <unpatched-root> [port]');
  process.exit(2);
}

const results = [];
const check = (name, ok, detail) => results.push([name, ok, detail]);

/* A sample rather than all 102: enough to cover the two base conventions that coexist on this site
   -- older galleries with base "assets/<id>/" and newer ones with base "" and the folder in file. */
const GALLERIES = ['chf', 'dvt', 'lung-cancer', 'hypothyroid', 'cardiac-arrest', 'pad'];

async function collect(page, port, mediaRoot) {
  await page.addInitScript(root => {
    if (root) window.RC_MEDIA_ROOT = root;
    try {
      localStorage.setItem('rc.app.session.v1', JSON.stringify(
        { access_token: 't', refresh_token: 't', expires_at: Date.now() + 3600e3 }));
    } catch (e) {}
  }, mediaRoot || '');
  await page.goto(`http://127.0.0.1:${port}/`, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(3500);
  const g = await page.$('#rc-gate-ok'); if (g) { try { await g.click({ timeout: 2500 }); } catch (e) {} }
  await page.waitForTimeout(400);

  const out = { pages: {}, thumbs: [], pdf: null, audio: null };

  for (const id of GALLERIES) {
    out.pages[id] = await page.evaluate(gid => {
      if (typeof GALLERIES === 'undefined' || !GALLERIES[gid]) return null;
      /* gframe(gid,i,false) is the full page; gframe(gid,i,true) is the thumb. Rendered into a
         detached node so nothing depends on which view happens to be open. */
      const d = document.createElement('div');
      d.innerHTML = [0, 1].map(i => gframe(gid, i, false)).join('') + gframe(gid, 0, true);
      return [...d.querySelectorAll('img')].map(im => im.getAttribute('src'));
    }, id);
  }

  /* The galleries index draws the thumbnails through a different code path (line ~6080), so it is
     read from the real rendered page rather than from gframe. */
  await page.evaluate(() => go('galleries'));
  await page.waitForTimeout(900);
  out.thumbs = await page.evaluate(() =>
    [...document.querySelectorAll('.app img')].slice(0, 12).map(i => i.getAttribute('src')));

  /* The PDF anchor, captured by intercepting the click rather than letting it navigate. */
  out.pdf = await page.evaluate(() => {
    const real = HTMLAnchorElement.prototype.click;
    let href = null;
    HTMLAnchorElement.prototype.click = function () { href = this.getAttribute('href'); };
    try { rcGalleryPDFTab('dvt'); } catch (e) { href = 'threw: ' + e.message; }
    HTMLAnchorElement.prototype.click = real;
    return href;
  });

  /* RCAP_EL is null until the first tap -- it is created inside the Play handler because a freshly
     built Audio element has no user gesture behind it. Reading window.RCAP_EL before that reports
     "no audio element" on a working build, so the real control is clicked. */
  await page.evaluate(() => go('detail', 'chf'));
  await page.waitForTimeout(800);
  const play = await page.$('.rcap-play, .rcap button, [onclick*="rcapToggle"]');
  if (play) { try { await play.click({ timeout: 2500 }); } catch (e) {} await page.waitForTimeout(600); }
  out.audio = await page.evaluate(() =>
    (window.RCAP_EL && (RCAP_EL.getAttribute('src') || RCAP_EL.src)) || null);

  return out;
}

(async () => {
  const s1 = spawn('node', [path.join(__dirname, 'netlifysim.js'), NEW, String(PORT)], { stdio: 'ignore' });
  const s2 = spawn('node', [path.join(__dirname, 'netlifysim.js'), OLD, String(PORT + 1)], { stdio: 'ignore' });
  await new Promise(r => setTimeout(r, 1000));
  const browser = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox'] });

  const ctxFor = async () => {
    const c = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
    return c;
  };

  /* ---------- 1. side by side, RC_MEDIA_ROOT unset ---------- */
  const cA = await ctxFor(), pA = await cA.newPage();
  const errsA = []; pA.on('pageerror', e => errsA.push(String(e)));
  const A = await collect(pA, PORT, null);
  const cB = await ctxFor(), pB = await cB.newPage();
  const B = await collect(pB, PORT + 1, null);

  const same = JSON.stringify(A) === JSON.stringify(B);
  check('web build is byte-identical to the unpatched build', same,
        same ? '' : firstDiff(A, B));
  check('the comparison actually saw something',
        Object.values(A.pages).every(v => v && v.length === 3) && A.thumbs.length > 0 && !!A.pdf,
        `pages=${Object.keys(A.pages).length} thumbs=${A.thumbs.length} pdf=${A.pdf} audio=${A.audio}`);
  check('zero page errors on the patched build', errsA.length === 0, errsA.slice(0, 2).join(' | '));
  await cA.close(); await cB.close();

  /* ---------- 2 + 3. RC_MEDIA_ROOT set ---------- */
  const ROOTURL = 'https://packs.example/rc';
  const cC = await ctxFor(), pC = await cC.newPage();
  const C = await collect(pC, PORT, ROOTURL);

  const fullPages = Object.values(C.pages).flatMap(v => (v || []).slice(0, 2));
  const thumbsFromGframe = Object.values(C.pages).map(v => (v || [])[2]).filter(Boolean);
  check('gallery pages resolve through RC_MEDIA_ROOT',
        fullPages.length > 0 && fullPages.every(u => u.startsWith(ROOTURL + '/')),
        fullPages.find(u => !u.startsWith(ROOTURL + '/')) || '');
  check('gframe thumbnails do NOT',
        thumbsFromGframe.length > 0 && thumbsFromGframe.every(u => !u.startsWith(ROOTURL)),
        thumbsFromGframe.find(u => u.startsWith(ROOTURL)) || '');
  check('galleries-index thumbnails do NOT',
        C.thumbs.length > 0 && C.thumbs.every(u => !u.startsWith(ROOTURL)),
        C.thumbs.find(u => u.startsWith(ROOTURL)) || '');
  check('gallery PDF resolves through RC_MEDIA_ROOT',
        !!C.pdf && C.pdf.startsWith(ROOTURL + '/'), String(C.pdf));
  check('audio resolves through RC_MEDIA_ROOT',
        !!C.audio && C.audio.startsWith(ROOTURL + '/'), String(C.audio));
  await cC.close();

  /* ---------- 4. the fallback ----------
     Pointing RC_MEDIA_ROOT at a dead path is NOT enough, and the first version of this check
     believed it was. gimgerr's stage 1 retries the plain relative path, the sim serves the file
     from disk, the image loads, and stage 2 is never reached -- 8/9 green while the branch that
     matters was never executed. A pack missing on a real device means the bytes are not there at
     all, so both earlier stages have to fail. Every same-origin request for a gallery PAGE is
     aborted below; thumbnails are deliberately left alone, since they ship in the app and are
     exactly what should still render while the pages are missing.
     Fresh context, because the service worker is network-first with a cache fallback and would
     serve an already-loaded page from Cache Storage without the request ever failing. */
  /* serviceWorkers:'block' is load-bearing, and its absence is why the second attempt at this
     check still reported stages 0,1. Playwright's route() does NOT intercept requests a service
     worker makes, so the worker fetched the page itself and the abort never applied -- the same
     shape as the warning in CLAUDE.md about page.route().abort() being silently served from Cache
     Storage. With the worker blocked the aborts reach the network layer the image actually uses. */
  const cD = await browser.newContext({
    viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true, serviceWorkers: 'block' });
  const pD = await cD.newPage();
  await pD.route('**/*', route => {
    const u = route.request().url();
    const isPage = /\/[\w-]+-\d{2}\.jpe?g$/i.test(u) && !/\/gthumbs\//.test(u);
    if (isPage && u.startsWith(`http://127.0.0.1:${PORT}`)) return route.abort();
    return route.continue();
  });
  await pD.addInitScript(() => {
    window.RC_MEDIA_ROOT = '/__no_such_pack__';
    try {
      localStorage.setItem('rc.app.session.v1', JSON.stringify(
        { access_token: 't', refresh_token: 't', expires_at: Date.now() + 3600e3 }));
    } catch (e) {}
  });
  await pD.goto(`http://127.0.0.1:${PORT}/`, { waitUntil: 'domcontentloaded' });
  await pD.waitForTimeout(3500);
  const gD = await pD.$('#rc-gate-ok'); if (gD) { try { await gD.click({ timeout: 2500 }); } catch (e) {} }
  await pD.waitForTimeout(400);
  await pD.evaluate(() => go('gallery', 'dvt'));
  await pD.waitForTimeout(1200);
  /* Open a page so a FULL image is on screen -- the grid shows thumbnails, which are not routed
     and so can never fall back. Getting this wrong measures nothing and passes. */
  await pD.evaluate(() => { try { openViewer('dvt', 0); } catch (e) {} });
  await pD.waitForTimeout(2500);
  /* Split on what data-rc-src points at. gframe sets it for BOTH branches, so the grid's
     thumbnails carry it too -- and they load fine, because thumbnails are not routed. Asserting
     every tagged image reached stage 2 therefore fails on a CORRECT build, which is what the third
     attempt at this check did. Only the full pages should have fallen back; the thumbs staying at
     stage 0 is the feature. */
  const fb = await pD.evaluate(() => {
    const all = [...document.querySelectorAll('img.realpg')].filter(i => i.dataset.rcSrc);
    const tag = i => ({ src: i.getAttribute('src'), stage: i.dataset.gfb || '0', orig: i.dataset.rcSrc });
    return { pages: all.filter(i => !/gthumbs\//.test(i.dataset.rcSrc)).map(tag),
             thumbs: all.filter(i => /gthumbs\//.test(i.dataset.rcSrc)).map(tag) };
  });
  const origin = await pD.evaluate(() => String(window.RC_SHARE_ORIGIN || ''));
  const recovered = fb.pages.filter(i => origin && i.src.startsWith(origin.replace(/\/+$/, '') + '/'));
  check('a missing pack falls back to RC_SHARE_ORIGIN',
        recovered.length > 0,
        `${fb.pages.length} routed pages, stages ${[...new Set(fb.pages.map(i => i.stage))]}, origin ${origin}`);
  check('every routed page ran both earlier stages first',
        fb.pages.length > 0 && fb.pages.every(i => i.stage === '2'),
        `page stages: ${[...new Set(fb.pages.map(i => i.stage))]}`);
  check('thumbnails never fell back (they are not routed)',
        fb.thumbs.length > 0 && fb.thumbs.every(i => i.stage === '0'),
        `thumb stages: ${[...new Set(fb.thumbs.map(i => i.stage))]}`);
  /* The thumbnails must be untouched by all of this: they are what a reader still sees while a
     pack is missing, and the whole reason they stay in the app. */
  const thumbsAlive = await pD.evaluate(() =>
    [...document.querySelectorAll('img')].filter(i => /gthumbs\//.test(i.getAttribute('src') || ''))
      .filter(i => i.naturalWidth > 0).length);
  check('thumbnails still render with the pack missing', thumbsAlive > 0, `${thumbsAlive} loaded`);
  await cD.close();

  await browser.close(); s1.kill(); s2.kill();

  let bad = 0;
  for (const [name, ok, detail] of results) {
    console.log(`  ${ok ? 'ok  ' : 'FAIL'} ${name}${detail && !ok ? '  -- ' + detail : ''}`);
    if (!ok) bad++;
  }
  console.log(bad ? `\n${bad}/${results.length} checks FAILED` : `\nall ${results.length} checks pass`);
  process.exit(bad ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });

function firstDiff(a, b) {
  const sa = JSON.stringify(a, null, 1).split('\n'), sb = JSON.stringify(b, null, 1).split('\n');
  for (let i = 0; i < Math.max(sa.length, sb.length); i++)
    if (sa[i] !== sb[i]) return `line ${i}: patched ${JSON.stringify(sa[i])} vs unpatched ${JSON.stringify(sb[i])}`;
  return 'differ but no line differs';
}
