#!/usr/bin/env node
/* Write the apple-app-site-association file that makes Universal Links work.
 *
 * app-store-checklist.md §4, the second-highest-value Guideline 4.2 signal after Spotlight
 * indexing: a /c/<id> link a colleague sends opens IN THE APP rather than in Safari. That is the
 * difference between a wrapped website and something the OS treats as an app, and it costs one
 * static file plus an entitlement.
 *
 * THE PATHS ARE THE SIX ONE-SEGMENT ROUTES and they are read from the app's own RC_ROOT regex, not
 * typed here. That regex is the thing every route addition has to touch (CLAUDE.md: miss it and
 * <base> becomes that folder, every content/*.json 404s, and the app boots to "Content didn't load"
 * with no page error). Deriving from it means a seventh route cannot silently fail to be a
 * Universal Link -- re-run this and the file grows on its own.
 *
 * NOT claimed: "/" and everything else. A Universal Link entry for the whole origin would hijack
 * every link to the site, including the public /privacy/, /terms/ and /support/ pages that App
 * Review and search engines need to open in a BROWSER. Excluding them is not tidiness; a reviewer
 * who taps the privacy URL and gets bounced into the app has been shown the wrong thing.
 *
 * WHAT THIS FILE CANNOT KNOW: the Apple Developer Team ID and the bundle identifier. They come from
 * the developer account and the Xcode project, neither of which exists yet. Both are emitted as
 * obvious placeholders and the file REFUSES to look finished -- pass --team and --bundle to write a
 * real one. An AASA with a wrong appID fails silently: iOS just opens the link in Safari and never
 * says why, which is the worst debugging experience Apple offers.
 *
 * SERVING RULES, which are where this usually goes wrong:
 *   - served over HTTPS from /.well-known/apple-app-site-association
 *   - Content-Type: application/json
 *   - NO redirect, no query string, no authentication
 *   - NO .json extension on the filename
 * The _headers rule is emitted alongside; the /c/* rewrites in _redirects do not match
 * /.well-known/, checked rather than assumed.
 *
 * Usage: node scripts/build_aasa.js <site-root> [--team ABCDE12345] [--bundle com.example.app] [--apply]
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2];
const APPLY = process.argv.includes('--apply');
const arg = n => { const i = process.argv.indexOf(n); return i > -1 ? process.argv[i + 1] : null; };
const TEAM = arg('--team');
const BUNDLE = arg('--bundle');
if (!ROOT) {
  console.error('usage: build_aasa.js <site-root> [--team ID] [--bundle ID] [--apply]');
  process.exit(2);
}

const idx = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

/* ---- the routes, from the app's own regex ---------------------------------------------------- */
const m = idx.match(/\/\^\\\/\(([a-z|]+)\)\\\//);
if (!m) {
  console.error('FAIL: could not find the RC_ROOT one-segment route regex in index.html.');
  console.error('      It looked like /^\\/(c|s|g|r|u|x)\\// -- if that shape changed, fix this reader');
  console.error('      rather than hard-coding the routes, or a new route will silently not be a link.');
  process.exit(1);
}
const routes = m[1].split('|');
if (routes.length < 6) {
  console.error(`FAIL: only ${routes.length} route(s) parsed (${routes}) -- expected at least the six known ones`);
  process.exit(1);
}

/* Cross-check against RC_OPEN_ROUTES in the login wall. The two lists are required to stay in step
   and have drifted before; if they disagree, one of them is wrong and this should not guess which. */
const w = idx.match(/RC_OPEN_ROUTES=\/\^\\\/\(([a-z|]+)\)\\\//);
if (w && w[1] !== m[1]) {
  console.error(`FAIL: RC_ROOT routes (${m[1]}) and RC_OPEN_ROUTES (${w[1]}) disagree -- fix that first`);
  process.exit(1);
}

const APPID = `${TEAM || 'TEAMID'}.${BUNDLE || 'com.roundscodex.app'}`;
const placeholder = !TEAM || !BUNDLE;

const aasa = {
  applinks: {
    details: [{
      appIDs: [APPID],
      components: routes.map(r => ({
        '/': `/${r}/*`,
        comment: `Rounds Codex ${({ c: 'condition', s: 'specialty section', g: 'gallery',
                                   r: 'guideline year', u: 'clinical updates', x: 'calculator' })[r] || r} links`,
      })),
    }],
  },
  /* Declared empty rather than omitted: an absent key and an empty list mean the same thing to iOS,
     but writing them makes it obvious to the next reader that neither was forgotten. */
  webcredentials: { apps: [] },
  appclips: { apps: [] },
};

const dir = path.join(ROOT, '.well-known');
const out = path.join(dir, 'apple-app-site-association');
const body = JSON.stringify(aasa, null, 2) + '\n';

const HEADERS_RULE = [
  '',
  '# Universal Links. Apple fetches this file over HTTPS with no redirect and no query string, and',
  '# it must be served as JSON despite having no .json extension -- Netlify would otherwise guess',
  '# from the extension and send the wrong type, which fails silently: iOS just opens the link in',
  '# Safari and never says why.',
  '/.well-known/apple-app-site-association',
  '  Content-Type: application/json',
].join('\n') + '\n';

/* ---- checks ---------------------------------------------------------------------------------- */
const redirects = fs.existsSync(path.join(ROOT, '_redirects'))
  ? fs.readFileSync(path.join(ROOT, '_redirects'), 'utf8') : '';
const clash = redirects.split('\n').map(l => l.trim()).filter(l => l && !l.startsWith('#'))
  .map(l => l.split(/\s+/)[0])
  .filter(from => from === '/*' || '/.well-known/apple-app-site-association'.startsWith(from.replace(/\*$/, '')));
const headers = fs.existsSync(path.join(ROOT, '_headers'))
  ? fs.readFileSync(path.join(ROOT, '_headers'), 'utf8') : '';

const checks = [
  ['routes read from RC_ROOT, not hard-coded', routes.length >= 6, routes.join(',')],
  ['RC_ROOT and RC_OPEN_ROUTES agree',         !w || w[1] === m[1], w ? w[1] : 'no wall present'],
  ['valid JSON',                               (() => { try { JSON.parse(body); return true; } catch (e) { return false; } })()],
  ['no _redirects rule swallows the path',     clash.length === 0, clash.join(' ')],
  ['public pages are NOT claimed',             !routes.includes('privacy') && !routes.includes('terms') &&
                                               !routes.includes('support') && !body.includes('"/": "/*"')],
];
let bad = 0;
for (const [name, ok, detail] of checks) {
  console.log(`  ${ok ? 'ok  ' : 'FAIL'} ${name}${detail && !ok ? '  -- ' + detail : detail ? '  (' + detail + ')' : ''}`);
  if (!ok) bad++;
}
if (bad) { console.error(`\n${bad} check(s) failed -- not writing`); process.exit(1); }

console.log(`\n  appID: ${APPID}${placeholder ? '   <-- PLACEHOLDER' : ''}`);
console.log(`  paths: ${routes.map(r => `/${r}/*`).join('  ')}`);

if (placeholder) {
  console.log('\n  This file will NOT work as written. iOS matches the appID against the installed');
  console.log('  app and silently falls back to Safari when it does not match -- no error, anywhere.');
  console.log('  Re-run with --team <Team ID> --bundle <bundle identifier> once the Xcode project exists.');
}
if (!headers.includes('/.well-known/apple-app-site-association')) {
  console.log('\n  _headers needs this rule appended (add it with --apply):');
  console.log(HEADERS_RULE.split('\n').map(l => '    ' + l).join('\n'));
}

if (APPLY) {
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(out, body);
  if (!headers.includes('/.well-known/apple-app-site-association'))
    fs.appendFileSync(path.join(ROOT, '_headers'), HEADERS_RULE);
  console.log(`\nwritten: ${out}${placeholder ? '  (with placeholder appID)' : ''}`);
} else {
  console.log('\ndry run -- pass --apply to write');
}
