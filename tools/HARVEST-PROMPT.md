# Harvest the 174 image URLs — two copy-pastes

## CORRECTION 2026-08-02: the URLs ARE publicly fetchable after all

The note that stood here said the CDN returns 403 to anything that is not an authenticated
session, and therefore a harvested URL was useless for looking at an image. **That was
wrong, and it was wrong because a proxy error was read as a CloudFront error.**

`curl` from this container returns `curl: (56) CONNECT tunnel failed, response 403`. The 403
is the **agent proxy refusing the CONNECT**, before any request reaches CloudFront. It is
not CloudFront's answer, and it says nothing about whether the object is public.

Proved on 2026-08-02: the Higgsfield sandbox fetched
`https://d8j0ntlcm91z4.cloudfront.net/user_.../hf_20260731_074923_....png` with a plain
`curl -sf`, no cookies, no headers, no session -- and got a 2048x2048, 4.65 MB PNG. A
public object.

Consequence: **anyone on an ordinary network can download all 190 with a script.**
`tools/download-rounds-codex-images.command` is generated from
`tools/generated-image-urls.json` and names every file by its question id, which is better
than any gallery bulk-export because the filenames carry the mapping.

The container still cannot fetch them -- that limit is real and is the egress policy. But
the physician's laptop can, and so can any machine that is not behind this proxy.


The cloud session cannot run `show_generations` (see `HARVEST-HANDOFF.md` for why, and for
the four workarounds that were tried and ruled out). This is the whole job from your side.

---

## Step 1 — open claude.ai in a browser

Any browser, signed into the same account. **Check the Higgsfield connector is enabled for
that chat** — it is per-chat, not just per-account, and a chat with it switched off will say
it has no such tool. New chat → connector/tools menu → Higgsfield on.

Claude Code desktop or the CLI works too. What matters is that it is not the cloud session.

## Step 2 — paste this, exactly

> Using the Higgsfield connector, call `show_generations` with `size: 100` and
> `type: "image"`. If the response has a non-null `next_cursor`, call it again with that
> cursor, and keep going until `next_cursor` is null.
>
> Then give me ONE JSON object and nothing else — no commentary, no code block labels, no
> summary. Keys are each generation's `id`, values are that generation's image URL (the
> first URL in its `results`). Skip any generation that has no URL. It should look exactly
> like this:
>
> ```
> {
>  "b5b6d40b-597b-4cef-aef6-cf00daf11857": "https://d8j0ntlcm91z4.cloudfront.net/user_.../hf_20260731_....png",
>  "a073ad46-80c5-4b9d-8a07-2d71e7559411": "https://d8j0ntlcm91z4.cloudfront.net/user_.../hf_20260731_....png"
> }
> ```
>
> Do not summarise, do not truncate, and do not reorder. I need every pair.

Asking for id-and-URL only is deliberate: the full pages carry every prompt, which is
megabytes and will not survive a paste. This form is roughly 20 KB for all 174.

## Step 3 — paste the JSON back into the Rounds Codex session

Straight into the chat is fine, or save it as a file and attach it. Then I run:

```
python3 tools/harvest_generations.py <the-file> --dry-run   # look first
python3 tools/harvest_generations.py <the-file>
python3 tools/image_batch_plan.py --status
```

`harvest_generations.py` accepts both this compact form and raw `show_generations` pages, so
if the other session gives you the full pages instead, that works too — just hand them over.

---

## What to expect

- **166 of 174 pairs.** Eight failed at generation: the ledger showed 174 spends and 8 refunds
  landing within seconds of their own spend, which is the signature of a moderation refusal
  rather than a capacity failure. The harvester reports those as absent rather than quietly
  passing over them.
- The join is on **job id, never on order**. Pages come back newest-first and interleaved with
  other generations, and a positional match would attach a medical illustration to the wrong
  question — worse than a missing one.
- Re-running is safe: a second run records 0 new, and an existing different URL is refused
  unless you pass `--force`.

## Then

- `python3 tools/build_review_page.py` builds one standalone HTML for review. Open it locally —
  it cannot be an Artifact, because the Artifact CSP blocks external hosts and these are
  remote `<img>` tags.
- The container still cannot fetch the images at all (the proxy 403s `higgsfield.ai` and the
  CDN), so the physician gate happens in your browser, not here.
- Eight corrected re-fire prompts are staged in `tools/refire-queue.json` (16 credits),
  separate from whatever the harvest reports as failed.

