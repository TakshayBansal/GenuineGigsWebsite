"use client";

import { ArrowRight, LoaderCircle } from "lucide-react";
import { FormEvent, useState } from "react";

type Status = { kind: "idle" | "loading" | "success" | "error"; message?: string };

export function DemoForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors({}); setStatus({ kind: "loading" });
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/demo", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const data = await response.json() as { message?: string; errors?: Record<string,string> };
      if (!response.ok) { setErrors(data.errors || {}); throw new Error(data.message || "We could not send your request. Please try again."); }
      form.reset(); setStatus({ kind: "success", message: data.message || "Thanks—your request has been sent." });
    } catch (error) { setStatus({ kind: "error", message: error instanceof Error ? error.message : "We could not send your request." }); }
  }

  const field = (name: string) => errors[name] ? <span className="field-error" role="alert">{errors[name]}</span> : null;
  return <form className="demo-form" onSubmit={submit} noValidate>
    <div className="honeypot" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <div className="form-field"><label htmlFor="name">Full name *</label><input id="name" name="name" autoComplete="name" required maxLength={100} />{field("name")}</div>
    <div className="form-field"><label htmlFor="email">Work email *</label><input id="email" name="email" type="email" autoComplete="email" required maxLength={200} />{field("email")}</div>
    <div className="form-field"><label htmlFor="company">Company *</label><input id="company" name="company" autoComplete="organization" required maxLength={150} />{field("company")}</div>
    <div className="form-field"><label htmlFor="role">Job role *</label><input id="role" name="role" autoComplete="organization-title" required maxLength={120} />{field("role")}</div>
    <div className="form-field"><label htmlFor="companySize">Company size *</label><select id="companySize" name="companySize" required defaultValue=""><option value="" disabled>Select company size</option><option>1–50 employees</option><option>51–250 employees</option><option>251–1,000 employees</option><option>1,001–5,000 employees</option><option>5,000+ employees</option></select>{field("companySize")}</div>
    <div className="form-field"><label htmlFor="erp">Current plant systems</label><input id="erp" name="erp" placeholder="ERP, MES, QMS, CMMS, Excel…" maxLength={120} />{field("erp")}</div>
    <div className="form-field full"><label htmlFor="challenge">What would you most like to improve? *</label><select id="challenge" name="challenge" required defaultValue=""><option value="" disabled>Select a priority</option><option>Production plan recovery</option><option>Machine downtime and maintenance</option><option>Material readiness and supplier delays</option><option>Quality containment</option><option>Cross-functional ownership</option><option>Plant visibility across systems</option><option>Governed operational intelligence</option><option>Other</option></select>{field("challenge")}</div>
    <div className="form-field full"><label htmlFor="message">Tell us about your operation</label><textarea id="message" name="message" maxLength={1500} placeholder="Plants, lines, systems, loss type, or the recovery workflow you want to improve." />{field("message")}</div>
    {status.kind === "success" && <div className="form-status success" role="status">{status.message}</div>}
    {status.kind === "error" && <div className="form-status error" role="alert">{status.message}</div>}
    <p className="form-note">By submitting, you agree that GenuineGigs may use these details to respond to your request. No submission is stored by this website after it is forwarded.</p>
    <button className="button" disabled={status.kind === "loading"}>{status.kind === "loading" ? <><LoaderCircle className="spin" size={17}/> Sending request</> : <>Request a conversation <ArrowRight size={17}/></>}</button>
  </form>;
}
