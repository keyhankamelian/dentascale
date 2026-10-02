import type { Metadata } from "next";
import { Clapperboard, Film, Target, Phone, type LucideIcon } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { LeadToChairSystem } from "@/components/sections/LeadToChairSystem";
import { LeadFormSection } from "@/components/sections/LeadFormSection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "For practices that can take on 10 to 20 more Invisalign and clear aligner consults a month. We direct the content, edit the ads, run the campaigns, and call and book every lead into your calendar.",
};

type Service = { icon: LucideIcon; title: string; body: string };

const services: Service[] = [
  {
    icon: Clapperboard,
    title: "Creative direction: what to shoot",
    body: "We tell you exactly what to film: a shot list, word-for-word scripts, and the hooks and angles that work for aligner cases. You shoot on your phone and send us the footage and any before-and-afters you already have. No film crew, no guesswork.",
  },
  {
    icon: Film,
    title: "Video editing and ads",
    body: "We edit the footage ourselves and turn it into scroll-stopping ads, then write every word of the copy that runs with them. You approve the direction; we handle production.",
  },
  {
    icon: Target,
    title: "Campaigns, run and reported",
    body: "We launch and manage your campaigns on Meta, and on Google with the higher plan. Targeting, offer strategy, testing, and daily optimization, with a plain-English report every week on spend, leads, and cost per lead.",
  },
  {
    icon: Phone,
    title: "We call, qualify, and book",
    body: "Every lead gets a call from our team within minutes. We qualify them for fit and book them straight into your consultation calendar, so your front desk only meets patients who are already on the schedule.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="From the shot list to a booked consult"
        subtitle="You film. We handle the ads, the calls, and the calendar."
      />

      <Section bg="secondary">
        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal as="li" key={service.title} delay={(i % 2) * 0.1}>
                <Card as="article" className="flex h-full flex-col gap-4 p-7">
                  <span className="flex size-12 items-center justify-center rounded-full border border-border-divider bg-accent-bg text-accent-light">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h2 className="text-xl font-medium text-white">
                    {service.title}
                  </h2>
                  <p className="text-[14px] leading-relaxed text-text-muted">
                    {service.body}
                  </p>
                </Card>
              </Reveal>
            );
          })}
        </ul>
      </Section>

      <LeadToChairSystem bg="primary" />

      <LeadFormSection bg="secondary" />
    </>
  );
}
