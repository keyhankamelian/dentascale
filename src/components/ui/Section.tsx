import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Bg = "primary" | "secondary";

type SectionProps = {
  children: ReactNode;
  /** Background: primary (#0a0a0a) or secondary (#0f0f0f). */
  bg?: Bg;
  id?: string;
  className?: string;
  /** Constrain inner content width. Default true. */
  contained?: boolean;
};

/**
 * Standard page section: vertical padding 60px mobile / 80px desktop,
 * alternating background, centered max-1200px container.
 */
export function Section({
  children,
  bg = "primary",
  id,
  className = "",
  contained = true,
}: SectionProps) {
  const bgClass = bg === "secondary" ? "bg-bg-secondary" : "bg-bg-primary";
  return (
    <section
      id={id}
      className={`py-[60px] md:py-20 ${bgClass} ${className}`}
    >
      <div className={contained ? "container-page" : ""}>{children}</div>
    </section>
  );
}

type SectionHeadingProps = {
  label: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  className?: string;
};

/** Label + title + subtitle block, animated in on scroll. */
export function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClass =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <Reveal
      className={`flex max-w-2xl flex-col gap-3 ${alignClass} ${className}`}
    >
      <SectionLabel>{label}</SectionLabel>
      <SectionTitle>{title}</SectionTitle>
      {subtitle ? <SectionSubtitle>{subtitle}</SectionSubtitle> : null}
    </Reveal>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-[11px] font-medium uppercase tracking-[2px] text-accent-light">
      {children}
    </p>
  );
}

export function SectionTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-2xl font-light leading-tight text-white sm:text-3xl md:text-[32px] ${className}`}
    >
      {children}
    </h2>
  );
}

export function SectionSubtitle({ children }: { children: ReactNode }) {
  return (
    <p className="text-[14px] leading-relaxed text-text-muted">{children}</p>
  );
}
