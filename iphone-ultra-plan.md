# Rounds Codex on the iPhone Ultra (foldable)

Plan started 2026-09-08, the day before Apple's September 9 event where the iPhone Ultra is
expected to be announced. Extends `large-screen-plan.md` (native branch, 2026-08-09), which
measured the problem and set the principle; this document makes it concrete now that the device
is real, and sequences it against the constraints in `HANDOFF-native-ios-app.md`.

**One line:** the Ultra is a phone when closed and a small iPad when open, and it switches
between the two *while the app is running*. Rounds Codex must look native in both states and
survive the switch mid-session. Almost all of that is responsive layout work in the web app,
which a session can build and verify today; only a thin native/store layer waits on the Mac.

---

## 0. What the device is (rumoured — confirm 2026-09-09)

| | rumoured | what it means for us |
|---|---|---|
| Form factor | book-style foldable, crease-free inner display | two layouts, one app, live transition |
| Cover (closed) display | ~5.5" OLED | phone-class, **compact** width — today's layout applies as-is |
| Inner (open) display | ~7.8" OLED, ~4:3 | iPad-mini-class, **regular** width — today's layout wastes it |
| Chip / biometrics | A20, possibly Touch ID not Face ID | irrelevant (no auth in the app) |
| Price | $2,099–$2,299+, top configs >$3,000 | affluent early adopters; clinicians plausible |
| Availability | announced Sept 9; ship date rumoured later in the fall | there is a window to be ready **at** device availability |

**Do not treat any figure above as fact until Apple publishes it.** Phase 0 exists to replace
this table with confirmed numbers. Everything else in the plan is written so that it is correct
for *any* ~4:3 7–8" inner display, which is why it can start before the announcement.

### The proxy that exists today: iPad mini
iPad mini (8.3", 4:3) reports **744 × 1133 CSS px portrait**. A 7.8" 4:3 inner display will land
within a few dozen px of that. **Build and test against iPad mini now**; re-measure on the Ultra
simulator the day it ships. Nothing built for 744 px will need to be thrown away.

---

## 1. Where the app stands, measured (from `large-screen-plan.md`)

```css
.app { width:100%; max-width:468px; }   /* the whole app, centred */
.nav { max-width:440px; }               /* bottom bar, pinned */
```

- **14 media queries, all `max-width`. Not one `min-width` rule.** Designed phone-down, 468 → 320 px.
- Above 468 px **nothing changes**: an unfolded Ultra shows a phone-width ribbon on a large screen.
- Three things look specifically weak at width: the **gallery grid** (capped to 2 columns; would
  do 4), the **condition detail page** (long prose in a 468 px ribbon), and the **bottom nav bar**
  (wrong pattern on a large screen — the thumb is nowhere near it).
- The shell is already right: Capacitor, **universal app**, all four iPad orientations, Split View
  enabled (`UIRequiresFullScreen` deliberately unset). iOS will present the inner display as a
  regular-width size class and the app will receive it. The shell is not the problem; the CSS is.

---

## 2. The plan, in phases

Owners follow `HANDOFF-native-ios-app.md`: a **session** can do all web-side engineering and verify
it headless in Chromium; only **Dr. Kreithen on the Mac** can run Xcode, the simulator, WebKit, a
real device, and App Store Connect.

### Phase 0 — Sept 9: replace rumour with fact  *(session + Mac · 1 hour)*
- Capture from Apple's announcement and developer docs: exact display sizes and pixel/point
  resolutions folded and unfolded; aspect ratios; how iOS reports size classes across the fold;
  any new fold/hinge API (e.g. viewport-segments / window-segments exposure in WKWebView); the
  Xcode version and simulator that include the Ultra; **App Store screenshot requirements for the
  new device** (cover and inner sizes).
- Lock the breakpoint numbers in Phase 1/2 to the confirmed widths.
- Mac: install the Xcode beta carrying the Ultra simulator when available.

### Phase 1 — "Let it breathe"  *(session · ~half a day · start now)*
The prerequisite for everything else, and it improves iPad **today**.
- Add `min-width` breakpoints; widen the container at large widths, e.g.
  `@media (min-width:720px){.app{max-width:680px}}` and `@media (min-width:1024px){.app{max-width:860px}}`
  (final numbers from Phase 0).
- **Cap the reading measure.** Condition prose stays at 65–75 characters a line; the *container*
  widens while the *reading column* does not. A naive `max-width` bump does the opposite and makes
  the text harder to read, not easier.
- Let existing `auto-fill` grids reflow: gallery to 3–4 columns, library cards, drug and calculator lists.
- Give the nav bar a width-aware rule so it stops looking pinned and stranded at large widths.
- **Verify headless** at 320/375/390/430 (phone), **744/820** (inner-display proxy), 1024/1133
  (landscape), rotation both ways, zero page errors.

### Phase 2 — Two-pane at tablet width  *(session · 2–3 days)*
The Mail/Notes pattern, and the actual "small iPad" experience.
- **≥ ~900 px:** condition list on the left, open condition on the right, scrolling independently.
- The bottom nav becomes a **sidebar** at that width.
- The **gallery viewer, quiz, NCLEX and USMLE stay full-width overlays** — never squeezed into a pane.
- **The real work is the router, not the CSS.** `stack`, `back()` and `rcSyncURL()` assume one
  visible view. Two panes means two simultaneous views; decide the back-stack semantics
  deliberately (what does Back do when both panes are showing?) and keep `/c/<id>` deep links and
  share links pointing at the *detail* view.
- Persistence, bookmarks, quiz progress must be pane-agnostic — same data, either layout.
- Verify headless as in Phase 1 plus pane interactions; **Dr. Kreithen tests on iPad mini** (real
  WebKit, real rotation) — this is where the proxy earns its keep.

### Phase 3 — Fold-aware continuity  *(session + Mac · 1–2 days · only once the device or simulator exists)*
- **State survives the fold:** open condition, scroll position, quiz question in progress, audio
  playback position, gallery page — all preserved when the viewport changes size, in both directions.
- **Nothing measures width once at boot.** Anything that cached a width (gallery grid, audio
  scrubber, nav) must respond to resize. *Write this test before the device exists* — a mid-session
  window resize in the headless harness — because it also catches iPad rotation, which is real today.
- If iOS exposes a hinge/segment boundary to the webview, respect it as a layout boundary
  (don't put a control under the fold). Do not build this against rumour; build it against the
  simulator.
- Mac: cold-start and Airplane-Mode test on a real Ultra, fold/unfold mid-quiz and mid-audio.

### Phase 4 — Shell and App Store  *(Mac · ~half a day, once Phase 0 gives the screenshot specs)*
- Shell: confirm the iPhone device family covers the Ultra (it will); orientations already
  correct; nothing else expected to change in `capacitor.config.json` / `Info.plist`.
- **Screenshots for the Ultra** — new required sizes for the cover display and the inner display.
  Same 7-panel design system as the existing set (`scripts`/`ss` templates), re-rendered at the
  new dimensions with real captures from the simulator; a "phone → opens into a tablet" panel is
  the obvious hero.
- Listing: add "Optimized for iPhone Ultra" to the promotional text and What's New; refresh
  counts (183 conditions · 102 galleries / 1,020 pages · 2,900+ questions · 300 drugs).
- Submit the update so it is live **before** devices reach customers.

---

## 3. Verification matrix

| width (CSS px) | stands in for | what must hold |
|---|---|---|
| 320 / 375 / 390 / 430 | today's phones, **Ultra cover display** | unchanged from today; regression only |
| **744 / 820** | **Ultra inner display (iPad mini proxy)** | Phase 1 reflow; Phase 2 two-pane if ≥ threshold |
| 1024 / 1133 | inner display landscape, iPad | two-pane + sidebar |
| **resize mid-session** 390 ↔ 744 | **the fold itself** | no reload, no state loss, grids/nav/scrubber re-lay out |

Headless: Chromium via `playwright-core`, served by `scripts/netlifysim.js`; dismiss `#rc-gate`
first (`scripts/rc_test_auth.js`); assert zero `pageerror`. Real WebKit, rotation and the fold
transition: Dr. Kreithen on iPad mini now, on the Ultra simulator/device when they exist.

---

## 4. Why this is worth doing (product view)

- **Differentiation that competitors won't have on day one.** UWorld, AMBOSS, Osmosis are
  phone-column apps; a visual atlas that *opens into a tablet* is the most natural possible use of
  a foldable, and it showcases the 1,020 illustration pages better than any phone can.
- **Featuring opportunity.** Apple routinely features apps optimized for a new form factor at
  launch; a medical-education app with a genuine two-pane, fold-aware design is exactly the kind of
  third-party showcase they look for. That requires shipping *before* device availability.
- **Audience fit.** A $2,000+ device selects for affluent early adopters; attendings, residents
  and well-funded students are squarely in that group.
- **Zero waste if the rumours are wrong.** Every phase before 3 is expressed in widths and pays off
  on iPad immediately. Phase 3 does not start until the hardware exists.

---

## 5. Constraints and risks — read before starting

- **Specs are rumour until Sept 9.** Nothing here hard-codes a device. Phase 0 is not optional.
- **A cloud session cannot run Xcode, WebKit, a simulator, or a device.** Chromium only. Every
  iOS-specific behaviour in this project was ultimately confirmed by the physician on real hardware;
  plan for that loop, don't pretend it away.
- **The router is the hard part, not the CSS.** Phase 1 is safe; Phase 2 changes how the app is
  navigated and is a product decision as much as an engineering one.
- **One stylesheet. Do not fork.** No tablet build, no second layout file. One responsive
  stylesheet with `min-width` breakpoints covers phone, cover display, inner display, iPad and
  desktop. The existing verification suite just gains widths.
- **Branch discipline.** Implementation happens in the app repo / the native-app conversation
  (`claude/native-ios-app`); two sessions pushing one branch collide. This document is the spec.
- **Don't ship a "stretched phone."** If Phase 2 isn't done by device availability, ship Phase 1
  — a widened, reflowed layout is respectable; a 468 px ribbon on a 7.8" screen is not.

---

## 6. Sequencing against the calendar

| when | do |
|---|---|
| **Sept 9 (event)** | Phase 0 — confirm specs, lock breakpoints, note screenshot sizes |
| **This week** | Phase 1 — half a day; improves iPad immediately; physician spot-checks on iPad mini |
| **Next 1–2 weeks** | Phase 2 — two-pane + sidebar + router; iPad mini testing |
| **When the simulator ships** | Phase 3 — fold continuity; Ultra screenshots (Phase 4 assets) |
| **Before devices reach customers** | Phase 4 — submit the update; listing says "Optimized for iPhone Ultra" |
