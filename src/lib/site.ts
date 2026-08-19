/** Shared site-wide configuration: nav links, contact details, CTA copy. */

export const siteConfig = {
  name: "DentaScale",
  tagline: "Authentic branding and paid social for dental practices.",
  email: "hello@dentascale.net",
  /** Keyhan's direct address, used on outbound proposals so replies come to him. */
  founderEmail: "keyhan@dentascale.net",
  phone: "310-694-7875",
  /** Formspree endpoint the lead form submits to (leads land in Formspree). */
  formEndpoint: "https://formspree.io/f/xrewojbg",
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
