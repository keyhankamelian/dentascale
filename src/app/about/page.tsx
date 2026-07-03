import type { Metadata } from "next";
import Image from "next/image";
import { Building2, Bot } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { LeadFormSection } from "@/components/sections/LeadFormSection";
import { bothPathsFail } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Keyhan Kamelian, founder of DentaScale — five years in digital marketing, now focused exclusively on growing independent dental practices.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero label="Meet Your Agency" title="Keyhan Kamelian, Founder" />

      {/* Founder photo + bio */}
      <Section bg="secondary">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <Reveal>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[12px] border border-card-border bg-card">
              <Image
                src="/founder.jpg"
                alt="Keyhan Kamelian, founder of DentaScale"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-top"
                priority
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl font-light text-white">
                Why dental — and why now
              </h2>
              <p className="text-[15px] leading-relaxed text-text-secondary">
                I&apos;m Keyhan, founder of DentaScale.
              </p>
              <p className="text-[15px] leading-relaxed text-text-secondary">
                Since 2020 I&apos;ve been running paid ad campaigns as a
                freelance digital marketer for small and medium-sized businesses
                across a range of industries — from local service businesses to
                e-commerce brands to entertainment.
              </p>
              <p className="text-[15px] leading-relaxed text-text-secondary">
                Last year I started specializing in dental. The combination of
                high patient value, clear targeting, and an industry mostly
                being served by either expensive generalist agencies or generic
                AI tools made it the perfect space to focus. Since then
                I&apos;ve built DentaScale around one principle: deliver the kind
                of campaigns big agencies charge a fortune for, at a price that
                actually makes sense for independent practices.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Why both paths fail */}
      <Section bg="primary">
        <SectionHeading
          label="The Problem"
          title="Why both paths fail"
          subtitle="Dental practices are usually stuck choosing between two bad options. We built DentaScale to be the third."
        />

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-2">
          <Reveal as="div">
            <Card as="article" className="flex h-full flex-col gap-4 p-7">
              <span className="flex size-11 items-center justify-center rounded-full border border-border-divider bg-accent-bg text-accent-light">
                <Building2 size={20} aria-hidden="true" />
              </span>
              <h3 className="text-xl font-medium text-white">
                {bothPathsFail.agencies.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-text-muted">
                {bothPathsFail.agencies.body}
              </p>
            </Card>
          </Reveal>

          <Reveal as="div" delay={0.1}>
            <Card as="article" className="flex h-full flex-col gap-4 p-7">
              <span className="flex size-11 items-center justify-center rounded-full border border-border-divider bg-accent-bg text-accent-light">
                <Bot size={20} aria-hidden="true" />
              </span>
              <h3 className="text-xl font-medium text-white">
                {bothPathsFail.ai.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-text-muted">
                {bothPathsFail.ai.body}
              </p>
            </Card>
          </Reveal>
        </div>
      </Section>

      <LeadFormSection bg="secondary" />
    </>
  );
}
