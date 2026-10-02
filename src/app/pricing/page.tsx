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
    "Ads, video editing, and lead calling and booking for Invisalign and clear aligner consults, from $2,000/mo. Month-to-month, no lock-in. Ad spend paid directly to platforms.",
};

const plans = [
  {
    name: "Meta Ads",
    price: "$2,000",
    description: "Everything you need to launch and see results on Meta.",
    features: [
      "Meta Ads (Facebook & Instagram)",
      "Shot lists & scripts: we tell you what to film",
      "We edit your footage into ads and write the copy",
      "Campaign setup & daily management",
      "We call, qualify & book every lead",
      "Weekly plain-English reporting",
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
      "Leads from both channels called & booked",
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
    name: "On-site content shoot",
    price: "$500",
    period: "one-time",
    description:
      "Prefer us to film it? We come to your office and shoot it for you. Local practices only.",
    features: [
      "We come to your office and shoot",
      "Built from the same proven scripts",
      "Edited and ready to run as ads",
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
    question: "What does \"we call and book your leads\" mean?",
    answer:
      "Every lead that comes in from your ads gets a call from our team within minutes. We confirm they are interested in Invisalign or clear aligners, are in your area, and are serious about starting, then book them directly into your consultation calendar. We follow up on no-answers and send reminders so they show up. It is included in every plan at no extra cost.",
  },
  {
    question: "Who creates the content?",
    answer:
      "We tell you exactly what to shoot: a shot list and word-for-word scripts. You film on your phone and send us the footage, plus any before-and-afters or photos you already have. We edit everything ourselves and turn it into ads. If you would rather not film, we can come to your office for an on-site shoot as an add-on.",
  },
  {
    question: "How many consults should we be ready for?",
    answer:
      "Our program is built for practices that can take on 10 to 20 more Invisalign or clear aligner consults a month. That is a capacity guide, not a promise: results depend on your market, offer, and ad spend. If you cannot take on that volume yet, we will tell you honestly before you sign up.",
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
