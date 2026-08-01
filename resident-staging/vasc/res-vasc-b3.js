/* Vascular Surgery resident dataset - batch 3 of 12 (entries 11-15).
 * Segmental occlusive disease and popliteal pathology.
 * Schema: {id,name,sec,present[],dx[],tx[],pearls[],refs[{t,u}]}  sec="vasc"
 */
const RES_VASC_B3 = [
{
  id: "vasc-aortoiliac-occlusive",
  name: "Aortoiliac Occlusive Disease",
  sec: "vasc",
  present: [
    "Buttock, hip and thigh claudication rather than calf, because the disease sits above the inguinal ligament",
    "Leriche syndrome is the complete triad of buttock claudication, erectile dysfunction and absent femoral pulses",
    "Younger, heavily smoking patients with a hypoplastic aorta form a recognizable subgroup, more often women",
    "Absent or diminished femoral pulses on examination localizes the disease before any imaging is ordered"
  ],
  dx: [
    "Segmental pressures and waveforms showing a damped femoral waveform place the lesion in the inflow",
    "CTA defines the pattern; TASC II classification A through D grades the lesion and historically guided the open versus endovascular choice",
    "Assess for concurrent infrainguinal disease - multilevel disease is common and inflow is corrected first",
    "Measure a femoral pressure gradient at angiography when the lesion looks moderate; a 10 mmHg resting or 20 mmHg post-vasodilator gradient is significant"
  ],
  tx: [
    "Endovascular therapy first for most patterns, including many TASC C and D lesions - kissing iliac stents for aortic bifurcation disease, with excellent patency",
    "Covered stents outperformed bare metal for complex aortoiliac occlusive disease in the COBEST trial, particularly in TASC C and D",
    "Aortobifemoral bypass remains the most durable operation, with 85-90% patency at 5 years, and is the answer in young patients with extensive disease",
    "Axillobifemoral or femorofemoral crossover bypass for the high-risk patient or the hostile abdomen, at the cost of lower patency",
    "Correct the inflow first and reassess - a substantial number of patients need nothing more distally once the inflow is fixed"
  ],
  pearls: [
    "The rule is inflow before outflow; a distal bypass built onto a stenotic inflow fails, and the failure gets blamed on the distal target",
    "Preserve at least one internal iliac artery when covering the bifurcation - bilateral hypogastric sacrifice causes buttock claudication and, rarely, colonic or spinal ischemia",
    "Erectile dysfunction from aortoiliac disease can be made worse by an operation that disrupts the pelvic autonomic nerves; warn the patient before, not after",
    "A femoral pulse that is present but not normal is an abnormal femoral pulse - compare sides and measure a gradient rather than calling it palpable"
  ],
  refs: [
    { t: "2024 ACC/AHA guideline for the management of lower extremity peripheral artery disease", u: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001251" },
    { t: "SVS clinical practice guidelines", u: "https://www.svs.org/clinical-practice/clinical-practice-guidelines/" },
    { t: "StatPearls: Aortoiliac Occlusive Disease", u: "https://www.ncbi.nlm.nih.gov/books/NBK537323/" }
  ]
},
{
  id: "vasc-fempop",
  name: "Femoropopliteal Occlusive Disease",
  sec: "vasc",
  present: [
    "Calf claudication with a palpable femoral pulse and an absent popliteal or pedal pulse",
    "The superficial femoral artery at the adductor hiatus is the most common site of atherosclerotic occlusion in the entire body",
    "Progression to rest pain or tissue loss usually requires disease at a second level, because the profunda collateralizes an isolated SFA occlusion well",
    "Acute-on-chronic presentation with sudden worsening suggests in situ thrombosis of a stenotic segment"
  ],
  dx: [
    "Duplex ultrasound maps the lesion and grades stenosis by velocity ratio; a ratio above 2.0 indicates a 50% stenosis",
    "CTA or MRA for operative planning, with attention to the popliteal and tibial runoff, which predicts bypass patency more than the lesion itself",
    "Vein mapping of both great saphenous veins before any planned bypass",
    "Distinguish focal stenosis from long occlusion and heavy calcification - both drive the endovascular versus open decision"
  ],
  tx: [
    "Short focal lesions do well with angioplasty and selective stenting; long occlusions favor bypass if the patient has vein and reasonable risk",
    "Drug-coated balloons improve patency over plain angioplasty; the 2018 mortality signal from a meta-analysis was not confirmed on longer follow-up and the FDA softened its warning in 2023",
    "Above-knee femoropopliteal bypass with prosthetic is acceptable when vein is unavailable; below-knee bypass should use vein wherever possible",
    "Reversed or in situ great saphenous vein gives the best long-term patency; the choice between them is surgeon preference more than evidence",
    "Duplex graft surveillance at 1, 3, 6 and 12 months then annually - a failing graft revised before it thromboses does far better than a thrombosed one"
  ],
  pearls: [
    "The profunda femoris is the collateral that keeps these legs alive; a profundaplasty alone can heal a wound when nothing else is available",
    "Runoff is the prognosis - a beautiful proximal result into a single diseased tibial vessel will not last",
    "Do not put prosthetic below the knee if there is any usable vein, including arm vein or spliced segments",
    "A graft with a rising velocity on surveillance is a graft about to fail; intervene on the duplex finding, not on the return of symptoms"
  ],
  refs: [
    { t: "2024 ACC/AHA guideline for the management of lower extremity peripheral artery disease", u: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001251" },
    { t: "FDA update on paclitaxel-coated devices for peripheral artery disease", u: "https://www.fda.gov/medical-devices/letters-health-care-providers/update-paclitaxel-coated-devices-treat-peripheral-arterial-disease-letter-health-care-providers" },
    { t: "StatPearls: Peripheral Arterial Disease", u: "https://www.ncbi.nlm.nih.gov/books/NBK430745/" }
  ]
},
{
  id: "vasc-infrapopliteal",
  name: "Infrapopliteal Disease and Pedal Revascularization",
  sec: "vasc",
  present: [
    "Almost always presents as tissue loss or rest pain rather than claudication, because the calf muscles are supplied above the disease",
    "Strongly associated with diabetes and end-stage renal disease, with heavy medial calcification and a spared profunda and superficial femoral artery",
    "A palpable popliteal pulse with a nonhealing toe ulcer is the classic picture of isolated tibial disease",
    "Pedal arch quality determines healing potential and is assessed before anything is planned"
  ],
  dx: [
    "Toe pressures and pulse volume recordings, because ankle indices are unreliable in calcified tibial vessels",
    "High-quality angiography with dedicated foot views including lateral projections - the pedal arch is not seen on a standard anteroposterior run",
    "GLASS infrapopliteal grading and the pedal arch score from the Global Vascular Guidelines predict endovascular success and wound healing",
    "Perfusion assessment with skin perfusion pressure or transcutaneous oxygen where available; a TcPO2 above 30 mmHg predicts healing"
  ],
  tx: [
    "BASIL-2 favored a best endovascular treatment first strategy for patients requiring infrapopliteal revascularization, on amputation-free survival",
    "Angioplasty of tibial vessels with long low-pressure inflations; drug-coated balloon benefit below the knee is less established than in the femoropopliteal segment",
    "Distal bypass to the tibial, peroneal or pedal vessels with vein is the alternative and gives durable results in the patient with good conduit",
    "Pedal loop revascularization and retrograde tibiopedal access for the flush-occluded vessel that cannot be crossed antegrade",
    "Revascularization is only half of it - offloading, debridement and infection control determine whether the wound actually heals"
  ],
  pearls: [
    "Getting in-line flow to the foot matters more than which vessel carries it; do not abandon a case because the angiosome-appropriate vessel could not be opened",
    "The peroneal artery is often the last vessel standing and can heal a wound through its collaterals to the pedal arch",
    "Retrograde pedal access has made previously untreatable flush occlusions treatable and should be in the plan before the case, not improvised at the end",
    "Repeat intervention is expected in this population - the goal is wound healing and limb preservation, not a durable single procedure"
  ],
  refs: [
    { t: "Global Vascular Guidelines on the management of chronic limb-threatening ischemia", u: "https://www.jvascsurg.org/article/S0741-5214(19)30321-2/fulltext" },
    { t: "BASIL-2 trial (Lancet 2023)", u: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(23)00462-2/fulltext" },
    { t: "StatPearls: Peripheral Arterial Disease", u: "https://www.ncbi.nlm.nih.gov/books/NBK430745/" }
  ]
},
{
  id: "vasc-popliteal-aneurysm",
  name: "Popliteal Artery Aneurysm",
  sec: "vasc",
  present: [
    "The most common peripheral aneurysm, overwhelmingly in older men, and bilateral in roughly half",
    "Presents with thromboembolic complications far more often than with rupture - acute limb ischemia is the classic and worst presentation",
    "An easily palpable popliteal pulse is abnormal and should prompt a duplex; a normal popliteal artery is difficult to feel",
    "Associated with abdominal aortic aneurysm in 30-50%, so finding one mandates imaging the aorta and the other leg"
  ],
  dx: [
    "Duplex ultrasound measures the diameter and the mural thrombus load and is the surveillance tool",
    "CTA for operative planning and to assess the runoff, which is frequently already compromised by silent distal embolization",
    "Repair threshold is 2 cm, or any size with mural thrombus, distortion, or symptoms",
    "Assess runoff carefully in the acutely ischemic presentation - chronic showering of emboli often leaves only one patent tibial vessel"
  ],
  tx: [
    "Open bypass with exclusion using great saphenous vein through a medial approach is the standard, with the best long-term patency",
    "Endovascular repair with a covered stent is reasonable in the older, higher-risk patient with good runoff and adequate seal zones",
    "Acute presentation with a thrombosed aneurysm and poor runoff: catheter-directed thrombolysis first to clear the tibial vessels, then definitive repair",
    "Ligation plus bypass rather than in-line stenting when there is significant mural thrombus, because the sac can continue to enlarge from geniculate backfilling",
    "Asymptomatic aneurysms under 2 cm without thrombus are surveilled with duplex every 6-12 months"
  ],
  pearls: [
    "A patient presenting with acute limb ischemia and no atrial fibrillation should have both popliteal fossae examined - the diagnosis is frequently missed at the first encounter",
    "Amputation rates after acute thrombosis of a popliteal aneurysm approach 20-30%, which is the whole argument for elective repair at 2 cm",
    "Thrombolysis in the acute case is not a delay tactic - restoring even one tibial vessel transforms the bypass from a doomed operation into a durable one",
    "Always image the aorta; finding the popliteal aneurysm and missing the 5.5 cm AAA is a documented failure mode"
  ],
  refs: [
    { t: "SVS clinical practice guidelines for popliteal artery aneurysms", u: "https://www.jvascsurg.org/article/S0741-5214(21)02597-5/fulltext" },
    { t: "StatPearls: Popliteal Artery Aneurysm", u: "https://www.ncbi.nlm.nih.gov/books/NBK430823/" },
    { t: "ESVS 2020 clinical practice guidelines on the management of acute limb ischaemia", u: "https://www.ejves.com/article/S1078-5884(19)32626-8/fulltext" }
  ]
},
{
  id: "vasc-popliteal-entrapment",
  name: "Popliteal Entrapment and Adventitial Cystic Disease",
  sec: "vasc",
  present: [
    "Calf claudication in a young, athletic patient with no atherosclerotic risk factors - the age is the diagnostic clue",
    "Popliteal entrapment classically affects muscular young men and may be bilateral; symptoms are brought on by exercise and sometimes by passive plantarflexion",
    "Adventitial cystic disease produces abrupt, sometimes intermittent claudication and has a characteristic hourglass or scimitar sign on imaging",
    "Pedal pulses that disappear on active plantarflexion or passive dorsiflexion suggest functional entrapment"
  ],
  dx: [
    "Duplex with provocative maneuvers - resting studies are frequently normal and the diagnosis is missed if the maneuvers are not done",
    "MRI or MRA in neutral and stressed positions defines the anatomic relationship of the artery to the medial head of gastrocnemius and grades the entrapment type I through VI",
    "Adventitial cystic disease shows a mucin-filled cyst in the arterial wall compressing the lumen, best seen on MRI, with no atherosclerotic change elsewhere",
    "Exclude the young-patient mimics: thromboangiitis obliterans, fibromuscular dysplasia, vasculitis and embolic disease"
  ],
  tx: [
    "Entrapment: myotomy releasing the medial head of gastrocnemius or the offending band through a posterior approach, with arterial reconstruction only if the artery is already damaged",
    "Type VI functional entrapment without arterial damage is treated by release alone, and results are good",
    "A chronically damaged, aneurysmal or occluded popliteal artery needs interposition or bypass with vein at the time of release",
    "Adventitial cystic disease: cyst evacuation with adventitial resection, or resection and interposition grafting if the artery is occluded or the wall destroyed",
    "Percutaneous aspiration of an adventitial cyst has a high recurrence rate and is not the definitive treatment"
  ],
  pearls: [
    "A young athlete with claudication does not have atherosclerosis - resist the urge to order a lipid panel and order the provocative duplex instead",
    "Provocative maneuvers cause popliteal compression in a substantial minority of asymptomatic normal people, so image findings must match the symptoms",
    "Operate before the artery is damaged - release alone is a small operation and a bypass in a 25-year-old is a lifelong problem",
    "Examine and image the contralateral leg; bilateral entrapment is common and often asymptomatic at first"
  ],
  refs: [
    { t: "StatPearls: Popliteal Artery Entrapment Syndrome", u: "https://www.ncbi.nlm.nih.gov/books/NBK430772/" },
    { t: "StatPearls: Adventitial Cystic Disease", u: "https://www.ncbi.nlm.nih.gov/books/NBK560549/" },
    { t: "SVS clinical practice guidelines", u: "https://www.svs.org/clinical-practice/clinical-practice-guidelines/" }
  ]
}
];
