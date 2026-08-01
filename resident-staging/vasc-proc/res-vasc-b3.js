/* Vascular Surgery PROCEDURES - batch 3 of 10 (procedures 11-15).
 * Cerebrovascular.
 * Extended schema: {id,name,sec,present[],dx[],tx[],tech[],after[],pearls[],refs[{t,u}]}  sec="vasc"
 */
const RES_VASC_B3 = [
{
  id: "vasc-cea-patch",
  name: "Carotid Endarterectomy with Patch Angioplasty",
  sec: "vasc",
  present: [
    "Symptomatic 70-99% stenosis within 6 months of a transient ischemic attack, minor stroke or amaurosis fugax - operate within 14 days",
    "Symptomatic 50-69% stenosis, with a smaller benefit concentrated in men",
    "Asymptomatic 70-99% stenosis in a patient with over 5 years of life expectancy, when the unit's stroke and death rate is documented under 3%",
    "The reference operation against which every endovascular alternative is measured"
  ],
  dx: [
    "Duplex first; confirm with CTA or MRA before operating, because duplex overestimates with contralateral occlusion and heavy calcification",
    "NASCET methodology - residual lumen against distal normal internal carotid - is the denominator every threshold uses",
    "Brain imaging to size any infarct and to identify silent infarction",
    "Define the bifurcation height against the mandible and the plaque's distal extent, which decide the exposure needed"
  ],
  tx: [
    "Aspirin continued through the operation; add a statin, which reduces perioperative stroke",
    "Regional cervical block or general anesthesia - GALA found no difference in outcomes, so it is institutional preference",
    "Shunt selectively on stump pressure, electroencephalography or awake neurologic testing, or routinely - both strategies are defensible",
    "Patch closure rather than primary closure: it reduces restenosis and perioperative stroke, using bovine pericardium, Dacron or vein",
    "Heparin 80-100 units/kg before clamping, reversed with protamine or not according to unit practice"
  ],
  tech: [
    "Incision along the anterior border of sternocleidomastoid, or a transverse skin-crease incision for cosmesis in a low bifurcation",
    "Divide the platysma, retract sternocleidomastoid laterally, and divide the common facial vein - the landmark to the bifurcation",
    "Identify and protect the hypoglossal nerve crossing above the bifurcation, and the vagus lying posterolaterally in the sheath",
    "Dissect the common, external and internal carotid with minimal manipulation of the bifurcation itself to avoid embolization",
    "Infiltrate the carotid sinus with local anesthetic if bradycardia occurs on handling",
    "Heparinize, clamp internal first then common then external, and open the artery longitudinally from common across the plaque into normal internal carotid",
    "Develop the endarterectomy plane, feather the distal endpoint, and tack it if it lifts - a raised distal flap is the classic cause of early thrombosis",
    "Irrigate and remove all loose debris, then close with the patch using 6-0 polypropylene, flushing and de-airing before the final sutures",
    "Release clamps in the order external, common, then internal, so any debris goes to the external circulation"
  ],
  after: [
    "Neurologic examination immediately on extubation and hourly overnight - a new deficit means the patient goes back to theatre, not to a scanner",
    "Tight blood pressure control; hypertension after CEA is common and drives both hematoma and hyperperfusion",
    "Cerebral hyperperfusion syndrome presents with ipsilateral headache, seizure or focal deficit and is treated by aggressive blood pressure lowering before it becomes a hemorrhage",
    "Watch the neck for an expanding hematoma - airway compromise from a neck hematoma is managed by opening the wound at the bedside, not by waiting for theatre",
    "Cranial nerve deficits are usually neurapraxia and recover, but document them before discharge",
    "Duplex at 6 weeks then annually; lifelong antiplatelet and high-intensity statin"
  ],
  pearls: [
    "The distal endpoint is the operation - a lifted intimal flap is what thromboses in recovery, and it is worth extra minutes to feather and tack it",
    "An expanding neck hematoma with stridor is opened at the bedside; transferring that patient to theatre intact is not always possible",
    "Timing beats technique in symptomatic disease - a good operation at 8 days is worth far more than a perfect one at 8 weeks",
    "Know and quote your own unit's stroke and death rate, not the trial's; if it is not audited, it is not known"
  ],
  refs: [
    { t: "SVS clinical practice guidelines for management of extracranial cerebrovascular disease", u: "https://www.jvascsurg.org/article/S0741-5214(21)02290-9/fulltext" },
    { t: "StatPearls: Carotid Endarterectomy", u: "https://www.ncbi.nlm.nih.gov/books/NBK470582/" },
    { t: "2021 AHA/ASA guideline for the prevention of stroke in patients with stroke and TIA", u: "https://www.ahajournals.org/doi/10.1161/STR.0000000000000375" }
  ]
},
{
  id: "vasc-eversion-cea",
  name: "Eversion Carotid Endarterectomy",
  sec: "vasc",
  present: [
    "Same indications as conventional endarterectomy - the choice between them is technique preference, not patient selection",
    "Particularly attractive when the internal carotid is elongated and kinked, because redundancy can be shortened at the same time",
    "Avoids a patch entirely, and avoids the prosthetic material a patch introduces",
    "Less suitable when the plaque extends far distally, where the distal endpoint is hard to see through an eversion"
  ],
  dx: [
    "Identical workup to conventional endarterectomy: duplex confirmed by a second modality, NASCET grading, brain imaging",
    "Assess internal carotid redundancy on imaging - a coiled or kinked internal carotid is the anatomy this technique handles best",
    "Assess the distal extent of plaque specifically, since a very high endpoint favors the conventional longitudinal approach",
    "Bifurcation height relative to the mandible, as for any carotid exposure"
  ],
  tx: [
    "Anesthetic, antiplatelet and heparin strategy identical to conventional endarterectomy",
    "Shunting is more awkward in eversion and is usually done after the plaque is removed and before reanastomosis, or the technique is abandoned in favor of conventional if a shunt is needed early",
    "No patch material is required, which removes the prosthetic infection risk and the patch aneurysm risk",
    "Shorten a redundant internal carotid by resecting the excess before reimplantation",
    "Reversal with protamine per unit practice"
  ],
  tech: [
    "Expose the bifurcation exactly as for conventional endarterectomy, protecting the hypoglossal and vagus",
    "Heparinize and clamp, then transect the internal carotid obliquely at its origin from the common carotid",
    "Evert the adventitia and media of the internal carotid off the plaque cylinder like rolling down a sock, delivering the plaque as an intact core",
    "Continue everting until the plaque tapers to a natural feathered endpoint - this is why a very distal plaque is unsuited to the technique",
    "Perform a conventional endarterectomy of the common and external carotid through the transection opening",
    "Resect redundant internal carotid length if it is kinked, then reimplant it onto the common carotid arteriotomy with 6-0 polypropylene",
    "Flush and de-air before completing, and release clamps external first"
  ],
  after: [
    "Identical to conventional endarterectomy: hourly neurologic checks, tight blood pressure control, hematoma vigilance",
    "The anastomosis is circumferential rather than a patch suture line, so bleeding from it is managed the same way",
    "Cerebral hyperperfusion syndrome risk is the same and is managed the same way",
    "Duplex surveillance at 6 weeks then annually; restenosis rates are comparable to patched conventional endarterectomy",
    "Lifelong antiplatelet and statin"
  ],
  pearls: [
    "Eversion and patched conventional endarterectomy have comparable outcomes - a surgeon should be able to do both and choose on the anatomy",
    "The eversion cannot be done well if the plaque endpoint is high, and recognizing that before transecting saves a difficult recovery",
    "Shunting mid-eversion is genuinely awkward; if you shunt routinely, conventional is the more natural technique",
    "The chance to shorten a kinked internal carotid at the same sitting is the real advantage, and it is wasted if the redundancy is not assessed preoperatively"
  ],
  refs: [
    { t: "SVS clinical practice guidelines for management of extracranial cerebrovascular disease", u: "https://www.jvascsurg.org/article/S0741-5214(21)02290-9/fulltext" },
    { t: "StatPearls: Carotid Endarterectomy", u: "https://www.ncbi.nlm.nih.gov/books/NBK470582/" },
    { t: "StatPearls: Carotid Artery Stenosis", u: "https://www.ncbi.nlm.nih.gov/books/NBK442025/" }
  ]
},
{
  id: "vasc-tcar",
  name: "Transcarotid Artery Revascularization",
  sec: "vasc",
  present: [
    "High-risk-for-endarterectomy anatomy: prior neck radiation, prior ipsilateral neck dissection, a bifurcation above C2, contralateral occlusion, tracheostomy",
    "Restenosis after previous endarterectomy, where the reoperative field is scarred and the cranial nerves are at risk",
    "Significant cardiopulmonary comorbidity making general anesthesia and a long operation unattractive",
    "Registry data from the VQI show stroke and death rates comparable to endarterectomy and better than transfemoral stenting"
  ],
  dx: [
    "Duplex plus CTA, with specific attention to the common carotid above the clavicle",
    "Requires at least 5 cm of disease-free common carotid between the clavicle and the bifurcation for the access sheath",
    "Assess for a heavily calcified or diseased common carotid at the puncture site, which is a contraindication",
    "Femoral venous access for the return limb must be patent - check for prior deep vein thrombosis or filters"
  ],
  tx: [
    "Dual antiplatelet therapy started before the procedure and continued at least 30 days, then lifelong single agent",
    "Can be done under local anesthesia with sedation, which preserves awake neurologic monitoring",
    "Have atropine and a vasopressor drawn up - carotid sinus stimulation during dilation causes bradycardia and hypotension",
    "Statin therapy as for any carotid intervention",
    "Flow reversal is the neuroprotection; the whole technique is built around minimizing the time the carotid is unprotected"
  ],
  tech: [
    "Small transverse supraclavicular incision, expose the common carotid low in the neck, and place a purse-string",
    "Puncture the common carotid and place the arterial sheath directed cephalad, secured to the drape",
    "Place a femoral venous sheath and connect the arterial and venous limbs through the flow controller with its filter",
    "Clamp the common carotid PROXIMAL to the sheath, which establishes reverse flow down the internal carotid and out to the vein",
    "Cross the lesion only after flow reversal is running and confirmed - this is the entire point of the technique",
    "Predilate if needed, deploy the carotid stent across the lesion, then postdilate gently",
    "Restore antegrade flow by unclamping, remove the sheath and tie the purse-string, and inspect the flow controller filter for debris"
  ],
  after: [
    "Neurologic checks as for endarterectomy, hourly overnight",
    "Blood pressure control; hyperperfusion syndrome occurs after stenting as well as after endarterectomy",
    "Bradycardia and hypotension after the case are common and usually self-limiting, but may need a temporary vasopressor",
    "Neck wound is small but still a carotid access - watch for hematoma",
    "Duplex at 1 month, 6 months, then annually to detect in-stent restenosis",
    "Dual antiplatelet therapy for at least 30 days is not optional; stent thrombosis is the early failure mode"
  ],
  pearls: [
    "The arch is where transfemoral stenting strokes come from, and TCAR removes the arch from the procedure entirely - that is the whole idea",
    "Never cross the lesion before flow reversal is established and confirmed running; every step of the sequence exists to protect that moment",
    "Inspect the filter at the end and show it to the trainee - the debris in it is the stroke that did not happen",
    "The 5 cm of clean common carotid is a hard requirement, and a short neck or a high clavicle rules the technique out"
  ],
  refs: [
    { t: "SVS clinical practice guidelines for management of extracranial cerebrovascular disease", u: "https://www.jvascsurg.org/article/S0741-5214(21)02290-9/fulltext" },
    { t: "StatPearls: Carotid Artery Stenting", u: "https://www.ncbi.nlm.nih.gov/books/NBK538294/" },
    { t: "CREST trial (N Engl J Med 2010)", u: "https://www.nejm.org/doi/full/10.1056/NEJMoa0912321" }
  ]
},
{
  id: "vasc-tf-cas",
  name: "Transfemoral Carotid Artery Stenting",
  sec: "vasc",
  present: [
    "High-risk-for-surgery anatomy where a transcarotid approach is not possible - a short neck, a low bifurcation, a hostile supraclavicular field",
    "Radiation-induced stenosis and post-endarterectomy restenosis, both of which respond well to stenting",
    "Younger patients tolerate it better; age above about 70 shifts the balance toward endarterectomy in every analysis",
    "CREST found more periprocedural stroke with stenting and more myocardial infarction with endarterectomy, with equivalent long-term composite outcomes"
  ],
  dx: [
    "CTA of the arch and great vessels is mandatory - arch type I through III and the tortuosity of the origin drive the risk far more than the carotid lesion does",
    "A type III arch, a bovine configuration, or heavy arch atheroma should make you reconsider the approach entirely",
    "Assess the lesion for heavy circumferential calcification, long length, and fresh thrombus - all poor stenting substrates",
    "Femoral and iliac access adequacy"
  ],
  tx: [
    "Dual antiplatelet therapy before and for at least 30 days after, then lifelong single agent",
    "An embolic protection device is mandatory - distal filter most commonly, or proximal flow reversal in high-risk plaque",
    "Atropine and vasopressor immediately available for carotid sinus reactions",
    "Minimize arch catheter exchanges and time, because that is where the emboli come from",
    "Statin and blood pressure control as for any carotid intervention"
  ],
  tech: [
    "Femoral access, arch aortogram in the left anterior oblique projection to lay out the great vessel origins",
    "Selectively catheterize the common carotid and exchange for a long sheath or guide, keeping wire and catheter movement in the arch to a minimum",
    "Cross the lesion carefully with a soft wire and deploy the distal filter in a straight segment of internal carotid above the lesion",
    "Predilate with a small balloon only if the stent will not cross; every dilation is an embolic event",
    "Deploy a self-expanding stent covering the lesion, usually from common into internal carotid across the external origin, which is well tolerated",
    "Postdilate gently to a deliberately undersized diameter - residual stenosis of 20-30% is acceptable and preferable to aggressive dilation",
    "Retrieve the filter carefully; capture and retrieval is itself an embolic moment"
  ],
  after: [
    "Hourly neurologic checks; the stroke risk is front-loaded into the first 24 hours",
    "Manage bradycardia and hypotension, which may persist for a day",
    "Blood pressure control for hyperperfusion syndrome",
    "Groin access surveillance for hematoma and pseudoaneurysm",
    "Duplex at 1 month, 6 months and annually for in-stent restenosis",
    "Dual antiplatelet therapy adherence is critical for the first 30 days and should be checked, not assumed"
  ],
  pearls: [
    "The arch causes the strokes, not the carotid - a type III arch in an 80-year-old is a bad case regardless of how favorable the bifurcation looks",
    "Do not chase a perfect angiographic result; residual stenosis of 20-30% is fine, and the extra dilation is what showers debris",
    "Filter retrieval is an embolic step and deserves the same care as crossing the lesion",
    "In an asymptomatic patient with modest life expectancy the real question is not which technique but whether to intervene at all"
  ],
  refs: [
    { t: "CREST trial (N Engl J Med 2010)", u: "https://www.nejm.org/doi/full/10.1056/NEJMoa0912321" },
    { t: "SVS clinical practice guidelines for management of extracranial cerebrovascular disease", u: "https://www.jvascsurg.org/article/S0741-5214(21)02290-9/fulltext" },
    { t: "StatPearls: Carotid Artery Stenting", u: "https://www.ncbi.nlm.nih.gov/books/NBK538294/" }
  ]
},
{
  id: "vasc-carotid-body-resection",
  name: "Carotid Body Tumor Resection",
  sec: "vasc",
  present: [
    "A painless, slowly enlarging lateral neck mass at the angle of the mandible, mobile side to side but not vertically",
    "Resection is easier the smaller the tumor, which is the argument against watchful waiting in a fit patient",
    "Cranial nerve palsy, hoarseness or tongue deviation indicates a large or invasive tumor",
    "Familial and multifocal in succinate dehydrogenase mutation carriers, and more common at altitude"
  ],
  dx: [
    "CTA or MRA showing a hypervascular mass splaying the bifurcation - the lyre sign",
    "Shamblin classification I through III grades carotid encasement and predicts difficulty and the need for arterial reconstruction",
    "Plasma free metanephrines before operation - an unrecognized secreting paraganglioma causes an intraoperative hypertensive crisis",
    "Genetic testing for SDH mutations in young patients, multifocal disease or a family history",
    "Never biopsy - the tumor is hypervascular, and a needle produces a hematoma and a hostile operative field without changing management"
  ],
  tx: [
    "Alpha blockade before operation in the rare secreting tumor, exactly as for pheochromocytoma",
    "Preoperative embolization can reduce blood loss in large tumors, though benefit is debated and it carries its own stroke risk",
    "Cross-match blood and have vascular reconstruction options available - a Shamblin III may need carotid resection and interposition grafting",
    "Have a shunt available if the internal carotid must be resected",
    "Radiotherapy is the alternative for the unresectable tumor or the unfit patient, controlling growth rather than eradicating"
  ],
  tech: [
    "Standard carotid exposure along the anterior border of sternocleidomastoid, extended superiorly for a high tumor",
    "Obtain proximal common carotid and distal internal carotid control BEFORE dissecting the tumor",
    "Identify and protect the vagus, hypoglossal, glossopharyngeal and superior laryngeal nerves early - the superior laryngeal is the easiest to lose and the least often looked for",
    "Dissect in the subadventitial plane of Gordon-Taylor, the white line between tumor and arterial adventitia, working from inferior to superior",
    "Ligate the ascending pharyngeal artery, the principal feeder, early to reduce bleeding",
    "Take the external carotid if it is encased rather than fighting for it; it is expendable and the internal carotid is not",
    "Reconstruct the internal carotid with vein interposition if it must be sacrificed, using a shunt during the reconstruction",
    "Meticulous hemostasis and a drain, because the bed oozes"
  ],
  after: [
    "Formal cranial nerve examination before discharge - phonation, swallow, tongue protrusion and shoulder shrug - and document it",
    "Speech and swallow assessment before oral intake if there is any suspicion of vagal or glossopharyngeal injury, because aspiration is the risk",
    "Neurologic checks as for any carotid operation",
    "Watch for baroreceptor failure after bilateral or extensive resection, with labile blood pressure",
    "Histology confirms the diagnosis; malignancy is defined by metastasis rather than by appearance",
    "Screen the contralateral side and consider abdominal imaging in mutation carriers, plus family screening"
  ],
  pearls: [
    "Never biopsy a pulsatile neck mass; the diagnosis is radiologic and a needle makes the operation harder and bloodier",
    "Get vascular control before you touch the tumor - the moment you need it is not the moment to start dissecting for it",
    "Cranial nerve injury is the dominant morbidity and rises steeply with Shamblin grade; counsel it explicitly and document the preoperative examination",
    "Small tumors in young patients should be removed, because the operation only gets harder and the nerves only get more encased"
  ],
  refs: [
    { t: "StatPearls: Carotid Body Tumors", u: "https://www.ncbi.nlm.nih.gov/books/NBK562184/" },
    { t: "NCI: Pheochromocytoma and Paraganglioma Treatment", u: "https://www.cancer.gov/types/pheochromocytoma/hp/pheochromocytoma-treatment-pdq" },
    { t: "SVS clinical practice guidelines", u: "https://www.svs.org/clinical-practice/clinical-practice-guidelines/" }
  ]
}
];
