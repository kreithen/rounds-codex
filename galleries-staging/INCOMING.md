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

### Blocking: the set is two different resolutions
Pages 1–2 are 1024×1536; pages 3–5 are 1536×2304 — the larger size this project has been
asking production for. A gallery must ship one size. Upscaling 1–2 invents detail; downscaling
3–5 discards it. **Preferred fix: have production re-render pages 1 and 2 at 1536×2304** so the
whole set ships at the better resolution. `fix_page_logo.py` now refuses a mixed set rather
than silently resampling it (`RC_PAGE_SIZE=WxH` overrides if resampling is genuinely wanted).

### Good news: the logo is correct
Every page carries the canonical integrated mark. Production fixed what was wrong in the
Hepatitis/Appendicitis batch — no `fix_page_logo.py` pass is needed for the mark itself.

### Production defects to report back
- **Opaque black plate behind the logo on pages 2–5** (page 1 is clean), and a second one behind
  the progress dots on page 3. The lockup is being composited on a solid black rectangle rather
  than transparently, and it reads as a visible box against the header's blue gradient.
  **Not auto-fixable**: an edge-detection pass to catch a dark plate was tried and rejected —
  it erased the "IM" from "IMAGE 4 OF 10" and smeared three progress dots, because the header
  gradient and the centred page number produce steps as sharp as a plate edge. This has to be
  fixed in the render.
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
