import type { LucideIcon } from "lucide-react";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { CTASection } from "./CTASection";
import { ProductFrame } from "./ProductFrame";

type Capability = { icon: LucideIcon; title: string; copy: string };
export function CapabilityPage({ kicker,title,description,image,imageAlt,imageWidth=1917,imageHeight=877,outcomes,sectionTitle,sectionCopy,capabilities,workflow,proofTitle,proofCopy }: { kicker:string;title:string;description:string;image:string;imageAlt:string;imageWidth?:number;imageHeight?:number;outcomes:string[];sectionTitle:string;sectionCopy:string;capabilities:Capability[];workflow:string[];proofTitle:string;proofCopy:string }) {
  return <>
    <section className="page-hero"><div className="shell page-hero-inner"><p className="kicker">{kicker}</p><h1>{title}</h1><p>{description}</p><div className="hero-actions" style={{justifyContent:"center"}}><Link className="button button-light" href="/demo">Bring us one workflow <ArrowRight size={17}/></Link><Link className="secondary-link" href="#capabilities">Explore capabilities</Link></div></div></section>
    <div className="shell page-proof"><ProductFrame priority src={image} width={imageWidth} height={imageHeight} alt={imageAlt} label={kicker}/></div>
    <section className="section"><div className="shell"><div className="flow-line">{outcomes.map(x=><span key={x}><Check size={12}/> {x}</span>)}</div></div></section>
    <section className="section" id="capabilities"><div className="shell"><div className="chapter-head"><h2>{sectionTitle}</h2><p>{sectionCopy}</p></div><div className="feature-grid">{capabilities.map(({icon:Icon,title:cardTitle,copy})=><article className="feature-card" key={cardTitle}><Icon/><h3>{cardTitle}</h3><p>{copy}</p></article>)}</div></div></section>
    <section className="section dark-section"><div className="shell split"><div><p className="kicker">Connected workflow</p><h2>{proofTitle}</h2><p>{proofCopy}</p></div><div className="timeline">{workflow.map((step,i)=><div className="timeline-row" key={step}><span>{String(i+1).padStart(2,"0")}</span><strong>{step}</strong><p>{i===workflow.length-1?"Fresh evidence confirms whether the result holds.":"Context and responsibility remain attached."}</p></div>)}</div></div></section>
    <CTASection/>
  </>;
}
