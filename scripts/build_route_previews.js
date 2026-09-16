#!/usr/bin/env node
/* build_route_previews.js <web-clone> [--apply]
 *
 * Per-route link-preview cards. Generates a Netlify Edge Function that rewrites the og:/twitter:
 * tags on a shared link so /c/dvt previews as "Deep Vein Thrombosis" with its own tagline, instead
 * of the site-wide card every route shares today.
 *
 * WHY AN EDGE FUNCTION AND NOT MORE META TAGS. `_redirects` rewrites all six route families to the
 * same index.html, and link-preview crawlers do not run JavaScript. So the card a crawler sees is
 * whatever is in that one file's head -- which is why v140 could only ship ONE card for 183
 * conditions, 102 galleries, 21 sections, 50 guideline years and 10 calculators. The only place the
 * response can be varied per route without giving each route its own file is in front of the CDN.
 *
 * IT IS GATED ON THE CRAWLER USER-AGENT, AND THAT IS THE LOAD-BEARING DECISION.
 * An edge function that rewrites HTML has to buffer the whole body -- `await res.text()` -- and the
 * body it hands back is decoded. Netlify serves index.html brotli-compressed (measured: 756,093
 * bytes raw on the wire as `content-encoding: br`), so transforming every request risks sending a
 * phone five times the bytes it gets today on the one route users actually open. A crawler does not
 * care about 756 kB; a student on hospital wifi does. So a browser navigation is passed straight
 * through with `context.next()` and never touched -- byte-identical to today, zero added latency --
 * and only a recognised preview agent gets the rewritten head.
 *
 * The failure direction is safe: an agent NOT on the list sees the v140 site-wide card, which is
 * exactly what it sees today. Nothing regresses, some things improve.
 *
 * THE UA LIST STARTS FROM robots.txt. That file already allow-lists seven preview agents by name,
 * which is the decision about who may fetch these pages; this list is who gets the better card, so
 * it matches those seven and adds the ones that share a card without being named there -- Applebot
 * (macOS Messages, Mail, Notes) above all, because Messages is where this product is actually
 * shared. Search crawlers are deliberately absent: robots.txt disallows them and `_headers` sends
 * noindex, and handing Googlebot per-route cards while both of those hold would be incoherent.
 * WHAT CANNOT BE VERIFIED FROM HERE: which UA iOS Messages sends. It is documented as the compound
 * `facebookexternalhit/1.1 Facebot Twitterbot/1.0` and macOS sends Applebot, and both match -- but
 * no iOS device and no WebKit exist in this container, so the first real share is the physician's
 * test. If a platform shows the old card, the fix is one string in CRAWLERS below.
 *
 * og:url IS NOW SET, AND v140 WAS RIGHT TO OMIT IT. Its docstring explains why: og:url is a
 * canonicalisation hint, so a single site-wide value would tell the platforms that honour it to
 * collapse /c/dvt to the site root, and the recipient would land in the library instead of on the
 * condition. That argument dies the moment the value is per-route -- here it names the shared URL
 * itself, which is the outcome the share button wants.
 *
 * THE SENTINELS. The function swaps everything between <!--RC_OG--> and <!--/RC_OG--> in the head.
 * That pair is inserted into index.html by this script around the block add_og_tags.js wrote. If
 * the sentinels are ever missing the function returns the response untouched rather than guessing,
 * so deleting them degrades to the v140 card rather than breaking a page.
 *
 * Run `node scripts/verify_route_previews.js <web-clone>` afterwards. It fails 0/N on a tree
 * without this patch applied.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2];
const APPLY = process.argv.includes('--apply');
if (!ROOT) { console.error('usage: build_route_previews.js <web-clone> [--apply]'); process.exit(2); }

const ORIGIN = 'https://rounds-codex.netlify.app';   // RC_SHARE_ORIGIN -- the host every link names
const CARD   = ORIGIN + '/og-card.jpg';
const OUT    = path.join(ROOT, 'netlify', 'edge-functions', 'route-previews.js');
const INDEX  = path.join(ROOT, 'index.html');

const read = f => JSON.parse(fs.readFileSync(path.join(ROOT, 'content', f), 'utf8'));
const DATA  = read('conditions.json');
const GAL   = read('galleries.json');
const CALC  = read('calculators.json');
const RES   = read('resident.json');

const GALLERIES = GAL.galleries;
const REAL = new Set(GAL.real || []);
const SPEC_NAME = Object.fromEntries((RES.specialties || []).map(s => [s.id, s.n]));
const GUIDE = RES.guidelines || {};

/* ---------------------------------------------------------------- text, once, at build time ----
   Taglines carry authored <b> markup and HTML entities ("Serum sodium <b>&lt;135 mEq/L</b>").
   A preview description is plain text, so the tags come out and the entities are DECODED here --
   then the edge function escapes for the attribute it is writing into. Decoding is not optional:
   escaping "&lt;135" without decoding it first yields "&amp;lt;135", which renders as the literal
   "&lt;135" on the card. */
const ENT = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', mdash: '—', ndash: '–' };
function plain(s) {
  return String(s || '')
    .replace(/<[^>]+>/g, '')
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&([a-z]+);/gi, (m, n) => (n.toLowerCase() in ENT ? ENT[n.toLowerCase()] : m))
    .replace(/\s+/g, ' ')
    .trim();
}
/* Most platforms cut a description near 200 characters and none of them do it on a word boundary.
   Six of the 183 taglines are longer than that (max 218), so this fires rarely -- but a card that
   ends mid-word looks broken in a way the missing clause never would. */
const LIMIT = 200;
function clip(s, limit = LIMIT) {
  if (s.length <= limit) return s;
  const cut = s.slice(0, limit - 1);
  const sp = cut.lastIndexOf(' ');
  return (sp > limit * 0.6 ? cut.slice(0, sp) : cut).replace(/[\s,;:.—-]+$/, '') + '…';
}
/* A list is built to FIT, not to a fixed count. The first attempt took N names and let clip() cut
   the overflow -- which swallowed the list's own "and N more" tail, so 48 of the 394 cards read as
   though the page held fewer items than it does. Take as many names as the remaining budget allows
   and let the tail state the rest honestly. */
function listFit(names, budget) {
  for (let k = names.length; k >= 1; k--) {
    const s = k === names.length
      ? names.join(', ')
      : names.slice(0, k).join(', ') + ` and ${names.length - k} more`;
    if (s.length <= budget) return s;
  }
  /* Not even one name fits: a single guideline title can run past 90 characters. Clip that one
     rather than dropping the list, and still say how many are behind it. */
  const tail = names.length > 1 ? ` and ${names.length - 1} more` : '';
  return clip(names[0], Math.max(24, budget - tail.length)) + tail;
}
/* tpl('') measures the sentence around the list, so the budget is whatever is left of the 200. */
const withList = (names, tpl) => tpl(listFit(names, LIMIT - tpl('').length));
const plural = (n, one, many) => `${group(n)} ${n === 1 ? one : many}`;
/* "1020 original clinical illustrations" is the kind of number that reads as a typo. Every other
   surface in the product writes it 1,020. */
const group = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

/* The app's own slug, copied from index.html's rcSlug so a /s/ link generated in the app and the
   key looked up here cannot drift. */
const slug = n => String(n).toLowerCase().replace(/&/g, ' ').replace(/['’]/g, '')
  .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

/* ------------------------------------------------------------------------------ the table ------
   Keyed by canonical pathname: decoded, lowercased, no trailing slash. An index route is its bare
   letter ("/g"), matching what the app links to as "/g/". */
const R = {};
/* A third element is the route's OWN card image, root-relative. Only gallery routes have one, and
   only where the file is actually on disk -- a table entry pointing at a missing image renders as a
   BROKEN card, which is worse than the site-wide one it replaced. */
const add = (key, title, desc, image) => {
  if (R[key]) { console.error(`FAIL: duplicate route key ${key}`); process.exit(1); }
  R[key] = image ? [title, clip(plain(desc)), image] : [title, clip(plain(desc))];
};

/* -- conditions. The tagline is the single best sentence anyone wrote about the condition, and it
      is already the first thing on the page the link opens. */
for (const d of DATA) add('/c/' + d.id, plain(d.name), d.tagline);

/* -- sections. The app's share text is "<Category> — N conditions in Rounds Codex"; the count is
      already the title's neighbour on a card, so the description spends its room on WHICH ones. */
const CATS = [];
for (const d of DATA) if (!CATS.includes(d.category)) CATS.push(d.category);
for (const c of CATS) {
  const names = DATA.filter(d => d.category === c).map(d => plain(d.name));
  add('/s/' + slug(c), plain(c),
    withList(names, L => `${plural(names.length, 'condition', 'conditions')} in Rounds Codex: ${L}.`));
}

/* -- galleries. Only the ids with real artwork get a card: REALGAL is what the app renders, and a
      gallery outside it has nothing to preview. */
let cards = 0;
for (const id of Object.keys(GALLERIES)) {
  if (!REAL.has(id)) continue;
  const g = GALLERIES[id];
  const cond = DATA.find(d => d.id === id);
  const name = plain((cond && cond.name) || g.title || id);
  const pages = (g.images || []).map(p => plain(p.title)).filter(Boolean);
  const n = (g.images || []).length;
  const cardRel = `og/g/${id}.jpg`;
  const card = fs.existsSync(path.join(ROOT, cardRel)) ? '/' + cardRel : null;
  if (card) cards++;
  add('/g/' + id, name, pages.length
    ? withList(pages, L => `${plural(n, 'original illustrated page', 'original illustrated pages')}: ${L}.`)
    : `${plural(n, 'original illustrated page', 'original illustrated pages')} in Rounds Codex.`, card);
}
{
  const ids = Object.keys(GALLERIES).filter(id => REAL.has(id) && DATA.some(d => d.id === id));
  const pages = ids.reduce((t, id) => t + (GALLERIES[id].images || []).length, 0);
  add('/g', 'Image Galleries',
    `${plural(ids.length, 'illustrated gallery', 'illustrated galleries')} — ${group(pages)} original clinical illustrations, drawn for Rounds Codex.`);
}

/* -- resident specialty pages and their guideline years. /r/<spec> and /r/<spec>-<year>: hyphen in
      the URL, pipe in the nav stack. Both are real shared links (rcShareSpec and rcShareGuide). */
for (const s of RES.specialties || []) {
  const n = (RES.data || []).filter(d => d.sec === s.id).length;
  const t = RES.titles && RES.titles[s.id];
  add('/r/' + s.id, plain(s.n),
    `${plural(n, 'resident-level entry', 'resident-level entries')} in Rounds Codex${t ? ` — ${plain(t)}` : ''}, plus the conditions that go with them.`);
}
for (const spec of Object.keys(GUIDE)) {
  for (const year of Object.keys(GUIDE[spec] || {})) {
    const items = GUIDE[spec][year] || [];
    if (!items.length) continue;
    const name = plain(SPEC_NAME[spec] || spec);
    add(`/r/${spec}-${year}`, `${name} — Clinical Updates ${year}`,
      /* A guideline title runs past 90 characters -- the full ACC/AHA acute coronary syndromes
         one is 97 -- so on most years only one fits and the count carries the rest. */
      withList(items.map(i => plain(i.title)),
        L => `${plural(items.length, 'practice-changing study', 'practice-changing studies')} from ${year}, including ${L}.`));
  }
}
{
  let n = 0;
  for (const s of Object.keys(GUIDE)) for (const y of Object.keys(GUIDE[s] || {})) n += (GUIDE[s][y] || []).length;
  add('/u', 'Clinical Updates',
    `${plural(n, 'practice-changing study', 'practice-changing studies')} across ${plural(Object.keys(GUIDE).length, 'specialty', 'specialties')}, each with what changed and why.`);
}

/* -- calculators. calculators.json carries an id and a name and no prose, so the description is
      built from the name rather than invented. */
const CALCS = Array.isArray(CALC) ? CALC : (CALC.calculators || []);
/* `purpose` is the sentence the physician wrote about what the score is FOR. Repeating the name
   under itself -- which is what a card does when the title and the description both open with it --
   says nothing the title has not already said. */
for (const c of CALCS) {
  if (!c.purpose) { console.error(`FAIL: calculator ${c.id} has no purpose to describe it`); process.exit(1); }
  add('/x/' + c.id, plain(c.name), plain(c.purpose));
}
add('/x', 'Clinical Calculators',
  withList(CALCS.map(c => plain(c.name)),
    L => `${plural(CALCS.length, 'bedside calculator', 'bedside calculators')}: ${L}.`));

/* ------------------------------------------------------------------------ sanity, then emit ----
   A clipped LIST is worse than a long one: the cut swallows its own "and N more" tail, so the card
   reads as though the page held fewer items than it does. Only the conditions, whose descriptions
   are a sentence rather than a list, are allowed to clip. Everything else must be built to fit. */
const keys = Object.keys(R);
const clipped = keys.filter(k => !k.startsWith('/c/') && R[k][1].endsWith('…'));
if (clipped.length) {
  console.error(`FAIL: ${clipped.length} non-condition description(s) had to be clipped -- shorten the list`);
  for (const k of clipped.slice(0, 5)) console.error(`       ${k}  ${R[k][1]}`);
  process.exit(1);
}
for (const k of keys) {
  if (k !== k.toLowerCase()) { console.error(`FAIL: route key is not lowercase: ${k}`); process.exit(1); }
  if (/\/$/.test(k)) { console.error(`FAIL: route key has a trailing slash: ${k}`); process.exit(1); }
  const [t, d] = R[k];
  if (!t || !d) { console.error(`FAIL: ${k} has an empty title or description`); process.exit(1); }
  /* Tag-shaped, not any angle bracket. "Serum sodium <135 mEq/L" is correct plain text: the
     source wrote it as &lt;135 and plain() decoded it, which is the whole point of decoding. */
  const TAGLIKE = /<\/?[a-z][^>]*>/i;
  if (TAGLIKE.test(t) || TAGLIKE.test(d)) { console.error(`FAIL: ${k} still carries markup: ${t} | ${d}`); process.exit(1); }
  if (/&[a-z]+;|&#\d+;/i.test(t + d)) { console.error(`FAIL: ${k} still carries an undecoded entity: ${t} | ${d}`); process.exit(1); }
  if (d.length > LIMIT + 1) { console.error(`FAIL: ${k} description is ${d.length} chars`); process.exit(1); }
}
/* Every family the RC_ROOT regex knows must be represented, or a route family has silently been
   left on the site-wide card -- the exact defect this patch exists to fix. */
for (const fam of ['/c/', '/s/', '/g/', '/r/', '/x/']) {
  if (!keys.some(k => k.startsWith(fam))) { console.error(`FAIL: no routes generated for ${fam}`); process.exit(1); }
}
if (!R['/u'] || !R['/g'] || !R['/x']) { console.error('FAIL: an index route is missing'); process.exit(1); }

const CRAWLERS = [
  /* the seven robots.txt allow-lists by name */
  'twitterbot', 'facebookexternalhit', 'whatsapp', 'slackbot', 'discordbot', 'telegrambot', 'linkedinbot',
  /* and the ones that draw a card without being named there. Applebot is macOS Messages, Mail and
     Notes; facebookexternalhit above is what iOS Messages is documented to send. */
  'facebot', 'applebot', 'skypeuripreview', 'redditbot', 'embedly', 'iframely', 'vkshare', 'bitlybot',
  'nuzzel', 'qwantify', 'pinterestbot', 'mastodon', 'bluesky', 'signal-desktop', 'flipboard',
];

const banner = `/* GENERATED by scripts/build_route_previews.js in kreithen/rounds-codex -- DO NOT EDIT BY HAND.
 * Regenerate after any content change: node scripts/build_route_previews.js <web-clone> --apply
 *
 * Rewrites the link-preview card per route. Read that script's header for why this is gated on the
 * crawler user-agent, why a browser navigation is passed through untouched, and why og:url is set
 * here when the site-wide block deliberately omits it.
 *
 * ${keys.length} routes, generated ${new Date().toISOString().slice(0, 10)} from content/*.json.
 */`;

const fn = `${banner}
const ORIGIN = ${JSON.stringify(ORIGIN)};
const CARD = ${JSON.stringify(CARD)};
const OPEN = '<!--RC_OG-->';
const CLOSE = '<!--/RC_OG-->';

/* Substring match on a lowercased UA. Deliberately loose: the cost of a false positive is that a
   browser claiming to be Slackbot gets a decoded 756 kB page, and the cost of a false negative is
   the site-wide card -- today's behaviour. Neither breaks anything. */
const CRAWLERS = ${JSON.stringify(CRAWLERS, null, 0)};

/* Exported so scripts/verify_route_previews.js can walk the whole table rather than sampling it.
   Netlify reads the default export and ignores the rest. */
export const R = {
${keys.sort().map(k => `  ${JSON.stringify(k)}: [${JSON.stringify(R[k][0])}, ${JSON.stringify(R[k][1])}${R[k][2] ? ', ' + JSON.stringify(R[k][2]) : ''}],`).join('\n')}
};

/* Canonical form of a pathname: percent-decoded, lowercased, no trailing slash. "/g/" and "/g" are
   the same page -- the app links to the first and the table is keyed on the second. */
export function canonical(pathname) {
  let p = pathname;
  try { p = decodeURIComponent(p); } catch { /* a malformed escape is not a route */ }
  p = p.toLowerCase().replace(/\\/+$/, '');
  return p === '' ? '/' : p;
}

export function previewFor(pathname) {
  const hit = R[canonical(pathname)];
  if (!hit) return null;
  /* hit[2] is this route's own card; everything else falls back to the site-wide one. Absolute,
     because a preview crawler resolves og:image against nothing. */
  return { title: hit[0], description: hit[1], image: hit[2] ? ORIGIN + hit[2] : CARD };
}

export function isCrawler(ua) {
  const s = String(ua || '').toLowerCase();
  return !!s && CRAWLERS.some(c => s.includes(c));
}

const esc = s => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* Replaces everything between the sentinels. Returns the input unchanged if they are not both
   present in that order -- an index.html without them is a v140 build, and the site-wide card it
   carries is a correct answer, just not the best one. */
export function injectPreview(html, meta, url) {
  const i = html.indexOf(OPEN);
  if (i < 0) return html;
  const j = html.indexOf(CLOSE, i);
  if (j < 0) return html;
  const t = esc(meta.title), d = esc(meta.description), img = esc(meta.image || CARD);
  const block = [
    '<meta name="description" content="' + d + '">',
    '<meta property="og:type" content="article">',
    '<meta property="og:site_name" content="Rounds Codex">',
    '<meta property="og:title" content="' + t + '">',
    '<meta property="og:description" content="' + d + '">',
    /* Per-route, so it names the shared page rather than collapsing every link to the site root. */
    '<meta property="og:url" content="' + esc(url) + '">',
    '<meta property="og:image" content="' + img + '">',
    '<meta property="og:image:width" content="1200">',
    '<meta property="og:image:height" content="630">',
    '<meta property="og:image:alt" content="Rounds Codex \\u2014 a clinical study reference with original illustrations">',
    '<meta name="twitter:card" content="summary_large_image">',
    '<meta name="twitter:title" content="' + t + '">',
    '<meta name="twitter:description" content="' + d + '">',
    '<meta name="twitter:image" content="' + img + '">',
  ].join('\\n');
  return html.slice(0, i + OPEN.length) + '\\n' + block + '\\n' + html.slice(j);
}

/* The body coming back has already been decoded, so the encoding and length headers describe bytes
   that no longer exist. Sending either one makes the browser gunzip plain text or truncate to the
   compressed length -- the same trap sw.js's safeHeaders() exists for. */
function headersFor(res) {
  const h = new Headers(res.headers);
  h.delete('content-encoding');
  h.delete('content-length');
  return h;
}

export default async (request, context) => {
  try {
    if (!isCrawler(request.headers.get('user-agent'))) return;   // a browser: never touched
    const url = new URL(request.url);
    const meta = previewFor(url.pathname);
    if (!meta) return;                                            // unknown route: site-wide card

    const res = await context.next();
    if (!res || res.status !== 200) return res;
    if (!(res.headers.get('content-type') || '').includes('text/html')) return res;

    const html = await res.text();
    const out = injectPreview(html, meta, ORIGIN + url.pathname);
    return new Response(out, { status: res.status, statusText: res.statusText, headers: headersFor(res) });
  } catch (e) {
    /* A card is a nicety; the page is not. Anything unexpected falls through to the untouched
       response rather than turning a shared link into an edge error. */
    console.log('route-previews passed through: ' + (e && e.message));
    return;
  }
};

export const config = {
  path: ['/c/*', '/s/*', '/g/*', '/r/*', '/u/*', '/x/*', '/g/', '/u/', '/x/'],
};
`;

/* ------------------------------------------------------------- the sentinels in index.html ----- */
const OPEN_S = '<!--RC_OG-->', CLOSE_S = '<!--/RC_OG-->';
const FIRST = '<meta name="description" content="';
const LAST  = '<meta name="twitter:image" content="https://rounds-codex.netlify.app/og-card.jpg">';
let idx = fs.readFileSync(INDEX, 'utf8');
let idxOut = idx;
let sentinels = 'already present';
if (!idx.includes(OPEN_S)) {
  for (const [label, probe, n] of [['description', FIRST, 1], ['twitter:image', LAST, 1]]) {
    if (idx.split(probe).length - 1 !== n) {
      console.error(`FAIL: expected exactly ${n} ${label} anchor in index.html, found ${idx.split(probe).length - 1}`);
      console.error('      Run scripts/add_og_tags.js first -- the sentinels wrap the block it writes.');
      process.exit(1);
    }
  }
  idxOut = idx.replace(FIRST, OPEN_S + '\n' + FIRST).replace(LAST, LAST + '\n' + CLOSE_S);
  /* Pure insertion: undo exactly what was added and the original must return byte for byte. */
  const undone = idxOut.replace(OPEN_S + '\n', '').replace('\n' + CLOSE_S, '');
  if (undone !== idx) { console.error('FAIL: the sentinel insertion changed something else'); process.exit(1); }
  if (idxOut.indexOf(OPEN_S) > idxOut.indexOf(CLOSE_S)) { console.error('FAIL: sentinels are out of order'); process.exit(1); }
  sentinels = `inserted (+${idxOut.length - idx.length} bytes)`;
}

/* The transform has to survive on the file that actually ships, not on a fixture. */
{
  const block = idxOut.slice(idxOut.indexOf(OPEN_S), idxOut.indexOf(CLOSE_S) + CLOSE_S.length);
  for (const probe of ['og:title', 'og:description', 'twitter:image', 'name="description"']) {
    if (!block.includes(probe)) { console.error(`FAIL: the sentinels do not enclose ${probe}`); process.exit(1); }
  }
  if (idxOut.slice(idxOut.indexOf(CLOSE_S)).includes('og:')) {
    console.error('FAIL: an og: tag survives AFTER the closing sentinel -- it would override the injected one');
    process.exit(1);
  }
}

console.log('--- build_route_previews.js ---');
console.log(`  routes        ${keys.length}`);
for (const fam of [['/c/', 'conditions'], ['/s/', 'sections'], ['/g/', 'galleries'], ['/r/', 'resident + guideline years'], ['/x/', 'calculators']]) {
  console.log(`    ${fam[0].padEnd(5)} ${String(keys.filter(k => k.startsWith(fam[0])).length).padStart(4)}  ${fam[1]}`);
}
console.log(`    index    3  /g /u /x`);
console.log(`  own card art  ${cards} routes (site-wide og-card.jpg for the other ${keys.length - cards})`);
console.log(`  crawlers      ${CRAWLERS.length} user-agent substrings`);
console.log(`  longest desc  ${Math.max(...keys.map(k => R[k][1].length))} chars (limit ${LIMIT})`);
console.log(`  edge function ${(fn.length / 1024).toFixed(0)} kB -> netlify/edge-functions/route-previews.js`);
console.log(`  sentinels     ${sentinels}`);
console.log(`  sample        /c/dvt -> ${JSON.stringify(R['/c/dvt'] || null)}`);
if (!APPLY) { console.log('\n  dry run. Pass --apply to write.'); process.exit(0); }
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, fn);
fs.writeFileSync(INDEX, idxOut);
console.log('  written');
