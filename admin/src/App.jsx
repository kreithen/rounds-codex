import { useEffect, useState } from "react";
import { supabase } from "./supabase.js";
import Dashboard from "./Dashboard.jsx";

export default function App() {
  const [session, setSession] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    supabase.auth
      .getSession()
      .then(({ data }) => setSession(data.session))
      .catch(() => setSession(null))
      .finally(() => setReady(true));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => sub.subscription.unsubscribe();
  }, []);

  if (!ready) return <div className="center muted">Loading…</div>;
  return session ? <Dashboard session={session} /> : <Login />;
}

function Login() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setErr("");
    setBusy(true);
    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: { emailRedirectTo: window.location.origin }
    });
    setBusy(false);
    if (error) setErr(error.message);
    else setSent(true);
  }

  return (
    <div className="center">
      <div className="card auth">
        <div className="brand">Rounds&nbsp;Codex <span>Admin</span></div>
        {sent ? (
          <p className="muted">
            Check <b>{email}</b> for a sign-in link. You can close this tab and open the link on
            this device.
          </p>
        ) : (
          <form onSubmit={submit}>
            <label htmlFor="email">Admin email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
              required
              autoFocus
            />
            <button className="btn" disabled={busy}>{busy ? "Sending…" : "Send magic link"}</button>
            {err && <p className="err">{err}</p>}
          </form>
        )}
        <p className="fine">Access is restricted to Rounds Codex administrators.</p>
      </div>
    </div>
  );
}
