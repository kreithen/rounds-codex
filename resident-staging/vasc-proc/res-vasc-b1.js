/* Vascular Surgery PROCEDURES - batch 1 of 10 (procedures 1-5).
 * Open aortic.
 * Extended schema: {id,name,sec,present[],dx[],tx[],tech[],after[],pearls[],refs[{t,u}]}  sec="vasc"
 */
const RES_VASC_B1 = [
{
  id: "vasc-open-aaa",
  name: "Open Infrarenal Abdominal Aortic Aneurysm Repair",
  sec: "vasc",
  present: [
    "Elective repair at 5.5 cm in men, 5.0 cm in women, growth over 0.5 cm in 6 months, or symptoms at any size",
    "Preferred over EVAR in younger, low-risk patients where the durability matters over decades",
    "The answer when the neck is hostile - short, angulated, conical, heavily thrombosed or calcified - and will not hold an endovascular seal",
    "Also the operation for a failed or infected endograft requiring explantation"
  ],
  dx: [
    "CTA with 3D reconstruction defining the neck, the iliac arteries, renal and accessory renal anatomy, and the inferior mesenteric artery",
    "Identify a retroaortic or circumaortic left renal vein and a horseshoe kidney before opening, not during",
    "Cardiac risk assessment and pulmonary function; this is an elevated-risk operation and the patient needs to be optimized rather than cleared",
    "Note the state of the hypogastric arteries and the inferior mesenteric artery, because colonic perfusion depends on them"
  ],
  tx: [
    "Group and save with blood available, cell salvage set up, and a warming strategy in place before incision",
    "Systemic heparin 80-100 units/kg before clamping, with activated clotting time checked",
    "Tube graft for isolated aortic disease, bifurcated graft when the iliacs are aneurysmal or occluded",
    "Reimplant the inferior mesenteric artery if backbleeding is poor, the hypogastrics are compromised, or the sigmoid looks dusky",
    "Epidural or a transversus abdominis plane block as part of a multimodal analgesic plan"
  ],
  tech: [
    "Midline transperitoneal or left retroperitoneal approach; the retroperitoneal route is kinder to the pulmonary patient and better for a juxtarenal neck",
    "Eviscerate the small bowel to the right, incise the retroperitoneum to the left of the fourth part of the duodenum, and divide the ligament of Treitz",
    "Expose the neck to the left renal vein, which may need mobilizing or, rarely, dividing near the cava with the collaterals preserved",
    "Control the iliacs; clamp distal first then proximal to reduce distal embolization",
    "Open the sac longitudinally, evacuate thrombus, and oversew the lumbar arteries from within - do not chase them from outside",
    "Sew the proximal anastomosis with 3-0 polypropylene, taking full-thickness bites through all layers, and test it before moving distally",
    "Flush proximally and distally before completing the last anastomosis, and warn anesthesia before releasing the clamp",
    "Close the aneurysm sac and the retroperitoneum over the graft so no bowel touches prosthetic"
  ],
  after: [
    "Declamping hypotension is expected - release the clamp slowly, one limb at a time, in communication with anesthesia",
    "Intensive care overnight in most; watch for myocardial ischemia, which is the commonest cause of death",
    "Monitor for colonic ischemia: bloody diarrhea in the first 48 hours mandates urgent sigmoidoscopy, not observation",
    "Watch for abdominal compartment syndrome with bladder pressures if the abdomen is tight or the patient is oliguric",
    "Ileus is normal for a few days; a prolonged ileus with pain is not",
    "Lifelong follow-up is not required in the way it is after EVAR, but surveillance imaging at 5 years is reasonable for para-anastomotic aneurysm"
  ],
  pearls: [
    "Get proximal control you are sure of before you open the sac - a clamp that slips off a diseased neck in a full sac is the worst moment in the operation",
    "Bleeding after the anastomoses look dry is almost always a lumbar or the inferior mesenteric artery, so look inside the sac before you look at your suture line",
    "The left renal vein is the structure that gets injured; know where it is and whether it is retroaortic before you start dissecting the neck",
    "Bloody diarrhea after open aortic repair is ischemic colitis until sigmoidoscopy says otherwise, and delay in that diagnosis is lethal"
  ],
  refs: [
    { t: "SVS practice guidelines on the care of patients with an abdominal aortic aneurysm", u: "https://www.jvascsurg.org/article/S0741-5214(17)32369-8/fulltext" },
    { t: "StatPearls: Abdominal Aortic Aneurysm Repair", u: "https://www.ncbi.nlm.nih.gov/books/NBK470237/" },
    { t: "ESVS 2024 clinical practice guidelines on the management of abdominal aorto-iliac artery aneurysms", u: "https://www.ejves.com/article/S1078-5884(23)00758-8/fulltext" }
  ]
},
{
  id: "vasc-open-raaa",
  name: "Open Repair of Ruptured Abdominal Aortic Aneurysm",
  sec: "vasc",
  present: [
    "Rupture with anatomy unsuitable for endovascular repair, or where no endovascular capability is immediately available",
    "Free intraperitoneal rupture with ongoing hemorrhage, where speed to proximal control is everything",
    "Conversion after a failed attempt at endovascular repair of a rupture",
    "The classic triad of pain, hypotension and a pulsatile mass is present in fewer than half"
  ],
  dx: [
    "CTA if the patient can tolerate it - it decides open versus endovascular and is worth the minutes in anyone not in extremis",
    "Do not delay for laboratory results; a normal hemoglobin early is expected and is not reassuring",
    "Bedside ultrasound confirms the aneurysm but cannot exclude rupture",
    "Activate massive transfusion and notify theatre and intensive care before the patient leaves the emergency department"
  ],
  tx: [
    "Permissive hypotension to a systolic around 70-90 mmHg, or the lowest pressure that maintains consciousness - aggressive resuscitation dislodges the clot",
    "Balanced transfusion in 1:1:1 ratios, with cell salvage running",
    "Aggressive rewarming from the start; the lethal triad of hypothermia, acidosis and coagulopathy is what kills these patients",
    "Consider an occlusion balloon via femoral access placed before induction as a bridge to open control",
    "Heparin is often withheld or given in reduced dose in the coagulopathic ruptured patient"
  ],
  tech: [
    "Prep and drape from nipples to knees with the surgeon scrubbed BEFORE induction - sympathetic tone is holding the pressure up and it vanishes at induction",
    "Long midline incision, sweep the bowel to the right, and go straight for the neck",
    "Supraceliac control first if the infrarenal neck is obscured by hematoma: divide the gastrohepatic ligament, retract the esophagus left, and clamp the aorta against the spine at the crura",
    "Move the clamp down to an infrarenal position as soon as the neck is dissected - supraceliac clamp time is renal and visceral ischemia time",
    "Open the sac, control backbleeding lumbars from within, and proceed as for an elective repair with a tube graft wherever possible",
    "Tube graft over bifurcated whenever the iliacs permit, because it is faster and speed is the operation"
  ],
  after: [
    "Anticipate abdominal compartment syndrome - measure bladder pressures routinely and have a low threshold for leaving the abdomen open with a temporary closure",
    "Expect acute kidney injury, particularly after supraceliac clamping, and support rather than chase the creatinine",
    "Correct coagulopathy with point-of-care testing rather than formula-driven product",
    "Colonic ischemia is commoner after rupture than after elective repair; bloody diarrhea means sigmoidoscopy",
    "Prolonged ventilation and multiorgan support are the norm, and the family conversation should be honest from day one"
  ],
  pearls: [
    "Do not let anesthesia induce until you are scrubbed, draped and holding a knife - this single piece of sequencing saves lives and is frequently rushed",
    "Supraceliac control is fast and safe when you need it, and every minute it stays on costs kidney and gut; announce the clamp time out loud",
    "Leaving the abdomen open is not failure - closing a tight abdomen after rupture repair causes the compartment syndrome that then kills the patient",
    "A patient in arrest on arrival from a free rupture is not salvaged by heroics, and that decision is made early and honestly"
  ],
  refs: [
    { t: "IMPROVE trial: endovascular strategy for ruptured AAA, 3-year outcomes (BMJ)", u: "https://www.bmj.com/content/359/bmj.j4859" },
    { t: "SVS practice guidelines on the care of patients with an abdominal aortic aneurysm", u: "https://www.jvascsurg.org/article/S0741-5214(17)32369-8/fulltext" },
    { t: "StatPearls: Ruptured Abdominal Aortic Aneurysm", u: "https://www.ncbi.nlm.nih.gov/books/NBK430747/" }
  ]
},
{
  id: "vasc-aortobifem",
  name: "Aortobifemoral Bypass",
  sec: "vasc",
  present: [
    "Diffuse aortoiliac occlusive disease with lifestyle-limiting claudication or chronic limb-threatening ischemia not amenable to endovascular therapy",
    "Young patients with extensive TASC D disease, where durability justifies the physiologic cost",
    "Leriche syndrome with buttock claudication, erectile dysfunction and absent femoral pulses",
    "The most durable inflow operation available, with 85-90% patency at 5 years"
  ],
  dx: [
    "CTA of the aorta and runoff, assessing the juxtarenal aorta for the proximal anastomosis and the profunda origins for the distal",
    "Assess infrainguinal disease - inflow is corrected first, and a substantial number need nothing distal afterward",
    "Cardiac and pulmonary optimization; this is a bigger physiologic insult than an aneurysm repair in a frailer population",
    "Document erectile function preoperatively, because the pelvic autonomic nerves are at risk and the conversation is easier before than after"
  ],
  tx: [
    "Bifurcated knitted or woven Dacron, or PTFE, sized to the outflow rather than to the aorta",
    "Systemic heparin before clamping",
    "Preserve at least one internal iliac artery; bilateral hypogastric compromise causes buttock claudication and, rarely, colonic or spinal ischemia",
    "Antibiotic prophylaxis and meticulous groin technique - the groin anastomosis is where the graft gets infected",
    "Consider a concurrent profundaplasty if the profunda origin is stenotic, since the profunda is the outflow that keeps the graft open"
  ],
  tech: [
    "Midline abdominal incision plus bilateral longitudinal or oblique groin incisions; make the groin incisions first and tunnel before opening the abdomen if you prefer",
    "End-to-end proximal anastomosis is preferred where the aorta is occluded - better flow dynamics, less competitive flow and less aortoenteric contact",
    "End-to-side is used when pelvic or inferior mesenteric perfusion must be preserved through retrograde flow",
    "Place the proximal anastomosis as high as possible, just below the renal arteries, where the aorta is least diseased",
    "Tunnel the limbs behind the ureters - anterior to the ureter causes obstruction, and this is a classic and avoidable error",
    "Distal anastomosis to the common femoral artery, extending onto the profunda if its origin is diseased",
    "Cover the graft completely with retroperitoneum so no bowel contacts prosthetic material",
    "Ligate groin lymphatics meticulously rather than using energy alone, to prevent lymphocele"
  ],
  after: [
    "Intensive care overnight; watch cardiac status closely",
    "Check and document distal pulses or Doppler signals at the end of the case and on arrival in the unit",
    "Watch for colonic ischemia and for buttock claudication from hypogastric compromise",
    "Groin wound surveillance - a groin seroma or lymph leak over a prosthetic anastomosis is treated actively, not observed",
    "Lifelong antiplatelet and high-intensity statin, with duplex surveillance of the graft limbs",
    "Counsel that late complications, graft limb occlusion and anastomotic pseudoaneurysm, present years later and need lifelong follow-up"
  ],
  pearls: [
    "Tunnel behind the ureter - it is a small step that is easy to get wrong and causes hydronephrosis months later",
    "The profunda is the limb's insurance policy; if its origin is diseased, extend the anastomosis onto it rather than hoping",
    "Ligate lymphatics in the groin, do not cauterize them - the lymphocele over a Dacron graft is a graft infection waiting to happen",
    "End-to-end where you can - it lies flatter, is easier to cover, and takes the duodenum off the suture line"
  ],
  refs: [
    { t: "2024 ACC/AHA guideline for the management of lower extremity peripheral artery disease", u: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001251" },
    { t: "StatPearls: Aortobifemoral Bypass", u: "https://www.ncbi.nlm.nih.gov/books/NBK537323/" },
    { t: "SVS clinical practice guidelines", u: "https://www.svs.org/clinical-practice/clinical-practice-guidelines/" }
  ]
},
{
  id: "vasc-open-taaa",
  name: "Open Thoracoabdominal Aortic Aneurysm Repair",
  sec: "vasc",
  present: [
    "Thoracoabdominal aneurysm at threshold - around 6.0 cm, lower in connective tissue disease - in a patient unsuitable for a branched endovascular repair",
    "Chronic post-dissection aneurysm, where the septum and the branch origins make endovascular repair difficult",
    "Connective tissue disease, where an endograft seals into aorta that continues to dilate",
    "Crawford extent I through IV determines the incision, the clamp sites and the paraplegia risk"
  ],
  dx: [
    "CTA of the entire aorta with 3D reconstruction, defining the extent, the visceral and intercostal origins and the iliac access",
    "Identify the artery of Adamkiewicz where imaging allows, though its absence on imaging does not change the protection strategy",
    "Full cardiac, pulmonary and renal assessment; this is among the highest-risk elective operations in surgery",
    "Genetic testing and family screening in anyone under 60 or with a suggestive history"
  ],
  tx: [
    "Cerebrospinal fluid drainage placed before induction, with pressure kept at or below 10 mmHg intraoperatively and for 48-72 hours",
    "Permissive hypertension after repair with a mean arterial pressure of 85-100 mmHg to drive collateral spinal perfusion",
    "Left heart bypass or partial cardiopulmonary bypass for extent I and II to perfuse the distal aorta during proximal clamping",
    "Cold renal perfusion with crystalloid to the renal ostia during visceral ischemia",
    "Avoid anemia, maintain cardiac output, and treat any drop in either promptly - both cause delayed paraplegia",
    "Motor and somatosensory evoked potential monitoring where available"
  ],
  tech: [
    "Thoracoabdominal incision through the sixth or seventh interspace, extended obliquely across the costal margin onto the abdomen, with the patient in a right lateral decubitus twist",
    "Retroperitoneal plane with medial visceral rotation, leaving the left kidney down or bringing it up depending on the exposure needed",
    "Divide the diaphragm circumferentially at its periphery, preserving the phrenic innervation, and mark it for reconstruction",
    "Sequential clamping - work down the aorta in segments rather than clamping the whole thing, to limit visceral and spinal ischemia time",
    "Proximal anastomosis first, then reimplant patent intercostal arteries from T8 to L1 as an island or with a separate graft",
    "Visceral reconstruction as a Carrel patch for celiac and superior mesenteric, with a separate graft to the left renal artery, which sits awkwardly for a patch",
    "Distal anastomosis to the infrarenal aorta or the iliacs, then reconstruct the diaphragm"
  ],
  after: [
    "Keep the spinal drain for 48-72 hours with strict pressure targets, and do not remove it while the patient is still at risk",
    "Hourly neurologic checks of lower limb power - delayed paraplegia occurs hours to days after an uneventful case",
    "A new lower limb deficit is a spinal drain and blood pressure emergency: drain cerebrospinal fluid, raise the mean arterial pressure, transfuse to correct anemia",
    "Prolonged ventilation is expected; the diaphragm division and the thoracotomy both impair respiratory mechanics",
    "Renal replacement therapy may be needed transiently, and renal dysfunction is a strong predictor of mortality",
    "Lifelong imaging surveillance of the remaining aorta, which continues to dilate"
  ],
  pearls: [
    "Delayed paraplegia is the complication that defines this operation, and it is often reversible if the drain and the pressure are managed within minutes rather than hours - every nurse on the unit should know the protocol",
    "Sequential clamping is the single technical decision that most reduces ischemic burden; clamping the whole aorta at once is faster and worse",
    "Do not remove the spinal drain early because the patient looks well - the deficit appears after the drain comes out",
    "Volume and outcome are strongly related here; this operation belongs in centers that do a number of them a year"
  ],
  refs: [
    { t: "2022 ACC/AHA guideline for the diagnosis and management of aortic disease", u: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001106" },
    { t: "StatPearls: Thoracoabdominal Aortic Aneurysm", u: "https://www.ncbi.nlm.nih.gov/books/NBK560731/" },
    { t: "SVS clinical practice guidelines", u: "https://www.svs.org/clinical-practice/clinical-practice-guidelines/" }
  ]
},
{
  id: "vasc-nais",
  name: "Aortic Graft Excision and Neoaortoiliac System Reconstruction",
  sec: "vasc",
  present: [
    "Proven or strongly suspected aortic graft infection, including secondary aortoenteric fistula",
    "Indicated when the patient can survive a long operation and needs a durable, infection-resistant reconstruction",
    "The alternative strategies are in situ cryopreserved allograft, rifampin-soaked prosthetic, or extra-anatomic bypass with aortic stump closure",
    "Presentation is indolent - malaise, fever, raised inflammatory markers - or dramatic, with a herald gastrointestinal bleed"
  ],
  dx: [
    "CTA showing perigraft fluid or gas beyond the first 3 months, loss of tissue planes, pseudoaneurysm, or graft abutting bowel",
    "FDG-PET/CT or labeled leukocyte scanning when CT is equivocal, which it often is",
    "Upper endoscopy to the fourth part of the duodenum in suspected aortoenteric fistula; a negative study does not exclude it",
    "Duplex mapping of BOTH femoral veins, which are the conduit - this operation is not possible without them",
    "Confirm deep venous patency and the absence of prior deep vein thrombosis before committing to harvest"
  ],
  tx: [
    "Broad-spectrum antibiotics from the time of diagnosis, narrowed on intraoperative and sonication cultures",
    "Prolonged targeted therapy, commonly 6 weeks intravenous, with lifelong oral suppression considered",
    "Two operating teams where possible - one harvesting vein while the other exposes the aorta - because operative time is the main risk",
    "Plan for major blood loss with cell salvage and a massive transfusion protocol available",
    "Omental flap to cover the reconstruction and separate closure of any bowel defect"
  ],
  tech: [
    "Harvest the superficial femoral and popliteal vein from mid-thigh to the knee through a medial thigh incision, preserving the profunda femoris vein - this is what protects against venous hypertension",
    "Ligate branches close to the vein, leave the valves in situ, and reverse the vein or render the valves incompetent as needed",
    "Expose the aorta transperitoneally and obtain suprarenal or supraceliac control before disturbing the infected field",
    "Excise the entire graft and debride all infected periaortic tissue back to healthy aorta",
    "Construct the neoaortoiliac system by sewing the two femoral vein segments into a bifurcated configuration, or use a single segment as a tube with a separate limb",
    "Anastomose proximally to debrided infrarenal aorta and distally to the iliac or femoral arteries",
    "Repair the duodenum in layers and interpose omentum between the bowel repair and the new conduit",
    "Close the thigh harvest sites over drains and do not close the fascia tightly"
  ],
  after: [
    "Watch the donor legs for compartment syndrome and venous hypertension - swelling is universal and compartment syndrome is a real risk in the first 24 hours",
    "Elevation and compression of the harvest legs once compartment syndrome is excluded",
    "Prolonged intensive care; this is a long operation in a septic patient",
    "Complete the planned antibiotic course and follow inflammatory markers to normalization",
    "Surveillance imaging of the reconstruction, which is durable and resists reinfection better than any prosthetic option",
    "Long-term venous morbidity in the donor legs is real but generally mild when the profunda femoris vein is preserved"
  ],
  pearls: [
    "Preserve the profunda femoris vein at harvest - taking it is the difference between a swollen leg and a disabled one",
    "Operative time is the enemy; two teams working simultaneously is not a luxury in this operation",
    "Send the explanted graft for sonication culture, because conventional swabs miss biofilm and a false-negative culture misdirects six weeks of antibiotics",
    "The herald bleed in aortoenteric fistula is the only warning you get - that patient goes to theatre, not to observation"
  ],
  refs: [
    { t: "ESVS 2020 clinical practice guidelines on the management of vascular graft and endograft infections", u: "https://www.ejves.com/article/S1078-5884(19)32268-4/fulltext" },
    { t: "StatPearls: Aortoenteric Fistula", u: "https://www.ncbi.nlm.nih.gov/books/NBK470335/" },
    { t: "SVS clinical practice guidelines", u: "https://www.svs.org/clinical-practice/clinical-practice-guidelines/" }
  ]
}
];
