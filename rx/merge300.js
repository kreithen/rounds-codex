/* merge300.js — concatenate all 6 datasets, apply a light category
   canonicalization (exact synonyms only), validate, and write:
     - rx-drugs-300.json        (full merged array, pretty)
     - rx-drugs-300.min.json    (minified)
   Does NOT touch the live index.html. Handoff artifact for Claude Code. */
const fs = require('fs');
function load(f,name){eval(fs.readFileSync(f,'utf8')+';global.__X='+name+';');return global.__X;}
const sets=[['rx-data.js','RX_DATA'],['rx-data2.js','RX_DATA2'],['rx-data3.js','RX_DATA3'],
            ['rx-data4.js','RX_DATA4'],['rx-data5.js','RX_DATA5'],['rx-data6.js','RX_DATA6']];
let all=[].concat(...sets.map(s=>load(s[0],s[1])));

// exact-synonym category consolidation (reduces "by category" fragmentation)
const CANON={'Oncology':'Heme & Onc','Dermatology':'Derm & Wounds'};
all=all.map(d=>Object.assign({},d,{cat:CANON[d.cat]||d.cat}));

// validate
const ids=all.map(d=>d.id);
const dupes=ids.filter((v,i)=>ids.indexOf(v)!==i);
if(dupes.length) throw new Error('dupe ids: '+dupes.join(','));
const REQ=['id','generic','trade','cat','sched','cls','ver','cond','boxed','uses','dA','dP','dur','hl','se','ix','preg','pills','src'];
all.forEach(d=>{const mk=REQ.filter(k=>!(k in d));if(mk.length)throw new Error(d.id+' missing '+mk);});

fs.writeFileSync('rx-drugs-300.json', JSON.stringify(all,null,1));
fs.writeFileSync('rx-drugs-300.min.json', JSON.stringify(all));
const cats={}; all.forEach(d=>cats[d.cat]=(cats[d.cat]||0)+1);
console.log('merged',all.length,'drugs ->',(fs.statSync('rx-drugs-300.json').size/1024|0)+'KB pretty,',(fs.statSync('rx-drugs-300.min.json').size/1024|0)+'KB min');
console.log('categories:',JSON.stringify(cats));
