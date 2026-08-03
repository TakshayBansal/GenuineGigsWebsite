import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  const productUrl = process.env.NEXT_PUBLIC_PRODUCT_APP_URL || "http://localhost:3000/login";
  return (
    <footer className="site-footer">
      <div className="shell footer-cta">
        <div>
          <span className="eyebrow light">Built for the work behind every order</span>
          <h2>Give manufacturing work a system of its own.</h2>
        </div>
        <Link className="button button-light" href="/demo">Book a demo <ArrowUpRight size={17} /></Link>
      </div>
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Logo light />
          <p>The governed operations layer above your ERP.</p>
        </div>
        <div className="footer-column"><span>Explore</span><Link href="/product">Product</Link><Link href="/enterprise">Enterprise</Link><Link href="/about">About</Link></div>
        <div className="footer-column"><span>Connect</span><Link href="/demo">Book a demo</Link><a href={productUrl}>Sign in</a></div>
        <div className="footer-column"><span>Platform</span><p>Procurement</p><p>Role agents</p><p>ERP integration</p></div>
      </div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} GenuineGigs</span><span>Human-controlled. Evidence-backed. ERP-safe.</span></div>
    </footer>
  );
}
