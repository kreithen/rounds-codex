#!/usr/bin/env node
/*
 * Which ECG-anchored USMLE items still have no illustration?
 *
 *     node scripts/audit_ecg_coverage.js [--all]
 *
 * Each bank item carries `anchor`, one of null|lab|image|ecg|table, so `anchor:
 * "ecg"` is the authoritative list of questions that promise the reader a tracing.
 * image-manifest.json is NOT that list -- it only holds the items someone selected
 * for illustration, and it is a subset. An ECG-anchored item with no RC_ILLUS entry
 * shows a vignette referring to a tracing the reader cannot see.
 *
 * Written in JS, not Python, because the bank files are JavaScript with unquoted
 * keys and the illus packs are executable Object.assign calls. A first attempt
 * regex-and-JSON.parsed them, failed on all 43 files, and then printed "Every
 * ECG-anchored item has an illustration" -- a clean bill of health derived from
 * nothing. Hence assertBankLoaded() below: a coverage report that cannot tell
 * "nothing is missing" from "nothing was read" is worse than no report.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.dirname(__dirname);
const BANK = path.join(ROOT, 'data');
const PACKS = path.join(ROOT, 'applive', 'usmle');
const EXAM = { s1: 'Step 1', s2ck: 'Step 2 CK', s3: 'Step 3' };

// The published totals, from CLAUDE.md. If the bank ever legitimately grows, update
// these -- but a mismatch should stop the run rather than quietly report on a slice.
const EXPECT_ITEMS = 1010;
const EXPECT_FILES = 43;

function bankItems() {
  const files = fs.readdirSync(BANK).filter(f => /^usmle-.*\.js$/.test(f)).sort();
  const items = [];
  for (const f of files) {
    const ctx = vm.createContext({ window: {}, module: {}, exports: {} });
    vm.runInContext(fs.readFileSync(path.join(BANK, f), 'utf8'), ctx, { filename: f });
    // The banks declare `const USMLE_STEP1_B1 = [...]`, which does not land on the
    // context object, so re-read the declared names out of the source and evaluate
    // them inside the same context.
    const src = fs.readFileSync(path.join(BANK, f), 'utf8');
    for (const m of src.matchAll(/^\s*(?:const|let|var)\s+([A-Z0-9_]+)\s*=\s*\[/gm)) {
      const v = vm.runInContext(m[1], ctx);
      if (Array.isArray(v)) items.push(...v);
    }
  }
  return { items, files };
}

function illustrated() {
  const where = {};
  for (const f of fs.readdirSync(PACKS).filter(f => /^illus-.*\.js$/.test(f)).sort()) {
    const ctx = vm.createContext({ window: {} });
    vm.runInContext(fs.readFileSync(path.join(PACKS, f), 'utf8'), ctx, { filename: f });
    for (const id of Object.keys(ctx.window.RC_ILLUS || {})) where[id] = f;
  }
  return where;
}

function assertBankLoaded(items, files) {
  const problems = [];
  if (files.length !== EXPECT_FILES)
    problems.push(`read ${files.length} bank files, expected ${EXPECT_FILES}`);
  if (items.length !== EXPECT_ITEMS)
    problems.push(`read ${items.length} items, expected ${EXPECT_ITEMS}`);
  const anchors = new Set(items.map(i => i.anchor));
  if (!anchors.has('ecg'))
    problems.push('no item carries anchor "ecg" -- the field was not read correctly');
  if (problems.length) {
    console.error('REFUSING TO REPORT -- the bank did not load cleanly:');
    problems.forEach(p => console.error('  ' + p));
    process.exit(1);
  }
}

function main() {
  const all = process.argv.includes('--all');
  const { items, files } = bankItems();
  assertBankLoaded(items, files);

  const have = illustrated();
  const ecg = items.filter(i => (i.anchor || '').toLowerCase() === 'ecg');
  const missing = ecg.filter(i => !have[i.id]);

  console.log(`${items.length} bank items across ${files.length} files`);
  console.log(`${ecg.length} anchored to an ECG — ${ecg.length - missing.length} `
            + `illustrated, ${missing.length} missing\n`);

  if (missing.length) {
    console.log('id'.padEnd(11) + 'exam'.padEnd(11) + 'topic');
    console.log('-'.repeat(78));
    for (const i of missing.sort((a, b) => a.id.localeCompare(b.id)))
      console.log(i.id.padEnd(11) + (EXAM[i.id.split('-')[0]] || '?').padEnd(11)
                + (i.topic || '').slice(0, 54));
  } else {
    console.log('Every ECG-anchored item has an illustration.');
  }

  if (all) {
    console.log('\ncovered:');
    for (const i of ecg.slice().sort((a, b) => a.id.localeCompare(b.id)))
      if (have[i.id]) console.log(`  ${i.id.padEnd(11)} ${have[i.id].padEnd(14)} `
                                + `${(i.topic || '').slice(0, 48)}`);
  }

  // An item anchored to something else whose stem still describes a tracing has the
  // same defect wearing a different hat: the reader is told about an ECG and shown
  // nothing. Surfaced, not failed on -- plenty of stems mention an ECG in passing.
  const rx = /\b(ECG|EKG|electrocardiogram|rhythm strip)\b/i;
  const loose = items.filter(i => (i.anchor || '').toLowerCase() !== 'ecg' && !have[i.id]
                               && rx.test(`${i.vignette || ''} ${i.lead || ''}`));
  if (loose.length) {
    console.log(`\n${loose.length} more mention an ECG in the stem, are anchored `
              + `elsewhere, and have no image:`);
    for (const i of loose.sort((a, b) => a.id.localeCompare(b.id)))
      console.log(`  ${i.id.padEnd(11)} anchor=${String(i.anchor).padEnd(7)} `
                + `${(i.topic || '').slice(0, 46)}`);
  }
}

main();
