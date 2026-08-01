/* Vascular Surgery resident dataset - batch 12 of 12 (entries 56-60).
 * Graft infection, compartment syndrome, and the technical common ground.
 * Schema: {id,name,sec,present[],dx[],tx[],pearls[],refs[{t,u}]}  sec="vasc"
 */
const RES_VASC_B12 = [
{
  id: "vasc-extremity-graft-infection",
  name: "Prosthetic Graft Infection of the Extremity",
  sec: "vasc",
  present: [
    "Groin wound breakdown with an exposed graft is the commonest presentation, and the groin is the commonest site",
    "Early infection within 4 months is usually Staphylococcus aureus and presents with cellulitis, purulence and systemic signs",
    "Late infection is often Staphylococcus epidermidis, indolent, and presents with a sinus, a perigraft collection or an anastomotic pseudoaneurysm",
    "Anastomotic pseudoaneurysm without a mechanical explanation is an infected anastomosis until proven otherwise",
    "Szilagyi grade I is skin only, II involves subcutaneous tissue, and III involves the graft itself"
  ],
  dx: [
    "Duplex and CTA looking for perigraft fluid, gas, loss of tissue planes and pseudoaneurysm",
    "FDG-PET/CT or labeled leukocyte scanning when cross-sectional imaging is equivocal",
    "Blood cultures, and operative tissue and graft cultures - sonication of the explanted graft substantially raises the yield over swab culture",
    "Assess the limb's dependence on the graft, because that determines whether excision alone is survivable or a reconstruction is mandatory"
  ],
  tx: [
    "Complete excision of infected prosthetic material plus revascularization through a clean field is the durable answer",
    "Autogenous reconstruction wherever possible: great saphenous vein, or deep femoral vein for a large-caliber conduit",
    "Obturator or lateral femoral bypass routes the new graft away from the infected groin",
    "Muscle flap coverage - sartorius or rectus femoris - for an exposed but incorporated graft with a limited infection, as part of a preservation strategy",
    "Graft preservation with debridement, irrigation, flap coverage and prolonged antibiotics is reserved for a patent graft with an intact anastomosis and a low-virulence organism",
    "Targeted antibiotics for at least 6 weeks intravenously, and frequently lifelong oral suppression when material is retained"
  ],
  pearls: [
    "An exposed anastomosis will bleed, and it will bleed catastrophically without warning - that patient belongs in hospital, not in a dressing clinic",
    "Retained prosthetic material in an infected field is why these recur; preservation is a considered compromise, not the default",
    "Send the explanted graft for sonication culture - conventional swabs miss biofilm and return a negative result that misleads the antibiotic plan",
    "The groin is the site because it is superficial, mobile, contaminated by skin flora and rich in lymphatics; meticulous lymphatic ligation at the index operation is genuine prevention"
  ],
  refs: [
    { t: "ESVS 2020 clinical practice guidelines on the management of vascular graft and endograft infections", u: "https://www.ejves.com/article/S1078-5884(19)32268-4/fulltext" },
    { t: "StatPearls: Vascular Graft Infection", u: "https://www.ncbi.nlm.nih.gov/books/NBK560670/" },
    { t: "SVS clinical practice guidelines", u: "https://www.svs.org/clinical-practice/clinical-practice-guidelines/" }
  ]
},
{
  id: "vasc-compartment-syndrome",
  name: "Compartment Syndrome and Fasciotomy",
  sec: "vasc",
  present: [
    "Pain out of proportion to the injury and pain on passive stretch of the compartment muscles are the earliest and most reliable findings",
    "The five Ps are late and unreliable - by the time the limb is pulseless the muscle is dead, so pulselessness is not a diagnostic criterion",
    "Highest risk after prolonged ischemia and reperfusion, combined arterial and venous injury, crush, fracture, and after successful revascularization of an acutely ischemic limb",
    "Paresthesia in the first web space from deep peroneal compression is an early neurologic sign in the leg"
  ],
  dx: [
    "Clinical diagnosis in the awake patient - serial examination by the same examiner is more useful than any single measurement",
    "Compartment pressure measurement in the obtunded, intubated or regionally anesthetized patient who cannot report pain",
    "Delta pressure - diastolic blood pressure minus compartment pressure - below 30 mmHg is the threshold, and it is better than an absolute pressure because it accounts for perfusion",
    "Creatine kinase and myoglobinuria indicate established muscle necrosis and rhabdomyolysis"
  ],
  tx: [
    "Release constricting casts and dressings and place the limb at the level of the heart, not elevated, which reduces perfusion pressure",
    "Four-compartment lower leg fasciotomy through two incisions: a lateral incision for the anterior and lateral compartments, and a medial incision 1-2 cm posterior to the tibial border for the superficial and deep posterior compartments",
    "Both incisions must be full length - a short skin incision over a fully released fascia still leaves the skin as a constricting envelope",
    "Protect the superficial peroneal nerve in the lateral incision and the saphenous vein and nerve in the medial",
    "Treat rhabdomyolysis with aggressive fluid resuscitation and monitor for hyperkalemia and acute kidney injury",
    "Delayed primary closure, vessel-loop shoelace technique or skin grafting once the swelling has settled"
  ],
  pearls: [
    "Prophylactic fasciotomy at the time of revascularization is a decision made in the operating room, and the surgeon who defers it is usually the one who returns at 3 am",
    "Do not elevate the limb above the heart - it lowers arterial inflow without meaningfully improving venous outflow",
    "A normal compartment pressure in an awake patient with severe pain on passive stretch does not exclude the diagnosis; believe the examination",
    "An incomplete fasciotomy is worse than none, because it produces a scar, a false sense of security, and a still-necrotic compartment"
  ],
  refs: [
    { t: "StatPearls: Acute Compartment Syndrome", u: "https://www.ncbi.nlm.nih.gov/books/NBK448124/" },
    { t: "StatPearls: Fasciotomy", u: "https://www.ncbi.nlm.nih.gov/books/NBK553110/" },
    { t: "Western Trauma Association critical decisions: evaluation and management of peripheral vascular injury", u: "https://pubmed.ncbi.nlm.nih.gov/23188248/" }
  ]
},
{
  id: "vasc-contrast-radiation",
  name: "Contrast-Associated Kidney Injury and Radiation Safety",
  sec: "vasc",
  present: [
    "Contrast-associated acute kidney injury is a rise in creatinine of 0.3 mg/dL or 50% within 48-72 hours of intravascular contrast",
    "Risk concentrates in pre-existing chronic kidney disease, diabetes, heart failure, hypovolemia and a high contrast volume",
    "Radiation injury in vascular surgery presents as operator cataract and, in patients, as a delayed skin reaction from a long fluoroscopic case",
    "Deterministic skin injury appears days to weeks after the procedure and is frequently attributed to something else"
  ],
  dx: [
    "Baseline creatinine and estimated glomerular filtration rate before any planned contrast study",
    "Recognize that the causal role of contrast has been overstated - matched-cohort studies show much of the creatinine rise reflects the underlying illness rather than the contrast",
    "Track dose-area product and air kerma during the case; a reference air kerma above about 5 Gy warrants documenting and following the patient's skin",
    "Personal dosimetry for the operator, worn correctly and actually read"
  ],
  tx: [
    "Intravenous isotonic saline before and after the procedure is the only prophylaxis with consistent support; PRESERVE found no benefit for sodium bicarbonate over saline or for N-acetylcysteine over placebo",
    "Minimize contrast volume: dilute the contrast, use digital subtraction sparingly, and consider carbon dioxide angiography or intravascular ultrasound in advanced kidney disease",
    "Hold nephrotoxins where possible; metformin is held not because it causes kidney injury but because renal impairment causes metformin accumulation and lactic acidosis",
    "Radiation as low as reasonably achievable: collimate tightly, use the lowest frame rate, keep the detector close to the patient, use last-image-hold rather than live fluoroscopy, and step back during acquisition",
    "Lead apron, thyroid shield, leaded glasses and a ceiling-mounted shield - the eye lens dose limit was reduced to 20 mSv per year and glasses are not optional"
  ],
  pearls: [
    "Dose falls with the square of the distance, so one step back from the table is the single most effective protective measure available and it costs nothing",
    "Do not withhold a needed contrast study from a patient with kidney disease out of reflex - the risk is smaller than long taught, and the missed diagnosis is real",
    "Saline is the prophylaxis; N-acetylcysteine and bicarbonate have been tested and do not work, so prescribing them substitutes ritual for hydration",
    "Magnification and steep angulation both raise skin dose sharply, and they are used most in exactly the long difficult cases where dose is already high"
  ],
  refs: [
    { t: "PRESERVE trial (N Engl J Med 2018)", u: "https://www.nejm.org/doi/full/10.1056/NEJMoa1710933" },
    { t: "ACR-NKF consensus statement on the use of intravenous contrast media in patients with kidney disease", u: "https://pubs.rsna.org/doi/10.1148/radiol.2019192094" },
    { t: "StatPearls: Contrast-Induced Nephropathy", u: "https://www.ncbi.nlm.nih.gov/books/NBK448066/" }
  ]
},
{
  id: "vasc-noninvasive-lab",
  name: "Noninvasive Vascular Laboratory Testing",
  sec: "vasc",
  present: [
    "The vascular laboratory answers three questions: is there disease, where is it, and how severe is it",
    "Ordered for claudication, rest pain, tissue loss, aneurysm surveillance, graft and stent surveillance, carotid disease and venous disease",
    "The commonest failure is ordering the wrong study, so the request should state the clinical question rather than name a test",
    "Accreditation of the laboratory and the technologist matters more to accuracy than the machine does"
  ],
  dx: [
    "Ankle-brachial index: normal 1.00-1.40, borderline 0.91-0.99, abnormal 0.90 or below, and noncompressible above 1.40",
    "Toe-brachial index below 0.70 is abnormal and is the study to use when the ankle vessels are calcified",
    "Segmental pressures localize the level of disease; a drop of more than 20 mmHg between adjacent levels is significant",
    "Pulse volume recordings are unaffected by calcification and are the most useful waveform in the diabetic or dialysis patient",
    "Duplex velocity criteria: a peak systolic velocity ratio above 2.0 at a lesion indicates 50% stenosis, and above 4.0 indicates 75%",
    "Exercise ABI with a 20% or 20 mmHg drop after treadmill testing confirms disease when the resting index is normal"
  ],
  tx: [
    "Graft surveillance duplex at 1, 3, 6 and 12 months then annually, with a peak systolic velocity above 300 cm/s or a ratio above 3.5 identifying a graft at risk",
    "A low graft flow velocity, under 45 cm/s throughout, also predicts failure and is easy to overlook",
    "EVAR surveillance with CTA at 1 month, then duplex annually if there is no endoleak and the sac is stable",
    "Carotid surveillance intervals depend on the degree of stenosis and on whether the patient would be a candidate for intervention",
    "Act on the surveillance finding - a failing graft revised before it thromboses has far better outcomes than a thrombosed one reopened"
  ],
  pearls: [
    "An ABI above 1.4 is not a good result, it is an uninterpretable one - move to toe pressures and waveforms",
    "The waveform tells you more than the number: a monophasic waveform with a normal-looking index still means disease",
    "Surveillance only helps if somebody reads the report and acts on it; the commonest failure mode is a duplex filed without review",
    "Know your own laboratory's velocity criteria, because they are validated locally and quoting a textbook threshold against a different protocol misclassifies patients"
  ],
  refs: [
    { t: "AHA scientific statement: measurement and interpretation of the ankle-brachial index", u: "https://www.ahajournals.org/doi/10.1161/CIR.0b013e318276fbcb" },
    { t: "2024 ACC/AHA guideline for the management of lower extremity peripheral artery disease", u: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001251" },
    { t: "StatPearls: Ankle Brachial Index", u: "https://www.ncbi.nlm.nih.gov/books/NBK499931/" }
  ]
},
{
  id: "vasc-access-closure-complications",
  name: "Arterial Access and Closure Complications",
  sec: "vasc",
  present: [
    "Access site complications are the commonest adverse events in endovascular surgery and most are preventable at the moment of puncture",
    "Hematoma and pseudoaneurysm present with a painful, pulsatile, expanding groin mass with a systolic bruit",
    "Retroperitoneal hemorrhage presents with flank or back pain, hypotension and a falling hemoglobin, often with a deceptively normal-looking groin",
    "Arteriovenous fistula presents with a continuous machinery bruit and, if large, high-output symptoms",
    "Acute limb ischemia from thrombosis or dissection at the access site, or from a closure device deployed intraluminally"
  ],
  dx: [
    "Duplex is the first test for a groin complication and diagnoses pseudoaneurysm, fistula and thrombosis",
    "CT for suspected retroperitoneal hemorrhage - a high puncture above the inguinal ligament is the mechanism, and the groin can look normal",
    "Ultrasound-guided puncture over the femoral head, at the common femoral artery below the inguinal ligament and above the bifurcation, is the prevention",
    "Micropuncture technique and fluoroscopic confirmation of the femoral head before puncturing reduce both high and low sticks"
  ],
  tx: [
    "Small pseudoaneurysm under 2 cm: observe, many thrombose spontaneously",
    "Larger or symptomatic pseudoaneurysm: ultrasound-guided thrombin injection is first-line, with a high success rate; compression is an alternative",
    "Surgical repair for a pseudoaneurysm that fails thrombin, is infected, is compressing the skin or nerve, or is expanding rapidly",
    "Retroperitoneal hemorrhage: resuscitate, reverse anticoagulation, and consider covered stent or open repair if bleeding continues",
    "Arteriovenous fistula: observe small ones, repair those that persist beyond a few months or cause symptoms",
    "Closure device failure with ischemia needs open exploration - the device is removed and the artery repaired, often with a patch"
  ],
  pearls: [
    "A puncture above the inguinal ligament bleeds into the retroperitoneum where nothing can compress it, and a puncture below the bifurcation thromboses - the femoral head is the landmark that avoids both",
    "Ultrasound guidance for every arterial puncture is the single highest-yield habit in endovascular practice, and it is still not universal",
    "Hypotension with back pain after an endovascular case is a retroperitoneal bleed until the CT says otherwise; a soft groin is not reassurance",
    "Never inject thrombin into a pseudoaneurysm with a wide, short neck or into a suspected arteriovenous fistula - the thrombin goes distal"
  ],
  refs: [
    { t: "StatPearls: Femoral Artery Pseudoaneurysm", u: "https://www.ncbi.nlm.nih.gov/books/NBK542244/" },
    { t: "SVS clinical practice guidelines", u: "https://www.svs.org/clinical-practice/clinical-practice-guidelines/" },
    { t: "StatPearls: Vascular Access Complications", u: "https://www.ncbi.nlm.nih.gov/books/NBK559182/" }
  ]
}
];
