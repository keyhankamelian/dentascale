import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { InstagramIcon } from "@/components/icons/BrandIcons";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with DentaScale by email — we'll get back to you within 1 business day. Or find us on Instagram.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero label="Contact" title="Let's have a conversation" />

      <Section bg="secondary" id="start" className="scroll-mt-20">
        <Reveal className="mx-auto flex max-w-lg flex-col items-center gap-7 text-center">
          <p className="text-[15px] leading-relaxed text-text-secondary">
            The best way to reach us is by email. Tell us a bit about your
            practice and what you&apos;re looking for, and we&apos;ll get back to
            you within 1 business day.
          </p>

          <a
            href={`mailto:${siteConfig.email}`}
            className="group inline-flex items-center gap-3 rounded-full border border-card-border bg-card px-6 py-4 text-base font-medium text-white transition-colors hover:border-accent"
          >
            <span className="flex size-9 items-center justify-center rounded-full bg-accent-bg text-accent-light">
              <Mail size={18} aria-hidden="true" />
            </span>
            {siteConfig.email}
          </a>

          <div className="flex items-center gap-4 pt-1">
            <span className="text-[13px] text-text-tertiary">Or find us on</span>
            <Link
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DentaScale on Instagram"
              className="flex size-9 items-center justify-center rounded-full border border-border-divider bg-accent-bg text-accent-light transition-colors hover:border-accent hover:text-white"
            >
              <InstagramIcon size={16} />
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
