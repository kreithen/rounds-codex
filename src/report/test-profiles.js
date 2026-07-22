// Proves the report engine is exam-agnostic: registers a mock USMLE profile with
// DIFFERENT field names and confirms the same engine produces a correct report.
const { JSDOM } = require("jsdom");
const fs=require("fs");
const dom=new JSDOM("<!DOCTYPE html><html><head></head><body><div id='nclex-root'></div></body></html>",{pretendToBeVisual:true});
global.window=dom.window; global.document=dom.window.document;
window.eval(fs.readFileSync("./nclex-report.js","utf8"));
const RPT=window.NCLEX_REPORT;
let pass=0,fail=0;
function ok(c,m){ if(c){pass++;console.log("  PASS  "+m);} else {fail++;console.log("  FAIL  "+m);} }

console.log("== profile registry ==");
ok(typeof RPT.registerProfile==="function","registerProfile exposed");
ok(!!RPT.getProfile("nclex"),"nclex profile registered");
ok(RPT.getProfile("nclex").groups.length===3,"nclex has 3 breakdown axes");

// A mock USMLE profile using DIFFERENT field names than NCLEX
RPT.registerProfile("usmle", {
  name:"USMLE",
  groups:[
    { field:"system", title:"Performance by organ system",
      note:"Organ systems on the Step blueprint.",
      labels:{cardio:"Cardiovascular", renal:"Renal & Urinary", neuro:"Nervous System", resp:"Respiratory"} },
    { field:"discipline", title:"Performance by discipline",
      note:"Basic and clinical science disciplines.",
      labels:{path:"Pathology", pharm:"Pharmacology", physio:"Physiology", micro:"Microbiology"} },
    { field:"type", title:"Performance by item format", labels:{mc:"Multiple choice"} }
  ],
  // USMLE items are all standalone -> no split axis
  splitBy:null,
  actions:{
    system:{ cardio:"Review cardiac path and pharm.", renal:"Review renal physiology and acid-base." },
    discipline:{ path:"Review pathology mechanisms.", pharm:"Review drug classes and mechanisms." }
  },
  multiFormats:[], calcFormat:null,
  disclaimer:"Practice feedback only; not a predicted USMLE score.",
  pdfFooter:"Educational practice material. Not affiliated with the NBME or FSMB."
});
ok(!!RPT.getProfile("usmle"),"usmle profile registered");

console.log("== engine handles a foreign schema ==");
// items use system/discipline, NOT cat/subj/caseId
const items=[];
const systems=["cardio","renal","neuro","resp"], disciplines=["path","pharm","physio","micro"];
for(let i=0;i<40;i++){
  items.push({ id:"u"+i, type:"mc", system:systems[i%4], discipline:disciplines[i%4],
               opts:["a","b","c","d"], key:0, stem:"stem", rationale:"why" });
}
const responses=items.map((it,i)=> ({pick: i%3===0 ? 1 : 0}));  // ~2/3 correct
const SC={ mc:(it,r)=>({credit:r.pick===it.key?1:0,max:1,correct:r.pick===it.key}) };
const session={mode:"exam",items,responses,label:"Step 1",startTs:Date.now()-3600000,profile:"usmle"};
const m=RPT.build(session,SC,false);

ok(m.profile.name==="USMLE","used the usmle profile");
ok(m.breakdowns.length===3,"3 breakdowns produced");
ok(m.breakdowns[0].field==="system","first axis is system (not cat)");
ok(m.breakdowns[0].rows.length===4,"4 organ systems bucketed");
ok(m.breakdowns[0].rows[0].name!==m.breakdowns[0].rows[0].key,"system labels applied ("+m.breakdowns[0].rows[0].name+")");
ok(m.breakdowns[1].field==="discipline","second axis is discipline");
ok(m.overall.pct>0 && m.overall.pct<100,"overall computed ("+m.overall.pct+"%)");
ok(m.split.withMax===0,"no split axis for usmle (splitBy null)");
ok(Array.isArray(m.recommendations)&&m.recommendations.length>0,"recommendations generated");

console.log("== usmle rendering + pdf ==");
const root=document.getElementById("nclex-root");
RPT.injectCSS(document);
RPT.render(m,root,{});
ok(root.textContent.indexOf("organ system")>=0,"renders the organ-system section");
ok(root.textContent.indexOf("discipline")>=0,"renders the discipline section");
ok(root.textContent.indexOf("not a predicted USMLE")>=0,"uses the usmle disclaimer");
ok(root.textContent.indexOf("NCLEX")<0,"no NCLEX text leaked into a USMLE report");
const html=RPT.buildPdfHtml(m);
ok(html.indexOf("organ system")>0,"pdf has organ-system table");
ok(html.indexOf("NBME")>0,"pdf uses the usmle footer");
ok(html.indexOf("NCSBN")<0,"pdf has no NCLEX footer leakage");
ok(!/undefined|NaN/.test(html),"pdf clean of undefined/NaN");

console.log("== nclex profile still intact ==");
const nItems=[{id:"n1",type:"mc",cat:"pharm",subj:"cardiac",caseId:null,opts:["a","b"],key:0,stem:"s",rationale:"r"},
              {id:"n2",type:"mc",cat:"safety",subj:"infectious",caseId:"case-x",opts:["a","b"],key:0,stem:"s",rationale:"r"}];
const nm=RPT.build({mode:"exam",items:nItems,responses:[{pick:0},{pick:1}],label:"t",startTs:Date.now()},SC,false);
ok(nm.profile.name==="NCLEX-RN","defaults to nclex profile");
ok(nm.categories.length>0,"back-compat .categories alias works");
ok(nm.subjects.length>0,"back-compat .subjects alias works");
ok(nm.split.caseMax>0,"back-compat .split.caseMax works");

console.log("\n== SUMMARY ==");
console.log("passed: "+pass+"  failed: "+fail);
process.exit(fail?1:0);
