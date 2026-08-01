/* Vascular Surgery resident dataset - batch 9 of 12 (entries 41-45).
 * Trauma and compression syndromes.
 * Schema: {id,name,sec,present[],dx[],tx[],pearls[],refs[{t,u}]}  sec="vasc"
 */
const RES_VASC_B9 = [
{
  id: "vasc-extremity-trauma",
  name: "Extremity Vascular Trauma",
  sec: "vasc",
  present: [
    "Hard signs mandate operation: pulsatile bleeding, an expanding hematoma, a palpable thrill or audible bruit, absent distal pulses, and signs of distal ischemia",
    "Soft signs warrant investigation: a history of significant hemorrhage, a diminished pulse, a proximity wound, or a neurologic deficit",
    "Certain fracture and dislocation patterns are vascular injuries until excluded - knee dislocation, supracondylar humerus fracture in a child, posterior knee trauma",
    "A palpable distal pulse does not exclude injury, because collateral flow maintains a pulse distal to an intimal flap or a partial transection"
  ],
  dx: [
    "Injured extremity index - the systolic pressure distal to the injury divided by the uninjured arm pressure - with a value under 0.9 prompting imaging",
    "CTA is the workhorse for soft signs and for planning; formal angiography is reserved for problem cases and for endovascular treatment",
    "Hard signs plus an obvious single level of injury goes straight to the operating room; imaging in that setting is a delay",
    "Reassess after reduction of a dislocation or fracture - the vascular examination changes and the pre-reduction assessment is not the final one"
  ],
  tx: [
    "Direct pressure first, then a tourniquet if pressure fails - tourniquets save lives and the historical fear of them is not supported",
    "Obtain proximal and distal control before entering the hematoma",
    "Shunt first in the mangled or multiply injured limb: a temporary vascular shunt restores perfusion while the orthopedic fixation is done, then definitive repair",
    "Repair with reversed saphenous vein from the uninjured leg; prosthetic is acceptable in a clean wound with no other option",
    "Systemic heparin if there is no contraindication, or regional heparinized saline flushes when there is",
    "Four-compartment fasciotomy liberally, particularly with prolonged ischemia, combined arterial and venous injury, or a crush mechanism",
    "Repair the accompanying vein where feasible in a stable patient - it improves arterial patency and reduces edema"
  ],
  pearls: [
    "Order of operations in the mangled limb is shunt, skeleton, then definitive vascular repair - fixing the artery first and then having the orthopedic team distract the limb destroys the repair",
    "MESS and the other mangled extremity scores predict poorly at the individual patient level and should not be the sole basis for amputation",
    "Harvest vein from the uninjured leg - taking it from the injured limb removes collateral venous drainage from a limb that needs it",
    "The compartment syndrome that develops on the ward after a good repair is the commonest way to lose a limb that was successfully revascularized"
  ],
  refs: [
    { t: "Western Trauma Association critical decisions: evaluation and management of peripheral vascular injury", u: "https://pubmed.ncbi.nlm.nih.gov/23188248/" },
    { t: "StatPearls: Vascular Trauma", u: "https://www.ncbi.nlm.nih.gov/books/NBK559304/" },
    { t: "SVS clinical practice guidelines", u: "https://www.svs.org/clinical-practice/clinical-practice-guidelines/" }
  ]
},
{
  id: "vasc-btai",
  name: "Blunt Thoracic Aortic Injury",
  sec: "vasc",
  present: [
    "High-energy deceleration - motor vehicle collision at speed, fall from height - with the injury at the aortic isthmus just distal to the left subclavian in most cases",
    "Most patients die at the scene; those who reach hospital have a contained injury",
    "Clinical findings are unreliable, so mechanism drives the imaging decision rather than examination",
    "Chest radiograph findings of a widened mediastinum, an indistinct aortic knob, left apical cap or depressed left mainstem bronchus are suggestive and insensitive"
  ],
  dx: [
    "CTA of the chest is the diagnostic standard and should be obtained on mechanism in the appropriate patient",
    "SVS grading: grade I intimal tear, grade II intramural hematoma, grade III pseudoaneurysm, grade IV rupture",
    "Transesophageal echocardiography is an alternative in the patient too unstable for the scanner",
    "Look for the associated injuries that determine the sequence of care - head, abdomen, pelvis and long bones"
  ],
  tx: [
    "Impulse control immediately in every grade: beta blockade to a heart rate under 80-100 and a systolic pressure of 100-120, which is the single most important initial intervention",
    "Grade I injuries are managed nonoperatively with impulse control and repeat imaging - most heal",
    "Grade II is individualized; grade III and IV are repaired",
    "TEVAR is the standard of care and has replaced open repair, with substantially lower mortality and paraplegia rates",
    "Delayed repair, after other life-threatening injuries are addressed, gives better outcomes than immediate repair in the stable patient with impulse control",
    "Left subclavian coverage is often necessary and is usually tolerated without revascularization in the trauma setting, with revascularization if symptoms develop"
  ],
  pearls: [
    "Beta blockade is the treatment that starts in the trauma bay and it matters more than how quickly the patient gets to the operating room",
    "The traumatic aorta is small and non-aneurysmal, so device oversizing is a real hazard - excessive oversizing causes collapse and infolding",
    "A head injury changes everything, because the blood pressure targets for the brain and for the aorta are opposite, and the aorta usually yields",
    "A grade I injury is not an operation; treating it with a stent graft commits a young trauma patient to a lifelong implant for a lesion that would have healed"
  ],
  refs: [
    { t: "SVS clinical practice guidelines on the management of blunt thoracic aortic injury", u: "https://www.jvascsurg.org/article/S0741-5214(10)02364-3/fulltext" },
    { t: "2022 ACC/AHA guideline for the diagnosis and management of aortic disease", u: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001106" },
    { t: "StatPearls: Blunt Aortic Injury", u: "https://www.ncbi.nlm.nih.gov/books/NBK441907/" }
  ]
},
{
  id: "vasc-neck-junctional-trauma",
  name: "Neck and Junctional Vascular Trauma",
  sec: "vasc",
  present: [
    "Zone I is below the cricoid and is the hardest to control, zone II is between cricoid and angle of mandible, zone III is above the angle of the mandible",
    "Hard signs of vascular injury in the neck: expanding or pulsatile hematoma, active hemorrhage, bruit or thrill, and shock unresponsive to resuscitation",
    "Junctional zones - neck, axilla, groin - are where a tourniquet cannot be applied, which is what makes them lethal",
    "Blunt cerebrovascular injury presents late with stroke in a patient whose initial examination was normal"
  ],
  dx: [
    "Hard signs with hemodynamic instability go directly to the operating room; the no-zone approach has largely replaced mandatory zone-based exploration",
    "CTA is the initial study for the stable patient with any sign of injury, in any zone",
    "Expanded Denver criteria screen for blunt cerebrovascular injury - cervical spine fracture, basilar skull fracture involving the carotid canal, Le Fort II or III, near-hanging, and severe traumatic brain injury",
    "Biffl grading I through V classifies blunt cerebrovascular injury and guides treatment"
  ],
  tx: [
    "Secure the airway early in a neck hematoma - the airway will be lost, and it will be lost at the worst possible moment",
    "Zone II injuries are approached through a sternocleidomastoid incision; zone I may need a sternotomy or clavicular resection for proximal control",
    "Zone III injuries are frequently better managed endovascularly, because surgical exposure at the skull base is very difficult",
    "Blunt cerebrovascular injury grades I and II are treated with antithrombotic therapy, either antiplatelet or anticoagulation, which reduces stroke substantially",
    "Repair the carotid artery in the patient with a neurologic deficit rather than ligating - the old teaching to ligate in the presence of deficit has been superseded",
    "Junctional hemorrhage control uses direct pressure, wound packing with a hemostatic dressing, and a junctional tourniquet where available"
  ],
  pearls: [
    "The airway is the first vascular decision in neck trauma - intubate early and awake if possible, because a hematoma distorts the anatomy fast",
    "Blunt cerebrovascular injury is a screening diagnosis; if you wait for symptoms, the stroke has already happened",
    "Do not probe or explore a neck wound in the emergency department - it dislodges the clot that is keeping the patient alive",
    "Zone III bleeding is usually an endovascular problem, and recognizing that early avoids a very difficult and often unsuccessful open exposure"
  ],
  refs: [
    { t: "Western Trauma Association critical decisions: penetrating neck trauma", u: "https://pubmed.ncbi.nlm.nih.gov/23823609/" },
    { t: "EAST practice management guideline: blunt cerebrovascular injury", u: "https://www.east.org/education-career-development/practice-management-guidelines/details/blunt-cerebrovascular-injury-evaluation-and-management-of" },
    { t: "StatPearls: Penetrating Neck Trauma", u: "https://www.ncbi.nlm.nih.gov/books/NBK493160/" }
  ]
},
{
  id: "vasc-reboa",
  name: "Resuscitative Endovascular Balloon Occlusion of the Aorta",
  sec: "vasc",
  present: [
    "Considered in noncompressible torso hemorrhage with hemodynamic instability, as a bridge to definitive hemorrhage control",
    "Zone I is the descending thoracic aorta from the left subclavian to the celiac axis, for abdominal hemorrhage",
    "Zone III is the infrarenal aorta from the lowest renal artery to the bifurcation, for pelvic and junctional hemorrhage",
    "Zone II, the visceral segment, is not an occlusion zone",
    "Contraindicated in thoracic hemorrhage and in blunt thoracic aortic injury"
  ],
  dx: [
    "The decision is clinical and made in the trauma bay - a patient in profound shock from a source below the diaphragm",
    "FAST and pelvic radiograph localize the bleeding to a zone",
    "Common femoral artery access is obtained by ultrasound guidance or cutdown; blind puncture in a hypotensive patient causes access complications",
    "Balloon position is confirmed by external landmarks and, where available, by radiograph"
  ],
  tx: [
    "Partial or intermittent occlusion is preferred over complete occlusion where the physiology allows, to limit distal ischemia",
    "Occlusion time is the enemy: zone I should be kept under about 30 minutes and zone III tolerates longer, but every minute counts",
    "Move to definitive hemorrhage control immediately - REBOA buys minutes, it does not treat anything",
    "Anticipate and manage the reperfusion insult on deflation, with hyperkalemia, acidosis and a profound drop in pressure - deflate gradually and in communication with anesthesia",
    "Upsize or downsize the sheath appropriately and repair the access site, since access complications including limb loss are a documented harm"
  ],
  pearls: [
    "The evidence is genuinely contested - the UK-REBOA randomized trial found no mortality benefit and a signal toward harm, so this is not an established standard of care",
    "REBOA is a clock, not a treatment; if there is no plan for definitive control within minutes, it should not be inflated",
    "Access complications are the most common harm and are largely preventable by using ultrasound and a smaller sheath",
    "It has no role in thoracic bleeding, and inflating a balloon above a transected thoracic aorta is directly harmful"
  ],
  refs: [
    { t: "UK-REBOA randomized clinical trial (JAMA 2023)", u: "https://jamanetwork.com/journals/jama/fullarticle/2810611" },
    { t: "StatPearls: REBOA", u: "https://www.ncbi.nlm.nih.gov/books/NBK526038/" },
    { t: "Western Trauma Association critical decisions: endovascular management of noncompressible torso hemorrhage", u: "https://pubmed.ncbi.nlm.nih.gov/29194322/" }
  ]
},
{
  id: "vasc-tos",
  name: "Thoracic Outlet Syndrome",
  sec: "vasc",
  present: [
    "Neurogenic accounts for over 90%: arm pain, paresthesia in an ulnar distribution, weakness and symptoms worse with overhead activity",
    "Venous (Paget-Schroetter) presents with sudden arm swelling and cyanosis from subclavian vein thrombosis",
    "Arterial is the rarest and most dangerous, with distal embolization, a cool hand and digital ischemia, usually from a subclavian aneurysm behind a cervical rib",
    "Provocative tests - Adson, Roos elevated arm stress test, and the upper limb tension test - support the diagnosis but are not specific"
  ],
  dx: [
    "Chest radiograph and cervical spine films look for a cervical rib, an elongated C7 transverse process, or a healed clavicle fracture with callus",
    "Neurogenic TOS is a clinical diagnosis of exclusion - electrodiagnostic studies mainly serve to exclude cervical radiculopathy and ulnar or median neuropathy",
    "A scalene muscle block that relieves the symptoms predicts a good response to decompression",
    "Duplex and positional CT or MR angiography for the vascular forms, with the arm in neutral and abducted positions",
    "SVS reporting standards define the diagnostic criteria for each of the three types"
  ],
  tx: [
    "Neurogenic TOS: a dedicated physical therapy program is first-line, focused on posture, scapular stabilization and stretching, for at least 4-8 weeks",
    "Surgical decompression - first rib resection with anterior and middle scalenectomy, by a supraclavicular or transaxillary approach - for those who fail therapy",
    "Venous TOS: thrombolysis, then first rib resection and venolysis, with venoplasty afterward for a residual lesion",
    "Arterial TOS: rib resection plus arterial reconstruction, since the damaged subclavian artery or aneurysm is the embolic source and has to be replaced",
    "Botulinum toxin injection to the scalene is used by some as a diagnostic and temporizing measure, with limited durable benefit"
  ],
  pearls: [
    "Neurogenic TOS is overdiagnosed and overoperated in some hands and dismissed entirely in others; a scalene block and a real trial of therapy separate the two errors",
    "Arterial TOS almost always has a bony abnormality behind it - find the cervical rib before you plan anything",
    "Do not stent the subclavian vein before the first rib is out, in any of the three forms",
    "Brachial plexus injury and phrenic nerve palsy are the operative risks that need naming in consent, and outcomes are best in surgeons who do this often"
  ],
  refs: [
    { t: "SVS reporting standards for thoracic outlet syndrome", u: "https://www.jvascsurg.org/article/S0741-5214(16)30138-3/fulltext" },
    { t: "StatPearls: Thoracic Outlet Syndrome", u: "https://www.ncbi.nlm.nih.gov/books/NBK557450/" },
    { t: "StatPearls: Paget-Schroetter Syndrome", u: "https://www.ncbi.nlm.nih.gov/books/NBK482416/" }
  ]
}
];
