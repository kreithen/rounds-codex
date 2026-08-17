#!/usr/bin/env node
/* Own the two identity strings the app shows about itself: its version and its copyright line.
 *
 * Both were found drifting on 2026-08-17 while checking the About page, and they drift for opposite
 * reasons, which is why one script owns both.
 *
 * THE VERSION was `var RC_VERSION='2026.07.26'` against a shipped `version.txt` of v126 /
 * 2026-08-17 -- three weeks stale. Two version strings maintained by hand in two files will always
 * end up disagreeing; the fix is not to correct the number but to make one derive from the other.
 * `version.txt` wins, because it is the file Netlify serves and the one the physician opens to
 * confirm a deploy landed. RC_VERSION is shown in FOUR places, and the fourth is the one that made
 * this worth fixing rather than noting: the "Questions, feedback & bugs" mail body stamps
 * "App: Rounds Codex v<RC_VERSION>", so a stale constant means every bug report a reader sends
 * names the wrong build.
 *
 * THE COPYRIGHT was `'&copy; '+(new Date().getFullYear())+' Rounds Codex.'` -- computed at render
 * time, so it would silently have become "2027" in January while the 1,020 illustration pages, the
 * trademark applicant and the App Store Copyright field all stayed at 2026. A copyright notice
 * carries the year of publication, not today's date; a notice that changes itself is wrong by
 * construction and wrong in a way nobody will look for. It also said "Rounds Codex" where every
 * other artefact says "Rounds Codex, Inc." -- the Apple Developer Program seller name and the
 * trademark applicant. Both become one constant that has to be edited deliberately.
 *
 * --check is the point of the whole file. Run it before any archive or deploy: it fails if
 * RC_VERSION has fallen out of step with version.txt, or if the copyright has gone back to being
 * computed. Run it against the pre-fix tree and it fails 2/2.
 *
 * Usage:
 *   node scripts/stamp_version.js <app-root> --check
 *   node scripts/stamp_version.js <app-root> --sync  [--apply]      RC_VERSION <- version.txt
 *   node scripts/stamp_version.js <app-root> --set <label> [--apply]  new version.txt, then sync
 *
 * <label> is the human part, e.g. v127-VERSION-COPYRIGHT. Take the number from
 * `git show origin/main:version.txt`, never from a local file -- the app repo's main is shared and
 * moves fast.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2];
const APPLY = process.argv.includes('--apply');
const CHECK = process.argv.includes('--check');
const SYNC = process.argv.includes('--sync');
const setAt = process.argv.indexOf('--set');
const LABEL = setAt > -1 ? process.argv[setAt + 1] : null;
if (!ROOT || (!CHECK && !SYNC && !LABEL)) {
  console.error('usage: stamp_version.js <app-root> (--check | --sync | --set <label>) [--apply]');
  process.exit(2);
}

const idx = path.join(ROOT, 'index.html');
const vtxt = path.join(ROOT, 'version.txt');
let s = fs.readFileSync(idx, 'utf8');

/* The constant the copyright collapses to. Edited by hand, deliberately, and only when the
   published year genuinely changes -- which is the whole difference from getFullYear(). */
const COPYRIGHT = '2026 Rounds Codex, Inc.';

/* ---- version.txt is the source of truth ------------------------------------------------- */
function readVersionFile() {
  const raw = fs.readFileSync(vtxt, 'utf8').trim();
  const m = raw.match(/^(\d{4})-(\d{2})-(\d{2})T[\d:]+Z\s+(\S+)/);
  if (!m) throw new Error(`version.txt is not "<ISO timestamp>  <label>": ${JSON.stringify(raw)}`);
  return { raw, display: `${m[1]}.${m[2]}.${m[3]}`, label: m[4] };
}

if (LABEL) {
  if (!/^v\d+/.test(LABEL)) {
    console.error(`--set expects a label starting with v<number>, got ${JSON.stringify(LABEL)}`);
    process.exit(2);
  }
  const stamp = new Date().toISOString().replace(/\.\d+Z$/, 'Z');
  const line = `${stamp}  ${LABEL}\n`;
  console.log(`version.txt: ${JSON.stringify(fs.readFileSync(vtxt, 'utf8').trim())}`);
  console.log(`         ->  ${JSON.stringify(line.trim())}`);
  if (APPLY) fs.writeFileSync(vtxt, line);
  else console.log('  (dry run -- version.txt not written)');
}

const V = LABEL && APPLY ? readVersionFile()
        : LABEL ? { display: new Date().toISOString().slice(0, 10).replace(/-/g, '.'), label: LABEL }
        : readVersionFile();

/* ---- surgery 1: RC_VERSION ---------------------------------------------------------------- */
const cur = (s.match(/var RC_VERSION='([^']*)'/) || [])[1];
if (cur === undefined) { console.error('FAIL: RC_VERSION declaration not found'); process.exit(1); }
const versionOk = cur === V.display;
if (!versionOk && !CHECK) s = s.replace(/var RC_VERSION='[^']*'/, `var RC_VERSION='${V.display}'`);

/* ---- surgery 2: the copyright -------------------------------------------------------------- */
const COMPUTED = "      '&copy; '+(new Date().getFullYear())+' Rounds Codex. For educational use only.</div>'+";
/* No '.' between the constant and the next sentence: the old string ended "Rounds Codex" and
   supplied its own full stop, but the entity name ends "Inc." and already has one. Keeping the
   template's period rendered "Rounds Codex, Inc.. For educational use only." -- caught by looking
   at the page, not by any assertion, which is why there is now an assertion for it below. */
const FIXED = "      '&copy; '+RC_COPYRIGHT+' For educational use only.</div>'+";
const DECL = `var RC_COPYRIGHT='${COPYRIGHT}';`;
const hasComputed = s.includes(COMPUTED);
const hasFixed = s.includes(FIXED) && s.includes(DECL);
/* Scoped to the copyright line, NOT to getFullYear anywhere in the file. The first version of this
   check was `!/getFullYear\(\)/.test(s)` and it refused to run on a correct tree, because
   `dstr()` -- the spaced-review local date formatter at index.html:4402 -- uses it legitimately.
   CLAUDE.md is explicit that those dates are local YYYY-MM-DD compared as strings, and that ms
   arithmetic there gets DST wrong; "fixing" the broad assertion by deleting the call would have
   broken the review queue to satisfy a checker. A self-changing date is only wrong in a copyright. */
const selfDating = /&copy;[^\n]{0,120}getFullYear/;
const copyrightOk = hasFixed && !hasComputed && !selfDating.test(s);

if (!copyrightOk && !CHECK) {
  if (!hasComputed && !hasFixed) {
    console.error('FAIL: the footer copyright is neither the computed form nor the fixed one -- ' +
                  'it has been edited by hand. Not guessing; fix it or update this script.');
    process.exit(1);
  }
  if (hasComputed) {
    s = s.replace(COMPUTED, FIXED);
    /* Declared beside RC_VERSION rather than at the use site: they are the same kind of thing --
       a string about the app's identity that a human edits on purpose. */
    s = s.replace(/var RC_VERSION='[^']*';/, m => `${m}\n${DECL}`);
  }
  if (selfDating.test(s)) {
    console.error('FAIL: a self-dating copyright survives -- a second one is still in there');
    process.exit(1);
  }
  /* The review queue's own date formatter must be untouched. It is the thing a broader version of
     the check above would have destroyed, so it is asserted rather than assumed. */
  if (!/function dstr\(d\)\{ return d\.getFullYear\(\)/.test(s)) {
    console.error('FAIL: the spaced-review date formatter dstr() was altered -- aborting');
    process.exit(1);
  }
  /* Render the footer the way the app does and read it. Both halves of this string are correct on
     their own and wrong together -- "Inc." plus ". For educational use only." is "Inc.. For". No
     structural check sees that, and it is on every About page. */
  const rendered = `© ${COPYRIGHT} For educational use only.`;
  if (/\.\./.test(rendered) || /\s\s/.test(rendered)) {
    console.error(`FAIL: the footer would render "${rendered}" -- punctuation doubled`);
    process.exit(1);
  }
}

/* ---- report ------------------------------------------------------------------------------- */
if (CHECK) {
  const checks = [
    [`RC_VERSION matches version.txt`, versionOk,
     `RC_VERSION='${cur}' vs version.txt ${V.display} (${V.label})`],
    [`copyright is a constant, not computed`, copyrightOk,
     hasComputed ? 'still uses new Date().getFullYear()'
                 : `expected ${JSON.stringify(DECL)} and the RC_COPYRIGHT use site`],
  ];
  let bad = 0;
  for (const [name, ok, detail] of checks) {
    console.log(`  ${ok ? 'ok  ' : 'FAIL'} ${name}${ok ? '' : '  -- ' + detail}`);
    if (!ok) bad++;
  }
  console.log(bad ? `\n${bad}/2 FAILED` : '\nboth identity strings are in step');
  process.exit(bad ? 1 : 0);
}

console.log(`  RC_VERSION  '${cur}' -> '${V.display}'${versionOk ? '  (already in step)' : ''}`);
console.log(`  copyright   ${hasFixed && !hasComputed ? 'already a constant' : `computed year -> ${DECL}`}`);

/* The result must still parse: RC_VERSION and RC_COPYRIGHT sit inside the app's main inline
   script, and a broken declaration there is a blank app rather than an error. */
{
  const blocks = [...s.matchAll(/<script(?![^>]*\ssrc=)[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]);
  let n = 0;
  for (const code of blocks) {
    if (!code.trim()) continue;
    try { new Function(code); n++; } catch (e) {
      console.error(`FAIL: an inline <script> no longer parses: ${e.message}`); process.exit(1);
    }
  }
  console.log(`  ok   all ${n} inline <script> blocks parse`);
}

if (APPLY) { fs.writeFileSync(idx, s); console.log('\nwritten'); }
else { console.log('\ndry run -- pass --apply to write'); }
