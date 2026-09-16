#!/usr/bin/env node
/* verify_large_screen_l2.js <site-root> [--before <clean-root>]
 *
 * The regression guard for scripts/add_large_screen_l2.js (Level 2 of large-screen-plan.md).
 *
 * RUN IT AGAINST THE PRE-PATCH TREE AND IT FAILS. That is the whole reason to write it, and it is
 * the lesson this project paid for twice -- `verify_sw.js` passed on a broken service worker for
 * months because it asserted the true-but-insufficient thing, and the gallery PDF's viewer button
 * shipped as a `toast()` stub past a test that only asserted "a toast appeared".
 *
 * WHAT IT CHECKS, AND WHY EACH ONE IS HERE
 *
 *   1   THE SIDEBAR IS A SIDEBAR. Column, in the left gutter, and -- the part that is easy to get
 *       wrong -- the CONTENT CLEARS IT. `.app` is centred by body's justify-content inside a
 *       padding-left, so the whole thing turns on one number being bigger than another; get it
 *       wrong and the nav sits under the library's first card, which is a layout that still
 *       "works" at every assertion about the nav itself.
 *   2   The 112px `.pad` reserved for a bar at the bottom is released. Dead space otherwise, on
 *       every page, forever.
 *   3   TWO PANES, SIDE BY SIDE, ON THE SAME ROW, for all five pairs. The row is not incidental:
 *       the first cut put `#screen2` before `#screen` in the DOM, and a grid item with an explicit
 *       grid-column and no grid-row is still auto-PLACED -- so the list went to row 2 and rendered
 *       5,224px below the fold while every other assertion passed. Same y, and left before right.
 *   4   The placeholder is in the right pane when nothing is selected, and gone when something is.
 *   5   SELECTING A SIBLING REPLACES RATHER THAN PUSHES. Click through three conditions and the
 *       stack must still be two deep. Without this Back walks you out through every card you
 *       clicked, which is the single most likely thing to be got wrong here and is invisible until
 *       someone presses Back four times.
 *   6   Back from a selection lands on the list, once.
 *   7   The URL still tracks the stack top. Two panes is a rendering fact, not a routing one, and
 *       this is what says so.
 *   8   NO DUPLICATE ELEMENT IDS. Two views are in the document at once for the first time in this
 *       app's life. Nothing asserts the id space is disjoint, and a collision does not error --
 *       getElementById quietly returns the first one, so the wrong pane gets written into.
 *   9   ONE VISIBLE MODE TOGGLE. detailHTML's .dtop carries one and libHTML's .topbar carries one,
 *       so two-pane puts two identical controls on screen. Two switches wired to the same setting
 *       is worse than a duplicated logo, which is why this one is hidden and the hero is not.
 *   9b  THE LIST PANE IS A LIST. Measured as the distance from the top of the pane to its first
 *       card -- the number that decides how many conditions you see without scrolling -- and not as
 *       "is .hero display:none", which passes if the rule is scoped to the wrong pane and says
 *       nothing about whether it helped. With the library's hero: 613px of chrome and two cards in
 *       view. Without it: 467px and three. Both measured, in all three modes.
 *   10  THE RAIL IS OFF IN TWO-PANE and the reading column is still 520. The rail needs 520+360
 *       beside a 340 list, which with the sidebar is 1208px of content -- a desktop, not an iPad.
 *       The check is that the fallback is the PHONE arrangement (display:block, static rail), not
 *       a squeezed grid.
 *   11  THE CONDITION SWIPE IS INERT. That handler is bound to #screen, which in two-pane holds
 *       the LIST -- so unguarded, dragging the library sideways changes what is open in the other
 *       pane. Driven with REAL TOUCH over CDP: CLAUDE.md records that the handler ignores mouse
 *       events within 700ms of any touch, so a mouse-driven test measures that guard instead and
 *       passes on a broken build.
 *   12  Immersive views (quiz, gallery, review) collapse to one pane. They are full-screen by
 *       design and must not be squeezed into a column.
 *   13  A RESIZE ACROSS THE BREAKPOINT re-lays the panes, with the stack intact and no page error.
 *       large-screen-plan.md asks for exactly this ("a foldable changes viewport size while the
 *       app is running"), and it is real today on an iPad rotation.
 *   14  NOTHING BELOW 1180 MOVED. Every rule is behind min-width:1180 and every JS branch behind
 *       the same matchMedia, so at 390/768/1024 the geometry of every view must be identical to
 *       the unpatched tree. This is the check that lets a reviewer believe the change is safe for
 *       the phone. Needs --before <root>; reported as SKIP without one, never as a pass.
 *   15  Zero page errors, across all of it.
 *
 * HARNESS TRAPS ALREADY HANDLED, all of which cost time in this project before:
 *   - A fresh context hits `#rc-gate`, the medical disclaimer, which swallows every tap. Clicked.
 *   - The login wall `#rc-authgate` covers everything; rc_test_auth.js seeds a session so it calls
 *     pass() with no network. Seeded BEFORE navigating -- the wall runs during parse.
 *   - Cards and the hero animate in, so geometry read too early is noise. reducedMotion:'reduce'
 *     plus a settle wait.
 *   - A leftover sim squatting on the port makes a guard measure the wrong tree and report green.
 *     The port is checked first.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const http = require('http');
const { spawn } = require('child_process');

const HERE = __dirname;
const ROOT = process.argv[2];
if (!ROOT) {
  console.error('usage: RC_PW=<dir with node_modules/playwright-core> verify_large_screen_l2.js <site-root> [--before <root>]');
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

const PORT = 8961, PORT_B = 8962;
const WIDE = 1366, NARROW = 1024;
const RAIL_W = 168, GUTTER = 16;
/* The five pairs, and the way each one is opened. resdetail is reached by clicking, like rxdrug. */
/* `standalone` is false where the parent cannot be shown with nothing selected: a specialty page
   IS a `resspec` with an id, so root('resspec') would render resSpecHTML(undefined). That is a fact
   about the view, not about two-pane, and asserting a placeholder there tests the harness. */
const PAIRS = [
  ['library', 'detail',   p => p.evaluate(() => go('detail', 'dvt')), true],
  ['rx',      'rxdrug',   p => p.evaluate(() => { root('rx'); }).then(() => p.waitForTimeout(350))
                                .then(() => p.evaluate(() => { const c = document.querySelector('#screen .rxcard'); if (c) c.click(); })), true],
  ['calc',    'calcone',  p => p.evaluate(() => go('calcone', 'bmi')), true],
  ['res',     'resspec',  p => p.evaluate(() => go('resspec', 'em')), true],
  ['resspec', 'resdetail',p => p.evaluate(() => { go('resspec', 'em'); }).then(() => p.waitForTimeout(400))
                                .then(() => p.evaluate(() => { const c = document.querySelector('#screen2 .rescard,#screen2 .res-card,#screen2 .card'); if (c) c.click(); })), false],
];
const BELOW_VIEWS = ['library', 'detail', 'rx', 'calc', 'res', 'about', 'clinupd', 'galleries'];

/* ------------------------------------------------------------------ plumbing */
function portFree(port) {
  return new Promise(res => {
    const req = http.get({ host: '127.0.0.1', port, path: '/', timeout: 1500 }, r => { r.resume(); res(false); });
    req.on('error', () => res(true));
    req.on('timeout', () => { req.destroy(); res(true); });
  });
}
function serve(root, port) {
  return spawn(process.execPath, [path.join(HERE, 'netlifysim.js'), root, String(port)], { stdio: 'ignore' });
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
  await page.waitForTimeout(400);
  return { ctx, page, errs };
}
const snap = page => page.evaluate(() => {
  const box = s => { const e = document.querySelector(s); if (!e) return null; const r = e.getBoundingClientRect();
    return { x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height) }; };
  const s2 = document.getElementById('screen2');
  const ids = {}; document.querySelectorAll('[id]').forEach(e => { ids[e.id] = (ids[e.id] || 0) + 1; });
  const visToggles = [...document.querySelectorAll('.toggle[data-toggle]')]
    .filter(t => getComputedStyle(t).display !== 'none').length;
  const pad = document.querySelector('.pad');
  const rail = document.querySelector('.d-rail');
  const app = document.querySelector('.app');
  return {
    pane: app && app.dataset.pane, view: app && app.dataset.view,
    app: box('.app'), nav: box('.nav'), screen: box('#screen'), screen2: box('#screen2'),
    navDir: (() => { const n = document.getElementById('nav'); return n ? getComputedStyle(n).flexDirection : null; })(),
    s2hidden: s2 ? s2.hidden : null,
    bodyPL: parseFloat(getComputedStyle(document.body).paddingLeft),
    padPB: pad ? parseFloat(getComputedStyle(pad).paddingBottom) : null,
    padDisplay: pad ? getComputedStyle(pad).display : null,
    railPos: rail ? getComputedStyle(rail).position : null,
    empty: !!document.querySelector('.pane-empty'),
    dup: Object.entries(ids).filter(([, n]) => n > 1).map(([k, n]) => `${k}x${n}`),
    visToggles,
    stack: stack.map(e => e.v + (e.id ? ':' + e.id : '')).join(' > '),
    depth: stack.length, top: stack[stack.length - 1],
    url: location.pathname, scrollW: document.documentElement.scrollWidth, innerW: window.innerWidth,
  };
});

let pass = 0, fail = 0, skip = 0;
const ok = (good, what, detail) => {
  if (good) pass++; else fail++;
  console.log(`  ${good ? 'ok  ' : 'FAIL'} ${what}${detail ? '   ' + detail : ''}`);
};

(async () => {
  for (const [p, name] of [[PORT, 'main'], ...(BEFORE ? [[PORT_B, 'before']] : [])]) {
    if (!(await portFree(p))) { console.error(`port ${p} is already serving something (${name})`); process.exit(2); }
  }
  const sims = [serve(ROOT, PORT)];
  if (BEFORE) sims.push(serve(BEFORE, PORT_B));
  await waitFor(PORT); if (BEFORE) await waitFor(PORT_B);
  const browser = await chromium.launch({ executablePath: CHROME, args: ['--no-sandbox'] });
  const allErrs = [];

  console.log('--- verify_large_screen_l2.js ---');
  console.log(`  ${ROOT}   wide ${WIDE}px, narrow ${NARROW}px\n`);

  /* ---- 1-2, 3-10, 12: everything at the wide width ------------------------------------------- */
  {
    const { ctx, page, errs } = await openApp(browser, PORT, WIDE);
    let m = await snap(page);

    ok(m.navDir === 'column' && m.nav && m.nav.x === GUTTER && m.nav.w === RAIL_W,
       'the nav is a rail in the left gutter',
       `x${m.nav && m.nav.x} w${m.nav && m.nav.w} ${m.navDir}`);
    ok(m.app && m.app.x >= GUTTER + RAIL_W + GUTTER && m.bodyPL >= GUTTER + RAIL_W + GUTTER,
       'the content clears the rail',
       `.app starts at ${m.app && m.app.x}, rail ends at ${GUTTER + RAIL_W}, body pads ${m.bodyPL}`);
    ok(m.scrollW <= m.innerW, 'no horizontal overflow', `${m.scrollW}/${m.innerW}`);
    ok(m.padPB !== null && m.padPB < 112,
       'the bottom bar reservation is released', `.pad padding-bottom ${m.padPB}px`);

    for (const [parent, child, open, standalone] of PAIRS) {
      if (standalone) {
        await page.evaluate(v => root(v), parent);
        await page.waitForTimeout(350);
        m = await snap(page);
        ok(m.pane === 'two' && !m.s2hidden && m.empty,
           `${parent}: two panes, placeholder in the right one`, `pane=${m.pane} empty=${m.empty}`);
      }

      await open(page);
      await page.waitForTimeout(450);
      m = await snap(page);
      const sideBySide = m.screen && m.screen2 && m.screen.x < m.screen2.x
        && Math.abs(m.screen.y - m.screen2.y) <= 2 && m.screen2.w > 200;
      ok(m.pane === 'two' && !m.s2hidden && !m.empty && sideBySide,
         `${parent} → ${child}: list left, item right, same row`,
         `#screen x${m.screen && m.screen.x} y${m.screen && m.screen.y} | #screen2 x${m.screen2 && m.screen2.x} y${m.screen2 && m.screen2.y} w${m.screen2 && m.screen2.w}`);
      ok(m.dup.length === 0, `${parent} → ${child}: no duplicate element ids`, m.dup.join(',') || 'none');
      ok(m.visToggles <= 1, `${parent} → ${child}: at most one visible mode toggle`, `${m.visToggles}`);
    }

    /* 5-7: selection semantics, on the pair that matters most */
    await page.evaluate(() => { root('library'); });
    await page.waitForTimeout(300);
    await page.evaluate(() => go('detail', 'dvt'));  await page.waitForTimeout(250);
    const d1 = await snap(page);
    await page.evaluate(() => go('detail', 'pe'));   await page.waitForTimeout(250);
    await page.evaluate(() => go('detail', 'copd')); await page.waitForTimeout(250);
    const d3 = await snap(page);
    ok(d1.depth === 2 && d3.depth === 2,
       'selecting a sibling replaces rather than pushes', `depth ${d1.depth} then ${d3.depth} after 3 picks`);
    ok(d3.url === '/c/copd', 'the URL still tracks the stack top', d3.url);
    await page.evaluate(() => back()); await page.waitForTimeout(300);
    const bk = await snap(page);
    ok(bk.depth === 1 && bk.empty && bk.pane === 'two',
       'Back lands on the list, once', `depth ${bk.depth} empty=${bk.empty}`);

    /* 10: the rail folds back into the narrative */
    await page.evaluate(() => go('detail', 'dvt')); await page.waitForTimeout(350);
    const det = await snap(page);
    ok(det.padDisplay === 'block' && det.railPos === 'static',
       'the rail falls back into the narrative flow', `.pad ${det.padDisplay}, .d-rail ${det.railPos}`);
    ok(det.screen2 && Math.abs(det.screen2.w - 520) <= 2,
       'the reading column is still 520px', `${det.screen2 && det.screen2.w}px`);

    /* The list pane earns its height. Measured as the distance from the top of the pane to the top
       of its first card, and as the number of cards that fit -- not as "is .hero display:none",
       which would pass if the rule were scoped to the wrong pane, and would say nothing about
       whether it helped. The threshold is set between two measured numbers rather than chosen:
       with the hero, 613px of chrome in nursing and medical and 606 in resident, two cards in view
       in all three; without it, 467/467/460 and three cards. 500 sits between them with room, and
       the card count is the figure that actually matters to a reader. */
    const chrome = await page.evaluate(() => {
      const pane = document.getElementById('screen');
      const card = pane.querySelector('.card');
      const hero = pane.querySelector('.hero');
      const r = pane.getBoundingClientRect();
      return {
        toFirstCard: card ? Math.round(card.getBoundingClientRect().top - r.top) : null,
        heroShown: hero ? getComputedStyle(hero).display !== 'none' : false,
        cardsInView: [...pane.querySelectorAll('.card')]
          .filter(c => c.getBoundingClientRect().top < r.bottom).length,
        paneH: Math.round(r.height),
      };
    });
    ok(!chrome.heroShown && chrome.toFirstCard !== null && chrome.toFirstCard < 500
       && chrome.cardsInView >= 3,
       'the list pane is a list, not a masthead',
       `${chrome.toFirstCard}px of chrome above the first card in a ${chrome.paneH}px pane, `
       + `${chrome.cardsInView} cards in view, hero ${chrome.heroShown ? 'shown' : 'hidden'}`);

    /* 11: the condition swipe is inert in two-pane. Real touch, over CDP. */
    const cdp = await ctx.newCDPSession(page);
    const y = Math.round(det.screen.y + 400);
    const x0 = Math.round(det.screen.x + det.screen.w - 30), x1 = Math.round(det.screen.x + 40);
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: x0, y }] });
    for (let k = 1; k <= 6; k++) {
      await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: Math.round(x0 + (x1 - x0) * k / 6), y }] });
      await page.waitForTimeout(20);
    }
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
    await page.waitForTimeout(600);
    const sw = await snap(page);
    ok(sw.top && sw.top.id === 'dvt',
       'a swipe on the list pane does not change the selection', `top is ${sw.top && sw.top.id}`);

    /* 12: immersive views collapse */
    for (const v of ['quiz', 'gallery', 'review']) {
      await page.evaluate(vv => (vv === 'review' ? go('review') : go(vv, 'dvt')), v);
      await page.waitForTimeout(400);
      const im = await snap(page);
      ok(im.s2hidden === true && im.pane !== 'two', `${v} is one full-width pane`, `pane=${im.pane}`);
    }

    /* 13: a resize across the breakpoint */
    await page.evaluate(() => { root('library'); go('detail', 'dvt'); }); await page.waitForTimeout(400);
    await page.setViewportSize({ width: 900, height: 900 }); await page.waitForTimeout(500);
    const narrow = await snap(page);
    await page.setViewportSize({ width: WIDE, height: 900 }); await page.waitForTimeout(500);
    const back2 = await snap(page);
    ok(narrow.pane === 'one' && narrow.s2hidden === true && narrow.stack === back2.stack,
       'narrowing past the breakpoint returns one pane, stack intact', `${narrow.pane} / ${narrow.stack}`);
    ok(back2.pane === 'two' && back2.s2hidden === false && back2.empty === false,
       'widening past it restores two panes', `${back2.pane}`);

    allErrs.push(...errs);
    await ctx.close();
  }

  /* ---- 14: nothing below the breakpoint moved -------------------------------------------------- */
  if (!BEFORE) {
    skip++;
    console.log('  skip  nothing below 1180 moved   (needs --before <clean-root>)');
  } else {
    for (const w of [390, 768, NARROW]) {
      const a = await openApp(browser, PORT, w);
      const b = await openApp(browser, PORT_B, w);
      let diff = 0, first = '';
      for (const v of BELOW_VIEWS) {
        const drive = p => (v === 'detail' ? p.evaluate(() => go('detail', 'dvt')) : p.evaluate(vv => root(vv), v));
        await drive(a.page); await drive(b.page);
        await a.page.waitForTimeout(500); await b.page.waitForTimeout(500);
        const g = pg => pg.evaluate(() => {
          const out = {};
          for (const s of ['.app', '#screen', '.nav', '.pad', '.grid', '.ggrid', '.rxgrid']) {
            const e = document.querySelector(s); if (!e) { out[s] = null; continue; }
            const r = e.getBoundingClientRect();
            out[s] = [Math.round(r.x), Math.round(r.width), Math.round(r.height)].join(',');
          }
          const pad = document.querySelector('.pad');
          out.padPB = pad ? getComputedStyle(pad).paddingBottom : null;
          out.bodyPL = getComputedStyle(document.body).paddingLeft;
          return JSON.stringify(out);
        });
        const [ga, gb] = [await g(a.page), await g(b.page)];
        if (ga !== gb) { diff++; if (!first) first = `${v} @${w}: ${ga} vs ${gb}`; }
      }
      ok(diff === 0, `the layout at ${w}px is byte-identical to the unpatched tree`,
         diff ? `${diff} view(s) differ; first: ${first}` : `${BELOW_VIEWS.length} views`);
      allErrs.push(...a.errs, ...b.errs);
      await a.ctx.close(); await b.ctx.close();
    }
  }

  ok(allErrs.length === 0, 'zero page errors', allErrs.length ? allErrs.join(' | ') : '');

  await browser.close();
  sims.forEach(s => s.kill());
  console.log(`\n  ${pass} passed, ${fail} failed${skip ? `, ${skip} skipped` : ''}`);
  if (skip && !fail) console.log('  Passed, but a check was SKIPPED -- that is not the same as green.');
  process.exit(fail ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
