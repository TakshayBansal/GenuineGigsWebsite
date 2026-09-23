import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://genuinegigs.com";
  return ["", "/platform", "/platform/supply-chain", "/platform/predictive-intelligence", "/platform/recovery-intelligence", "/platform/procurement", "/platform/operations", "/gigi", "/integrations", "/security-governance", "/about", "/demo"].map((path) => ({ url:`${base}${path}`, lastModified:new Date(), changeFrequency:path ? "monthly" : "weekly", priority:path ? .8 : 1 }));
}
