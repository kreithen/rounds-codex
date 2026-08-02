/* Vascular Surgery PROCEDURES - batch 2 of 10 (procedures 6-10).
 * Endovascular aortic.
 * Extended schema: {id,name,sec,present[],dx[],tx[],tech[],after[],pearls[],refs[{t,u}]}  sec="vasc"
 */
const RES_VASC_B2 = [
{
  id: "vasc-evar",
  name: "Standard Infrarenal EVAR",
  sec: "vasc",
  present: [
    "Elective infrarenal aneurysm at threshold with anatomy that meets the instructions for use",
    "The default for most patients over about 70 and for anyone whose cardiopulmonary reserve makes a laparotomy unattractive",
    "EVAR-1 and DREAM showed lower perioperative mortality than open repair, with the curves converging by 2-3 years",
    "Also the endovascular-first strategy for rupture, which IMPROVE supported on cost, discharge to home and 3-year survival"
  ],
  dx: [
    "CTA with 1 mm slices and centerline reconstruction - eyeballing an axial series undersizes the neck and misjudges angulation",
    "Neck criteria: length 10-15 mm or more, diameter within device range, angulation under 60 degrees, under 2 mm thrombus and calcification, no reverse taper",
    "Iliac access: diameter, tortuosity and calcification decide whether a percutaneous approach will work or a conduit is needed",
    "Distal seal in the common iliac needs 10-15 mm of parallel wall; aneurysmal iliacs need extension or a branch device"
  ],
  tx: [
    "Percutaneous access with preclose sutures where the femoral artery is soft and unscarred, cutdown where it is not",
    "Heparinize to an activated clotting time over 250 seconds once access is established",
    "Size the main body 10-20% above the neck diameter - undersizing causes type Ia endoleak, gross oversizing causes infolding",
    "Preserve at least one internal iliac artery; embolize the other only when necessary and never both",
    "Have a proximal cuff, an extension limb and a snare available before you start"
  ],
  tech: [
    "Bilateral common femoral access under ultrasound guidance over the femoral head, then stiff wires into the thoracic aorta",
    "Marker pigtail from the contralateral side for the aortogram; angle the C-arm to lay out the lowest renal artery perpendicular",
    "Deploy the main body with the lowest renal artery as the target, releasing slowly and checking position on repeated angiography before committing",
    "Cannulate the contralateral gate from below, confirm you are inside the graft by spinning a pigtail freely, and only then advance the limb",
    "Extend limbs to the iliac landing zones, keeping 10-15 mm of seal and preserving the hypogastric origin",
    "Balloon-mold the proximal seal, the flow divider and the distal seals gently - aggressive ballooning of a dissected or fragile aorta is how you cause the problem you are treating",
    "Completion angiogram in two projections looking specifically for type I and type III leaks, which are treated on the table"
  ],
  after: [
    "Most patients go to a ward bed and eat the same day; length of stay is typically 1-2 days",
    "Check pedal pulses or Doppler signals immediately - limb kink or thromboembolism presents in the first hours",
    "Post-implantation syndrome with fever and raised inflammatory markers in the first days is common and self-limiting; do not treat it as infection",
    "Groin access complications are the commonest problem: hematoma, pseudoaneurysm, and rarely retroperitoneal bleed from a high stick",
    "CTA at 1 month, then annual duplex if there is no endoleak and the sac is stable",
    "Lifelong surveillance is the deal - counsel it explicitly, because late rupture happens overwhelmingly in patients lost to follow-up"
  ],
  pearls: [
    "The neck is the operation. A short, angulated, conical or thrombus-lined neck will fail eventually no matter how good the deployment looks on the table",
    "Confirm you are inside the main body before advancing the contralateral limb - deploying a limb outside the graft is a catastrophe that a free-spinning pigtail would have prevented",
    "Treat every type I and type III leak on the table; a plan to watch it is a plan to reoperate",
    "A patient who will not attend surveillance may genuinely be better served by an open repair"
  ],
  refs: [
    { t: "SVS practice guidelines on the care of patients with an abdominal aortic aneurysm", u: "https://www.jvascsurg.org/article/S0741-5214(17)32369-8/fulltext" },
    { t: "ESVS 2024 clinical practice guidelines on the management of abdominal aorto-iliac artery aneurysms", u: "https://www.ejves.com/article/S1078-5884(23)00758-8/fulltext" },
    { t: "StatPearls: Endovascular Aneurysm Repair", u: "https://www.ncbi.nlm.nih.gov/books/NBK560506/" }
  ]
},
{
  id: "vasc-fbevar",
  name: "Fenestrated and Branched EVAR",
  sec: "vasc",
  present: [
    "Juxtarenal, pararenal and thoracoabdominal aneurysms where there is no infrarenal neck to seal in",
    "The alternative to open thoracoabdominal repair in patients who would not survive a thoracoabdominal incision",
    "Custom devices need 6-8 weeks of manufacturing lead time, which excludes the symptomatic or rapidly expanding aneurysm",
    "Off-the-shelf multibranch devices exist for standard visceral configurations and remove that wait"
  ],
  dx: [
    "Thin-slice CTA with centerline reconstruction and clock-face positions and distances for every target vessel - this is the planning document the device is built from",
    "Assess each target for ostial stenosis, early branching and diameter, because a bridging stent needs somewhere to land",
    "Access vessel calibre for large-bore sheaths, plus upper extremity access planning for branch cannulation",
    "Renal function, since contrast load is substantial and these are often long cases"
  ],
  tx: [
    "Spinal drain for extensive coverage, with the same protection package as an open thoracoabdominal repair: cerebrospinal fluid pressure at or below 10 mmHg, mean arterial pressure 85-100, avoid anemia",
    "Staged repair for extensive coverage, allowing collateral spinal networks to develop between stages",
    "Balloon-expandable covered stents as the bridging stents into fenestrations; self-expanding covered stents into directional branches",
    "Meticulous contrast discipline: dilute contrast, CO2 where possible, and fusion imaging to cut fluoroscopy and dye",
    "Dual antiplatelet therapy after the case to protect the bridging stents"
  ],
  tech: [
    "Bilateral femoral access plus upper extremity access, commonly left brachial or axillary, for antegrade branch cannulation",
    "Deploy the fenestrated body partially, rotating to align the fenestrations with the target ostia using the device markers under fusion overlay",
    "Cannulate each target vessel through its fenestration, place a sheath, then deploy the bridging covered stent and flare its intragraft portion",
    "Directional branches are cannulated from above and stented with a self-expanding covered stent, which tolerates the angle better than a balloon-expandable device",
    "Sequence matters: secure the renals before completing the distal seal, because losing a renal after the graft is fully deployed is very hard to recover",
    "Complete the repair distally into the infrarenal aorta or iliacs, then angiogram every branch individually before finishing"
  ],
  after: [
    "Intensive care with hourly lower-limb neurologic checks; delayed paraplegia appears hours to days later and is a spinal drain emergency",
    "Keep the drain 48-72 hours with strict pressure targets, and do not remove it while the patient is still at risk",
    "Watch renal function closely; a branch that occludes early presents as a creatinine rise, not as pain",
    "CTA before discharge and at 1 month, then annually - branch patency is the thing being surveilled, not just the sac",
    "Reintervention is common and expected; counsel it as part of the treatment, not as a complication",
    "Lifelong dual antiplatelet or antiplatelet therapy depending on the bridging stents used"
  ],
  pearls: [
    "The plan is the operation - a millimetre error in the planning CT becomes a branch you cannot cannulate on the table",
    "Fusion imaging and CO2 angiography together transform the contrast and radiation burden of these cases, and both should be routine rather than optional",
    "Secure the renals before you finish distally; the order of the steps is what makes a recoverable problem unrecoverable",
    "This operation belongs in centers doing volume - the learning curve is real and measured in dozens of cases"
  ],
  refs: [
    { t: "SVS clinical practice guidelines", u: "https://www.svs.org/clinical-practice/clinical-practice-guidelines/" },
    { t: "2022 ACC/AHA guideline for the diagnosis and management of aortic disease", u: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001106" },
    { t: "StatPearls: Endovascular Aneurysm Repair", u: "https://www.ncbi.nlm.nih.gov/books/NBK560506/" }
  ]
},
{
  id: "vasc-tevar",
  name: "Thoracic Endovascular Aortic Repair",
  sec: "vasc",
  present: [
    "Descending thoracic aneurysm at 5.5 cm or above in an endovascular candidate",
    "Complicated type B dissection with malperfusion or rupture, and uncomplicated type B with high-risk features",
    "Blunt thoracic aortic injury grade 3 and 4, where TEVAR has replaced open repair and cut mortality and paraplegia substantially. The 2026 SVS focused update recommends definitive NONOPERATIVE management for grades 1 and 2, so those are not TEVAR patients",
    "Penetrating aortic ulcer, intramural hematoma with high-risk features, and mycotic aneurysm as a bridge"
  ],
  dx: [
    "CTA of the whole aorta with centerline; the arch determines the proximal landing zone and Ishimaru zones 0 through 4 describe it",
    "At least 2 cm of healthy proximal and distal seal - in dissection, seal into non-dissected aorta",
    "Assess the left subclavian, the vertebral dominance, and any left internal mammary coronary graft before planning zone 2 coverage",
    "Iliofemoral access for a large sheath, with a conduit planned if the vessels are small or calcified"
  ],
  tx: [
    "Left subclavian revascularization before covering zone 2 in elective cases - it lowers stroke and spinal cord ischemia and is a class I recommendation",
    "Spinal drain for extensive coverage, prior aortic repair, or planned hypogastric compromise; permissive hypertension after",
    "Device oversizing 10-20% for degenerative aneurysm, but only 0-10% in dissection and in trauma, where the aorta is normal calibre",
    "Rapid pacing or pharmacologic hypotension at deployment to prevent windsock displacement",
    "Antibiotic prophylaxis and, in the trauma patient, coordination with the neurosurgical and general trauma priorities"
  ],
  tech: [
    "Femoral access, usually surgical cutdown for the large sheath, with a stiff wire positioned in the ascending aorta",
    "Left brachial access for an arch marker pigtail is useful in zone 0-2 work",
    "Steep left anterior oblique projection to lay out the arch and separate the great vessel origins",
    "Deploy from proximal to distal with the pressure dropped, releasing the proximal seal precisely at the intended zone",
    "Gentle molding only - in dissection and trauma do not balloon the proximal seal at all, because retrograde type A dissection is the feared complication",
    "Completion angiography in a matched projection, looking for type Ia leak and for the position of the left subclavian origin"
  ],
  after: [
    "Hourly neurologic checks of the lower limbs; a new deficit means drain cerebrospinal fluid, raise the pressure, correct anemia - within minutes, not hours",
    "Watch for stroke, which is the arch complication, and for left arm ischemia or vertebrobasilar symptoms after subclavian coverage",
    "Post-implantation syndrome is common and self-limiting",
    "CTA before discharge, at 1 month, 6 months and then annually - in dissection the surveillance is about false lumen thrombosis and aortic remodelling",
    "Blood pressure control and beta blockade lifelong in dissection and connective tissue disease",
    "Counsel that a connective tissue disorder makes this a bridge rather than a destination"
  ],
  pearls: [
    "Never cover the left subclavian in a patient with a patent left internal mammary graft or a dominant left vertebral without revascularizing first",
    "Oversizing rules are different in dissection and trauma - the aorta is normal size and a 20% oversize causes collapse, infolding or retrograde dissection",
    "Delayed paraplegia after an uneventful case is the thing the ward must be primed for; the protocol should be on the wall",
    "In trauma, impulse control with beta blockade in the emergency department matters more than how fast the patient reaches the table - and for a stable grade 3 the 2026 SVS update suggests delaying TEVAR beyond 24 hours so traumatic brain and solid organ injury are addressed first"
  ],
  refs: [
    { t: "2022 ACC/AHA guideline for the diagnosis and management of aortic disease", u: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001106" },
    { t: "SVS clinical practice guideline on blunt thoracic aortic injury: focused update (JVS 2026)", u: "https://www.jvascsurg.org/article/S0741-5214(26)00110-2/fulltext" },
    { t: "StatPearls: Thoracic Endovascular Aortic Repair", u: "https://www.ncbi.nlm.nih.gov/books/NBK499990/" }
  ]
},
{
  id: "vasc-endoleak-reintervention",
  name: "Endoleak Reintervention",
  sec: "vasc",
  present: [
    "A growing sac after EVAR is the indication, whatever the imaging shows or fails to show",
    "Type I and type III are treated whenever found - they pressurize the sac at systemic pressure",
    "Type II is treated when the sac grows more than 5 mm, not on its presence alone",
    "Late rupture after EVAR is usually type Ia or type III, and usually in a patient who stopped attending surveillance"
  ],
  dx: [
    "CTA with delayed phase - a single arterial phase misses type II and slow type Ia leaks entirely",
    "Contrast-enhanced ultrasound is at least as sensitive for type II and spares contrast and radiation in serial follow-up",
    "Classify before treating: Ia proximal seal, Ib distal seal, II lumbar or inferior mesenteric backfill, III component separation or fabric tear, IV porosity, V endotension",
    "For a sac growing with no visible leak, repeat with a dedicated protocol before accepting endotension - it is usually a missed leak"
  ],
  tx: [
    "Type Ia: proximal cuff, balloon molding, endoanchors, or conversion to a fenestrated repair when the neck has degenerated beyond rescue",
    "Type Ib: extend the limb distally into a healthy iliac segment, embolizing the hypogastric if the seal must go past it",
    "Type II: transarterial embolization via the inferior mesenteric or iliolumbar route, or direct translumbar sac puncture, occluding the sac and both ends of the feeder",
    "Type III: reline with a bridging component - usually straightforward and always urgent",
    "Open conversion with explantation when nothing endovascular will work, accepting a mortality several times that of a primary open repair"
  ],
  tech: [
    "Diagnostic angiography first with selective runs - the mechanism is often not what the CT suggested",
    "For type Ia, place the cuff as high as the renal arteries allow and mold it; add endoanchors when the neck is short but otherwise healthy",
    "Translumbar puncture for type II is done prone under CT or fluoroscopic guidance, entering the sac from the left, and both the nidus and the feeding vessels are embolized",
    "Coiling only the distal side of a feeder leaves it filling retrogradely; occlude front and back door",
    "For type III, identify the separation on multiple projections before relining, because the leak is often at a junction that looks intact on one view",
    "Complete with a delayed-phase angiogram, not just an arterial run"
  ],
  after: [
    "CTA at 1 month after any reintervention to confirm the leak has resolved and the sac is stable or shrinking",
    "Sac behavior is the outcome measure, not the disappearance of contrast - a shrinking sac with a persistent type II is a success",
    "Return to the normal surveillance schedule, but with a lower threshold to reimage",
    "Post-embolization syndrome after sac embolization is common and self-limiting",
    "Reinforce the surveillance conversation, since this patient has already demonstrated that their repair needs watching"
  ],
  pearls: [
    "Chasing a type II in the first 6 months is usually wrong - most seal spontaneously and intervention has not been shown to change outcomes in that window",
    "Endotension is nearly always a leak the protocol was not designed to find; repeat with delayed phases before believing it",
    "The most dangerous endoleak is in the patient who stopped coming to clinic, and compliance falls off sharply after 2 years",
    "Know when to convert - repeated failed endovascular attempts in a degenerating neck cost the patient the chance of an elective open repair"
  ],
  refs: [
    { t: "SVS practice guidelines on the care of patients with an abdominal aortic aneurysm", u: "https://www.jvascsurg.org/article/S0741-5214(17)32369-8/fulltext" },
    { t: "StatPearls: Endoleak", u: "https://www.ncbi.nlm.nih.gov/books/NBK531487/" },
    { t: "ESVS 2024 clinical practice guidelines on the management of abdominal aorto-iliac artery aneurysms", u: "https://www.ejves.com/article/S1078-5884(23)00758-8/fulltext" }
  ]
},
{
  id: "vasc-iliac-branch",
  name: "Iliac Branch Device and Hypogastric Preservation",
  sec: "vasc",
  present: [
    "Aortoiliac aneurysm where the common iliac is too aneurysmal to provide a distal seal",
    "Isolated common iliac artery aneurysm at 3-3.5 cm or above",
    "The alternative to hypogastric embolization, which causes buttock claudication in a third and erectile dysfunction in a substantial minority",
    "Preservation matters most in bilateral disease, in a patient with prior colonic surgery, and in anyone whose spinal collateral supply is already compromised"
  ],
  dx: [
    "CTA with centerline through the iliac segment: common iliac length and diameter, external iliac diameter, and the internal iliac landing zone",
    "The internal iliac must have a non-aneurysmal segment of adequate length and calibre to receive a bridging stent",
    "Assess the common iliac bifurcation angle and the tortuosity, both of which decide whether the device can be delivered and the branch cannulated",
    "Confirm the contralateral hypogastric status - if it is already occluded, preserving this one moves from desirable to necessary"
  ],
  tx: [
    "Preserve at least one internal iliac artery in every aortoiliac repair; bilateral sacrifice causes buttock claudication and, rarely, colonic or spinal cord ischemia",
    "Where a branch device will not fit, options are a bell-bottom limb for a modestly dilated common iliac, or external-to-internal iliac bypass",
    "Sandwich and parallel-graft techniques are described but carry gutter endoleak risk and are a fallback",
    "Full heparinization and dual antiplatelet therapy afterward to protect the branch",
    "Plan the aortic main body deployment high enough that the ipsilateral limb can reach the branch device"
  ],
  tech: [
    "Deploy the iliac branch device first, from the ipsilateral femoral, with the side branch oriented toward the internal iliac origin",
    "Cannulate the internal iliac from the contralateral femoral via an up-and-over approach, or from the brachial when the bifurcation angle is hostile",
    "Advance a long sheath over the aortic bifurcation into the branch, then into the internal iliac",
    "Deploy a self-expanding covered bridging stent into the internal iliac with generous overlap into the branch",
    "Complete the aortic main body and connect its ipsilateral limb into the iliac branch device with adequate overlap",
    "Angiogram the internal iliac specifically in an ipsilateral oblique projection at the end - a straight anteroposterior run hides a kinked or narrowed bridging stent"
  ],
  after: [
    "Ask specifically about buttock claudication and, in men, about erectile function at follow-up; neither is volunteered",
    "CTA at 1 month with attention to branch patency, then the standard EVAR surveillance schedule",
    "Branch occlusion is usually silent when the contralateral hypogastric is patent, which is why imaging surveillance rather than symptoms drives detection",
    "Dual antiplatelet therapy for 1-3 months, then lifelong single agent",
    "Watch for type Ib leak at the external iliac seal, which is the other failure mode of this construct"
  ],
  pearls: [
    "Ask about buttock claudication and erectile function before the operation as well as after - you cannot attribute a symptom you never documented",
    "The up-and-over cannulation is the hard step; if the bifurcation angle is acute, plan brachial access from the start rather than improvising after an hour of trying",
    "A bell-bottom limb is a legitimate, simpler answer for a modestly dilated common iliac and is often forgotten in favor of a branch device",
    "If the contralateral hypogastric is already gone, preserving this one is not a refinement, it is the operation"
  ],
  refs: [
    { t: "SVS practice guidelines on the care of patients with an abdominal aortic aneurysm", u: "https://www.jvascsurg.org/article/S0741-5214(17)32369-8/fulltext" },
    { t: "ESVS 2024 clinical practice guidelines on the management of abdominal aorto-iliac artery aneurysms", u: "https://www.ejves.com/article/S1078-5884(23)00758-8/fulltext" },
    { t: "StatPearls: Iliac Artery Aneurysm", u: "https://www.ncbi.nlm.nih.gov/books/NBK442025/" }
  ]
}
];
