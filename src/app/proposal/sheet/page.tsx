import type { Metadata } from "next";
import { caseStudies } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Growth Proposal",
  description: "DentaScale growth proposal for independent dental practices.",
  robots: { index: false, follow: false },
};

/**
 * The light, print-first one-sheet that gets emailed as a PDF. Deliberately
 * separate from /proposal: that page is the on-screen version and stays dark,
 * this one is sized to be printed and handed to a doctor.
 *
 * Rendered to PDF by scripts/make-proposal.sh.
 */

/** Personalization is PDF-only — see the note in ../page.tsx. */
const PERSONALIZATION_ENABLED = process.env.NODE_ENV !== "production";

function clean(value: string | undefined): string | undefined {
  if (!PERSONALIZATION_ENABLED) return undefined;
  const trimmed = value?.trim().replace(/\s+/g, " ");
  return trimmed ? trimmed.slice(0, 80) : undefined;
}

const handled = [
  {
    title: "Brand & creative direction",
    body: "We direct new creative, build on content you already have including before-and-afters, and write every word of copy.",
  },
  {
    title: "An offer worth booking",
    body: "A limited-time offer that works financially and gives patients a reason to book now.",
  },
  {
    title: "Your reviews, put to work",
    body: "Your best social proof, in front of the people deciding whether to trust you.",
  },
  {
    title: "Paid campaigns",
    body: "Built, launched, and optimized daily around patients who are ready to book.",
  },
  {
    title: "The Lead-to-Chair System",
    body: "Call scripts, follow-up templates, and a no-show checklist for your front desk.",
  },
  {
    title: "Weekly reporting",
    body: "Spend, leads, cost per lead, and what's next. Plain English, every week.",
  },
];

const steps = [
  {
    title: "A free Growth Plan session",
    body: "Thirty minutes plus a written plan: what other practices in your area are advertising right now and where the openings are. Yours either way.",
  },
  {
    title: "Week one, we build",
    body: "Ad account, tracking, and campaigns set up properly. We can launch with content you already have.",
  },
  {
    title: "Launch and optimize",
    body: "Campaigns go live and we tune them daily as real data comes in. You get a plain-English report every week.",
  },
  {
    title: "We agree a target first",
    body: "Before a dollar is spent we set a month-one lead target together. If we miss it, you don't pay for month two.",
  },
];

function formatStat(value: number, decimals = 0, prefix = "", suffix = "") {
  return `${prefix}${value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}${suffix}`;
}

export default async function ProposalSheetPage({
  searchParams,
}: {
  searchParams: Promise<{ doctor?: string; practice?: string }>;
}) {
  const params = await searchParams;
  const doctor = clean(params.doctor);
  const practice = clean(params.practice);
  const preparedFor = [doctor, practice].filter(Boolean).join(" · ");

  const rowLabels = [
    "Qualified leads",
    "Cost per lead",
    "Total ad spend",
    "Revenue generated",
  ];

  return (
    <div
      data-sheet
      className="mx-auto max-w-[820px] bg-white px-10 py-9 font-sans text-[13px] leading-relaxed text-neutral-800 print:px-0 print:py-0"
    >
      {/* Letterhead */}
      <header className="flex flex-wrap items-end justify-between gap-3 border-b-2 border-neutral-900 pb-4">
        <div>
          <p className="text-[22px] font-semibold tracking-tight text-neutral-900">
            Denta<span className="text-violet-700">Scale</span>
          </p>
          <p className="mt-0.5 text-[12px] text-neutral-500">
            Branding &amp; paid social for dental practices
          </p>
        </div>
        <div className="text-right text-[11.5px] leading-snug text-neutral-600">
          <p className="font-medium text-neutral-900">Keyhan Kamelian, Founder</p>
          <p>{siteConfig.phone}</p>
          <p>{siteConfig.founderEmail}</p>
          <p>dentascale.net</p>
        </div>
      </header>

      {preparedFor ? (
        <p className="mt-3 text-[11.5px] font-semibold uppercase tracking-[1.5px] text-violet-700">
          Prepared for {preparedFor}
        </p>
      ) : null}

      {/* Opening */}
      <section className="mt-5">
        <h1 className="text-[26px] font-semibold leading-tight tracking-tight text-neutral-900">
          Referrals built your practice. They won&apos;t scale it.
        </h1>
        <p className="mt-2 max-w-[72ch] text-[13.5px] text-neutral-700">
          We help dental and orthodontic practices bring in new patients
          predictably, with creative that looks like your practice and campaigns
          you can measure.
        </p>
      </section>

      {/* What we handle */}
      <section className="mt-5">
        <h2 className="border-b border-neutral-200 pb-1.5 text-[11.5px] font-semibold uppercase tracking-[1.5px] text-neutral-500">
          What we handle
        </h2>
        <div className="mt-2.5 grid grid-cols-3 gap-x-6 gap-y-3">
          {handled.map((item) => (
            <div key={item.title} className="avoid-break">
              <p className="text-[13px] font-semibold text-neutral-900">
                {item.title}
              </p>
              <p className="mt-0.5 text-[12.5px] text-neutral-600">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="avoid-break mt-5">
        <h2 className="border-b border-neutral-200 pb-1.5 text-[11.5px] font-semibold uppercase tracking-[1.5px] text-neutral-500">
          Recent results
        </h2>
        <table className="mt-3 w-full border-collapse text-[12.5px]">
          <thead>
            <tr>
              <th className="w-[34%] py-1.5 text-left font-medium text-neutral-500" />
              {caseStudies.map((study) => (
                <th
                  key={study.slug}
                  className="py-1 text-right text-[12.5px] font-semibold text-neutral-900"
                >
                  {study.industry}
                  <span className="block text-[11px] font-normal text-neutral-500">
                    {study.location ? `${study.location} · ` : ""}
                    {study.timeframe.replace(" · 30 days", "")}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rowLabels.map((label) => (
              <tr key={label} className="border-t border-neutral-200">
                <td className="py-1 text-neutral-600">{label}</td>
                {caseStudies.map((study) => {
                  const stat = study.stats.find((s) => s.label === label);
                  return (
                    <td
                      key={study.slug}
                      className="py-1 text-right font-semibold tabular-nums text-neutral-900"
                    >
                      {stat
                        ? formatStat(
                            stat.value,
                            stat.decimals ?? 0,
                            stat.prefix ?? "",
                            stat.suffix ?? "",
                          )
                        : "—"}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-2 text-[10.5px] leading-snug text-neutral-400">
          Results vary by practice based on offer, market, location, ad spend,
          and branding. Past results are not a guarantee of future performance.
        </p>
      </section>

      {/* Where we'd start — the emphasis of the whole sheet */}
      <section className="avoid-break mt-4 rounded-lg border-2 border-violet-700 bg-violet-50 px-5 py-4">
        <p className="text-[11.5px] font-semibold uppercase tracking-[1.5px] text-violet-700">
          Where we&apos;d start
        </p>
        <div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <p className="text-[27px] font-semibold leading-none tracking-tight text-neutral-900">
            $1,000
            <span className="text-[15px] font-medium text-neutral-500">
              /month
            </span>
          </p>
          <p className="text-[14px] font-medium text-neutral-700">
            One platform, managed end to end
          </p>
        </div>
        <p className="mt-2 max-w-[70ch] text-[12.5px] text-neutral-700">
          Plus <strong className="font-semibold">$500 to $1,000 per month</strong>{" "}
          in ad spend to start, paid directly to the platform. We never touch
          your budget. That is the whole cost, month to month, cancel any time.
        </p>
        <p className="mt-1.5 max-w-[70ch] text-[12.5px] font-medium text-violet-900">
          Your first month also includes a social media growth plan at no
          charge, to build your following and engagement while the ads run.
        </p>
        <p className="mt-1.5 max-w-[74ch] text-[12.5px] text-neutral-600">
          Want more later? Raise your ad budget and you get more results while{" "}
          <strong className="font-semibold text-neutral-800">
            our fee stays the same
          </strong>
          . Or add a platform: $2,000/mo for two, $3,000/mo for three.
        </p>
      </section>

      {/* How it works */}
      <section className="mt-5">
        <h2 className="border-b border-neutral-200 pb-1.5 text-[11.5px] font-semibold uppercase tracking-[1.5px] text-neutral-500">
          How it works
        </h2>
        <ol className="mt-3 grid grid-cols-2 gap-x-8 gap-y-3.5">
          {steps.map((step, i) => (
            <li key={step.title} className="avoid-break flex gap-2.5">
              <span className="mt-[1px] flex size-[19px] shrink-0 items-center justify-center rounded-full bg-violet-700 text-[11px] font-semibold text-white">
                {i + 1}
              </span>
              <div>
                <p className="text-[13px] font-semibold text-neutral-900">
                  {step.title}
                </p>
                <p className="mt-0.5 text-[12.5px] text-neutral-600">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Close */}
      <section className="avoid-break mt-5 border-t-2 border-neutral-900 pt-4">
        <p className="text-[14px] font-semibold text-neutral-900">
          Want your free Growth Plan session?
        </p>
        <p className="mt-1 max-w-[70ch] text-[12.5px] text-neutral-700">
          Reply to this email, send me a text, or give me a call. I&apos;ll send
          a link so you can pick a time that suits you, and we&apos;ll spend 30
          minutes going through everything for{" "}
          {practice ? practice : "your practice"}. No obligation either way.
        </p>
        <p className="mt-2.5 text-[13px] font-medium text-neutral-900">
          {siteConfig.phone} · {siteConfig.founderEmail} · dentascale.net
        </p>
      </section>
    </div>
  );
}
