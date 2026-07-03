import type { Metadata } from "next";
import { Quote } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { LeadFormSection } from "@/components/sections/LeadFormSection";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real results from real dental practices. 42 qualified leads at $7.38 each for an orthodontic practice — 90% below the industry average.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        label="Case Studies"
        title="Results that speak for themselves"
        subtitle="No inflated numbers — just what we delivered, side by side with the industry average."
      />

      {/* Featured case study */}
      <Section bg="secondary">
        <div className="mx-auto max-w-3xl">
          {/* Practice info */}
          <Reveal>
            <div className="flex flex-col gap-3">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border-divider bg-accent-bg px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-accent-light">
                Featured · Orthodontics
              </span>
              <h2 className="text-2xl font-light text-white md:text-3xl">
                Orthodontic practice — 30-day campaign
              </h2>
              <dl className="mt-2 grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-3">
                <div>
                  <dt className="text-text-tertiary">Industry</dt>
                  <dd className="text-text-secondary">Orthodontics</dd>
                </div>
                <div>
                  <dt className="text-text-tertiary">Channels</dt>
                  <dd className="text-text-secondary">Meta &amp; Instagram</dd>
                </div>
                <div>
                  <dt className="text-text-tertiary">Timeframe</dt>
                  <dd className="text-text-secondary">May 2026 · 30 days</dd>
                </div>
              </dl>
            </div>
          </Reveal>

          {/* Stats + comparisons */}
          <div className="mt-8">
            <CaseStudyCard />
          </div>

          {/* Client testimonial */}
          <Reveal className="mt-8" delay={0.1}>
            <Card
              interactive={false}
              className="relative flex flex-col gap-4 p-8"
            >
              <Quote
                size={28}
                className="text-accent-light/70"
                aria-hidden="true"
              />
              <blockquote className="text-lg font-light leading-relaxed text-text-secondary">
                &ldquo;Working with DentaScale has changed our business&apos;s
                trajectory. We went from the stress of an empty calendar to
                getting so many patients that we can&apos;t keep up, and
                we&apos;re now thinking of opening a second location.&rdquo;
              </blockquote>
              <p className="text-sm text-text-tertiary">
                — DentaScale client, orthodontic practice
              </p>
            </Card>
          </Reveal>
        </div>
      </Section>

      <LeadFormSection bg="primary" />
    </>
  );
}
