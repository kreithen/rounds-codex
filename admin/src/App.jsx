import { useEffect, useState } from "react";
import { supabase } from "./supabase.js";
import Dashboard from "./Dashboard.jsx";

export default function App() {
  const [session, setSession] = useState(null);
  const [ready, setReady] = useState(false);
  const [recovery, setRecovery] = useState(false);

  useEffect(() => {
    supabase.auth
      .getSession()
      .then(({ data }) => setSession(data.session))
      .catch(() => setSession(null))
      .finally(() => setReady(true));
    const { data: sub } = supabase.auth.onAuthStateChange((event, s) => {
      if (event === "PASSWORD_RECOVERY") setRecovery(true);
      setSession(s);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  if (!ready) return <div className="center muted">Loading…</div>;
  if (recovery) return <SetPassword onDone={() => setRecovery(false)} />;
  return session ? <Dashboard session={session} /> : <Login />;
}

function Shell({ children }) {
  return (
    <div className="center">
      <div className="card auth">
        <div className="brand">Rounds&nbsp;Codex <span>Admin</span></div>
        {children}
      </div>
    </div>
  );
}

function Login() {
  const [mode, setMode] = useState("password"); // password | forgot
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [note, setNote] = useState("");
  const [busy, setBusy] = useState(false);

  async function signIn(e) {
    e.preventDefault();
    setErr(""); setNote(""); setBusy(true);
    const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
    setBusy(false);
    if (error) setErr(error.message);
  }

  async function sendReset(e) {
    e.preventDefault();
    setErr(""); setNote(""); setBusy(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
      redirectTo: window.location.origin
    });
    setBusy(false);
    if (error) setErr(error.message);
    else setNote("If that address is an admin, a password-reset link is on its way.");
  }

  if (mode === "forgot") {
    return (
      <Shell>
        <form onSubmit={sendReset}>
          <label htmlFor="email">Admin email</label>
          <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
            placeholder="you@roundscodex.com" autoComplete="email" required autoFocus />
          <button className="btn" disabled={busy}>{busy ? "Sending…" : "Send reset link"}</button>
          {note && <p className="note-ok">{note}</p>}
          {err && <p className="err">{err}</p>}
        </form>
        <p className="fine"><button className="link plain" onClick={() => { setMode("password"); setErr(""); setNote(""); }}>← Back to sign in</button></p>
      </Shell>
    );
  }

  return (
    <Shell>
      <form onSubmit={signIn}>
        <label htmlFor="email">Admin email</label>
        <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
          placeholder="you@roundscodex.com" autoComplete="email" required autoFocus />
        <label htmlFor="pw">Password</label>
        <input id="pw" type="password" value={password} onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••" autoComplete="current-password" required />
        <button className="btn" disabled={busy}>{busy ? "Signing in…" : "Sign in"}</button>
        {err && <p className="err">{err}</p>}
      </form>
      <p className="fine">
        <button className="link plain" onClick={() => { setMode("forgot"); setErr(""); }}>Forgot password?</button>
        <span className="dot-sep">·</span>
        Access is restricted to Rounds Codex administrators.
      </p>
    </Shell>
  );
}

function SetPassword({ onDone }) {
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setErr("");
    if (pw.length < 8) { setErr("Use at least 8 characters."); return; }
    if (pw !== pw2) { setErr("Passwords don't match."); return; }
    setBusy(true);
    const { error } = await supabase.auth.updateUser({ password: pw });
    setBusy(false);
    if (error) { setErr(error.message); return; }
    setDone(true);
  }

  if (done) {
    return (
      <Shell>
        <p className="note-ok">Password updated. You're signed in.</p>
        <button className="btn" onClick={() => onDone && onDone()}>Continue to dashboard</button>
      </Shell>
    );
  }

  return (
    <Shell>
      <form onSubmit={submit}>
        <p className="muted" style={{ margin: "0 0 .4rem" }}>Set a new password for your admin account.</p>
        <label htmlFor="np">New password</label>
        <input id="np" type="password" value={pw} onChange={(e) => setPw(e.target.value)}
          placeholder="At least 8 characters" autoComplete="new-password" required autoFocus />
        <label htmlFor="np2">Confirm password</label>
        <input id="np2" type="password" value={pw2} onChange={(e) => setPw2(e.target.value)}
          autoComplete="new-password" required />
        <button className="btn" disabled={busy}>{busy ? "Saving…" : "Set password"}</button>
        {err && <p className="err">{err}</p>}
      </form>
    </Shell>
  );
}
