#!/usr/bin/env node
/* verify_sw_upgrade.js  --  PORT=<n> SW_PATH=<path to a WRITABLE sw.js> RC_PW=<dir> node ...
 *
 * The migration nothing had ever exercised: a user already running the OLD worker receives a new
 * one. Bumping CACHE is the only thing that makes a worker re-precache, and it is also the only
 * thing that forces install and activate to run for everybody at once -- the path the
 * WebKitBlobResource failure lived in four separate times.
 *
 * Needs a site tree whose sw.js is a real writable file, not a symlink: the test rewrites CACHE in
 * place to simulate the deploy. Symlink everything else, copy sw.js.
 *
 * Start the sim yourself first:  node scripts/netlifysim.js <tree> 8963
 */
const fs = require('fs');
const { chromium } = require(process.env.RC_PW + '/node_modules/playwright-core');
const { seedAuth } = require('/home/user/rounds-codex/scripts/rc_test_auth.js');

const SW = process.env.SW_PATH;
const PORT = process.env.PORT || 8963;
/* Parameterised 2026-09-16. The versions were hard-coded to the v125->v141 migration they were
   written for, so re-running them for a LATER bump silently tested the wrong pair -- the exact
   shape of stale-guard failure this repo keeps re-learning. Pass FROM and TO. */
const FROM = process.env.FROM || 'rounds-codex-v125';
const TO   = process.env.TO   || 'rounds-codex-v141';

(async () => {
  const b = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
    args: ['--no-sandbox'],
  });
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 } });
  await seedAuth(ctx);
  const p = await ctx.newPage();
  const errs = [];
  p.on('pageerror', e => errs.push(String(e)));

  const waitWorker = () => p.evaluate(async () => {
    const ready = navigator.serviceWorker.ready.then(r => r.scope);
    const t = new Promise(s => setTimeout(() => s(null), 12000));
    return await Promise.race([ready, t]);
  });

  // --- 1. the OLD worker
  fs.writeFileSync(SW, fs.readFileSync(SW, 'utf8').replace(/rounds-codex-v\d+/, FROM));
  await p.goto(`http://127.0.0.1:${PORT}/`, { waitUntil: 'networkidle' });
  await p.evaluate(() => { const g = document.getElementById('rc-gate-ok'); if (g) g.click(); });
  await waitWorker();
  await p.waitForTimeout(3000);
  console.log('  1. old worker installed, caches:', JSON.stringify(await p.evaluate(() => caches.keys())));

  // --- 2. the deploy
  fs.writeFileSync(SW, fs.readFileSync(SW, 'utf8').replace(/rounds-codex-v\d+/, TO));
  console.log(`  2. sw.js swapped on disk to ${TO}`);

  // --- 3. the user comes back
  await p.reload({ waitUntil: 'networkidle' });
  await p.evaluate(async () => {
    const r = await navigator.serviceWorker.getRegistration();
    if (r) await r.update();          // what the browser does on navigation anyway
  });
  await p.waitForTimeout(5000);
  const keys = await p.evaluate(() => caches.keys());
  const n = await p.evaluate(async () => {
    const ks = await caches.keys();
    if (!ks.length) return 0;
    const c = await caches.open(ks[0]);
    return (await c.keys()).length;
  });
  console.log('  3. after the upgrade, caches:', JSON.stringify(keys), 'entries:', n);

  // --- 4. offline
  await ctx.setOffline(true);
  await p.reload({ waitUntil: 'load' }).catch(e => console.log('     reload threw:', e.message.slice(0, 50)));
  await p.waitForTimeout(3000);
  const state = await p.evaluate(() => ({
    hasApp: !!document.querySelector('.app'),
    conditions: (typeof DATA !== 'undefined' && DATA) ? DATA.length : 0,
    galleries: (typeof GALLERIES !== 'undefined' && GALLERIES) ? Object.keys(GALLERIES).length : 0,
  }));
  console.log('  4. OFFLINE after upgrade ->', JSON.stringify(state));
  console.log('     pageerrors:', errs.length, errs.slice(0, 2));

  const onlyNew = keys.length === 1 && keys[0] === TO;
  const ok = onlyNew && n === 21 && state.hasApp && state.conditions > 100 && state.galleries > 50;
  console.log(ok
    ? '  PASS - old cache deleted, new one built, app boots offline'
    : `  FAIL - onlyNewCache=${onlyNew} entries=${n} app=${state.hasApp}`);
  await b.close();
  process.exit(ok ? 0 : 1);
})();
