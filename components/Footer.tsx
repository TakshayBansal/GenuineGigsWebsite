import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Logo } from "./Logo";

const columns = [
  ["Platform", ["Overview", "/platform"], ["Supply chain", "/platform/supply-chain"], ["Predictive intelligence", "/platform/predictive-intelligence"], ["Recovery intelligence", "/platform/recovery-intelligence"]],
  ["Execution", ["Procurement", "/platform/procurement"], ["Operations", "/platform/operations"], ["Gigi AI", "/gigi"]],
  ["Trust", ["Integrations", "/integrations"], ["Security & Governance", "/security-governance"], ["About", "/about"]],
] as const;

export function Footer() { return <footer className="site-footer">
  <div className="shell footer-cta"><div><p className="kicker">Bring one real workflow</p><h2>See the risk. Choose the response. Verify recovery.</h2><p>Map one material shortage, supplier disruption, planning problem, or production recovery case with our team.</p></div><Link className="button button-light" href="/demo">Plan a tailored demo <ArrowUpRight size={17}/></Link></div>
  <div className="shell footer-grid"><div className="footer-brand"><Logo light/><p>The manufacturing decision and execution platform.</p></div>{columns.map(([title,...links]) => <div className="footer-column" key={title}><strong>{title}</strong>{links.map(([label,href]) => <Link href={href} key={href}>{label}</Link>)}</div>)}</div>
  <div className="shell footer-bottom"><span>© {new Date().getFullYear()} GenuineGigs</span><span>Evidence connected. Authority preserved. Recovery verified.</span></div>
</footer>; }
