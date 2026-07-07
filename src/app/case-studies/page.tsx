import type { Metadata } from "next";
import { Quote } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { LeadFormSection } from "@/components/sections/LeadFormSection";
import { caseStudies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Real results from real dental practices — orthodontic and general dentistry campaigns delivering qualified leads at a fraction of the industry-average cost per lead.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        label="Case Studies"
        title="Results that speak for themselves"
        subtitle="No inflated numbers — just what we delivered, side by side with the industry average."
      />

      {caseStudies.map((study, i) => (
        <Section key={study.slug} bg={i % 2 === 0 ? "secondary" : "primary"}>
          <div className="mx-auto max-w-3xl">
            {/* Practice info */}
            <Reveal>
              <div className="flex flex-col gap-3">
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border-divider bg-accent-bg px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-accent-light">
                  {study.featured
                    ? `Featured · ${study.industry}`
                    : study.industry}
                </span>
                <h2 className="text-2xl font-light text-white md:text-3xl">
                  {study.heading}
                </h2>
                <dl className="mt-2 grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-3">
                  <div>
                    <dt className="text-text-tertiary">Industry</dt>
                    <dd className="text-text-secondary">{study.industry}</dd>
                  </div>
                  <div>
                    <dt className="text-text-tertiary">Channels</dt>
                    <dd className="text-text-secondary">{study.channels}</dd>
                  </div>
                  <div>
                    <dt className="text-text-tertiary">Timeframe</dt>
                    <dd className="text-text-secondary">{study.timeframe}</dd>
                  </div>
                </dl>
              </div>
            </Reveal>

            {/* Stats + comparisons */}
            <div className="mt-8">
              <CaseStudyCard
                stats={study.stats}
                comparisons={study.comparisons}
              />
            </div>

            {/* Client testimonial */}
            {study.testimonial && (
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
                    &ldquo;{study.testimonial.quote}&rdquo;
                  </blockquote>
                  <p className="text-sm text-text-tertiary">
                    {study.testimonial.attribution}
                  </p>
                </Card>
              </Reveal>
            )}
          </div>
        </Section>
      ))}

      {/* Alternate the closing section's background off the last study's. */}
      <LeadFormSection bg={caseStudies.length % 2 === 0 ? "secondary" : "primary"} />
    </>
  );
}
