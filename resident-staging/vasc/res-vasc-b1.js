/* Vascular Surgery resident dataset - batch 1 of 12 (entries 1-5).
 * Aortic.
 * Schema: {id,name,sec,present[],dx[],tx[],pearls[],refs[{t,u}]}  sec="vasc"
 */
const RES_VASC_B1 = [
{
  id: "vasc-aaa-elective",
  name: "Abdominal Aortic Aneurysm - Elective Repair",
  sec: "vasc",
  present: [
    "Almost always asymptomatic and found incidentally on imaging done for something else, or on one-time screening ultrasound",
    "USPSTF screens men 65-75 who have ever smoked; SVS extends screening to men 65-75 regardless of smoking and to women 65-75 who smoked or have a family history",
    "New back or abdominal pain in a known aneurysm is rupture or impending rupture until proven otherwise, not degenerative spine disease",
    "Distal embolization from mural thrombus can present as blue toe syndrome with palpable pedal pulses"
  ],
  dx: [
    "Ultrasound for screening and surveillance; CTA for operative planning because ultrasound underestimates the neck and cannot size a device",
    "SVS repair thresholds: 5.5 cm in men, 5.0 cm in women, growth over 0.5 cm in 6 months, or symptoms at any size",
    "Surveillance intervals by size: 3.0-3.9 cm every 3 years, 4.0-4.9 cm every 12 months, 5.0-5.4 cm every 6 months",
    "Anatomic suitability for EVAR turns on the proximal neck - length 10 mm or more, angulation under 60 degrees, minimal thrombus and calcification - plus iliac access diameter",
    "Screen for concurrent aneurysms: roughly 20% have iliac involvement and popliteal aneurysms coexist often enough to warrant a look"
  ],
  tx: [
    "EVAR has lower perioperative mortality than open repair (EVAR-1, DREAM), but the survival curves converge by 2-3 years and cross late as secondary rupture accrues",
    "Open repair is the durable operation and is preferred in young, low-risk patients and in hostile neck anatomy",
    "Medical therapy for the small aneurysm is smoking cessation plus a statin and blood pressure control - no drug has been shown to slow growth, and neither doxycycline (N-TA3CT) nor metformin trials have changed that",
    "UK Small Aneurysm Trial and ADAM both showed no survival benefit to repairing 4.0-5.4 cm aneurysms, which is why the threshold is what it is",
    "Fenestrated or branched repair for juxtarenal and pararenal disease when the neck will not support an infrarenal seal"
  ],
  pearls: [
    "Women rupture at smaller diameters and have worse outcomes after repair, which is the reason for the 5.0 cm threshold rather than any difference in growth rate",
    "The neck is the operation in EVAR - a short, angulated, conical neck predicts type Ia endoleak and late failure no matter how good the deployment looks on the table",
    "Every EVAR is a commitment to lifelong surveillance; a patient who will not return for imaging may be better served by an open repair",
    "A tender aneurysm with a normal CT is still a surgical problem - do not be reassured by the absence of a contained leak"
  ],
  refs: [
    { t: "SVS practice guidelines on the care of patients with an abdominal aortic aneurysm", u: "https://www.jvascsurg.org/article/S0741-5214(17)32369-8/fulltext" },
    { t: "USPSTF: Abdominal Aortic Aneurysm Screening", u: "https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/abdominal-aortic-aneurysm-screening" },
    { t: "StatPearls: Abdominal Aortic Aneurysm", u: "https://www.ncbi.nlm.nih.gov/books/NBK470237/" }
  ]
},
{
  id: "vasc-raaa",
  name: "Ruptured Abdominal Aortic Aneurysm",
  sec: "vasc",
  present: [
    "The classic triad of pain, hypotension and a pulsatile mass is present in under half - most arrive with two of three or with pain alone",
    "Flank or back pain with syncope in an older smoker is a ruptured aneurysm until imaging says otherwise; it is misdiagnosed as renal colic often enough to be a known trap",
    "A contained retroperitoneal rupture can be hemodynamically stable for hours, which is what makes the stable patient with pain dangerous",
    "Free intraperitoneal rupture presents as arrest or near-arrest and is rarely salvaged"
  ],
  dx: [
    "CTA if the patient can tolerate the scanner - it decides EVAR versus open and is worth the minutes in anyone not in extremis",
    "Bedside ultrasound confirms the aneurysm in seconds but cannot exclude rupture, so a negative ultrasound never rules it out",
    "Do not delay for laboratory results; a normal hemoglobin is expected early and is not reassuring",
    "Aortic occlusion balloon access should be planned during the scan, not after induction"
  ],
  tx: [
    "Permissive hypotension - target a systolic around 70-90 mmHg or the lowest pressure that maintains consciousness - because aggressive resuscitation pops the clot",
    "Activate massive transfusion and transfuse in balanced ratios; the PROPPR 1:1:1 principle carries over even though the trial was in trauma",
    "IMPROVE randomized rupture to an endovascular-first strategy versus open: no 30-day mortality difference, but lower cost, more discharges home, and a survival advantage at 3 years",
    "Induce anesthesia only with the patient prepped, draped and the surgeon scrubbed - sympathetic tone is holding the pressure up and it disappears at induction",
    "Open repair through a midline with supraceliac control if the neck is not accessible, then move clamp down as soon as proximal control allows"
  ],
  pearls: [
    "The stable-appearing patient with a contained rupture is the one who gets sent to CT unaccompanied and arrests there - go with them",
    "Abdominal compartment syndrome after rupture repair is common, underdiagnosed and lethal; measure bladder pressures routinely and open the abdomen early rather than late",
    "Endovascular repair under local anesthesia preserves the sympathetic tone that is keeping the patient alive - a genuine advantage of the endovascular-first approach",
    "A patient who arrives in arrest from free rupture is not salvaged by heroics; that decision is made honestly and early"
  ],
  refs: [
    { t: "IMPROVE trial: endovascular strategy for ruptured AAA, 3-year outcomes (BMJ)", u: "https://www.bmj.com/content/359/bmj.j4859" },
    { t: "SVS practice guidelines on the care of patients with an abdominal aortic aneurysm", u: "https://www.jvascsurg.org/article/S0741-5214(17)32369-8/fulltext" },
    { t: "StatPearls: Ruptured Abdominal Aortic Aneurysm", u: "https://www.ncbi.nlm.nih.gov/books/NBK430747/" }
  ]
},
{
  id: "vasc-taaa",
  name: "Thoracic and Thoracoabdominal Aortic Aneurysm",
  sec: "vasc",
  present: [
    "Usually asymptomatic; symptoms mean expansion or compression - hoarseness from recurrent laryngeal stretch, dysphagia, stridor, or back pain",
    "Connective tissue disease changes everything: Marfan, Loeys-Dietz and vascular Ehlers-Danlos rupture at smaller diameters and at younger ages",
    "A bicuspid aortic valve is associated with ascending aortopathy independent of valve function",
    "Crawford classification I-IV describes the extent and predicts both the paraplegia risk and the visceral reconstruction needed"
  ],
  dx: [
    "CTA of the entire aorta with 3D reconstruction - the whole aorta, because disease is often multisegmental and the arch determines the proximal landing zone",
    "Descending thoracic thresholds are 5.5 cm for endovascular candidates and around 6.0 cm for open repair, lower in connective tissue disease",
    "MRA is the surveillance modality of choice in young patients with heritable disease to avoid cumulative radiation",
    "Genetic testing and first-degree relative screening for anyone under 60 with thoracic aortic disease or a suggestive family history"
  ],
  tx: [
    "TEVAR for the descending thoracic aorta when the anatomy allows, with at least 2 cm of proximal and distal seal",
    "Spinal cord protection for extensive coverage: cerebrospinal fluid drainage, permissive hypertension with a mean arterial pressure of 85-100, and avoidance of anemia",
    "Left subclavian revascularization before covering zone 2 - it lowers stroke and spinal cord ischemia and is a class I recommendation when coverage is planned",
    "Open thoracoabdominal repair uses a thoracoabdominal incision, left heart bypass, sequential clamping, and reimplantation of intercostal and visceral vessels",
    "Beta blockade and strict blood pressure control in all, with an angiotensin receptor blocker in Marfan syndrome"
  ],
  pearls: [
    "Delayed paraplegia occurs hours to days after an uneventful case - a new lower extremity deficit on the ward is a spinal drain and blood pressure emergency, not a stroke workup",
    "TEVAR in a connective tissue disorder is a bridge, not a destination; the device seals into diseased aorta that continues to dilate",
    "Never cover the left subclavian in a patient with a patent left internal mammary graft or a dominant left vertebral without revascularizing first",
    "Chronic dissection is not degenerative aneurysm - the septum, the false lumen and the branch origins make it a fundamentally harder operation"
  ],
  refs: [
    { t: "2022 ACC/AHA guideline for the diagnosis and management of aortic disease", u: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001106" },
    { t: "SVS clinical practice guidelines", u: "https://www.svs.org/clinical-practice/clinical-practice-guidelines/" },
    { t: "StatPearls: Thoracoabdominal Aortic Aneurysm", u: "https://www.ncbi.nlm.nih.gov/books/NBK560731/" }
  ]
},
{
  id: "vasc-type-b-dissection",
  name: "Type B Aortic Dissection",
  sec: "vasc",
  present: [
    "Abrupt tearing chest or interscapular pain, often with hypertension rather than hypotension - hypotension in type B suggests rupture",
    "Complicated means malperfusion or rupture: limb ischemia, renal failure, mesenteric ischemia, paraplegia, refractory pain or refractory hypertension",
    "Uncomplicated is everything else, and is the majority at presentation",
    "A pulse deficit, a rising lactate or a rising creatinine after admission is dynamic malperfusion declaring itself"
  ],
  dx: [
    "CTA from the aortic arch through the femoral heads - the entire aorta, because the entry tear, the extent and the branch vessels all change management",
    "Distinguish static from dynamic branch obstruction: static is the septum extending into the ostium, dynamic is the septum prolapsing across it, and they are treated differently",
    "Serial imaging at discharge, 1, 3, 6 and 12 months, then annually - aortic growth in the first year predicts late intervention",
    "High-risk features on the initial scan include an aortic diameter over 40 mm, a false lumen over 22 mm, a primary entry tear over 10 mm, and partial false lumen thrombosis"
  ],
  tx: [
    "Anti-impulse therapy first in every patient: intravenous beta blockade to a heart rate under 60 before any vasodilator, then a vasodilator to a systolic of 100-120",
    "Esmolol or labetalol first; adding nitroprusside before rate control produces reflex tachycardia and raises dP/dt, which is the opposite of the goal",
    "Complicated type B goes to TEVAR - it covers the entry tear, depressurizes the false lumen and resolves dynamic malperfusion",
    "Uncomplicated type B with high-risk features: ADSORB and INSTEAD-XL showed TEVAR remodels the aorta and improves aorta-specific survival at 5 years without an early benefit",
    "Static branch obstruction needs the branch stented; covering the entry tear alone will not fix it"
  ],
  pearls: [
    "Rate before pressure, always - the shear force is the product of pressure and the rate of rise, and a vasodilator alone makes the second term worse",
    "Pain that recurs after being controlled is the aorta talking; it is an indication to reimage, not to increase the analgesia",
    "Retrograde type A dissection is the feared complication of TEVAR in the dissected aorta - avoid oversizing and avoid ballooning the proximal seal",
    "The false lumen that stays patent is the one that becomes a 6 cm aneurysm in five years, which is the whole argument for early intervention in high-risk anatomy"
  ],
  refs: [
    { t: "2022 ACC/AHA guideline for the diagnosis and management of aortic disease", u: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001106" },
    { t: "SVS/STS reporting standards for type B aortic dissection", u: "https://www.jvascsurg.org/article/S0741-5214(20)30060-1/fulltext" },
    { t: "StatPearls: Aortic Dissection", u: "https://www.ncbi.nlm.nih.gov/books/NBK441963/" }
  ]
},
{
  id: "vasc-endoleak",
  name: "Endoleak and Post-EVAR Surveillance",
  sec: "vasc",
  present: [
    "Almost always silent and found on surveillance imaging - the presenting complaint is a radiology report, not a symptom",
    "A growing sac after EVAR is an endoleak until proven otherwise, even when no leak is visible on the scan",
    "Late rupture after EVAR is usually type Ia or type III and is frequently the first sign in a patient lost to follow-up",
    "Type II is the common one, seen in 20-25% early, and most seal spontaneously within 6 months"
  ],
  dx: [
    "CTA with delayed phase imaging - a single arterial phase misses type II leaks and slow type Ia leaks entirely",
    "Contrast-enhanced ultrasound is at least as sensitive as CTA for type II and avoids both contrast nephrotoxicity and radiation in long-term surveillance",
    "Type I is a seal failure at the proximal (Ia) or distal (Ib) attachment, type II is retrograde flow from lumbar or inferior mesenteric branches, type III is a component separation or fabric tear, type IV is graft porosity, and type V is endotension with sac growth and no demonstrable leak",
    "Surveillance: CTA at 1 month, and if no endoleak and no sac growth, annual imaging thereafter - duplex can substitute in stable patients"
  ],
  tx: [
    "Type I and type III always get treated - they pressurize the sac at systemic pressure and carry a real rupture risk",
    "Type Ia: proximal cuff, balloon molding, an endoanchor, or conversion to fenestrated repair if the neck has degenerated",
    "Type II: observe unless the sac grows more than 5 mm, then embolize the feeding vessel and the sac by a translumbar or transarterial route",
    "Type III: relining with a bridging component, which is usually straightforward and always urgent",
    "Explantation and open conversion for the leak that cannot be fixed endovascularly - a difficult operation with mortality several times that of a primary open repair"
  ],
  pearls: [
    "Sac behavior is the outcome measure, not the presence of a leak - a shrinking sac with a type II leak is a success and a growing sac with no visible leak is a failure",
    "The most dangerous endoleak is in the patient who stopped coming to clinic; surveillance compliance falls off sharply after 2 years and that is where late ruptures come from",
    "Do not chase a type II in the first 6 months - most close on their own and intervention has not been shown to change outcomes in that window",
    "Endotension is a diagnosis of exclusion and usually means a leak that the imaging protocol was not designed to find - repeat with delayed phases before accepting it"
  ],
  refs: [
    { t: "SVS practice guidelines on the care of patients with an abdominal aortic aneurysm", u: "https://www.jvascsurg.org/article/S0741-5214(17)32369-8/fulltext" },
    { t: "StatPearls: Endoleak", u: "https://www.ncbi.nlm.nih.gov/books/NBK531487/" },
    { t: "ESVS 2024 clinical practice guidelines on the management of abdominal aorto-iliac artery aneurysms", u: "https://www.ejves.com/article/S1078-5884(23)00758-8/fulltext" }
  ]
}
];
