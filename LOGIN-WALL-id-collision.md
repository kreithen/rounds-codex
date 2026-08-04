# The login wall took the disclaimer gate's id — the medical disclaimer no longer appears

Found 2026-08-04 while verifying the three new Psychiatry galleries. **Not fixed** — the fix is one
word, but it is inside the login wall, and sign-in cannot be tested from a cloud session.

## What happened

Two commits landed on `rounds-codex-app` `main` from outside this session:

    ca2b024  Add Supabase email/password login wall (self-contained overlay)
    239ca6b  Login wall: Face ID (WebAuthn passkey) unlock on supported devices

The wall's overlay is declared in the static HTML as:

    <div id="rc-gate" class="hidden" aria-hidden="true">

**`rc-gate` was already taken.** It is the id of the first-run medical disclaimer / terms gate, and
`rcTermsGate()` guards against building itself twice like this:

    function rcTermsGate(){
      if(RC_TERMS.accepted()===RC_TERMS_VERSION) return;
      if(document.getElementById('rc-gate')) return;      // <-- always true now
      var el=document.createElement('div'); el.id='rc-gate';
      ...

The login wall's div is present from page load, so that guard fires on every visit and
**`rcTermsGate()` returns before creating anything. The disclaimer never appears — for anyone.**

`rcGateShow(view)` also targets `#rc-gate`. If it were ever reached it would render the disclaimer's
markup *into the login overlay*, replacing the sign-in form.

## Measured, both directions

Served the live tree and a copy whose only change is the login wall's id renamed to `rc-authgate`:

| | live `main` | id renamed |
|---|---|---|
| gate elements in the DOM | `rc-gate` (the wall) | `rc-authgate`, `rc-gate`, `rc-gate-h`, `rc-gate-ok` |
| `#rc-gate-ok` present | **no** | yes |
| disclaimer visible on first run | **no** | yes |

So the collision is the whole cause, and renaming the wall's id restores the disclaimer.

## The fix

Rename the login wall's own id — it is self-contained, referenced only by its inline `<style>` and
its own IIFE (`var gate=document.getElementById('rc-gate')`). Twenty occurrences inside that one
block, nothing outside it. Do **not** rename the disclaimer's, which is referenced by
`rcTermsGate()`, `rcGateShow()` and the accept handler.

**Why this was not applied here:** the rename was verified only against a seeded local session,
because Supabase is unreachable from the container. If anything else in the wall's flow keys on
`#rc-gate` — a redirect target, a password-reset deep link — a rename applied blind could lock the
physician out of their own app. That is a bad trade against a documentation fix, so it is written
down instead of done.

## Why it matters beyond tidiness

The disclaimer is the app's first-run consent, and `app-store-plan.md` lists it under Guideline
1.4.1 as what covers the "for education, not a substitute for clinical judgement" requirement:

> a visible "for education, not a substitute for clinical judgement" line (the `#rc-gate`
> disclaimer covers first run; the App Store listing needs its own)

That sentence is now false. Anyone signing in goes straight to clinical content with no disclaimer
shown, on a build heading for App Store review.

## Two further things the wall changes that the plan assumed otherwise

Recorded, not argued — the decision is the physician's.

1. **`app-store-plan.md` records "On-device StoreKit only — no accounts, no server, no login"**, and
   the reason given was the **"Data Not Collected"** privacy label. A Supabase account with an email
   address is a backend collecting an identifier, so that label no longer applies as written.
2. **The Supabase URL and publishable key are in `index.html`**, which is correct for a publishable
   key but means anyone can enumerate the auth endpoints. Worth confirming Supabase row-level
   security and email-confirmation settings before launch.

## Consequence for the test suites — already handled

An unauthenticated headless context cannot tap anything, because the overlay covers the viewport.
`verify_gallery_gestures.js` failed on `swipe left` and `swipe chaining` for exactly this reason and
the failure read as a swipe regression in the app. It was not: the pre-wall tree passed the same
suite.

`scripts/rc_test_auth.js` now seeds `rc.app.session.v1` before navigation, which the wall's own boot
logic accepts with no network call. Both gallery suites call it. **Any new headless test must too.**
