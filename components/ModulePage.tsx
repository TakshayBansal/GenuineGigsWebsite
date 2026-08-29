import type { LucideIcon } from "lucide-react";
import { ArrowRight, Check, Network } from "lucide-react";
import Link from "next/link";
import { ProductFrame } from "./ProductFrame";
import { Reveal } from "./Reveal";

type Feature = { icon: LucideIcon; title: string; copy: string };
type ModulePageProps = {
  name: string; eyebrow: string; title: string; description: string; image: string;
  imageWidth: number; imageHeight: number; imageAlt: string; outcomes: string[];
  features: Feature[]; flow: string[]; theme: "procurement" | "scm" | "operations";
};

export function ModulePage(props: ModulePageProps) {
  return <div className={`module-page module-${props.theme}`}>
    <section className="module-hero"><div className="module-orbit" aria-hidden="true"/><div className="shell module-hero-grid">
      <div className="module-hero-copy"><p className="module-kicker">{props.eyebrow}</p><h1>{props.title}</h1><p>{props.description}</p><div className="hero-actions"><Link href="/demo" className="primary-link">Book a working session <ArrowRight size={17}/></Link><Link href="#capabilities" className="secondary-link">Explore capabilities</Link></div></div>
      <div className="module-hero-shot image-motion"><ProductFrame src={props.image} width={props.imageWidth} height={props.imageHeight} alt={props.imageAlt} priority label={`${props.name} · Live product`} /></div>
    </div></section>

    <section className="module-outcomes"><div className="shell">{props.outcomes.map(item => <span key={item}><Check size={14}/>{item}</span>)}</div></section>

    <section className="module-capabilities" id="capabilities"><div className="shell"><Reveal className="module-heading"><h2>Built around the decision, not the transaction.</h2><p>Every workspace combines the facts, consequences, options, authority and next action needed to move work forward.</p></Reveal><div className="module-feature-grid">{props.features.map((item,index)=><Reveal key={item.title} className={`module-feature feature-${index+1}`} delay={index*70}><item.icon/><h3>{item.title}</h3><p>{item.copy}</p></Reveal>)}</div></div></section>

    <section className="module-proof"><div className="shell module-proof-grid"><div className="module-proof-copy"><Network/><h2>One module. Connected to the manufacturing whole.</h2><p>{props.name} works on the shared GenuineGigs canonical model, event backbone, relationship graph, factory state, provenance and governed action architecture. Decisions do not disappear into another silo.</p><Link href="/product">Explore the shared platform <ArrowRight size={16}/></Link></div><div className="module-flow">{props.flow.map((step,index)=><div key={step}><span>{String(index+1).padStart(2,"0")}</span><strong>{step}</strong></div>)}</div></div></section>

    <section className="module-final"><div className="shell"><h2>Bring one real {props.theme === "scm" ? "material risk" : props.theme === "procurement" ? "buying workflow" : "production disruption"}.</h2><p>We will map the source data, operating decision, governed action and measurable outcome with your team.</p><Link href="/demo" className="button button-light">See GenuineGigs on your operation <ArrowRight size={17}/></Link></div></section>
  </div>;
}
