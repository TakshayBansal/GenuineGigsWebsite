"use client";

import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const platformLinks = [
  ["/platform", "Platform overview", "The operational loop from signal to recovery"],
  ["/platform/supply-chain", "Supply chain planning", "See dated material and production exposure"],
  ["/platform/predictive-intelligence", "Predictive intelligence", "Plan for expected and stress demand"],
  ["/platform/recovery-intelligence", "Recovery intelligence", "Compare feasible responses on one snapshot"],
  ["/platform/procurement", "Procurement execution", "Carry approved decisions through receipt"],
  ["/platform/operations", "Factory operations", "Coordinate and verify production recovery"],
] as const;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);
  useEffect(() => { setOpen(false); setPlatformOpen(false); }, [pathname]);
  return <header className="site-header-shell"><div className="site-header"><div className="header-inner">
    <Logo />
    <button className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Main navigation">
      <div className={`nav-dropdown ${platformOpen ? "is-open" : ""}`}>
        <button onClick={() => setPlatformOpen(!platformOpen)} aria-expanded={platformOpen} className={pathname.startsWith("/platform") ? "active" : ""}>Platform <ChevronDown size={14}/></button>
        <div className="mega-nav"><div className="mega-intro"><strong>From signal to verified recovery.</strong><p>Connect planning evidence, practical decisions, controlled execution, and observed outcomes.</p></div><div className="mega-links">{platformLinks.map(([href,label,copy]) => <Link href={href} key={href}><strong>{label}</strong><span>{copy}</span></Link>)}</div></div>
      </div>
      <Link className={pathname === "/gigi" ? "active" : ""} href="/gigi">Gigi AI</Link>
      <Link className={pathname === "/integrations" ? "active" : ""} href="/integrations">Integrations</Link>
      <Link className={pathname === "/security-governance" ? "active" : ""} href="/security-governance">Security & Governance</Link>
      <Link href="/demo" className="button button-small">Book a demo <ArrowUpRight size={15}/></Link>
    </nav>
  </div></div></header>;
}
