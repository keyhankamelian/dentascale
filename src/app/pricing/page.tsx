import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { PricingCard } from "@/components/ui/PricingCard";
import { FAQ, type FAQItem } from "@/components/ui/FAQ";
import { LeadFormSection } from "@/components/sections/LeadFormSection";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent dental marketing pricing from $1,000/mo. Month-to-month, no lock-in. Ad spend paid directly to platforms — we never touch your budget.",
};

const plans = [
  {
    name: "Starter",
    price: "$1,000",
    description: "One platform — all you need to get started and see results.",
    features: [
      "Meta Ads only",
      "Campaign setup & daily management",
      "Ad copy written for you",
      "Creative direction & shot lists",
      "Weekly plain-English reporting",
      "Lead-to-Chair System included",
    ],
    featured: false,
  },
  {
    name: "Two-platform",
    price: "$1,750",
    description: "The sweet spot. Reach patients across two channels at once.",
    features: [
      "Meta + TikTok or Google",
      "Everything in Starter",
      "Cross-channel strategy & testing",
      "Priority optimization",
      "Lead-to-Chair System included",
    ],
    featured: true,
    badge: "Recommended",
  },
  {
    name: "Three-platform",
    price: "$2,500",
    description: "Maximum reach across every channel that matters.",
    features: [
      "Meta + TikTok + Google",
      "Everything in Two-platform",
      "Social media growth included",
      "Full-funnel coverage",
      "Lead-to-Chair System included",
    ],
    featured: false,
  },
];

const addOns = [
  {
    name: "Social media growth",
    price: "+$350",
    period: "/mo",
    description: "Layer organic social growth on top of any plan.",
    features: [
      "Engagement-focused campaigns",
      "Follower & reach growth",
      "Keeps your practice top-of-mind",
    ],
  },
  {
    name: "Landing page build",
    price: "$1,500",
    period: "one-time",
    description:
      "A conversion-focused landing page that turns ad clicks into booked leads.",
    features: [
      "Custom, conversion-first design",
      "Built around your offer & audience",
      "Mobile-optimized & fast-loading",
      "Yours to keep",
    ],
  },
  {
    name: "SEO optimization",
    price: "+$350",
    period: "/mo",
    description:
      "Get found in local search so patients reach you beyond paid ads.",
    features: [
      "Local SEO & Google Business Profile",
      "On-page optimization",
      "Ongoing monthly improvements",
    ],
  },
  {
    name: "Lead reach-out",
    price: "+$1,250",
    period: "/mo",
    description:
      "We call and qualify your leads, then book appointments straight into your calendar.",
    features: [
      "We call every new lead",
      "Qualify & screen for fit",
      "Appointments booked for you",
      "Hands-off for your front desk",
    ],
  },
];

const faqs: FAQItem[] = [
  {
    question: "Are there any contracts?",
    answer:
      "None. Every plan is month-to-month. We earn the next month with results, not with a contract that traps you. Cancel any time with no penalty.",
  },
  {
    question: "Do you work with other practices in my area?",
    answer:
      "No. We only take on one practice per market — so if we're running your campaigns, we're not also running a competing practice down the street. If we already have a client in your market, we'll tell you upfront.",
  },
  {
    question: "Who pays for the ad spend?",
    answer:
      "You do — directly to Meta, TikTok, and Google. We never touch your ad budget. The monthly price above is purely for our management, strategy, and creative work. We recommend a minimum of $500/mo in ad spend per platform.",
  },
  {
    question: "Is there a setup or onboarding fee?",
    answer:
      "Normally there's a one-time $500 onboarding fee to build out your accounts, tracking, and first campaigns. It's currently waived until end of July — see the banner below.",
  },
  {
    question: "What's the Lead-to-Chair System, and does it cost extra?",
    answer:
      "It's our proprietary playbook for turning leads into booked, show-up patients — scripts, templates, follow-up cadences, and a no-show checklist. It's included free with every plan, at no additional cost.",
  },
  {
    question: "Will you create my content for me?",
    answer:
      "We don't film or produce content for you, but we give you winning examples and tell you exactly what to shoot — shot lists, hooks, and angles proven to convert. What we do take care of is every word of your ad copy.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        label="Pricing"
        title="Simple, transparent pricing"
        subtitle="No lock-in. Ad spend paid directly to platforms — we never touch your budget."
      />

      {/* Core plans */}
      <Section bg="secondary">
        <h2 className="sr-only">Plans</h2>
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal as="li" key={plan.name} delay={i * 0.1}>
              <PricingCard
                name={plan.name}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                featured={plan.featured}
                badge={plan.badge}
              />
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-8 text-center" delay={0.1}>
          <p className="text-[13px] text-text-tertiary">
            Min. $500/mo ad spend per platform, paid directly to platforms.
          </p>
        </Reveal>
      </Section>

      {/* Optional add-ons */}
      <Section bg="primary">
        <SectionHeading
          label="Add-ons"
          title="Optional add-ons"
          subtitle="Bolt any of these onto a plan — all optional."
        />
        <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {addOns.map((addOn, i) => (
            <Reveal as="li" key={addOn.name} delay={(i % 2) * 0.1}>
              <PricingCard
                name={addOn.name}
                price={addOn.price}
                period={addOn.period}
                description={addOn.description}
                features={addOn.features}
                ctaLabel="Add to a plan"
              />
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* FAQ */}
      <Section bg="secondary">
        <SectionHeading
          label="FAQ"
          title="Questions, answered"
          subtitle="The things dental practices ask us most before getting started."
        />
        <div className="mt-12">
          <FAQ items={faqs} />
        </div>
      </Section>

      <LeadFormSection bg="primary" />
    </>
  );
}
