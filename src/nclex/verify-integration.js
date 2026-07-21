#!/usr/bin/env node
/**
 * verify-integration.js — headless smoke test of a PATCHED index.html.
 *
 * Run AFTER apply-nclex.js and BEFORE publishing. Loads the patched file in jsdom,
 * boots it like a browser, and asserts the NCLEX module is present and functional
 * with zero uncaught JS errors. Mirrors the Rx module's "headless Playwright check"
 * step, but dependency-light (jsdom).
 *
 * USAGE:
 *   npm i jsdom            # once
 *   node verify-integration.js <patched-index.html>
 *
 * Exits 0 on success, 1 on any failure. Prints a checklist.
 */
"use strict";
const fs = require("fs");
let JSDOM;
try { JSDOM = require("jsdom").JSDOM; }
catch(e){ console.error("ERROR: jsdom not installed. Run: npm i jsdom"); process.exit(1); }

const inPath = process.argv[2];
if(!inPath || !fs.existsSync(inPath)){ console.error("usage: node verify-integration.js <patched-index.html>"); process.exit(1); }

const html = fs.readFileSync(inPath, "utf8");
let pass = 0, fail = 0;
const jsErrors = [];
function ok(cond, msg){ if(cond){ pass++; console.log("  PASS  " + msg); } else { fail++; console.log("  FAIL  " + msg); } }

// Static checks first (don't need a DOM)
console.log("== static checks ==");
ok((html.match(/const\s+NCLEX_DATA\s*=/g)||[]).length === 1, "exactly one const NCLEX_DATA declaration");
ok(html.indexOf("window.NCLEX") !== -1, "NCLEX engine present");
ok(html.indexOf("nclex-entry") !== -1, "Nursing-mode entry point present");
ok(html.indexOf('html[data-mode="nursing"]') !== -1, "entry gated to Nursing mode");

// Boot in jsdom
console.log("== runtime boot (jsdom) ==");
const dom = new JSDOM(html, {
  runScripts: "dangerously",
  pretendToBeVisual: true,
  beforeParse(w){
    w.confirm = ()=>true;
    w.scrollTo = ()=>{};
    // capture uncaught errors
    w.addEventListener("error", function(e){ jsErrors.push(String(e.message||e.error||e)); });
  }
});
const w = dom.window, d = w.document;

// give inline scripts a tick (they run synchronously, but init() may setTimeout-poll)
setTimeout(function(){
  ok(!!(w.NCLEX && w.NCLEX.buildNclexPatched), "engine exposed on window.NCLEX");
  ok(w.NCLEX_DATA && w.NCLEX_DATA.length === 150, "150 items loaded at runtime (got " + (w.NCLEX_DATA&&w.NCLEX_DATA.length) + ")");

  // simulate Nursing mode + open the module
  try {
    d.documentElement.setAttribute("data-mode", "nursing");
    if(w.NCLEX.open) w.NCLEX.open();
    var root = d.getElementById("nclex-root");
    ok(!!root, "#nclex-root mount exists");
    ok(root && root.querySelector(".nx-modecards") != null, "module home (Study/Exam cards) renders");
  } catch(e){ jsErrors.push("open() threw: " + e.message); ok(false, "module opens without throwing"); }

  // exercise the engine internals through a full exam render (deepest path)
  try {
    var I = w.NCLEX._internal;
    var form = I.buildExamForm();
    ok(form.length === 85, "exam form builds 85 items (got " + form.length + ")");
    I.controller.launch("exam", form, "verify", {timed:false});
    I.controller.renderResults(false);
    var root2 = d.getElementById("nclex-root");
    ok(root2 && root2.querySelector(".nx-scorebig") != null, "results screen renders a score");
  } catch(e){ jsErrors.push("engine run threw: " + e.message); ok(false, "exam flow runs without throwing"); }

  ok(jsErrors.length === 0, "zero uncaught JS errors" + (jsErrors.length? " (" + jsErrors.join(" | ") + ")" : ""));

  console.log("\n== SUMMARY ==");
  console.log("passed: " + pass + "   failed: " + fail);
  if(fail){ console.log("\nDO NOT PUBLISH — fix failures first."); process.exit(1); }
  console.log("\nOK to publish: the patched index.html boots the NCLEX module cleanly in Nursing mode.");
  process.exit(0);
}, 300);
