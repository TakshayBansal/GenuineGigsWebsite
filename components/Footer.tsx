import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-cta">
        <div>
          <span className="eyebrow light">Built for the work between signal and recovery</span>
          <h2>See your operation move from disruption to verified recovery.</h2>
        </div>
        <Link className="button button-light" href="/demo">Book a demo <ArrowUpRight size={17} /></Link>
      </div>
      <div className="shell footer-grid">
        <div className="footer-brand"><Logo light /><p>The manufacturing recovery operating system.</p></div>
        <div className="footer-column"><span>Explore</span><Link href="/product">Product</Link><Link href="/enterprise">Enterprise</Link><Link href="/about">About</Link></div>
        <div className="footer-column"><span>Connect</span><Link href="/demo">Book a demo</Link><Link href="/about">Our approach</Link></div>
        <div className="footer-column"><span>Platform</span><p>Operational state</p><p>Recovery intelligence</p><p>Governed execution</p><p>Verified outcomes</p></div>
      </div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} GenuineGigs</span><span>Grounded. Governed. Verified.</span></div>
    </footer>
  );
}
