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
    "Simple, transparent dental marketing pricing from $1,000/mo. Month-to-month, no lock-in. Ad spend paid directly to platforms. We never touch your budget.",
};

const plans = [
  {
    name: "Starter",
    price: "$1,000",
    description: "One platform. All you need to get started and see results.",
    features: [
      "Meta Ads only",
      "Campaign setup & daily management",
      "Ad copy written for you",
      "Creative direction, shot lists & script",
      "Weekly plain-English reporting",
      "Lead-to-Chair System included",
    ],
    featured: false,
  },
  {
    name: "Two-platform",
    price: "$2,000",
    description: "The sweet spot. Reach patients across two channels at once.",
    features: [
      "Meta + TikTok or Google",
      "Everything in Starter",
      "Cross-channel strategy & testing",
      "Priority optimization",
      "Lead-to-Chair System included",
    ],
    featured: false,
  },
  {
    name: "Three-platform",
    price: "$3,000",
    description: "Maximum reach across every channel that matters.",
    features: [
      "Meta + TikTok + Google",
      "Everything in Two-platform",
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
    name: "Website / landing page build",
    price: "$1,000",
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
    name: "Local SEO & Google Business Profile",
    price: "+$350",
    period: "/mo",
    description:
      "Show up when nearby patients search for a practice like yours.",
    features: [
      "Google Business Profile optimization",
      "Review management & responses",
      "Local citations & map visibility",
      "Ongoing monthly upkeep",
    ],
  },
  {
    name: "Lead reach-out",
    price: "+$750",
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
  {
    name: "Content shoot",
    price: "$500",
    period: "one-time",
    description:
      "Don't want to shoot your own content? We'll film it for you.",
    features: [
      "We come shoot your content",
      "Built from proven hooks & angles",
      "Ready to run as ads or organic posts",
    ],
  },
];

const faqs: FAQItem[] = [
  {
    question: "Are there any long-term contracts?",
    answer:
      "No. Every plan is month-to-month, and we don't book anyone into 2, 3, or 6-month commitments. Being straight with you: the best results take time, because campaigns need room to optimize and one month rarely tells the full story. But we're confident enough in the work that you should see real momentum in the first week or two. We'd rather earn your next month than trap you in a contract.",
  },
  {
    question: "Who pays for the ad spend?",
    answer:
      "You do. Ad spend goes directly to Meta, TikTok, and Google, and we never touch your budget. The monthly price above is purely for our management, strategy, and creative work. We recommend $500 to $1,000 per month in ad spend per platform.",
  },
  {
    question: "What's the Lead-to-Chair System, and does it cost extra?",
    answer:
      "It's our proprietary playbook for turning leads into booked, show-up patients: scripts, templates, follow-up cadences, and a no-show checklist. It's included free with every plan, at no additional cost.",
  },
  {
    question: "Will you create my content for me?",
    answer:
      "We don't film or produce content for you, but we give you winning examples and tell you exactly what to shoot: shot lists, hooks, and angles proven to convert. What we do take care of is every word of your ad copy.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        label="Pricing"
        title="Simple, transparent pricing"
        subtitle="No lock-in. Ad spend paid directly to platforms. We never touch your budget."
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
              />
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-8 text-center" delay={0.1}>
          <p className="text-[13px] text-text-tertiary">
            $500–$1,000/mo ad spend per platform recommended to start, paid
            directly to platforms.
          </p>
        </Reveal>
      </Section>

      {/* Optional add-ons */}
      <Section bg="primary">
        <SectionHeading
          label="Add-ons"
          title="Optional add-ons"
          subtitle="Bolt any of these onto a plan. All optional."
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
                showCta={false}
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
