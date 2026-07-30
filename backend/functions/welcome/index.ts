// Rounds Codex — "welcome" edge function (Supabase, Deno runtime)
// Sends a one-time welcome email via Resend when a new signup row is created.
//
// OPTIONAL for Phase 1: the launch list works without it (the form inserts
// directly). Deploy this once you have a Resend account + verified domain.
//
// Wire-up:
//   1. supabase secrets set RESEND_API_KEY=...   (never commit this)
//   2. supabase functions deploy welcome --no-verify-jwt
//   3. Supabase → Database → Webhooks: on INSERT into public.signups,
//      POST to this function.
//
// Secrets come from the function environment, never from the repo.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!;
const FROM = Deno.env.get("WELCOME_FROM") ?? "Rounds Codex <hello@roundscodex.com>";

Deno.serve(async (req) => {
  try {
    const payload = await req.json();
    // Supabase DB webhook shape: { type, table, record, ... }
    const record = payload.record ?? payload;
    const email: string | undefined = record?.email;
    if (!email) return new Response("no email", { status: 400 });

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: email,
        subject: "You're on the Rounds Codex launch list",
        text:
          "Thanks for joining the Rounds Codex launch list.\n\n" +
          "Rounds Codex is a visual medical education app for nursing students, " +
          "medical students, and residents. We'll email you the moment it's live.\n\n" +
          "— The Rounds Codex team\n\n" +
          "Don't want these emails? Reply and let us know and we'll remove you.",
      }),
    });

    if (!res.ok) {
      const t = await res.text();
      console.error("resend error", res.status, t);
      return new Response("send failed", { status: 502 });
    }
    return new Response("ok", { status: 200 });
  } catch (e) {
    console.error(e);
    return new Response("error", { status: 500 });
  }
});
