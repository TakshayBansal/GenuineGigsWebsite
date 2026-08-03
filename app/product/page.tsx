import type { Metadata } from "next";
import { Bot, ClipboardCheck, Files, GitBranch, MessagesSquare, Waypoints } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ProductFrame } from "@/components/ProductFrame";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = { title: "Product", description: "Explore the GenuineGigs role-agent operating layer for manufacturing workflows, decisions, evidence, and coordination." };
const cards = [
  { icon: ClipboardCheck, tag: "Focused work", title: "A task-first operating view", copy: "Every role starts with what needs attention, why it matters, who owns the next step, and what evidence is required." },
  { icon: Bot, tag: "Role assistance", title: "Role-aware assistance", copy: "Agents use permissioned work context to explain, summarize, extract, compare, draft, and prepare governed work." },
  { icon: GitBranch, tag: "Human control", title: "Human decision gates", copy: "Approvals, publication, ERP posting, inventory changes, and exception closure remain explicit authorized actions." },
  { icon: Files, tag: "Durable evidence", title: "A record that travels", copy: "Documents, versions, citations, messages, decisions, and audit events remain linked to the business record." },
  { icon: MessagesSquare, tag: "Clear coordination", title: "Structured team follow-through", copy: "Managers delegate objectives through reporting lines while employees and agents coordinate around shared work—not private chats." },
  { icon: Waypoints, tag: "Safe integration", title: "An ERP-safe layer", copy: "Validated data enters controlled workflows; approved outcomes can be reconciled back through governed connector boundaries." },
];

export default function ProductPage() { return <>
  <PageHero eyebrow="The platform" title={<>One system for the work your <em>ERP cannot see.</em></>} description="GenuineGigs turns operational intent into assigned, evidenced, governed work—supported by agents built around each manufacturing role." />
  <section className="section"><div className="shell content-grid">
    <Reveal className="content-card wide"><div><span className="tag">Your operating view</span><h3>See attention, prepared work, dependencies, and decisions together.</h3><p>The workspace makes next actions visible without hiding the process records and evidence behind them.</p></div><ProductFrame src="/product/my-work.png" width={1568} height={1003} alt="GenuineGigs work and attention dashboard" /></Reveal>
    {cards.map((card, i) => <Reveal key={card.title} className="content-card" delay={(i % 2) * 90}><card.icon className="feature-icon" size={52} /><h3>{card.title}</h3><span className="tag">{card.tag}</span><p>{card.copy}</p></Reveal>)}
  </div></section>
  <section className="section dark-section"><div className="shell split"><Reveal className="split-copy"><span className="eyebrow light">Decisions with context</span><h2>Compare. Recommend. Approve. Create—with the boundaries visible.</h2><p>Verified quotations, supplier recommendations, approval status, and the resulting order remain separate, inspectable stages.</p></Reveal><Reveal className="product-stack"><ProductFrame src="/product/approval-centre.png" alt="Supplier comparison and approval workflow" label="Approval centre" /></Reveal></div></section>
</>; }
