#!/usr/bin/env node
/* verify_route_previews.js <web-clone> [--port N]
 *
 * Guards the per-route link-preview cards (scripts/build_route_previews.js).
 *
 * CALIBRATION -- what says this file is a guard and not decoration. Against the v141 tree it stops
 * at the first check, because the edge function is not there; that proves nothing about the other
 * twenty-three. So it was calibrated by MUTATING the shipped function eight ways and confirming each
 * one is caught. Every line below is measured, not intended:
 *
 *   1  `h.delete('content-encoding')` removed          1 fail   the decoded body keeps the header
 *   2  the isCrawler early return removed              1 fail   browsers stop being passed through
 *   3  previewFor returns a constant title             3 fails  183 routes, 1 distinct card
 *   4  `&` no longer escaped                           1 fail   breaks out of the attribute
 *   5  '/r/*' dropped from config.path                 2 fails  a whole route family uncovered
 *   6  the opening sentinel deleted from index.html    5 fails  nothing is injected at all
 *   7  the old block left in place beside the new one  1 fail   two og:title tags, the old one wins
 *   8  one condition dropped from the table            2 fails  content ships, its card does not
 *
 * Mutant 3 is the one worth keeping in mind: it is the ONLY bug in the list that still produces a
 * valid page with valid tags on every route, which is exactly the defect this patch exists to
 * remove. A checker that only asked "is there an og:title" would pass it.
 *
 * It exercises the edge function ITSELF rather than a copy of its logic, importing the generated
 * module and calling its default export with a `context.next()` double. That double deliberately
 * returns the real shipped index.html carrying `content-encoding: br` and a stale `content-length`,
 * because those two headers are the trap: the body handed back is already decoded, so forwarding
 * either one makes the browser gunzip plain text or truncate to the compressed length. A fixture
 * without them would pass on a broken function.
 *
 * The end-to-end check serves the tree through netlifysim -- the real `/c/*` rewrite, the real
 * bytes -- and drives the transformed document through Chromium to prove the app still boots with
 * the injected head. A card is not worth a broken page.
 *
 * WHAT IT CANNOT CHECK, stated because the gap is the risk:
 *   - that Netlify runs the function at all. Edge functions cannot be executed from this container;
 *     `context.next()` here is a double. The deploy check is `curl -H 'User-Agent: Twitterbot' ...`
 *     against the live host, which this script prints at the end.
 *   - which user-agent iOS Messages sends. No iOS, no WebKit. First real share is the physician's.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const net = require('net');
const { spawn } = require('child_process');

const ROOT = process.argv[2];
if (!ROOT) { console.error('usage: verify_route_previews.js <web-clone> [--port N]'); process.exit(2); }
const PORT = process.argv.includes('--port') ? +process.argv[process.argv.indexOf('--port') + 1] : 8951;

let pass = 0, fail = 0;
const ok = (c, label, detail) => {
  if (c) { pass++; console.log(`  ok    ${label}${detail ? '  ' + detail : ''}`); }
  else { fail++; console.log(`  FAIL  ${label}${detail ? '  ' + detail : ''}`); }
};

/* A leftover server on the port would serve a DIFFERENT tree and every check would pass against
   the wrong bytes. That has happened here before; refuse rather than measure the wrong thing. */
const portFree = p => new Promise(res => {
  const s = net.createServer();
  s.once('error', () => res(false));
  s.once('listening', () => s.close(() => res(true)));
  s.listen(p, '127.0.0.1');
});

(async () => {
  const MOD = path.join(ROOT, 'netlify', 'edge-functions', 'route-previews.js');
  const INDEX = path.join(ROOT, 'index.html');

  console.log('--- verify_route_previews.js ---');
  console.log(`  tree  ${ROOT}`);

  /* ---- 1. the function exists and loads ------------------------------------------------------ */
  if (!fs.existsSync(MOD)) {
    console.log('  FAIL  the edge function exists  (netlify/edge-functions/route-previews.js is missing)');
    console.log('\n  0 passed, 1 failed -- run scripts/build_route_previews.js <web-clone> --apply');
    process.exit(1);
  }
  ok(true, 'the edge function exists', `${(fs.statSync(MOD).size / 1024).toFixed(0)} kB`);

  let m;
  try { m = await import('file://' + MOD); }
  catch (e) {
    console.log('  FAIL  it loads as a module  ' + e.message);
    console.log('\n  1 passed, 1 failed');
    process.exit(1);
  }
  ok(typeof m.default === 'function' && typeof m.previewFor === 'function'
     && typeof m.injectPreview === 'function' && typeof m.isCrawler === 'function' && m.config,
     'it loads as a module', 'default + previewFor + injectPreview + isCrawler + config');

  /* ---- 2. the sentinels are in the shipped file and enclose the whole block ------------------- */
  const html = fs.readFileSync(INDEX, 'utf8');
  const i = html.indexOf('<!--RC_OG-->'), j = html.indexOf('<!--/RC_OG-->');
  ok(i > 0 && j > i, 'index.html carries the sentinels', i > 0 && j > i ? `at ${i} and ${j}` : 'missing or out of order');
  const block = i > 0 && j > i ? html.slice(i, j) : '';
  ok(['og:title', 'og:description', 'og:image', 'twitter:card', 'name="description"'].every(p => block.includes(p)),
     'the sentinels enclose the whole card block');
  /* An og: tag outside the sentinels survives the swap and, being later in the head, wins. */
  ok(j > 0 && !html.slice(j).includes('og:'), 'no og: tag survives after the closing sentinel');

  /* ---- 3. the route table --------------------------------------------------------------------- */
  const DATA = JSON.parse(fs.readFileSync(path.join(ROOT, 'content', 'conditions.json'), 'utf8'));
  const GAL = JSON.parse(fs.readFileSync(path.join(ROOT, 'content', 'galleries.json'), 'utf8'));
  const missCond = DATA.filter(d => !m.previewFor('/c/' + d.id));
  ok(missCond.length === 0, 'every condition has a card',
     missCond.length ? `${missCond.length} missing, first ${missCond[0].id}` : `${DATA.length} conditions`);
  const realGal = (GAL.real || []).filter(id => GAL.galleries[id]);
  const missGal = realGal.filter(id => !m.previewFor('/g/' + id));
  ok(missGal.length === 0, 'every real gallery has a card',
     missGal.length ? `${missGal.length} missing, first ${missGal[0]}` : `${realGal.length} galleries`);
  ok(['/g/', '/u/', '/x/'].every(p => m.previewFor(p)) && ['/g', '/u', '/x'].every(p => m.previewFor(p)),
     'an index route resolves with and without its trailing slash');
  /* The other direction: a card for content that no longer ships. The table is generated, so a
     stale entry means it was generated from a different tree than the one being checked -- and it
     would advertise a page that 404s inside the app. */
  const ids = new Set(DATA.map(d => d.id));
  /* `m.R ||{}` would make this pass by finding nothing, so the export is asserted first. */
  const ghosts = m.R ? Object.keys(m.R).filter(k => k.startsWith('/c/') && !ids.has(k.slice(3))) : null;
  ok(ghosts !== null && ghosts.length === 0, 'no card points at content that is gone',
     ghosts === null ? 'the table is not exported -- cannot tell' :
     ghosts.length ? `${ghosts.length}, first ${ghosts[0]}` : `${ids.size} ids, none orphaned`);
  ok(m.previewFor('/c/DVT') && m.previewFor('/c/dvt')
     && m.previewFor('/c/DVT').title === m.previewFor('/c/dvt').title,
     'lookup is case-insensitive and percent-decoded');
  ok(m.previewFor('/c/not-a-condition') === null && m.previewFor('/') === null,
     'an unknown route falls through to the site-wide card');

  /* The table must actually differ per route -- a bug that returned the same object everywhere
     would pass every check above and ship exactly the defect this patch exists to remove. */
  const titles = new Set(DATA.map(d => m.previewFor('/c/' + d.id).title));
  ok(titles.size === DATA.length, 'the cards are distinct', `${titles.size} distinct titles for ${DATA.length} conditions`);

  /* ---- 4. escaping ---------------------------------------------------------------------------- */
  const hyp = m.previewFor('/c/hyponatremia');
  const hypHtml = m.injectPreview('<head><!--RC_OG--><!--/RC_OG--></head>', hyp, 'https://x/');
  ok(/content="[^"]*&lt;135[^"]*"/.test(hypHtml), 'a literal < in a tagline is escaped, once',
     hyp ? hyp.description.slice(0, 48) : '');
  ok(!/&amp;lt;/.test(hypHtml), 'and not double-escaped');
  const evil = m.injectPreview('<head><!--RC_OG--><!--/RC_OG--></head>',
    { title: 'a"b<script>', description: "x&y'z", image: 'https://x/c.jpg' }, 'https://x/');
  ok(!evil.includes('<script>') && evil.includes('&quot;') && evil.includes('&amp;'),
     'a quote or an angle bracket cannot break out of the attribute');

  /* ---- 5. the handler, with a context.next() double ------------------------------------------- */
  const shipped = html;
  const mkRes = () => new Response(shipped, {
    status: 200,
    headers: {
      'content-type': 'text/html; charset=UTF-8',
      'content-encoding': 'br',             // the trap: the body handed back is already decoded
      'content-length': '148231',           // and this describes the compressed bytes
      'cache-control': 'public,max-age=0,must-revalidate',
    },
  });
  const call = async (pathname, ua) => {
    const req = new Request('https://rounds-codex.netlify.app' + pathname, { headers: ua ? { 'user-agent': ua } : {} });
    return m.default(req, { next: async () => mkRes() });
  };

  const BROWSER = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1';
  const browserRes = await call('/c/dvt', BROWSER);
  ok(browserRes === undefined, 'a browser navigation is passed through untouched',
     browserRes === undefined ? 'returns undefined -- context.next() streams, nothing is buffered' : 'the function returned a Response');

  const crawlRes = await call('/c/dvt', 'Twitterbot/1.0');
  const crawlHtml = crawlRes ? await crawlRes.text() : '';
  const tag = (s, p) => (s.match(new RegExp(`<meta (?:property|name)="${p}" content="([^"]*)"`)) || [])[1];
  ok(tag(crawlHtml, 'og:title') === 'Deep Vein Thrombosis'
     && /deep vein/i.test(tag(crawlHtml, 'og:description') || '')
     && tag(crawlHtml, 'twitter:title') === 'Deep Vein Thrombosis',
     'a crawler gets the per-route card', `og:title = ${JSON.stringify(tag(crawlHtml, 'og:title'))}`);
  ok(tag(crawlHtml, 'og:url') === 'https://rounds-codex.netlify.app/c/dvt',
     'og:url names the shared route', tag(crawlHtml, 'og:url') || '(absent)');
  ok((crawlHtml.match(/property="og:title"/g) || []).length === 1,
     'exactly one og:title survives the swap');
  ok(crawlRes && !crawlRes.headers.get('content-encoding') && !crawlRes.headers.get('content-length')
     && crawlRes.headers.get('cache-control') === 'public,max-age=0,must-revalidate',
     'the decoded body does not keep content-encoding or content-length',
     crawlRes ? `kept cache-control, dropped ${['content-encoding', 'content-length'].filter(h => !crawlRes.headers.get(h)).length}/2` : '');

  /* The app's own markup has to survive. Length changes by exactly the head swap; nothing else. */
  const bodyIn = shipped.slice(shipped.indexOf('<body'));
  ok(crawlHtml.slice(crawlHtml.indexOf('<body')) === bodyIn, 'the body is byte-identical');

  /* ---- 6. the config covers every route family the app can link to --------------------------- */
  const paths = (m.config && m.config.path) || [];
  const fams = ['/c/', '/s/', '/g/', '/r/', '/u/', '/x/'];
  const uncovered = fams.filter(f => !paths.some(p => p === f + '*' || p === f));
  ok(uncovered.length === 0, 'config.path covers every one-segment route',
     uncovered.length ? 'missing ' + uncovered.join(' ') : paths.join(' '));
  /* RC_ROOT's regex is the app's own list. A seventh letter added there and not here means that
     family silently keeps the site-wide card -- exactly the defect being fixed. */
  const rcRoot = (shipped.match(/RC_OPEN_ROUTES\s*=\s*\/\^\\\/\(([a-z|]+)\)/) || [])[1];
  ok(rcRoot && rcRoot.split('|').every(l => paths.includes(`/${l}/*`)),
     'config.path matches the app\'s own route regex', rcRoot ? `RC_OPEN_ROUTES = (${rcRoot})` : '(regex not found)');

  /* ---- 7. end to end: the transformed document still boots the app --------------------------- */
  if (!process.env.RC_PW || !fs.existsSync(path.join(process.env.RC_PW, 'node_modules', 'playwright-core'))) {
    console.log('  skip  the transformed page still boots  (RC_PW unset)');
  } else if (!(await portFree(PORT))) {
    console.log(`  FAIL  the transformed page still boots  (port ${PORT} is in use -- a stale server would serve a different tree)`);
    fail++;
  } else {
    const sim = spawn(process.execPath, [path.join(__dirname, 'netlifysim.js'), ROOT, String(PORT)], { stdio: 'ignore' });
    await new Promise(r => setTimeout(r, 1500));
    try {
      const { chromium } = require(process.env.RC_PW + '/node_modules/playwright-core');
      const { seedAuth } = require('./rc_test_auth.js');
      const b = await chromium.launch({
        executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
        args: ['--no-sandbox'],
      });
      const ctx = await b.newContext({ viewport: { width: 390, height: 844 } });
      await seedAuth(ctx);
      const p = await ctx.newPage();
      const errs = [];
      p.on('pageerror', e => errs.push(String(e)));

      /* Serve the CRAWLER's document to a real browser. If the injected head broke the parse, the
         app would not boot -- and that is the failure a meta-tag check cannot see. */
      await p.route(`http://127.0.0.1:${PORT}/c/dvt`, async route => {
        await route.fulfill({ status: 200, contentType: 'text/html; charset=UTF-8', body: crawlHtml });
      });
      await p.goto(`http://127.0.0.1:${PORT}/c/dvt`, { waitUntil: 'networkidle' });
      await p.evaluate(() => { const g = document.getElementById('rc-gate-ok'); if (g) g.click(); });
      await p.waitForTimeout(1200);
      const st = await p.evaluate(() => ({
        conditions: (typeof DATA !== 'undefined' && DATA) ? DATA.length : 0,
        ogTitle: (document.querySelector('meta[property="og:title"]') || {}).content,
        heading: (document.querySelector('.d-title') || { textContent: '' }).textContent.trim().slice(0, 40),
      }));
      /* The heading matters as much as the tags: it proves the /c/dvt ROUTE still boots through the
         injected head, rather than the app merely loading and showing the library. */
      ok(st.conditions > 100 && st.ogTitle === 'Deep Vein Thrombosis'
         && st.heading === 'Deep Vein Thrombosis' && errs.length === 0,
         'the transformed page still boots the app on the shared route',
         `${st.conditions} conditions, og:title=${JSON.stringify(st.ogTitle)}, <h1>=${JSON.stringify(st.heading)}, ${errs.length} pageerrors`);
      await b.close();
    } catch (e) {
      ok(false, 'the transformed page still boots the app', e.message.slice(0, 90));
    } finally {
      sim.kill();
    }
  }

  console.log('');
  console.log(`  ${pass} passed, ${fail} failed`);
  if (fail === 0) {
    console.log('');
    console.log('  AFTER DEPLOY, from a machine that can reach the host:');
    console.log("    curl -sS -H 'User-Agent: Twitterbot/1.0' https://rounds-codex.netlify.app/c/dvt \\");
    console.log("      | grep -o '<meta property=\"og:title\"[^>]*>'");
    console.log('    expect:  <meta property="og:title" content="Deep Vein Thrombosis">');
    console.log('    and the same URL with a browser UA must still return the site-wide "Rounds Codex".');
  }
  process.exit(fail === 0 ? 0 : 1);
})();
