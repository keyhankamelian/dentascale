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
    "Simple, transparent dental marketing pricing from $2,000/mo. Month-to-month, no lock-in. Ad spend paid directly to platforms. We never touch your budget.",
};

const plans = [
  {
    name: "Meta Ads",
    price: "$2,000",
    description: "Everything you need to launch and see results on Meta.",
    features: [
      "Meta Ads (Facebook & Instagram)",
      "Campaign setup & daily management",
      "Ad copy written for you",
      "Creative direction, shot lists & script",
      "Intro content shoot included (local practices)",
      "Weekly plain-English reporting",
      "Lead-to-Chair System included",
    ],
    featured: false,
  },
  {
    name: "Meta + Google",
    price: "$4,000",
    description: "Reach patients on Meta and while they're searching on Google.",
    features: [
      "Everything in Meta Ads",
      "Google Ads (Search & Display)",
      "Cross-channel strategy & testing",
      "Full-funnel coverage",
      "Intro content shoot included (local practices)",
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
    name: "Additional content shoot",
    price: "$500",
    period: "one-time",
    description:
      "Your first shoot is included if you're local. Book another one for a refresh, or if you're outside our service area.",
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
      "You do. Ad spend goes directly to Meta and Google, and we never touch your budget. The monthly price above is purely for our management, strategy, and creative work. We recommend $500 to $1,000 per month in ad spend per platform.",
  },
  {
    question: "What's the Lead-to-Chair System, and does it cost extra?",
    answer:
      "It's our proprietary playbook for turning leads into booked, show-up patients: scripts, templates, follow-up cadences, and a no-show checklist. It's included free with every plan, at no additional cost.",
  },
  {
    question: "Will you create my content for me?",
    answer:
      "Yes. We shoot fresh content and combine it with anything you already have, before-and-afters, existing photos, whatever you've got, to create winning, scroll-stopping ads that bring in qualified leads in a predictable, scalable way. Your intro shoot is included at no extra cost for local practices; outside our service area, we can work from your existing content or add a shoot separately.",
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
        <ul className="mx-auto grid max-w-3xl grid-cols-1 gap-5 md:grid-cols-2">
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
