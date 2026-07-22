// test-usmle-profile.js — proves usmle-report.js registers a working profile on the
// SHARED engine with real USMLE-shaped items (system + difficulty), honors the honesty
// constraints, and leaks no NCLEX text. Run: node test-usmle-profile.js
const { JSDOM } = require("jsdom");
const fs = require("fs");
const dom = new JSDOM("<!DOCTYPE html><html><head></head><body><div id='nclex-root'></div></body></html>", { pretendToBeVisual: true });
global.window = dom.window; global.document = dom.window.document;
window.eval(fs.readFileSync("./nclex-report.js", "utf8"));
window.eval(fs.readFileSync("./usmle-report.js", "utf8"));
const RPT = window.NCLEX_REPORT;
let pass = 0, fail = 0;
function ok(c, m) { if (c) { pass++; console.log("  PASS  " + m); } else { fail++; console.log("  FAIL  " + m); } }

console.log("== profile registration ==");
ok(!!RPT.getProfile("usmle"), "usmle profile registered by usmle-report.js");
ok(RPT.getProfile("usmle").name === "USMLE", "profile name is USMLE");
ok(RPT.getProfile("usmle").groups.length === 2, "two axes: system + difficulty");
ok(RPT.getProfile("usmle").groups[0].field === "system", "primary axis is system");
ok(RPT.getProfile("usmle").groups[1].field === "difficulty", "second axis is difficulty");
ok(RPT.getProfile("usmle").splitBy === null, "no case/standalone split");
ok(typeof RPT.buildUsmle === "function" && typeof RPT.renderUsmle === "function", "buildUsmle/renderUsmle exposed");

console.log("== build from a live-shaped quiz state ==");
// Emulate the live USMLE page: byId lookup, quiz={order,ans}. Real field names.
const systems = ["Cardiovascular", "Respiratory & Renal/Urinary", "Gastrointestinal", "Reproductive & Endocrine"];
const diffs = ["easy", "moderate", "hard"];
const byId = {}; const order = [];
for (let i = 0; i < 60; i++) {
  const id = "s1-" + i;
  byId[id] = { id, system: systems[i % 4], discipline: "Pathology", difficulty: diffs[i % 3],
               options: ["a", "b", "c", "d", "e"], answer: 0 };
  order.push(id);
}
// answer ~70% correct (pick 0 = correct), leave the last 5 unanswered
const ans = {};
order.forEach((id, i) => { if (i < 55) ans[id] = (i % 10 < 7) ? 0 : 1; });
const quiz = { order, ans, mode: "exam", elapsed: 3600 };
const m = RPT.buildUsmle(quiz, byId, { label: "Step 1", partial: false });

ok(m.profile.name === "USMLE", "used the usmle profile");
ok(m.breakdowns.length === 2, "2 breakdowns produced");
ok(m.breakdowns[0].field === "system", "first breakdown is system");
ok(m.breakdowns[0].rows.length === 4, "4 organ systems bucketed");
ok(m.breakdowns[0].rows[0].name === m.breakdowns[0].rows[0].key, "system labels are the readable values themselves");
ok(m.breakdowns[1].field === "difficulty", "second breakdown is difficulty");
ok(m.breakdowns[1].rows.some(r => r.name === "Easier"), "difficulty labels applied (Easier/Moderate/Harder)");
ok(m.overall.pct > 0 && m.overall.pct < 100, "overall computed (" + m.overall.pct + "%)");
ok(m.meta.total === 60 && m.overall.max === 60, "submitted exam scores all 60 items (5 unanswered = incorrect)");
const mPartial = RPT.buildUsmle(quiz, byId, { label: "Step 1", partial: true });
ok(mPartial.meta.attempted === 55, "in-progress (partial) build reports 55 attempted");
ok(m.split.withMax === 0, "no split axis (splitBy null)");
ok(Array.isArray(m.recommendations) && m.recommendations.length > 0, "recommendations generated");

console.log("== honesty constraints ==");
// tiny area: one system with <3 items must be marked limited and never a top recommendation
const tinyById = { a1: { id: "a1", system: "Cardiovascular", difficulty: "easy", options: ["a", "b"], answer: 0 },
                   a2: { id: "a2", system: "Cardiovascular", difficulty: "easy", options: ["a", "b"], answer: 0 },
                   b1: { id: "b1", system: "Surgery", difficulty: "hard", options: ["a", "b"], answer: 0 } };
const tinyQuiz = { order: ["a1", "a2", "b1"], ans: { a1: 1, a2: 1, b1: 1 }, mode: "exam" }; // all wrong
const tm = RPT.buildUsmle(tinyQuiz, tinyById, { label: "t" });
const surgRow = tm.breakdowns[0].rows.find(r => r.key === "Surgery");
ok(surgRow && surgRow.limited === true, "a <3-item area is flagged limited:true");
ok(!tm.recommendations.some(r => /Surgery/.test(r.title || r.name || "") && !/caution|limited/i.test(JSON.stringify(r))),
   "a <3-item area does not drive a top recommendation");
// no fabricated strength: nothing at 0% should appear as a strength
ok(!(m.strengths || []).some(s => (s.pct || 0) < 80), "no area below the 80% bar is called a strength");

console.log("== rendering + pdf: usmle voice, zero NCLEX leakage ==");
const root = document.getElementById("nclex-root");
RPT.render(m, root, {});
ok(root.textContent.indexOf("organ system") >= 0, "renders the organ-system section");
ok(root.textContent.indexOf("difficulty") >= 0, "renders the difficulty section");
ok(root.textContent.indexOf("not a predicted USMLE") >= 0, "uses the USMLE disclaimer");
ok(root.textContent.toLowerCase().indexOf("pass probability") < 0, "never claims a pass probability");
ok(root.textContent.indexOf("NCLEX") < 0 && root.textContent.indexOf("NCSBN") < 0, "no NCLEX text leaked into a USMLE report");
const html = RPT.buildPdfHtml(m);
ok(html.indexOf("organ system") > 0, "pdf has the organ-system table");
ok(html.indexOf("NBME") > 0, "pdf uses the USMLE footer");
ok(html.indexOf("NCSBN") < 0, "pdf has no NCLEX footer leakage");
ok(!/undefined|NaN/.test(html), "pdf clean of undefined/NaN");

console.log("== NCLEX profile still intact (no cross-contamination) ==");
ok(RPT.getProfile("nclex").name === "NCLEX-RN", "nclex profile untouched");

console.log("\n== SUMMARY ==");
console.log("passed: " + pass + "  failed: " + fail);
process.exit(fail ? 1 : 0);
