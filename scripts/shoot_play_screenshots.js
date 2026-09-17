#!/usr/bin/env node
/* shoot_play_screenshots.js <payload-root> <out-dir> [port] [--device phone|tablet7|tablet10]
 *
 * Capture the eight Play store screenshots from the real app, at exactly Play's spec.
 *
 * WHY THIS CAN BE DONE FROM A CONTAINER AT ALL, when the iOS equivalent could not: Android WebView
 * IS Chromium. The App Store panels had to come off a simulator because WebKit renders differently
 * and nothing here can run it. Here the rendering engine in the container and the rendering engine
 * on the phone are the same project, so a headless capture is the real thing rather than an
 * approximation. What it still cannot show is a particular phone's WebView version, its system
 * bars, or the edge-to-edge inset behaviour -- so treat these as submittable assets that a device
 * pass may improve, not as proof the app looks right on hardware.
 *
 * THE VIEWPORT IS THE WHOLE TRICK. Play wants 1080x1920 (9:16, minimum 1080px) for a phone.
 * Setting a 1080x1920 CSS viewport would be wrong: .app is max-width 468px, so the app would sit as
 * a narrow column in a vast empty field. Instead the page is rendered at 360x640 CSS -- a real
 * Android logical phone size, inside the 320..430 range this project measures at -- with
 * deviceScaleFactor 3, which outputs exactly 1080x1920 device pixels. The app is laid out as a
 * phone lays it out, and the file is the size Play demands.
 *
 * THE TABLET DEVICES EXIST FOR ONE REASON: v138-v147 built a large-screen layout and a phone
 * screenshot cannot show it. Both tablet presets are LANDSCAPE, which is how Play displays tablet
 * panels and how a tablet is actually held for reading.
 *
 *   tablet10  1280x800 CSS @2  -> 2560x1600.  ABOVE the 1180px breakpoint, so this is the only
 *                                preset that shows the side rail and the two-pane list. That is
 *                                the whole point of shooting it.
 *   tablet7   1024x600 CSS @2  -> 2048x1200.  Level 1 layout, no rail -- 1024 is below 1180.
 *
 * Both sit inside Play's tablet rules: every side between 1080 and 7680 px, aspect ratio no wider
 * than 2:1 (2560/1600 = 1.6, 2048/1200 = 1.71). A 7-inch preset at its true 600 CSS px height
 * would be 1200 device px, which clears the 1080 floor only because of the x2 scale -- do not drop
 * the scale factor to "save file size".
 *
 * `isMobile` is false on the tablets. It is not cosmetic: with isMobile true, Chromium applies
 * mobile viewport emulation and the app lays out as a phone at any width, which would silently
 * produce three sets of the same picture.
 *
 * A fresh context hits #rc-gate, the medical disclaimer, which covers everything. Every shot
 * dismisses it first; a screenshot of a disclaimer is not a screenshot of the app.
 *
 * Shots and captions come from native/SCREENSHOT-SHOTLIST.md. Ids are resolved against the running
 * app rather than hard-coded hopefully: chf has both a gallery and a quiz, cha2ds2-vasc is a real
 * calculator id, and RC_STORE.toggleBookmark is the real bookmark API -- all checked, not guessed.
 *
 * Usage: RC_PW=<dir with node_modules/playwright-core> node scripts/shoot_play_screenshots.js <payload> <out> [port]
 */
'use strict';
const { chromium } = require(process.env.RC_PW + '/node_modules/playwright-core');
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const ROOT = process.argv[2], OUT = process.argv[3];
const portArg = process.argv[4];
const PORT = Number(portArg && !portArg.startsWith('--') ? portArg : 8899);
const dAt = process.argv.indexOf('--device');
const DEVICE = dAt > -1 ? process.argv[dAt + 1] : 'phone';
if (!ROOT || !OUT) {
  console.error('usage: shoot_play_screenshots.js <payload-root> <out-dir> [port] [--device phone|tablet7|tablet10]');
  process.exit(2);
}

/* Play's requirements, and the CSS sizes that produce them. See the header for why each one. */
const DEVICES = {
  phone:    { w: 360,  h: 640,  dpr: 3, mobile: true  },   // -> 1080 x 1920
  tablet7:  { w: 1024, h: 600,  dpr: 2, mobile: false },   // -> 2048 x 1200
  tablet10: { w: 1280, h: 800,  dpr: 2, mobile: false },   // -> 2560 x 1600
};
const DEV = DEVICES[DEVICE];
if (!DEV) {
  console.error(`FAIL: unknown --device "${DEVICE}". One of: ${Object.keys(DEVICES).join(', ')}`);
  process.exit(2);
}
const W = DEV.w, H = DEV.h, DPR = DEV.dpr;

/* Play's own bounds, asserted on every file rather than assumed from the maths above. A preset
   edited to something Play rejects should fail here, not in the Console. */
const MIN_SIDE = 1080, MAX_SIDE = 7680, MAX_RATIO = 2;

fs.mkdirSync(OUT, { recursive: true });

const SHOTS = [
  { n: 1, file: '01-conditions.png', caption: '183 conditions. Three modes. One library.',
    go: async p => { await p.evaluate(() => { setMode('medical'); go('detail', 'chf'); }); } },
  { n: 2, file: '02-gallery-grid.png', caption: '1,020 original clinical illustrations',
    go: async p => { await p.evaluate(() => go('gallery', 'chf')); } },
  { n: 3, file: '03-viewer.png', caption: 'Zoom in. Swipe through. Works offline.',
    /* The viewer opens with #zhint, a "Double-tap to zoom - swipe to browse" coach mark, over the
       artwork. The first capture caught it and it read as an accident rather than as UI. It is NOT
       hidden here: a store screenshot has to be the real app, so the shot simply waits for the hint
       to fade the way a reader's would. If it is ever still visible, the wait is too short -- do not
       reach for display:none. */
    settle: 6000,
    go: async p => { await p.evaluate(() => go('gallery', 'chf')); await p.waitForTimeout(700);
                     await p.evaluate(() => openViewer('chf', 0)); } },
  { n: 4, file: '04-quiz.png', caption: '1,840 questions — every condition, explained',
    go: async p => {
      await p.evaluate(() => go('quiz', 'dvt')); await p.waitForTimeout(800);
      /* Answer correctly, so the panel shows the explanation rather than a retry prompt --
         `exp` is only rendered on a correct pick. */
      /* qPick() only SELECTS the choice -- there is a separate Submit Answer button (#qsub), and
         without pressing it the feedback panel is never built. The first two attempts at this shot
         captured an unanswered question while the caption promised "every condition, explained".
         Read what the control actually does before scrolling to where you think the result is. */
      await p.evaluate(() => { const c = QUIZZES['dvt'].questions[0].correct; qPick(c); });
      await p.waitForTimeout(500);
      await p.evaluate(() => { const b = document.getElementById('qsub'); if (b) b.click(); });
      await p.waitForTimeout(1100);
      await p.evaluate(() => { const el = document.getElementById('qfb'); if (el) el.scrollIntoView({ block: 'center' }); });
    } },
  { n: 5, file: '05-usmle.png', caption: '1,010 USMLE-style items across Step 1–3',
    /* The exam PICKER was the first version of this shot and it is not what the caption promises:
       231 of the items are illustrated and that is the differentiator, so the shot has to be a real
       item with its figure on screen. #start is the begin control, checked against the page. */
    go: async p => {
      await p.goto(`http://127.0.0.1:${PORT}/usmle/index.html`, { waitUntil: 'domcontentloaded' });
      await p.waitForTimeout(2500);
      await p.evaluate(() => { const b = document.getElementById('start'); if (b) b.click(); });
      await p.waitForTimeout(2500);
      /* Walk forward until an item carries a figure from usmle/img/. Bounded, because a run of
         un-illustrated items must not hang the capture. */
      for (let i = 0; i < 12; i++) {
        const has = await p.evaluate(() => !!document.querySelector('img[src*="img/"], .illus img, .illus svg'));
        if (has) break;
        await p.evaluate(() => {
          const n = [...document.querySelectorAll('button')].find(b => /next|skip|pass/i.test(b.textContent || ''));
          if (n) n.click();
        });
        await p.waitForTimeout(900);
      }
    } },
  { n: 6, file: '06-review.png', caption: 'Bookmark it, and it comes back when you need it',
    /* WIDE OVERRIDE. Above 1180px the app is two panes, and root('library') alone leaves the right
       one showing "Choose a condition to read it here." -- 45% of a store panel given over to an
       empty state. Opening a condition fills it; the library list, and the review card in it, stay
       in the left pane exactly as the caption describes. The phone path is unchanged.

       A DIFFERENT condition, and no setMode. The first version filled the pane with medical-mode
       chf -- which is shot 1 -- and the two panels came out near-identical, differing only by a
       bookmark star. Nursing (the default mode, green) with dvt makes it read as a second picture
       rather than a duplicate. Two store panels that look the same waste one of the eight. */
    goWide: async p => {
      await p.evaluate(() => { ['chf', 'dvt', 'copd', 'afib'].forEach(id => RC_STORE.toggleBookmark(id));
                               go('detail', 'dvt'); });
      await p.waitForTimeout(1200);
      await p.evaluate(() => { const c = document.getElementById('revCard'); if (c) c.scrollIntoView({ block: 'center' }); });
    },
    go: async p => {
      /* isDue() is true for a bookmarked item with no schedule, so the card is populated
         immediately -- no waiting for a day to pass. */
      await p.evaluate(() => { ['chf', 'dvt', 'copd', 'afib'].forEach(id => RC_STORE.toggleBookmark(id)); root('library'); });
      await p.waitForTimeout(900);
      /* The card renders into #revCard low on the library page, under the logo and the search box.
         Centre it: the caption is about the card, so the card is the subject. */
      await p.evaluate(() => { const c = document.getElementById('revCard'); if (c) c.scrollIntoView({ block: 'center' }); });
    } },
  { n: 7, file: '07-calculator.png', caption: 'Ten clinical calculators, offline',
    go: async p => {
      await p.evaluate(() => go('calcone', 'cha2ds2-vasc')); await p.waitForTimeout(700);
      /* Tick a few risk factors so it shows a score rather than an empty form. Clicked through the
         DOM because the calculator's control markup is generated and has no stable hook. */
      await p.evaluate(() => {
        const boxes = [...document.querySelectorAll('.app input[type=checkbox], .app [role=checkbox], .app select')];
        boxes.slice(0, 3).forEach(b => { if (b.tagName === 'SELECT') { b.selectedIndex = 1; b.dispatchEvent(new Event('change', { bubbles: true })); }
                                         else { b.click(); } });
      });
      await p.waitForTimeout(700);
      /* The first run cut the score off below the fold -- the one thing the panel exists to show.
         The second run used a text heuristic ("the last element mentioning score or risk") and
         overshot to the citation and the disclaimer at the very bottom, which was worse: a
         screenshot of prose with no calculator in it. The result has an id, #calcOut, so use it.
         A heuristic that reads plausibly is not a substitute for looking at what it produced. */
      await p.evaluate(() => {
        const el = document.getElementById('calcOut');
        if (el) el.scrollIntoView({ block: 'center' });
      });
    } },
  { n: 8, file: '08-updates.png', caption: '470 guideline updates, 25 specialties',
    go: async p => { await p.evaluate(() => go('clinupd')); } },
];

(async () => {
  const srv = spawn('node', [path.join(__dirname, 'netlifysim.js'), ROOT, String(PORT)], { stdio: 'ignore' });
  await new Promise(r => setTimeout(r, 1200));
  const browser = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--no-sandbox'] });

  const manifest = [];
  let bad = 0;
  for (const shot of SHOTS) {
    /* A fresh context per shot: state from the previous shot (an open viewer, a bookmarked
       condition, an answered quiz) would otherwise leak into the next frame. */
    const ctx = await browser.newContext({
      viewport: { width: W, height: H }, deviceScaleFactor: DPR, isMobile: DEV.mobile, hasTouch: true });
    const p = await ctx.newPage();
    const errs = [];
    p.on('pageerror', e => errs.push(String(e)));
    try {
      await p.goto(`http://127.0.0.1:${PORT}/`, { waitUntil: 'domcontentloaded' });
      await p.waitForTimeout(4000);                       // the content loader is still fetching
      const gate = await p.$('#rc-gate-ok');
      if (gate) await gate.click({ timeout: 3000 });
      await p.waitForTimeout(500);
      /* 1180px is the app's own two-pane/side-rail breakpoint, so the override keys off the same
         number rather than off the device name -- a new preset gets the right path for free. */
      const wide = W >= 1180 && shot.goWide;
      await (wide ? shot.goWide(p) : shot.go(p));
      await p.waitForTimeout(shot.settle || 1400);        // let images decode and animations settle
      const dest = path.join(OUT, shot.file);
      await p.screenshot({ path: dest });
      /* Read the PNG's own IHDR rather than trusting the viewport maths -- the file is what Play
         validates, and a deviceScaleFactor that silently did not apply would otherwise pass. */
      /* BROKEN-IMAGE GUARD. The tablet run was first shot against an --asset-packs payload, which
         strips the full-size gallery artwork out by design, and 03-viewer.png came back as a
         broken-image glyph with its alt text -- 2560x1600 of black, passing every dimension check
         above. A store panel that is a broken image is worse than a missing one, and nothing else
         here would have caught it: the file was the right size and the page threw no error. */
      const broken = await p.evaluate(() => [...document.images]
        .filter(i => i.currentSrc && i.complete && i.naturalWidth === 0)
        .map(i => i.currentSrc.replace(location.origin, '')).slice(0, 4));
      if (broken.length) {
        console.log(`  FAIL ${shot.file}  broken image(s): ${broken.join(', ')}`);
        console.log('       shoot from an UNSTRIPPED payload -- --asset-packs removes the artwork.');
        bad++;
        await ctx.close();
        continue;
      }

      const b = fs.readFileSync(dest);
      const width = b.readUInt32BE(16), height = b.readUInt32BE(20);
      const why = [];
      if (width !== W * DPR || height !== H * DPR) why.push(`expected ${W * DPR}x${H * DPR}`);
      const lo = Math.min(width, height), hi = Math.max(width, height);
      if (lo < MIN_SIDE) why.push(`short side ${lo} < Play's ${MIN_SIDE}`);
      if (hi > MAX_SIDE) why.push(`long side ${hi} > Play's ${MAX_SIDE}`);
      if (hi / lo > MAX_RATIO) why.push(`aspect ${(hi / lo).toFixed(2)}:1 > Play's ${MAX_RATIO}:1`);
      const ok = why.length === 0;
      if (!ok) bad++;
      console.log(`  ${ok ? 'ok  ' : 'FAIL'} ${shot.file}  ${width}x${height}` +
                  `${errs.length ? `  (${errs.length} pageerror)` : ''}${ok ? '' : '  -- ' + why.join('; ')}`);
      manifest.push({ n: shot.n, file: shot.file, caption: shot.caption, device: DEVICE,
                      width, height, pageerrors: errs.length });
    } catch (e) {
      console.log(`  FAIL ${shot.file}  ${String(e).split('\n')[0]}`);
      bad++;
    }
    await ctx.close();
  }

  fs.writeFileSync(path.join(OUT, 'captions.json'), JSON.stringify(manifest, null, 2) + '\n');
  await browser.close();
  srv.kill();

  console.log('');
  console.log(`  ${SHOTS.length - bad}/${SHOTS.length} captured at ${W * DPR}x${H * DPR}` +
              `  [--device ${DEVICE}, ${W}x${H} CSS @${DPR}]`);
  console.log(`  captions.json written beside them`);
  if (bad) process.exit(1);
})().catch(e => { console.error(e); process.exit(1); });
