# Screenshot shot list

**Written 2026-08-17.** Eight shots per size, at two sizes. Ids checked against the shipped content,
so every navigation below lands somewhere that exists.

**Required:** 6.9" iPhone. **Strongly recommended:** 13" iPad — a reference app that looks phone-only
on iPad loses installs, and the devices decision was Universal.

Guideline **2.3.3**: every screenshot must be the real app. Device-frame them and put the caption
*above* the frame; do not paint text over the UI.

---

## Before you shoot

1. Run the app on the simulator at **iPhone 17 Pro Max** (6.9") and **iPad Pro 13"**. Simulator
   screenshots are accepted and are far easier to get pixel-exact than a real device.
   (Xcode 26.6 ships the iPhone **17** family, not the 16 — checked on the machine 2026-08-17.)
2. **Dismiss the medical disclaimer first.** It is `#rc-gate` and it covers everything on a fresh
   install; a screenshot with it up is a screenshot of a disclaimer.
3. Nothing to pre-download — v1 bundles all the artwork, so every gallery page is available
   immediately and offline.
4. Set the status bar clean — full signal, full battery, a sensible time. `xcrun simctl status_bar
   <device> override --time "9:41" --batteryState charged --batteryLevel 100 --cellularBars 4`
5. **Shoot 3 and 7 in landscape on iPad.** The artwork is 2:3 portrait and the calculators are dense;
   both are what an iPad reader actually turns the device for.

---

## The eight shots

Captions are from `app-store-submission-draft.md` and the counts are current as of 2026-08-17.

| # | Where to be | How to get there | Caption |
|---|---|---|---|
| **1** | A condition page, Medical mode, scrolled to the top so the three-mode switch is visible | Library → **Heart Failure (CHF)** → mode switch set to **Medical** | **183 conditions. Three modes. One library.** |
| **2** | A gallery grid, full of real thumbnails | Heart Failure → **Illustrations** | **1,020 original clinical illustrations** |
| **3** | One illustration open in the viewer, zoomed slightly so it reads as interactive | From shot 2, tap page 1, pinch once | **Zoom in. Swipe through. Works offline.** |
| **4** | A quiz question with the answer revealed and the explanation showing | Heart Failure → **Take the Quiz** → answer Q1 correctly | **1,840 questions — every condition, explained** |
| **5** | A USMLE item with its illustration on screen | Medical mode → **USMLE PREP** → start Step 1 → advance to any illustrated item | **1,010 USMLE-style items across Step 1–3** |
| **6** | The Library card showing items due for review | Bookmark 3–4 conditions, then Library. The card appears **immediately** — `isDue()` returns true for an item with no schedule yet ("new means due now"), so there is nothing to wait for | **Bookmark it, and it comes back when you need it** |
| **7** | A calculator mid-use, with some boxes ticked so it shows a score | **Clinical Calculators** → CHA₂DS₂-VASc → tick 3–4 risk factors | **Ten clinical calculators, offline** |
| **8** | The Clinical Updates index | Library → the purple **CLINICAL UPDATES** button | **470 guideline updates, 25 specialties** |

**Shot 6 needs one step of setup, not a wait.** An earlier version of this file said the card was
empty until something became due and that you had to let a day pass. That is wrong, and it was
written from the prose rather than from `RC_REVIEW`: `isDue(id)` is
`return !it || !it.due || it.due<=today()`, so a bookmarked condition with no schedule is due the
moment you bookmark it. Bookmark three or four and the card is there. Everything else is immediate
too.

---

## Two more worth taking, if you want ten

Apple allows up to ten per size and the first two or three are all most people see, so these are
depth rather than priority.

| # | Where | Caption |
|---|---|---|
| 9 | The narrated audio bar on a condition page, playing | **Narrated modules for 31 conditions, with CarPlay** |
| 10 | Resident mode on a specialty page | **1,418 resident-level entries across 25 specialties** |

---

## Order matters on the product page

Shots **1 and 2** are what almost everyone sees. 1 must say *this is a serious clinical library*
and 2 must say *the artwork is original*, because those are the two things competitors do not have.
Do not lead with a quiz — every study app has quizzes.

---

## What NOT to photograph

- **Anything with the AI illustrations cropped so a label is unreadable.** The leader-line
  corrections project exists because some labels do not land on the structure they name
  (`galleries-staging/HANDOFF-anatomy-label-corrections.md`). Pick a page you have looked at.
- **My account.** In the iOS build the account page is deliberately thin — no sign-in, no
  subscription to manage. It is correct and it is not a selling point.
- **Ask Rounds Codex.** It is removed from the iOS build entirely. If you can still see it in a
  screenshot, you are shooting the wrong build — go back to runbook step 2.
- **Any condition still carrying `verified:false`** — Metabolic Syndrome, Hip Fracture, Low Back
  Pain — since those show no RC VERIFIED badge and a screenshot is where a missing badge is most
  visible. (Moot once you have reviewed them.)

---

## After shooting

Check each shot at thumbnail size before uploading. The App Store shows them small first, and a
caption that reads at full size can be illegible in the list — which is the only place most people
ever see it.
