import { useEffect, useMemo, useState } from "react";
import { supabase } from "./supabase.js";
import Newsletters from "./Newsletters.jsx";
import Inbox from "./Inbox.jsx";

export default function Dashboard({ session }) {
  const [state, setState] = useState("loading"); // loading | denied | error | ready
  const [rows, setRows] = useState([]);
  const [err, setErr] = useState("");
  const [q, setQ] = useState("");
  const [tab, setTab] = useState("signups"); // signups | inbox | newsletters

  async function load() {
    setState("loading");
    setErr("");
    // 1) confirm this signed-in user is an admin (admins_self_read policy)
    const { data: adminRow, error: aErr } = await supabase
      .from("admins")
      .select("user_id")
      .eq("user_id", session.user.id)
      .maybeSingle();
    if (aErr) { setErr(aErr.message); setState("error"); return; }
    if (!adminRow) { setState("denied"); return; }
    // 2) load signups (signups_admin_all policy)
    const { data, error } = await supabase
      .from("signups")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) { setErr(error.message); setState("error"); return; }
    setRows(data || []);
    setState("ready");
  }

  useEffect(() => { load(); /* eslint-disable-next-line */ }, []);

  const stats = useMemo(() => {
    const total = rows.length;
    const subscribed = rows.filter((r) => r.status === "subscribed").length;
    const unsubscribed = rows.filter((r) => r.status === "unsubscribed").length;
    const byRole = {};
    rows.forEach((r) => { const k = r.role || "—"; byRole[k] = (byRole[k] || 0) + 1; });
    return { total, subscribed, unsubscribed, byRole };
  }, [rows]);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return rows;
    return rows.filter(
      (r) => (r.email || "").toLowerCase().includes(s) || (r.role || "").toLowerCase().includes(s)
    );
  }, [rows, q]);

  function exportCsv() {
    const cols = ["email", "role", "status", "source", "created_at"];
    const esc = (v) => {
      const s = v == null ? "" : String(v);
      return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
    };
    const csv = [cols.join(",")]
      .concat(filtered.map((r) => cols.map((c) => esc(r[c])).join(",")))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "rounds-codex-signups.csv";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  if (state === "loading") return <div className="center muted">Loading dashboard…</div>;

  if (state === "denied")
    return (
      <Gate>
        <p className="err">This account isn’t an administrator.</p>
        <p className="fine">Signed in as {session.user.email}</p>
        <button className="btn ghost" onClick={() => supabase.auth.signOut()}>Sign out</button>
      </Gate>
    );

  if (state === "error")
    return (
      <Gate>
        <p className="err">Couldn’t load data: {err}</p>
        <div className="row-btns">
          <button className="btn" onClick={load}>Retry</button>
          <button className="btn ghost" onClick={() => supabase.auth.signOut()}>Sign out</button>
        </div>
      </Gate>
    );

  return (
    <div className="wrap">
      <header className="topbar">
        <div className="brand">Rounds&nbsp;Codex <span>Admin</span></div>
        <nav className="tabs">
          <button className={"tab" + (tab === "signups" ? " on" : "")} onClick={() => setTab("signups")}>Signups</button>
          <button className={"tab" + (tab === "inbox" ? " on" : "")} onClick={() => setTab("inbox")}>Inbox</button>
          <button className={"tab" + (tab === "newsletters" ? " on" : "")} onClick={() => setTab("newsletters")}>Newsletters</button>
        </nav>
        <div className="who">
          {session.user.email}
          <button className="link" onClick={() => supabase.auth.signOut()}>Sign out</button>
        </div>
      </header>

      {tab === "newsletters" ? (
        <Newsletters session={session} />
      ) : tab === "inbox" ? (
        <Inbox session={session} />
      ) : (
      <>
      <section className="tiles">
        <Tile label="Total signups" value={stats.total} />
        <Tile label="Subscribed" value={stats.subscribed} accent="mint" />
        <Tile label="Unsubscribed" value={stats.unsubscribed} accent="coral" />
        <Tile
          label="By role"
          wide
          value={
            Object.keys(stats.byRole).length
              ? Object.entries(stats.byRole)
                  .sort((a, b) => b[1] - a[1])
                  .map(([k, v]) => `${k}: ${v}`)
                  .join("   ·   ")
              : "—"
          }
        />
      </section>

      <Spark rows={rows} />

      <div className="toolbar">
        <input
          className="search"
          placeholder="Search email or role…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <div className="tools">
          <span className="muted">{filtered.length} shown</span>
          <button className="btn sm" onClick={load}>Refresh</button>
          <button className="btn sm" onClick={exportCsv}>Export CSV</button>
        </div>
      </div>

      <div className="tablewrap">
        <table>
          <thead>
            <tr><th>Email</th><th>Role</th><th>Status</th><th>Source</th><th>Joined</th></tr>
          </thead>
          <tbody>
            {filtered.map((r) => (
              <tr key={r.id}>
                <td className="mono">{r.email}</td>
                <td>{r.role || "—"}</td>
                <td><span className={"pill " + (r.status || "")}>{r.status}</span></td>
                <td>{r.source}</td>
                <td>{fmtDate(r.created_at)}</td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr><td colSpan="5" className="empty">No signups match.</td></tr>
            )}
          </tbody>
        </table>
      </div>
      </>
      )}
    </div>
  );
}

function Gate({ children }) {
  return (
    <div className="center">
      <div className="card auth">
        <div className="brand">Rounds&nbsp;Codex <span>Admin</span></div>
        {children}
      </div>
    </div>
  );
}

function Tile({ label, value, accent, wide }) {
  return (
    <div className={"tile" + (wide ? " wide" : "")}>
      <div className="tlabel">{label}</div>
      <div className={"tval" + (accent ? " " + accent : "")}>{value}</div>
    </div>
  );
}

function fmtDate(iso) {
  if (!iso) return "—";
  const d = new Date(iso);
  if (isNaN(d)) return "—";
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

function Spark({ rows }) {
  const days = 14;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const buckets = Array.from({ length: days }, (_, i) => {
    const d = new Date(today);
    d.setDate(d.getDate() - (days - 1 - i));
    return { d, n: 0 };
  });
  rows.forEach((r) => {
    if (!r.created_at) return;
    const t = new Date(r.created_at);
    if (isNaN(t)) return;
    t.setHours(0, 0, 0, 0);
    const idx = buckets.findIndex((b) => b.d.getTime() === t.getTime());
    if (idx >= 0) buckets[idx].n++;
  });
  const max = Math.max(1, ...buckets.map((b) => b.n));
  return (
    <div className="spark">
      <div className="tlabel">New signups · last {days} days</div>
      <div className="bars">
        {buckets.map((b, i) => (
          <div
            key={i}
            className="bar"
            style={{ height: 6 + (b.n / max) * 46 + "px" }}
            title={b.d.toLocaleDateString() + ": " + b.n}
          />
        ))}
      </div>
    </div>
  );
}
