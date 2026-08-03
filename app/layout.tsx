import type { Metadata } from "next";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3001";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "GenuineGigs | Manufacturing Agent OS", template: "%s | GenuineGigs" },
  description: "A governed manufacturing operations layer where people, role agents, workflows, evidence, and ERP systems work together.",
  icons: { icon: "/brand/logo.png", apple: "/brand/logo.png" },
  openGraph: {
    title: "GenuineGigs | Manufacturing Agent OS",
    description: "Move manufacturing work forward with governed role agents, connected workflows, and human-controlled decisions.",
    type: "website",
    siteName: "GenuineGigs",
    images: [{ url: "/product/approval-centre.png", width: 1672, height: 941, alt: "GenuineGigs approval centre" }],
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
    description: "A governed role-agent operating layer for manufacturing work.",
  };

  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        <main id="main-content" className="site-main">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
