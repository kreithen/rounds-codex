# Rounds Codex — what is human-authored and what is AI-generated

Prepared 2026-08-09 for Dr. Kreithen to take to counsel.

**This is not legal advice, and it is not a statement of fact.** It is reconstructed from this
repository's build history and documentation. Every row carries an **evidence** column saying how it
is known, because the difference between *documented*, *inferred* and *only you know* is the whole
value of this document. **Nothing here should be copied onto a federal form until Dr. Kreithen has
confirmed each line.**

Why the accuracy matters: since March 2023 the Copyright Office requires affirmative disclosure of
more-than-trivial AI-generated material, excluded in the Limitation of Claim field. A registration
obtained on an inaccurate application can be cancelled — and a registration you cannot rely on is
worse than none, because you will have relied on it.

---

## The three buckets

A registration application needs material sorted into three piles, not two. **The third is the one
usually forgotten.**

| bucket | what happens to it |
|---|---|
| **1. Human authorship** | This is what you claim |
| **2. AI-generated** | Disclosed and excluded in the Limitation of Claim |
| **3. Third-party material** | Also excluded — someone else's copyright, regardless of AI |

---

## Bucket 1 — Human authorship (the claim)

| component | count | evidence |
|---|---:|---|
| **The compilation** — selection, coordination and arrangement of everything into a teaching structure | — | **Documented.** Structure, ordering, categorisation and the adjacency of conditions are all decisions recorded across this repo's history. **This is the strongest claim, and it survives even where the contents are excluded** — the *Zarya of the Dawn* outcome. |
| **Condition module text** | 183 | **ONLY YOU KNOW — the single most important line in this document.** The repo shows the quizzes were generated *from* this text, so it pre-existed them; it does not show who wrote it. If you wrote these, this is the second-strongest claim and it is the thing a copier would actually take. See Q1 below. |
| **Clinical guideline entries** | 470 | **Documented.** Submitted by you, then corrected entry-by-entry during QA. `CORRECTIONS-all.md` is the running record. |
| **Gallery page titles and their ordering** | ~1,000 | **Documented.** Read off each page by hand and assigned; the ordering comes from each page's own header. Thin authorship individually, real as a set. |
| **Quiz questions transcribed from your own PDFs** | 24 | **Documented, with the source in the repo** — the quiz PDFs are in `galleries-staging/`. Underlying authorship is yours; the transcription is mechanical. |
| **Corrections and editorial judgement throughout** | — | **Documented.** The guideline QA alone found 25 entries stating the opposite of the published result and 16 citing studies that could not be found. That editing is human authorship applied to AI-drafted material. |

---

## Bucket 2 — AI-generated (disclose and exclude)

| component | count | evidence |
|---|---:|---|
| **Gallery artwork** | ~1,000 pages | **Documented.** External AI illustration pipeline. Exclude the images; claim the selection, ordering and titles. |
| **USMLE illustrations (raster)** | 197 | **Documented.** Generated via Higgsfield. |
| **Condition quiz questions** | ~1,796 of 1,820 | **Documented.** AI-drafted from your module text by agent fan-out, then QA'd and answer-balanced. The 24 above are the exception. |
| **Resident-mode entries** | 1,418 | **Documented.** Built by the `medcodex-resident-buildout` pipeline — AI-drafted. |
| **USMLE items** | 1,010 | **Inferred.** Built by the `medcodex-usmle-buildout` skill. The human/AI split within them is not recorded. See Q2. |
| **NCLEX items** | 150 | **Inferred.** Same shape — an AI-assisted build. See Q2. |
| **Drug entries** | 300 | **UNKNOWN.** No build record either way. See Q3. |
| **Code** — `index.html`, `sw.js`, scripts | — | **Documented as mixed.** Much written with AI engineering tools. This is the weakest and murkiest claim; it is also the one you can simply not file. |

**USMLE vector illustrations (34)** — 32 ECGs, a genetics pedigree, one other — are schematics whose
authorship is genuinely unclear. Small in number; worth one question rather than a paragraph.

---

## Bucket 3 — Third-party material (exclude, and not because of AI)

**This bucket exists independently of the AI question and is easy to miss.**

- **Nine of the ten clinical calculators reproduce published third-party scoring systems** — Wells
  DVT, Wells PE, PERC, CHA₂DS₂-VASc, HAS-BLED, CURB-65, qSOFA. The criteria and thresholds are other
  people's work. Only BMI/BSA and the weight-based dosing calculator are plain arithmetic.
- **Quoted or closely paraphrased guideline recommendations** — AAOS, NICE, ACR Appropriateness
  Criteria, ACP, NOF/BHOF and others are cited throughout.
- **ICD-10 codes** appear on every condition and every gallery page.
- **Journal citations** — titles, authors and findings are facts, but worth mentioning so counsel can
  say so rather than you assuming it.

---

## The questions only you can answer

Take these to the meeting. **Q1 is the one that decides whether registration is worth filing at all.**

1. **Did you write the 183 condition module texts?** Fully, partly, or were they AI-drafted and then
   edited by you? If you wrote them, that plus the compilation is a substantial claim and the
   "almost all AI" reasoning does not hold. If they were AI-drafted and you edited, the claim narrows
   to your edits plus the compilation — still real, but much thinner.
2. **The 1,010 USMLE and 150 NCLEX items** — drafted by you, or AI-drafted and reviewed?
3. **The 300 drug entries** — no build record exists. Where did they come from?
4. **The 34 USMLE vector illustrations** (32 ECGs, a pedigree) — drawn, adapted from a source, or
   generated?
5. **Anything from a prior work of yours** — lectures, handouts, teaching material predating this
   app? That would be separately registrable and may already be published, which affects timing.

---

## What to ask counsel

1. **Given the split above, is a registration worth filing at all** — and if so, is the
   website-content filing alone enough, skipping the computer-program one? (Roughly $65 each.)
2. **Does removing `noindex` constitute first publication**, starting the three-month §412 window? The
   site is currently unlisted, `noindex`, and behind an invitation-only sign-in, and the copyright
   guide notes that combination is arguably still unpublished.
3. **How should the compilation claim be worded** so it survives the AI exclusions?
4. **Do the nine third-party clinical scores need anything beyond exclusion** — attribution,
   permission, or is reproducing published criteria fine?
5. **Trademark-only: what is the realistic exposure** if someone copies the content and renames it?
6. Worth asking, since it is a genuine trade-off already recorded: the copyright guide recommends
   using an attorney for the trademark *search*, and the decision on 2026-08-05 was to self-file
   after an 83-mark analysis. A second opinion on that is cheap while you are in the room.

---

## One practical note

The app is now **invitation-only behind a sign-in wall**. The copyright guide's own view is that
*"registration is a remedy after the fact; a password is the only thing that actually prevents the
copying."* That control is shipped. It does not replace registration — it changes how much you are
relying on registration, which is worth telling counsel because it may change their advice.
