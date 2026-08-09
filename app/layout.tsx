import type { Metadata } from "next";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3001";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "GenuineGigs | Agentic Procurement OS", template: "%s | GenuineGigs" },
  description: "The agentic procurement operating system for manufacturers: proactive cycle intelligence, prepared work, governed execution, and human-controlled decisions.",
  icons: { icon: "/brand/logo.png", apple: "/brand/logo.png" },
  openGraph: {
    title: "GenuineGigs | Agentic Procurement OS",
    description: "Move every procurement cycle forward with proactive agents, prepared work, and governed human decisions.",
    type: "website",
    siteName: "GenuineGigs",
    images: [{ url: "/product/my-day-real-v3.png", width: 1847, height: 851, alt: "GenuineGigs My Day workspace with prepared work and mascot companion" }],
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
    description: "An agentic procurement operating system for manufacturing.",
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
