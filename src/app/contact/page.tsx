import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { CalendlyEmbed } from "@/components/sections/CalendlyEmbed";
import { InstagramIcon, TikTokIcon } from "@/components/icons/BrandIcons";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free 30-minute strategy call with DentaScale, or reach us by email, phone, Instagram, or TikTok.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero label="Contact" title="Let's have a conversation" />

      <Section bg="secondary">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]">
          {/* Left: intro + Calendly embed placeholder */}
          <Reveal>
            <div className="flex flex-col gap-6">
              <p className="text-[15px] leading-relaxed text-text-secondary">
                Pick a time that works for you and we&apos;ll talk through your
                practice, your goals, and whether we&apos;re the right fit. No
                hard sell — just a 30-minute conversation. Prefer email? Our
                details are on the right.
              </p>

              {/* Calendly inline embed — books a call without leaving the page. */}
              <CalendlyEmbed url={siteConfig.calendlyUrl} height={700} />
            </div>
          </Reveal>

          {/* Right: contact info */}
          <Reveal delay={0.1}>
            <Card interactive={false} className="flex flex-col gap-6 p-7">
              <h2 className="text-lg font-medium text-white">Reach us directly</h2>

              <ul className="flex flex-col gap-5">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="group flex items-center gap-3 text-sm text-text-secondary transition-colors hover:text-white"
                  >
                    <span className="flex size-9 items-center justify-center rounded-full border border-border-divider bg-accent-bg text-accent-light">
                      <Mail size={16} aria-hidden="true" />
                    </span>
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <Link
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-sm text-text-secondary transition-colors hover:text-white"
                  >
                    <span className="flex size-9 items-center justify-center rounded-full border border-border-divider bg-accent-bg text-accent-light">
                      <InstagramIcon size={16} />
                    </span>
                    @dentascale
                  </Link>
                </li>
                <li>
                  <Link
                    href={siteConfig.social.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-sm text-text-secondary transition-colors hover:text-white"
                  >
                    <span className="flex size-9 items-center justify-center rounded-full border border-border-divider bg-accent-bg text-accent-light">
                      <TikTokIcon size={16} />
                    </span>
                    @dentascale
                  </Link>
                </li>
              </ul>
            </Card>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
