# Corrected artwork awaiting deploy

Held on `claude/anatomy-label-corrections-j58lf1` deliberately (physician's call, 2026-08-10):
**batch cardiology corrections and deploy once**, rather than a second deploy for a single dot
during the other session's launch week. This project is not launch-blocking.

## 1. `aortic-dissection` page 1 — second orphan dot

| | |
|---|---|
| file | `aortic-dissection-01-PENDING-v2-page.png` (+ .jpg, + panel crop) |
| supersedes | the v89 page currently live |
| diff vs live | **(363,302)–(388,315) = 25×13 px**; everything else byte-identical |
| orphan dot (374,308) | 32 → 12 bright px — residual is the reinstated leader line passing through |
| terminal dot (402,304) | 18 → **18, untouched** |
| approved | yes, 2026-08-10 |

**What it fixes.** The "Aortic root" leader carried **two** dots — seven dots on the page for six
labels. The rightmost (402,304) is the real terminus on the aortic root; the one at (374,308) sat
mid-line on the right atrial appendage, attached to nothing. A reader tracing the leader hit the
first dot and read "aortic root" as the atrial appendage.

**Pre-existing, not introduced by us** — verified against the pre-v89 blob (`beb5531`), which carries
16 bright pixels there against the shipped file's 13, a difference explained entirely by JPEG
re-encoding.

**Method.** Harder than the v89 stray, which was a dead-end stub that could be erased wholesale.
This dot straddles a **live leader that has to survive**, so: clone-fill the bulge from tissue 16 px
below (clear of both dot and line), then redraw the 1 px stroke across the gap, supersampled 4×,
matching measured brightness (~160) and the line's real slope (y=309 at x=360 → y=306 at x=394).

### Deploy sequence when the batch ships
1. copy the PNG over `aortic-dissection-upload/assets/aortic-dissection/aortic-dissection-01.jpg`
   at **q92** (matches the v89 encode)
2. regenerate `gthumbs/aortic-dissection-01.jpg` at 320×480 q82
3. `python3 scripts/rebuild_gallery_pdf.py <root> aortic-dissection` — the PDF is a build artifact
   and drifts otherwise
4. `python3 scripts/verify_gallery_pdfs.py <root> aortic-dissection`
5. headless boot on the shipped bytes, then push and confirm `/version.txt`

**The page stays 915×1373**, not the 1024×1536 standard. A production re-render from source would fix
the size, this dot and the other 41 `aortic-dissection` findings in one pass — this local fix is a
stopgap for a live defect, not a substitute for that.

---

## 2. `chf` page 1 — "Left Ventricular Dysfunction" pointed at the left atrium

| | |
|---|---|
| file | `chf-01-FIXED-page.png` (+ `.jpg` at q82/4:2:0, the original's own encode) |
| target | `assets/heart-failure/hf-01.jpg`, 1138×1707 |
| moved | dot **(758,422) → (768,730)**; leader redrawn from its elbow at (878,260) |
| diff vs live | **(742,256)–(884,738)**; **0 pixels differ outside** that window |
| other four dots | (782,551) (814,656) (802,809) (731,921) — position **and blob area byte-identical** |
| approved | *awaiting Dr. Kreithen* |

**What it fixes.** The dot sat in the gap between the left atrial appendage and a cut left pulmonary
vein — atrium and venous inflow, not ventricle. The new endpoint is on the **left ventricular free
wall, well lateral to the anterior interventricular groove**, so it is unambiguously LV and not
septum or RV.

**Why it lands there and not closer.** The four other dots run down the LV border in a fan from the
label column, and the label order does not match the anatomy order — every straight route from the
"Left Ventricular Dysfunction" label to LV muscle either passes within a dot's radius of the
"Pulmonary Congestion" or "Ventricular Remodeling" marker, or ends on the interventricular groove.
The chosen endpoint clears both markers by ~28 px and sits 81 px from the nearest dot. It **crosses
the Pulmonary Congestion leader once**, at (820,507) over dark background; that crossing is
unavoidable given the label ordering and is the reason the position was chosen by search rather than
by eye.

**Method.** Two different erases, because one does not work over both backgrounds:
- over the dark gap, interpolate the clean pixels 9 px either side of the stroke;
- where the leader crosses the **pulmonary vein wall** (y 370–412), that fails — the wall's banding
  and specular rim run *horizontally*, so a perpendicular interpolation smears the rim. There the
  stroke is replaced by the mean of the pixels 10 px left and right **on the same row**, which
  preserves the banding. 16 px and 22 px offsets were tried and both duplicated the rim; 10 px is
  clean at 6×.
- the dot itself is clone-filled from 24 px to the right, an offset chosen by ring statistics over
  nine candidates (dest mean 34.3 / σ 27.8 vs donor 35.6 / σ 30.4 — the next best was 3× worse).

**The new marker matches the page's own dots**: 61 bright px against the existing five at 50–67.

### Deploy sequence when the batch ships
1. copy the PNG over `assets/heart-failure/hf-01.jpg` at **q82, subsampling 2** — that is the
   original file's exact quantization table and chroma sampling, verified, not guessed
2. regenerate `assets/heart-failure/thumb-01.jpg` at 320×480 q82 (this gallery uses a **local**
   `thumb-NN.jpg`, not `gthumbs/`)
3. `python3 scripts/rebuild_gallery_pdf.py <root> chf`
4. `python3 scripts/verify_gallery_pdfs.py <root> chf`
5. headless boot on the shipped bytes, then push and confirm `/version.txt`

---

## 3. `pericarditis` page 3 — "Visceral pericardium" sat outboard of the cavity

| | |
|---|---|
| file | `pericarditis-03-FIXED-page.png` (+ `.jpg` at q88/4:2:0, the original's own encode) |
| target | `assets/pericarditis/pericarditis-03.jpg`, 1280×1920 |
| moved | dot **(898.3,728) → (861,756)**, extended along the leader's own −37° so the line does not change direction |
| diff vs live | **(854,715)–(913,763)**, 59×48 px; **0 pixels differ outside** |
| other two dots | (887.8,475.6) and (886.6,587.7) — position **and blob area unchanged** |
| approved | *awaiting Dr. Kreithen* |

**What it fixes.** "Visceral pericardium (epicardium — inflamed)" ended at the **outer margin of the
pericardial cavity, on the boundary with the inflamed parietal band** — i.e. radially *outside* the
"Pericardial cavity" dot above it, which inverts the layer order the page is teaching. It now lands
on the pale epicardial streak lying directly on the myocardium.

### The panel has THREE zones, not two — and reading it as two made a correct dot look wrong

Between muscle and background, at the dot's own row, the artwork draws:

| zone | at y=756 | what it is |
|---|---|---|
| myocardium | x < 855 | heart muscle, coronary vessels |
| pale streak | 855–864 | **visceral pericardium / epicardium** |
| darker translucent zone | 865–896 | **pericardial cavity** |
| bright red band | 897–927 | **inflamed parietal pericardium** |

A first pass here read the pale streak as the cavity and the darker zone as part of the red band, and
on that reading the **Pericardial cavity** dot at (886.6,587.7) looks wrong too — it sits in the
darker zone. It is **correct** and was left alone. The tell is a row profile rather than a zoom: the
darker zone reads R≈83–122 against the red band's R≈188–247, so it is a distinct third layer, not the
shadowed edge of the red one. `p8`, whose effusion label is a known-good control, resolves it the
same way — its dot sits in exactly this translucent zone.

**Rule for the rest of this gallery: count the zones off a row profile before deciding any leader in a
layered panel is wrong.** Two of the three labels here would have been "corrected" into error.

**Method.** Only the dot is erased — clone-filled from 7 px left / 28 px down, an offset that follows
the local band gradient (the layers run diagonally here, so a straight vertical clone shears them);
the surviving leader is then extended over the gap and a new dot drawn 4.2 px, supersampled 4×. The
shipped dot measures 53 bright px against the page's other two at 47 and 64.

### Deploy sequence when the batch ships
1. copy the PNG over `assets/pericarditis/pericarditis-03.jpg` at **q88, subsampling 2** — matches the
   original's quantization table exactly, and is the same encode v92 used for page 2
2. regenerate `assets/pericarditis/thumb-03.jpg` at 320×480 q82 (local thumbs, not `gthumbs/`)
3. `python3 scripts/rebuild_gallery_pdf.py <root> pericarditis` — **at q88**; the default q82 shrinks
   this gallery's PDF 14% and degrades the nine pages that did not change
4. `python3 scripts/verify_gallery_pdfs.py <root> pericarditis`
5. headless boot on the shipped bytes, then push and confirm `/version.txt`

**Batches with the v92 page-2 fix** — same gallery, so one PDF rebuild covers both.

---

## 4. `htn` page 2 — "Renal Arteries" landed on kidney parenchyma

| | |
|---|---|
| file | `htn-02-FIXED-page.png` (+ `.jpg` at q82/4:2:0, the original's own encode) |
| target | `assets/htn/htn-02.jpg`, 1137×1705 |
| moved | dot **(639.9,747.3) → (615,717)**, onto the drawn renal artery between aorta and hilum |
| diff vs live | **(607,709)–(750,763)**; the horizontal run right of x=745 is untouched |
| other five dots | unchanged in position and blob area |
| approved | *awaiting Dr. Kreithen* |

**What it fixes.** The dot sat on the lower-mid renal cortex, well below and lateral to the hilum,
while the renal artery **is drawn** on both sides running aorta-to-hilum about 40 px superomedial. The
new endpoint is on the artery's mid-course, 26 px lateral to the aortic border, so it cannot be read
as the aorta either.

**An elbow, not a re-angled leader — and the reason is measurable.** The original leader is one
horizontal run from the label at x=852 to the dot. Re-angling the whole run means erasing all 210 px
of it, and the right two-thirds crosses the body outline and the intercostal vessels **diagonally**. A
per-column fill replaces those diagonals with vertical extrapolations: at 12× it is an obvious band of
vertical streaking, and the two-point interpolation it replaced left a dark seam instead. So the
horizontal segment is **kept** back to an elbow at x=745 and only the 105 px stub left of it is
erased — that stretch crosses kidney parenchyma, a near-vertical kidney border and flat background,
all of which a per-column fill reconstructs cleanly. Elbowed leaders are already this page's idiom
(Aortic Arch, Common Carotid).

**The leader carries a dark halo**, one pixel outside the white core on each side (y=746 reads 8
against a background of 18–21). Erasing only the visible core leaves that halo as a faint grey line —
the band replaced is y 743–754, not the 3 px the stroke appears to occupy.

### The re-encode is best at the ORIGINAL quality, not a higher one
Measured on the untouched 99% of the page:

| quality | bytes | mean abs diff | px differing by >4 |
|---|---|---|---|
| **q82 (the original's own table)** | 327,584 | **1.32** | **8.4%** |
| q85 | 343,492 | 1.69 | 8.4% |
| q88 | 375,754 | 2.04 | 12.8% |
| q92 | 439,833 | 1.71 | 10.1% |

Re-quantizing with the table the file was written with reproduces most coefficients; a *higher*
quality uses a different table and introduces new rounding across the whole page. **Matching the
original quantization table is not a stylistic preference — it is the lowest-loss option available,
and raising quality to "be safe" makes the page worse.**

### Deploy sequence when the batch ships
1. copy the PNG over `assets/htn/htn-02.jpg` at **q82, subsampling 2**
2. regenerate `assets/htn/thumb-02.jpg` at 320×480 q82
3. `python3 scripts/rebuild_gallery_pdf.py <root> htn`
4. `python3 scripts/verify_gallery_pdfs.py <root> htn`
5. headless boot on the shipped bytes, then push and confirm `/version.txt`

---

## 5. `pericarditis` page 1 — "Fibrous Pericardium" ended on empty background

| | |
|---|---|
| file | `pericarditis-01-FIXED-page.png` (+ `.jpg` at q88/4:2:0, the original's own encode) |
| target | `assets/pericarditis/pericarditis-01.jpg`, 1280×1920 |
| moved | dot **(750,624) → (730,784)**, onto the pericardial sac; leader redrawn from its elbow at (874,373) |
| diff vs live | **(721,370)–(882,793)** |
| other three dots | bright-pixel counts identical before and after: parietal 134/134, cavity 27/27, visceral 131/131 |
| approved | *awaiting Dr. Kreithen* |

**What it fixes.** The leader ended in black background to the right of the ascending aorta, touching
nothing; the nearest drawn structure was the aortic wall 15 px away. It now lands on the translucent
sac itself, on the fibrous sheet with its striations visible either side of the dot.

**How "outer" was checked.** Measured as distance from the heart's centre (~520,1000), the four dots
now read **fibrous 301 px, cavity 279, parietal 257, visceral 250** — the fibrous dot is the
outermost of the four, which is what the label requires. *Note for the physician:* on that same crude
measure the existing **cavity dot sits outboard of the parietal dot**. That pair was not part of the
audit finding and has not been touched — worth your eye, but it is a curved sac and radius-from-centre
is a blunt instrument on it.

**The placement is constrained, not free.** The four leaders fan from elbows at x=874, so the fibrous
dot has to stay above the parietal dot's leader or the two lines cross. Every point on the sac's wide
outer band down the heart's right border is *below* that line. The chosen point is the highest place
the sac reaches that the leader can get to without a crossing.

**Three erase methods were tried on the old dot before one worked**, because it abuts the aorta's rim
where that rim is a shallow *curve* (its x runs 735→746 across the dot's own 26 rows):
- per-column fill → extrapolates aorta colour into the background, leaving a brown rectangle;
- perpendicular two-sample average → a grey blob straddling the edge;
- interpolation along the rim → drags the leader's glow in from above and the blue SVC from below.

What works is fitting the **background** rather than the edge: a 2-D quadratic over an annulus using
only its dark pixels (470 of them), evaluated across the disc. Clean at 9×.

### Deploy sequence when the batch ships
Same as §3 — this gallery now has **pages 1 and 3** staged and page 2 already live at v92, so one
`rebuild_gallery_pdf.py <root> pericarditis` at **q88** covers all of it.

---

## 6. `cardiomyopathy` page 4 — "SMALL LV CAVITY" sat inside the septal mass

| | |
|---|---|
| file | `cardiomyopathy-04-FIXED-page.png` (+ `.jpg` at q82/4:2:0, the original's own encode) |
| target | `assets/cardiomyopathy/cardiomyopathy-04.jpg`, 1138×1707 |
| moved | dot **(423.6,603.2) → (630,772)** — a pure extension along the leader's own slope |
| diff vs live | **(409,588)–(637,779)** |
| other three dots | ASH 69/69, SAM 50/50, LVOT 75/75 bright px — unchanged |
| approved | *awaiting Dr. Kreithen* |

**What it fixes.** On a HYPERTROPHIC CARDIOMYOPATHY page the small LV cavity is the finding, and the
dot sat deep inside the septal mass on the **RV side of the septum**. The LV cavity is drawn clearly —
a narrow slit between the septum and the trabeculated lateral wall, carrying the blue LVOT jet — and
the dot now sits in it.

**The leader does not change direction.** Its measured slope is 0.817 from an elbow at (303,505); the
new endpoint sits on that same line, so this is an extension rather than a re-aim. Consequence worth
stating: the leader **already crossed the SAM leader at x=413 on the shipped page**, and it still does
— that crossing is pre-existing, not introduced here. It does *not* reach the LVOT leader (that
horizontal ends at x=483; the extension passes y=700 at x=542).

**Laterality was established from the pulmonary veins, not from position.** The cut purple veins enter
the chamber on the viewer's right, which makes that the left atrium; the mitral valve with its
chordae hangs below it; so the cavity beyond the septum is the LV. Getting this backwards would have
put the dot in the RV, which is exactly the error being corrected.

**Stroke brightness was matched, not guessed.** Drawn at first neutral-white it read brighter than the
original at 12×; measured peak luma of the shipped leader is 207, so the extension was re-drawn to
219–224 (it runs over darker background than the sampled stretch). The dot is 54 bright px against
the page's other three at 50, 69 and 75.

### Deploy sequence when the batch ships
1. copy the PNG over `assets/cardiomyopathy/cardiomyopathy-04.jpg` at **q82, subsampling 2**
2. regenerate `assets/cardiomyopathy/thumb-04.jpg` at 320×480 q82
3. `python3 scripts/rebuild_gallery_pdf.py <root> cardiomyopathy`
4. `python3 scripts/verify_gallery_pdfs.py <root> cardiomyopathy`
5. headless boot on the shipped bytes, then push and confirm `/version.txt`

---

## 7. `cardiac-arrest` page 2 — badge 5 "Diaphragm" pointed into lung

| | |
|---|---|
| file | `cardiac-arrest-02-FIXED-page.png` (+ `.jpg` at **q90 / 4:4:4**, the original's own encode) |
| target | `cardiac-arrest-upload/assets/cardiac-arrest/cardiac-arrest-02.jpg`, 913×1373 |
| moved | arrowhead **(351,539) → (430,562)**, onto the diaphragmatic dome |
| diff vs live | **(338,528)–(433,566)**; outside it mean abs diff **0.16**, max 10, 0.03% of pixels >4 |
| other four badge arrows | bright-pixel counts identical before and after |
| approved | *awaiting Dr. Kreithen* |

**What it fixes.** Badge 5 ended in left lung parenchyma — the same tissue badge 4 ("Lungs") points
at, about 60 px away. As shipped, the two badges are indistinguishable at their endpoints. The
diaphragm is drawn clearly as the red-orange honeycombed dome below; the arrow now lands on it.

**Why the leader is angled when the page's others are horizontal.** The diaphragm's highest drawn
pixel is y≈550 and badge 5's circle centre is at y=539, so no horizontal line from that badge can
reach the dome at all — the geometry forces a slope. It is applied as a **short elbow at x=341**, so
the horizontal run that reads as this page's idiom is preserved for 60 of its 90 px and only the last
segment angles down (slope 0.26).

**The elbow position was forced by the erase, not chosen for looks.** The shaft crosses a **rib** at
x 295–330, and a rib is a strong diagonal that no parallel or per-column fill can rebuild: erasing the
whole shaft was tried twice — a per-column fit blurred the lung's honeycomb into a flat band, and a
parallel-strip clone broke the rib's edge. Both were visible at 6×. Keeping the shaft and erasing only
the **14 px of arrowhead** — which sits on plain lung texture — leaves nothing detectable at 16×.

**This page re-encodes almost losslessly**, unlike the others in the batch: it ships at **q90 with
4:4:4 chroma** (no subsampling), so the untouched 99% differs by a mean of 0.16 against 0.8–1.3 on the
4:2:0 pages. Worth knowing before assuming a batch-wide number.

### Deploy sequence when the batch ships
1. copy the PNG over `cardiac-arrest-upload/assets/cardiac-arrest/cardiac-arrest-02.jpg` at
   **q90, subsampling 0**
2. regenerate **`gthumbs/cardiac-arrest-02.jpg`** at 320×480 q82 — this gallery uses the flat
   root-level `gthumbs/`, not a local `thumb-NN.jpg`
3. `python3 scripts/rebuild_gallery_pdf.py <root> cardiac-arrest`
4. `python3 scripts/verify_gallery_pdfs.py <root> cardiac-arrest`
5. headless boot on the shipped bytes, then push and confirm `/version.txt`

**Pairs with the v91 page-8 fix already live** — same gallery, so one PDF rebuild covers both.

---

## 8. `cardiac-arrest` page 4 — an unattached arrowhead on the patient's shoulder

| | |
|---|---|
| file | `cardiac-arrest-04-FIXED-page.png` (+ `.jpg` at q90 / 4:4:4, the original's own encode) |
| target | `cardiac-arrest-upload/assets/cardiac-arrest/cardiac-arrest-04.jpg`, 915×1373 |
| removed | the stray at **x 449–470, y 448–455** |
| diff vs live | **(443,444)–(477,463)** = 34×19 px; outside it mean 0.17, max 10, 0.024% of pixels >4 |
| the page's three real arrowheads | 62/62, 41/41, 35/35 bright px — untouched |
| stray itself | **49 → 0** bright px |
| approved | *awaiting Dr. Kreithen* |

**What it fixes.** A small white arrow pointing left, with about 10 px of shaft that stops in mid-air:
no label, no box, no leader. **Verified unattached rather than assumed** — nothing above threshold
anywhere to the right of x=472 on any of its rows, so it is not the tail of either scene callout. It
sits on the patient's shoulder and reads as a pointer to something that is not there. Third stray of
the project, after the two on `aortic-dissection` p1.

**The donor was chosen by eye, and the statistics were actively misleading.** Scored over six
horizontal offsets, the *best* was dx=−46 — and it lands on the patient's face and neck, cloning blue
and orange skin into dark fabric. Mean and standard deviation matched; content did not. A contact
sheet of eight offsets settled it in one look: **dx=+32**, further along the same shoulder, where the
fabric's top contour continues without a step.

**Worth generalising:** for a removal on photographic material, rank candidates by eye. The ring/strip
statistics that work on rendered anatomy — where texture is locally stationary — pick confidently
wrong donors on a photograph, because two very different things can share a histogram.

**The clone is horizontal on purpose.** The shoulder's fabric highlight runs near-horizontally just
above the stray; a per-column fill would cut that contour.

### Deploy sequence when the batch ships
1. copy the PNG over `cardiac-arrest-upload/assets/cardiac-arrest/cardiac-arrest-04.jpg` at
   **q90, subsampling 0**
2. regenerate **`gthumbs/cardiac-arrest-04.jpg`** at 320×480 q82
3. `python3 scripts/rebuild_gallery_pdf.py <root> cardiac-arrest`
4. `python3 scripts/verify_gallery_pdfs.py <root> cardiac-arrest`
5. headless boot on the shipped bytes, then push and confirm `/version.txt`

**Third page of this gallery in the batch** (p2 here, p4 here, p8 already live at v91) — one PDF
rebuild covers all three.

---

## 9. `endocarditis` page 7 — "VALVE CUSP" landed on the vegetation

| | |
|---|---|
| file | `endocarditis-07-FIXED-page.png` (+ `.jpg` at q88/4:2:0, the original's own encode) |
| target | `assets/endocarditis/endocarditis-07.jpg`, 1280×1920 |
| moved | tip **(825,406) → (828,476)**, onto pale cusp tissue; elbow added at (930,406) |
| diff vs live | **(820,397)–(939,482)** |
| other three tips | LEAFLET PERFORATION 15/15, PERIVALVULAR 2/2, FRIABLE unchanged |
| approved | *awaiting Dr. Kreithen* |

**What it fixes.** "VALVE CUSP — site of endothelial injury and microbial adherence" ended on the
**right-hand nodules of the same cauliflower vegetation** that *FRIABLE VEGETATION* points to, 40 px
above it. Two labels, one object, and the one that is supposed to name the *substrate* pointed at the
lesion. It now lands on the pale cusp surface immediately below the vegetation — the cusp the
vegetation is adherent to, which is the label's own claim.

**The angle is forced.** Along the leader's original row (y=406) there is no cusp anywhere: to the
right lies the sinus and then the aortic wall, and to the left the leader would have to cross the
whole vegetation to reach cusp beyond it. So an elbow at x=930 with a 34° final segment, the same
device used on `cardiac-arrest` p2 for the same reason.

**The erase needed a clone, not a fit — the opposite of `pericarditis` p1.** A per-column quadratic
gives each column a smooth ramp, which is invisible over flat background but on this specimen erased
the sinus wall's fine striations and left a plainly visible smear. A parallel clone at **dy=−18**,
chosen by eye from a six-offset sheet, keeps them: the structures here run near-vertically, so a
vertical offset slides them along their own direction.

**Marker size was measured, not assumed.** The page's tips are 5 px across (r≈2.5); drawn first at
r=3.6 the new dot read 42 bright px against the others' 15–18. At r=2.6 it reads 26.

### Deploy sequence when the batch ships
1. copy the PNG over `assets/endocarditis/endocarditis-07.jpg` at **q88, subsampling 2**
2. regenerate `assets/endocarditis/thumb-07.jpg` at 320×480 q82
3. `python3 scripts/rebuild_gallery_pdf.py <root> endocarditis`
4. `python3 scripts/verify_gallery_pdfs.py <root> endocarditis`
5. headless boot on the shipped bytes, then push and confirm `/version.txt`

---

## 10. `aortic-stenosis` page 1 — "Narrowed Valve Orifice" landed on a cusp

| | |
|---|---|
| file | `aortic-stenosis-01-FIXED-page.png` (+ `.jpg` at q82/4:2:0, the original's own encode) |
| target | `assets/aortic-stenosis/aortic-stenosis-01.jpg`, 1138×1707 |
| moved | dot **(666.6,599.6) → (606,558)**, into the orifice slit; leader re-aimed from its elbow at (843,417) |
| diff vs live | **(598,412)–(851,615)**; outside it mean 0.60, max 35 |
| other dots | Calcified Valve Cusps 101 → 100 (JPEG noise); the two lower dots untouched |
| old dot / new dot | **99 → 0** and **0 → 88** bright px |
| approved | *awaiting Dr. Kreithen* |

**What it fixes.** The dot sat on the body of the **right calcified cusp** — the structure the label
directly above it already names — about 60 px from the opening. "Narrowed Valve Orifice: fixed
obstruction accelerates systolic blood flow" now ends in the slit itself, the bright jet running
between the two calcified masses.

**The approach angle had to change, not just the endpoint.** The orifice sits *behind* the right cusp
from the label's side, so any leader arriving at the slit's own height crosses that cusp and reads as
pointing at it — the very confusion being fixed. The new line is shallower (31° against the original
46°) and passes just above the right cusp's upper margin before dropping into the slit.

**The dot straddled a tissue boundary, which is the hardest case for a clone.** It sat exactly on the
join between the pale calcified cusp and the red sinus wall, so a donor patch has to reproduce *both*
plus the edge between them. Nine offsets were rendered and compared side by side; eight left a visible
patch, and **(0,+26)** — straight down the same cusp — was the only one keeping cusp texture and the
wall's inner edge continuous. The 250 px diagonal above it was erased separately with a single-sided
perpendicular clone at 16 px, which preserves texture where a two-sample average would flatten it.

### Deploy sequence when the batch ships
1. copy the PNG over `assets/aortic-stenosis/aortic-stenosis-01.jpg` at **q82, subsampling 2**
2. regenerate `assets/aortic-stenosis/thumb-01.jpg` at 320×480 q82
3. `python3 scripts/rebuild_gallery_pdf.py <root> aortic-stenosis`
4. `python3 scripts/verify_gallery_pdfs.py <root> aortic-stenosis`
5. headless boot on the shipped bytes, then push and confirm `/version.txt`

**`p4` carries the same error** ("Narrowed central orifice", also on a calcified cusp). It is the next
one queued, and it batches into this gallery's single PDF rebuild.

---

## Higgsfield was tried on this dot and failed — second independent failure on this panel

Physician asked for the Higgsfield route; two variants were generated and both failed, so the
deterministic fix was shipped instead.

| | orphan dot (must go) | terminal dot (must stay) | quietest 60×60 region |
|---|---|---|---|
| Variant A | 32 → **16** — dimmed, not removed | 18 → 11, kept | 2.8/255 |
| Variant B | 32 → **0**, removed | 18 → **0** — **anchor destroyed** | 3.2/255 |
| deterministic | 32 → 12 | 18 → **18** | n/a — 325 px touched |

**Variant B is the instructive one:** it made the requested change *and* deleted the correct terminal
dot beside it, leaving the "Aortic root" label anchored to nothing — a worse defect than the one
being fixed.

**Both fail the pilot's own fidelity test regardless of the dots.** `HIGGSFIELD-CORRECTION-PILOT.md`
requires a targeted edit to read **~0 everywhere except the change**; the quietest region here is
2.8–3.2, so the whole panel was re-derived. Pasting either back would replace ~130,000 px of approved
artwork to fix 325.

This reproduces the **Aug 6** attempt on this same panel, which "removed the wrong dot but came back
with five leaders where the original had six". **Two independent attempts, the same class of
failure: the model will not reliably leave an adjacent marker alone.**

**Conclusion for this defect class:** for a *stray mark next to a correct mark*, use the
deterministic route. Higgsfield remains viable for what the pilot actually validated — moving a
single leader endpoint on a panel with no adjacent marker to preserve.

---

## Higgsfield failed again on `chf` p1 — fourth attempt, third distinct panel

Two variants, `nano_banana_pro` (server substituted `nano_banana_2`), 2k, 1:1, from a crop that
**excluded the text column entirely** — the pilot recipe applied properly for the first time, so the
model had no label text it could corrupt. It still failed, in two different ways:

| | dots present | the four that must not move | old LVD dot | new dot on LV |
|---|---|---|---|---|
| Variant A | **10** (5 spurious bright blobs) | two moved **26 px and 44 px** | cleared | no |
| Variant B | 7 | (731,921) **deleted**, replaced 123 px away | cleared | **no — deleted, not moved** |

**Variant B repeats the aortic-dissection failure exactly**: it removed the marker it was asked to
move and did not put one back, leaving the label anchored to nothing. Variant A moved markers it was
told to leave alone.

Fidelity was also gone in both — mean |diff| against the source crop is **8–12 /255 across the whole
heart**, against the pilot's requirement of ~0 outside the change. The border cells read 2.0–2.9,
which is the black padding, so the number is not a resampling artefact of the comparison.

One thing did survive on both: the four points where the leaders **cross the crop's right edge** are
within 1 px of the source, so the crop-and-repaste geometry itself is sound. The recipe is fine; the
model is the problem.

**Running tally: Higgsfield 0/4 on leader corrections, deterministic 4/4.** Enough to stop
proposing it for this defect class.
