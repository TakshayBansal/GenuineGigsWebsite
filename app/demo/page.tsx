import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { DemoForm } from "@/components/DemoForm";

export const metadata: Metadata = { title: "Book a Demo", description: "See how GenuineGigs can connect manufacturing work, role agents, approvals, evidence, and ERP systems." };
export default function DemoPage() { return <section className="section demo-page"><div className="shell demo-layout"><div className="demo-copy"><span className="eyebrow">Book a tailored demo</span><h1>Let’s talk about the work around your ERP.</h1><p>We’ll focus the conversation on your operating model, current systems, and the workflow where accountable assistance can make the biggest difference.</p><div className="demo-points"><div className="demo-point"><CheckCircle2 size={18}/>A walkthrough grounded in real manufacturing work</div><div className="demo-point"><CheckCircle2 size={18}/>A clear view of governance and human controls</div><div className="demo-point"><CheckCircle2 size={18}/>No invented ROI promises or generic AI theatre</div></div></div><DemoForm/></div></section>; }
