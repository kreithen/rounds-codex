# Email inboxes for roundscodex.com — Zoho Mail (free)

Real send + receive mailboxes at **admin@roundscodex.com** and **teacher@roundscodex.com**,
using Zoho Mail's Forever Free plan (≤5 users, one domain). DNS records are added in **GoDaddy**
(where roundscodex.com's DNS is managed). None of this affects the website — MX/TXT are different
record types than the A/CNAME the site uses.

> Use the **exact record values Zoho shows you** in its setup wizard. The values below are the
> normal US-datacenter defaults; Zoho may show slightly different hostnames for your account.

## A. Sign up
1. Go to **zoho.com/mail** → **Sign Up**. Scroll to and choose the **Forever Free Plan**
   (Zoho features paid plans first; the free one is lower down).
2. Choose **"Sign up with a domain I already own"** → enter `roundscodex.com`.
3. Create the Zoho account owner (can be your personal email as the account holder).

## B. Verify domain ownership (GoDaddy DNS)
4. Zoho shows a verification record — choose the **TXT** method. It gives something like:
   - Type `TXT`, Host `@`, Value `zoho-verification=zb XXXXXXXXXX.zmverify.zoho.com` (your value).
5. GoDaddy → your domain → **DNS → Add** → add that TXT record → **Save**.
6. Back in Zoho → **Verify**. (DNS can take a few minutes.)

## C. Create the mailboxes
7. In Zoho, create users:
   - `admin@roundscodex.com` (set a password)
   - `teacher@roundscodex.com` (set a password)

## D. Route mail to Zoho — MX + SPF + DKIM (GoDaddy DNS)
8. In GoDaddy DNS, **delete any existing MX records**, then add Zoho's (from Zoho's "Configure
   Email Delivery" screen — typical US values):
   | Type | Host | Value | Priority |
   |---|---|---|---|
   | MX | `@` | `mx.zoho.com` | 10 |
   | MX | `@` | `mx2.zoho.com` | 20 |
   | MX | `@` | `mx3.zoho.com` | 50 |
9. **SPF** — add TXT: Host `@`, Value `v=spf1 include:zoho.com ~all`.
10. **DKIM** — in Zoho: Email Admin → **DKIM** → generate; it gives a TXT record
    (host like `zmail._domainkey`). Add that TXT in GoDaddy and mark it verified in Zoho.
11. *(Optional, recommended later)* **DMARC** — TXT, Host `_dmarc`, Value
    `v=DMARC1; p=none; rua=mailto:admin@roundscodex.com`.

## E. Test
12. Wait for propagation (minutes–hours). Send an email from your personal address to
    `admin@roundscodex.com`, then check **mail.zoho.com**. Reply to confirm sending works.

## How this relates to the dashboard login
The Zoho mailbox password (to read email) and the **admin dashboard** password (Supabase Auth)
are **two separate accounts** that happen to share the same address. You'll set the dashboard
password separately in Supabase. Having the real inbox first means the dashboard's
"Forgot password?" reset email can actually be delivered.

## Sending newsletters later (Phase 3)
Bulk/newsletter email goes through **Resend**, not Zoho. When we set that up we'll add Resend's
DKIM records and **merge the SPF** into one record (you can't have two `v=spf1` TXT records):
`v=spf1 include:zoho.com include:_spf.resend.com ~all`.
