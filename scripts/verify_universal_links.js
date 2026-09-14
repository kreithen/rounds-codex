#!/usr/bin/env node
/* verify_universal_links.js <site-root> [--live]
 *
 * Universal Links have FIVE things that must agree, spread across three places, and until this
 * script existed nothing checked any of them against each other:
 *
 *   1. the `applinks:` entitlement in the Xcode project        <- the physician's Mac, NOT IN A REPO
 *   2. the AASA served by that host                            <- .well-known/apple-app-site-association
 *   3. the app ID the AASA names                               <- team + bundle
 *   4. the routes the AASA covers                              <- RC_ROOT's regex, RC_OPEN_ROUTES' regex
 *   5. RC_SHARE_ORIGIN, the host the app puts in a shared link <- index.html
 *
 * THIS SCRIPT CANNOT CHECK (1), AND SAYS SO RATHER THAN IMPLYING IT PASSED. The entitlement lives
 * in `~/rounds-codex-ios` on the physician's Mac and is in neither repository, which is the whole
 * reason the current breakage was possible and went unnoticed: `applinks:roundscodex.com` names a
 * DIFFERENT Netlify site (`roundscodexwebsite`, id bf814a35-…, confirmed through the Netlify API
 * 2026-09-14) from the one that serves the app and the AASA (`rounds-codex`, id 15778795-…).
 *
 * The decisive point, and it does not depend on what roundscodex.com serves: RC_SHARE_ORIGIN is
 * `https://rounds-codex.netlify.app`, so every /c/<id> link the app produces points at that host.
 * For iOS to open one in the app, the entitlement must name THAT host. Putting an AASA on
 * roundscodex.com would not help a single link the app has ever shared.
 *
 * So check 5 below is the one that matters most, and it is the one a session can actually run: if
 * the host in RC_SHARE_ORIGIN is not the host this AASA is served from, Universal Links cannot work
 * no matter what the entitlement says.
 *
 * WHY THE ROUTE CHECK EARNS ITS PLACE. CLAUDE.md already warns that a new one-segment route must be
 * added to the RC_ROOT regex (or every content/*.json 404s) and to RC_OPEN_ROUTES (or the login
 * wall eats share links). The AASA is a THIRD list of the same routes, in a different file, in a
 * different syntax, and nothing has ever compared it to the other two. A route added to the app but
 * not to the AASA opens in Safari instead of the app -- silently, with nothing to see in any log.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const https = require('https');

const ROOT = process.argv[2];
const LIVE = process.argv.includes('--live');
if (!ROOT) { console.error('usage: verify_universal_links.js <site-root> [--live]'); process.exit(2); }

const IDX = path.join(ROOT, 'index.html');
const AASA = path.join(ROOT, '.well-known', 'apple-app-site-association');
for (const f of [IDX, AASA]) {
  if (!fs.existsSync(f)) { console.error(`missing: ${f}`); process.exit(2); }
}
const html = fs.readFileSync(IDX, 'utf8');
const raw = fs.readFileSync(AASA, 'utf8');

/* The shipped identity. Hard-coded rather than read from the file under test, so the check cannot
   agree with whatever the file happens to say. Team 744JSM2Z3H / com.roundscodex.app is the app
   live on the App Store as id 6802452599. */
const APP_ID = '744JSM2Z3H.com.roundscodex.app';

const results = [];
const rec = (name, pass, detail) => results.push({ name, pass, detail });

let aasa = null;
try { aasa = JSON.parse(raw); rec('the AASA is valid JSON', true, `${raw.length} bytes`); }
catch (e) { rec('the AASA is valid JSON', false, e.message); }

if (aasa) {
  const det = ((aasa.applinks || {}).details) || [];
  rec('the AASA has exactly one details entry', det.length === 1, `${det.length} entries`);
  const ids = det.length ? det[0].appIDs || [] : [];
  rec('the AASA names the shipped app ID', ids.length === 1 && ids[0] === APP_ID,
    ids.join(', ') || '(none)');

  /* Routes, three ways. */
  const comps = det.length ? (det[0].components || []).map(c => c['/']) : [];
  const aasaRoutes = [...new Set(comps.map(c => (c.match(/^\/([a-z]+)\//) || [])[1]).filter(Boolean))].sort();
  const rcRoot = (html.match(/\/\^\\\/\(([a-z|]+)\)\\\/\//) || [])[1];
  const rootRoutes = rcRoot ? rcRoot.split('|').sort() : null;
  const open = [...html.matchAll(/RC_OPEN_ROUTES\s*=\s*\/\^\\\/\(([a-z|]+)\)\\\/\//g)].map(m => m[1]);
  const openRoutes = open.length ? open[0].split('|').sort() : null;

  rec('the AASA covers every one-segment route', !!rootRoutes && String(aasaRoutes) === String(rootRoutes),
    `AASA [${aasaRoutes}] vs RC_ROOT [${rootRoutes || '?'}]`);
  /* Skipped rather than failed on a native payload: build_ios_variant.js removes the login wall, so
     RC_OPEN_ROUTES does not exist there and its absence is correct. */
  if (openRoutes === null && /RC_NO_SERVICE_WORKER|rc-authgate/.test(html) === false) {
    rec('RC_OPEN_ROUTES matches the AASA', null, 'SKIP -- no login wall in this tree (native payload)');
  } else {
    rec('RC_OPEN_ROUTES matches the AASA', String(aasaRoutes) === String(openRoutes),
      `AASA [${aasaRoutes}] vs RC_OPEN_ROUTES [${openRoutes || '?'}]`);
  }

  /* THE ONE THAT MATTERS. A link the app shares on a host this AASA is not served from can never
     open the app, whatever the entitlement says. */
  const origin = (html.match(/RC_SHARE_ORIGIN\s*=\s*'([^']*)'/) || [])[1];
  const expectHost = process.env.RC_AASA_HOST || 'rounds-codex.netlify.app';
  let shareHost = null;
  try { shareHost = new URL(origin).host; } catch (e) {}
  rec('shared links point at the host serving this AASA', shareHost === expectHost,
    `RC_SHARE_ORIGIN host ${shareHost || '(unparseable)'} vs ${expectHost}`);
}

/* `_headers` must send JSON for a path with no extension, or iOS silently falls back to Safari. */
const headers = fs.existsSync(path.join(ROOT, '_headers'))
  ? fs.readFileSync(path.join(ROOT, '_headers'), 'utf8') : '';
rec('_headers serves the AASA as JSON',
  /\/\.well-known\/apple-app-site-association[\s\S]{0,120}application\/json/.test(headers),
  headers ? 'rule present' : 'no _headers file');

/* ---- optionally, what the internet actually gets ------------------------------------------- */
function head(url, hops = 0) {
  return new Promise(resolve => {
    const req = https.get(url, { timeout: 20000 }, res => {
      if ([301, 302, 307, 308].includes(res.statusCode) && res.headers.location && hops < 4) {
        res.resume();
        return resolve(head(new URL(res.headers.location, url).toString(), hops + 1));
      }
      let body = '';
      res.on('data', d => (body += d));
      res.on('end', () => resolve({ status: res.statusCode, type: res.headers['content-type'] || '', hops, body }));
    });
    req.on('error', e => resolve({ error: e.message }));
    req.on('timeout', () => { req.destroy(); resolve({ error: 'timeout' }); });
  });
}

(async () => {
  if (LIVE) {
    const host = process.env.RC_AASA_HOST || 'rounds-codex.netlify.app';
    const r = await head(`https://${host}/.well-known/apple-app-site-association`);
    if (r.error) {
      /* The agent proxy blocks some hosts and the block MOVES -- CLAUDE.md records it flipping in
         both directions. A fetch failure here says nothing about the host, so it is a SKIP. */
      rec('the live AASA is served correctly', null, `SKIP -- could not reach ${host}: ${r.error}`);
    } else {
      rec('the live AASA is served correctly',
        r.status === 200 && /application\/json/.test(r.type) && r.hops === 0,
        `http ${r.status}, ${r.type || 'no type'}, ${r.hops} redirect(s)`);
      /* Apple fetches this file, not the repo. If they disagree the repo is lying to you. */
      let same = false;
      try { same = JSON.stringify(JSON.parse(r.body)) === JSON.stringify(JSON.parse(raw)); } catch (e) {}
      rec('the live AASA matches this tree', same, same ? 'identical' : 'the served file differs from the repo');
    }
  } else {
    rec('the live AASA is served correctly', null, 'SKIP -- pass --live to fetch it');
  }

  console.log('--- verify_universal_links.js ---');
  let failed = 0, skipped = 0;
  for (const r of results) {
    const tag = r.pass === null ? 'SKIP' : r.pass ? ' ok ' : 'FAIL';
    if (r.pass === null) skipped++; else if (!r.pass) failed++;
    console.log(`  ${tag}  ${r.name.padEnd(44)} ${r.detail}`);
  }
  console.log(`\n${results.length - failed - skipped} passed, ${failed} failed, ${skipped} skipped`);
  console.log('\n  NOT CHECKED, and not checkable from a session: the app\'s own `applinks:`');
  console.log('  entitlement. It lives in the Xcode project on the physician\'s Mac and is in');
  console.log('  neither repo. Everything above can pass while Universal Links stay broken.');
  process.exit(failed ? 1 : 0);
})();
