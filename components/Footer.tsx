import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-cta">
        <div>
          <span className="eyebrow light">One manufacturing intelligence platform</span>
          <h2>Connect procurement, supply, and factory execution around the same operating truth.</h2>
        </div>
        <Link className="button button-light" href="/demo">Book a demo <ArrowUpRight size={17} /></Link>
      </div>
      <div className="shell footer-grid">
        <div className="footer-brand"><Logo light /><p>The intelligence and action layer for modern manufacturing.</p></div>
        <div className="footer-column"><span>Platform</span><Link href="/product">Core architecture</Link><Link href="/enterprise">Enterprise</Link><Link href="/about">About</Link></div>
        <div className="footer-column"><span>Products</span><Link href="/modules/procurement">Procurement</Link><Link href="/modules/scm">SCM</Link><Link href="/modules/operations">Operations</Link></div>
        <div className="footer-column"><span>Connect</span><Link href="/demo">Book a demo</Link><Link href="/about">Our approach</Link></div>
        <div className="footer-column"><span>Core</span><p>Canonical factory model</p><p>Relationship graph</p><p>Governed actions</p><p>Verified outcomes</p></div>
      </div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} GenuineGigs</span><span>Observe. Understand. Decide. Act. Verify.</span></div>
    </footer>
  );
}
