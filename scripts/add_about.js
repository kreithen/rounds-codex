/* Add the About section and the first-run terms gate. Run AFTER scripts/add_persistence.js.
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
 * TWO THINGS TO CHANGE BEFORE LAUNCH
 *  - RC_CONTACT_EMAIL below is Dr Kreithen's working address, because it is the one we have.
 *    A public "contact us" button in a shipped app should point at a dedicated support
 *    address (support@<the custom domain>) rather than a personal/practice mailbox.
 *  - The terms and privacy text is a careful plain-English draft, NOT legal advice. It needs
 *    a lawyer's review before launch -- more so once there is a paid subscription.
 *
 * Usage: node scripts/add_about.js <index.html>
 */
const fs = require('fs');

const SRC = process.argv[2];
if (!SRC) { console.error('usage: node add_about.js <index.html>'); process.exit(2); }

const CONTACT = 'drjkreithen@sarasota-med.com';
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
 else if(r.v==='privacy'){s.innerHTML=legalHTML('privacy');}`,
  'paint() dispatch for the four views');

/* Keep About lit in the bottom bar while you are inside any of its sub-pages. */
replaceOnce(
  `const activeRoot=(r.v==='detail')?'library':(r.v==='rxdrug')?'rx':(r.v==='resspec'||r.v==='resdetail')?'res':r.v;`,
  `const activeRoot=(r.v==='detail')?'library':(r.v==='rxdrug')?'rx':(r.v==='resspec'||r.v==='resdetail')?'res'
   :(r.v==='account'||r.v==='terms'||r.v==='privacy')?'about':r.v;`,
  'nav highlight for about sub-pages');

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

function aboutHTML(){
  var adv=RC_ADVISORS.map(function(a){
    return '<div class="ab-adv"><div class="ab-avi">'+
      a.name.replace(/[^A-Za-z ]/g,'').trim().split(/\s+/).slice(0,2).map(function(w){return w[0];}).join('')+
      '</div><div><b>'+a.name+'</b><i>'+a.role+'</i><p>'+a.bio+'</p></div></div>';
  }).join('');

  return '<div class="pad about">'+
    aboutHead('About Rounds Codex','Version '+RC_VERSION)+

    '<div class="ab-hero">'+
      '<p class="ab-lede">Rounds Codex is a clinical reference written by a practicing physician for the '+
      'people learning at the bedside &mdash; nursing students, medical students and residents.</p>'+
      '<p>Everything here is built around one idea: when you are on the ward and someone asks you a '+
      'question, you should be able to find the answer in seconds, pitched at your level, and know '+
      'where it came from.</p>'+
    '</div>'+

    '<div class="ab-sec"><h4>What it does</h4>'+
      '<p>The same condition reads differently depending on who is asking, so the app has three modes. '+
      '<b>Nursing</b> leads with assessment, monitoring and patient safety. <b>Medical Student</b> leads '+
      'with pathophysiology, diagnosis and the reasoning behind management. <b>Resident</b> leads with '+
      'what to actually do, by specialty.</p>'+
      '<ul class="ab-list">'+
        '<li><b>'+DATA.length+' conditions</b> across '+ORDER.length+' specialties, each with an illustrated overview</li>'+
        '<li><b>'+Object.keys(GALLERIES).length+' image galleries</b> of original teaching artwork</li>'+
        '<li><b>'+RX_DATA.length+' drugs</b> cross-linked to the conditions they treat</li>'+
        '<li><b>NCLEX-RN</b> and <b>USMLE</b> practice with a full performance report</li>'+
        /* RES_SPECIALTIES has 24 entries but one is inactive; the purple RESIDENT SPECIALTIES
           button says 23, so use the same number rather than contradicting it */
        '<li><b>Resident mode</b> &mdash; the top topics for '+RES_ACTIVE.size+' specialties</li>'+
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
  var marks=RC_STORE.bookmarks().length;
  var quizzes=0, quizBest=0, quizTotal=0;
  Object.keys(QUIZZES).forEach(function(id){
    var r=RC_STORE.quizResult(id);
    if(r){ quizzes++; quizBest+=r.best; quizTotal+=r.total; }
  });
  var attempts=[], dash=null;
  try{ attempts=NCLEX_STORE.listAttempts()||[]; dash=NCLEX_STORE.dashboard(); }catch(e){}

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

    '<div class="ab-sec"><h4>Your study activity</h4>'+
      '<div class="ab-stats">'+stat(marks,'bookmarks')+stat(quizzes,'quizzes taken')+stat(pct,'best first-try')+'</div>'+
      (marks?'':'<p class="ab-fine">Tap the star on any condition to bookmark it.</p>')+
    '</div>'+
    practice+

    '<div class="ab-sec"><h4>Your data</h4>'+
      '<p>Bookmarks, quiz progress and practice results are stored <b>on this device only</b>. They are '+
      'not sent anywhere, and they are not tied to a name or an account. That also means they do not '+
      'follow you to another device, and clearing your browser data clears them.</p>'+
      '<button class="ab-danger" onclick="accountReset()">Clear my saved data</button></div>'+

    '<div class="ab-sec"><h4>Legal</h4>'+
      abRow('<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5"/>','Terms &amp; Conditions',
            'Accepted '+(RC_STORE.termsAcceptedAt()||'—'),"go('terms')")+
      abRow('<rect x="4" y="10" width="16" height="10" rx="2"/><path d="M8 10V7a4 4 0 018 0v3"/>',
            'Privacy','What is stored, and where',"go('privacy')")+
    '</div>'+
  '</div>';
}

function accountReset(){
  if(!window.confirm('Clear bookmarks, quiz progress and practice history on this device? This cannot be undone.')) return;
  try{ RC_STORE.reset(); }catch(e){}
  try{ NCLEX_STORE.resetAll(); }catch(e){}
  toast('Saved data cleared');
  paint();
}

/* ---- terms + privacy ------------------------------------------------------------- */
function legalHTML(which){
  var d=(which==='terms')?RC_LEGAL.terms:RC_LEGAL.privacy;
  var body=d.sections.map(function(sec){
    return '<div class="ab-sec"><h4>'+sec.h+'</h4>'+
      sec.p.map(function(x){return '<p>'+x+'</p>';}).join('')+'</div>';
  }).join('');
  return '<div class="pad about legal">'+
    aboutHead(d.title,'Version '+d.version+' · last updated '+d.updated)+
    '<div class="ab-sec ab-warn"><h4>'+d.keyH+'</h4><p>'+d.key+'</p></div>'+
    body+
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
  if(RC_STORE.termsAccepted()===RC_TERMS_VERSION) return;
  var el=document.createElement('div');
  el.id='rc-gate';
  el.innerHTML='<div class="rc-gate-card" role="dialog" aria-modal="true" aria-labelledby="rc-gate-h">'+
    '<div class="rc-gate-logo"><img src="'+LOGO+'" alt=""></div>'+
    '<h2 id="rc-gate-h">Before you start</h2>'+
    '<p><b>Rounds Codex is for education only.</b> It is not medical advice and it does not replace '+
    'your supervising clinician.</p>'+
    '<p class="rc-gate-key">Anything you do for a real patient must be approved by your attending, '+
    'preceptor or clinical instructor. Always verify doses against a current formulary and follow '+
    'your institution&rsquo;s protocols.</p>'+
    '<p class="rc-gate-fine">Practice scores are not predicted exam scores and not a probability of '+
    'passing. By continuing you agree to the <a href="#" id="rc-gate-terms">Terms &amp; Conditions</a> '+
    'and <a href="#" id="rc-gate-priv">Privacy</a> policy.</p>'+
    '<button class="rc-gate-ok" id="rc-gate-ok">I understand and agree</button></div>';
  document.body.appendChild(el);
  function close(){ var g=document.getElementById('rc-gate'); if(g) g.remove(); }
  el.querySelector('#rc-gate-ok').onclick=function(){
    RC_STORE.acceptTerms(RC_TERMS_VERSION); close();
  };
  /* Reading the documents first must be possible without agreeing first. */
  el.querySelector('#rc-gate-terms').onclick=function(e){ e.preventDefault(); close(); root('terms'); };
  el.querySelector('#rc-gate-priv').onclick=function(e){ e.preventDefault(); close(); root('privacy'); };
}
</script>
`;

/* --------------------------------------------------- 5. store: terms acceptance */

replaceOnce(
  `    reset:function(){ mem={bookmarks:[],quiz:{}}; write(); }`,
  `    /* -- terms acceptance: which version, and when -- */
    termsAccepted:function(){ var t=read().terms; return t?t.version:null; },
    termsAcceptedAt:function(){
      var t=read().terms; if(!t||!t.at) return null;
      try{ return new Date(t.at).toLocaleDateString(); }catch(e){ return null; }
    },
    acceptTerms:function(v){ read().terms={version:v,at:Date.now()}; write(); },

    reset:function(){
      /* deliberately keeps the terms acceptance: clearing study data is not a reason to
         re-consent, and re-prompting would look like a bug */
      var t=read().terms; mem={bookmarks:[],quiz:{},terms:t}; write();
    }`,
  'RC_STORE gains terms acceptance');

/* ------------------------------------------------------------------- 6. the styles */

replaceOnce('/* --- persistence UI ---',
  String.raw`/* --- about + legal ---------------------------------------------------------- */
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

/* --- first-run acceptance gate ---------------------------------------------- */
#rc-gate{position:fixed;inset:0;z-index:9999;display:grid;place-items:center;padding:22px;
  background:rgba(2,5,12,.90);-webkit-backdrop-filter:blur(7px);backdrop-filter:blur(7px);}
.rc-gate-card{max-width:430px;width:100%;max-height:88vh;overflow:auto;border-radius:22px;padding:26px 22px;
  background:linear-gradient(180deg,#0b1322,#070d18);border:1px solid var(--line-2);
  box-shadow:0 24px 60px rgba(0,0,0,.6);}
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

/* --- persistence UI ---`, 'about + gate styles');

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
    + ABOUT_JS.replace(/__APP_VERSION__/g, APP_VERSION)
              .replace(/__TERMS_VERSION__/g, TERMS_VERSION)
              .replace(/__CONTACT__/g, CONTACT)
    + LEGAL_JS.replace(/__TERMS_VERSION__/g, TERMS_VERSION)
    + tail;
  done.push('inject about + legal code');
})();

/* The gate runs once the content is in, so the app behind it is real rather than a
   half-painted shell, and so LOGO and the styles are available. */
replaceOnce(
  `    if(window.RC_ROUTE_BOOT) window.RC_ROUTE_BOOT();   /* then honour a /c/<id> deep link */`,
  `    if(window.RC_ROUTE_BOOT) window.RC_ROUTE_BOOT();   /* then honour a /c/<id> deep link */
    try{ if(typeof rcTermsGate==='function') rcTermsGate(); }catch(e){}`,
  'run the terms gate after content loads');

fs.writeFileSync(SRC, s);
console.log('applied %d edits:', done.length);
done.forEach(d => console.log('  -', d));
console.log('%s -> %s chars (+%s)', n0, s.length, s.length - n0);
