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

/**
 * @param qualified Whether the applicant met the spend threshold for a call.
 * Qualified applicants also fire a custom "QualifiedLead" event, so ads can be
 * optimised for practices that can actually afford the service.
 */
export function trackLead(qualified = false): void {
  if (typeof window === "undefined") return;

  // Meta (Facebook) Pixel — standard "Lead" event.
  if (typeof window.fbq === "function") {
    window.fbq("track", "Lead");
    if (qualified) window.fbq("trackCustom", "QualifiedLead");
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

/**
 * Fires when someone books a strategy session in the embedded Calendly
 * scheduler. Meta's standard "Schedule" event lets ads optimise for booked
 * calls rather than form fills.
 */
export function trackSchedule(): void {
  if (typeof window === "undefined") return;

  if (typeof window.fbq === "function") {
    window.fbq("track", "Schedule");
  }

  if (typeof window.gtag === "function") {
    window.gtag("event", "book_strategy_session");
  }
}
