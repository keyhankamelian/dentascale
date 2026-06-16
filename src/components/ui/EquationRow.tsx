type EquationRowProps = {
  /** Bold left side of the equation, e.g. "Small roster". */
  left: string;
  /** Right side / payoff, e.g. "your practice gets our full attention". */
  right: string;
};

/**
 * "Honest pitch" equation row: bold left term = (accent) muted right term.
 * Stacks on mobile, three-column aligned on desktop.
 */
export function EquationRow({ left, right }: EquationRowProps) {
  return (
    <div className="grid grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-1 border-b border-border-subtle py-5 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1.4fr)] sm:gap-x-6">
      <span className="text-[15px] font-medium text-white sm:text-right">
        {left}
      </span>
      <span
        aria-hidden="true"
        className="text-lg font-light text-accent-light"
      >
        =
      </span>
      <span className="col-span-2 text-[15px] leading-relaxed text-text-muted sm:col-span-1">
        {right}
      </span>
    </div>
  );
}
