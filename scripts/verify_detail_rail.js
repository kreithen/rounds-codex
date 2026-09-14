#!/usr/bin/env node
/* verify_detail_rail.js <site-root> [--before <clean-root>]
 *
 * The regression guard for scripts/add_detail_rail.js.
 *
 * RUN IT AGAINST THE PRE-FIX TREE AND IT FAILS -- measured against v138: 7 of the 11 checks below.
 * That is the point of writing it, and this project has paid for the lesson twice (verify_sw.js
 * passed on a broken worker for months; the gallery PDF's viewer button shipped as a toast() stub
 * past a test that only asserted a toast appeared).
 *
 * CHECK 8 IS THE ONE THAT MATTERS MOST, and it exists because of a bug I made rather than one I
 * anticipated. The patcher's closing anchor had to be lengthened partway through (orHTML() ends
 * with the same bytes as detailHTML()), and the REPLACEMENT string was not lengthened with it --
 * so `replace(longAnchor, shortReplacement)` silently deleted "guidelines and your facility's "
 * from the educational-use disclaimer on all 183 condition pages. Every anchor assertion passed.
 * The wrappers balanced. The page rendered. The rail worked. The only symptom was a clinical
 * disclaimer four words shorter, still reading like a complete sentence.
 *
 * It was caught by reading a screenshot, which is not a method. So there are now two guards against
 * that class: the patcher asserts its own edit is a PURE INSERTION (undo the four edits, get the
 * input back byte for byte), and this script asserts the rendered disclaimer still says what it
 * said. An assertion on what a patch FINDS cannot catch a patch that mangles what it finds.
 *
 * WHAT ELSE IT CHECKS
 *   1-3  The rail exists, sits in the second column BESIDE the narrative rather than below it, and
 *        is actually sticky (scrolled 1600px, it is still on screen).
 *   4    The narrative column keeps its measure. The whole argument for a rail instead of two equal
 *        columns is that the reading column does not get wider; if it drifts, the design is gone.
 *   5    The rail holds exactly the four intended blocks. A block added at the end of a condition
 *        page in future lands in the rail silently, which is a decision someone should make on
 *        purpose.
 *   6    `.d-rail` follows `.d-main` in the DOM. Visual order and DOM order must agree -- v136
 *        shipped accessibility fixes for the audit that flags a mismatch, and a rail built with
 *        CSS `order` would have introduced exactly that.
 *   7    Below 1024px the condition page is one column and its geometry is IDENTICAL to the tree
 *        without the rail. The wrappers are plain divs there and margins should collapse through
 *        them; "should" is not a measurement. Needs --before, reported as SKIP without it.
 *   9-11 Rail scrolls its own overflow, no page errors, and the Level 1 guard still passes (the
 *        rail overrides one of its rules, so they have to be checked together).
 *
 * HARNESS TRAPS already handled here: the `#rc-gate` disclaimer swallows every tap in a fresh
 * context; `rc_test_auth.js` seeds a session past the login wall; and cards animate in over 0.5s,
 * so the context is opened with reducedMotion:'reduce' and each view is given time to settle --
 * without that, a control run of the geometry diff against the SAME tree reports 5 of 19 views as
 * differing.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const http = require('http');
const { spawn } = require('child_process');

const HERE = __dirname;
const ROOT = process.argv[2];
if (!ROOT) {
  console.error('usage: RC_PW=<dir> verify_detail_rail.js <site-root> [--before <clean-root>]');
  process.exit(2);
}
const bAt = process.argv.indexOf('--before');
const BEFORE = bAt > -1 ? process.argv[bAt + 1] : null;
const RC_PW = process.env.RC_PW;
if (!RC_PW || !fs.existsSync(path.join(RC_PW, 'node_modules', 'playwright-core'))) {
  console.error('RC_PW must point at a directory containing node_modules/playwright-core');
  process.exit(2);
}
const { chromium } = require(path.join(RC_PW, 'node_modules', 'playwright-core'));
const { seedAuth } = require(path.join(HERE, 'rc_test_auth.js'));
const CHROME = process.env.RC_CHROME || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';

const ID = process.env.RC_ID || 'dvt';
const NARROW = [320, 375, 390, 430, 720, 820];
/* The exact sentence the app shipped before the rail existed. Hard-coded on purpose: reading it
   out of the tree under test would make the check agree with whatever the tree says. */
const DISCLAIMER = "Educational use only — verify dosing & decisions against current guidelines "
                 + "and your facility's policies.";
/* The prose must be EXACTLY as wide as it is without the rail: a 520px track less the 16px
   margins every block carries = 488px. The limit is 500 rather than 488 so a 1-2px rounding
   change is not a failure, and tight enough that the 532px the first cut produced would be. */
const MEASURE_MAX = 500;

/* Refuse to run against a port something else is already serving.
   This is not hypothetical: a leftover netlifysim from an earlier command was still bound to this
   script's port, the spawn below failed silently (stdio:'ignore'), waitFor() succeeded against the
   SQUATTER, and the guard reported 11 passed / 0 failed while measuring the patched tree when it
   had been pointed at the clean one. A verify script that silently measures the wrong tree is worse
   than no verify script. */
function portFree(port) {
  return new Promise(res => {
    const req = http.get({ host: '127.0.0.1', port, path: '/', timeout: 1500 }, r => { r.resume(); res(false); });
    req.on('error', () => res(true));
    req.on('timeout', () => { req.destroy(); res(true); });
  });
}

function serve(root, port) {
  return spawn(process.execPath, [path.join(HERE, 'netlifysim.js'), root, String(port)], { stdio: 'ignore' });
}
function waitFor(port) {
  return new Promise((res, rej) => {
    let n = 0;
    const tick = () => http.get({ host: '127.0.0.1', port, path: '/' }, r => { r.resume(); res(); })
      .on('error', () => (++n > 60 ? rej(new Error('sim did not start')) : setTimeout(tick, 150)));
    tick();
  });
}
async function open(browser, port, width) {
  const ctx = await browser.newContext({ viewport: { width, height: 950 }, reducedMotion: 'reduce' });
  await seedAuth(ctx);
  const page = await ctx.newPage();
  const errs = [];
  page.on('pageerror', e => errs.push(String(e)));
  await page.goto(`http://127.0.0.1:${port}/`, { waitUntil: 'networkidle' });
  await page.evaluate(() => { const g = document.getElementById('rc-gate-ok'); if (g) g.click(); });
  await page.waitForTimeout(300);
  return { ctx, page, errs };
}
async function detail(page, id) {
  await page.evaluate(i => go('detail', i), id);
  await page.waitForTimeout(900);
}
/* Geometry of every element EXCEPT the two wrappers themselves.
   They are new boxes, so they are new entries in the list and the raw strings can never match.
   The question this check answers is the one that matters: does every element that existed before
   still render at exactly the same place and size? Excluding the two new boxes is not loosening
   the check -- their own geometry is asserted separately below, and it has to be a no-op box:
   full container width, starting where its first child starts. */
const GEOM = `(function(){const g=[];document.querySelectorAll('#screen *').forEach(e=>{
  if(e.classList.contains('d-main')||e.classList.contains('d-rail')) return;
  const r=e.getBoundingClientRect();g.push([Math.round(r.x),Math.round(r.y),Math.round(r.width),Math.round(r.height)]);});
  return JSON.stringify(g);})()`;

/* The wrappers must be invisible below 1024px: same x and width as .pad, and no box of their own
   above their first child. If a wrapper ever picks up padding, a border or a margin, this fails
   even though the geometry diff above would still pass for everything else. */
const WRAPPERS = `(function(){
  const pad=document.querySelector('#screen .pad');
  const out={};
  for(const cls of ['d-main','d-rail']){
    const w=document.querySelector('.'+cls);
    if(!w){out[cls]=null;continue;}
    const r=w.getBoundingClientRect(), pr=pad.getBoundingClientRect();
    const first=w.firstElementChild?w.firstElementChild.getBoundingClientRect():null;
    const cs=getComputedStyle(w);
    out[cls]={sameX:Math.round(r.x)===Math.round(pr.x), sameW:Math.round(r.width)===Math.round(pr.width),
      pad:cs.padding, border:cs.borderWidth, margin:cs.margin,
      hugsFirstChild:first?Math.abs(Math.round(r.top)-Math.round(first.top))<=0:null};
  }
  return out;})()`;

const results = [];
const record = (name, pass, detail) => results.push({ name, pass, detail });

(async () => {
  const PORT = 8941, PORT_B = 8942;
  for (const port of [PORT, PORT_B]) {
    if (!(await portFree(port))) {
      console.error(`FAIL: something is already serving 127.0.0.1:${port}.`);
      console.error('      Refusing to run -- this script would measure that server instead of');
      console.error('      the tree you passed. Stop it (pkill -f netlifysim.js) and re-run.');
      process.exit(2);
    }
  }
  const sims = [serve(ROOT, PORT)];
  if (BEFORE) sims.push(serve(BEFORE, PORT_B));
  try {
    await waitFor(PORT);
    if (BEFORE) await waitFor(PORT_B);
    const browser = await chromium.launch({ executablePath: CHROME, args: ['--no-sandbox'] });
    let pageErrors = 0;

    /* --- 1-6, 8, 9: the wide layout --------------------------------------------------------- */
    {
      const { ctx, page, errs } = await open(browser, PORT, 1024);
      await detail(page, ID);
      const r = await page.evaluate(`(function(){
        const RCID=${JSON.stringify(ID)};
        const box=e=>{if(!e)return null;const r=e.getBoundingClientRect();
          return {x:Math.round(r.x),y:Math.round(r.y),w:Math.round(r.width),h:Math.round(r.height)};};
        const main=document.querySelector('.d-main'), rail=document.querySelector('.d-rail');
        const panel=document.querySelector('.d-main > .panel');
        const discl=rail?rail.querySelector('.discl'):document.querySelector('.discl');
        return {
          main:box(main), rail:box(rail), panel:box(panel),
          railPos:rail?getComputedStyle(rail).position:null,
          railOverflow:rail?getComputedStyle(rail).overflowY:null,
          kids:rail?[...rail.children].map(c=>c.className.split(' ').filter(Boolean).join('.')):null,
          /* build_ios_variant.js removes Ask Rounds Codex from the native payload, so the rail
             is three blocks there and four on the website. Detected from the app rather than
             assumed, because 'the rail has four blocks' failed a correct native build. */
          hasAsk:typeof askHTML==='function',
          domOrder:(main&&rail)?(main.compareDocumentPosition(rail)&Node.DOCUMENT_POSITION_FOLLOWING)>0:null,
          discl:discl?discl.textContent.replace(/\\s+/g,' ').trim():null,
          /* rxInjectCond returns early when the condition has no drugs mapped -- back-pain and
             metabolic-syndrome are two real cases -- so the expectation is conditional. Asserting
             the panel unconditionally reported a failure on a correct build, which is how a guard
             gets ignored. */
          rx:(function(){
            const want=(typeof rxByCond!=='undefined'&&rxByCond[RCID])?rxByCond[RCID].length:0;
            const p=document.querySelector('.rxcondpanel');
            return {want:want, present:!!p,
                    chips:p?p.querySelectorAll('.rxchip').length:0,
                    inMain:!!(p&&main&&main.contains(p)), inRail:!!(p&&rail&&rail.contains(p))};})()
        };})()`);

      record('the rail exists', !!r.rail, r.rail ? `.d-rail ${r.rail.w}px wide` : '.d-rail not found');
      record('the rail sits beside the narrative', !!r.rail && !!r.main && r.rail.x > r.main.x + r.main.w - 8 && r.rail.y < r.main.y + 600,
        r.rail && r.main ? `main x${r.main.x} w${r.main.w}, rail x${r.rail.x} y${r.rail.y}` : 'missing a column');
      record('the rail is sticky', r.railPos === 'sticky', `position: ${r.railPos}`);
      record('the narrative keeps its measure', !!r.panel && r.panel.w <= MEASURE_MAX,
        r.panel ? `panel ${r.panel.w}px, limit ${MEASURE_MAX}` : 'no panel found');
      const want = r.hasAsk ? ['panel.refs', 'modask', 'dlpdf', 'discl']
                            : ['panel.refs', 'dlpdf', 'discl'];
      record(`the rail holds exactly its ${want.length} blocks`,
        !!r.kids && r.kids.length === want.length && want.every((w, i) => r.kids[i] === w),
        (r.kids ? r.kids.join(' | ') : 'no rail') +
        (r.hasAsk ? '' : '   (native payload -- Ask is stripped by build_ios_variant.js)'));
      record('DOM order matches visual order', r.domOrder === true,
        r.domOrder === true ? '.d-rail follows .d-main in the DOM' : '.d-rail does NOT follow .d-main');
      record('the disclaimer is intact', r.discl === DISCLAIMER,
        r.discl === DISCLAIMER ? 'unchanged' : `got ${JSON.stringify(r.discl)}`);
      /* rxInjectCond() builds this panel AFTER detailHTML and used to insert it relative to .pad.
         With .refs inside the rail that insertBefore throws NotFoundError into a bare catch{}, and
         the panel disappeared from every condition page that has one -- silently, with no page
         error and nothing in the markup to notice. Caught by a geometry diff, not by reading code. */
      record('the Rx Guide survives, in the narrative column',
        r.rx.want === 0 ? !r.rx.present
                        : (r.rx.present && r.rx.chips === r.rx.want && r.rx.inMain && !r.rx.inRail),
        r.rx.want === 0
          ? (r.rx.present ? 'a panel rendered for a condition with no drugs mapped'
                          : 'no drugs mapped for this condition, and no panel -- correct')
          : (r.rx.present ? `${r.rx.chips}/${r.rx.want} drug chips, in .d-main: ${r.rx.inMain}, in .d-rail: ${r.rx.inRail}`
                          : `.rxcondpanel is MISSING for ${r.rx.want} mapped drugs -- rxInjectCond failed into its catch{}`));

      record('the rail scrolls its own overflow', r.railOverflow === 'auto' || r.railOverflow === 'scroll',
        `overflow-y: ${r.railOverflow}`);

      /* it must actually stick, not merely be declared sticky */
      await page.evaluate(() => window.scrollTo(0, 1600));
      await page.waitForTimeout(500);
      const stuck = await page.evaluate(`(function(){const e=document.querySelector('.d-rail');
        if(!e) return null; const r=e.getBoundingClientRect();
        return {top:Math.round(r.top),visible:r.top<window.innerHeight&&r.bottom>0};})()`);
      record('the rail follows the scroll', !!stuck && stuck.visible,
        stuck ? `after scrolling 1600px the rail top is ${stuck.top}` : 'no rail');

      pageErrors += errs.length;
      await ctx.close();
    }

    /* --- 7: nothing below 1024px moved ------------------------------------------------------ */
    if (!BEFORE) {
      record(`the phone and tablet layout is unchanged (${NARROW.join('/')})`, null,
        'SKIP -- pass --before <tree-without-the-rail>');
    } else {
      const bad = [], wrapBad = [];
      for (const W of NARROW) {
        const A = await open(browser, PORT_B, W), B = await open(browser, PORT, W);
        await detail(A.page, ID); await detail(B.page, ID);
        const ga = await A.page.evaluate(GEOM), gb = await B.page.evaluate(GEOM);
        if (ga !== gb) bad.push(String(W));
        const w = await B.page.evaluate(WRAPPERS);
        for (const cls of ['d-main', 'd-rail']) {
          const x = w[cls];
          if (!x) { wrapBad.push(`${cls} missing @${W}`); continue; }
          if (!x.sameX || !x.sameW) wrapBad.push(`${cls} not full width @${W}`);
          if (x.pad !== '0px' || x.border !== '0px' || x.margin !== '0px') wrapBad.push(`${cls} has a box @${W} (padding ${x.pad}, border ${x.border}, margin ${x.margin})`);
          if (x.hugsFirstChild === false) wrapBad.push(`${cls} does not hug its first child @${W}`);
        }
        pageErrors += A.errs.length + B.errs.length;
        await A.ctx.close(); await B.ctx.close();
      }
      record(`the phone and tablet layout is unchanged (${NARROW.join('/')})`, bad.length === 0,
        bad.length ? `geometry differs at ${bad.join(', ')}px` : `${NARROW.length} widths, every pre-existing element identical`);
      record('the wrappers add no box of their own', wrapBad.length === 0,
        wrapBad.length ? wrapBad.slice(0, 3).join('; ') : 'full width, no padding/border/margin, flush with first child');
    }

    record('no page errors', pageErrors === 0, `${pageErrors} uncaught page error(s)`);
    await browser.close();
  } finally {
    for (const s of sims) s.kill();
  }

  console.log('--- verify_detail_rail.js ---');
  let failed = 0, skipped = 0;
  for (const r of results) {
    const tag = r.pass === null ? 'SKIP' : r.pass ? ' ok ' : 'FAIL';
    if (r.pass === null) skipped++; else if (!r.pass) failed++;
    console.log(`  ${tag}  ${r.name.padEnd(46)} ${r.detail}`);
  }
  console.log(`\n${results.length - failed - skipped} passed, ${failed} failed, ${skipped} skipped`);
  process.exit(failed ? 1 : 0);
})().catch(e => { console.error('verify_detail_rail.js crashed:', e); process.exit(2); });
