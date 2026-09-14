#!/usr/bin/env node
/**
 * audit_a11y.js — pre-empt Google Play's pre-launch accessibility report.
 *
 *   node scripts/audit_a11y.js <site-root> [--port 8199] [--json]
 *
 * WHY. Every upload to Play triggers a pre-launch report: Robo test drives the app on real devices
 * and publishes findings ON THE LISTING CONSOLE, including an accessibility summary in four
 * categories -- content labelling, touch target size, implementation, and low contrast. Nobody has
 * ever looked at this app through that lens. Finding out at upload means finding out publicly, on
 * a report the physician cannot edit, next to a first release.
 *
 * Three of the four categories are measurable from Chromium, which IS Android WebView:
 *   content labelling  an interactive element with no accessible name
 *   touch target size  Android's floor is 48dp; at mdpi that is 48 CSS px
 *   low contrast       4.5:1 for normal text, 3:1 for large (>=18.66px, or >=14px bold)
 * The fourth, "implementation", is about the native view hierarchy and cannot be seen from here.
 *
 * WHAT IT DELIBERATELY DOES NOT DO. Contrast against a gradient or an image is not computed and is
 * reported separately as UNMEASURED. Averaging a gradient to one colour produces a number that
 * looks authoritative and is not, and this app's buttons are mostly gradients -- a checker that
 * quietly guesses on its most common case is worse than one that says it cannot tell.
 *
 * ALSO NOT A PASS/FAIL GATE by default. Google's own answer is that accessibility warnings do not
 * block a release. This prints what the report will say so the physician can decide which to fix.
 * --gate makes touch-target and contrast ERRORS exit 1, for use once a baseline is agreed.
 */
'use strict';
const { spawn } = require('child_process');
const path = require('path');

const ROOT = process.argv[2];
const pi = process.argv.indexOf('--port');
const PORT = pi > -1 ? Number(process.argv[pi + 1]) : 8199;
const JSON_OUT = process.argv.includes('--json');
const GATE = process.argv.includes('--gate');
if (!ROOT) { console.error('usage: audit_a11y.js <site-root> [--port N] [--json] [--gate]'); process.exit(2); }

const CHROME = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
const PW = '/opt/node22/lib/node_modules/playwright/node_modules/playwright-core';
const { chromium } = require(PW);
const { seedAuth } = require(path.join(__dirname, 'rc_test_auth.js'));

/* 360x640 is the Android baseline Play's own screenshot spec implies and the narrowest common
   phone; a target that passes here passes on everything larger. */
const VIEWPORT = { width: 360, height: 640 };

const PAGE_SCRIPT = () => {
  const MIN_TAP = 48;          // dp, Android's documented minimum
  const out = { labelling: [], tap: [], contrast: [], unmeasured: 0, interactive: 0, textNodes: 0 };

  const lum = ([r, g, b]) => {
    const f = c => { c /= 255; return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); };
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
  };
  const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
  /* Returns [r,g,b,a]. Alpha is kept -- discarding it is the bug this replaced. */
  const parse = s => { const m = String(s).match(/rgba?\(([^)]+)\)/); if (!m) return null;
    const p = m[1].split(',').map(Number);
    return [p[0], p[1], p[2], p.length > 3 ? p[3] : 1]; };

  /* THE EFFECTIVE BACKGROUND IS COMPOSITED, not "the first ancestor with a background-color".
     The first version took any non-zero alpha as opaque, so DIV.let's rgba(120,160,220,0.12) --
     a 12% tint over a near-black card -- was read as solid light blue. Text at rgb(147,166,200)
     on that reads 1.09:1 and was reported as a failure; over the real near-black stack it is
     about 7:1 and passes. The checker did not merely miss things, it INVERTED them, and the tell
     was a ratio close to 1.0 on text that is plainly legible in the app. A contrast number is
     only as good as the background model behind it. */
  const over = (fg, bg) => {          // source-over compositing, fg drawn onto bg
    const a = fg[3];
    return [fg[0] * a + bg[0] * (1 - a), fg[1] * a + bg[1] * (1 - a), fg[2] * a + bg[2] * (1 - a), 1];
  };
  const bgOf = el => {
    const layers = [];
    for (let n = el; n && n.tagName !== 'HTML'; n = n.parentElement) {
      const cs = getComputedStyle(n);
      if (cs.backgroundImage && cs.backgroundImage !== 'none') return 'UNMEASURABLE';
      const c = parse(cs.backgroundColor);
      if (!c || c[3] === 0) continue;
      layers.push(c);
      if (c[3] >= 0.999) break;       // opaque: nothing below it can show through
    }
    const html = parse(getComputedStyle(document.documentElement).backgroundColor);
    let acc = (html && html[3] >= 0.999) ? html : [255, 255, 255, 1];
    /* Composite from the bottom layer up to the element's own. */
    for (let i = layers.length - 1; i >= 0; i--) acc = over(layers[i], acc);
    return [acc[0], acc[1], acc[2]];
  };

  const name = el => (
    el.getAttribute('aria-label') || el.getAttribute('title') || el.getAttribute('alt') ||
    (el.tagName === 'INPUT' ? (el.getAttribute('placeholder') || el.value || '') : '') ||
    el.textContent || ''
  ).replace(/\s+/g, ' ').trim();

  const visible = el => {
    const r = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    return r.width > 0 && r.height > 0 && cs.visibility !== 'hidden' && cs.display !== 'none' &&
           Number(cs.opacity) > 0.05;
  };

  const SEL = 'button, a[href], [onclick], [role="button"], input, select, textarea, summary';
  for (const el of document.querySelectorAll(SEL)) {
    if (!visible(el)) continue;
    out.interactive++;
    const r = el.getBoundingClientRect();
    const label = name(el);
    const id = `${el.tagName.toLowerCase()}${el.className ? '.' + String(el.className).split(/\s+/)[0] : ''}`;
    if (!label) out.labelling.push({ el: id, rect: `${Math.round(r.width)}x${Math.round(r.height)}` });
    if (r.width < MIN_TAP || r.height < MIN_TAP) {
      out.tap.push({ el: id, label: label.slice(0, 30), w: Math.round(r.width), h: Math.round(r.height) });
    }
  }

  /* Contrast: leaf elements carrying visible text. */
  for (const el of document.querySelectorAll('body *')) {
    if (el.children.length || !el.textContent.trim() || !visible(el)) continue;
    if (['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(el.tagName)) continue;
    out.textNodes++;
    const cs = getComputedStyle(el);
    const fgp = parse(cs.color); const bg = bgOf(el);
    const fg = fgp && fgp[3] >= 0.999 ? [fgp[0], fgp[1], fgp[2]]
             : fgp ? (x => [x[0], x[1], x[2]])(over(fgp, [...(bg === 'UNMEASURABLE' ? [0,0,0] : bg), 1])) : null;
    if (!fg || bg === 'UNMEASURABLE') { out.unmeasured++; continue; }
    const px = parseFloat(cs.fontSize);
    const bold = Number(cs.fontWeight) >= 700 || cs.fontWeight === 'bold';
    const large = px >= 18.66 || (bold && px >= 14);
    const need = large ? 3.0 : 4.5;
    const got = ratio(fg, bg);
    if (got < need) {
      out.contrast.push({
        text: el.textContent.replace(/\s+/g, ' ').trim().slice(0, 40),
        ratio: Math.round(got * 100) / 100, need, px: Math.round(px), bold,
      });
    }
  }
  return out;
};

(async () => {
  const sim = spawn('node', [path.join(__dirname, 'netlifysim.js'), ROOT, String(PORT)],
    { stdio: 'ignore' });
  await new Promise(r => setTimeout(r, 1500));
  const b = await chromium.launch({ executablePath: CHROME, args: ['--no-sandbox'] });
  const ctx = await b.newContext({ viewport: VIEWPORT, deviceScaleFactor: 1 });
  await seedAuth(ctx);
  const p = await ctx.newPage();
  const errs = [];
  p.on('pageerror', e => errs.push(String(e)));
  await p.goto(`http://localhost:${PORT}/`, { waitUntil: 'load' });
  await p.evaluate(() => { const g = document.getElementById('rc-gate-ok'); if (g) g.click(); });
  await p.waitForFunction(() => typeof DATA !== 'undefined' && DATA.length > 0, { timeout: 25000 });

  /* The views a Robo crawl would plausibly reach in a few minutes of tapping. */
  const VIEWS = [
    ['library',    () => root('library')],
    ['condition',  () => go('detail', 'dvt')],
    ['quiz',       () => go('quiz', 'dvt')],
    ['gallery',    () => go('gallery', 'dvt')],
    ['calculators',() => root('calc')],
    ['drugs',      () => root('rx')],
  ];
  const totals = { labelling: 0, tap: 0, contrast: 0, unmeasured: 0, interactive: 0 };
  const report = {};
  for (const [label, fn] of VIEWS) {
    try {
      await p.evaluate(fn);
      await p.waitForTimeout(600);
      const r = await p.evaluate(PAGE_SCRIPT);
      report[label] = r;
      for (const k of Object.keys(totals)) {
        totals[k] += Array.isArray(r[k]) ? r[k].length : (r[k] || 0);
      }
    } catch (e) { report[label] = { error: e.message.split('\n')[0] }; }
  }
  await b.close(); sim.kill();

  if (JSON_OUT) { console.log(JSON.stringify(report, null, 2)); }
  else {
    console.log(`viewport ${VIEWPORT.width}x${VIEWPORT.height}, Android tap floor 48dp\n`);
    for (const [v, r] of Object.entries(report)) {
      if (r.error) { console.log(`${v.padEnd(12)} ERROR ${r.error}`); continue; }
      console.log(`${v.padEnd(12)} ${String(r.interactive).padStart(3)} interactive · ` +
        `${String(r.labelling.length).padStart(2)} unlabelled · ` +
        `${String(r.tap.length).padStart(2)} under 48dp · ` +
        `${String(r.contrast.length).padStart(2)} low contrast · ${r.unmeasured} unmeasured`);
      for (const t of r.tap.slice(0, 4))
        console.log(`               tap  ${t.w}x${t.h}  ${t.el}  "${t.label}"`);
      for (const c of r.contrast.slice(0, 4))
        console.log(`               cont ${c.ratio}:1 (need ${c.need}) ${c.px}px  "${c.text}"`);
    }
    console.log(`\ntotals: ${totals.labelling} unlabelled · ${totals.tap} small targets · ` +
      `${totals.contrast} low contrast · ${totals.unmeasured} not measurable (gradient/image bg)`);
    if (errs.length) console.log(`page errors: ${errs.length}`);
  }
  if (GATE && (totals.tap || totals.contrast)) process.exit(1);
})();
