#!/usr/bin/env node
/* make_feature_graphic.js [out.png]
 *
 * Render native/play-graphics/feature-graphic.html to the 1024x500 Play feature graphic, and check
 * it against the rules that actually get one rejected.
 *
 * WHY IT IS NOT DERIVED FROM landing/social-*.html VERBATIM, which is what the handoff suggested.
 * Those templates carry the brand system and were the right starting point, but three of the things
 * in them are forbidden here, and each was verified against Google's own guidance rather than
 * assumed:
 *
 *   "Download for FREE"  -- Play's asset rules prohibit price and promotional wording, naming
 *                           "Free", "Sale", "Best", "#1", "Top", "New" and "Discount" explicitly.
 *   the App Store badge  -- wrong store, and promoting another store inside a Play listing asset.
 *   the three phone mocks -- Play says not to put screenshots in device frames, in the feature
 *                           graphic or the screenshots.
 *
 * And a fourth, quieter one: the social templates sit on #020509, which is near-black. Play's
 * guidance is that pure white, black and dark grey blend into the store's own background. So the
 * same blue and teal radial gradients are kept and the base is lifted to a deep navy, which is why
 * this reads as blue where the social assets read as black.
 *
 * The checks below are the ones a person cannot eyeball: exact pixels, the absence of an alpha
 * channel, and that the background is genuinely not near-black. Framing and taste still need eyes.
 *
 * Usage: RC_PW=<dir with node_modules/playwright-core> node scripts/make_feature_graphic.js
 */
'use strict';
const { chromium } = require(process.env.RC_PW + '/node_modules/playwright-core');
const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, '..', 'native', 'play-graphics');
const SRC = path.join(DIR, 'feature-graphic.html');
const OUT = process.argv[2] || path.join(DIR, 'feature-graphic.png');
const W = 1024, H = 500;

/* Play names these in its asset guidance. Checked against the SOURCE, so a word cannot be
   reintroduced in a future edit without failing here. Word-boundary matched: "topic" and "renew"
   are not violations. */
const FORBIDDEN = ['free', 'sale', 'best', 'top', 'new', 'discount', 'million', 'award', 'no.1', '#1'];

(async () => {
  const browser = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox'] });
  const ctx = await browser.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
  const p = await ctx.newPage();
  await p.goto('file://' + SRC, { waitUntil: 'networkidle' });
  await p.waitForTimeout(800);
  await p.screenshot({ path: OUT });
  const text = (await p.evaluate(() => document.body.innerText)).replace(/\s+/g, ' ').trim();
  await browser.close();

  const results = [];
  const check = (n, ok, d) => results.push([n, ok, d]);

  const b = fs.readFileSync(OUT);
  const w = b.readUInt32BE(16), h = b.readUInt32BE(20), colorType = b[25];
  check('exactly 1024x500', w === W && h === H, `${w}x${h}`);
  /* PNG colour type 2 is truecolour with NO alpha channel; 6 is truecolour WITH alpha, which Play
     rejects. Chromium writes 2 when the page is fully opaque, so this also proves no element left
     the background see-through. */
  check('no alpha channel (PNG colour type 2)', colorType === 2, `colorType ${colorType}`);
  check('under Play\'s 15 MB asset ceiling', b.length < 15 * 1024 * 1024, `${(b.length / 1024).toFixed(0)} kB`);

  const bad = FORBIDDEN.filter(word => new RegExp(`\\b${word.replace('#', '\\#')}\\b`, 'i').test(text));
  check('no price or promotional wording', bad.length === 0, bad.join(', '));
  check('no App Store / iOS reference', !/app store|iphone|ios\b/i.test(text));

  /* The background must not be the near-black the brand's social assets use. Sampled from the four
     corners, which is where Play's own background meets it. */
  const { PNG } = require(process.env.RC_PW + '/node_modules/pngjs');
  const png = PNG.sync.read(b);
  const px = (x, y) => { const i = (png.width * y + x) << 2; return [png.data[i], png.data[i + 1], png.data[i + 2]]; };
  const corners = [px(4, 4), px(W - 5, 4), px(4, H - 5), px(W - 5, H - 5)];
  const lum = c => 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  const sat = c => Math.max(...c) - Math.min(...c);
  const darkest = Math.min(...corners.map(lum));
  const leastSaturated = Math.min(...corners.map(sat));
  check('background is not near-black', darkest >= 18, `darkest corner luminance ${darkest.toFixed(1)}`);
  check('background is not grey (it carries brand colour)', leastSaturated >= 12,
        `least saturated corner spread ${leastSaturated}`);

  let fail = 0;
  for (const [n, ok, d] of results) { console.log(`  ${ok ? 'ok  ' : 'FAIL'} ${n}${d && !ok ? '  -- ' + d : d ? `  (${d})` : ''}`); if (!ok) fail++; }
  console.log('');
  console.log(`  text on the graphic: ${JSON.stringify(text)}`);
  console.log(`  written: ${OUT}`);
  if (fail) { console.log(`\n${fail}/${results.length} checks FAILED`); process.exit(1); }
  console.log(`\nall ${results.length} checks pass`);
  console.log('NOTE: these are the checks a person cannot eyeball. Framing and taste still need eyes.');
})().catch(e => { console.error(e); process.exit(1); });
