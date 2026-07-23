const { JSDOM } = require("jsdom");
const fs=require("fs");
const dom=new JSDOM("<!DOCTYPE html><html><head></head><body></body></html>",{pretendToBeVisual:true});
global.window=dom.window; global.document=dom.window.document; global.Option=dom.window.Option;
global.setInterval=dom.window.setInterval; global.clearInterval=dom.window.clearInterval;
window.confirm=()=>true; window.scrollTo=()=>{}; window.alert=()=>{};
window.NCLEX_DATA=require("./nclex-data.js");
window.eval(fs.readFileSync("./nclex-store.js","utf8"));
window.eval(fs.readFileSync("./nclex-logic.js","utf8"));
window.eval(fs.readFileSync("../report/nclex-report.js","utf8"));
const I=window.NCLEX._internal, RPT=window.NCLEX_REPORT, S=window.NCLEX_STORE;
let pass=0,fail=0;
function ok(c,m){ if(c){pass++;console.log("  PASS  "+m);} else {fail++;console.log("  FAIL  "+m);} }

function fakeSession(items, acc, stopAt){
  const responses=items.map(it=>I.newResponse(it));
  items.forEach((it,i)=>{
    if(stopAt!=null && i>=stopAt) return;
    const right=Math.random()<acc, r=responses[i];
    switch(it.type){
      case "mc": r.pick=right?it.key:(it.key+1)%it.opts.length; break;
      case "sata": case "selectN": r.picks=right?it.key.slice():[0]; break;
      case "matrixMC": it.rows.forEach((_,ri)=>r.rows[ri]=right?it.key[ri]:0); break;
      case "matrixMR": it.rows.forEach((_,ri)=>r.rows[ri]=right?it.key[ri].slice():[]); break;
      case "cloze": it.blanks.forEach((b,bi)=>r.blanks[bi]=right?b.key:0); break;
      case "ddTable": it.rows.forEach((row,ri)=>r.rows[ri]=right?row.key:0); break;
      case "pair": r.first=right?it.pair.first.key:0; r.second=right?it.pair.second.key:0; break;
      case "bowtie": if(right){r.a=it.bowtie.keyA.slice();r.c=it.bowtie.keyC;r.p=it.bowtie.keyP.slice();} break;
      case "numeric": r.val=right?it.numeric.answer:0; break;
    }
  });
  return {mode:"exam",items,responses,label:"Exam form",timed:false,startTs:Date.now()-1800000,pos:3};
}

console.log("== adapters ==");
ok(S.adapterName()==="memory","defaults to memory adapter");
ok(typeof S.LocalStorageAdapter==="function","LocalStorageAdapter available");
ok(typeof S.BridgeAdapter==="function","BridgeAdapter available (native shell)");
ok(S.SCHEMA===1,"schema version stamped");

console.log("== localStorage adapter works ==");
S.use(S.LocalStorageAdapter("test:"));
ok(S.adapterName()==="localStorage","swapped to localStorage");
S.use(S.MemoryAdapter());  // back to memory for the rest

console.log("== in-progress save / rehydrate ==");
const form=I.buildExamForm();
const sess=fakeSession(form,0.7,20);
const id=S.saveInProgress(sess);
ok(!!id,"saved in-progress, got id");
ok(S.hasInProgress(),"hasInProgress true");
const rec=S.loadInProgress();
ok(rec.itemIds.length===85,"stored 85 item ids");
ok(rec.pos===3,"stored position");
ok(JSON.stringify(rec)===JSON.stringify(JSON.parse(JSON.stringify(rec))),"record is pure JSON (survives serialization)");
const hy=S.rehydrate(rec, window.NCLEX_DATA);
ok(hy.items.length===85,"rehydrated 85 items");
ok(hy.items[0].id===rec.itemIds[0],"rehydrated in original order");
ok(hy.responses.length===85,"responses restored");
ok(hy.resumed===true,"marked as resumed");

console.log("== rehydrate tolerates a retired item ==");
const shortBank = window.NCLEX_DATA.filter(it=>it.id!==rec.itemIds[5]);
const hy2=S.rehydrate(rec, shortBank);
ok(hy2.items.length===84,"skips an item no longer in the bank (84)");

console.log("== record completed attempt ==");
S.clearInProgress();
const s2=fakeSession(form,0.75);
const model=RPT.build(s2,I.SC,false);
const aid=S.recordAttempt(s2,model);
ok(!!aid,"attempt recorded");
const list=S.listAttempts();
ok(list.length===1,"history has 1 attempt");
ok(list[0].pct===model.overall.pct,"summary pct matches model");
ok(!!list[0].byCat && !!list[0].bySubj && !!list[0].byType,"rollups stored for all 3 axes");
ok(Object.keys(list[0].bySubj).length>0,"subject rollup non-empty");
const detail=S.getAttempt(aid);
ok(detail && detail.itemIds.length===85,"detail record stored with item ids");
ok(Array.isArray(detail.missIdx),"missed indexes stored for review");
ok(!S.hasInProgress(),"in-progress cleared after recording");

console.log("== mastery tracking ==");
const mast=S.getMastery();
ok(Object.keys(mast).length===85,"mastery updated for all 85 items");
const one=mast[form[0].id];
ok(one && one.seen===1,"item seen count = 1");
S.recordAttempt(fakeSession(form,0.3),RPT.build(fakeSession(form,0.3),I.SC,false));
ok(S.getMastery()[form[0].id].seen===2,"seen count increments across attempts");
ok(Array.isArray(S.weakItems(1)),"weakItems queue available");

console.log("== trends ==");
for(let i=0;i<3;i++){
  const s=fakeSession(form,0.5+i*0.15);
  S.recordAttempt(s,RPT.build(s,I.SC,false));
}
const t=S.trend();
ok(t.length===5,"trend has all 5 attempts");
ok(t[0].at <= t[t.length-1].at,"trend is oldest-first (chartable)");
const ct=S.trend("subj:cardiac");
ok(ct.length===5,"per-subject trend series works");
ok(ct.every(p=>p.pct===null||typeof p.pct==="number"),"trend points numeric or null");
const d=S.delta();
ok(d && typeof d.change==="number","delta computes improvement");

console.log("== dashboard ==");
const dash=S.dashboard();
ok(dash.attempts===5,"dashboard counts attempts");
ok(typeof dash.average==="number","dashboard average");
ok(dash.best && typeof dash.best.pct==="number","dashboard best attempt");
ok(Array.isArray(dash.slipping),"slipping areas computed");
ok(Array.isArray(dash.weakItems),"weak items list");

console.log("== pruning keeps storage bounded ==");
for(let i=0;i<50;i++){
  const s=fakeSession(form.slice(0,10),0.6);
  S.recordAttempt(s,RPT.build(s,I.SC,false));
}
ok(S.listAttempts().length<=50,"attempt list capped at 50 (got "+S.listAttempts().length+")");
const orphan=S._adapter().keys().filter(k=>k.indexOf("nclex:attempt:")===0).length;
ok(orphan<=50,"detail records pruned with summaries ("+orphan+")");

console.log("== engine uses the store ==");
const root=window.NCLEX.buildNclexPatched(document);
const St=I.Storage;
ok(typeof St.record==="function","engine Storage exposes record()");
St.save(fakeSession(form,0.5,5));
ok(St.has(),"engine save -> store");
const loaded=St.load();
ok(loaded && loaded.items.length===85,"engine load rehydrates a live session");
St.clear();
ok(!St.has(),"engine clear works");

console.log("== reset ==");
S.resetAll();
ok(S.listAttempts().length===0,"resetAll clears history");
ok(Object.keys(S.getMastery()).length===0,"resetAll clears mastery");

console.log("\n== SUMMARY ==");
console.log("passed: "+pass+"  failed: "+fail);
process.exit(fail?1:0);
