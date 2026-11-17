import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, Quote } from "lucide-react";
import { Section, SectionHeading, SectionLabel } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { FAQ, type FAQItem } from "@/components/ui/FAQ";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { LeadFormSection } from "@/components/sections/LeadFormSection";
import { featuredCaseStudy, type CaseStudyStat } from "@/lib/content";
import { steps, fitCriteria } from "@/lib/process";
import { siteConfig } from "@/lib/site";

/**
 * Landing page for paid ads. No site nav or footer (see HideOnLanding), so the
 * only way forward is the application form at the bottom (#start).
 */
export const metadata: Metadata = {
  title: "Apply",
  description:
    "Invisalign and clear aligner consults, booked into your calendar. We run the ads, reach every lead in 10 seconds, and our team calls, qualifies, and books them. 3 new practices a month, one per market.",
  // Ad traffic only; organic search should land on the home page.
  robots: { index: false, follow: true },
};

const study = featuredCaseStudy;

function statText(label: string): string {
  const stat = study.stats.find((s) => s.label === label) as CaseStudyStat;
  const digits = stat.decimals ?? 0;
  const number = stat.value.toLocaleString("en-US", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
  return `${stat.prefix ?? ""}${number}${stat.suffix ?? ""}`;
}

const heroProof = [
  { value: statText("Total ad spend"), label: "in Meta ads" },
  { value: statText("Consults booked"), label: "consults booked" },
  { value: statText("Booked case value"), label: "booked case value" },
];

const faqs: FAQItem[] = [
  {
    question: "What happens after I apply?",
    answer:
      "Depending on your answers, you'll either pick a time for a 30-minute strategy session right away, or we'll review your application and get back to you within 1 business day.",
  },
  {
    question: "Who calls our leads?",
    answer:
      "Our in-house sales team, trained on communication, kindness, and humour. An automated message reaches every new lead within 10 seconds, then a real person calls, qualifies them, and books the right fits into your calendar. We keep following up until we get a clear yes or no.",
  },
  {
    question: "What do you need from us?",
    answer:
      "Some phone footage (we send you a shot list and scripts), your before-and-afters, and pictures of your office. Plus access to your consult calendar so we can book patients straight into it. Your front desk doesn't have to call anyone.",
  },
  {
    question: "Do you work with other offices near me?",
    answer:
      "No. We work with one office per market, so we never compete against our own clients. Once your area is taken, it's taken.",
  },
  {
    question: "Is there a long-term contract?",
    answer: "No. We work month to month. Our results earn the next month.",
  },
  {
    question: "How much does it cost?",
    answer:
      "We go through pricing on the strategy session, once we know your market and goals. Ad spend is paid directly to Meta, separate from our fee.",
  },
];

export default function ApplyPage() {
  return (
    <>
      {/* Minimal header: logo + jump to the form. No links off the page. */}
      <header className="sticky top-0 z-50 border-b border-border-subtle bg-bg-primary/80 backdrop-blur-md">
        <div className="container-page flex h-16 items-center justify-between">
          <span className="text-xl font-extralight tracking-tight text-white">
            Denta<span className="text-accent-light">Scale</span>
          </span>
          <Button href="#start">Apply now</Button>
        </div>
      </header>

      {/* Hero: matches the ads, with the proof right under the promise. */}
      <section className="relative overflow-hidden bg-bg-primary">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] max-w-none -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
        />
        <div className="container-page relative flex flex-col items-center gap-6 py-14 text-center md:py-24">
          <Reveal>
            <SectionLabel>For Invisalign &amp; clear aligner offices</SectionLabel>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="max-w-3xl text-[34px] font-extralight leading-[1.1] text-white sm:text-5xl md:text-[56px]">
              Invisalign consults,{" "}
              <span className="text-accent-light">booked into your calendar.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="max-w-2xl text-[15px] leading-relaxed text-text-secondary md:text-base">
              We run the ads, reach every lead in 10 seconds, and our in-house
              team calls, qualifies, and books them for you. Your front desk
              just greets them.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="flex flex-col items-center gap-3">
            <Button href="#start" size="lg">
              Apply now
            </Button>
            <p className="text-[13px] text-text-muted">
              We take on 3 new practices a month, one per market.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-4 w-full max-w-2xl">
            <div className="rounded-[12px] border border-card-border bg-card px-4 py-5 sm:px-8 sm:py-6">
              <p className="text-[11px] font-medium uppercase tracking-[2px] text-accent-light">
                Real result · {study.location ?? study.industry}
              </p>
              <dl className="mt-4 grid grid-cols-3 gap-2 sm:gap-6">
                {heroProof.map((item) => (
                  <div key={item.label} className="flex flex-col items-center gap-1">
                    <dt className="order-last text-[12px] leading-snug text-text-muted sm:text-[13px]">
                      {item.label}
                    </dt>
                    <dd className="text-2xl font-light text-white sm:text-3xl">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-[12px] text-text-tertiary">
                Orthodontic office, 30-day campaign
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Case study, in full */}
      <Section bg="secondary">
        <SectionHeading
          label="Case study"
          title={study.heading}
          subtitle={`${study.channels} · ${study.timeframe}`}
        />

        <div className="mx-auto mt-12 max-w-3xl">
          <CaseStudyCard stats={study.stats} comparisons={study.comparisons} />

          {study.testimonial && (
            <Reveal className="mt-6" delay={0.1}>
              <Card interactive={false} className="flex flex-col gap-4 p-6 sm:p-8">
                <Quote size={28} className="text-accent-light/70" aria-hidden="true" />
                <blockquote className="text-lg font-light leading-relaxed text-text-secondary">
                  &ldquo;{study.testimonial.quote}&rdquo;
                </blockquote>
                <p className="text-sm text-text-tertiary">
                  {study.testimonial.attribution}
                </p>
              </Card>
            </Reveal>
          )}

          <p className="mt-6 text-center text-[12px] leading-relaxed text-text-tertiary">
            Booked case value reflects treatment booked, not collected revenue.
            Results vary by practice, market, offer, and ad spend.
          </p>
        </div>
      </Section>

      {/* How it works */}
      <Section bg="primary">
        <SectionHeading
          label="How it works"
          title="You film. We handle everything else."
          subtitle="From the first shot list to a booked consult, one team does all of it."
        />

        <ol className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal as="li" key={step.title} delay={i * 0.1}>
                <Card as="article" className="flex h-full flex-col gap-4 p-6">
                  <span className="flex size-11 items-center justify-center rounded-full border border-border-divider bg-accent-bg text-accent-light">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="text-[17px] font-medium text-white">{step.title}</h3>
                  <p className="text-[14px] leading-relaxed text-text-muted">{step.body}</p>
                </Card>
              </Reveal>
            );
          })}
        </ol>

        <Reveal className="mx-auto mt-12 max-w-2xl" delay={0.1}>
          <div className="rounded-[12px] border border-card-border bg-card p-6 sm:p-7">
            <p className="text-[11px] font-medium uppercase tracking-[2px] text-accent-light">
              This is for you if
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {fitCriteria.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-text-secondary">
                  <Check size={18} className="mt-0.5 shrink-0 text-accent-light" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal className="mt-10 text-center" delay={0.1}>
          <Button href="#start" size="lg">
            Apply now
          </Button>
        </Reveal>
      </Section>

      {/* Who they'll talk to */}
      <Section bg="secondary">
        <div className="mx-auto grid max-w-4xl grid-cols-1 items-center gap-8 md:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] md:gap-12">
          <Reveal>
            <div className="relative mx-auto aspect-square w-48 overflow-hidden rounded-full border border-card-border bg-card md:aspect-[4/5] md:w-full md:rounded-[12px]">
              <Image
                src="/founder.jpg"
                alt="Keyhan Kamelian, founder of DentaScale"
                fill
                sizes="(max-width: 768px) 192px, 320px"
                className="object-cover object-top"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-4 text-center md:text-left">
            <SectionLabel>Your strategy session</SectionLabel>
            <h2 className="text-2xl font-light leading-tight text-white sm:text-3xl">
              You&apos;ll talk to Keyhan, the founder.
            </h2>
            <p className="text-[15px] leading-relaxed text-text-secondary">
              I&apos;ve spent six years managing paid advertising for small and
              medium-sized businesses, including the past four years working
              with dental and orthodontic practices.
            </p>
            <p className="text-[15px] leading-relaxed text-text-secondary">
              In our 30-minute strategy session, we&apos;ll review your market
              and how your practice currently generates Invisalign
              consultations. I&apos;ll then walk you through our process so you
              can decide whether it makes sense for your practice. If it
              isn&apos;t the right fit, there&apos;s no pressure to move
              forward.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Questions */}
      <Section bg="primary">
        <SectionHeading label="Questions" title="Before you apply" />
        <div className="mt-10">
          <FAQ items={faqs} />
        </div>
      </Section>

      {/* The form */}
      <LeadFormSection
        bg="secondary"
        title="Apply to work with us"
        intro="We take on 3 new practices a month, and only one per market. Tell us about your practice. It takes about a minute."
      />

      {/* Minimal footer */}
      <footer className="border-t-[0.5px] border-border-subtle bg-bg-primary pb-28 pt-8 md:pb-8">
        <div className="container-page flex flex-col items-center gap-2 text-xs text-text-tertiary sm:flex-row sm:justify-between">
          <span>© 2026 {siteConfig.name}</span>
          <div className="flex items-center gap-3">
            <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-white">
              {siteConfig.email}
            </a>
            <span aria-hidden="true">·</span>
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
