import {
  Phone,
  MessageSquare,
  Calendar,
  ShieldCheck,
  CircleCheck,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

type Item = { icon: LucideIcon; title: string; description: string };

const items: Item[] = [
  {
    icon: Phone,
    title: "The First Call Script",
    description:
      "A word-for-word script your front desk uses to turn a curious caller into a confirmed appointment.",
  },
  {
    icon: MessageSquare,
    title: "Follow-up templates",
    description:
      "Ready-to-send texts and emails that re-engage leads who didn't book on the first touch.",
  },
  {
    icon: Calendar,
    title: "The follow-up cadence",
    description:
      "Exactly when to reach out — day 1, day 3, day 7 — so no lead slips through the cracks.",
  },
  {
    icon: ShieldCheck,
    title: "Objection handlers",
    description:
      'Calm, proven responses to "I need to think about it," price questions, and insurance hesitation.',
  },
  {
    icon: CircleCheck,
    title: "No-show prevention checklist",
    description:
      "A simple reminder system that keeps booked patients showing up in the chair.",
  },
];

type Props = {
  bg?: "primary" | "secondary";
};

/** The proprietary Lead-to-Chair System section, reused on Home and Services. */
export function LeadToChairSystem({ bg = "secondary" }: Props) {
  return (
    <Section bg={bg} id="lead-to-chair">
      <SectionHeading
        label="Beyond Leads"
        title="We don't just get you leads. We help you book them."
      />

      <Reveal className="mx-auto mt-6 max-w-2xl text-center" delay={0.1}>
        <p className="text-[14px] leading-relaxed text-text-muted">
          Most agencies hand you a pile of leads and disappear. We give every
          client our proprietary{" "}
          <span className="font-medium text-text-secondary">
            Lead-to-Chair System
          </span>{" "}
          — the exact playbook for turning a fresh lead into a booked, show-up
          patient. It&apos;s the difference between paying for clicks and
          filling your schedule.
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
          Included free with every plan.
        </p>
      </Reveal>
    </Section>
  );
}
