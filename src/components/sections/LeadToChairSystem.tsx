import {
  Phone,
  MessageSquare,
  CalendarCheck,
  ShieldCheck,
  BellRing,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

type Item = { icon: LucideIcon; title: string; description: string };

const items: Item[] = [
  {
    icon: Phone,
    title: "We call every lead ourselves",
    description:
      "New leads get a call within minutes, while they are still thinking about it, not a day later from a busy front desk.",
  },
  {
    icon: ShieldCheck,
    title: "We qualify before we book",
    description:
      "Right treatment, right area, serious about starting. You only see people worth a consult.",
  },
  {
    icon: CalendarCheck,
    title: "We book it into your calendar",
    description:
      "Qualified patients land straight in your consultation calendar. No lists to chase, no back-and-forth.",
  },
  {
    icon: MessageSquare,
    title: "We follow up on no-answers",
    description:
      "Texts and calls on day 1, 3, and 7, so a missed call never means a lost patient.",
  },
  {
    icon: BellRing,
    title: "We keep them showing up",
    description:
      "Confirmations and reminders before every consult to protect your chair time.",
  },
];

type Props = {
  bg?: "primary" | "secondary";
};

/** The Lead-to-Chair System: we call, qualify, and book every lead. Reused on Home and Services. */
export function LeadToChairSystem({ bg = "secondary" }: Props) {
  return (
    <Section bg={bg} id="lead-to-chair">
      <SectionHeading
        label="The Lead-to-Chair System"
        title="We don't hand you a list. We book the consult."
      />

      <Reveal className="mx-auto mt-6 max-w-2xl text-center" delay={0.1}>
        <p className="text-[14px] leading-relaxed text-text-muted">
          Most agencies hand you a pile of leads and disappear. We call every
          lead ourselves, qualify them, and book them into your calendar. By
          the time a patient reaches your office, they are already on the
          schedule.
        </p>
      </Reveal>

      <Card
        as="article"
        interactive={false}
        className="mx-auto mt-10 max-w-4xl p-6 sm:p-8"
      >
        <ul className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal as="li" key={item.title} delay={(i % 2) * 0.1}>
                <div className="flex gap-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border-divider bg-accent-bg text-accent-light">
                    <Icon size={17} aria-hidden="true" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-[15px] font-medium text-white">
                      {item.title}
                    </h3>
                    <p className="text-[13px] leading-relaxed text-text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </Card>

      <Reveal className="mt-6 text-center" delay={0.15}>
        <p className="text-[13px] text-text-tertiary">
          Included with every plan.
        </p>
      </Reveal>
    </Section>
  );
}
