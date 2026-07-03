import Link from "next/link";
import { Flame, Tag, Bot, ArrowRight, type LucideIcon } from "lucide-react";
import { Section, SectionHeading, SectionLabel } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { EquationRow } from "@/components/ui/EquationRow";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { LeadToChairSystem } from "@/components/sections/LeadToChairSystem";
import { LeadFormSection } from "@/components/sections/LeadFormSection";
import { siteConfig } from "@/lib/site";

type Pain = { icon: LucideIcon; title: string; body: string };

const pains: Pain[] = [
  {
    icon: Flame,
    title: "Burned before",
    body: "Paid an agency thousands, signed a long contract, got leads who never booked.",
  },
  {
    icon: Tag,
    title: "Priced out",
    body: "Saw $3,000–5,000/month agency pricing and quietly closed the tab.",
  },
  {
    icon: Bot,
    title: "Let down by AI",
    body: "Tried an AI tool — got generic content that didn't bring in real patients.",
  },
];

const equations = [
  { left: "Month-to-month", right: "our results earn the next month" },
  { left: "Small roster", right: "your practice gets our full attention" },
  { left: "Lean operation", right: "better pricing, no bloated overhead" },
  { left: "Real people", right: "always reachable, never a ticket system" },
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
              Tired of overpriced agencies and AI tools that{" "}
              <span className="text-accent-light">don&apos;t deliver?</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="max-w-2xl text-[15px] leading-relaxed text-text-secondary md:text-base">
              There&apos;s a third option. Real dental marketing expertise,
              powered by the right tools, at a price that finally makes sense —
              and a system that turns your leads into booked patients.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <Button href={siteConfig.bookingUrl} size="lg">
              Book a free strategy call
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Section 2 — Sound Familiar? */}
      <Section bg="secondary">
        <SectionHeading
          label="Sound Familiar?"
          title="You've probably been here before"
          subtitle="Three reasons dental practices stay stuck — and how we're different."
        />

        <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
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
          subtitle="30 days of campaigns for an orthodontic practice — May 2026."
        />

        <div className="mx-auto mt-12 max-w-3xl">
          <CaseStudyCard />

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
