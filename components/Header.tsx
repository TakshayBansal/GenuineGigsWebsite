"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "/product", label: "Platform" },
  { href: "/modules/procurement", label: "Procurement" },
  { href: "/modules/scm", label: "SCM" },
  { href: "/modules/operations", label: "Operations" },
  { href: "/enterprise", label: "Enterprise" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    let previous = window.scrollY;
    const onScroll = () => {
      const current = window.scrollY;
      setHidden(current > 150 && current > previous + 4);
      previous = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header-shell ${hidden && !open ? "is-hidden" : ""}`}>
      <div className="site-header">
      <div className="header-inner">
        <Logo />
        <button className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Main navigation">
          <div className="nav-links">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className={pathname === link.href || pathname.startsWith(`${link.href}/`) ? "active" : ""}>{link.label}</Link>
            ))}
          </div>
          <div className="nav-actions">
            <Link href="/demo" className="button button-small">Book a demo <ArrowUpRight size={15} /></Link>
          </div>
        </nav>
      </div></div>
    </header>
  );
}
