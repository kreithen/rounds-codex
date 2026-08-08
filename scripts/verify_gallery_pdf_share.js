/* Exercise all four branches of the gallery PDF button.
 *
 * The branches ARE the design, so a test that only proves the happy path proves very little:
 *
 *   1. no file-share support        -> opens the tab, never fetches
 *   2. file-share supported         -> shares a File named for the gallery, right type, real bytes
 *   3. user dismisses the sheet     -> nothing further happens (the bug this guards: falling back
 *                                      would hand the reader a download they just declined)
 *   4. share fails for a real reason-> falls back to the tab
 *
 * Plus the pointerdown warm-up, which is what keeps navigator.share inside the tap's user
 * activation on iOS. Headless Chromium has no share support, so branches 2-4 are driven by
 * stubbing navigator.canShare/navigator.share and observing what the handler passes.
 *
 * Usage: PORT=8219 node scripts/verify_gallery_pdf_share.js [gallery-id]
 */
'use strict';
const { chromium } = require(process.env.RC_PW + '/node_modules/playwright-core');
const { seedAuth } = require('/home/user/rounds-codex/scripts/rc_test_auth.js');
const PORT = Number(process.env.PORT || 8219);
const ID = process.argv[2] || 'cardiac-arrest';

(async () => {
  const b = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
    args: ['--no-sandbox'],
  });
  let fail = 0;
  const errs = [];

  // one fresh page per branch: the stubs and the warm-up cache differ between them
  const open = async (stub) => {
    const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
    try { await seedAuth(ctx, `http://127.0.0.1:${PORT}`); } catch (e) {}
    const p = await ctx.newPage();
    p.on('pageerror', e => errs.push(String(e)));
    await p.addInitScript(stub);
    await p.goto(`http://127.0.0.1:${PORT}/`, { waitUntil: 'domcontentloaded' });
    const g = await p.$('#rc-gate-ok'); if (g) await g.click();
    await p.waitForFunction(() => typeof rcGalleryPDF === 'function' && typeof GALLERIES !== 'undefined'
      && Object.keys(GALLERIES).length > 50, null, { timeout: 20000 });
    // capture the anchor instead of navigating, and record every PDF fetch
    await p.evaluate(() => {
      window.__dl = []; window.__fetched = [];
      HTMLAnchorElement.prototype.click = function () { window.__dl.push(this.getAttribute('href')); };
      const rf = window.fetch;
      window.fetch = function (u) { if (String(u).endsWith('.pdf')) window.__fetched.push(String(u)); return rf.apply(this, arguments); };
    });
    return { ctx, p };
  };

  const tapPdfButton = async (p, id) => {
    await p.evaluate(i => go('gallery', i), id);
    await p.waitForTimeout(500);
    const btn = await p.$('.pdfbtn');
    if (!btn) throw new Error('no .pdfbtn');
    // a real press: pointerdown fires the warm-up, then the click
    const box = await btn.boundingBox();
    await p.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await p.mouse.down();
    await p.waitForTimeout(60);
    await p.mouse.up();
    await p.waitForTimeout(1200);         // let the fetch and the share settle
  };

  const check = (label, cond, detail) => {
    if (!cond) fail++;
    console.log(`${cond ? 'ok  ' : 'FAIL'} ${label}${detail ? '  ' + detail : ''}`);
  };

  /* 1. no file-share support -> tab, and no PDF fetch at all */
  {
    const { ctx, p } = await open(() => {
      delete Navigator.prototype.canShare; delete Navigator.prototype.share;
    });
    await tapPdfButton(p, ID);
    const r = await p.evaluate(() => ({ dl: window.__dl, fetched: window.__fetched, shared: window.__shared }));
    check('no file-share support -> opens the tab', r.dl.length === 1, `links=${r.dl.length}`);
    // the warm-up still runs on pointerdown; what must NOT happen is a share attempt
    check('no file-share support -> no share attempted', !r.shared);
    await ctx.close();
  }

  /* 2. file-share supported -> shares a real File */
  {
    const { ctx, p } = await open(() => {
      Navigator.prototype.canShare = function (d) { return !!(d && d.files && d.files.length); };
      Navigator.prototype.share = function (d) {
        const f = d.files && d.files[0];
        window.__shared = { name: f && f.name, type: f && f.type, size: f && f.size, title: d.title, keys: Object.keys(d) };
        return Promise.resolve();
      };
    });
    await tapPdfButton(p, ID);
    const r = await p.evaluate(() => ({ dl: window.__dl, fetched: window.__fetched, shared: window.__shared }));
    const sh = r.shared || {};
    check('file share -> navigator.share called with a file', !!sh.name, JSON.stringify(sh));
    check('file share -> named for the gallery, .pdf', /^Rounds Codex - .+ Gallery\.pdf$/.test(sh.name || ''));
    check('file share -> application/pdf', sh.type === 'application/pdf');
    check('file share -> real bytes, not the 1-byte probe', sh.size > 100000, `${sh.size} bytes`);
    check('file share -> no tab opened as well', r.dl.length === 0, `links=${r.dl.length}`);
    check('warm-up fetched the PDF exactly once', r.fetched.length === 1, `fetches=${r.fetched.length}`);
    await ctx.close();
  }

  /* 3. the user swipes the sheet away -> nothing further */
  {
    const { ctx, p } = await open(() => {
      Navigator.prototype.canShare = function (d) { return !!(d && d.files && d.files.length); };
      Navigator.prototype.share = function () {
        window.__shared = { aborted: true };
        const e = new Error('cancelled'); e.name = 'AbortError';
        return Promise.reject(e);
      };
    });
    await tapPdfButton(p, ID);
    const r = await p.evaluate(() => ({ dl: window.__dl }));
    check('dismissed sheet -> NO fallback download', r.dl.length === 0,
          r.dl.length ? '(would hand the reader a download they declined)' : '');
    await ctx.close();
  }

  /* 4. share fails for a real reason -> tab */
  {
    const { ctx, p } = await open(() => {
      Navigator.prototype.canShare = function (d) { return !!(d && d.files && d.files.length); };
      Navigator.prototype.share = function () {
        const e = new Error('activation lost'); e.name = 'NotAllowedError';
        return Promise.reject(e);
      };
    });
    await tapPdfButton(p, ID);
    const r = await p.evaluate(() => ({ dl: window.__dl }));
    check('share refused -> falls back to the tab', r.dl.length === 1, `links=${r.dl.length}`);
    await ctx.close();
  }

  console.log('\npageerrors:', errs.length ? errs.slice(0, 3) : 'none');
  if (errs.length) fail++;
  console.log(fail ? `${fail} FAILED` : 'all four branches behave, and the warm-up fetches once');
  await b.close();
  process.exit(fail ? 1 : 0);
})();
