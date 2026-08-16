import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { DemoForm } from "@/components/DemoForm";

export const metadata: Metadata = { title: "Book a Demo", description: "See live operational state, deviation detection, recovery decisions, governed execution, and verified outcomes in GenuineGigs." };
export default function DemoPage() { return <section className="section demo-page"><div className="shell demo-layout"><div className="demo-copy"><span className="eyebrow">Book a tailored demo</span><h1>Bring one real plant disruption.</h1><p>We’ll map how the signal arrives, how teams establish the operating truth, where recovery decisions happen today, and how GenuineGigs can make the response faster and verifiable.</p><div className="demo-points"><div className="demo-point"><CheckCircle2 size={18}/>A role-specific view of live plant and line state</div><div className="demo-point"><CheckCircle2 size={18}/>A machine, material, quality, or production recovery path</div><div className="demo-point"><CheckCircle2 size={18}/>Clear evidence, assumptions, authority, actions, and outcome verification</div></div></div><DemoForm/></div></section>; }
