// Headless verification of the USMLE real-image wiring.
//
//   node scripts/verify_usmle_illus.js <port> [expected-count|path/to/_wired.json]
//
// Serves the test tree with the Netlify simulator, then proves three separate things:
//   1. illus-real.js loads and registers the expected number of <img> entries in RC_ILLUS
//   2. every one of those src paths actually resolves over HTTP with real bytes
//   3. the ENGINE renders one as a figure badged IMAGE (not SCHEMATIC), decoded, at the
//      dimensions the width/height attributes claim
// (3) is the one that catches a wiring that looks right and renders wrong.
//
// The expected count comes from the _wired.json that incorporate_images.py writes, so a
// partial set is checked against what was actually built rather than against a number edited
// into this file by hand - which is how a stale expectation ends up passing a wrong build.
// playwright-core is not a dependency of this repo; it gets installed into whatever scratch
// folder a session is using. RC_PW overrides, otherwise try the usual places.
function loadPW() {
  const tries = [process.env.RC_PW, 'playwright-core',
                 process.cwd() + '/node_modules/playwright-core'].filter(Boolean);
  for (const t of tries) { try { return require(t); } catch (e) {} }
  console.error('playwright-core not found. npm install playwright-core somewhere, then:\n' +
                '  RC_PW=/abs/path/to/node_modules/playwright-core node scripts/verify_usmle_illus.js <port>');
  process.exit(2);
}
const { chromium } = loadPW();

const PORT = process.argv[2] || '8931';
const BASE = `http://127.0.0.1:${PORT}`;

// Second arg is either a plain count or a _wired.json to read it out of.
const EXPECT = (() => {
  const a = process.argv[3];
  if (!a) return null;
  if (/^\d+$/.test(a)) return +a;
  return require('fs').readFileSync && JSON.parse(require('fs').readFileSync(a, 'utf8')).count;
})();

(async () => {
  const browser = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
    args: ['--no-sandbox'],
  });
  // A fresh context every run: the service worker is network-first with a cache fallback, so a
  // reused profile can serve a stale illus-real.js and "pass" on a build that never shipped.
  const ctx = await browser.newContext({ viewport: { width: 430, height: 900 } });
  const page = await ctx.newPage();
  const errors = [], failed = [];
  page.on('pageerror', e => errors.push(String(e)));
  page.on('requestfailed', r => failed.push(r.url() + ' :: ' + (r.failure() || {}).errorText));

  await page.goto(BASE + '/usmle/', { waitUntil: 'networkidle' });

  // ---- 1. registry ----
  const reg = await page.evaluate(() => {
    const R = window.RC_ILLUS || {};
    const keys = Object.keys(R);
    const imgs = keys.filter(k => /^\s*<img/i.test(R[k]));
    return { total: keys.length, imgs: imgs.length, sample: R[imgs[0]] || null,
             srcs: imgs.map(k => [k, (/src="([^"]+)"/.exec(R[k]) || [])[1],
                                     +(/width="(\d+)"/.exec(R[k]) || [])[1],
                                     +(/height="(\d+)"/.exec(R[k]) || [])[1]]) };
  });
  console.log(`RC_ILLUS: ${reg.total} entries, ${reg.imgs} are <img>`);
  console.log('sample   :', reg.sample);

  // ---- 2. do all the paths resolve? ----
  const net = await page.evaluate(async (srcs) => {
    const bad = [];
    let bytes = 0;
    for (const [id, src] of srcs) {
      const r = await fetch(new URL(src, location.href).href, { cache: 'no-store' });
      if (!r.ok) { bad.push(`${id} HTTP ${r.status}`); continue; }
      const b = await r.blob();
      if (b.size < 1000) bad.push(`${id} only ${b.size} bytes`);
      if (!/^image\//.test(b.type)) bad.push(`${id} type ${b.type}`);
      bytes += b.size;
    }
    return { bad, mb: +(bytes / 1e6).toFixed(1) };
  }, reg.srcs);
  console.log(`HTTP     : ${reg.srcs.length - net.bad.length}/${reg.srcs.length} resolve, ${net.mb} MB total`);
  net.bad.slice(0, 10).forEach(b => console.log('   BAD', b));

  // ---- 3. does the engine render one? ----
  await page.selectOption('#system', { index: 1 }).catch(() => {});
  await page.waitForTimeout(150);
  await page.click('#start');
  await page.waitForSelector('#vignette', { state: 'visible' });

  let found = null;
  for (let i = 0; i < 90; i++) {
    // Wait for the decode before measuring. Reading naturalWidth straight after render is a
    // race: it returns 0 for an image that is merely still loading, so the check reported a
    // dead image on a perfectly good build. Passing by luck and failing by luck are the same
    // bug.
    await page.waitForFunction(() => {
      const img = document.querySelector('#vignette figure.anchor-fig img');
      return !img || (img.complete && img.naturalWidth > 0);
    }, { timeout: 8000 }).catch(() => {});
    found = await page.evaluate(() => {
      const fig = document.querySelector('#vignette figure.anchor-fig');
      const img = fig && fig.querySelector('img');
      if (!img) return null;
      return { badge: fig.querySelector('.schembadge').textContent.trim(),
               badgeReal: fig.querySelector('.schembadge').classList.contains('real'),
               src: img.getAttribute('src'), attrW: +img.getAttribute('width'),
               attrH: +img.getAttribute('height'), natW: img.naturalWidth, natH: img.naturalHeight,
               complete: img.complete, boxW: Math.round(img.getBoundingClientRect().width),
               chip: (document.querySelector('#imgchipWrap') || {}).textContent.trim() };
    });
    if (found) break;
    const passq = await page.$('#passq');
    if (!passq) break;
    await passq.click();
    await page.waitForTimeout(60);
  }

  console.log('\nengine render:', found ? JSON.stringify(found, null, 1) : 'NO FIGURE FOUND');

  // ---- verdict ----
  const problems = [];
  if (EXPECT == null) console.log('(no expected count given - not asserting the total)');
  else if (reg.imgs !== EXPECT) problems.push(`expected ${EXPECT} <img> entries, got ${reg.imgs}`);
  if (net.bad.length) problems.push(`${net.bad.length} image paths do not resolve`);
  if (!found) problems.push('engine never rendered an <img> figure');
  else {
    if (found.badge !== 'IMAGE') problems.push(`badge says "${found.badge}", expected IMAGE`);
    if (!found.badgeReal) problems.push('badge is missing the .real class');
    if (!found.natW) problems.push('image did not decode (naturalWidth 0)');
    if (found.natW !== found.attrW || found.natH !== found.attrH)
      problems.push(`width/height attrs ${found.attrW}x${found.attrH} != decoded ${found.natW}x${found.natH}`);
    if (found.boxW > 430) problems.push(`rendered ${found.boxW}px wide, overflows a 430px viewport`);
  }
  if (errors.length) problems.push(`${errors.length} page errors: ${errors.slice(0, 3).join(' | ')}`);
  const realFails = failed.filter(f => !/favicon/.test(f));
  if (realFails.length) problems.push(`${realFails.length} failed requests: ${realFails.slice(0, 3).join(' | ')}`);

  console.log('\npage errors:', errors.length, ' failed requests:', realFails.length);
  if (problems.length) { console.log('\nFAIL'); problems.forEach(p => console.log('  -', p)); }
  else console.log(`\nPASS - ${reg.imgs} wired, all paths resolve, engine renders an \`IMAGE\`-badged figure at the declared size`);

  await browser.close();
  process.exit(problems.length ? 1 : 0);
})();
