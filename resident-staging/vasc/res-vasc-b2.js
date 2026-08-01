/* Vascular Surgery resident dataset - batch 2 of 12 (entries 6-10).
 * Aortic infection; peripheral arterial occlusive disease.
 * Schema: {id,name,sec,present[],dx[],tx[],pearls[],refs[{t,u}]}  sec="vasc"
 */
const RES_VASC_B2 = [
{
  id: "vasc-aortic-graft-infection",
  name: "Aortic Graft Infection and Aortoenteric Fistula",
  sec: "vasc",
  present: [
    "Indolent presentation is the rule - malaise, low-grade fever, weight loss and a raised inflammatory marker months to years after aortic reconstruction",
    "Secondary aortoenteric fistula classically gives a herald bleed: a self-limited upper gastrointestinal hemorrhage that stops, then recurs catastrophically",
    "Groin sinus or a false aneurysm at an anastomosis is graft infection until proven otherwise",
    "Any patient with a prior aortic graft and gastrointestinal bleeding has an aortoenteric fistula until endoscopy and CT say otherwise"
  ],
  dx: [
    "CTA looks for perigraft fluid or gas beyond the first 3 months, loss of tissue planes, pseudoaneurysm, and the graft abutting bowel",
    "Perigraft gas is normal in the first few weeks after implantation and abnormal after about 3 months - the timing is what makes it interpretable",
    "FDG-PET/CT or labeled leukocyte scintigraphy when CT is equivocal, which is often",
    "Upper endoscopy to the fourth part of the duodenum in suspected aortoenteric fistula - a negative study does not exclude it and should not delay operation in the unstable patient",
    "MAGIC criteria combine clinical, radiologic and laboratory findings into a diagnosis rather than relying on any single test"
  ],
  tx: [
    "Complete graft excision plus revascularization is the durable answer; graft preservation is a compromise reserved for the patient who cannot survive explantation",
    "In situ reconstruction with rifampin-soaked prosthetic, cryopreserved allograft, or a neoaortoiliac system built from femoral vein - the NAIS operation resists reinfection best and costs the most operative time",
    "Extra-anatomic axillobifemoral bypass followed by aortic stump closure remains an option when in situ repair is not feasible, with aortic stump blowout as the feared complication",
    "Prolonged targeted antibiotics guided by intraoperative cultures, commonly 6 weeks intravenous and often lifelong suppression",
    "Omental flap coverage of the in situ reconstruction and separate repair of the bowel defect"
  ],
  pearls: [
    "The herald bleed is the warning you get, and it is the only one - a patient with a prior aortic graft and a self-limited bleed goes to the operating room, not to observation",
    "Perigraft fluid alone is not infection in the early postoperative period; anchoring on it leads to explanting a sterile graft",
    "Send tissue and explanted graft for sonication culture - conventional swabs miss biofilm organisms and return a falsely negative culture",
    "The single most useful question is where the previous operation was done and by whom, because the operative note determines the reconstruction plan"
  ],
  refs: [
    { t: "SVS clinical practice guidelines", u: "https://www.svs.org/clinical-practice/clinical-practice-guidelines/" },
    { t: "ESVS 2020 clinical practice guidelines on the management of vascular graft and endograft infections", u: "https://www.ejves.com/article/S1078-5884(19)32268-4/fulltext" },
    { t: "StatPearls: Aortoenteric Fistula", u: "https://www.ncbi.nlm.nih.gov/books/NBK470335/" }
  ]
},
{
  id: "vasc-inflammatory-mycotic-aaa",
  name: "Inflammatory and Mycotic Aortic Aneurysm",
  sec: "vasc",
  present: [
    "Inflammatory aneurysm presents with back or abdominal pain, weight loss and a raised erythrocyte sedimentation rate in a younger, heavily smoking patient",
    "Mycotic (infected native) aneurysm presents with fever, back pain and a rapidly enlarging saccular aneurysm, often with positive blood cultures",
    "Ureteric obstruction with hydronephrosis is a hallmark of the inflammatory variant and is sometimes the presenting problem",
    "A saccular, lobulated, rapidly growing aneurysm in an unusual location is infected until proven otherwise - degenerative aneurysms are fusiform and grow slowly"
  ],
  dx: [
    "CT in inflammatory aneurysm shows a thick, contrast-enhancing periaortic rind that spares the posterior wall and may encase the ureters and duodenum",
    "IgG4-related disease overlaps with the inflammatory variant - check serum IgG4 in the right clinical picture, because it responds to steroids",
    "Blood cultures before antibiotics in every suspected mycotic case; Salmonella and Staphylococcus aureus predominate, and syphilis remains a historical cause in the ascending aorta",
    "FDG-PET distinguishes active infection or inflammation from a bland aneurysm when the distinction changes management"
  ],
  tx: [
    "Inflammatory aneurysm: repair at the same size thresholds as a degenerative aneurysm - the inflammation does not raise the rupture risk, it raises the operative difficulty",
    "EVAR is often preferred in the inflammatory variant because it avoids dissecting the ureters and duodenum out of the rind, and the rind regresses after exclusion",
    "Mycotic aneurysm: urgent debridement of infected aorta and periaortic tissue plus revascularization, with in situ repair using autologous vein or a rifampin-bonded graft",
    "Prolonged targeted antibiotics, typically 6 weeks intravenous and often lifelong oral suppression, guided by operative cultures",
    "Endovascular repair of a mycotic aneurysm is a bridge in the unstable patient rather than a definitive answer, because the infected tissue is not removed"
  ],
  pearls: [
    "Ureterolysis in an inflammatory aneurysm is dangerous and usually unnecessary - the hydronephrosis resolves after the aneurysm is excluded",
    "A rapidly enlarging saccular aneurysm with fever should not wait for imaging to become classic; the natural history is rupture within weeks",
    "Do not attribute an elevated inflammatory marker after aortic repair to the operation past the first two weeks - reimage instead",
    "Steroids treat IgG4-related aortitis but do nothing for a mycotic aneurysm, so the distinction has to be made before treatment starts"
  ],
  refs: [
    { t: "SVS clinical practice guidelines", u: "https://www.svs.org/clinical-practice/clinical-practice-guidelines/" },
    { t: "StatPearls: Mycotic Aneurysm", u: "https://www.ncbi.nlm.nih.gov/books/NBK560736/" },
    { t: "ESVS 2024 clinical practice guidelines on the management of abdominal aorto-iliac artery aneurysms", u: "https://www.ejves.com/article/S1078-5884(23)00758-8/fulltext" }
  ]
},
{
  id: "vasc-claudication",
  name: "Intermittent Claudication",
  sec: "vasc",
  present: [
    "Reproducible cramping or fatigue in a muscle group with a consistent walking distance, relieved within minutes by standing still",
    "The symptomatic muscle group is one level below the disease: buttock and thigh means aortoiliac, calf means femoropopliteal",
    "Relief by standing still without needing to sit or bend forward is what separates it from neurogenic claudication of spinal stenosis",
    "Rest pain, tissue loss or a nonhealing wound is not claudication - that is chronic limb-threatening ischemia and a different problem"
  ],
  dx: [
    "Resting ankle-brachial index: 0.9 or below is diagnostic, 0.4-0.9 typical of claudication, and over 1.4 is noncompressible and uninterpretable",
    "Exercise ABI when the resting index is normal but the history is convincing - a 20% drop after exercise confirms it",
    "Toe-brachial index below 0.7 in the diabetic or dialysis patient whose ankle vessels are calcified and noncompressible",
    "Reserve CTA or MRA for patients in whom intervention is actually being planned - anatomic imaging does not change management in the patient being treated medically"
  ],
  tx: [
    "Supervised exercise therapy is first-line and beats unsupervised walking advice substantially; Medicare has covered it since 2017 for symptomatic PAD",
    "High-intensity statin in every patient, plus antiplatelet therapy - clopidogrel 75 mg is favored over aspirin on the CAPRIE subgroup",
    "Rivaroxaban 2.5 mg twice daily added to aspirin reduces major adverse limb and cardiac events (COMPASS, VOYAGER PAD) at the cost of more bleeding",
    "Cilostazol 100 mg twice daily improves walking distance, contraindicated in heart failure of any grade",
    "Smoking cessation is the single most effective intervention and the hardest; revascularization is reserved for lifestyle-limiting symptoms that fail exercise and medical therapy"
  ],
  pearls: [
    "Claudication is a marker of systemic atherosclerosis - these patients die of myocardial infarction and stroke, not of their legs, so the statin matters more than the stent",
    "Only about a quarter of claudicants ever progress to critical ischemia; telling a patient the leg is at risk to justify intervention is neither true nor necessary",
    "A normal resting ABI does not exclude PAD in a symptomatic patient - exercise testing is the study that finds it",
    "Do not stent a claudicant with an isolated superficial femoral artery lesion who has not tried exercise therapy; the durability is poor and the alternative works"
  ],
  refs: [
    { t: "2024 ACC/AHA guideline for the management of lower extremity peripheral artery disease", u: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001251" },
    { t: "SVS clinical practice guidelines", u: "https://www.svs.org/clinical-practice/clinical-practice-guidelines/" },
    { t: "StatPearls: Intermittent Claudication", u: "https://www.ncbi.nlm.nih.gov/books/NBK430778/" }
  ]
},
{
  id: "vasc-clti",
  name: "Chronic Limb-Threatening Ischemia",
  sec: "vasc",
  present: [
    "Ischemic rest pain for more than 2 weeks, or ulceration or gangrene, with objectively proven arterial insufficiency",
    "Rest pain is in the forefoot, worse lying flat, and relieved by hanging the leg over the side of the bed - the dependent leg is a diagnostic sign",
    "Tissue loss in the diabetic patient may present without much pain because of neuropathy, which is why it presents late",
    "Dependent rubor with pallor on elevation, hair loss, thin shiny skin and thickened nails are the chronic findings"
  ],
  dx: [
    "ABI, toe pressure and waveform analysis; a toe pressure under 30 mmHg or an ankle pressure under 50 mmHg supports the diagnosis",
    "WIfI staging (Wound, Ischemia, foot Infection) estimates the 1-year amputation risk and the likely benefit of revascularization",
    "GLASS staging from the Global Vascular Guidelines grades the infrainguinal disease burden and predicts endovascular success",
    "Full anatomic imaging from the aorta to the pedal arch - the target for the distal anastomosis is chosen off the pedal images, not the femoral ones",
    "Assess the great saphenous vein with duplex at the same visit, because conduit availability decides the operation"
  ],
  tx: [
    "Revascularize - untreated CLTI carries roughly a 25% amputation rate and 25% mortality at 1 year",
    "BEST-CLI: in patients with an adequate single-segment great saphenous vein, open bypass beat endovascular therapy for major adverse limb events",
    "BASIL-2: in patients needing infrapopliteal revascularization, a best endovascular treatment first strategy gave better amputation-free survival - the two trials enrolled different patients and both results stand",
    "Treat infection and drain pus before or at the same time as revascularization; a septic foot is not made better by inflow alone",
    "Guideline-directed medical therapy in every patient: high-intensity statin, antiplatelet, blood pressure and glycemic control, and smoking cessation"
  ],
  pearls: [
    "Conduit decides the operation - single-segment great saphenous vein is the difference between a bypass that lasts a decade and one that fails in a year",
    "The angiosome concept is attractive and the evidence is weak; get the best flow you can into the foot rather than chasing a specific angiosome",
    "A patient who is nonambulatory with a contracted limb and extensive tissue loss may be better served by a primary amputation than by a failing revascularization",
    "BEST-CLI and BASIL-2 do not contradict each other - read them as vein-available favors bypass, infrapopliteal-only favors endovascular first"
  ],
  refs: [
    { t: "Global Vascular Guidelines on the management of chronic limb-threatening ischemia", u: "https://www.jvascsurg.org/article/S0741-5214(19)30321-2/fulltext" },
    { t: "BEST-CLI trial (N Engl J Med 2022)", u: "https://www.nejm.org/doi/full/10.1056/NEJMoa2207899" },
    { t: "2024 ACC/AHA guideline for the management of lower extremity peripheral artery disease", u: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001251" }
  ]
},
{
  id: "vasc-acute-limb-ischemia",
  name: "Acute Limb Ischemia",
  sec: "vasc",
  present: [
    "The six Ps - pain, pallor, pulselessness, poikilothermia, paresthesia and paralysis - with the last two defining threat rather than presence",
    "Sudden onset in a patient with atrial fibrillation and no claudication history suggests embolism; gradual onset with known PAD suggests in situ thrombosis",
    "Rutherford class I is viable, IIa marginally threatened with sensory loss only, IIb immediately threatened with rest pain and motor deficit, and III irreversible with fixed mottling and rigor",
    "A cold, insensate, paralyzed limb with absent venous Doppler signals is class III and is an amputation, not a revascularization"
  ],
  dx: [
    "The diagnosis is clinical and the clock starts at presentation - imaging must not delay heparin or the operating room in class IIb",
    "Handheld Doppler at the bedside for arterial and venous signals: the presence or absence of a venous signal is what separates IIb from III",
    "CTA in class I and IIa where there is time, to plan the intervention and define inflow and runoff",
    "Look for the embolic source afterward - echocardiography, rhythm monitoring, and aortic imaging - because the second embolus is preventable"
  ],
  tx: [
    "Systemic heparin immediately on suspicion: 80 units/kg bolus then infusion, before imaging and before the operating room",
    "Class IIb goes straight to revascularization - surgical embolectomy with a Fogarty catheter, thrombectomy, or bypass depending on the anatomy",
    "Class I and IIa can tolerate catheter-directed thrombolysis, which the STILE and TOPAS trials showed is comparable to surgery in the right patient and is favored for in situ thrombosis of a graft",
    "Completion imaging before leaving the table - a residual embolus in the tibial vessels is the reason for an early failure",
    "Anticipate and treat reperfusion injury: hyperkalemia, myoglobinuria and acidosis, with a low threshold for four-compartment fasciotomy"
  ],
  pearls: [
    "Paralysis and a fixed mottling that does not blanch mean the limb is dead - revascularizing it kills the patient with reperfusion syndrome",
    "Embolectomy for an embolus, bypass for a thrombosis - a Fogarty in a diseased native artery strips the intima and creates the very lesion you were trying to avoid",
    "Fasciotomy is a decision made in the operating room during the case, not on the ward at 3 am when the compartments are already hard",
    "The heparin bolus is the intervention with the best evidence and the shortest delay; give it while you are calling the operating room"
  ],
  refs: [
    { t: "2024 ACC/AHA guideline for the management of lower extremity peripheral artery disease", u: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001251" },
    { t: "ESVS 2020 clinical practice guidelines on the management of acute limb ischaemia", u: "https://www.ejves.com/article/S1078-5884(19)32626-8/fulltext" },
    { t: "StatPearls: Acute Arterial Occlusion", u: "https://www.ncbi.nlm.nih.gov/books/NBK441851/" }
  ]
}
];
