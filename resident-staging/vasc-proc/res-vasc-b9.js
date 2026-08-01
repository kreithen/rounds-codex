/* Vascular Surgery PROCEDURES - batch 9 of 10 (procedures 41-45).
 * Pulmonary embolism intervention and dialysis access creation.
 * Extended schema: {id,name,sec,present[],dx[],tx[],tech[],after[],pearls[],refs[{t,u}]}  sec="vasc"
 */
const RES_VASC_B9 = [
{
  id: "vasc-pe-catheter",
  name: "Catheter-Based Pulmonary Embolism Intervention",
  sec: "vasc",
  present: [
    "High-risk (massive) pulmonary embolism with sustained hypotension, where systemic thrombolysis is contraindicated or has failed",
    "Intermediate-high-risk PE with right ventricular strain on imaging AND raised biomarkers, particularly when deteriorating",
    "PEITHO showed systemic thrombolysis in intermediate-risk PE reduced decompensation but doubled major bleeding and caused a tenfold increase in intracranial hemorrhage",
    "Catheter-directed therapy exists to get the right ventricle unloaded with far less bleeding than a systemic dose"
  ],
  dx: [
    "CT pulmonary angiography confirms the diagnosis and gives the right-to-left ventricular ratio, with a ratio above 0.9 indicating strain",
    "Echocardiography for right ventricular dilation, septal flattening and the McConnell sign",
    "Troponin and brain natriuretic peptide - these move a normotensive patient from low to intermediate risk",
    "Simplified PESI for 30-day mortality; a multidisciplinary PE response team decision is the practical standard"
  ],
  tx: [
    "Anticoagulation for everyone who can receive it, before and after any intervention",
    "Catheter-directed thrombolysis uses a reduced alteplase dose delivered into the clot, typically over hours",
    "Large-bore mechanical aspiration removes thrombus with no lytic at all, which is the option in the patient who cannot bleed",
    "Support the right ventricle: avoid fluid loading a failing right heart, use a vasopressor such as norepinephrine, and avoid hypoxia and hypercapnia which raise pulmonary vascular resistance",
    "Surgical embolectomy or extracorporeal support for the patient in extremis or with clot in transit"
  ],
  tech: [
    "Ultrasound-guided common femoral vein access, or jugular access when femoral thrombus is present",
    "Right heart catheterization to measure pulmonary artery pressures before and after - the pressure change is the objective measure of what you achieved",
    "Selective pulmonary angiography, or use the CT to target, minimizing contrast in a patient who may have renal impairment",
    "For catheter-directed lysis, position multi-sidehole catheters in each affected pulmonary artery and start a low-dose alteplase infusion",
    "For mechanical aspiration, advance the large-bore catheter over a wire into the proximal clot and aspirate under controlled suction, monitoring blood loss carefully",
    "Treat the main and lobar arteries; chasing segmental clot adds risk without much hemodynamic gain",
    "Repeat the pressure measurement at the end and document the change"
  ],
  after: [
    "Monitored bed with continuous hemodynamic observation; the right ventricle recovers over hours to days",
    "Serial fibrinogen and hemoglobin during any lytic infusion, and a hard stop on any neurologic change",
    "Monitor hemoglobin closely after aspiration - blood loss is real and easily underestimated",
    "Repeat echocardiography at 24-48 hours to document right ventricular recovery",
    "Full-dose anticoagulation, with agent and duration decided as for any venous thromboembolism",
    "Follow up for chronic thromboembolic pulmonary hypertension at 3-6 months in anyone with persistent dyspnea"
  ],
  pearls: [
    "The right ventricle is what kills these patients, not the hypoxia - which is why strain markers and not oxygen saturation drive the decision to escalate",
    "Do not fluid-load a failing right ventricle; it dilates further, the septum bows, and the left ventricle fills less",
    "The evidence for catheter-directed therapy is largely surrogate endpoints and registries - the randomized mortality data everyone quotes does not yet exist, and consent should reflect that",
    "Measure pulmonary artery pressure before and after. It is the only objective evidence you improved anything"
  ],
  refs: [
    { t: "2019 ESC guidelines for the diagnosis and management of acute pulmonary embolism", u: "https://academic.oup.com/eurheartj/article/41/4/543/5556136" },
    { t: "PEITHO trial (N Engl J Med 2014)", u: "https://www.nejm.org/doi/full/10.1056/NEJMoa1302097" },
    { t: "StatPearls: Pulmonary Embolism", u: "https://www.ncbi.nlm.nih.gov/books/NBK560551/" }
  ]
},
{
  id: "vasc-avf-creation",
  name: "Radiocephalic and Brachiocephalic Fistula Creation",
  sec: "vasc",
  present: [
    "Anticipated need for hemodialysis within 6-12 months, or an estimated glomerular filtration rate below 15-20",
    "The 2019 KDOQI update replaced fistula-first with the ESKD Life-Plan - the access is matched to the patient rather than to a rule",
    "Order of preference remains distal before proximal and autogenous before prosthetic: radiocephalic, then brachiocephalic, then brachiobasilic transposition, then graft",
    "Nondominant arm first where the anatomy allows"
  ],
  dx: [
    "Examine both arms: pulses, Allen test, prior scars, and the veins with a tourniquet applied",
    "Duplex vein mapping with a target vein of 2.5 mm or more for a fistula, and continuity to the central veins",
    "Arterial assessment with a feeding artery of at least 2 mm plus bilateral arm pressures to exclude inflow stenosis",
    "Central venography in anyone with prior central lines, a pacemaker, or arm and facial swelling",
    "Preserve the veins from the day of referral: no phlebotomy, no lines and no cuffs on the planned arm"
  ],
  tx: [
    "Radiocephalic fistula at the wrist is the classic first access - lowest steal risk, preserves proximal sites, but the highest primary failure rate at 20-50%",
    "Brachiocephalic fistula at the antecubital fossa matures more reliably but carries higher steal risk",
    "Regional block is preferred over general anesthesia; it produces vasodilation that helps the anastomosis and may improve maturation",
    "Do not remove a tunneled catheter until the fistula has been successfully cannulated at least twice",
    "An arteriovenous graft is the right answer for poor veins or a short life expectancy, and is not a planning failure"
  ],
  tech: [
    "Regional block, then a longitudinal or transverse incision over the chosen artery and vein",
    "Mobilize the vein for adequate length, ligating side branches close to the vein and handling it as little as possible",
    "Hydrostatically distend the vein gently with heparinized saline to check for stenosis and to confirm it will accept flow - do not overdistend",
    "Control the artery, heparinize systemically or locally, and make a longitudinal arteriotomy of 6-8 mm - a longer anastomosis means more flow and more steal risk",
    "Construct an end-vein-to-side-artery anastomosis with 6-0 or 7-0 polypropylene, which is the configuration with the lowest steal risk",
    "Ensure the vein lies without kinking or twisting after it is swung across to the artery - check the lie before the last sutures",
    "Confirm a palpable thrill and a continuous machinery bruit before closing; a water-hammer pulse without a thrill means outflow obstruction and should be addressed now",
    "Close in layers without tension over the vein"
  ],
  after: [
    "Teach the patient to check the thrill daily and to report its loss immediately",
    "Exercise the arm; hand-grip exercises are traditional and harmless though the evidence for maturation benefit is modest",
    "Examine at 2 and 6 weeks: inspection, palpation for thrill, and the arm-elevation and augmentation tests, which separate inflow from outflow problems in under a minute",
    "The rule of 6s at 6 weeks: flow above 600 mL/min, diameter above 6 mm, depth under 6 mm, and a straight cannulable segment of 6 cm",
    "Duplex at 4-6 weeks if maturation is in doubt; a fistula not usable at 6 weeks is investigated then, not at 12",
    "Ask specifically about hand pain, coldness and weakness during dialysis, which is steal and is not volunteered"
  ],
  pearls: [
    "Vein preservation is the cheapest intervention in the whole pathway and it is undone by a single routine cannulation of the cephalic vein",
    "Check the lie of the vein before the final sutures - a fistula that kinks when the arm is repositioned looks perfect on the table",
    "A thrill means flow; a water-hammer pulse without a thrill means the outflow is obstructed, and finding that on the table is far better than at 6 weeks",
    "Plan the second and third access when you do the first; the sequence, not the single operation, is what keeps someone dialyzing for twenty years"
  ],
  refs: [
    { t: "KDOQI clinical practice guideline for vascular access: 2019 update", u: "https://www.ajkd.org/article/S0272-6386(19)31137-0/fulltext" },
    { t: "StatPearls: Arteriovenous Fistula", u: "https://www.ncbi.nlm.nih.gov/books/NBK559214/" },
    { t: "StatPearls: Hemodialysis Access", u: "https://www.ncbi.nlm.nih.gov/books/NBK562279/" }
  ]
},
{
  id: "vasc-basilic-transposition",
  name: "Brachiobasilic Vein Transposition",
  sec: "vasc",
  present: [
    "The third autogenous option, after radiocephalic and brachiocephalic fistulas have been excluded or have failed",
    "The basilic vein is often preserved and of good calibre precisely because it is deep and therefore never cannulated for blood draws",
    "Requires transposition because in its native position the basilic vein is too deep medially to cannulate",
    "Preferred over an arteriovenous graft when the vein is adequate, because autogenous access has better patency and far lower infection rates"
  ],
  dx: [
    "Duplex mapping of the basilic vein along its whole length, with a target diameter of 3 mm or more",
    "Assess the brachial artery inflow and exclude proximal stenosis with bilateral arm pressures",
    "Central venography if there is any history of ipsilateral central lines or arm swelling",
    "Assess the patient's body habitus - a very obese arm makes even a transposed vein hard to cannulate and may favor a graft"
  ],
  tx: [
    "Single-stage or two-stage approach; two-stage creates the fistula first, lets it mature and dilate, then transposes it at a second operation with a thicker, easier vein",
    "Two-stage has better maturation and lower early failure in several series, at the cost of a second operation",
    "Regional block anesthesia",
    "Higher steal risk than a distal fistula because the inflow is brachial - counsel and monitor for it",
    "Do not remove the catheter until the transposed fistula has been cannulated successfully"
  ],
  tech: [
    "Longitudinal medial upper arm incision, or multiple skip incisions, over the course of the basilic vein",
    "Mobilize the basilic vein from the antecubital fossa to the axilla, ligating branches close to the vein",
    "Identify and protect the medial cutaneous nerve of the forearm, which runs with the vein and is the nerve injured here - a numb medial forearm is the commonest complication",
    "Divide the vein distally, flush and distend gently, and check for twist by marking its anterior surface along its length before mobilizing",
    "Create a subcutaneous tunnel anterolaterally on the upper arm, superficial enough to cannulate but with adequate skin cover",
    "Transpose the vein through the tunnel, taking great care that it is not twisted - the mark you drew is what proves it",
    "Anastomose end-vein-to-side-brachial-artery with a 6-8 mm arteriotomy",
    "Confirm thrill and bruit and check the vein lies in a straight, superficial, cannulable line"
  ],
  after: [
    "Arm elevation for the first days; swelling after extensive mobilization is expected",
    "Warn the patient about medial forearm numbness, which is common and often permanent",
    "Wound care along a long incision in an immunocompromised uremic patient - this incision has a real infection rate",
    "Maturation assessment at 6 weeks with the same rule of 6s",
    "Watch for steal, which is commoner with brachial inflow, and ask directly about hand symptoms during dialysis",
    "Mark the cannulation zone for the dialysis unit and rotate sites from the start"
  ],
  pearls: [
    "Mark the anterior surface of the vein before you mobilize it - a transposed vein twisted 180 degrees in the tunnel is a technically perfect operation that does not work",
    "The medial cutaneous nerve of the forearm runs with the basilic vein and is the structure that gets injured; warn about numbness in consent",
    "Two-stage is worth considering in a marginal vein, because the second operation transposes a matured, thick-walled, forgiving vein",
    "Superficial enough to cannulate but not so superficial the skin breaks down - the tunnel depth is a judgement, and too deep is the commoner error"
  ],
  refs: [
    { t: "KDOQI clinical practice guideline for vascular access: 2019 update", u: "https://www.ajkd.org/article/S0272-6386(19)31137-0/fulltext" },
    { t: "StatPearls: Arteriovenous Fistula", u: "https://www.ncbi.nlm.nih.gov/books/NBK559214/" },
    { t: "StatPearls: Hemodialysis Access", u: "https://www.ncbi.nlm.nih.gov/books/NBK562279/" }
  ]
},
{
  id: "vasc-av-graft",
  name: "Arteriovenous Graft Placement",
  sec: "vasc",
  present: [
    "Inadequate veins for any autogenous access, which duplex mapping has confirmed rather than assumed",
    "A patient with a short life expectancy in whom the months a fistula takes to mature are months on a catheter",
    "Failed previous fistulas with no remaining autogenous option",
    "Usable within 2-4 weeks, and early-cannulation grafts within days - which is the real advantage over a fistula"
  ],
  dx: [
    "Duplex mapping to confirm no adequate vein exists - a graft placed where a fistula was possible is a worse access",
    "Target outflow vein of 4 mm or more",
    "Arterial inflow assessment and bilateral arm pressures",
    "Central venography where there is any history of central lines, because a central stenosis makes the whole arm unusable"
  ],
  tx: [
    "PTFE, 6 mm or 4-7 mm tapered; the taper is used to reduce steal by limiting inflow",
    "Forearm loop from brachial artery to an antecubital vein, or upper arm straight or curved from brachial artery to axillary vein",
    "Standard grafts are cannulated after 2-4 weeks once incorporated; early-cannulation grafts can be used within 24-72 hours",
    "Antibiotic prophylaxis - infection is the graft's characteristic complication and the reason autogenous is preferred",
    "Keep the catheter until the graft has been successfully used"
  ],
  tech: [
    "Expose the inflow artery and the outflow vein through separate incisions",
    "Create the subcutaneous tunnel with a tunneler, keeping it at a consistent depth of about 5-8 mm and, for a loop, with a broad gentle curve",
    "A tight loop apex kinks; keep the curve wide and check it after the graft is pulled through",
    "Pull the graft through without twisting - most grafts have a longitudinal marker line and it must run straight",
    "Venous anastomosis first, end-graft-to-side-vein, spatulated and generous, because the venous anastomosis is where the intimal hyperplasia that will one day occlude it develops",
    "Arterial anastomosis end-graft-to-side-artery with a modest arteriotomy to limit flow and steal",
    "Confirm thrill along the graft and check hand perfusion before closing",
    "Mark the direction of flow on the skin or document it clearly - the dialysis unit needs to know which limb is arterial"
  ],
  after: [
    "Arm elevation and swelling management",
    "Do not allow cannulation until the graft is incorporated, unless it is an early-cannulation design",
    "Document the flow direction for the dialysis unit; cannulating a graft backwards causes recirculation and poor dialysis",
    "Surveillance for the venous anastomotic stenosis, which is the predictable failure point - rising venous pressures on dialysis are the clinical signal",
    "Watch for steal, particularly with brachial inflow",
    "Infection surveillance; any erythema or discharge over a graft is treated urgently, not observed"
  ],
  pearls: [
    "The venous anastomosis is where the graft dies - intimal hyperplasia there is the predictable lesion, and surveillance is aimed at it",
    "Keep the loop apex broad. A tight turn kinks under the skin and gives you a graft that never works properly",
    "Check the marker line for twist before you anastomose; a twisted graft is a technically flawless operation that thromboses",
    "A graft is a legitimate choice, not a failure of planning - a working graft beats a fistula that never matures while the patient dialyzes through a catheter"
  ],
  refs: [
    { t: "KDOQI clinical practice guideline for vascular access: 2019 update", u: "https://www.ajkd.org/article/S0272-6386(19)31137-0/fulltext" },
    { t: "StatPearls: Hemodialysis Access", u: "https://www.ncbi.nlm.nih.gov/books/NBK562279/" },
    { t: "StatPearls: Hemodialysis Access Complications", u: "https://www.ncbi.nlm.nih.gov/books/NBK564383/" }
  ]
},
{
  id: "vasc-tunneled-catheter",
  name: "Tunneled Dialysis Catheter Insertion",
  sec: "vasc",
  present: [
    "Urgent dialysis need with no functioning permanent access - the commonest and least desirable way to start dialysis",
    "A bridge while a fistula matures, or while a transplant is arranged",
    "Long-term access in a patient with no remaining fistula or graft options",
    "Every catheter day carries bacteremia risk and risks the central stenosis that can cost an entire arm"
  ],
  dx: [
    "Assess prior access history and prior catheter sites; the right internal jugular is the preferred first choice for a straight course to the cava",
    "Ultrasound the intended vein before draping to confirm patency and to plan the puncture",
    "Central venography or CT in a patient with multiple prior catheters, a pacemaker, or arm and facial swelling",
    "Check platelet count and coagulation, recognizing uremic platelet dysfunction is not reflected in the numbers"
  ],
  tx: [
    "Right internal jugular first; the left has a longer, more angled course with higher dysfunction and stenosis rates",
    "NEVER the subclavian - subclavian catheters cause the central stenosis that renders the ipsilateral arm unusable for permanent access",
    "Femoral only as a temporary measure in an emergency",
    "Strict aseptic technique with maximal barrier precautions and chlorhexidine",
    "Remove it as soon as permanent access is working; the plan should have a removal trigger written into it"
  ],
  tech: [
    "Supine, slight Trendelenburg, head turned away, under full sterile drape with ultrasound in a sterile sheath",
    "Ultrasound-guided puncture of the right internal jugular, low in the neck, confirming the guidewire in the vein on ultrasound before dilating",
    "Confirm the guidewire course to the right atrium under fluoroscopy before any dilation - a dilator into the pleura or mediastinum is the catastrophic error",
    "Make the exit site incision on the anterior chest wall, several centimetres below the clavicle, and tunnel the catheter from there up to the venotomy",
    "Position the cuff about 2 cm from the exit site so it can granulate in and anchor the catheter",
    "Advance the catheter over the wire through a peel-away sheath, with the tip at the cavoatrial junction or in the right atrium for adequate flow",
    "Confirm tip position on fluoroscopy, aspirate and flush both lumens briskly, then lock with the unit's prescribed lock solution",
    "Secure with a suture at the exit site until the cuff incorporates, and obtain a chest radiograph"
  ],
  after: [
    "Chest radiograph to confirm tip position and exclude pneumothorax",
    "Dressing protocol and exit-site care taught to the patient and the dialysis unit",
    "The catheter is for dialysis only - not for blood draws or infusions, which is the discipline that prevents infection",
    "Watch for catheter dysfunction from fibrin sheath or thrombus, treated with a lytic lock or a sheath disruption procedure",
    "Any fever in a patient with a tunneled catheter is catheter-related bacteremia until proven otherwise; culture through the catheter and peripherally",
    "Keep working toward permanent access; document the plan at every review"
  ],
  pearls: [
    "Never the subclavian. A single subclavian catheter can cost the patient an entire arm's worth of future access, and it is still placed reflexively in patients with kidney disease",
    "Confirm the wire in the right atrium on fluoroscopy before dilating - dilating over a misplaced wire is how the carotid or the mediastinum gets injured",
    "Right internal jugular over left; the left-sided course has more angles, more dysfunction and more stenosis",
    "Fever in a dialysis patient with a catheter is line sepsis until cultures say otherwise, and the workup starts before the antibiotics"
  ],
  refs: [
    { t: "KDOQI clinical practice guideline for vascular access: 2019 update", u: "https://www.ajkd.org/article/S0272-6386(19)31137-0/fulltext" },
    { t: "CDC guidelines for the prevention of intravascular catheter-related infections", u: "https://www.cdc.gov/infection-control/hcp/intravascular-catheter-related-infection/index.html" },
    { t: "StatPearls: Central Venous Stenosis", u: "https://www.ncbi.nlm.nih.gov/books/NBK560641/" }
  ]
}
];
