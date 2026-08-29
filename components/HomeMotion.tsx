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
    gsap.fromTo(".platform-hero-copy > *", { y: 34, opacity: 0 }, { y: 0, opacity: 1, duration: .95, stagger: .09, ease: "power3.out" });
    gsap.fromTo(".platform-hero-visual", { x: 70, scale: .92, opacity: 0 }, { x: 0, scale: 1, opacity: 1, duration: 1.15, delay: .18, ease: "power3.out" });
    gsap.fromTo(".core-intro h2", { opacity: .16 }, { opacity: 1, ease: "none", scrollTrigger: { trigger: ".core-intro", start: "top 78%", end: "bottom 55%", scrub: true } });
    gsap.utils.toArray<HTMLElement>(".image-motion").forEach((item) => gsap.fromTo(item, { scale: .92, opacity: .55 }, { scale: 1, opacity: 1, ease: "none", scrollTrigger: { trigger: item, start: "top 94%", end: "top 52%", scrub: true } }));
    const responsive = gsap.matchMedia();
    responsive.add("(min-width: 1001px)", () => ScrollTrigger.create({ trigger: ".module-story-grid", start: "top 110px", end: "bottom bottom", pin: ".module-story-intro", pinSpacing: false }));
    return () => responsive.revert();
  }, { scope: root });
  return <div ref={root}>{children}</div>;
}
