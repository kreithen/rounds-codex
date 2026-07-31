# Clinical Calculators — corrections from the medical re-read

Independent re-read of all ten calculators against their cited sources, 2026-07-31.
Every calculator was checked on five things: the formula, the band thresholds, the citation,
what the caveats claim, and whether the band LABEL is true across the whole band.

Deployed as `rounds-codex-app` `416ce8f`. **Content only — `index.html` was not touched.**

**One caveat on the method.** The container's network policy blocks direct fetches to journal
and guideline sites (every `WebFetch` returned 403), so verification rests on search results
rather than on reading the primary PDFs. Each finding below was cross-checked against at least
two independent results. Where you disagree with one, the source is named so you can go to it.

---

## REVERSED — the one that mattered

### Wells DVT: a score of 1 was reported as "DVT likely"

| | |
|---|---|
| **Was** | `"DVT unlikely"` banded at `max: 0.99` — so score 0 was unlikely, score 1 was **likely** |
| **Should be** | `≤1` unlikely, `≥2` likely |
| **Now** | `max: 1.99` |
| **Source** | NICE NG158 two-level DVT Wells score; Wells PS et al, NEJM 2003;349:1227-35 |

A patient scoring 1 was shown **"DVT likely — Proceed to compression ultrasound; D-dimer alone
is not sufficient to exclude."** On the validated pathway a score of 1 is the group in which a
negative high-sensitivity D-dimer *does* exclude DVT. The error pushed toward over-testing
rather than under-testing, so it was not dangerous — but for a study tool the threshold **is**
the content, and this taught the wrong one.

**The calculator contradicted itself.** Its own caveat read "≥2 points is 'DVT likely'", printed
directly beneath a band table that said otherwise. The caveat now states both sides of the
threshold instead of one.

**Why it got through.** The four published test vectors covered scores **0, 2, 0 and 9** — every
value except the boundary being decided. A band edge with no vector on it is not tested, it is
assumed. Vectors now sit on both sides of every band edge in every score (+5 added), and the new
Wells vector was run against the old `0.99` band and confirmed to **fail** before being accepted.
A guard that passes on the broken file is decoration.

---

## Corrected — currency and precision

### MAP: cited a superseded guideline

Cited Surviving Sepsis 2021. **SSC 2026** is out — Prescott HC, Antonelli M, Alhazzani W, et al,
*Crit Care Med* 2026;54(4):725-812 — and **keeps 65 mmHg as the initial target** (strong
recommendation, moderate certainty), so the number a student learns does not move. Two things
were added because the 2026 guideline says them and the entry did not:

- In adults **65 or older**, SSC 2026 *suggests* an initial range of **60–65 mmHg** rather than a
  higher target (weak recommendation, low certainty), from the **65 trial** — permissive
  hypotension gave similar 90-day mortality with less vasopressor exposure.
- A MAP cannot be held at exactly 65. The guideline's own remark is to titrate to a range around
  the target, roughly within 5 mmHg.

### CHA₂DS₂-VASc: a band label that was untrue for women

The top band was labelled **"Anticoagulation generally recommended"**. That is not true across the
whole band — the threshold is ≥2 in men but **≥3 in women**, so a woman scoring 2 whose extra
point is her sex is low risk. The note beneath already said exactly that, but the label is the
big text and the note is the small text.

Now reads **"High risk"**, consistent with "Low risk" and "Intermediate risk" above it, with the
treatment rule kept in the note. A caveat adds the **2023 ACC/AHA/ACCP/HRS** framing: the decision
is made on an annual thromboembolic risk of about **2%/year** rather than on a score alone, which
corresponds to ≥2 in men and ≥3 in women, and other validated scores (ATRIA, GARFIELD-AF) may be
used alongside.

### Wells PE: a withdrawn guideline and a link to the wrong place

Cited **NICE CG144**, withdrawn and replaced by **NG158** in March 2020. Its `url` also pointed at
MDCalc rather than at the paper the citation names; now the Thromb Haemost record
(PMID 10744147). The **thresholds were right** — ≤4 unlikely, >4 likely — and are unchanged.

### PERC: a British spelling

"oestrogenic hormone" → "estrogen". Missed by the first US-spelling sweep because it was not in
the pattern list.

---

## Checked and correct — no change

| Calculator | What was verified |
|---|---|
| **BMI & BSA** | WHO adult cut-offs 18.5 / 25 / 30 / 35 / 40 correct. Mosteller √(cm × kg / 3600) correct; NEJM 1987;317:1098 is the right citation. Asian thresholds 23 / 27.5 correct. |
| **MAP** | (SBP + 2×DBP)/3 correct. 65 mmHg target confirmed still current in SSC 2026. |
| **Wells DVT** | All 10 criteria and their points correct, including the −2 for an alternative diagnosis. Three-tier ranges in the caveat (low ≤0, moderate 1–2, high ≥3) correct. |
| **Wells PE** | All 7 criteria and half-point values correct; max 12.5. Dichotomised ≤4 / >4 correct. |
| **PERC** | All 8 criteria correct and correctly inverted (the calculator counts *positives*, the rule requires all absent). Rule-out-only framing correct. Age <50, HR <100, SaO₂ ≥95% all right. |
| **CHA₂DS₂-VASc** | Point values correct, max 9. Age modelled as one selector so the 65–74 and ≥75 tiers cannot both score — correct and worth keeping. |
| **HAS-BLED** | All 9 criteria correct, max 9. Alcohol ≥8 drinks/week correct. Bands 0 / 1–2 / ≥3 correct. The "not a reason to withhold anticoagulation" caveat is the right emphasis. |
| **CURB-65** | All 5 criteria correct, urea >7 mmol/L ≙ BUN >19 mg/dL correct. Mortality figures verified against Lim 2003: **0–1 → 1.5%, 2 → 9.2%, ≥3 → 22%**. |
| **qSOFA** | RR ≥22, GCS <15, SBP ≤100, positive at ≥2 — correct. The caveat that **SSC 2021 recommends against qSOFA as a single screening tool** versus SIRS/NEWS/MEWS is correct and is a *strong* recommendation, moderate certainty. |
| **Weight-based dose** | Arithmetic and unit handling correct. Framing is conservative and accurate — the bands check volume plausibility and say outright that they are not a statement about dose safety. The ISMP position is stated accurately (double checks applied judiciously to selected high-alert situations, not universally). |

---

## Still for you

Nothing above replaces your read. Three things in particular are judgement rather than fact, and
I have made a call on each that you may want to reverse:

1. **CHA₂DS₂-VASc "High risk"** — I removed a treatment instruction from a band label. If you
   would rather the label tell the reader what to do, it needs to be sex-aware, which the current
   band table cannot express without a kernel change.
2. **MAP's new age-65 caveat** — correct per SSC 2026, but it is the kind of nuance that can
   confuse a nursing student more than it helps. Say the word and it comes out.
3. **The weight-based dose calculator at all** — it is the only tool here that produces a number
   someone could act on. Its framing is careful, but the decision to ship it is yours.
