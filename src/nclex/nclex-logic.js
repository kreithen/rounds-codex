// ============================================================================
// nclex-logic.js — Rounds Codex NCLEX-RN practice engine (Phase 4)
// Renders + scores the 150-item bank (const NCLEX_DATA) inside Nursing mode.
// 9 renderers (mc, sata, selectN, matrixMC, matrixMR, cloze, ddTable, pair,
// bowtie) + numeric; 4 scoring models; Study mode + Exam mode (85-item weighted
// forms, 3 unfolding cases/form); category-breakdown results.
//
// Integration mirrors the Rx module: a first-time patcher buildNclexPatched()
// injects CSS + a mount point; the app calls NCLEX.open() from Nursing mode.
// No external deps. ASCII-safe. Self-contained IIFE exposing window.NCLEX.
// ============================================================================
(function(){
  "use strict";

  // ---- config (decisions locked with Dr. K, 2026-07-21) --------------------
  var CFG = {
    examSize: 85,           // items per exam form
    examCases: 3,           // unfolding cases per exam form
    timerDefaultOn: false,  // timer OFF by default; learner can toggle on
    examMinutes: 180,       // ~3 hrs when toggled on (85-item scale of the 5-hr/150 exam)
    studyReveal: "end",     // Study mode reveals rationales at end of the set
    disclaimer: "Educational practice material for Rounds Codex. Not affiliated with " +
                "or endorsed by NCSBN. NCLEX(R) is a registered trademark of NCSBN, Inc. " +
                "Scores are practice feedback only and do not predict NCLEX pass/fail."
  };

  var CATS = ["mgmt","safety","hpm","psych","basic","pharm","risk","physio"];
  var CATNAME = {
    mgmt:"Management of Care", safety:"Safety & Infection Control",
    hpm:"Health Promotion & Maintenance", psych:"Psychosocial Integrity",
    basic:"Basic Care & Comfort", pharm:"Pharmacological Therapies",
    risk:"Reduction of Risk Potential", physio:"Physiological Adaptation"
  };
  // Blueprint weights (the bank's own proportions = official test-plan midpoints).
  var BLUEPRINT = {mgmt:27,safety:20,hpm:14,psych:13,basic:13,pharm:24,risk:18,physio:21};

  // ---- data access ---------------------------------------------------------
  function bank(){ return (typeof NCLEX_DATA !== "undefined" && NCLEX_DATA) || window.NCLEX_DATA || []; }
  function byId(){
    var m={}; bank().forEach(function(it){ m[it.id]=it; }); return m;
  }
  function cases(){
    // group case items by caseId, ordered by step
    var g={};
    bank().forEach(function(it){
      if(!it.caseId) return;
      (g[it.caseId]=g[it.caseId]||[]).push(it);
    });
    Object.keys(g).forEach(function(k){ g[k].sort(function(a,b){return (a.step||0)-(b.step||0);}); });
    return g;
  }
  function standalones(){ return bank().filter(function(it){ return !it.caseId; }); }

  // ---- utilities -----------------------------------------------------------
  function esc(s){ return String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }
  function letter(i){ return String.fromCharCode(65+i); }
  function shuffle(a){ a=a.slice(); for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)); var t=a[i];a[i]=a[j];a[j]=t;} return a; }
  function sameSet(a,b){ if(a.length!==b.length)return false; var x=a.slice().sort(),y=b.slice().sort(); for(var i=0;i<x.length;i++)if(x[i]!==y[i])return false; return true; }
  function sum(o){ var s=0; for(var k in o) s+=o[k]; return s; }

  // ============================================================================
  // WEIGHTED EXAM FORM GENERATION
  // Build an 85-item form: exactly examCases unfolding cases (all their steps),
  // then fill the remaining slots with standalone items drawn proportionally to
  // the blueprint. Deterministic count math, randomized selection.
  // ============================================================================
  function buildExamForm(){
    var caseMap = cases();
    var caseIds = shuffle(Object.keys(caseMap)).slice(0, CFG.examCases);
    var form = [];
    var caseCatCount = {}; CATS.forEach(function(c){caseCatCount[c]=0;});
    caseIds.forEach(function(cid){
      caseMap[cid].forEach(function(it){ form.push(it); caseCatCount[it.cat]=(caseCatCount[it.cat]||0)+1; });
    });

    var remaining = CFG.examSize - form.length;           // standalone slots to fill
    // Target standalone-per-category = blueprint share of the remaining slots,
    // minus what the chosen cases already contributed (floored at 0).
    var totalWeight = sum(BLUEPRINT);
    var target = {};
    CATS.forEach(function(c){
      var ideal = Math.round(BLUEPRINT[c]/totalWeight * CFG.examSize);
      target[c] = Math.max(0, ideal - caseCatCount[c]);
    });
    // Reconcile rounding drift so sum(target) === remaining.
    reconcile(target, remaining);

    // Draw standalone items per category.
    var pool = {}; CATS.forEach(function(c){ pool[c]=[]; });
    standalones().forEach(function(it){ pool[it.cat].push(it); });
    var used = {};
    CATS.forEach(function(c){
      var want = target[c];
      var avail = shuffle(pool[c]);
      for(var i=0;i<want && i<avail.length;i++){ form.push(avail[i]); used[avail[i].id]=1; }
    });
    // If any category was short on standalones, backfill from any unused standalone.
    if(form.length < CFG.examSize){
      var leftovers = shuffle(standalones().filter(function(it){return !used[it.id];}));
      for(var j=0; form.length<CFG.examSize && j<leftovers.length; j++) form.push(leftovers[j]);
    }
    // Order: case blocks first (steps kept together, as learners expect), then
    // standalones shuffled among themselves.
    var caseItems=[], standaloneItems=[];
    form.forEach(function(it){ if(it.caseId) caseItems.push(it); else standaloneItems.push(it); });
    return caseItems.concat(shuffle(standaloneItems));
  }

  // Adjust an integer target map so its values sum to `goal`, keeping values >=0.
  function reconcile(target, goal){
    var s = sum(target);
    var keys = CATS.slice();
    while(s < goal){ // add to the biggest-weight cats first
      keys.sort(function(a,b){return BLUEPRINT[b]-BLUEPRINT[a];});
      target[keys[(goal-s-1)%keys.length]]++; s++;
    }
    while(s > goal){ // trim from the smallest current contributors that are >0
      var trimmable = keys.filter(function(c){return target[c]>0;})
                          .sort(function(a,b){return target[a]-target[b];});
      if(!trimmable.length) break;
      target[trimmable[0]]--; s--;
    }
  }

  // expose internals we will extend in later parts
  window.NCLEX = window.NCLEX || {};
  window.NCLEX._internal = {
    CFG:CFG, CATS:CATS, CATNAME:CATNAME, BLUEPRINT:BLUEPRINT,
    bank:bank, byId:byId, cases:cases, standalones:standalones,
    esc:esc, letter:letter, shuffle:shuffle, sameSet:sameSet, sum:sum,
    buildExamForm:buildExamForm, reconcile:reconcile
  };

})();

// ============================================================================
// PART 2 — RENDERERS (9 types + numeric) and SCORERS (4 models)
// A "response" object holds the learner's current selection for one item.
// Renderers produce HTML into a container and wire input events that mutate the
// response. Scorers read (item, response) and return {credit, max, correct}.
//   credit/max express NGN partial credit; correct is the boolean "fully right".
// Scoring models (per spec):
//   mc: 0/1 (all-or-nothing)
//   +/- floor 0: sata, selectN, matrixMR  (each correct pick +1, each wrong -1, floor 0, cap = #correct)
//   0/1 per cell: cloze, ddTable, matrixMC (each blank/row independently right)
//   bowtie: max 5 (2 actions + 1 condition + 2 params, each cell 0/1)
//   pair: dyad — both parts right = 1 else 0
//   numeric: exact within tolerance = 1 else 0
// ============================================================================
(function(){
  "use strict";
  var I = window.NCLEX._internal;
  var esc=I.esc, letter=I.letter, sameSet=I.sameSet;

  // response factory: neutral empty state per item type
  function newResponse(it){
    switch(it.type){
      case "mc": return {pick:null};
      case "sata": case "selectN": return {picks:[]};
      case "matrixMC": return {rows:{}};                 // rowIndex -> colIndex
      case "matrixMR": return {rows:{}};                 // rowIndex -> [colIndex]
      case "cloze": return {blanks:{}};                  // blankIndex -> optIndex
      case "ddTable": return {rows:{}};                  // rowIndex -> optIndex
      case "pair": return {first:null, second:null};
      case "bowtie": return {a:[], c:null, p:[]};
      case "numeric": return {val:null};
      default: return {};
    }
  }

  // ---------- RENDERERS -------------------------------------------------------
  // Each returns nothing; it fills `mount` and mutates `resp` on input.
  // `locked` (bool) disables inputs and paints correctness when true.
  var R = {};

  function optionRow(txt, i, opts){
    // opts: {multi, selected, correct, incorrect, locked, onclick}
    var cls = "nx-opt" + (opts.multi?"":" nx-radio")
            + (opts.selected?" nx-sel":"")
            + (opts.correct?" nx-correct":"")
            + (opts.incorrect?" nx-incorrect":"");
    var mark = opts.correct ? "\u2713" : opts.incorrect ? "\u2717"
             : opts.selected ? (opts.multi?"\u2713":"\u25cf") : "";
    var div = document.createElement("div");
    div.className = cls;
    div.innerHTML = '<span class="nx-box">'+mark+'</span>'
                  + '<span class="nx-optt"><b>'+letter(i)+'.</b> '+esc(txt)+'</span>';
    if(!opts.locked && opts.onclick) div.onclick = opts.onclick;
    return div;
  }

  R.mc = function(it, resp, mount, locked){
    mount.innerHTML="";
    it.opts.forEach(function(txt,i){
      mount.appendChild(optionRow(txt,i,{
        multi:false, selected:resp.pick===i, locked:locked,
        correct: locked && it.key===i,
        incorrect: locked && resp.pick===i && it.key!==i,
        onclick:function(){ resp.pick=i; R.mc(it,resp,mount,false); }
      }));
    });
  };

  function multiRender(it, resp, mount, locked){
    mount.innerHTML="";
    var key = it.key;
    it.opts.forEach(function(txt,i){
      var sel = resp.picks.indexOf(i)>=0;
      mount.appendChild(optionRow(txt,i,{
        multi:true, selected:sel, locked:locked,
        correct: locked && key.indexOf(i)>=0,
        incorrect: locked && sel && key.indexOf(i)<0,
        onclick:function(){
          var k=resp.picks.indexOf(i); if(k>=0)resp.picks.splice(k,1); else resp.picks.push(i);
          multiRender(it,resp,mount,false);
        }
      }));
    });
  }
  R.sata = multiRender;
  R.selectN = function(it,resp,mount,locked){
    multiRender(it,resp,mount,locked);
    if(!locked && it.n){
      var h=document.createElement("div"); h.className="nx-hint";
      h.textContent="Select "+it.n+".";
      mount.insertBefore(h, mount.firstChild);
    }
  };

  function matrixTable(it, cols){
    var t=document.createElement("table"); t.className="nx-matrix";
    var hr=document.createElement("tr");
    hr.appendChild(cell("th","Finding"));
    cols.forEach(function(c){ hr.appendChild(cell("th",c)); });
    t.appendChild(hr);
    return t;
  }
  function cell(tag,txt){ var e=document.createElement(tag); e.innerHTML=esc(txt); return e; }

  R.matrixMC = function(it, resp, mount, locked){
    mount.innerHTML="";
    var t=matrixTable(it,it.cols);
    it.rows.forEach(function(rowTxt,ri){
      var tr=document.createElement("tr");
      tr.appendChild(cell("td",rowTxt));
      it.cols.forEach(function(colTxt,ci){
        var chosen = resp.rows[ri]===ci;
        var td=document.createElement("td");
        td.className="nx-pick"
          +(chosen?" nx-sel":"")
          +(locked&&it.key[ri]===ci?" nx-correct":"")
          +(locked&&chosen&&it.key[ri]!==ci?" nx-incorrect":"");
        td.textContent = locked&&it.key[ri]===ci ? "\u2713"
                        : locked&&chosen ? "\u2717" : chosen ? "\u25cf" : "";
        if(!locked) td.onclick=function(){ resp.rows[ri]=ci; R.matrixMC(it,resp,mount,false); };
        tr.appendChild(td);
      });
      t.appendChild(tr);
    });
    if(!locked) mount.appendChild(hint("Select one column per row."));
    mount.appendChild(t);
  };

  R.matrixMR = function(it, resp, mount, locked){
    mount.innerHTML="";
    var t=matrixTable(it,it.cols);
    it.rows.forEach(function(rowTxt,ri){
      if(!resp.rows[ri]) resp.rows[ri]=[];
      var tr=document.createElement("tr");
      tr.appendChild(cell("td",rowTxt));
      it.cols.forEach(function(colTxt,ci){
        var chosen = resp.rows[ri].indexOf(ci)>=0;
        var isKey = it.key[ri].indexOf(ci)>=0;
        var td=document.createElement("td");
        td.className="nx-pick"
          +(chosen?" nx-sel":"")
          +(locked&&isKey?" nx-correct":"")
          +(locked&&chosen&&!isKey?" nx-incorrect":"");
        td.textContent = locked&&isKey ? "\u2713" : locked&&chosen ? "\u2717"
                        : chosen ? "\u2713" : "";
        if(!locked) td.onclick=function(){
          var k=resp.rows[ri].indexOf(ci); if(k>=0)resp.rows[ri].splice(k,1); else resp.rows[ri].push(ci);
          R.matrixMR(it,resp,mount,false);
        };
        tr.appendChild(td);
      });
      t.appendChild(tr);
    });
    if(!locked) mount.appendChild(hint("Select all that apply in each row."));
    mount.appendChild(t);
  };

  R.cloze = function(it, resp, mount, locked){
    mount.innerHTML="";
    it.blanks.forEach(function(b,bi){
      var line=document.createElement("div"); line.className="nx-blankline";
      line.appendChild(txt('<span class="nx-blabel">Blank '+esc(b.label)+':</span> '));
      var sel=makeSelect(b.opts, resp.blanks[bi], locked, function(v){ resp.blanks[bi]=v; });
      line.appendChild(sel);
      if(locked){ line.appendChild(mark(parseInt(resp.blanks[bi],10)===b.key, b.opts[b.key])); }
      mount.appendChild(line);
    });
  };

  R.ddTable = function(it, resp, mount, locked){
    mount.innerHTML="";
    if(!locked) mount.appendChild(hint("Match each item to the correct option."));
    var t=document.createElement("table"); t.className="nx-matrix";
    var hr=document.createElement("tr"); hr.appendChild(cell("th","Item")); hr.appendChild(cell("th","Selection")); t.appendChild(hr);
    it.rows.forEach(function(row,ri){
      var tr=document.createElement("tr");
      tr.appendChild(cell("td",row.label));
      var td=document.createElement("td");
      var sel=makeSelect(row.opts, resp.rows[ri], locked, function(v){ resp.rows[ri]=v; });
      td.appendChild(sel);
      if(locked) td.appendChild(mark(parseInt(resp.rows[ri],10)===row.key, row.opts[row.key]));
      tr.appendChild(td); t.appendChild(tr);
    });
    mount.appendChild(t);
  };

  R.pair = function(it, resp, mount, locked){
    mount.innerHTML="";
    [["first",it.pair.first],["second",it.pair.second]].forEach(function(pp){
      var which=pp[0], p=pp[1];
      var line=document.createElement("div"); line.className="nx-blankline";
      line.appendChild(txt('<span class="nx-blabel">'+esc(p.label)+':</span> '));
      var sel=makeSelect(p.opts, resp[which], locked, function(v){ resp[which]=v; });
      line.appendChild(sel);
      if(locked) line.appendChild(mark(parseInt(resp[which],10)===p.key, p.opts[p.key]));
      mount.appendChild(line);
    });
  };

  R.bowtie = function(it, resp, mount, locked){
    mount.innerHTML="";
    var bt=it.bowtie;
    var rerender=function(){ R.bowtie(it,resp,mount,false); };
    var grid=document.createElement("div"); grid.className="nx-bowtie";
    grid.appendChild(bowCol("Actions to take (2)", bt.actions, resp, "a", true,  bt.keyA, null,   locked, rerender));
    grid.appendChild(bowCol("Condition (1)",       bt.conds,   resp, "c", false, null,    bt.keyC, locked, rerender));
    grid.appendChild(bowCol("Parameters to monitor (2)", bt.params, resp, "p", true, bt.keyP, null, locked, rerender));
    mount.appendChild(grid);
  };

  // resp[field] is an array (multi) or a scalar/null (single)
  function bowCol(title, opts, resp, field, multi, keyArr, keyOne, locked, rerender){
    var col=document.createElement("div"); col.className="nx-bcol";
    var h=document.createElement("h4"); h.textContent=title; col.appendChild(h);
    var state=resp[field];
    opts.forEach(function(txt,i){
      var sel = multi ? state.indexOf(i)>=0 : state===i;
      var isKey = multi ? keyArr.indexOf(i)>=0 : keyOne===i;
      col.appendChild(optionRow(txt,i,{
        multi:multi, selected:sel, locked:locked,
        correct: locked && isKey,
        incorrect: locked && sel && !isKey,
        onclick:function(){
          if(multi){ var k=state.indexOf(i); if(k>=0)state.splice(k,1); else state.push(i); }
          else { resp[field] = (state===i ? null : i); }
          rerender();
        }
      }));
    });
    return col;
  }

  R.numeric = function(it, resp, mount, locked){
    mount.innerHTML="";
    var w=document.createElement("div"); w.className="nx-numwrap";
    var inp=document.createElement("input");
    inp.type="number"; inp.step="any"; inp.placeholder="answer";
    if(resp.val!=null) inp.value=resp.val;
    inp.disabled=!!locked;
    inp.oninput=function(){ resp.val = inp.value===""?null:parseFloat(inp.value); };
    w.appendChild(inp);
    var u=document.createElement("span"); u.className="nx-unit"; u.textContent=it.numeric.unit; w.appendChild(u);
    mount.appendChild(w);
    if(locked){
      var ok=resp.val!=null && Math.abs(resp.val-it.numeric.answer)<=(it.numeric.tol||0)+1e-9;
      mount.appendChild(mark(ok, it.numeric.answer+" "+it.numeric.unit));
    }
  };

  // small DOM helpers
  function hint(t){ var d=document.createElement("div"); d.className="nx-hint"; d.textContent=t; return d; }
  function txt(html){ var s=document.createElement("span"); s.innerHTML=html; return s; }
  function makeSelect(opts, val, locked, onchange){
    var sel=document.createElement("select"); sel.className="nx-select";
    sel.appendChild(new Option("— choose —",""));
    opts.forEach(function(o,oi){ sel.appendChild(new Option(o,oi)); });
    if(val!=null) sel.value=val;
    sel.disabled=!!locked;
    sel.onchange=function(){ onchange(sel.value===""?null:parseInt(sel.value,10)); };
    return sel;
  }
  function mark(ok, correctTxt){
    var s=document.createElement("span"); s.className="nx-mark "+(ok?"nx-mgood":"nx-mbad");
    s.textContent = ok ? " \u2713" : " \u2717 correct: "+correctTxt;
    return s;
  }

  // ---------- SCORERS ---------------------------------------------------------
  // return {credit, max, correct}
  var SC = {};
  SC.mc = function(it,r){ var ok=r.pick===it.key; return {credit:ok?1:0, max:1, correct:ok}; };

  function plusMinus(it,r){ // sata, selectN, matrixMR-per-row style over a flat pick set
    var key=it.key, picks=r.picks||[];
    var pos = picks.filter(function(i){return key.indexOf(i)>=0;}).length;
    var neg = picks.filter(function(i){return key.indexOf(i)<0;}).length;
    var credit = Math.max(0, pos-neg);
    return {credit:credit, max:key.length, correct:sameSet(picks,key)};
  }
  SC.sata = plusMinus;
  SC.selectN = plusMinus;

  SC.matrixMR = function(it,r){
    // +/- within each row, floored 0, summed; max = total correct cells
    var credit=0, max=0, allRight=true;
    it.rows.forEach(function(_,ri){
      var key=it.key[ri], picks=r.rows[ri]||[];
      var pos=picks.filter(function(i){return key.indexOf(i)>=0;}).length;
      var neg=picks.filter(function(i){return key.indexOf(i)<0;}).length;
      credit += Math.max(0,pos-neg); max += key.length;
      if(!sameSet(picks,key)) allRight=false;
    });
    return {credit:credit, max:max, correct:allRight};
  };

  SC.matrixMC = function(it,r){ // 0/1 per row
    var credit=0, max=it.rows.length, allRight=true;
    it.rows.forEach(function(_,ri){ if(r.rows[ri]===it.key[ri]) credit++; else allRight=false; });
    return {credit:credit, max:max, correct:allRight};
  };

  SC.cloze = function(it,r){ // 0/1 per blank
    var credit=0, max=it.blanks.length, allRight=true;
    it.blanks.forEach(function(b,bi){ if(parseInt(r.blanks[bi],10)===b.key) credit++; else allRight=false; });
    return {credit:credit, max:max, correct:allRight};
  };

  SC.ddTable = function(it,r){ // 0/1 per row
    var credit=0, max=it.rows.length, allRight=true;
    it.rows.forEach(function(row,ri){ if(parseInt(r.rows[ri],10)===row.key) credit++; else allRight=false; });
    return {credit:credit, max:max, correct:allRight};
  };

  SC.pair = function(it,r){ // dyad: both or nothing
    var a=parseInt(r.first,10)===it.pair.first.key;
    var b=parseInt(r.second,10)===it.pair.second.key;
    var ok=a&&b; return {credit:ok?1:0, max:1, correct:ok};
  };

  SC.bowtie = function(it,r){ // max 5: 2 actions + 1 condition + 2 params, 0/1 per cell
    var bt=it.bowtie, credit=0;
    bt.keyA.forEach(function(k){ if(r.a.indexOf(k)>=0) credit++; });
    // penalize extra wrong action/param picks by capping at correct-count (no negative)
    var aWrong = r.a.filter(function(i){return bt.keyA.indexOf(i)<0;}).length;
    var pWrong = r.p.filter(function(i){return bt.keyP.indexOf(i)<0;}).length;
    credit = Math.max(0, credit - aWrong);
    if(r.c===bt.keyC) credit++;
    var pc=0; bt.keyP.forEach(function(k){ if(r.p.indexOf(k)>=0) pc++; });
    credit += Math.max(0, pc - pWrong);
    var correct = I.sameSet(r.a,bt.keyA) && r.c===bt.keyC && I.sameSet(r.p,bt.keyP);
    return {credit:Math.max(0,Math.min(5,credit)), max:5, correct:correct};
  };

  SC.numeric = function(it,r){
    var ok = r.val!=null && Math.abs(r.val-it.numeric.answer)<=(it.numeric.tol||0)+1e-9;
    return {credit:ok?1:0, max:1, correct:ok};
  };

  // expose
  window.NCLEX._internal.newResponse=newResponse;
  window.NCLEX._internal.R=R;
  window.NCLEX._internal.SC=SC;
})();

// ============================================================================
// PART 3 — SESSION CONTROLLER (Study + Exam), navigation, results
// ============================================================================
(function(){
  "use strict";
  var I = window.NCLEX._internal;
  var esc=I.esc, CFG=I.CFG, CATS=I.CATS, CATNAME=I.CATNAME;

  var root=null;       // mount element for the whole module
  var session=null;    // {mode, items, responses, pos, revealed, startTs, timer}

  function h(tag,cls,html){ var e=document.createElement(tag); if(cls)e.className=cls; if(html!=null)e.innerHTML=html; return e; }

  // ---- entry points ----------------------------------------------------------
  function mount(el){ root=el; home(); }

  function home(){
    session=null;
    root.innerHTML="";
    var wrap=h("div","nx-wrap");
    // Top-level back button returns to the host app (USMLE-style full-screen exit).
    // Only shown when the host registered an exit hook via NCLEX.open(onExit).
    if(window.NCLEX._internal.hasExit && window.NCLEX._internal.hasExit()){
      var top=h("div","nx-topbar");
      top.appendChild(backBtn(function(){ window.NCLEX.close(); }));
      wrap.appendChild(top);
    }
    wrap.appendChild(h("div","nx-eyebrow","Nursing &middot; NCLEX-RN practice"));
    wrap.appendChild(h("h2","nx-title","Practice the way the exam actually thinks."));
    wrap.appendChild(h("p","nx-lede","150 NGN-style items across all eight patient-need categories, "
      + "with five unfolding cases that follow the NCSBN Clinical Judgment steps. "
      + "Study to learn, or take a weighted "+CFG.examSize+"-item exam form."));

    var modes=h("div","nx-modecards");

    // Resume card appears only when an attempt was saved via "Save & exit".
    var saved = window.NCLEX._internal.Storage && window.NCLEX._internal.Storage.load();
    if(saved && saved.items){
      var answered=0;
      saved.items.forEach(function(it,i){
        if(window.NCLEX_REPORT && window.NCLEX_REPORT.isAnswered(it, saved.responses[i])) answered++;
      });
      var rc=h("div","nx-modecard nx-resume");
      rc.appendChild(h("h3",null,"Resume your test"));
      rc.appendChild(h("p",null,"You have a saved "+(saved.mode==="exam"?"exam form":"study set")
        +" in progress — "+answered+" of "+saved.items.length+" items answered."));
      var rb=h("button","nx-btn nx-primary","Resume where I left off");
      rb.onclick=function(){
        session = saved;
        window.NCLEX._internal.Storage.clear();
        if(session.timed) startTimer();
        renderItem();
      };
      rc.appendChild(rb);
      var db=h("button","nx-btn","Discard");
      db.onclick=function(){ window.NCLEX._internal.Storage.clear(); home(); };
      rc.appendChild(db);
      modes.appendChild(rc);
    }

    modes.appendChild(modeCard("Study mode",
      "Work through items by category or item type. Answers and rationales reveal at the end of the set.",
      "Start studying", function(){ startStudy(); }));
    modes.appendChild(modeCard("Exam mode",
      CFG.examSize+" items drawn on the test-plan blueprint, including "+CFG.examCases+" unfolding cases. "
      + "Untimed by default; you can turn on a "+Math.round(CFG.examMinutes/60)+"-hour timer.",
      "Start exam form", function(){ startExamSetup(); }));
    wrap.appendChild(modes);
    wrap.appendChild(disclaimerEl());
    root.appendChild(wrap);
  }

  function modeCard(title,desc,btn,onclick){
    var c=h("div","nx-modecard");
    c.appendChild(h("h3",null,esc(title)));
    c.appendChild(h("p",null,esc(desc)));
    var b=h("button","nx-btn nx-primary",esc(btn)); b.onclick=onclick;
    c.appendChild(b);
    return c;
  }
  function disclaimerEl(){ return h("div","nx-disclaimer",esc(CFG.disclaimer)); }

  // ---- STUDY setup (choose a filter) ----------------------------------------
  function startStudy(){
    root.innerHTML="";
    var wrap=h("div","nx-wrap");
    wrap.appendChild(backBtn(home));
    wrap.appendChild(h("h2","nx-title","Study mode"));
    wrap.appendChild(h("p","nx-lede","Choose a set. Rationales reveal when you finish."));

    var byCat=h("div","nx-setgrid");
    byCat.appendChild(h("div","nx-setlabel","By category"));
    CATS.forEach(function(c){
      var n=I.bank().filter(function(it){return it.cat===c;}).length;
      var b=h("button","nx-chip",esc(CATNAME[c])+" <span class='nx-chipn'>"+n+"</span>");
      b.onclick=function(){ launch("study", I.bank().filter(function(it){return it.cat===c;}), CATNAME[c]); };
      byCat.appendChild(b);
    });
    wrap.appendChild(byCat);

    var extra=h("div","nx-setgrid");
    extra.appendChild(h("div","nx-setlabel","Special sets"));
    var allCases=I.bank().filter(function(it){return it.caseId;});
    var bc=h("button","nx-chip","Unfolding cases <span class='nx-chipn'>"+allCases.length+"</span>");
    bc.onclick=function(){ launch("study", orderCases(allCases), "Unfolding cases"); };
    extra.appendChild(bc);
    var ball=h("button","nx-chip","Full bank <span class='nx-chipn'>"+I.bank().length+"</span>");
    ball.onclick=function(){ launch("study", I.bank().slice(), "Full bank"); };
    extra.appendChild(ball);
    wrap.appendChild(extra);
    root.appendChild(wrap);
  }
  function orderCases(items){
    // keep case steps together and in order; cases sorted by caseId
    var g={}; items.forEach(function(it){ (g[it.caseId]=g[it.caseId]||[]).push(it); });
    var out=[]; Object.keys(g).sort().forEach(function(k){
      g[k].sort(function(a,b){return (a.step||0)-(b.step||0);}); out=out.concat(g[k]);
    });
    return out;
  }

  // ---- EXAM setup (timer toggle) --------------------------------------------
  function startExamSetup(){
    root.innerHTML="";
    var wrap=h("div","nx-wrap");
    wrap.appendChild(backBtn(home));
    wrap.appendChild(h("h2","nx-title","Exam form"));
    wrap.appendChild(h("p","nx-lede",CFG.examSize+" items on the blueprint, "+CFG.examCases
      +" unfolding cases. You'll see your score and a category breakdown at the end."));

    var opt=h("div","nx-examopt");
    var lbl=h("label","nx-toggle");
    var cb=h("input"); cb.type="checkbox"; cb.checked=CFG.timerDefaultOn;
    lbl.appendChild(cb);
    lbl.appendChild(h("span",null,"Timed ("+Math.round(CFG.examMinutes/60)+" hours) — off by default"));
    opt.appendChild(lbl);
    wrap.appendChild(opt);

    var b=h("button","nx-btn nx-primary","Begin exam form");
    b.onclick=function(){ launch("exam", I.buildExamForm(), "Exam form", {timed:cb.checked}); };
    wrap.appendChild(b);
    root.appendChild(wrap);
  }

  // ---- launch a session ------------------------------------------------------
  function launch(mode, items, label, opts){
    opts=opts||{};
    session={
      mode:mode, items:items, label:label, pos:0,
      responses:items.map(function(it){ return I.newResponse(it); }),
      locked:items.map(function(){ return false; }),   // study: per-item lock after end; exam: unlocked until submit
      timed: !!opts.timed, startTs:Date.now(), remaining: opts.timed?CFG.examMinutes*60:null,
      submitted:false
    };
    if(session.timed) startTimer();
    renderItem();
  }

  var timerHandle=null;
  function startTimer(){
    stopTimer();
    timerHandle=setInterval(function(){
      if(!session||!session.timed||session.submitted) return stopTimer();
      session.remaining--;
      var t=document.getElementById("nx-timer");
      if(t) t.textContent = fmtTime(session.remaining);
      if(session.remaining<=0){ stopTimer(); /* soft: no auto-submit, just show 0 and a note */
        var t2=document.getElementById("nx-timer"); if(t2){ t2.textContent="0:00:00"; t2.classList.add("nx-timeup"); }
      }
    },1000);
  }
  function stopTimer(){ if(timerHandle){ clearInterval(timerHandle); timerHandle=null; } }
  function fmtTime(s){ s=Math.max(0,s); var hh=Math.floor(s/3600),mm=Math.floor((s%3600)/60),ss=s%60;
    return hh+":"+String(mm).padStart(2,"0")+":"+String(ss).padStart(2,"0"); }

  // ---- render one item -------------------------------------------------------
  function renderItem(){
    root.innerHTML="";
    var it=session.items[session.pos];
    var resp=session.responses[session.pos];
    var locked=session.locked[session.pos];

    var wrap=h("div","nx-wrap nx-runner");
    // top bar
    var bar=h("div","nx-topbar");
    bar.appendChild(backBtn(confirmQuit));
    var prog=h("div","nx-progress");
    prog.textContent=(session.mode==="exam"?"Exam":"Study")+" &middot; "+(session.pos+1)+" of "+session.items.length;
    prog.innerHTML=(session.mode==="exam"?"Exam":"Study")+" &middot; "+(session.pos+1)+" / "+session.items.length;
    bar.appendChild(prog);
    if(session.timed){ var tm=h("div","nx-timerbox"); tm.innerHTML='Time <b id="nx-timer">'+fmtTime(session.remaining)+"</b>"; bar.appendChild(tm); }
    wrap.appendChild(bar);
    wrap.appendChild(progressBar(session.pos+1, session.items.length));

    // card
    var card=h("div","nx-card");
    card.appendChild(h("div","nx-qtype", esc(it.type) + (it.step?(" &middot; case step "+it.step+" of 6"):"")));
    var tags=h("div","nx-tags");
    tags.appendChild(h("span","nx-tag",esc(CATNAME[it.cat]||it.cat)));
    tags.appendChild(h("span","nx-tag","difficulty "+it.diff));
    if(it.caseId) tags.appendChild(h("span","nx-tag nx-tagcase",esc(it.caseId)));
    card.appendChild(tags);

    if(it.chart) card.appendChild(chartEl(it.chart));
    card.appendChild(h("div","nx-stem",esc(it.stem)));

    var mountBox=h("div","nx-answer");
    I.R[it.type](it, resp, mountBox, locked);
    card.appendChild(mountBox);

    // per-item feedback (study shows only after set end -> when locked; exam never mid-run)
    if(locked && session.mode==="study"){
      card.appendChild(feedbackEl(it, resp));
    }
    wrap.appendChild(card);

    // nav
    var nav=h("div","nx-nav");
    var prev=h("button","nx-btn","&larr; Previous"); prev.disabled=session.pos<=0;
    prev.onclick=function(){ if(session.pos>0){session.pos--; renderItem();} };
    nav.appendChild(prev);

    if(session.pos < session.items.length-1){
      var next=h("button","nx-btn nx-primary","Next &rarr;");
      next.onclick=function(){ session.pos++; renderItem(); };
      nav.appendChild(next);
    } else {
      var fin=h("button","nx-btn nx-primary", session.mode==="exam"?"Submit exam":"Finish & review");
      fin.onclick=finish;
      nav.appendChild(fin);
    }
    wrap.appendChild(nav);

    // jump strip
    wrap.appendChild(jumpStrip());
    root.appendChild(wrap);
  }

  function progressBar(n,total){
    var box=h("div","nx-pbar"); var fill=h("div","nx-pfill"); fill.style.width=(100*n/total)+"%";
    box.appendChild(fill); return box;
  }

  function chartEl(chart){
    var box=h("div","nx-chart");
    var tabs=h("div","nx-charttabs"), body=h("div","nx-chartbody");
    (chart.tabs||[]).forEach(function(tab,i){
      var t=h("div","nx-charttab"+(i===0?" nx-active":""),esc(tab.t));
      t.onclick=function(){
        Array.prototype.forEach.call(tabs.children,function(c){c.classList.remove("nx-active");});
        t.classList.add("nx-active"); body.textContent=tab.body;
      };
      tabs.appendChild(t);
    });
    if(chart.tabs&&chart.tabs.length) body.textContent=chart.tabs[0].body;
    box.appendChild(tabs); box.appendChild(body); return box;
  }

  function feedbackEl(it, resp){
    var res=I.SC[it.type](it,resp);
    var box=h("div","nx-feedback "+(res.correct?"nx-fbgood":(res.credit>0?"nx-fbpart":"nx-fbbad")));
    var head=res.correct?"Correct": (res.credit>0? "Partial credit":"Not correct");
    box.appendChild(h("div","nx-fbhead", head+" &middot; "+res.credit+"/"+res.max));
    var rat=h("div","nx-rationale");
    rat.appendChild(h("h5",null,"Rationale"));
    rat.appendChild(h("div",null,esc(it.rationale)));
    if(it.src&&it.src.length){
      rat.appendChild(h("div","nx-src","Sources: "+it.src.map(function(u){
        return '<a href="'+esc(u)+'" target="_blank" rel="noopener">'+esc(u)+"</a>"; }).join("  &middot;  ")));
    }
    box.appendChild(rat);
    return box;
  }

  function jumpStrip(){
    var strip=h("div","nx-jumpstrip");
    session.items.forEach(function(it,i){
      var answered=isAnswered(it, session.responses[i]);
      var d=h("button","nx-dot"+(i===session.pos?" nx-dotcur":"")+(answered?" nx-dotdone":""), String(i+1));
      d.title=(it.caseId?"case ":"")+CATNAME[it.cat];
      d.onclick=function(){ session.pos=i; renderItem(); };
      strip.appendChild(d);
    });
    return strip;
  }
  function isAnswered(it,r){
    switch(it.type){
      case "mc": return r.pick!=null;
      case "sata": case "selectN": return r.picks.length>0;
      case "matrixMC": case "ddTable": return Object.keys(r.rows).length>0;
      case "matrixMR": return Object.keys(r.rows).some(function(k){return (r.rows[k]||[]).length>0;});
      case "cloze": return Object.keys(r.blanks).length>0;
      case "pair": return r.first!=null||r.second!=null;
      case "bowtie": return r.a.length>0||r.c!=null||r.p.length>0;
      case "numeric": return r.val!=null;
      default: return false;
    }
  }

  // ---- finish / results ------------------------------------------------------
  function finish(){
    stopTimer();
    session.submitted=true;
    if(session.mode==="study"){
      // lock every item so rationales reveal on review
      session.locked=session.items.map(function(){return true;});
      session.pos=0;
    }
    showReport(false);
  }

  /**
   * Render the full performance report (nclex-report.js). `partial` is true when the
   * learner exited mid-test, in which case only attempted items are scored.
   * Falls back to the legacy summary if the report module isn't loaded.
   */
  function showReport(partial){
    var RPT = window.NCLEX_REPORT;
    if(!RPT){ return renderResults(session.mode==="study"); }   // graceful fallback
    RPT.injectCSS(document);
    var model = RPT.build(session, I_SC(), partial);
    // Persist to attempt history (no-op if the store module isn't loaded).
    try { Storage.record && Storage.record(session, model); } catch(e){}
    root.innerHTML="";
    RPT.render(model, root, {
      onReviewMisses: function(missIdx){
        // lock everything so rationales show, then walk only the missed items
        session.locked = session.items.map(function(){ return true; });
        session.reviewList = missIdx.slice();
        session.reviewPos = 0;
        session.pos = missIdx[0];
        renderItem();
      },
      onRetake: function(){ session=null; home(); },
      onBackToApp: function(){
        if(window.NCLEX.close) window.NCLEX.close(); else home();
      },
      onDownloadPdf: function(m){ RPT.downloadPdf(m); }
    });
  }
  function I_SC(){ return window.NCLEX._internal.SC; }

  function renderResults(isStudy){
    root.innerHTML="";
    var wrap=h("div","nx-wrap");
    wrap.appendChild(backBtn(home));
    wrap.appendChild(h("h2","nx-title", isStudy?"Set complete":"Exam results"));

    // aggregate
    var totCredit=0, totMax=0, itemsRight=0;
    var byCat={}; CATS.forEach(function(c){ byCat[c]={credit:0,max:0,items:0,right:0}; });
    var caseCredit=0, caseMax=0, standCredit=0, standMax=0;
    session.items.forEach(function(it,i){
      var res=I.SC[it.type](it, session.responses[i]);
      totCredit+=res.credit; totMax+=res.max; if(res.correct) itemsRight++;
      var b=byCat[it.cat]; b.credit+=res.credit; b.max+=res.max; b.items++; if(res.correct)b.right++;
      if(it.caseId){ caseCredit+=res.credit; caseMax+=res.max; } else { standCredit+=res.credit; standMax+=res.max; }
    });
    var pct = totMax? Math.round(100*totCredit/totMax) : 0;

    // headline
    var head=h("div","nx-scorehead");
    head.appendChild(h("div","nx-scorebig", pct+"%"));
    head.appendChild(h("div","nx-scoresub",
      "Practice score &middot; "+totCredit+" of "+totMax+" credit earned<br>"
      + itemsRight+" of "+session.items.length+" items fully correct"));
    wrap.appendChild(head);

    // category breakdown
    wrap.appendChild(h("div","nx-setlabel","Performance by category"));
    var grid=h("div","nx-catgrid");
    CATS.forEach(function(c){
      var b=byCat[c]; if(!b.items) return;
      var cp = b.max? Math.round(100*b.credit/b.max):0;
      var row=h("div","nx-catrow");
      row.appendChild(h("div","nx-catname",esc(CATNAME[c])));
      var barbox=h("div","nx-catbar"); var fill=h("div","nx-catfill"); fill.style.width=cp+"%";
      if(cp<60) fill.classList.add("nx-catlow"); else if(cp<75) fill.classList.add("nx-catmid");
      barbox.appendChild(fill); row.appendChild(barbox);
      row.appendChild(h("div","nx-catpct",cp+"%"));
      grid.appendChild(row);
    });
    wrap.appendChild(grid);

    // standalone vs case
    if(caseMax){
      var sc=h("div","nx-splitrow");
      sc.innerHTML="<span>Standalone items: <b>"+(standMax?Math.round(100*standCredit/standMax):0)
        +"%</b></span><span>Unfolding cases: <b>"+(caseMax?Math.round(100*caseCredit/caseMax):0)+"%</b></span>";
      wrap.appendChild(sc);
    }

    // weakest-area guidance (actionable, not a pass/fail claim)
    var weak=CATS.filter(function(c){return byCat[c].items;})
      .map(function(c){ return {c:c, p: byCat[c].max?100*byCat[c].credit/byCat[c].max:100}; })
      .sort(function(a,b){return a.p-b.p;}).slice(0,2);
    if(weak.length){
      wrap.appendChild(h("div","nx-guide","Focus next on: "
        + weak.map(function(w){return "<b>"+esc(CATNAME[w.c])+"</b>";}).join(" and ") + "."));
    }

    var actions=h("div","nx-nav");
    var review=h("button","nx-btn nx-primary","Review answers & rationales");
    review.onclick=function(){ session.locked=session.items.map(function(){return true;}); session.pos=0; renderItem(); };
    actions.appendChild(review);
    var again=h("button","nx-btn", isStudy?"New study set":"New exam form");
    again.onclick=function(){ isStudy?startStudy():startExamSetup(); };
    actions.appendChild(again);
    wrap.appendChild(actions);

    wrap.appendChild(disclaimerEl());
    root.appendChild(wrap);
  }

  // ---- shared bits -----------------------------------------------------------
  function backBtn(onclick){ var b=h("button","nx-back","&larr; Back"); b.onclick=onclick; return b; }

  // Persistence goes through NCLEX_STORE (nclex-store.js), which is adapter-backed so
  // the same code works in a browser today and inside a native app shell later.
  // If the store module isn't present, fall back to a minimal in-memory shim so the
  // module still runs standalone.
  var Storage = (function(){
    if(window.NCLEX_STORE){
      var S = window.NCLEX_STORE;
      return {
        save:  function(s){ return S.saveInProgress(s); },
        load:  function(){
          var rec = S.loadInProgress();
          return rec ? S.rehydrate(rec, window.NCLEX._internal.bank()) : null;
        },
        clear: function(){ S.clearInProgress(); },
        has:   function(){ return S.hasInProgress(); },
        record:function(s, model){ return S.recordAttempt(s, model); }
      };
    }
    var SAVED = null;
    return {
      save: function(s){ SAVED = s; },
      load: function(){ return SAVED; },
      clear: function(){ SAVED = null; },
      has:  function(){ return !!SAVED; },
      record: function(){ return null; }
    };
  })();
  window.NCLEX._internal.Storage = Storage;

  /**
   * Exit flow. Instead of a destructive confirm(), offer three real choices:
   *   - Save & exit    : keep progress so the learner can resume where they left off
   *   - See my report  : generate a partial report for what they answered
   *   - Keep testing   : cancel
   */
  function confirmQuit(){
    if(!session || session.submitted){ stopTimer(); return home(); }

    var answered = 0;
    session.items.forEach(function(it,i){
      if(window.NCLEX_REPORT && window.NCLEX_REPORT.isAnswered(it, session.responses[i])) answered++;
    });

    root.innerHTML="";
    var wrap=h("div","nx-wrap");
    wrap.appendChild(h("div","nx-eyebrow","Leaving this test"));
    wrap.appendChild(h("h2","nx-title","What would you like to do?"));
    wrap.appendChild(h("p","nx-lede","You've answered "+answered+" of "+session.items.length+" items. "
      + "You can save your place and come back, or see how you did so far."));

    var cards=h("div","nx-modecards");

    var c1=h("div","nx-modecard");
    c1.appendChild(h("h3",null,"Save &amp; exit"));
    c1.appendChild(h("p",null,"Keep your progress and resume this test where you left off. "
      + "(Saved for this visit — a page reload will clear it.)"));
    var b1=h("button","nx-btn nx-primary","Save &amp; exit");
    b1.onclick=function(){
      stopTimer(); Storage.save(session); session=null; home();
    };
    c1.appendChild(b1); cards.appendChild(c1);

    var c2=h("div","nx-modecard");
    c2.appendChild(h("h3",null,"See my report"));
    c2.appendChild(h("p",null,"Generate a performance report for the "+answered+" item"
      +(answered===1?"":"s")+" you've answered, with a breakdown and recommendations."));
    var b2=h("button","nx-btn","Generate report");
    b2.disabled = answered===0;
    b2.onclick=function(){ stopTimer(); session.submitted=true; showReport(true); };
    c2.appendChild(b2); cards.appendChild(c2);

    wrap.appendChild(cards);

    var back=h("button","nx-btn","&larr; Keep testing");
    back.onclick=function(){ renderItem(); };
    var row=h("div","nx-nav"); row.appendChild(back); wrap.appendChild(row);

    root.appendChild(wrap);
  }

  // expose controller
  window.NCLEX.mount = mount;

  // Full-screen open/close hooks for the host app.
  //   NCLEX.open(onExit?)  -> show module home; remembers an optional onExit callback
  //                           that the module's top-level Back button will invoke to
  //                           return control to the host (e.g. call the app's root('library')).
  //   NCLEX.close()        -> run the onExit callback (host decides what view to show).
  // The host is responsible for hiding its own view before calling open() and for
  // showing it again inside onExit — the module never guesses at app internals.
  var _onExit = null;
  window.NCLEX.open = function(onExit){
    if(typeof onExit === "function") _onExit = onExit;
    if(root) home();
  };
  window.NCLEX.close = function(){
    if(typeof _onExit === "function") _onExit();
  };
  // let the controller reach the exit hook for the home-screen Back button
  window.NCLEX._internal.exit = function(){ window.NCLEX.close(); };
  window.NCLEX._internal.hasExit = function(){ return typeof _onExit === "function"; };

  window.NCLEX._internal.controller = {home:home, launch:launch, renderResults:renderResults};
})();

// ============================================================================
// PART 4 — CSS + first-time patcher buildNclexPatched()
// The patcher mirrors the Rx module's buildRxPatched(): injects a <style> block
// and a mount container once, then hands the mount to NCLEX.mount(). Safe to call
// repeatedly (guards against double-injection).
// ============================================================================
(function(){
  "use strict";
  var CSS = [
"/* NCLEX module scope: everything under #nclex-root */",
"#nclex-root{--nx-bg:#0f1419;--nx-panel:#161d26;--nx-panel2:#1c2530;--nx-ink:#e6edf3;",
"  --nx-muted:#8b98a5;--nx-line:#2a3441;--nx-accent:#4a9d7f;--nx-accent2:#3d7ea6;",
"  --nx-good:#3fa66a;--nx-bad:#c65656;--nx-warn:#c9752b;--nx-goodbg:#16281f;--nx-badbg:#2a1a1a;",
"  --nx-partbg:#2a2412;--nx-chip:#223041;color:var(--nx-ink);",
"  font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;line-height:1.5;}",
"#nclex-root *{box-sizing:border-box;}",
"#nclex-root .nx-wrap{max-width:820px;margin:0 auto;padding:18px;}",
"#nclex-root .nx-eyebrow{font-size:11px;letter-spacing:1.2px;text-transform:uppercase;color:var(--nx-accent);font-weight:700;}",
"#nclex-root .nx-title{font-size:24px;font-weight:650;margin:8px 0 6px;letter-spacing:.2px;}",
"#nclex-root .nx-lede{color:var(--nx-muted);margin:0 0 18px;font-size:15px;}",
"#nclex-root .nx-modecards{display:grid;grid-template-columns:1fr 1fr;gap:14px;}",
"@media(max-width:620px){#nclex-root .nx-modecards{grid-template-columns:1fr;}}",
"#nclex-root .nx-modecard{background:var(--nx-panel);border:1px solid var(--nx-line);border-radius:14px;padding:18px;}",
"#nclex-root .nx-modecard h3{margin:0 0 8px;font-size:17px;}",
"#nclex-root .nx-modecard p{margin:0 0 16px;color:var(--nx-muted);font-size:14px;}",
"#nclex-root .nx-btn{font:inherit;cursor:pointer;background:var(--nx-panel2);color:var(--nx-ink);",
"  border:1px solid var(--nx-line);border-radius:9px;padding:9px 15px;transition:.12s;}",
"#nclex-root .nx-btn:hover{border-color:var(--nx-accent);}",
"#nclex-root .nx-btn:disabled{opacity:.4;cursor:not-allowed;}",
"#nclex-root .nx-primary{background:var(--nx-accent);border-color:var(--nx-accent);color:#06110c;font-weight:600;}",
"#nclex-root .nx-primary:hover{filter:brightness(1.08);}",
"#nclex-root .nx-back{background:none;border:none;color:var(--nx-muted);cursor:pointer;font:inherit;padding:4px 0;margin-bottom:6px;}",
"#nclex-root .nx-back:hover{color:var(--nx-ink);}",
"#nclex-root .nx-disclaimer{font-size:11px;color:var(--nx-muted);text-align:center;padding:18px 0 4px;margin-top:16px;border-top:1px solid var(--nx-line);}",
"#nclex-root .nx-setgrid{margin:14px 0;}",
"#nclex-root .nx-setlabel{font-size:12px;text-transform:uppercase;letter-spacing:.6px;color:var(--nx-muted);margin:10px 0 8px;font-weight:600;}",
"#nclex-root .nx-chip{display:inline-flex;align-items:center;gap:8px;background:var(--nx-panel2);border:1px solid var(--nx-line);",
"  border-radius:20px;padding:8px 14px;margin:0 8px 8px 0;color:var(--nx-ink);cursor:pointer;font:inherit;font-size:13px;transition:.12s;}",
"#nclex-root .nx-chip:hover{border-color:var(--nx-accent);}",
"#nclex-root .nx-chipn{background:var(--nx-chip);border-radius:10px;padding:1px 7px;font-size:11px;color:var(--nx-muted);}",
"#nclex-root .nx-examopt{margin:16px 0;}",
"#nclex-root .nx-toggle{display:flex;align-items:center;gap:10px;font-size:14px;cursor:pointer;}",
"#nclex-root .nx-runner{padding-bottom:40px;}",
"#nclex-root .nx-topbar{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:8px;flex-wrap:wrap;}",
"#nclex-root .nx-progress{font-size:13px;color:var(--nx-muted);}",
"#nclex-root .nx-timerbox{font-size:13px;color:var(--nx-muted);}",
"#nclex-root .nx-timerbox b{color:var(--nx-ink);font-variant-numeric:tabular-nums;}",
"#nclex-root .nx-timeup{color:var(--nx-warn)!important;}",
"#nclex-root .nx-pbar{height:4px;background:var(--nx-line);border-radius:3px;overflow:hidden;margin-bottom:16px;}",
"#nclex-root .nx-pfill{height:100%;background:var(--nx-accent);transition:width .2s;}",
"#nclex-root .nx-card{background:var(--nx-panel);border:1px solid var(--nx-line);border-radius:14px;padding:20px;}",
"#nclex-root .nx-qtype{font-size:11px;text-transform:uppercase;letter-spacing:.8px;color:var(--nx-accent);font-weight:700;}",
"#nclex-root .nx-tags{display:flex;gap:6px;flex-wrap:wrap;margin:8px 0 4px;}",
"#nclex-root .nx-tag{font-size:11px;padding:2px 8px;border-radius:6px;background:var(--nx-chip);color:var(--nx-muted);border:1px solid var(--nx-line);}",
"#nclex-root .nx-tagcase{background:#22323f;color:#7fb8d8;border-color:#2d4656;}",
"#nclex-root .nx-stem{font-size:16px;margin:14px 0;font-weight:500;white-space:pre-wrap;}",
"#nclex-root .nx-chart{background:var(--nx-panel2);border:1px solid var(--nx-line);border-radius:10px;margin:12px 0;overflow:hidden;}",
"#nclex-root .nx-charttabs{display:flex;flex-wrap:wrap;border-bottom:1px solid var(--nx-line);background:#141a22;}",
"#nclex-root .nx-charttab{padding:8px 13px;font-size:12px;cursor:pointer;color:var(--nx-muted);border-right:1px solid var(--nx-line);}",
"#nclex-root .nx-charttab.nx-active{color:var(--nx-ink);background:var(--nx-panel2);font-weight:600;}",
"#nclex-root .nx-chartbody{padding:12px 14px;font-size:13px;white-space:pre-wrap;color:#c7d2dd;min-height:20px;}",
"#nclex-root .nx-answer{margin:6px 0;}",
"#nclex-root .nx-hint{font-size:12px;color:var(--nx-muted);margin:2px 0 8px;}",
"#nclex-root .nx-opt{display:flex;gap:10px;align-items:flex-start;padding:11px 13px;border:1px solid var(--nx-line);",
"  border-radius:9px;margin:7px 0;cursor:pointer;background:var(--nx-panel2);transition:.1s;}",
"#nclex-root .nx-opt:hover{border-color:var(--nx-accent2);}",
"#nclex-root .nx-sel{border-color:var(--nx-accent);background:#182a24;}",
"#nclex-root .nx-correct{border-color:var(--nx-good);background:var(--nx-goodbg);}",
"#nclex-root .nx-incorrect{border-color:var(--nx-bad);background:var(--nx-badbg);}",
"#nclex-root .nx-box{flex:0 0 18px;height:18px;margin-top:1px;border:2px solid var(--nx-muted);border-radius:4px;",
"  display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;}",
"#nclex-root .nx-radio .nx-box{border-radius:50%;}",
"#nclex-root .nx-sel .nx-box{border-color:var(--nx-accent);color:var(--nx-accent);}",
"#nclex-root .nx-correct .nx-box{border-color:var(--nx-good);color:var(--nx-good);}",
"#nclex-root .nx-incorrect .nx-box{border-color:var(--nx-bad);color:var(--nx-bad);}",
"#nclex-root .nx-matrix{width:100%;border-collapse:collapse;margin:8px 0;}",
"#nclex-root .nx-matrix th,#nclex-root .nx-matrix td{border:1px solid var(--nx-line);padding:9px 10px;text-align:left;font-size:14px;}",
"#nclex-root .nx-matrix th{background:var(--nx-panel2);color:var(--nx-muted);font-weight:600;font-size:12px;}",
"#nclex-root .nx-pick{text-align:center;cursor:pointer;}",
"#nclex-root .nx-pick:hover{background:#182028;}",
"#nclex-root .nx-pick.nx-sel{background:#182a24;color:var(--nx-accent);font-weight:700;}",
"#nclex-root .nx-pick.nx-correct{background:var(--nx-goodbg);color:var(--nx-good);font-weight:700;}",
"#nclex-root .nx-pick.nx-incorrect{background:var(--nx-badbg);color:var(--nx-bad);font-weight:700;}",
"#nclex-root .nx-blankline{margin:8px 0;font-size:14px;}",
"#nclex-root .nx-blabel{color:var(--nx-muted);}",
"#nclex-root .nx-select{font:inherit;color:var(--nx-ink);background:var(--nx-panel2);border:1px solid var(--nx-line);border-radius:8px;padding:6px 10px;margin:0 4px;}",
"#nclex-root .nx-mark{font-size:13px;}",
"#nclex-root .nx-mgood{color:var(--nx-good);} #nclex-root .nx-mbad{color:var(--nx-bad);}",
"#nclex-root .nx-bowtie{display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin:10px 0;}",
"@media(max-width:620px){#nclex-root .nx-bowtie{grid-template-columns:1fr;}}",
"#nclex-root .nx-bcol h4{font-size:12px;color:var(--nx-muted);margin:0 0 8px;text-transform:uppercase;letter-spacing:.5px;}",
"#nclex-root .nx-numwrap input{font:inherit;width:130px;text-align:right;color:var(--nx-ink);background:var(--nx-panel2);border:1px solid var(--nx-line);border-radius:8px;padding:8px 11px;}",
"#nclex-root .nx-unit{color:var(--nx-muted);margin-left:8px;font-size:13px;}",
"#nclex-root .nx-feedback{margin-top:14px;padding:12px 14px;border-radius:10px;}",
"#nclex-root .nx-fbgood{background:var(--nx-goodbg);border:1px solid var(--nx-good);}",
"#nclex-root .nx-fbpart{background:var(--nx-partbg);border:1px solid var(--nx-warn);}",
"#nclex-root .nx-fbbad{background:var(--nx-badbg);border:1px solid var(--nx-bad);}",
"#nclex-root .nx-fbhead{font-weight:600;font-size:14px;margin-bottom:8px;}",
"#nclex-root .nx-rationale{font-size:14px;white-space:pre-wrap;}",
"#nclex-root .nx-rationale h5{margin:0 0 6px;font-size:12px;color:var(--nx-accent2);text-transform:uppercase;letter-spacing:.5px;}",
"#nclex-root .nx-src{margin-top:10px;font-size:12px;color:var(--nx-muted);word-break:break-all;}",
"#nclex-root .nx-src a{color:var(--nx-accent2);}",
"#nclex-root .nx-nav{display:flex;gap:10px;margin-top:16px;flex-wrap:wrap;}",
"#nclex-root .nx-jumpstrip{display:flex;flex-wrap:wrap;gap:5px;margin-top:18px;}",
"#nclex-root .nx-dot{width:30px;height:30px;border-radius:7px;border:1px solid var(--nx-line);background:var(--nx-panel2);",
"  color:var(--nx-muted);cursor:pointer;font:inherit;font-size:11px;padding:0;transition:.1s;}",
"#nclex-root .nx-dot:hover{border-color:var(--nx-accent2);}",
"#nclex-root .nx-dotdone{color:var(--nx-ink);border-color:var(--nx-accent);}",
"#nclex-root .nx-dotcur{background:var(--nx-accent);color:#06110c;border-color:var(--nx-accent);font-weight:700;}",
"#nclex-root .nx-scorehead{text-align:center;padding:18px;background:var(--nx-panel);border:1px solid var(--nx-line);border-radius:14px;margin-bottom:18px;}",
"#nclex-root .nx-scorebig{font-size:48px;font-weight:700;color:var(--nx-accent);line-height:1;}",
"#nclex-root .nx-scoresub{color:var(--nx-muted);font-size:14px;margin-top:8px;}",
"#nclex-root .nx-catgrid{margin:10px 0;}",
"#nclex-root .nx-catrow{display:flex;align-items:center;gap:12px;margin:7px 0;}",
"#nclex-root .nx-catname{flex:0 0 190px;font-size:13px;}",
"@media(max-width:620px){#nclex-root .nx-catname{flex:0 0 120px;}}",
"#nclex-root .nx-catbar{flex:1;height:10px;background:var(--nx-line);border-radius:5px;overflow:hidden;}",
"#nclex-root .nx-catfill{height:100%;background:var(--nx-good);}",
"#nclex-root .nx-catfill.nx-catmid{background:var(--nx-warn);} #nclex-root .nx-catfill.nx-catlow{background:var(--nx-bad);}",
"#nclex-root .nx-catpct{flex:0 0 42px;text-align:right;font-size:13px;font-variant-numeric:tabular-nums;color:var(--nx-muted);}",
"#nclex-root .nx-splitrow{display:flex;justify-content:space-around;gap:16px;margin:14px 0;padding:12px;background:var(--nx-panel2);border:1px solid var(--nx-line);border-radius:10px;font-size:14px;}",
"#nclex-root .nx-guide{margin:12px 0;padding:12px 14px;background:var(--nx-panel2);border-left:3px solid var(--nx-accent2);border-radius:0 8px 8px 0;font-size:14px;}"
  ].join("\n");

  function buildNclexPatched(hostDoc){
    var doc = hostDoc || document;
    // 1) inject CSS once
    if(!doc.getElementById("nclex-style")){
      var st=doc.createElement("style"); st.id="nclex-style"; st.textContent=CSS;
      doc.head.appendChild(st);
    }
    // 2) ensure a mount container once
    var mountEl = doc.getElementById("nclex-root");
    if(!mountEl){
      mountEl = doc.createElement("div"); mountEl.id="nclex-root";
      // caller decides where to place it; default appends to body
      doc.body.appendChild(mountEl);
    }
    // 3) hand off to the controller
    window.NCLEX.mount(mountEl);
    return mountEl;
  }

  window.NCLEX.buildNclexPatched = buildNclexPatched;
  window.NCLEX._internal.CSS = CSS;
})();
