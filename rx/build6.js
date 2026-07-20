/* build6.js — assemble rx-data6.js (drugs 251-300, Half-2 of Tier 3)
   Reads the 10 raw subagent batch payloads (h2_raw_*.txt), strips any text
   prefix before the JSON array, concatenates, normalizes, repairs malformed
   pills, and writes rx-data6.js as `const RX_DATA6=[...50 drugs...]`. */
const fs = require('fs');

const RAW_FILES = [1105,1106,1109,1110,1113,1123,1124,1127,1128,1131]
  .map(n => `h2_raw_${n}.txt`);

// ---- normalizer helpers (same contract as build5.js) ----
function boolSc(v){return v===true||v==='yes'||v===1||v==='true';}
function cleanIm(im){
  if(!im) return '';
  if(/vary|varies|manufactur|imprint|note:|by strength|film|debossed|often|e\.g\.|also|higher|strength|color/i.test(im)) return '';
  return String(im).slice(0,10);
}
function cleanSrc(a){
  var ok=/drugs\.com|dailymed\.nlm\.nih\.gov|medlineplus\.gov|fda\.gov/;
  var out=(a||[]).filter(function(u){return ok.test(u);});
  return out.length?out:(a||[]).slice(0,1);
}

// ---- FIXPILLS: clean, well-formed pill arrays for the 9 malformed-pill drugs.
// Batches returned {desc,im} (tizanidine, citalopram, paroxetine, nortriptyline,
// ziprasidone) or {im,s} missing form f (azathioprine, tacrolimus, mycophenolate,
// sevelamer). Rewritten to the oral schema {f,s,sh,c,im,sc}. ----
const FIXPILLS = {
  tizanidine: [
    {f:'tablet', s:'2 mg', sh:'round', c:'white', im:'', sc:true},
    {f:'tablet', s:'4 mg', sh:'round', c:'white', im:'R180', sc:true},
    {f:'capsule', s:'2/4/6 mg', sh:'capsule', c:'', im:'', sc:false}
  ],
  citalopram: [
    {f:'tablet', s:'10 mg', sh:'oval', c:'', im:'', sc:false},
    {f:'tablet', s:'20 mg', sh:'oval', c:'', im:'1010', sc:true},
    {f:'tablet', s:'40 mg', sh:'oval', c:'', im:'', sc:false}
  ],
  paroxetine: [
    {f:'tablet', s:'10 mg', sh:'oval', c:'', im:'ZC 15', sc:false},
    {f:'tablet', s:'20 mg', sh:'oval', c:'white', im:'ZC 16', sc:true},
    {f:'tablet', s:'30/40 mg', sh:'oval', c:'', im:'', sc:false}
  ],
  nortriptyline: [
    {f:'capsule', s:'10 mg', sh:'capsule', c:'', im:'', sc:false},
    {f:'capsule', s:'25 mg', sh:'capsule', c:'', im:'TEVA', sc:false},
    {f:'capsule', s:'50/75 mg', sh:'capsule', c:'', im:'', sc:false}
  ],
  ziprasidone: [
    {f:'capsule', s:'20 mg', sh:'capsule', c:'', im:'', sc:false},
    {f:'capsule', s:'40/60/80 mg', sh:'capsule', c:'', im:'', sc:false}
  ],
  azathioprine: [
    {f:'tablet', s:'50 mg', sh:'round', c:'yellow', im:'ZC 59', sc:true},
    {f:'tablet', s:'75/100 mg', sh:'round', c:'', im:'', sc:true}
  ],
  tacrolimus: [
    {f:'capsule', s:'0.5 mg', sh:'capsule', c:'', im:'', sc:false},
    {f:'capsule', s:'1 mg', sh:'capsule', c:'white', im:'', sc:false},
    {f:'capsule', s:'5 mg', sh:'capsule', c:'', im:'', sc:false}
  ],
  mycophenolate: [
    {f:'capsule', s:'250 mg', sh:'capsule', c:'blue/brown', im:'', sc:false},
    {f:'tablet', s:'500 mg', sh:'oblong', c:'lavender', im:'', sc:false}
  ],
  sevelamer: [
    {f:'tablet', s:'400 mg', sh:'oval', c:'', im:'', sc:false},
    {f:'tablet', s:'800 mg', sh:'oval', c:'', im:'', sc:false}
  ]
};

// ---- load + parse raw batches ----
let B = [];
RAW_FILES.forEach(function(fn){
  var txt = fs.readFileSync(fn,'utf8');
  var i = txt.indexOf('[');
  if(i<0) throw new Error('no array in '+fn);
  var arr = JSON.parse(txt.slice(i));
  B.push(arr);
});

// ---- generic pill repair for any remaining malformed pill objects ----
function repairPill(p){
  var q = Object.assign({}, p);
  // {desc,...} with no f/s -> infer form + strength from desc
  if(q.desc && !q.f && !q.s){
    var d = String(q.desc);
    q.f = /capsule/i.test(d) ? 'capsule' : (/tablet/i.test(d) ? 'tablet' : 'tablet');
    var m = d.match(/([\d.]+\s*mg[^,;]*)/i);
    q.s = m ? m[1].trim() : d.slice(0,40);
    delete q.desc;
  }
  // {im,s} with no form -> default tablet
  if(!q.f && q.s){ q.f = /capsule/i.test(q.s) ? 'capsule' : 'tablet'; }
  if('sc' in q) q.sc = boolSc(q.sc);
  if('im' in q) q.im = cleanIm(q.im);
  if(q.s && /note:/i.test(q.s)) q.s = q.s.split(/note:/i)[0].trim().replace(/[;,]$/,'');
  return q;
}

const all = [].concat.apply([], B).map(function(d){
  var pills;
  if(FIXPILLS[d.id]){
    pills = FIXPILLS[d.id];
  } else {
    pills = Array.isArray(d.pills) ? d.pills : [];
    if(!pills.length || typeof pills[0] !== 'object'){ pills = [{f:'tablet', s:'see label'}]; }
    pills = pills.map(repairPill);
  }
  return Object.assign({}, d, {pills:pills, src:cleanSrc(d.src)});
});

fs.writeFileSync('rx-data6.js',
  '/* Rounds Codex Rx — Phase 6 dataset (drugs 251-300) */\nconst RX_DATA6=' +
  JSON.stringify(all) + ';\n');

console.log('rx-data6.js written. drugs:', all.length);
console.log('ids:', all.map(function(d){return d.id;}).join(', '));
