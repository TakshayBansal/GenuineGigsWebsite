"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger, useGSAP);

export function HomeMotion({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.from(".hero-copy > *", { y:32, opacity:0, duration:.85, stagger:.08, ease:"power3.out" });
    gsap.from(".hero-proof", { x:65, scale:.9, opacity:0, duration:1.1, delay:.15, ease:"power3.out" });
    gsap.utils.toArray<HTMLElement>(".scroll-image").forEach((image) => gsap.fromTo(image,{scale:.82,opacity:.35},{scale:1,opacity:1,ease:"none",scrollTrigger:{trigger:image,start:"top 92%",end:"top 48%",scrub:true}}));
    const mm=gsap.matchMedia();
    mm.add("(min-width: 1051px)",()=>ScrollTrigger.create({trigger:".workflow-grid",start:"top 105px",end:"bottom bottom",pin:".workflow-copy",pinSpacing:false}));
    return()=>mm.revert();
  },{scope:root});
  return <div ref={root}>{children}</div>;
}
