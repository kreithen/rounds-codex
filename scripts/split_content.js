/* Split the content out of the live index.html into content/*.json.
 *
 * WHY: everything -- 181 conditions, 300 drugs, 1308 resident entries, the galleries,
 * quizzes and the NCLEX bank -- was inline in one 6.9 MB file, so a typo fix meant
 * reshipping the whole app. Once the app is on the App Store that would mean a review for
 * every content change. Content moves to JSON; code stays in index.html.
 *
 * TWO THINGS THIS TOOL IS CAREFUL ABOUT
 *  1. Losslessness is proved, not assumed: each blob is evaluated as JS, serialised to
 *     JSON, re-parsed and deep-compared (including key order) against the original.
 *     Anything JSON cannot carry -- a function, undefined, NaN -- fails the run.
 *  2. Extraction and patching happen in the SAME offset space. Doing the halves in
 *     different languages once shifted every offset after the first emoji in the file,
 *     because JS string indices are UTF-16 code units and Python's are code points.
 *     Everything here is Node, so that cannot recur.
 *
 * Usage: node split_content.js <in.html> <outdir>
 *        writes <outdir>/index.html and <outdir>/content/*.json
 */
const fs = require('fs');
const path = require('path');

const SRC = process.argv[2];
const OUT = process.argv[3];
if (!SRC || !OUT) { console.error('usage: node split_content.js <in.html> <outdir>'); process.exit(2); }

// name -> [file, key in that file (null = whole file), empty container to leave behind]
const BLOBS = [
  ['DATA',               'conditions.json', null,          '[]'],
  ['RX_DATA',            'drugs.json',      null,          '[]'],
  ['QUIZZES',            'quizzes.json',    null,          '{}'],
  ['NCLEX_DATA',         'nclex.json',      null,          '[]'],
  ['OR_DATA',            'or.json',         null,          '{}'],
  ['GALLERIES',          'galleries.json',  'galleries',   '{}'],
  ['REALGAL',            'galleries.json',  'real',        'new Set()'],
  ['RES_DATA',           'resident.json',   'data',        '[]'],
  ['RES_SPECIALTIES',    'resident.json',   'specialties', '[]'],
  ['RES_ACTIVE',         'resident.json',   'active',      'new Set()'],
  ['RES_SECTION2_TITLE', 'resident.json',   'titles',      '{}'],
  ['RES_COND',           'resident.json',   'conditions',  '{}'],
  ['RESIDENT_APPROACH',  'resident.json',   'approach',    '{}'],
];

// parse-time derivations that have to move into the loader
const DERIVED = [
  ['const byId={};DATA.forEach(d=>byId[d.id]=d);',
   'const byId={};                    /* filled by the content loader */'],
  ['const ORDER=[...new Set(DATA.map(d=>d.category))];',
   'const ORDER=[];                   /* filled by the content loader */'],
  ['const rxById={};RX_DATA.forEach(function(d){rxById[d.id]=d;});',
   'const rxById={};                  /* filled by the content loader */'],
  ['const rxByCond={};RX_DATA.forEach(function(d){(d.cond||[]).forEach(function(c){(rxByCond[c]=rxByCond[c]||[]).push(d);});});',
   'const rxByCond={};                /* filled by the content loader */'],
  ['const resById={};RES_DATA.forEach(d=>resById[d.id]=d);',
   'const resById={};                 /* filled by the content loader */'],
];

const LOADER = `<script>
/* ---------- content loader ----------------------------------------------------------
   The content lives in content/*.json, not in this file. A new condition, gallery or quiz
   ships by replacing one JSON file: on the web that is a single-file upload instead of a
   6.9 MB one, and in the native app it is a content update rather than a new binary and an
   App Store review. Code stays in here.

   The containers above are declared empty and FILLED below rather than reassigned, so every
   existing reference keeps pointing at the same object -- including \`window.NCLEX_DATA\`,
   which the NCLEX module holds as an alias.

   This uses fetch, which does NOT work on file://. The native shell therefore has to serve
   the bundle from a real origin -- Capacitor's capacitor://localhost, or a
   WKURLSchemeHandler on a custom scheme -- which was already the recommendation for
   storage-origin reasons. See native-app-plan.md.
------------------------------------------------------------------------------------- */
(function(){
  var FILES=['conditions','drugs','quizzes','nclex','or','galleries','resident'];

  function get(n){
    return fetch((window.RC_ROOT||'')+'content/'+n+'.json',{cache:'no-cache'})
      .then(function(r){ if(!r.ok) throw new Error(n+'.json - HTTP '+r.status); return r.json(); });
  }
  /* push in a loop rather than push.apply: apply spreads into arguments, which would put a
     ceiling on how large a content file can grow */
  function fill(arr,items){ for(var i=0;i<items.length;i++) arr.push(items[i]); }

  function fail(e){
    /* be accurate about which failure this is: opening index.html straight off disk cannot
       read content/ at all, and telling someone to check their connection would be wrong */
    var hint=/^https?:$/.test(location.protocol)
      ? 'Check your connection and reload.'
      : 'This file has to be served over http, or run inside the app shell - opening '+
        'index.html directly cannot read the content folder.';
    var s=document.getElementById('screen');
    if(s) s.innerHTML='<div class="pad" style="padding-top:80px;text-align:center">'+
      '<div style="font-size:17px;font-weight:800;margin-bottom:8px">Content didn\\'t load</div>'+
      '<div style="font-size:14px;color:var(--muted);line-height:1.5">'+
      String((e&&e.message)||e)+'<br>'+hint+'</div></div>';
    if(window.console) console.error('Rounds Codex content load failed:',e);
  }

  Promise.all(FILES.map(get)).then(function(res){
    var C={}; FILES.forEach(function(n,i){ C[n]=res[i]; });

    fill(DATA,            C.conditions);
    fill(RX_DATA,         C.drugs);
    fill(NCLEX_DATA,      C.nclex);
    fill(RES_DATA,        C.resident.data);
    fill(RES_SPECIALTIES, C.resident.specialties);
    Object.assign(QUIZZES,            C.quizzes);
    Object.assign(OR_DATA,            C.or);
    Object.assign(GALLERIES,          C.galleries.galleries);
    Object.assign(RES_SECTION2_TITLE, C.resident.titles);
    Object.assign(RES_COND,           C.resident.conditions);
    Object.assign(RESIDENT_APPROACH,  C.resident.approach);
    C.galleries.real.forEach(function(x){ REALGAL.add(x); });
    C.resident.active.forEach(function(x){ RES_ACTIVE.add(x); });

    /* the lookups that used to be derived at parse time */
    DATA.forEach(function(d){ byId[d.id]=d; });
    var seen={};
    DATA.forEach(function(d){ if(!seen[d.category]){ seen[d.category]=1; ORDER.push(d.category); } });
    RX_DATA.forEach(function(d){ rxById[d.id]=d; });
    RX_DATA.forEach(function(d){ (d.cond||[]).forEach(function(c){ (rxByCond[c]=rxByCond[c]||[]).push(d); }); });
    RES_DATA.forEach(function(d){ resById[d.id]=d; });

    paint();                                           /* was an inline call at parse time */
    if(window.RC_ROUTE_BOOT) window.RC_ROUTE_BOOT();   /* then honour a /c/<id> deep link */
  }).catch(fail);
})();
</script>
`;

/* ---------------------------------------------------------------- helpers */

/* String-aware scan for the end of a bracketed expression: braces inside string literals
 * must not count. Getting this wrong is what corrupted this file once before. */
function matchBracket(s, start) {
  const open = s[start], close = open === '[' ? ']' : '}';
  let depth = 0, q = null, esc = false;
  for (let i = start; i < s.length; i++) {
    const c = s[i];
    if (q) {
      if (esc) { esc = false; continue; }
      if (c === '\\') { esc = true; continue; }
      if (c === q) q = null;
      continue;
    }
    if (c === '"' || c === "'" || c === '`') { q = c; continue; }
    if (c === open) depth++;
    else if (c === close && --depth === 0) return i;
  }
  throw new Error('unbalanced ' + open + ' from ' + start);
}

function findExpr(src, name) {
  const re = new RegExp('(?:^|[\\n;])\\s*(?:const|let|var)\\s+' + name + '\\s*=', 'm');
  const m = re.exec(src);
  if (!m) throw new Error('declaration not found: ' + name);
  if (re.exec(src.slice(m.index + m[0].length))) {
    // a second declaration of the same name would make "which one is content?" ambiguous
    throw new Error('declared more than once: ' + name);
  }
  let i = m.index + m[0].length;
  while (/\s/.test(src[i])) i++;

  let start = i, end;
  if (src.startsWith('new Set(', i)) {
    end = matchBracket(src, src.indexOf('[', i));
    let j = end + 1;
    while (/\s/.test(src[j])) j++;
    if (src[j] !== ')') throw new Error('new Set( not closed for ' + name);
    end = j;
  } else if (src[i] === '[' || src[i] === '{') {
    end = matchBracket(src, i);
  } else {
    throw new Error('unexpected expression start for ' + name + ': ' + src.slice(i, i + 30));
  }
  return { start, end, text: src.slice(start, end + 1) };
}

function deepEqual(a, b, p) {
  p = p || '$';
  if (a === b) return null;
  if (typeof a !== typeof b) return p + ': type ' + typeof a + ' vs ' + typeof b;
  if (a === null || b === null) return p + ': null mismatch';
  if (Array.isArray(a) !== Array.isArray(b)) return p + ': array vs object';
  if (typeof a !== 'object') return p + ': ' + JSON.stringify(a) + ' vs ' + JSON.stringify(b);
  const ka = Object.keys(a), kb = Object.keys(b);
  if (ka.length !== kb.length) return p + ': key count ' + ka.length + ' vs ' + kb.length;
  for (let i = 0; i < ka.length; i++) {
    if (ka[i] !== kb[i]) return p + ': key order ' + ka[i] + ' vs ' + kb[i];
    const r = deepEqual(a[ka[i]], b[ka[i]], p + '.' + ka[i]);
    if (r) return r;
  }
  return null;
}

function replaceOnce(s, old, neu, label) {
  const parts = s.split(old);
  if (parts.length !== 2) {
    console.error('FAIL %s: found %d occurrences, expected 1', label, parts.length - 1);
    process.exit(1);
  }
  return parts[0] + neu + parts[1];
}

/* ---------------------------------------------------------------- run */

let src = fs.readFileSync(SRC, 'utf8');
const n0 = src.length;

// 1. locate + evaluate + prove lossless
const found = [];
const files = {};
for (const [name, file, key, empty] of BLOBS) {
  const loc = findExpr(src, name);
  let value = new Function('return (' + loc.text + ')')();
  if (value instanceof Set) value = [...value];

  const back = JSON.parse(JSON.stringify(value));
  const diff = deepEqual(value, back);
  if (diff) { console.error('LOSSY %s -> %s', name, diff); process.exit(1); }

  if (key === null) files[file] = value;
  else { files[file] = files[file] || {}; files[file][key] = value; }

  found.push({ name, file, key, empty, start: loc.start, end: loc.end, chars: loc.text.length,
               count: Array.isArray(value) ? value.length : Object.keys(value).length });
}

// 2. blobs -> empty containers, back to front so earlier offsets stay valid
for (const f of [...found].sort((a, b) => b.start - a.start)) {
  src = src.slice(0, f.start) + f.empty + src.slice(f.end + 1);
}

// 3. derivations, initial paint, router wiring, loading placeholder, loader
for (const [old, neu] of DERIVED) src = replaceOnce(src, old, neu, 'derivation ' + old.slice(6, 24));

src = replaceOnce(src, '\npaint();\n</script>',
  '\n/* first paint happens in the content loader */\n</script>', 'initial paint()');

src = replaceOnce(src,
  "  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot);\n  else boot();",
  '  window.RC_ROUTE_BOOT=boot;   /* the content loader calls this once byId is populated */',
  'router boot wiring');

src = replaceOnce(src, '<div class="app"><div id="screen"></div>',
  '<div class="app"><div id="screen"><div class="pad" style="padding-top:90px;text-align:center;'
  + 'color:var(--muted-2);font-size:14px">Loading…</div></div>', '#screen placeholder');

src = replaceOnce(src, '</body></html>', LOADER + '</body></html>', 'loader injection');

// 4. write
fs.mkdirSync(path.join(OUT, 'content'), { recursive: true });
let jsonTotal = 0;
for (const f of Object.keys(files)) {
  const p = path.join(OUT, 'content', f);
  fs.writeFileSync(p, JSON.stringify(files[f]));
  jsonTotal += fs.statSync(p).size;
}
fs.writeFileSync(path.join(OUT, 'index.html'), src);

console.log('content files:');
for (const f of Object.keys(files)) {
  console.log('  content/%s %s bytes', f.padEnd(18), String(fs.statSync(path.join(OUT, 'content', f)).size).padStart(9));
}
console.log('\nblobs:');
for (const f of found) {
  console.log('  %s %s %s items', f.name.padEnd(20),
    (f.file + (f.key ? '#' + f.key : '')).padEnd(28), String(f.count).padStart(5));
}
const mb = n => (n / 1e6).toFixed(2) + ' MB';
console.log('\nindex.html %s -> %s   content JSON %s   total %s (was %s)',
  mb(n0), mb(src.length), mb(jsonTotal), mb(src.length + jsonTotal), mb(n0));
