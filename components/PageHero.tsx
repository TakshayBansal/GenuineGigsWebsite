import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function PageHero({ eyebrow, title, description, showCta = true }: { eyebrow: string; title: React.ReactNode; description: string; showCta?: boolean }) {
  return (
    <section className="page-hero dark-section">
      <div className="noise" />
      <div className="shell page-hero-inner">
        <span className="eyebrow light">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        {showCta && <Link href="/demo" className="button button-light">Book a demo <ArrowRight size={17} /></Link>}
      </div>
    </section>
  );
}
