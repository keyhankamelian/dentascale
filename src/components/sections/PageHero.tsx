import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/Section";

type PageHeroProps = {
  label: string;
  title: ReactNode;
  subtitle?: ReactNode;
};

/** Standard inner-page hero: accent label, large title, optional subtitle. */
export function PageHero({ label, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-bg-primary">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[320px] w-[720px] max-w-none -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />
      <div className="container-page relative flex flex-col items-center gap-5 py-20 text-center md:py-28">
        <Reveal>
          <SectionLabel>{label}</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="max-w-3xl text-3xl font-extralight leading-[1.12] text-white sm:text-4xl md:text-5xl">
            {title}
          </h1>
        </Reveal>
        {subtitle ? (
          <Reveal delay={0.1}>
            <p className="max-w-2xl text-[15px] leading-relaxed text-text-secondary">
              {subtitle}
            </p>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
