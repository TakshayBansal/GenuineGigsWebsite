import type { Metadata } from "next";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Analytics } from "@vercel/analytics/next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3001";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "GenuineGigs | Manufacturing Recovery OS", template: "%s | GenuineGigs" },
  description: "The manufacturing recovery operating system: live operational state, bounded forecasts, governed recovery actions, and verified outcomes.",
  icons: { icon: "/brand/logo.png", apple: "/brand/logo.png" },
  openGraph: {
    title: "GenuineGigs | Manufacturing Recovery OS",
    description: "Turn plant disruption into governed action and verified recovery.",
    type: "website",
    siteName: "GenuineGigs",
    images: [{ url: "/product/line-recovery-workspace.png", width: 1918, height: 875, alt: "GenuineGigs line recovery workspace with production trajectory and operational state" }],
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
    description: "A manufacturing recovery operating system connecting operational state, deviation intelligence, governed actions, and verified outcomes.",
    featureList: ["Role-specific plant operations", "Production forecasting", "Deviation detection", "Recovery intelligence", "Material readiness", "Governed execution", "Verified recovery"],
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
