import type { Metadata } from "next";
import { Bot, ClipboardCheck, FileSearch, GitBranch, Hand, MessagesSquare, ShieldCheck, Waypoints } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ProductFrame } from "@/components/ProductFrame";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = { title: "Product", description: "Explore proactive procurement cycles, prepared specialist work, role-aware My Day views, governed execution, and evidence in GenuineGigs." };
const cards = [
  { icon: ClipboardCheck, tag: "My Day", title: "The right work, in the right order", copy: "Decisions, prepared items, current tasks, waiting dependencies, watching, risk, and completed work are composed for each employee." },
  { icon: Bot, tag: "Companion", title: "Present before chat begins", copy: "The companion responds to cycle events, manager follow-ups, missed commitments, priority changes, and material risks with a contextual next move." },
  { icon: FileSearch, tag: "Specialists", title: "Prepared work with evidence", copy: "Bounded specialists analyze requirements, RFQs, quotations, comparisons, fulfilment, quality, invoices, and cycle risk." },
  { icon: GitBranch, tag: "Orchestration", title: "A durable cycle, not a chat thread", copy: "Objectives, stages, dependencies, risks, events, retries, and checkpoints make procurement work resumable and inspectable." },
  { icon: MessagesSquare, tag: "Coordination", title: "Commitments and blockers have owners", copy: "Follow-ups account for calendars, activity, impact, commitment state, and the real blocker owner before escalating." },
  { icon: ShieldCheck, tag: "Policy", title: "Authority evaluated in context", copy: "Role, hierarchy, plant, resource, spend, risk, reversibility, and external effect determine whether work is allowed or needs confirmation." },
  { icon: Hand, tag: "Human control", title: "Manual work remains first class", copy: "Every workflow stays usable without AI. Teams choose when the companion observes, prepares, coordinates, or proposes an effect." },
  { icon: Waypoints, tag: "Execution", title: "One governed path to mutation", copy: "Capabilities, policy, obligations, fresh entity state, versions, idempotency, canonical services, receipts, and audit guard every agent-originated effect." },
];

export default function ProductPage() { return <>
  <PageHero eyebrow="Agentic procurement, made operational" title={<>One system that follows every cycle—and <em>prepares what comes next.</em></>} description="GenuineGigs combines durable procurement orchestration, bounded AI specialists, a proactive role companion, and governed execution without removing the workflows your team already trusts." />
  <section className="section"><div className="shell content-grid">
    <Reveal className="content-card wide"><div><span className="tag">Role-aware My Day</span><h3>See decisions, prepared work, dependencies, and risk together.</h3><p>Every item explains why it matters now, who owns the next move, what evidence supports it, and what happens if it waits.</p></div><ProductFrame src="/product/my-day-real-v3.png" width={1847} height={851} alt="Real GenuineGigs My Day workbench with populated operational work and mascot companion" /></Reveal>
    {cards.map((card, i) => <Reveal key={card.title} className="content-card" delay={(i % 2) * 90}><card.icon className="feature-icon" size={52} /><h3>{card.title}</h3><span className="tag">{card.tag}</span><p>{card.copy}</p></Reveal>)}
  </div></section>
  <section className="section dark-section"><div className="shell split"><Reveal className="split-copy"><span className="eyebrow light">Cycle visibility</span><h2>Stage, ownership, waiting state, and authority stay explicit.</h2><p>Each active cycle shows where it is, what it is waiting for, who owns the next move, and whether the current user can act or should simply view the cycle.</p></Reveal><Reveal className="product-stack"><ProductFrame src="/product/cycles-real-v3.png" width={1658} height={949} alt="Real procurement-cycle portfolio with varied materials, stages, and permissions" label="Active procurement cycles" /></Reveal></div></section>
  <section className="section"><div className="shell split reverse"><Reveal className="product-stack"><ProductFrame src="/product/companion-real-v3.png" alt="Real GenuineGigs Companion with contextual procurement events" label="GenuineGigs Companion" /></Reveal><Reveal className="split-copy"><span className="eyebrow">Proactive assistance</span><h2>The agent appears when the work changes—not only when someone opens chat.</h2><p>Cycle risk, prepared work, and manager follow-ups arrive as distinct events with evidence, snooze and dismissal controls, and an authorized next action.</p></Reveal></div></section>
</>; }
