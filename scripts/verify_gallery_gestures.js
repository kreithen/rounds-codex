// Verify the gallery viewer chain.
//
//   node scripts/verify_gallery_chain.js <port>          (chain, arrows, page/URL sync)
//   node scripts/verify_gallery_gestures.js <port>       (touch swipe + cancelled gesture)
//
// Between them these cover four things, three of which were bugs found while building this:
//   1. the chain - last image -> next gallery, first image -> previous gallery, wrapping at
//      both ends of the 83-gallery sequence
//   2. the ARROWS respond to a tap at all. They never did: gWire()'s setPointerCapture
//      retargets the derived click to .vstage, so .varrow's onclick never fired and browsing
//      only ever worked by swiping.
//   3. swipe still works, driven by REAL touch events over CDP. Chromium's mouse emulation
//      ends the gesture with a pointercancel and no pointerup, so a mouse-driven swipe test
//      measures the cancel path instead of the swipe path.
//   4. a cancelled gesture does not navigate. pointercancel carries clientX 0, so treating it
//      as a pointerup made dx = -sx and the viewer always jumped FORWARD, whichever way the
//      finger went. Run these against origin/main to watch them fail - a guard that passes on
//      the broken build is decoration.
const { chromium } = require(process.env.RC_PW);
const { seedAuth } = require('./rc_test_auth');
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox'] });
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
  await seedAuth(ctx);          // the login wall covers everything; see rc_test_auth.js
  const p = await ctx.newPage();
  const cdp = await ctx.newCDPSession(p);
  const errs = []; p.on('pageerror', e => errs.push(String(e)));
  const bad = [];
  await p.goto(`http://127.0.0.1:${process.argv[2]}/`, { waitUntil: 'networkidle' });
  await p.waitForFunction(() => typeof GALLERIES !== 'undefined' && Object.keys(GALLERIES).length);
  const g = await p.$('#rc-gate-ok'); if (g) { await g.click(); await p.waitForTimeout(250); }

  // real touch, so a genuine pointerup lands rather than the pointercancel mouse emulation gives
  async function swipe(x0, x1, y = 420) {
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: x0, y }] });
    for (let k = 1; k <= 6; k++) {
      await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: x0 + (x1 - x0) * k / 6, y }] });
      await new Promise(r => setTimeout(r, 20));
    }
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
    await p.waitForTimeout(350);
  }
  const st = () => p.evaluate(() => ({ gid: GID, i: gcur }));

  await p.evaluate(() => { go('gallery','chf'); });
  await p.waitForTimeout(200);
  await p.evaluate(() => openViewer('chf', 3));
  await p.waitForTimeout(250);

  await swipe(300, 90);
  let s = await st(); console.log('  swipe LEFT  3 ->', s.i, s.i === 4 ? 'ok' : '*** FAIL ***');
  if (s.i !== 4) bad.push('swipe left');
  await swipe(90, 300);
  s = await st(); console.log('  swipe RIGHT 4 ->', s.i, s.i === 3 ? 'ok' : '*** FAIL ***');
  if (s.i !== 3) bad.push('swipe right');

  await p.evaluate(() => openViewer('cardiac-arrest', 9));
  await p.waitForTimeout(250);
  await swipe(300, 90);
  s = await st(); console.log('  swipe across boundary ->', JSON.stringify(s), (s.gid === 'hyperlipidemia' && s.i === 0) ? 'ok' : '*** FAIL ***');
  if (s.gid !== 'hyperlipidemia' || s.i !== 0) bad.push('swipe chaining');

  // a cancelled gesture must NOT navigate
  const beforeCancel = await st();
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: 300, y: 420 }] });
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: 200, y: 420 }] });
  await p.evaluate(() => document.getElementById('stage').dispatchEvent(
    new PointerEvent('pointercancel', { pointerId: 1, bubbles: true })));
  await p.waitForTimeout(300);
  const afterCancel = await st();
  console.log('  cancelled gesture:', JSON.stringify(beforeCancel), '->', JSON.stringify(afterCancel),
              afterCancel.i === beforeCancel.i && afterCancel.gid === beforeCancel.gid ? 'ok (did not move)' : '*** FAIL: moved ***');
  if (afterCancel.i !== beforeCancel.i || afterCancel.gid !== beforeCancel.gid) bad.push('pointercancel still navigates');
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });

  if (errs.length) bad.push(`${errs.length} page errors: ${errs[0]}`);
  console.log('\npage errors:', errs.length);
  console.log(bad.length ? 'FAIL: ' + bad.join('; ') : 'PASS - touch swipe both ways, chains across, and a cancel no longer jumps');
  await b.close(); process.exit(bad.length ? 1 : 0);
})();
