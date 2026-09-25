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
 * Copy structure modeled on a reference executive-proposal layout: numbered
 * process steps, a split pricing/guarantee block, and a ROAS-led case study.
 * Pricing figures and the qualified-lead definition are kept identical to the
 * service agreement and every other proposal — only presentation changed.
 *
 * Rendered to PDF by scripts/make-onepager.sh.
 */

const testimonial = caseStudies.find((s) => s.testimonial)?.testimonial;

const process = [
  {
    step: "01",
    title: "On-site shoot",
    body: "We send a team to your office to shoot custom video ads with your staff, chairside.",
  },
  {
    step: "02",
    title: "Funnel & scripts",
    body: "We build the booking funnel and give your front desk a speed-to-lead script to maximize consults.",
  },
  {
    step: "03",
    title: "Meta management",
    body: "We launch, test, and optimize targeted campaigns on Meta to drive local patient inquiries.",
  },
  {
    step: "04",
    title: "ROI reporting",
    body: "Clear weekly reports showing exact ad spend, leads, and consultation bookings.",
  },
];

function rawStat(label: string) {
  return featuredCaseStudy.stats.find((x) => x.label === label)?.value;
}

function stat(label: string) {
  const s = featuredCaseStudy.stats.find((x) => x.label === label);
  if (!s) return null;
  return `${s.prefix ?? ""}${s.value.toLocaleString("en-US", {
    minimumFractionDigits: s.decimals ?? 0,
    maximumFractionDigits: s.decimals ?? 0,
  })}${s.suffix ?? ""}`;
}

const results = [
  { value: stat("Total ad spend"), label: "Ad spend" },
  { value: stat("Leads"), label: "Leads" },
  { value: stat("Cost per lead"), label: "Cost / lead" },
  { value: stat("Consults booked"), label: "Consults booked" },
  { value: stat("Booked case value"), label: "Booked case value" },
];

const adSpend = rawStat("Total ad spend");
const caseValue = rawStat("Booked case value");
const roas =
  adSpend && caseValue ? Math.round(caseValue / adSpend) : undefined;

export default function OnePagerPage() {
  return (
    <div
      data-sheet
      className="mx-auto max-w-[820px] bg-white px-10 py-7 font-sans text-[13px] leading-relaxed text-neutral-800 print:px-0 print:py-0"
    >
      {/* Letterhead */}
      <header className="flex flex-wrap items-end justify-between gap-3 border-b-2 border-neutral-900 pb-3">
        <div>
          <p className="text-[26px] font-semibold tracking-tight text-neutral-900">
            Denta<span className="text-violet-700">Scale</span>
          </p>
          <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[1.5px] text-violet-700">
            Ortho &amp; Cosmetic Patient Acquisition
          </p>
        </div>
        <div className="text-right text-[11.5px] leading-snug text-neutral-600">
          <p className="font-medium text-neutral-900">
            Keyhan Kamelian, Founder
          </p>
          <p>
            {siteConfig.phone} · {siteConfig.founderEmail}
          </p>
          <p>dentascale.net</p>
        </div>
      </header>

      {/* Headline */}
      <section className="mt-4 rounded-lg border-l-4 border-violet-700 bg-violet-50 px-5 py-3">
        <h1 className="text-[21px] font-bold leading-tight tracking-tight text-neutral-900">
          Turn cold LA scrolls into high-value patient bookings
        </h1>
        <p className="mt-2 max-w-[80ch] text-[12.5px] text-neutral-700">
          Referrals are unpredictable — growth should be a system. We help Los
          Angeles orthodontic and cosmetic practices bring in high-ticket
          Invisalign, clear aligner, and cosmetic cases using authentic
          on-site video ad campaigns, measured down to the dollar.
        </p>
      </section>

      {/* Process */}
      <section className="mt-3">
        <h2 className="text-[11.5px] font-semibold uppercase tracking-[1.5px] text-neutral-500">
          The end-to-end growth system
        </h2>
        <div className="mt-2.5 grid grid-cols-4 gap-x-4">
          {process.map((p) => (
            <div
              key={p.step}
              className="rounded-lg bg-neutral-50 p-3"
            >
              <p className="text-[10.5px] font-semibold uppercase tracking-[1px] text-violet-700">
                Step {p.step}
              </p>
              <p className="mt-1 text-[12.5px] font-semibold text-neutral-900">
                {p.title}
              </p>
              <p className="mt-1 text-[11.5px] leading-snug text-neutral-600">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing + guarantee */}
      <section className="mt-3">
        <h2 className="text-[11.5px] font-semibold uppercase tracking-[1.5px] text-neutral-500">
          Transparent pricing &amp; risk-free guarantee
        </h2>
        <div className="mt-2.5 grid grid-cols-2 gap-4">
          <div className="rounded-lg border-2 border-violet-700 px-4 py-2.5">
            <div className="flex items-baseline justify-between border-b border-dashed border-neutral-300 py-1.5">
              <p className="text-[12.5px] text-neutral-700">Service fee</p>
              <p className="text-[13px] font-semibold text-neutral-900">
                $2,000<span className="font-normal text-neutral-500">/mo</span>
              </p>
            </div>
            <div className="flex items-baseline justify-between border-b border-dashed border-neutral-300 py-1.5">
              <p className="text-[12.5px] text-neutral-700">
                Ad spend (paid to Meta)
              </p>
              <p className="text-[13px] font-semibold text-neutral-900">
                $50<span className="font-normal text-neutral-500">/day</span>
              </p>
            </div>
            <div className="flex items-baseline justify-between border-b border-dashed border-neutral-300 py-1.5">
              <p className="text-[12.5px] text-neutral-700">Terms</p>
              <p className="text-[12.5px] font-semibold text-violet-700">
                Month-to-month · Cancel any time
              </p>
            </div>
            <p className="pt-1 text-[11px] text-neutral-500">
              Add Google Ads for{" "}
              <span className="font-semibold text-neutral-700">
                $4,000/mo
              </span>{" "}
              total.
            </p>
          </div>

          <div className="rounded-lg border-2 border-emerald-600 bg-emerald-50 px-4 py-2.5">
            <p className="text-[12.5px] font-bold text-emerald-800">
              ✓ The 25-lead guarantee
            </p>
            <p className="mt-1.5 text-[12px] leading-snug text-emerald-900">
              If we do not deliver at least{" "}
              <strong className="font-semibold">25 qualified leads</strong> in
              your first month, we manage your second month at{" "}
              <strong className="font-semibold">$0 service charge</strong>.
            </p>
            <p className="mt-1.5 text-[11px] leading-snug text-emerald-800">
              A qualified lead is someone in your area who gives us their
              contact details asking about a treatment you offer.
            </p>
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="mt-3">
        <h2 className="text-[11.5px] font-semibold uppercase tracking-[1.5px] text-neutral-500">
          Proven results in Los Angeles
        </h2>
        <div className="mt-2.5 rounded-lg border border-neutral-200 p-3">
          <div className="flex items-baseline justify-between">
            <p className="text-[13px] font-semibold text-neutral-900">
              Case study: {featuredCaseStudy.location ?? "Los Angeles"}{" "}
              orthodontics
            </p>
            {roas ? (
              <p className="text-[12.5px] font-semibold text-violet-700">
                {roas}x return on ad spend
              </p>
            ) : null}
          </div>

          <div className="mt-3 grid grid-cols-5 gap-x-4 rounded-lg bg-violet-50 p-3">
            {results.map((r) => (
              <div key={r.label}>
                <p className="text-[19px] font-bold leading-none tracking-tight text-violet-700">
                  {r.value}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.5px] text-neutral-500">
                  {r.label}
                </p>
              </div>
            ))}
          </div>

          {testimonial ? (
            <p className="mt-3 max-w-[88ch] text-[12px] italic text-neutral-700">
              &ldquo;{testimonial.quote}&rdquo;{" "}
              <span className="not-italic text-neutral-500">
                — {testimonial.attribution}
              </span>
            </p>
          ) : null}
          <p className="mt-2 text-[10px] leading-snug text-neutral-400">
            Booked case value reflects treatment booked, not collected
            revenue. Results vary by practice. Past results are not a
            guarantee of future performance.
          </p>
        </div>
      </section>

      {/* Close */}
      <section className="mt-3 flex flex-wrap items-center justify-between gap-3 rounded-lg bg-neutral-900 px-5 py-3">
        <div>
          <p className="text-[14px] font-bold text-white">
            Claim exclusivity in your LA sub-market
          </p>
          <p className="mt-0.5 text-[12px] text-neutral-300">
            We work with a limited number of practices per area to avoid
            conflicts of interest.
          </p>
        </div>
        <div className="rounded-md bg-violet-600 px-4 py-2.5 text-center">
          <p className="text-[12.5px] font-semibold text-white">
            Book a strategy call
          </p>
          <p className="text-[11px] text-violet-100">
            calendly.com/dentascale/30min
          </p>
        </div>
      </section>
    </div>
  );
}
