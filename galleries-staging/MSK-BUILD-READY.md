# Both MSK galleries: rehearsed and ready, waiting only on the twenty JPGs

`back-pain` and `hip-fracture` are the last two MSK & Rheum galleries. Everything except the pixels
is done and the build has been **rehearsed end to end** against throwaway stand-in pages, so the real
build is one command and one verification.

## What to do when the files arrive

Drop the twenty pages in, named by page number from the **`IMAGE n OF 10` header strip** — never from
filenames or arrival order, every batch so far has arrived shuffled:

```
galleries-staging/back-pain/back-pain-01.jpg  ...  back-pain-10.jpg
galleries-staging/hip-fracture/hip-fracture-01.jpg  ...  hip-fracture-10.jpg
```

Then:

```sh
python3 scripts/build_galleries_from_images.py \
    back-pain=galleries-staging/back-pain \
    hip-fracture=galleries-staging/hip-fracture
python3 scripts/verify_gallery_pdfs.py /workspace/rounds-codex-app back-pain hip-fracture
python3 scripts/gen_gallery_gap.py          # coverage doc; reads the shipped JSON, cannot drift
```

`titles.json` already holds all twenty titles for both. **Re-check them against the delivered files
at full resolution** — they were read off chat-scaled screenshots.

## What the rehearsal proved

Run with `RC_APP` pointed at a throwaway tree (that override was added for this, and defaults to the
live working copy so an ordinary run is unchanged), with visibly-synthetic stand-in pages:

- Both entries come out **key-for-key identical to `croup`**, the most recently built gallery.
- `base` is `''` and each `thumb` reaches the flat root-level `gthumbs/` set — the arrangement that
  took the galleries index from 78 MB down to 12 MB. `pdf` is root-relative and not resolved
  through `base`.
- Titles land in **numeric page order**, taken from `titles.json` rather than dict order.
- Both ids are appended to `real[]`, without which the artwork silently does not render.
- All 10 pages per gallery are 1024×1536, and `content/galleries.json` stays **minified**.
- `verify_gallery_pdfs.py` passes on the freshly built PDFs.

Nothing leaked into the live tree — verified with `git status` after.

**One number from the rehearsal is not predictive:** the stand-ins came out at ~480 kB for ten pages
because they are flat colour. Real pages run ~4.4 MB per gallery at q88.

## The rehearsal also found a limit in the PDF guard

The first pass flagged `hip-fracture p9: matches source page 6 better than its own - PDF order is
wrong`. That was **not** a builder bug. My stand-in pages differed only by one line of small text,
which is invisible at the 120×180 the identity check compares at, so the nearest-neighbour match
tied and picked arbitrarily. The control — same builder, visibly distinct pages — passed clean.
Recorded in a comment in `verify_gallery_pdfs.py`: if that message ever appears on a real gallery,
**look at the two pages it names before rebuilding**, because a near-duplicate pair is the likelier
explanation than a reordered PDF.

## Expect to rebuild some pages later

Both batches carry production defects, documented in `BATCH-back-pain-defects.md` and
`BATCH-hip-fracture-defects.md`. The physician's call was **build now, rebuild the affected pages
when re-renders arrive**:

- **`hip-fracture` pages 1, 2, 3 and 10** came from different template generations than 4–9 (pages
  1–3 carry the wrong ICD-10 code and wrong dots; page 10 is a third template).
- **`back-pain` pages 5–10** have the progress dots wrong — the fill lags one position from page 5,
  and the row loses a dot from page 6.

A page rebuild is a re-run of the same build command **plus** `scripts/rebuild_gallery_pdf.py`,
because the download PDF is a build artifact and drifts from the pages otherwise — that is exactly
what produced the wrong-logo downloads fixed in v75. `_headers` marks only `/assets/audio/*`
immutable, so a rebuilt PDF at the same path is revalidated and needs no new filename.

**Do not repaint delivered pages to fix the dots.** It was attempted once, produced visibly damaged
artwork, and the repainter was deleted. Flag for re-render.
