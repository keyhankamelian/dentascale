import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { LeadFormSection } from "@/components/sections/LeadFormSection";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with DentaScale by email or phone and we'll get back to you within 1 business day.",
};

const contactLinkClass =
  "group inline-flex items-center gap-3 rounded-full border border-card-border bg-card px-6 py-4 text-base font-medium text-white transition-colors hover:border-accent";
const contactIconClass =
  "flex size-9 items-center justify-center rounded-full bg-accent-bg text-accent-light";

export default function ContactPage() {
  return (
    <>
      <PageHero label="Contact" title="Let's have a conversation" />

      <Section bg="secondary">
        <Reveal className="mx-auto flex max-w-lg flex-col items-center gap-7 text-center">
          <p className="text-[15px] leading-relaxed text-text-secondary">
            Tell us a bit about your practice and what you&apos;re looking for.
            We&apos;ll get back to you within 1 business day.
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <a href={`mailto:${siteConfig.email}`} className={contactLinkClass}>
              <span className={contactIconClass}>
                <Mail size={18} aria-hidden="true" />
              </span>
              {siteConfig.email}
            </a>

            <a
              href={`tel:+1${siteConfig.phone.replace(/\D/g, "")}`}
              className={contactLinkClass}
            >
              <span className={contactIconClass}>
                <Phone size={18} aria-hidden="true" />
              </span>
              {siteConfig.phone}
            </a>
          </div>

          <p className="text-[13px] text-text-tertiary">
            Prefer to write it out? Use the form below.
          </p>
        </Reveal>
      </Section>

      <LeadFormSection bg="primary" />
    </>
  );
}
