/** Shared site-wide configuration: nav links, contact details, CTA copy. */

export const siteConfig = {
  name: "DentaScale",
  tagline: "Paid ads & lead generation for dental practices.",
  email: "hello@dentascale.agency",
  /** On file — intentionally NOT surfaced as a call CTA. Leads reach us via the form/email. */
  phone: "310-694-7875",
  social: {
    instagram: "https://instagram.com/dentascale",
  },
  /**
   * Primary CTA destination — all "Book a call" buttons scroll to the lead
   * form (#start), which sits at the bottom of every page.
   */
  bookingUrl: "#start",
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
] as const;
