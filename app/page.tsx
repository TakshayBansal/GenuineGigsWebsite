import { Activity, ArrowRight, BadgeCheck, Check, CircleGauge, DatabaseZap, Factory, GitBranch, ShieldCheck, Users } from "lucide-react";
import Link from "next/link";
import { HomeMotion } from "@/components/HomeMotion";
import { ProductFrame } from "@/components/ProductFrame";

const flow = ["Source facts", "Operational state", "Forecast", "Deviation", "Recovery options", "Human decision", "Owned actions", "Monitoring", "Verified outcome", "Learning"];

const workModes = [
  { title: "See the same facts", copy: "Production, machine, material, quality, maintenance, and supplier signals become one time-aware operational state—not competing dashboards.", icon: Activity },
  { title: "Act on owned recovery", copy: "Each role sees the lines, risks, decisions, and actions it owns, with plant and asset scope enforced by the product.", icon: Users },
  { title: "Prove the result", copy: "Recovery is verified from observed output, condition, quality, and readiness—not from a task being marked complete.", icon: BadgeCheck },
];

const controls = [
  { title: "Connect what already runs", copy: "ERP, MES, WMS, QMS, CMMS, supplier, and machine events meet at a governed connector boundary.", icon: DatabaseZap },
  { title: "Deterministic decisions", copy: "State, loss, forecasts, permissions, and workflow transitions are calculated by inspectable business services.", icon: GitBranch },
  { title: "Authority stays explicit", copy: "Plant, line, asset, role, financial visibility, and action authority shape every view and decision.", icon: ShieldCheck },
  { title: "Built for plant reality", copy: "Stale sources, holds, downtime, material shortages, repeat faults, and recovery evidence remain visible as first-class operational facts.", icon: Factory },
];

export default function HomePage() {
  return <HomeMotion>
    <section className="next-hero">
      <div className="next-hero-glow" aria-hidden="true" />
      <div className="shell next-hero-layout">
        <div className="next-hero-copy">
          <h1>Turn factory disruption into <span>verified recovery.</span></h1>
          <p>GenuineGigs connects production, machine, material, quality, maintenance, and supplier facts—then helps teams detect risk, choose a recovery, coordinate the work, and prove the outcome.</p>
          <div className="hero-actions"><Link href="/demo" className="primary-link">See it on your operation <ArrowRight size={17}/></Link><Link href="/product" className="secondary-link">Explore the product</Link></div>
        </div>
        <div className="next-hero-visual image-motion">
          <ProductFrame src="/product/line-recovery-workspace.png" width={1918} height={875} alt="GenuineGigs line workspace showing production trajectory, operational state, recovery status, and loss" priority label="Line recovery · Live operations" />
        </div>
      </div>
    </section>

    <section className="trust-marquee" aria-label="Core operating capabilities"><div className="marquee-track">{[...Array(2)].flatMap((_, n) => ["Live operational state", "Bounded forecasts", "Deviation detection", "Recovery options", "Governed actions", "Verified outcomes"].map(item => <span key={`${n}-${item}`}><i/>{item}</span>))}</div></section>

    <section className="agent-chapter">
      <div className="shell agent-intro">
        <h2>One operational picture. <span className="inline-product-image" aria-hidden="true"/> Different work for every role.</h2>
        <p>Plant leaders, production, maintenance, quality, materials, stores, and operators share the same underlying facts while seeing only the decisions and work relevant to them.</p>
      </div>
      <div className="shell agent-accordion">
        {workModes.map((item, index) => <article key={item.title} className="agent-slice"><div className="slice-index">0{index + 1}</div><item.icon size={25}/><div><h3>{item.title}</h3><p>{item.copy}</p></div></article>)}
      </div>
    </section>

    <section className="cycle-chapter">
      <div className="shell cycle-layout">
        <div className="cycle-copy">
          <h2>From raw signal to a recovery the plant can trust.</h2>
          <p>GenuineGigs separates observed facts from interpretation, calculates what the shift can still deliver, exposes the loss, and coordinates an authorized response through to verified recovery.</p>
          <div className="cycle-flow">{flow.map((stage, index) => <span key={stage} className={index < 3 ? "is-complete" : index === 3 ? "is-current" : ""}>{stage}</span>)}</div>
        </div>
        <div className="cycle-gallery">
          <article className="tour-card image-motion"><div><strong>See every line in one operational view</strong><p>Target, actual, forecast, blockers, deviations, and recovery state stay comparable without collapsing different kinds of risk into one status.</p></div><ProductFrame src="/product/operations-overview.png" width={1918} height={873} alt="Operations overview showing six production lines with targets, actuals, forecasts, blockers, and recovery state" label="Operations overview" /></article>
          <article className="tour-card image-motion"><div><strong>Bring material context into the decision</strong><p>Inventory, inbound supply, readiness, supplier commitments, and contextual guidance sit beside the production consequence they affect.</p></div><ProductFrame src="/product/material-readiness-gigi.png" width={1918} height={877} alt="Material readiness workspace with inventory risks, inbound supply, and contextual Gigi guidance" label="Material readiness" /></article>
        </div>
      </div>
    </section>

    <section className="control-chapter"><div className="shell"><div className="control-head"><h2>Intelligent where useful. Deterministic where it matters.</h2><p>Assistance can explain evidence and help teams investigate. Operational state, forecasts, permissions, decisions, and verified value stay grounded in governed business logic.</p></div><div className="control-bento">{controls.map((item, index)=><article key={item.title} className={`control-card control-${index + 1}`}><item.icon size={26}/><div><h3>{item.title}</h3><p>{item.copy}</p></div></article>)}</div></div></section>

    <section className="manual-chapter"><div className="shell manual-layout"><div><h2>Keep people in control while recovery moves faster.</h2><p>Start with visibility. Validate the plant model and forecasts. Then enable role-owned recovery actions within the authority your operation already uses.</p></div><ul><li><Check/> Observe and reconcile facts</li><li><Check/> Explain deviations and loss</li><li><Check/> Compare recovery options</li><li><Check/> Verify the operating outcome</li></ul></div></section>
  </HomeMotion>;
}
