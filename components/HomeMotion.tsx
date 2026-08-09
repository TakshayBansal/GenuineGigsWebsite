"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function HomeMotion({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.fromTo(".next-hero-copy > *", { y: 34, opacity: 0 }, { y: 0, opacity: 1, duration: .95, stagger: .09, ease: "power3.out" });
    gsap.fromTo(".next-hero-visual", { x: 70, scale: .92, opacity: 0 }, { x: 0, scale: 1, opacity: 1, duration: 1.15, delay: .18, ease: "power3.out" });
    gsap.fromTo(".agent-intro h2", { opacity: .16 }, { opacity: 1, ease: "none", scrollTrigger: { trigger: ".agent-intro", start: "top 78%", end: "bottom 55%", scrub: true } });
    gsap.utils.toArray<HTMLElement>(".image-motion").forEach((item) => {
      gsap.fromTo(item, { scale: .84, opacity: .45 }, { scale: 1, opacity: 1, ease: "none", scrollTrigger: { trigger: item, start: "top 94%", end: "top 45%", scrub: true } });
    });
    const responsive = gsap.matchMedia();
    responsive.add("(min-width: 1001px)", () => {
      ScrollTrigger.create({ trigger: ".cycle-layout", start: "top 110px", end: "bottom bottom", pin: ".cycle-copy", pinSpacing: false });
    });
    return () => responsive.revert();
  }, { scope: root });
  return <div ref={root}>{children}</div>;
}
