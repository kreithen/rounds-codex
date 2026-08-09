# Large screens: iPad, and a folding iPhone

Written 2026-08-09. Not launch-blocking — this is a plan for after the 17th.

> **A caveat that shapes the whole plan.** I have no reliable information about an unreleased Apple
> foldable: not its dimensions, aspect ratio, hinge behaviour, or whether it exists. My knowledge has
> a cutoff and I will not design against rumoured specifications.
>
> **So do not build for a device. Build for width.** Everything below is expressed as CSS
> breakpoints, which is what actually determines the layout, and which pays off on iPad *today*
> whether or not a foldable ever ships. If one does, a width-based layout adapts to it on day one
> with no work — and if the rumours are wrong, nothing has been wasted.

---

## What happens today, measured

**The whole app is capped at 468 px and centred:**

```css
.app { width:100%; max-width:468px; min-height:100vh; }
.nav { max-width:440px; }
```

**Every one of the fourteen media queries is `max-width`.** There is not a single `min-width` rule
in the file. The app is designed phone-down, from 468 px to 320 px, and above 468 px nothing changes.

**So on an unfolded foldable or an iPad, the app renders as a narrow phone-width column in the middle
of a large black screen.** That is not broken, and it is not embarrassing — a lot of shipped apps do
exactly this. But it wastes most of the display, and on a device whose entire selling point is the
larger screen, the one app that does not use it stands out.

Three things would look specifically weak:

1. **The gallery grid.** `repeat(auto-fill,minmax(230px,1fr))` is capped by the 468 px container to
   two columns. Given 900 px it would happily show four, which is the single biggest visual win
   available and costs almost nothing.
2. **The condition detail page.** Long single-column prose in a 468 px ribbon down the middle of a
   large screen, with the reader's eye travelling a short line length surrounded by emptiness.
3. **The nav bar.** Pinned to 440 px and centred at the bottom. On a large screen a bottom bar is the
   wrong pattern entirely — the thumb is nowhere near it.

---

## Three levels, in increasing cost

### Level 1 — Let it breathe (half a day, no risk)

Raise the container cap at large widths and let the grids reflow. Nothing restructures.

```css
@media (min-width: 720px)  { .app { max-width: 680px; } }
@media (min-width: 1024px) { .app { max-width: 860px; } }
```

- Gallery grid goes to three or four columns on its own — it is already `auto-fill`
- Library cards, calculator list, drug list all reflow
- **Cap the prose.** Condition text should stay near 65–75 characters a line; a 860 px measure is
  harder to read than 468 px, not easier. This means the *container* widens while the reading column
  does not, which is the opposite of what a naive `max-width` bump does.

Biggest bang for the effort. Also improves iPad immediately, which matters now.

### Level 2 — Two-pane at tablet width (2–3 days)

The Mail/Notes pattern: condition list on the left, the open condition on the right, both scrolling
independently.

- Fits the app's structure well — `go('detail', id)` already separates list from detail
- Turns the nav bar into a **sidebar** above ~900 px, which is the right pattern for a large screen
- The gallery viewer and quiz stay full-width overlays; they should not be squeezed into a pane
- **The real work is the router**, not the CSS: `stack`, `back()` and `rcSyncURL()` all assume one
  visible view at a time. Two panes means two simultaneous views, and the back-stack semantics have
  to be decided rather than inherited.

### Level 3 — Fold-aware (unknown, and premature)

Continuity across the fold: same scroll position and same open condition when the device opens or
closes, and respecting the hinge as a layout boundary.

- The web platform exposes viewport segments for this, but support and the exact API are exactly
  what I cannot verify from here
- **Do not start this until the device exists and can be tested on.** Designing a hinge-aware layout
  against rumour is how you build something that has to be thrown away.

---

## What to do, and when

| when | what |
|---|---|
| **After the 17th** | **Level 1.** Half a day, improves iPad today, and it is the prerequisite for everything else. |
| **Before any tablet marketing** | **Level 2**, if iPad is a target audience worth naming. It is a genuine product decision, not a polish item — it changes how the app is navigated. |
| **When the hardware is real** | Level 2 will already have done most of the work. Re-measure then. |

**One thing to do regardless, and cheaply: make the app resize gracefully.** A foldable changes
viewport size *while the app is running*. The layout is CSS so it mostly follows, but anything that
measured a width once at boot will be wrong after the fold. Worth an explicit test — resize the
window mid-session in the headless harness and assert the gallery grid, the nav bar and the audio
scrubber all still behave. That test is worth writing before the device exists, because it also
catches iPad rotation, which is real today.

---

## What I would not do

**Do not add a tablet-specific build or a separate layout file.** One responsive stylesheet with
`min-width` breakpoints covers phone, unfolded phone, iPad and desktop. A second layout doubles the
surface that every future change has to be verified against — and this app already has a verification
suite that runs at 320/360/375/390/414/430 px. Adding widths to that list is cheap; adding a parallel
layout is not.
