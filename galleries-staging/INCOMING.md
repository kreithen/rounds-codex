# Incoming gallery batches — status

## Inflammatory Bowel Disease — `ibd` — 5 of 10 pages

Condition `ibd` ("Inflammatory Bowel Disease", Gastrointestinal) already exists and has no
gallery. Raw pages staged here as lossless PNG.

| page | title | size | staged |
|---|---|---|---|
| 1 | Overview: Ulcerative Colitis vs Crohn's Disease | 1024×1536 | yes |
| 2 | Annotated GI Anatomy | 1024×1536 | yes |
| 3 | Pathophysiology | 1536×2304 | yes |
| 4 | Clinical Presentation | 1536×2304 | yes |
| 5 | Endoscopic Findings | 1536×2304 | yes |
| 6–10 | — | — | **missing** |

### Resolution: DECIDED — downscale to 1024×1536
Pages 1–2 arrived at 1024×1536, pages 3–5 at 1536×2304. **Decision (2026-07-29): downscale 3–5
to 1024×1536**, and 1024×1536 stays the standard for all new galleries. Build with
`RC_PAGE_SIZE=1024x1536`, which is the deliberate-resample override; without it
`fix_page_logo.py` now errors on a mixed set rather than silently resampling.

### Good news: the logo is correct
Every page carries the canonical integrated mark. Production fixed what was wrong in the
Hepatitis/Appendicitis batch — no `fix_page_logo.py` pass is needed for the mark itself.

### Production defects to report back
- **NOT a defect — a false alarm worth recording.** These headers were first reported as having
  an opaque black plate behind the logo. They do not. The "plate" was an artifact of inspecting
  the header with a ×10 brightness stretch, which turns a 2–5 level difference out of 255 into
  what looks like a hard-edged rectangle. At true brightness the headers are clean.
  **Inspect dark UI at true brightness before calling a defect**; if a stretch is needed to see
  something, the user cannot see it either.
- **Progress dot strip wrong again**: 8 dots on pages 1–2, 10 on pages 3–5, where every page
  should show 10. Cosmetic, and the header text is correct on all five.
- **Copyright year inconsistent**: page 1 says © 2025, pages 2–5 say © 2026.

### New page format
This batch drops the old footer block (IMAGE TITLE / CATEGORY / DIFFICULTY / CLINICAL SOURCE)
in favour of a bare `IBD-MODULE-00N` code. **There is no longer an IMAGE TITLE field at all**,
so page titles must be read from the subtitle line under the main heading. Recorded in
`titles.json`.

### Build, once the set is complete and uniform
1. `RC_LOGO=scripts/logo-trim.png python3 scripts/fix_page_logo.py <dir> <out>` — only if the
   plate still needs erasing; the mark itself is already correct. **All ten pages at once** —
   `placement()` takes one size from the whole set so the header cannot jump while swiping.
2. `scripts/gen_thumbs.py` for `gthumbs/`, then the compact gallery PDF.
3. Entry in `content/galleries.json` with `base:""`, `file:"assets/ibd/ibd-NN.jpg"`,
   `thumb:"gthumbs/ibd-NN.jpg"`, and `ibd` added to the `real` list.
4. Verify headless against `scripts/netlifysim.js`, then deploy.
