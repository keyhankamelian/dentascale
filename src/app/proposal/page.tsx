import type { Metadata } from "next";
import {
  Waves,
  Search,
  Gauge,
  PenLine,
  Target,
  MessageSquare,
  BarChart3,
  Quote,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { CalendlyEmbed } from "@/components/sections/CalendlyEmbed";
import { caseStudies, featuredCaseStudy } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Growth Proposal",
  description:
    "How DentaScale helps independent dental and orthodontic practices grow beyond referrals.",
  // Sent directly to prospects. Kept out of search results so it stays a
  // one-to-one document rather than a public landing page.
  robots: { index: false, follow: false },
};

type Problem = { icon: LucideIcon; title: string; body: string };

const problems: Problem[] = [
  {
    icon: Waves,
    title: "Referrals come in waves",
    body: "A strong month is followed by a slow one, and nothing you did explains the difference.",
  },
  {
    icon: Search,
    title: "Patients look before they book",
    body: "They check your Instagram first. What they find rarely reflects the quality of the work.",
  },
  {
    icon: Gauge,
    title: "There's no lever to pull",
    body: "When you want more patients next month, there's no dial to turn and no way to measure what worked.",
  },
];

type Pillar = { icon: LucideIcon; title: string; body: string };

const pillars: Pillar[] = [
  {
    icon: PenLine,
    title: "Ad content & visuals",
    body: "We come to you and shoot it, edit it, and write every word of copy, so your ads look like your practice rather than a stock photo library.",
  },
  {
    icon: Target,
    title: "Paid campaigns",
    body: "Built and managed on Meta, TikTok, and Google. Audience targeting, offer strategy, and daily optimization aimed at patients who actually want to book.",
  },
  {
    icon: MessageSquare,
    title: "The Lead-to-Chair System",
    body: "Scripts, follow-up templates, and a no-show checklist your front desk uses to turn a new lead into someone sitting in the chair. Included with every plan.",
  },
  {
    icon: BarChart3,
    title: "Weekly reporting",
    body: "What we spent, how many leads came in, what each one cost, and what's next. Plain English, no vanity metrics.",
  },
];

const steps = [
  {
    title: "Your Growth Plan, on us",
    body: "A 30-minute call plus a written plan: what other practices in your area are running right now, where the gaps are, and what we'd do first. Yours to keep whether or not we work together.",
  },
  {
    title: "We build everything, free",
    body: "Content shoot, editing, ad account, tracking, your booking funnel, and the campaigns themselves. All of it before you pay us anything.",
  },
  {
    title: "We launch and optimize",
    body: "Campaigns go live and we tune them daily as real data comes in. You get a plain-English report every week.",
  },
  {
    title: "You pay at lead 30",
    body: "Our first invoice goes out when your 30th lead arrives, not before. From there it's $1,000 a month, month to month, cancel any time. All we ask throughout is that you run $50 a day in ad spend, paid directly to Meta.",
  },
];

/**
 * Personalization is a PDF-only feature. PDFs are rendered from the local dev
 * server (see scripts/make-proposal.sh), so the `?doctor=` / `?practice=`
 * params are honoured there and ignored everywhere else — the deployed page
 * that prospects visit is always the generic version, whatever the URL says.
 */
const PERSONALIZATION_ENABLED = process.env.NODE_ENV !== "production";

/** Pulled from the case studies so the wording can't drift out of sync. */
const testimonial = caseStudies.find((s) => s.testimonial)?.testimonial;

/** The proposal shows the orthodontics campaign only. */
const shownStudies = [featuredCaseStudy];

/** Keeps reflected query text short and on one line. */
function clean(value: string | undefined): string | undefined {
  if (!PERSONALIZATION_ENABLED) return undefined;
  const trimmed = value?.trim().replace(/\s+/g, " ");
  return trimmed ? trimmed.slice(0, 80) : undefined;
}

export default async function ProposalPage({
  searchParams,
}: {
  searchParams: Promise<{ doctor?: string; practice?: string }>;
}) {
  const params = await searchParams;
  const doctor = clean(params.doctor);
  const practice = clean(params.practice);
  const preparedFor = [doctor, practice].filter(Boolean).join(" · ");

  return (
    <>
      <PageHero
        label={preparedFor ? `Prepared for ${preparedFor}` : "Growth Proposal"}
        title="A predictable way to fill your schedule"
        subtitle="Ad content, visuals, and social media ad campaigns for independent dental and orthodontic practices. Month to month, with the numbers shown to you every week."
      />

      {/* The problem */}
      <Section bg="secondary">
        <SectionHeading
          label="The problem"
          title="Referrals built your practice. They won't scale it."
        />

        <ul className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-3">
          {problems.map((problem, i) => {
            const Icon = problem.icon;
            return (
              <Reveal as="li" key={problem.title} delay={i * 0.1}>
                <Card as="article" className="flex h-full flex-col gap-4 p-6">
                  <span className="flex size-11 items-center justify-center rounded-full border border-border-divider bg-accent-bg text-accent-light">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="text-[17px] font-medium text-white">
                    {problem.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-text-muted">
                    {problem.body}
                  </p>
                </Card>
              </Reveal>
            );
          })}
        </ul>
      </Section>

      {/* What we do */}
      <Section bg="primary">
        <SectionHeading
          label="What we do"
          title="Four things, done properly"
          subtitle="Not a dashboard, not an AI tool. Real campaigns run by someone who only works with dental practices."
        />

        <ul className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-2">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <Reveal as="li" key={pillar.title} delay={(i % 2) * 0.1}>
                <Card as="article" className="flex h-full flex-col gap-4 p-7">
                  <span className="flex size-11 items-center justify-center rounded-full border border-border-divider bg-accent-bg text-accent-light">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <h3 className="text-[17px] font-medium text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-text-muted">
                    {pillar.body}
                  </p>
                </Card>
              </Reveal>
            );
          })}
        </ul>
      </Section>

      {/* Proof */}
      <Section bg="secondary">
        <SectionHeading
          label="Recent results"
          title="What this has looked like"
          subtitle="A campaign we ran this year, exactly as it happened."
        />

        <div className="mx-auto mt-12 grid max-w-lg grid-cols-1 gap-5">
          {shownStudies.map((study, i) => (
            <Reveal key={study.slug} delay={i * 0.1}>
              <Card
                as="article"
                interactive={false}
                className="flex h-full flex-col gap-5 p-7"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] font-medium uppercase tracking-wide text-accent-light">
                    {study.industry}
                  </span>
                  <p className="text-[13px] text-text-tertiary">
                    {study.location
                      ? `${study.location} · ${study.timeframe}`
                      : study.timeframe}
                  </p>
                </div>

                <dl className="flex flex-col divide-y divide-border-subtle">
                  {study.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex items-baseline justify-between gap-4 py-2.5"
                    >
                      <dt className="text-[13px] text-text-muted">
                        {stat.label}
                      </dt>
                      <dd className="text-[15px] font-medium tabular-nums text-white">
                        {stat.prefix ?? ""}
                        {stat.value.toLocaleString("en-US", {
                          minimumFractionDigits: stat.decimals ?? 0,
                          maximumFractionDigits: stat.decimals ?? 0,
                        })}
                        {stat.suffix ?? ""}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-8 max-w-2xl text-center" delay={0.15}>
          <p className="text-[12px] leading-relaxed text-text-tertiary">
            Case value is an estimate based on typical treatment values in each
            practice&apos;s market, not collected revenue. Results vary for each
            practice based on factors including their offer, market, location,
            ad spend, and branding. Past results are not a guarantee of future
            performance.
          </p>
        </Reveal>
      </Section>

      {/* How we'd start */}
      <Section bg="primary">
        <SectionHeading
          label="How we'd start"
          title="No long contract, no risk on you"
          subtitle="Every plan is month to month. We don't book anyone into 2, 3, or 6-month commitments."
        />

        <ol className="mx-auto mt-12 flex max-w-2xl flex-col gap-5">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 0.08}>
              <Card
                as="div"
                interactive={false}
                className="flex gap-5 p-6 sm:p-7"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border-divider bg-accent-bg text-[14px] font-medium text-accent-light">
                  {i + 1}
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-[16px] font-medium text-white">
                    {step.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-text-muted">
                    {step.body}
                  </p>
                </div>
              </Card>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Investment */}
      <Section bg="secondary">
        <SectionHeading
          label="Investment"
          title="We start free. You pay once it works."
          subtitle="Ad spend is paid directly to the platforms. We never touch your budget."
        />

        <Reveal className="mx-auto mt-12 max-w-2xl">
          <Card interactive={false} className="flex flex-col p-7 sm:p-8">
            <p className="text-[15px] leading-relaxed text-text-secondary">
              We shoot and edit your content, build your booking funnel, and
              launch and optimize your campaigns before you pay us anything.
              Our first invoice goes out when your{" "}
              <span className="font-medium text-white">30th lead arrives</span>,
              and not before.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-text-secondary">
              All we ask is that you run{" "}
              <span className="font-medium text-white">$50 a day</span> in ad
              spend, paid directly to Meta.
            </p>

            <dl className="mt-7 flex flex-col divide-y divide-border-subtle border-t border-border-subtle pt-2">
              <div className="flex items-baseline justify-between gap-6 py-4">
                <div>
                  <dt className="text-[15px] font-medium text-white">
                    After lead 30 — one platform
                  </dt>
                  <p className="text-[13px] text-text-muted">
                    Meta ads, managed end to end
                  </p>
                </div>
                <dd className="whitespace-nowrap text-[17px] font-light text-white">
                  $1,000<span className="text-[13px] text-text-muted">/mo</span>
                </dd>
              </div>

              <div className="flex items-baseline justify-between gap-6 py-4">
                <div>
                  <dt className="text-[15px] font-medium text-white">
                    Two platforms
                  </dt>
                  <p className="text-[13px] text-text-muted">
                    Meta plus TikTok or Google
                  </p>
                </div>
                <dd className="whitespace-nowrap text-[17px] font-light text-white">
                  $2,000<span className="text-[13px] text-text-muted">/mo</span>
                </dd>
              </div>

              <div className="flex items-baseline justify-between gap-6 pt-4">
                <div>
                  <dt className="text-[15px] font-medium text-white">
                    Three platforms
                  </dt>
                  <p className="text-[13px] text-text-muted">
                    Meta, TikTok, and Google
                  </p>
                </div>
                <dd className="whitespace-nowrap text-[17px] font-light text-white">
                  $3,000<span className="text-[13px] text-text-muted">/mo</span>
                </dd>
              </div>
            </dl>

            <p className="mt-6 border-t border-border-subtle pt-5 text-[13px] leading-relaxed text-text-tertiary">
              Month to month throughout, cancel any time. Raise your ad budget
              later and you get more results while our fee stays the same.
            </p>
          </Card>
        </Reveal>
      </Section>

      {/* Client testimonial — last thing read before the ask */}
      {testimonial ? (
        <Section bg="secondary">
          <Reveal className="mx-auto max-w-2xl">
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
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <p className="text-sm text-text-tertiary">
                {testimonial.attribution}
              </p>
            </Card>
          </Reveal>
        </Section>
      ) : null}

      {/* Close — book the session */}
      <Section bg="primary" id="book" className="scroll-mt-20">
        <Reveal className="mx-auto flex max-w-xl flex-col items-center gap-5 text-center">
          <h2 className="text-3xl font-light leading-tight text-white md:text-4xl">
            Let&apos;s start with a conversation
          </h2>
          <p className="text-[15px] leading-relaxed text-text-muted">
            We take on a limited number of practices at a time, so we start
            with a short call to see whether it&apos;s a fit both ways. Fifteen
            to thirty minutes.
          </p>
        </Reveal>

        <Reveal className="mx-auto mt-10 max-w-3xl" delay={0.1}>
          <CalendlyEmbed />
        </Reveal>

        <Reveal className="mx-auto mt-8 flex max-w-xl flex-col items-center gap-3 text-center">
          <p className="text-[13px] leading-relaxed text-text-muted">
            We&apos;re Los Angeles based, so in person works too.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[14px]">
            <a
              href={`mailto:${siteConfig.founderEmail}`}
              className="text-text-secondary transition-colors hover:text-white"
            >
              {siteConfig.founderEmail}
            </a>
            <span aria-hidden="true" className="text-text-tertiary">
              ·
            </span>
            <a
              href={`tel:+1${siteConfig.phone.replace(/\D/g, "")}`}
              className="text-text-secondary transition-colors hover:text-white"
            >
              {siteConfig.phone}
            </a>
          </div>

          <p className="text-[13px] text-text-tertiary">
            Keyhan Kamelian, Founder · DentaScale
          </p>
        </Reveal>
      </Section>
    </>
  );
}
