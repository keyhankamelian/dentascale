import Link from "next/link";
import { Clapperboard, Megaphone, Phone, CalendarCheck, Check, ArrowRight, type LucideIcon } from "lucide-react";
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

type Step = { icon: LucideIcon; title: string; body: string };

const steps: Step[] = [
  {
    icon: Clapperboard,
    title: "We tell you what to shoot",
    body: "A shot list and word-for-word scripts. You film on your phone and send us the footage. We do the rest.",
  },
  {
    icon: Megaphone,
    title: "We build and run the ads",
    body: "We edit the videos, turn them into ads, and run and optimize the campaigns every day.",
  },
  {
    icon: Phone,
    title: "We call and qualify every lead",
    body: "Our team calls each new lead within minutes and checks they are a real fit for a consult.",
  },
  {
    icon: CalendarCheck,
    title: "We book them into your calendar",
    body: "Qualified patients land directly in your consultation calendar, ready for you to see.",
  },
];

const fitCriteria = [
  "You offer Invisalign or clear aligners",
  "You can take on 10 to 20 more consults a month",
  "You want the leads called and booked for you",
];

const equations = [
  { left: "We make the calls", right: "your front desk only meets patients who are already booked" },
  { left: "Month-to-month", right: "our results earn the next month" },
  { left: "Small roster", right: "your practice gets our full attention" },
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
            <SectionLabel>For dental and orthodontic practices</SectionLabel>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="max-w-3xl text-4xl font-extralight leading-[1.1] text-white sm:text-5xl md:text-[56px]">
              We fill your consult calendar.{" "}
              <span className="text-accent-light">You just show up.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="max-w-2xl text-[15px] leading-relaxed text-text-secondary md:text-base">
              For offices that can take on 10 to 20 more Invisalign and clear
              aligner consults a month. We run the ads, call every lead
              ourselves, and book them straight into your calendar.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <Button href={siteConfig.bookingUrl} size="lg">
              Book a strategy session
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Section 2 — How it works */}
      <Section bg="secondary">
        <SectionHeading
          label="How it works"
          title="You film. We handle everything else."
          subtitle="From the first shot list to a booked consult, one team does all of it."
        />

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal as="li" key={step.title} delay={i * 0.1}>
                <Card as="article" className="flex h-full flex-col gap-4 p-6">
                  <span className="flex size-11 items-center justify-center rounded-full border border-border-divider bg-accent-bg text-accent-light">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="text-[17px] font-medium text-white">
                    {step.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-text-muted">
                    {step.body}
                  </p>
                </Card>
              </Reveal>
            );
          })}
        </ul>

        <Reveal className="mx-auto mt-12 max-w-2xl" delay={0.1}>
          <div className="rounded-[12px] border border-card-border bg-card p-6 sm:p-7">
            <p className="text-[11px] font-medium uppercase tracking-[2px] text-accent-light">
              This is for you if
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {fitCriteria.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-text-secondary">
                  <Check
                    size={18}
                    className="mt-0.5 shrink-0 text-accent-light"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
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
