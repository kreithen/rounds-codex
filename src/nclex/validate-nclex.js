// validate-nclex.js — schema + integrity validator for Rounds Codex NCLEX batches.
// Usage: node validate-nclex.js nclex-b1.js [nclex-b2.js ...] [--against nclex-data.js ...]
// Exits non-zero on any error. Reusable across every batch and the final merged file.

const path = require("path");

const TYPES = ["mc","matrixMC","matrixMR","selectN","sata","cloze","ddTable","bowtie","pair","numeric"];
const CATS = ["mgmt","safety","hpm","psych","basic","pharm","risk","physio"];
// Official 2026 test-plan bands (fractions of the pool) — enforced only on a full 150 file.
const BANDS = {
  mgmt:[0.15,0.21], safety:[0.10,0.16], hpm:[0.06,0.12], psych:[0.06,0.12],
  basic:[0.06,0.12], pharm:[0.13,0.19], risk:[0.09,0.15], physio:[0.11,0.17]
};
const OK_HOSTS = ["ncsbn.org","cdc.gov","www.cdc.gov","ncbi.nlm.nih.gov","www.ncbi.nlm.nih.gov",
  "medlineplus.gov","dailymed.nlm.nih.gov","www.fda.gov","fda.gov","drugs.com","www.drugs.com"];

const args = process.argv.slice(2);
const files = [], against = [];
let bucket = files;
for (const a of args) { if (a === "--against") { bucket = against; continue; } bucket.push(a); }
if (!files.length) { console.error("No batch files given."); process.exit(2); }

let errs = 0, warns = 0;
const err = (id,m) => { console.error(`  ERROR [${id}] ${m}`); errs++; };
const warn = (id,m) => { console.warn(`  warn  [${id}] ${m}`); warns++; };

const load = f => { const arr = require(path.resolve(f)); if (!Array.isArray(arr)) throw new Error(`${f} did not export an array`); return arr; };

const isAscii = s => typeof s === "string" && /^[\x00-\x7F]*$/.test(s);
const idxInRange = (k,len) => Number.isInteger(k) && k >= 0 && k < len;
const httpsOk = u => { try { const h = new URL(u).host; return u.startsWith("https://") && OK_HOSTS.some(d => h === d || h.endsWith("."+d)); } catch { return false; } };

// id-collision set from --against files
const priorIds = new Set();
for (const f of against) { try { for (const it of load(f)) priorIds.add(it.id); } catch(e){ console.error(`Could not load --against ${f}: ${e.message}`); } }

let items = [];
for (const f of files) { try { items = items.concat(load(f)); } catch(e){ console.error(`FATAL loading ${f}: ${e.message}`); process.exit(2); } }

console.log(`Validating ${items.length} item(s) from: ${files.join(", ")}`);
if (against.length) console.log(`Collision-checking against: ${against.join(", ")} (${priorIds.size} ids)`);

const seen = new Set();
const tally = Object.fromEntries(CATS.map(c => [c,0]));

for (const it of items) {
  const id = it && it.id ? it.id : "(no id)";
  if (!it || typeof it !== "object") { err(id,"item is not an object"); continue; }
  if (!/^nclex-\d{4}$/.test(it.id||"")) err(id,"id must match nclex-####");
  if (seen.has(it.id)) err(id,"duplicate id within batch"); seen.add(it.id);
  if (priorIds.has(it.id)) err(id,"id collides with an --against file");
  if (!TYPES.includes(it.type)) err(id,`bad type "${it.type}"`);
  if (!CATS.includes(it.cat)) err(id,`bad cat "${it.cat}"`); else tally[it.cat]++;
  if (![1,2,3].includes(it.diff)) err(id,`diff must be 1|2|3, got ${it.diff}`);
  if (!it.stem || !isAscii(it.stem)) err(id,"stem missing or non-ASCII");
  if (!it.rationale || !isAscii(it.rationale)) err(id,"rationale missing or non-ASCII");
  if (!Array.isArray(it.src) || it.src.length < 1) err(id,"need >=1 src");
  else it.src.forEach(u => { if (!httpsOk(u)) err(id,`src not https/approved-domain: ${u}`); });

  // case-item coherence
  if (it.caseId != null && !(Number.isInteger(it.step) && it.step>=1 && it.step<=6)) warn(id,"caseId set but step not 1-6");

  // per-type payload
  switch (it.type) {
    case "mc":
      if (!Array.isArray(it.opts) || it.opts.length < 2) err(id,"mc needs opts[>=2]");
      else if (!idxInRange(it.key, it.opts.length)) err(id,"mc key out of range");
      break;
    case "matrixMC":
      if (!Array.isArray(it.rows)||!Array.isArray(it.cols)||!Array.isArray(it.key)) { err(id,"matrixMC needs rows/cols/key arrays"); break; }
      if (it.key.length !== it.rows.length) err(id,"matrixMC key length != rows");
      it.key.forEach((k,i)=>{ if(!idxInRange(k,it.cols.length)) err(id,`matrixMC key[${i}] out of col range`); });
      break;
    case "matrixMR":
      if (!Array.isArray(it.rows)||!Array.isArray(it.cols)||!Array.isArray(it.key)) { err(id,"matrixMR needs rows/cols/key arrays"); break; }
      if (it.key.length !== it.rows.length) err(id,"matrixMR key length != rows");
      it.key.forEach((row,i)=>{ if(!Array.isArray(row)) err(id,`matrixMR key[${i}] must be array`); else row.forEach(k=>{ if(!idxInRange(k,it.cols.length)) err(id,`matrixMR key[${i}] col out of range`);}); });
      break;
    case "selectN":
      if (!Array.isArray(it.opts)||!Number.isInteger(it.n)) { err(id,"selectN needs opts[] and n"); break; }
      if (!Array.isArray(it.key)) err(id,"selectN needs key[]");
      else { if (it.key.length > it.n) err(id,"selectN key length exceeds n"); it.key.forEach(k=>{ if(!idxInRange(k,it.opts.length)) err(id,"selectN key out of range");}); }
      break;
    case "sata":
      if (!Array.isArray(it.opts)||it.opts.length<2) { err(id,"sata needs opts[>=2]"); break; }
      if (!Array.isArray(it.key)||it.key.length<1) err(id,"sata needs key[>=1]");
      else it.key.forEach(k=>{ if(!idxInRange(k,it.opts.length)) err(id,"sata key out of range");});
      break;
    case "cloze":
      if (!Array.isArray(it.blanks)||!it.blanks.length) { err(id,"cloze needs blanks[]"); break; }
      it.blanks.forEach((b,i)=>{ if(!Array.isArray(b.opts)||b.opts.length<2) err(id,`cloze blank[${i}] opts`); else if(!idxInRange(b.key,b.opts.length)) err(id,`cloze blank[${i}] key`); });
      break;
    case "ddTable":
      if (!Array.isArray(it.rows)||!it.rows.length) { err(id,"ddTable needs rows[]"); break; }
      it.rows.forEach((r,i)=>{ if(!Array.isArray(r.opts)||r.opts.length<2) err(id,`ddTable row[${i}] opts`); else if(!idxInRange(r.key,r.opts.length)) err(id,`ddTable row[${i}] key`); });
      break;
    case "bowtie": {
      const b = it.bowtie;
      if (!b) { err(id,"bowtie needs bowtie{}"); break; }
      ["actions","conds","params"].forEach(k=>{ if(!Array.isArray(b[k])||b[k].length<2) err(id,`bowtie ${k}[] needs >=2`); });
      if (!Array.isArray(b.keyA)||b.keyA.length!==2) err(id,"bowtie keyA must pick 2 actions");
      else b.keyA.forEach(k=>{ if(!idxInRange(k,(b.actions||[]).length)) err(id,"bowtie keyA out of range");});
      if (!idxInRange(b.keyC,(b.conds||[]).length)) err(id,"bowtie keyC out of range");
      if (!Array.isArray(b.keyP)||b.keyP.length!==2) err(id,"bowtie keyP must pick 2 params");
      else b.keyP.forEach(k=>{ if(!idxInRange(k,(b.params||[]).length)) err(id,"bowtie keyP out of range");});
      break; }
    case "pair": {
      const p = it.pair;
      if (!p||!p.first||!p.second) { err(id,"pair needs first{} and second{}"); break; }
      [["first",p.first],["second",p.second]].forEach(([n,o])=>{ if(!Array.isArray(o.opts)||o.opts.length<2) err(id,`pair ${n} opts`); else if(!idxInRange(o.key,o.opts.length)) err(id,`pair ${n} key`); });
      break; }
    case "numeric": {
      const n = it.numeric;
      if (!n || typeof n.answer !== "number") err(id,"numeric needs numeric.answer(number)");
      else { if (typeof n.unit !== "string" || !n.unit) err(id,"numeric needs unit string"); if (typeof n.tol !== "number") err(id,"numeric needs tol number"); }
      break; }
  }
}

// blueprint report
console.log("\nCategory tally:");
const total = items.length;
for (const c of CATS) {
  const n = tally[c], pct = total ? (100*n/total).toFixed(1) : "0.0";
  let flag = "";
  if (total === 150) { const [lo,hi]=BANDS[c]; if (n/total < lo || n/total > hi) { flag = "  <-- OUT OF BAND"; errs++; } }
  console.log(`  ${c.padEnd(7)} ${String(n).padStart(3)}  ${pct.padStart(5)}%${flag}`);
}
if (total === 150) console.log("  (full-form band check ENFORCED)");
else console.log("  (band check runs only when a file has exactly 150 items)");

console.log(`\n${errs} error(s), ${warns} warning(s).`);
process.exit(errs ? 1 : 0);
