# Large screens: iPad, and a folding iPhone

> **LEVEL 1 IS BUILT, 2026-09-12 — branch `claude/ios-large-screen-layout-6n2sur`. NOT DEPLOYED:
> it needs the physician's approval, because it ships to every web user the moment it lands.**
> Applied by **`scripts/add_large_screen.js`**, guarded by **`scripts/verify_large_screen.js`**
> (15 checks; 11 of them fail on the pre-fix tree, so it is a guard and not decoration), and wired
> into `scripts/preflight.sh`. Read those two files before changing any of it — they carry the
> measurements. Four things below turned out to be wrong or incomplete and are corrected in place:
>
> - **The count is twenty media queries, not fourteen** (16 `max-width`, 2 `hover`, 1
>   `prefers-reduced-motion`, 1 `print`). Still not one `min-width` before this change.
> - **"The gallery grid is already `auto-fill`" is wrong.** `.ggrid`, `.grid` and `.rxgrid` are all
>   a hard `1fr 1fr`; only `.res-grid` is `auto-fill`. Without explicit rules the widened container
>   gives you two enormous columns, which is worse than the ribbon.
> - **The prose cap buys much less than it looks like it should, because the shipped 468 px column
>   was already at a good measure** — 62–75 characters on body text. The reading views were capped
>   at **520 px**, a 52 px gain, and that is the honest ceiling. See the table in
>   `scripts/add_large_screen.js`.
> - **The resize test the plan asks for at the bottom found a live bug** on the first run:
>   `positionThumbs()` was never wired to `resize`, so the mode toggle's sliding thumb ends up 9 px
>   short of its button after any rotation across the 405 px breakpoint. Live today on any iPhone
>   whose portrait width is under 405 pt. Fixed in the same commit.

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

**Every one of the twenty media queries is `max-width`** (re-counted 2026-09-12; it was fourteen
when this was written). There is not a single `min-width` rule in the file. The app is designed phone-down, from 468 px to 320 px, and above 468 px nothing changes.

**So on an unfolded foldable or an iPad, the app renders as a narrow phone-width column in the middle
of a large black screen.** That is not broken, and it is not embarrassing — a lot of shipped apps do
exactly this. But it wastes most of the display, and on a device whose entire selling point is the
larger screen, the one app that does not use it stands out.

Three things would look specifically weak:

1. **The gallery grid.** *(Corrected 2026-09-12.)* The `auto-fill` rule quoted here is
   **`.res-grid`**, the resident specialty picker — not the gallery. The gallery grid is
   `.ggrid{grid-template-columns:1fr 1fr}`, and so are `.grid` (the library) and `.rxgrid` (the
   drug list): a hard two columns that do not reflow at any width. It is still the single biggest
   visual win — a DVT gallery shows eight pages at 1024 px instead of four — it just costs three
   explicit rules rather than nothing.
2. **The condition detail page.** Long single-column prose in a 468 px ribbon down the middle of a
   large screen, with the reader's eye travelling a short line length surrounded by emptiness.
3. **The nav bar.** Pinned to 440 px and centred at the bottom. On a large screen a bottom bar is the
   wrong pattern entirely — the thumb is nowhere near it.

---

## Three levels, in increasing cost

### Level 1 — Let it breathe (half a day, no risk)  ·  **BUILT 2026-09-12, awaiting deploy approval**

Raise the container cap at large widths and let the grids reflow. Nothing restructures.

```css
@media (min-width: 720px)  { .app { max-width: 680px; } }
@media (min-width: 1024px) { .app { max-width: 860px; } }
```

*As built:* 680 and **880**, plus `.nav{max-width:560px}` from 720 up, explicit `auto-fill` rules
for `.grid` / `.ggrid` / `.rxgrid`, `.cu-list` turned into a grid, a 64ch cap on the two ledes that
sit inside grid views (`.cu-intro`, `.res-hero p`), and a 420px cap on `.pdfbtn`, which stops looking
like a button at 880. Everything behind `min-width`, so the phone layout is provably untouched —
`verify_large_screen.js --before <unpatched tree>` diffs the rendered geometry of 17 views at
320/375/390/430 and they are identical.

- Gallery grid goes to four columns — but it needs an explicit rule, see the correction above
- Library cards, calculator list, drug list all reflow
- **Cap the prose.** Condition text should stay near 65–75 characters a line; a 860 px measure is
  harder to read than 468 px, not easier. This means the *container* widens while the reading column
  does not, which is the opposite of what a naive `max-width` bump does.
  *(Built 2026-09-12.)* Done by making `paint()` publish the current view name as `.app[data-view]`
  and capping the reading views at 520 px in CSS — the reading views and the grid views share their
  root elements (`libHTML` and `detailHTML` both return `<div class="pad">`), so there is nothing
  else in the markup to select on, and a list of prose selectors is open where a container cap is
  closed. Measured: at 468 px body prose already runs 62–75 characters, so 520 px is the largest cap
  that keeps everything inside ~84. **There was never much headroom here — the width goes to the
  grids.**

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
| ~~After the 17th~~ **done 2026-09-12** | **Level 1.** Built and verified; not deployed. `scripts/add_large_screen.js` + `scripts/verify_large_screen.js`. |
| **Before any tablet marketing** | **Level 2**, if iPad is a target audience worth naming. It is a genuine product decision, not a polish item — it changes how the app is navigated. |
| **When the hardware is real** | Level 2 will already have done most of the work. Re-measure then. |

**One thing to do regardless, and cheaply: make the app resize gracefully.** *(Done 2026-09-12, and
it paid immediately: the first run of that test found `positionThumbs()` unwired from `resize`, so
the mode toggle's sliding thumb sat 9 px short of its button after any rotation across 405 px. A
pre-existing bug on every iPhone narrower than 405 pt, invisible on iPad, which never crosses it.
`scripts/fix_dtop_overflow.js` states in a comment that positionThumbs is "already wired to resize";
that comment is wrong.)* A foldable changes
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
