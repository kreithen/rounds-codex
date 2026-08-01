/* Vascular Surgery resident dataset - batch 5 of 12 (entries 21-25).
 * Non-atherosclerotic carotid disease; visceral and renal.
 * Schema: {id,name,sec,present[],dx[],tx[],pearls[],refs[{t,u}]}  sec="vasc"
 */
const RES_VASC_B5 = [
{
  id: "vasc-carotid-dissection-fmd",
  name: "Carotid Dissection and Fibromuscular Dysplasia",
  sec: "vasc",
  present: [
    "Dissection presents with unilateral neck or face pain, headache, and a partial Horner syndrome of ptosis and miosis without anhidrosis",
    "A young patient with stroke and no vascular risk factors should be worked up for dissection before anything else",
    "Often follows trivial trauma - chiropractic manipulation, coughing, a sporting collision - and the trauma is minor enough to be forgotten",
    "Fibromuscular dysplasia is usually asymptomatic and found incidentally, but causes pulsatile tinnitus, headache and dissection, and affects renal arteries more often than carotids"
  ],
  dx: [
    "CTA or MRA with fat-suppressed T1 sequences showing the intramural hematoma as a crescent of high signal in the vessel wall",
    "The classic angiographic appearances are the long tapered string sign of dissection and the string-of-beads of medial fibroplasia in FMD",
    "Duplex may be normal when the dissection is high in the distal internal carotid, which is where most of them are - a normal duplex does not exclude it",
    "Screen the renal arteries and the whole aorta in confirmed FMD; multivessel involvement is the rule and intracranial aneurysms occur in around 10%"
  ],
  tx: [
    "Antithrombotic therapy is the mainstay for dissection; CADISS and TREAT-CAD found no clear superiority of anticoagulation over antiplatelet, and antiplatelet is now generally preferred",
    "Treat for 3-6 months then reimage - most dissections heal, and therapy is stopped or converted to long-term antiplatelet depending on the residual",
    "Stenting is reserved for recurrent ischemic events on adequate medical therapy, an enlarging pseudoaneurysm, or flow-limiting dissection with hemodynamic compromise",
    "Renal FMD with hypertension: balloon angioplasty without stenting is first-line and frequently cures or substantially improves the hypertension",
    "Antiplatelet therapy and blood pressure control for FMD generally, with avoidance of neck manipulation"
  ],
  pearls: [
    "Painful Horner syndrome in a young person is a carotid dissection until imaging says otherwise, and the pupil findings are easy to miss if you do not look for them",
    "Most dissections heal on medical therapy - the instinct to stent is usually wrong and the stent is permanent",
    "Do not stent renal FMD; the lesion is fibrous rather than atherosclerotic, responds to plain angioplasty, and a stent complicates future intervention",
    "FMD is a systemic arteriopathy, so finding it in one bed obliges a look at the others including the brain"
  ],
  refs: [
    { t: "StatPearls: Carotid Artery Dissection", u: "https://www.ncbi.nlm.nih.gov/books/NBK441847/" },
    { t: "First international consensus on the diagnosis and management of fibromuscular dysplasia", u: "https://pubmed.ncbi.nlm.nih.gov/30648933/" },
    { t: "2021 AHA/ASA guideline for the prevention of stroke in patients with stroke and TIA", u: "https://www.ahajournals.org/doi/10.1161/STR.0000000000000375" }
  ]
},
{
  id: "vasc-acute-mesenteric-ischemia",
  name: "Acute Mesenteric Ischemia",
  sec: "vasc",
  present: [
    "Pain out of proportion to examination findings, which is the single most useful clinical statement in the whole of vascular surgery",
    "Four mechanisms: arterial embolism about half, arterial thrombosis a third, nonocclusive mesenteric ischemia, and venous thrombosis",
    "Embolism is abrupt in a patient with atrial fibrillation; thrombosis is on a background of chronic mesenteric symptoms and food fear",
    "Peritonitis and hemodynamic collapse are late and indicate infarcted bowel - by then mortality exceeds 50%"
  ],
  dx: [
    "CTA with arterial and venous phases and no oral contrast, which obscures the mucosa and the vessel - the request has to say so explicitly",
    "Lactate is neither sensitive nor specific early and a normal lactate does not exclude the diagnosis; it rises when bowel is already dead",
    "The superior mesenteric artery embolus typically lodges a few centimeters distal to the origin, sparing the proximal jejunal branches and the middle colic",
    "Nonocclusive ischemia shows diffuse narrowing and spasm in a low-flow patient on vasopressors, with no filling defect"
  ],
  tx: [
    "Heparinize immediately on suspicion and resuscitate; avoid vasopressors that worsen splanchnic vasoconstriction where a fluid strategy will do",
    "Embolism: open embolectomy through a transverse arteriotomy of the superior mesenteric artery, or catheter-based aspiration in the selected patient",
    "Thrombosis: revascularization by retrograde open mesenteric stenting or bypass, since the lesion is at the ostium and needs treating, not just clearing",
    "Resect frankly necrotic bowel, leave marginal bowel, and plan a second-look laparotomy in 24-48 hours - the decision to leave bowel is safer when the second look is already booked",
    "Nonocclusive ischemia: correct the low-flow state, stop vasoconstrictors where possible, and consider intra-arterial papaverine"
  ],
  pearls: [
    "Revascularize before you resect - bowel that looks dead often recovers once flow is restored, and resecting first commits the patient to a short gut",
    "The second-look laparotomy is not an admission of uncertainty, it is the standard of care; book it at the first operation",
    "Oral contrast on the CT scan is the most common avoidable error in the workup, and it is ordered by whoever did not specify the protocol",
    "Mesenteric venous thrombosis is a different disease - it is treated with anticoagulation alone in most cases and needs a thrombophilia workup"
  ],
  refs: [
    { t: "SVS clinical practice guidelines", u: "https://www.svs.org/clinical-practice/clinical-practice-guidelines/" },
    { t: "ESVS 2017 clinical practice guidelines on the management of the diseases of mesenteric arteries and veins", u: "https://www.ejves.com/article/S1078-5884(17)30062-4/fulltext" },
    { t: "StatPearls: Acute Mesenteric Ischemia", u: "https://www.ncbi.nlm.nih.gov/books/NBK431068/" }
  ]
},
{
  id: "vasc-chronic-mesenteric-ischemia",
  name: "Chronic Mesenteric Ischemia",
  sec: "vasc",
  present: [
    "Postprandial abdominal pain beginning 15-30 minutes after eating, food fear, and weight loss - the triad is the diagnosis",
    "Overwhelmingly in older female smokers with atherosclerosis elsewhere, and frequently investigated for malignancy first",
    "Weight loss is from avoiding food rather than from malabsorption, and patients describe it as being afraid to eat",
    "Symptoms usually require two of the three mesenteric vessels to be significantly diseased because the collateral network is rich"
  ],
  dx: [
    "CTA is the test of choice and shows ostial calcified stenoses of the celiac axis and superior mesenteric artery",
    "Mesenteric duplex after an overnight fast: superior mesenteric artery peak systolic velocity above 275 cm/s or celiac above 200 cm/s suggests significant stenosis",
    "The diagnosis is clinical plus anatomic - asymptomatic mesenteric stenosis is common in the elderly and must not be treated on imaging alone",
    "Exclude malignancy and peptic disease first; these patients have usually had a negative endoscopy and CT before reaching a vascular clinic"
  ],
  tx: [
    "Endovascular stenting of the superior mesenteric artery is first-line, with lower perioperative morbidity than open repair in this frail population",
    "Restenosis after stenting is common, so surveillance duplex and a willingness to reintervene are part of the plan",
    "Open mesenteric bypass, antegrade from the supraceliac aorta or retrograde from the infrarenal aorta or iliac, is more durable and is preferred in younger, fitter patients",
    "Revascularizing the superior mesenteric artery alone is usually enough; two-vessel reconstruction is not routinely required",
    "Nutritional optimization before elective repair, and cautious refeeding afterward to avoid refeeding syndrome"
  ],
  pearls: [
    "Isolated celiac stenosis in an asymptomatic patient is a normal finding in a substantial fraction of the elderly, usually from median arcuate ligament compression",
    "A patient with the classic triad and two-vessel disease has the diagnosis; further testing mostly delays treatment",
    "The superior mesenteric artery is the vessel that matters - it supplies the territory that infarcts",
    "Untreated, this progresses to acute-on-chronic thrombosis with bowel infarction, so a symptomatic patient should not be left on surveillance"
  ],
  refs: [
    { t: "SVS clinical practice guidelines for the management of chronic mesenteric ischemia", u: "https://www.jvascsurg.org/article/S0741-5214(20)32446-9/fulltext" },
    { t: "ESVS 2017 clinical practice guidelines on the management of the diseases of mesenteric arteries and veins", u: "https://www.ejves.com/article/S1078-5884(17)30062-4/fulltext" },
    { t: "StatPearls: Chronic Mesenteric Ischemia", u: "https://www.ncbi.nlm.nih.gov/books/NBK430748/" }
  ]
},
{
  id: "vasc-mals",
  name: "Median Arcuate Ligament Syndrome",
  sec: "vasc",
  present: [
    "Postprandial epigastric pain, nausea and weight loss in a young, thin patient - typically a woman aged 20 to 40",
    "An epigastric bruit that changes with respiration, louder in expiration when the ligament compresses the celiac axis",
    "A diagnosis of exclusion made after a long and negative gastroenterology workup, often over years",
    "Distinct from atherosclerotic chronic mesenteric ischemia by age, by the single-vessel involvement, and by the respiratory variation"
  ],
  dx: [
    "Duplex with inspiratory and expiratory measurements - celiac velocities that rise markedly in expiration and normalize in deep inspiration",
    "CTA in expiration shows the characteristic hooked appearance of the celiac axis with focal narrowing at its superior aspect and poststenotic dilatation",
    "The hook is what distinguishes it from atherosclerosis, which produces a concentric ostial plaque without respiratory variation",
    "A celiac plexus block that relieves the pain supports a neurogenic mechanism and predicts response to release in some series"
  ],
  tx: [
    "Laparoscopic or robotic median arcuate ligament release with division of the ligament and the surrounding celiac plexus fibers",
    "Open release when the anatomy is hostile or a concomitant arterial reconstruction is planned",
    "Intraoperative duplex to confirm the celiac velocities have normalized before finishing - persistent stenosis after release means an intrinsic lesion",
    "Celiac artery stenting alone does not work while the ligament is still compressing the vessel and the stent fractures",
    "Persistent intrinsic stenosis after release may need angioplasty and stenting as a staged second procedure"
  ],
  pearls: [
    "Asymptomatic celiac compression is present in up to a quarter of normal people on imaging - the finding does not make the syndrome",
    "Do not stent before release; the ligament will crush the stent and the patient ends up with both problems",
    "Symptom improvement after release is good but not universal, and patients should be counseled that this is one of the less predictable operations in the specialty",
    "Whether the mechanism is ischemic or neurogenic is genuinely unsettled, which is why plexus division is included in the release"
  ],
  refs: [
    { t: "StatPearls: Median Arcuate Ligament Syndrome", u: "https://www.ncbi.nlm.nih.gov/books/NBK551627/" },
    { t: "SVS clinical practice guidelines for the management of chronic mesenteric ischemia", u: "https://www.jvascsurg.org/article/S0741-5214(20)32446-9/fulltext" },
    { t: "MedlinePlus Genetics and Conditions: Celiac artery compression", u: "https://medlineplus.gov/ency/article/001151.htm" }
  ]
},
{
  id: "vasc-renal-artery-stenosis",
  name: "Renal Artery Stenosis",
  sec: "vasc",
  present: [
    "Resistant hypertension on three or more agents including a diuretic, or hypertension of abrupt onset before 30 or after 55",
    "Flash pulmonary edema without a cardiac explanation, particularly with bilateral disease - the Pickering syndrome",
    "A rise in creatinine of over 30% after starting an ACE inhibitor or angiotensin receptor blocker suggests bilateral disease or stenosis in a solitary kidney",
    "Atherosclerotic disease is ostial and occurs in older patients; fibromuscular dysplasia is mid-to-distal, beaded, and occurs in young women"
  ],
  dx: [
    "Duplex with a renal-aortic ratio above 3.5 or a peak systolic velocity above 180-200 cm/s; also measures kidney size and resistive index",
    "CTA or MRA for anatomy; captopril renography has largely fallen out of use",
    "A resistive index above 0.8 indicates established parenchymal disease and predicts that revascularization will not improve function",
    "Kidney length under 8 cm indicates an atrophic kidney unlikely to recover"
  ],
  tx: [
    "Medical therapy first for atherosclerotic disease: ASTRAL and CORAL both found stenting added nothing to optimal medical therapy for blood pressure or renal outcomes",
    "Renin-angiotensin blockade is not contraindicated in unilateral disease and is the appropriate first agent, with creatinine monitored after initiation",
    "Reserve intervention for the clear indications: flash pulmonary edema, rapidly declining renal function, or truly refractory hypertension despite maximal therapy",
    "Fibromuscular dysplasia is the exception - balloon angioplasty without a stent frequently cures the hypertension and should be offered",
    "Surgical reconstruction is now rare and reserved for complex anatomy, aneurysmal disease, or failed endovascular therapy"
  ],
  pearls: [
    "ASTRAL and CORAL changed practice - a tight stenosis on imaging is not an indication to stent, and the burden of proof is now on intervening",
    "The kidney has usually already been damaged by the time the stenosis is found; a high resistive index tells you the horse has bolted",
    "Distinguish atherosclerotic from fibromuscular disease before deciding, because the answer is opposite in the two",
    "A creatinine bump after starting an ACE inhibitor is expected and acceptable up to 30%; stopping the drug reflexively loses a good agent"
  ],
  refs: [
    { t: "CORAL trial (N Engl J Med 2014)", u: "https://www.nejm.org/doi/full/10.1056/NEJMoa1310753" },
    { t: "SVS clinical practice guidelines", u: "https://www.svs.org/clinical-practice/clinical-practice-guidelines/" },
    { t: "StatPearls: Renal Artery Stenosis", u: "https://www.ncbi.nlm.nih.gov/books/NBK430718/" }
  ]
}
];
