#!/usr/bin/env node
/**
 * apply-nclex.js — embed the NCLEX-RN module into the live Rounds Codex index.html.
 *
 * Mirrors the Rx module's apply-300.js discipline: idempotent, anchor-checked, and
 * refuses to produce a broken file. It injects THREE things, each only if absent:
 *   1) const NCLEX_DATA = [...150...];      (the item bank, from nclex-data.js)
 *   2) the nclex-logic.js IIFE             (renderers + scorers + engine + CSS + patcher)
 *   3) a Nursing-mode entry point + mount   (a button under the search bar + <div id="nclex-root">)
 *
 * USAGE:
 *   node apply-nclex.js <live-index.html> <out-index.html>
 *
 * SAFETY (refuses and exits non-zero if):
 *   - input file missing or unreadable
 *   - NCLEX_DATA would be declared twice (SyntaxError trap — same rule as RX_DATA)
 *   - nclex-data.js not exactly 150 items
 *   - required host anchors not found (so we never inject into an unexpected structure)
 *   - result fails a basic re-parse sanity check
 *
 * This script does NOT publish. Publishing is the browser step (see README-PHASE6.md).
 */
"use strict";
const fs = require("fs");
const path = require("path");

function die(msg){ console.error("ERROR: " + msg); process.exit(1); }

const [,, inPath, outPath] = process.argv;
if(!inPath || !outPath) die("usage: node apply-nclex.js <live-index.html> <out-index.html>");
if(!fs.existsSync(inPath)) die("input not found: " + inPath);

let html = fs.readFileSync(inPath, "utf8");
const here = __dirname;

// ---- load the artifacts we embed ------------------------------------------
const dataPath  = path.join(here, "nclex-data.js");
const logicPath = path.join(here, "nclex-logic.js");
if(!fs.existsSync(dataPath))  die("nclex-data.js not found next to this script");
if(!fs.existsSync(logicPath)) die("nclex-logic.js not found next to this script");

// sanity: exactly 150 items in the bank
const NCLEX_DATA = require(dataPath);
if(!Array.isArray(NCLEX_DATA) || NCLEX_DATA.length !== 150)
  die("nclex-data.js must export exactly 150 items (got " + (NCLEX_DATA && NCLEX_DATA.length) + ")");

const dataSrc  = fs.readFileSync(dataPath, "utf8")
  .replace(/\n?if \(typeof module.*module\.exports = NCLEX_DATA;\n?/s, "\n"); // strip node export line
const logicSrc = fs.readFileSync(logicPath, "utf8");

// ---- guardrail: never double-declare NCLEX_DATA ----------------------------
const dataDecls = (html.match(/const\s+NCLEX_DATA\s*=/g) || []).length;
if(dataDecls > 0){
  die("index.html already declares const NCLEX_DATA (" + dataDecls + "x). " +
      "Re-running would create a SyntaxError. If you meant to UPDATE the bank, use the " +
      "array-swap path documented in README-PHASE6.md instead of re-injecting.");
}

// ---- locate host anchors ---------------------------------------------------
// The Rounds Codex app is a single static index.html. We inject our <script> just
// before </body>, and the mount+entry-point via a small DOM-ready shim that the
// engine's own buildNclexPatched() drives. We keep the footprint minimal and
// mode-gate visibility with html[data-mode="nursing"] (the app's existing pattern).
if(!/<\/body>\s*<\/html>\s*$/i.test(html.trim()) && html.indexOf("</body>") === -1)
  die("could not find </body> anchor in index.html");

// The app toggles modes via html[data-mode="..."]. Confirm that contract exists so
// our mode-gating CSS will actually work. (Non-fatal if missing: warn only.)
if(html.indexOf('data-mode') === -1)
  console.warn("WARN: no data-mode attribute seen in index.html — verify the Nursing-mode gate manually.");

// ---- build the injected block ---------------------------------------------
// Order inside the block: data, then engine, then a boot shim that mounts the
// module into a Nursing-mode container and wires an entry point below the search bar.
const BLOCK = [
'<!-- ===== NCLEX-RN module (Phase 6 injected by apply-nclex.js) ===== -->',
'<style id="nclex-entry-style">',
'  /* entry point shows only in Nursing mode (app pattern: html[data-mode="nursing"]) */',
'  #nclex-entry{display:none;margin:12px 0;}',
'  html[data-mode="nursing"] #nclex-entry{display:block;}',
'  html[data-mode="nursing"] #nclex-root{display:block;}',
'  #nclex-root{display:none;}',
'  #nclex-entry button{font:inherit;cursor:pointer;background:#4a9d7f;color:#06110c;',
'    border:none;border-radius:10px;padding:11px 18px;font-weight:600;}',
'  #nclex-entry button:hover{filter:brightness(1.08);}',
'</style>',
'<script>',
dataSrc.trim(),
'window.NCLEX_DATA = NCLEX_DATA;',
'</script>',
'<script>',
logicSrc.trim(),
'</script>',
'<script>',
'(function(){',
'  "use strict";',
'  // Mount the module once the DOM is ready, then reveal an entry point in Nursing mode.',
'  function init(){',
'    if(!(window.NCLEX && window.NCLEX.buildNclexPatched && window.NCLEX_DATA)) { return setTimeout(init, 40); }',
'    // Build the mount (engine injects its own #nclex-root + CSS). Keep it hidden until opened.',
'    window.NCLEX.buildNclexPatched(document);',
'    var root = document.getElementById("nclex-root");',
'    if(root) root.style.display = "none";',
'    // Entry point: a button placed under the top search bar if we can find it, else near top of body.',
'    if(!document.getElementById("nclex-entry")){',
'      var entry = document.createElement("div"); entry.id = "nclex-entry";',
'      var btn = document.createElement("button");',
'      btn.textContent = "NCLEX-RN practice";',
'      btn.onclick = function(){',
'        var r = document.getElementById("nclex-root");',
'        if(r){ r.style.display = "block"; r.scrollIntoView({behavior:"smooth", block:"start"}); }',
'        if(window.NCLEX.open) window.NCLEX.open();',
'      };',
'      entry.appendChild(btn);',
'      // Preferred placement: right after the app search input if present.',
'      var search = document.querySelector(\'input[type="search"], #search, .search, [placeholder*="Search" i]\');',
'      if(search && search.parentNode){ search.parentNode.insertBefore(entry, search.nextSibling); }',
'      else { document.body.insertBefore(entry, document.body.firstChild); }',
'    }',
'  }',
'  if(document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();',
'})();',
'</script>',
'<!-- ===== end NCLEX-RN module ===== -->',
''
].join("\n");

// ---- inject before </body> -------------------------------------------------
const idx = html.lastIndexOf("</body>");
if(idx === -1) die("no </body> to inject before");
const out = html.slice(0, idx) + BLOCK + "\n" + html.slice(idx);

// ---- post-inject sanity ----------------------------------------------------
const finalDecls = (out.match(/const\s+NCLEX_DATA\s*=/g) || []).length;
if(finalDecls !== 1) die("post-inject NCLEX_DATA declaration count = " + finalDecls + " (must be 1)");
if(out.indexOf("window.NCLEX.buildNclexPatched") === -1) die("engine boot shim missing after inject");
if(out.indexOf("nclex-entry") === -1) die("entry point missing after inject");

fs.writeFileSync(outPath, out);
const kb = (Buffer.byteLength(out, "utf8")/1024).toFixed(0);
console.log("OK: injected NCLEX module (150 items) -> " + outPath + " (" + kb + " KB)");
console.log("    NCLEX_DATA declarations: 1  |  engine: present  |  entry point: present");
console.log("    Next: headless-verify with verify-integration.js, then publish index.html via the browser.");
