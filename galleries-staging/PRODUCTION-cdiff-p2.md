# For production: `cdiff` page 2 — both mesenteric vessel labels are on the bowel wall, and the mucosa labels are swapped

14 rows flagged, **all 14 measured and all 14 confirmed** (eight of them were [CHECK] rows), plus one
defect the order does not list. Needs a re-render. *Measured on the shipped page (1024×1536),
2026-08-11.*

The page is already at the standard size — no size change needed.

---

## 1. ARTERIAL SUPPLY OF THE COLON — the SMA label is on the cecum

The panel draws the **superior mesenteric artery as a thick red vertical trunk at x 188–198**, with
its arcade fanning left toward the colon. The colon's own **pale marginal artery** runs along the
bowel at x 128–133.

| row | label | ends at | what is under it | correct endpoint |
|---|---|---|---|---|
| 1 | **Superior mesenteric a.** | **(122,1173)** | the **cecum / lower ascending colon bowel wall** | **(192,1150)** the red trunk — 70 px right |
| 10 | Middle colic a. *[CHECK]* | **(120,1090)** | the pale **marginal** artery at the hepatic flexure | the branch ascending from the SMA trunk to the mid-transverse colon |
| 11 | Ileocolic a. *[CHECK]* | arrowhead at **(139,1143)** | **black background** — the colon's medial edge is at x ≈ 133 and the nearest arcade branch is at (152,1152), **13 px further** | **(152,1152)** |
| 12 | Superior rectal a. *[CHECK]* | **(260,1191)** | the marginal artery on the **descending** colon at the sigmoid junction | **(215,1212)** the terminal branch running to the rectum along the panel's bottom |

Rows 10, 11 and 12 are all confirmed as the order describes them, and row 11's estimate of "~13 px
short" is exact.

**One defect not in the order: `Right colic a.` has a broken leader with two endpoints.** A
triangular arrowhead at **(122,1117)** on the colon wall, then a separate dash ending at
**(142,1118)** in black background. A leader with two tips gives the reader two answers — the same
fault as `stroke` p2's ECA row in tranche 2.

## 2. VENOUS DRAINAGE — the SMV is on the bowel, and the IMV is on the wrong side of the body

The **blue venous trunk is unmistakable**: a thick vertical vessel at **x 538–552**, leaving the top
of the panel as a cut end at (545,1088). The ascending colon is at x 450–485.

| row | label | ends at | what is under it | correct endpoint |
|---|---|---|---|---|
| 2 | **Superior mesenteric v.** | **(478,1107)** | the **ascending colon bowel wall** near the hepatic flexure | **(544,1120)** the blue trunk |
| 3 | **Inferior mesenteric v.** | **two dots**, **(481,1143)** and **(481,1160)** | both on the **ascending colon — the patient's RIGHT** | **(510,1202)**, the tributary coming from the descending/sigmoid side |
| 13 | Portal vein (to liver) *[CHECK]* | arrowhead at **(531,1202)** | **black space**, just short of the blue vessel at x 533–545 | **(545,1088)** — the cut end leaving the TOP of the panel, which is the one actually heading to the liver |

**Row 3 is the one to fix first.** The inferior mesenteric vein drains the **left** colon; this label
points at the right colon twice, on a page about a disease of the left and distal colon. And it has
two terminators, like the Right colic row above.

Rows 1 and 2 together mean the same thing in two panels: the artery and the vein that the page names
are both drawn correctly, both large, and **neither is labelled** — both labels are on bowel wall
instead.

## 3. COLON: ANATOMY & REGIONS — three regional labels one segment too proximal

The figure distinguishes the segments clearly: the colon is **haustrated with a visible taenia**, and
the **rectum is a smooth, wide, non-haustrated tube** at x 265–330, y 470–580.

| row | label | ends at | what is under it | correct endpoint |
|---|---|---|---|---|
| 8 | Sigmoid colon *[CHECK]* | **(470,428)** | the **straight vertical descending limb**, only **80 px** below the `Descending colon` dot at (462,348) and well above the sigmoid loop | **(390,505)** the S-shaped segment running left along the bottom |
| 7 | Rectum *[CHECK]* | **(455,510)** | **haustrated** bowel at the descending-to-sigmoid curve | **(300,545)** the smooth non-haustrated tube |
| 4 | **Anal canal** | diamond dot at **(386,534)** | **haustrated, taenia-bearing sigmoid colon** along the bottom of the frame | **(300,575)** the distal end of the rectal tube, at/below the panel edge |

Read down the column, the three are a **displaced series**: sigmoid lands on descending, rectum lands
on sigmoid, anal canal lands on sigmoid too. That is fault 2 in the brief.

## 4. `Taenia coli` is on the haustral wall, beside the taenia

Row 9, confirmed, and the order's estimate is right.

| label | ends at | what is under it |
|---|---|---|
| Ascending colon | **(173,332)** | the colon — **correct**, it names the whole segment |
| **Taenia coli (longitudinal muscle bands)** | **(169,366)** | the **free lateral haustral wall** |
| Haustra (pouches) | **(164,424)** | the same lateral wall — **correct**, that is what a haustrum is |

The taenia itself is drawn: a **tan longitudinal band at x 186–192**, running the length of the
colon, plainly visible at 8×. The label sits **19 px lateral of it**, on the structure the label two
rows below already names.

**Correct endpoint: (189,366).**

## 5. NORMAL COLONIC MUCOSA — the two surface labels are swapped

Rows 5 and 6, both confirmed. Sampling a column at **x = 95** settles the layers with no judgement:

| y at x=95 | RGB | layer |
|---|---|---|
| ≤ 756 | (6,0,4) | black background — **there is no tissue above y = 757** |
| **758–782** | (244,212,225) → (243,216,223) | **the pale translucent film** — the mucus layer |
| **783 onward** | (189,120,139) → (121,33,55) | the darker epithelial band and the crypt mouths |

| row | label | ends at | which layer |
|---|---|---|---|
| 6 | Intact epithelium *[CHECK]* | **(110,760)** | **inside the pale film** — the mucus |
| 5 | **Normal mucus layer** | **(117,787)** | **below it**, at the crypt mouths — the epithelium |

**They are swapped.** Correct: `Normal mucus layer` → **(110,764)**, `Intact epithelium` →
**(110,786)**.

This panel is the page's normal-versus-diseased comparison, and the C. difficile half beside it turns
on the mucus layer being stripped — so having mucus and epithelium the wrong way round on the
*normal* side undermines the comparison the whole panel exists to make.

## 6. INNERVATION — the vagus label is on the distal colon

Row 14, confirmed. Two yellow leaders come in from the right and land 63 px apart **on the same
descending limb**:

| label | terminus | what is under it |
|---|---|---|
| **Parasympathetic (vagus n.) → proximal colon** | bright yellow knot at **(851,1110)** | the **descending colon**, just below the splenic flexure |
| Parasympathetic (pelvic splanchnic n.) → distal colon | bright yellow knot at **(842,1172)** | the descending colon — **correct** |

The vagus supplies the **cecum, ascending and transverse colon**, which on this panel is the whole
opposite side: the ascending limb at x 665–700 and the transverse across the top at x 700–840.

**Correct endpoint: (690,1140).**

The two labels distinguish proximal from distal supply, and the splenic flexure is precisely the
watershed between them — so landing the proximal label just distal to it inverts the one fact the
row exists to teach.

---

## Summary of endpoints

| # | label | now | should be |
|---|---|---|---|
| 1 | Superior mesenteric a. | (122,1173) cecum wall | (192,1150) the red trunk |
| 2 | Superior mesenteric v. | (478,1107) ascending colon wall | (544,1120) the blue trunk |
| 3 | Inferior mesenteric v. | (481,1143) and (481,1160), ascending colon | (510,1202) the left-colon tributary |
| 4 | Anal canal | (386,534) sigmoid | (300,575) distal rectal tube |
| 5 | Normal mucus layer | (117,787) crypt mouths | (110,764) the pale film |
| 6 | Intact epithelium | (110,760) the pale film | (110,786) the epithelial band |
| 7 | Rectum | (455,510) haustrated bowel | (300,545) the smooth tube |
| 8 | Sigmoid colon | (470,428) descending limb | (390,505) the S-shaped segment |
| 9 | Taenia coli | (169,366) haustral wall | (189,366) the tan longitudinal band |
| 10 | Middle colic a. | (120,1090) marginal artery | the SMA branch to the mid-transverse colon |
| 11 | Ileocolic a. | (139,1143) black background | (152,1152) the arcade branch |
| 12 | Superior rectal a. | (260,1191) descending marginal artery | (215,1212) the terminal branch to the rectum |
| 13 | Portal vein (to liver) | (531,1202) black space | (545,1088) the cut end at the panel's top |
| 14 | Parasympathetic (vagus n.) | (851,1110) descending colon | (690,1140) the ascending/transverse colon |
| — | Right colic a. | two tips, (122,1117) and (142,1118) | one tip, on an arcade branch |

Correct as drawn: **Ascending colon** (173,332), **Haustra** (164,424), **Descending colon**
(462,348), **Parasympathetic (pelvic splanchnic n.)** (842,1172).
