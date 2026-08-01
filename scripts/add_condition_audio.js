#!/usr/bin/env node
/*
 * Wire the narrated audio player into condition pages.
 *
 *     node scripts/add_condition_audio.js <site-root>
 *
 * The bar sits directly under the "Take the Quiz" / "Image Gallery" row on a condition
 * page, for the conditions listed in RC_AUDIO. Congestive Heart Failure is the pilot.
 *
 * Five surgeries, each asserted; refuses to run twice.
 *
 * WHY THE RECORDING IS NOT IN sw.js CORE
 * CORE is precached on service-worker install. A 5.9 MB file there means every visitor
 * downloads six megabytes before the app is usable offline, on a data plan they did not
 * agree to spend. The player sets preload="metadata", so a condition page costs one
 * range request for the header and nothing more until Play is pressed. That is a
 * deliberate omission, not an oversight -- if narration expands past the pilot, decide
 * cache-on-play versus network-only once, for all of it.
 *
 * WHY RC_AUDIO LIVES IN index.html AND NOT AN EIGHTH CONTENT FILE
 * Same reasoning as the clinical guidelines, which went under a key in resident.json
 * rather than becoming their own file: an eighth entry in content/ means editing the
 * loader FILES list AND sw.js CORE, and forgetting the second leaves the app fine
 * online and broken offline. One pilot entry does not earn that.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2];
if (!ROOT) { console.error('usage: add_condition_audio.js <site-root>'); process.exit(2); }
const IDX = path.join(ROOT, 'index.html');
if (!fs.existsSync(IDX)) { console.error('missing: ' + IDX); process.exit(2); }

let html = fs.readFileSync(IDX, 'utf8');
if (html.includes('RC_AUDIO')) { console.error('FAILED: index.html already carries the audio player.'); process.exit(2); }

const edits = [];
function sub(label, find, replace, expect = 1) {
  const n = html.split(find).length - 1;
  if (n !== expect) { console.error(`FAILED ${label}: found ${n} occurrences, expected ${expect}`); process.exit(1); }
  html = html.replace(find, replace);
  edits.push(label);
}

/* The component, inlined from its source so the shipped code is the tested code --
   the same arrangement as calc_engine.js. Edit scripts/audio_player.js and re-run. */
const player = fs.readFileSync(path.join(__dirname, 'audio_player.js'), 'utf8')
  .replace(/^'use strict';$/m, '')
  .replace(/if \(typeof module[\s\S]*$/, '');
/* The stylesheet comes from requiring the module, not from re-parsing its source.
   The first version pulled the RCAP_CSS array out with a regex and eval'd it, which
   worked and was unreadable; the module already exports the built string. */
const { RCAP_CSS } = require('./audio_player.js');
if (!RCAP_CSS || RCAP_CSS.indexOf('.rcap-pop[hidden]') < 0) {
  console.error('FAILED: RCAP_CSS missing, or missing the [hidden] rule the popovers depend on');
  process.exit(1);
}

/* 1 ── the component + the registry ---------------------------------------- */
sub('audio player module',
  'function paint(y){',
  `/* Conditions with a narrated recording. id -> {src, title, duration in seconds}.
   The duration is the real decoded length, so the bar shows 6:06 before a byte of
   audio is fetched; the player re-checks it against the file and corrects itself if
   they ever disagree. */
var RC_AUDIO = {
  "chf": { src: "assets/audio/chf.mp3", title: "Congestive Heart Failure", duration: 366.628563 }
};

${player}

function condAudioHTML(id){
  var a = RC_AUDIO[id];
  return a ? rcapHTML(a) : '';
}

function paint(y){`);

/* 2 ── the bar, directly under the quiz / gallery row ---------------------- */
const cta = "</button>`:''}</div>`:''}</div>";
sub('audio bar under the CTA row', cta,
    "</button>`:''}</div>`:''}${condAudioHTML(id)}</div>");

/* 3 ── wire it on paint. paint() rebuilds the view wholesale, so this runs again on
   every visit; rcapInit is idempotent and the old node's audio is stopped by the
   observer inside it. */
sub('rcapInit on the detail view',
  "else if(r.v==='detail'){s.innerHTML=detailHTML(r.id);rxInjectCond(r.id);}",
  "else if(r.v==='detail'){s.innerHTML=detailHTML(r.id);rxInjectCond(r.id);rcapInit(s);}");

/* 4 ── styles ------------------------------------------------------------- */
sub('audio player CSS',
  '#nav button[data-v=calc] span{',
  '/* Injected from scripts/audio_player.js RCAP_CSS -- edit there and re-run. */\n' +
  RCAP_CSS + '\n#nav button[data-v=calc] span{');

fs.writeFileSync(IDX, html);
console.log(`${edits.length} edits:`);
edits.forEach(e => console.log('  - ' + e));
console.log('\nremember: assets/audio/chf.mp3 must be uploaded alongside index.html,');
console.log('and it is deliberately NOT in sw.js CORE.');
