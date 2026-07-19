#!/usr/bin/env node
/*
 * Rounds Codex - USMLE Step 1 data bundler
 *
 * Loads every data/usmle-step1-b*.js batch (they are `const USMLE_STEP1_B#`
 * declarations, NOT module.exports), concatenates them in numeric order, and
 * writes production/usmle-step1-data.js containing:
 *
 *     const USMLE_STEP1 = [ ...all items in batch order... ];
 *     const USMLE_STEP1_BY_ID = { "<id>": <item>, ... };
 *
 * The file also attaches both globals to window when running in a browser and
 * exports them under module.exports when required from Node, so the same file
 * works via a <script> tag on file:// and via require() in tooling.
 *
 * Re-runnable: it auto-globs data/usmle-step1-b*.js and sorts by the numeric
 * batch suffix, so adding batch 6, 7, ... just means dropping the files in and
 * re-running `node production/build-data.js`. No arguments required.
 *
 * The load technique (read file text + vm.runInNewContext) mirrors
 * scripts/validate.js, since the batch files declare a `const` rather than
 * exporting anything.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'data');
const OUT_FILE = path.join(__dirname, 'usmle-step1-data.js');

// ---- discover batch files, sorted by numeric batch suffix -------------------
function batchNumber(file) {
  const m = file.match(/usmle-step1-b(\d+)\.js$/i);
  return m ? parseInt(m[1], 10) : Number.MAX_SAFE_INTEGER;
}

function discoverBatches() {
  const files = fs
    .readdirSync(DATA_DIR)
    .filter((f) => /^usmle-step1-b\d+\.js$/i.test(f))
    .sort((a, b) => batchNumber(a) - batchNumber(b));
  if (!files.length) {
    throw new Error('no data/usmle-step1-b*.js batch files found');
  }
  return files.map((f) => path.join(DATA_DIR, f));
}

// ---- load a `const USMLE_*` array via vm (same trick as validate.js) --------
function loadArray(file) {
  const code = fs.readFileSync(file, 'utf8');
  const m = code.match(/const\s+(USMLE_[A-Z0-9_]+)\s*=/);
  if (!m) throw new Error(`${file}: no \`const USMLE_*\` declaration found`);
  const name = m[1];
  const arr = vm.runInNewContext(code + `\n;${name};`, {});
  if (!Array.isArray(arr)) throw new Error(`${file}: ${name} is not an array`);
  return { name, arr };
}

function main() {
  const batchFiles = discoverBatches();
  const all = [];
  const byId = {};
  const summary = [];

  for (const file of batchFiles) {
    const { name, arr } = loadArray(file);
    for (const item of arr) {
      if (item && item.id && Object.prototype.hasOwnProperty.call(byId, item.id)) {
        throw new Error(`duplicate id "${item.id}" (from ${path.basename(file)})`);
      }
      all.push(item);
      if (item && item.id) byId[item.id] = item;
    }
    summary.push(`${path.basename(file)} -> ${name} (${arr.length})`);
  }

  const header =
    '/*\n' +
    ' * Rounds Codex - USMLE Step 1 combined question bank (GENERATED).\n' +
    ' *\n' +
    ' * Do not edit by hand. Regenerate with:\n' +
    ' *     node production/build-data.js\n' +
    ' *\n' +
    ' * Sources (in order):\n' +
    summary.map((s) => ' *   ' + s).join('\n') + '\n' +
    ` *   TOTAL: ${all.length} items\n` +
    ' *\n' +
    ' * Exposes globals USMLE_STEP1 (array, batch order) and\n' +
    ' * USMLE_STEP1_BY_ID (object keyed by item id).\n' +
    ' */\n';

  const body =
    'const USMLE_STEP1 = ' + JSON.stringify(all, null, 2) + ';\n\n' +
    'const USMLE_STEP1_BY_ID = {};\n' +
    'USMLE_STEP1.forEach(function (q) { if (q && q.id) USMLE_STEP1_BY_ID[q.id] = q; });\n';

  const footer =
    '\n' +
    '// Dual publish: browser globals + Node require(), harmless in either.\n' +
    'if (typeof window !== "undefined") {\n' +
    '  window.USMLE_STEP1 = USMLE_STEP1;\n' +
    '  window.USMLE_STEP1_BY_ID = USMLE_STEP1_BY_ID;\n' +
    '}\n' +
    'if (typeof module !== "undefined" && module.exports) {\n' +
    '  module.exports = { USMLE_STEP1: USMLE_STEP1, USMLE_STEP1_BY_ID: USMLE_STEP1_BY_ID };\n' +
    '}\n';

  fs.writeFileSync(OUT_FILE, header + '\n' + body + footer, 'utf8');

  console.log('Bundled ' + batchFiles.length + ' batch file(s):');
  summary.forEach((s) => console.log('  ' + s));
  console.log('Wrote ' + path.relative(ROOT, OUT_FILE) + ' with ' + all.length + ' items.');
  if (all.length !== Object.keys(byId).length) {
    console.log('  note: ' + (all.length - Object.keys(byId).length) + ' item(s) had no id.');
  }
}

main();
