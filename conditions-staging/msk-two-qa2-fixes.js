/* Second QA pass on the two MSK modules: apply the corrections the citation check turned up.
 * Every replacement is exact-match and asserted, so a silent no-op cannot pass as a fix.
 */
'use strict';
const fs = require('fs');

const CP = 'conditions-staging/msk-two.json';
const QP = 'quizzes-staging/authored/msk-two.json';
const conds = JSON.parse(fs.readFileSync(CP, 'utf8'));
const quiz = JSON.parse(fs.readFileSync(QP, 'utf8'));
const hf = conds.find(c => c.id === 'hip-fracture');
const bp = conds.find(c => c.id === 'back-pain');

let n = 0;
const set = (obj, path, was, now) => {
  const keys = path.split('.');
  const last = keys.pop();
  const t = keys.reduce((o, k) => o[/^\d+$/.test(k) ? Number(k) : k], obj);
  const cur = t[/^\d+$/.test(last) ? Number(last) : last];
  if (cur !== was) {
    console.error(`NO MATCH at ${path}\n  have: ${JSON.stringify(cur)}\n  want: ${JSON.stringify(was)}`);
    process.exit(1);
  }
  t[/^\d+$/.test(last) ? Number(last) : last] = now;
  n++;
};

/* ---- Hip Fracture ----------------------------------------------------------------- */

// 1. One-year mortality. 20-30% is the classic teaching figure and sits at the TOP of the
//    contemporary range: recent series cluster nearer 16-22%, with meta-analytic ranges of
//    15-30%. Overstating a mortality figure is as much an accuracy failure as understating it,
//    and the teaching point survives the correction intact.
set(hf, 'whatItIs.3',
  "It behaves as a <b>sentinel event</b>, not an isolated injury: roughly <b>20–30% die within a year</b>, many never regain their prior mobility or independence, and the fracture itself predicts the next one.",
  "It behaves as a <b>sentinel event</b>, not an isolated injury: <b>one-year mortality runs about 15–30%</b> depending on the series, many never regain their prior mobility or independence, and the fracture itself predicts the next one.");

set(hf, 'pearls.2',
  "<b>One-year mortality is roughly 20–30%.</b> Treat the diagnosis with the seriousness that number deserves, however routine the operation is.",
  "<b>One-year mortality is about 15–30%</b> — classically quoted as 20–30%, with contemporary series nearer one in five. Treat the diagnosis with the seriousness that number deserves, however routine the operation is.");

// 2. HORIZON-RFT: give the numbers, and say where the mortality result came from. It was not a
//    primary endpoint -- it emerged from the safety analysis -- and a trainee who quotes a
//    mortality benefit should be able to say so when asked.
set(hf, 'pearls.1',
  "<b>Zoledronic acid after hip fracture repair reduced all-cause mortality</b>, not only refracture — an unusual finding for a bone drug, and worth knowing why it is quoted.",
  "<b>Zoledronic acid after hip fracture repair cut new clinical fractures from 13.9% to 8.6%</b> (HORIZON-RFT, a 35% reduction) <b>and all-cause mortality from 13.3% to 9.6%</b>. The mortality figure came out of the safety analysis rather than a primary endpoint — quote it that way, because it is the part people ask about.");

set(hf, 'meds.5.note',
  "HORIZON-RFT: fewer new clinical fractures and lower all-cause mortality; give vitamin D first and correct hypocalcemia",
  "HORIZON-RFT gave the first infusion within 90 days of repair: clinical fractures 8.6% vs 13.9%, all-cause mortality 9.6% vs 13.3%. Load vitamin D first and correct hypocalcemia");

// 3. Which arthroplasty. "Prior function and activity" is true but vague, and NICE names the
//    actual criteria. Note the 2023 update REMOVED the cognitive-impairment exclusion the 2017
//    version carried, so writing the older criteria here would ship superseded guidance.
set(hf, 'medStudent.1',
  "The usual plan: <b>nondisplaced neck</b> → internal fixation; <b>displaced neck in an older adult</b> → arthroplasty; <b>intertrochanteric</b> → cephalomedullary nail or sliding hip screw. Hemiarthroplasty versus total hip turns on prior function and activity.",
  "The usual plan: <b>nondisplaced neck</b> → internal fixation; <b>displaced neck in an older adult</b> → arthroplasty; <b>intertrochanteric</b> → cephalomedullary nail or sliding hip screw. For the displaced neck, <b>total hip rather than hemiarthroplasty</b> if they walked independently outdoors with no more than a stick, have no comorbidity making it unsuitable, and are expected to manage daily activities independently beyond two years.");

// 4. The timing target is a STRONG recommendation in the AAOS 2021 CPG, which is worth saying:
//    it is the difference between a target and a preference when a trainee is challenged on it.
set(hf, 'medStudent.2',
  "<b>Operate early — generally within 24–48 hours.</b> Delay beyond that tracks with more complications; the argument is about how early helps, not whether waiting hurts.",
  "<b>Operate early — within 24–48 hours</b>, which AAOS rates on strong evidence. Delay beyond that tracks with more complications; the argument is about how much earlier helps, not whether waiting hurts.");

/* ---- Low Back Pain --------------------------------------------------------------- */

// 5. The module's own headline citation (ACP 2017) makes non-drug treatment the FIRST
//    recommendation for acute and subacute pain, not just chronic. As drafted, the acute
//    pathway went straight to NSAIDs and the non-drug-first message was reserved for chronic
//    pain -- which is the guideline's second-line advice presented as its first.
set(bp, 'flow.2.desc',
  "Stay active, avoid bed rest, NSAIDs with or without a short muscle relaxant, and explicit reassurance about the natural history.",
  "Stay active, avoid bed rest, and explicit reassurance about the natural history. Non-drug options come first — superficial heat, massage, acupuncture or spinal manipulation — with NSAIDs, or a short course of a muscle relaxant, if drug treatment is wanted.");

set(bp, 'medStudent.4',
  "First-line care for chronic pain is <b>non-pharmacologic</b>: exercise, multidisciplinary rehabilitation, and psychological approaches. Say this before reaching for a drug.",
  "<b>Non-pharmacologic care is first-line at every stage</b>, not only in chronic pain: superficial heat, massage, acupuncture or spinal manipulation for acute and subacute pain, and exercise, multidisciplinary rehabilitation and psychological approaches when it becomes chronic. Say this before reaching for a drug.");

set(bp, 'meds.0.note',
  "Modest effect sizes; use the lowest effective dose and check renal, GI and cardiovascular risk",
  "First-line among the drugs, but non-drug treatment comes ahead of all of them; modest effect sizes, so use the lowest effective dose and check renal, GI and cardiovascular risk");

// 6. This note was ambiguous in a direction that matters. "Suspected cord compression" sat
//    one line below a red-flag list headed by cauda equina, and steroids are NOT the treatment
//    for a disc-related cauda equina -- decompression is. Name the malignant cause explicitly.
set(bp, 'meds.6.note',
  "Different situation entirely from suspected cord compression, where steroids are urgent",
  "Do not carry this across to <b>malignant</b> spinal cord compression, where dexamethasone is urgent. Cauda equina from a disc is a decompression, not a steroid");

/* ---- keep the quiz consistent with the module ------------------------------------- */

// A quiz option that still taught 20-30% while the module said 15-30% would have the app
// contradicting itself one tap apart. The option remains discriminating against "under 5%"
// and "over 70%".
const q10 = quiz['hip-fracture'].questions[9];
const wasOpt = 'Roughly 20 to 30 percent die within a year of the fracture';
const nowOpt = 'Roughly 15 to 30 percent die within a year of the fracture';
const i = q10.ch.indexOf(wasOpt);
if (i < 0 || i !== q10.correct) { console.error('hip-fracture Q10: expected option not the marked answer'); process.exit(1); }
q10.ch[i] = nowOpt;
q10.correct = q10.ch.indexOf(nowOpt);   // re-derive rather than assume the index held
if (q10.why[q10.correct].trim() !== '') { console.error('hip-fracture Q10: why[] not blank at the answer'); process.exit(1); }
q10.exp = 'About 15 to 30 percent of older adults die within a year of a hip fracture, and many never regain their previous mobility or independence. The fracture behaves as a sentinel event rather than an isolated injury.';
n += 2;

const q6 = quiz['hip-fracture'].questions[5];
q6.exp = 'In HORIZON-RFT, annual zoledronic acid begun within 90 days of hip fracture repair cut new clinical fractures from 13.9% to 8.6% and all-cause mortality from 13.3% to 9.6% — the mortality result coming from the safety analysis rather than a primary endpoint. Vitamin D must be repleted first to avoid symptomatic hypocalcemia.';
n++;

// LBP Q5's explanation says acetaminophen "remains a reasonable option": leave that, it is
// accurate. But Q7's closing line now understates the guideline the same way medStudent.4 did.
const q7 = quiz['back-pain'].questions[6];
const wasExp = 'Opioids should be avoided for chronic low back pain. In a randomized comparison they were no better than non-opioid medications for pain-related function, with more adverse effects. First-line care for chronic pain is non-pharmacologic.';
if (q7.exp !== wasExp) { console.error('back-pain Q7: explanation not as expected'); process.exit(1); }
q7.exp = 'Opioids should be avoided for chronic low back pain. In a randomized comparison they were no better than non-opioid medications for pain-related function, with more adverse effects. Non-pharmacologic care is first-line — exercise, rehabilitation and psychological approaches — with NSAIDs the first drug if one is needed.';
n++;

fs.writeFileSync(CP, JSON.stringify(conds, null, 2) + '\n');
fs.writeFileSync(QP, JSON.stringify(quiz, null, 2) + '\n');
console.log(`${n} corrections applied`);
