// ============================================================================
// nclex-report.js — Performance Report for the Rounds Codex NCLEX module
//
// Rule-based, offline, deterministic. Produces a customized report when a learner
// finishes a test OR exits mid-test.
//
// Sample-size policy (agreed with Dr. K): EVERY area is scored and displayed, but
// areas with fewer than MIN_N items attempted are marked "limited sample" and are
// excluded from driving the TOP recommendations, so a 1-item area cannot misdirect
// study time. The number is still shown — nothing is hidden.
// ============================================================================
(function(){
  "use strict";

  var RPT = {};
  var MIN_N = 3;
  var BANDS = { strong:80, solid:70, developing:60 };

  // ==========================================================================
  // PROFILES — make this engine exam-agnostic.
  //
  // A profile declares WHICH item fields to group by, what to call each grouping,
  // and how to label the values. NCLEX and USMLE (and anything later) each register
  // a profile; the analysis, rendering, and PDF code below never hard-code field
  // names. Adding an exam = adding a profile, not editing the engine.
  //
  //   groups: [{ field, title, note, labels, fallback }]
  //     field    item property to group by (e.g. "cat", "system", "discipline")
  //     title    section heading in the report
  //     labels   optional {value: "Display Name"} map; missing values pass through
  //     fallback value to use when an item lacks the field (optional)
  //   splitBy: optional {field, withLabel, withoutLabel} for the two-way split
  //            (NCLEX uses caseId -> "unfolding cases" vs "standalone items")
  //   actions: {field: {value: "study advice"}} used to build recommendations
  // ==========================================================================
  var PROFILES = {};
  RPT.registerProfile = function(name, profile){ PROFILES[name] = profile; return profile; };
  RPT.getProfile = function(name){ return PROFILES[name] || PROFILES[RPT.defaultProfile]; };
  RPT.defaultProfile = "nclex";
  RPT.profiles = PROFILES;

  var CATNAME = {
    mgmt:"Management of Care", safety:"Safety & Infection Control",
    hpm:"Health Promotion & Maintenance", psych:"Psychosocial Integrity",
    basic:"Basic Care & Comfort", pharm:"Pharmacological Therapies",
    risk:"Reduction of Risk Potential", physio:"Physiological Adaptation"
  };
  var SUBJNAME = {
    cardiac:"Cardiac", respiratory:"Respiratory", endocrine:"Endocrine", neuro:"Neurologic",
    gi:"Gastrointestinal", "renal-gu":"Renal / Genitourinary", infectious:"Infectious Disease",
    "maternal-newborn":"Maternal & Newborn", pediatrics:"Pediatrics",
    "mental-health":"Mental Health", "oncology-heme":"Oncology & Hematology",
    musculoskeletal:"Musculoskeletal", perioperative:"Perioperative",
    pharmacology:"Pharmacology & Dosage", "fluid-electrolyte":"Fluids & Electrolytes",
    fundamentals:"Fundamentals of Care", professional:"Professional Practice"
  };
  var TYPENAME = {
    mc:"Multiple choice", sata:"Select all that apply", selectN:"Select N",
    matrixMC:"Matrix (single)", matrixMR:"Matrix (multiple)", cloze:"Cloze / drop-down",
    ddTable:"Drag-and-drop table", pair:"Paired response", bowtie:"Bow-tie",
    numeric:"Dosage calculation"
  };

  var ACTION_CAT = {
    mgmt:"Drill delegation, assignment, and 'who do you see first' prioritization. Ask on every item: which patient is least stable?",
    safety:"Review isolation precaution types, PPE donning/doffing order, and fall and restraint policy.",
    hpm:"Review screening schedules, immunizations, and developmental milestones by age.",
    psych:"Practice therapeutic communication: validate feelings, avoid false reassurance and advice-giving.",
    basic:"Review comfort, hygiene, positioning, nutrition, elimination, and mobility fundamentals.",
    pharm:"Rebuild your drug tables: indication, key adverse effects, antidote, and nursing hold parameters.",
    risk:"Focus on pre- and post-procedure care, lab critical values, and complication recognition.",
    physio:"Review the pathophysiology of major acute conditions and their expected assessment findings."
  };
  var ACTION_SUBJ = {
    cardiac:"Review heart failure, ACS, dysrhythmias, and cardiac drugs (digoxin, beta-blockers, anticoagulants).",
    respiratory:"Review COPD and asthma management, oxygen targets, ABG interpretation, and airway clearance.",
    endocrine:"Review diabetes emergencies (DKA, HHS, hypoglycemia), thyroid, and adrenal disorders.",
    neuro:"Review stroke recognition and thrombolytic criteria, seizure care, and increased ICP.",
    gi:"Review liver disease, GI bleeding, ostomy care, and tube feeding.",
    "renal-gu":"Review acute kidney injury, dialysis, catheter care, and CAUTI prevention.",
    infectious:"Review transmission-based precautions, sepsis recognition, and antibiotic monitoring.",
    "maternal-newborn":"Review pregnancy complications such as preeclampsia, labor, and newborn assessment.",
    pediatrics:"Review growth and developmental milestones, pediatric dosing, and safety teaching.",
    "mental-health":"Review therapeutic communication, suicide risk assessment, and withdrawal syndromes.",
    "oncology-heme":"Review neutropenic precautions, transfusion reactions, and bleeding precautions.",
    musculoskeletal:"Review mobility, fracture and traction care, and osteoporosis prevention.",
    perioperative:"Review pre-op consent and teaching, and post-op complication recognition.",
    pharmacology:"Practice dosage calculation daily and rebuild high-alert drug knowledge with antidotes.",
    "fluid-electrolyte":"Review potassium, sodium, and calcium imbalances with their ECG and neurologic signs.",
    fundamentals:"Review core skills: sterile technique, positioning, specimen collection, and wound care.",
    professional:"Drill scope of practice, delegation rules, documentation, consent, and ethics."
  };

  function pct(credit, max){ return max > 0 ? Math.round(100 * credit / max) : 0; }
  function band(p){
    if(p >= BANDS.strong) return "strong";
    if(p >= BANDS.solid) return "solid";
    if(p >= BANDS.developing) return "developing";
    return "weak";
  }

  RPT.isAnswered = function(it, r){
    if(!r) return false;
    switch(it.type){
      case "mc": return r.pick != null;
      case "sata": case "selectN": return (r.picks||[]).length > 0;
      case "matrixMC": case "ddTable": return Object.keys(r.rows||{}).length > 0;
      case "matrixMR": return Object.keys(r.rows||{}).some(function(k){ return (r.rows[k]||[]).length > 0; });
      case "cloze": return Object.keys(r.blanks||{}).length > 0;
      case "pair": return r.first != null || r.second != null;
      case "bowtie": return (r.a||[]).length > 0 || r.c != null || (r.p||[]).length > 0;
      case "numeric": return r.val != null;
      default: return false;
    }
  };

  RPT.MIN_N = MIN_N; RPT.CATNAME = CATNAME; RPT.SUBJNAME = SUBJNAME;
  RPT.TYPENAME = TYPENAME; RPT.pct = pct; RPT.band = band;
  RPT._actions = { cat: ACTION_CAT, subj: ACTION_SUBJ };

  // ---- the NCLEX profile ---------------------------------------------------
  RPT.registerProfile("nclex", {
    name: "NCLEX-RN",
    reportTitle: "Your NCLEX-RN practice results",
    groups: [
      { field:"cat",  title:"Performance by NCLEX category",
        note:"The eight client-need categories from the official test plan.",
        labels:CATNAME },
      { field:"subj", title:"Performance by clinical subject",
        note:"Content areas across the bank. Areas with few items on this attempt are flagged.",
        labels:SUBJNAME, fallback:"fundamentals" },
      { field:"type", title:"Performance by item format",
        note:"Format performance can differ from content knowledge, especially on multi-response items.",
        labels:TYPENAME }
    ],
    splitBy: { field:"caseId", withLabel:"unfolding cases", withoutLabel:"standalone items" },
    actions: { cat: ACTION_CAT, subj: ACTION_SUBJ },
    // formats whose partial-credit behaviour warrants the "+/- scoring" nudge
    multiFormats: ["sata","selectN","matrixMR","bowtie"],
    calcFormat: "numeric",
    disclaimer: "This is practice feedback, not a predicted NCLEX pass or fail. " +
                "Scores use NGN partial-credit scoring.",
    pdfFooter: "Educational practice material for Rounds Codex. Not affiliated with or endorsed by " +
               "NCSBN. NCLEX is a registered trademark of NCSBN, Inc. Scores are practice feedback " +
               "only and do not predict NCLEX pass or fail."
  });

  window.NCLEX_REPORT = RPT;
})();

// ============================================================================
// PART 2 — model builder + strengths/weaknesses + recommendations
// ============================================================================
(function(){
  "use strict";
  var RPT = window.NCLEX_REPORT;
  var pct = RPT.pct, band = RPT.band, MIN_N = RPT.MIN_N;

  /**
   * Build the report model from a session.
   * @param session  {mode, items[], responses[], label, timed, startTs, profile?}
   * @param SC       the engine's scorer map
   * @param partial  true when the learner exited before finishing
   * @param profileName optional; defaults to session.profile or RPT.defaultProfile
   */
  RPT.build = function(session, SC, partial, profileName){
    var P = RPT.getProfile(profileName || session.profile || RPT.defaultProfile);
    var items = session.items || [], responses = session.responses || [];
    var totalCredit=0, totalMax=0, itemsCorrect=0, attempted=0, partialMisses=0;
    var groups = {}, misses = [];
    var withCredit=0, withMax=0, withoutCredit=0, withoutMax=0;

    P.groups.forEach(function(g){ groups[g.field] = {}; });

    function bucket(map,key){ if(!map[key]) map[key]={credit:0,max:0,n:0,correct:0}; return map[key]; }

    items.forEach(function(it,i){
      var resp = responses[i];
      var answered = RPT.isAnswered(it, resp);
      // On an abandoned attempt, score only what was actually attempted so an exit at
      // item 10 of 85 does not read as "most of the exam wrong".
      if(partial && !answered) return;

      var res = SC[it.type](it, resp);
      attempted++;
      totalCredit += res.credit; totalMax += res.max;
      if(res.correct) itemsCorrect++;
      else { misses.push(i); if(res.credit > 0) partialMisses++; }

      P.groups.forEach(function(g){
        var val = it[g.field];
        if(val == null) val = g.fallback;
        if(val == null) return;                      // item not classified on this axis
        var b = bucket(groups[g.field], val);
        b.credit += res.credit; b.max += res.max; b.n++; if(res.correct) b.correct++;
      });

      if(P.splitBy){
        if(it[P.splitBy.field]){ withCredit+=res.credit; withMax+=res.max; }
        else { withoutCredit+=res.credit; withoutMax+=res.max; }
      }
    });

    function toRows(map, labels){
      labels = labels || {};
      return Object.keys(map).map(function(k){
        var b=map[k], p=pct(b.credit,b.max);
        return { key:k, name:(labels[k]||k), credit:b.credit, max:b.max, n:b.n,
                 correct:b.correct, pct:p, band:band(p), limited:b.n < MIN_N };
      }).sort(function(a,b){ return b.pct - a.pct; });
    }

    // ordered breakdown sections, exactly as the profile declares them
    var breakdowns = P.groups.map(function(g){
      return { field:g.field, title:g.title, note:g.note, rows:toRows(groups[g.field], g.labels) };
    });

    var overallPct=pct(totalCredit,totalMax);

    var model = {
      profile: P,
      meta:{ mode:session.mode, label:session.label||"", partial:!!partial,
             attempted:attempted, total:items.length, generated:new Date(),
             timed:!!session.timed,
             elapsedSec: session.startTs ? Math.round((Date.now()-session.startTs)/1000) : null },
      overall:{ pct:overallPct, band:band(overallPct), credit:totalCredit, max:totalMax,
                itemsCorrect:itemsCorrect, itemsScored:attempted, partialMisses:partialMisses },
      breakdowns: breakdowns,
      split: P.splitBy ? {
        withPct: pct(withCredit, withMax), withMax: withMax, withLabel: P.splitBy.withLabel,
        withoutPct: pct(withoutCredit, withoutMax), withoutMax: withoutMax, withoutLabel: P.splitBy.withoutLabel
      } : null,
      misses:misses,
      strengths:[], weaknesses:[], recommendations:[]
    };

    // Back-compat aliases so existing NCLEX code/tests keep working unchanged.
    model.categories = (breakdowns[0] && breakdowns[0].rows) || [];
    model.subjects   = (breakdowns[1] && breakdowns[1].rows) || [];
    model.types      = (breakdowns[2] && breakdowns[2].rows) || [];
    if(model.split){
      model.split.casePct = model.split.withPct;
      model.split.caseMax = model.split.withMax;
      model.split.standalonePct = model.split.withoutPct;
      model.split.standaloneMax = model.split.withoutMax;
    } else {
      model.split = { casePct:0, caseMax:0, standalonePct:0, standaloneMax:0,
                      withPct:0, withMax:0, withoutPct:0, withoutMax:0 };
    }

    // strengths/weaknesses drawn from the CONTENT axes (not item format, which is a
    // skill signal rather than a knowledge area)
    var contentRows = [];
    breakdowns.forEach(function(b){
      if(b.field === "type") return;
      contentRows = contentRows.concat(b.rows);
    });
    model.strengths  = RPT.pickStrengths(contentRows, []);
    model.weaknesses = RPT.pickWeaknesses(contentRows, []);
    RPT.recommend(model);
    return model;
  };

  // Small samples are displayed everywhere, but never promoted as a strength/weakness.
  function dedupeAreas(rows){
    var seen={}, out=[], twins={ pharm:"pharmacology", pharmacology:"pharm" };
    rows.forEach(function(r){
      var twin=twins[r.key];
      if(seen[r.key] || (twin && seen[twin])) return;
      seen[r.key]=1; out.push(r);
    });
    return out;
  }
  RPT.pickStrengths = function(catRows, subjRows){
    return dedupeAreas(catRows.concat(subjRows)
      .filter(function(r){ return !r.limited && r.band==="strong"; })
      .sort(function(a,b){ return (b.pct-a.pct) || (b.n-a.n); })).slice(0,3);
  };
  RPT.pickWeaknesses = function(catRows, subjRows){
    return dedupeAreas(catRows.concat(subjRows)
      .filter(function(r){ return !r.limited && (r.band==="weak"||r.band==="developing"); })
      .sort(function(a,b){ return (a.pct-b.pct) || (b.n-a.n); })).slice(0,3);
  };

  RPT.recommend = function(model){
    var recs=[];
    var P = model.profile || RPT.getProfile();
    var A = P.actions || RPT._actions;
    // flatten every action map in the profile so any group's values can be looked up
    function actionFor(key){
      var found = null;
      Object.keys(A).forEach(function(field){ if(!found && A[field] && A[field][key]) found = A[field][key]; });
      return found;
    }

    model.weaknesses.forEach(function(w){
      var action = actionFor(w.key);
      if(action) recs.push({ kind:"content", area:w.name, pct:w.pct, text:action });
    });

    var multiKeys = P.multiFormats || [];
    var typeRows = model.types || [];
    var multi = typeRows.filter(function(t){ return multiKeys.indexOf(t.key)>=0 && t.n>0; });
    var mc = multi.reduce(function(a,t){return a+t.credit;},0);
    var mm = multi.reduce(function(a,t){return a+t.max;},0);
    if(mm>0 && pct(mc,mm)<70){
      recs.push({ kind:"strategy", area:"Multi-response items", pct:pct(mc,mm),
        text:"You are losing credit on select-all and matrix items. These use +/- scoring: each wrong "+
             "pick cancels out a right one. Choose only options you can defend, not everything plausible." });
    }

    if(model.split && model.split.withMax>0 && model.split.withoutMax>0 &&
       model.split.withPct + 10 <= model.split.withoutPct){
      recs.push({ kind:"strategy", area:(model.split.withLabel||"Case items"), pct:model.split.withPct,
        text:"Your performance on "+(model.split.withLabel||"case items")+" trails your "+
             (model.split.withoutLabel||"standalone items")+". Work them in order: gather the data, "+
             "analyze it, decide what matters most, act, then evaluate the result." });
    }

    var calcKey = P.calcFormat;
    var calc = calcKey ? typeRows.filter(function(t){return t.key===calcKey;})[0] : null;
    if(calc && calc.n>=2 && calc.pct<70){
      recs.push({ kind:"content", area:calc.name || "Calculations", pct:calc.pct,
        text:"Set up every calculation the same way (dimensional analysis) and label units at each step. "+
             "Practice a few daily until the setup is automatic." });
    }

    if(model.overall.pct>=85){
      var contentRows = [];
      (model.breakdowns||[]).forEach(function(b){ if(b.field!=="type") contentRows = contentRows.concat(b.rows); });
      var thin = contentRows.filter(function(s){return s.limited || s.pct<80;})
                            .sort(function(a,b){return a.pct-b.pct;})[0];
      recs.push({ kind:"stretch", area: thin?thin.name:"Mixed practice", pct:model.overall.pct,
        text: thin ? ("Strong overall. To keep improving, take a longer form so thin areas like "+thin.name+
                      " get enough items to give a reliable read.")
                   : "Strong overall. Keep taking full-length mixed forms to hold pace and stamina." });
    }

    if(!recs.length){
      recs.push({ kind:"general", area:"Next step", pct:model.overall.pct,
        text:"No single area stands out as a weakness on this attempt. Take a full-length form for a "+
             "more reliable read across all areas." });
    }

    model.recommendations = recs.slice(0,5);
    return model.recommendations;
  };
})();

// ============================================================================
// PART 3 — renderer. Builds the on-screen report using the module's design tokens
// so it is visually consistent with Rounds Codex.
// ============================================================================
(function(){
  "use strict";
  var RPT = window.NCLEX_REPORT;

  function esc(s){ return String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }
  function h(tag,cls,html){ var e=document.createElement(tag); if(cls)e.className=cls; if(html!=null)e.innerHTML=html; return e; }

  function bandClass(b){
    return b==="strong" ? "nr-strong" : b==="solid" ? "nr-solid"
         : b==="developing" ? "nr-dev" : "nr-weak";
  }
  function fmtDuration(sec){
    if(sec==null) return "";
    var m=Math.floor(sec/60), s=sec%60;
    return m>=60 ? (Math.floor(m/60)+"h "+(m%60)+"m") : (m+"m "+s+"s");
  }

  // one breakdown table (used for categories, subjects, and item types)
  function breakdownBlock(title, rows, note){
    var box=h("section","nr-block");
    box.appendChild(h("h3","nr-h3",esc(title)));
    if(note) box.appendChild(h("p","nr-note",esc(note)));
    var list=h("div","nr-rows");
    rows.forEach(function(r){
      var row=h("div","nr-row");
      var label=h("div","nr-label");
      label.appendChild(h("span","nr-name",esc(r.name)));
      var meta=h("span","nr-meta", r.correct+"/"+r.n+" items"
        + (r.limited ? ' <span class="nr-flag" title="Fewer than '+RPT.MIN_N+' items on this attempt — treat with caution">limited sample</span>' : ""));
      label.appendChild(meta);
      row.appendChild(label);

      var barwrap=h("div","nr-barwrap");
      var bar=h("div","nr-bar "+bandClass(r.band));
      bar.style.width = Math.max(2, r.pct) + "%";
      barwrap.appendChild(bar);
      row.appendChild(barwrap);

      row.appendChild(h("div","nr-pct "+bandClass(r.band), r.pct+"%"));
      list.appendChild(row);
    });
    box.appendChild(list);
    return box;
  }

  /**
   * Render the report into `mount`.
   * hooks: { onReviewMisses, onRetake, onBackToApp, onDownloadPdf }
   */
  RPT.render = function(model, mount, hooks){
    hooks = hooks || {};
    mount.innerHTML = "";
    var wrap=h("div","nr-wrap");

    // ---- header ----
    var head=h("header","nr-head");
    var eyebrow = model.meta.partial ? "Partial attempt" : "Performance report";
    head.appendChild(h("div","nr-eyebrow", esc(eyebrow) + (model.meta.label? " &middot; "+esc(model.meta.label):"")));
    head.appendChild(h("h2","nr-title",
      esc((model.profile && model.profile.reportTitle) ||
          ((model.profile && model.profile.name ? model.profile.name + " " : "") + "practice results"))));
    var sub = model.meta.attempted + " of " + model.meta.total + " items scored";
    if(model.meta.elapsedSec) sub += " &middot; " + fmtDuration(model.meta.elapsedSec);
    sub += " &middot; " + model.meta.generated.toLocaleDateString();
    head.appendChild(h("p","nr-sub", sub));
    wrap.appendChild(head);

    if(model.meta.partial){
      wrap.appendChild(h("div","nr-callout",
        "You exited before finishing. This report covers only the "+model.meta.attempted+
        " item"+(model.meta.attempted===1?"":"s")+" you answered, so treat it as a snapshot rather than a full assessment."));
    }

    // ---- headline score ----
    var score=h("div","nr-scorecard");
    var ring=h("div","nr-ring "+bandClass(model.overall.band));
    ring.appendChild(h("div","nr-ringpct", model.overall.pct+"%"));
    ring.appendChild(h("div","nr-ringlbl","overall"));
    score.appendChild(ring);
    var facts=h("div","nr-facts");
    facts.appendChild(fact(model.overall.itemsCorrect+" / "+model.overall.itemsScored, "items fully correct"));
    facts.appendChild(fact(model.overall.credit+" / "+model.overall.max, "scoring credit earned"));
    facts.appendChild(fact(model.overall.partialMisses+"", "items with partial credit"));
    if(model.split && model.split.withMax>0){
      facts.appendChild(fact(model.split.withPct+"%", model.split.withLabel||"case items"));
      facts.appendChild(fact(model.split.withoutPct+"%", model.split.withoutLabel||"standalone items"));
    }
    score.appendChild(facts);
    wrap.appendChild(score);
    wrap.appendChild(h("p","nr-disclaimer",
      (model.profile && model.profile.disclaimer) ||
      "This is practice feedback, not a predicted pass or fail."));

    // ---- breakdowns ----
    // ---- breakdowns (driven by the profile, any number of axes) ----
    (model.breakdowns || []).forEach(function(b){
      if(b.rows && b.rows.length) wrap.appendChild(breakdownBlock(b.title, b.rows, b.note));
    });

    // ---- strengths & weaknesses ----
    var sw=h("section","nr-block nr-sw");
    sw.appendChild(h("h3","nr-h3","Strengths and weaknesses"));
    var cols=h("div","nr-swgrid");

    var sCol=h("div","nr-swcol nr-swgood");
    sCol.appendChild(h("h4",null,"Strengths"));
    if(model.strengths.length){
      var sl=h("ul","nr-list");
      model.strengths.forEach(function(s){
        sl.appendChild(h("li",null,"<b>"+esc(s.name)+"</b> — "+s.pct+"% ("+s.correct+"/"+s.n+" items)"));
      });
      sCol.appendChild(sl);
    } else {
      sCol.appendChild(h("p","nr-empty",
        "No area reached the 80% strength threshold on this attempt. That is common early on — the "
        + "breakdown above shows where you were closest."));
    }
    cols.appendChild(sCol);

    var wCol=h("div","nr-swcol nr-swbad");
    wCol.appendChild(h("h4",null,"Needs work"));
    if(model.weaknesses.length){
      var wl=h("ul","nr-list");
      model.weaknesses.forEach(function(w){
        wl.appendChild(h("li",null,"<b>"+esc(w.name)+"</b> — "+w.pct+"% ("+w.correct+"/"+w.n+" items)"));
      });
      wCol.appendChild(wl);
    } else {
      wCol.appendChild(h("p","nr-empty","Nothing fell below the 70% threshold with enough items to flag. Solid work."));
    }
    cols.appendChild(wCol);
    sw.appendChild(cols);
    wrap.appendChild(sw);

    // ---- recommendations ----
    var rec=h("section","nr-block");
    rec.appendChild(h("h3","nr-h3","Recommendations"));
    rec.appendChild(h("p","nr-note","Ordered by impact, based on this attempt."));
    var rl=h("ol","nr-recs");
    model.recommendations.forEach(function(r){
      var li=h("li","nr-rec");
      li.appendChild(h("div","nr-recarea", esc(r.area) + ' <span class="nr-recpct">'+r.pct+"%</span>"));
      li.appendChild(h("div","nr-rectext", esc(r.text)));
      rl.appendChild(li);
    });
    rec.appendChild(rl);
    wrap.appendChild(rec);

    // ---- actions ----
    var acts=h("div","nr-actions");
    if(model.misses.length && hooks.onReviewMisses){
      var rb=h("button","nr-btn nr-primary","Review "+model.misses.length+" missed item"+(model.misses.length===1?"":"s"));
      rb.onclick=function(){ hooks.onReviewMisses(model.misses); };
      acts.appendChild(rb);
    }
    if(hooks.onDownloadPdf){
      var pb=h("button","nr-btn","Download PDF");
      pb.onclick=function(){ hooks.onDownloadPdf(model); };
      acts.appendChild(pb);
    }
    if(hooks.onRetake){
      var tb=h("button","nr-btn","New test");
      tb.onclick=hooks.onRetake; acts.appendChild(tb);
    }
    if(hooks.onBackToApp){
      var bb=h("button","nr-btn","Done");
      bb.onclick=hooks.onBackToApp; acts.appendChild(bb);
    }
    wrap.appendChild(acts);

    mount.appendChild(wrap);
    return wrap;
  };

  function fact(big, label){
    var f=h("div","nr-fact");
    f.appendChild(h("div","nr-factbig", esc(big)));
    f.appendChild(h("div","nr-factlbl", esc(label)));
    return f;
  }
})();

// ============================================================================
// PART 4 — styles (uses the module's design tokens) + PDF export
// ============================================================================
(function(){
  "use strict";
  var RPT = window.NCLEX_REPORT;

  RPT.CSS = [
"#nclex-root .nr-wrap{max-width:820px;margin:0 auto;padding:18px 18px 48px;}",
"#nclex-root .nr-head{margin-bottom:18px;}",
"#nclex-root .nr-eyebrow{font-size:11px;letter-spacing:1.2px;text-transform:uppercase;color:var(--nx-accent);font-weight:700;}",
"#nclex-root .nr-title{font-size:26px;font-weight:650;margin:8px 0 6px;letter-spacing:.2px;}",
"#nclex-root .nr-sub{color:var(--nx-muted);font-size:13px;margin:0;}",
"#nclex-root .nr-callout{background:var(--nx-partbg);border:1px solid var(--nx-warn);border-radius:10px;",
"  padding:12px 14px;font-size:14px;margin:14px 0;}",
"#nclex-root .nr-scorecard{display:flex;gap:22px;align-items:center;flex-wrap:wrap;",
"  background:var(--nx-panel);border:1px solid var(--nx-line);border-radius:16px;padding:22px;margin:16px 0 8px;}",
"#nclex-root .nr-ring{flex:0 0 132px;height:132px;border-radius:50%;display:flex;flex-direction:column;",
"  align-items:center;justify-content:center;border:8px solid var(--nx-line);background:var(--nx-panel2);}",
"#nclex-root .nr-ring.nr-strong{border-color:var(--nx-good);} #nclex-root .nr-ring.nr-solid{border-color:var(--nx-accent);}",
"#nclex-root .nr-ring.nr-dev{border-color:var(--nx-warn);} #nclex-root .nr-ring.nr-weak{border-color:var(--nx-bad);}",
"#nclex-root .nr-ringpct{font-size:34px;font-weight:700;line-height:1;}",
"#nclex-root .nr-ringlbl{font-size:11px;text-transform:uppercase;letter-spacing:1px;color:var(--nx-muted);margin-top:4px;}",
"#nclex-root .nr-facts{display:flex;gap:26px;flex-wrap:wrap;flex:1;}",
"#nclex-root .nr-fact{min-width:104px;}",
"#nclex-root .nr-factbig{font-size:20px;font-weight:650;}",
"#nclex-root .nr-factlbl{font-size:12px;color:var(--nx-muted);margin-top:2px;}",
"#nclex-root .nr-disclaimer{font-size:11px;color:var(--nx-muted);margin:0 0 22px;}",
"#nclex-root .nr-block{margin:26px 0;}",
"#nclex-root .nr-h3{font-size:16px;font-weight:650;margin:0 0 4px;}",
"#nclex-root .nr-note{font-size:12px;color:var(--nx-muted);margin:0 0 12px;}",
"#nclex-root .nr-rows{display:flex;flex-direction:column;gap:9px;}",
"#nclex-root .nr-row{display:flex;align-items:center;gap:12px;}",
"#nclex-root .nr-label{flex:0 0 210px;min-width:0;}",
"@media(max-width:640px){#nclex-root .nr-label{flex:0 0 132px;}}",
"#nclex-root .nr-name{display:block;font-size:13px;}",
"#nclex-root .nr-meta{display:block;font-size:11px;color:var(--nx-muted);}",
"#nclex-root .nr-flag{background:var(--nx-chip);border:1px solid var(--nx-line);border-radius:5px;",
"  padding:0 5px;margin-left:4px;font-size:10px;color:var(--nx-warn);}",
"#nclex-root .nr-barwrap{flex:1;height:11px;background:var(--nx-line);border-radius:6px;overflow:hidden;}",
"#nclex-root .nr-bar{height:100%;border-radius:6px;transition:width .35s ease;}",
"#nclex-root .nr-bar.nr-strong{background:var(--nx-good);} #nclex-root .nr-bar.nr-solid{background:var(--nx-accent);}",
"#nclex-root .nr-bar.nr-dev{background:var(--nx-warn);} #nclex-root .nr-bar.nr-weak{background:var(--nx-bad);}",
"#nclex-root .nr-pct{flex:0 0 44px;text-align:right;font-size:13px;font-variant-numeric:tabular-nums;font-weight:600;}",
"#nclex-root .nr-pct.nr-strong{color:var(--nx-good);} #nclex-root .nr-pct.nr-solid{color:var(--nx-accent);}",
"#nclex-root .nr-pct.nr-dev{color:var(--nx-warn);} #nclex-root .nr-pct.nr-weak{color:var(--nx-bad);}",
"#nclex-root .nr-swgrid{display:grid;grid-template-columns:1fr 1fr;gap:14px;}",
"@media(max-width:640px){#nclex-root .nr-swgrid{grid-template-columns:1fr;}}",
"#nclex-root .nr-swcol{background:var(--nx-panel);border:1px solid var(--nx-line);border-radius:12px;padding:16px;}",
"#nclex-root .nr-swgood{border-left:3px solid var(--nx-good);} #nclex-root .nr-swbad{border-left:3px solid var(--nx-bad);}",
"#nclex-root .nr-swcol h4{margin:0 0 10px;font-size:13px;text-transform:uppercase;letter-spacing:.6px;color:var(--nx-muted);}",
"#nclex-root .nr-list{margin:0;padding-left:18px;font-size:14px;}",
"#nclex-root .nr-list li{margin:6px 0;}",
"#nclex-root .nr-empty{font-size:13px;color:var(--nx-muted);margin:0;}",
"#nclex-root .nr-recs{margin:0;padding-left:20px;}",
"#nclex-root .nr-rec{margin:12px 0;}",
"#nclex-root .nr-recarea{font-weight:650;font-size:14px;}",
"#nclex-root .nr-recpct{font-size:12px;color:var(--nx-muted);font-weight:400;margin-left:6px;}",
"#nclex-root .nr-rectext{font-size:14px;color:#c7d2dd;margin-top:3px;}",
"#nclex-root .nr-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:28px;}",
"#nclex-root .nr-btn{font:inherit;cursor:pointer;background:var(--nx-panel2);color:var(--nx-ink);",
"  border:1px solid var(--nx-line);border-radius:9px;padding:10px 16px;transition:.12s;}",
"#nclex-root .nr-btn:hover{border-color:var(--nx-accent);}",
"#nclex-root .nr-primary{background:var(--nx-accent);border-color:var(--nx-accent);color:#06110c;font-weight:600;}",
"#nclex-root .nr-primary:hover{filter:brightness(1.08);}"
  ].join("\n");

  RPT.injectCSS = function(doc){
    doc = doc || document;
    if(doc.getElementById("nclex-report-style")) return;
    var st = doc.createElement("style");
    st.id = "nclex-report-style";
    st.textContent = RPT.CSS;
    doc.head.appendChild(st);
  };

  // --------------------------------------------------------------------------
  // PDF export — builds a clean, print-optimised standalone document and opens
  // the browser print dialog (Save as PDF). No external library, works offline.
  // Deliberately light-on-white for printing rather than the dark app theme.
  // --------------------------------------------------------------------------
  function esc(s){ return String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }

  function rowsTable(rows){
    var body = rows.map(function(r){
      return "<tr><td>"+esc(r.name)+(r.limited?' <span class="flag">limited sample</span>':"")+"</td>"
           + "<td class='num'>"+r.correct+"/"+r.n+"</td>"
           + "<td class='num'>"+r.credit+"/"+r.max+"</td>"
           + "<td class='num pct "+r.band+"'>"+r.pct+"%</td></tr>";
    }).join("");
    return "<table><thead><tr><th>Area</th><th class='num'>Items correct</th>"
         + "<th class='num'>Credit</th><th class='num'>Score</th></tr></thead><tbody>"+body+"</tbody></table>";
  }

  RPT.buildPdfHtml = function(model){
    var m = model.meta, o = model.overall;
    var when = m.generated.toLocaleDateString() + " " + m.generated.toLocaleTimeString();
    var strengths = model.strengths.length
      ? "<ul>"+model.strengths.map(function(s){return "<li><b>"+esc(s.name)+"</b> — "+s.pct+"% ("+s.correct+"/"+s.n+")</li>";}).join("")+"</ul>"
      : "<p class='muted'>No area reached the 80% strength threshold on this attempt.</p>";
    var weaknesses = model.weaknesses.length
      ? "<ul>"+model.weaknesses.map(function(w){return "<li><b>"+esc(w.name)+"</b> — "+w.pct+"% ("+w.correct+"/"+w.n+")</li>";}).join("")+"</ul>"
      : "<p class='muted'>Nothing fell below the 70% threshold with enough items to flag.</p>";
    var recs = "<ol>"+model.recommendations.map(function(r){
      return "<li><b>"+esc(r.area)+"</b> <span class='muted'>("+r.pct+"%)</span><br>"+esc(r.text)+"</li>";
    }).join("")+"</ol>";

    return [
"<!DOCTYPE html><html><head><meta charset='utf-8'>",
"<title>"+esc(((model.profile&&model.profile.name)||"")+" Practice Report").trim()+"</title>",
"<style>",
"  @page{margin:16mm;}",
"  body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;",
"    color:#16202b;line-height:1.45;font-size:12px;margin:0;}",
"  h1{font-size:20px;margin:0 0 2px;} h2{font-size:14px;margin:22px 0 6px;",
"    border-bottom:1px solid #d8dee6;padding-bottom:4px;}",
"  .brand{font-size:10px;letter-spacing:1.4px;text-transform:uppercase;color:#4a9d7f;font-weight:700;}",
"  .sub{color:#63707e;font-size:11px;margin:0 0 14px;}",
"  .hero{display:flex;gap:20px;align-items:center;border:1px solid #d8dee6;border-radius:10px;padding:14px;margin:10px 0;}",
"  .big{font-size:40px;font-weight:700;line-height:1;}",
"  .biglbl{font-size:10px;text-transform:uppercase;letter-spacing:1px;color:#63707e;}",
"  .facts{display:flex;gap:22px;flex-wrap:wrap;}",
"  .fact b{display:block;font-size:15px;} .fact span{font-size:10px;color:#63707e;}",
"  table{width:100%;border-collapse:collapse;margin:6px 0 4px;}",
"  th,td{border-bottom:1px solid #e6ebf0;padding:5px 6px;text-align:left;font-size:11px;}",
"  th{color:#63707e;font-weight:600;font-size:10px;text-transform:uppercase;letter-spacing:.4px;}",
"  td.num,th.num{text-align:right;white-space:nowrap;}",
"  td.pct{font-weight:700;}",
"  .strong{color:#2f8656;} .solid{color:#3a7f68;} .developing{color:#a8652a;} .weak{color:#b04747;}",
"  .flag{font-size:9px;color:#a8652a;border:1px solid #e3d3bf;border-radius:4px;padding:0 4px;}",
"  .cols{display:flex;gap:16px;} .col{flex:1;border:1px solid #d8dee6;border-radius:8px;padding:10px 12px;}",
"  .col h3{margin:0 0 6px;font-size:11px;text-transform:uppercase;letter-spacing:.5px;color:#63707e;}",
"  ul,ol{margin:4px 0;padding-left:18px;} li{margin:4px 0;}",
"  .muted{color:#63707e;}",
"  .foot{margin-top:20px;padding-top:8px;border-top:1px solid #d8dee6;font-size:9px;color:#63707e;}",
"  .callout{background:#fdf6ea;border:1px solid #e3d3bf;border-radius:8px;padding:8px 10px;font-size:11px;margin:8px 0;}",
"  @media print{ .noprint{display:none;} }",
"</style></head><body>",
"<div class='brand'>Rounds Codex"+((model.profile&&model.profile.name)?" &middot; "+esc(model.profile.name)+" practice":"")+"</div>",
"<h1>Performance Report</h1>",
"<p class='sub'>"+esc(m.attempted+" of "+m.total+" items scored")
  + (m.label? " &middot; "+esc(m.label):"") + " &middot; " + esc(when) + "</p>",
m.partial ? "<div class='callout'>Partial attempt — this report covers only the "+m.attempted+
            " item(s) answered before exiting.</div>" : "",
"<div class='hero'><div><div class='big'>"+o.pct+"%</div><div class='biglbl'>overall</div></div>",
"<div class='facts'>",
"  <div class='fact'><b>"+o.itemsCorrect+" / "+o.itemsScored+"</b><span>items fully correct</span></div>",
"  <div class='fact'><b>"+o.credit+" / "+o.max+"</b><span>credit earned</span></div>",
"  <div class='fact'><b>"+o.partialMisses+"</b><span>partial-credit items</span></div>",
  (model.split && model.split.withMax>0
    ? "<div class='fact'><b>"+model.split.withPct+"%</b><span>"+esc(model.split.withLabel||"case items")+"</span></div>"
     +"<div class='fact'><b>"+model.split.withoutPct+"%</b><span>"+esc(model.split.withoutLabel||"standalone items")+"</span></div>"
    : ""),
"</div></div>",
(model.breakdowns||[]).map(function(b){
  return (b.rows && b.rows.length) ? "<h2>"+esc(b.title)+"</h2>"+rowsTable(b.rows) : "";
}).join(""),
"<h2>Strengths and weaknesses</h2>",
"<div class='cols'><div class='col'><h3>Strengths</h3>"+strengths+"</div>",
"<div class='col'><h3>Needs work</h3>"+weaknesses+"</div></div>",
"<h2>Recommendations</h2>", recs,
"<div class='foot'>"+esc((model.profile && model.profile.pdfFooter) ||
  "Educational practice material for Rounds Codex. Scores are practice feedback only and do not predict exam pass or fail.")+
" Areas marked &ldquo;limited sample&rdquo; had fewer than "+RPT.MIN_N+" items on this attempt.</div>",
"</body></html>"
    ].join("\n");
  };

  RPT.downloadPdf = function(model){
    var html = RPT.buildPdfHtml(model);
    var w = window.open("", "_blank");
    if(!w){ alert("Please allow pop-ups to download the report PDF."); return; }
    w.document.open(); w.document.write(html); w.document.close();
    // give the new document a tick to lay out before printing
    setTimeout(function(){ try{ w.focus(); w.print(); }catch(e){} }, 350);
  };
})();
