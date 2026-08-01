# Vascular Surgery — top 60 resident topics

**Specialty code: `vasc`.** Displays as "Vascular Surgery". The Resident Mode grid and the
Clinical Updates index both sort by display NAME, so it lands last, after Urology.

Section-2 title: **"Top 60 Vascular Surgery Topics"**, matching the other 60-entry sets.

`vasc` is the last of the 24 specialties with no content — it has been the single empty
card on the Resident Mode grid since the grid shipped.

## How this list was built

Grounded in the **American Board of Surgery Vascular Surgery Qualifying Exam content
outline** and the **VSCORE / SVS vascular surgery core curriculum** domains, then cut to
the granularity the other 60-entry specialties use — Infectious Disease's 60 was the
calibration file.

One entry per *decision the vascular surgeon makes*, not one per vessel. That is why
"Chronic Limb-Threatening Ischemia" and "Claudication" are separate entries despite being
the same disease: the decision is completely different at each end, and BEST-CLI and
BASIL-2 only apply at one of them.

Open-versus-endovascular is treated inside each anatomic entry rather than as its own
topic, because that is how the decision actually presents.

- [SVS clinical practice guidelines](https://www.svs.org/clinical-practice/clinical-practice-guidelines/)
- [ABS Vascular Surgery certification](https://www.absurgery.org/get-certified/vascular-surgery/)

## The 60

**Aortic**
1. Abdominal Aortic Aneurysm - Elective Repair
2. Ruptured Abdominal Aortic Aneurysm
3. Thoracic and Thoracoabdominal Aortic Aneurysm
4. Type B Aortic Dissection
5. Endoleak and Post-EVAR Surveillance
6. Aortic Graft Infection and Aortoenteric Fistula
7. Inflammatory and Mycotic Aortic Aneurysm

**Peripheral arterial occlusive disease**
8. Intermittent Claudication
9. Chronic Limb-Threatening Ischemia
10. Acute Limb Ischemia
11. Aortoiliac Occlusive Disease
12. Femoropopliteal Occlusive Disease
13. Infrapopliteal Disease and Pedal Revascularization
14. Popliteal Artery Aneurysm
15. Popliteal Entrapment and Adventitial Cystic Disease

**Cerebrovascular**
16. Asymptomatic Carotid Stenosis
17. Symptomatic Carotid Stenosis and Timing of Intervention
18. Carotid Stenting and Transcarotid Artery Revascularization
19. Vertebrobasilar and Subclavian Disease
20. Carotid Body Tumor
21. Carotid Dissection and Fibromuscular Dysplasia

**Visceral and renal**
22. Acute Mesenteric Ischemia
23. Chronic Mesenteric Ischemia
24. Median Arcuate Ligament Syndrome
25. Renal Artery Stenosis
26. Visceral and Renal Artery Aneurysm

**Venous**
27. Deep Vein Thrombosis and Anticoagulation
28. Iliofemoral DVT and Catheter-Directed Thrombolysis
29. May-Thurner Syndrome and Venous Stenting
30. Inferior Vena Cava Filters
31. Chronic Venous Insufficiency and Venous Leg Ulcer
32. Varicose Veins and Saphenous Ablation
33. Superficial Venous Thrombophlebitis
34. Pulmonary Embolism Response and Catheter Intervention
35. Upper Extremity DVT and Paget-Schroetter Syndrome

**Dialysis access**
36. Hemodialysis Access Planning
37. Arteriovenous Fistula Creation and Maturation
38. Dialysis Access Steal Syndrome
39. Access Thrombosis, Aneurysm and Infection
40. Central Venous Occlusive Disease and Tunneled Catheters

**Trauma and compression syndromes**
41. Extremity Vascular Trauma
42. Blunt Thoracic Aortic Injury
43. Neck and Junctional Vascular Trauma
44. Resuscitative Endovascular Balloon Occlusion of the Aorta
45. Thoracic Outlet Syndrome

**Limb salvage, wound and amputation**
46. Diabetic Foot Ulcer and Foot Infection
47. WIfI Staging and the Limb Salvage Decision
48. Major Amputation and Level Selection
49. Minor Amputation and Foot Salvage
50. Lymphedema

**Perioperative, medical and technical**
51. Perioperative Cardiac Risk in Vascular Surgery
52. Antithrombotic Therapy After Revascularization
53. Large Vessel Vasculitis
54. Raynaud Phenomenon and Vasospastic Disorders
55. Hypercoagulable States and Heparin-Induced Thrombocytopenia
56. Prosthetic Graft Infection of the Extremity
57. Compartment Syndrome and Fasciotomy
58. Contrast-Associated Kidney Injury and Radiation Safety
59. Noninvasive Vascular Laboratory Testing
60. Arterial Access and Closure Complications

## What still needs Dr. Kreithen

This list is the *scope* proposal. The 60 entries built from it are clinical teaching
content and go through the same medical gate as everything else — **no independent
medical re-read has been done, and the entries are written for review, not shipped on my
own judgement.** Flag any topic that should be swapped before or after the build; a
name change after the merge means re-running the merge, not editing `resident.json`.
