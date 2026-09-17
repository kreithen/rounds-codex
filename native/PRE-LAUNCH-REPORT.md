# Google Play's pre-launch report — what it will say, before it says it

**Written 2026-09-14.** Every upload to Play triggers an automated **pre-launch report**: Google's
Robo test drives the app on real devices for a few minutes — tapping, typing, swiping — and
publishes crashes, performance, screenshots and an **accessibility summary** into the Console. It
runs on the first upload, so the first time anyone sees it is next to a first release.

Nobody had looked at this app through that lens. This is what it will find.

---

## 1. The crawler will meet the medical disclaimer first — decide this before uploading

`#rc-gate` covers the whole viewport and swallows every tap until `#rc-gate-ok` is clicked. That is
correct for a reader and it is the **first thing Robo meets**.

Two outcomes, and we cannot tell which from a container:
- Robo finds and taps the button, and crawls normally.
- Robo does not, and the report shows **the app never leaving its first screen** — which looks
  alarming, hides any real crash behind it, and produces a screenshot set that is one modal.

⚠ It is **not** safe to assume Robo sees the button. Robo explores through the Android view
hierarchy, and a Capacitor app is one `WebView` node; Google documents WebView-specific limits
elsewhere (credentials cannot be used for "a WebView for a web-based authentication flow"), which
tells you the WebView interior is not a first-class surface for it.

**What to do:** upload to **internal testing first** and read the report before promoting anything.
That is free, fast, and tells you the answer that cannot be derived here. If the crawl does stall at
the gate, the fix is a Robo script (a recorded tap sequence attached to the upload) — *not* removing
or weakening the disclaimer, which is a medico-legal gate and is the only gate on a share link.

## 2. Accessibility — measured, 2026-09-14

`node scripts/audit_a11y.js ../rounds-codex-app` at 360×640, Android's 48dp tap floor, WCAG 4.5:1
(3:1 for large text). Three of Google's four categories are measurable from Chromium, which **is**
Android WebView; the fourth, "implementation", is about the native view hierarchy and is not.

| view | interactive | unlabelled | under 48dp | low contrast |
|---|---|---|---|---|
| library | 218 | 0 | **211** | 4 |
| condition | 36 | 2 | 18 | 5 |
| quiz | 7 | 1 | 1 | 0 |
| gallery | 12 | 1 | 2 | 10 |
| calculators | 16 | 0 | 1 | 4 |
| drugs | 309 | 0 | 3 | 4 |
| **total** | | **4** | **236** | **27** |

### The 236 small targets are mostly ONE control

| count | element | size |
|---|---|---|
| **183** | `div.cbm` — the bookmark button on a condition card | **43×43 / 44×44** |
| 5 | `button.rcap-b` — audio player transport buttons | **21×21** |
| 4 | `div.tb-btn` — toolbar icon button | 44×40 |
| 2 each | `button.n` / `.m` / `.r` — the mode switcher | 56×24, 97×24, 60×24 |
| 2 | `div.chip` — specialty chip | 110×38 |

**183 of the 236 are the same bookmark button, once per condition.** It misses the floor by five
pixels. That is one CSS rule, not 183 problems, and it is the single highest-leverage fix here.

**`button.rcap-b` at 21×21 is the one worth fixing for its own sake, not for the report.** Twenty-one
pixels is hard to hit for anyone and this is an app used one-handed on a ward. The mode switcher at
24px tall is the same argument.

### The 27 contrast findings are all marginal

Every survivor is between **4.14:1 and 4.27:1** against a 4.5 requirement — nothing is badly wrong.
Two clusters:
- the **bottom nav labels** (`Library`, `OR / Peri-op`, `Rx`, `About`, `Clinical Calculators`) at
  10–11px, **4.14:1**, on every view. One colour change clears most of the 27.
- the gallery page counters (`· 1/10`) at **4.27:1**.

### ⚠ The measurement was wrong the first time, and wrong in the direction that matters

The first run reported **63** contrast failures including text at **1.09:1**. That is text the same
colour as its background — invisible — and the app plainly is not. The cause: the checker read any
non-zero alpha as opaque, so `DIV.let`'s `rgba(120,160,220,0.12)` — a 12% tint over a near-black
card — was treated as **solid light blue**. Real stack composited, that text is about **7:1** and
passes comfortably.

So the checker did not merely miss things, it **inverted them**, and the tell was a ratio close to
1.0 on text that is legible on screen. `bgOf()` now does source-over compositing up to the first
opaque layer and declines to guess at a gradient. **A contrast number is only as good as the
background model behind it** — if a future run reports a ratio near 1.0, suspect the measurement
before the app.

`1,766 not measurable` is honest, not a gap: those are text on gradients and images, where averaging
to one colour produces an authoritative-looking number that is not true. This app's buttons are
mostly gradients.

## 3. What I would and would not do

**Worth fixing, in order:**
1. `div.cbm` 43→48px. Clears 183 of 236 findings with one rule.
2. `button.rcap-b` 21→44px+. A real usability problem, independent of Play.
3. The nav label colour, 4.14→4.5:1. Clears most of the contrast list.
4. An `aria-label` on `div.tb-btn`. Four unlabelled elements, all the same icon button.

**Not worth chasing:** the remaining marginal contrast items, and the mode switcher if enlarging it
disturbs the header layout. **Accessibility warnings do not block a release** — Google's own answer
on that is explicit. This is about what the report says, not whether you can ship.

**None of it is verified on a device.** These are Chromium measurements of the web build. The real
answer arrives with the first internal-testing upload, which is also the answer to §1.


---

## 4. What was actually fixed — v135 and v136, measured after each

| | before | after |
|---|---|---|
| unlabelled | 4 | **0** |
| under 48dp | 236 | **49** |
| low contrast | 27 | **0** |

**v135** — `.card .cbm` 44→50px (183 findings, one rule) and `.rcap-b` 21×21→21×44.
**v136** — `--muted-2` `#63748f`→`#6d7f9c` (4.14→4.84:1, clears all 27 contrast findings across 36
usages), `.tb-btn` 44×40→50×50, and `aria-label` on the seven bare back buttons and the Ask send
button.

**50px rather than 48, twice.** Set to exactly 48, 168 of 181 bookmark buttons still measured 47.x:
the library is a two-up grid with 157.5px cards, so an absolutely-positioned child in one column
renders at 47.99. A threshold met exactly is a threshold missed half the time.

### ⚠ The gap widening was tried, measured, and REVERTED

The plan was to raise `.rcap-transport` gap 1px→5px above 360px, where the slider looked to have
~19px of slack over its ~90px floor. Measured after applying:

| width | slider before | with wider gaps |
|---|---|---|
| 320 | 98 | 98 (media query does not apply) |
| 360 | 109 | **89** |
| 430 | 107 | **79** |

Two errors in the estimate, both in the same direction. The selector is
`.rcap-transport,.rcap-util` — **both** groups widen, not one. And wider screens show **more**
transport controls, so the cost grows with width rather than staying fixed: 20px at 360, 28px at
430. Both land at or below the floor that makes the scrubber unaimable, which is precisely the harm
the change was supposed to avoid.

**Reverted.** The horizontal problem stood until v137 — see below.

### ✅ v137 — solved, and without dropping a control

The bar shipped **separate Play and Pause buttons, both visible at all times**, so one of the two was
always inert. Showing one at a time frees 21px plus a gap at *every* width and removes no
capability; a single toggle is what iOS, Android, Spotify and YouTube all do. Strictly better than
the alternative on the table (drop "next recording" or "back to start" below 360px), which bought
the same space on narrow phones only and cost a real control.

**No JavaScript changed.** `sync()` already ran `el.classList.toggle('playing', playing)` on the
`.rcap` root and **nothing in the stylesheet used that class** — an unused hook, already correct,
already handling "another condition's recording is playing" via `mine()`. Four CSS rules.

The freed width went to `.rcap-transport` gap, 1px → 7px. `.rcap-util` deliberately left at 1px:
widening both is what cost the scrubber its floor above.

| width | slider before | after | transport gap |
|---|---|---|---|
| 320 | 98 | **102** | 1px → 7px |
| 360 | 109 | **113** | 1px → 7px |
| 430 | 107 | 105 | 1px → 7px |

Better hit separation **and** a wider scrubber at both narrow widths. Verified idle vs playing:
`back, play, fwd, chain` → `back, pause, fwd, chain`.

### ⚠ There are two copies of the audio CSS in `index.html`

The exact-count guard in `fix_a11y_rest.js` refused at "found 2, expected 1". The `<style>` block is
the live one, labelled *"Injected from scripts/audio_player.js RCAP_CSS — edit there and re-run"*;
the second is `var RCAP_CSS = [...]`, **declared and never referenced** — the patcher's own source,
inlined with the rest of `audio_player.js`. Dead, so it is deliberately left alone rather than
fake-fixed; the authoritative source is `scripts/audio_player.js` in the build repo. v135 patched
only the live copy, so the two now differ. Earned again, from CLAUDE.md: **grep for the other
copies.**


---

## 5. Re-audited at four widths against v147 (2026-09-17)

v138–v147, shipped from another conversation, added a layout above 720px, a **side rail above
1180px** and a two-pane list. None of it existed when §2 was measured at 360×640 only, and **Play's
pre-launch report crawls tablets as well as phones**, so those layouts were unmeasured surface in
exactly the place the report looks. `audit_a11y.js` now takes `--widths` and defaults to
`360,768,1024,1280`.

| width | unlabelled | under 48dp | low contrast |
|---|---|---|---|
| 360×640 | 0 | 48 | **0** |
| 768×1024 | 0 | 50 | **0** |
| 1024×1024 | 0 | 50 | **0** |
| 1280×800 | 0 | **94** | **0** |

**Contrast and labelling hold everywhere** — the v136 `--muted-2` change and the aria-labels carry
across every new layout, which was the main thing worth confirming.

### The 1280 jump is one new rule

At 1280 the condition view goes from 37 interactive elements to **247** — the two-pane list brings
the whole condition list alongside — and sub-48dp goes 18 → 47. The dominant finding is the **side
rail's nav buttons at 146×43**, five pixels short, from `@media (min-width:1180px)`:

```css
.nav button{flex:0 0 auto;flex-direction:row;justify-content:flex-start;align-items:center;
  gap:10px;padding:10px 11px;text-align:left;font-size:12.5px;line-height:1.25;}
```

`padding:10px 11px` → `padding:14px 11px` takes them to ~50px: the icon (~22px) plus 28px of
padding. The rail is a centred column of five with `gap:2px`, so its height goes 223 → 258px, which
fits an 800px viewport with room. Exactly the shape of the bookmark button in v135 — a few pixels
short in brand-new layout code that had never been measured.

⚠ **Not applied.** This is another conversation's in-flight work, and editing it while that session
may still be iterating is the collision risk this file's neighbours warn about. `button.allgal` at
238×**47** is the same one-pixel story and would go with it.
