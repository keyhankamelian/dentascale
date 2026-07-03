import type { Metadata } from "next";
import { Target, TrendingUp, PenLine, BarChart3, type LucideIcon } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { LeadToChairSystem } from "@/components/sections/LeadToChairSystem";
import { LeadFormSection } from "@/components/sections/LeadFormSection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Lead generation campaigns on Meta, TikTok & Google, social media growth, creative direction, ad copy, and weekly reporting — done for you, start to finish.",
};

type Service = { icon: LucideIcon; title: string; body: string };

const services: Service[] = [
  {
    icon: Target,
    title: "Lead generation campaigns",
    body: "We design, launch, and manage paid campaigns on Meta, TikTok, and Google built specifically for dental practices. From audience targeting to offer strategy to daily optimization, we focus on one thing: qualified patients who actually want to book. You approve the direction; we handle the buying, testing, and scaling.",
  },
  {
    icon: TrendingUp,
    title: "Social media growth",
    body: "Beyond direct-response ads, we run engagement campaigns that grow your following and keep your practice visible in the community. More reach means more trust — and more patients who already feel like they know you before they ever walk in the door.",
  },
  {
    icon: PenLine,
    title: "Creative direction & ad copy",
    body: "You don't need a production team. We tell you exactly what to film — shot lists, hooks, and angles proven to convert — and we write every word of ad copy ourselves. You get scroll-stopping creative without the agency-sized creative bill.",
  },
  {
    icon: BarChart3,
    title: "Weekly reporting",
    body: "Every week you get a clear, plain-English breakdown of what we spent, how many leads came in, what each one cost, and what's next. No vanity metrics, no jargon — just the numbers that tell you whether your marketing is working.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="Everything your practice needs to grow"
        subtitle="Done for you, start to finish."
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
