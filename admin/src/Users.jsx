import { useEffect, useMemo, useState } from "react";
import { supabase } from "./supabase.js";
import { SUPABASE_URL } from "./config.js";

const FN_BASE = SUPABASE_URL.replace(/\/$/, "") + "/functions/v1";

async function callFn(name, body) {
  const { data } = await supabase.auth.getSession();
  const token = data?.session?.access_token;
  const res = await fetch(`${FN_BASE}/${name}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token ?? ""}` },
    body: JSON.stringify(body || {}),
  });
  let payload = null;
  try { payload = await res.json(); } catch { /* noop */ }
  if (!res.ok) throw new Error(payload?.error || `Request failed (${res.status})`);
  return payload;
}

export default function Users({ session }) {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [busy, setBusy] = useState("");   // "invite" | resend email
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");
  const [q, setQ] = useState("");
  const [compose, setCompose] = useState(null); // { email, subject, body }
  const [composeBusy, setComposeBusy] = useState(false);
  const [composeErr, setComposeErr] = useState("");

  async function load() {
    setLoading(true);
    const { data, error } = await supabase
      .from("app_users")
      .select("id,email,school,role,status,created_at")
      .order("created_at", { ascending: false });
    setLoading(false);
    if (error) { setErr(error.message); return; }
    setRows(data || []);
  }
  useEffect(() => { load(); /* eslint-disable-next-line */ }, []);

  async function invite(e) {
    e.preventDefault();
    const addr = email.trim().toLowerCase();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(addr)) { setErr("Enter a valid email."); return; }
    setBusy("invite"); setErr(""); setMsg("");
    try {
      await callFn("invite-user", { email: addr, school: school.trim() || null });
      setMsg(`Invite sent to ${addr}.`);
      setEmail(""); setSchool("");
      await load();
    } catch (e2) { setErr(e2.message); }
    setBusy("");
  }

  async function resend(addr) {
    setBusy(addr); setErr(""); setMsg("");
    try {
      await callFn("invite-user", { email: addr });
      setMsg(`Set-password link re-sent to ${addr}.`);
    } catch (e2) { setErr(e2.message); }
    setBusy("");
  }

  async function removeUser(u) {
    if (!window.confirm(`Delete ${u.email}? This removes their account and login for good — it can't be undone.`)) return;
    setBusy(u.id); setErr(""); setMsg("");
    try {
      await callFn("delete-user", { id: u.id, email: u.email });
      setRows((rs) => rs.filter((x) => x.id !== u.id));
      setMsg(`Deleted ${u.email}.`);
    } catch (e2) { setErr(e2.message); }
    setBusy("");
  }

  function openCompose(email) {
    setComposeErr("");
    setCompose({ email, subject: "", body: "" });
  }

  async function sendCompose() {
    if (!compose) return;
    if (!compose.subject.trim() || !compose.body.trim()) { setComposeErr("Add a subject and a message."); return; }
    setComposeBusy(true); setComposeErr("");
    try {
      await callFn("send-email", {
        to: compose.email,
        subject: compose.subject.trim(),
        body_text: compose.body,
        mailbox: "admin@roundscodex.com",
      });
      setCompose(null);
      setMsg(`Emailed ${compose.email} from admin@roundscodex.com.`);
    } catch (e2) { setComposeErr(e2.message); }
    setComposeBusy(false);
  }

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return rows;
    return rows.filter((r) => (r.email || "").toLowerCase().includes(s) || (r.school || "").toLowerCase().includes(s));
  }, [rows, q]);

  const stats = useMemo(() => {
    const total = rows.length;
    const active = rows.filter((r) => r.status === "active").length;
    const invited = rows.filter((r) => r.status === "invited").length;
    return { total, active, invited };
  }, [rows]);

  return (
    <div className="usr">
      <form className="usr-invite" onSubmit={invite}>
        <div className="tlabel">Invite a user</div>
        <div className="usr-fields">
          <input type="email" placeholder="new user's email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off" />
          <input type="text" placeholder="school (optional)" value={school} onChange={(e) => setSchool(e.target.value)} />
          <button className="btn sm" disabled={!!busy}>{busy === "invite" ? "Sending…" : "Send invite"}</button>
        </div>
        <p className="muted fine" style={{ margin: ".5rem 0 0" }}>
          Sends a set-password link from teacher@roundscodex.com. They choose a password and confirm their school.
        </p>
        {msg && <p className="note-ok">{msg}</p>}
        {err && <p className="err">{err}</p>}
      </form>

      <div className="usr-stats">
        <span><strong>{stats.total}</strong> users</span>
        <span><strong>{stats.active}</strong> active</span>
        <span><strong>{stats.invited}</strong> invited</span>
        <input className="search" placeholder="Search email or school…" value={q} onChange={(e) => setQ(e.target.value)} />
        <button className="btn sm ghost" onClick={load} disabled={!!busy}>Refresh</button>
      </div>

      <div className="tablewrap">
        <table>
          <thead><tr><th>Email</th><th>School</th><th>Status</th><th>Joined</th><th></th></tr></thead>
          <tbody>
            {loading ? (
              <tr><td colSpan="5" className="empty">Loading…</td></tr>
            ) : filtered.length === 0 ? (
              <tr><td colSpan="5" className="empty">No users yet. Invite your first above.</td></tr>
            ) : filtered.map((r) => (
              <tr key={r.id}>
                <td className="mono">
                  <button className="link-email" onClick={() => openCompose(r.email)} title="Email this person from admin@roundscodex.com">{r.email}</button>
                </td>
                <td>{r.school || "—"}</td>
                <td><span className={"pill " + (r.status === "active" ? "sent" : r.status === "disabled" ? "canceled" : "draft")}>{r.status}</span></td>
                <td>{fmtDate(r.created_at)}</td>
                <td className="row-actions">
                  <button className="link" onClick={() => openCompose(r.email)} disabled={!!busy}>Email</button>
                  {r.status !== "active" && (
                    <button className="link" onClick={() => resend(r.email)} disabled={!!busy}>{busy === r.email ? "…" : "Resend"}</button>
                  )}
                  <button className="link danger" onClick={() => removeUser(r)} disabled={!!busy}>{busy === r.id ? "…" : "Delete"}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {compose && (
        <div className="modal-back" onClick={() => !composeBusy && setCompose(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-head">
              <div>
                <div className="tmpl-title">New email</div>
                <div className="muted fine">To {compose.email} · from admin@roundscodex.com</div>
              </div>
              <button className="link" onClick={() => setCompose(null)} disabled={composeBusy}>Close</button>
            </div>
            <label className="tlabel">Subject</label>
            <input value={compose.subject} onChange={(e) => setCompose((c) => ({ ...c, subject: e.target.value }))} autoFocus />
            <label className="tlabel">Message</label>
            <textarea rows={8} value={compose.body} onChange={(e) => setCompose((c) => ({ ...c, body: e.target.value }))} placeholder="Write your message…" />
            {composeErr && <p className="err">{composeErr}</p>}
            <div className="modal-actions">
              <button className="btn ghost" onClick={() => setCompose(null)} disabled={composeBusy}>Cancel</button>
              <button className="btn" onClick={sendCompose} disabled={composeBusy}>{composeBusy ? "Sending…" : "Send email"}</button>
            </div>
            <p className="muted fine" style={{ margin: ".6rem 0 0" }}>Their reply lands in your Inbox tab, and this message is saved to the thread.</p>
          </div>
        </div>
      )}
    </div>
  );
}

function fmtDate(iso) {
  if (!iso) return "—";
  const d = new Date(iso);
  if (isNaN(d)) return "—";
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}
