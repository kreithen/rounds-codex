/* Add the About section and the first-run terms gate.
 *
 * SELF-CONTAINED ON PURPOSE. This runs on any recent index.html -- before or after the
 * content split, before or after add_persistence.js -- because the About section may need
 * to ship on its own, on top of whatever is currently live, while the rest of the work is
 * still queued. It brings its own terms storage, its own <style> block, and its own boot
 * hook, and it degrades gracefully when RC_STORE / NCLEX_STORE are not present yet.
 *
 * Replaces the bottom bar's "Resident Mode" slot with "About" (?). That slot was largely
 * redundant -- it called root('res') without switching mode, so you could land in the
 * resident specialty list while the app was still in Nursing mode. Resident content is now
 * reached the coherent way: the mode toggle, then the RESIDENT SPECIALTIES button.
 *
 * Adds four views -- about (hub), account, terms, privacy -- all of them non-immersive, so
 * the bottom control bar stays visible and navigable throughout, and all of them with a
 * working back control.
 *
 * BEFORE LAUNCH
 *  - CONTACT is teacher@roundscodex.com. Dr Kreithen owns roundscodex.com (GoDaddy); the
 *    mailbox still has to be created, and mail sent before it exists will bounce.
 *  - RC_SHARE_ORIGIN still points at rounds-codex.netlify.app on purpose: switching share
 *    links to roundscodex.com before DNS resolves would send people to a parking page.
 *  - The terms and privacy text is a careful plain-English draft, NOT legal advice. It needs
 *    a lawyer's review before launch -- more so once there is a paid subscription.
 *
 * Usage: node scripts/add_about.js <index.html>
 */
const fs = require('fs');

const SRC = process.argv[2];
if (!SRC) { console.error('usage: node add_about.js <index.html>'); process.exit(2); }

const CONTACT = 'teacher@roundscodex.com';   // roundscodex.com is owned; mailbox to be created
const TERMS_VERSION = '2026-07-26';
const APP_VERSION = '2026.07.26';

let s = fs.readFileSync(SRC, 'utf8');
const n0 = s.length;
const done = [];

function replaceOnce(old, neu, label) {
  const parts = s.split(old);
  if (parts.length !== 2) {
    console.error('FAIL %s: found %d occurrences, expected 1', label, parts.length - 1);
    process.exit(1);
  }
  s = parts[0] + neu + parts[1];
  done.push(label);
}

/* ------------------------------------------------------------- 1. the nav slot */

replaceOnce(
  `<button data-v="res" onclick="root('res')">`,
  `<button data-v="about" onclick="root('about')">`,
  'nav slot res -> about (onclick)');

/* Swap the icon + label. Matched on the label so we do not depend on the exact path data. */
const navRes = s.match(/<button data-v="about" onclick="root\('about'\)">[\s\S]*?<span>Resident Mode<\/span><\/button>/);
if (!navRes) { console.error('FAIL: could not find the Resident Mode nav button body'); process.exit(1); }
s = s.replace(navRes[0],
  `<button data-v="about" onclick="root('about')" aria-label="About Rounds Codex">`
  + `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">`
  + `<circle cx="12" cy="12" r="9"/><path d="M9.6 9.2a2.5 2.5 0 013.9-1.6c1.5 1 .9 2.6-.3 3.3-.8.5-1.2 1-1.2 1.9"/>`
  + `<circle cx="12" cy="17" r="1" fill="currentColor" stroke="none"/></svg><span>About</span></button>`);
done.push('nav icon + label -> ? / About');

/* ------------------------------------------------------ 2. views, routing, back */

replaceOnce(
  `const ROOTS=['library','or','ask','rx',"res"]`,
  `const ROOTS=['library','or','ask','rx',"res",'about']`,
  'ROOTS gains about');

replaceOnce(
  ` else if(r.v==='or'){s.innerHTML=orHTML();}`,
  ` else if(r.v==='or'){s.innerHTML=orHTML();}
 else if(r.v==='about'){s.innerHTML=aboutHTML();}
 else if(r.v==='account'){s.innerHTML=accountHTML();}
 else if(r.v==='terms'){s.innerHTML=legalHTML('terms');}
 else if(r.v==='privacy'){s.innerHTML=legalHTML('privacy');}
 else if(r.v==='galleries'){s.innerHTML=galleriesHTML();gxRender();}`,
  'paint() dispatch for the four views');

/* Keep About lit in the bottom bar while you are inside any of its sub-pages. */
replaceOnce(
  `const activeRoot=(r.v==='detail')?'library':(r.v==='rxdrug')?'rx':(r.v==='resspec'||r.v==='resdetail')?'res':r.v;`,
  `const activeRoot=(r.v==='detail')?'library':(r.v==='rxdrug')?'rx':(r.v==='resspec'||r.v==='resdetail')?'res'
   :(r.v==='account'||r.v==='terms'||r.v==='privacy')?'about'
   :(r.v==='galleries')?'library':r.v;`,
  'nav highlight for about sub-pages');

/* ------------------------------------- 2b. All Galleries button on the home page */
/* Sits after the mode banners (USMLE / NCLEX / RESIDENT) and before the specialty chips,
   so each mode's own call to action stays first. Shown in all three modes: the artwork is
   equally useful to everyone, and this is the entry point that makes 34 galleries
   discoverable at all. */
replaceOnce(
  '\n <div class="chips" id="chips"></div>',
  '\n <button type="button" class="allgal" onclick="go(\'galleries\')" aria-label="All image galleries">'
  + '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" '
  + 'stroke-linejoin="round"><rect x="3" y="4" width="14" height="14" rx="2"/>'
  + '<path d="M7 15l3.2-3.6L13 15"/><circle cx="12.6" cy="8.6" r="1.1"/>'
  + '<path d="M21 8v10a2 2 0 01-2 2H8"/></svg><span>All Image Galleries</span></button>'
  + '\n <div class="chips" id="chips"></div>',
  'All Galleries button under the search bar');

/* ------------------------------------------------------------------ 3. the code */

const ABOUT_JS = String.raw`<script>
/* ================= ABOUT ==========================================================
   The hub plus three sub-pages (account, terms, privacy). None are in IMMERSIVE, so the
   bottom control bar stays visible and usable throughout, exactly as on the home page.
=================================================================================== */
var RC_VERSION='__APP_VERSION__';
var RC_TERMS_VERSION='__TERMS_VERSION__';
/* Public contact address. Swap for a dedicated support mailbox before launch -- see the
   header of scripts/add_about.js. */
var RC_CONTACT='__CONTACT__';

/* Every advisor shown on the About page. Adding a person is one entry here.
   Nothing in this list is invented: add real names, roles and credentials only. */
var RC_ADVISORS=[
  { name:'Joshua Kreithen, MD', role:'Founder &amp; Clinical Lead',
    bio:'Practicing physician, Sarasota, Florida. Writes and reviews the clinical content in Rounds Codex.' }
];

/* Terms acceptance has its own tiny store rather than riding on RC_STORE, so the About
   section can ship on its own, ahead of the persistence work. Best-effort writes: private
   browsing throws on setItem, and a failed write must not take the app down. */
var RC_TERMS=(function(){
  var KEY='rc.terms.v1', mem=null;
  function read(){
    if(mem) return mem;
    try{ var raw=localStorage.getItem(KEY); mem=raw?JSON.parse(raw):{}; }catch(e){ mem={}; }
    if(!mem||typeof mem!=='object') mem={};
    return mem;
  }
  return {
    accepted:function(){ return read().version||null; },
    acceptedAt:function(){ var t=read(); if(!t.at) return null;
      try{ return new Date(t.at).toLocaleDateString(); }catch(e){ return null; } },
    accept:function(v){ mem={version:v,at:Date.now()};
      try{ localStorage.setItem(KEY,JSON.stringify(mem)); }catch(e){} }
  };
})();

/* Back that always does something. Reached from the bottom bar the stack is one deep, so
   back() alone would be a dead control. */
function navBack(){ if(stack.length>1) back(); else root('library'); }

function abIcon(p){ return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" '+
  'stroke-linecap="round" stroke-linejoin="round">'+p+'</svg>'; }

/* One row style for every action on the hub, so they read as a single list. */
function abRow(icon,title,sub,onclick,extra){
  return '<button class="ab-row" onclick="'+onclick+'"'+(extra||'')+'>'+
    '<span class="ab-ic">'+abIcon(icon)+'</span>'+
    '<span class="ab-t"><b>'+title+'</b><span>'+sub+'</span></span>'+
    '<span class="ab-go">'+abIcon('<path d="M9 6l6 6-6 6"/>')+'</span></button>';
}

function aboutHead(title,sub){
  return '<div class="ahead"><div class="tb-btn" onclick="navBack()" aria-label="Back">'+
    abIcon('<path d="M15 5l-7 7 7 7"/>')+'</div>'+
    '<div class="atitle"><div class="t">'+title+'</div><div class="s">'+sub+'</div></div></div>';
}

/* Jump targets for the inline links in "what it does". Each one switches mode where the
   destination only exists in a particular mode -- otherwise the link would appear to do
   nothing. */
function abGoMode(m){ setMode(m); root('library'); }
function abGoNclex(){
  setMode('nursing'); root('library');
  /* the entry banner is part of the library template, so it exists only after paint() */
  setTimeout(function(){ if(window.NCLEX&&NCLEX.openModule) NCLEX.openModule(); },60);
}
function abGoUsmle(){ setMode('medical'); location.href=(window.RC_ROOT||'')+'usmle/'; }
function abGoResident(){ setMode('resident'); root('res'); }
function abLink(text,call){ return '<a href="#" class="ab-jump" onclick="'+call+';return false;">'+text+'</a>'; }

/* Every gallery in one place, with all ten thumbnails each. 34 sets of original artwork were
   previously reachable only by opening conditions one at a time, which made the most
   expensive content the hardest to find.

   State lives outside the render because paint() rebuilds the whole view: gxMode survives a
   re-render, and the search box is repopulated from gxTerm. 340 images is a lot for one page,
   so every thumbnail is lazy + async-decoded and only fetches as you reach it. */
var gxMode='spec', gxTerm='', gxWarned=0;

function gxSetMode(m){ gxMode=m; gxRender();
  var seg=document.querySelector('.gx-seg');
  if(seg) [].forEach.call(seg.children,function(b){ b.classList.toggle('on', b.dataset.m===m); });
}
function gxSearch(v){ gxTerm=v||''; gxRender(); }

function gxThumbs(id){
  var g=GALLERIES[id];
  return '<div class="gx-thumbs">'+g.images.map(function(im,i){
    return '<button class="gx-th" onclick="openViewer(\'' + id + '\','+i+')" '+
      'aria-label="Image '+(i+1)+': '+String(im.title||'').replace(/"/g,'') + '">'+
      '<img loading="lazy" decoding="async" src="'+g.base+im.thumb+'" alt="" '+
      'onerror="gimgerr(this,\'' + id + '\',\'' + im.thumb + '\')"></button>';
  }).join('')+'</div>';
}

function gxBlock(id){
  var g=GALLERIES[id], d=byId[id];
  return '<div class="gx-gal">'+
    '<button class="gx-name" onclick="go(\'gallery\',\'' + id + '\')">'+
      '<span><b>'+d.name+'</b><i>'+g.images.length+' images &middot; '+d.icd10+'</i></span>'+
      abIcon('<path d="M9 6l6 6-6 6"/>')+'</button>'+
    gxThumbs(id)+'</div>';
}

function gxRender(){
  var host=document.getElementById('gxlist'); if(!host) return;
  var term=gxTerm.trim().toLowerCase();
  var ids=Object.keys(GALLERIES).filter(function(id){ return byId[id] && REALGAL.has(id); });

  /* A gallery whose id has no matching condition can never appear here. That is exactly what a
     mistyped id looks like too, so say it once in the console instead of dropping it silently. */
  if(!gxWarned){ gxWarned=1;
    Object.keys(GALLERIES).forEach(function(id){
      if(REALGAL.has(id) && !byId[id]) console.warn('galleries: no condition "'+id+'" — gallery hidden');
    });
  }

  if(term) ids=ids.filter(function(id){
    return byId[id].name.toLowerCase().indexOf(term)>=0 ||
           byId[id].category.toLowerCase().indexOf(term)>=0;
  });

  if(!ids.length){
    host.innerHTML='<div class="empty">No galleries match &ldquo;'+
      gxTerm.replace(/[<>&]/g,'')+'&rdquo;.</div>';
    return;
  }

  var pages=ids.reduce(function(n,id){ return n+GALLERIES[id].images.length; },0);
  var head='<div class="gx-count"><b>'+ids.length+'</b> '+(ids.length===1?'gallery':'galleries')+
           ' &middot; '+pages+' images</div>';

  var out='', last=null;
  if(gxMode==='alpha'){
    ids.sort(function(a,b){ return byId[a].name.localeCompare(byId[b].name); });
    ids.forEach(function(id){
      var L=byId[id].name.charAt(0).toUpperCase();
      if(L!==last){ if(last!==null) out+='</div>';
        out+='<div class="gx-sec gx-alpha"><div class="gx-cat">'+L+'</div>'; last=L; }
      out+=gxBlock(id);
    });
  } else {
    ids.sort(function(a,b){
      var ca=byId[a].category, cb=byId[b].category;
      if(ca!==cb) return ORDER.indexOf(ca)-ORDER.indexOf(cb);
      return byId[a].name.localeCompare(byId[b].name);
    });
    ids.forEach(function(id){
      var d=byId[id];
      if(d.category!==last){ if(last!==null) out+='</div>';
        var pair=sec(d.category);
        out+='<div class="gx-sec" style="--sec:'+pair[0]+';--sec2:'+pair[1]+'">'+
             '<div class="gx-cat">'+d.category.toUpperCase()+'</div>'; last=d.category; }
      out+=gxBlock(id);
    });
  }
  if(last!==null) out+='</div>';
  host.innerHTML=head+out;
}

function galleriesHTML(){
  var total=Object.keys(GALLERIES).filter(function(id){ return byId[id]&&REALGAL.has(id); }).length;
  return '<div class="pad about galleries">'+
    aboutHead('Image galleries', total+' galleries of original artwork')+
    '<div class="gx-seg">'+
      '<button class="gx-tab'+(gxMode==='spec'?' on':'')+'" data-m="spec" onclick="gxSetMode(\'spec\')">Specialty</button>'+
      '<button class="gx-tab'+(gxMode==='alpha'?' on':'')+'" data-m="alpha" onclick="gxSetMode(\'alpha\')">Alphabetical</button>'+
    '</div>'+
    '<div class="gx-find">'+
      abIcon('<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.6-3.6"/>')+
      '<input id="gxq" type="search" placeholder="Search conditions&hellip;" '+
      'value="'+gxTerm.replace(/"/g,'&quot;')+'" oninput="gxSearch(this.value)" '+
      'autocomplete="off" autocorrect="off" spellcheck="false">'+
    '</div>'+
    '<div id="gxlist"></div>'+
  '</div>';
}

function aboutHTML(){
  var adv=RC_ADVISORS.map(function(a){
    return '<div class="ab-adv"><div class="ab-avi">'+
      a.name.replace(/[^A-Za-z ]/g,'').trim().split(/\s+/).slice(0,2).map(function(w){return w[0];}).join('')+
      '</div><div><b>'+a.name+'</b><i>'+a.role+'</i><p>'+a.bio+'</p></div></div>';
  }).join('');

  return '<div class="pad about">'+
    aboutHead('About Rounds Codex','Version '+RC_VERSION)+

    '<div class="ab-hero">'+
      '<p class="ab-lede">Rounds Codex is a clinical reference designed to empower tomorrow&rsquo;s care '+
      'team by placing an entire medical library and study guide in the palm of their hand.</p>'+
      '<p>Rounds Codex bridges the gap between academic theory and real-world clinical practice, '+
      'providing nursing students, medical students, and residents with immediate, accurate data to '+
      'learn deeply, understand instantly, and succeed at the point of care.</p>'+
    '</div>'+

    '<div class="ab-sec"><h4>What it does</h4>'+
      '<p>The same condition reads differently depending on who is asking, so the app has three modes. '+
      abLink('<b>Nursing</b>',"abGoMode('nursing')")+' leads with assessment, monitoring and patient safety. '+
      abLink('<b>Medical Student</b>',"abGoMode('medical')")+' leads with pathophysiology, diagnosis and '+
      'the reasoning behind management. '+abLink('<b>Resident</b>',"abGoMode('resident')")+' leads with '+
      'what to actually do, by specialty.</p>'+
      '<ul class="ab-list">'+
        '<li>'+abLink('<b>'+DATA.length+' conditions</b>',"root('library')")+' across '+ORDER.length+
          ' specialties, each with an illustrated overview</li>'+
        '<li>'+abLink('<b>'+Object.keys(GALLERIES).length+' image galleries</b>',"go('galleries')")+
          ' of original teaching artwork</li>'+
        '<li>'+abLink('<b>'+RX_DATA.length+' drugs</b>',"root('rx')")+' cross-linked to the conditions they treat</li>'+
        '<li>'+abLink('<b>NCLEX-RN</b>','abGoNclex()')+' and '+abLink('<b>USMLE</b>','abGoUsmle()')+
          ' practice with a full performance report</li>'+
        /* RES_SPECIALTIES has 24 entries but one is inactive; the purple RESIDENT SPECIALTIES
           button says 23, so use the same number rather than contradicting it */
        '<li>'+abLink('<b>Resident mode</b>','abGoResident()')+' &mdash; the top topics for '+
          RES_ACTIVE.size+' specialties</li>'+
      '</ul></div>'+

    '<div class="ab-sec"><h4>Getting the most out of it</h4>'+
      '<ul class="ab-list">'+
        '<li><b>Switch modes</b> on any page &mdash; the same condition is rewritten, not just relabelled.</li>'+
        '<li><b>Swipe left and right</b> on a condition to move through its specialty.</li>'+
        '<li><b>Tap the star</b> on any condition to bookmark it, then filter with the star at the top left.</li>'+
        '<li><b>Share a condition</b> with the button beside its ICD-10 code &mdash; the link opens on that '+
        'exact page, which is useful mid-conversation on a ward.</li>'+
        '<li><b>Pinch or double-tap</b> gallery images to zoom.</li>'+
      '</ul></div>'+

    '<div class="ab-sec ab-warn"><h4>What it is not</h4>'+
      '<p>Rounds Codex is <b>for education only</b>. It is not medical advice, it does not replace your '+
      'own judgement, and it is not a substitute for your supervising clinician. <b>Anything you do for a '+
      'real patient must be approved by your attending, preceptor or clinical instructor.</b> Always check '+
      'doses against a current formulary and follow your institution&rsquo;s protocols.</p>'+
      '<p class="ab-fine">Practice scores in the NCLEX and USMLE modules measure how you did on those '+
      'questions. They are not predicted exam scores and not a probability of passing.</p></div>'+

    '<div class="ab-sec"><h4>Clinical advisors</h4>'+adv+'</div>'+

    '<div class="ab-actions">'+
      abRow('<path d="M4 12v7a2 2 0 002 2h12a2 2 0 002-2v-7"/><path d="M16 6l-4-4-4 4"/><path d="M12 2v14"/>',
            'Share Rounds Codex','Send the app to a colleague or classmate','shareApp()')+
      abRow('<circle cx="12" cy="8" r="4"/><path d="M4 21v-1a7 7 0 0114 0v1"/>',
            'My account','Your study activity and subscription',"go('account')")+
      abRow('<path d="M4 5h16v11H8l-4 4z"/>',
            'Questions, feedback &amp; bugs','Email us &mdash; we read everything','contactUs()')+
      abRow('<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5"/><path d="M10 13h6M10 17h6"/>',
            'Terms &amp; Conditions','Including the medical disclaimer',"go('terms')")+
      abRow('<rect x="4" y="10" width="16" height="10" rx="2"/><path d="M8 10V7a4 4 0 018 0v3"/>',
            'Privacy','What is stored, and where',"go('privacy')")+
    '</div>'+

    '<div class="ab-foot">Rounds Codex &middot; v'+RC_VERSION+'<br>'+
      '&copy; '+(new Date().getFullYear())+' Rounds Codex. For educational use only.</div>'+
  '</div>';
}

/* ---- share the app itself (the condition share button covers single conditions) ---- */
function shareApp(){
  var url=(typeof RC_SHARE_ORIGIN!=='undefined')?RC_SHARE_ORIGIN+'/':location.origin+'/';
  var payload={ title:'Rounds Codex',
    text:'Rounds Codex — a clinical reference for nursing students, medical students and residents. '+
         DATA.length+' conditions, illustrated, with NCLEX and USMLE practice.',
    url:url };
  if(navigator.share){ navigator.share(payload).catch(function(){}); return; }
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(url).then(
      function(){ toast('Link copied to clipboard'); },
      function(){ window.prompt('Copy this link:',url); });
    return;
  }
  window.prompt('Copy this link:',url);
}

/* ---- contact: mail app, with enough context to actually reproduce a bug ---- */
function contactUs(){
  var diag=['','','---','Please keep the lines below - they help us reproduce the issue.',
    'App: Rounds Codex v'+RC_VERSION,
    'Mode: '+(document.documentElement.getAttribute('data-mode')||'?'),
    'Screen: '+window.innerWidth+'x'+window.innerHeight+' @'+(window.devicePixelRatio||1)+'x',
    'Device: '+navigator.userAgent].join('\n');
  var href='mailto:'+RC_CONTACT+
    '?subject='+encodeURIComponent('Rounds Codex — feedback / bug report')+
    '&body='+encodeURIComponent('What happened (and what you expected):'+diag);
  location.href=href;
}

/* ---- my account: only what genuinely exists today ---- */
function accountHTML(){
  /* RC_STORE arrives with the persistence work; About can ship before it, so read
     defensively and simply show nothing rather than throwing. */
  var HAS=(typeof RC_STORE!=='undefined');
  var marks=HAS?RC_STORE.bookmarks().length:0;
  var quizzes=0, quizBest=0, quizTotal=0;
  if(HAS) Object.keys(QUIZZES).forEach(function(id){
    var r=RC_STORE.quizResult(id);
    if(r){ quizzes++; quizBest+=r.best; quizTotal+=r.total; }
  });
  var attempts=[], dash=null;
  try{ attempts=window.NCLEX_STORE?NCLEX_STORE.listAttempts()||[]:[];
       dash=window.NCLEX_STORE?NCLEX_STORE.dashboard():null; }catch(e){}

  function stat(n,l){ return '<div class="ab-stat"><b>'+n+'</b><span>'+l+'</span></div>'; }
  var pct=quizTotal?Math.round(quizBest/quizTotal*100)+'%':'—';

  var practice='';
  if(attempts.length){
    var last=attempts[0];
    practice='<div class="ab-sec"><h4>NCLEX-RN practice</h4>'+
      '<div class="ab-stats">'+stat(attempts.length,'attempts')+
      stat((last.pct!=null?last.pct+'%':'—'),'most recent')+
      stat((dash&&dash.best!=null?dash.best+'%':'—'),'best')+'</div>'+
      '<p class="ab-fine">Practice results only. These are not predicted exam scores and not a '+
      'probability of passing.</p></div>';
  }

  return '<div class="pad about">'+
    aboutHead('My account','Rounds Codex v'+RC_VERSION)+

    '<div class="ab-sec"><h4>Subscription</h4>'+
      '<div class="ab-plan"><b>Free</b><span>Rounds Codex is free while in development.</span></div>'+
      '<p class="ab-fine">There is no account to sign in to yet, and nothing to pay for. When '+
      'subscriptions arrive, your plan and billing will appear here.</p></div>'+

    (HAS?('<div class="ab-sec"><h4>Your study activity</h4>'+
      '<div class="ab-stats">'+stat(marks,'bookmarks')+stat(quizzes,'quizzes taken')+stat(pct,'best first-try')+'</div>'+
      (marks?'':'<p class="ab-fine">Tap the star on any condition to bookmark it.</p>')+
    '</div>'):'')+
    practice+

    '<div class="ab-sec"><h4>Your data</h4>'+
      '<p>Bookmarks, quiz progress and practice results are stored <b>on this device only</b>. They are '+
      'not sent anywhere, and they are not tied to a name or an account. That also means they do not '+
      'follow you to another device, and clearing your browser data clears them.</p>'+
      (HAS?'<button class="ab-danger" onclick="accountReset()">Clear my saved data</button>':'')+'</div>'+

    '<div class="ab-sec"><h4>Legal</h4>'+
      abRow('<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5"/>','Terms &amp; Conditions',
            'Accepted '+(RC_TERMS.acceptedAt()||'—'),"go('terms')")+
      abRow('<rect x="4" y="10" width="16" height="10" rx="2"/><path d="M8 10V7a4 4 0 018 0v3"/>',
            'Privacy','What is stored, and where',"go('privacy')")+
    '</div>'+
  '</div>';
}

function accountReset(){
  if(!window.confirm('Clear bookmarks, quiz progress and practice history on this device? This cannot be undone.')) return;
  try{ if(window.RC_STORE) RC_STORE.reset(); }catch(e){}
  try{ if(window.NCLEX_STORE) NCLEX_STORE.resetAll(); }catch(e){}
  toast('Saved data cleared');
  paint();
}

/* ---- terms + privacy ------------------------------------------------------------- */
/* Body only, shared by the full page and the locked first-run gate so there is exactly one
   copy of the legal text. */
function legalBodyHTML(which){
  var d=(which==='terms')?RC_LEGAL.terms:RC_LEGAL.privacy;
  return '<div class="ab-sec ab-warn"><h4>'+d.keyH+'</h4><p>'+d.key+'</p></div>'+
    d.sections.map(function(sec){
      return '<div class="ab-sec"><h4>'+sec.h+'</h4>'+
        sec.p.map(function(x){return '<p>'+x+'</p>';}).join('')+'</div>';
    }).join('');
}
function legalHTML(which){
  var d=(which==='terms')?RC_LEGAL.terms:RC_LEGAL.privacy;
  return '<div class="pad about legal">'+
    aboutHead(d.title,'Version '+d.version+' · last updated '+d.updated)+
    legalBodyHTML(which)+
    '<div class="ab-foot">Questions about this document? <a href="#" onclick="contactUs();return false;">Contact us</a>.</div>'+
  '</div>';
}
</script>
`;

/* ---------------------------------------------------------- 4. the legal documents */

const LEGAL_JS = String.raw`<script>
/* ================= LEGAL TEXT =====================================================
   Plain-English draft. NOT legal advice -- have a lawyer review before launch, and again
   before charging for anything. Bump RC_TERMS_VERSION when the terms change materially:
   the first-run gate re-prompts on a version change.
=================================================================================== */
var RC_LEGAL={
 terms:{
  title:'Terms &amp; Conditions', version:'__TERMS_VERSION__', updated:'__TERMS_VERSION__',
  keyH:'The part that matters most',
  key:'Rounds Codex is an <b>educational reference</b>. It is not medical advice and it does not '+
      'replace your training, your judgement, or your supervisor. <b>Anything you do for a real '+
      'patient must be approved by your attending, preceptor or clinical instructor.</b>',
  sections:[
   {h:'1. What Rounds Codex is', p:[
    'Rounds Codex is a study and reference tool for nursing students, medical students, residents '+
    'and other trainees. It summarises conditions, medications and clinical approaches for learning.',
    'It is written and reviewed by clinicians, but it is a summary. It is not a textbook, a guideline, '+
    'a formulary, or a clinical decision support system, and it is not certified as a medical device.']},

   {h:'2. Not medical advice', p:[
    'Nothing in Rounds Codex is medical advice for any particular patient, and using it does not '+
    'create a clinician&ndash;patient or teacher&ndash;student relationship between you and us.',
    'You are responsible for every clinical decision you take part in. <b>Before you act on anything '+
    'you read here in the care of a real patient, it must be approved by your supervising clinician.</b> '+
    'If what you read here conflicts with your attending, your institution&rsquo;s protocol, or a current '+
    'guideline, follow them, not us.']},

   {h:'3. Doses, guidelines and currency', p:[
    'Medicine changes, and we may not have caught up. Doses, thresholds and recommendations may be '+
    'out of date, may not apply to your patient, and may not match your local formulary or protocol.',
    'Always verify doses against a current formulary before administering anything, and treat any '+
    'number here as a prompt to check rather than an instruction to follow.']},

   {h:'4. Practice questions and scores', p:[
    'The NCLEX-RN and USMLE modules are practice. Scores describe how you did on those questions and '+
    'nothing more.',
    '<b>They are not predicted exam scores and not a probability of passing.</b> Rounds Codex is not '+
    'affiliated with, endorsed by, or sponsored by the NCSBN, the NBME, the FSMB, or any licensing body.']},

   {h:'5. Emergencies', p:[
    'Rounds Codex is not for emergencies. If a patient is deteriorating, escalate to a supervising '+
    'clinician and follow your local emergency process. Members of the public should call their local '+
    'emergency number.']},

   {h:'6. Using the app', p:[
    'You may use Rounds Codex for your own learning and clinical training. Please do not copy, resell '+
    'or republish its content, scrape it in bulk, or present it as your own work.',
    'The text, illustrations and question banks are original work and remain the property of Rounds Codex.']},

   {h:'7. Cost and subscriptions', p:[
    'Rounds Codex is currently free while in development. If paid plans are introduced, the price, what '+
    'is included, and how to cancel will be shown clearly before you are ever charged, and these terms '+
    'will be updated first.']},

   {h:'8. Your data', p:[
    'Bookmarks, quiz progress and practice history are stored on your device, not on our servers. '+
    'The Privacy page explains what happens in full, including the one feature that does send '+
    'something to us.']},

   {h:'9. Links to other sites', p:[
    'Condition pages cite external sources such as MedlinePlus, the CDC, the NIH and specialty '+
    'societies. Those sites are not ours and we are not responsible for their content or availability.']},

   {h:'10. No warranty, and limits on liability', p:[
    'Rounds Codex is provided &ldquo;as is&rdquo;, without warranties of any kind, express or implied, '+
    'including any warranty of accuracy, completeness, or fitness for a particular purpose.',
    'To the fullest extent permitted by law, Rounds Codex and its contributors are not liable for any '+
    'loss, injury or damage arising from your use of the app or from anything you read in it. Nothing '+
    'in these terms limits any liability that cannot lawfully be limited.']},

   {h:'11. Changes', p:[
    'We may update these terms. If they change materially you will be asked to review and accept them '+
    'again the next time you open the app. The version and date are shown at the top of this page.']},

   {h:'12. Governing law', p:[
    'These terms are governed by the laws of the State of Florida, USA. '+
    '<i>(To be confirmed with counsel before launch.)</i>']},

   {h:'13. Contact', p:[
    'Questions about these terms, or about anything in the app, can be sent to '+
    '<a href="#" onclick="contactUs();return false;">our contact address</a>.']}
  ]},

 privacy:{
  title:'Privacy', version:'__TERMS_VERSION__', updated:'__TERMS_VERSION__',
  keyH:'The short version',
  key:'Rounds Codex has no accounts, no analytics, no advertising and no trackers. Your bookmarks, '+
      'quiz progress and practice history stay <b>on your device</b>. The one exception is described '+
      'below: if you use Ask Rounds Codex, your question is sent to us so it can be answered.',
  sections:[
   {h:'What is stored on your device', p:[
    'Bookmarked conditions; your best first-try score for each quiz; your NCLEX practice attempts and '+
    'per-question history; and the fact that you accepted these terms, with the date and version.',
    'This lives in your browser or app storage on that device. It is not uploaded, not backed up by us, '+
    'and not linked to your name. It does not follow you to another device. You can erase all of it at '+
    'any time from <b>My account &rarr; Clear my saved data</b>, and clearing your browser data also '+
    'removes it.']},

   {h:'What leaves your device', p:[
    '<b>Ask Rounds Codex.</b> When you send a question, the question text and which mode you are in '+
    '(nursing, medical student or resident) are sent to our server so an answer can be generated. No '+
    'name, account, device identifier or location is attached, and your bookmarks and practice history '+
    'are never sent.',
    'Nothing else in the app transmits anything. Reading conditions, viewing galleries, taking quizzes '+
    'and taking practice exams all happen entirely on your device.']},

   {h:'What we do not do', p:[
    'No advertising. No analytics or tracking pixels. No selling or sharing of data. No profiles built '+
    'about you. No cookies used for tracking.']},

   {h:'Links to other sites', p:[
    'Condition pages link to external sources such as MedlinePlus, the CDC and specialty societies. '+
    'Once you follow one of those links you are on someone else&rsquo;s site, under their privacy policy, '+
    'not ours.']},

   {h:'Children', p:[
    'Rounds Codex is intended for health professions students and clinicians, not for children.']},

   {h:'Changes to this page', p:[
    'If what we do with data changes, this page will be updated and the version at the top will change.']},

   {h:'Contact', p:[
    'Privacy questions can be sent to <a href="#" onclick="contactUs();return false;">our contact '+
    'address</a>.']}
  ]}
};

/* ================= FIRST-RUN ACCEPTANCE GATE ======================================
   Blocks the app until the medical disclaimer has been read and accepted, and records the
   version accepted so a material change re-prompts. A disclaimer nobody ever saw is not
   worth much, which is the whole point of gating it.
=================================================================================== */
function rcTermsGate(){
  if(RC_TERMS.accepted()===RC_TERMS_VERSION) return;
  if(document.getElementById('rc-gate')) return;
  var el=document.createElement('div');
  el.id='rc-gate';
  document.body.appendChild(el);
  rcGateShow('summary');
}

/* The gate is a single locked panel with two states. Reading Terms or Privacy swaps the
   panel's contents rather than routing into the app, so there is no moment where the app is
   reachable: the only way out is "I understand and agree". Back returns to the summary,
   where the agree button lives. */
function rcGateShow(view){
  var el=document.getElementById('rc-gate'); if(!el) return;

  if(view==='terms'||view==='privacy'){
    var d=(view==='terms')?RC_LEGAL.terms:RC_LEGAL.privacy;
    el.innerHTML='<div class="rc-gate-card rc-gate-doc" role="dialog" aria-modal="true">'+
      '<div class="rc-gate-bar">'+
        '<button class="rc-gate-back" onclick="rcGateShow(\'summary\')" aria-label="Back">'+
          abIcon('<path d="M15 5l-7 7 7 7"/>')+'<span>Back</span></button>'+
        '<div class="rc-gate-bt">'+d.title+'</div>'+
      '</div>'+
      '<div class="rc-gate-scroll about legal">'+legalBodyHTML(view)+'</div>'+
      '<div class="rc-gate-note">Return and tap <b>I understand and agree</b> to continue.</div>'+
    '</div>';
    var sc=el.querySelector('.rc-gate-scroll'); if(sc) sc.scrollTop=0;
    return;
  }

  el.innerHTML='<div class="rc-gate-card" role="dialog" aria-modal="true" aria-labelledby="rc-gate-h">'+
    '<div class="rc-gate-logo"><img src="'+LOGO+'" alt=""></div>'+
    '<h2 id="rc-gate-h">Before you start</h2>'+
    '<p><b>Rounds Codex is for education only.</b> It is not medical advice and it does not '+
    'replace your supervising clinician.</p>'+
    '<p class="rc-gate-key">Anything you do for a real patient must be approved by your attending, '+
    'preceptor or clinical instructor. Always verify doses against a current formulary and follow '+
    'your institution&rsquo;s protocols.</p>'+
    '<p class="rc-gate-fine">Practice scores are not predicted exam scores and not a probability of '+
    'passing. By continuing you agree to the '+
    '<a href="#" onclick="rcGateShow(\'terms\');return false;">Terms &amp; Conditions</a> and '+
    '<a href="#" onclick="rcGateShow(\'privacy\');return false;">Privacy</a> policy.</p>'+
    '<button class="rc-gate-ok" id="rc-gate-ok">I understand and agree</button></div>';

  el.querySelector('#rc-gate-ok').onclick=function(){
    RC_TERMS.accept(RC_TERMS_VERSION);
    var g=document.getElementById('rc-gate'); if(g) g.remove();
  };
}
</script>
`;

/* ------------------------------------------------------------------- 6. the styles */

/* Own boot hook rather than a patch into the content loader, so this applies whether or
   not the content split has shipped. The gate needs only LOGO and the stylesheet, both
   available at parse time, so it can cover the loading state too. */
const GATE_BOOT = '<script>(function(){\n'
  + '  function start(){ try{ rcTermsGate(); }catch(e){ if(window.console) console.warn(e); } }\n'
  + "  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start);\n"
  + '  else start();\n'
  + '})();<\/script>\n';

const ABOUT_CSS = '<style id="about-css">' + String.raw`/* --- about + legal ---------------------------------------------------------- */
.about .ab-hero{margin:2px 0 18px;}
.about .ab-lede{font-size:16px;line-height:1.55;color:var(--white);font-weight:600;margin:0 0 10px;}
.about p{font-size:14.5px;line-height:1.62;color:var(--muted);margin:0 0 10px;}
.about .ab-sec{margin:0 0 22px;}
.about .ab-sec h4{font-size:11.5px;font-weight:900;letter-spacing:1.3px;text-transform:uppercase;
  color:var(--accent);margin:0 0 10px;}
.about .ab-list{margin:0;padding-left:18px;}
.about .ab-list li{font-size:14.5px;line-height:1.6;color:var(--muted);margin-bottom:7px;}
.about .ab-list b,.about p b{color:var(--white);font-weight:700;}
/* the safety section has to look different from the marketing copy above it */
.about .ab-warn{border:1px solid color-mix(in srgb,var(--gold) 34%,transparent);
  background:color-mix(in srgb,var(--gold) 8%,transparent);border-radius:16px;padding:15px 16px;}
.about .ab-warn h4{color:var(--gold);}
.about .ab-fine{font-size:12.5px;line-height:1.55;color:var(--muted-2);margin:8px 0 0;}
.about .ab-adv{display:flex;gap:13px;align-items:flex-start;margin-bottom:14px;}
.about .ab-avi{flex:none;width:44px;height:44px;border-radius:50%;display:grid;place-items:center;
  font-weight:900;font-size:14px;letter-spacing:.5px;color:#04121c;
  background:linear-gradient(140deg,var(--accent),var(--accent-2));}
.about .ab-adv b{display:block;color:var(--white);font-size:15px;font-weight:800;}
.about .ab-adv i{display:block;font-style:normal;font-size:12px;font-weight:700;letter-spacing:.4px;
  text-transform:uppercase;color:var(--accent);margin:2px 0 5px;}
.about .ab-adv p{margin:0;font-size:13.5px;}
.about .ab-actions{display:flex;flex-direction:column;gap:9px;margin:4px 0 20px;}
.ab-row{display:flex;align-items:center;gap:13px;width:100%;text-align:left;cursor:pointer;
  padding:13px 14px;border-radius:15px;border:1px solid var(--line);background:rgba(255,255,255,.03);
  color:var(--white);font-family:inherit;transition:background .15s,border-color .15s,transform .12s;}
.ab-row:hover{background:rgba(255,255,255,.06);border-color:var(--line-2);}
.ab-row:active{transform:scale(.995);}
.ab-row .ab-ic{flex:none;width:38px;height:38px;border-radius:11px;display:grid;place-items:center;
  background:color-mix(in srgb,var(--accent) 15%,transparent);color:var(--accent);}
.ab-row .ab-ic svg{width:19px;height:19px;}
.ab-row .ab-t{display:flex;flex-direction:column;line-height:1.25;min-width:0;}
.ab-row .ab-t b{font-size:15px;font-weight:800;}
.ab-row .ab-t span{font-size:12.5px;color:var(--muted-2);margin-top:2px;}
.ab-row .ab-go{margin-left:auto;color:var(--muted-2);}
.ab-row .ab-go svg{width:17px;height:17px;}
.about .ab-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:9px;}
.about .ab-stat{border:1px solid var(--line);border-radius:14px;padding:13px 8px;text-align:center;
  background:rgba(255,255,255,.03);}
.about .ab-stat b{display:block;font-size:22px;font-weight:900;color:var(--white);line-height:1.1;}
.about .ab-stat span{display:block;font-size:11px;color:var(--muted-2);margin-top:4px;letter-spacing:.3px;}
.about .ab-plan{display:flex;align-items:baseline;gap:10px;border:1px solid var(--line);
  border-radius:14px;padding:14px;background:rgba(255,255,255,.03);}
.about .ab-plan b{font-size:19px;font-weight:900;color:var(--accent);}
.about .ab-plan span{font-size:13.5px;color:var(--muted);}
.ab-danger{margin-top:10px;padding:11px 16px;border-radius:12px;font-family:inherit;font-size:13.5px;
  font-weight:700;cursor:pointer;color:var(--red);background:color-mix(in srgb,var(--red) 10%,transparent);
  border:1px solid color-mix(in srgb,var(--red) 34%,transparent);}
.ab-danger:hover{background:color-mix(in srgb,var(--red) 16%,transparent);}
.about .ab-foot{font-size:12px;color:var(--muted-2);text-align:center;line-height:1.6;
  padding:14px 0 8px;border-top:1px solid var(--line);margin-top:8px;}
.about a{color:var(--accent);}
.about.legal p{font-size:14px;}
.about.legal .ab-sec h4{color:var(--muted);letter-spacing:1px;}
.about.legal .ab-warn h4{color:var(--gold);}

/* inline jump links in the About copy */
.about .ab-jump{color:var(--accent);text-decoration:none;border-bottom:1px solid
  color-mix(in srgb,var(--accent) 40%,transparent);padding-bottom:1px;}
.about .ab-jump b{color:inherit;}
.about .ab-jump:active{opacity:.7;}

/* All Galleries: a white pill under the mode banner. Deliberately lighter than the
   coloured banners above it -- galleries are a browse destination, not a mode's headline
   call to action -- but the same radius and height family so it reads as a sibling. */
.allgal{display:flex;align-items:center;justify-content:center;gap:9px;cursor:pointer;
  /* shrink-to-fit but never below 70% of the width, so "All Image Galleries" cannot wrap to
     two lines on a 320px phone (it did at a flat 70%) and cannot overflow its container */
  width:fit-content;min-width:min(70%,300px);max-width:100%;white-space:nowrap;
  margin:12px auto 2px;padding:13px 18px;border-radius:15px;
  border:1px solid rgba(255,255,255,.55);background:#f2f6ff;color:#0a1424;
  font-family:inherit;font-size:15px;font-weight:800;letter-spacing:.2px;
  box-shadow:0 6px 18px rgba(0,0,0,.28);transition:filter .15s,transform .12s;
  -webkit-tap-highlight-color:transparent;}
.allgal:hover{filter:brightness(1.04);}
.allgal:active{transform:translateY(1px) scale(.995);}
.allgal svg{width:19px;height:19px;flex:none;}

/* --- galleries index -------------------------------------------------------- */
.galleries .gx-sec{margin:0 0 20px;}
.galleries .gx-cat{font-size:11.5px;font-weight:900;letter-spacing:1.3px;color:var(--sec);
  margin:0 0 9px;}
/* Segmented control: Specialty (default) / Alphabetical */
.galleries .gx-seg{display:flex;gap:4px;padding:4px;margin:2px 0 10px;border-radius:14px;
  border:1px solid var(--line);background:rgba(255,255,255,.03);}
.gx-tab{flex:1;padding:9px 10px;border:0;border-radius:11px;cursor:pointer;background:transparent;
  color:var(--muted);font-family:inherit;font-size:13.5px;font-weight:800;letter-spacing:.2px;
  transition:background .15s,color .15s;-webkit-tap-highlight-color:transparent;}
.gx-tab.on{background:linear-gradient(140deg,var(--accent),var(--accent-2));color:#04121c;}

/* Search */
.galleries .gx-find{display:flex;align-items:center;gap:9px;padding:0 13px;margin:0 0 14px;
  border:1px solid var(--line);border-radius:14px;background:rgba(255,255,255,.04);
  color:var(--muted-2);}
.galleries .gx-find svg{width:17px;height:17px;flex:none;}
.galleries .gx-find input{flex:1;min-width:0;background:transparent;border:0;outline:none;
  color:var(--white);font-family:inherit;font-size:15px;padding:12px 0;}
.galleries .gx-find input::placeholder{color:var(--muted-2);}
.galleries .gx-find input::-webkit-search-cancel-button{filter:invert(.6);}
.galleries .gx-count{font-size:12.5px;color:var(--muted-2);margin:0 0 14px;}
.galleries .gx-count b{color:var(--white);font-weight:800;}
.galleries .empty{padding:26px 0;text-align:center;color:var(--muted);font-size:14px;}

/* One gallery: name row, then all ten thumbnails */
.galleries .gx-sec{margin:0 0 18px;}
.galleries .gx-alpha{--sec:var(--accent);--sec2:var(--accent-2);}
.galleries .gx-cat{font-size:11.5px;font-weight:900;letter-spacing:1.3px;color:var(--sec);margin:0 0 9px;}
.gx-gal{margin:0 0 14px;}
.gx-name{display:flex;align-items:center;gap:8px;width:100%;text-align:left;cursor:pointer;
  padding:0 0 7px;border:0;background:transparent;color:var(--white);font-family:inherit;}
.gx-name span{min-width:0;flex:1 1 auto;}
.gx-name b{display:block;font-size:14.5px;font-weight:800;line-height:1.25;}
.gx-name i{display:block;font-style:normal;font-size:11.5px;color:var(--muted-2);margin-top:2px;}
.gx-name svg{width:16px;height:16px;flex:none;color:var(--muted-2);}
.gx-name:active{opacity:.75;}
/* five across, four on a narrow phone; fixed aspect so a slow image cannot reflow the grid */
.gx-thumbs{display:grid;grid-template-columns:repeat(5,1fr);gap:6px;}
@media (max-width:380px){.gx-thumbs{grid-template-columns:repeat(4,1fr);}}
.gx-th{padding:0;border:1px solid var(--line);border-radius:8px;overflow:hidden;cursor:pointer;
  background:rgba(0,0,0,.3);aspect-ratio:3/4;transition:border-color .15s,transform .12s;
  -webkit-tap-highlight-color:transparent;}
.gx-th:hover{border-color:var(--sec);}
.gx-th:active{transform:scale(.96);}
/* anchored to the top of the page, where the title band is -- the identifying part */
.gx-th img{width:100%;height:100%;object-fit:cover;object-position:top center;display:block;}

/* --- first-run acceptance gate ---------------------------------------------- */
#rc-gate{position:fixed;inset:0;z-index:9999;display:grid;place-items:center;padding:22px;
  background:rgba(2,5,12,.90);-webkit-backdrop-filter:blur(7px);backdrop-filter:blur(7px);}
.rc-gate-card{max-width:430px;width:100%;max-height:88vh;overflow:auto;border-radius:22px;padding:26px 22px;
  background:linear-gradient(180deg,#0b1322,#070d18);border:1px solid var(--line-2);
  box-shadow:0 24px 60px rgba(0,0,0,.6);}
/* document state: the legal text is read INSIDE the lock, so the app is never revealed */
.rc-gate-card.rc-gate-doc{display:flex;flex-direction:column;max-height:88vh;overflow:hidden;padding:0;}
.rc-gate-bar{display:flex;align-items:center;gap:10px;padding:14px 16px;flex:none;
  border-bottom:1px solid var(--line);}
.rc-gate-back{display:flex;align-items:center;gap:5px;border:1px solid var(--line);cursor:pointer;
  background:rgba(255,255,255,.04);color:var(--white);font-family:inherit;font-size:13px;
  font-weight:700;padding:7px 12px 7px 9px;border-radius:11px;}
.rc-gate-back svg{width:16px;height:16px;}
.rc-gate-back:hover{background:rgba(255,255,255,.08);}
.rc-gate-bt{font-size:14.5px;font-weight:800;color:var(--white);}
.rc-gate-scroll{flex:1 1 auto;overflow-y:auto;-webkit-overflow-scrolling:touch;padding:16px;}
.rc-gate-scroll .ab-sec:last-child{margin-bottom:0;}
.rc-gate-note{flex:none;padding:12px 16px;border-top:1px solid var(--line);text-align:center;
  font-size:12.5px;color:var(--muted-2);}
.rc-gate-note b{color:var(--white);}
.rc-gate-logo{text-align:center;margin-bottom:14px;}
.rc-gate-logo img{height:44px;width:auto;}
.rc-gate-card h2{font-size:21px;font-weight:900;color:var(--white);margin:0 0 12px;text-align:center;}
.rc-gate-card p{font-size:14.5px;line-height:1.6;color:var(--muted);margin:0 0 11px;}
.rc-gate-card b{color:var(--white);}
.rc-gate-key{border-left:3px solid var(--gold);padding-left:12px;color:var(--white)!important;}
.rc-gate-fine{font-size:12.5px!important;color:var(--muted-2)!important;}
.rc-gate-card a{color:var(--accent);}
.rc-gate-ok{width:100%;margin-top:8px;padding:15px;border-radius:14px;border:0;cursor:pointer;
  font-family:inherit;font-size:15.5px;font-weight:900;letter-spacing:.3px;color:#04121c;
  background:linear-gradient(140deg,var(--accent),var(--accent-2));}
.rc-gate-ok:active{transform:scale(.99);}

` + '</style>';
done.push('about + gate styles');

/* ------------------------------------------------------- 7. inject code + gate call */

/* Anchor on the LAST '</body></html>': the report engine's buildPdfHtml() emits a whole
   HTML document as a string, so the token is no longer unique in the file. */
(function(){
  const tail = '</body></html>';
  const at = s.lastIndexOf(tail);
  if (at < 0 || at !== s.length - tail.length) {
    console.error('FAIL inject about: file does not end with %s', tail);
    process.exit(1);
  }
  s = s.slice(0, at)
    + ABOUT_CSS
    + ABOUT_JS.replace(/__APP_VERSION__/g, APP_VERSION)
              .replace(/__TERMS_VERSION__/g, TERMS_VERSION)
              .replace(/__CONTACT__/g, CONTACT)
    + LEGAL_JS.replace(/__TERMS_VERSION__/g, TERMS_VERSION)
    + GATE_BOOT
    + tail;
  done.push('inject about + legal code');
})();

fs.writeFileSync(SRC, s);
console.log('applied %d edits:', done.length);
done.forEach(d => console.log('  -', d));
console.log('%s -> %s chars (+%s)', n0, s.length, s.length - n0);
