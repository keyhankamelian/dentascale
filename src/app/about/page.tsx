import type { Metadata } from "next";
import Image from "next/image";
import { Building2, Bot, EyeOff } from "lucide-react";
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
                I&apos;ve spent six years running paid ad campaigns for small
                and medium-sized businesses — managing budgets, writing
                creative, optimizing funnels, and turning ad spend into
                measurable revenue across local service businesses, e-commerce
                brands, and entertainment.
              </p>
              <p className="text-[15px] leading-relaxed text-text-secondary">
                Now I focus exclusively on dental. The combination of high
                patient value, clear targeting, and an industry underserved by
                its current options made it the natural place to go deep.
                DentaScale is built around one principle: deliver the kind of
                campaigns big agencies charge a fortune for, at a price that
                actually makes sense for independent practices.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Why practices stay stuck */}
      <Section bg="primary">
        <SectionHeading
          label="The Problem"
          title="Why practices stay stuck"
          subtitle="Dental practices are usually stuck in one of three places. We built DentaScale to be the way out."
        />

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-3">
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

          <Reveal as="div" delay={0.2}>
            <Card as="article" className="flex h-full flex-col gap-4 p-7">
              <span className="flex size-11 items-center justify-center rounded-full border border-border-divider bg-accent-bg text-accent-light">
                <EyeOff size={20} aria-hidden="true" />
              </span>
              <h3 className="text-xl font-medium text-white">
                {bothPathsFail.noMarketing.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-text-muted">
                {bothPathsFail.noMarketing.body}
              </p>
            </Card>
          </Reveal>
        </div>
      </Section>

      <LeadFormSection bg="secondary" />
    </>
  );
}
