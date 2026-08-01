/* Vascular Surgery resident dataset - batch 6 of 12 (entries 26-30).
 * Visceral aneurysm; deep venous disease.
 * Schema: {id,name,sec,present[],dx[],tx[],pearls[],refs[{t,u}]}  sec="vasc"
 */
const RES_VASC_B6 = [
{
  id: "vasc-visceral-aneurysm",
  name: "Visceral and Renal Artery Aneurysm",
  sec: "vasc",
  present: [
    "Usually asymptomatic and found incidentally on cross-sectional imaging done for another reason",
    "Splenic artery is the commonest site at around 60%, then hepatic, then superior mesenteric; renal artery aneurysms are separately common",
    "Splenic aneurysm in pregnancy is the classic catastrophe - rupture risk rises markedly in the third trimester with high fetal and maternal mortality",
    "Rupture presents as sudden abdominal pain and shock; hepatic artery aneurysm can present with hemobilia, jaundice and pain"
  ],
  dx: [
    "CTA defines size, location, neck and the relationship to branches, and distinguishes true aneurysm from pseudoaneurysm",
    "Pseudoaneurysm after pancreatitis, trauma or intervention is a different entity with a much higher rupture risk and is repaired regardless of size",
    "Repair thresholds: splenic and most visceral aneurysms at 2 cm, or any size in a woman of childbearing potential or a transplant candidate",
    "Renal artery aneurysm is repaired at around 2 cm, or for hypertension, dissection, embolization or planned pregnancy"
  ],
  tx: [
    "Endovascular therapy is first-line for most: coil embolization for a saccular aneurysm with a narrow neck, or a covered stent where the parent vessel must stay patent",
    "Splenic artery aneurysm distal to the pancreatic branches can be coiled with front-and-back-door technique and the spleen usually survives on collaterals",
    "Hepatic artery aneurysm needs the parent vessel preserved wherever possible, because hepatic collateral supply is less reliable, particularly after transplantation",
    "Open repair with resection and reconstruction for complex bifurcation aneurysms, and ex vivo repair with autotransplantation for complex hilar renal aneurysms",
    "Any pseudoaneurysm is treated urgently, whatever its size"
  ],
  pearls: [
    "True aneurysm versus pseudoaneurysm is the first question, because it changes the threshold from 2 cm to any size",
    "A splenic artery aneurysm in a woman who may become pregnant is repaired regardless of diameter - the rupture mortality in pregnancy is the reason",
    "Coiling only the distal side of a saccular aneurysm leaves it filling retrogradely through collaterals; occlude both sides",
    "Segmental arterial mediolysis and fibromuscular dysplasia both cause multiple visceral aneurysms in younger patients and need a systemic look"
  ],
  refs: [
    { t: "SVS clinical practice guidelines on the management of visceral aneurysms", u: "https://www.jvascsurg.org/article/S0741-5214(20)30117-5/fulltext" },
    { t: "StatPearls: Splenic Artery Aneurysm", u: "https://www.ncbi.nlm.nih.gov/books/NBK430790/" },
    { t: "StatPearls: Renal Artery Aneurysm", u: "https://www.ncbi.nlm.nih.gov/books/NBK560657/" }
  ]
},
{
  id: "vasc-dvt-anticoagulation",
  name: "Deep Vein Thrombosis and Anticoagulation",
  sec: "vasc",
  present: [
    "Unilateral limb swelling, pain and warmth, though a substantial proportion are clinically silent and present as pulmonary embolism",
    "Provoked by surgery, immobility, malignancy, hormones or pregnancy; unprovoked disease changes the duration of treatment",
    "Distal (calf) thrombus behaves differently from proximal disease and does not always need anticoagulation",
    "Phlegmasia cerulea dolens - a tense, cyanotic, painful limb with compartment pressure - is a limb-threatening emergency"
  ],
  dx: [
    "Wells score stratifies pretest probability; a low score plus a negative high-sensitivity D-dimer excludes DVT without imaging",
    "Age-adjusted D-dimer threshold, age times 10 mcg/L over 50 years, safely reduces unnecessary imaging in older patients",
    "Whole-leg compression duplex is the diagnostic standard; a proximal-only study needs a repeat at one week if the first is negative and suspicion persists",
    "Occult malignancy screening in unprovoked DVT is limited to age-appropriate screening - the SOME trial showed extensive CT screening adds nothing"
  ],
  tx: [
    "Direct oral anticoagulants are first-line: apixaban 10 mg twice daily for 7 days then 5 mg twice daily, or rivaroxaban 15 mg twice daily for 21 days then 20 mg daily",
    "Low molecular weight heparin remains preferred in pregnancy, and in cancer-associated thrombosis DOACs are now acceptable except with luminal gastrointestinal tumors where bleeding is higher",
    "Warfarin is reserved for antiphospholipid syndrome, mechanical valves, and severe renal impairment",
    "Duration: 3 months for provoked disease with a transient risk factor, extended and indefinite for unprovoked or recurrent disease and for active cancer",
    "Isolated distal DVT in a low-risk patient can be managed with serial imaging over 2 weeks rather than anticoagulation"
  ],
  pearls: [
    "Graduated compression stockings do not prevent post-thrombotic syndrome - the SOX trial was negative - but they do help symptoms, which is a different justification",
    "Extended treatment does not have to be full dose: apixaban 2.5 mg twice daily after the first 6 months maintains protection with less bleeding",
    "A negative D-dimer only helps when the pretest probability is low; ordering it in a high-probability patient wastes time and does not change the imaging decision",
    "Reassess the indication at every visit - indefinite anticoagulation means annual reconsideration, not never thinking about it again"
  ],
  refs: [
    { t: "CHEST guideline and expert panel report: antithrombotic therapy for VTE disease", u: "https://journal.chestnet.org/article/S0012-3692(21)01506-3/fulltext" },
    { t: "ASH 2020 guidelines for management of venous thromboembolism", u: "https://ashpublications.org/bloodadvances/article/4/19/4693/463998" },
    { t: "StatPearls: Deep Venous Thrombosis", u: "https://www.ncbi.nlm.nih.gov/books/NBK470194/" }
  ]
},
{
  id: "vasc-iliofemoral-dvt-cdt",
  name: "Iliofemoral DVT and Catheter-Directed Thrombolysis",
  sec: "vasc",
  present: [
    "Whole-leg swelling from the groin down, far more symptomatic than a femoropopliteal thrombus, with a high burden of post-thrombotic syndrome",
    "Post-thrombotic syndrome develops in up to half of iliofemoral cases treated with anticoagulation alone, with venous claudication and ulceration",
    "Phlegmasia cerulea dolens is the extreme, with arterial compromise from venous hypertension and a real risk of limb loss",
    "Young patients with a long life expectancy carry the greatest lifetime burden from post-thrombotic disease"
  ],
  dx: [
    "Duplex confirms the thrombus but is limited in the iliac segment by bowel gas and body habitus",
    "CT or MR venography defines the proximal extent, identifies an underlying iliac vein compression, and plans access",
    "Determine thrombus age - lysis works on acute thrombus under 14 days and poorly on chronic organized thrombus",
    "Villalta score quantifies post-thrombotic syndrome and is the outcome measure the trials used"
  ],
  tx: [
    "Anticoagulation is the baseline for everyone, and thrombus removal is an addition to it, never a replacement",
    "ATTRACT found pharmacomechanical thrombolysis did not reduce post-thrombotic syndrome overall, but did reduce moderate-to-severe disease in the iliofemoral subgroup",
    "CAVENT showed a reduction in post-thrombotic syndrome at 2 and 5 years with catheter-directed thrombolysis in iliofemoral disease",
    "Select for intervention: acute iliofemoral thrombus, symptoms under 14 days, good functional status, low bleeding risk, and a long life expectancy",
    "Treat the underlying lesion at the same sitting - stenting a May-Thurner compression after lysis is what keeps the segment open",
    "Phlegmasia is an emergency indication for thrombus removal regardless of the elective criteria, with fasciotomy if compartment pressures are raised"
  ],
  pearls: [
    "ATTRACT is often quoted as a negative trial and read that way it is misleading - the iliofemoral subgroup did benefit on severity, which is the group anyone would treat",
    "Lysis without treating the underlying stenosis rethromboses; find the lesion before you finish",
    "Intracranial hemorrhage is the complication that ends the discussion - screen for bleeding risk carefully, and do not offer this to a marginal candidate",
    "Femoropopliteal DVT does not need thrombus removal; the benefit is confined to the iliofemoral segment"
  ],
  refs: [
    { t: "ATTRACT trial (N Engl J Med 2017)", u: "https://www.nejm.org/doi/full/10.1056/NEJMoa1615066" },
    { t: "SVS/AVF clinical practice guidelines on early thrombus removal for iliofemoral DVT", u: "https://www.jvascsurg.org/article/S0741-5214(12)00609-1/fulltext" },
    { t: "CHEST guideline and expert panel report: antithrombotic therapy for VTE disease", u: "https://journal.chestnet.org/article/S0012-3692(21)01506-3/fulltext" }
  ]
},
{
  id: "vasc-may-thurner",
  name: "May-Thurner Syndrome and Venous Stenting",
  sec: "vasc",
  present: [
    "Compression of the left common iliac vein between the right common iliac artery and the fifth lumbar vertebra",
    "Presents as left leg swelling, left iliofemoral DVT in a young woman, or chronic venous hypertension without ever having had a documented thrombus",
    "Classically a woman in the second to fourth decade, and the left-sided predominance of iliofemoral DVT is the epidemiologic fingerprint",
    "Some degree of compression is present in a large fraction of asymptomatic people, so imaging alone does not make the diagnosis"
  ],
  dx: [
    "CT or MR venography shows the compression and the pelvic collaterals, which are the sign that the compression is hemodynamically real",
    "Intravascular ultrasound is the reference standard and routinely finds lesions that venography misses; a cross-sectional area reduction above 50% is generally treated",
    "Venography alone underestimates the lesion because the compressed vein is flattened rather than narrowed in one plane",
    "Assess for the underlying thrombophilia and other provoking factors, because the compression is a substrate rather than the whole explanation"
  ],
  tx: [
    "Dedicated venous stents are the treatment - self-expanding, large diameter, with high radial force, extended into the inferior vena cava if needed to cover the lesion",
    "Treat only symptomatic patients; incidental compression on a scan is not an indication",
    "Antiplatelet or anticoagulation after stenting, with duration guided by whether there was a thrombotic event and by the residual inflow",
    "Address inflow disease at the same time - a stent with poor femoral inflow thromboses, and inflow is the strongest predictor of patency",
    "Surveillance duplex to detect in-stent restenosis, which is treated with angioplasty"
  ],
  pearls: [
    "Intravascular ultrasound changes the plan in a large proportion of cases; a normal-looking venogram with a symptomatic patient should prompt IVUS, not reassurance",
    "Do not stent an asymptomatic compression found incidentally - it commits a young patient to a permanent implant and lifelong surveillance",
    "Extending the stent across the inguinal ligament used to be avoided; modern dedicated venous stents tolerate it and inadequate distal coverage is a commoner cause of failure",
    "Left leg DVT in a young woman should prompt a look at the iliac vein, because treating the clot without the lesion invites recurrence"
  ],
  refs: [
    { t: "StatPearls: May-Thurner Syndrome", u: "https://www.ncbi.nlm.nih.gov/books/NBK554377/" },
    { t: "SVS/AVF/AVLS clinical practice guidelines on varicose veins and chronic venous disease", u: "https://www.jvascsurg.org/article/S0741-5214(22)02026-8/fulltext" },
    { t: "ESVS 2021 clinical practice guidelines on the management of chronic venous disease", u: "https://www.ejves.com/article/S1078-5884(21)00382-3/fulltext" }
  ]
},
{
  id: "vasc-ivc-filter",
  name: "Inferior Vena Cava Filters",
  sec: "vasc",
  present: [
    "The one uncontested indication is acute venous thromboembolism with an absolute contraindication to anticoagulation",
    "Recurrent pulmonary embolism despite therapeutic anticoagulation is the second accepted indication",
    "Prophylactic placement in trauma, bariatric surgery and orthopedic patients is common practice with weak supporting evidence",
    "Complications present late: filter fracture, migration, caval penetration, caval thrombosis, and pain from strut perforation"
  ],
  dx: [
    "CT venography or venography to size the cava and identify duplication, a left-sided cava, or a low renal vein - all of which change placement",
    "Confirm there is no thrombus at the intended landing zone",
    "Document the indication and the retrieval plan in the operative note - the absence of a plan is why filters become permanent",
    "PREPIC showed filters reduce pulmonary embolism at 8 years but increase recurrent DVT, with no mortality benefit"
  ],
  tx: [
    "Use a retrievable filter unless the contraindication to anticoagulation is genuinely permanent",
    "Start anticoagulation as soon as it is safe, and retrieve the filter once it is established",
    "Retrieve within the recommended window, generally within 3 months, because tissue ingrowth makes late retrieval progressively harder",
    "PREPIC2 found a retrievable filter plus anticoagulation gave no reduction in recurrent pulmonary embolism over anticoagulation alone",
    "Advanced retrieval techniques - laser sheath, forceps, loop snare - for the embedded filter, at a center that does them regularly"
  ],
  pearls: [
    "The filter that is never retrieved is the commonest complication of filter placement; national retrieval rates have historically been well under half",
    "A filter is not a treatment for venous thromboembolism, it is a mechanical barrier - the clot still needs anticoagulating as soon as it is safe",
    "Book the retrieval appointment at the time of placement and give the patient a card; the system fails these patients, not the device",
    "The FDA safety communication on retrievable filters is worth quoting to a team that places them reflexively in trauma"
  ],
  refs: [
    { t: "FDA safety communication: removing retrievable inferior vena cava filters", u: "https://www.fda.gov/medical-devices/safety-communications/removing-retrievable-inferior-vena-cava-filters-fda-safety-communication" },
    { t: "CHEST guideline and expert panel report: antithrombotic therapy for VTE disease", u: "https://journal.chestnet.org/article/S0012-3692(21)01506-3/fulltext" },
    { t: "StatPearls: Inferior Vena Cava Filters", u: "https://www.ncbi.nlm.nih.gov/books/NBK441846/" }
  ]
}
];
