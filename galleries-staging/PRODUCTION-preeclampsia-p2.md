# For production: `preeclampsia` page 2 — the heart and the aorta are both dots in the right lung

5 rows flagged, **all 5 measured and all 5 confirmed** (the [CHECK] row resolved as a real defect).
Needs a re-render. *Measured on the shipped page (1024×1536), 2026-08-11.*

The page is already at the standard size — no size change needed.

---

## 1. HEART and AORTA are both in the patient's right lung

Both leaders come in from the left-hand label column and stop in the **purple/mauve lung
parenchyma** that fills x 290–350, y 490–620.

| row | label | dot at | what is under it |
|---|---|---|---|
| 1 | **HEART** | **(322,529)** | the **mid field of the patient's right lung** |
| 2 | **AORTA** | **(317,597)** | the **lower field of the same lung**, 68 px below |

Both organs are drawn large, centrally, and carry no label:

- the **heart** — the red muscular mass at **x 355–420, y 545–620**
- the **aortic arch** — the thick red arch immediately above it at **x 355–390, y 515–545**, with the
  descending aorta running down behind the heart

**Correct endpoints: HEART → (390,580)**, the ventricular mass; **AORTA → (372,528)**, the arch. Each
is about 85 px from where its leader currently stops.

The neighbouring label on the same figure shows the intended form: **PULMONARY CIRCULATION**
terminates at **(415,522)**, correctly on lung.

## 2. `PLACENTA` is on the same band as `UTERUS`

Row 3, confirmed. The two leaders arrive 54 px apart on **one structure** — the red vascular uterine
wall band at x 285–320:

| label | terminator at |
|---|---|
| **UTERUS** | **(302,788)** — correct, it names the organ |
| **PLACENTA** | **(288,842)** — the same anterior wall band |

**On the target we are flagging rather than asserting.** Across this figure the uterine wall is drawn
as a uniform vascular band, and **we could not identify a distinct placental disc** at the fundus. The
order's suggested target — "the dark-red villous vascular bed at the uterine fundus where the coiled
umbilical cord inserts" — assumes one is drawn. **Please check at source. If the placenta is not drawn
as a distinct bed, this is an artwork row, not a leader move** — and on a page about *abnormal
placentation* that would be worth fixing properly.

## 3. `UMBILICAL CORD` is on maternal vessels outside the uterus

Row 4, confirmed. Terminator at **(285,879)** — on the maternal pelvic vessels below and lateral to
the uterus, outside it entirely.

The cord's insertion **is** drawn: the small coiled structure at the fetal abdomen at **(372,852)**.

**Correct endpoint: (372,852).**

## 4. `PELVIC CIRCULATION` — CONFIRMED

Row 5 *[CHECK]*. Terminator at **(452,841)**, on the inner edge of the right lateral uterine wall
where it meets the fetal buttock. **There is no maternal pelvic vessel within 80 px of it.**

The maternal iliac and pelvic vessel network is drawn densely at the lower left of the figure,
**x 285–360, y 890–970**.

**Correct endpoint: (320,930).**

---

## What this page adds up to

Four of the five labels name **maternal systemic structures** — heart, aorta, placenta, pelvic
circulation — and the page is about how those adapt in pregnancy and fail in preeclampsia. As drawn,
the heart and aorta are in a lung, the placenta is on the uterine wall, and the pelvic circulation is
on the fetus. Only `UTERUS` and `KIDNEYS` land where they belong.

---

## Summary of endpoints

| # | label | now | should be |
|---|---|---|---|
| 1 | HEART | (322,529) right lung | (390,580) the ventricular mass |
| 2 | AORTA | (317,597) right lung | (372,528) the arch |
| 3 | PLACENTA | (288,842) the uterine wall band | the villous bed — **confirm one is drawn** |
| 4 | UMBILICAL CORD | (285,879) maternal pelvic vessels | (372,852) the cord at the fetal abdomen |
| 5 | PELVIC CIRCULATION | (452,841) the uterine wall / fetal buttock | (320,930) the iliac network |

Correct as drawn: **UTERUS** (302,788), **PULMONARY CIRCULATION** (415,522), **CAROTID ARTERIES**
(340,435).
