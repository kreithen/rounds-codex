const { JSDOM } = require("jsdom");
const fs=require("fs");
const dom=new JSDOM("<!DOCTYPE html><html><head></head><body></body></html>",{pretendToBeVisual:true});
global.window=dom.window; global.document=dom.window.document; global.Option=dom.window.Option;
global.setInterval=dom.window.setInterval; global.clearInterval=dom.window.clearInterval;
window.confirm=()=>true; window.scrollTo=()=>{}; window.alert=()=>{};
window.NCLEX_DATA=require("./nclex-data.js");
window.eval(fs.readFileSync("./nclex-logic.js","utf8"));
window.eval(fs.readFileSync("../report/nclex-report.js","utf8"));
const I=window.NCLEX._internal, RPT=window.NCLEX_REPORT;
let pass=0,fail=0;
function ok(c,m){ if(c){pass++;console.log("  PASS  "+m);} else {fail++;console.log("  FAIL  "+m);} }

// mount
const root=window.NCLEX.buildNclexPatched(document);

console.log("== report module ==");
ok(!!RPT,"report module loaded");
ok(typeof RPT.build==="function" && typeof RPT.render==="function","build+render exposed");
ok(typeof RPT.downloadPdf==="function" && typeof RPT.buildPdfHtml==="function","pdf export exposed");

// build a scored session
function makeSession(items,acc,stopAt){
  const responses=items.map(it=>I.newResponse(it));
  items.forEach((it,i)=>{
    if(stopAt!=null && i>=stopAt) return;
    const right=Math.random()<acc, r=responses[i];
    switch(it.type){
      case "mc": r.pick=right?it.key:(it.key+1)%it.opts.length; break;
      case "sata": case "selectN": r.picks=right?it.key.slice():[(it.key[0]+1)%it.opts.length]; break;
      case "matrixMC": it.rows.forEach((_,ri)=>r.rows[ri]=right?it.key[ri]:(it.key[ri]+1)%it.cols.length); break;
      case "matrixMR": it.rows.forEach((_,ri)=>r.rows[ri]=right?it.key[ri].slice():[]); break;
      case "cloze": it.blanks.forEach((b,bi)=>r.blanks[bi]=right?b.key:(b.key+1)%b.opts.length); break;
      case "ddTable": it.rows.forEach((row,ri)=>r.rows[ri]=right?row.key:(row.key+1)%row.opts.length); break;
      case "pair": r.first=right?it.pair.first.key:0; r.second=right?it.pair.second.key:0; break;
      case "bowtie": if(right){r.a=it.bowtie.keyA.slice();r.c=it.bowtie.keyC;r.p=it.bowtie.keyP.slice();} break;
      case "numeric": r.val=right?it.numeric.answer:it.numeric.answer+99; break;
    }
  });
  return {mode:"exam",items,responses,label:"Exam form",timed:false,startTs:Date.now()-2400000};
}

console.log("== model integrity ==");
const form=I.buildExamForm();
const m=RPT.build(makeSession(form,0.7),I.SC,false);
ok(m.overall.pct>=0&&m.overall.pct<=100,"overall pct in range ("+m.overall.pct+"%)");
ok(m.categories.length>0 && m.subjects.length>0 && m.types.length>0,"all three breakdowns populated");
ok(m.subjects.every(s=>s.name && s.name!==s.key || RPT.SUBJNAME[s.key]===undefined),"subjects have display names");
ok(m.meta.attempted===85,"scored all 85 attempted");
ok(Array.isArray(m.recommendations)&&m.recommendations.length>0,"recommendations generated ("+m.recommendations.length+")");
ok(m.recommendations.length<=5,"recommendations capped at 5");

console.log("== sample-size policy ==");
const limited=m.subjects.filter(s=>s.limited);
ok(limited.length>0,"limited-sample areas exist and are flagged ("+limited.map(s=>s.name+" n="+s.n).join(", ")+")");
ok(m.weaknesses.every(w=>!w.limited),"no limited-sample area promoted to weaknesses");
ok(m.strengths.every(s=>!s.limited),"no limited-sample area promoted to strengths");
ok(m.subjects.length===new Set(m.subjects.map(s=>s.key)).size,"subjects not duplicated");
ok(limited.every(l=>typeof l.pct==="number"),"limited areas still scored+shown (not hidden)");

console.log("== rendering ==");
RPT.injectCSS(document);
ok(!!document.getElementById("nclex-report-style"),"report CSS injected");
RPT.render(m,root,{onReviewMisses(){},onRetake(){},onBackToApp(){},onDownloadPdf(){}});
ok(root.querySelector(".nr-ringpct")!=null,"headline score ring rendered");
ok(root.querySelectorAll(".nr-block").length>=4,"breakdown + s/w + recs blocks rendered");
ok(root.querySelector(".nr-swgood")!=null&&root.querySelector(".nr-swbad")!=null,"strengths & weaknesses columns");
ok(root.querySelector(".nr-recs")!=null,"recommendations list rendered");
ok(root.querySelectorAll(".nr-bar").length>=20,"breakdown bars rendered ("+root.querySelectorAll(".nr-bar").length+")");
ok(root.textContent.indexOf("not a predicted NCLEX")>=0,"honest disclaimer present");
ok(root.textContent.indexOf("limited sample")>=0,"limited-sample flag visible in UI");

console.log("== PDF export ==");
const html=RPT.buildPdfHtml(m);
ok(html.indexOf("<!DOCTYPE html>")===0,"pdf html is a full document");
ok(html.indexOf("Performance Report")>0,"pdf has title");
ok(html.indexOf("Performance by clinical subject")>0,"pdf has subject breakdown");
ok(html.indexOf("Recommendations")>0,"pdf has recommendations");
ok(html.indexOf("NCSBN")>0,"pdf has disclaimer");
ok(html.indexOf("@page")>0,"pdf has print styles");
ok(!/undefined|NaN/.test(html),"pdf contains no undefined/NaN");

console.log("== partial attempt ==");
const pm=RPT.build(makeSession(form,0.6,10),I.SC,true);
ok(pm.meta.partial===true,"flagged partial");
ok(pm.meta.attempted===10,"only attempted items scored (10)");
ok(pm.overall.max < m.overall.max,"partial max credit smaller than full");
RPT.render(pm,root,{});
ok(root.textContent.indexOf("exited before finishing")>=0,"partial callout shown");

console.log("== weak performer honesty ==");
const wm=RPT.build(makeSession(form,0.2),I.SC,false);
RPT.render(wm,root,{});
ok(wm.strengths.length===0,"no fabricated strengths for a weak attempt");
ok(root.textContent.indexOf("No area reached")>=0,"honest empty-strengths message");

console.log("== save & resume ==");
const S=I.Storage;
ok(!!S,"storage interface exposed");
S.save({mode:"exam",items:form,responses:form.map(it=>I.newResponse(it))});
ok(S.has(),"attempt saved");
window.NCLEX.open();
ok(root.textContent.indexOf("Resume your test")>=0,"resume card appears on home");
S.clear();
window.NCLEX.open();
ok(root.textContent.indexOf("Resume your test")<0,"resume card gone after clear");

console.log("\n== SUMMARY ==");
console.log("passed: "+pass+"  failed: "+fail);
process.exit(fail?1:0);
