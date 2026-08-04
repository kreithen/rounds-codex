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
const PORT = process.argv[2];
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox'] });
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 } });
  await seedAuth(ctx);          // the login wall covers everything; see rc_test_auth.js
  const p = await ctx.newPage();
  const errs = []; p.on('pageerror', e => errs.push(String(e)));
  const bad = [];
  await p.goto(`http://127.0.0.1:${PORT}/`, { waitUntil: 'networkidle' });
  // GALLERIES/GID/gcur are top-level `const`/`let`, which never become window properties.
  await p.waitForFunction(() => typeof GALLERIES !== 'undefined' && Object.keys(GALLERIES).length);
  const g = await p.$('#rc-gate-ok'); if (g) { await g.click(); await p.waitForTimeout(250); }

  const state = () => p.evaluate(() => ({
    gid: GID, i: gcur,
    vn: (document.getElementById('vn') || {}).textContent,
    vtot: (document.getElementById('vtot') || {}).textContent,
    stackTop: stack[stack.length - 1].id,
    url: location.pathname,
  }));
  const order = await p.evaluate(() => rcGalOrder());
  console.log('chain length:', order.length, '| first:', order[0], '| last:', order[order.length - 1]);

  // --- forward across the boundary the user named ---
  await p.evaluate(() => { go('gallery', 'cardiac-arrest'); });
  await p.waitForTimeout(250);
  await p.evaluate(() => openViewer('cardiac-arrest', 9));   // image 10
  await p.waitForTimeout(250);
  console.log('at cardiac-arrest image 10:', JSON.stringify(await state()));
  await p.evaluate(() => gnav(1));
  await p.waitForTimeout(250);
  const fwd = await state();
  console.log('after right arrow      :', JSON.stringify(fwd));
  if (fwd.gid !== 'hyperlipidemia') bad.push(`forward went to ${fwd.gid}, expected hyperlipidemia`);
  if (fwd.i !== 0) bad.push(`forward landed on index ${fwd.i}, expected 0`);
  if (fwd.vn !== '1') bad.push(`header says image ${fwd.vn}, expected 1`);
  if (fwd.stackTop !== 'hyperlipidemia') bad.push(`page underneath still ${fwd.stackTop}`);
  if (!/hyperlipidemia$/.test(fwd.url)) bad.push(`url is ${fwd.url}`);

  // --- backward across the same boundary ---
  await p.evaluate(() => gnav(-1));
  await p.waitForTimeout(250);
  const back = await state();
  console.log('after left arrow back  :', JSON.stringify(back));
  if (back.gid !== 'cardiac-arrest') bad.push(`back went to ${back.gid}, expected cardiac-arrest`);
  if (back.i !== 9) bad.push(`back landed on index ${back.i}, expected 9 (last)`);
  if (back.vn !== '10') bad.push(`header says image ${back.vn}, expected 10`);

  // --- the two ends of the whole chain wrap ---
  await p.evaluate(o => openViewer(o[o.length - 1], 9), order);
  await p.waitForTimeout(200); await p.evaluate(() => gnav(1)); await p.waitForTimeout(200);
  const wrapF = await state();
  console.log('last gallery + right   :', JSON.stringify({ gid: wrapF.gid, i: wrapF.i }));
  if (wrapF.gid !== order[0] || wrapF.i !== 0) bad.push(`end wrap went to ${wrapF.gid}:${wrapF.i}, expected ${order[0]}:0`);
  await p.evaluate(o => openViewer(o[0], 0), order);
  await p.waitForTimeout(200); await p.evaluate(() => gnav(-1)); await p.waitForTimeout(200);
  const wrapB = await state();
  console.log('first gallery + left   :', JSON.stringify({ gid: wrapB.gid, i: wrapB.i }));
  if (wrapB.gid !== order[order.length - 1]) bad.push(`start wrap went to ${wrapB.gid}`);

  // --- within a gallery nothing changed ---
  await p.evaluate(() => openViewer('chf', 3));
  await p.waitForTimeout(200); await p.evaluate(() => gnav(1)); await p.waitForTimeout(150);
  const mid = await state();
  if (mid.gid !== 'chf' || mid.i !== 4) bad.push(`mid-gallery step broke: ${mid.gid}:${mid.i}`);
  console.log('mid-gallery step       :', JSON.stringify({ gid: mid.gid, i: mid.i }));

  // --- the image actually decoded after crossing, not just the counters ---
  await p.evaluate(() => openViewer('cardiac-arrest', 9));
  await p.waitForTimeout(200); await p.evaluate(() => gnav(1));
  await p.waitForFunction(() => { const im = document.querySelector('#vframe img'); return im && im.complete && im.naturalWidth > 0; }, { timeout: 8000 }).catch(() => {});
  const img = await p.evaluate(() => { const im = document.querySelector('#vframe img'); return im ? { src: im.getAttribute('src'), w: im.naturalWidth } : null; });
  console.log('rendered image         :', JSON.stringify(img));
  if (!img || !img.w) bad.push('image did not decode after crossing');
  if (img && !/hyperlipidemia/.test(img.src)) bad.push(`showing ${img.src}, expected a hyperlipidemia page`);
  // thumbnail strip must be the NEW gallery's
  const strip = await p.evaluate(() => [...document.querySelectorAll('#vstrip .vth img')].slice(0,2).map(i => i.getAttribute('src')));
  console.log('strip rebuilt          :', JSON.stringify(strip));
  if (strip.some(x => !/hyperlipidemia/.test(x))) bad.push('thumbnail strip still shows the old gallery');

  if (errs.length) bad.push(`${errs.length} page errors: ${errs.slice(0,2).join(' | ')}`);
  console.log('\npage errors:', errs.length);
  if (bad.length) { console.log('FAIL'); bad.forEach(x => console.log('  -', x)); }
  else console.log('PASS - chains both ways, wraps at both ends, keeps the page and URL in step');
  await b.close(); process.exit(bad.length ? 1 : 0);
})();
