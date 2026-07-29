/* Drive specific quiz items in the running app and assert what a student actually sees.
 *
 * A JSON edit that passes audit_quiz_bank.js can still be broken in the app: a rewritten option
 * may not reach the DOM, a reworded rationale may not fire on a wrong pick, or the content loader
 * may fail silently and leave the old copy on screen. So this walks the real UI -- clicking
 * .choice then button.submit, exactly as a user does -- rather than trusting the file.
 *
 * Each context is created fresh. The service worker is network-first with a cache fallback, so a
 * context that has already loaded the app can be served the PREVIOUS build out of Cache Storage
 * and the edit would appear to have done nothing.
 *
 * Usage: node scripts/verify_quiz_items.js <base-url> <cid:qn> [<cid:qn> ...]
 *        node scripts/verify_quiz_items.js http://127.0.0.1:8501 stroke:8 osa:4
 */
'use strict';
const CHROME = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
const {chromium} = require('/opt/node22/lib/node_modules/playwright/node_modules/playwright-core');

const [, , BASE, ...SPECS] = process.argv;
if (!BASE || !SPECS.length) {
  console.error('usage: verify_quiz_items.js <base-url> <cid:qn> ...');
  process.exit(2);
}
const targets = SPECS.map(s => {
  const [cid, qn] = s.split(':');
  return {cid, qn: parseInt(qn, 10)};
});

(async () => {
  const b = await chromium.launch({executablePath: CHROME, args: ['--no-sandbox']});
  let fails = 0;

  for (const {cid, qn} of targets) {
    const ctx = await b.newContext();          // fresh: never let the SW replay an older build
    const p = await ctx.newPage();
    const errs = [];
    p.on('pageerror', e => errs.push(e.message));
    await p.goto(BASE + '/');
    await p.waitForFunction(() => typeof QUIZZES !== 'undefined' && Object.keys(QUIZZES).length > 0,
      null, {timeout: 25000});
    await p.evaluate(c => go('quiz', c), cid);
    await p.waitForTimeout(600);

    const r = await p.evaluate(async ([cid, qn]) => {
      const sleep = ms => new Promise(res => setTimeout(res, ms));
      const qs = QUIZZES[cid].questions;
      let graded = 0;
      let target = null;
      for (let n = 0; n < qs.length; n++) {
        const q = qs[n];
        const choices = [...document.querySelectorAll('.choice')];
        // `correct` is an ARRAY on select-all items (cardiomyopathy uses them). Clicking one index
        // would leave the answer incomplete and the item would look broken, so click every index.
        const want = Array.isArray(q.correct) ? q.correct : [q.correct];
        const picks = want.map(i => choices.find(c => (c.getAttribute('onclick') || '') === 'qPick(' + i + ')'));
        if (picks.some(x => !x)) return {err: 'no clickable option at q' + (n + 1)};
        const pick = {click: () => picks.forEach(x => x.click())};
        if (n + 1 === qn) {
          target = {
            stem: (document.querySelector('.qstem') || {}).innerText || q.q,
            options: choices.map(c => c.innerText.replace(/\n/g, ' ').trim()),
            keyed: want.map(i => 'ABCDE'[i]).join(''),
          };
        }
        pick.click(); await sleep(60);
        const sub = document.querySelector('button.submit');
        if (sub) { sub.click(); await sleep(220); }
        const after = (document.querySelector('#screen') || document.body).innerText;
        const ok = after.includes(q.exp.slice(0, 26));
        if (ok) graded++;
        if (n + 1 === qn) target.explanationShown = ok;
        const nx = [...document.querySelectorAll('button')].find(x => /next|continue/i.test(x.textContent || ''));
        if (nx) { nx.click(); await sleep(220); }
      }
      return {graded, total: qs.length, target};
    }, [cid, qn]);

    // A wrong pick must surface that option's OWN rationale, not the generic retry line.
    let wrong = null;
    if (!r.err) {
      await p.evaluate(c => { root('library'); go('quiz', c); }, cid);
      await p.waitForTimeout(500);
      wrong = await p.evaluate(async ([cid, qn]) => {
        const sleep = ms => new Promise(res => setTimeout(res, ms));
        const q = QUIZZES[cid].questions[qn - 1];
        if (Array.isArray(q.correct)) return {skipped: 'select-all item: the engine shows why[0] as one generic message'};
        if (!q.why) return {skipped: 'no why[] on this item'};
        for (let n = 0; n < qn - 1; n++) {
          const c = QUIZZES[cid].questions[n];
          for (const i of (Array.isArray(c.correct) ? c.correct : [c.correct]))
            document.querySelector('.choice[onclick="qPick(' + i + ')"]').click();
          await sleep(50);
          const s = document.querySelector('button.submit'); if (s) { s.click(); await sleep(180); }
          const nx = [...document.querySelectorAll('button')].find(x => /next|continue/i.test(x.textContent || ''));
          if (nx) { nx.click(); await sleep(180); }
        }
        const bad = q.correct === 0 ? 1 : 0;
        document.querySelector('.choice[onclick="qPick(' + bad + ')"]').click();
        await sleep(50);
        const s = document.querySelector('button.submit'); if (s) { s.click(); await sleep(250); }
        const txt = (document.querySelector('#screen') || document.body).innerText;
        return {
          pickedOption: 'ABCDE'[bad],
          ownRationaleShown: txt.includes(q.why[bad].slice(0, 30)),
          fellBackToGeneric: /not correct\s*[-—]\s*try again/i.test(txt),
        };
      }, [cid, qn]);
    }

    const bad = r.err || r.graded !== r.total || !r.target || !r.target.explanationShown
      || (wrong && !wrong.skipped && !wrong.ownRationaleShown) || errs.length;
    if (bad) fails++;
    console.log(`${bad ? 'FAIL' : 'ok  '} ${cid} Q${qn}` +
      (r.err ? '  ' + r.err : `  graded ${r.graded}/${r.total}, pageerrors ${errs.length}`));
    if (r.target) {
      console.log('       stem: ' + r.target.stem.replace(/\s+/g, ' ').slice(0, 150));
      r.target.options.forEach((o, i) => console.log(
        `       ${'ABCDE'[i] === r.target.keyed ? '>' : ' '}${'ABCDE'[i]}. ${o.slice(0, 130)}`));
    }
    if (wrong) console.log('       wrong-pick: ' + JSON.stringify(wrong));
    if (errs.length) console.log('       errors: ' + errs.slice(0, 2).join(' | '));
    await ctx.close();
  }

  await b.close();
  console.log(`\n${targets.length - fails}/${targets.length} items verified`);
  process.exit(fails ? 1 : 0);
})();
