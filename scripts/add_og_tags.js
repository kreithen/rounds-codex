#!/usr/bin/env node
/* add_og_tags.js <site-root> [--apply]
 *
 * Gives the site a link-preview card.
 *
 * WHY THIS IS WORTH DOING AT ALL. Sharing is a built feature: there are share buttons on condition
 * pages, gallery pages, the gallery index, section pages, guideline years and calculators, and
 * `robots.txt` goes to the trouble of allow-listing eight link-preview crawlers BY NAME so those
 * shares render a card. They cannot. Before this patch the head carried six meta tags -- charset,
 * viewport, theme-colour and three apple-mobile-web-app ones -- and not one of them was `og:`. Every
 * link a student sent to Messages, WhatsApp, Slack or Discord rendered as a bare grey URL. The most
 * organic distribution the product has was switched off by a few missing lines.
 *
 * WHAT THIS DOES *NOT* DO, and saying so matters more than what it does. `_redirects` rewrites every
 * route to this same index.html, and preview crawlers do not run JavaScript. So all 183 conditions
 * and 102 galleries get the SAME card. This is the site-wide card, not per-condition cards. Those
 * need a Netlify Edge Function injecting tags per route, or generated static stubs -- a real piece
 * of work, scoped in marketing-brief.md. Do not let this patch be mistaken for that one.
 *
 * `og:url` IS DELIBERATELY OMITTED. It is a canonicalisation hint: with a single site-wide value,
 * a shared /c/dvt link could be canonicalised to the site root by the platforms that honour it, and
 * the recipient would land on the library instead of the condition. Leaving it out lets the shared
 * URL stand, which is the whole point of the share button.
 *
 * `noindex` DOES NOT BLOCK THIS. `_headers` sends X-Robots-Tag: noindex sitewide and robots.txt
 * disallows search crawlers, both deliberate pre-launch. Neither stops a link-preview agent: they
 * are allow-listed in robots.txt by name, and noindex governs indexing rather than fetching. So the
 * cards work today, before any decision about going public in search.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2];
const APPLY = process.argv.includes('--apply');
if (!ROOT) { console.error('usage: add_og_tags.js <site-root> [--apply]'); process.exit(2); }

const CARD = 'og-card.jpg';
/* Absolute, because a preview crawler resolves og:image against nothing. This is RC_SHARE_ORIGIN's
   value -- the host that actually serves the app. roundscodex.com is a different Netlify site. */
const ORIGIN = 'https://rounds-codex.netlify.app';

const TITLE = 'Rounds Codex';
const DESC  = 'A clinical study reference for nursing and medical students. 183 conditions in three '
            + 'modes, 1,020 original clinical illustrations and 1,840 practice questions — all offline.';

const FILE = path.join(ROOT, 'index.html');
let s = fs.readFileSync(FILE, 'utf8');
const head = s.slice(0, s.indexOf('</head>'));

/* Refuse to double-apply, and refuse to fight tags somebody else added. */
for (const probe of ['og:title', 'twitter:card', 'name="description"']) {
  if (head.includes(probe)) { console.error(`FAIL: head already contains ${probe} -- nothing to do, or a conflict`); process.exit(1); }
}
if (!fs.existsSync(path.join(ROOT, CARD))) {
  console.error(`FAIL: ${CARD} is not in the site root. Build it with scripts/build_og_card.py and copy`);
  console.error('      the chosen candidate there first -- shipping tags that point at a missing image');
  console.error('      is worse than shipping none, because the card renders broken rather than absent.');
  process.exit(1);
}

const ANCHOR = '<meta name="apple-mobile-web-app-title" content="Rounds Codex">';
if (s.split(ANCHOR).length - 1 !== 1) { console.error('FAIL: expected exactly 1 apple-mobile-web-app-title anchor'); process.exit(1); }

const BLOCK = ANCHOR + `
<meta name="description" content="${DESC}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${TITLE}">
<meta property="og:title" content="${TITLE}">
<meta property="og:description" content="${DESC}">
<meta property="og:image" content="${ORIGIN}/${CARD}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Rounds Codex — a clinical study reference with original illustrations">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${TITLE}">
<meta name="twitter:description" content="${DESC}">
<meta name="twitter:image" content="${ORIGIN}/${CARD}">`;

const before = s.length;
const out = s.replace(ANCHOR, BLOCK);

console.log('--- add_og_tags.js ---');
console.log(`  description  ${DESC.length} chars`);
console.log(`  og:image     ${ORIGIN}/${CARD}  (${(fs.statSync(path.join(ROOT, CARD)).size / 1024).toFixed(0)} kB on disk)`);
console.log(`  og:url       omitted on purpose -- see the header of this file`);
console.log(`  index.html   ${before} -> ${out.length} bytes (+${out.length - before})`);
if (!APPLY) { console.log('\n  dry run. Pass --apply to write.'); process.exit(0); }
fs.writeFileSync(FILE, out);
console.log('  written');
