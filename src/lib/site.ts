/** Shared site-wide configuration: nav links, contact details, CTA copy. */

/** Calendly booking link, themed to the dark site via URL params. */
const CALENDLY_URL =
  "https://calendly.com/hello-dentascale/dentascale-consultation?hide_gdpr_banner=1&background_color=0a0a0a&text_color=ffffff&primary_color=7c3aed";

export const siteConfig = {
  name: "DentaScale",
  tagline: "Paid ads & lead generation for dental practices.",
  email: "hello@dentascale.com",
  /** On file — intentionally NOT surfaced as a call CTA. Clients book via Calendly. */
  phone: "310-694-7875",
  social: {
    instagram: "https://instagram.com/dentascale",
    tiktok: "https://tiktok.com/@dentascale",
  },
  /** Calendly link used by the inline embed on /contact. */
  calendlyUrl: CALENDLY_URL,
  /** Primary CTA destination — all "Book a call" buttons open Calendly directly. */
  bookingUrl: CALENDLY_URL,
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
] as const;
