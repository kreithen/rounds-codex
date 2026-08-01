/* Vascular Surgery resident dataset - batch 7 of 12 (entries 31-35).
 * Superficial and chronic venous disease; pulmonary embolism; upper extremity venous.
 * Schema: {id,name,sec,present[],dx[],tx[],pearls[],refs[{t,u}]}  sec="vasc"
 */
const RES_VASC_B7 = [
{
  id: "vasc-cvi-venous-ulcer",
  name: "Chronic Venous Insufficiency and Venous Leg Ulcer",
  sec: "vasc",
  present: [
    "Aching, heaviness and swelling worse at the end of the day and relieved by elevation - the opposite of arterial pain",
    "Skin changes of the gaiter area: hemosiderin staining, lipodermatosclerosis, atrophie blanche and eczema",
    "The venous ulcer sits above the medial malleolus, is shallow with irregular borders and a granulating base, and is relatively painless compared with an arterial ulcer",
    "CEAP classification C0 through C6 grades the clinical severity, with C6 being an active ulcer"
  ],
  dx: [
    "Duplex with the patient standing to assess reflux; more than 500 ms of reversed flow in the superficial system or 1000 ms in the deep system is pathologic",
    "Always measure an ankle-brachial index before applying compression - an ABI under 0.8 makes full compression unsafe and under 0.5 makes it dangerous",
    "Map the superficial, deep and perforator systems, and consider iliac imaging when the swelling is proximal or the ulcer is refractory",
    "Biopsy an ulcer that has not healed in 3 months of good therapy - Marjolin ulcer and vasculitis both masquerade as venous disease"
  ],
  tx: [
    "Compression is the foundation: multilayer compression bandaging to heal, then 30-40 mmHg graduated stockings to prevent recurrence",
    "EVRA showed early endovenous ablation of superficial reflux, within 2 weeks, healed ulcers faster and reduced recurrence compared with deferred intervention",
    "ESCHAR established that surgery plus compression reduces recurrence over compression alone, without changing the healing rate",
    "Pentoxifylline 400 mg three times daily as an adjunct accelerates healing; micronized purified flavonoid fraction has supporting evidence where available",
    "Treat iliac outflow obstruction when present - a refractory ulcer with proximal obstruction will not heal on compression alone"
  ],
  pearls: [
    "Compression fails for two reasons, and they are that nobody checked the arterial supply and that the patient cannot get the stocking on",
    "Refer early rather than after months of dressings - EVRA showed the ablation should happen within 2 weeks, not after failed conservative care",
    "An ulcer that is painful, dry and punched out on the lateral malleolus or the toes is arterial, and compression will make it worse",
    "Recurrence is the real endpoint; healing an ulcer without correcting reflux just resets the clock"
  ],
  refs: [
    { t: "SVS/AVF/AVLS clinical practice guidelines on varicose veins and chronic venous disease", u: "https://www.jvascsurg.org/article/S0741-5214(22)02026-8/fulltext" },
    { t: "EVRA trial (N Engl J Med 2018)", u: "https://www.nejm.org/doi/full/10.1056/NEJMoa1801214" },
    { t: "StatPearls: Venous Insufficiency", u: "https://www.ncbi.nlm.nih.gov/books/NBK430975/" }
  ]
},
{
  id: "vasc-varicose-veins",
  name: "Varicose Veins and Saphenous Ablation",
  sec: "vasc",
  present: [
    "Visible, dilated, tortuous subcutaneous veins over 3 mm, usually in the great or small saphenous distribution",
    "Symptoms are aching, heaviness, itching, night cramps and restless legs, worse with prolonged standing and at the end of the day",
    "Complications that justify intervention regardless of cosmesis: bleeding from a varix, superficial thrombophlebitis, and skin changes",
    "Symptoms correlate poorly with the size of the veins, and the largest veins are often the least symptomatic"
  ],
  dx: [
    "Standing duplex is mandatory before any intervention, mapping the saphenofemoral and saphenopopliteal junctions, the trunks and the perforators",
    "Reflux over 500 ms in the superficial system defines incompetence",
    "Identify the source of the varicosities - treating tributaries without addressing the refluxing trunk guarantees recurrence",
    "Exclude deep venous obstruction before ablating superficial veins that may be functioning as collaterals"
  ],
  tx: [
    "Endovenous thermal ablation, radiofrequency or laser, is first-line and has replaced open stripping in most practice",
    "Nonthermal nontumescent options - cyanoacrylate adhesive closure and mechanochemical ablation - avoid tumescent anesthesia and nerve injury",
    "Ultrasound-guided foam sclerotherapy for tributaries, recurrent disease and tortuous segments not suitable for a catheter",
    "Phlebectomy for the residual varicosities, concurrently or staged",
    "Conservative management with compression stockings for patients who decline intervention, though compression does not correct the underlying reflux"
  ],
  pearls: [
    "Endothermal heat-induced thrombosis is the ablation-specific complication - a duplex within a week of great saphenous ablation identifies thrombus extending into the femoral vein",
    "Saphenous nerve injury tracks with treating the below-knee great saphenous vein; stop the ablation at the knee unless there is a reason not to",
    "Recurrence is usually neovascularization at the junction or a missed accessory vein, not failure of the treated segment",
    "Do not ablate a superficial vein that is carrying the leg's outflow around a deep obstruction - the duplex is what tells you"
  ],
  refs: [
    { t: "SVS/AVF/AVLS clinical practice guidelines on varicose veins and chronic venous disease", u: "https://www.jvascsurg.org/article/S0741-5214(22)02026-8/fulltext" },
    { t: "ESVS 2021 clinical practice guidelines on the management of chronic venous disease", u: "https://www.ejves.com/article/S1078-5884(21)00382-3/fulltext" },
    { t: "StatPearls: Varicose Veins", u: "https://www.ncbi.nlm.nih.gov/books/NBK470194/" }
  ]
},
{
  id: "vasc-superficial-thrombophlebitis",
  name: "Superficial Venous Thrombophlebitis",
  sec: "vasc",
  present: [
    "A tender, erythematous, palpable cord along the course of a superficial vein, most often the great saphenous",
    "Frequently mistaken for cellulitis, which it resembles, and the palpable cord is what distinguishes it",
    "Migratory thrombophlebitis in different sites raises the question of occult malignancy - the Trousseau sign",
    "Thrombophlebitis in a non-varicose vein in a young person warrants a thrombophilia and vasculitis thought, particularly Behcet disease"
  ],
  dx: [
    "Duplex is essential, not optional - it measures the length of thrombus and its distance from the deep system",
    "Concurrent DVT is present in up to 25% and pulmonary embolism in a smaller but real fraction, so the deep system is always scanned",
    "Thrombus within 3 cm of the saphenofemoral or saphenopopliteal junction is treated as if it were a DVT",
    "Repeat imaging in 7-10 days for untreated segments, because propagation toward the junction is what changes management"
  ],
  tx: [
    "Segments 5 cm or longer, or within 3 cm of the deep junction: prophylactic-dose anticoagulation for 45 days",
    "Fondaparinux 2.5 mg daily has the best evidence, from the CALISTO trial, reducing symptomatic thromboembolic complications",
    "Rivaroxaban 10 mg daily is a reasonable oral alternative supported by the SURPRISE trial",
    "Short, distal segments away from the junction: nonsteroidal anti-inflammatory drugs, compression and ambulation",
    "Treat the underlying varicose disease after the acute episode settles, because untreated reflux predicts recurrence"
  ],
  pearls: [
    "This is not a benign nuisance - a quarter have concurrent deep vein thrombosis, and the diagnosis is only made by scanning for it",
    "Antibiotics are not the treatment; the redness is inflammation, not infection, unless there is genuine suppuration",
    "Distance from the junction is the number that drives the decision, so ask the sonographer for it explicitly",
    "Do not use therapeutic-dose anticoagulation for uncomplicated superficial thrombophlebitis - prophylactic dosing is what was studied"
  ],
  refs: [
    { t: "CHEST guideline and expert panel report: antithrombotic therapy for VTE disease", u: "https://journal.chestnet.org/article/S0012-3692(21)01506-3/fulltext" },
    { t: "StatPearls: Superficial Thrombophlebitis", u: "https://www.ncbi.nlm.nih.gov/books/NBK556018/" },
    { t: "ESVS 2021 clinical practice guidelines on the management of chronic venous disease", u: "https://www.ejves.com/article/S1078-5884(21)00382-3/fulltext" }
  ]
},
{
  id: "vasc-pe-intervention",
  name: "Pulmonary Embolism Response and Catheter Intervention",
  sec: "vasc",
  present: [
    "Dyspnea, pleuritic pain, tachycardia and hypoxia, with syncope or hypotension marking the high-risk presentation",
    "Massive (high-risk) means sustained hypotension, a systolic under 90 mmHg for 15 minutes, or the need for vasopressors",
    "Submassive (intermediate-risk) means normotension with right ventricular strain on imaging or echocardiography, or raised troponin or brain natriuretic peptide",
    "Intermediate-high risk combines both imaging and biomarker abnormality and is the group where escalation is debated"
  ],
  dx: [
    "CT pulmonary angiography is the diagnostic standard and also gives the right-to-left ventricular ratio, with a ratio above 0.9 indicating strain",
    "Bedside echocardiography for right ventricular dilation, septal flattening and the McConnell sign",
    "Simplified PESI score stratifies 30-day mortality and identifies candidates for outpatient management",
    "Troponin and BNP for risk stratification in the normotensive patient - they are what move a patient from low to intermediate risk"
  ],
  tx: [
    "Anticoagulation for everyone who can receive it; low-risk patients may be managed as outpatients",
    "High-risk PE: systemic thrombolysis with alteplase 100 mg over 2 hours, or surgical or catheter embolectomy where lysis is contraindicated",
    "Intermediate-risk: PEITHO showed systemic thrombolysis reduced decompensation but doubled major bleeding and caused a tenfold increase in intracranial hemorrhage, so it is not routine",
    "Catheter-directed therapy - reduced-dose thrombolysis or large-bore mechanical aspiration - improves the right-to-left ventricular ratio with less bleeding, on registry and single-arm data",
    "A multidisciplinary pulmonary embolism response team is the practical answer to a decision that spans several specialties"
  ],
  pearls: [
    "Right ventricular failure is the mechanism of death - the patient dies of the right heart, not of the hypoxia, which is why strain markers drive the decision",
    "Fluid loading a failing right ventricle makes it worse; support with a vasopressor and treat the obstruction",
    "The evidence for catheter-directed therapy is largely surrogate endpoints and registries; the randomized mortality data everyone quotes does not yet exist",
    "Any patient escalated beyond anticoagulation deserves a documented bleeding risk assessment - the harm in PEITHO was real"
  ],
  refs: [
    { t: "2019 ESC guidelines for the diagnosis and management of acute pulmonary embolism", u: "https://academic.oup.com/eurheartj/article/41/4/543/5556136" },
    { t: "PEITHO trial (N Engl J Med 2014)", u: "https://www.nejm.org/doi/full/10.1056/NEJMoa1302097" },
    { t: "StatPearls: Pulmonary Embolism", u: "https://www.ncbi.nlm.nih.gov/books/NBK560551/" }
  ]
},
{
  id: "vasc-ue-dvt-paget",
  name: "Upper Extremity DVT and Paget-Schroetter Syndrome",
  sec: "vasc",
  present: [
    "Sudden arm swelling, heaviness and cyanosis with prominent shoulder and chest wall collateral veins",
    "Primary (effort) thrombosis - Paget-Schroetter - occurs in young athletes after repetitive overhead activity, in the dominant arm",
    "Secondary thrombosis is far commoner and is catheter-related or malignancy-related, in an older and sicker population",
    "The underlying lesion in effort thrombosis is venous thoracic outlet compression at the costoclavicular space"
  ],
  dx: [
    "Duplex is the first test but is limited beneath the clavicle, where the lesion actually is",
    "CT or MR venography with the arm in neutral and abducted positions demonstrates the compression and the collaterals",
    "Contrast venography remains the definitive study and is usually done as the first part of the intervention",
    "Thrombophilia testing has a low yield in effort thrombosis and a higher yield in unprovoked secondary disease"
  ],
  tx: [
    "Anticoagulate immediately, as for lower extremity DVT",
    "Catheter-directed thrombolysis early in effort thrombosis, because the arm is young and the thrombus is fresh",
    "First rib resection with scalenectomy and venolysis is the definitive treatment for the underlying compression, commonly within 2-4 weeks of lysis",
    "Do not stent the subclavian vein before decompression - the first rib crushes and fractures the stent",
    "Catheter-related thrombosis: anticoagulate and keep the catheter if it is still needed and functioning, remove it if it is not"
  ],
  pearls: [
    "Anticoagulation alone in a young athlete leaves a compressed vein and a high rate of recurrent thrombosis and residual disability",
    "The sequence is lyse, then decompress, then stent only if a residual lesion remains after the rib is out",
    "A stent placed across the costoclavicular space before rib resection is a well-documented way to make the problem permanent",
    "Upper extremity DVT does embolize - the old teaching that it does not is wrong, and pulmonary embolism occurs in around 6%"
  ],
  refs: [
    { t: "StatPearls: Paget-Schroetter Syndrome", u: "https://www.ncbi.nlm.nih.gov/books/NBK482416/" },
    { t: "SVS reporting standards for thoracic outlet syndrome", u: "https://www.jvascsurg.org/article/S0741-5214(16)30138-3/fulltext" },
    { t: "CHEST guideline and expert panel report: antithrombotic therapy for VTE disease", u: "https://journal.chestnet.org/article/S0012-3692(21)01506-3/fulltext" }
  ]
}
];
