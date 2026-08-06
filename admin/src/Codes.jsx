import { useEffect, useMemo, useState } from "react";
import { supabase } from "./supabase.js";

// Human-friendly code, no ambiguous chars.
function genCode() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let s = "";
  const buf = new Uint32Array(6);
  (window.crypto || window.msCrypto).getRandomValues(buf);
  for (let i = 0; i < 6; i++) s += alphabet[buf[i] % alphabet.length];
  return "RC-" + s;
}

const GRANTS = [
  { v: "lifetime", label: "Free for life" },
  { v: "year", label: "Free for 1 year" },
  { v: "month", label: "Free for 1 month" },
];

export default function Codes({ session }) {
  const [codes, setCodes] = useState([]);
  const [reds, setReds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState("");
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");

  const [form, setForm] = useState({ code: genCode(), label: "", grant_type: "lifetime", max_redemptions: 1, expires_at: "" });

  async function load() {
    setLoading(true); setErr("");
    const { data: c } = await supabase.from("access_codes").select("*").order("created_at", { ascending: false });
    const { data: r } = await supabase.from("code_redemptions").select("*").order("redeemed_at", { ascending: false }).limit(50);
    setCodes(c || []); setReds(r || []);
    setLoading(false);
  }
  useEffect(() => { load(); /* eslint-disable-next-line */ }, []);

  async function create(e) {
    e.preventDefault();
    const code = form.code.trim().toUpperCase();
    if (!code) { setErr("A code is required."); return; }
    const max = Math.max(1, parseInt(form.max_redemptions, 10) || 1);
    setBusy("create"); setErr(""); setMsg("");
    const { error } = await supabase.from("access_codes").insert({
      code,
      label: form.label.trim() || null,
      grant_type: form.grant_type,
      max_redemptions: max,
      expires_at: form.expires_at ? new Date(form.expires_at).toISOString() : null,
      created_by: session?.user?.id ?? null,
    });
    setBusy("");
    if (error) { setErr(error.code === "23505" ? "That code already exists — generate a new one." : error.message); return; }
    setMsg(`Created ${code}.`);
    setForm({ code: genCode(), label: "", grant_type: "lifetime", max_redemptions: 1, expires_at: "" });
    await load();
  }

  async function setActive(code, active) {
    setBusy(code); setErr(""); setMsg("");
    const { error } = await supabase.from("access_codes").update({ active }).eq("code", code);
    setBusy("");
    if (error) { setErr(error.message); return; }
    setCodes((cs) => cs.map((c) => (c.code === code ? { ...c, active } : c)));
    setMsg(`${code} ${active ? "reactivated" : "revoked"}.`);
  }

  function copy(code) {
    navigator.clipboard?.writeText(code);
    setMsg(`Copied ${code}.`);
  }

  const grantLabel = useMemo(() => Object.fromEntries(GRANTS.map((g) => [g.v, g.label])), []);

  return (
    <div className="codes">
      <form className="tmpl-card" onSubmit={create}>
        <div className="tmpl-head">
          <div>
            <div className="tmpl-title">Create a free-access code</div>
            <div className="muted fine">Give someone free access. They redeem it in the app; it sets their account to free.</div>
          </div>
        </div>
        <div className="codes-form">
          <div>
            <label className="tlabel">Code</label>
            <div className="codes-codeinput">
              <input value={form.code} onChange={(e) => setForm({ ...form, code: e.target.value.toUpperCase() })} />
              <button type="button" className="btn sm ghost" onClick={() => setForm({ ...form, code: genCode() })}>New</button>
            </div>
          </div>
          <div>
            <label className="tlabel">Grant</label>
            <select value={form.grant_type} onChange={(e) => setForm({ ...form, grant_type: e.target.value })}>
              {GRANTS.map((g) => <option key={g.v} value={g.v}>{g.label}</option>)}
            </select>
          </div>
          <div>
            <label className="tlabel">Max uses</label>
            <input type="number" min="1" value={form.max_redemptions} onChange={(e) => setForm({ ...form, max_redemptions: e.target.value })} />
          </div>
          <div>
            <label className="tlabel">Expires <span className="muted fine">(optional)</span></label>
            <input type="date" value={form.expires_at} onChange={(e) => setForm({ ...form, expires_at: e.target.value })} />
          </div>
          <div className="codes-label">
            <label className="tlabel">Label <span className="muted fine">(who/what it's for)</span></label>
            <input value={form.label} onChange={(e) => setForm({ ...form, label: e.target.value })} placeholder="e.g. UF nursing faculty" />
          </div>
        </div>
        <div className="tmpl-actions" style={{ marginTop: ".9rem" }}>
          <button className="btn sm" disabled={busy === "create"}>{busy === "create" ? "Creating…" : "Create code"}</button>
        </div>
        {msg && <p className="note-ok">{msg}</p>}
        {err && <p className="err">{err}</p>}
      </form>

      <div className="tlabel" style={{ margin: "1.6rem 0 .6rem" }}>Codes</div>
      <div className="tablewrap">
        <table>
          <thead><tr><th>Code</th><th>Grant</th><th>Used</th><th>Expires</th><th>Label</th><th>Status</th><th></th></tr></thead>
          <tbody>
            {loading ? (
              <tr><td colSpan="7" className="empty">Loading…</td></tr>
            ) : codes.length === 0 ? (
              <tr><td colSpan="7" className="empty">No codes yet. Create one above.</td></tr>
            ) : codes.map((c) => (
              <tr key={c.code}>
                <td className="mono"><button className="link-email" onClick={() => copy(c.code)} title="Copy">{c.code}</button></td>
                <td>{grantLabel[c.grant_type] || c.grant_type}</td>
                <td>{c.redemptions} / {c.max_redemptions}</td>
                <td>{c.expires_at ? fmtDate(c.expires_at) : "—"}</td>
                <td>{c.label || "—"}</td>
                <td><span className={"pill " + (c.active ? "sent" : "canceled")}>{c.active ? "active" : "revoked"}</span></td>
                <td className="row-actions">
                  {c.active
                    ? <button className="link danger" onClick={() => setActive(c.code, false)} disabled={busy === c.code}>Revoke</button>
                    : <button className="link" onClick={() => setActive(c.code, true)} disabled={busy === c.code}>Reactivate</button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="tlabel" style={{ margin: "1.6rem 0 .6rem" }}>Recent redemptions</div>
      <div className="tablewrap">
        <table>
          <thead><tr><th>When</th><th>Code</th><th>User</th></tr></thead>
          <tbody>
            {reds.length === 0 ? (
              <tr><td colSpan="3" className="empty">No redemptions yet.</td></tr>
            ) : reds.map((r) => (
              <tr key={r.id}><td>{fmtDate(r.redeemed_at)}</td><td className="mono">{r.code}</td><td className="mono">{r.email || r.user_id}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function fmtDate(iso) {
  if (!iso) return "—";
  const d = new Date(iso);
  if (isNaN(d)) return "—";
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}
