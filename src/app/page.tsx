import Link from "next/link";
import { Waves, Search, BarChart3, Gauge, ArrowRight, type LucideIcon } from "lucide-react";
import { Section, SectionHeading, SectionLabel } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { EquationRow } from "@/components/ui/EquationRow";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { LeadToChairSystem } from "@/components/sections/LeadToChairSystem";
import { LeadFormSection } from "@/components/sections/LeadFormSection";
import { featuredCaseStudy } from "@/lib/content";
import { siteConfig } from "@/lib/site";

type Pain = { icon: LucideIcon; title: string; body: string };

const pains: Pain[] = [
  {
    icon: Waves,
    title: "Feast or famine",
    body: "Some months the schedule is full, some months it isn't, and nothing you did explains the difference.",
  },
  {
    icon: Search,
    title: "Invisible where it counts",
    body: "Patients look you up before they book. What they find online doesn't reflect the quality of your work.",
  },
  {
    icon: BarChart3,
    title: "Marketing you can't measure",
    body: "Money goes out to billboards, mailers, and sponsorships, with no way to tell what actually brought anyone in.",
  },
  {
    icon: Gauge,
    title: "No way to scale",
    body: "Even in a good month, there's no lever to pull when you want more patients in the chair next month.",
  },
];

const equations = [
  { left: "Month-to-month", right: "our results earn the next month" },
  { left: "Small roster", right: "your practice gets our full attention" },
  { left: "Lean operation", right: "changes ship the same day, not after a meeting" },
  {
    left: "Real people",
    right: "always reachable, never a ticket system or an AI chatbot",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Section 1 — Hero */}
      <section className="relative overflow-hidden bg-bg-primary">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] max-w-none -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
        />
        <div className="container-page relative flex flex-col items-center gap-7 py-24 text-center md:py-32">
          <Reveal>
            <SectionLabel>For independent dental practices</SectionLabel>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="max-w-3xl text-4xl font-extralight leading-[1.1] text-white sm:text-5xl md:text-[56px]">
              Referrals are luck.{" "}
              <span className="text-accent-light">Growth should be a system.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="max-w-2xl text-[15px] leading-relaxed text-text-secondary md:text-base">
              We help dental and orthodontic practices build an authentic
              online presence and run paid social campaigns that bring in new
              patients predictably, not by chance.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <Button href={siteConfig.bookingUrl} size="lg">
              Book a strategy session
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Section 2 — Sound Familiar? */}
      <Section bg="secondary">
        <SectionHeading
          label="Sound Familiar?"
          title="The ceiling most practices hit"
          subtitle="Four reasons growth stalls, and what changes when you have a system."
        />

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pains.map((pain, i) => {
            const Icon = pain.icon;
            return (
              <Reveal as="li" key={pain.title} delay={i * 0.1}>
                <Card as="article" className="flex h-full flex-col gap-4 p-6">
                  <span className="flex size-11 items-center justify-center rounded-full border border-border-divider bg-accent-bg text-accent-light">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="text-[17px] font-medium text-white">
                    {pain.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-text-muted">
                    {pain.body}
                  </p>
                </Card>
              </Reveal>
            );
          })}
        </ul>
      </Section>

      {/* Section 3 — Case Study Teaser */}
      <Section bg="primary">
        <SectionHeading
          label="Case Study"
          title="Real results from a real practice"
          subtitle="30 days of campaigns for an orthodontic practice, May 2026."
        />

        <div className="mx-auto mt-12 max-w-3xl">
          <CaseStudyCard
            stats={featuredCaseStudy.stats}
            comparisons={featuredCaseStudy.comparisons}
          />

          <Reveal className="mt-6 text-center" delay={0.1}>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 text-sm text-accent-light transition-colors hover:text-white"
            >
              See full case study
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* Section 4 — Lead-to-Chair System */}
      <LeadToChairSystem bg="secondary" />

      {/* Section 5 — The Honest Pitch */}
      <Section bg="primary">
        <SectionHeading label="The Honest Pitch" title="Why DentaScale" />

        <div className="mx-auto mt-10 max-w-3xl">
          {equations.map((eq, i) => (
            <Reveal key={eq.left} delay={i * 0.06}>
              <EquationRow left={eq.left} right={eq.right} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Section 6 — Final CTA */}
      <LeadFormSection bg="secondary" />
    </>
  );
}
