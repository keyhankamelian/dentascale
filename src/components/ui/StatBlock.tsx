import { Counter } from "./Counter";

type StatBlockProps = {
  value: number;
  label: string;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  /** Size of the big number. Default "md" (36px). */
  size?: "md" | "lg";
};

/**
 * A single statistic: large weight-200 number in accent purple that counts
 * up on scroll, with an uppercase muted label beneath.
 */
export function StatBlock({
  value,
  label,
  decimals = 0,
  prefix = "",
  suffix = "",
  size = "md",
}: StatBlockProps) {
  const numberSize = size === "lg" ? "text-5xl md:text-6xl" : "text-4xl";
  return (
    <div className="flex flex-col gap-1.5">
      <Counter
        value={value}
        decimals={decimals}
        prefix={prefix}
        suffix={suffix}
        className={`font-extralight tabular-nums text-accent-light ${numberSize}`}
      />
      <span className="text-[11px] uppercase tracking-wide text-text-muted">
        {label}
      </span>
    </div>
  );
}
