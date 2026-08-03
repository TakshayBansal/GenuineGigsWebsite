"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function HomeMotion({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    gsap.fromTo(".home-hero-copy > *", { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: .85, stagger: .08, ease: "power3.out" });
    gsap.fromTo(".home-product-shot", { y: 42, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: .18, ease: "power3.out" });
    gsap.utils.toArray<HTMLElement>(".workflow-panel").forEach((panel) => {
      gsap.fromTo(panel, { y: 32, opacity: .72 }, { y: 0, opacity: 1, duration: .8, ease: "power2.out", scrollTrigger: { trigger: panel, start: "top 86%", once: true } });
    });
  }, { scope: root });
  return <div ref={root}>{children}</div>;
}
