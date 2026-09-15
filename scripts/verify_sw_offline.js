#!/usr/bin/env node
/* verify_sw_offline.js  --  PORT=<n> RC_PW=<dir> node scripts/verify_sw_offline.js
 *
 * Registers the service worker against a running netlifysim, lets it precache, goes OFFLINE and
 * reloads. Asserts the app BOOTS -- 183 conditions and 102 galleries present -- not merely that a
 * document came back. A cached shell rendering "Content didn't load" passes the weaker check.
 *
 * verify_sw.js unit-tests the worker's logic with stubs. This is the other half: the real thing,
 * in a real browser, with the network actually cut.
 *
 * ITS OWN CONTROL, and it needed fixing before it was worth anything: pointed at a tree with no
 * sw.js it must FAIL, and at first it HUNG instead, because navigator.serviceWorker.ready never
 * resolves when no worker registers. A test that hangs on the broken case is not a test. The race
 * against a 12s timeout below is that fix.
 *
 * Start the sim yourself first:  node scripts/netlifysim.js <site-root> 8961
 */
const { chromium } = require(process.env.RC_PW + '/node_modules/playwright-core');
const { seedAuth } = require('/home/user/rounds-codex/scripts/rc_test_auth.js');

(async () => {
  const PORT = process.env.PORT || 8961;
  const b = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
    args: ['--no-sandbox'],
  });
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 } });
  await seedAuth(ctx);
  const p = await ctx.newPage();
  const errs = [];
  p.on('pageerror', e => errs.push(String(e)));

  await p.goto(`http://127.0.0.1:${PORT}/`, { waitUntil: 'networkidle' });
  await p.evaluate(() => { const g = document.getElementById('rc-gate-ok'); if (g) g.click(); });

  /* navigator.serviceWorker.ready NEVER resolves when no worker registers, so it must be raced
     against a timeout. Without this the control run (a tree with no sw.js) hangs instead of
     failing -- and a test that hangs on the broken case is not a test. */
  const reg = await p.evaluate(async () => {
    if (!navigator.serviceWorker) return 'no SW support';
    const ready = navigator.serviceWorker.ready.then(r => ({ scope: r.scope }));
    const timeout = new Promise(s => setTimeout(() => s(null), 12000));
    const r = await Promise.race([ready, timeout]);
    if (!r) return { scope: null, controlled: false, note: 'no worker became ready in 12s' };
    for (let i = 0; i < 20 && !navigator.serviceWorker.controller; i++) {
      await new Promise(s => setTimeout(s, 250));
    }
    return { scope: r.scope, controlled: !!navigator.serviceWorker.controller };
  });
  console.log('  worker:', JSON.stringify(reg));

  await p.waitForTimeout(3000);   // let addAll(CORE) finish
  const keys = await p.evaluate(() => caches.keys());
  console.log('  cache keys:', JSON.stringify(keys));
  const n = await p.evaluate(async () => {
    const ks = await caches.keys();
    if (!ks.length) return 0;
    const c = await caches.open(ks[0]);
    return (await c.keys()).length;
  });
  console.log('  entries precached:', n);

  await ctx.setOffline(true);
  await p.reload({ waitUntil: 'load' }).catch(e => console.log('  reload threw:', e.message.slice(0, 70)));
  await p.waitForTimeout(3000);

  const state = await p.evaluate(() => ({
    hasApp: !!document.querySelector('.app'),
    conditions: (typeof DATA !== 'undefined' && DATA) ? DATA.length : 0,
    galleries: (typeof GALLERIES !== 'undefined' && GALLERIES) ? Object.keys(GALLERIES).length : 0,
    screenText: (document.getElementById('screen') || { textContent: '' })
      .textContent.slice(0, 70).replace(/\s+/g, ' '),
  }));
  console.log('  OFFLINE reload ->', JSON.stringify(state));
  console.log('  pageerrors:', errs.length, errs.slice(0, 2));

  const ok = state.hasApp && state.conditions > 100 && state.galleries > 50;
  console.log(ok ? '  PASS - boots offline with its content'
                 : '  FAIL - offline boot did not produce a working app');
  await b.close();
  process.exit(ok ? 0 : 1);
})();
