#!/usr/bin/env node
/* Replace a display headline on a finished raster social piece.
 *
 * Three things make this different from replace_text_band.js, and each one is why a naive
 * version looks wrong:
 *
 *  1. FIT BY CAP HEIGHT, NOT WIDTH. The replacement is a different string, so matching the old
 *     line's width would scale the type to whatever the old wording happened to measure. The
 *     invariant a reader actually perceives is cap height against the rest of the piece.
 *  2. GRADIENT FILL. A headline on a photograph sits on a vertical gradient, so a flat sampled
 *     fill leaves a visible band. Each column is interpolated between the rows above and below.
 *  3. THE GLOW IS PART OF THE TYPE. These headlines carry an outer glow; drop it and the new
 *     line reads as flat and pasted-on even when the letterforms are right.
 *
 *   node scripts/replace_headline.js <in.png> <out.png> --y0 --y1 --cap <px> --text 'SUCCEED.'
 *        --color 'rgb(0,199,250)' [--font <woff2>] [--weight 700] [--glow 0.55] [--track -0.02]
 */
const fs = require('fs'), path = require('path');
const ROOT = path.resolve(__dirname, '..');
const die = (m) => { console.error('replace_headline: ' + m); process.exit(1); };
const a = process.argv.slice(2);
const f = (n, d) => { const i = a.indexOf('--' + n); return i < 0 ? d : a[i + 1]; };
const [inFile, outFile] = a.filter((v, i) => !v.startsWith('--') && (i === 0 || !a[i - 1].startsWith('--')));
const Y0 = +f('y0'), Y1 = +f('y1'), CAP = +f('cap'), TEXT = f('text'), COLOR = f('color', '#fff');
const WEIGHT = f('weight', '700'), GLOW = +f('glow', 0.55), TRACK = f('track', '-0.02');
const FONT = f('font', '/home/user/rounds-codex-app/fonts/oswald-latin.woff2');
// --scalex reproduces artwork whose display type was horizontally compressed by the design tool.
// Condensing a face artificially thins its verticals while leaving horizontals alone, so this is
// a last resort — but where the SOURCE was compressed, matching it is fidelity, not distortion.
const SCALEX = +f('scalex', 1);
// --scrim darkens the band under the new type. Inpainting large display letters out of a
// STRUCTURED photographic background leaves a faint ghost of the old word — measurable, and on
// or-photo visible at normal brightness flanking the shorter replacement. A scrim removes it
// honestly rather than pretending the reconstruction is clean, and it is the move the piece
// already makes: its lower third is a dark gradient over the same photo.
const SCRIM = +f('scrim', 0);
// --fitwidth fits to the ORIGINAL LINE'S WIDTH instead of its cap height, for a replacement whose
// wording is much longer than what it replaces. Holding cap height there would overflow the frame;
// holding width keeps the headline occupying the same block of the layout, which is what carries
// its weight in the composition.
const FITW = f('fitwidth') ? +f('fitwidth') : null;
// --sub adds the small line above the display word, for a piece whose headline is a single
// standalone line. or-photo already had "LEARN. UNDERSTAND." above its big word; ed-photo and
// three-modes do not, and "SUCCEED." alone reads limp. Both lines render in one pass so the
// scrim covers them together — two passes would leave a seam where the second pass's sampled
// fill met the first pass's scrim.
const SUB = f('sub'), SUBTOP = +f('subtop', 0), SUBCAP = +f('subcap', 0);
const SUBCOLOR = f('subcolor', '#ffffff'), SUBTRACK = f('subtrack', '0.075');
const SUBFONT = f('subfont', '/home/user/rounds-codex-app/fonts/inter-latin.woff2');
if (SUB && (!SUBTOP || !SUBCAP)) die('--sub needs --subtop and --subcap');
if (!inFile || !outFile || !Y0 || !Y1 || !CAP || !TEXT) die('usage: <in> <out> --y0 --y1 --cap --text');

(async () => {
  const { chromium } = require(path.join(ROOT, 'node_modules/playwright-core'));
  const browser = await chromium.launch({
    executablePath: process.env.RC_CHROME || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
    args: ['--no-sandbox'],
  });
  const page = await browser.newPage();
  const bg = `data:image/png;base64,${fs.readFileSync(inFile).toString('base64')}`;
  const font = `data:font/woff2;base64,${fs.readFileSync(FONT).toString('base64')}`;
  const subfont = SUB ? `data:font/woff2;base64,${fs.readFileSync(SUBFONT).toString('base64')}` : '';
  const SUBSIZE = SUB ? SUBCAP / 0.727 : 0;   // Inter's cap height is 0.727em

  // Build the gradient patch as its own PNG: per column, blend the median colour of the rows
  // just above the band into the median of the rows just below.
  const patch = await page.evaluate(async ({ bg, Y0, Y1 }) => {
    const im = new Image(); im.src = bg; await im.decode();
    const W = im.naturalWidth, H = im.naturalHeight;
    const c = document.createElement('canvas'); c.width = W; c.height = H;
    const g = c.getContext('2d'); g.drawImage(im, 0, 0);
    const N = 10;
    const top = g.getImageData(0, Math.max(0, Y0 - N), W, N).data;
    const bot = g.getImageData(0, Math.min(H - N, Y1), W, N).data;
    const colMed = (d, x) => {
      const ch = [[], [], []];
      for (let r = 0; r < N; r++) { const i = (r * W + x) * 4; ch[0].push(d[i]); ch[1].push(d[i+1]); ch[2].push(d[i+2]); }
      return ch.map(v => { v.sort((p, q) => p - q); return v[v.length >> 1]; });
    };
    const bandH = Y1 - Y0;
    const o = document.createElement('canvas'); o.width = W; o.height = bandH;
    const og = o.getContext('2d'); const od = og.createImageData(W, bandH);
    for (let x = 0; x < W; x++) {
      const A = colMed(top, x), B = colMed(bot, x);
      for (let y = 0; y < bandH; y++) {
        const t = y / (bandH - 1), i = (y * W + x) * 4;
        od.data[i]   = Math.round(A[0] + (B[0] - A[0]) * t);
        od.data[i+1] = Math.round(A[1] + (B[1] - A[1]) * t);
        od.data[i+2] = Math.round(A[2] + (B[2] - A[2]) * t);
        od.data[i+3] = 255;
      }
    }
    og.putImageData(od, 0, 0);

    // MASK. Interpolating the WHOLE band destroys real background — the out-of-focus scene behind
    // the type — and at 3x brightness the result is obvious vertical streaking. The old headline
    // only occupies ~30% of the band's pixels; everything between the letters is genuine
    // background worth keeping. So the gradient is used ONLY where the old type and its glow
    // were, and the original pixels are kept everywhere else.
    const band = g.getImageData(0, Y0, W, bandH);
    const bd = band.data;
    const lit = new Uint8Array(W * bandH);
    for (let i = 0, k = 0; i < bd.length; i += 4, k++) {
      // the type is a saturated light colour; the glow is a dimmer version of the same hue
      // Tuned to the TYPE's hue, not merely to "saturated and lightish": an out-of-focus
      // clinical background is itself blue and mildly saturated, and a loose test masked 85% of
      // the band — barely better than wiping all of it.
      const r = bd[i], gg = bd[i+1], b = bd[i+2];
      if (b > 95 && b - r > 60 && gg > r) lit[k] = 1;
    }
    // dilate so the glow's soft edge is covered — a surviving halo reads worse than a full wipe
    const RAD = Math.max(3, Math.round(bandH * 0.025));
    const mask = new Uint8Array(W * bandH);
    for (let y = 0; y < bandH; y++) for (let x = 0; x < W; x++) {
      if (!lit[y * W + x]) continue;
      for (let dy = -RAD; dy <= RAD; dy++) {
        const yy = y + dy; if (yy < 0 || yy >= bandH) continue;
        for (let dx = -RAD; dx <= RAD; dx++) {
          const xx = x + dx; if (xx < 0 || xx >= W) continue;
          mask[yy * W + xx] = 1;
        }
      }
    }
    let covered = 0;
    for (let k = 0; k < mask.length; k++) if (mask[k]) covered++;
    // INPAINT each masked run from ITS OWN neighbours, along the row. A single vertical gradient
    // for the whole band is estimated from rows far away, so where the old letters sat it comes
    // out a different tone from the background kept either side — and the old word reappears as
    // letter-shaped patches, which reads far worse than uniform streaking because the eye still
    // reads the word. Interpolating each run between the real pixels immediately left and right
    // of it keeps local brightness, and a letter stroke is only ~40px to bridge.
    const out = og.getImageData(0, 0, W, bandH);
    for (let k = 0, i = 0; k < mask.length; k++, i += 4) {
      if (!mask[k]) { out.data[i] = bd[i]; out.data[i+1] = bd[i+1]; out.data[i+2] = bd[i+2]; }
    }
    for (let y = 0; y < bandH; y++) {
      let x = 0;
      while (x < W) {
        if (!mask[y * W + x]) { x++; continue; }
        let e = x; while (e < W && mask[y * W + e]) e++;
        const li = (y * W + Math.max(0, x - 1)) * 4, ri = (y * W + Math.min(W - 1, e)) * 4;
        const haveL = x > 0, haveR = e < W;
        for (let q = x; q < e; q++) {
          const t = (q - x + 1) / (e - x + 1), oi = (y * W + q) * 4;
          for (let ch = 0; ch < 3; ch++) {
            const A = haveL ? bd[li + ch] : bd[ri + ch];
            const B = haveR ? bd[ri + ch] : bd[li + ch];
            // keep a little of the vertical-gradient estimate so a very wide run does not
            // become a flat bar between two samples
            const lerp = A + (B - A) * t;
            out.data[oi + ch] = Math.round(lerp * 0.85 + od.data[oi + ch] * 0.15);
          }
        }
        x = e;
      }
    }
    og.putImageData(out, 0, 0);
    return { url: o.toDataURL('image/png'), W, H, maskPct: covered / mask.length };
  }, { bg, Y0, Y1 });

  const { W, H } = patch;
  console.log(`  band reconstruction covers ${(patch.maskPct * 100).toFixed(1)}% of the band; the rest is original pixels`);
  await page.setViewportSize({ width: W, height: H });

  const shell = (fs2, showBg) => `<!doctype html><html><head><style>
    @font-face{font-family:HL;src:url(${font}) format('woff2');font-weight:100 900;font-display:block}
    ${SUB ? `@font-face{font-family:SUBF;src:url(${subfont}) format('woff2');font-weight:100 900;font-display:block}` : ''}
    html,body{margin:0;width:${W}px;height:${H}px;background:${showBg ? 'transparent' : '#000'}}
    #bg{position:absolute;inset:0;width:${W}px;height:${H}px}
    #patch{position:absolute;left:0;top:${Y0}px;width:${W}px;height:${Y1 - Y0}px}
    #scrim{position:absolute;left:0;top:${(SUB ? Math.min(Y0 - (Y1 - Y0) * 0.25, SUBTOP - SUBCAP * 0.9) : Y0 - (Y1 - Y0) * 0.25)}px;width:${W}px;
       height:${(SUB ? (Y1 + (Y1 - Y0) * 0.10) - Math.min(Y0 - (Y1 - Y0) * 0.25, SUBTOP - SUBCAP * 0.9) : (Y1 - Y0) * 1.35)}px;pointer-events:none;
       background:linear-gradient(to bottom, rgba(2,6,16,0) 0%, rgba(2,6,16,${SCRIM}) 26%,
                  rgba(2,6,16,${SCRIM}) 82%, rgba(2,6,16,0) 100%)}
    #t{position:absolute;left:0;top:${Y0}px;width:${W}px;height:${Y1 - Y0}px;
       display:flex;align-items:center;justify-content:center;
       font-family:HL,sans-serif;font-weight:${WEIGHT};font-size:${fs2}px;line-height:1;
       letter-spacing:${TRACK}em;white-space:nowrap;color:${COLOR};
       ${SCALEX !== 1 ? `transform:scaleX(${SCALEX})` : ''};
       text-shadow:0 0 ${(fs2 * 0.045).toFixed(1)}px rgba(0,170,255,${GLOW}),
                   0 0 ${(fs2 * 0.13).toFixed(1)}px rgba(0,140,255,${(GLOW * 0.45).toFixed(2)})}
  </style></head><body>
    ${showBg ? `<img id="bg" src="${bg}"><img id="patch" src="${patch.url}">${SCRIM ? '<div id="scrim"></div>' : ''}` : ''}
    ${SUB ? `<div id="sub" style="position:absolute;left:0;top:${SUBTOP}px;width:${W}px;
       display:flex;justify-content:center;align-items:flex-start;
       font-family:SUBF,sans-serif;font-weight:800;font-size:${SUBSIZE.toFixed(2)}px;line-height:1;
       letter-spacing:${SUBTRACK}em;white-space:nowrap;color:${SUBCOLOR}">${SUB}</div>` : ''}
    <div id="t">${TEXT}</div>
  </body></html>`;

  // binary-search font-size until the RENDERED cap height matches the original's
  const capOf = async (fs2) => {
    await page.setContent(shell(fs2, false));
    await page.evaluate(() => document.fonts.ready);
    return page.evaluate(({ Y0, Y1, W }) => {
      const el = document.getElementById('t');
      const r = el.getBoundingClientRect();
      const c = document.createElement('canvas'); c.width = W; c.height = Y1 - Y0 + 400;
      // measure via the element's own painted ink using a throwaway 2d render of the same text
      const g = c.getContext('2d');
      const cs = getComputedStyle(el);
      g.font = `${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
      const m = g.measureText(el.textContent);
      return { cap: m.actualBoundingBoxAscent + Math.min(0, m.actualBoundingBoxDescent), w: r.width,
               asc: m.actualBoundingBoxAscent, desc: m.actualBoundingBoxDescent, adv: m.width };
    }, { Y0, Y1, W });
  };
  let lo = 20, hi = 600, best = null;
  for (let i = 0; i < 20; i++) {
    const mid = (lo + hi) / 2;
    const r = await capOf(mid);
    best = { fs: mid, ...r };
    if (FITW) {
      const vis = r.adv * SCALEX;
      if (Math.abs(vis - FITW) < 1) break;
      if (vis > FITW) hi = mid; else lo = mid;
    } else {
      if (Math.abs(r.asc - CAP) < 0.5) break;
      if (r.asc > CAP) hi = mid; else lo = mid;
    }
  }
  console.log(`  font ${path.basename(FONT)} w${WEIGHT}  size ${best.fs.toFixed(1)}px -> cap ${best.asc.toFixed(1)}px (target ${CAP})  advance ${best.adv.toFixed(0)}px`);
  if (best.adv * SCALEX > W * 0.94) console.warn(`  ! the line is ${(best.adv * SCALEX / W * 100).toFixed(1)}% of the frame width`);

  await page.setContent(shell(best.fs, true));
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(() => Promise.all(Array.from(document.images).map(i => i.decode())));
  await page.screenshot({ path: outFile, clip: { x: 0, y: 0, width: W, height: H } });
  await browser.close();
  console.log(`  wrote ${outFile}`);
})().catch(e => die(e.stack || String(e)));
