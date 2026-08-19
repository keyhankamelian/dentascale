"use client";

import Script from "next/script";
import { siteConfig } from "@/lib/site";

/**
 * Inline Calendly scheduler, themed to match the site.
 *
 * Renders nothing when no scheduling link is configured, so the surrounding
 * section can fall back to plain contact details rather than showing an empty
 * widget. Note that the Calendly script and iframe both need explicit CSP
 * allowances — see the frame-src entry in next.config.ts.
 */
export function CalendlyEmbed() {
  const { calendlyUrl } = siteConfig;
  if (!calendlyUrl) return null;

  // Calendly reads its palette from query params, so the scheduler doesn't
  // flash white inside a dark page.
  const themed = `${calendlyUrl}?background_color=0f0f0f&text_color=e8e8e8&primary_color=7c3aed&hide_gdpr_banner=1`;

  return (
    <>
      <div
        className="calendly-inline-widget w-full overflow-hidden rounded-[12px] border border-card-border"
        data-url={themed}
        style={{ minWidth: 320, height: 700 }}
        data-print-hide
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  );
}
