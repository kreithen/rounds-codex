/* Vascular Surgery PROCEDURES - batch 4 of 10 (procedures 16-20).
 * Supra-aortic bypass and lower extremity open, part 1.
 * Extended schema: {id,name,sec,present[],dx[],tx[],tech[],after[],pearls[],refs[{t,u}]}  sec="vasc"
 */
const RES_VASC_B4 = [
{
  id: "vasc-carotid-subclavian",
  name: "Carotid-Subclavian Bypass and Subclavian Transposition",
  sec: "vasc",
  present: [
    "Symptomatic subclavian stenosis or occlusion with arm claudication or vertebrobasilar symptoms after arm exercise",
    "Planned left subclavian coverage during zone 2 TEVAR - revascularization first lowers stroke and spinal cord ischemia and is a class I recommendation",
    "Coronary-subclavian steal in a patient with a left internal mammary graft, presenting as angina on arm use",
    "Asymptomatic subclavian stenosis needs nothing; the reversed vertebral flow is compensation, not disease"
  ],
  dx: [
    "Bilateral arm pressures - a difference above 15-20 mmHg is the physical finding that makes the diagnosis",
    "Duplex showing reversed or to-and-fro vertebral flow, which may only appear on arm exercise or a cuff-release maneuver",
    "CTA of the arch and great vessels, defining the origin lesion and the length of usable subclavian distal to it",
    "Identify the vertebral and internal mammary origins, because transposition must preserve both"
  ],
  tx: [
    "Endovascular stenting of the subclavian origin is first-line for an isolated stenosis, with good technical success",
    "Open reconstruction when the origin is occluded, when stenting has failed, or when TEVAR planning demands a durable result",
    "Transposition is more physiologic and avoids prosthetic material; bypass is easier when the subclavian is short or the anatomy is hostile",
    "Heparinize before clamping; carotid clamp time is short but real",
    "Ringed PTFE or Dacron, typically 8 mm, for the bypass option"
  ],
  tech: [
    "Supraclavicular incision one fingerbreadth above the clavicle, divide platysma, and divide the clavicular head of sternocleidomastoid",
    "Divide the omohyoid, then identify and preserve the phrenic nerve on the anterior scalene - it runs lateral to medial and is the nerve most often injured here",
    "Divide the anterior scalene carefully with the phrenic retracted, exposing the subclavian artery and its branches",
    "On the left, be deliberate about the thoracic duct at the jugulosubclavian junction - ligate it rather than clip it, and look for a leak before closing",
    "For transposition: mobilize the subclavian distal to the vertebral, divide it proximally with the stump oversewn, and reimplant it end-to-side onto the common carotid",
    "For bypass: construct an end-to-side proximal anastomosis to the common carotid and an end-to-side distal anastomosis to the subclavian, tunnelling behind the jugular vein",
    "Ligate or embolize the proximal subclavian in bypass cases to prevent continued retrograde steal"
  ],
  after: [
    "Check and document arm pressures on both sides before the patient leaves recovery, and confirm the gradient has resolved",
    "Examine for phrenic palsy with a chest radiograph looking at diaphragm position, and for Horner syndrome",
    "Watch the drain for chyle - a milky drain after a left-sided operation is a thoracic duct injury and needs a low-fat diet or reexploration",
    "Neurologic checks for stroke, which is uncommon but real given the carotid clamp",
    "Duplex surveillance of the graft, with excellent long-term patency for both techniques",
    "Antiplatelet therapy lifelong"
  ],
  pearls: [
    "The phrenic nerve sits on the anterior scalene and is divided by surgeons who dissect the muscle before finding it - find the nerve first, every time",
    "A chyle leak on the left is prevented by deliberate ligation of the duct, not by hoping; look for it before you close",
    "Transposition has no prosthetic material and slightly better patency, but needs enough subclavian length distal to the vertebral - the CT decides which operation you are doing",
    "Always revascularize before covering the subclavian in a patient with a left internal mammary coronary graft"
  ],
  refs: [
    { t: "SVS clinical practice guidelines for management of extracranial cerebrovascular disease", u: "https://www.jvascsurg.org/article/S0741-5214(21)02290-9/fulltext" },
    { t: "StatPearls: Subclavian Steal Syndrome", u: "https://www.ncbi.nlm.nih.gov/books/NBK441836/" },
    { t: "2022 ACC/AHA guideline for the diagnosis and management of aortic disease", u: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001106" }
  ]
},
{
  id: "vasc-profundaplasty",
  name: "Femoral Endarterectomy and Profundaplasty",
  sec: "vasc",
  present: [
    "Common femoral occlusive disease, which is poorly served by stenting because of the flexion point and the risk of covering the profunda",
    "Profunda origin stenosis in a patient whose superficial femoral artery is occluded, where the profunda is the limb's entire collateral supply",
    "As the inflow or outflow component of a larger reconstruction, done at the same sitting as a bypass",
    "A profundaplasty alone can heal a wound when no distal target exists"
  ],
  dx: [
    "Duplex and CTA defining the common femoral plaque, the profunda origin, and the state of the superficial femoral artery",
    "Assess the profunda beyond its origin - the reconstruction has to land somewhere disease-free",
    "Segmental pressures to confirm the inflow above is adequate; correcting the femoral bifurcation onto a stenotic iliac achieves nothing",
    "Plan whether an endarterectomy with patch will suffice or whether a bypass is needed as well"
  ],
  tx: [
    "Bovine pericardium or Dacron patch, or a vein patch where infection risk is a concern",
    "Systemic heparin before clamping",
    "Correct the inflow first, endovascularly at the same sitting if the iliac is diseased - a hybrid case is often the right answer here",
    "Antibiotic prophylaxis, because the groin is the site where reconstructions get infected",
    "Ligate lymphatics rather than cauterizing them, to prevent lymphocele over a patched artery"
  ],
  tech: [
    "Longitudinal groin incision over the femoral pulse, or an oblique skin-crease incision which has lower wound complication rates",
    "Expose the common femoral, the superficial femoral and the profunda, taking control of all three plus any large side branches",
    "Heparinize and clamp, then make a longitudinal arteriotomy in the common femoral extending down onto the profunda past its origin plaque",
    "Endarterectomize the common femoral and the profunda origin, developing a clean plane and feathering the distal endpoint",
    "Tack the distal endpoint in the profunda if it lifts - the same principle as the carotid, and the same consequence if ignored",
    "Close with a patch shaped to widen the profunda origin rather than simply closing the hole",
    "Flush and de-air before completing, then confirm a profunda Doppler signal"
  ],
  after: [
    "Document pedal and profunda signals at the end of the case and again on the ward",
    "Groin wound surveillance is the main task: hematoma, seroma, lymph leak and infection are all common here",
    "A lymph leak over a patched femoral artery is treated actively - it does not resolve by being watched",
    "Mobilize early but avoid deep hip flexion for the first days",
    "Antiplatelet and high-intensity statin lifelong, with duplex surveillance",
    "Warn that claudication may improve without resolving if the superficial femoral remains occluded - the profunda buys collateral, not a normal leg"
  ],
  pearls: [
    "The profunda is the limb's insurance policy, and a profundaplasty is one of the highest-value low-morbidity operations in the specialty",
    "Do not stent the common femoral - it is a flexion point, it is the access site for everything else the patient will ever need, and a stent across the profunda origin is very hard to undo",
    "Extend the arteriotomy past the profunda origin plaque; a patch that stops short of the disease has not treated it",
    "Ligate groin lymphatics; a lymphocele over prosthetic material is a graft infection in waiting"
  ],
  refs: [
    { t: "2024 ACC/AHA guideline for the management of lower extremity peripheral artery disease", u: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001251" },
    { t: "StatPearls: Femoral Artery Endarterectomy", u: "https://www.ncbi.nlm.nih.gov/books/NBK537323/" },
    { t: "SVS clinical practice guidelines", u: "https://www.svs.org/clinical-practice/clinical-practice-guidelines/" }
  ]
},
{
  id: "vasc-ak-fempop",
  name: "Above-Knee Femoropopliteal Bypass",
  sec: "vasc",
  present: [
    "Superficial femoral artery occlusion with a patent above-knee popliteal target and at least one runoff vessel",
    "Lifestyle-limiting claudication that has failed exercise and medical therapy, or chronic limb-threatening ischemia",
    "Long occlusions favor bypass over endovascular therapy, particularly with good conduit and acceptable operative risk",
    "BEST-CLI found open bypass superior to endovascular therapy in patients with an adequate single-segment great saphenous vein"
  ],
  dx: [
    "CTA or angiography defining inflow, the length of the occlusion, the target segment and the tibial runoff",
    "Runoff predicts patency more than the lesion does - a beautiful bypass into a single diseased tibial vessel will not last",
    "Duplex vein mapping of both great saphenous veins: 3 mm or more in diameter, compressible, no prior thrombophlebitis",
    "Confirm the common femoral inflow is adequate; correct it first if it is not"
  ],
  tx: [
    "Vein is the better conduit even above the knee, though prosthetic is acceptable here when vein must be saved for a future distal bypass or coronary surgery",
    "Reversed or in situ vein are both acceptable; the choice is surgeon preference more than evidence",
    "Systemic heparin before clamping",
    "Antiplatelet plus high-intensity statin lifelong; consider adding rivaroxaban 2.5 mg twice daily on VOYAGER PAD",
    "Duplex graft surveillance programme arranged before the patient leaves hospital"
  ],
  tech: [
    "Groin incision for the common femoral inflow, and a medial thigh incision above the knee in the plane anterior to sartorius for the popliteal",
    "Open the popliteal space by retracting sartorius posteriorly and incising the fascia; the artery lies deepest, with the vein and nerve superficial to it",
    "Harvest the great saphenous vein through a continuous or skip incision, ligating branches close to the vein and distending gently with heparinized saline - overdistension damages the endothelium",
    "Tunnel anatomically beneath sartorius, or subcutaneously if a future reoperation is anticipated",
    "Heparinize, clamp, and construct the proximal anastomosis to the common femoral end-to-side with 5-0 or 6-0 polypropylene",
    "Orient the vein correctly for a reversed graft and check for twist in the tunnel before the distal anastomosis - a twisted graft looks perfect and does not work",
    "Distal anastomosis end-to-side to the popliteal, then flush, de-air and release",
    "Completion angiography or duplex before closing, which is the step that finds the technical fault while you can still fix it"
  ],
  after: [
    "Document a palpable graft pulse and pedal Doppler signals at the end of the case and hourly initially",
    "Loss of signal in the first 24 hours is a technical problem and means returning to theatre, not observing",
    "Wound care in the thigh and groin; harvest-site wound problems are common and underappreciated",
    "Leg swelling after vein harvest is expected; elevate and mobilize",
    "Duplex surveillance at 1, 3, 6 and 12 months then annually - a peak systolic velocity above 300 cm/s or a ratio above 3.5 identifies a graft at risk",
    "Revise a failing graft found on surveillance; a thrombosed graft reopened does far worse than a stenosis revised"
  ],
  pearls: [
    "Check the tunnel for twist before you commit to the distal anastomosis - it is the commonest silent technical error and it is invisible once flow is restored",
    "Do not overdistend the vein at harvest; the endothelial injury shows up as a stenosis at 3 months",
    "Completion imaging is not optional - the fault you find on the table is fixable, and the same fault found in clinic is a reoperation",
    "Runoff is the prognosis; be honest with the patient about durability when there is one tibial vessel"
  ],
  refs: [
    { t: "BEST-CLI trial (N Engl J Med 2022)", u: "https://www.nejm.org/doi/full/10.1056/NEJMoa2207899" },
    { t: "2024 ACC/AHA guideline for the management of lower extremity peripheral artery disease", u: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001251" },
    { t: "StatPearls: Femoropopliteal Bypass", u: "https://www.ncbi.nlm.nih.gov/books/NBK560570/" }
  ]
},
{
  id: "vasc-distal-bypass",
  name: "Femorodistal Bypass with Vein",
  sec: "vasc",
  present: [
    "Chronic limb-threatening ischemia with tissue loss or rest pain and disease extending below the knee",
    "Requires a target vessel with continuity to the foot and adequate vein; both are the operation's preconditions",
    "BEST-CLI supported bypass over endovascular therapy where an adequate single-segment great saphenous vein exists",
    "BASIL-2 favored an endovascular-first strategy specifically in patients needing infrapopliteal revascularization - the two trials enrolled different patients"
  ],
  dx: [
    "Angiography with dedicated foot views including lateral projections; the pedal arch is not seen on a standard anteroposterior run",
    "Choose the target as the least diseased vessel with the best continuity to the foot, not the angiosome-appropriate one",
    "Vein mapping of both legs and both arms - spliced arm vein is a legitimate conduit when the saphenous is inadequate",
    "Assess perfusion with toe pressure or transcutaneous oxygen to set expectations for wound healing"
  ],
  tx: [
    "Vein, always, below the knee - prosthetic below-knee patency is poor and this is the situation where conduit determines outcome",
    "Single-segment great saphenous vein is best; spliced vein and arm vein are acceptable, in that order",
    "Treat foot infection and drain pus before or at the same sitting - a septic foot is not improved by inflow alone",
    "Antiplatelet, high-intensity statin, and consideration of rivaroxaban 2.5 mg twice daily on VOYAGER PAD",
    "Plan the wound care and offloading at the same time as the revascularization; the bypass is half the treatment"
  ],
  tech: [
    "Expose the inflow, which may be common femoral, superficial femoral or even popliteal - a shorter graft with good inflow beats a long one from the groin",
    "Expose the target: posterior tibial and peroneal through a medial calf incision, anterior tibial through an anterolateral incision, dorsalis pedis on the dorsum of the foot",
    "Harvest the vein with care, ligating branches close and avoiding overdistension",
    "In situ technique requires valve lysis with a valvulotome and ligation of side branches; reversed technique avoids valve lysis but mismatches diameter",
    "Tunnel anatomically or subcutaneously, checking for twist and for tension with the knee flexed and extended",
    "Construct the distal anastomosis to a fine target with 7-0 polypropylene under magnification, with fine control using vessel loops or a pneumatic tourniquet rather than clamps on a calcified vessel",
    "A tourniquet avoids clamping a heavily calcified tibial artery, which fractures the plaque and destroys the target",
    "Completion angiography of the graft and the distal target before closing"
  ],
  after: [
    "Hourly graft and pedal Doppler checks initially; early loss of signal is a technical failure and returns to theatre",
    "Elevate the limb, but not above the heart if there is any question about inflow",
    "Foot wound care starts immediately - debridement, offloading, dressings, and podiatry involvement",
    "Watch for compartment syndrome after reperfusion of a long-ischemic limb",
    "Duplex surveillance at 1, 3, 6, 12 months then annually; a low graft velocity below 45 cm/s also predicts failure and is easily overlooked",
    "Expect reintervention; the goal is wound healing and limb preservation, not a single durable procedure"
  ],
  pearls: [
    "Conduit decides the operation - single-segment great saphenous vein is the difference between ten years and one",
    "Use a tourniquet rather than clamps on a calcified tibial vessel; clamping fractures the plaque and turns a usable target into an unusable one",
    "Get in-line flow to the foot; do not abandon a good target because it is not the angiosome-appropriate vessel",
    "Revascularization without wound care, offloading and infection control heals nothing - book the podiatry review before the operation"
  ],
  refs: [
    { t: "Global Vascular Guidelines on the management of chronic limb-threatening ischemia", u: "https://www.jvascsurg.org/article/S0741-5214(19)30321-2/fulltext" },
    { t: "BEST-CLI trial (N Engl J Med 2022)", u: "https://www.nejm.org/doi/full/10.1056/NEJMoa2207899" },
    { t: "BASIL-2 trial (Lancet 2023)", u: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(23)00462-2/fulltext" }
  ]
},
{
  id: "vasc-fem-fem",
  name: "Femorofemoral Crossover Bypass",
  sec: "vasc",
  present: [
    "Unilateral iliac occlusion with a healthy contralateral iliac system, in a patient who is a poor candidate for aortobifemoral bypass",
    "As an adjunct to an aorto-uni-iliac endograft, where the contralateral limb is perfused by the crossover",
    "A quick, extraperitoneal, well-tolerated operation in a frail patient with a threatened limb",
    "Not the answer when the donor iliac is itself diseased - stent the donor side first or choose a different operation"
  ],
  dx: [
    "CTA to confirm the donor iliac is genuinely disease-free; a donor-side stenosis will cause steal and graft failure",
    "Measure a donor-side pressure gradient at angiography if the imaging is equivocal",
    "Assess both femoral bifurcations, since the anastomoses land there and a diseased profunda origin needs addressing",
    "Assess outflow on the recipient side - a crossover into an occluded superficial femoral with a poor profunda will not last"
  ],
  tx: [
    "Externally supported ringed 8 mm PTFE or Dacron, because the graft crosses a mobile suprapubic plane",
    "Treat the donor iliac endovascularly at the same sitting if there is any lesion - a hybrid approach is standard here",
    "Systemic heparin before clamping",
    "Antiplatelet and statin lifelong, with duplex surveillance",
    "Can be done under regional or even local anesthesia with sedation in a very high-risk patient"
  ],
  tech: [
    "Bilateral groin incisions exposing both common femoral bifurcations, with control of common, superficial and profunda on each side",
    "Create a subcutaneous suprapubic tunnel in a gentle C or inverted-U configuration, staying above the pubis and deep to Scarpa fascia",
    "Avoid a tight or acutely angled tunnel; kinking at the apex is the commonest cause of early failure",
    "Heparinize, then construct the donor anastomosis end-to-side to the common femoral, angled so flow is directed across rather than at right angles",
    "Complete the recipient anastomosis end-to-side, extending onto the profunda if its origin is stenotic",
    "Flush and de-air both limbs before completing, then confirm Doppler signals in both legs",
    "Ligate lymphatics carefully in both groins"
  ],
  after: [
    "Confirm and document pedal signals bilaterally - the donor leg matters as much as the recipient",
    "Watch both groins for hematoma, seroma and lymph leak; two groin wounds means twice the wound risk",
    "Warn the patient not to sleep with the hips acutely flexed in the first days",
    "Duplex surveillance including the donor iliac, since progression of donor-side disease is the classic late failure",
    "Antiplatelet and statin lifelong",
    "Patency is lower than aortobifemoral bypass - counsel the trade-off of a smaller operation for a shorter-lived one"
  ],
  pearls: [
    "The donor iliac is the whole operation; a crossover from a diseased donor steals from a good leg and fails, and the CT should be scrutinized for exactly that",
    "Keep the tunnel gentle and the apex broad - a kink at the top of the C is the failure you can see on the completion duplex if you look",
    "Externally supported graft, always; this graft crosses a plane that bends every time the patient sits up",
    "It is a legitimate destination operation in a frail patient, not just a compromise - the morbidity of an aortobifemoral in the wrong patient is the alternative"
  ],
  refs: [
    { t: "2024 ACC/AHA guideline for the management of lower extremity peripheral artery disease", u: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001251" },
    { t: "StatPearls: Aortoiliac Occlusive Disease", u: "https://www.ncbi.nlm.nih.gov/books/NBK537323/" },
    { t: "SVS clinical practice guidelines", u: "https://www.svs.org/clinical-practice/clinical-practice-guidelines/" }
  ]
}
];
