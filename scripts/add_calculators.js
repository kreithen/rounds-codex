/* Wire the clinical calculator module into the live app.
 *
 * Usage: node scripts/add_calculators.js <site-root> [calculators.json]
 *
 * Eight surgeries, each asserted. The script is idempotent: it refuses to run
 * twice rather than double-patching, because every one of these edits is a
 * string insertion into a 0.65 MB file where a silent second copy would be
 * very hard to spot.
 *
 * Traps this script exists to not fall into, all of them already recorded in
 * CLAUDE.md from previous features:
 *   - a new content file must be added to BOTH the loader's FILES list AND
 *     sw.js CORE, or the app is fine online and broken offline;
 *   - a new one-segment route must be added to the RC_ROOT regex, or <base>
 *     becomes /x/ and every content/*.json 404s -- the app then boots to
 *     "Content didn't load" with no page error, because the loader catches it;
 *   - rcSyncURL() needs a case for any new view, or a shared link snaps back
 *     to / the moment boot() calls it;
 *   - .res-wrap-style full-page wrappers must reserve the 112px the fixed nav
 *     bar occupies, or the last element sits under it at the end of a scroll.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2];
const SRC  = process.argv[3] || path.join(__dirname, '..', 'calculators-staging', 'calculators.json');
if (!ROOT) { console.error('usage: add_calculators.js <site-root> [calculators.json]'); process.exit(2); }

const IDX = path.join(ROOT, 'index.html');
const SW  = path.join(ROOT, 'sw.js');
const RED = path.join(ROOT, '_redirects');
for (const f of [IDX, SW, RED]) if (!fs.existsSync(f)) { console.error('missing: ' + f); process.exit(2); }

let html = fs.readFileSync(IDX, 'utf8');
if (html.includes('calcHTML')) { console.error('FAILED: index.html already carries the calculator module.'); process.exit(2); }

const SPECS = JSON.parse(fs.readFileSync(SRC, 'utf8'));
const ENGINE = fs.readFileSync(path.join(__dirname, 'calc_engine.js'), 'utf8')
  .replace(/^'use strict';$/m, '')
  .replace(/if \(typeof module[\s\S]*$/, '');   // drop the Node export tail

const edits = [];
function sub(label, find, replace, expect = 1) {
  const n = html.split(find).length - 1;
  if (n !== expect) { console.error(`FAILED ${label}: found ${n} occurrences, expected ${expect}`); process.exit(1); }
  html = html.replace(find, replace);
  edits.push(label);
}

/* 1 ── content file registration ------------------------------------------ */
sub('loader FILES list',
  "FILES=['conditions','drugs','quizzes','nclex','or','galleries','resident'];",
  "FILES=['conditions','drugs','quizzes','nclex','or','galleries','resident','calculators'];");

sub('loader fill',
  '    fill(DATA,            C.conditions);',
  '    fill(CALC,            C.calculators);\n    fill(DATA,            C.conditions);');

/* 2 ── globals + engine ---------------------------------------------------- */
sub('CALC global + engine',
  'function paint(y){',
  `const CALC=[];
/* ---- calculator kernels (generated from scripts/calc_engine.js; edit there,
   re-run scripts/test_calculators.js, then re-run add_calculators.js) ---- */
${ENGINE.trim()}
/* The app's own esc() is a PDF string escaper (backslashes and parentheses) and
   is the wrong tool here -- this is HTML. Distinct name so the two can never be
   confused at a call site. */
function calcEsc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function calcRun(spec,values){return run(spec,values||{});}
function calcById(id){return CALC.find(function(c){return c.id===id;});}

function calcHTML(){
 var groups={};
 CALC.forEach(function(c){ (groups[c.group]=groups[c.group]||[]).push(c); });
 var out='<div class="pad calc-wrap"><div class="hd"><button class="back" onclick="back()" aria-label="Back">&#8592;</button>'+
   '<div><div class="h1">Clinical Calculators</div>'+
   '<div class="sub">Scores and indices, with the working shown</div></div></div>';
 out+='<div class="calc-note">Every calculator below shows its formula, its source, and the ways it is commonly misused. '+
   'These are study tools \\u2014 they support learning a score, not a treatment decision.</div>';
 Object.keys(groups).forEach(function(g){
   out+='<div class="calc-grp">'+calcEsc(g)+'</div><div class="calc-list">';
   groups[g].forEach(function(c){
     out+='<button class="calc-card" onclick="go(\\'calcone\\',\\''+c.id+'\\')">'+
       '<div class="calc-card-n">'+calcEsc(c.name)+'</div>'+
       '<div class="calc-card-p">'+calcEsc(c.purpose)+'</div></button>';
   });
   out+='</div>';
 });
 return out+'</div>';
}

function calcOneHTML(id){
 var c=calcById(id);
 if(!c) return '<div class="pad"><div class="h1">Calculator not found</div></div>';
 var out='<div class="pad calc-wrap"><div class="hd"><button class="back" onclick="back()" aria-label="Back">&#8592;</button>'+
   '<div><div class="h1">'+calcEsc(c.name)+'</div><div class="sub">'+calcEsc(c.purpose)+'</div></div></div>';
 out+='<form class="calc-form" id="calcForm" onsubmit="return false">';
 c.inputs.forEach(function(inp){
   if(inp.type==='check'){
     out+='<label class="calc-chk"><input type="checkbox" data-cid="'+inp.id+'">'+
       '<span class="calc-chk-l">'+calcEsc(inp.label)+'</span>'+
       '<span class="calc-pts">'+(inp.points>0?'+':'')+inp.points+'</span></label>';
   } else if(inp.type==='select'){
     out+='<label class="calc-row"><span class="calc-lab">'+calcEsc(inp.label)+'</span><select data-cid="'+inp.id+'">';
     inp.options.forEach(function(o,i){ out+='<option value="'+o[1]+'"'+(i===0?' selected':'')+'>'+calcEsc(o[0])+' ('+(o[1]>0?'+':'')+o[1]+')</option>'; });
     out+='</select></label>';
   } else {
     out+='<label class="calc-row"><span class="calc-lab">'+calcEsc(inp.label)+'</span><span class="calc-inwrap">'+
       '<input type="number" inputmode="decimal" step="any" data-cid="'+inp.id+'" min="'+inp.min+'" max="'+inp.max+'">';
     if(inp.units.length>1){
       out+='<select data-unit="'+inp.id+'">';
       inp.units.forEach(function(u){ out+='<option value="'+calcEsc(u[0])+'">'+calcEsc(u[0])+'</option>'; });
       out+='</select>';
     } else out+='<span class="calc-unit">'+calcEsc(inp.units[0][0])+'</span>';
     out+='</span></label>';
   }
 });
 out+='</form><div class="calc-out" id="calcOut" aria-live="polite"></div>';
 out+='<div class="calc-sec"><div class="calc-sec-h">How it is worked out</div><div class="calc-formula" id="calcWork"></div></div>';
 out+='<div class="calc-sec"><div class="calc-sec-h">Before you use it</div><ul class="calc-cav">';
 c.caveats.forEach(function(x){ out+='<li>'+calcEsc(x)+'</li>'; });
 out+='</ul></div>';
 out+='<div class="calc-sec"><div class="calc-sec-h">Source</div><div class="calc-cite">'+calcEsc(c.citation)+
   (c.url?' <a href="'+calcEsc(c.url)+'" target="_blank" rel="noopener">Open</a>':'')+'</div></div>';
 var links=(c.conditions||[]).filter(function(x){return byId[x];});
 if(links.length){
   out+='<div class="calc-sec"><div class="calc-sec-h">Related conditions</div><div class="calc-links">';
   links.forEach(function(x){ out+='<button class="calc-link" onclick="go(\\'detail\\',\\''+x+'\\')">'+calcEsc(byId[x].name)+'</button>'; });
   out+='</div></div>';
 }
 out+='<div class="calc-disc">Educational use only \\u2014 verify against current guidelines and your supervising clinician.</div>';
 return out+'</div>';
}

function calcInit(id){
 var c=calcById(id); if(!c) return;
 var form=document.getElementById('calcForm');
 var outEl=document.getElementById('calcOut');
 var workEl=document.getElementById('calcWork');
 if(!form||!outEl) return;
 function read(){
   var v={};
   form.querySelectorAll('[data-cid]').forEach(function(el){
     var k=el.getAttribute('data-cid');
     if(el.type==='checkbox') v[k]=el.checked;
     else if(el.tagName==='SELECT') v[k]=Number(el.value);
     else if(el.value!=='') v[k]=Number(el.value);
   });
   form.querySelectorAll('[data-unit]').forEach(function(el){ v[el.getAttribute('data-unit')+'_unit']=el.value; });
   return v;
 }
 function render(){
   var v=read(), r;
   try{ r=calcRun(c,v); }catch(e){ r=null; }
   if(!r){ outEl.className='calc-out'; outEl.innerHTML='<div class="calc-empty">Enter the values above.</div>'; workEl.textContent=''; return; }
   if(r.error){ outEl.className='calc-out tone-high'; outEl.innerHTML='<div class="calc-empty">'+calcEsc(r.error)+'</div>'; workEl.textContent=''; return; }
   var b=r.band||{};
   outEl.className='calc-out tone-'+(b.tone||'ok');
   var head;
   if(c.kernel==='bmiBsa') head='<div class="calc-big">'+r.bmi+' <span>kg/m\\u00b2</span></div><div class="calc-second">BSA '+r.bsa+' m\\u00b2 (Mosteller)</div>';
   else if(c.kernel==='map') head='<div class="calc-big">'+r.value+' <span>mmHg</span></div>';
   else head='<div class="calc-big">'+r.score+' <span>point'+(r.score===1?'':'s')+'</span></div>';
   outEl.innerHTML=head+'<div class="calc-band">'+calcEsc(b.label||'')+'</div>'+
     (b.note?'<div class="calc-bnote">'+calcEsc(b.note)+'</div>':'');
   /* Show the arithmetic, not just the answer -- on a teaching tool the
      derivation is the content and the number is the by-product. */
   if(c.kernel==='sum'){
     var parts=[];
     c.inputs.forEach(function(inp){
       if(inp.type==='check'&&v[inp.id]) parts.push(calcEsc(inp.label)+'  '+(inp.points>0?'+':'')+inp.points);
       else if(inp.type==='select'){
         var o=inp.options.find(function(x){return x[1]===v[inp.id];})||inp.options[0];
         if(o[1]!==0) parts.push(calcEsc(inp.label)+': '+calcEsc(o[0])+'  +'+o[1]);
       }
     });
     workEl.innerHTML=parts.length?parts.join('<br>')+'<br><b>Total '+r.score+'</b>':'No criteria selected \\u2014 total 0.';
   } else if(c.kernel==='bmiBsa'){
     workEl.innerHTML='BMI = weight (kg) \\u00f7 height (m)\\u00b2<br>BSA = \\u221a[ height (cm) \\u00d7 weight (kg) \\u00f7 3600 ]';
   } else {
     workEl.innerHTML='MAP = [ systolic + (2 \\u00d7 diastolic) ] \\u00f7 3';
   }
 }
 form.addEventListener('input',render);
 form.addEventListener('change',render);
 render();
}

function paint(y){`);

/* 3 ── paint() cases ------------------------------------------------------- */
sub('paint cases',
  "else if(r.v==='clinupd'){s.innerHTML=clinUpdHTML();}",
  "else if(r.v==='clinupd'){s.innerHTML=clinUpdHTML();}\n else if(r.v==='calc'){s.innerHTML=calcHTML();}\n else if(r.v==='calcone'){s.innerHTML=calcOneHTML(r.id);calcInit(r.id);}");

/* 4 ── rcSyncURL: without this a shared /x/<id> snaps back to / on boot ----- */
sub('rcSyncURL case',
  " else if(t&&t.v==='clinupd') want=RC_PATH+'u/';",
  " else if(t&&t.v==='clinupd') want=RC_PATH+'u/';\n else if(t&&t.v==='calc') want=RC_PATH+'x/';\n else if(t&&t.v==='calcone'&&t.id) want=RC_PATH+'x/'+encodeURIComponent(t.id);");

/* 5 ── RC_ROOT regex: miss this and <base> becomes /x/ and content 404s ----- */
const rootRe = html.match(/\/\^\\\/\((?:[a-z]\|)+[a-z]\)\\\//);
if (!rootRe) { console.error('FAILED: could not find the RC_ROOT one-segment route regex'); process.exit(1); }
sub('RC_ROOT regex', rootRe[0], rootRe[0].replace(')\\/', '|x)\\/'));

/* 6a ── deep-link capture. paint() normalises the address bar as soon as the
   app boots, so the incoming /x/... path has to be read in the head script
   before anything else runs -- same reason the other five routes do it here. */
sub('deep-link capture',
  " window.RC_DEEPUPD=/^\\/u\\/?$/.test(location.pathname||'');",
  " window.RC_DEEPUPD=/^\\/u\\/?$/.test(location.pathname||'');\n" +
  " /* and the calculators: /x/ for the index, /x/<id> for one calculator */\n" +
  " var xm=/^\\/x\\/([A-Za-z0-9_-]+)\\/?$/.exec(location.pathname||'');\n" +
  " window.RC_DEEPCALC=xm?decodeURIComponent(xm[1]):null;\n" +
  " window.RC_DEEPCALCIDX=/^\\/x\\/?$/.test(location.pathname||'');");

/* 6b ── router. Without this the <base> and rcSyncURL edits are not enough:
   the path is captured and then nothing consumes it, so a shared link lands
   on the home page -- which is exactly what the first build did. */
sub('router openCalc',
  '  function boot(){',
  `  function openCalc(id,index){
    if(typeof CALC==='undefined'||!CALC.length) return false;
    if(index){ root('library'); go('calc'); window.scrollTo(0,0); return true; }
    if(!id||!CALC.some(function(c){return c.id===id;})) return false;
    /* seed library -> index behind it so Back from a shared calculator is not a dead end */
    root('library'); go('calc'); go('calcone',id); window.scrollTo(0,0);
    return true;
  }
  function boot(){
    if(openCalc(window.RC_DEEPCALC,window.RC_DEEPCALCIDX)){ window.RC_READY=true; if(typeof rcSyncURL==='function') rcSyncURL(); return; }`);

/* 6c ── entry point in the library count row ------------------------------- */
sub('library button',
  '>CLINICAL UPDATES</button>',
  `>CLINICAL UPDATES</button><button type="button" class="calcbtn" onclick="go('calc')" aria-label="Clinical Calculators"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8"/><path d="M8 11h.01M12 11h.01M16 11h.01M8 15h.01M12 15h.01M16 15h.01M8 19h.01M12 19h.01M16 19h.01"/></svg>CALCULATORS</button>`);

/* 7 ── styles. .calc-wrap reserves the 112px the fixed nav bar occupies.
   Anchored to the .clinupd rule rather than to `</style>`: there are eight
   style blocks in this file, and appending to the wrong one would put the
   calculator rules outside the block that owns the sibling components. ---- */
sub('styles', '.clinupd{', `
.calc-wrap{padding-bottom:112px}
.calc-note{font-size:13px;line-height:1.55;color:var(--muted);background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.09);border-radius:12px;padding:11px 13px;margin:14px 0 18px}
.calc-grp{font:800 11px/1 Oswald,sans-serif;letter-spacing:.13em;text-transform:uppercase;color:var(--muted);margin:20px 0 10px}
.calc-list{display:grid;gap:10px}
.calc-card{display:block;width:100%;text-align:left;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:13px 15px;color:inherit;font:inherit;cursor:pointer}
.calc-card:active{transform:scale(.995)}
.calc-card-n{font-weight:800;font-size:15px;margin-bottom:3px}
.calc-card-p{font-size:12.5px;line-height:1.5;color:var(--muted)}
.calc-form{display:grid;gap:9px;margin:16px 0}
.calc-chk{display:flex;align-items:flex-start;gap:11px;background:rgba(255,255,255,.045);border:1px solid rgba(255,255,255,.09);border-radius:12px;padding:12px 13px;cursor:pointer}
.calc-chk input{margin:2px 0 0;width:19px;height:19px;flex:0 0 auto;accent-color:var(--accent)}
.calc-chk-l{flex:1;font-size:13.5px;line-height:1.5}
.calc-pts{font:800 12px/1 Oswald,sans-serif;color:var(--muted);flex:0 0 auto;padding-top:3px}
.calc-row{display:flex;align-items:center;gap:12px;background:rgba(255,255,255,.045);border:1px solid rgba(255,255,255,.09);border-radius:12px;padding:11px 13px}
.calc-lab{flex:1;font-size:13.5px;line-height:1.45}
.calc-inwrap{display:flex;gap:7px;align-items:center;flex:0 0 auto}
.calc-row input,.calc-row select{background:rgba(0,0,0,.3);border:1px solid rgba(255,255,255,.16);border-radius:9px;color:inherit;font:inherit;font-size:15px;padding:8px 9px}
.calc-row input{width:86px;text-align:right}
.calc-unit{font-size:13px;color:var(--muted)}
.calc-out{border-radius:16px;padding:17px;text-align:center;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05)}
.calc-out.tone-ok{border-color:rgba(64,220,150,.5);background:rgba(64,220,150,.1)}
.calc-out.tone-warn{border-color:rgba(255,190,70,.5);background:rgba(255,190,70,.1)}
.calc-out.tone-high{border-color:rgba(255,95,95,.55);background:rgba(255,95,95,.1)}
.calc-big{font:800 38px/1 Oswald,sans-serif}
.calc-big span{font-size:15px;font-weight:600;color:var(--muted)}
.calc-second{font-size:14px;font-weight:700;margin-top:6px}
.calc-band{font-size:14.5px;font-weight:800;margin-top:8px}
.calc-bnote{font-size:12.5px;line-height:1.5;color:var(--muted);margin-top:6px}
.calc-empty{font-size:13.5px;color:var(--muted)}
.calc-sec{margin-top:18px}
.calc-sec-h{font:800 11px/1 Oswald,sans-serif;letter-spacing:.13em;text-transform:uppercase;color:var(--muted);margin-bottom:8px}
.calc-formula{font-size:13px;line-height:1.7;background:rgba(0,0,0,.24);border-radius:11px;padding:12px 13px}
.calc-cav{margin:0;padding-left:19px;font-size:13px;line-height:1.6}
.calc-cav li{margin-bottom:8px}
.calc-cite{font-size:12.5px;line-height:1.6;color:var(--muted)}
.calc-cite a{color:var(--accent)}
.calc-links{display:flex;flex-wrap:wrap;gap:8px}
.calc-link{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.13);border-radius:999px;padding:8px 14px;color:inherit;font:inherit;font-size:13px;font-weight:700;cursor:pointer}
.calc-disc{margin-top:22px;font-size:12px;line-height:1.55;color:var(--muted);text-align:center;font-style:italic}
.calcbtn{display:inline-flex;align-items:center;gap:7px;background:#fff;color:#08131f;border:0;border-radius:999px;padding:8px 14px;font:800 11.5px/1 Oswald,sans-serif;letter-spacing:.1em;cursor:pointer;margin-left:8px}
.calcbtn svg{stroke:#08131f}
.clinupd{`);

fs.writeFileSync(IDX, html);

/* 8 ── sw.js CORE + _redirects --------------------------------------------- */
let sw = fs.readFileSync(SW, 'utf8');
if (!sw.includes('calculators.json')) {
  sw = sw.replace("'./content/resident.json'", "'./content/resident.json',\n  './content/calculators.json'");
  if (!sw.includes('calculators.json')) { console.error('FAILED: could not add calculators.json to sw.js CORE'); process.exit(1); }
  const v = sw.match(/rounds-codex-v(\d+)/);
  sw = sw.replace(/rounds-codex-v\d+/, 'rounds-codex-v' + (Number(v[1]) + 1));
  fs.writeFileSync(SW, sw);
  edits.push('sw.js CORE + cache bump to v' + (Number(v[1]) + 1));
}

let red = fs.readFileSync(RED, 'utf8');
if (!/^\/x\/\*/m.test(red)) {
  red += '\n# The calculators index and each calculator are client-side routes too.\n/x/*    /index.html   200\n';
  fs.writeFileSync(RED, red);
  edits.push('_redirects /x/*');
}

fs.writeFileSync(path.join(ROOT, 'content', 'calculators.json'), JSON.stringify(SPECS));
edits.push(`content/calculators.json (${SPECS.length} calculators)`);

console.log('patched ' + ROOT);
edits.forEach(e => console.log('  + ' + e));
