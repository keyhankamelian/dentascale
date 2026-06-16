import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "DentaScale — Paid ads & lead generation for dental practices",
    template: "%s — DentaScale",
  },
  description:
    "Boutique digital marketing for dental practices. Month-to-month paid ads on Meta, TikTok & Google, transparent pricing from $750/mo, and our Lead-to-Chair System that turns leads into booked patients.",
  metadataBase: new URL("https://dentascale.example"),
  openGraph: {
    title: "DentaScale — Paid ads & lead generation for dental practices",
    description:
      "Month-to-month dental marketing. Transparent pricing from $750/mo. A system that turns leads into booked patients.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <body className="min-h-screen bg-bg-primary text-text-primary antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
