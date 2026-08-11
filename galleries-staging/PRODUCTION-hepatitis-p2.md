# For production: `hepatitis` page 2 — the porta hepatis labels are shuffled across duct, artery and vein

13 rows flagged, **all 13 measured and all 13 confirmed** (eight of them were [CHECK] rows). Needs a
re-render. *Measured on the shipped page (1024×1536), 2026-08-11.*

The page is already at the standard size — no size change needed.

**The auditors' coordinates on this page are accurate.** Every one we re-measured came out within
2 px of what the order states, so the value we are adding here is the colour under each endpoint and
the target, not a correction to their numbers.

---

## 1. The porta hepatis — six labels, three vessel colours, and almost no agreement between them

The hilum draws three systems in three unmistakable colours: the **biliary tree olive-green**, the
**hepatic artery bright red**, and the **IVC / portal venous system blue**. Sampling under each
endpoint (leader pixels excluded) gives this:

| row | label | ends at | sampled RGB | what that is |
|---|---|---|---|---|
| 9 | Right hepatic artery *[CHECK]* | **(355,537)** | **(90,94,39)** | **the green bile duct** |
| 10 | Portal vein *[CHECK]* | **(360,555)** | **(114,61,42)** | a **dark maroon** vessel wedged between the ducts |
| 11 | Hepatic portal triad *[CHECK]* | **(390,537)** | **(110,42,39)** | **the bright red artery alone** — one of the three, not the bundle |
| 12 | Hepatic veins / Drain blood to IVC *[CHECK]* | **(397,543)** | **(24,44,86)** | **blue**, at hilum level — not the hepatic veins above the liver |
| 4 | **Bile duct (from left and right hepatic ducts)** | **(408,535)** | **(30,41,84)** | **the blue IVC** |
| 2 | **Inferior vena cava** | **(376,567)** | **(120,52,43)** | the small **orange portal-triad cross-section widget** |
| 3 | **Left portal vein** | **(467,506)** | **(99,45,36)** | **the red arterial tree** — the same tree `Left hepatic artery` and `Hepatic artery proper` point at |

For reference, the correct targets sampled: **green biliary trunk (366,545) = (79,83,18)**; **blue IVC
trunk (411,567) = (7,20,62)** and **(415,545) = (3,13,37)**.

**Two of these fix each other.** Row 2 (IVC) currently sits on the **triad widget**, which is exactly
where row 11 (Hepatic portal triad) belongs. Move the IVC label 35 px right to **(411,567)** on the
blue trunk, and move the triad label onto the widget at **(376,567)** — one swap, two rows fixed, and
neither leader changes shape much.

**Row 10 is a fault-5 instance** (the page contradicting its own key): the **BLOOD SUPPLY (DUAL
INFLOW)** inset on this same page colours the portal vein **blue**, and the label points at a maroon
vessel with the blue trunks 55 px to its right.

**Correct endpoints:** row 3 → a portal (blue/purple) vessel; row 4 → **(366,545)**, the green trunk,
42 px left; row 9 → the arterial branch clear of the duct; row 10 → the blue portal vessel; row 11 →
**(376,567)**; row 12 → the hepatic veins entering the IVC **above** the liver, not at the hilum.

## 2. `Cystic duct` is inside the gallbladder

The gallbladder is the olive sac at **x 250–320, y 490–548**. Two dots sit on it:

| label | dot at | |
|---|---|---|
| Gallbladder | **(285,506)** | correct — it names the sac |
| **Cystic duct** | **(265,523)** | **the same sac**, 22 px away |

The cystic duct is the green tube leaving the sac's **neck**, which tapers up and to the right toward
the porta. **Correct endpoint: (325,496).**

## 3. `Common bile duct` is above the cystic-duct junction

Row 8, confirmed. Dot at **(349,524)**, sampled **(74,76,33)** — on the biliary tree, correct in
colour but at the **gallbladder-neck / cystic-duct level**, i.e. above the confluence. Above that
junction the tube is the *common hepatic* duct; it only becomes the common bile duct below it.

**Correct endpoint:** the green trunk below the cystic-duct junction — around **(366,555)**.

## 4. `Coronary ligament` points at bare liver — and cannot be fixed by moving it

Row 7, confirmed. Dot at **(243,374)**, sampled **(188,102,90)** — plain parenchyma of the anterior
right lobe. At 11× there is **no line, no reflection and no ligament of any kind** within 60 px of it.

That is not a misplaced leader. The coronary ligament is a peritoneal reflection on the **superior
and posterior** surface of the liver, and **an anterior view cannot show it.** This is the sixth
fault from the tranche-3 brief: the label names a structure the page does not draw.

**Recommendation: drop the label from this figure**, or add a small superior/posterior view if it is
wanted. Note that `Falciform ligament` on the same figure is a different case and should stay — the
falciform *is* visible anteriorly, as the fissure between the lobes.

## 5. MICROANATOMY — hepatocytes points at a vessel, sinusoids points at hepatocytes

Rows 5 and 6, both confirmed, and between them they are effectively a swap.

| row | label | ends at | sampled RGB | what that is |
|---|---|---|---|---|
| 5 | **Hepatocytes (plates)** | **(424,888)** | **(80,104,146)** | **the blue portal venule** of the portal-triad cluster at the hexagon's corner |
| 6 | **Sinusoids** | **(413,941)** | **(164,129,119)** | **inside a salmon hepatocyte plate block** |

Both correct targets are within 15 px of where the leaders already end:

- **Hepatocytes → (405,915)**, sampled **(130,65,54)** — a salmon plate block.
- **Sinusoids → (403,948)**, on the blue radial channel between plates (blue pixels traced at
  x 402–404 on that row and x 412–415 four rows below).

The lobule panel exists to teach that blood runs **through the sinusoids between the plates** from
the triad to the central vein. With these two labels as drawn, the reader is told the plates are the
vessel and the vessel-free block is the sinusoid.

## 6. BILIARY DRAINAGE — `Left hepatic duct` is on the common trunk

Row 13, confirmed, with the confluence measured.

| label | dot at | what is under it |
|---|---|---|
| Right hepatic duct | **(115,850)** | the right-going limb — **correct** |
| **Left hepatic duct** | **(105,883)** | **the common hepatic trunk**, 11 px below the confluence at **(102,872)** |
| Common hepatic duct | **(110,919)** | the same trunk, 36 px lower — **correct** |

So the left duct and the common duct name one tube, and the **left-going limb** — which runs from the
confluence out to x 65–100, y 855–875 — carries no label.

**Correct endpoint: (85,866).**

---

## Summary of endpoints

| # | label | now | should be |
|---|---|---|---|
| 1 | Cystic duct | (265,523) inside the gallbladder | (325,496) the tube at the neck |
| 2 | Inferior vena cava | (376,567) the triad widget | (411,567) the blue IVC trunk |
| 3 | Left portal vein | (467,506) the arterial tree | a portal (blue/purple) vessel |
| 4 | Bile duct (from L and R hepatic ducts) | (408,535) the blue IVC | (366,545) the green trunk |
| 5 | Hepatocytes (plates) | (424,888) a blue portal venule | (405,915) a salmon plate block |
| 6 | Sinusoids | (413,941) inside a plate block | (403,948) the blue radial channel |
| 7 | Coronary ligament | (243,374) bare parenchyma | **not drawable in an anterior view — drop or add a posterior view** |
| 8 | Common bile duct | (349,524) above the confluence | (366,555) below the cystic-duct junction |
| 9 | Right hepatic artery | (355,537) the green duct | the arterial branch, clear of the duct |
| 10 | Portal vein | (360,555) a maroon vessel | the blue portal vessel — the page's own inset colours it blue |
| 11 | Hepatic portal triad | (390,537) the artery alone | (376,567) the triad widget |
| 12 | Hepatic veins / Drain blood to IVC | (397,543) the IVC at hilum level | the hepatic veins entering the IVC above the liver |
| 13 | Left hepatic duct | (105,883) the common trunk | (85,866) the left-going limb |

Correct as drawn: **Gallbladder** (285,506), **Right hepatic duct** (115,850), **Common hepatic duct**
(110,919), **Falciform ligament**.
