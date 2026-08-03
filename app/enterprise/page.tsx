import type { Metadata } from "next";
import { DatabaseZap, FileClock, KeyRound, LockKeyhole, ShieldCheck, UserCheck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = { title: "Enterprise", description: "Governed manufacturing agents, role-scoped access, human approvals, evidence, and ERP-safe integration." };
const principles = [
  { icon: UserCheck, title: "Authority is inherited from the role", copy: "Agent capabilities never exceed the employee’s workspace membership, plant access, or business permissions." },
  { icon: LockKeyhole, title: "Context is private by design", copy: "Work, knowledge, conversations, and delegation context are assembled and filtered before an agent can use them." },
  { icon: ShieldCheck, title: "Consequential actions stay governed", copy: "High-impact work becomes an expiring proposal for review by the human who already owns the authority." },
  { icon: FileClock, title: "Evidence survives the conversation", copy: "Approvals, decisions, citations, document versions, and audit hashes remain durable business records." },
  { icon: KeyRound, title: "Operational controls are independent", copy: "Agent availability, provider choice, simulation, and live external writes are controlled separately." },
  { icon: DatabaseZap, title: "ERP boundaries are explicit", copy: "Approvals, idempotency, payload identity, retries, and reconciliation protect every external write path." },
];

export default function EnterprisePage() { return <>
  <PageHero eyebrow="Enterprise by construction" title={<>Bring agents into operations <em>without losing control.</em></>} description="A governed architecture for manufacturers who need clear authority, isolated context, reliable evidence, and safe external-system boundaries." />
  <section className="section"><div className="shell"><Reveal className="section-head"><span className="eyebrow">Governance model</span><h2>AI capability inside deterministic business controls.</h2><p>Language models can help prepare the work. Permissions, workflow state, approvals, idempotency, and audit remain enforced by the product.</p></Reveal><div className="feature-grid">{principles.map((item,i)=><Reveal key={item.title} delay={(i%3)*80}><article className="feature-card"><span className="feature-icon"><item.icon /></span><h3>{item.title}</h3><p>{item.copy}</p></article></Reveal>)}</div></div></section>
  <section className="section dark-section"><div className="shell"><Reveal className="section-head"><span className="eyebrow light">Core enterprise principles</span><h2>Designed for accountable adoption.</h2></Reveal><div className="principle-grid"><article className="principle"><span>Isolation</span><h3>Workspace and plant boundaries</h3><p>Membership, reporting scope, role, ownership, and entity links shape what each person and agent can access.</p></article><article className="principle"><span>Verification</span><h3>Human-controlled outcomes</h3><p>Agents can prepare and recommend. Authorized operators retain decisions and external effects.</p></article><article className="principle"><span>Resilience</span><h3>Operations continue without AI</h3><p>Provider degradation or agent shutdown does not block the underlying non-AI workflow.</p></article></div></div></section>
  <section className="section"><div className="shell split"><Reveal className="split-copy"><span className="eyebrow">Integration readiness</span><h2>Start with validated data. Expand through controlled adapters.</h2><p style={{color:"var(--slate)"}}>Excel and CSV provide the currently validated integration path. Provider adapters establish boundaries for SAP, Oracle, Dynamics, Odoo, and other systems, subject to validation in each customer environment.</p></Reveal><Reveal><div className="content-card"><span className="tag">Safe deployment</span><h3>Simulation before live effects</h3><p>Separate approvals and environment controls let teams validate workflow, payloads, and reconciliation before enabling external writes.</p></div></Reveal></div></section>
</>; }
