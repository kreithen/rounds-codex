#!/usr/bin/env node
/* Replace the single drawn App Store badge in a social piece with the two OFFICIAL
 * store badges, side by side.
 *
 * WHY THIS IS A PAINT-OVER AND NOT A CONTENT-AWARE FILL, which is the whole reason the
 * job is tractable: on `feature-sheet` the old badge sits over the ECG and heart artwork,
 * so erasing it would need reconstruction. It doesn't, because two badges at a matched
 * height are ~2.2x the width of one. Give the pair a height >= the old badge's and centre
 * it on the old badge's box and the pair's footprint strictly CONTAINS the old one — so
 * nothing is erased, it is covered. The script asserts that containment and refuses if it
 * does not hold, because a pair that is 2px short leaves a white crescent that reads as a
 * rendering artifact rather than a mistake.
 *
 * Geometry comes from marketing/artwork/badge-spec.json as fractions of the CONTENT box, so
 * it transfers to any export resolution. The measurements were taken off 921px phone
 * screenshots; the originals are larger and the fractions still hold.
 *
 *   node scripts/add_store_badges.js <in.png> <piece> <out.png> --play <play-badge.png> \
 *        [--apple <badge.svg|png>] [--height <frac>] [--dry]
 *
 * Chromium does the compositing AND the SVG rasterisation in one pass, which is why this is
 * Node rather than Python: there is no cairosvg or rsvg in the container, but playwright-core
 * is already how scripts/make_feature_graphic.js renders.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SPEC = path.join(ROOT, 'marketing/artwork/badge-spec.json');
const APPLE_DEFAULT = path.join(ROOT, 'marketing/badges/apple-download-on-the-app-store.svg');

function die(msg) { console.error('add_store_badges: ' + msg); process.exit(1); }

const argv = process.argv.slice(2);
const flag = (n, d) => { const i = argv.indexOf('--' + n); return i < 0 ? d : argv[i + 1]; };
const has = (n) => argv.includes('--' + n);
const pos = argv.filter((a, i) => !a.startsWith('--') && !(i > 0 && argv[i - 1].startsWith('--') && !['dry'].includes(argv[i - 1].slice(2))));

const [inFile, piece, outFile] = pos;
if (!inFile || !piece || !outFile) die('usage: <in> <piece> <out> --play <play-badge>');

const playBadge = flag('play');
const appleBadge = flag('apple', APPLE_DEFAULT);
if (!playBadge) die('--play is required. The Google Play badge cannot be fetched from a session:\n' +
  '  play.google.com, play.google and partnermarketinghub.withgoogle.com all refuse CONNECT\n' +
  '  through the agent proxy. Download it from the Play badge generator on the Mac.\n' +
  '  Do NOT substitute a Wikimedia copy — it may be a superseded revision.');
for (const f of [inFile, playBadge, appleBadge]) if (!fs.existsSync(f)) die('missing file: ' + f);

const spec = JSON.parse(fs.readFileSync(SPEC, 'utf8'));
const P = spec.pieces[piece];
if (!P) die(`unknown piece "${piece}". Known: ${Object.keys(spec.pieces).join(', ')}`);

(async () => {
  const { chromium } = require(path.join(process.env.RC_PW || ROOT, 'node_modules/playwright-core'));
  const browser = await chromium.launch({
    executablePath: process.env.RC_CHROME || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
    args: ['--no-sandbox'],
  });
  const page = await browser.newPage();

  const dataUrl = (f) => {
    const ext = path.extname(f).toLowerCase();
    const mime = ext === '.svg' ? 'image/svg+xml' : ext === '.jpg' || ext === '.jpeg' ? 'image/jpeg' : 'image/png';
    return `data:${mime};base64,${fs.readFileSync(f).toString('base64')}`;
  };

  // Google's downloadable badge SHIPS WITH ITS CLEAR SPACE BAKED IN — the generic web asset is
  // 646x250 with the badge artwork inset by roughly 1/4 of its height on every side. Sizing that
  // padded PNG to Apple's height therefore renders the actual Play badge about a third SHORTER
  // than Apple's, which is precisely the thing Google's "never smaller than another store's
  // badge" rule forbids, while looking deliberate. So the padding is trimmed off first and the
  // clear space is re-added as layout gap, where it belongs.
  //
  // Apple's SVG has no such padding (its artboard is the badge), so trimming is a no-op there
  // and is applied only to --play.

  // Natural sizes — the two badges have DIFFERENT aspect ratios, so a matched height is the
  // only way to satisfy Google's "never smaller than another store's badge" rule. Equal
  // widths would leave the Play badge visibly shorter.
  const sizes = await page.evaluate(async (urls) => {
    const load = (src) => new Promise((res, rej) => {
      const im = new Image();
      im.onload = () => res(im);
      im.onerror = () => rej(new Error('decode failed: ' + src.slice(0, 40)));
      im.src = src;
    });
    const dim = (im) => ({ w: im.naturalWidth, h: im.naturalHeight });

    // Tight bounding box of the badge inside its artboard: anything differing from the corner
    // pixel, or any non-transparent pixel when the asset has alpha.
    const trim = async (src) => {
      const im = await load(src);
      const w = im.naturalWidth, h = im.naturalHeight;
      const c = document.createElement('canvas'); c.width = w; c.height = h;
      const g = c.getContext('2d'); g.drawImage(im, 0, 0);
      const d = g.getImageData(0, 0, w, h).data;
      const at = (x, y) => { const i = (y * w + x) * 4; return [d[i], d[i+1], d[i+2], d[i+3]]; };
      const bg = at(0, 0);
      const differs = (p) => (bg[3] < 8 ? p[3] > 8
        : Math.abs(p[0]-bg[0]) + Math.abs(p[1]-bg[1]) + Math.abs(p[2]-bg[2]) > 30 || Math.abs(p[3]-bg[3]) > 24);
      let x0 = w, y0 = h, x1 = -1, y1 = -1;
      for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
        if (differs(at(x, y))) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
      }
      if (x1 < 0) return { url: src, ...dim(im), trimmed: false };
      const tw = x1 - x0 + 1, th = y1 - y0 + 1;
      if (tw === w && th === h) return { url: src, w, h, trimmed: false };
      const o = document.createElement('canvas'); o.width = tw; o.height = th;
      o.getContext('2d').drawImage(im, x0, y0, tw, th, 0, 0, tw, th);
      return { url: o.toDataURL('image/png'), w: tw, h: th, trimmed: true,
               inset: { top: y0, left: x0, right: w - 1 - x1, bottom: h - 1 - y1 }, from: { w, h } };
    };

    return {
      bg: dim(await load(urls.bg)),
      apple: dim(await load(urls.apple)),
      play: await trim(urls.play),
    };
  }, { bg: dataUrl(inFile), apple: dataUrl(appleBadge), play: dataUrl(playBadge) });

  if (sizes.play.trimmed) {
    const i = sizes.play.inset;
    console.log(`  play badge had ${i.top}/${i.right}/${i.bottom}/${i.left}px of baked-in clear space ` +
                `(${sizes.play.from.w}x${sizes.play.from.h} -> ${sizes.play.w}x${sizes.play.h}); trimmed before sizing`);
  }

  const W = sizes.bg.w, H = sizes.bg.h;
  const ob = P.old_badge;
  const old = { x0: ob.x0 * W, x1: ob.x1 * W, y0: ob.y0 * H, y1: ob.y1 * H };
  const oldH = old.y1 - old.y0, oldCx = (old.x0 + old.x1) / 2, oldCy = (old.y0 + old.y1) / 2;

  // Height: default to the old badge's, which guarantees vertical containment. --height
  // overrides as a fraction of image height, for a piece where the pair should read larger.
  const badgeH = flag('height') ? parseFloat(flag('height')) * H : oldH;
  const appleW = badgeH * (sizes.apple.w / sizes.apple.h);
  const playW  = badgeH * (sizes.play.w  / sizes.play.h);
  const gap = badgeH * 0.5;            // >= 1/4 badge height of clear space on each facing side
  const totalW = appleW + gap + playW;

  const pair = {
    x0: oldCx - totalW / 2, x1: oldCx + totalW / 2,
    y0: oldCy - badgeH / 2, y1: oldCy + badgeH / 2,
  };

  // COVERAGE. The first version of this asserted that the PAIR'S BOUNDING BOX contains the old
  // badge, which is true-but-insufficient and shipped a visible defect: the pair is not solid,
  // and the clear-space gap between the two badges is a hole straight through the middle of
  // exactly where the old badge sits. Both are centred on the same x, so the gap always lands
  // on it. The real test is that the old rect is covered by the UNION of the two badge rects.
  const gapSpan = { x0: pair.x0 + appleW, x1: pair.x0 + appleW + gap };
  const gapHitsOld = gapSpan.x0 < old.x1 && gapSpan.x1 > old.x0;
  const covers = pair.x0 <= old.x0 + 0.5 && pair.x1 >= old.x1 - 0.5 &&
                 pair.y0 <= old.y0 + 0.5 && pair.y1 >= old.y1 - 0.5 && !gapHitsOld;
  if (!covers && !has('erase')) {
    await browser.close();
    die(`the new badge pair does not cover the old badge on "${piece}".\n` +
        `  old  ${old.x0.toFixed(0)},${old.y0.toFixed(0)} - ${old.x1.toFixed(0)},${old.y1.toFixed(0)}\n` +
        `  pair ${pair.x0.toFixed(0)},${pair.y0.toFixed(0)} - ${pair.x1.toFixed(0)},${pair.y1.toFixed(0)}\n` +
        (gapHitsOld ? `  the clear-space gap (${gapSpan.x0.toFixed(0)}-${gapSpan.x1.toFixed(0)}) falls ON the old badge\n` : '') +
        `  pass --erase (only works where the background beside the badge is flat).`);
  }

  // --erase paints the old badge out before the pair goes down, for a piece where a matched
  // pair cannot be made to contain it — or-photo's badge is 52% of the frame, so two at that
  // height overflow. Safe ONLY on a flat background: the fill colour is sampled from the bands
  // immediately left and right of the old badge, which are background by construction because
  // the badge is horizontally centred. The script measures the spread and refuses if those
  // bands are not actually flat, rather than smearing a sampled colour over artwork.
  let eraseRect = null;
  if (!covers && has('erase')) {
    const smp = await page.evaluate(async ({ url, W, H, old }) => {
      const im = new Image(); im.src = url; await im.decode();
      const c = document.createElement('canvas'); c.width = W; c.height = H;
      c.getContext('2d').drawImage(im, 0, 0, W, H);
      const px = c.getContext('2d');
      const grab = (x0, x1) => {
        const d = px.getImageData(Math.max(0, x0), old.y0, Math.max(1, x1 - x0), old.y1 - old.y0).data;
        const ch = [[], [], []];
        for (let i = 0; i < d.length; i += 4) { ch[0].push(d[i]); ch[1].push(d[i + 1]); ch[2].push(d[i + 2]); }
        return ch.map(a => { a.sort((p, q) => p - q); return { med: a[a.length >> 1], spread: a[a.length - 1] - a[0] }; });
      };
      const L = grab(old.x0 - 44, old.x0 - 10), R = grab(old.x1 + 10, old.x1 + 44);
      return [0, 1, 2].map(i => ({
        med: Math.round((L[i].med + R[i].med) / 2),
        spread: Math.max(L[i].spread, R[i].spread),
      }));
    }, { url: dataUrl(inFile), W, H, old: { x0: Math.round(old.x0), x1: Math.round(old.x1), y0: Math.round(old.y0), y1: Math.round(old.y1) } });

    const worst = Math.max(...smp.map(c => c.spread));
    if (worst > 24) {
      await browser.close();
      die(`--erase refused on "${piece}": the background beside the old badge is not flat ` +
          `(channel spread ${smp.map(c => c.spread).join('/')}, limit 24).\n` +
          `  A sampled fill would smear over artwork. Reflow the layout in the source file instead.`);
    }
    const m = badgeH * 0.06;
    eraseRect = { x0: old.x0 - m, y0: old.y0 - m, w: (old.x1 - old.x0) + 2 * m, h: (old.y1 - old.y0) + 2 * m,
                  css: `rgb(${smp[0].med},${smp[1].med},${smp[2].med})` };
    console.log(`  erase      ${eraseRect.css}  spread ${smp.map(c => c.spread).join('/')} (flat)`);
  }
  if (pair.x0 < W * 0.04 || pair.x1 > W * 0.96) {
    console.warn(`  ! the pair reaches within 4% of the image edge (${(pair.x0 / W * 100).toFixed(1)}%` +
                 ` - ${(pair.x1 / W * 100).toFixed(1)}%). Lower --height if that crops on a story.`);
  }

  console.log(`${piece}: ${W}x${H}`);
  console.log(`  old badge  ${(old.x1 - old.x0).toFixed(0)}x${oldH.toFixed(0)}  ar=${((old.x1 - old.x0) / oldH).toFixed(3)}`);
  console.log(`  apple      ${appleW.toFixed(0)}x${badgeH.toFixed(0)}  ar=${(sizes.apple.w / sizes.apple.h).toFixed(3)}`);
  console.log(`  play       ${playW.toFixed(0)}x${badgeH.toFixed(0)}  ar=${(sizes.play.w / sizes.play.h).toFixed(3)}`);
  console.log(`  pair       ${totalW.toFixed(0)}px wide = ${(totalW / W * 100).toFixed(1)}% of image, gap ${gap.toFixed(0)}px`);
  if (has('dry')) { await browser.close(); return; }


  await page.setViewportSize({ width: W, height: H });
  await page.setContent(`<!doctype html><html><body style="margin:0;width:${W}px;height:${H}px;position:relative">
    <img src="${dataUrl(inFile)}" style="position:absolute;left:0;top:0;width:${W}px;height:${H}px">
    ${eraseRect ? `<div style="position:absolute;left:${eraseRect.x0}px;top:${eraseRect.y0}px;width:${eraseRect.w}px;height:${eraseRect.h}px;background:${eraseRect.css}"></div>` : ''}
    <img src="${dataUrl(appleBadge)}" style="position:absolute;left:${pair.x0}px;top:${pair.y0}px;width:${appleW}px;height:${badgeH}px">
    <img src="${sizes.play.url}"  style="position:absolute;left:${pair.x0 + appleW + gap}px;top:${pair.y0}px;width:${playW}px;height:${badgeH}px">
  </body></html>`);
  await page.evaluate(() => Promise.all(Array.from(document.images).map(i => i.decode())));
  await page.screenshot({ path: outFile, clip: { x: 0, y: 0, width: W, height: H } });
  await browser.close();

  // The output must be the same pixel size as the input. A social piece silently resized is
  // worse than one that failed, because it looks fine until it is next to the others.
  const out = fs.statSync(outFile);
  console.log(`  wrote ${outFile} (${(out.size / 1024).toFixed(0)} kB)`);
})().catch(e => die(e.stack || String(e)));
