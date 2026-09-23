import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTASection({ title = "Bring one real planning or recovery workflow.", copy = "See how GenuineGigs connects the evidence, calculates the exposure, compares the response, and carries the decision through verified recovery." }: { title?: string; copy?: string }) {
  return <section className="cta-section"><div className="shell cta-grid"><div><h2>{title}</h2><p>{copy}</p></div><div className="cta-actions"><Link className="button button-light" href="/demo">Plan a tailored demo <ArrowRight size={17}/></Link><Link className="text-arrow" href="/platform">See the platform <ArrowRight size={15}/></Link></div></div></section>;
}
