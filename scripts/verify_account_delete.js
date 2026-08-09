#!/usr/bin/env node
/* Drive every branch of the in-app account-deletion control.
 *
 * The edge function cannot be reached from this container (api.supabase.com and the project host
 * both fail to connect), so the network is stubbed. That is the point: what needs proving here is
 * the CLIENT contract -- that the right request goes out, that a refusal is honoured, that a 401
 * is distinguished from a failure, and that success clears every local trace. Whether Supabase
 * deletes the row is the function's job and is verified by calling it for real, once.
 *
 * Branches:
 *   1  user cancels at the first confirm      -> no request, nothing cleared
 *   2  user fails the DELETE prompt           -> no request, explicit "cancelled" message
 *   3  success (stubbed 200)                  -> correct request, all rc.app.* keys cleared
 *   4  expired session (stubbed 401)          -> distinct message, keys NOT cleared
 *   5  network failure (stubbed reject)       -> failure message, keys NOT cleared
 *
 * Run against a build WITHOUT the control and it fails at once, which is the check that this file
 * is a guard and not decoration.
 *
 * Usage: RC_PW=<scratchpad> PORT=8259 node scripts/verify_account_delete.js
 */
const { chromium } = require(process.env.RC_PW + '/node_modules/playwright-core');
const { seedAuth } = require('/home/user/rounds-codex/scripts/rc_test_auth.js');
const PORT = Number(process.env.PORT || 8259);
const KEYS = ['rc.app.session.v1', 'rc.app.email.v1', 'rc.app.passkey.v1'];

async function ctxFor(browser, { confirm1, typed, mode }) {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
  await seedAuth(ctx);
  await ctx.addInitScript(([keys, c1, t, m]) => {
    /* Only the email here. Seeding rc.app.passkey.v1 BEFORE load makes the wall's hasPK() true,
       so it shows the Face ID lock screen instead of passing, and every click is intercepted by
       the overlay. Found the hard way. The passkey key is planted after the wall clears, below. */
    try { localStorage.setItem('rc.app.email.v1', 'test@example.com'); } catch (e) {}
    window.confirm = () => c1;
    window.prompt = () => t;
    window.__req = null;
    const real = window.fetch.bind(window);
    window.fetch = (url, opts) => {
      if (String(url).includes('/functions/v1/delete-account')) {
        window.__req = { url: String(url), method: opts && opts.method,
                         auth: opts && opts.headers && opts.headers.Authorization,
                         body: opts && opts.body || null };
        if (m === 'ok')   return Promise.resolve(new Response('{"deleted":true}', { status: 200 }));
        if (m === '401')  return Promise.resolve(new Response('{"error":"invalid session"}', { status: 401 }));
        return Promise.reject(new Error('network down'));
      }
      return real(url, opts);
    };
  }, [KEYS, confirm1, typed, mode]);
  return ctx;
}

async function run(browser, label, opts, expect) {
  const ctx = await ctxFor(browser, opts);
  const p = await ctx.newPage();
  /* The scratch tree is a partial copy, so registering sw.js throws InvalidStateError. That is a
     harness artifact, not an app fault -- the worker is covered by verify_sw.js. Everything else
     still counts. */
  const errs = [];
  p.on('pageerror', e => { const t = String(e); if (!/ServiceWorker/i.test(t)) errs.push(t); });
  await p.goto(`http://127.0.0.1:${PORT}/`, { waitUntil: 'domcontentloaded' });
  await p.waitForTimeout(3000);
  const g = await p.$('#rc-gate-ok'); if (g) await g.click();
  await p.waitForTimeout(400);
  // plant the passkey key now the wall has passed, so branch 3 can prove it gets cleared
  await p.evaluate(() => { try { localStorage.setItem('rc.app.passkey.v1', 'x'); } catch (e) {} });
  await p.evaluate(() => go('account'));
  await p.waitForTimeout(600);

  const btn = await p.$('button.ab-danger[onclick*="rcDeleteAccount"]');
  if (!btn) { console.log(`FAIL ${label}: no Delete control on the account page`); await ctx.close(); return false; }
  await btn.click();
  /* Read BEFORE the success path's 1200ms redirect to '/': waiting longer meant reading a freshly
     loaded page, where __req is null and the cleared keys look uncleared. That read as "no request
     was sent" and cost a wrong diagnosis. */
  await p.waitForTimeout(800);

  const r = await p.evaluate(k => ({
    req: window.__req,
    msg: (document.getElementById('rc-del-msg') || {}).textContent || '',
    left: k.filter(x => localStorage.getItem(x) !== null),
  }), KEYS);

  const problems = [];
  if (expect.request && !r.req) problems.push('expected a request, none sent');
  if (!expect.request && r.req) problems.push('a request was sent when it should not have been');
  if (expect.request && r.req) {
    if (r.req.method !== 'POST') problems.push(`method ${r.req.method}`);
    if (!/^Bearer .+/.test(r.req.auth || '')) problems.push('missing Bearer token');
    if (r.req.body) problems.push('sent a body -- the user must be identified from the token only');
  }
  if (expect.cleared && r.left.length) problems.push(`keys not cleared: ${r.left}`);
  if (!expect.cleared && r.left.length !== KEYS.length) problems.push(`keys cleared when they should not be: left ${r.left}`);
  if (expect.msg && !expect.msg.test(r.msg)) problems.push(`message ${JSON.stringify(r.msg)} !~ ${expect.msg}`);
  if (errs.length) problems.push(`pageerrors: ${errs.slice(0, 2)}`);

  console.log(`${problems.length ? 'FAIL' : 'ok  '} ${label.padEnd(34)} req=${r.req ? 'yes' : 'no '} ` +
              `keysLeft=${r.left.length}/${KEYS.length} msg=${JSON.stringify(r.msg.slice(0, 46))}`);
  problems.forEach(x => console.log(`       - ${x}`));
  await ctx.close();
  return !problems.length;
}

(async () => {
  const b = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox'] });
  let fail = 0;
  const cases = [
    ['1 cancels the first confirm', { confirm1: false, typed: 'DELETE', mode: 'ok' },
     { request: false, cleared: false, msg: /^$/ }],
    ['2 fails the DELETE prompt',   { confirm1: true, typed: 'nope', mode: 'ok' },
     { request: false, cleared: false, msg: /Cancelled/i }],
    ['3 success',                   { confirm1: true, typed: 'DELETE', mode: 'ok' },
     { request: true, cleared: true, msg: /deleted/i }],
    ['4 expired session (401)',     { confirm1: true, typed: 'delete', mode: '401' },
     { request: true, cleared: false, msg: /expired/i }],
    ['5 network failure',           { confirm1: true, typed: 'DELETE', mode: 'net' },
     { request: true, cleared: false, msg: /Could not delete/i }],
  ];
  for (const [label, opts, expect] of cases) if (!await run(b, label, opts, expect)) fail++;
  await b.close();
  console.log(fail ? `\n${fail} branch(es) FAILED` : '\nall five branches behave, and no request carries a user id');
  process.exit(fail ? 1 : 0);
})();
