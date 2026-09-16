# Brand asset audit — 2026-09-16

Run after the physician found that **every app icon carried a cropped version of the mark**: the
ring open on the right, so the emblem read as a "C" rather than the brand's closed circle. That
defect had been live since launch and survived because a small dark icon is exactly where a missing
arc hides. The obvious question was how far it had spread.

**Answer: nowhere else. The crop was confined to the four web icon files.** Everything else carries
the correct closed ring.

## Method, and why it is not a script

By eye, off a contact sheet of every brand asset at a readable size, with the small lockups
magnified separately. Deliberately **not** a geometry detector: `build_app_icons.py`'s aspect check
works because an icon is *only* the emblem, so the bounding box of everything bright IS the ring. In
a lockup the wordmark is bright too, and in `og-cover` the mark is 100px wide over a photograph.
Every fixed-geometry attempt on this project's artwork has failed — CLAUDE.md records five of them
against the gallery header dots, and the repainter built on the sixth had to be deleted. Nine assets
is an afternoon of looking; a detector for them is a week and a wrong answer.

## What was checked

| asset | where | ring |
|---|---|---|
| `scripts/logo-trim.png` | the canonical lockup, source for everything generated | ✅ closed |
| `landing/assets/rounds-codex-logo-clear.png` | landing, light variant | ✅ closed |
| `landing/assets/rounds-codex-logo.webp` | landing | ✅ closed |
| `landing/assets/og-cover.jpg` | landing link previews | ✅ closed (magnified to check) |
| `landing/assets/rounds-codex-social-1x1.jpg` | social | ✅ closed (magnified to check) |
| `native/play-graphics/feature-graphic.png` | Play store | ✅ closed |
| `og-card.jpg` | the app's site-wide link card | ✅ closed |
| `og/g/*.jpg` ×102 | per-gallery link cards | ✅ closed — generated from the lockup |
| `icons/*` ×4, Play icon, App Store icon | the app | ✅ **fixed in v143**, were 0.78 aspect |

## Two findings that are NOT the crop, and are real

### 1. The USMLE module's logo had no emblem at all — FIXED in v145

`rounds-codex-app/usmle/assets/logo.png` and `preview/assets/logo.png` were **the same file**
(md5 `74e5ee5444…`), 843×270, and it was the **wordmark only** — outlined type, no ring, no ECG
trace. So `/usmle/`, which medical mode links to as a full page, wore a different lockup from every
other surface in the product.

Not a defect in the sense the crop was — nothing was broken or half-drawn — but a reader who went
Library → USMLE PREP saw the brand change. Replaced at the physician's direction by
**`scripts/build_usmle_logo.py`**, which generates it from `scripts/logo-trim.png` like the icons
and the link cards, so there is one place to fix if the lockup ever changes again. Now 949×270,
md5 `760b52115c…`, identical in both trees.

**The conversion is the whole job, and it is not a resize.** The lockup is RGB on a near-black
ground; the file it replaced is RGBA keyed to transparency, and two things depend on that alpha.
The page ground is `--bg:#070b12`, *not* the lockup's (0,1,13), so an opaque rectangle sits on the
header as a faintly visible dark patch. And `.brandimg` carries
`drop-shadow(0 0 7px rgba(90,180,240,.35))`, which is cast by the **alpha shape** — opaque corners
turn the mark's glow into a glowing box. So the ground is keyed the way a screened graphic must be:
alpha from the brightest channel, colour un-premultiplied so a half-lit glow pixel keeps its hue.
**The floor is measured and that is why it is not zero** — the four 24px corner patches read 10–24,
so keying at 0 leaves the whole rectangle at ~9% alpha and the drop-shadow draws it. Do not take
the floor off the whole border: the ECG trace leaves the frame at the bottom edge and reads 255
there. `.brandimg` is `height:52px;width:auto;max-width:260px`, so the rendered width went 162→183px
and 120→141px against the 190px cap — inside both, which is why no CSS changed.

### 2. The landing site's home-screen icon is a different design from the app's

`landing/assets/apple-touch-icon.png` (180×180) is a **thick solid gradient ring on a rounded
square** — no glow, no lens flare, a simpler ECG trace. The app's `icons/apple-touch-icon.png` is
the glowing thin ring on the dark ground. Two different marks for one product, and someone who saves
both roundscodex.com and the app to a home screen gets two icons that do not match.

**Not fixed here**, for a reason that is structural rather than aesthetic: `landing/` lives on
`main`, which is a disjoint history owned by another conversation (CLAUDE.md's first section). It
needs to be raised there, not patched from this line.

## The guard that now exists

`scripts/build_app_icons.py` generates all six icons from the lockup and refuses to emit one whose
mark is not square to within 10% and centred to within 2%. The four shipped files measured **0.78**,
identically, which is what proved a single upstream crop rather than four separate mistakes — and
it is the check to reach for if this class of thing is ever suspected again. A checker that counted
bright pixels, or tested the centroid alone, passed all four.
