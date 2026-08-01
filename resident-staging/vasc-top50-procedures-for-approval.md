# Vascular Surgery — top 50 resident procedures

**Specialty code: `vasc`.** Section-2 title: **"Top 50 Vascular Surgery Procedures"**.

**This REPLACES the 60-topic set** built earlier the same day (physician's decision,
2026-08-01). Vascular surgery is an operative specialty, and the two other operative sets
in the app — Surgery (General) and Anesthesiology — are both procedure-led with the
extended schema. A topic list made `vasc` the odd one out.

## Schema

Extended, as for all `gs` and `anes` entries:

`{id, name, sec, present[], dx[], tech[], tx[], after[], pearls[], refs[{t,u}]}`

`resDetailHTML` renders them in the order Presentation, Diagnosis, Treatment / Management,
**Technique**, **Aftercare / Recovery**, Pearls & Pitfalls, References. The two extended
blocks are skipped when absent, which is why the 60-topic set rendered correctly without
them — and why a procedure without them would look thin next to a General Surgery entry.

For a procedure entry the fields are read as:

- **present** — the indication. When is this operation the right operation.
- **dx** — the workup that must be complete before the patient is on the table, and the
  anatomic criteria that decide suitability.
- **tech** — how it is actually done, step by step, at the level a resident scrubbing it
  needs.
- **tx** — the peri-procedural decisions around the operation: conduit, anticoagulation,
  adjuncts, bail-outs.
- **after** — recovery, surveillance, and the complications to watch for and when.
- **pearls** — what a good senior resident says over the drapes.

## How this list was built

The ABS Vascular Surgery certifying exam covers operative management across aortic,
cerebrovascular, peripheral, visceral, venous, access and trauma domains; the VSCORE
curriculum enumerates the index cases. One entry per *operation*, with open and
endovascular versions of the same disease split where the conduct differs enough to
warrant it (open AAA and EVAR; CEA and TCAR).

## The 50

**Open aortic**
1. Open Infrarenal Abdominal Aortic Aneurysm Repair
2. Open Repair of Ruptured Abdominal Aortic Aneurysm
3. Aortobifemoral Bypass
4. Open Thoracoabdominal Aortic Aneurysm Repair
5. Aortic Graft Excision and Neoaortoiliac System Reconstruction

**Endovascular aortic**
6. Standard Infrarenal EVAR
7. Fenestrated and Branched EVAR
8. Thoracic Endovascular Aortic Repair
9. Endoleak Reintervention
10. Iliac Branch Device and Hypogastric Preservation

**Cerebrovascular**
11. Carotid Endarterectomy with Patch Angioplasty
12. Eversion Carotid Endarterectomy
13. Transcarotid Artery Revascularization
14. Transfemoral Carotid Artery Stenting
15. Carotid Body Tumor Resection
16. Carotid-Subclavian Bypass and Subclavian Transposition

**Lower extremity open**
17. Femoral Endarterectomy and Profundaplasty
18. Above-Knee Femoropopliteal Bypass
19. Femorodistal Bypass with Vein
20. Femorofemoral Crossover Bypass
21. Axillobifemoral Bypass
22. Popliteal Artery Aneurysm Repair
23. Popliteal Entrapment Release

**Lower extremity endovascular**
24. Iliac Angioplasty and Kissing Stents
25. Femoropopliteal Angioplasty and Drug-Coated Balloon
26. Tibial and Pedal Angioplasty with Retrograde Access
27. Atherectomy and Intravascular Lithotripsy
28. Catheter-Directed Thrombolysis for Acute Limb Ischemia
29. Surgical Thromboembolectomy

**Visceral and renal**
30. Antegrade and Retrograde Mesenteric Bypass
31. Retrograde Open Mesenteric Stenting
32. Superior Mesenteric Artery Embolectomy
33. Renal and Mesenteric Artery Stenting
34. Median Arcuate Ligament Release
35. Visceral Artery Aneurysm Embolization

**Venous**
36. Endovenous Thermal Ablation of the Saphenous Vein
37. Ambulatory Phlebectomy and Foam Sclerotherapy
38. Pharmacomechanical Thrombectomy for Iliofemoral DVT
39. Iliac Vein Stenting with Intravascular Ultrasound
40. Inferior Vena Cava Filter Placement and Retrieval
41. Catheter-Based Pulmonary Embolism Intervention

**Dialysis access**
42. Radiocephalic and Brachiocephalic Fistula Creation
43. Brachiobasilic Vein Transposition
44. Arteriovenous Graft Placement
45. Tunneled Dialysis Catheter Insertion
46. Access Revision for Steal and Thrombosis

**Trauma, adjuncts and amputation**
47. Temporary Vascular Shunting and Extremity Arterial Repair
48. Four-Compartment Lower Leg Fasciotomy
49. Below-Knee and Above-Knee Amputation
50. Transmetatarsal and Ray Amputation

## Medical gate

Same as the topic set: **no independent medical re-read has been done.** Operative steps,
doses and thresholds are written for the physician's review, not shipped on my judgement.
Technique descriptions in particular vary legitimately between training programs, and
where a step is genuinely surgeon-preference the entry should say so rather than assert
one way.
