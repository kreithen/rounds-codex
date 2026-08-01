# Vascular Surgery guidelines — candidate note, NOT a submission

**Status: not ready to build. This file exists to record what was checked, so the next
session does not repeat the search.**

`vasc` is the only one of the 25 resident specialties without 2025/2026 clinical guidelines.
Asked to close the gap, I researched the field rather than wait for a submission. That was
the wrong shape of work, and this note says why rather than shipping thin content.

## Why this is not a drafted entry set

Every one of the 24 shipped specialties came from Dr. Kreithen's submitted entries, which I
then citation-checked. Reversing that — me generating the entries — has two problems, and the
second is the serious one:

1. **The searches do not support twenty entries.** Two of three topic sweeps returned the 2024
   ACC/AHA PAD guideline, decade-old EVAR trials, and generic UpToDate pages. Nothing sharp
   enough for 2025/2026 in AAA surveillance or CLTI revascularization.
2. **Manufacturing volume from thin results is precisely the documented failure mode.** Across
   the 340 submitted entries checked on this project, **73 could not be resolved to a citation
   at all** — the largest single category. Padding a specialty to ten-per-year from weak search
   hits reproduces that by hand, and agent-authored entries merged into `resident.json` are
   indistinguishable from physician-sourced ones once they ship.

## The one item that does verify, and verifies strongly

**CREST-2** — asymptomatic carotid stenosis. Genuinely major, genuinely 2025/2026, and it
changes practice, so it belongs on the 2026 list whenever this specialty is built.

- Two parallel randomised, observer-blinded trials; **2,485 patients**, mean age 70, 37% women,
  ≥70% asymptomatic stenosis, 155 international centres.
- **Carotid artery stenting + intensive medical management significantly reduced stroke**
  versus intensive medical management alone: 3.2% absolute difference in the primary outcome,
  **NNT 31**. Annual ipsilateral ischaemic stroke 1.7% on medical therapy alone versus 0.4%
  with a stent.
- **Carotid endarterectomy showed NO significant added benefit** — a non-significant 1.6%
  absolute difference favouring CEA. This is the part an entry would most easily get wrong:
  the two arms did not give the same answer, and writing "revascularisation reduces stroke"
  flattens a distinction the trial was designed to draw.
- Periprocedural risk low across all groups; disabling stroke rates consistently low.
- Presented at SVIN and the VEITHsymposium, published in *NEJM*. The Society for Vascular
  Surgery has issued a commentary in *J Vasc Surg* (`S0741-5214(25)02161-5`).

Note for whoever writes it: the SVS commentary exists precisely because the CEA result is
being over-read in both directions. Cite the commentary alongside the trial.

## Context, not entries

The **2024 ACC/AHA multi-society lower-extremity PAD guideline** (`Circulation`,
`10.1161/CIR.0000000000001251`, PMID 38743805) is the standing reference for PAD medical
therapy — rivaroxaban, high-intensity statin to ≥50% LDL reduction, and GLP-1/SGLT-2 in type 2
diabetes. It is **2024**, so it is not a 2025 or 2026 entry. Recording it here so it is not
later mistaken for one — three specialties have already needed a date correction for exactly
this (PURPOSE 1/2 → 2024, SHINE → 2022, EAGLE-2/3 → 2024).

## What this needs

The physician's submitted 2025 and 2026 entries, same as the other 24 specialties. Then the
normal pipeline: staging JSON → citation check → `merge_*_guidelines.js` → browser verify.

A single-year specialty should **omit** the empty year rather than ship `2026: []`, which
renders a "Coming soon" button.
