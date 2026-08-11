# For production: one consolidated re-export request — 16 galleries in the leader-line order ship below standard

Not a leader-line correction. This is a single request that replaces the per-page size notes scattered
through tranches 2, 3 and 4, so the re-export can be run once. *Compiled 2026-08-11.*

---

## The ask

**Sixteen of the 75 galleries in the 81-page work order ship below the 1024×1536 standard.** Please
re-export all of them at **1024×1536** in the same pass as the leader-line re-renders. Every one of
them has flagged rows, so they are being re-rendered anyway.

| gallery | ships at | note |
|---|---|---|
| `addisons` | 800×1200 | |
| `hypothyroid` | 800×1200 | **4 rows unverifiable at this size** |
| `lung-cancer` | 800×1200 | |
| `metabolic-syndrome` | 800×1200 | |
| `osa` | 800×1200 | |
| `pe` | 800×1200 | |
| `pneumothorax` | 800×1200 | **4 rows unverifiable at this size** |
| `t2dm` | 800×1200 | |
| `tb` | 800×1200 | **1 row unverifiable at this size** |
| `thyroidstorm` | 800×1200 | |
| `cardiac-arrest` | 913×1373 | |
| `dvt` | 913×1373 | |
| `aortic-dissection` | 915×1373 | |
| `htn` | 1137×1705 | *larger* than standard — downscale, do not leave mixed |
| `aortic-stenosis` | 1138×1707 | *larger* than standard |
| `pericarditis` | 1280×1920 | *larger* than standard |

The last three are **above** the standard, not below. A gallery must ship one size, so they need
downscaling to 1024×1536 rather than being left as they are.

## Why this has stopped being housekeeping

Until this batch the size was a quality preference. It is now **blocking verification of specific
rows**, and here is the measurement that shows it.

On `pneumothorax` p2 the main figure's four labelled layers are the subject of the page. Cutting a
horizontal ray across the chest wall at **y = 375** and reading the colour at each pixel:

| x at y=375 | RGB | what it is |
|---|---|---|
| ≤ 471 | (109,39,47) | lung |
| **472–473** | (145,86,92) | a pale line — visceral pleura |
| **475–476** | (143,121,124) | a pale line |
| **480** | (153,122,137) | a pale line, **one pixel wide** |
| 481–484 | (7,3,4) | the dark band |
| **485–486** | (160,162,159) | a pale line — the chest-wall boundary |

**Four pale lines, each one or two pixels wide, with three-pixel gaps.** A leader terminator on that
page is about **4 px across** — wider than the layer it names. Four separate leaders cannot land
distinguishably on that stack, and a reader could not tell them apart if they did. At 1024×1536 the
layers become 2–3 px each, which is workable.

The same cause blocked four rows on `hypothyroid` p2 (the whole thyroid, the trachea, both
neurovascular bundles and four nerve branches inside about 300 × 250 source pixels) and one on `tb`
p2 (the hilar nodes and the surrounding parenchyma no longer separate by colour at 800 px, so a
leader 8 px from a node cannot be called either way).

**Nine of the nine rows we could not verify across four tranches are on these pages.** Every row on
every standard-size page was measurable.

## What we are not asking for

**No artwork changes.** This is a re-export at a different raster size from the same source, not a
redraw. If the source files are vector or layered, this should be a render-settings change.

## One thing worth checking at your end first

Our own build history suggests these pages may have been **delivered** at 1024×1536 and downscaled by
an older pipeline of ours before they shipped. If your masters are already at the standard size, tell
us and we will fix it here rather than asking you to re-render. That would be the cheapest outcome for
everyone.

## Coordinates in the tranches

Every coordinate we have published for `tb`, `pneumothorax` and `hypothyroid` is in **the shipped
page's own pixels** — multiply by **1.28** for the 1024×1536 equivalent. All other pages in the
tranches are already at standard size and their coordinates need no conversion.

Once these are re-exported, send them back and we will verify the nine outstanding rows against the
new files.
