/* Verify the gallery PDF download from both entry points.
 *
 * The bug this guards against was a button whose onclick was a toast() describing what it would
 * do, so the only observable behaviour was a toast -- which is indistinguishable from a real
 * handler that toasts and then fails. A test that just asserts "a toast appeared" would have
 * PASSED on the broken build. So this intercepts HTMLAnchorElement.click and inspects the anchor
 * the handler actually built: its href, its download name, and target=_blank, which is what makes
 * iOS show the PDF and its share sheet instead of navigating the app's own tab.
 *
 * Usage: PORT=8216 node scripts/verify_gallery_pdf.js [gallery-id ...]
 */
'use strict';
const { chromium } = require(process.env.RC_PW + '/node_modules/playwright-core');
const { seedAuth } = require('/home/user/rounds-codex/scripts/rc_test_auth.js');
const PORT = Number(process.env.PORT || 8216);
const IDS = process.argv.slice(2).length ? process.argv.slice(2) : ['cardiac-arrest', 'dvt', 'croup'];

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
  const g = await p.$('#rc-gate-ok'); if (g) await g.click();
  await p.waitForFunction(() => typeof go === 'function' && window.GALLERIES &&
    Object.keys(window.GALLERIES).length > 50, null, { timeout: 20000 })
    .catch(async () => {
      // GALLERIES may not be on window; fall back to the app being usable
      await p.waitForFunction(() => typeof go === 'function' && typeof openViewer === 'function',
                              null, { timeout: 20000 });
    });

  // Capture the anchor the handler builds instead of letting it navigate away.
  await p.evaluate(() => {
    window.__dl = [];
    const real = HTMLAnchorElement.prototype.click;
    HTMLAnchorElement.prototype.click = function () {
      window.__dl.push({
        href: this.getAttribute('href'),
        resolved: this.href,
        download: this.getAttribute('download'),
        target: this.getAttribute('target'),
        rel: this.getAttribute('rel'),
      });
      // deliberately do NOT call through: a real click opens a tab or navigates
    };
    window.__realClick = real;
  });

  let fail = 0;
  for (const id of IDS) {
    for (const where of ['gallery page', 'viewer']) {
      await p.evaluate(() => { window.__dl.length = 0; });

      if (where === 'gallery page') {
        await p.evaluate(i => go('gallery', i), id);
        await p.waitForTimeout(600);
        const btn = await p.$('.pdfbtn');
        if (!btn) { console.log(`FAIL ${id} ${where}: no .pdfbtn on the page`); fail++; continue; }
        await btn.click();
      } else {
        // open a page so the viewer overlay exists, then tap its header download button
        await p.evaluate(i => { go('gallery', i); openViewer(i, 0); }, id);
        await p.waitForTimeout(600);
        const hdr = await p.$$('#vtop .tb-btn');
        if (hdr.length < 2) { console.log(`FAIL ${id} ${where}: viewer header has ${hdr.length} buttons`); fail++; continue; }
        await hdr[hdr.length - 1].click();          // the download button is the last one
      }
      await p.waitForTimeout(300);

      const dl = await p.evaluate(() => window.__dl);
      const want = await p.evaluate(i => (window.GALLERIES || {})[i] && window.GALLERIES[i].pdf, id);

      if (dl.length !== 1) {
        console.log(`FAIL ${id.padEnd(14)} ${where.padEnd(12)} built ${dl.length} download links, want 1` +
                    (dl.length === 0 ? '  (this is the dead-button signature)' : ''));
        fail++; continue;
      }
      const a = dl[0];
      const okHref = want ? a.href === want : /\.pdf$/i.test(a.href || '');
      const okTgt = a.target === '_blank';           // the iOS accommodation
      const okName = /\.pdf$/i.test(a.download || '') && /Rounds Codex/.test(a.download || '');
      const ok = okHref && okTgt && okName;
      if (!ok) fail++;
      console.log(`${ok ? 'ok  ' : 'FAIL'} ${id.padEnd(14)} ${where.padEnd(12)} ` +
                  `href=${okHref ? 'right' : 'WRONG (' + a.href + ')'} ` +
                  `target=${a.target || 'MISSING'} name="${a.download}"`);
    }
  }

  console.log('\npageerrors:', errs.length ? errs.slice(0, 3) : 'none');
  console.log(fail ? `${fail} FAILED` : `both entry points build a correct PDF link for all ${IDS.length} galleries`);
  await b.close();
  process.exit(fail ? 1 : 0);
})();
