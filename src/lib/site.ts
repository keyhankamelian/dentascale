/** Shared site-wide configuration: nav links, contact details, CTA copy. */

export const siteConfig = {
  name: "DentaScale",
  tagline: "Marketing and patient acquisition systems for dental.",
  email: "hello@dentascale.net",
  /** Keyhan's direct address, used on outbound proposals so replies come to him. */
  founderEmail: "keyhan@dentascale.net",
  phone: "310-694-7875",
  /** Formspree endpoint the lead form submits to (leads land in Formspree). */
  formEndpoint: "https://formspree.io/f/xrewojbg",
  /**
   * Primary CTA destination: every "Apply to work with us" button goes to the
   * contact page, which holds the lead form.
   */
  bookingUrl: "/contact",
  /**
   * Calendly scheduling link for the free Growth Plan session. Leave empty to
   * fall back to plain email/phone contact details; the proposal page renders
   * the scheduler only once this is set.
   */
  calendlyUrl: "https://calendly.com/dentascale/30min",
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
] as const;
