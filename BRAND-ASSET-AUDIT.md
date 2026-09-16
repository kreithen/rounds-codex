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

### 1. The USMLE module's logo has no emblem at all

`rounds-codex-app/usmle/assets/logo.png` and `preview/assets/logo.png` are **the same file**
(md5 `74e5ee5444…`), 843×270, and it is the **wordmark only** — outlined type, no ring, no ECG
trace. So `/usmle/`, which medical mode links to as a full page, wears a different lockup from every
other surface in the product.

Not a defect in the sense the crop was — nothing is broken or half-drawn — but a reader who goes
Library → USMLE PREP sees the brand change. **Physician's call whether that is deliberate.** Fixing
it is a one-file swap plus a deploy; the emblem-bearing lockup is `scripts/logo-trim.png`.

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
