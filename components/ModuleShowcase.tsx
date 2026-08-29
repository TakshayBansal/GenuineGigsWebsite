"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const modules = [
  { key:"procurement", number:"01", name:"Procurement", statement:"Turn requirements into accountable supplier decisions.", copy:"Run RFQs, compare quotations, govern supplier selection and carry every approved decision through purchase order and receipt.", image:"/product/modules/procurement.png", width:1600, height:905, href:"/modules/procurement", points:["RFQ and quotation intelligence","Approval-aware purchasing","Receipt and supplier outcomes"] },
  { key:"scm", number:"02", name:"Supply chain", statement:"See the next 210 days before they break.", copy:"Read material coverage as a time horizon—not a static stock table. Locate shortages, incoming supply, intervention windows and affected production in one view.", image:"/product/modules/scm-horizon.png", width:1920, height:1080, href:"/modules/scm", points:["Time-phased material state","Scenario and intervention planning","Production impact visibility"] },
  { key:"operations", number:"03", name:"Operations", statement:"Turn factory disruption into verified recovery.", copy:"Coordinate production exceptions, recovery actions and actual outcomes across lines, equipment, work orders and the teams responsible for recovery.", image:"/product/modules/operations-recovery.png", width:1920, height:900, href:"/modules/operations", points:["Live production exceptions","Cross-functional recovery","Outcome verification"] },
] as const;

export function ModuleShowcase(){
  const [active, setActive] = useState(1);
  const module = modules[active];
  return <section className="new-modules"><div className="shell">
    <div className="new-modules-head"><p className="new-section-index">02 / Systems of work</p><h2>Go deep where the work happens.<br/>Stay connected underneath.</h2></div>
    <div className="new-module-tabs" role="tablist" aria-label="GenuineGigs modules">{modules.map((item,index)=><button key={item.key} role="tab" aria-selected={active===index} onClick={()=>setActive(index)}><span>{item.number}</span>{item.name}</button>)}</div>
    <div className="new-module-display">
      <div className="new-module-copy" key={`${module.key}-copy`}><p className="new-module-label">GenuineGigs {module.name}</p><h3>{module.statement}</h3><p>{module.copy}</p><ul>{module.points.map(point=><li key={point}>{point}</li>)}</ul><Link href={module.href}>Explore {module.name} <ArrowRight size={15}/></Link></div>
      <div className="new-module-media" key={`${module.key}-media`}><Image src={module.image} width={module.width} height={module.height} alt={`GenuineGigs ${module.name} product workspace`} quality={100} unoptimized/></div>
    </div>
  </div></section>;
}
