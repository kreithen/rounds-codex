# Work order — adding the Google Play badge to the five social pieces

**Opened 2026-09-22.** Five finished pieces exist and need a second store badge, plus three
text corrections. This file is the spec; `badge-spec.json` holds the measured geometry.

## Decisions taken by the physician, 2026-09-22

| question | decision |
|---|---|
| "PASS THE TEST!" | **Replace** with the app's own tagline, "LEARN. UNDERSTAND. SUCCEED." |
| source artwork | Physician sends the original full-resolution exports |
| the fabricated phone screens | **Leave as they are** |
| when the Play versions go out | Build now, **hold** until the physician confirms the Play listing resolves |
| badge colour | **Two dark badges** — Apple's black badge beside Google's standard one |
| `ed-photo` / `three-modes` headline | Set the **full tagline at a reduced size**, matching `or-photo` |
| `feature-sheet` | Physician sends the **layered source**; it cannot be composited |

## The five pieces

| # | name | shape | headline | what changes |
|---|---|---|---|---|
| 1 | `feature-sheet` | 2:3 | LEARN. / UNDERSTAND. / PASS THE TEST! | tagline, badge row, store line, 2 counts |
| 2 | `ed-photo` | 9:16 | PASS THE TEST! | tagline (needs a rethink, see below), badge row |
| 3 | `three-modes` | 9:16 | ONE APP. THREE LEARNING MODES. | tagline, badge row, 2 counts |
| 4 | `medicine-sticks` | 9:16 | MEDICINE STICKS WHEN YOU CAN SEE IT. | badge row, store line, 1 count |
| 5 | `or-photo` | 9:16 | LEARN. UNDERSTAND. / PASS THE TEST! | tagline, badge row |

## 1. The badge row

**Both badges must be the stores' own artwork, unmodified.** The badge currently in the artwork
is neither: the five pieces measure at aspect ratios **3.59, 3.10, 3.46, 3.40 and 3.14** against
Apple's true **2.992**, and one placed asset would give one ratio at five scales. The apple's bite
and leaf also differ visibly between pieces. They were drawn by whatever rendered the artwork.
So the old badge is not being *joined* by a Play badge — it is being **replaced**, along with the
official Apple one now in `marketing/badges/`.

Layout rules, from the two brand guidelines:

- Clear space around each badge ≥ ¼ of that badge's height, all four sides.
- **The Google Play badge is never smaller than another store's badge.** Match on **height**,
  not width — the two have different aspect ratios, so equal widths would make Play shorter.
- Nothing inside the badge; the badge is never a word in a sentence.

### The old badge has to be erased, and one piece cannot be

**This section first claimed no erase was needed** — the reasoning being that two badges side by
side are ~2.2× the width of one, so a pair at the old badge's height would contain it and simply
paint over it. That is wrong, and rendering it is what showed why: **the pair is not solid.** The
clear-space gap between the two badges is a hole straight through the middle, and since both the
pair and the old badge are centred on the same x, the gap always lands on the old badge. The first
render had "…oad / p S…" from the old drawn badge showing between the two new ones.

The containment check had the same defect — it tested the pair's *bounding box*, which is
true-but-insufficient in exactly the way `verify_sw.js` once was. It now tests the **union of the
two badge rectangles**, and `--erase` paints the old badge out first.

`--erase` samples its fill from the bands immediately left and right of the old badge — background
by construction, since the badge is centred — and **refuses if those bands are not flat**
(channel spread > 24), rather than smearing a colour over artwork.

| piece | background beside the badge | outcome |
|---|---|---|
| `ed-photo` | spread 2/4/7 | erases clean |
| `three-modes` | spread 3/5/7 | erases clean |
| `medicine-sticks` | spread 1/2/5 | erases clean |
| `or-photo` | spread 1/3/5 | erases clean |
| **`feature-sheet`** | **spread 58/92/124** | **refused** |

**`feature-sheet` cannot be fixed by compositing.** Its badge sits directly on the glowing heart
and ECG, so there is nothing flat to sample and any fill would smear the artwork. That band has to
be reflowed in the layered source file, or the piece re-rendered. It is also the piece with the
most text changes (tagline, store line, two counts), so it is the one that most wants the source
anyway.

`badge-spec.json` carries each old badge's box as fractions of the **content** area, so they
transfer to any export resolution.

### Google ships its badge WITH the clear space baked in

The generic Play badge asset is 646×250 with the artwork inset by roughly ¼ of its height on
every side. Size that padded file to Apple's badge height and the **actual Play badge renders
about a third shorter than Apple's** — which is exactly what the equal-prominence rule forbids,
while looking deliberate rather than broken. Apple's SVG has no such padding; its artboard is the
badge.

So the script trims the Play badge to its tight bounding box before sizing, and re-adds the clear
space as layout gap where it belongs. Measured on a padded stand-in it reported
`42/82/41/83px of baked-in clear space (646x250 -> 481x167)` and both badges then rendered at a
true 131px. **Anyone placing these by hand in a design tool has to do the same thing** — see below.

### Placing the pair by hand (for `feature-sheet`, in the source file)

1. **Trim the Play badge's transparent margin first.** Otherwise it sits visibly shorter.
2. **Both badges the same HEIGHT**, never the same width — the aspect ratios differ (Apple is
   2.992; Google's trimmed artwork is around 2.88).
3. Badge height ≈ **6.5% of canvas height** on the 2:3 feature sheet, which puts the pair at
   roughly 59% of the width. On the four 9:16 pieces the script uses 8.0%, giving ~86–90%.
4. **Gap between them = half the badge height.** That satisfies the ¼-badge-height clear space on
   each facing side with a little room over.
5. Centre the pair horizontally; put its vertical centre at **91% of canvas height**, which is
   where the old badge's centre sits.

### Running it

```sh
node scripts/add_store_badges.js <in.png> <piece> <out.png> \
     --play marketing/badges/google-play-badge.png --height 0.08 --erase
```

`--height` is a fraction of image height; 0.08 puts the pair at ~86% of the frame width on all
four 9:16 pieces, which keeps it clear of a story's safe area. `--dry` prints the geometry without
rendering.

## 2. The tagline

"LEARN. UNDERSTAND. SUCCEED." is already the app's tagline and already appears inside the phone
mock on `feature-sheet`, so this is not new copy.

- **`feature-sheet` and `or-photo` are a word swap.** Both already read "LEARN. UNDERSTAND." above
  the big line, so the big line becomes **SUCCEED.** and the piece states the tagline exactly.
- **`ed-photo` and `three-modes` need a design call, not a swap.** In both, "PASS THE TEST!" is a
  standalone line with nothing above it; "SUCCEED." alone is limp. Proposal: set the full
  "LEARN. UNDERSTAND. SUCCEED." as the headline at a smaller size, which is what `or-photo`
  already does and keeps the set consistent. **Needs the physician's eye before rendering.**

## 3. The store line

Only two pieces name a store, and only these two change:

- `feature-sheet`: "NOW AVAILABLE ON THE APP STORE • FREE TO DOWNLOAD"
- `medicine-sticks`: "NOW AVAILABLE / ON THE APP STORE"

Proposed: **"NOW ON THE APP STORE & GOOGLE PLAY"**. "NOW AVAILABLE ON THE APP STORE AND GOOGLE
PLAY" is ~25% longer than the space allows on `feature-sheet` at the current size.

`ed-photo` and `or-photo` say "NOW AVAILABLE • FREE TO DOWNLOAD" with no store named, so they
need no text change — the badges carry it.

**None of this ships until the Play listing resolves.** Submitted 2026-09-22 09:38, in review.
`play.google.com` refuses CONNECT through the agent proxy, so a session cannot check; the
physician opens the URL in a browser.

## 4. The counts

Derived with `node scripts/read_shipped_counts.js /home/user/rounds-codex-app`, never from memory.

| piece | printed | correct | why |
|---|---|---|---|
| `feature-sheet` | 1,820 quizzes | **1,840** | Hip Fracture and Low Back Pain added 20 |
| `feature-sheet` | 25 medical & surgical specialties | **21** | conditions span 21 categories |
| `three-modes` | 25 specialties · 1,820 quizzes | **21 specialties · 1,840 quizzes** | same two |
| `medicine-sticks` | 1,820 quizzes | **1,840** | same |

**25 is a real number on a different axis** — resident specialties and guideline specialties are
both 25 — which is exactly why it keeps attaching itself to the conditions. That is the error
that shipped in the 2026-08-30 launch email and it is still live on roundscodex.com.

`1,840 + 1,010 + 150 = 3,000`, which is why the approved phrasing for the total is
**"3,000 questions in all"** and never "3,000 practice questions" — practice questions means the
condition quizzes alone.

## 5. What is NOT changing

- **The phone mocks.** `ed-photo`'s screen is a fabricated UI that reads as gibberish at full
  size — "LEARN | UNDERSTAND | SHOUT.", "Aomo Ecrenary Syndrome / MI", a nav bar of "OR / Peth-op ·
  Rx · Retshont Recos · Act Sronads Codoc" against the real Library · OR/Peri-op · Rx · Resident ·
  Clinical Calculators. `feature-sheet`'s is plausible but also invented (four tabs, "Qbank" and
  "Profile"). **The physician's call, 2026-09-22, is to leave both.** Recorded here so it reads as
  a decision rather than something nobody noticed.
- **"FREE TO DOWNLOAD."** Google prohibits price wording in *Play listing assets* — the feature
  graphic and store screenshots. These are social pieces, not listing assets, so it stands.
- **No "free for life" appears on any of the five**, which is correct: the 2026-09-14
  grandfathering decision removed the early-user category. Do not add urgency copy here.
