/* usmle-report.js — registers the "usmle" profile on the SHARED report engine
 * (nclex-report.js) and adapts the live USMLE quiz state into it. Do NOT fork the
 * engine: this only declares a profile + a scorer + a session adapter.
 *
 * The USMLE bank is already tagged by `system` (18 organ systems) and `difficulty`
 * (easy|moderate|hard), and every item is single-best-answer MC, so no tagging pass
 * and no multi-format scoring is needed. Discipline exists but is 89 sub-specialties
 * deep (≈1 item/attempt), so it is intentionally NOT a report axis — every row would
 * be "limited sample" and could not honestly drive a recommendation.
 *
 * Load AFTER nclex-report.js. Exposes NCLEX_REPORT.buildUsmle / renderUsmle.
 */
(function () {
  "use strict";
  var RPT = window.NCLEX_REPORT;
  if (!RPT || typeof RPT.registerProfile !== "function") return; // engine not present

  // ---- study advice per weak area (honest pointers, never a score prediction) ----
  var SYSTEM_ACTIONS = {
    "General Principles": "Re-study biochemistry, genetics, and cell/molecular fundamentals and their regulation before layering on organ systems.",
    "Cardiovascular": "Drill cardiac pathophysiology (ischemia, heart failure, valvular lesions) and the pharmacology of antihypertensives, antiarrhythmics, and anticoagulants.",
    "Respiratory & Renal/Urinary": "Review pulmonary gas exchange and obstructive vs restrictive disease, plus renal physiology and acid–base handling.",
    "Gastrointestinal": "Focus on GI pathology (IBD, hepatitis, malabsorption) and the anatomy and physiology of digestion and the liver.",
    "Reproductive & Endocrine": "Review endocrine feedback loops (thyroid, adrenal, HPA/HPG axes) and reproductive pathology and pharmacology.",
    "Musculoskeletal / Skin": "Study bone and joint pathology, autoimmune connective-tissue disease, and dermatologic morphology with its systemic associations.",
    "Immune / Blood & Lymphoreticular": "Drill immunology (hypersensitivity, immunodeficiency) and hematologic pathology (anemias, leukemias, coagulation).",
    "Behavioral Health & Nervous System": "Review neuroanatomy and localization, neurologic disease mechanisms, and CNS pharmacology.",
    "Multisystem": "Multisystem items test integration across organs (sepsis, shock, genetic syndromes) — study how one process produces findings in several systems.",
    "Biostatistics & Epidemiology": "Practice study design, test characteristics (sensitivity/specificity, predictive values), and measures of association.",
    "Social Sciences / Ethics": "Review medical ethics (autonomy, consent, capacity), communication skills, and the social determinants of health.",
    "Emergency Medicine": "Prioritize initial stabilization and the next-best-step for acute presentations — airway/breathing/circulation and time-critical diagnoses.",
    "Internal Medicine": "Review the workup and management of common inpatient and outpatient problems, emphasizing next-best-step reasoning.",
    "Obstetrics & Gynecology": "Study routine prenatal care, obstetric complications, and common gynecologic pathology and its management.",
    "Pediatrics": "Review developmental milestones, congenital and genetic disease, and age-specific presentations and management.",
    "Preventive Medicine & Ethics": "Drill screening guidelines, immunization schedules, and the ethics and communication behind prevention.",
    "Psychiatry": "Review DSM criteria for the major disorders and first-line pharmacologic and psychotherapeutic management.",
    "Surgery": "Focus on indications for operative vs non-operative management and peri-operative decision-making."
  };
  var DIFFICULTY_ACTIONS = {
    easy: "Missed easier items usually signal a knowledge gap rather than test-taking — re-study those topics from first principles.",
    moderate: "Moderate items are the bulk of every Step form; shoring these up gives the biggest, most reliable gain.",
    hard: "Harder items reward second-order reasoning — study the explanations you missed and why each distractor was tempting."
  };

  RPT.registerProfile("usmle", {
    name: "USMLE",
    reportTitle: "Your USMLE practice results",
    groups: [
      { field: "system", title: "Performance by organ system",
        note: "Organ systems on the USMLE Step blueprint.", labels: {} },
      { field: "difficulty", title: "Performance by difficulty",
        note: "Item difficulty as authored.", labels: { easy: "Easier", moderate: "Moderate", hard: "Harder" } }
    ],
    splitBy: null,                 // USMLE MC banks have no case/standalone split (CCS is deferred)
    actions: { system: SYSTEM_ACTIONS, difficulty: DIFFICULTY_ACTIONS },
    multiFormats: [], calcFormat: null,
    disclaimer: "Practice feedback only; not a predicted USMLE score.",
    pdfFooter: "Educational practice material. Not affiliated with the NBME or FSMB."
  });

  // ---- scorer: USMLE is uniformly single-best-answer MC ----
  var USMLE_SCORERS = {
    mc: function (item, r) {
      var ok = !!(r && r.pick != null && r.pick === item.key);
      return { credit: ok ? 1 : 0, max: 1, correct: ok };
    }
  };

  // ---- adapt the live USMLE quiz state -> engine session ----
  // quiz = { order:[ids], ans:{id:pickIndex}, mode, elapsed }, byId = id -> bank item
  function buildUsmleSession(quiz, byId, opts) {
    opts = opts || {};
    var order = (quiz && quiz.order) || [];
    var items = order.map(function (id) {
      var q = byId[id] || {};
      return { id: q.id, type: "mc", system: q.system || "Multisystem",
               difficulty: q.difficulty || "moderate", key: q.answer };
    });
    var responses = order.map(function (id) {
      var pick = (quiz.ans && (id in quiz.ans)) ? quiz.ans[id] : null;
      return (pick == null) ? null : { pick: pick };
    });
    return {
      mode: (quiz && quiz.mode) || "exam",
      items: items, responses: responses,
      label: opts.label || "",
      timed: !!opts.timed,
      startTs: opts.startTs || (Date.now() - ((quiz && quiz.elapsed) ? quiz.elapsed * 1000 : 0)),
      profile: "usmle"
    };
  }

  // The shared report CSS references the module's --nx-* design tokens (defined on
  // #nclex-root inside the NCLEX host). The USMLE page has no such root, so we scope
  // the same palette to the report mount here — engine untouched, no leakage.
  function injectVars(doc) {
    doc = doc || document;
    if (doc.getElementById("usmle-report-vars")) return;
    var st = doc.createElement("style");
    st.id = "usmle-report-vars";
    st.textContent =
      "#nclex-root{--nx-bg:#0f1419;--nx-panel:#161d26;--nx-panel2:#1c2530;" +
      "--nx-ink:#e6edf3;--nx-muted:#8b98a5;--nx-line:#2a3441;--nx-chip:#22303c;" +
      "--nx-accent:#4a9d7f;--nx-accent2:#3d7ea6;--nx-good:#3fa66a;--nx-bad:#c65656;" +
      "--nx-warn:#c9752b;--nx-goodbg:rgba(63,166,106,.14);--nx-badbg:rgba(198,86,86,.14);" +
      "--nx-warnbg:rgba(201,117,43,.14);--nx-partbg:rgba(74,157,127,.16);color:var(--nx-ink);}";
    (doc.head || doc.documentElement).appendChild(st);
  }

  RPT.buildUsmle = function (quiz, byId, opts) {
    return RPT.build(buildUsmleSession(quiz, byId, opts), USMLE_SCORERS, !!(opts && opts.partial), "usmle");
  };
  RPT.renderUsmle = function (quiz, byId, mount, opts, hooks) {
    if (RPT.injectCSS) RPT.injectCSS(document);
    injectVars(document);
    var model = RPT.buildUsmle(quiz, byId, opts);
    RPT.render(model, mount, hooks || {});
    return model;
  };

  window.USMLE_SCORERS = USMLE_SCORERS;
})();
