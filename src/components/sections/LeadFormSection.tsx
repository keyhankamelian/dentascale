import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { LeadForm } from "./LeadForm";

type Props = {
  bg?: "primary" | "secondary";
  title?: string;
  intro?: string;
};

/**
 * Closing lead-capture section, shown at the bottom of every marketing page.
 * Lives on the contact page only; the rest of the site links here.
 */
export function LeadFormSection({
  bg = "primary",
  title = "Tell us about your practice",
  intro = "We take on 3 new practices a month, and only one per market. Tell us about yours, then book your strategy session.",
}: Props) {
  return (
    <Section bg={bg} id="start" className="scroll-mt-20">
      <Reveal className="mx-auto flex max-w-xl flex-col items-center gap-5 text-center">
        <h2 className="text-3xl font-light leading-tight text-white md:text-4xl">
          {title}
        </h2>

        <p className="text-[14px] leading-relaxed text-text-muted">{intro}</p>
      </Reveal>

      <div className="mx-auto mt-10 max-w-xl">
        <LeadForm />
      </div>
    </Section>
  );
}
