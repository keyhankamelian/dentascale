import type { Metadata } from "next";
import Image from "next/image";
import { Waves, Globe, PenLine, Timer, Repeat, Filter, type LucideIcon } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { stuckPoints } from "@/lib/content";

const stuckIcons: Record<(typeof stuckPoints)[number]["icon"], LucideIcon> = {
  waves: Waves,
  globe: Globe,
  pen: PenLine,
  timer: Timer,
  repeat: Repeat,
  filter: Filter,
};

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Keyhan Kamelian, founder of DentaScale. Six years in digital marketing, now focused exclusively on growing independent dental practices.",
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
                Why dental, and why now
              </h2>
              <p className="text-[15px] leading-relaxed text-text-secondary">
                I&apos;m Keyhan, founder of DentaScale.
              </p>
              <p className="text-[15px] leading-relaxed text-text-secondary">
                I&apos;ve spent six years running paid ad campaigns for small
                and medium-sized businesses: managing budgets, writing
                creative, optimizing funnels, and turning ad spend into
                measurable revenue across local service businesses, e-commerce
                brands, and entertainment.
              </p>
              <p className="text-[15px] leading-relaxed text-text-secondary">
                Now I focus exclusively on dental. The combination of high
                patient value, clear targeting, and an industry underserved by
                its current options made it the natural place to go deep.
                DentaScale is built around one principle: give every practice
                the kind of attention and results that get lost when
                you&apos;re one of hundreds of accounts on someone
                else&apos;s roster.
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
          subtitle="Most practices lose Invisalign consults in the same six places. We built DentaScale to close every one of them."
        />

        <ul className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {stuckPoints.map((point, i) => {
            const Icon = stuckIcons[point.icon];
            return (
              <Reveal as="li" key={point.title} delay={(i % 3) * 0.1}>
                <Card as="article" className="flex h-full flex-col gap-4 p-7">
                  <span className="flex size-11 items-center justify-center rounded-full border border-border-divider bg-accent-bg text-accent-light">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="text-xl font-medium text-white">
                    {point.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-text-muted">
                    {point.body}
                  </p>
                </Card>
              </Reveal>
            );
          })}
        </ul>
      </Section>

      <ClosingCta bg="secondary" />
    </>
  );
}
