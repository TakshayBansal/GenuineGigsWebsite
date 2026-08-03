import { ArrowRight, Check, Database, FileCheck2, ShieldCheck, Users } from "lucide-react";
import Link from "next/link";
import { HomeMotion } from "@/components/HomeMotion";
import { ProductFrame } from "@/components/ProductFrame";

const principles = ["Role-aware assistance", "Human-controlled actions", "Evidence attached to work", "ERP remains authoritative"];
const capabilities = [
  { icon: Users, title: "Built around every role", copy: "Each employee works with an agent grounded in their responsibilities, permissions, assigned work, and connected records." },
  { icon: ShieldCheck, title: "Authority stays explicit", copy: "Agents prepare and recommend. Authorized people approve, publish, post, and close consequential work." },
  { icon: FileCheck2, title: "Evidence travels with the work", copy: "Documents, versions, messages, decisions, and exceptions stay connected to the business record." },
  { icon: Database, title: "Your ERP stays in control", copy: "GenuineGigs coordinates work above the system of record through governed integration boundaries." },
];

export default function HomePage() {
  return <HomeMotion>
    <section className="home-hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="shell home-hero-inner">
        <div className="home-hero-copy">
          <p className="section-label">Manufacturing Agent OS</p>
          <h1>Move industrial work forward with clarity.</h1>
          <p className="hero-subtitle">GenuineGigs connects people, role agents, operational workflows, evidence, and your ERP in one governed manufacturing layer.</p>
          <div className="hero-actions"><Link href="/demo" className="primary-link">Book a tailored demo <ArrowRight size={17}/></Link><Link href="/product" className="secondary-link">Explore the platform</Link></div>
        </div>
        <div className="home-product-shot">
          <div className="product-shot-meta"><span>Supplier decision workspace</span><span>Human approval required</span></div>
          <ProductFrame src="/product/approval-centre.png" alt="GenuineGigs supplier approval centre interface" priority />
        </div>
      </div>
    </section>

    <section className="principles-strip" aria-label="Platform principles"><div className="shell principles-list">{principles.map(item=><span key={item}><i/>{item}</span>)}</div></section>

    <section className="editorial-section">
      <div className="shell">
        <header className="editorial-intro"><p className="section-label dark">The operating layer above ERP</p><h2>Your ERP records the transaction. GenuineGigs manages the work around it.</h2><p>Bring requirements, supplier documents, approvals, handoffs, follow-ups, and exceptions into one accountable operating view.</p></header>
        <div className="system-bento">
          <article className="system-primary"><div className="system-copy"><p className="card-label">One operating view</p><h3>See attention, prepared work, dependencies, and decisions together.</h3><p>Every role starts with what needs action and can reach the evidence behind it without changing systems.</p></div><div className="system-image"><ProductFrame src="/product/my-work.png" width={1568} height={1003} alt="GenuineGigs role-aware work dashboard" /></div></article>
          <article className="system-secondary dark-card"><p className="card-label">Role agents</p><h3>Assistance grounded in real work and real authority.</h3><Users size={28}/></article>
          <article className="system-secondary copper-card"><p className="card-label">Connected execution</p><h3>Every handoff carries context and evidence forward.</h3><ArrowRight size={28}/></article>
        </div>
      </div>
    </section>

    <section className="belief-section"><div className="shell belief-layout"><p className="section-label light">A responsible approach to industrial AI</p><h2>The best industrial AI does not remove authority. It gives every person better context, clearer work, and a safer next move.</h2></div></section>

    <section className="workflow-section">
      <div className="shell workflow-layout">
        <div className="workflow-intro"><p className="section-label light">Procurement, connected end to end</p><h2>From material need to quality inspection.</h2><p>One workflow preserves ownership, next actions, evidence, deadlines, and decision history as work moves across departments.</p><ul><li><Check size={15}/> Material requirement and RFQ</li><li><Check size={15}/> Quotations and comparison</li><li><Check size={15}/> Human approvals and purchase order</li><li><Check size={15}/> Gate, stores, and quality handoff</li></ul></div>
        <div className="workflow-gallery">
          <article className="workflow-panel"><div><p className="card-label light">Prepare with complete context</p><h3>Material requirements begin with approved data.</h3><p>Capture the business reason, material, quantity, timing, owner, and inspection needs before procurement starts.</p></div><ProductFrame src="/product/requirements.png" alt="Material requirement preparation in GenuineGigs" /></article>
          <article className="workflow-panel"><div><p className="card-label light">Keep the decision human</p><h3>Recommendations remain inspectable and governed.</h3><p>Verified quotations, supplier comparisons, and approval state remain separate from order creation.</p></div><ProductFrame src="/product/approval-centre.png" alt="Supplier recommendation and approval in GenuineGigs" /></article>
          <article className="workflow-panel"><div><p className="card-label light">Connect without losing control</p><h3>Integrations operate through explicit boundaries.</h3><p>Validated imports, supplier evidence, and reconciliation keep operational work aligned with the ERP.</p></div><ProductFrame src="/product/integration-centre.png" alt="ERP integration centre in GenuineGigs" /></article>
        </div>
      </div>
    </section>

    <section className="capabilities-section"><div className="shell"><header className="editorial-intro compact"><p className="section-label dark">Designed for accountable operations</p><h2>Capability where it helps. Control where it matters.</h2></header><div className="capability-ledger">{capabilities.map(item=><article key={item.title}><item.icon size={24}/><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div></div></section>

  </HomeMotion>;
}
