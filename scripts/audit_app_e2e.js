/* Drive the whole app in a real browser and report anything broken.
 *
 * Usage: node scripts/audit_app_e2e.js <base-url> [--quick]
 *
 * Why this exists: the content split moved every global out of index.html into seven JSON files,
 * and quizzes.json has been edited a dozen times since. Each edit was verified in isolation, but
 * nothing has swept the whole app in one pass, and that is exactly where a silent breakage hides --
 * a condition whose detail page throws on a field that moved, a gallery whose base path is wrong,
 * a route whose <base> tag resolution changed.
 *
 * Everything here is a check that could FAIL. A pass tells you the app works; it is not a list of
 * things that were merely visited.
 *
 * Deliberately checked in a real browser rather than against the JSON, because the failures that
 * matter are runtime ones: an exception in detailHTML, an <img> that 404s, a quiz option that does
 * not reach the DOM. A JSON audit sees none of those.
 */
'use strict';
const CHROME = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
const {chromium} = require('/opt/node22/lib/node_modules/playwright/node_modules/playwright-core');

const BASE = process.argv[2];
const QUICK = process.argv.includes('--quick');
if (!BASE) { console.error('usage: audit_app_e2e.js <base-url> [--quick]'); process.exit(2); }

const fails = [];
const warns = [];
const fail = m => { fails.push(m); console.log('  FAIL ' + m); };
const warn = m => { warns.push(m); console.log('  warn ' + m); };

(async () => {
  const b = await chromium.launch({executablePath: CHROME, args: ['--no-sandbox']});
  const ctx = await b.newContext();
  const page = await ctx.newPage();

  // Collect every runtime error and every failed request for the whole run. A 404 on a gallery
  // thumbnail is invisible to an assertion you did not think to write, but it shows up here.
  const pageErrors = [];
  const badRequests = [];
  page.on('pageerror', e => pageErrors.push(e.message));
  page.on('requestfailed', r => badRequests.push(`${r.failure().errorText} ${r.url().slice(-70)}`));
  page.on('response', r => { if (r.status() >= 400) badRequests.push(`${r.status()} ${r.url().slice(-70)}`); });

  await page.goto(BASE + '/');
  await page.waitForFunction(
    () => typeof DATA !== 'undefined' && DATA.length > 0 && typeof QUIZZES !== 'undefined',
    null, {timeout: 30000});

  /* ---------------------------------------------------------------- content integrity */
  console.log('CONTENT');
  const shape = await page.evaluate(() => ({
    conditions: DATA.length,
    quizzes: Object.keys(QUIZZES).length,
    questions: Object.values(QUIZZES).reduce((n, v) => n + v.questions.length, 0),
    short: Object.entries(QUIZZES).filter(([, v]) => v.questions.length < 10).map(([k]) => k),
    long:  Object.entries(QUIZZES).filter(([, v]) => v.questions.length > 10).map(([k]) => k),
    galleries: Object.keys(GALLERIES).length,
    // REALGAL is a Set at runtime, not an array -- .length is undefined on it
    real: typeof REALGAL === 'undefined' ? -1
      : (REALGAL instanceof Set ? REALGAL.size : REALGAL.length),
    drugs: typeof RX_DATA !== 'undefined' ? RX_DATA.length : -1,
    nclex: typeof NCLEX_DATA !== 'undefined' ? NCLEX_DATA.length : -1,
    resident: typeof RES_DATA !== 'undefined' ? RES_DATA.length : -1,
    byIdKeys: Object.keys(byId).length,
    orphanQuizzes: Object.keys(QUIZZES).filter(k => !byId[k]),
    orphanGalleries: Object.keys(GALLERIES).filter(k => !byId[k]),
    dupIds: (() => { const s = new Set(), d = []; DATA.forEach(x => s.has(x.id) ? d.push(x.id) : s.add(x.id)); return d; })(),
    missingWhy: Object.entries(QUIZZES).flatMap(([k, v]) =>
      v.questions.map((q, i) => (!q.why ? `${k} Q${i + 1}` : null)).filter(Boolean)),
  }));
  console.log(`  ${shape.conditions} conditions, ${shape.quizzes} quizzes, ${shape.questions} questions, ` +
    `${shape.galleries} galleries (${shape.real} real), ${shape.drugs} drugs, ${shape.nclex} NCLEX, ${shape.resident} resident`);
  /* Counts, not a fixed number pulled from a doc: every condition must carry a quiz, and every
     quiz must carry ten questions. Hard-coding 181/1820 meant this suite reported two failures
     from the day Hip Fracture and Low Back Pain landed, and a suite that always fails is a suite
     nobody reads. The invariant is what mattered anyway. */
  if (shape.conditions !== shape.quizzes)
    fail(`every condition needs a quiz: ${shape.conditions} conditions but ${shape.quizzes} quizzes`);
  /* Ten per quiz is the floor, not the rule: `cardiomyopathy` carries 20 distinct questions and
     always has, which is why the bank total is 1,840 rather than 183 x 10. Asserting equality
     flagged it as a defect. Check the floor and name any exception instead. */
  if (shape.short.length) fail(`quizzes with fewer than 10 questions: ${shape.short.join(', ')}`);
  console.log(`  ok  ${shape.conditions} conditions, ${shape.quizzes} quizzes, ${shape.questions} questions` +
              (shape.long.length ? ` (longer than 10: ${shape.long.join(', ')})` : ''));
  if (shape.byIdKeys !== shape.conditions) fail(`byId has ${shape.byIdKeys} keys for ${shape.conditions} conditions`);
  if (shape.dupIds.length) fail(`duplicate condition ids: ${shape.dupIds.join(', ')}`);
  if (shape.orphanQuizzes.length) fail(`quizzes with no condition: ${shape.orphanQuizzes.join(', ')}`);
  if (shape.orphanGalleries.length) fail(`galleries with no condition: ${shape.orphanGalleries.join(', ')}`);
  if (shape.missingWhy.length) fail(`${shape.missingWhy.length} questions without why[]: ${shape.missingWhy.slice(0, 5).join(', ')}`);
  ['drugs', 'nclex', 'resident'].forEach(k => { if (shape[k] <= 0) fail(`${k} data did not load (${shape[k]})`); });

  /* ------------------------------------------------------- every condition detail page */
  console.log('\nCONDITION PAGES (all three modes)');
  const ids = await page.evaluate(() => DATA.map(d => d.id));
  const sample = QUICK ? ids.filter((_, i) => i % 6 === 0) : ids;
  for (const mode of ['nursing', 'medical', 'resident']) {
    const res = await page.evaluate(async ([mode, list]) => {
      setMode(mode);
      const bad = [];
      for (const id of list) {
        try {
          const h = detailHTML(id);
          if (!h || h.length < 400) bad.push(`${id}: detailHTML returned ${h ? h.length : 0} chars`);
          /* Strip data: URIs before looking for render artifacts. The inlined logo is base64, and
             base64 contains arbitrary letter runs -- the first version of this check matched "NaN"
             inside "...YsWbNaN0YK..." and reported all 181 conditions broken in all three modes.
             Word boundaries too, so "undefined" only matches as a word and not inside an
             identifier or a longer token. */
          const clean = h.replace(/data:[^"')\s]+/g, 'DATAURI');
          const m = clean.match(/.{0,40}(\bundefined\b|\[object Object\]|\bNaN\b).{0,40}/);
          if (m) bad.push(`${id}: renders "${m[0].trim()}"`);
        } catch (e) { bad.push(`${id}: detailHTML threw — ${e.message}`); }
      }
      return bad;
    }, [mode, sample]);
    console.log(`  ${mode}: ${sample.length - res.length}/${sample.length} clean`);
    res.slice(0, 8).forEach(fail);
    if (res.length > 8) fail(`...and ${res.length - 8} more in ${mode} mode`);
  }

  /* ------------------------------------------------------------------- every quiz runs */
  console.log('\nQUIZZES');
  const qres = await page.evaluate(async (quick) => {
    const bad = [];
    const keys = Object.keys(QUIZZES);
    const list = quick ? keys.filter((_, i) => i % 6 === 0) : keys;
    for (const id of list) {
      try {
        const h = quizHTML ? quizHTML(id) : null;
        if (h === null) { bad.push('quizHTML is not defined'); break; }
        if (!h || h.length < 200) bad.push(`${id}: quizHTML returned ${h ? h.length : 0} chars`);
      } catch (e) { bad.push(`${id}: quizHTML threw — ${e.message}`); }
      // structural contract the engine relies on
      QUIZZES[id].questions.forEach((q, i) => {
        const multi = Array.isArray(q.correct);
        const idxOk = multi
          ? q.correct.every(k => k >= 0 && k < q.ch.length)
          : Number.isInteger(q.correct) && q.correct >= 0 && q.correct < q.ch.length;
        if (!idxOk) bad.push(`${id} Q${i + 1}: correct index out of range`);
        if (!q.exp || !q.exp.trim()) bad.push(`${id} Q${i + 1}: empty exp`);
        if (q.why && !multi) {
          if (q.why.length !== q.ch.length) bad.push(`${id} Q${i + 1}: why length ${q.why.length} vs ${q.ch.length}`);
          else if ((q.why[q.correct] || '').trim()) bad.push(`${id} Q${i + 1}: why[correct] not blank`);
          else if (q.why.some((w, j) => j !== q.correct && !(w || '').trim())) bad.push(`${id} Q${i + 1}: blank why on a wrong option`);
        }
        if (q.img) {
          const g = GALLERIES[id];
          if (!g) bad.push(`${id} Q${i + 1}: img but no gallery`);
          else q.img.forEach(n => { if (!g.images.some(im => im.n === n)) bad.push(`${id} Q${i + 1}: img ${n} not in gallery`); });
        }
      });
    }
    return {checked: list.length, bad};
  }, QUICK);
  console.log(`  ${qres.checked} quizzes checked, ${qres.bad.length} problems`);
  qres.bad.slice(0, 10).forEach(fail);

  /* --------------------------------------------------------------------- galleries */
  console.log('\nGALLERIES');
  const gres = await page.evaluate(async (quick) => {
    const bad = [];
    const keys = Object.keys(GALLERIES);
    const list = quick ? keys.filter((_, i) => i % 4 === 0) : keys;
    for (const id of list) {
      const g = GALLERIES[id];
      if (!g.images || !g.images.length) { bad.push(`${id}: no images`); continue; }
      if (!g.title) bad.push(`${id}: no title`);
      g.images.forEach(im => {
        if (!im.file) bad.push(`${id} #${im.n}: no file`);
        if (!im.thumb) bad.push(`${id} #${im.n}: no thumb`);
        // the trap recorded in CLAUDE.md: thumb must be a real thumbnail, never the full image
        if (im.thumb && im.file && im.thumb === im.file) bad.push(`${id} #${im.n}: thumb points at the full image`);
      });
      try { if (!galHTML(id)) bad.push(`${id}: galHTML returned nothing`); }
      catch (e) { bad.push(`${id}: galHTML threw — ${e.message}`); }
    }
    return {checked: list.length, bad};
  }, QUICK);
  console.log(`  ${gres.checked} galleries checked, ${gres.bad.length} problems`);
  gres.bad.slice(0, 10).forEach(fail);

  /* ---------------------------------------- gallery images actually load (sampled, real network) */
  console.log('\nGALLERY IMAGES (real loads)');
  const galIds = await page.evaluate(() => Object.keys(GALLERIES));
  const probe = QUICK ? galIds.slice(0, 3) : galIds.filter((_, i) => i % 4 === 0);
  for (const id of probe) {
    await page.evaluate(g => { root('library'); go('gallery', g); }, id);
    await page.waitForTimeout(700);
    const r = await page.evaluate(() => {
      const imgs = [...document.querySelectorAll('.gthumb img, img.gthumb')];
      return {count: imgs.length, broken: imgs.filter(i => i.complete && i.naturalWidth === 0).length};
    });
    if (!r.count) fail(`${id}: gallery view rendered no thumbnails`);
    else if (r.broken) fail(`${id}: ${r.broken}/${r.count} thumbnails failed to load`);
  }
  console.log(`  ${probe.length} galleries probed for real image loads`);

  /* ------------------------------------------------------------------------ routes */
  console.log('\nROUTES');
  const routes = await page.evaluate(() => {
    const d = DATA[0], g = Object.keys(GALLERIES)[0];
    const cats = [...new Set(DATA.map(x => x.category))];
    return {c: d.id, g, s: cats[0].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')};
  });
  for (const [kind, val] of [['c', routes.c], ['g', routes.g], ['s', routes.s]]) {
    const c2 = await b.newContext();          // fresh: the SW must not serve a cached shell
    const p2 = await c2.newPage();
    const errs = [];
    p2.on('pageerror', e => errs.push(e.message));
    await p2.goto(`${BASE}/${kind}/${val}`);
    try {
      await p2.waitForFunction(() => typeof DATA !== 'undefined' && DATA.length > 0, null, {timeout: 20000});
    } catch { fail(`/${kind}/${val}: content never loaded (check the RC_ROOT regex covers /${kind}/)`); await c2.close(); continue; }
    const info = await p2.evaluate(() => ({
      base: (document.querySelector('base') || {}).href || '',
      text: (document.querySelector('#screen') || document.body).innerText.slice(0, 60),
      loaded: DATA.length,
    }));
    // the documented failure: <base> becomes the route folder and every content/*.json 404s
    if (/\/(c|g|s)\/$/.test(info.base)) fail(`/${kind}/${val}: <base> resolved to the route folder (${info.base})`);
    if (!info.loaded) fail(`/${kind}/${val}: no content loaded`);
    if (errs.length) fail(`/${kind}/${val}: ${errs.length} pageerror(s) — ${errs[0]}`);
    console.log(`  ok  /${kind}/${val}  base=${info.base.replace(BASE, '')||'/'}  loaded=${info.loaded}`);
    await c2.close();
  }

  /* ---------------------------------------------------------------- service worker */
  console.log('\nSERVICE WORKER');
  const sw = await (await ctx.request.get(BASE + '/sw.js')).text().catch(() => '');
  if (!sw) fail('sw.js could not be fetched');
  else {
    const core = (sw.match(/const CORE = \[([\s\S]*?)\];/) || [])[1] || '';
    const contentFiles = ['conditions', 'drugs', 'quizzes', 'nclex', 'or', 'galleries', 'resident'];
    const missing = contentFiles.filter(f => !core.includes(`content/${f}.json`));
    if (missing.length) fail(`CORE is missing content files: ${missing.join(', ')}`);
    const fonts = (core.match(/fonts\/[a-z-]+\.woff2/g) || []).length;
    if (fonts < 6) fail(`CORE lists only ${fonts} fonts, expected 6`);
    // the bug that shipped twice: cloning the navigation response kills iOS tabs on resume
    const nav = sw.slice(sw.indexOf("req.mode === 'navigate'"), sw.indexOf("req.mode === 'navigate'") + 260);
    if (/res\.clone\(\)/.test(nav)) fail('the navigate branch calls res.clone() — this is the WebKitBlobResource bug');
    console.log(`  CORE covers all 7 content files and ${fonts} fonts; navigate branch does not clone`);
  }

  /* ------------------------------------------------------------------- whole-run tally */
  console.log('\nRUNTIME');
  const realBad = badRequests.filter(u => !/favicon|\.map$/.test(u));
  console.log(`  ${pageErrors.length} pageerrors, ${realBad.length} failed requests`);
  pageErrors.slice(0, 5).forEach(e => fail('pageerror: ' + e));
  [...new Set(realBad)].slice(0, 10).forEach(u => fail('request: ' + u));

  await b.close();
  console.log(`\n${'='.repeat(60)}`);
  console.log(`${fails.length} failures, ${warns.length} warnings`);
  process.exit(fails.length ? 1 : 0);
})();
