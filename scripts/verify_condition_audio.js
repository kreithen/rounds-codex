#!/usr/bin/env node
/*
 * Check each condition audio bar against what RC_AUDIO declares for it.
 *
 *   node scripts/netlifysim.js <site-root> 8212 &
 *   RC_PW=<dir with node_modules/playwright-core> PORT=8212 \
 *     IDS=copd,asthma,cap node scripts/verify_condition_audio.js
 *
 * It compares the bar's rendered text against RC_AUDIO's own title and duration rather
 * than a hard-coded table, so it cannot drift out of date and it catches the failure that
 * matters: a duration that does not match its recording. That one never errors -- the bar
 * publishes it before a byte is fetched and the scrubber maps position onto it, so the
 * recording simply seeks to the wrong place for its whole length.
 *
 * THE WARM-UP PAGE IS LOAD-BEARING
 * The first page in a fresh browser context is still fetching content/*.json when a short
 * wait expires, so the bar has not painted and the check calls a good build broken. That
 * happened here: copd "failed" while the other three passed only because they ran later
 * against a warm cache. If this ever reports exactly one failure and it is the first id in
 * IDS, suspect the harness before the app.
 *
 * Navigation is in-app via go('detail', id) rather than a fresh load per id, so the single
 * shared Audio element (RCAP_EL) is not torn down between checks -- one element for the
 * whole app is what makes playback survive navigation and keeps the CarPlay session.
 *
 * It deliberately does not click Play, so RCAP_EL stays null; this checks what the bar
 * advertises, not playback.
 */
const { chromium } = require(process.env.RC_PW + '/node_modules/playwright-core');
const { seedAuth } = require('/home/user/rounds-codex/scripts/rc_test_auth.js');
const PORT = Number(process.env.PORT || 8212);
const IDS = (process.env.IDS || '').split(',').filter(Boolean);

const mmss = s => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

(async () => {
  const b = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
    args: ['--no-sandbox'],
  });
  const ctx = await b.newContext();
  try { await seedAuth(ctx, `http://127.0.0.1:${PORT}`); } catch (e) {}

  // warm-up: the first page in a cold context is still fetching content/*.json
  { const w = await ctx.newPage();
    await w.goto(`http://127.0.0.1:${PORT}/`, { waitUntil: 'domcontentloaded' });
    await w.waitForTimeout(2500);
    const g = await w.$('#rc-gate-ok'); if (g) await g.click();
    await w.waitForTimeout(400); await w.close(); }

  const errs = []; let fail = 0;
  const p = await ctx.newPage();
  p.on('pageerror', e => errs.push(e.message));
  await p.goto(`http://127.0.0.1:${PORT}/`, { waitUntil: 'domcontentloaded' });
  await p.waitForTimeout(2000);
  const g = await p.$('#rc-gate-ok'); if (g) await g.click();
  await p.waitForTimeout(500);

  for (const id of IDS) {
    // navigate in-app so we exercise the same path a user takes, and the
    // single shared Audio element is not torn down between checks
    await p.evaluate(i => window.go && go('detail', i), id);
    await p.waitForTimeout(700);
    const r = await p.evaluate(() => {
      const bar = document.querySelector('.rcap');
      const a = window.RC_AUDIO || {};
      return bar ? { bar: true, text: bar.innerText.replace(/\s+/g, ' ').trim(), n: Object.keys(a).length } : { bar: false };
    });
    const want = await p.evaluate(i => (window.RC_AUDIO || {})[i], id);
    const good = r.bar && want && r.text.includes(want.title) && r.text.includes(mmss(want.duration));
    if (!good) fail++;
    console.log(`${good ? 'ok  ' : 'FAIL'} ${id.padEnd(19)} ${want ? mmss(want.duration) : '?'}  "${(r.text || '').slice(0, 70)}"`);
  }
  console.log('\npageerrors:', errs.length ? errs.slice(0, 4) : 'none');
  console.log(fail ? `${fail} FAILED` : `all ${IDS.length} bars match what RC_AUDIO declares`);
  await b.close();
  process.exit(fail ? 1 : 0);
})();
