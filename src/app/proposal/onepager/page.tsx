import type { Metadata } from "next";
import { caseStudies, featuredCaseStudy } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Growth Proposal",
  description: "DentaScale growth proposal for independent dental practices.",
  robots: { index: false, follow: false },
};

/**
 * Single-page, unpersonalized leave-behind, printed in bulk and handed to a
 * front desk during a walk-in. Deliberately separate from /proposal/sheet:
 * that one is mailed to a named doctor and runs to two pages, this one has to
 * survive sitting in a pile and still get someone to act.
 *
 * Rendered to PDF by scripts/make-onepager.sh.
 */

const testimonial = caseStudies.find((s) => s.testimonial)?.testimonial;

const handled = [
  "We shoot and edit your content",
  "We build your booking funnel",
  "We run and optimize the campaigns",
  "You get a plain-English report weekly",
];

function stat(label: string) {
  const s = featuredCaseStudy.stats.find((x) => x.label === label);
  if (!s) return null;
  return `${s.prefix ?? ""}${s.value.toLocaleString("en-US", {
    minimumFractionDigits: s.decimals ?? 0,
    maximumFractionDigits: s.decimals ?? 0,
  })}${s.suffix ?? ""}`;
}

const results = [
  { value: stat("Leads"), label: "Leads in 30 days" },
  { value: stat("Consults booked"), label: "Consults booked" },
  { value: stat("Cost per lead"), label: "Cost per lead" },
  { value: stat("Total ad spend"), label: "Ad spend" },
  { value: stat("Booked case value"), label: "Booked case value" },
];

export default function OnePagerPage() {
  return (
    <div
      data-sheet
      className="mx-auto max-w-[820px] bg-white px-10 py-9 font-sans text-[13px] leading-relaxed text-neutral-800 print:px-0 print:py-0"
    >
      {/* Letterhead */}
      <header className="flex flex-wrap items-end justify-between gap-3 border-b-2 border-neutral-900 pb-3">
        <div>
          <p className="text-[22px] font-semibold tracking-tight text-neutral-900">
            Denta<span className="text-violet-700">Scale</span>
          </p>
          <p className="mt-0.5 text-[12px] text-neutral-500">
            Branding &amp; paid social for dental practices
          </p>
        </div>
        <div className="text-right text-[11.5px] leading-snug text-neutral-600">
          <p className="font-medium text-neutral-900">
            Keyhan Kamelian, Founder
          </p>
          <p>{siteConfig.phone}</p>
          <p>{siteConfig.founderEmail}</p>
        </div>
      </header>

      {/* Headline */}
      <section className="mt-5">
        <h1 className="text-[27px] font-semibold leading-tight tracking-tight text-neutral-900">
          Referrals are unpredictable.
          <br />
          Growth should be a system.
        </h1>
        <p className="mt-2 max-w-[76ch] text-[13.5px] text-neutral-700">
          We help orthodontic and dental practices in Los Angeles bring in new
          patients predictably, with ad content that looks like your practice
          and campaigns you can measure down to the dollar.
        </p>
      </section>

      {/* The offer */}
      <section className="mt-5 rounded-lg border-2 border-violet-700 bg-violet-50 px-5 py-4">
        <p className="text-[11.5px] font-semibold uppercase tracking-[1.5px] text-violet-700">
          Where we&apos;d start
        </p>
        <div className="mt-1.5 flex flex-wrap items-baseline gap-x-3">
          <p className="text-[27px] font-semibold leading-none tracking-tight text-neutral-900">
            $1,000
            <span className="text-[15px] font-medium text-neutral-500">
              /month
            </span>
          </p>
          <p className="text-[14px] font-medium text-neutral-700">
            Meta ads, managed end to end
          </p>
        </div>
        <p className="mt-2 max-w-[80ch] text-[12.5px] font-medium text-violet-900">
          If we do not deliver at least 25 qualified leads in your first month,
          we work the second month at no charge.
        </p>
        <p className="mt-1.5 max-w-[80ch] text-[12.5px] text-neutral-700">
          A qualified lead is someone in your area who gives us their contact
          details asking about a treatment you offer.
        </p>
        <p className="mt-1.5 max-w-[80ch] text-[12.5px] text-neutral-600">
          Plus $50 a day in ad spend, paid directly to Meta. We never touch
          your budget. Month to month, cancel any time, and you own every asset
          we create.
        </p>
      </section>

      {/* What we handle */}
      <section className="mt-4">
        <div className="grid grid-cols-4 gap-x-5">
          {handled.map((item) => (
            <p
              key={item}
              className="border-t-2 border-neutral-900 pt-1.5 text-[12.5px] font-medium text-neutral-800"
            >
              {item}
            </p>
          ))}
        </div>
      </section>

      {/* Proof */}
      <section className="mt-5">
        <h2 className="border-b border-neutral-200 pb-1.5 text-[11.5px] font-semibold uppercase tracking-[1.5px] text-neutral-500">
          A recent campaign · orthodontic practice, Beverly Hills
        </h2>
        <div className="mt-3 grid grid-cols-5 gap-x-4">
          {results.map((r) => (
            <div key={r.label}>
              <p className="text-[21px] font-semibold leading-none tracking-tight text-neutral-900">
                {r.value}
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.5px] text-neutral-500">
                {r.label}
              </p>
            </div>
          ))}
        </div>
        {testimonial ? (
          <p className="mt-3 max-w-[88ch] text-[12.5px] italic text-neutral-700">
            &ldquo;{testimonial.quote}&rdquo;{" "}
            <span className="not-italic text-neutral-500">
              — {testimonial.attribution}
            </span>
          </p>
        ) : null}
        <p className="mt-2 text-[10px] leading-snug text-neutral-400">
          Booked case value reflects treatment booked, not collected revenue.
          Results vary by practice. Past results are not a guarantee of future
          performance.
        </p>
      </section>

      {/* Close */}
      <section className="mt-5 border-t-2 border-neutral-900 pt-4">
        <p className="text-[14px] font-semibold text-neutral-900">
          Let&apos;s start with a conversation
        </p>
        <p className="mt-1 max-w-[78ch] text-[12.5px] text-neutral-700">
          We take on a limited number of practices at a time, so we start with a
          short call to see whether it is a fit both ways.
        </p>
        <p className="mt-1.5 text-[12.5px] text-neutral-700">
          Book a time at{" "}
          <strong className="font-semibold text-neutral-900">
            calendly.com/dentascale/30min
          </strong>
        </p>
        <p className="mt-2.5 text-[13px] font-medium text-neutral-900">
          {siteConfig.phone} · {siteConfig.founderEmail} · dentascale.net
        </p>
      </section>
    </div>
  );
}
