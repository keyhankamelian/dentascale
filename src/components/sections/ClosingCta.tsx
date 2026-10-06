import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

type Props = {
  bg?: "primary" | "secondary";
};

/** Closing call to action shown at the bottom of marketing pages. The form itself lives on /contact. */
export function ClosingCta({ bg = "primary" }: Props) {
  return (
    <Section bg={bg}>
      <Reveal className="mx-auto flex max-w-xl flex-col items-center gap-5 text-center">
        <h2 className="text-3xl font-light leading-tight text-white md:text-4xl">
          Let&apos;s fill your calendar
        </h2>
        <p className="text-[14px] leading-relaxed text-text-muted">
          Tell us about your practice and we&apos;ll let you know if we&apos;re
          the right fit.
        </p>
        <Button href={siteConfig.bookingUrl} size="lg">
          Apply to work with us
        </Button>
      </Reveal>
    </Section>
  );
}
