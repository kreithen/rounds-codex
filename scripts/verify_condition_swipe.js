/* Confirm the two new MSK conditions sit where they were placed, by swiping the way a reader
 * does. DATA is not on window, so the alternative is trusting the JSON — and swipe order is
 * the whole reason placement was an explicit decision, so it is worth driving for real.
 *
 * Real touch over CDP, not mouse: the #screen handler ignores mouse events within 700ms of any
 * touch, so a mouse-driven "swipe" measures that guard rather than the swipe path.
 *
 * Only the forward direction is driven. A right-going swipe that starts near the left edge is
 * claimed by Chromium's own back-navigation gesture and unloads the app — the page comes back
 * with go() undefined, which reads as an app failure. Walking forward from the condition on
 * each side proves the same adjacency without going near the edge.
 */
const { chromium } = require(process.env.RC_PW + '/node_modules/playwright-core');
const { seedAuth } = require('/home/user/rounds-codex/scripts/rc_test_auth.js');
const PORT = Number(process.env.PORT || 8216);

// start-id -> the display name a forward swipe should land on.
// Override with STEPS="fracture=Hip Fracture,hip-fracture=Osteoporosis"
const STEPS = (process.env.STEPS
  ? process.env.STEPS.split(',').map(s => s.split('=').map(x => x.trim()))
  : [
      ['fracture',       'Hip Fracture'],
      ['hip-fracture',   'Osteoporosis'],
      ['osteoarthritis', 'Low Back Pain'],
      ['back-pain',      'Rheumatoid Arthritis'],
    ]);

(async () => {
  const b = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
    args: ['--no-sandbox'],
  });
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
  try { await seedAuth(ctx, `http://127.0.0.1:${PORT}`); } catch (e) {}
  const p = await ctx.newPage();
  const errs = [];
  p.on('pageerror', e => errs.push(e.message));
  await p.goto(`http://127.0.0.1:${PORT}/`, { waitUntil: 'domcontentloaded' });
  await p.waitForTimeout(2500);
  const g = await p.$('#rc-gate-ok'); if (g) await g.click();
  // the loader fetches content/*.json, so go() and the cards appear after DOM ready
  await p.waitForFunction(() => typeof go === 'function' && document.querySelectorAll('[data-id]').length > 100,
                          null, { timeout: 20000 });

  const cdp = await ctx.newCDPSession(p);
  const swipeForward = async () => {
    const y = 500;
    const x0 = 330, x1 = 130;           // both well inside the viewport
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: x0, y }] });
    for (let k = 1; k <= 6; k++) {
      await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: x0 + (x1 - x0) * k / 6, y }] });
      await p.waitForTimeout(20);
    }
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
    await p.waitForTimeout(700);
  };
  const title = () => p.evaluate(() => {
    const h = document.querySelector('#screen .d-title');
    return h ? h.innerText.trim() : null;
  });

  let fail = 0;
  for (const [id, want] of STEPS) {
    await p.evaluate(i => go('detail', i), id);
    await p.waitForTimeout(700);
    const from = await title();
    await swipeForward();
    const got = await title();
    const ok = got === want;
    if (!ok) fail++;
    console.log(`${ok ? 'ok  ' : 'FAIL'} "${(from || '?').padEnd(22)}" -swipe-> "${got}"   (want "${want}")`);
  }
  console.log('\npageerrors:', errs.length ? errs.slice(0, 3) : 'none');
  console.log(fail ? `${fail} FAILED` : `all ${STEPS.length} swipe steps land where DATA order says they should`);
  await b.close();
  process.exit(fail ? 1 : 0);
})();
