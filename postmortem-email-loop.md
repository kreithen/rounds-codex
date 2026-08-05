# Postmortem — the self-feeding email loop, 2026-08-04

150 identical emails from `hello@roundscodex.com` to `admin@roundscodex.com` over five hours,
every two minutes, until the cron was paused at 04:35 on 2026-08-05.

The infrastructure involved is **not in either repo** — it is Supabase edge functions plus a
`roundsdash.netlify.app` admin dashboard. This file is here because it is where the project's
learned-the-hard-way notes live, and because the failure class will recur.

---

## What happened, mechanically

`sync-inbox` (Supabase edge function, cron job 5, `*/2 * * * *`):

1. reads the active mailboxes from the `zoho_accounts` table,
2. pulls the latest 25 messages from each Zoho inbox,
3. inserts the ones it has not seen into `messages`,
4. **if it inserted anything, emails an alert from `hello@` to `ALERT_TO`** — which defaults to
   `admin@roundscodex.com`.

Nothing excluded mail the system itself had sent. So once `admin@` was one of the watched
mailboxes, the alert became the next cycle's "new message." Forever.

The signature is the tell: every email said "**1 new message**", never 2. Each cycle found exactly
one new item — its own previous alert.

---

## Why it happened: two safe changes, four minutes apart

This is the part worth remembering. **No single change was wrong.**

| time (UTC) | event |
|---|---|
| 2026-07-31 12:53 | `sync-inbox` first deployed. Ran for four days without incident. |
| 2026-08-04 23:15:19 | `sync-inbox` v5 — mailboxes now read from the `zoho_accounts` table rather than an env var. A reasonable refactor. |
| 2026-08-04 23:20:53 | `zoho-connect` updated — the OAuth flow that writes those rows. |
| **23:35:32** | **`teacher@` connected.** |
| 23:35:37 | First alert: "5 new messages." **Safe** — the alert went to `admin@`, which was not yet watched. |
| **23:39:15** | **`admin@` connected.** |
| 23:39:20 | Alert: "7 new messages." |
| **23:40:04** | Loop begins. Locked at "1 new message" for the next five hours. |

Alerting to `admin@` was correct while `admin@` was only a *destination*. Connecting `admin@` as a
second mailbox was reasonable on its own. **The defect was created by the combination**, and it was
armed 44 seconds before it fired.

### Four things that made this possible

**1. The dangerous state was split across two systems.** `ALERT_TO` is a constant in TypeScript;
the watched set is rows in Postgres. Neither location shows the conflict. You cannot see this bug by
reading the function, and you cannot see it by reading the table. It only exists in the
relationship between them — which is exactly the kind of bug that survives code review, because
there is no diff that contains it.

**2. It was introduced by DATA, not code.** The last code deploy was 24 minutes earlier. The change
that actually armed the loop was an `INSERT` performed through a UI. Data changes get no diff, no
review, no test, and no rollback — and here one of them was a production incident.

**3. A notifier that can write into its own input is a feedback loop by construction.** Any system
that (a) watches a source, (b) emits on change, and (c) can emit *into* that source will oscillate.
That is a structural property, not a bug in the logic. It is why the fix is
**"never ingest our own output"** rather than "point `ALERT_TO` somewhere else" — the latter is
one env var away from coming back.

**4. Nothing rate-limited the output.** A 2-minute cron with no cooldown means *any* loop, from any
cause, runs at 30 emails/hour indefinitely. A cap would have made this a 5-email incident instead
of a 150-email one **without anyone having to predict this particular failure.** That is the
argument for output rate limits in general: they bound the blast radius of the mistake you did not
foresee.

### And the reason it ran for five hours

**Nothing was watching it.** The only detector was the physician noticing his phone. Thirty
identical emails an hour to a single address is trivially detectable — by Resend, by a query, by
anything. This is the same lesson as the 16-hour Netlify outage on 2026-07-30: the system had no
opinion about its own behaviour.

---

## The fix (deployed 2026-08-05, `sync-inbox` v6)

Two independent guards, because either alone can be defeated:

- **`SELF_SENDERS`** — never ingest mail from our own sending addresses. Address-based, not
  subject-based, so it also catches a welcome or campaign email landing in a watched mailbox, not
  just this one alert.
- **`ALERT_COOLDOWN_MS`** (default 15 min) — the alert cannot fire more than once per window
  regardless of cause. Stored in `inbox_state` under a reserved `__alert__` row, because module
  state does not survive a cold start and an in-memory timestamp would not have helped here.
  Stamped only on a **confirmed** send, so a failed send cannot silence the next real alert.

Both were unit-tested against the real Zoho `fromAddress` format before deploying — including that
a genuine student email still survives the filter, which is the assertion that matters.

Cleanup: 150 junk rows deleted from `messages` (11 real messages untouched). Cron re-enabled and
verified over two cycles: sync works, zero new loop rows.

### Still outstanding

- **The ~150 emails are still in the Zoho mailbox itself.** Only the database rows were deleted.
- **Point `ALERT_TO` at an address that is not a watched mailbox** — the third layer. Worth doing
  even though it is no longer load-bearing.
- **`messages` has no unique constraint on `zoho_message_id`**, so the `resolution=ignore-duplicates`
  header on the insert does nothing. Deduplication rests entirely on the preceding `SELECT`. Fine
  for a serial cron, fragile the moment anything runs concurrently.
- **A 2-minute inbox poll is faster than anyone needs.** Fifteen minutes would be a quarter of the
  volume and no worse a product.
- **The `__alert__` row in `inbox_state`** may render as a phantom mailbox in the dashboard — the
  dashboard's code was not available to check.

## The rule to carry forward

**Any component that both watches a channel and writes to one must refuse to ingest its own
output, and must rate-limit what it emits.** Neither guard depends on predicting how the loop
starts, which is the point — this one started from a database row inserted through a UI, four
minutes after a correct code change.
