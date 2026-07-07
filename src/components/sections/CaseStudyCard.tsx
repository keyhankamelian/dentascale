import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { StatBlock } from "@/components/ui/StatBlock";
import { ComparisonRow } from "@/components/ui/ComparisonRow";
import type { CaseStudyStat, CaseStudyComparison } from "@/lib/content";

type Props = {
  stats: CaseStudyStat[];
  comparisons?: CaseStudyComparison[];
  /** Stagger the stat blocks individually on scroll. Default true. */
  staggerStats?: boolean;
};

/**
 * A case-study card: a 2x2 stat grid and, when provided, a divider plus
 * side-by-side comparison rows. Reused on the Home teaser and Case Studies page.
 */
export function CaseStudyCard({
  stats,
  comparisons = [],
  staggerStats = true,
}: Props) {
  return (
    <Card as="article" interactive={false} className="p-6 sm:p-8">
      <div className="grid grid-cols-2 gap-y-8 gap-x-6">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={staggerStats ? i * 0.1 : 0}>
            <StatBlock
              value={stat.value}
              label={stat.label}
              decimals={stat.decimals}
              prefix={stat.prefix}
              suffix={stat.suffix}
            />
          </Reveal>
        ))}
      </div>

      {comparisons.length > 0 && (
        <>
          <hr className="my-8 border-border-divider" />
          <div className="flex flex-col divide-y divide-border-subtle">
            {comparisons.map((row, i) => (
              <Reveal key={row.metric} delay={i * 0.1}>
                <ComparisonRow
                  metric={row.metric}
                  yours={row.yours}
                  average={row.average}
                  badge={row.badge}
                />
              </Reveal>
            ))}
          </div>
        </>
      )}
    </Card>
  );
}
