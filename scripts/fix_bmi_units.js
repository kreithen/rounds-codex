#!/usr/bin/env node
/*
 * BMI calculator: feet + inches in two boxes, imperial by default, metric on a toggle.
 *
 *     node scripts/fix_bmi_units.js <site-root> [calculators.json]
 *
 * Requested by Dr. Kreithen 2026-08-01: "instead of inches tall, have it ask for
 * feet and inches (in two separate boxes); have the default be feet/inches and
 * pounds, and allow the user to switch to metric with a toggle button."
 *
 * add_calculators.js refuses to run twice, deliberately -- it inserts strings into
 * a 0.65 MB file where a silent second copy would be near-impossible to spot. So
 * this is a follow-up patch rather than a re-run, in the same style: every edit is
 * asserted, and the script refuses to run on a file it has already touched.
 *
 * WHAT MOVES WHERE
 *   arithmetic  -> scripts/calc_engine.js (ftinToCm, cmToFtIn, lbToKg, kgToLb, and
 *                  bmiBsa's "ftin" branch). That file is the tested source and is
 *                  inlined into index.html, so this script re-inlines the changed
 *                  functions rather than hand-editing the copy in the page. The
 *                  shipped code stays the tested code.
 *   spec        -> calculators.json gains `unitSystems` on bmi-bsa and `ftin` box
 *                  ranges on the height input. Copied to content/calculators.json.
 *   UI          -> a toggle row, and a height row that renders one box or two.
 *
 * WHY A PER-CALCULATOR TOGGLE AND NOT A GLOBAL ONE
 * The dosage calculator has its own unit selects that are clinically meaningful
 * (mcg/mg/g is where weight-based dosing actually goes wrong) and must not be
 * swept into a site-wide imperial/metric switch. `unitSystems` is opt-in per
 * calculator; every other calculator renders exactly as before.
 *
 * TOGGLING CONVERTS, IT DOES NOT CLEAR
 * Switching with 180 lb entered and leaving "180" in a box now labelled kg would
 * be a silent 2.2-fold error on a clinical tool. The values are converted through
 * the same tested helpers.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2];
const SRC  = process.argv[3] || path.join(__dirname, '..', 'calculators-staging', 'calculators.json');
if (!ROOT) { console.error('usage: fix_bmi_units.js <site-root> [calculators.json]'); process.exit(2); }

const IDX = path.join(ROOT, 'index.html');
const OUTJSON = path.join(ROOT, 'content', 'calculators.json');
for (const f of [IDX, OUTJSON]) if (!fs.existsSync(f)) { console.error('missing: ' + f); process.exit(2); }

let html = fs.readFileSync(IDX, 'utf8');
if (!html.includes('calcOneHTML')) { console.error('FAILED: no calculator module in this index.html'); process.exit(2); }
if (html.includes('calcUnitSys')) { console.error('FAILED: index.html already carries the unit toggle.'); process.exit(2); }

const edits = [];
function sub(label, find, replace, expect = 1) {
  const n = html.split(find).length - 1;
  if (n !== expect) { console.error(`FAILED ${label}: found ${n} occurrences, expected ${expect}`); process.exit(1); }
  html = html.replace(find, replace);
  edits.push(label);
}

/* ── 1. spec: unitSystems + ftin ranges, from the tested staging file ───────── */
const SPECS = JSON.parse(fs.readFileSync(SRC, 'utf8'));
const bmi = SPECS.find(s => s.id === 'bmi-bsa');
if (!bmi || !bmi.unitSystems) {
  console.error('FAILED: calculators.json has no unitSystems on bmi-bsa -- run the staging edit first');
  process.exit(1);
}
if (!bmi.inputs.find(i => i.id === 'height').ftin) {
  console.error('FAILED: the height input carries no ftin box ranges'); process.exit(1);
}

/* ── 2. re-inline the changed kernel functions from calc_engine.js ─────────── */
const engine = fs.readFileSync(path.join(__dirname, 'calc_engine.js'), 'utf8');
function grab(name) {
  // Pull one top-level `function name(...) { ... }` by brace counting from its
  // opening brace. A regex cannot do this: every one of these bodies contains
  // braces, and a lazy match stops at the first inner one.
  const at = engine.indexOf(`function ${name}(`);
  if (at < 0) { console.error(`FAILED: calc_engine.js has no ${name}()`); process.exit(1); }
  let i = engine.indexOf('{', at), depth = 0;
  for (let j = i; j < engine.length; j++) {
    if (engine[j] === '{') depth++;
    else if (engine[j] === '}' && --depth === 0) return engine.slice(at, j + 1);
  }
  console.error(`FAILED: unbalanced braces reading ${name}()`); process.exit(1);
}

const oldBmi = html.match(/function bmiBsa\(spec, values\) \{[\s\S]*?\n\}/);
if (!oldBmi) { console.error('FAILED: could not locate the inlined bmiBsa()'); process.exit(1); }
sub('inlined bmiBsa + conversion helpers', oldBmi[0],
    [grab('ftinToCm'), grab('cmToFtIn'), grab('lbToKg'), grab('kgToLb'), grab('bmiBsa')].join('\n'));

/* ── 3. the height row renders one box or two ──────────────────────────────── */
/* Indentation is five spaces here, not three: in the shipped file this block sits
   inside the `} else {` arm of the input-type branch. Matched verbatim rather than
   normalised, so a future reformat fails the assertion instead of patching the
   wrong place. */
const oldRow =
  `     out+='<label class="calc-row"><span class="calc-lab">'+calcEsc(inp.label)+'</span><span class="calc-inwrap">'+
       '<input type="number" inputmode="decimal" step="any" data-cid="'+inp.id+'" min="'+inp.min+'" max="'+inp.max+'">';
     if(inp.units.length>1){
       out+='<select data-unit="'+inp.id+'">';
       inp.units.forEach(function(u){ out+='<option value="'+calcEsc(u[0])+'">'+calcEsc(u[0])+'</option>'; });
       out+='</select>';
     } else out+='<span class="calc-unit">'+calcEsc(inp.units[0][0])+'</span>';
     out+='</span></label>';`;

const newRow =
  `     var sys=calcUnitSys(c);
     /* Under a unit system the per-input <select> is redundant and, worse,
      contradicts the toggle: two controls claiming to set the same unit. The
      system picks the unit and the select is not rendered. */
     var forced=sys?sys[inp.id]:null;
     if(forced==='ftin'){
     var fr=inp.ftin||{ftMin:1,ftMax:8,inMin:0,inMax:11.9};
     out+='<label class="calc-row"><span class="calc-lab">'+calcEsc(inp.label)+'</span>'+
       '<span class="calc-inwrap calc-ftin">'+
       '<input type="number" inputmode="numeric" step="1" data-cid="'+inp.id+'_ft" '+
         'min="'+fr.ftMin+'" max="'+fr.ftMax+'" aria-label="Height, feet">'+
       '<span class="calc-unit">ft</span>'+
       '<input type="number" inputmode="decimal" step="any" data-cid="'+inp.id+'_in" '+
         'min="'+fr.inMin+'" max="'+fr.inMax+'" aria-label="Height, inches">'+
       '<span class="calc-unit">in</span></span></label>';
     } else {
     out+='<label class="calc-row"><span class="calc-lab">'+calcEsc(inp.label)+'</span><span class="calc-inwrap">'+
       '<input type="number" inputmode="decimal" step="any" data-cid="'+inp.id+'" min="'+inp.min+'" max="'+inp.max+'">';
     if(forced) out+='<span class="calc-unit" data-forced="'+inp.id+'">'+calcEsc(forced)+'</span>';
     else if(inp.units.length>1){
       out+='<select data-unit="'+inp.id+'">';
       inp.units.forEach(function(u){ out+='<option value="'+calcEsc(u[0])+'">'+calcEsc(u[0])+'</option>'; });
       out+='</select>';
     } else out+='<span class="calc-unit">'+calcEsc(inp.units[0][0])+'</span>';
     out+='</span></label>';
     }`;
sub('height/weight input row', oldRow, newRow);

/* ── 4. the toggle itself, plus the state it reads ─────────────────────────── */
sub('unit-system helpers + toggle markup',
  `function calcOneHTML(id){`,
  `/* The chosen unit system for a calculator, or null if it does not declare any.
   Device-local and per calculator: RC_STORE is for study state, and a units
   preference is a display setting, not progress. */
var RC_UNITS={};
function calcUnitSys(c){
 if(!c||!c.unitSystems) return null;
 var k=RC_UNITS[c.id]||c.unitSystems.default;
 return c.unitSystems[k]||null;
}
function calcUnitKey(c){ return (c&&c.unitSystems)?(RC_UNITS[c.id]||c.unitSystems.default):null; }
function calcUnitToggleHTML(c){
 if(!c.unitSystems) return '';
 var cur=calcUnitKey(c),out='<div class="calc-units" role="group" aria-label="Units">';
 c.unitSystems.order.forEach(function(k){
   out+='<button type="button" class="calc-unit-btn'+(k===cur?' on':'')+'" data-usys="'+calcEsc(k)+'"'+
     (k===cur?' aria-pressed="true"':' aria-pressed="false"')+'>'+calcEsc(c.unitSystems[k].label)+'</button>';
 });
 return out+'</div>';
}
function calcOneHTML(id){`);

sub('toggle into the form',
  `out+='<form class="calc-form" id="calcForm" onsubmit="return false">';`,
  `out+=calcUnitToggleHTML(c);\n out+='<form class="calc-form" id="calcForm" onsubmit="return false">';`);

/* ── 5. read(): feed the kernel the unit the system chose ──────────────────── */
sub('read() unit resolution',
  `   form.querySelectorAll('[data-unit]').forEach(function(el){ v[el.getAttribute('data-unit')+'_unit']=el.value; });
   return v;`,
  `   form.querySelectorAll('[data-unit]').forEach(function(el){ v[el.getAttribute('data-unit')+'_unit']=el.value; });
   /* A forced unit comes from the toggle, not from a control the user can set,
      so it has to be written in explicitly -- otherwise toBase() silently falls
      back to the base unit and pounds are read as kilograms. */
   var sys=calcUnitSys(c);
   if(sys) Object.keys(sys).forEach(function(k){ if(k!=='label') v[k+'_unit']=sys[k]; });
   return v;`);

/* ── 6. wire the toggle: convert what is entered, then re-render ───────────── */
sub('toggle handler',
  ` form.addEventListener('input',render);`,
  ` /* Convert on switch rather than clear. Leaving "180" in a box that has just
    been relabelled kg is a 2.2-fold error on a clinical tool, and it looks
    exactly like a correct entry. */
 function switchUnits(next){
   var prev=calcUnitKey(c); if(!prev||prev===next) return;
   var from=c.unitSystems[prev],to=c.unitSystems[next];
   var w=form.querySelector('[data-cid="weight"]');
   var wv=w&&w.value!==''?Number(w.value):null;
   var cm=null;
   if(from.height==='ftin'){
     var f=form.querySelector('[data-cid="height_ft"]'),i=form.querySelector('[data-cid="height_in"]');
     var t=ftinToCm(f?f.value:'',i?i.value:''); if(isFinite(t)) cm=t;
   } else {
     var hh=form.querySelector('[data-cid="height"]');
     if(hh&&hh.value!=='') cm=Number(hh.value);
   }
   RC_UNITS[c.id]=next;
   var scr=document.getElementById('screen');
   if(scr){ scr.innerHTML=calcOneHTML(c.id); calcInit(c.id); }
   var f2=document.getElementById('calcForm'); if(!f2) return;
   var w2=f2.querySelector('[data-cid="weight"]');
   if(w2&&wv!==null&&isFinite(wv)) w2.value=Math.round((from.weight===to.weight?wv:
     (to.weight==='kg'?lbToKg(wv):kgToLb(wv)))*10)/10;
   if(cm!==null&&isFinite(cm)){
     if(to.height==='ftin'){
       var r=cmToFtIn(cm);
       var f3=f2.querySelector('[data-cid="height_ft"]'),i3=f2.querySelector('[data-cid="height_in"]');
       if(f3) f3.value=r.ft; if(i3) i3.value=r.in;
     } else {
       var h3=f2.querySelector('[data-cid="height"]'); if(h3) h3.value=Math.round(cm*10)/10;
     }
   }
   f2.dispatchEvent(new Event('input',{bubbles:true}));
 }
 var ubar=document.querySelector('.calc-units');
 if(ubar) ubar.addEventListener('click',function(e){
   var b=e.target.closest('[data-usys]'); if(b) switchUnits(b.getAttribute('data-usys'));
 });
 form.addEventListener('input',render);`);

/* ── 7. the working shown must name the units actually on screen ───────────── */
sub('bmiBsa working text',
  `     workEl.innerHTML='BMI = weight (kg) \\u00f7 height (m)\\u00b2<br>BSA = \\u221a[ height (cm) \\u00d7 weight (kg) \\u00f7 3600 ]';`,
  `     /* Both formulas are metric whatever the boxes say, so when the entry is
        imperial the conversion is shown as its own step -- otherwise the panel
        claims to divide pounds by metres and the derivation stops teaching. */
     var us=calcUnitSys(c),pre='';
     if(us&&us.weight==='lb') pre+='weight (lb) \\u00d7 0.4536 = weight (kg)<br>';
     if(us&&us.height==='ftin') pre+='(feet \\u00d7 12 + inches) \\u00d7 2.54 = height (cm)<br>';
     workEl.innerHTML=pre+'BMI = weight (kg) \\u00f7 height (m)\\u00b2<br>BSA = \\u221a[ height (cm) \\u00d7 weight (kg) \\u00f7 3600 ]';`);

/* ── 8. styling, reusing the tokens the calculator page already defines ─────── */
sub('unit toggle CSS',
  `#nav button[data-v=calc] span{`,
  `.calc-units{display:flex;gap:6px;margin:0 0 14px}
.calc-unit-btn{flex:1;padding:9px 6px;border-radius:9px;border:1px solid rgba(255,255,255,.14);
 background:rgba(255,255,255,.04);color:var(--muted);font-size:12.5px;font-weight:600;cursor:pointer}
.calc-unit-btn.on{background:var(--accent);border-color:var(--accent);color:#04121b}
/* .calc-inwrap is flex:0 0 auto, so it sizes to its contents. Two boxes plus two
   unit labels overflowed the viewport by 59px at 375 and 44px at 390 -- and the
   first attempt at a fix, width:100% on the inputs, made it worse: a percentage
   width inside a content-sized flex parent resolves against a width that depends
   on the input, so it grew instead of shrinking. Explicit narrower boxes and a
   shrinkable wrapper, then measured again at all three widths. */
.calc-ftin{flex:0 1 auto;min-width:0;gap:6px}
.calc-ftin input{width:62px}
#nav button[data-v=calc] span{`);

/* ── write ─────────────────────────────────────────────────────────────────── */
fs.writeFileSync(IDX, html);
fs.writeFileSync(OUTJSON, JSON.stringify(SPECS, null, 1) + '\n');
console.log(`patched ${edits.length} sites in ${path.relative(process.cwd(), IDX)}:`);
edits.forEach(e => console.log('  - ' + e));
console.log(`wrote ${path.relative(process.cwd(), OUTJSON)}`);
