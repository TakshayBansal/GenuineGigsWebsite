import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { DemoForm } from "@/components/DemoForm";

export const metadata: Metadata = { title: "Book a Demo", description: "See proactive procurement cycles, prepared specialist work, the role companion, policy controls, and human-confirmed execution in GenuineGigs." };
export default function DemoPage() { return <section className="section demo-page"><div className="shell demo-layout"><div className="demo-copy"><span className="eyebrow">Book a tailored demo</span><h1>Bring one real procurement cycle.</h1><p>We’ll map how a requirement moves today, show where GenuineGigs can notice, prepare, coordinate, and propose, and make the human and policy boundaries explicit.</p><div className="demo-points"><div className="demo-point"><CheckCircle2 size={18}/>A My Day briefing based on role and current work</div><div className="demo-point"><CheckCircle2 size={18}/>A requirement-to-order cycle with specialist preparation</div><div className="demo-point"><CheckCircle2 size={18}/>A clear view of evidence, policy, confirmation, and manual controls</div></div></div><DemoForm/></div></section>; }
