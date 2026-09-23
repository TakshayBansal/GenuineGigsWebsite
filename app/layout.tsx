import type { Metadata } from "next";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Analytics } from "@vercel/analytics/next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://genuinegigs.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "GenuineGigs | Manufacturing Decision & Execution Platform", template: "%s | GenuineGigs" },
  description: "See supply and production risk early, compare practical recovery plans, coordinate approved action, and verify the outcome.",
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "512x512" }],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
  openGraph: {
    title: "GenuineGigs | Manufacturing Decision & Execution Platform",
    description: "From supply and production risk to governed action and verified recovery.",
    type: "website",
    siteName: "GenuineGigs",
    images: [{ url: "/product/supply-horizon-current.png", width: 1917, height: 881, alt: "GenuineGigs Supply Horizon planning workspace" }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "GenuineGigs",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "A manufacturing decision and execution platform connecting supply-chain planning, recovery, procurement, factory operations, governed action, and verified outcomes.",
    featureList: ["Supply-chain planning", "Predictive intelligence", "Recovery plan comparison", "Procurement execution", "Factory operations", "Governed execution", "Verified outcomes"],
  };

  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        <main id="main-content" className="site-main">{children}</main>
        <Footer />
        <Analytics />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
