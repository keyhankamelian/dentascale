/**
 * Conversion tracking for lead submissions.
 *
 * Base tags (Meta Pixel + Google gtag) are loaded in app/layout.tsx, gated on
 * the NEXT_PUBLIC_* env vars below. This helper fires the "lead" conversion
 * event on a SUCCESSFUL form submit (not on click) so only real leads count.
 */

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackLead(): void {
  if (typeof window === "undefined") return;

  // Meta (Facebook) Pixel — standard "Lead" event.
  if (typeof window.fbq === "function") {
    window.fbq("track", "Lead");
  }

  // Google — GA4 event + optional Google Ads conversion.
  if (typeof window.gtag === "function") {
    window.gtag("event", "generate_lead", { currency: "USD", value: 0 });

    const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
    const label = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;
    if (adsId && label) {
      window.gtag("event", "conversion", { send_to: `${adsId}/${label}` });
    }
  }
}
