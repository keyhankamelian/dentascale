import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

type Props = {
  bg?: "primary" | "secondary";
};

/** Closing call-to-action section, reused across pages. */
export function FinalCTA({ bg = "primary" }: Props) {
  return (
    <Section bg={bg}>
      <Reveal className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
        <span className="rounded-full border border-accent bg-accent-bg px-4 py-1.5 text-[12px] font-medium text-accent-light">
          Onboarding fee waived through June 30 — save $250
        </span>

        <h2 className="text-3xl font-light leading-tight text-white md:text-4xl">
          Ready to grow your practice?
        </h2>

        <Button href={siteConfig.bookingUrl} size="lg">
          Book a free strategy call
        </Button>
      </Reveal>
    </Section>
  );
}
