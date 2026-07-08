import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { UtmCapture } from "@/components/UtmCapture";

// Analytics IDs — set these in .env.local (see .env.example). Tags only load
// when the corresponding ID is present.
const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const gtagId = GA_ID || ADS_ID;

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
    "Boutique digital marketing for dental practices. Month-to-month paid ads on Meta, TikTok & Google, transparent pricing from $1,000/mo, and our Lead-to-Chair System that turns leads into booked patients.",
  metadataBase: new URL("https://dentascale.example"),
  openGraph: {
    title: "DentaScale — Paid ads & lead generation for dental practices",
    description:
      "Month-to-month dental marketing. Transparent pricing from $1,000/mo. A system that turns leads into booked patients.",
    type: "website",
  },
  other: {
    // Meta Business Manager domain verification (Business Settings > Brand
    // Safety > Domains). Required to fully trust Pixel events for ad
    // optimization.
    "facebook-domain-verification": "krujuphewtywgtzjwlvvt1hooqxex7",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <head>
        {/* Meta (Facebook) Pixel */}
        {FB_PIXEL_ID && (
          <Script id="fb-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${FB_PIXEL_ID}');
fbq('track', 'PageView');`}
          </Script>
        )}
        {FB_PIXEL_ID && (
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        )}

        {/* Google gtag — GA4 and/or Google Ads */}
        {gtagId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
${GA_ID ? `gtag('config', '${GA_ID}');` : ""}
${ADS_ID ? `gtag('config', '${ADS_ID}');` : ""}`}
            </Script>
          </>
        )}
      </head>
      <body className="min-h-screen bg-bg-primary text-text-primary antialiased">
        <UtmCapture />
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
