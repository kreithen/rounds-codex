/* Vascular Surgery resident dataset - batch 11 of 12 (entries 51-55).
 * Perioperative and medical vascular disease.
 * Schema: {id,name,sec,present[],dx[],tx[],pearls[],refs[{t,u}]}  sec="vasc"
 */
const RES_VASC_B11 = [
{
  id: "vasc-periop-cardiac-risk",
  name: "Perioperative Cardiac Risk in Vascular Surgery",
  sec: "vasc",
  present: [
    "Open aortic and infrainguinal bypass are classified as elevated-risk procedures, with a major cardiac event rate above 1%",
    "The population is the problem - patients with peripheral arterial disease have coronary disease by definition, and most are asymptomatic because they cannot walk far enough to get angina",
    "Functional capacity is difficult to assess in a claudicant, which removes the most useful single piece of preoperative information",
    "Postoperative myocardial injury is usually silent and detected only by surveillance troponin"
  ],
  dx: [
    "Revised Cardiac Risk Index or the ACS NSQIP surgical risk calculator to estimate risk",
    "Do not order stress testing unless the result will change management - a positive test in a patient who needs the operation anyway leads to delay without benefit",
    "Echocardiography for a new murmur, unexplained dyspnea, or known or suspected significant valve disease",
    "Consider surveillance troponin on postoperative days 1 to 3 in high-risk patients, recognizing that myocardial injury after noncardiac surgery predicts mortality"
  ],
  tx: [
    "Continue beta blockers in patients already taking them; POISE showed starting high-dose metoprolol on the day of surgery reduces infarction but increases stroke and death",
    "Continue statins throughout - the perioperative period is the wrong time to stop, and withdrawal is associated with harm",
    "Continue aspirin in patients with a coronary stent; POISE-2 found no benefit and more bleeding from starting aspirin in patients not already on it",
    "Defer elective surgery after coronary stenting: at least 30 days after a bare metal stent and ideally 6 months, minimum 3 months, after a drug-eluting stent",
    "CARP showed prophylactic coronary revascularization before elective vascular surgery did not improve outcomes in stable coronary disease",
    "Optimize anemia, glycemia and volume status, and plan the analgesia to avoid the tachycardia and hypertension that drive ischemia"
  ],
  pearls: [
    "The strongest evidence in this whole area is negative: do not add beta blockers acutely, do not add aspirin de novo, and do not revascularize the coronaries prophylactically",
    "Stopping dual antiplatelet therapy early after a drug-eluting stent to permit surgery causes stent thrombosis, which is worse than the bleeding it avoids",
    "A cardiology consultation that returns cleared for surgery has not helped anybody - the useful question is what specific medical optimization is recommended",
    "Silent postoperative myocardial injury is far more common than clinical infarction and carries a real mortality, which is the argument for surveillance troponin"
  ],
  refs: [
    { t: "2024 AHA/ACC guideline for perioperative cardiovascular management for noncardiac surgery", u: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001285" },
    { t: "POISE trial (Lancet 2008)", u: "https://pubmed.ncbi.nlm.nih.gov/18479744/" },
    { t: "StatPearls: Preoperative Cardiac Risk Assessment", u: "https://www.ncbi.nlm.nih.gov/books/NBK538345/" }
  ]
},
{
  id: "vasc-antithrombotic-after-revasc",
  name: "Antithrombotic Therapy After Revascularization",
  sec: "vasc",
  present: [
    "Every revascularized patient needs an antithrombotic plan written at discharge, and the commonest failure is that nobody writes one",
    "The regimen depends on what was done - endovascular versus open, prosthetic versus vein, and how good the runoff is",
    "Bleeding risk is not theoretical in this population, which is elderly, often anemic, and frequently already on other agents",
    "The plan needs a review date, because indefinite dual therapy accumulates harm"
  ],
  dx: [
    "Document the conduit, the target vessel, the quality of the runoff and any intraoperative concern - these determine intensity",
    "Assess bleeding risk explicitly: prior gastrointestinal bleeding, anemia, renal impairment, falls, and concurrent anticoagulation",
    "Identify a competing indication for anticoagulation such as atrial fibrillation, which changes the whole regimen",
    "Establish a surveillance plan alongside the drug plan, since duplex surveillance and antithrombotics work together"
  ],
  tx: [
    "Baseline for all peripheral arterial disease: single antiplatelet therapy plus a high-intensity statin, lifelong",
    "VOYAGER PAD: rivaroxaban 2.5 mg twice daily plus aspirin after lower extremity revascularization reduced major adverse limb events including acute limb ischemia and major amputation",
    "COMPASS established the same low-dose rivaroxaban plus aspirin combination in stable peripheral arterial disease more broadly",
    "Dual antiplatelet therapy for 1-6 months after infrainguinal stenting, then single agent; after carotid stenting, at least 30 days",
    "Prosthetic below-knee bypass with poor runoff is the classic indication for adding an anticoagulant or dual antiplatelet therapy, on weaker evidence",
    "Clopidogrel is preferred over aspirin as the single agent in symptomatic peripheral arterial disease based on the CAPRIE peripheral subgroup"
  ],
  pearls: [
    "Adding rivaroxaban lowers limb events and raises bleeding - the conversation with the patient about which they fear more is the actual clinical work",
    "Do not leave a patient on dual antiplatelet therapy indefinitely by default; set a stop date at the time of prescribing",
    "A patient already anticoagulated for atrial fibrillation who has a stent does not usually need triple therapy for long, and the coronary literature on shortening it applies here too",
    "The statin is the drug with the largest mortality benefit in this population and it is the one most often omitted or under-dosed"
  ],
  refs: [
    { t: "VOYAGER PAD trial (N Engl J Med 2020)", u: "https://www.nejm.org/doi/full/10.1056/NEJMoa2000052" },
    { t: "2024 ACC/AHA guideline for the management of lower extremity peripheral artery disease", u: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001251" },
    { t: "COMPASS trial (N Engl J Med 2017)", u: "https://www.nejm.org/doi/full/10.1056/NEJMoa1709118" }
  ]
},
{
  id: "vasc-large-vessel-vasculitis",
  name: "Large Vessel Vasculitis",
  sec: "vasc",
  present: [
    "Giant cell arteritis in patients over 50 with new headache, scalp tenderness, jaw claudication, visual loss and polymyalgic symptoms",
    "Takayasu arteritis in women under 40, typically with limb claudication, absent pulses, blood pressure discrepancy and bruits",
    "Both cause stenosis, occlusion and aneurysm of the aorta and its primary branches, and both have a systemic inflammatory phase",
    "Jaw claudication and visual symptoms in giant cell arteritis are the features that make it an emergency"
  ],
  dx: [
    "Erythrocyte sedimentation rate and C-reactive protein are raised in most but a normal result does not exclude either",
    "Temporal artery ultrasound showing the halo sign, or temporal artery biopsy with a segment of at least 1-2 cm because skip lesions are common",
    "Do not delay steroids for the biopsy - histology remains interpretable for one to two weeks after starting treatment",
    "CTA, MRA or FDG-PET of the aorta and branches for Takayasu and for large-vessel giant cell arteritis, which is underrecognized",
    "Bilateral arm pressures and a full pulse examination in every suspected Takayasu case"
  ],
  tx: [
    "Giant cell arteritis: prednisone 40-60 mg daily immediately, or high-dose intravenous methylprednisolone if there is visual loss, started on clinical suspicion",
    "Tocilizumab is steroid-sparing and effective in giant cell arteritis (GiACTA) and is now standard in relapsing or steroid-toxic disease",
    "Takayasu: corticosteroids plus a steroid-sparing agent, commonly methotrexate, azathioprine or a tumor necrosis factor inhibitor",
    "Revascularize only during quiescent disease wherever possible - intervening on an actively inflamed vessel has high restenosis and anastomotic complication rates",
    "Bypass is generally more durable than angioplasty in Takayasu, and any intervention should be planned with rheumatology",
    "Bone protection, gastroprotection and glycemic monitoring for anyone on long-term steroids"
  ],
  pearls: [
    "Steroids first, biopsy second - the eye that is lost while waiting for a biopsy slot does not come back",
    "Blood pressure measured in an arm with subclavian stenosis is falsely low, and treating that reading undertreats the patient and can cause cerebral hypoperfusion",
    "Inflammatory markers can normalize while disease remains active, particularly in Takayasu, so imaging is part of the follow-up",
    "A young woman with claudication and absent pulses does not have atherosclerosis - Takayasu is frequently diagnosed years late"
  ],
  refs: [
    { t: "2021 ACR/VF guideline for the management of giant cell arteritis and Takayasu arteritis", u: "https://www.rheumatology.org/Portals/0/Files/Giant-Cell-Arteritis-Takayasu-Arteritis-Guideline.pdf" },
    { t: "StatPearls: Giant Cell Arteritis", u: "https://www.ncbi.nlm.nih.gov/books/NBK459376/" },
    { t: "StatPearls: Takayasu Arteritis", u: "https://www.ncbi.nlm.nih.gov/books/NBK459127/" }
  ]
},
{
  id: "vasc-raynaud",
  name: "Raynaud Phenomenon and Vasospastic Disorders",
  sec: "vasc",
  present: [
    "Episodic, well-demarcated triphasic color change - white, then blue, then red - of the digits provoked by cold or emotional stress",
    "Primary Raynaud is symmetric, begins in the teens or twenties, spares the thumbs, and has no tissue loss",
    "Secondary Raynaud is asymmetric, begins later, may involve the thumbs, and is associated with digital ulcers or gangrene",
    "Digital ulceration or gangrene means secondary disease and warrants a full workup",
    "Hypothenar hammer syndrome from repetitive palmar trauma causes ulnar artery aneurysm or occlusion and unilateral digital ischemia"
  ],
  dx: [
    "Nailfold capillaroscopy is the single most useful test - dilated and dropout capillaries indicate connective tissue disease",
    "Antinuclear antibody with extractable nuclear antigens, particularly anticentromere and anti-Scl-70, plus inflammatory markers",
    "Duplex and digital pressures, with an Allen test; an abnormal Allen test with unilateral symptoms suggests hypothenar hammer syndrome",
    "Angiography of the hand for unilateral disease, digital ulceration, or suspected embolic source",
    "Exclude the mimics: thoracic outlet with arterial compression, thromboangiitis obliterans, vasculitis, cryoglobulinemia and drug effects"
  ],
  tx: [
    "Conservative first: cold avoidance, whole-body warmth rather than just gloves, smoking cessation, and stopping vasoconstrictor drugs including beta blockers and stimulants",
    "Calcium channel blockers are first-line pharmacotherapy - nifedipine extended release 30-60 mg daily or amlodipine",
    "Phosphodiesterase-5 inhibitors such as sildenafil for refractory disease and for digital ulcer healing",
    "Intravenous prostacyclin analogs (iloprost) for critical digital ischemia and active ulceration",
    "Bosentan reduces new digital ulcers in systemic sclerosis but does not heal existing ones",
    "Botulinum toxin injection and digital or cervical sympathectomy for refractory critical ischemia; surgical repair of the ulnar lesion in hypothenar hammer syndrome"
  ],
  pearls: [
    "Raynaud is frequently the first manifestation of systemic sclerosis, sometimes by years - capillaroscopy plus antibodies is what separates a benign nuisance from a sentinel finding",
    "Warm the trunk, not just the hands - core temperature drives the peripheral vasoconstriction",
    "Digital ulcers in Raynaud are painful, slow and disabling, and they should be referred to rheumatology early rather than treated with dressings",
    "Unilateral symptoms are never primary Raynaud; look for an embolic or compressive source in the arm"
  ],
  refs: [
    { t: "StatPearls: Raynaud Disease", u: "https://www.ncbi.nlm.nih.gov/books/NBK499833/" },
    { t: "EULAR recommendations for the treatment of systemic sclerosis", u: "https://ard.bmj.com/content/76/8/1327" },
    { t: "MedlinePlus: Raynaud Disease", u: "https://medlineplus.gov/raynaudsdisease.html" }
  ]
},
{
  id: "vasc-hypercoagulable-hit",
  name: "Hypercoagulable States and Heparin-Induced Thrombocytopenia",
  sec: "vasc",
  present: [
    "Suspect an inherited or acquired thrombophilia with thrombosis at a young age, unusual sites, recurrence off treatment, or a strong family history",
    "Heparin-induced thrombocytopenia presents 5-10 days after heparin exposure, or within hours on re-exposure within 100 days",
    "The paradox of HIT is that it causes thrombosis, not bleeding, despite the low platelet count",
    "Antiphospholipid syndrome causes arterial and venous thrombosis and pregnancy loss, and is the thrombophilia that most changes vascular management",
    "Early graft or access thrombosis without a technical explanation should prompt a thrombophilia thought, and specifically a HIT thought"
  ],
  dx: [
    "4Ts score for HIT - thrombocytopenia, timing, thrombosis and other causes - stratifies pretest probability and decides who gets tested",
    "Anti-PF4 heparin antibody immunoassay is sensitive but not specific; a serotonin release assay or heparin-induced platelet activation assay confirms",
    "A 50% platelet drop from baseline is the HIT threshold, even if the absolute count stays within the normal range",
    "Antiphospholipid testing needs lupus anticoagulant, anticardiolipin and anti-beta-2-glycoprotein I, confirmed at 12 weeks",
    "Do not test for thrombophilia during acute thrombosis or on anticoagulation - protein C, protein S and antithrombin are all altered and the result will mislead"
  ],
  tx: [
    "Stop all heparin immediately on clinical suspicion of HIT, including flushes and heparin-bonded catheters, before the confirmatory test returns",
    "Start a non-heparin anticoagulant - argatroban or bivalirudin - because stopping heparin alone leaves a high thrombosis risk",
    "Do not give platelet transfusions in HIT unless there is active bleeding, and do not start warfarin until the platelet count recovers above 150, because early warfarin causes venous limb gangrene",
    "Antiphospholipid syndrome with thrombosis is treated with warfarin, not a direct oral anticoagulant - the TRAPS trial found rivaroxaban inferior with excess arterial events in triple-positive patients",
    "Document a heparin allergy label clearly, since inadvertent re-exposure during a subsequent vascular procedure is a recognized and preventable disaster"
  ],
  pearls: [
    "The 4Ts score exists to stop reflexive testing - a low score makes HIT very unlikely and a positive immunoassay in that setting is usually a false positive that costs the patient a good drug",
    "Stopping heparin without starting an alternative is the single commonest management error in HIT",
    "Direct oral anticoagulants have displaced warfarin nearly everywhere except antiphospholipid syndrome and mechanical valves, and forgetting that exception causes strokes",
    "Thrombophilia testing rarely changes acute management; it is a clinic decision about duration, taken weeks later and off anticoagulation"
  ],
  refs: [
    { t: "ASH 2018 guidelines for management of venous thromboembolism: heparin-induced thrombocytopenia", u: "https://ashpublications.org/bloodadvances/article/2/22/3360/16094" },
    { t: "StatPearls: Heparin Induced Thrombocytopenia", u: "https://www.ncbi.nlm.nih.gov/books/NBK441860/" },
    { t: "StatPearls: Antiphospholipid Syndrome", u: "https://www.ncbi.nlm.nih.gov/books/NBK430980/" }
  ]
}
];
