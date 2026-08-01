/* Vascular Surgery resident dataset - batch 4 of 12 (entries 16-20).
 * Cerebrovascular.
 * Schema: {id,name,sec,present[],dx[],tx[],pearls[],refs[{t,u}]}  sec="vasc"
 */
const RES_VASC_B4 = [
{
  id: "vasc-asymptomatic-carotid",
  name: "Asymptomatic Carotid Stenosis",
  sec: "vasc",
  present: [
    "By definition no ipsilateral stroke, transient ischemic attack or amaurosis fugax in the preceding 6 months",
    "Usually found on a duplex ordered for a bruit, or incidentally on imaging done for another reason",
    "A carotid bruit is neither sensitive nor specific - severe stenosis can be silent and a bruit can come from a tortuous vessel",
    "USPSTF recommends against screening the general adult population, because the harms of finding and treating exceed the benefit"
  ],
  dx: [
    "Duplex ultrasound is the primary test; peak systolic velocity above 230 cm/s with an end-diastolic velocity above 100 cm/s suggests 70% or greater stenosis",
    "Confirm with CTA or MRA before intervention - duplex overestimates in contralateral occlusion and in tortuous or heavily calcified vessels",
    "NASCET methodology measures the residual lumen against the distal normal internal carotid, and is the denominator every trial threshold uses",
    "Look for high-risk plaque features - ulceration, intraplaque hemorrhage, echolucency - and for silent infarction on brain imaging, both of which raise the ipsilateral stroke risk"
  ],
  tx: [
    "Intensive medical therapy for everyone: high-intensity statin, antiplatelet, blood pressure control, smoking cessation and diabetes management",
    "Modern medical therapy has driven the annual stroke rate on medication down to around 1%, far below the 2-3% in the ACAS and ACST-1 control arms",
    "Consider carotid endarterectomy for 70-99% stenosis in a patient with a life expectancy over 5 years, when the surgeon's documented perioperative stroke and death rate is under 3%",
    "CREST-2 is the trial designed to answer whether revascularization still adds anything to contemporary medical therapy; until it reports, the case for intervening is weaker than it once was",
    "Do not intervene for stenosis under 60%, or in a patient whose life expectancy does not reach the crossover point of the survival curves"
  ],
  pearls: [
    "The operation is prophylactic - the patient is well, and a perioperative stroke converts a well patient into a disabled one, which is why the 3% threshold is a hard threshold",
    "Percentage stenosis alone is a crude risk marker; plaque morphology and silent infarcts identify who is actually at risk",
    "Progression matters more than a single measurement - a stenosis that has advanced across categories on serial duplex behaves differently from a stable one",
    "Know your own institution's stroke and death rate rather than quoting the trial's; if it is not audited, it is not known"
  ],
  refs: [
    { t: "SVS clinical practice guidelines for management of extracranial cerebrovascular disease", u: "https://www.jvascsurg.org/article/S0741-5214(21)02290-9/fulltext" },
    { t: "USPSTF: Asymptomatic Carotid Artery Stenosis Screening", u: "https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/carotid-artery-stenosis-screening" },
    { t: "StatPearls: Carotid Artery Stenosis", u: "https://www.ncbi.nlm.nih.gov/books/NBK442025/" }
  ]
},
{
  id: "vasc-symptomatic-carotid",
  name: "Symptomatic Carotid Stenosis and Timing of Intervention",
  sec: "vasc",
  present: [
    "Ipsilateral hemispheric transient ischemic attack, minor stroke, or amaurosis fugax within the last 6 months",
    "Amaurosis fugax is a curtain descending over one eye lasting minutes, from retinal embolism, and carries a lower stroke risk than a hemispheric event",
    "Contralateral motor or sensory symptoms and ipsilateral visual symptoms - a crossed pattern is anterior circulation and fits carotid disease",
    "Crescendo transient ischemic attacks or stroke-in-evolution is an emergency, not an elective referral"
  ],
  dx: [
    "Urgent duplex within 24-48 hours of the index event, because the recurrent stroke risk is front-loaded into the first two weeks",
    "Brain imaging to size the infarct - a large infarct changes the timing and raises the risk of hemorrhagic conversion after reperfusion",
    "Confirm the degree of stenosis with a second modality before intervention",
    "NASCET showed the benefit is confined to 70-99% stenosis, with a modest benefit at 50-69% concentrated in men, and no benefit under 50%"
  ],
  tx: [
    "Operate within 14 days of the index event - the number needed to treat rises steeply after that and much of the benefit is lost",
    "Carotid endarterectomy is the reference operation; patch angioplasty rather than primary closure reduces restenosis and perioperative stroke",
    "Start antiplatelet and high-intensity statin immediately; dual antiplatelet therapy for 21 days after minor stroke or high-risk TIA per CHANCE and POINT, then single agent",
    "Defer intervention in a large completed infarct with significant deficit, and in anyone with intracranial hemorrhage",
    "Eversion endarterectomy is an equally acceptable technique and avoids a patch, at the cost of a harder distal reconstruction"
  ],
  pearls: [
    "The clock is the treatment - a technically perfect endarterectomy at 8 weeks helps far less than a good one at 8 days",
    "A patient with a 90% stenosis and a completed hemispheric stroke with dense deficit is not a candidate; the benefit is in preventing the next stroke in a functioning patient",
    "Cranial nerve injury is the commonest complication and is usually a hypoglossal or marginal mandibular neurapraxia that recovers - warn about it in consent",
    "Postoperative hypertension with ipsilateral headache and seizure is cerebral hyperperfusion syndrome; treat the blood pressure aggressively before it becomes a hemorrhage"
  ],
  refs: [
    { t: "SVS clinical practice guidelines for management of extracranial cerebrovascular disease", u: "https://www.jvascsurg.org/article/S0741-5214(21)02290-9/fulltext" },
    { t: "2021 AHA/ASA guideline for the prevention of stroke in patients with stroke and TIA", u: "https://www.ahajournals.org/doi/10.1161/STR.0000000000000375" },
    { t: "StatPearls: Carotid Endarterectomy", u: "https://www.ncbi.nlm.nih.gov/books/NBK470582/" }
  ]
},
{
  id: "vasc-cas-tcar",
  name: "Carotid Stenting and Transcarotid Artery Revascularization",
  sec: "vasc",
  present: [
    "Considered when endarterectomy is high risk: prior neck radiation, prior ipsilateral neck dissection, a high bifurcation above C2, contralateral occlusion, or severe cardiopulmonary disease",
    "Restenosis after previous endarterectomy is a good indication because the reoperative field is scarred",
    "A hostile neck is the recurring theme - if the surgeon cannot safely expose the bifurcation, an endovascular route becomes attractive",
    "Symptomatic status and age both change the risk balance, and age is the single strongest predictor of stenting stroke risk"
  ],
  dx: [
    "CTA of the arch and the great vessels, because transfemoral stenting risk is driven by arch type and tortuosity, not by the carotid lesion",
    "Assess plaque for heavy circumferential calcification and for a long lesion with fresh thrombus - both are poor stenting substrates",
    "Confirm the anatomy is suitable for a transcarotid approach: at least 5 cm of common carotid above the clavicle and no significant clavicular obstruction",
    "Baseline neurologic examination documented before the procedure, in enough detail that a new deficit is recognizable"
  ],
  tx: [
    "TCAR combines a direct common carotid cutdown with flow reversal for embolic protection, avoiding the arch entirely",
    "Registry data from the VQI show TCAR stroke and death rates comparable to endarterectomy and better than transfemoral stenting",
    "Transfemoral carotid stenting requires an embolic protection device; CREST found more periprocedural stroke with stenting and more myocardial infarction with endarterectomy, with equivalent long-term composite outcomes",
    "Dual antiplatelet therapy before and for at least 30 days after any stent, then lifelong single agent",
    "Anticipate bradycardia and hypotension from carotid sinus stimulation during balloon dilation - have atropine and a vasopressor ready"
  ],
  pearls: [
    "The arch is where transfemoral stenting strokes come from, which is precisely the step TCAR removes",
    "Age above about 70 shifts the balance toward endarterectomy in every analysis; a calcified type III arch in an 80-year-old is a bad transfemoral case",
    "A stent placed in an asymptomatic patient with a modest life expectancy is hard to justify at all - the question is not which technique but whether to intervene",
    "Flow reversal is only protective while it is running; the highest-risk moment is establishing and taking down the circuit"
  ],
  refs: [
    { t: "SVS clinical practice guidelines for management of extracranial cerebrovascular disease", u: "https://www.jvascsurg.org/article/S0741-5214(21)02290-9/fulltext" },
    { t: "CREST trial (N Engl J Med 2010)", u: "https://www.nejm.org/doi/full/10.1056/NEJMoa0912321" },
    { t: "StatPearls: Carotid Artery Stenting", u: "https://www.ncbi.nlm.nih.gov/books/NBK538294/" }
  ]
},
{
  id: "vasc-vertebrobasilar-subclavian",
  name: "Vertebrobasilar and Subclavian Disease",
  sec: "vasc",
  present: [
    "Posterior circulation symptoms are bilateral or crossed: dizziness, diplopia, dysarthria, dysphagia, drop attacks and ataxia",
    "Isolated dizziness is almost never vertebrobasilar insufficiency - it requires accompanying brainstem or cerebellar features",
    "Subclavian steal produces arm claudication plus posterior circulation symptoms brought on by using the arm",
    "A blood pressure difference above 15-20 mmHg between arms is the physical finding that identifies subclavian stenosis"
  ],
  dx: [
    "Duplex of the vertebral arteries showing reversed or to-and-fro flow confirms steal; the reversal may only appear with arm exercise or a cuff-release maneuver",
    "CTA or MRA of the arch and vertebral origins, since the V1 segment at the subclavian origin is the usual site",
    "Bilateral arm pressures in every patient being worked up, which is a two-minute examination that is frequently skipped",
    "Exclude the far commoner causes of dizziness before attributing symptoms to the posterior circulation - benign paroxysmal positional vertigo, orthostasis and medications"
  ],
  tx: [
    "Asymptomatic subclavian stenosis and asymptomatic steal need no intervention - the reversed vertebral flow is a compensatory mechanism, not a disease",
    "Symptomatic subclavian stenosis: angioplasty and stenting of the subclavian origin is first-line, with good technical success and durability",
    "Carotid-subclavian bypass or subclavian transposition when the endovascular approach fails or the origin is occluded",
    "Coronary-subclavian steal in a patient with a left internal mammary graft presents as angina with arm use and requires subclavian revascularization",
    "Vertebral artery reconstruction is uncommon and reserved for symptomatic bilateral disease or a dominant vessel with a hemodynamically significant lesion"
  ],
  pearls: [
    "Treat the patient, not the duplex - reversed vertebral flow on an incidental study in an asymptomatic person is a finding, not an indication",
    "Always take both arm pressures before subclavian revascularization and after, and document the gradient resolved",
    "A patient with a prior left internal mammary coronary graft needs the subclavian addressed before any procedure that could compromise it",
    "Posterior circulation strokes are frequently misdiagnosed as peripheral vertigo at the first visit; the HINTS examination is more useful than early CT"
  ],
  refs: [
    { t: "SVS clinical practice guidelines for management of extracranial cerebrovascular disease", u: "https://www.jvascsurg.org/article/S0741-5214(21)02290-9/fulltext" },
    { t: "StatPearls: Subclavian Steal Syndrome", u: "https://www.ncbi.nlm.nih.gov/books/NBK441836/" },
    { t: "StatPearls: Vertebrobasilar Insufficiency", u: "https://www.ncbi.nlm.nih.gov/books/NBK482344/" }
  ]
},
{
  id: "vasc-carotid-body-tumor",
  name: "Carotid Body Tumor",
  sec: "vasc",
  present: [
    "A painless, slowly enlarging lateral neck mass at the angle of the mandible, mobile side to side but not up and down",
    "A paraganglioma of the carotid body chemoreceptor; the great majority are benign but 5-10% metastasize",
    "Cranial nerve palsies - hoarseness, tongue deviation, Horner syndrome - indicate a large or invasive tumor",
    "Familial and multifocal in succinate dehydrogenase mutation carriers, and more common at high altitude from chronic hypoxic stimulation"
  ],
  dx: [
    "Duplex shows a hypervascular mass splaying the carotid bifurcation; CTA or MRA confirms the classic lyre sign of the widened bifurcation",
    "Shamblin classification I through III grades the degree of carotid encasement and predicts the difficulty and the need for arterial reconstruction",
    "Plasma free metanephrines to exclude a secreting tumor before operation - a catecholamine-secreting paraganglioma causes an intraoperative hypertensive crisis if unrecognized",
    "Genetic testing for SDH mutations, particularly in young patients, multifocal disease, or a family history",
    "Biopsy is contraindicated - the tumor is hypervascular and biopsy causes hemorrhage without changing management"
  ],
  tx: [
    "Surgical resection is the definitive treatment and is easier the smaller the tumor, which is the argument against watchful waiting in a fit patient",
    "Subadventitial dissection in the white line of Gordon-Taylor plane; Shamblin III tumors may require carotid resection and interposition grafting",
    "Preoperative embolization can reduce blood loss in large tumors, though the evidence for benefit is mixed and it carries a stroke risk",
    "Radiotherapy for the unresectable tumor or the unfit patient - it controls growth rather than eradicating the tumor",
    "Alpha blockade before operation in the rare secreting tumor, exactly as for pheochromocytoma"
  ],
  pearls: [
    "Never biopsy a pulsatile neck mass - the diagnosis is made on imaging and a needle produces a hematoma and a hostile operative field",
    "Cranial nerve injury is the main morbidity and rises steeply with Shamblin grade; the vagus and hypoglossal are the ones at risk",
    "Growth is slow, so a small tumor in an elderly patient may reasonably be observed - but in a young patient it will only get harder to remove",
    "Screen the contralateral side and consider abdominal imaging in mutation carriers, because paragangliomas are frequently multiple"
  ],
  refs: [
    { t: "StatPearls: Carotid Body Tumors", u: "https://www.ncbi.nlm.nih.gov/books/NBK562184/" },
    { t: "SVS clinical practice guidelines", u: "https://www.svs.org/clinical-practice/clinical-practice-guidelines/" },
    { t: "NCI: Pheochromocytoma and Paraganglioma Treatment", u: "https://www.cancer.gov/types/pheochromocytoma/hp/pheochromocytoma-treatment-pdq" }
  ]
}
];
