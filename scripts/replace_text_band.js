#!/usr/bin/env node
/* Re-typeset one horizontal band of a finished raster social piece.
 *
 * Used for the count corrections on artwork whose layered source no longer exists. The band is
 * erased with a colour sampled from the rows just outside it (the same flatness guard as
 * add_store_badges.js) and the replacement line is rendered in the app's own Inter, which is
 * what the artwork appears to be set in.
 *
 * SELF-CALIBRATING SIZE. Rather than guessing a font-size from cap height, the script measures
 * the ORIGINAL line's ink extent, renders the replacement, and scales until the new line's width
 * matches the old to within a pixel. A line that is 4% wider is not obviously wrong on its own —
 * it is obviously wrong sitting next to the four pieces that were not touched.
 *
 *   node scripts/replace_text_band.js <in.png> <out.png> --y0 <px> --y1 <px> --html '<...>'
 *        [--pad 6] [--align center]
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const die = (m) => { console.error('replace_text_band: ' + m); process.exit(1); };

const a = process.argv.slice(2);
const f = (n, d) => { const i = a.indexOf('--' + n); return i < 0 ? d : a[i + 1]; };
const [inFile, outFile] = a.filter((v, i) => !v.startsWith('--') && (i === 0 || !a[i - 1].startsWith('--')));
const Y0 = +f('y0'), Y1 = +f('y1'), HTML = f('html'), PAD = +f('pad', 6);
// --x0/--x1 restrict the rewrite to ONE TOKEN inside the line. Needed where the band's full
// width is not flat: medicine-sticks' count line runs over the network glow on its left, so
// erasing the whole band would flatten a gradient, but the "1,820" token at the right sits on
// background measuring a spread of 3/3/6.
const X0 = f('x0') ? +f('x0') : null, X1 = f('x1') ? +f('x1') : null;
// --size / --align exist because WIDTH IS THE WRONG INVARIANT for a token whose glyphs change
// width. Fitting "21" to the width of the "25" it replaces scaled it to 37.7px against the
// 33.5px the rest of the line runs at, because Inter's 1 is far narrower than its 5 — so the
// replacement matched the hole it filled and not the type around it. Pass the size fitted from
// a same-width token (2 -> 4) and left-align at the original ink.
const SIZE = f('size') ? +f('size') : null, ALIGN = f('align', 'center');
if (!inFile || !outFile || !Y0 || !Y1 || !HTML) die('usage: <in> <out> --y0 --y1 --html');

const FONTS = process.env.RC_FONTS || '/home/user/rounds-codex-app/fonts';

(async () => {
  const { chromium } = require(path.join(ROOT, 'node_modules/playwright-core'));
  const browser = await chromium.launch({
    executablePath: process.env.RC_CHROME || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
    args: ['--no-sandbox'],
  });
  const page = await browser.newPage();
  const b64 = (p) => fs.readFileSync(p).toString('base64');
  const bg = `data:image/png;base64,${b64(inFile)}`;
  const inter = `data:font/woff2;base64,${b64(path.join(FONTS, 'inter-latin.woff2'))}`;

  const m = await page.evaluate(async ({ bg, Y0, Y1, PAD, X0, X1 }) => {
    const im = new Image(); im.src = bg; await im.decode();
    const W = im.naturalWidth, H = im.naturalHeight;
    const c = document.createElement('canvas'); c.width = W; c.height = H;
    c.getContext('2d').drawImage(im, 0, 0);
    const g = c.getContext('2d');
    // ink extent of the original line
    const BX0 = X0 == null ? 0 : X0, BX1 = X1 == null ? W : X1;
    const d = g.getImageData(0, Y0, W, Y1 - Y0).data;
    let x0 = W, x1 = -1;
    for (let y = 0; y < Y1 - Y0; y++) for (let x = BX0; x < BX1; x++) {
      const i = (y * W + x) * 4;
      if (Math.max(d[i], d[i+1], d[i+2]) > 140) { if (x < x0) x0 = x; if (x > x1) x1 = x; }
    }

    // FILL COLOUR comes from the band's OWN side margins, not from the rows above and below.
    // Sampling above/below looks obvious and is wrong: these lines sit between other lines of
    // type, so those strips are full of neighbouring glyphs and the guard reads spreads of 90-224
    // on a background that is in fact flat. Left and right of the ink, within the band's own
    // rows, is background by construction because the line is centred.
    const side = (sx, sw) => {
      if (sw < 6) return [{ med: 0, spread: 999 }, { med: 0, spread: 999 }, { med: 0, spread: 999 }];
      const q = g.getImageData(sx, Y0, sw, Y1 - Y0).data, ch = [[], [], []];
      for (let i = 0; i < q.length; i += 4) { ch[0].push(q[i]); ch[1].push(q[i+1]); ch[2].push(q[i+2]); }
      return ch.map(v => { v.sort((p, r) => p - r); return { med: v[v.length >> 1], spread: v[v.length - 1] - v[0] }; });
    };
    // In token mode the only background available is the inter-word gap, which is ~12px wide;
    // the 52px window used for a whole line overshoots into the neighbouring word and reads a
    // spread of 255 on a gap that is actually flat.
    const win = (X0 == null ? 52 : 10), off = (X0 == null ? 8 : 4);
    const L = side(Math.max(0, x0 - win - off), Math.min(win, Math.max(0, x0 - off))),
          R = side(Math.min(W - 1, x1 + off), Math.min(win, Math.max(0, W - x1 - off - 2)));
    // one flat side is enough: the erase only has to reproduce the background it replaces, and
    // taking the max of both sides refuses a token that sits on perfectly flat ground merely
    // because the far end of the same line does not.
    const pick = (L[1].spread + L[2].spread) <= (R[1].spread + R[2].spread) ? L : R;
    const fill = [0, 1, 2].map(i => ({ med: pick[i].med, spread: pick[i].spread }));
    return { W, H, fill, inkX0: x0, inkX1: x1, inkW: x1 - x0 + 1, BX0, BX1 };
  }, { bg, Y0, Y1, PAD, X0, X1 });

  const worst = Math.max(...m.fill.map(c => c.spread));
  if (worst > 26) die(`background around the band is not flat (spread ${m.fill.map(c => c.spread).join('/')}, limit 26).`);
  const fillCss = `rgb(${m.fill.map(c => c.med).join(',')})`;
  console.log(`  band ${Y0}-${Y1}  original ink ${m.inkX0}-${m.inkX1} (${m.inkW}px)  fill ${fillCss} spread ${m.fill.map(c=>c.spread).join('/')}`);

  // binary-search the font-size so the new line matches the old line's width
  await page.setViewportSize({ width: m.W, height: m.H });
  const shell = (fs2) => `<!doctype html><html><head><style>
    @font-face{font-family:Inter;src:url(${inter}) format('woff2');font-weight:100 900;font-display:block}
    html,body{margin:0;width:${m.W}px;height:${m.H}px}
    #bg{position:absolute;inset:0;width:${m.W}px;height:${m.H}px}
    #band{position:absolute;left:${m.BX0}px;top:${Y0 - PAD}px;width:${m.BX1 - m.BX0}px;height:${Y1 - Y0 + 2 * PAD}px;background:${fillCss}}
    #t{position:absolute;left:${m.BX0}px;top:${Y0 - PAD}px;width:${m.BX1 - m.BX0}px;height:${Y1 - Y0 + 2 * PAD}px;
       display:flex;align-items:center;justify-content:${ALIGN === 'left' ? 'flex-start' : ALIGN === 'right' ? 'flex-end' : 'center'};
       font-family:Inter,sans-serif;font-size:${fs2}px;line-height:1;white-space:nowrap;color:#fff}
    b{font-weight:700;color:#29a8ff}
  </style></head><body>
    <img id="bg" src="${bg}"><div id="band"></div><div id="t">${HTML}</div>
  </body></html>`;

  let lo = 8, hi = 160, best = null;
  for (let i = 0; i < (SIZE ? 0 : 18); i++) {
    const mid = (lo + hi) / 2;
    await page.setContent(shell(mid));
    await page.evaluate(() => document.fonts.ready);
    const w = await page.evaluate(() => { const s = document.createRange(); s.selectNodeContents(document.getElementById('t')); return s.getBoundingClientRect().width; });
    best = { fs: mid, w };
    if (Math.abs(w - m.inkW) < 0.6) break;
    if (w > m.inkW) hi = mid; else lo = mid;
  }
  if (SIZE) { best = { fs: SIZE, w: NaN }; console.log(`  font-size ${SIZE}px (given), align ${ALIGN}`); }
  else console.log(`  fitted font-size ${best.fs.toFixed(2)}px -> ${best.w.toFixed(1)}px wide vs original ${m.inkW}px`);

  await page.setContent(shell(best.fs));
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(() => document.getElementById('bg').decode());
  await page.screenshot({ path: outFile, clip: { x: 0, y: 0, width: m.W, height: m.H } });
  await browser.close();
  console.log(`  wrote ${outFile}`);
})().catch(e => die(e.stack || String(e)));
