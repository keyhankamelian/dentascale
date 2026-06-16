import { Check } from "lucide-react";
import { Card } from "./Card";
import { Button } from "./Button";
import { siteConfig } from "@/lib/site";

type PricingCardProps = {
  name: string;
  price: string;
  /** e.g. "/mo". Shown muted next to the price. */
  period?: string;
  description: string;
  features: string[];
  /** Highlight with a 1.5px purple border + badge. */
  featured?: boolean;
  badge?: string;
  ctaLabel?: string;
};

/** A single pricing tier card with feature list and CTA. */
export function PricingCard({
  name,
  price,
  period = "/mo",
  description,
  features,
  featured = false,
  badge = "Most popular",
  ctaLabel = "Book a free call",
}: PricingCardProps) {
  return (
    <Card
      as="article"
      className={`relative flex h-full flex-col p-7 ${
        featured ? "!border-[1.5px] !border-accent" : ""
      }`}
    >
      {featured ? (
        <span className="absolute -top-3 left-7 rounded-full border border-accent bg-accent-bg px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-accent-light">
          {badge}
        </span>
      ) : null}

      <h3 className="text-[15px] font-medium text-white">{name}</h3>

      <div className="mt-3 flex items-baseline gap-1">
        <span className="text-4xl font-extralight text-white">{price}</span>
        <span className="text-sm text-text-muted">{period}</span>
      </div>

      <p className="mt-3 text-[13px] leading-relaxed text-text-muted">
        {description}
      </p>

      <ul className="mt-6 flex flex-1 flex-col gap-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <Check
              size={16}
              className="mt-0.5 shrink-0 text-accent-light"
              aria-hidden="true"
            />
            <span className="text-text-secondary">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        href={siteConfig.bookingUrl}
        variant={featured ? "solid" : "outline"}
        className="mt-7 w-full"
      >
        {ctaLabel}
      </Button>
    </Card>
  );
}
