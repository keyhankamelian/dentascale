type ComparisonRowProps = {
  /** Metric name, e.g. "Cost per lead". */
  metric: string;
  /** Your result, e.g. "$7.38". */
  yours: string;
  /** Industry average, e.g. "$76". */
  average: string;
  /** Pill badge text, e.g. "90% below avg". */
  badge: string;
};

/**
 * One comparison line: metric name on the left, your number (accent) vs the
 * industry average (faint) in the middle, and a purple pill badge on the right.
 */
export function ComparisonRow({
  metric,
  yours,
  average,
  badge,
}: ComparisonRowProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 py-4">
      <span className="text-sm text-text-secondary">{metric}</span>

      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-accent-light tabular-nums">
          {yours}
        </span>
        <span className="text-xs text-text-faint">vs</span>
        <span className="text-sm text-text-faint tabular-nums line-through decoration-text-tertiary/60">
          {average}
        </span>
        <span className="rounded-full border border-accent/40 bg-accent-bg px-2.5 py-1 text-[11px] font-medium text-accent-light">
          {badge}
        </span>
      </div>
    </div>
  );
}
