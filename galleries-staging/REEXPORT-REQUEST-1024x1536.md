# For production: 27 galleries need re-exporting at 1024×1536

Send this alongside `PRODUCTION-BRIEF-leader-lines.md` and the work order. It is a separate ask
from the leader lines and can be done independently, but the two overlap on two pages — see the
last section.

---

## The ask

**Re-export 27 galleries — 270 pages — at 1024×1536, JPEG q88.** No artwork changes; the same
pages at the standard size.

That size became the standard on 2026-07-29. These 27 predate it and shipped smaller: 22 of them
at **800×1200**, the rest between 804 and 915 px wide. Everything built since is at 1024×1536, so
this is the tail of the early batches rather than a new requirement.

If any of these were produced at 1536×2304, **downscale to 1024×1536** rather than sending the
larger size — a gallery must ship one size throughout, and mixed sets are rejected by our build.

---

## Why it matters, concretely

**Small text stops being resolvable.** These pages are dense infographics with labelled anatomy,
and the label audit hit its limit on exactly these files. On `pneumothorax` page 2, four labels —
lung, parietal pleura, pleural cavity, visceral pleura — name layers that occupy about **ten
source pixels** in total. At 800×1200 those four leader lines cannot be traced even at 28×
magnification, so they were reported as unreadable rather than guessed. At 1024×1536 they would be
checkable.

**It is the only category of finding we could not adjudicate.** Every other page in the audit
resolved one way or the other; these four are open solely because of source resolution.

**Displays are ahead of the files.** The in-app viewer already presents pages larger than 800 px
on a Pro Max screen, so these 27 are being upscaled on the device today.

---

## The list

Grouped by category. All are 10-page galleries.

### Respiratory — 10 of 10 galleries

`ards`, `asthma`, `cap`, `copd`, `lung-cancer`, `osa`, `pe`, `pleural-effusion`, `pneumothorax`,
`tb` — all at 800×1200.

### Endocrine — 12 of 13 galleries

`addisons`, `cushings`, `di`, `dka`, `hhs`, `hypoglycemia`, `hypothyroid`, `metabolic-syndrome`,
`siadh`, `t1dm`, `t2dm`, `thyroidstorm` — all at 800×1200, a few pages off by a pixel
(799 or 801 wide) which suggests per-page export rather than a batch setting.

### Cardiac — 5 of 13 galleries

| gallery | current size |
|---|---|
| `aortic-dissection` | 915×1373 |
| `cardiac-arrest` | 913×1373 and 915×1373 — mixed within the gallery |
| `dvt` | 913×1373, 915×1372 and 915×1373 — three sizes within the gallery |
| `hyperlipidemia` | 915×1372 |
| `pad` | 804×1206 |

`cardiac-arrest` and `dvt` are **internally inconsistent**, which is worth knowing independently of
the size: a gallery is supposed to ship one size throughout.

---

## Where this overlaps the leader-line work order

Two galleries appear on both lists, and the order matters:

- **`pneumothorax` page 2** — 4 labels marked *[SOURCE TOO LOW-RES]* in the work order. Re-export
  first; those four can then be audited and fixed in the same pass as the rest of that page.
- **`osa` page 2** — also 800×1200, and 6 labels flagged. Same reasoning, though those six were
  readable.

Everything else on the two lists is independent.

---

## What we do on receipt

Pages land as `assets/<id>/<id>-NN.jpg`; thumbnails regenerate to the flat `gthumbs/` set at 320 px
q82; the download PDF is rebuilt from the new pages, and a check now enforces that the PDF matches
them. Page **order comes from the `IMAGE n OF 10` header strip**, not from filenames — every batch
so far has arrived shuffled, so please keep that header correct on each page.

Two things we always check on arrival, both of which have been wrong before: the **logo lockup**
(the current one is the ℞ waveform mark) and the **header progress dots** — one filled dot at the
current page, dot count equal to the page total. See `DOTS-defect-for-production.md`; a wrong dot
index tells the reader they are on a different page.
