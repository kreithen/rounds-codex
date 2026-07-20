/* ===== Rounds Codex Rx — module logic, styling, and source patcher =====
   Depends on app globals: SEC, sec(), go(), root(), byId, DATA.
   Depends on RX_DATA (defined in rx-data.js, concatenated before this file). */

/* ---------- pill color + illustration ---------- */
function rxColor(n){n=(n||'').toLowerCase();
 if(n.indexOf('pink')>=0)return'#f7a8c4';
 if(n.indexOf('lavender')>=0)return'#c9b6e8';
 if(n.indexOf('violet')>=0||n.indexOf('purple')>=0&&n.indexOf('gray')<0)return'#b28bd8';
 if(n.indexOf('purple')>=0)return'#8a7fb0';
 if(n.indexOf('green')>=0&&n.indexOf('olive')<0)return'#86d6a0';
 if(n.indexOf('olive')>=0)return'#a6ad63';
 if(n.indexOf('peach')>=0)return'#f6c69a';
 if(n.indexOf('orange')>=0)return'#f4b060';
 if(n.indexOf('yellow')>=0)return'#f2df85';
 if(n.indexOf('blue')>=0)return'#8bb8f2';
 if(n.indexOf('brown')>=0)return'#bd8a5c';
 if(n.indexOf('buff')>=0||n.indexOf('beige')>=0)return'#e3d3ab';
 if(n.indexOf('red')>=0)return'#f2777f';
 return'#eef2fa'; /* white/default */
}
function rxPill(p){
 var oral={tablet:1,capsule:1,caplet:1,chewable:1,odt:1,'tablet er':1,'tablet, extended release':1};
 var f=(p.f||'').toLowerCase(), fill=rxColor(p.c), im=(p.im||'').slice(0,7),
     dark=(p.c||'').toLowerCase(), txt=(fill==='#eef2fa'||dark.indexOf('white')>=0||dark.indexOf('yellow')>=0||dark.indexOf('beige')>=0||dark.indexOf('buff')>=0)?'#2a3550':'#3a2440';
 var sh=(p.sh||'').toLowerCase();
 if(oral[f]||sh){
  var body;
  if(sh.indexOf('capsule')>=0||sh.indexOf('oblong')>=0||f==='capsule'){
   body='<rect x="8" y="20" width="48" height="24" rx="12" fill="'+fill+'" stroke="rgba(20,30,55,.28)"/><path d="M32 20v24" stroke="rgba(20,30,55,.18)"/>';
  }else if(sh.indexOf('oval')>=0||sh.indexOf('caplet')>=0){
   body='<rect x="10" y="22" width="44" height="20" rx="10" fill="'+fill+'" stroke="rgba(20,30,55,.28)"/>';
  }else if(sh.indexOf('diamond')>=0){
   body='<path d="M32 16 48 32 32 48 16 32Z" fill="'+fill+'" stroke="rgba(20,30,55,.28)"/>';
  }else if(sh.indexOf('pentagon')>=0){
   body='<path d="M32 15 49 28 43 47 21 47 15 28Z" fill="'+fill+'" stroke="rgba(20,30,55,.28)"/>';
  }else if(sh.indexOf('square')>=0){
   body='<rect x="17" y="17" width="30" height="30" rx="6" fill="'+fill+'" stroke="rgba(20,30,55,.28)"/>';
  }else{ /* round */
   body='<circle cx="32" cy="32" r="17" fill="'+fill+'" stroke="rgba(20,30,55,.28)"/>';
  }
  var score=p.sc?'<path d="M32 17v30" stroke="rgba(20,30,55,.30)" stroke-width="1.4"/>':'';
  var label=im?'<text x="32" y="35.5" text-anchor="middle" font-size="8.5" font-family="Menlo,monospace" fill="'+txt+'">'+im.replace(/&/g,'&amp;').replace(/</g,'&lt;')+'</text>':'';
  return '<svg class="rxpill" viewBox="0 0 64 64" aria-hidden="true">'+body+score+label+'</svg>';
 }
 /* non-oral glyphs */
 if(f==='vial'||f==='emulsion vial'){
  return '<svg class="rxpill" viewBox="0 0 64 64"><rect x="22" y="14" width="20" height="10" rx="2" fill="#9fb4d8"/><path d="M24 24h16v24a4 4 0 01-4 4h-8a4 4 0 01-4-4z" fill="#dbe6fb" stroke="rgba(20,30,55,.25)"/><rect x="24" y="38" width="16" height="14" fill="#8bd6ff" opacity=".5"/></svg>';
 }
 if(f==='pen'||f==='auto-injector'){
  return '<svg class="rxpill" viewBox="0 0 64 64"><rect x="27" y="10" width="10" height="40" rx="4" fill="#dbe6fb" stroke="rgba(20,30,55,.25)"/><rect x="27" y="42" width="10" height="10" rx="2" fill="#8bd6ff"/><rect x="29" y="52" width="6" height="4" rx="1" fill="#9fb4d8"/></svg>';
 }
 if(f==='prefilled syringe'){
  return '<svg class="rxpill" viewBox="0 0 64 64"><rect x="16" y="26" width="30" height="12" rx="2" fill="#dbe6fb" stroke="rgba(20,30,55,.25)"/><path d="M46 30h8M50 26v12" stroke="#9fb4d8" stroke-width="2"/><path d="M16 32H8" stroke="#9fb4d8" stroke-width="2"/></svg>';
 }
 if(f==='inhaler'){
  return '<svg class="rxpill" viewBox="0 0 64 64"><rect x="24" y="12" width="14" height="16" rx="3" fill="#9fb4d8"/><path d="M24 26h20v20a4 4 0 01-4 4H26a2 2 0 01-2-2z" fill="#dbe6fb" stroke="rgba(20,30,55,.25)"/></svg>';
 }
 if(f==='nebule'){
  return '<svg class="rxpill" viewBox="0 0 64 64"><path d="M26 16h12v8l4 28a4 4 0 01-4 4H26a4 4 0 01-4-4l4-28z" fill="#dbe6fb" stroke="rgba(20,30,55,.25)"/></svg>';
 }
 if(f==='patch'){
  return '<svg class="rxpill" viewBox="0 0 64 64"><rect x="16" y="18" width="32" height="28" rx="4" fill="#dbe6fb" stroke="rgba(20,30,55,.25)" stroke-dasharray="3 3"/><rect x="24" y="26" width="16" height="12" rx="2" fill="#8bd6ff" opacity=".6"/></svg>';
 }
 if(f==='nasal spray'){
  return '<svg class="rxpill" viewBox="0 0 64 64"><path d="M28 14h8v6l6 6v22a4 4 0 01-4 4H26a4 4 0 01-4-4V26l6-6z" fill="#dbe6fb" stroke="rgba(20,30,55,.25)"/></svg>';
 }
 return '<svg class="rxpill" viewBox="0 0 64 64"><circle cx="32" cy="32" r="16" fill="#dbe6fb" stroke="rgba(20,30,55,.25)"/></svg>';
}

/* ---------- LIST VIEW ---------- */
var rxSort='generic', rxCat='All';
function rxName(d){return rxSort==='trade'?(d.trade&&d.trade[0]?d.trade[0].replace(/\s*\(.*/,''):d.generic):d.generic;}
function rxHTML(){return '<div class="pad rxwrap">'
 +'<div class="rxhero"><div class="rxhalo"></div><div class="rxsym">℞</div>'
 +'<div class="rxh-t">Rounds Codex <b>Rx</b></div>'
 +'<div class="rxh-s">The 200 essential drugs — uses, dosing, half-life, major side effects &amp; interactions. <b>Phase 1: 50 drugs live.</b></div></div>'
 +'<div class="rxseg" id="rxseg">'
   +'<button class="on" data-s="generic" onclick="rxSetSort(\'generic\')">A–Z Generic</button>'
   +'<button data-s="trade" onclick="rxSetSort(\'trade\')">A–Z Trade</button>'
   +'<button data-s="cat" onclick="rxSetSort(\'cat\')">By Category</button>'
 +'</div>'
 +'<div class="search rxsearch"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg><input id="rxq" placeholder="Search drugs, brand names, or class…" oninput="rxRender()"></div>'
 +'<div class="chips" id="rxchips"></div>'
 +'<div class="count"><b id="rxcnt">50</b> drugs</div><div id="rxlist"></div></div>';}
function rxInit(){
 var cats=['All'].concat([...new Set(RX_DATA.map(function(d){return d.cat;}))].sort());
 window._rxcats=cats;
 var ch=document.getElementById('rxchips');
 ch.style.display=rxSort==='cat'?'flex':'none';
 ch.innerHTML=cats.map(function(c,i){return '<div class="chip '+(c===rxCat?'on':'')+'" onclick="rxPickCat('+i+')">'+c+'</div>';}).join('');
 rxRender();
}
function rxSetSort(s){rxSort=s;document.querySelectorAll('#rxseg button').forEach(function(b){b.classList.toggle('on',b.dataset.s===s);});rxInit();}
function rxPickCat(i){rxCat=window._rxcats[i];rxInit();}
function rxRender(){
 var term=(document.getElementById('rxq').value||'').toLowerCase();
 var rows=RX_DATA.filter(function(d){
   if(rxSort==='cat'&&rxCat!=='All'&&d.cat!==rxCat)return false;
   var hay=(d.generic+' '+(d.trade||[]).join(' ')+' '+d.cls).toLowerCase();
   return hay.indexOf(term)>=0;
 });
 document.getElementById('rxcnt').textContent=rows.length;
 var list=document.getElementById('rxlist');
 if(!rows.length){list.innerHTML='<div class="empty">No drugs match.</div>';return;}
 function card(d){
  var badges=(d.sched?'<span class="rxdea">'+d.sched+'</span>':'')+(d.boxed&&d.boxed.length?'<span class="rxbox">BOXED</span>':'');
  var trade=(d.trade&&d.trade.length)?d.trade[0]:'';
  return '<div class="rxcard" onclick="go(\'rxdrug\',\''+d.id+'\')"><span class="gloss"></span>'
   +'<div class="rxc-top"><div class="rxc-name">'+rxName(d)+'</div>'+badges+'</div>'
   +'<div class="rxc-sub">'+(rxSort==='trade'?d.generic:(trade?trade:d.cls))+'</div>'
   +'<div class="rxc-cls">'+d.cls+'</div></div>';
 }
 if(rxSort==='cat'){
  var order=[...new Set(rows.map(function(r){return r.cat;}))];
  list.innerHTML=order.map(function(cat){
   var pair=(typeof sec==='function')?sec(cat):['#00c2ff','#006dff'];
   var cards=rows.filter(function(r){return r.cat===cat;}).map(card).join('');
   return '<div class="secblock" style="--sec:'+pair[0]+';--sec2:'+pair[1]+'"><div class="sec"><span>'+cat.toUpperCase()+'</span></div><div class="rxgrid">'+cards+'</div></div>';
  }).join('');
 }else{
  var sorted=rows.slice().sort(function(a,b){return rxName(a).localeCompare(rxName(b));});
  var groups={};sorted.forEach(function(d){var L=rxName(d)[0].toUpperCase();(groups[L]=groups[L]||[]).push(d);});
  list.innerHTML=Object.keys(groups).sort().map(function(L){
   return '<div class="rxalpha"><div class="rxletter">'+L+'</div><div class="rxgrid">'+groups[L].map(card).join('')+'</div></div>';
  }).join('');
 }
}

/* ---------- DETAIL VIEW ---------- */
function rxLi(a){return (a||[]).map(function(x){return '<li>'+x+'</li>';}).join('');}
function rxPillRow(pills){return (pills||[]).map(function(p){
  return '<div class="rxpitem">'+rxPill(p)+'<div class="rxpmeta"><b>'+(p.s||'')+'</b><span>'+(p.f||'')+'</span></div></div>';
 }).join('');}
function rxDetailHTML(id){
 var d=rxById[id];
 if(!d)return '<div class="pad"><div class="dtop"><div class="tb-btn" onclick="back()">‹</div></div><div class="discl">Drug not found.</div></div>';
 var pair=(typeof sec==='function')?sec(d.cat):['#00c2ff','#006dff'];
 var trade=(d.trade||[]).join(' · ');
 var badges=(d.ver?'<span class="rc-badge"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>RC VERIFIED</span>':'')
   +(d.sched?'<span class="rxdea big">'+d.sched+'</span>':'');
 var boxed=(d.boxed&&d.boxed.length)?'<div class="rxboxed"><div class="rxboxed-h"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L14.7 3.9a2 2 0 00-3.4 0z"/></svg>FDA Boxed Warning</div><ul class="blist">'+rxLi(d.boxed)+'</ul></div>':'';
 function panel(title,cls,body){return '<div class="panel '+(cls||'')+'"><div class="phead"><h2>'+title+'</h2></div>'+body+'</div>';}
 var conds=(d.cond||[]).filter(function(c){return (typeof byId!=='undefined')&&byId[c];});
 var condHTML=conds.length?panel('Used in these conditions','rxlinks','<div class="rxminigrid">'+conds.map(function(c){return '<div class="rxchip" onclick="go(\'detail\',\''+c+'\')">'+byId[c].name+'</div>';}).join('')+'</div>'):'';
 var src=(d.src||[]).map(function(u){var t=u.replace(/^https?:\/\//,'').split('/')[0];return '<a href="'+u+'" target="_blank" rel="noopener">'+t+'</a>';}).join('');
 return '<div class="pad rxdetail" style="--sec:'+pair[0]+';--sec2:'+pair[1]+'">'
  +'<div class="dtop"><div class="tb-btn" onclick="back()">‹</div><div class="rxcat-tag">'+d.cat+'</div></div>'
  +'<div class="rxd-head"><div class="eyebrow-row">'+badges+'</div>'
    +'<div class="d-title">'+d.generic+'</div>'
    +(trade?'<div class="rxd-trade">'+trade+'</div>':'')
    +'<div class="rxd-class">'+d.cls+'</div></div>'
  +boxed
  +panel('Common Uses','','<ul class="blist">'+rxLi(d.uses)+'</ul>')
  +panel('Typical Dosing','rxdose','<div class="rxdose-col"><div class="rxdose-h">Adult</div><ul class="blist">'+rxLi(d.dA)+'</ul></div>'
      +'<div class="rxdose-col peds"><div class="rxdose-h">Pediatric</div><ul class="blist">'+rxLi(d.dP)+'</ul></div>'
      +'<div class="rxpills"><div class="rxdose-h">Forms &amp; appearance</div><div class="rxpillrow">'+rxPillRow(d.pills)+'</div><div class="rxpilldisc">Illustrations show shape, color &amp; imprint of common strengths — not actual-size photographs.</div></div>')
  +'<div class="rxfacts">'
    +'<div class="rxfact"><span>Normal length of use</span><b>'+(d.dur||'—')+'</b></div>'
    +'<div class="rxfact"><span>Half-life</span><b>'+(d.hl||'—')+'</b></div>'
    +(d.sched?'<div class="rxfact"><span>Controlled schedule</span><b>'+d.sched+'</b></div>':'')
  +'</div>'
  +panel('Major Side Effects','','<ul class="blist">'+rxLi(d.se)+'</ul>')
  +panel('Major Drug Interactions','','<ul class="blist">'+rxLi(d.ix)+'</ul>')
  +panel('Pregnancy &amp; Lactation','','<p class="rxpreg">'+(d.preg||'')+'</p>')
  +condHTML
  +'<div class="refs">Sources: '+src+'</div>'
  +'<div class="discl">Educational reference for students and clinicians-in-training. Always confirm dosing against your institution\'s formulary and a current drug reference before administration.</div>'
 +'</div>';
}

/* ---------- inject "Drugs for this condition" into a condition page ---------- */
function rxInjectCond(id){
 try{
  var drugs=rxByCond[id]||[];if(!drugs.length)return;
  var pad=document.querySelector('#screen .pad');if(!pad)return;
  var panel=document.createElement('div');panel.className='panel rxcondpanel';
  panel.innerHTML='<div class="phead"><div class="pic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 4h4a3 3 0 010 6H5zM5 10l5 9M12 13l6 6M18 13l-6 6"/></svg></div><h2>Rx Guide — Drugs for this condition</h2></div>'
   +'<div class="rxminigrid">'+drugs.map(function(d){return '<div class="rxchip" onclick="go(\'rxdrug\',\''+d.id+'\')">'+d.generic+'<span>'+d.cls.split(' ').slice(0,3).join(' ')+'</span></div>';}).join('')+'</div>';
  var refs=pad.querySelector('.refs')||pad.querySelector('.discl');
  if(refs)pad.insertBefore(panel,refs);else pad.appendChild(panel);
 }catch(e){}
}

/* ================= SOURCE PATCHER (build the publishable index.html) ================= */
var RX_CSS=
".rxwrap .rxhero{position:relative;text-align:center;padding:26px 16px 18px;margin:4px 0 6px;overflow:hidden}"
+".rxhalo{position:absolute;left:50%;top:8px;width:200px;height:200px;transform:translateX(-50%);background:radial-gradient(circle,rgba(45,212,191,.22),transparent 62%);filter:blur(6px)}"
+".rxsym{position:relative;font-family:Georgia,serif;font-size:52px;line-height:1;color:var(--cyan-2);text-shadow:0 0 22px rgba(56,220,255,.55);font-weight:700}"
+".rxh-t{position:relative;font-size:26px;font-weight:800;letter-spacing:.3px;margin-top:6px;color:var(--white)}.rxh-t b{color:var(--cyan-2)}"
+".rxh-s{position:relative;max-width:520px;margin:6px auto 0;color:var(--muted);font-size:13.5px;line-height:1.5}.rxh-s b{color:var(--white)}"
+".rxseg{display:flex;gap:6px;background:rgba(96,150,230,.10);border:1px solid var(--line);border-radius:14px;padding:5px;margin:10px 0}"
+".rxseg button{flex:1;border:0;background:transparent;color:var(--muted);font-weight:700;font-size:13px;padding:9px 6px;border-radius:10px;cursor:pointer;transition:.18s;font-family:inherit}"
+".rxseg button.on{background:linear-gradient(135deg,var(--cyan),var(--blue-deep));color:#fff;box-shadow:0 4px 14px rgba(0,109,255,.34)}"
+".rxsearch{margin-top:4px}"
+".rxalpha{margin:2px 0 4px}.rxletter{font-family:'Oswald',sans-serif;font-size:13px;font-weight:600;letter-spacing:2px;color:var(--cyan-2);padding:8px 2px 6px;position:sticky;top:0}"
+".rxgrid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:8px}"
+"@media(max-width:520px){.rxgrid{grid-template-columns:1fr}}"
+".rxcard{position:relative;overflow:hidden;background:linear-gradient(160deg,rgba(20,32,58,.72),rgba(12,20,40,.72));border:1px solid var(--line);border-radius:16px;padding:13px 14px;cursor:pointer;transition:.18s;animation:fade .4s both}"
+".rxcard:hover{transform:translateY(-2px);border-color:var(--line-2);box-shadow:0 10px 26px rgba(0,0,0,.34)}"
+".rxc-top{display:flex;align-items:center;gap:7px}.rxc-name{font-weight:800;font-size:16px;color:var(--white);flex:1;line-height:1.15}"
+".rxc-sub{color:var(--cyan-2);font-size:12.5px;font-weight:600;margin-top:2px}"
+".rxc-cls{color:var(--muted-2);font-size:11.5px;margin-top:3px;line-height:1.3}"
+".rxdea{font-size:10px;font-weight:800;letter-spacing:.4px;color:#ffd43b;border:1px solid rgba(255,212,59,.5);border-radius:6px;padding:1px 5px;white-space:nowrap}"
+".rxdea.big{font-size:12px;padding:3px 9px}"
+".rxbox{font-size:9.5px;font-weight:800;letter-spacing:.4px;color:#ff8a94;border:1px solid rgba(255,90,106,.5);border-radius:6px;padding:1px 5px}"
+".rxdetail .rxd-head{padding:6px 2px 12px}.rxd-trade{color:var(--cyan-2);font-weight:600;font-size:14px;margin-top:2px}"
+".rxd-class{color:var(--muted);font-size:13px;margin-top:5px}.rxcat-tag{margin-left:auto;color:var(--muted);font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:1px}"
+".rxboxed{background:linear-gradient(160deg,rgba(255,90,106,.16),rgba(255,90,106,.06));border:1px solid rgba(255,90,106,.42);border-radius:16px;padding:14px 16px;margin:4px 0 12px}"
+".rxboxed-h{display:flex;align-items:center;gap:8px;color:#ff8a94;font-weight:800;font-size:14px;letter-spacing:.3px;margin-bottom:8px}.rxboxed-h svg{width:20px;height:20px}"
+".rxboxed .blist li{color:#ffd6da}"
+".rxdose{display:block}.rxdose-col{margin-bottom:10px}.rxdose-h{font-size:11px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;color:var(--cyan-2);margin:2px 0 6px}"
+".rxdose-col.peds .rxdose-h{color:var(--nurse-2)}"
+".rxpills{margin-top:6px;border-top:1px solid var(--line);padding-top:10px}"
+".rxpillrow{display:flex;flex-wrap:wrap;gap:12px;margin-top:4px}"
+".rxpitem{display:flex;flex-direction:column;align-items:center;gap:3px;width:70px}"
+".rxpill{width:52px;height:52px;filter:drop-shadow(0 3px 6px rgba(0,0,0,.34))}"
+".rxpmeta{text-align:center;line-height:1.15}.rxpmeta b{display:block;font-size:12px;color:var(--white)}.rxpmeta span{font-size:10px;color:var(--muted-2)}"
+".rxpilldisc{font-size:10.5px;color:var(--muted-2);margin-top:9px;font-style:italic}"
+".rxfacts{display:flex;gap:10px;flex-wrap:wrap;margin:2px 0 12px}"
+".rxfact{flex:1;min-width:120px;background:rgba(96,150,230,.08);border:1px solid var(--line);border-radius:14px;padding:10px 12px}"
+".rxfact span{display:block;font-size:10.5px;text-transform:uppercase;letter-spacing:.8px;color:var(--muted-2);margin-bottom:3px}.rxfact b{font-size:13.5px;color:var(--white);font-weight:700;line-height:1.3}"
+".rxpreg{color:var(--white);font-size:14px;line-height:1.55;margin:2px 0 0;opacity:.92}"
+".rxminigrid{display:flex;flex-wrap:wrap;gap:8px}"
+".rxchip{background:rgba(96,150,230,.1);border:1px solid var(--line-2);border-radius:12px;padding:8px 12px;font-size:13px;font-weight:700;color:var(--white);cursor:pointer;transition:.16s;line-height:1.2}"
+".rxchip span{display:block;font-size:10.5px;font-weight:500;color:var(--muted);margin-top:2px}"
+".rxchip:hover{border-color:var(--cyan-2);color:var(--cyan-2);transform:translateY(-1px)}"
+".rxcondpanel{--pc:#2dd4bf;--pc2:#4ade80}"
+"#nav button[data-v=rx] svg{stroke-width:2}";

function rxSourceBlock(){
 var fns=[rxColor,rxPill,rxName,rxHTML,rxInit,rxSetSort,rxPickCat,rxRender,rxLi,rxPillRow,rxDetailHTML,rxInjectCond];
 var out='\n/* ===== Rounds Codex Rx module (auto-inserted) ===== */\n';
 out+='const RX_DATA='+JSON.stringify(RX_DATA)+';\n';
 out+='const rxById={};RX_DATA.forEach(function(d){rxById[d.id]=d;});\n';
 out+='const rxByCond={};RX_DATA.forEach(function(d){(d.cond||[]).forEach(function(c){(rxByCond[c]=rxByCond[c]||[]).push(d);});});\n';
 out+='var rxSort="generic",rxCat="All";\n';
 out+=fns.map(function(f){return f.toString();}).join('\n')+'\n';
 return out;
}

/* Given the current live index.html source string, return the patched source. */
function buildRxPatched(src){
 var changes=[];
 function rep(find,repl,label){var i=src.indexOf(find);if(i<0){changes.push('MISSING: '+label);return;}if(src.indexOf(find,i+find.length)>=0){changes.push('AMBIGUOUS: '+label);}src=src.replace(find,repl);changes.push('ok: '+label);}
 // 1) ROOTS
 rep("const ROOTS=['library','or','ask']","const ROOTS=['library','or','ask','rx']","ROOTS");
 // 2) nav button (insert before the closing </nav>)
 var navBtn='  <button data-v="rx" onclick="root(\'rx\')"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M5 4h4a3 3 0 010 6H5zM5 10l5 9M12 13l6 6M18 13l-6 6"/></svg><span>Rx</span></button>\n</nav>';
 rep("</nav>",navBtn,"nav button");
 // 3) paint() branches (before the OR fallback). The live app uses
 //    `else if(r.v==='or'){...}`; older/harness builds use a bare `else{...}`.
 var rxBranches="else if(r.v==='rx'){s.innerHTML=rxHTML();rxInit();}\n else if(r.v==='rxdrug'){s.innerHTML=rxDetailHTML(r.id);}\n ";
 if(src.indexOf("else if(r.v==='or'){s.innerHTML=orHTML();}")>=0){
  rep("else if(r.v==='or'){s.innerHTML=orHTML();}",rxBranches+"else if(r.v==='or'){s.innerHTML=orHTML();}","paint branches");
 }else{
  rep("else{s.innerHTML=orHTML();}",rxBranches+"else{s.innerHTML=orHTML();}","paint branches");
 }
 // 4) active-root mapping for the nav highlight
 rep("const activeRoot=(r.v==='detail')?'library':r.v;","const activeRoot=(r.v==='detail')?'library':(r.v==='rxdrug')?'rx':r.v;","active root");
 // 5) run condition-drug injection after a detail render
 rep("else if(r.v==='detail'){s.innerHTML=detailHTML(r.id);}","else if(r.v==='detail'){s.innerHTML=detailHTML(r.id);rxInjectCond(r.id);}","detail hook");
 // 6) CSS before </style>
 rep("</style>","\n/* Rounds Codex Rx */\n"+RX_CSS+"\n</style>","css");
 // 7) module code before the final paint();
 var i=src.lastIndexOf("\npaint();");
 if(i<0){changes.push('MISSING: paint() anchor');}
 else{src=src.slice(0,i)+rxSourceBlock()+src.slice(i);changes.push('ok: module code');}
 return {src:src,changes:changes};
}
