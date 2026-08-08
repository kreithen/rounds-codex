#!/usr/bin/env node
/*
 * Check that each condition audio bar renders with the right title and duration.
 *
 *   node scripts/netlifysim.js <site-root> 8212 &
 *   RC_PW=<dir containing node_modules/playwright-core> node scripts/verify_condition_audio.js
 *
 * WHY THE WARM-UP PAGE IS NOT OPTIONAL
 * The first page loaded in a fresh browser context is still fetching content/*.json when a
 * 1.5s wait expires, so the audio bar has not been painted yet and the check reports a
 * missing bar on a perfectly good build. That happened here: copd failed and the other
 * three passed purely because they ran second, third and fourth against a warm cache.
 * Loading one throwaway page first makes the measurement about the build instead of the
 * boot. If this file ever reports exactly one failure and it is the first id in the list,
 * suspect the harness before the app.
 *
 * The gate click is also required -- a fresh context hits the #rc-gate disclaimer, which
 * swallows every tap until #rc-gate-ok is clicked.
 *
 * This does NOT click Play, so it does not exercise RCAP_EL, which stays null until the
 * first real user gesture. It checks what the bar advertises, which is where a wrong
 * duration shows up.
 */
const { chromium } = require(process.env.RC_PW + '/node_modules/playwright-core');
const { seedAuth } = require('/home/user/rounds-codex/scripts/rc_test_auth.js');

const PORT = 8212;
const WANT = {
  copd:   ['COPD', '4:13'],
  asthma: ['Asthma', '4:17'],
  cap:    ['Community-Acquired Pneumonia', '5:27'],
  pe:     ['Pulmonary Embolism', '4:34'],
};

(async () => {
  const b = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
    args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required'],
  });
  const ctx = await b.newContext();
  if (seedAuth) { try { await seedAuth(ctx, `http://127.0.0.1:${PORT}`); } catch (e) { console.log('seedAuth:', e.message); } }

  { const w = await ctx.newPage();
    await w.goto(`http://127.0.0.1:${PORT}/`, { waitUntil: 'domcontentloaded' });
    await w.waitForTimeout(2500);
    const g = await w.$('#rc-gate-ok'); if (g) await g.click();
    await w.waitForTimeout(500); await w.close(); }

  const errs = [];
  let fail = 0;
  for (const id of Object.keys(WANT)) {
    const p = await ctx.newPage();
    p.on('pageerror', e => errs.push(id + ': ' + e.message));
    await p.goto(`http://127.0.0.1:${PORT}/c/${id}`, { waitUntil: 'domcontentloaded' });
    await p.waitForTimeout(2500);
    const gate = await p.$('#rc-gate-ok');
    if (gate) await gate.click();
    await p.waitForTimeout(800);

    const r = await p.evaluate(() => {
      const bar = document.querySelector('.rcap');
      if (!bar) return { bar: false, ids: Object.keys(window.RC_AUDIO || {}).length };
      return {
        bar: true,
        text: bar.innerText.replace(/\s+/g, ' ').trim().slice(0, 170),
        buttons: bar.querySelectorAll('button').length,
        slider: !!bar.querySelector('input[type=range]'),
      };
    });

    const [title, dur] = WANT[id];
    const good = r.bar && r.text.includes(title) && r.text.includes(dur) && r.buttons > 0 && r.slider;
    if (!good) fail++;
    console.log(`${good ? 'ok  ' : 'FAIL'} ${id.padEnd(8)} bar=${r.bar} buttons=${r.buttons} slider=${r.slider}`);
    console.log(`       "${r.text || ''}"`);
    await p.close();
  }
  console.log('\npageerrors:', errs.length ? errs : 'none');
  console.log(fail ? `${fail} FAILED` : 'all four audio bars render with the right title and duration');
  await b.close();
  process.exit(fail ? 1 : 0);
})();
