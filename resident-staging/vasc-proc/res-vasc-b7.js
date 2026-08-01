/* Vascular Surgery PROCEDURES - batch 7 of 10 (procedures 31-35).
 * Visceral and renal.
 * Extended schema: {id,name,sec,present[],dx[],tx[],tech[],after[],pearls[],refs[{t,u}]}  sec="vasc"
 */
const RES_VASC_B7 = [
{
  id: "vasc-roms",
  name: "Retrograde Open Mesenteric Stenting",
  sec: "vasc",
  present: [
    "Acute mesenteric ischemia from in situ thrombosis of an ostial superior mesenteric artery lesion, in a patient who needs a laparotomy anyway to assess bowel",
    "Combines the definitive ostial treatment of a stent with the bowel assessment only an open operation gives",
    "Preferred over a formal bypass in the unstable or contaminated abdomen, where a graft is unattractive",
    "Also a bailout when antegrade endovascular access to the superior mesenteric artery has failed"
  ],
  dx: [
    "CTA with arterial and venous phases and NO oral contrast, which obscures the mucosa and the vessel",
    "Distinguish embolism, which lodges a few centimetres distal to the origin, from thrombosis at the ostium - the mechanism decides the operation",
    "Lactate is neither sensitive nor specific early; a normal lactate does not exclude the diagnosis",
    "Assess the celiac and inferior mesenteric arteries and the collateral network"
  ],
  tx: [
    "Heparinize immediately on suspicion and resuscitate; avoid vasopressors that worsen splanchnic vasoconstriction where fluid will do",
    "Revascularize before you resect - bowel that looks dead often recovers once flow is restored",
    "Balloon-expandable covered or bare stent to the ostium, which is where the lesion is",
    "Second-look laparotomy at 24-48 hours booked at the index operation whenever any bowel is marginal",
    "Broad-spectrum antibiotics given the translocation risk"
  ],
  tech: [
    "Midline laparotomy, assess the bowel, and note but do not yet resect marginal segments",
    "Lift the transverse colon cephalad and follow the middle colic artery back to expose the superior mesenteric artery at the root of the mesentery",
    "Obtain control of a segment of superior mesenteric artery distal to the occlusion, using vessel loops",
    "Puncture the superior mesenteric artery directly in a retrograde direction, or make a transverse arteriotomy and pass a sheath retrograde toward the aorta",
    "Cross the ostial lesion retrograde with a wire into the aorta - retrograde crossing frequently succeeds where antegrade has failed, because you are pushing from the softer side",
    "Deploy a balloon-expandable stent across the ostium with 1-2 mm protruding into the aortic lumen",
    "Close the arteriotomy with a vein patch rather than primarily, to avoid narrowing a vessel you have just worked hard to open",
    "Reassess bowel viability after 15-20 minutes of restored perfusion before making any resection decision"
  ],
  after: [
    "Intensive care with serial lactate, abdominal examination and hemodynamic support",
    "Second-look laparotomy as planned; leaving marginal bowel is safe only when the second look is already booked",
    "Watch for reperfusion injury and for abdominal compartment syndrome; consider leaving the abdomen open",
    "Duplex or CTA before discharge to confirm stent patency",
    "Dual antiplatelet therapy for 1-3 months then single agent, plus a statin",
    "Nutritional support and surveillance imaging; restenosis after mesenteric stenting is common"
  ],
  pearls: [
    "Revascularize first, then resect - resecting on appearance before flow is restored commits the patient to a short gut they did not need",
    "Retrograde crossing works when antegrade has failed because the ostial cap is approached from its soft side; this is the whole rationale for the technique",
    "Patch the arteriotomy. Primary closure of a superior mesenteric arteriotomy narrows the vessel you just reopened",
    "Ask the radiologist for no oral contrast explicitly - it is the commonest avoidable error in the workup and it is made by whoever did not specify"
  ],
  refs: [
    { t: "ESVS 2017 clinical practice guidelines on the management of the diseases of mesenteric arteries and veins", u: "https://www.ejves.com/article/S1078-5884(17)30062-4/fulltext" },
    { t: "SVS clinical practice guidelines for the management of chronic mesenteric ischemia", u: "https://www.jvascsurg.org/article/S0741-5214(20)32446-9/fulltext" },
    { t: "StatPearls: Acute Mesenteric Ischemia", u: "https://www.ncbi.nlm.nih.gov/books/NBK431068/" }
  ]
},
{
  id: "vasc-sma-embolectomy",
  name: "Superior Mesenteric Artery Embolectomy",
  sec: "vasc",
  present: [
    "Acute mesenteric ischemia from embolism, which accounts for about half of cases",
    "Abrupt severe abdominal pain out of proportion to examination in a patient with atrial fibrillation or a recent myocardial infarction",
    "The embolus typically lodges a few centimetres distal to the origin, sparing the proximal jejunal branches and the middle colic - which is the anatomic signature",
    "Distinguished from thrombosis, which sits at the ostium and needs a stent or bypass rather than a balloon catheter"
  ],
  dx: [
    "CTA with arterial and venous phases and no oral contrast; the filling defect a few centimetres from the origin with a patent ostium is diagnostic",
    "Peritonitis and hemodynamic collapse are late signs and mean infarcted bowel, with mortality above 50%",
    "Do not wait for a lactate to rise; it does so when bowel is already dead",
    "Look for a proximal embolic source with echocardiography and rhythm monitoring afterward"
  ],
  tx: [
    "Systemic heparin immediately on suspicion",
    "Resuscitate without excessive vasopressor, which worsens splanchnic vasoconstriction",
    "Revascularize before resecting - this is the single most important sequencing rule in mesenteric ischemia",
    "Broad-spectrum antibiotics",
    "Second-look laparotomy at 24-48 hours booked at the index operation whenever bowel is marginal",
    "Anticoagulate afterward and address the embolic source"
  ],
  tech: [
    "Midline laparotomy, assess the bowel and note the distribution of ischemia, which usually spares the proximal jejunum",
    "Lift the transverse colon cephalad, incise the peritoneum over the root of the mesentery, and follow the middle colic artery to the superior mesenteric artery",
    "Control the superior mesenteric artery proximally and distally with vessel loops, and control the jejunal branches",
    "Transverse arteriotomy over the palpable embolus, which closes without narrowing",
    "Pass a 3 or 4 French Fogarty proximally to confirm inflow, then distally into each major branch, inflating only on withdrawal",
    "Continue until there is pulsatile inflow and good backbleeding, then flush with heparinized saline",
    "Close the transverse arteriotomy with 6-0 polypropylene; use a vein patch if the artery is diseased or a longitudinal arteriotomy was needed",
    "Wait 15-20 minutes after restoring flow before judging bowel viability, using clinical appearance, Doppler of the antimesenteric border and, where available, indocyanine green fluorescence"
  ],
  after: [
    "Intensive care, serial lactate, and hourly abdominal assessment",
    "Second-look laparotomy as planned - it is the standard of care and not an admission of uncertainty",
    "Watch for abdominal compartment syndrome and consider a temporary abdominal closure from the outset",
    "Therapeutic anticoagulation, transitioning to long-term therapy once the source is defined",
    "Echocardiography and rhythm monitoring; the second embolus is preventable",
    "Nutritional support, and counselling about short-gut consequences if a long segment was resected"
  ],
  pearls: [
    "Sparing of the proximal jejunum and the middle colic territory is the finding that tells you this is an embolus and not a thrombosis, and it changes the whole operation",
    "Revascularize before resecting; dusky bowel frequently pinks up and resecting first is irreversible",
    "Book the second look at the first operation rather than deciding later - it makes leaving marginal bowel a safe decision",
    "Do not use a Fogarty on a thrombosed ostial lesion; you will strip the intima of a diseased artery and still not have treated the ostium"
  ],
  refs: [
    { t: "ESVS 2017 clinical practice guidelines on the management of the diseases of mesenteric arteries and veins", u: "https://www.ejves.com/article/S1078-5884(17)30062-4/fulltext" },
    { t: "StatPearls: Acute Mesenteric Ischemia", u: "https://www.ncbi.nlm.nih.gov/books/NBK431068/" },
    { t: "SVS clinical practice guidelines", u: "https://www.svs.org/clinical-practice/clinical-practice-guidelines/" }
  ]
},
{
  id: "vasc-renal-mesenteric-stenting",
  name: "Renal and Mesenteric Artery Stenting",
  sec: "vasc",
  present: [
    "Chronic mesenteric ischemia with the classic triad - first-line therapy, with lower perioperative morbidity than open bypass in a frail population",
    "Renal artery stenosis with a narrow set of indications: flash pulmonary edema, rapidly declining renal function, or truly refractory hypertension",
    "ASTRAL and CORAL both found renal stenting added nothing to optimal medical therapy for blood pressure or renal outcomes in stable atherosclerotic disease",
    "Fibromuscular dysplasia is the exception and is treated with balloon angioplasty WITHOUT a stent"
  ],
  dx: [
    "CTA or MRA for anatomy; mesenteric duplex after an overnight fast with superior mesenteric peak systolic velocity above 275 cm/s or celiac above 200 cm/s",
    "Renal duplex with a renal-aortic ratio above 3.5 or peak systolic velocity above 180-200 cm/s",
    "Renal resistive index above 0.8 indicates established parenchymal damage and predicts that revascularization will not help",
    "Kidney length under 8 cm indicates an atrophic kidney not worth revascularizing",
    "For mesenteric disease, remember that asymptomatic stenosis is common in the elderly - the triad makes the diagnosis"
  ],
  tx: [
    "Balloon-expandable stents for ostial lesions in both territories, because precise placement matters and ostial lesions recoil",
    "Extend the stent 1-2 mm into the aortic lumen to cover the aortic-wall plaque that constitutes an ostial lesion",
    "Dual antiplatelet therapy for 1-3 months then single agent, plus a high-intensity statin",
    "Hydration before and after with isotonic saline; N-acetylcysteine and bicarbonate do not work",
    "Restenosis after mesenteric stenting is common, so surveillance and a willingness to reintervene are part of the plan"
  ],
  tech: [
    "Femoral access for a caudally angled vessel, or brachial access when the superior mesenteric or renal takes off steeply downward - brachial makes a difficult case straightforward",
    "Lateral aortogram to lay out the celiac and superior mesenteric origins; anteroposterior with slight oblique for the renals",
    "Engage the ostium with a guide catheter or a long sheath, giving support without deep intubation that could dissect",
    "Cross the lesion with a 0.014 or 0.018 wire and place the wire distally in a safe branch",
    "Predilate only if the stent will not cross; ostial lesions are usually stented primarily",
    "Deploy the balloon-expandable stent with 1-2 mm protruding into the aorta, then flare that protruding portion with a larger balloon",
    "Completion angiography plus a pressure measurement across the treated segment",
    "Use dilute contrast and CO2 where renal function is marginal"
  ],
  after: [
    "Monitor renal function for 48 hours; a creatinine rise may be contrast, atheroembolism, or a stent problem, and the three are distinguished by timing",
    "Cholesterol embolization after renal intervention presents days later with livedo, eosinophilia and rising creatinine, and has no specific treatment",
    "Blood pressure often falls after successful renal stenting - review antihypertensives before discharge to avoid hypotension",
    "For mesenteric stenting, cautious refeeding and attention to symptom resolution as the outcome measure",
    "Duplex surveillance at 1, 6 and 12 months then annually",
    "Dual antiplatelet therapy then single agent lifelong"
  ],
  pearls: [
    "ASTRAL and CORAL shifted the burden of proof - a tight renal stenosis on imaging is not an indication, and stenting a stable patient is not supported",
    "Never stent renal fibromuscular dysplasia; the lesion is fibrous, responds to plain angioplasty, and a stent complicates any future intervention",
    "Brachial access transforms a steeply angled mesenteric or renal ostium from a fight into a routine case - choose it before the case, not after an hour",
    "Cover the ostium properly. An ostial lesion is aortic plaque, and a stent that stops flush with the aortic wall leaves the lesion behind"
  ],
  refs: [
    { t: "CORAL trial (N Engl J Med 2014)", u: "https://www.nejm.org/doi/full/10.1056/NEJMoa1310753" },
    { t: "SVS clinical practice guidelines for the management of chronic mesenteric ischemia", u: "https://www.jvascsurg.org/article/S0741-5214(20)32446-9/fulltext" },
    { t: "StatPearls: Renal Artery Stenosis", u: "https://www.ncbi.nlm.nih.gov/books/NBK430718/" }
  ]
},
{
  id: "vasc-mal-release",
  name: "Median Arcuate Ligament Release",
  sec: "vasc",
  present: [
    "Postprandial epigastric pain, nausea and weight loss in a young, thin patient, typically a woman aged 20 to 40",
    "An epigastric bruit that becomes louder in expiration",
    "A diagnosis of exclusion after a long and negative gastroenterology workup",
    "Asymptomatic celiac compression is present in up to a quarter of normal people on imaging, so the finding alone is not the syndrome"
  ],
  dx: [
    "Duplex with inspiratory and expiratory measurements - celiac velocities that rise markedly in expiration and normalize on deep inspiration",
    "CTA in expiration shows the hooked appearance of the celiac axis with focal superior narrowing and poststenotic dilatation",
    "The hook distinguishes it from atherosclerosis, which is a concentric ostial plaque with no respiratory variation",
    "A celiac plexus block that relieves the pain supports a neurogenic mechanism and predicts response in some series"
  ],
  tx: [
    "Laparoscopic or robotic release is the standard approach; open release for hostile anatomy or when a concurrent arterial reconstruction is planned",
    "Divide the celiac plexus fibers as well as the ligament, since the mechanism may be neurogenic rather than purely ischemic",
    "Do not stent before release - the ligament crushes and fractures the stent",
    "Persistent intrinsic stenosis after release may need staged angioplasty and stenting",
    "Counsel that symptom improvement is good but not universal, and that this is one of the less predictable operations in the specialty"
  ],
  tech: [
    "Laparoscopic ports as for a hiatal procedure, with the patient in reverse Trendelenburg",
    "Divide the gastrohepatic ligament and expose the right crus, then follow it to the aortic hiatus",
    "Identify the aorta above the celiac origin and dissect down onto the celiac axis from above",
    "Divide the median arcuate ligament fibers transversely across the anterior aorta until the celiac origin is completely free and pulsatile",
    "Continue dividing the dense neural and lymphatic tissue of the celiac plexus around the origin - an incomplete neurolysis is a common cause of persistent symptoms",
    "Confirm release with intraoperative duplex showing normalized celiac velocities before finishing; persistent stenosis after full release means an intrinsic lesion",
    "Be prepared for bleeding from the celiac origin or a small aortic branch; laparoscopic control here is difficult and conversion should be a low-threshold decision"
  ],
  after: [
    "Most patients go home within 1-2 days after a laparoscopic release",
    "Assess symptom response at 4-6 weeks with a repeat duplex",
    "Persistent symptoms with normalized velocities suggest the diagnosis was wrong, not that the release was inadequate - resist the urge to stent",
    "Persistent stenosis on duplex after release is the situation where staged angioplasty is reasonable",
    "Nutritional follow-up and weight tracking, which is the outcome the patient cares about",
    "No long-term antiplatelet requirement unless an intervention was performed"
  ],
  pearls: [
    "Do not stent before releasing - the ligament will crush the stent and the patient ends up with two problems",
    "Complete the neurolysis, not just the ligament division; incomplete plexus division is a common reason for persistent pain after a technically adequate release",
    "Confirm on the table with duplex. Finding out in clinic that velocities are unchanged means a second operation",
    "Be honest in consent that the response rate is good but not guaranteed and the mechanism is genuinely unsettled"
  ],
  refs: [
    { t: "StatPearls: Median Arcuate Ligament Syndrome", u: "https://www.ncbi.nlm.nih.gov/books/NBK551627/" },
    { t: "SVS clinical practice guidelines for the management of chronic mesenteric ischemia", u: "https://www.jvascsurg.org/article/S0741-5214(20)32446-9/fulltext" },
    { t: "MedlinePlus: Celiac artery compression syndrome", u: "https://medlineplus.gov/ency/article/001151.htm" }
  ]
},
{
  id: "vasc-visceral-embolization",
  name: "Visceral Artery Aneurysm Embolization",
  sec: "vasc",
  present: [
    "True visceral aneurysm at 2 cm or above, or any size in a woman of childbearing potential or a transplant candidate",
    "Splenic artery is the commonest site at around 60%, then hepatic, then superior mesenteric",
    "Any pseudoaneurysm, whatever its size - after pancreatitis, trauma or intervention, the rupture risk is far higher",
    "Rupture presents with sudden abdominal pain and shock; hepatic aneurysm may present with hemobilia, jaundice and pain"
  ],
  dx: [
    "CTA defines size, location, neck morphology and the branch anatomy, and distinguishes true aneurysm from pseudoaneurysm",
    "Assess the collateral supply, which determines whether the parent vessel can be sacrificed",
    "Splenic aneurysm distal to the pancreatic branches can usually be sacrificed because the spleen survives on short gastric collaterals",
    "Hepatic aneurysm generally needs the parent vessel preserved, particularly after transplantation where collaterals are absent"
  ],
  tx: [
    "Coil embolization for a saccular aneurysm with a narrow neck, occluding the sac and both the inflow and outflow vessel",
    "Covered stent where the parent vessel must remain patent, as in most hepatic and superior mesenteric aneurysms",
    "Flow-diverting stents and liquid embolics have a role in wide-necked aneurysms",
    "Open resection and reconstruction for complex bifurcation aneurysms, and ex vivo repair with autotransplantation for complex hilar renal aneurysms",
    "Any pseudoaneurysm is treated urgently"
  ],
  tech: [
    "Femoral or radial access with a selective visceral catheter, then a microcatheter coaxially into the target",
    "Diagnostic angiography of the parent vessel in multiple projections to define the neck and every branch arising near it",
    "Front-and-back-door technique for sacrifice: coil the outflow vessel distal to the aneurysm first, then the sac, then the inflow proximal to it",
    "Coiling only the proximal side leaves the aneurysm filling retrogradely through collaterals and is a classic incomplete treatment",
    "For parent-vessel preservation, deploy a covered stent across the neck, sized to the parent artery, and confirm branch patency afterward",
    "Complete angiography to confirm exclusion of the sac and continued perfusion of the target organ",
    "Have a plan for non-target embolization - reflux of coils or liquid embolic into a hepatic or bowel branch causes infarction"
  ],
  after: [
    "Post-embolization syndrome with pain, fever and raised inflammatory markers is common after splenic embolization and is self-limiting",
    "Monitor for organ infarction: liver enzymes after hepatic work, pain and lactate after mesenteric work, splenic infarct pain and rarely abscess",
    "Splenic infarction after distal splenic embolization is usually partial and tolerated; a large infarct can abscess and need drainage or splenectomy",
    "CTA at 1 month to confirm exclusion and organ perfusion, then periodic surveillance",
    "Vaccination if the spleen is functionally lost",
    "Antiplatelet therapy if a covered stent was placed"
  ],
  pearls: [
    "True aneurysm versus pseudoaneurysm is the first question, because it changes the threshold from 2 cm to any size",
    "Occlude both ends. Front-and-back-door embolization is the difference between exclusion and an aneurysm that refills through collaterals",
    "A splenic aneurysm in a woman who may become pregnant is repaired regardless of diameter, because rupture in the third trimester carries very high maternal and fetal mortality",
    "Hepatic artery is not the splenic - the liver does not have the collateral tolerance, so preserve the parent vessel"
  ],
  refs: [
    { t: "SVS clinical practice guidelines on the management of visceral aneurysms", u: "https://www.jvascsurg.org/article/S0741-5214(20)30117-5/fulltext" },
    { t: "StatPearls: Splenic Artery Aneurysm", u: "https://www.ncbi.nlm.nih.gov/books/NBK430790/" },
    { t: "StatPearls: Renal Artery Aneurysm", u: "https://www.ncbi.nlm.nih.gov/books/NBK560657/" }
  ]
}
];
