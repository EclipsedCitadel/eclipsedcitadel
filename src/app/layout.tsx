import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Lato } from "next/font/google";

// Load fonts
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Global SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://www.eclipsedcitadel.com"), // ✅ Fix for Open Graph + Twitter
  title: "Eclipsed Citadel | AI-Powered Content Studio for Small Businesses",
  description:
    "Affordable, automated content creation—videos, graphics, blogs—designed to help your business grow.",
  openGraph: {
    title: "Eclipsed Citadel | AI-Powered Content Studio",
    description:
      "Agency-crafted content with AI speed. Discover what Eclipsed Citadel can create for your business.",
    url: "https://eclipsedcitadel.com",
    siteName: "Eclipsed Citadel",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Eclipsed Citadel - Unleash Your Creation",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eclipsed Citadel",
    description:
      "AI-powered content marketing, crafted for small businesses.",
    images: ["/og-image.png"],
  },
};

// Layout wrapper
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lato.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
