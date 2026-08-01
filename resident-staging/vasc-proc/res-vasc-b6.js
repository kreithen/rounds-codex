/* Vascular Surgery PROCEDURES - batch 6 of 10 (procedures 26-30).
 * Lower extremity endovascular part 2, and mesenteric bypass.
 * Extended schema: {id,name,sec,present[],dx[],tx[],tech[],after[],pearls[],refs[{t,u}]}  sec="vasc"
 */
const RES_VASC_B6 = [
{
  id: "vasc-tibial-pedal",
  name: "Tibial and Pedal Angioplasty with Retrograde Access",
  sec: "vasc",
  present: [
    "Chronic limb-threatening ischemia with tissue loss and infrapopliteal disease - claudication is almost never an indication below the knee",
    "Strongly associated with diabetes and end-stage renal disease, with heavy medial calcification",
    "BASIL-2 favored an endovascular-first strategy in patients requiring infrapopliteal revascularization, on amputation-free survival",
    "Retrograde tibiopedal access makes flush occlusions treatable that cannot be crossed antegrade"
  ],
  dx: [
    "Toe pressures and pulse volume recordings; ankle indices are unreliable in calcified tibial vessels",
    "Angiography with dedicated foot views including lateral projections - the pedal arch is invisible on a standard anteroposterior run",
    "GLASS infrapopliteal grading and the pedal arch score predict technical success and wound healing",
    "Identify a retrograde access target: distal posterior tibial, dorsalis pedis, or the peroneal at the ankle"
  ],
  tx: [
    "Aim for in-line flow to the foot in at least one vessel; which vessel matters less than that the foot is perfused",
    "Drug-coated balloon benefit below the knee is less established than in the femoropopliteal segment - plain balloon angioplasty remains the workhorse",
    "Long low-pressure inflations, typically 2-3 minutes, rather than short high-pressure ones",
    "Bailout stenting with a coronary drug-eluting stent for a focal flow-limiting dissection",
    "Revascularization is half the treatment; offloading, debridement and infection control determine healing"
  ],
  tech: [
    "Antegrade ipsilateral common femoral access under ultrasound for the best pushability, or contralateral up-and-over in a hostile groin",
    "Cross antegrade with a 0.014 or 0.018 system, using a supported microcatheter and escalating wire stiffness only as needed",
    "When antegrade crossing fails, obtain retrograde access under ultrasound at the distal target with a micropuncture needle - a 21G needle into a 2 mm calcified vessel",
    "Advance a wire retrograde to meet the antegrade catheter, then either snare it or use the rendezvous technique to externalize and convert to an antegrade system",
    "Angioplasty the whole diseased length with long low-pressure inflations, working from distal to proximal",
    "Treat the pedal loop when the arch is incomplete, since the arch is what distributes flow to the wound",
    "Achieve hemostasis at the retrograde site with balloon tamponade from above rather than external compression, which occludes a small vessel"
  ],
  after: [
    "Document toe pressures or transcutaneous oxygen after the procedure - a TcPO2 above 30 mmHg predicts healing",
    "Immediate referral to podiatry and wound care; the wound plan starts the same day",
    "Watch the retrograde access site for hematoma or occlusion, which would cost a vessel that may be needed later",
    "Expect and plan for repeat intervention; restenosis below the knee is the norm",
    "Duplex or pressure surveillance at intervals matched to the wound, not to a calendar",
    "Antiplatelet and high-intensity statin, and consider dual-pathway therapy"
  ],
  pearls: [
    "The angiosome concept is attractive and the evidence is weak - get the best flow you can into the foot rather than abandoning a case because the theoretically correct vessel would not open",
    "Retrograde access should be planned before the case, not improvised after an hour of failed antegrade attempts",
    "Balloon tamponade from above is how you close a pedal access; squeezing a 2 mm calcified vessel externally thromboses it",
    "The peroneal is often the last vessel standing and can heal a wound through its collaterals to the arch"
  ],
  refs: [
    { t: "Global Vascular Guidelines on the management of chronic limb-threatening ischemia", u: "https://www.jvascsurg.org/article/S0741-5214(19)30321-2/fulltext" },
    { t: "BASIL-2 trial (Lancet 2023)", u: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(23)00462-2/fulltext" },
    { t: "StatPearls: Peripheral Arterial Disease", u: "https://www.ncbi.nlm.nih.gov/books/NBK430745/" }
  ]
},
{
  id: "vasc-atherectomy-ivl",
  name: "Atherectomy and Intravascular Lithotripsy",
  sec: "vasc",
  present: [
    "Heavily calcified lesions where plain or drug-coated balloon angioplasty will recoil, dissect, or fail to deliver drug",
    "Vessel preparation before a drug-coated balloon, so the drug can actually reach the arterial wall",
    "Common femoral and popliteal lesions where a stent is undesirable because of flexion",
    "In-stent restenosis, where debulking has a role"
  ],
  dx: [
    "Assess the calcium pattern on CT and angiography: circumferential and long calcium behaves very differently from eccentric spotty calcium",
    "Intravascular ultrasound characterizes calcium depth and arc better than angiography and changes device selection",
    "Define the reference vessel diameter accurately, because both device families are sized to it",
    "Assess runoff, since distal embolization from atherectomy needs somewhere to go"
  ],
  tx: [
    "Directional, rotational, orbital and laser atherectomy each have different mechanisms and embolization profiles; the choice is largely operator experience",
    "Intravascular lithotripsy delivers acoustic pressure waves that fracture calcium with a low dissection and embolization rate, and is sized 1:1 to the vessel",
    "Embolic protection with a filter is used with atherectomy in vessels with limited runoff",
    "Follow vessel preparation with a drug-coated balloon in the femoropopliteal segment",
    "Dual antiplatelet therapy afterward, then single agent plus a statin"
  ],
  tech: [
    "Cross the lesion intraluminally - atherectomy in a subintimal plane perforates, and this is the single most important precondition",
    "Confirm the intraluminal position distally before introducing any debulking device",
    "For atherectomy, advance slowly with multiple gentle passes rather than forcing a single aggressive one, and respect the manufacturer's runtime",
    "Deploy a filter distally first when using atherectomy in a limb with one runoff vessel",
    "For lithotripsy, size the balloon 1:1 to the reference diameter, inflate to 4 atmospheres, deliver the pulse cycles, then inflate to 6 atmospheres to dilate",
    "Reassess with intravascular ultrasound or angiography between passes rather than at the end",
    "Follow with a drug-coated balloon, using the full dwell time"
  ],
  after: [
    "Watch for distal embolization, which presents as a cool foot with lost signals immediately after the case",
    "Perforation presents as pain and extravasation on the table, and is managed with prolonged balloon tamponade or a covered stent",
    "Document ankle indices and pedal signals",
    "Standard access site surveillance",
    "Duplex surveillance at 1, 6 and 12 months then annually",
    "Antiplatelet and statin lifelong"
  ],
  pearls: [
    "Intraluminal crossing is non-negotiable before debulking - a subintimal atherectomy device makes a hole, not a channel",
    "Lithotripsy has largely displaced atherectomy for concentric calcium because it fractures calcium without removing tissue and without the embolization risk",
    "Vessel preparation exists to let the drug work; skipping it in a calcified lesion is why some drug-coated balloon results disappoint",
    "Have a covered stent in the room. Perforation is uncommon and is an emergency when it happens"
  ],
  refs: [
    { t: "2024 ACC/AHA guideline for the management of lower extremity peripheral artery disease", u: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001251" },
    { t: "StatPearls: Peripheral Arterial Disease", u: "https://www.ncbi.nlm.nih.gov/books/NBK430745/" },
    { t: "SVS clinical practice guidelines", u: "https://www.svs.org/clinical-practice/clinical-practice-guidelines/" }
  ]
},
{
  id: "vasc-cdt-ali",
  name: "Catheter-Directed Thrombolysis for Acute Limb Ischemia",
  sec: "vasc",
  present: [
    "Rutherford class I and IIa acute limb ischemia, where there is time for lysis to work over hours",
    "Class IIb goes straight to surgical revascularization - the limb does not have the hours that lysis needs",
    "Particularly suited to in situ thrombosis of a native artery or a bypass graft, where embolectomy would strip the intima",
    "STILE and TOPAS found lysis comparable to surgery in appropriately selected patients"
  ],
  dx: [
    "The diagnosis is clinical; handheld Doppler for arterial and venous signals distinguishes IIb from III",
    "CTA in class I and IIa to define inflow, the occlusion and the runoff",
    "Screen bleeding risk carefully: recent surgery, stroke, intracranial pathology, active bleeding, recent gastrointestinal hemorrhage",
    "Establish the mechanism - embolus favors embolectomy, in situ thrombosis favors lysis"
  ],
  tx: [
    "Systemic heparin immediately on suspicion, 80 units/kg bolus then infusion, before imaging and before any decision",
    "Alteplase infusion at typically 0.5-1 mg/hour through a multi-sidehole catheter across the thrombus",
    "Monitor fibrinogen; a fall below 100-150 mg/dL predicts bleeding and prompts dose reduction or cessation",
    "Pharmacomechanical adjuncts shorten infusion time and reduce lytic dose",
    "Treat the unmasked underlying lesion at the end - lysis without fixing the cause rethromboses"
  ],
  tech: [
    "Contralateral up-and-over or antegrade ipsilateral access under ultrasound guidance",
    "Traverse the thrombus with a wire and catheter - the ability to cross it is itself a positive predictor of lytic success",
    "Position a multi-sidehole infusion catheter so the sideholes span the entire length of thrombus",
    "Start the infusion and admit to a monitored bed with the sheath secured and the limb immobilized",
    "Re-image at 8-12 hour intervals, advancing or repositioning the catheter as the thrombus resolves",
    "When lysis is complete, treat the underlying stenosis with angioplasty, stenting or a planned bypass",
    "Stop at 48 hours regardless; benefit plateaus and bleeding risk accumulates"
  ],
  after: [
    "Hourly neurovascular observations, with the puncture site inspected each time",
    "Serial fibrinogen and hemoglobin during the infusion",
    "Any new headache or neurologic change during lysis is an intracranial hemorrhage until a CT says otherwise - stop the infusion first, scan second",
    "Anticipate compartment syndrome on reperfusion of a limb ischemic for hours, with a low threshold for fasciotomy",
    "Continue therapeutic anticoagulation after lysis, then decide long-term therapy based on the mechanism",
    "Investigate the embolic source with echocardiography, rhythm monitoring and aortic imaging when the mechanism was embolic"
  ],
  pearls: [
    "Class IIb is not a lysis patient - the motor deficit is the clock running out, and hours of infusion is time the limb does not have",
    "Being able to cross the thrombus with a wire predicts that lysis will work; failure to cross usually means it will not",
    "Intracranial hemorrhage is the complication that ends the discussion, so the bleeding history is taken properly and not skimmed",
    "Finish the job: lysis reveals the lesion that caused the thrombosis, and leaving it untreated guarantees a return visit"
  ],
  refs: [
    { t: "ESVS 2020 clinical practice guidelines on the management of acute limb ischaemia", u: "https://www.ejves.com/article/S1078-5884(19)32626-8/fulltext" },
    { t: "2024 ACC/AHA guideline for the management of lower extremity peripheral artery disease", u: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001251" },
    { t: "StatPearls: Acute Arterial Occlusion", u: "https://www.ncbi.nlm.nih.gov/books/NBK441851/" }
  ]
},
{
  id: "vasc-embolectomy",
  name: "Surgical Thromboembolectomy",
  sec: "vasc",
  present: [
    "Rutherford class IIb acute limb ischemia - a limb with a motor deficit that needs flow restored now, not over hours",
    "Embolic occlusion in a patient with atrial fibrillation, a recent myocardial infarction, or a proximal aneurysmal source",
    "A saddle embolus at the aortic bifurcation, presenting with bilateral limb ischemia",
    "Class III with fixed mottling, rigor and absent venous signals is not revascularized - reperfusing dead muscle kills the patient"
  ],
  dx: [
    "Clinical diagnosis with handheld Doppler; imaging must not delay the operating room in class IIb",
    "Abrupt onset with no claudication history and a normal contralateral pulse examination points to embolus",
    "Gradual onset on a background of known peripheral arterial disease points to in situ thrombosis, which needs bypass rather than a balloon catheter",
    "Look for the source afterward - echocardiography, rhythm monitoring, aortic and popliteal imaging"
  ],
  tx: [
    "Systemic heparin 80 units/kg immediately on suspicion, before imaging and before theatre",
    "Local anesthesia with sedation is often sufficient for a femoral embolectomy in a frail patient",
    "Have thrombolytic available for intraoperative intra-arterial lysis of residual distal thrombus",
    "Anticipate reperfusion injury: hyperkalemia, myoglobinuria, acidosis - warn anesthesia before restoring flow",
    "Anticoagulate after the operation, and address the source"
  ],
  tech: [
    "Longitudinal or transverse groin incision, control common, superficial and profunda femoral arteries",
    "Transverse arteriotomy in a relatively healthy segment - it closes without narrowing and avoids a patch in a normal artery",
    "Pass the Fogarty catheter proximally first to confirm inflow, then distally down each of the superficial femoral and profunda",
    "Inflate the balloon only as you withdraw, and only enough to feel wall contact - overinflation strips the intima and creates the lesion you were avoiding",
    "Pass distally repeatedly until no further thrombus returns and there is good backbleeding",
    "Completion angiography before closing is essential; residual tibial thrombus is the commonest cause of early failure and is invisible without it",
    "Intra-arterial thrombolysis on the table for residual distal thrombus that the catheter cannot reach",
    "Close the arteriotomy with 6-0 polypropylene, patching if the artery is diseased"
  ],
  after: [
    "Document pedal Doppler signals immediately and hourly",
    "Send for potassium, creatine kinase and myoglobin; treat hyperkalemia and rhabdomyolysis aggressively with fluids",
    "Have a genuinely low threshold for four-compartment fasciotomy - this is the decision made in theatre, not on the ward at 3 am",
    "Therapeutic anticoagulation postoperatively, transitioning to long-term therapy based on the source",
    "Complete the source workup before discharge; the second embolus is preventable and the first one bought you the chance",
    "Cardiology referral for atrial fibrillation management and long-term anticoagulation"
  ],
  pearls: [
    "Embolectomy for an embolus, bypass for a thrombosis - a Fogarty dragged through a diseased native artery strips the intima and creates a new occlusion",
    "Completion angiography is the step most often skipped and most often needed; residual tibial thrombus is why the limb is cold again at midnight",
    "Inflate the balloon on withdrawal only, and gently - the arterial injury from an overinflated Fogarty is permanent",
    "A limb with fixed mottling that does not blanch and absent venous signals is dead; revascularizing it is how the patient dies of reperfusion"
  ],
  refs: [
    { t: "ESVS 2020 clinical practice guidelines on the management of acute limb ischaemia", u: "https://www.ejves.com/article/S1078-5884(19)32626-8/fulltext" },
    { t: "StatPearls: Acute Arterial Occlusion", u: "https://www.ncbi.nlm.nih.gov/books/NBK441851/" },
    { t: "2024 ACC/AHA guideline for the management of lower extremity peripheral artery disease", u: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001251" }
  ]
},
{
  id: "vasc-mesenteric-bypass",
  name: "Antegrade and Retrograde Mesenteric Bypass",
  sec: "vasc",
  present: [
    "Chronic mesenteric ischemia with the classic triad of postprandial pain, food fear and weight loss, plus two-vessel disease",
    "Preferred over stenting in younger, fitter patients because it is more durable",
    "Acute-on-chronic thrombosis of the superior mesenteric artery, where the ostial lesion must be bypassed rather than cleared",
    "Failed or repeatedly restenosing mesenteric stents"
  ],
  dx: [
    "CTA showing ostial calcified stenoses of the celiac axis and superior mesenteric artery",
    "The diagnosis is clinical plus anatomic - asymptomatic mesenteric stenosis is common in the elderly and must not be operated on imaging alone",
    "Assess the supraceliac aorta and the infrarenal aorta or iliacs as inflow options; heavy calcification decides which",
    "Nutritional assessment; these patients are frequently malnourished and benefit from preoperative optimization"
  ],
  tx: [
    "Revascularizing the superior mesenteric artery alone is usually sufficient; two-vessel reconstruction is not routinely required",
    "Antegrade bypass from the supraceliac aorta gives better flow dynamics and less kinking, but requires a clean supraceliac segment and a supraceliac clamp",
    "Retrograde bypass from the infrarenal aorta or iliac is easier and safer in the frail patient, at the cost of a graft that can kink",
    "Vein or prosthetic; prosthetic is used in a clean elective field, vein when bowel has been resected or contamination is present",
    "Cautious refeeding to avoid refeeding syndrome"
  ],
  tech: [
    "Midline laparotomy; for antegrade bypass, divide the gastrohepatic ligament and expose the supraceliac aorta at the crura",
    "For retrograde bypass, expose the infrarenal aorta or right common iliac and the superior mesenteric artery at the root of the mesentery below the pancreas",
    "Identify the superior mesenteric artery by lifting the transverse colon and following the middle colic artery back to its origin",
    "Antegrade: partial-occlusion clamp on the supraceliac aorta, proximal anastomosis, then tunnel behind the pancreas to the superior mesenteric artery",
    "Retrograde: configure the graft in a gentle C-loop rather than a straight line, so it does not kink when the viscera return to the abdomen",
    "Test the lie of a retrograde graft with the bowel replaced before you close - a graft that looks perfect with the abdomen open can kink shut when it is closed",
    "Assess bowel viability at the end and plan a second-look laparotomy if any segment is marginal"
  ],
  after: [
    "Intensive care with close attention to lactate, acidosis and abdominal examination",
    "Second-look laparotomy at 24-48 hours if any bowel was marginal - book it rather than deciding later",
    "Cautious refeeding with attention to phosphate, magnesium and potassium",
    "Duplex surveillance of the graft at 1, 6 and 12 months then annually; a failing mesenteric graft is silent until it thromboses",
    "Antiplatelet and statin lifelong",
    "Nutritional follow-up; weight gain is the outcome the patient cares about"
  ],
  pearls: [
    "Check the lie of a retrograde graft with the abdomen closed down over the bowel - kinking is the specific failure mode of the retrograde configuration",
    "Do not operate on imaging alone; asymptomatic mesenteric stenosis is common and the triad is what makes the diagnosis",
    "The superior mesenteric artery is the vessel that matters; a single-vessel reconstruction to it relieves symptoms in most patients",
    "Book the second look at the first operation - deciding at 2 am whether to reopen is a worse decision than the one you already made"
  ],
  refs: [
    { t: "SVS clinical practice guidelines for the management of chronic mesenteric ischemia", u: "https://www.jvascsurg.org/article/S0741-5214(20)32446-9/fulltext" },
    { t: "ESVS 2017 clinical practice guidelines on the management of the diseases of mesenteric arteries and veins", u: "https://www.ejves.com/article/S1078-5884(17)30062-4/fulltext" },
    { t: "StatPearls: Chronic Mesenteric Ischemia", u: "https://www.ncbi.nlm.nih.gov/books/NBK430748/" }
  ]
}
];
