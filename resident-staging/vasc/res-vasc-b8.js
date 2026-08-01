/* Vascular Surgery resident dataset - batch 8 of 12 (entries 36-40).
 * Hemodialysis access.
 * Schema: {id,name,sec,present[],dx[],tx[],pearls[],refs[{t,u}]}  sec="vasc"
 */
const RES_VASC_B8 = [
{
  id: "vasc-access-planning",
  name: "Hemodialysis Access Planning",
  sec: "vasc",
  present: [
    "Referral should happen when the estimated glomerular filtration rate falls below 15-20, or when dialysis is anticipated within 6-12 months",
    "The 2019 KDOQI update replaced fistula-first with the ESKD Life-Plan, matching the access to the patient rather than to a rule",
    "Patients arriving on a tunneled catheter after an unplanned start are the commonest and least desirable presentation",
    "A history of prior central lines, pacemakers or failed accesses shapes everything that follows"
  ],
  dx: [
    "Examine both arms: pulses, allen test, prior scars, and the veins with a tourniquet on",
    "Duplex vein mapping - a target vein of 2.5 mm or more for a fistula, 4 mm for a graft, with continuity to the central veins",
    "Arterial assessment: a feeding artery of at least 2 mm, plus bilateral arm pressures to exclude inflow stenosis",
    "Central venography or MR venography in any patient with prior central lines, a pacemaker, or arm and facial swelling"
  ],
  tx: [
    "Preserve the veins from the day of referral: no phlebotomy, no intravenous lines and no blood pressure cuffs on the planned arm",
    "Order of preference remains distal before proximal and autogenous before prosthetic: radiocephalic, then brachiocephalic, then brachiobasilic transposition, then graft",
    "Nondominant arm first where the anatomy allows",
    "Arteriovenous graft is the right answer in a patient with poor veins or a short life expectancy, and is not a failure of planning",
    "A peritoneal dialysis catheter or a preemptive transplant may be the better access, which is the point of the Life-Plan framing"
  ],
  pearls: [
    "Fistula-first became fistula-only in practice, and a fistula that never matures in a patient dialyzing through a catheter is worse than a graft that worked from week three",
    "Vein preservation is the cheapest intervention in the whole pathway and it is undone by a single routine cannulation of the cephalic vein",
    "Central venous stenosis from a previous subclavian line can render an entire arm unusable, which is why the history matters more than the ultrasound",
    "Plan the second and third access at the time of the first - the sequence, not the operation, is what keeps a patient dialyzing for twenty years"
  ],
  refs: [
    { t: "KDOQI clinical practice guideline for vascular access: 2019 update", u: "https://www.ajkd.org/article/S0272-6386(19)31137-0/fulltext" },
    { t: "SVS clinical practice guidelines", u: "https://www.svs.org/clinical-practice/clinical-practice-guidelines/" },
    { t: "StatPearls: Hemodialysis Access", u: "https://www.ncbi.nlm.nih.gov/books/NBK562279/" }
  ]
},
{
  id: "vasc-avf-maturation",
  name: "Arteriovenous Fistula Creation and Maturation",
  sec: "vasc",
  present: [
    "A new fistula should develop a thrill and a continuous machinery bruit within days; a water-hammer pulse without a thrill means outflow obstruction",
    "The rule of 6s at 6 weeks: flow above 600 mL/min, diameter above 6 mm, depth under 6 mm, and a straight cannulable segment of at least 6 cm",
    "Primary failure - a fistula that never matures - affects 20-50% of radiocephalic fistulas and is the central problem of access surgery",
    "Failure to mature presents as a fistula that cannot be cannulated, keeping the patient on a catheter"
  ],
  dx: [
    "Clinical examination first: inspection, palpation for thrill, auscultation, and the augmentation and pulse-arm elevation tests",
    "Arm elevation should collapse a normal fistula; failure to collapse indicates outflow stenosis, while loss of augmentation indicates inflow stenosis",
    "Duplex at 4-6 weeks measures flow, diameter and depth and identifies juxta-anastomotic stenosis, the commonest correctable cause",
    "Fistulography when duplex suggests a lesion and intervention is planned"
  ],
  tx: [
    "Juxta-anastomotic stenosis: balloon angioplasty, or surgical revision with a proximal neoanastomosis",
    "Ligate large competing accessory veins that are stealing flow from the main channel",
    "Superficialize or transpose a fistula that is patent and high-flow but too deep to cannulate - a lipectomy or elevation procedure",
    "Endovascular fistula creation using a percutaneous device is an option in selected forearm anatomy",
    "Do not remove the tunneled catheter until the fistula has been cannulated successfully at least twice"
  ],
  pearls: [
    "Physical examination finds most maturation problems, and the two elevation maneuvers separate inflow from outflow in under a minute",
    "A fistula that is not usable at 6 weeks needs investigating then, not at 12 weeks - the catheter days are what harm the patient",
    "Accessory veins are frequently blamed and rarely the whole problem; look for the juxta-anastomotic stenosis first",
    "The measure of success is a patient dialyzing without a catheter, not a patent fistula on a duplex report"
  ],
  refs: [
    { t: "KDOQI clinical practice guideline for vascular access: 2019 update", u: "https://www.ajkd.org/article/S0272-6386(19)31137-0/fulltext" },
    { t: "StatPearls: Arteriovenous Fistula", u: "https://www.ncbi.nlm.nih.gov/books/NBK559214/" },
    { t: "SVS clinical practice guidelines", u: "https://www.svs.org/clinical-practice/clinical-practice-guidelines/" }
  ]
},
{
  id: "vasc-access-steal",
  name: "Dialysis Access Steal Syndrome",
  sec: "vasc",
  present: [
    "Hand pain, coldness, numbness or weakness that is worse during dialysis, when flow through the access is highest",
    "Graded from I (pale or cool hand without pain) through IV (tissue loss and gangrene)",
    "Risk factors are diabetes, peripheral arterial disease, female sex, age, prior access in the same limb, and a brachial-based access",
    "Distinguish from ischemic monomelic neuropathy, which is immediate, painful, motor-predominant, and occurs with a warm well-perfused hand"
  ],
  dx: [
    "Digital pressures and digital-brachial index, measured with and without manual compression of the access",
    "A rise in digital pressure on compressing the fistula confirms that the access is the cause",
    "Duplex measures access flow - a flow above 800 mL/min in a brachial access supports a high-flow mechanism",
    "Arteriography of the whole limb to identify inflow stenosis and distal occlusive disease, both of which are treatable contributors"
  ],
  tx: [
    "Grade I and mild grade II can be observed with hand warming and watchful follow-up; many settle",
    "Correct any inflow arterial stenosis first - the simplest and most satisfying fix, and it preserves the access",
    "DRIL, distal revascularization with interval ligation, treats steal while preserving the access and is the most durable option",
    "RUDI (revision using distal inflow) and MILLER banding reduce access flow in the high-flow fistula",
    "PAI, proximalization of the arterial inflow, moves the inflow to the axillary artery",
    "Ligation of the access is the last resort and is immediate and definitive in the threatened hand with tissue loss"
  ],
  pearls: [
    "Ischemic monomelic neuropathy is the one that must not be missed - it needs the access ligated within hours, and a delay leaves a permanently useless hand",
    "Do not band blindly; identify whether the mechanism is high flow or poor distal arterial supply, because banding a low-flow steal makes the access thrombose without helping the hand",
    "The hand is worth more than the access - a patient with an irreversibly ischemic hand and a working fistula has been badly served",
    "Steal is commonest with brachial artery inflow, which is an argument for staying distal whenever the veins allow"
  ],
  refs: [
    { t: "KDOQI clinical practice guideline for vascular access: 2019 update", u: "https://www.ajkd.org/article/S0272-6386(19)31137-0/fulltext" },
    { t: "StatPearls: Dialysis Access Steal Syndrome", u: "https://www.ncbi.nlm.nih.gov/books/NBK560838/" },
    { t: "SVS clinical practice guidelines", u: "https://www.svs.org/clinical-practice/clinical-practice-guidelines/" }
  ]
},
{
  id: "vasc-access-complications",
  name: "Access Thrombosis, Aneurysm and Infection",
  sec: "vasc",
  present: [
    "Thrombosis presents as a loss of thrill and bruit, usually on the underlying stenosis at the venous outflow of a graft or the juxta-anastomosis of a fistula",
    "Aneurysmal degeneration of a fistula from repeated cannulation at the same site, with skin thinning, shine and ulceration",
    "Pseudoaneurysm of a graft at the puncture site, expanding and at risk of rupture",
    "Infection presents with erythema, purulence or sepsis; graft infection is far more common and more dangerous than fistula infection",
    "Bleeding from an ulcerated aneurysm over an access is a true emergency - exsanguination can occur in minutes"
  ],
  dx: [
    "Duplex identifies the stenosis, quantifies flow and assesses the aneurysm wall and overlying skin thickness",
    "Fistulography for the thrombosed access, typically as the first step of a declotting procedure",
    "Blood cultures and, for a suspected graft infection, cross-sectional imaging or labeled leukocyte scanning",
    "Any shiny, thin, ulcerated or scabbed skin over an aneurysm is an impending rupture and is assessed urgently, not in the next available clinic"
  ],
  tx: [
    "Thrombosed graft: percutaneous or surgical thrombectomy plus treatment of the underlying outflow stenosis, which must be corrected or it rethromboses",
    "Thrombosed fistula: thrombectomy has lower success but a mature fistula is worth an attempt, with angioplasty of the causative lesion",
    "Aneurysm with intact skin and a usable access: rotate cannulation sites and observe; with threatened skin, resect and revise or bypass the segment",
    "Immediate management of bleeding from an access is direct digital pressure and a tourniquet above it, then the operating room - not a dressing",
    "Graft infection: excise the graft, partially if localized and totally if extensive or if the arterial anastomosis is involved. Fistula infection is often treated with antibiotics alone",
    "Stent grafts have a role in graft pseudoaneurysm and in recurrent venous outflow stenosis"
  ],
  pearls: [
    "Every thrombosed access has a lesion behind it - declotting without finding and fixing the stenosis buys days, not months",
    "A patient who bleeds from their fistula at home and stops it with pressure has had a warning; they need admission and repair, not reassurance",
    "Rotate the cannulation site, or use the buttonhole technique correctly - repeated area puncture is what creates the aneurysms in the first place",
    "Do not ligate an infected access reflexively if a partial excision preserves a functioning circuit, but never leave prosthetic material in a septic patient"
  ],
  refs: [
    { t: "KDOQI clinical practice guideline for vascular access: 2019 update", u: "https://www.ajkd.org/article/S0272-6386(19)31137-0/fulltext" },
    { t: "StatPearls: Hemodialysis Access Complications", u: "https://www.ncbi.nlm.nih.gov/books/NBK564383/" },
    { t: "SVS clinical practice guidelines", u: "https://www.svs.org/clinical-practice/clinical-practice-guidelines/" }
  ]
},
{
  id: "vasc-central-venous-occlusion",
  name: "Central Venous Occlusive Disease and Tunneled Catheters",
  sec: "vasc",
  present: [
    "Arm, breast and facial swelling ipsilateral to an access, with dilated chest wall collateral veins",
    "Almost always iatrogenic, from previous central venous catheters, particularly subclavian lines and pacemaker leads",
    "Superior vena cava syndrome from bilateral or central occlusion, with facial swelling, headache and plethora",
    "May present as a poorly functioning access with high venous pressures on dialysis rather than as swelling"
  ],
  dx: [
    "Duplex shows loss of respiratory phasicity and cardiac pulsatility in the subclavian and internal jugular veins, which is the indirect sign of a central lesion",
    "Central venography is the definitive study and is done as the first stage of intervention",
    "CT or MR venography maps the extent when planning a complex reconstruction or a new access site",
    "Assess whether the lesion is a stenosis or a complete occlusion, and how long the occluded segment is"
  ],
  tx: [
    "Treat only symptomatic disease - an asymptomatic central stenosis found on a fistulogram should be left alone, because intervention accelerates restenosis",
    "Angioplasty is first-line, with stenting reserved for elastic recoil or early recurrence",
    "Avoid crossing the internal jugular confluence with a stent where possible, since it forecloses that vein for future access",
    "Ligating or banding the ipsilateral access relieves symptoms when endovascular treatment fails, at the cost of the access",
    "Prevention is the real treatment: internal jugular rather than subclavian for temporary catheters, and the shortest possible dwell"
  ],
  pearls: [
    "The subclavian line is the single most avoidable cause of a lost arm in a dialysis patient, and it is still placed routinely in patients with kidney disease",
    "Do not treat an asymptomatic central stenosis - the natural history is better than the post-angioplasty restenosis curve",
    "A tunneled catheter is a bridge, and every additional catheter day raises the risk of bacteremia and of the next central stenosis",
    "Facial swelling in a dialysis patient is central venous occlusion until proven otherwise, and it is often first noticed by the dialysis nurse"
  ],
  refs: [
    { t: "KDOQI clinical practice guideline for vascular access: 2019 update", u: "https://www.ajkd.org/article/S0272-6386(19)31137-0/fulltext" },
    { t: "StatPearls: Central Venous Stenosis", u: "https://www.ncbi.nlm.nih.gov/books/NBK560641/" },
    { t: "CDC guidelines for the prevention of intravascular catheter-related infections", u: "https://www.cdc.gov/infection-control/hcp/intravascular-catheter-related-infection/index.html" }
  ]
}
];
