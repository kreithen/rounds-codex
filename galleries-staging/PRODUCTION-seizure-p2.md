# For production: `seizure` page 2 — "Basal ganglia" on the thalamus, and a reversed arrowhead

4 rows flagged, **all 4 measured and all 4 confirmed** (three of them were [CHECK] rows). Needs a
re-render. *Measured on the shipped page (1024×1536), 2026-08-11.*

The page is already at the standard size — no size change needed.

---

## 1. Main figure — `Basal ganglia` and `Thalamus` are 27 px apart on the same sphere

The deep structures are drawn as a **magenta sphere** (x 483–540, y 425–472, centre (511,448),
sampled (221,104,249)) wrapped in a **violet shell** (sampled (167,111,202) at (552,452)), with a
bright **blue arc** above it (108,152,236).

| label | endpoint | what is under it |
|---|---|---|
| **Thalamus** | dot at **(523,438)** | the magenta sphere — **correct** |
| **Basal ganglia** | dot at **(496,452)** | **the same magenta sphere**, 12 px inside its left edge |

The two dots are **27 px apart on one structure**, and the violet lentiform shell that the basal
ganglia label needs is drawn immediately around it, unlabelled.

**Correct endpoint:** the violet shell — clean violet sits at **(552,452)** on its lateral limb and
**(545,478)** on its lower limb. *Please pick the point that reads as putamen in your source file:*
this figure draws the lentiform as a shell around the thalamus rather than as a discrete body, so we
are giving you sampled violet rather than asserting a boundary.

For reference, the neighbouring leaders on the same figure are all correct: **Corpus callosum**
(481,405) on the cream arc, **Hypothalamus** (465,528) on the orange knob.

## 2. THALAMO-CORTICAL NETWORK panel — `Cortical networks` starts on the thalamus and its arrowhead points at its own label — CONFIRMED

This panel contains its own control, one line above:

| label | leader | endpoint |
|---|---|---|
| **Cortex** | horizontal at y = 831, x 403 → 441 | terminator at **(441,831)** on the pink cortical band — **correct** |
| **Thalamus** | horizontal at y = 899, arrowhead pointing right | stops at **(447,899)**, 5 px short of the blue ovoid but aimed at it — acceptable |
| **Cortical networks** | horizontal at y = 891 | **starts at (531,891) on the right edge of the blue thalamus ovoid** and **the arrowhead is at the far end, (583,891), pointing right at the label text** |

So the one leader on this panel that is meant to name the cortex begins on the thalamus and points
away from the drawing. The blue thalamus ovoid spans x 452–532, y 875–920; the pink cortical band
runs above it.

**Correct:** reverse the arrow and land it on the cortical band, e.g. **(555,845)** — the same
treatment the `Cortex` leader on this panel already has.

## 3. NEURON & SYNAPSE — `Axon` points at myelin, like `Myelin sheath` does — CONFIRMED

| label | endpoint | what is under it |
|---|---|---|
| **Axon** | tapered tip at **(253,1143)** | a **tan myelin internode** (segment 2, x 235–265, y 1135–1160) |
| **Myelin sheath** | vertical arrowhead at **(315,1130)** | a **tan myelin internode** (segment 4, x 300–335, y 1120–1150) — **correct** |

Two labels, 62 px apart, both on the same kind of gold segment. Nothing on the figure names the axon
itself.

**Correct endpoint:** the exposed blue-grey axon at a **node of Ranvier** — the constrictions between
internodes sit at **(268,1152)**, **(300,1145)** and **(337,1130)** — or the **unmyelinated initial
segment** between the soma and the first internode, at about **(215,1136)**. We recommend
**(268,1152)**: it is the node immediately beside the current tip, so the leader barely moves.

## 4. SYNAPSE — `Neurotransmitters (glutamate, GABA)` has no transmitter at its tip — CONFIRMED

The amber leader ends at **(527,1080)**, at the presynaptic bouton's right rim. There is no vesicle
and no transmitter particle within 25 px of it.

Both of the things the label could mean are drawn, clearly:

- **vesicle circles inside the bouton** — ringed discs at **(473,1074)**, **(459,1092)** and
  **(495,1089)**
- **orange transmitter particles** filling the cleft, y 1115–1145, x 445–520

**Correct endpoint:** **(495,1089)**, a vesicle circle. We prefer the vesicles over the cleft because
the **Synaptic cleft** label one row below already points into the particle field, and two labels on
one target is the fault this whole review is about.

---

## One observation not in the work order

**`Presynaptic neuron` ends on the panel's frame, not on the neuron.** Its terminator is at
**(529,1050)**, sitting on the teal circular vignette that frames the synapse figure. The purple
bouton's right edge at that height is at x ≈ 495, so the tip is **34 px clear of the structure**.
`Synaptic cleft` has the same shape of problem but smaller — arrowhead at **(530,1131)**, about 12 px
right of the particle field. Both are short-of-target rather than on-the-wrong-structure, so they are
lower priority than rows 1–4, but they are on the same figure and cost nothing to fix in the same
pass.

---

## Summary of endpoints

| # | label | now | should be |
|---|---|---|---|
| 1 | Basal ganglia | (496,452) the magenta thalamus | (552,452) or (545,478) on the violet lentiform shell |
| 2 | Cortical networks | (531,891) the blue thalamus, arrowhead reversed | (555,845) the pink cortical band, arrowhead inward |
| 3 | Axon | (253,1143) a myelin internode | (268,1152) a node of Ranvier |
| 4 | Neurotransmitters (glutamate, GABA) | (527,1080) the bouton rim, nothing there | (495,1089) a vesicle circle |
| — | Presynaptic neuron | (529,1050) the panel frame | onto the axon shaft / bouton |
| — | Synaptic cleft | (530,1131) 12 px short | into the particle field |

Correct as drawn: **Thalamus** (523,438) and (447,899), **Corpus callosum** (481,405),
**Hypothalamus** (465,528), **Cortex** (441,831), **Myelin sheath** (315,1130), **Postsynaptic
neuron** (507,1160).
