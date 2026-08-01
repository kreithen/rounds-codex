/* Vascular Surgery PROCEDURES - batch 8 of 10 (procedures 36-40).
 * Venous.
 * Extended schema: {id,name,sec,present[],dx[],tx[],tech[],after[],pearls[],refs[{t,u}]}  sec="vasc"
 */
const RES_VASC_B8 = [
{
  id: "vasc-evla",
  name: "Endovenous Thermal Ablation of the Saphenous Vein",
  sec: "vasc",
  present: [
    "Symptomatic varicose veins with documented saphenous reflux - aching, heaviness, itching, night cramps",
    "Skin changes, bleeding from a varix, superficial thrombophlebitis or an active venous ulcer, all of which justify treatment regardless of cosmesis",
    "EVRA showed early ablation of superficial reflux within 2 weeks healed ulcers faster and reduced recurrence",
    "Has largely replaced open stripping, with less pain and faster return to work"
  ],
  dx: [
    "Standing duplex is mandatory: map the saphenofemoral and saphenopopliteal junctions, the trunks, the tributaries and the perforators",
    "Reflux over 500 ms in the superficial system defines incompetence",
    "Measure ankle-brachial index before any compression is planned - an ABI under 0.8 makes full compression unsafe",
    "Exclude deep venous obstruction; never ablate a superficial vein that is carrying the leg's outflow around a deep occlusion"
  ],
  tx: [
    "Radiofrequency or laser ablation are equivalent in practice; the choice is equipment and preference",
    "Nonthermal nontumescent alternatives - cyanoacrylate closure, mechanochemical ablation - avoid tumescent anesthesia and nerve injury",
    "Treat tributaries with concurrent or staged phlebectomy or foam sclerotherapy",
    "Compression stockings after, typically for 1-2 weeks, though the evidence for duration is weak",
    "Ambulation immediately and encouragement to walk, which reduces thrombotic complications"
  ],
  tech: [
    "Position supine with the leg externally rotated and the table in reverse Trendelenburg to distend the vein for access",
    "Ultrasound-guided access to the great saphenous vein at or below the knee, then advance the catheter to 2 cm below the saphenofemoral junction",
    "Confirm the catheter tip position on ultrasound relative to the superficial epigastric vein - too close to the junction risks thermal injury to the femoral vein",
    "Place the patient in Trendelenburg to empty the vein, then infiltrate tumescent anesthesia along the whole length in the saphenous compartment",
    "Tumescent does three jobs: anesthesia, compression of the vein onto the catheter, and a heat sink protecting skin and nerve - it is not optional",
    "Confirm at least 1 cm of tumescent between the vein and the skin along the entire treated segment",
    "Deliver energy with pullback at the device's specified rate, and confirm occlusion on ultrasound at the end",
    "Stop treatment at the knee for the great saphenous vein unless there is a specific reason to go lower, because saphenous nerve injury tracks with below-knee treatment"
  ],
  after: [
    "Walk immediately and daily; prolonged sitting is the thing to avoid",
    "Duplex within a week to exclude endothermal heat-induced thrombosis - thrombus extending from the ablated saphenous into the femoral vein",
    "EHIT class determines management, from observation to therapeutic anticoagulation for extension into the deep system",
    "Expect a tender indurated cord along the treated vein for weeks, plus bruising - this is normal and should be predicted in consent",
    "Paresthesia in the saphenous or sural distribution usually recovers but may take months",
    "Duplex at 6-12 weeks to confirm durable closure; recurrence is usually neovascularization at the junction or a missed accessory vein"
  ],
  pearls: [
    "Tumescent is the safety of the operation, not just the anesthesia - 1 cm of fluid between vein and skin is what prevents a burn and a nerve injury",
    "Stop at the knee. Below-knee great saphenous treatment is where saphenous nerve injuries come from, and the gain is usually small",
    "Get a duplex within a week; EHIT is silent, common enough to matter, and treatable when found",
    "Never ablate a superficial vein serving as a collateral around deep obstruction - the preoperative duplex is what tells you, and it is the one thing that turns a good operation into a disaster"
  ],
  refs: [
    { t: "SVS/AVF/AVLS clinical practice guidelines on varicose veins and chronic venous disease", u: "https://www.jvascsurg.org/article/S0741-5214(22)02026-8/fulltext" },
    { t: "EVRA trial (N Engl J Med 2018)", u: "https://www.nejm.org/doi/full/10.1056/NEJMoa1801214" },
    { t: "ESVS 2021 clinical practice guidelines on the management of chronic venous disease", u: "https://www.ejves.com/article/S1078-5884(21)00382-3/fulltext" }
  ]
},
{
  id: "vasc-phlebectomy-foam",
  name: "Ambulatory Phlebectomy and Foam Sclerotherapy",
  sec: "vasc",
  present: [
    "Symptomatic varicose tributaries, treated concurrently with or staged after truncal ablation",
    "Recurrent varicosities after previous surgery, where the anatomy is disorganized and a catheter will not pass",
    "Tortuous clusters unsuitable for a catheter-based technique",
    "Treating tributaries without addressing the refluxing trunk guarantees recurrence, so the truncal source is dealt with first or at the same sitting"
  ],
  dx: [
    "Standing duplex mapping the source of each cluster - the tributaries are the symptom and the trunk is the cause",
    "Mark the veins with the patient standing immediately before the procedure; they disappear when supine and cannot be found afterward",
    "Exclude deep venous obstruction",
    "Photograph the marked leg for the record and for the patient's own comparison"
  ],
  tx: [
    "Phlebectomy for larger, superficial, palpable tributaries - it removes the vein and has lower recurrence than sclerotherapy for these",
    "Ultrasound-guided foam sclerotherapy for deeper, smaller, or very tortuous veins, and for recurrent disease",
    "Polidocanol or sodium tetradecyl sulfate, foamed with the Tessari technique using a 1:4 liquid-to-air ratio",
    "Limit foam volume per session, typically to around 10 mL, to reduce systemic effects",
    "Compression afterward for 1-2 weeks, and immediate ambulation"
  ],
  tech: [
    "Mark standing, then position supine with the leg accessible and the table in Trendelenburg for phlebectomy to reduce bleeding",
    "Infiltrate tumescent or local anesthetic along the marked veins",
    "Make 1-2 mm stab incisions or needle punctures along the vein, oriented along Langer lines for cosmesis",
    "Deliver the vein with a phlebectomy hook, then avulse it gently with mosquito forceps using steady traction rather than pulling",
    "Close incisions with adhesive strips rather than sutures; they heal to almost nothing",
    "For foam, cannulate the target under ultrasound, elevate the leg to empty the vein, inject slowly and watch the foam fill the segment on ultrasound",
    "Compress and have the patient ambulate immediately after foam; do not let them sit",
    "Avoid injecting foam into a perforator directly and avoid excessive volume, both of which increase systemic passage"
  ],
  after: [
    "Immediate ambulation for at least 10-15 minutes, then daily walking",
    "Compression for 1-2 weeks",
    "Expect bruising, tenderness and lumpy indurated segments for weeks - trapped blood in a sclerosed vein can be released with a needle at 2-4 weeks and relieves symptoms fast",
    "Hyperpigmentation along treated veins occurs in a substantial minority and usually fades over months but may be permanent - this must be in the consent",
    "Matting, a blush of fine telangiectasia, is a recognized cosmetic complication of sclerotherapy",
    "Review at 6-12 weeks with duplex; residual clusters are re-treated"
  ],
  pearls: [
    "Mark standing. Veins that are obvious in clinic are invisible on the table, and unmarked clusters get missed",
    "Avulse with steady traction rather than a tug; the vein tears and leaves a segment behind that becomes the recurrence",
    "Warn about hyperpigmentation and matting before, not after - they are the complaints that dominate follow-up clinics",
    "Visual and neurologic phenomena after foam are rare, usually transient, and more likely in patients with a patent foramen ovale; keep the volume modest"
  ],
  refs: [
    { t: "SVS/AVF/AVLS clinical practice guidelines on varicose veins and chronic venous disease", u: "https://www.jvascsurg.org/article/S0741-5214(22)02026-8/fulltext" },
    { t: "ESVS 2021 clinical practice guidelines on the management of chronic venous disease", u: "https://www.ejves.com/article/S1078-5884(21)00382-3/fulltext" },
    { t: "StatPearls: Sclerotherapy", u: "https://www.ncbi.nlm.nih.gov/books/NBK555957/" }
  ]
},
{
  id: "vasc-pmt-dvt",
  name: "Pharmacomechanical Thrombectomy for Iliofemoral DVT",
  sec: "vasc",
  present: [
    "Acute iliofemoral deep vein thrombosis, symptoms under 14 days, good functional status, low bleeding risk and a long life expectancy",
    "Phlegmasia cerulea dolens is an emergency indication regardless of the elective criteria",
    "ATTRACT did not reduce post-thrombotic syndrome overall but did reduce moderate-to-severe disease in the iliofemoral subgroup",
    "CAVENT showed reduced post-thrombotic syndrome at 2 and 5 years in iliofemoral disease",
    "Femoropopliteal DVT does not benefit - the indication is confined to the iliofemoral segment"
  ],
  dx: [
    "Duplex confirms thrombus but is limited in the iliac segment by bowel gas and body habitus",
    "CT or MR venography defines the proximal extent, identifies iliac vein compression and plans access",
    "Determine thrombus age - lysis and maceration work on acute thrombus and poorly on chronic organized material",
    "Screen bleeding risk formally; intracranial hemorrhage is the complication that ends the discussion"
  ],
  tx: [
    "Anticoagulation is the baseline for everyone; thrombus removal is an addition to it, never a replacement",
    "Single-session mechanical aspiration thrombectomy avoids a lytic infusion, an intensive care bed and an overnight stay",
    "Pharmacomechanical techniques combine maceration with a reduced lytic dose",
    "Treat the underlying lesion at the same sitting - stenting a May-Thurner compression is what keeps the segment open",
    "Consider an IVC filter only where thrombus extends into the cava and the risk of embolization during manipulation is high; retrieve it afterward"
  ],
  tech: [
    "Prone or lateral position with ultrasound-guided popliteal or mid-femoral vein access, which allows antegrade passage through the whole thrombus",
    "Ascending venography to define the extent and the proximal landing zone",
    "Cross the thrombus with a wire and catheter into the inferior vena cava",
    "For mechanical thrombectomy, advance the aspiration catheter through the thrombus with controlled aspiration, working in segments and monitoring blood loss",
    "For pharmacomechanical treatment, deliver lytic into the thrombus and macerate, then aspirate",
    "Intravascular ultrasound after clearance to identify the underlying compression - it routinely finds lesions venography misses",
    "Stent the underlying lesion with a dedicated venous stent, extending into the cava if needed and ensuring good inflow from below",
    "Complete venography with the leg and the pelvis imaged to confirm brisk flow"
  ],
  after: [
    "Therapeutic anticoagulation continues, with duration and agent decided as for any DVT",
    "Antiplatelet therapy in addition when a stent has been placed, with duration guided by inflow quality",
    "Monitor hemoglobin - mechanical aspiration causes real blood loss that is easy to underestimate",
    "Ambulate early and fit graduated compression for symptom control",
    "Duplex surveillance of the stent at 1, 3, 6 and 12 months then annually; in-stent restenosis is treated with angioplasty",
    "Villalta scoring at follow-up to quantify post-thrombotic syndrome, which is the outcome the intervention exists to prevent"
  ],
  pearls: [
    "ATTRACT read as a flatly negative trial is misleading - the iliofemoral subgroup benefited on severity, and that is the group anyone would select",
    "Clearing thrombus without treating the underlying stenosis rethromboses; intravascular ultrasound before you finish is what finds it",
    "Inflow is the strongest predictor of venous stent patency - a beautifully placed iliac stent above a thrombosed femoral vein will occlude",
    "Popliteal access lets you work antegrade through the entire thrombus; a femoral stick above the clot leaves you working blind against the valve"
  ],
  refs: [
    { t: "ATTRACT trial (N Engl J Med 2017)", u: "https://www.nejm.org/doi/full/10.1056/NEJMoa1615066" },
    { t: "SVS/AVF clinical practice guidelines on early thrombus removal for iliofemoral DVT", u: "https://www.jvascsurg.org/article/S0741-5214(12)00609-1/fulltext" },
    { t: "CHEST guideline and expert panel report: antithrombotic therapy for VTE disease", u: "https://journal.chestnet.org/article/S0012-3692(21)01506-3/fulltext" }
  ]
},
{
  id: "vasc-iliac-vein-stent",
  name: "Iliac Vein Stenting with Intravascular Ultrasound",
  sec: "vasc",
  present: [
    "Symptomatic iliac vein compression - May-Thurner - with leg swelling, venous claudication, or a refractory venous ulcer",
    "Post-thrombotic iliac obstruction after previous iliofemoral DVT",
    "As the completing step after thrombus removal for acute iliofemoral DVT",
    "Asymptomatic compression is found in a large fraction of normal people and is NOT an indication"
  ],
  dx: [
    "CT or MR venography showing compression and, importantly, pelvic collaterals - the collaterals are the sign the compression is hemodynamically real",
    "Intravascular ultrasound is the reference standard and routinely finds lesions venography misses, because the compressed vein is flattened rather than concentrically narrowed",
    "A cross-sectional area reduction above 50% on IVUS is generally the treatment threshold",
    "Assess the femoral inflow, which is the strongest predictor of patency"
  ],
  tx: [
    "Dedicated venous stents: self-expanding, large diameter, high radial force, and long enough to cover the whole lesion",
    "Extend into the inferior vena cava when needed to cover the compression at the confluence",
    "Antiplatelet or anticoagulation afterward, chosen on whether there was a thrombotic event and on the inflow quality",
    "Treat inflow disease at the same sitting; a stent above poor inflow thromboses",
    "Modern dedicated venous stents tolerate crossing the inguinal ligament, and inadequate distal coverage is now a commoner cause of failure than crossing it"
  ],
  tech: [
    "Ultrasound-guided access to the mid-femoral or popliteal vein, which gives a working position below the lesion",
    "Ascending venography in multiple projections, recognizing it will underestimate the lesion",
    "Perform intravascular ultrasound pullback from the cava to the femoral vein, measuring minimum luminal area and identifying the exact proximal and distal extent of disease",
    "Predilate the lesion to the intended stent diameter, warning the patient or anesthetist that pelvic dilation is painful",
    "Deploy the stent covering the full lesion length as defined on IVUS, not on venography, extending 5-10 mm into the cava if the confluence is involved",
    "Postdilate the stent fully; an underexpanded venous stent is a thrombosis waiting to happen",
    "Repeat IVUS after deployment to confirm expansion and full lesion coverage, which is the step that catches the missed distal extent",
    "Confirm brisk inflow from the femoral vein before finishing"
  ],
  after: [
    "Ambulate the same day; early walking supports stent flow",
    "Antithrombotic therapy as planned, with adherence emphasized in the first 3 months when thrombosis risk is highest",
    "Graduated compression for symptom control",
    "Back pain and pelvic discomfort for a few days after dilation is expected",
    "Duplex surveillance at 1, 3, 6 and 12 months then annually; in-stent restenosis is treated with angioplasty",
    "Symptom-based outcome measures - swelling, venous claudication and ulcer healing - matter more than the imaging appearance"
  ],
  pearls: [
    "IVUS changes the plan in a large proportion of cases; a normal-looking venogram in a symptomatic patient should prompt IVUS rather than reassurance",
    "Cover the whole lesion. Under-coverage distally is now the commonest technical failure, and it is invisible on venography",
    "Do not stent an incidental asymptomatic compression - it commits a young patient to a permanent implant and lifelong surveillance for nothing",
    "Inflow, inflow, inflow. If the femoral vein below is chronically occluded, the stent will not stay open"
  ],
  refs: [
    { t: "StatPearls: May-Thurner Syndrome", u: "https://www.ncbi.nlm.nih.gov/books/NBK554377/" },
    { t: "SVS/AVF/AVLS clinical practice guidelines on varicose veins and chronic venous disease", u: "https://www.jvascsurg.org/article/S0741-5214(22)02026-8/fulltext" },
    { t: "ESVS 2021 clinical practice guidelines on the management of chronic venous disease", u: "https://www.ejves.com/article/S1078-5884(21)00382-3/fulltext" }
  ]
},
{
  id: "vasc-ivc-filter-procedure",
  name: "Inferior Vena Cava Filter Placement and Retrieval",
  sec: "vasc",
  present: [
    "Acute venous thromboembolism with an absolute contraindication to anticoagulation - the one uncontested indication",
    "Recurrent pulmonary embolism despite therapeutic anticoagulation",
    "Prophylactic placement in trauma, bariatric and orthopedic patients is common practice on weak evidence",
    "PREPIC showed filters reduce pulmonary embolism at 8 years but increase recurrent DVT with no mortality benefit; PREPIC2 found no benefit of a retrievable filter added to anticoagulation"
  ],
  dx: [
    "CT or cavography to size the cava and identify duplication, a left-sided cava, or a low renal vein - all of which change placement",
    "Confirm there is no thrombus at the intended landing zone; a filter deployed into thrombus is a problem",
    "Identify the lowest renal vein, which defines the top of the infrarenal landing zone",
    "Document the indication AND the retrieval plan in the operative note - the absence of a plan is why filters become permanent"
  ],
  tx: [
    "Use a retrievable filter unless the contraindication to anticoagulation is genuinely permanent",
    "Start anticoagulation as soon as it is safe and retrieve the filter once therapy is established",
    "Retrieve within the recommended window, generally within 3 months, because tissue ingrowth makes late retrieval progressively harder",
    "Suprarenal placement for thrombus extending above the renals, in pregnancy, or with a low renal vein",
    "Book the retrieval appointment at placement and give the patient a card"
  ],
  tech: [
    "Jugular or femoral access under ultrasound guidance; jugular is preferred when femoral thrombus is present",
    "Cavogram in the anteroposterior projection to measure the caval diameter, identify the renal veins and exclude thrombus and anomalies",
    "A cava wider than the device's rated diameter, typically over 28-30 mm, needs a specific large-diameter filter or bilateral iliac filters",
    "Deploy the filter with its apex just below the lowest renal vein, confirming position on a completion cavogram",
    "For retrieval, jugular access, snare the filter hook, advance the sheath over the filter to collapse it, and withdraw",
    "For an embedded filter, escalate: a loop-snare technique, then rigid forceps, then an excimer laser sheath to free the ingrown struts",
    "Complete every retrieval with a cavogram to exclude caval injury, and do not persist beyond a reasonable attempt with escalating force"
  ],
  after: [
    "Access site care as for any venous procedure",
    "Resume or start anticoagulation as soon as it is safe - the filter is a barrier, not a treatment",
    "Arrange and confirm the retrieval appointment before the patient leaves; the system fails these patients, not the device",
    "For a permanent filter, plan periodic imaging for fracture, migration, penetration and caval thrombosis",
    "New back or abdominal pain in a patient with a filter is strut penetration until imaging says otherwise",
    "Document the filter type and date in a place the next clinician will find"
  ],
  pearls: [
    "The commonest complication of filter placement is that it is never retrieved - national retrieval rates have historically been well under half",
    "Book the retrieval at the time of placement. Every system that has improved its retrieval rate did it with a tracking process, not with reminders to individuals",
    "A filter does not treat venous thromboembolism; the clot still needs anticoagulating as soon as it is safe",
    "Know when to stop during a difficult retrieval - caval injury from escalating force is worse than a retained filter"
  ],
  refs: [
    { t: "FDA safety communication: removing retrievable inferior vena cava filters", u: "https://www.fda.gov/medical-devices/safety-communications/removing-retrievable-inferior-vena-cava-filters-fda-safety-communication" },
    { t: "CHEST guideline and expert panel report: antithrombotic therapy for VTE disease", u: "https://journal.chestnet.org/article/S0012-3692(21)01506-3/fulltext" },
    { t: "StatPearls: Inferior Vena Cava Filters", u: "https://www.ncbi.nlm.nih.gov/books/NBK441846/" }
  ]
}
];
