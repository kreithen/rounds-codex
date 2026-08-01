/* Vascular Surgery resident dataset - batch 10 of 12 (entries 46-50).
 * Limb salvage, wound and amputation; lymphedema.
 * Schema: {id,name,sec,present[],dx[],tx[],pearls[],refs[{t,u}]}  sec="vasc"
 */
const RES_VASC_B10 = [
{
  id: "vasc-diabetic-foot",
  name: "Diabetic Foot Ulcer and Foot Infection",
  sec: "vasc",
  present: [
    "Three mechanisms combine: peripheral neuropathy removing protective sensation, deformity concentrating pressure, and ischemia preventing healing",
    "The neuropathic ulcer sits under a bony prominence with surrounding callus and is painless, which is why it presents late",
    "Charcot neuroarthropathy presents as a hot, swollen, erythematous foot that mimics infection and is frequently misdiagnosed as cellulitis",
    "Systemic signs are blunted - a patient can have a deep space abscess with a normal white count and no fever"
  ],
  dx: [
    "Probe-to-bone test: a sterile probe reaching bone in an infected ulcer strongly predicts osteomyelitis and is a bedside test",
    "MRI is the imaging standard for osteomyelitis; plain radiographs lag by 2-3 weeks and a normal film early means nothing",
    "IWGDF/IDSA classification grades infection severity and drives the decision about admission and urgency of surgery",
    "Assess perfusion in every ulcer: ABI, toe pressure and waveforms, since perfusion determines whether anything will heal",
    "Deep tissue or bone culture rather than a superficial swab, which grows colonizers and misdirects therapy"
  ],
  tx: [
    "Urgent surgical drainage and debridement for a deep space infection or wet gangrene - this is a source control problem before it is a vascular one",
    "Empiric antibiotics covering staphylococci and streptococci, broadened for severe infection or prior resistant organisms, then narrowed on deep culture",
    "Offloading is the intervention most often neglected and most predictive of healing: total contact casting is the standard and removable devices work less well because they are removed",
    "Revascularize when perfusion is inadequate, after or alongside drainage of infection",
    "Regular sharp debridement of callus and nonviable tissue, plus glycemic control and structured foot care to prevent recurrence"
  ],
  pearls: [
    "Charcot versus infection is the classic trap - elevate the foot for 10 minutes, and the erythema of Charcot fades while the erythema of infection does not",
    "Offloading fails because the patient walks on it; the cast that cannot be taken off is the one that works",
    "Antibiotics do not heal an ulcer, and prescribing them for a clean noninfected ulcer selects resistance without benefit",
    "Recurrence after healing exceeds 40% at one year, so the plan does not end when the wound closes - it ends with footwear and surveillance"
  ],
  refs: [
    { t: "IWGDF guidelines on the prevention and management of diabetes-related foot disease", u: "https://iwgdfguidelines.org/" },
    { t: "IDSA clinical practice guideline for the diagnosis and treatment of diabetic foot infections", u: "https://www.idsociety.org/practice-guideline/diabetic-foot-infections/" },
    { t: "StatPearls: Diabetic Foot Ulcer", u: "https://www.ncbi.nlm.nih.gov/books/NBK537328/" }
  ]
},
{
  id: "vasc-wifi-limb-salvage",
  name: "WIfI Staging and the Limb Salvage Decision",
  sec: "vasc",
  present: [
    "WIfI grades three variables independently: Wound extent, Ischemia, and foot Infection, each 0 to 3",
    "The composite gives a clinical stage 1 to 4, estimating both the 1-year amputation risk and the likely benefit from revascularization",
    "Designed because ischemia alone is a poor predictor - a small wound with severe ischemia and a large wound with mild ischemia behave differently",
    "Applied at the first assessment and repeated after debridement and after revascularization, because the stage changes"
  ],
  dx: [
    "Wound grade from the depth and extent of tissue loss and gangrene",
    "Ischemia grade from ankle pressure, ankle-brachial index and toe pressure, with toe pressure preferred in calcified vessels",
    "Infection grade from the IDSA/IWGDF criteria, from none through systemic inflammatory response",
    "GLASS staging complements WIfI by grading the anatomic disease burden - WIfI describes the limb, GLASS describes the arteries"
  ],
  tx: [
    "Stage 1 has a very low amputation risk and often needs wound care alone",
    "Stages 2 and 3 benefit most clearly from revascularization",
    "Stage 4 has a high amputation risk, and revascularization is still usually attempted in an ambulatory patient with a reasonable target",
    "Control infection first in any stage - a foot infection grade 3 is treated before the revascularization is planned",
    "Primary amputation is a legitimate and sometimes kind decision in the nonambulatory patient with a contracted limb, extensive tissue loss, or no target vessel"
  ],
  pearls: [
    "Stage the limb after debridement, not before - the wound grade before drainage is not the wound you are treating",
    "WIfI is a communication tool as much as a prognostic one; it lets the podiatrist, the vascular surgeon and the medical team describe the same foot the same way",
    "A high stage is not a reason to give up, it is a reason to move faster and to be honest with the patient about the odds",
    "The decision that matters most is whether the patient will walk on the salvaged limb - a limb salvaged onto a bedbound patient serves nobody"
  ],
  refs: [
    { t: "SVS lower extremity threatened limb classification system: WIfI", u: "https://www.jvascsurg.org/article/S0741-5214(13)01515-2/fulltext" },
    { t: "Global Vascular Guidelines on the management of chronic limb-threatening ischemia", u: "https://www.jvascsurg.org/article/S0741-5214(19)30321-2/fulltext" },
    { t: "StatPearls: Chronic Limb Threatening Ischemia", u: "https://www.ncbi.nlm.nih.gov/books/NBK430745/" }
  ]
},
{
  id: "vasc-major-amputation",
  name: "Major Amputation and Level Selection",
  sec: "vasc",
  present: [
    "Indicated for unreconstructable ischemia with rest pain or tissue loss, uncontrolled infection, or a nonfunctional limb",
    "Below-knee amputation preserves the knee joint, which is the single biggest determinant of whether the patient will walk again",
    "Above-knee amputation heals more reliably but ambulation rates are far lower, particularly in the elderly",
    "Guillotine amputation is the damage-control operation for a septic foot, converted to a definitive level once the sepsis is controlled"
  ],
  dx: [
    "Level selection balances healing potential against functional outcome - the highest chance of walking versus the highest chance of healing",
    "Transcutaneous oxygen above 30-40 mmHg at the proposed level predicts healing; skin perfusion pressure is an alternative",
    "Assess the knee: a fixed flexion contracture over about 20 degrees makes a below-knee prosthesis impractical",
    "Assess the whole patient - prior ambulatory status, cognition, cardiac reserve and social support predict prosthetic use better than any perfusion measurement"
  ],
  tx: [
    "Long posterior myocutaneous flap (Burgess) for below-knee amputation, with the tibial cut 10-12 cm below the tibial tuberosity and the fibula 1-2 cm shorter, bevelled anteriorly",
    "Rigid dressing or a removable rigid dressing after below-knee amputation protects the stump, controls edema and prevents knee flexion contracture",
    "Early prosthetic referral and physical therapy, with knee extension positioning from day one",
    "Perioperative regional anesthesia and a multimodal analgesic plan, including gabapentinoids, to reduce phantom limb pain",
    "Treat the contralateral limb aggressively - the other leg is at high risk and the second amputation is often what ends independent living"
  ],
  pearls: [
    "Save the knee if there is a reasonable chance of healing - a failed below-knee that is revised is usually a better outcome than a primary above-knee in an ambulatory patient",
    "Do not leave a patient in agony while attempting a doomed salvage; a well-done amputation in the right patient is a reconstruction, not a defeat",
    "Never fashion a definitive stump in the presence of active sepsis - guillotine first and come back",
    "Mortality at one year after major amputation in this population approaches 40%; the conversation with the patient should reflect that honestly"
  ],
  refs: [
    { t: "Global Vascular Guidelines on the management of chronic limb-threatening ischemia", u: "https://www.jvascsurg.org/article/S0741-5214(19)30321-2/fulltext" },
    { t: "StatPearls: Below Knee Amputation", u: "https://www.ncbi.nlm.nih.gov/books/NBK534773/" },
    { t: "StatPearls: Above Knee Amputation", u: "https://www.ncbi.nlm.nih.gov/books/NBK560510/" }
  ]
},
{
  id: "vasc-minor-amputation",
  name: "Minor Amputation and Foot Salvage",
  sec: "vasc",
  present: [
    "Amputation distal to the ankle: toe, ray, transmetatarsal, Lisfranc or Chopart",
    "Indicated for localized gangrene or osteomyelitis in a foot with adequate perfusion and a salvageable weight-bearing surface",
    "The great toe and the first ray matter disproportionately for gait, and losing them changes the pressure distribution across the whole foot",
    "A transmetatarsal amputation preserves a functional weight-bearing foot that fits in a shoe with a filler"
  ],
  dx: [
    "Confirm perfusion first - a minor amputation in an ischemic foot converts a small wound into a large one that will not heal",
    "MRI or bone biopsy to define the proximal extent of osteomyelitis, so the bone cut is through uninfected bone",
    "Assess the tendon balance: after a transmetatarsal amputation the unopposed Achilles produces an equinus deformity and a new pressure ulcer",
    "Plan the closure - primary closure only in a clean, well-perfused, uninfected field"
  ],
  tx: [
    "Ray amputation for a toe with osteomyelitis extending into the metatarsal head; the fifth ray tolerates resection best",
    "Transmetatarsal amputation when multiple rays are involved, with the cut just proximal to the metatarsal heads and a long plantar flap",
    "Achilles tendon lengthening or gastrocnemius recession at the same operation as a transmetatarsal amputation prevents equinus and re-ulceration",
    "Leave the wound open with staged closure or healing by secondary intention when infection is present",
    "Negative pressure wound therapy for the open foot wound, with skin grafting once granulated"
  ],
  pearls: [
    "The tendon balance is what fails a transmetatarsal amputation - a technically good amputation that develops equinus ulcerates within months",
    "Do not close a foot primarily over infected bone; the wound breaks down and the next operation is higher",
    "A second ray resection leaves a gap that the neighboring toes drift into, causing deformity - consider whether transmetatarsal is the better first operation",
    "Every minor amputation changes the biomechanics of the foot, so the offloading and footwear plan is part of the operation, not an afterthought"
  ],
  refs: [
    { t: "IWGDF guidelines on the prevention and management of diabetes-related foot disease", u: "https://iwgdfguidelines.org/" },
    { t: "StatPearls: Transmetatarsal Amputation", u: "https://www.ncbi.nlm.nih.gov/books/NBK563248/" },
    { t: "StatPearls: Toe Amputation", u: "https://www.ncbi.nlm.nih.gov/books/NBK546601/" }
  ]
},
{
  id: "vasc-lymphedema",
  name: "Lymphedema",
  sec: "vasc",
  present: [
    "Painless, progressive, nonpitting swelling that begins distally and involves the dorsum of the foot and the toes",
    "The Stemmer sign - inability to pinch a fold of skin at the base of the second toe - is the classic bedside finding and is fairly specific",
    "Primary lymphedema is congenital or develops at puberty (lymphedema praecox) or after 35 (lymphedema tarda)",
    "Secondary lymphedema in developed countries is most often after cancer surgery and radiation; worldwide the commonest cause is filariasis",
    "Skin changes progress from pitting to nonpitting, then peau d'orange, hyperkeratosis and verrucous change"
  ],
  dx: [
    "Largely a clinical diagnosis; the main work is excluding venous disease, heart failure, renal and hepatic causes, and malignant obstruction",
    "Lymphoscintigraphy is the confirmatory test and demonstrates delayed or absent transit and dermal backflow",
    "Indocyanine green lymphography maps the functional channels and is used for surgical planning",
    "Duplex to exclude concurrent venous insufficiency, which is common and treatable, and to exclude DVT in an acute presentation",
    "Stage 0 latent through stage 3 elephantiasis by the ISL staging system"
  ],
  tx: [
    "Complete decongestive therapy is the mainstay: manual lymphatic drainage, multilayer compression bandaging, exercise and meticulous skin care",
    "Maintenance with 30-40 mmHg or higher flat-knit compression garments, plus intermittent pneumatic compression at home",
    "Aggressive skin care and prompt treatment of cellulitis, with antibiotic prophylaxis for recurrent episodes",
    "Physiologic surgery - lymphovenous anastomosis and vascularized lymph node transfer - for early-stage disease with functioning channels",
    "Debulking with suction-assisted lipectomy for advanced fibrofatty disease that no longer responds to compression",
    "Diuretics do not work and are not indicated"
  ],
  pearls: [
    "Compression is lifelong; patients who stop wearing garments lose the gains from months of decongestive therapy within weeks",
    "Cellulitis both results from and worsens lymphedema, and each episode damages more channels - treat it promptly and consider prophylaxis after two episodes",
    "Distinguish it from lipedema, which is bilateral, symmetric, tender, spares the feet, and has a negative Stemmer sign",
    "A rapidly progressive unilateral lymphedema in an older patient can be malignant obstruction, and Stewart-Treves angiosarcoma is a rare late complication of chronic lymphedema"
  ],
  refs: [
    { t: "International Society of Lymphology consensus document on the diagnosis and treatment of peripheral lymphedema", u: "https://pubmed.ncbi.nlm.nih.gov/32200600/" },
    { t: "StatPearls: Lymphedema", u: "https://www.ncbi.nlm.nih.gov/books/NBK537239/" },
    { t: "MedlinePlus: Lymphedema", u: "https://medlineplus.gov/lymphedema.html" }
  ]
}
];
