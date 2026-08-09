import { ArrowRight, Bot, Check, CircleGauge, FileCheck2, GitBranch, ShieldCheck, Sparkles, Users } from "lucide-react";
import Link from "next/link";
import { HomeMotion } from "@/components/HomeMotion";
import { ProductFrame } from "@/components/ProductFrame";

const flow = ["Requirement", "Specification", "RFQ", "Quotations", "Comparison", "Approval", "Purchase order", "Fulfilment", "Receipt", "Quality", "Invoice", "Closure"];

const workModes = [
  { title: "Notice what changed", copy: "The companion watches authorized cycle events, commitments, dependencies, and risk signals, then surfaces the next useful move.", icon: CircleGauge },
  { title: "Prepare before you ask", copy: "Specialists can draft RFQs, normalize quotations, assemble comparisons, and prepare follow-ups with evidence and confidence attached.", icon: Sparkles },
  { title: "Keep decisions human", copy: "Awards, purchase orders, supplier communication, and other consequential effects stay behind explicit authority and confirmation.", icon: ShieldCheck },
];

const controls = [
  { title: "Role and plant scoped", copy: "Every view and agent run inherits tenant, plant, membership, role, hierarchy, and record-level boundaries.", icon: Users },
  { title: "Evidence first", copy: "Recommendations cite the documents, records, versions, and facts that produced them.", icon: FileCheck2 },
  { title: "Durable by design", copy: "Events, retries, idempotency keys, policy decisions, proposals, and receipts survive beyond the chat session.", icon: GitBranch },
  { title: "Manual always available", copy: "Teams can inspect and complete the underlying workflow themselves while trust grows.", icon: Bot },
];

export default function HomePage() {
  return <HomeMotion>
    <section className="next-hero">
      <div className="next-hero-glow" aria-hidden="true" />
      <div className="shell next-hero-layout">
        <div className="next-hero-copy">
          <h1>Procurement that <span>moves before</span> you ask.</h1>
          <p>GenuineGigs is the agentic procurement operating system for manufacturers. It follows every requirement, prepares the work, alerts the right person, and keeps consequential decisions under human control.</p>
          <div className="hero-actions"><Link href="/demo" className="primary-link">See it on your workflow <ArrowRight size={17}/></Link><Link href="/product" className="secondary-link">Explore the product</Link></div>
        </div>
        <div className="next-hero-visual image-motion">
          <ProductFrame src="/product/my-day-real-v3.png" width={1847} height={851} alt="GenuineGigs My Day dashboard with prepared work, decisions, dependencies, risks, and the persistent mascot companion" priority label="My Day · Live operations" />
        </div>
      </div>
    </section>

    <section className="trust-marquee" aria-label="Core operating principles"><div className="marquee-track">{[...Array(2)].flatMap((_, n) => ["Always-on companion", "Prepared work", "Cycle intelligence", "Human confirmation", "Evidence and confidence", "Manual control"].map(item => <span key={`${n}-${item}`}><i/>{item}</span>))}</div></section>

    <section className="agent-chapter">
      <div className="shell agent-intro">
        <h2>Your team gets a <span className="inline-product-image" aria-hidden="true"/> second set of eyes on every cycle.</h2>
        <p>The companion is present across the product, but it is not a decorative chatbot. It turns durable operational signals into role-specific briefings, prepared work, transparent recommendations, and governed actions.</p>
      </div>
      <div className="shell agent-accordion">
        {workModes.map((item, index) => <article key={item.title} className="agent-slice"><div className="slice-index">0{index + 1}</div><item.icon size={25}/><div><h3>{item.title}</h3><p>{item.copy}</p></div></article>)}
      </div>
    </section>

    <section className="cycle-chapter">
      <div className="shell cycle-layout">
        <div className="cycle-copy">
          <h2>One objective. Every handoff. No invisible gap.</h2>
          <p>Each active requirement becomes a durable procurement cycle. GenuineGigs evaluates what can advance, what evidence is missing, who owns the dependency, and whether production is at risk.</p>
          <div className="cycle-flow">{flow.map((stage, index) => <span key={stage} className={index < 5 ? "is-complete" : index === 5 ? "is-current" : ""}>{stage}</span>)}</div>
        </div>
        <div className="cycle-gallery">
          <article className="tour-card image-motion"><div><strong>The companion notices what changed</strong><p>Risks, prepared comparisons, and manager follow-ups appear as distinct, contextual events with evidence and controlled next actions.</p></div><ProductFrame src="/product/companion-real-v3.png" alt="Real GenuineGigs companion showing risk, prepared work, and manager follow-up events" label="GenuineGigs Companion" /></article>
          <article className="tour-card image-motion"><div><strong>Every active cycle stays visible</strong><p>Stage, owner, waiting reason, due state, authority, and the next permitted action remain readable across the portfolio.</p></div><ProductFrame src="/product/cycles-real-v3.png" width={1658} height={949} alt="Real active procurement cycles with owners, stages, statuses, and role-aware actions" label="Active procurement cycles" /></article>
        </div>
      </div>
    </section>

    <section className="control-chapter"><div className="shell"><div className="control-head"><h2>Agentic where useful. Deterministic where it matters.</h2><p>Language models help classify, extract, explain, and draft. Business services calculate costs, dates, scores, allocations, permissions, and state transitions.</p></div><div className="control-bento">{controls.map((item, index)=><article key={item.title} className={`control-card control-${index + 1}`}><item.icon size={26}/><div><h3>{item.title}</h3><p>{item.copy}</p></div></article>)}</div></div></section>

    <section className="manual-chapter"><div className="shell manual-layout"><div><h2>Trust is earned one action at a time.</h2><p>Start in manual mode. Let GenuineGigs observe and prepare. Review its evidence. Then enable carefully selected internal coordination where your policy allows it.</p></div><ul><li><Check/> Observe and explain</li><li><Check/> Prepare private work</li><li><Check/> Coordinate internally</li><li><Check/> Confirm consequential effects</li></ul></div></section>
  </HomeMotion>;
}
