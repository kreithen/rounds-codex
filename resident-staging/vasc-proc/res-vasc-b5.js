/* Vascular Surgery PROCEDURES - batch 5 of 10 (procedures 21-25).
 * Extra-anatomic bypass, popliteal, and lower extremity endovascular part 1.
 * Extended schema: {id,name,sec,present[],dx[],tx[],tech[],after[],pearls[],refs[{t,u}]}  sec="vasc"
 */
const RES_VASC_B5 = [
{
  id: "vasc-axillobifem",
  name: "Axillobifemoral Bypass",
  sec: "vasc",
  present: [
    "Aortoiliac occlusive disease with threatened limbs in a patient who cannot survive an aortobifemoral bypass",
    "A hostile abdomen from previous surgery, radiation or a stoma",
    "As part of the extra-anatomic strategy for aortic graft infection, combined with graft excision and aortic stump closure",
    "Accepted as less durable than anatomic reconstruction - the trade is patency for physiologic tolerability"
  ],
  dx: [
    "CTA including the subclavian and axillary arteries, because the donor artery must be disease-free",
    "Bilateral arm pressures - a subclavian stenosis on the donor side makes the operation pointless and steals from the arm",
    "Assess both femoral bifurcations and the profunda origins, which are the outflow",
    "Confirm the limbs are genuinely threatened; this operation is not justified for claudication"
  ],
  tx: [
    "Externally supported ringed 8 mm PTFE throughout, because the graft crosses the chest wall and the inguinal ligament",
    "Systemic heparin before clamping the axillary artery",
    "Do the axillary anastomosis close to the chest wall on the first part of the artery, not out in the axilla, to limit the arc of movement",
    "Antiplatelet and statin lifelong, with duplex surveillance",
    "Regional or light general anesthesia; this can be tolerated by patients who could not survive a laparotomy"
  ],
  tech: [
    "Infraclavicular incision, split pectoralis major along its fibers, divide pectoralis minor if needed, and expose the axillary artery on the first part",
    "Protect the brachial plexus cords, which lie posterolateral to the artery",
    "Anastomose the graft end-to-side to the axillary artery close to the chest wall, angled medially so the graft lies along the chest rather than pulling",
    "Tunnel subcutaneously in the mid-axillary line down to the ipsilateral groin, staying deep to Scarpa fascia and superficial to the abdominal wall muscles",
    "Complete the ipsilateral femoral anastomosis, extending onto the profunda if needed",
    "Add the femorofemoral crossover limb from the ipsilateral graft or from the femoral anastomosis through a suprapubic tunnel",
    "Avoid tension: the graft must be redundant enough that shoulder abduction does not pull on the axillary anastomosis"
  ],
  after: [
    "Warn the patient explicitly against sudden shoulder abduction and against sleeping on that side in the early weeks - axillary anastomotic disruption is a described and dramatic complication",
    "Check arm perfusion as well as leg perfusion",
    "Watch the long subcutaneous tunnel for seroma and infection",
    "Duplex surveillance is important because patency is lower than anatomic reconstruction and a failing graft is worth revising",
    "Counsel the durability honestly - this is often a limb-salvage operation with a limited horizon",
    "Antiplatelet and statin lifelong"
  ],
  pearls: [
    "Put the axillary anastomosis close to the chest wall; the further laterally it sits, the more the shoulder pulls on it",
    "Graft disruption at the axillary anastomosis after a sudden arm movement is a recognized event, and the patient must be told before discharge",
    "Externally supported graft throughout - the tunnel crosses two mobile planes",
    "Confirm the donor subclavian is clean; an axillobifemoral off a stenotic subclavian gives you a cold arm and two cold legs"
  ],
  refs: [
    { t: "2024 ACC/AHA guideline for the management of lower extremity peripheral artery disease", u: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001251" },
    { t: "ESVS 2020 clinical practice guidelines on the management of vascular graft and endograft infections", u: "https://www.ejves.com/article/S1078-5884(19)32268-4/fulltext" },
    { t: "StatPearls: Aortoiliac Occlusive Disease", u: "https://www.ncbi.nlm.nih.gov/books/NBK537323/" }
  ]
},
{
  id: "vasc-popliteal-aneurysm-repair",
  name: "Popliteal Artery Aneurysm Repair",
  sec: "vasc",
  present: [
    "Popliteal aneurysm 2 cm or larger, or any size with mural thrombus, distortion or symptoms",
    "Acute thrombosis with limb ischemia - the commonest and worst presentation, with amputation rates approaching 20-30%",
    "Bilateral in about half, and associated with abdominal aortic aneurysm in 30-50%, so both must be imaged",
    "An easily palpable popliteal pulse is abnormal and should prompt a duplex"
  ],
  dx: [
    "Duplex for diameter and mural thrombus; CTA for operative planning and runoff",
    "Runoff is frequently already compromised by silent distal embolization, and it determines the approach",
    "Image the aorta and the contralateral popliteal in every case",
    "In the acute presentation, assess Rutherford class; a class III limb is not revascularized"
  ],
  tx: [
    "Open bypass with exclusion using great saphenous vein is the standard, with the best long-term patency",
    "Endovascular repair with a covered stent is reasonable in an older, higher-risk patient with good runoff and adequate seal zones",
    "In acute thrombosis with poor runoff, catheter-directed thrombolysis first to clear the tibial vessels transforms a doomed bypass into a durable one",
    "Ligate rather than stent through significant mural thrombus - the excluded sac can otherwise enlarge from geniculate backfilling",
    "Antiplatelet and statin; vein graft surveillance programme"
  ],
  tech: [
    "Medial approach is the standard: separate above-knee and below-knee medial incisions with the knee flexed and the leg externally rotated",
    "Expose the above-knee popliteal anterior to sartorius and the below-knee popliteal by detaching the pes anserinus and the medial head of gastrocnemius as needed",
    "Ligate the aneurysm proximally and distally to exclude it from flow, then bypass with reversed or in situ great saphenous vein",
    "Ligate geniculate branches feeding the sac; failure to do so leaves a sac that continues to expand and can still compress the popliteal vein and tibial nerve",
    "A posterior approach through an S-shaped incision in the popliteal fossa is preferred when the sac is large and compressing, because it allows direct sac decompression and branch ligation",
    "Check the tunnel and the graft for twist and for tension with the knee both flexed and extended",
    "Completion angiography of the graft and runoff"
  ],
  after: [
    "Document graft and pedal signals immediately and hourly initially",
    "Anticipate compartment syndrome after revascularizing an acutely ischemic limb, with a low threshold for fasciotomy at the index operation",
    "Watch for continued sac expansion on follow-up duplex if branches were not fully controlled",
    "Duplex graft surveillance at 1, 3, 6 and 12 months then annually",
    "Image and follow the contralateral popliteal and the aorta",
    "Antiplatelet and statin lifelong"
  ],
  pearls: [
    "A patient with acute limb ischemia and no atrial fibrillation should have both popliteal fossae palpated - this diagnosis is repeatedly missed at first contact",
    "Ligating the aneurysm without controlling geniculate inflow leaves a sac that keeps growing; the posterior approach exists for exactly that problem",
    "Thrombolysis before bypass in the acute case is not delay, it is what gives the bypass somewhere to go",
    "Always image the aorta - finding the popliteal aneurysm and missing a 5.5 cm AAA is a documented failure"
  ],
  refs: [
    { t: "SVS clinical practice guidelines for popliteal artery aneurysms", u: "https://www.jvascsurg.org/article/S0741-5214(21)02597-5/fulltext" },
    { t: "StatPearls: Popliteal Artery Aneurysm", u: "https://www.ncbi.nlm.nih.gov/books/NBK430823/" },
    { t: "ESVS 2020 clinical practice guidelines on the management of acute limb ischaemia", u: "https://www.ejves.com/article/S1078-5884(19)32626-8/fulltext" }
  ]
},
{
  id: "vasc-popliteal-release",
  name: "Popliteal Entrapment Release",
  sec: "vasc",
  present: [
    "Calf claudication in a young athletic patient with no atherosclerotic risk factors",
    "Pedal pulses that disappear on active plantarflexion or passive dorsiflexion",
    "Types I through V are anatomic variants of the artery-muscle relationship; type VI is functional entrapment by a hypertrophied normal gastrocnemius",
    "Operate before the artery is damaged - release alone is a small operation, and a bypass in a 25-year-old is a lifelong problem"
  ],
  dx: [
    "Duplex with provocative maneuvers; resting studies are frequently normal and the diagnosis is missed without them",
    "MRI or MRA in neutral and stressed positions defines the anatomic relationship and grades the entrapment type",
    "Provocative compression occurs in a substantial minority of asymptomatic normal people, so imaging must match symptoms",
    "Assess the artery itself for poststenotic dilatation, aneurysm, mural thrombus or occlusion - which determine whether reconstruction is needed"
  ],
  tx: [
    "Release alone when the artery is undamaged, which is the great majority if caught early",
    "Interposition or bypass with vein when the artery is aneurysmal, occluded or has a damaged wall",
    "Thrombolysis first in an acutely occluded entrapped artery to define the true anatomy before reconstructing",
    "Examine and image the contralateral leg, since bilateral entrapment is common and often asymptomatic",
    "Systemic heparin if arterial reconstruction is planned"
  ],
  tech: [
    "Posterior approach through an S-shaped or lazy-S incision in the popliteal fossa, prone position, which gives the best view of the muscular anatomy",
    "Identify and protect the tibial and common peroneal nerves and the popliteal vein before addressing the artery",
    "Define the offending structure: an aberrant medial head of gastrocnemius, a fibrous band, or an accessory slip",
    "Divide the medial head of gastrocnemius at its femoral origin, or divide the aberrant band, and confirm the artery lies free",
    "Confirm release intraoperatively with the ankle passively dorsiflexed and plantarflexed and a Doppler on the distal vessel",
    "Reconstruct with reversed vein interposition if the artery is damaged, using the same posterior exposure",
    "A medial approach is used when a long bypass is anticipated, at the cost of a poorer view of the muscular anatomy"
  ],
  after: [
    "Document pedal pulses with the ankle in neutral, dorsiflexion and plantarflexion before discharge - this is the proof the release worked",
    "Early mobilization and a graded return to sport, typically over 6-12 weeks",
    "Watch for hematoma in the popliteal fossa, which can compress the nerves",
    "Assess and counsel about the contralateral leg",
    "Duplex at 6 weeks and then as needed; if reconstruction was done, follow it as a bypass graft",
    "Outcomes after simple release in an undamaged artery are very good, which is worth telling a worried young patient"
  ],
  pearls: [
    "A young athlete with claudication does not have atherosclerosis; order the provocative duplex, not a lipid panel",
    "Divide the muscle at its origin rather than nibbling at it - an incomplete release leaves the symptoms and adds a scar",
    "Prove the release on the table with the ankle moved through its range; discovering it was incomplete in clinic means a second posterior dissection",
    "Look at the other leg. Bilateral disease is common and the second side is easier to treat before it is symptomatic"
  ],
  refs: [
    { t: "StatPearls: Popliteal Artery Entrapment Syndrome", u: "https://www.ncbi.nlm.nih.gov/books/NBK430772/" },
    { t: "SVS clinical practice guidelines", u: "https://www.svs.org/clinical-practice/clinical-practice-guidelines/" },
    { t: "StatPearls: Adventitial Cystic Disease", u: "https://www.ncbi.nlm.nih.gov/books/NBK560549/" }
  ]
},
{
  id: "vasc-iliac-stenting",
  name: "Iliac Angioplasty and Kissing Stents",
  sec: "vasc",
  present: [
    "Aortoiliac occlusive disease with buttock and thigh claudication or as the inflow component of a hybrid reconstruction",
    "First-line for most patterns including many TASC C and D lesions, given the durability endovascular therapy achieves in this segment",
    "Kissing stents for disease involving the aortic bifurcation, deployed simultaneously to avoid one crushing the other",
    "Inflow before outflow - correct this before any infrainguinal work, and reassess afterward"
  ],
  dx: [
    "CTA defining the lesion, the calcification pattern and the bifurcation anatomy",
    "Measure a translesional pressure gradient when the lesion is angiographically moderate: 10 mmHg resting or 20 mmHg after vasodilator is significant",
    "Assess the common femoral, which is often diseased as well and is better treated openly at the same sitting",
    "Note internal iliac origins - preserve at least one"
  ],
  tx: [
    "Covered stents outperformed bare metal for complex aortoiliac disease in the COBEST trial, particularly TASC C and D",
    "Balloon-expandable stents for ostial and bifurcation lesions where precise placement matters; self-expanding for the tortuous or mobile external iliac",
    "Systemic heparin during the case",
    "Dual antiplatelet therapy for 1-3 months, then lifelong single agent plus a high-intensity statin",
    "Plan the hybrid: a femoral endarterectomy at the same sitting is common and gives a durable inflow-and-bifurcation result"
  ],
  tech: [
    "Bilateral retrograde common femoral access under ultrasound guidance, or a contralateral up-and-over approach for a unilateral lesion",
    "Cross the lesion with a wire and catheter, confirming an intraluminal position with a small contrast injection before dilating",
    "For a chronic total occlusion, subintimal crossing with reentry is acceptable, but confirm reentry into the true lumen before stenting",
    "For bifurcation disease, position both stents with 5-10 mm protruding into the distal aorta and inflate both balloons simultaneously - this is what kissing means and it prevents one stent crushing the other",
    "Size to the reference vessel; the common iliac is typically 8-10 mm and the external iliac 7-8 mm",
    "Avoid extending a stent across the inguinal ligament into the common femoral, which compromises the future access and bypass site",
    "Complete with a pressure measurement, not just an angiogram - a good-looking result with a residual gradient has not been treated"
  ],
  after: [
    "Groin access surveillance: hematoma, pseudoaneurysm and, with a high stick, retroperitoneal bleed",
    "Document improved femoral pulses and ankle indices before discharge",
    "Most patients go home the same day or the next",
    "Dual antiplatelet therapy adherence, then single agent lifelong",
    "Duplex surveillance at 1, 6 and 12 months then annually, looking for in-stent restenosis",
    "Reassess the infrainguinal circulation once inflow is corrected - a proportion need nothing more"
  ],
  pearls: [
    "Measure the gradient. An angiographic stenosis that is not hemodynamically significant should not be stented, and a normal-looking iliac with a gradient should be",
    "Kissing stents must be inflated simultaneously; deploying sequentially crushes the first one and is a classic early error",
    "Do not carry a stent into the common femoral - you are spending the patient's future access site and future anastomosis",
    "Rupture during iliac angioplasty is rare and immediately life-threatening; keep a covered stent and an occlusion balloon in the room"
  ],
  refs: [
    { t: "2024 ACC/AHA guideline for the management of lower extremity peripheral artery disease", u: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001251" },
    { t: "StatPearls: Aortoiliac Occlusive Disease", u: "https://www.ncbi.nlm.nih.gov/books/NBK537323/" },
    { t: "SVS clinical practice guidelines", u: "https://www.svs.org/clinical-practice/clinical-practice-guidelines/" }
  ]
},
{
  id: "vasc-fempop-dcb",
  name: "Femoropopliteal Angioplasty and Drug-Coated Balloon",
  sec: "vasc",
  present: [
    "Superficial femoral and popliteal disease causing lifestyle-limiting claudication that has failed exercise and medical therapy, or chronic limb-threatening ischemia",
    "Short focal lesions do well; long occlusions favor bypass in a patient with vein and acceptable risk",
    "Drug-coated balloons improve patency over plain angioplasty in the femoropopliteal segment",
    "The 2018 paclitaxel mortality signal was not confirmed on longer follow-up and the FDA softened its warning in 2023"
  ],
  dx: [
    "Duplex maps the lesion and grades stenosis by velocity ratio; CTA or angiography for planning",
    "Assess the calcification burden - circumferential calcium predicts recoil and dissection and may need vessel preparation",
    "Assess runoff, which predicts durability more than the lesion does",
    "Vein mapping even when planning endovascular treatment, because it determines what the fallback is"
  ],
  tx: [
    "Vessel preparation before a drug-coated balloon: plain balloon predilation, and atherectomy or lithotripsy for heavy calcium, so the drug can reach the wall",
    "Provisional stenting for flow-limiting dissection or elastic recoil rather than routine stenting",
    "Avoid stenting across the adductor canal and the knee joint where possible, because of the flexion forces",
    "Dual antiplatelet therapy for 1-3 months after stenting, then single agent plus a high-intensity statin",
    "Consider rivaroxaban 2.5 mg twice daily plus aspirin on VOYAGER PAD after revascularization"
  ],
  tech: [
    "Contralateral up-and-over or ipsilateral antegrade common femoral access under ultrasound guidance",
    "Cross the lesion intraluminally where possible; subintimal crossing with reentry is a legitimate technique for a chronic total occlusion",
    "Confirm intraluminal position distally before dilating - a subintimal balloon inflation in the wrong plane extends the dissection",
    "Predilate with a plain balloon sized just under the reference vessel and inflate for at least 2-3 minutes",
    "Deploy the drug-coated balloon with adequate lesion coverage and dwell for the manufacturer's stated time, usually 3 minutes - the dwell is what delivers the drug",
    "Assess for dissection and recoil, and stent provisionally where needed",
    "Completion angiography of the treated segment and the runoff"
  ],
  after: [
    "Same-day or next-day discharge for most",
    "Document ankle indices and pedal signals before discharge",
    "Groin access surveillance, particularly after antegrade puncture, which has a higher complication rate than retrograde",
    "Duplex surveillance at 1, 6 and 12 months then annually - restenosis is common and is treated before it occludes",
    "Reinforce the exercise programme; the intervention treats the lesion and the walking programme treats the disease",
    "Antiplatelet and statin lifelong"
  ],
  pearls: [
    "The dwell time is the treatment - a drug-coated balloon inflated for 30 seconds is an expensive plain balloon",
    "Prepare the vessel first; drug will not cross circumferential calcium, and this is why heavily calcified lesions do badly with an unprepared drug-coated balloon",
    "Do not stent across the knee if you can avoid it; the flexion point fractures stents",
    "A claudicant who has not tried supervised exercise therapy should not be on the table at all"
  ],
  refs: [
    { t: "2024 ACC/AHA guideline for the management of lower extremity peripheral artery disease", u: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001251" },
    { t: "FDA update on paclitaxel-coated devices for peripheral artery disease", u: "https://www.fda.gov/medical-devices/letters-health-care-providers/update-paclitaxel-coated-devices-treat-peripheral-arterial-disease-letter-health-care-providers" },
    { t: "StatPearls: Peripheral Arterial Disease", u: "https://www.ncbi.nlm.nih.gov/books/NBK430745/" }
  ]
}
];
