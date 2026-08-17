# Switching the Apple account from Individual to Organization

**For Dr. Kreithen, 2026-08-17. Phone-friendly — nothing here needs a Mac.**

Background and the reasoning are in `app-store-checklist.md` §7. This is just the doing.

---

## Step 1 — does Rounds Codex, Inc. already have a D-U-N-S number?

A D-U-N-S number is a free nine-digit ID for a business, issued by Dun & Bradstreet. Apple uses it
to confirm the company is a real legal entity. **Many incorporated companies already have one
without knowing** — it gets created when a bank, insurer or supplier looks them up.

Check first, because if one exists this is a ten-minute job instead of a multi-day one:

**developer.apple.com/enroll/duns-lookup** — enter the company's legal name, address and your
contact details. It answers immediately if a number exists, and starts the request if not.

- **If it exists:** write the nine digits down and go to step 2.
- **If it does not:** the same form requests one. Apple's guidance is up to five business days,
  sometimes longer. There is nothing to do but wait, which is exactly why this is worth starting
  before you need it.

⚠ The legal name must match the incorporation exactly — `Rounds Codex, Inc.` with the comma and the
period if that is how it is registered. A near-miss returns "not found" and sends you down the
create-a-new-record path for a company that already has one.

## Step 2 — what you need in hand

| | |
|---|---|
| Legal entity name | Rounds Codex, Inc. — exactly as incorporated |
| D-U-N-S number | from step 1 |
| Legal address | the registered address, not a mailing address |
| CEO / Director name | must be someone with authority to sign agreements |
| Phone | one you will actually answer — Apple often calls to verify |
| Apple Developer Team ID | `744JSM2Z3H` |
| Apple ID on the account | the one you signed in with |

⚠ **The website matters.** Apple checks that the company has a public web presence matching the
entity. `roundscodex.com` is live, and as of v128 it carries `/support/`, `/privacy/` and `/terms/`.
That is in your favour — a bare landing page is a common reason these stall.

## Step 3 — file the request

**developer.apple.com/contact** → *Membership and Account* → **Account Updates and Renewals**.

You cannot make this change in account settings; a human at Apple does it. Text to paste, filling in
the four blanks:

> I would like to convert my Apple Developer Program membership from an Individual account to an
> Organization account.
>
> Apple Developer Team ID: 744JSM2Z3H
> Current enrollment: Individual
> Requested organization name: Rounds Codex, Inc.
> D-U-N-S number: ____________
> Legal entity address: ____________
> CEO / Director name: ____________
> Contact phone: ____________
> Website: https://roundscodex.com
>
> The organization is an incorporated legal entity and I am authorised to bind it to the Apple
> Developer Program Licence Agreement. There are no apps currently published under this account.
>
> Please let me know if you need any further documentation.

The last paragraph is worth keeping: **an account with no published apps is the simplest case there
is**, and saying so up front removes the app-transfer question before anyone asks it. That advantage
disappears the moment v1.0.0 is on sale — which is a reason to file now rather than after launch.

## Step 4 — while you wait

Nothing blocks. The Mac work in `native/MAC-RUNBOOK.md` proceeds unchanged: the Team ID does not
change when the account converts, so signing, the AASA and Associated Domains are all unaffected.

The decision you are deferring is only this: **at submission time, do you wait for the conversion or
ship as Individual?** Both remain open as long as the request is filed.

## What does *not* change

- **Team ID `744JSM2Z3H`** — the same before and after, so nothing already built needs redoing.
- The AASA file, the bundle identifier, the entitlements, the payload, the asset packs.
- Anything in the app itself. The `© 2026 Rounds Codex, Inc.` footer shipped in v127 is correct
  either way; it names the copyright holder, which is the company regardless of who Apple lists as
  the seller.

## If it is refused or stalls

The usual causes, in the order they occur:

1. **Name mismatch** between the D-U-N-S record and what you typed. Fix the D-U-N-S record first
   through Dun & Bradstreet — Apple reads it, it does not correct it.
2. **The address on the D-U-N-S record is stale.** Same fix, same place.
3. **Silence.** Forum reports of 17+ days are common. Replying on the existing case keeps it open;
   opening a second case starts again at the back of the queue.
