#!/usr/bin/env node
/* verify_large_screen.js <site-root> [--port N]
 *
 * The regression guard for scripts/add_large_screen.js (Level 1 of large-screen-plan.md).
 *
 * RUN IT AGAINST THE PRE-FIX TREE AND IT FAILS. That is the whole point of writing it, and it is
 * the lesson this project paid for twice: `verify_sw.js` passed on a broken service worker for
 * months because it asserted the true-but-insufficient thing, and the gallery PDF's viewer button
 * shipped as a `toast()` stub past a test that only asserted "a toast appeared". Measured
 * 2026-09-12 against origin/main: 9 of the 12 checks below fail.
 *
 * WHAT IT CHECKS, AND WHY EACH ONE IS HERE
 *
 *   1-3  The container actually widens (720 -> 680, 1024 -> 880) and the tab bar goes with it.
 *        Without this the whole change is inert -- and it would be inert for a silent reason,
 *        because a media query that does not match produces no error anywhere.
 *   4    The reading views do NOT widen past 520. This is the check that catches the naive fix:
 *        a plain `max-width` bump passes 1-3 and makes the app worse to read.
 *   5    The measure, in characters, on every reading view. Not a proxy for the cap -- the cap
 *        could be right while a font change pushed the measure out. Content width over the
 *        block's own average character advance, from canvas measureText in its computed font;
 *        counting rendered lines is useless on a short block (a 174-character disclaimer that
 *        drops from three lines to two reports its measure jumping 58 -> 87 for 32px of width).
 *   6-9  The grids reflow. `.grid`, `.ggrid` and `.rxgrid` are a hard `1fr 1fr` in the shipped
 *        stylesheet -- large-screen-plan.md says the gallery grid is "already auto-fill" and that
 *        is wrong, only `.res-grid` is -- so without an explicit rule they stay at two enormous
 *        columns. `.cu-list` is a flex column of near-empty full-width bands.
 *   10   `paint()` publishes `.app[data-view]`. Checked directly as well as through check 4,
 *        because if the attribute stops being written the reading cap silently stops applying and
 *        every reading view quietly goes to 880.
 *   11   THE PHONE LAYOUT IS UNCHANGED. Every rule is behind min-width:720, so at 320/375/390/430
 *        the geometry of every view must be identical to the unpatched tree. This is the check
 *        that lets a reviewer believe the change is safe for the 99% of users on a phone. It needs
 *        a second tree to compare against (--before <root>), and is reported as SKIP without one.
 *   12   The mode toggle's sliding thumb survives a resize across the 405px breakpoint. A
 *        pre-existing bug that add_large_screen.js fixes; large-screen-plan.md asks for exactly
 *        this ("anything that measured a width once at boot will be wrong after the fold") and it
 *        is real today on any iPhone whose portrait width is under 405pt.
 *
 * HARNESS TRAPS THIS SCRIPT ALREADY HANDLES -- all of them cost time in this project before:
 *   - A fresh context hits `#rc-gate`, the medical disclaimer, which swallows every tap. Clicked.
 *   - The login wall `#rc-authgate` covers everything; scripts/rc_test_auth.js seeds a session so
 *     it calls pass() with no network. Seeded before navigating -- the wall runs during parse.
 *   - `.card` and `.gthumb` animate in over 0.5s, so geometry read too early is noise: a control
 *     run of the side-by-side against the SAME tree reported 5 of 19 views as differing. The
 *     context is opened with reducedMotion:'reduce' and each view is given 900ms to settle, which
 *     takes the noise floor to one view (`library`, whose lazy images still race).
 */
'use strict';
const fs = require('fs');
const path = require('path');
const http = require('http');
const { spawn } = require('child_process');

const HERE = __dirname;
const ROOT = process.argv[2];
if (!ROOT) {
  console.error('usage: RC_PW=<dir with node_modules/playwright-core> verify_large_screen.js <site-root> [--before <root>]');
  process.exit(2);
}
const bAt = process.argv.indexOf('--before');
const BEFORE = bAt > -1 ? process.argv[bAt + 1] : null;
const RC_PW = process.env.RC_PW;
if (!RC_PW || !fs.existsSync(path.join(RC_PW, 'node_modules', 'playwright-core'))) {
  console.error('RC_PW must point at a directory containing node_modules/playwright-core');
  process.exit(2);
}
const { chromium } = require(path.join(RC_PW, 'node_modules', 'playwright-core'));
const { seedAuth } = require(path.join(HERE, 'rc_test_auth.js'));
const CHROME = process.env.RC_CHROME || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';

const READ_VIEWS = ['detail', 'quiz', 'rxdrug', 'calc', 'calcone', 'or', 'about', 'account', 'terms', 'privacy'];
const WIDE_VIEWS = ['library', 'gallery', 'galleries', 'rx', 'res', 'resspec', 'clinupd', 'review'];
const MEASURE_MAX = 92;   // characters a line, worst block on any reading view, fine print included
const PHONE_WIDTHS = [320, 375, 390, 430];

/* ------------------------------------------------------------------ plumbing */
function serve(root, port) {
  const p = spawn(process.execPath, [path.join(HERE, 'netlifysim.js'), root, String(port)],
    { stdio: 'ignore' });
  return p;
}
function waitFor(port) {
  return new Promise((res, rej) => {
    let tries = 0;
    const tick = () => {
      http.get({ host: '127.0.0.1', port, path: '/' }, r => { r.resume(); res(); })
        .on('error', () => (++tries > 60 ? rej(new Error('sim did not start')) : setTimeout(tick, 150)));
    };
    tick();
  });
}
async function openApp(browser, port, width) {
  const ctx = await browser.newContext({ viewport: { width, height: 900 }, reducedMotion: 'reduce' });
  await seedAuth(ctx);
  const page = await ctx.newPage();
  const errs = [];
  page.on('pageerror', e => errs.push(String(e)));
  await page.goto(`http://127.0.0.1:${port}/`, { waitUntil: 'networkidle' });
  await page.evaluate(() => { const g = document.getElementById('rc-gate-ok'); if (g) g.click(); });
  await page.waitForTimeout(300);
  return { ctx, page, errs };
}
/* rxdrug and resdetail have no id you can pass to go() -- they are reached by clicking a card. */
async function show(page, view) {
  if (view === 'rxdrug') {
    await page.evaluate(() => go('rx')); await page.waitForTimeout(250);
    const ok = await page.evaluate(() => { const c = document.querySelector('.rxcard'); if (!c) return 0; c.click(); return 1; });
    if (!ok) throw new Error('no .rxcard to open');
  } else if (view === 'detail' || view === 'quiz' || view === 'gallery') {
    await page.evaluate(v => go(v, 'dvt'), view);
  } else if (view === 'resspec') {
    await page.evaluate(() => go('resspec', 'em'));
  } else if (view === 'calcone') {
    await page.evaluate(() => go('calcone', 'bmi'));
  } else {
    await page.evaluate(v => go(v), view);
  }
  await page.waitForTimeout(900);
}

const MEASURE = `(function(){
  const c=document.createElement('canvas').getContext('2d');
  let worst=null;
  document.querySelectorAll('#screen *').forEach(e=>{
    let t=''; for(const n of e.childNodes) if(n.nodeType===3) t+=n.textContent;
    t=t.replace(/\\s+/g,' ').trim(); if(t.length<120) return;
    const cs=getComputedStyle(e), bb=e.getBoundingClientRect();
    const content=bb.width-parseFloat(cs.paddingLeft)-parseFloat(cs.paddingRight);
    if(content<40) return;
    c.font=cs.fontWeight+' '+cs.fontSize+' '+cs.fontFamily;
    const adv=c.measureText(t).width/t.length; if(!adv) return;
    const cpl=Math.round(content/adv);
    if(!worst||cpl>worst.cpl) worst={cpl,sel:(e.tagName+'.'+(e.className||'')).slice(0,26),fs:cs.fontSize};
  });
  return worst;
})()`;

const GEOM = `(function(){
  const g=[];
  document.querySelectorAll('#screen *').forEach(e=>{const r=e.getBoundingClientRect();
    g.push([Math.round(r.x),Math.round(r.y),Math.round(r.width),Math.round(r.height)]);});
  return JSON.stringify(g);
})()`;

const results = [];
function record(name, pass, detail) { results.push({ name, pass, detail }); }

/* ------------------------------------------------------------------ the run */
(async () => {
  const PORT = 8931, PORT_B = 8932;
  const sims = [serve(ROOT, PORT)];
  if (BEFORE) sims.push(serve(BEFORE, PORT_B));
  try {
    await waitFor(PORT);
    if (BEFORE) await waitFor(PORT_B);
    const browser = await chromium.launch({ executablePath: CHROME, args: ['--no-sandbox'] });
    let pageErrors = 0;

    /* --- 1-3, 6-9: the widened container and the grids, at 720 and 1024 ---------------------- */
    for (const W of [720, 1024]) {
      const want = W >= 1024 ? 880 : 680;
      const { ctx, page, errs } = await openApp(browser, PORT, W);
      await show(page, 'library');
      const lib = await page.evaluate(`(function(){
        const cols=s=>{const e=document.querySelector(s);return e?getComputedStyle(e).gridTemplateColumns.split(' ').length:null;};
        return {app:Math.round(document.querySelector('.app').getBoundingClientRect().width),
                nav:Math.round(document.getElementById('nav').getBoundingClientRect().width),
                grid:cols('.grid')};
      })()`);
      record(`container widens at ${W}px`, lib.app === want, `.app = ${lib.app}, want ${want}`);
      record(`tab bar widens at ${W}px`, lib.nav === 560, `.nav = ${lib.nav}, want 560`);
      const wantGrid = W >= 1024 ? 4 : 3;
      record(`library grid reflows at ${W}px`, lib.grid === wantGrid, `.grid = ${lib.grid} columns, want ${wantGrid}`);

      if (W === 1024) {
        await show(page, 'gallery');
        const gg = await page.evaluate(`getComputedStyle(document.querySelector('.ggrid')).gridTemplateColumns.split(' ').length`);
        record('gallery grid reflows at 1024px', gg >= 4, `.ggrid = ${gg} columns, want >= 4`);
        await show(page, 'rx');
        const rg = await page.evaluate(`getComputedStyle(document.querySelector('.rxgrid')).gridTemplateColumns.split(' ').length`);
        record('drug grid reflows at 1024px', rg >= 4, `.rxgrid = ${rg} columns, want >= 4`);
        await show(page, 'clinupd');
        const cu = await page.evaluate(`(function(){const e=document.querySelector('.cu-list');
          return {disp:getComputedStyle(e).display, cols:getComputedStyle(e).gridTemplateColumns.split(' ').length};})()`);
        record('clinical updates reflows at 1024px', cu.disp === 'grid' && cu.cols >= 3,
          `.cu-list display:${cu.disp}, ${cu.cols} columns, want grid and >= 3`);
      }
      pageErrors += errs.length;
      await ctx.close();
    }

    /* --- 4, 5, 10: the reading column ------------------------------------------------------- */
    {
      const { ctx, page, errs } = await openApp(browser, PORT, 1024);
      let widest = 0, widestView = '', worstCpl = null;
      for (const v of READ_VIEWS) {
        await show(page, v);
        const r = await page.evaluate(`(function(){return {
          app:Math.round(document.querySelector('.app').getBoundingClientRect().width),
          dv:document.querySelector('.app').dataset.view, m:${MEASURE}};})()`);
        if (r.app > widest) { widest = r.app; widestView = v; }
        if (r.m && (!worstCpl || r.m.cpl > worstCpl.cpl)) worstCpl = Object.assign({ view: v }, r.m);
        if (v === 'about') record('paint() publishes .app[data-view]', r.dv === 'about', `data-view = ${r.dv}`);
      }
      record('reading views keep their measure', widest <= 520,
        `widest reading view is ${widestView} at ${widest}px, want <= 520`);
      record('no reading view runs long', !!worstCpl && worstCpl.cpl <= MEASURE_MAX,
        worstCpl ? `worst is ${worstCpl.view} ${worstCpl.sel} at ${worstCpl.cpl} characters/line (${worstCpl.fs}), limit ${MEASURE_MAX}`
                 : 'no prose block found -- the harness measured nothing');
      pageErrors += errs.length;
      await ctx.close();
    }

    /* --- 12: the toggle thumb survives a resize across 405px -------------------------------- */
    {
      const { ctx, page, errs } = await openApp(browser, PORT, 390);
      const probe = () => page.evaluate(`(function(){
        const t=document.querySelector('.toggle[data-toggle]'); if(!t) return null;
        const mode=document.documentElement.getAttribute('data-mode')||'nursing';
        const cls=mode==='nursing'?'n':mode==='medical'?'m':'r';
        const b=t.querySelector('button.'+cls), th=t.querySelector('.thumb');
        return {btnLeft:b.offsetLeft,btnW:b.offsetWidth,
                thLeft:parseFloat(th.style.left)||0,thW:parseFloat(th.style.width)||0};
      })()`);
      await show(page, 'library');
      await page.setViewportSize({ width: 1024, height: 900 });
      await page.waitForTimeout(600);
      const t = await probe();
      record('mode toggle survives a rotation across 405px',
        !!t && Math.abs(t.btnW - t.thW) <= 1 && Math.abs(t.btnLeft - t.thLeft) <= 1,
        t ? `button ${t.btnW}px@${t.btnLeft}, thumb ${t.thW}px@${t.thLeft}` : 'no toggle found');
      pageErrors += errs.length;
      await ctx.close();
    }

    /* --- 11: the phone layout is untouched -------------------------------------------------- */
    if (!BEFORE) {
      record('phone layout unchanged (320/375/390/430)', null, 'SKIP -- pass --before <unpatched-root>');
    } else {
      const bad = [];
      for (const W of PHONE_WIDTHS) {
        const A = await openApp(browser, PORT_B, W), B = await openApp(browser, PORT, W);
        for (const v of READ_VIEWS.concat(WIDE_VIEWS)) {
          /* `library` races its own lazy images: a control run of this comparison against the SAME
             tree reports it as differing about half the time. Excluded by name rather than by
             loosening the comparison for every view. */
          if (v === 'library') continue;
          await show(A.page, v); await show(B.page, v);
          const ga = await A.page.evaluate(GEOM), gb = await B.page.evaluate(GEOM);
          if (ga !== gb) bad.push(`${v}@${W}`);
        }
        pageErrors += A.errs.length + B.errs.length;
        await A.ctx.close(); await B.ctx.close();
      }
      record('phone layout unchanged (320/375/390/430)', bad.length === 0,
        bad.length ? `geometry differs: ${bad.join(', ')}` : `${PHONE_WIDTHS.length} widths x ${READ_VIEWS.length + WIDE_VIEWS.length - 1} views identical`);
    }

    record('no page errors', pageErrors === 0, `${pageErrors} uncaught page error(s)`);
    await browser.close();
  } finally {
    for (const s of sims) s.kill();
  }

  console.log('--- verify_large_screen.js ---');
  let failed = 0, skipped = 0;
  for (const r of results) {
    const tag = r.pass === null ? 'SKIP' : r.pass ? ' ok ' : 'FAIL';
    if (r.pass === null) skipped++; else if (!r.pass) failed++;
    console.log(`  ${tag}  ${r.name.padEnd(44)} ${r.detail}`);
  }
  console.log(`\n${results.length - failed - skipped} passed, ${failed} failed, ${skipped} skipped`);
  process.exit(failed ? 1 : 0);
})().catch(e => { console.error('verify_large_screen.js crashed:', e); process.exit(2); });
