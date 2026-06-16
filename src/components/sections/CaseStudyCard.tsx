import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { StatBlock } from "@/components/ui/StatBlock";
import { ComparisonRow } from "@/components/ui/ComparisonRow";
import { caseStudyStats, caseStudyComparisons } from "@/lib/content";

type Props = {
  /** Stagger the stat blocks individually on scroll. Default true. */
  staggerStats?: boolean;
};

/**
 * The orthodontic-practice case study: a 2x2 stat grid, a divider, and three
 * comparison rows. Reused on the Home teaser and the Case Studies page.
 */
export function CaseStudyCard({ staggerStats = true }: Props) {
  return (
    <Card as="article" interactive={false} className="p-6 sm:p-8">
      <div className="grid grid-cols-2 gap-y-8 gap-x-6">
        {caseStudyStats.map((stat, i) => (
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

      <hr className="my-8 border-border-divider" />

      <div className="flex flex-col divide-y divide-border-subtle">
        {caseStudyComparisons.map((row, i) => (
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
    </Card>
  );
}
