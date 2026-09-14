# EU availability — why the app cannot be downloaded there, and what it costs to fix

Written 2026-09-14. Everything here is Apple's process, not code — there is nothing in either repo
to change.

## What is actually blocking it

The EU **Digital Services Act** requires an app marketplace to publish trader contact details for
anyone distributing to EU consumers. Apple implements that as a **trader status** declaration in
App Store Connect. Until it is provided and verified, the app is **withheld from all EU storefronts** —
that is why it did not appear in Norway. Norway is not in the EU, but it is in the EEA and Apple
applies the same gate across the region.

It does not affect App Review, and it has never affected the US release. `app-store-checklist.md`
recorded it as deliberately deferred at submission, which was the right call then.

## What it costs, and the part that needs your decision

App Store Connect → **Business** → Trader Status. It asks for:

| field | for Rounds Codex |
|---|---|
| trader or non-trader | **Trader** — the app is distributed by a company |
| legal entity name | **ROUNDS CODEX, LLC** — Florida `L26000432836`, filed 2026-08-17 |
| registered address | 1 S School Ave 800, Sarasota FL 34237 |
| phone | needs one you are willing to publish |
| email | needs one you are willing to publish |

**The decision is not the filing, it is that Apple publishes the address, phone and email on the
app's public listing page in the EU.** Every EU visitor to the App Store page sees them. That is the
point of the regulation — a consumer must be able to contact the trader.

So the question is which contact details you want public. Three ordinary answers:

1. **The registered agent / business address you already filed with Florida.** It is already public
   in the Division of Corporations record, so this discloses nothing new.
2. **A mailbox service address.** Common for solo companies; costs a little, keeps your home or
   practice address off the listing.
3. **Your practice address.** I would not: it mixes the app with your clinical practice, and
   patients searching your name will find it.

For the phone and email, a number and address that exist only for the company are worth setting up
before filing — they go on a public page in twenty-seven countries and are hard to change later.

## Verification

Apple verifies the details, usually within a few days, sometimes by contacting the phone or email
given. A number nobody answers will stall it. After verification the app becomes available in the
EU/EEA automatically; there is no resubmission and no new build.

## What I cannot do

App Store Connect has no API surface a session can reach, and I would not fill in your company's
legal contact details for you regardless. This document exists so the decision is teed up rather
than rediscovered.

## Not the same thing, and worth not confusing

- **DSA trader status** — what this document is about. Blocks EU availability.
- **EU Representative under GDPR** — a separate requirement, and it does not apply while the app
  collects nothing. The iOS build has no login and the privacy label is "Data Not Collected".
  Revisit only if the native app ever gains accounts, which is currently a deliberate no.
