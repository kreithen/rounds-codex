/* Vascular Surgery PROCEDURES - batch 10 of 10 (procedures 46-50).
 * Access revision, trauma, fasciotomy and amputation.
 * Extended schema: {id,name,sec,present[],dx[],tx[],tech[],after[],pearls[],refs[{t,u}]}  sec="vasc"
 */
const RES_VASC_B10 = [
{
  id: "vasc-access-revision",
  name: "Access Revision for Steal and Thrombosis",
  sec: "vasc",
  present: [
    "Steal syndrome with hand pain, coldness, numbness or weakness worse during dialysis, graded I through IV",
    "Access thrombosis with loss of thrill and bruit, almost always on an underlying stenosis",
    "Aneurysmal degeneration with thin, shiny or ulcerated overlying skin, which is an impending rupture",
    "Ischemic monomelic neuropathy is the emergency in this group - immediate, painful, motor-predominant, with a warm well-perfused hand - and it needs ligation within hours"
  ],
  dx: [
    "For steal: digital pressures and digital-brachial index measured with and without manual compression of the access; a rise on compression confirms the access is the cause",
    "Duplex for access flow - above 800 mL/min in a brachial access supports a high-flow mechanism",
    "Arteriography of the whole limb to identify inflow stenosis and distal occlusive disease, both treatable contributors",
    "For thrombosis: fistulography, usually as the first step of the declotting procedure",
    "Any shiny, thin or scabbed skin over an aneurysm is assessed urgently, not in the next available clinic"
  ],
  tx: [
    "Correct any inflow arterial stenosis first for steal - the simplest fix and it preserves the access",
    "DRIL, distal revascularization with interval ligation, treats steal while preserving the access and is the most durable option",
    "RUDI and MILLER banding reduce flow in the high-flow fistula; banding a low-flow steal thromboses the access without helping the hand",
    "For thrombosis, thrombectomy plus treatment of the underlying stenosis - declotting without fixing the lesion buys days",
    "Ligation is the last resort for steal and is immediate and definitive in a threatened hand with tissue loss",
    "The hand is worth more than the access"
  ],
  tech: [
    "DRIL: expose the brachial artery above and below the fistula origin. Ligate the artery immediately DISTAL to the anastomosis, which is the step that stops retrograde steal",
    "Then bypass from the artery well proximal to the anastomosis, at least 5-8 cm above it, to the artery distal to the ligation, using reversed saphenous vein",
    "The proximal anastomosis must be far enough above the fistula that it draws from an undisturbed pressure zone - too close and the bypass steals too",
    "MILLER banding: expose the juxta-anastomotic outflow, pass a band or place a suture over a calibrated balloon inflated to 4-5 mm, and tie down to that diameter",
    "For thrombectomy: expose the graft or fistula, make a transverse incision, and pass a Fogarty proximally and distally, then remove the platelet-rich arterial plug at the anastomosis",
    "Always complete a thrombectomy with fistulography and treat the venous outflow stenosis, by angioplasty or by patch revision",
    "For aneurysm with threatened skin, resect the aneurysmal segment and restore continuity with an interposition or a bypass around it, preserving a cannulation zone"
  ],
  after: [
    "For steal, document digital pressures and hand symptoms after the revision - the outcome measure is the hand, not the thrill",
    "For DRIL, monitor both the bypass and the access with duplex; you now have two things that can fail",
    "After thrombectomy, the access can usually be used at the next session - confirm with the dialysis unit",
    "Watch for recurrent thrombosis, which means the underlying lesion was not adequately treated",
    "Reinforce cannulation site rotation, which is what prevents the aneurysms recurring",
    "Ongoing access surveillance with flow monitoring and physical examination at each dialysis session"
  ],
  pearls: [
    "Ischemic monomelic neuropathy is the one that must not be missed - it needs ligation within hours, and a delay leaves a permanently useless hand",
    "In DRIL, the ligation distal to the anastomosis is the part that treats the steal, and the bypass is what keeps the hand perfused; leaving out the ligation achieves nothing",
    "Every thrombosed access has a lesion behind it. Declot and stop, and you will be back within the month",
    "A patient who bleeds from their access at home and stops it with pressure has had their warning; admit and repair, do not reassure"
  ],
  refs: [
    { t: "KDOQI clinical practice guideline for vascular access: 2019 update", u: "https://www.ajkd.org/article/S0272-6386(19)31137-0/fulltext" },
    { t: "StatPearls: Dialysis Access Steal Syndrome", u: "https://www.ncbi.nlm.nih.gov/books/NBK560838/" },
    { t: "StatPearls: Hemodialysis Access Complications", u: "https://www.ncbi.nlm.nih.gov/books/NBK564383/" }
  ]
},
{
  id: "vasc-shunt-repair",
  name: "Temporary Vascular Shunting and Extremity Arterial Repair",
  sec: "vasc",
  present: [
    "Hard signs of extremity vascular injury: pulsatile bleeding, expanding hematoma, thrill or bruit, absent pulses, distal ischemia",
    "The mangled extremity with combined skeletal and vascular injury, where the order of repair matters more than any single step",
    "Damage control in the unstable multiply-injured patient, where a shunt buys time for physiologic correction",
    "Certain patterns are vascular injuries until excluded: knee dislocation, supracondylar humerus fracture in a child, posterior knee trauma"
  ],
  dx: [
    "Injured extremity index below 0.9 prompts imaging; hard signs plus an obvious single level of injury goes straight to theatre",
    "CTA for soft signs and for planning, and formal angiography for problem cases",
    "Reassess after fracture or dislocation reduction - the examination changes and the pre-reduction assessment is not the final one",
    "A palpable distal pulse does not exclude injury, because collateral flow maintains a pulse distal to an intimal flap"
  ],
  tx: [
    "Direct pressure first, then a tourniquet if pressure fails - tourniquets save lives and the historical fear of them is not supported",
    "Systemic heparin if there is no contraindication, or regional heparinized saline flushes when there is",
    "Reversed saphenous vein from the UNINJURED leg; prosthetic only in a clean wound with no alternative",
    "Repair the accompanying vein where feasible in a stable patient - it improves arterial patency and reduces edema",
    "Liberal four-compartment fasciotomy, particularly with prolonged ischemia, combined arterial and venous injury, or a crush mechanism",
    "MESS and similar scores predict poorly at the individual level and should not be the sole basis for amputation"
  ],
  tech: [
    "Prep the uninjured leg into the field for vein harvest before you start",
    "Obtain proximal and distal control OUTSIDE the hematoma before entering it",
    "Debride the injured artery back to healthy intima; a repair onto contused artery thromboses",
    "For damage control, insert a temporary shunt - an Argyle or Javid shunt, or sterile intravenous tubing - secured proximally and distally with ties or vessel loops, and mark it clearly",
    "The order in a mangled limb is SHUNT, then skeletal fixation, then definitive vascular repair - fixing the artery first and then letting the orthopedic team distract the limb destroys the repair",
    "For definitive repair, primary end-to-end anastomosis only if it is tension-free after debridement; otherwise interposition with reversed vein",
    "Spatulate the anastomoses and use interrupted sutures in a child or a small vessel to allow growth and reduce narrowing",
    "Cover the repair with viable soft tissue; an exposed anastomosis will blow out",
    "Completion angiography before leaving the table"
  ],
  after: [
    "Hourly distal pulse and Doppler checks; loss of signal is a technical failure and returns to theatre",
    "Monitor compartments obsessively - the compartment syndrome that develops on the ward after a good repair is the commonest way to lose a revascularized limb",
    "Treat rhabdomyolysis with aggressive fluids and monitor potassium and creatine kinase",
    "Tetanus prophylaxis and antibiotics for contaminated wounds",
    "Plan soft tissue coverage early with plastic surgery when the repair is superficial or the wound is large",
    "Duplex before discharge and at follow-up; a vein interposition in a young patient deserves surveillance"
  ],
  pearls: [
    "Shunt, skeleton, then repair. Getting the order wrong wastes the repair, and it is the single most examinable point in extremity vascular trauma",
    "Harvest vein from the uninjured leg - taking it from the injured limb removes collateral venous drainage the limb needs",
    "A shunt is not a defeat; it converts a two-hour vascular repair in an unstable patient into a two-minute one, and the patient can be warmed and resuscitated before the definitive operation",
    "Debride back to healthy artery. Anastomosing to contused intima is why an anatomically perfect repair thromboses overnight"
  ],
  refs: [
    { t: "Western Trauma Association critical decisions: evaluation and management of peripheral vascular injury", u: "https://pubmed.ncbi.nlm.nih.gov/23188248/" },
    { t: "StatPearls: Vascular Trauma", u: "https://www.ncbi.nlm.nih.gov/books/NBK559304/" },
    { t: "SVS clinical practice guidelines", u: "https://www.svs.org/clinical-practice/clinical-practice-guidelines/" }
  ]
},
{
  id: "vasc-fasciotomy",
  name: "Four-Compartment Lower Leg Fasciotomy",
  sec: "vasc",
  present: [
    "Pain out of proportion and pain on passive stretch are the earliest and most reliable findings",
    "The five Ps are late and unreliable - by the time the limb is pulseless the muscle is dead, and pulselessness is not a diagnostic criterion",
    "Prophylactic fasciotomy at revascularization after prolonged ischemia, combined arterial and venous injury, or a crush mechanism",
    "Paresthesia in the first web space from deep peroneal compression is an early neurologic sign"
  ],
  dx: [
    "Clinical diagnosis in the awake patient; serial examination by the same examiner beats any single measurement",
    "Compartment pressure measurement in the obtunded, intubated or regionally anesthetized patient who cannot report pain",
    "Delta pressure - diastolic minus compartment pressure - below 30 mmHg is the threshold, and it accounts for perfusion in a way an absolute number does not",
    "Creatine kinase and myoglobinuria indicate established necrosis"
  ],
  tx: [
    "Release constricting casts and dressings and place the limb at the level of the heart - NOT elevated, which lowers perfusion pressure",
    "Aggressive fluid resuscitation for rhabdomyolysis with monitoring for hyperkalemia and acute kidney injury",
    "Do not delay for imaging or for a pressure measurement in an awake patient with a convincing examination",
    "Plan the definitive closure strategy from the outset: shoelace technique, delayed primary closure, or skin grafting",
    "Debride frankly necrotic muscle at the time of release and plan a relook"
  ],
  tech: [
    "Two-incision technique is the standard and reliably decompresses all four compartments",
    "LATERAL incision: 2 cm anterior to the fibula, full length from just below the fibular head to just above the ankle",
    "Identify the intermuscular septum between the anterior and lateral compartments, then open each with a transverse nick and extend proximally and distally with scissors",
    "Protect the superficial peroneal nerve, which pierces the fascia in the distal third of the lateral compartment and is the nerve injured in this incision",
    "MEDIAL incision: 2 cm posterior to the posteromedial tibial border, again full length, protecting the saphenous vein and nerve which run just posterior to the tibia",
    "Open the superficial posterior compartment, then detach soleus from the tibia to reach and open the DEEP posterior compartment - this is the compartment most often left undecompressed",
    "Confirm all four compartments are open by direct inspection of muscle bulging in each",
    "Skin incisions must be full length; a short skin incision over completely released fascia leaves the skin as a constricting envelope"
  ],
  after: [
    "Serial examination of muscle viability and repeat debridement at 48 hours",
    "Vessel-loop shoelace technique tightened every 48 hours allows delayed primary closure in many patients and avoids a graft",
    "Negative pressure dressing between looks",
    "Continue fluid resuscitation and monitor renal function and potassium",
    "Split-thickness skin grafting for defects that cannot be closed by 7-10 days",
    "Physiotherapy early; foot drop from an untreated or late-released anterior compartment needs an ankle-foot orthosis and long-term follow-up"
  ],
  pearls: [
    "The deep posterior compartment is the one that gets missed, and reaching it means taking soleus off the tibia - if you did not detach soleus, you probably did not decompress it",
    "Do not elevate the limb above the heart; it lowers arterial inflow without meaningfully improving venous outflow",
    "An incomplete fasciotomy is worse than none - it produces a scar, a false sense of security, and a still-necrotic compartment",
    "Prophylactic fasciotomy is a decision made in theatre at revascularization; the surgeon who defers it is usually the one who comes back at 3 am"
  ],
  refs: [
    { t: "StatPearls: Acute Compartment Syndrome", u: "https://www.ncbi.nlm.nih.gov/books/NBK448124/" },
    { t: "StatPearls: Fasciotomy", u: "https://www.ncbi.nlm.nih.gov/books/NBK553110/" },
    { t: "Western Trauma Association critical decisions: evaluation and management of peripheral vascular injury", u: "https://pubmed.ncbi.nlm.nih.gov/23188248/" }
  ]
},
{
  id: "vasc-major-amputation-proc",
  name: "Below-Knee and Above-Knee Amputation",
  sec: "vasc",
  present: [
    "Unreconstructable ischemia with rest pain or tissue loss, uncontrolled infection, or a nonfunctional limb",
    "Below-knee preserves the knee joint, which is the single biggest determinant of whether the patient walks again",
    "Above-knee heals more reliably but ambulation rates are far lower, particularly in the elderly",
    "Guillotine amputation is the damage-control operation for a septic foot, converted to a definitive level once sepsis is controlled"
  ],
  dx: [
    "Level selection balances healing potential against functional outcome",
    "Transcutaneous oxygen above 30-40 mmHg at the proposed level predicts healing; skin perfusion pressure is an alternative",
    "Assess the knee - a fixed flexion contracture over about 20 degrees makes a below-knee prosthesis impractical",
    "Prior ambulatory status, cognition, cardiac reserve and social support predict prosthetic use better than any perfusion measurement",
    "Optimize nutrition and glycemic control where time allows; albumin correlates with stump healing"
  ],
  tx: [
    "Perioperative regional anesthesia and a multimodal plan including gabapentinoids, which reduces phantom limb pain",
    "Antibiotics targeted to the infecting organisms in an infected limb",
    "Rigid or removable rigid dressing after below-knee amputation to protect the stump, control edema and prevent knee flexion contracture",
    "Early prosthetic referral and physiotherapy, with knee extension positioning from day one",
    "Treat the contralateral limb aggressively - the other leg is at high risk and the second amputation is often what ends independent living"
  ],
  tech: [
    "BELOW KNEE: mark a long posterior myocutaneous flap (Burgess). Anterior incision at the chosen level, posterior flap length roughly one third of the leg circumference plus 1 cm",
    "Divide the tibia 10-12 cm below the tibial tuberosity and bevel the anterior tibial cortex at 45 degrees, then rasp it smooth - an unbevelled tibia erodes through the skin",
    "Divide the fibula 1-2 cm SHORTER than the tibia",
    "Identify and gently pull down the tibial and peroneal nerves, divide them sharply and let them retract into soft tissue, so the neuroma sits away from the weight-bearing surface",
    "Ligate the anterior and posterior tibial and peroneal vessels individually with suture, not ties alone",
    "Thin the gastrocnemius-soleus flap, bring it anteriorly, and secure the deep fascia to the anterior tibial periosteum so the muscle does not slide",
    "ABOVE KNEE: equal anterior and posterior fish-mouth flaps, femur divided about 12 cm above the knee joint, with myodesis of adductor magnus to the femur to prevent an abducted stump",
    "Close over a drain without tension - tension is why stumps break down, and a stump closed under tension will be revised"
  ],
  after: [
    "Rigid dressing and knee extension positioning; a knee flexion contracture develops within days and ends the prosthetic plan",
    "Pain management with a multimodal regimen, anticipating both stump and phantom pain",
    "Early mobilization and transfer training, with the physiotherapist involved from day one",
    "Stump wound surveillance; breakdown in a dysvascular stump means revision to a higher level in a proportion",
    "Prosthetic fitting once the stump has matured, typically 6-8 weeks with shrinker sock compression in between",
    "Counsel honestly: one-year mortality after major amputation in this population approaches 40%, and that should shape the conversation"
  ],
  pearls: [
    "Bevel the tibia and rasp it. An unbevelled anterior tibial cortex is a sharp edge under a weight-bearing flap and it will erode through",
    "Never fashion a definitive stump in the presence of active sepsis - guillotine first and come back",
    "Save the knee where there is a reasonable chance of healing; a revised below-knee often beats a primary above-knee in an ambulatory patient",
    "Traction neurectomy - pull the nerve down, cut it sharply, let it retract - keeps the neuroma away from the prosthetic interface, and it costs thirty seconds"
  ],
  refs: [
    { t: "Global Vascular Guidelines on the management of chronic limb-threatening ischemia", u: "https://www.jvascsurg.org/article/S0741-5214(19)30321-2/fulltext" },
    { t: "StatPearls: Below Knee Amputation", u: "https://www.ncbi.nlm.nih.gov/books/NBK534773/" },
    { t: "StatPearls: Above Knee Amputation", u: "https://www.ncbi.nlm.nih.gov/books/NBK560510/" }
  ]
},
{
  id: "vasc-minor-amputation-proc",
  name: "Transmetatarsal and Ray Amputation",
  sec: "vasc",
  present: [
    "Localized gangrene or osteomyelitis in a foot with adequate perfusion and a salvageable weight-bearing surface",
    "Ray amputation for a toe with osteomyelitis extending into the metatarsal head; the fifth ray tolerates resection best",
    "Transmetatarsal amputation when multiple rays are involved, preserving a functional foot that fits a shoe with a filler",
    "The great toe and first ray matter disproportionately for gait, and losing them redistributes pressure across the whole foot"
  ],
  dx: [
    "Confirm perfusion first - a minor amputation in an ischemic foot converts a small wound into a large one that will not heal",
    "MRI or bone biopsy to define the proximal extent of osteomyelitis, so the bone cut is through uninfected bone",
    "Probe-to-bone at the bedside strongly predicts osteomyelitis in an infected ulcer",
    "Assess the tendon balance and the ankle range - an equinus contracture will destroy a transmetatarsal amputation"
  ],
  tx: [
    "Revascularize first where perfusion is inadequate, or at the same sitting after drainage of infection",
    "Deep tissue and bone culture rather than a superficial swab, then targeted antibiotics",
    "Achilles tendon lengthening or gastrocnemius recession at the same operation as a transmetatarsal amputation prevents equinus and re-ulceration",
    "Leave the wound open with staged closure or healing by secondary intention when infection is present",
    "Negative pressure wound therapy for the open foot wound, with skin grafting once granulated"
  ],
  tech: [
    "RAY: racquet incision around the base of the toe extending proximally over the metatarsal. Follow the metatarsal proximally and divide it through healthy bone, bevelling the cut end",
    "Send the proximal bone margin separately for culture and histology - it tells you whether the resection cleared the osteomyelitis",
    "Close only if the tissue is clean, well perfused and closes without tension; otherwise pack open",
    "TRANSMETATARSAL: a long plantar flap and a short dorsal flap, with the dorsal incision just proximal to the metatarsal heads",
    "Divide all five metatarsals in a gentle curve following the natural parabola, cutting the first slightly longer and bevelling each plantar edge so no sharp bone sits under the flap",
    "Preserve the thick plantar skin and its fat pad - it is the weight-bearing surface and there is no substitute for it",
    "Perform the Achilles lengthening through three percutaneous hemisections or a gastrocnemius recession before closing",
    "Close the plantar flap to the dorsal skin without tension over a drain, or leave open if infected"
  ],
  after: [
    "Strict non-weight-bearing until healed, then a total contact cast or removable device as the wound allows",
    "Custom footwear with a toe filler and a rocker sole for a transmetatarsal amputation - the footwear is part of the operation",
    "Watch for equinus developing over the following months; a heel that lifts early in stance is the warning",
    "Podiatry follow-up indefinitely; recurrence after healing exceeds 40% at one year",
    "Glycemic control and structured foot care to prevent the next ulcer",
    "Reassess perfusion if healing stalls rather than persisting with dressings"
  ],
  pearls: [
    "The tendon balance is what fails a transmetatarsal amputation - a technically good amputation that develops equinus ulcerates within months, so lengthen the Achilles at the index operation",
    "Do not close a foot primarily over infected bone; it breaks down and the next operation is higher",
    "Send the proximal bone margin for culture; it is the only way to know whether you cleared the osteomyelitis",
    "Every minor amputation changes the biomechanics of the foot, so the offloading and footwear plan is part of the operation and not an afterthought"
  ],
  refs: [
    { t: "IWGDF guidelines on the prevention and management of diabetes-related foot disease", u: "https://iwgdfguidelines.org/" },
    { t: "StatPearls: Transmetatarsal Amputation", u: "https://www.ncbi.nlm.nih.gov/books/NBK563248/" },
    { t: "StatPearls: Toe Amputation", u: "https://www.ncbi.nlm.nih.gov/books/NBK546601/" }
  ]
}
];
