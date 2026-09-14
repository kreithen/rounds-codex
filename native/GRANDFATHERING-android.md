# Grandfathering on Android — the options, and a recommendation

> # ✅ DECIDED 2026-09-14 (physician): **Option D — grandfather by scope.**
> v1's content stays free permanently; the subscription gates only what is added after the paid
> launch. **Nothing has to ship in the Android v1 build for this**, which takes grandfathering off
> the Android critical path entirely.
>
> **Extended to iOS the same day**, so both platforms behave identically and
> `AppTransaction.originalAppVersion` is no longer used. Six documents updated — see "What D changes
> elsewhere" at the foot of this file.

**Written 2026-09-14.** `HANDOFF-android-app.md` §7 lists this as undecided and names three options
without choosing. This picks one, and corrects the reason the handoff dismissed another.

**The promise being kept:** *"download free now, keep it free for life."* Public, already made.

**The constraint that makes it hard:** iOS has `AppTransaction.originalAppVersion` — the App Store
tells the app which version the user first bought. **Play Billing has no equivalent.** There is no
Play API that answers "was this person an early installer?"

---

## The decision that actually matters

Every option below except **D** must ship in **v1**, before a single person installs. They work by
recording something at first launch; a user who installs before the recording code exists is
unrecoverable, because nothing retroactively reconstructs their install date.

**D needs nothing in v1 and cannot be missed.** That alone is most of the argument.

---

## A. A "founder" entitlement as a Play one-time product

Grant early installs a free, one-time in-app product; query ownership forever through Play Billing.

⚠ **This may not be buildable as described, and it was not verified.** Play Billing grants an
entitlement through a *purchase*, and one-time products have a per-market price range — I could not
confirm from Google's documentation that `$0` is an allowed price for a one-time product (the
pricing help pages discuss $0 only for temporary *sales on paid apps*). Granting without a purchase
means a server-side grant, which needs a backend the app deliberately does not have.

**Do not build this without first creating a $0 one-time product in the Console and confirming Play
accepts it.** That is a ten-minute check and it decides whether the option exists at all. If it does
work it is the most durable answer, because Play itself holds the entitlement — reinstall, new
device and factory reset are all covered with no storage of our own.

## B. Install Referrer `getInstallVersion()`

The Play Install Referrer library exposes the app version at first install. Genuinely the nearest
thing Android has to `originalAppVersion`.

⚠ **Two limits kill it as a standalone answer.** Google documents that install referrer information
is **available for 90 days** and does not change unless the app is reinstalled — so it must be read
at first launch and stored, and cannot be re-read years later when the paywall arrives. And the
storing is the hard part, which is option C. So B is not an alternative to C; it is C with a
slightly better clock, plus a dependency. **Not worth the extra moving part.**

## C. A local install stamp — **the handoff is wrong to call this weak**

Write a stamp at first launch; read it when the paywall ships.

The handoff dismisses this as *"does not survive reinstall — weak."* **That is incorrect on current
Android.** Auto Backup is **on by default** for anything targeting API 23+, stores app data in a
private folder of the user's own Google Drive (**does not count against their Drive quota**), and
**restores automatically when the app is reinstalled — after the APK lands and before the user can
launch it.** A stamp in backed-up storage therefore survives reinstall and device migration in the
ordinary case.

It fails when the user has turned backup off, declined the restore at device setup, or sideloaded.
Those are a minority, and the failure is **fixable by design**: treat "no stamp and no evidence
either way" as *grandfathered*, not as *new*. Wrongly giving away a subscription to a stranger costs
one subscription; wrongly charging someone you promised lifetime free costs the promise.

**This is the fallback, and it is a real one.**

## D. Grandfather by SCOPE, not by identity — **recommended**

Do not track who installed when. Instead: **everything in v1 stays free forever, and the
subscription gates only what is added after the paid launch.**

Nobody needs an entitlement because nothing is taken from anyone. There is no mechanism to build, no
mechanism to get wrong, nothing that has to ship in v1, and nothing that breaks on reinstall, on a
new device, or on a user who turned off Google backup.

It also closes two gaps the other options do not:
- **Early web users.** `app-store-checklist.md` lists them as a separate unsolved problem. Under D
  they are not a problem, because the web app keeps serving what it serves today.
- **One promise, one implementation.** iOS currently plans `AppTransaction.originalAppVersion`.
  Under D both platforms behave identically with no platform-specific code, and the promise means
  the same thing on each. A promise implemented two different ways is a promise that will eventually
  be kept two different ways.

**What it costs, stated plainly.** The free tier keeps the whole current library — 183 conditions,
1,840 questions, 100 galleries, the calculators, the audio — permanently. You can never convert that
back to paid. The subscription has to earn its price on *new* material: new specialties, new
galleries, new recordings, new guideline years. That is a real commercial constraint and it is the
physician's call, not an engineering one.

---

## Recommendation

**Take D. Keep C in reserve.**

D is the only option that cannot fail, cannot be missed in v1, and does not put a deadline on the
Android build. Its cost is commercial rather than technical, and it is the cost of the promise that
was already made in public — "free for life" for the current app is precisely what D implements.

Take C instead **only if** the intention is genuinely to paywall the *existing* library later. In
that case the stamp must be written in v1 and must live in backed-up storage, and the unknown case
must resolve to grandfathered.

Check A's $0 product in the Console regardless — it is cheap, and if Play allows it, A becomes the
better version of C.

## If C is chosen — the implementation notes

- Stamp at first launch into default `SharedPreferences` or app-internal storage; **both are in the
  Auto Backup set by default.** Do not use `noBackup` storage or a `dataExtractionRules` exclusion.
- Record a *date*, not a version string — version numbers get reused across platforms and rebuilt
  bundles; a date is unambiguous and comparable to the launch date.
- Read it at paywall time and **fail open**: absent stamp → grandfathered.
- **Do not use `PackageManager.firstInstallTime`** as the source: it reflects the install on *this
  device*, so a user who upgrades their phone in 2027 looks like a 2027 installer.
- 25 MB is the Auto Backup ceiling per app; a stamp is bytes, but the bundled payload must not end
  up inside a backed-up directory or backup silently stops working.

## Not verified from this session, and worth checking before building

- Whether Play accepts a **$0 one-time product** (option A's hinge). Console check, ten minutes.
- Whether Auto Backup datasets **expire** after a long period of device inactivity. I believe there
  is such a rule but could not confirm the period, and it would matter for a user who is away for
  a year. Affects C only.

**Sources:** Play Install Referrer 90-day window and `getInstallVersion` —
<https://developer.android.com/google/play/installreferrer/library>. Auto Backup defaults, the
25 MB Drive-backed limit and restore-before-first-launch behaviour —
<https://developer.android.com/identity/data/autobackup>.


---

## What D changes elsewhere — ✅ DONE 2026-09-14, iOS follows

**The physician extended D to iOS the same day**, so there is one promise with one implementation.
All six documents below are updated. Prior reasoning is struck through rather than deleted, because
each was a correct reading of the design it described.

**1. iOS's `originalAppVersion` plan — superseded.** `app-store-plan.md` §"Grandfathering: use
`AppTransaction.originalAppVersion`, not a local flag" is the canonical decision, echoed in
`app-store-checklist.md` (row 24), `HANDOFF-native-ios-app.md` (row 78),
`app-store-submission-draft.md:566` and `store-strategy.md`.

If iOS keeps `originalAppVersion` and Android takes D, **one public promise is implemented two
different ways**: an iOS user who installs after the paywall pays for today's library; an Android
user who installs the same day gets it free. That is defensible only if nobody compares, and people
compare. Under D on both, `originalAppVersion` is simply not needed and the StoreKit work in
`app-store-submission-draft.md:566` disappears.

**2. The marketing line — rewritten.** `marketing-brief.md:167` reads *"Anyone who installs
while it is free is grandfathered permanently."* Under D that is true but it implies a deadline
that no longer exists — installing later gets the same library free. The launch email drafted in
the admin dashboard (campaign `92cb3898-4ac8-47fd-8962-362655ed203d`, still `draft`) should be read
against this before it is sent: **urgency copy built on "install before it costs money" stops being
accurate.** `marketing-brief.md` is canonical for claims, so the wording change belongs there
first.

The honest replacement framing is stronger, not weaker: *the library you see today stays free
forever, for everyone — the subscription is for what comes next.* No deadline, nothing to regret
missing, and nothing that can be contradicted later by a user who installed a week too late.

**3. The early-web-user gap — closed.** `app-store-checklist.md:38-39` records that
`originalAppVersion` grandfathers App Store installs only and that early web users are invisible to
it. Under D there is nothing to grandfather, so that open item resolves — on whichever platforms
adopt D.
