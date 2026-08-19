import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { LeadForm } from "./LeadForm";

type Props = {
  bg?: "primary" | "secondary";
};

/**
 * Closing lead-capture section, shown at the bottom of every marketing page.
 * Anchored as #start so "Book a call" buttons scroll here.
 */
export function LeadFormSection({ bg = "primary" }: Props) {
  return (
    <Section bg={bg} id="start" className="scroll-mt-20">
      <Reveal className="mx-auto flex max-w-xl flex-col items-center gap-5 text-center">
        <h2 className="text-3xl font-light leading-tight text-white md:text-4xl">
          Let&apos;s fill your calendar
        </h2>

        <p className="text-[14px] leading-relaxed text-text-muted">
          Tell us a bit about your practice and we&apos;ll reach out to set up
          your free strategy call, a quick conversation to see if we&apos;re the
          right fit.
        </p>
      </Reveal>

      <div className="mx-auto mt-10 max-w-xl">
        <LeadForm />
      </div>
    </Section>
  );
}
