/* Search the whole condition, not just its name -- plus the 440 gallery page titles.
 *
 * libRender filtered on `d.name.toLowerCase().includes(term)` and nothing else, so the search
 * box failed in exactly the way a student is most likely to use it. Measured before this patch:
 * "chest pain" returned 0 results while appearing in 31 conditions; "jaundice" returned 0 while
 * appearing in 8. Students search by presentation, not by diagnosis name.
 *
 * Three things this has to get right:
 *
 *  - **Strip the HTML.** Every body field is authored with <b> tags, so a naive index makes "b"
 *    match all 181 conditions and, worse, hides real phrases: "<b>jaundice,</b> dark urine"
 *    contains no substring "jaundice, dark urine". Tags come out before indexing.
 *
 *  - **Rank, and abandon the category grouping while searching.** Unranked, "chest pain" is 31
 *    cards in arbitrary order. Name matches come first, then tagline, then gallery page, then
 *    body. With a term present the list renders flat in score order, because category grouping
 *    actively fights relevance; with the box empty the grouped view is untouched.
 *
 *  - **Say why a card matched.** A search for "chest pain" that returns Aortic Dissection with
 *    no explanation looks like a bug. Each card gains one line -- "Pearls · ...tearing chest
 *    pain radiating..." -- only when the match came from somewhere other than the name.
 *
 * Nested shapes are flattened recursively: `meds` is [{drug,use}], `flow` is [{stage,title,desc}].
 * The index is built once on first search and memoised; 181 records is nothing, but rebuilding
 * it per keystroke would be silly.
 *
 * Usage: node scripts/add_deep_search.js <index.html>
 */
'use strict';
const fs = require('fs');

const INDEX = process.argv[2];
if (!INDEX) { console.error('usage: add_deep_search.js <index.html>'); process.exit(2); }

function replaceOnce(s, old, neu, label) {
  const parts = s.split(old);
  if (parts.length !== 2) {
    console.error(`FAIL ${label}: found ${parts.length - 1} occurrences, expected 1`);
    process.exit(1);
  }
  console.log('  ok  ' + label);
  return parts[0] + neu + parts[1];
}

let s = fs.readFileSync(INDEX, 'utf8');
const n0 = s.length;
if (s.includes('rcSearchIndex')) { console.error('FAIL: already patched'); process.exit(1); }

/* ------------------------------------------------------ the index and the scorer */

s = replaceOnce(s, 'function libRender(){',
  `/* ---------- SEARCH ---------- */
/* Fields worth searching, in the order they are worth ranking. 'refs' is deliberately absent:
   it is journal citations, and matching them surfaces conditions for authors' names. */
var RC_SEARCH_FIELDS=['whatItIs','diagnosis','meds','nursing','medStudent','pearls','flow',
                      'redFlags','impress'];
var RC_FIELD_LABEL={whatItIs:'What it is',diagnosis:'Diagnosis',meds:'Medications',
  nursing:'Nursing',medStudent:'Med student',pearls:'Pearls',flow:'Clinical course',
  redFlags:'Red flags',impress:'How to impress'};

/* Body text is authored with <b> tags. Left in, "b" matches everything and real phrases break
   across the markup, so tags come out and entities are folded before anything is indexed. */
function rcPlain(v){
  if(v==null) return '';
  if(typeof v==='string') return v.replace(/<[^>]*>/g,'')
    .replace(/&nbsp;/g,' ').replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>')
    .replace(/&[a-z]+;/gi,' ').replace(/\\s+/g,' ').trim();
  if(Array.isArray(v)) return v.map(rcPlain).filter(Boolean).join(' \\u00b7 ');
  if(typeof v==='object') return Object.values(v).map(rcPlain).filter(Boolean).join(' \\u2014 ');
  return String(v);
}

var _rcIndex=null;
function rcSearchIndex(){
  if(_rcIndex) return _rcIndex;
  _rcIndex={};
  DATA.forEach(function(d){
    var e={name:d.name.toLowerCase(), tag:rcPlain(d.tagline), fields:[], gal:[]};
    e.tagLC=e.tag.toLowerCase();
    RC_SEARCH_FIELDS.forEach(function(f){
      var t=rcPlain(d[f]); if(t) e.fields.push({f:f, t:t, lc:t.toLowerCase()});
    });
    var g=(typeof GALLERIES!=='undefined')&&GALLERIES[d.id];
    if(g) g.images.forEach(function(im){ e.gal.push({n:im.n, t:im.title, lc:String(im.title).toLowerCase()}); });
    _rcIndex[d.id]=e;
  });
  return _rcIndex;
}

/* A window of text around the hit, so the match line reads like a sentence rather than a field
   dump. Trimmed to word boundaries -- cutting mid-word looks like corruption. */
function rcSnippet(text,lc,at,len){
  var W=46, s0=Math.max(0,at-W), s1=Math.min(text.length,at+len+W);
  var out=text.slice(s0,s1);
  if(s0>0){ var sp=out.indexOf(' '); out=(sp>0?out.slice(sp+1):out); out='\\u2026'+out; }
  if(s1<text.length){ var lp=out.lastIndexOf(' '); out=(lp>0?out.slice(0,lp):out)+'\\u2026'; }
  return out;
}

/* Score one condition. Returns null when nothing matches.
   Phrase hits beat all-words hits, and where the hit landed sets the tier -- name, tagline,
   gallery page, body -- which is what makes 31 results for "chest pain" usable. */
function rcScore(d,term){
  var e=rcSearchIndex()[d.id];
  var words=term.split(/\\s+/).filter(Boolean);
  var hasAll=function(lc){ return words.every(function(w){ return lc.indexOf(w)>=0; }); };

  if(e.name.indexOf(term)>=0) return {s:1000-e.name.indexOf(term), why:null};
  if(words.length>1&&hasAll(e.name)) return {s:900, why:null};

  var at=e.tagLC.indexOf(term);
  if(at<0&&words.length>1&&hasAll(e.tagLC)) at=e.tagLC.indexOf(words[0]);
  if(at>=0) return {s:800, why:{label:'Overview', text:rcSnippet(e.tag,e.tagLC,at,term.length)}};

  for(var i=0;i<e.gal.length;i++){
    var gi=e.gal[i];
    if(gi.lc.indexOf(term)>=0||(words.length>1&&hasAll(gi.lc)))
      return {s:700-i, why:{label:'Gallery '+gi.n, text:gi.t}};
  }

  for(var j=0;j<e.fields.length;j++){
    var f=e.fields[j], k=f.lc.indexOf(term);
    if(k<0&&words.length>1&&hasAll(f.lc)) k=f.lc.indexOf(words[0]);
    if(k>=0) return {s:600-j, why:{label:RC_FIELD_LABEL[f.f]||f.f,
                                   text:rcSnippet(f.t,f.lc,k,term.length)}};
  }
  return null;
}

function libRender(){`,
  'search index, scorer and snippet');

/* --------------------------------------------------- filter by score, not by name */

s = replaceOnce(s,
  ` let rows=DATA.filter(d=>(libSpec==='All'||d.category===libSpec)&&d.name.toLowerCase().includes(term)
                         &&(!libStarOnly||marks.indexOf(d.id)>=0));`,
  ` const pool=DATA.filter(d=>(libSpec==='All'||d.category===libSpec)
                         &&(!libStarOnly||marks.indexOf(d.id)>=0));
 /* why[id] drives the match line on each card; rebuilt every render so a cleared box clears it */
 const why={};
 let rows=pool;
 if(term){
   const hits=[];
   pool.forEach(function(d){
     const r=rcScore(d,term);
     if(r){ hits.push({d:d,s:r.s}); if(r.why) why[d.id]=r.why; }
   });
   hits.sort(function(a,b){ return b.s-a.s || a.d.name.localeCompare(b.d.name); });
   rows=hits.map(function(h){ return h.d; });
 }
 window._libWhy=why;`,
  'libRender filters and ranks by score');

/* ------------------------------------------------ the match line on the card */

s = replaceOnce(s,
  `<div class="icd">ICD-10 \${d.icd10}</div><div class="cbm`,
  `<div class="icd">ICD-10 \${d.icd10}</div>\${(window._libWhy&&window._libWhy[d.id])?\`<div class="cwhy"><b>\${window._libWhy[d.id].label}</b> \${rcEsc(window._libWhy[d.id].text)}</div>\`:''}<div class="cbm`,
  'card shows why it matched');

s = replaceOnce(s, 'function libRender(){',
  `/* The snippet is plain text pulled from authored HTML; it must not be able to inject markup
   back into the card. */
function rcEsc(t){ return String(t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function libRender(){`,
  'snippet escaping');

/* ---------------------------------- flat, ranked list while a term is present */

s = replaceOnce(s,
  ` const order=[...new Set(rows.map(r=>r.category))];let idx=0;`,
  ` /* Category grouping fights relevance: the best match for "chest pain" is not necessarily in
    the first category alphabetically. While searching, render one flat list in score order. */
 const order=term?['\\u0000results']:[...new Set(rows.map(r=>r.category))];let idx=0;`,
  'flat result list while searching');

s = replaceOnce(s,
  ` list.innerHTML=order.map(cat=>{const[c1,c2]=sec(cat);
   const cards=rows.filter(r=>r.category===cat).map(d=>{`,
  ` list.innerHTML=order.map(cat=>{const flat=(cat==='\\u0000results');
   const[c1,c2]=sec(flat?(rows[0]&&rows[0].category)||'All':cat);
   const cards=(flat?rows:rows.filter(r=>r.category===cat)).map(d=>{`,
  'render the flat list');

s = replaceOnce(s,
  `<span>\${cat.toUpperCase()}</span></div><div class="grid">\${cards}</div></div>\`;}).join('');`,
  `<span>\${flat?(rows.length+' RESULT'+(rows.length===1?'':'S')):cat.toUpperCase()}</span></div><div class="grid">\${cards}</div></div>\`;}).join('');`,
  'flat list header reads "N RESULTS"');

/* --------------------------------------------------------------- styling */

s = replaceOnce(s, '.card{position:relative;border-radius:19px;',
  `/* One line, clamped to two so a long snippet cannot stretch the card out of the grid. */
.cwhy{margin-top:6px;font-size:10.5px;line-height:1.35;color:var(--muted-2);
  display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}
.cwhy b{color:var(--accent);font-weight:800;letter-spacing:.2px;}
.card{position:relative;border-radius:19px;`,
  'match-line styling');

/* The placeholder advertised the old behaviour. Leaving it saying "conditions" would keep
   hiding the feature -- nobody types a symptom into a box that promises to match names. */
s = replaceOnce(s,
  'placeholder="Search ${DATA.length} conditions across ${ORDER.length} specialties\u2026"',
  'placeholder="Search symptoms, findings, pearls, ${DATA.length} conditions\u2026"',
  'placeholder says what is actually searched');

// the empty-state text still says "No conditions match." which is right for a search
fs.writeFileSync(INDEX, s);
console.log(`\n${n0} -> ${s.length} chars (+${s.length - n0})`);
