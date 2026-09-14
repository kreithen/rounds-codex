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
