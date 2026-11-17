"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { CheckCircle2, Loader2 } from "lucide-react";
import { trackLead } from "@/lib/tracking";
import { getStoredUtmParams } from "@/lib/utm";
import { siteConfig } from "@/lib/site";
import { CalendlyEmbed } from "./CalendlyEmbed";

/**
 * Current monthly marketing spend. Only practices already spending $3,000+
 * a month (roughly our fee plus recommended ad spend) are shown the
 * strategy-session calendar; everyone else gets a "we'll be in touch".
 */
const MARKETING_SPEND = [
  { label: "Nothing right now", qualifies: false },
  { label: "Under $1,000/month", qualifies: false },
  { label: "$1,000 to $3,000/month", qualifies: false },
  { label: "$3,000 to $5,000/month", qualifies: true },
  { label: "$5,000+/month", qualifies: true },
] as const;

function qualifiesForCall(spend: string): boolean {
  return MARKETING_SPEND.some((o) => o.label === spend && o.qualifies);
}

const CONSULT_SOURCES = [
  "Referrals / word of mouth",
  "Google Ads",
  "Meta Ads",
] as const;

const initial = {
  name: "",
  businessName: "",
  phone: "",
  email: "",
  marketingSpend: "",
  botcheck: "", // honeypot — real users leave this empty
};

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  // 16px on phones: iOS Safari zooms the page into any input smaller than that.
  "w-full rounded-lg border border-card-border bg-bg-primary px-3.5 py-2.5 text-base md:text-sm text-white placeholder:text-text-tertiary transition-colors focus:border-accent focus:outline-none";
const labelClass = "mb-1.5 block text-[13px] font-medium text-text-secondary";

export function LeadForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<Status>("idle");
  const [sources, setSources] = useState<string[]>([]);

  function toggleSource(source: string) {
    setSources((prev) =>
      prev.includes(source) ? prev.filter((x) => x !== source) : [...prev, source],
    );
  }

  function update<K extends keyof typeof initial>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");

    try {
      const utm = getStoredUtmParams();
      const source = utm.utm_source || (utm.fbclid ? "facebook" : undefined);
      const qualified = qualifiesForCall(form.marketingSpend);

      const res = await fetch(siteConfig.formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          business_name: form.businessName,
          phone: form.phone,
          email: form.email,
          current_marketing_spend: form.marketingSpend,
          shown_calendar: qualified ? "Yes" : "No",
          current_consult_sources: sources.join(", ") || "None selected",
          ...utm, // utm_source, utm_medium, utm_campaign, utm_term, utm_content, fbclid, gclid
          _subject: `${qualified ? "Qualified" : "New"} lead: ${form.name} at ${form.businessName}${source ? ` (via ${source})` : ""}`,
          _gotcha: form.botcheck, // Formspree honeypot — real users leave empty
        }),
      });

      if (res.ok) {
        trackLead(qualified); // fire FB Pixel + Google conversion on success only
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success" && !qualifiesForCall(form.marketingSpend)) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-[12px] border border-card-border bg-card px-6 py-12 text-center">
        <CheckCircle2 className="text-accent-light" size={40} aria-hidden="true" />
        <h3 className="text-lg font-medium text-white">
          Thanks, we&apos;ve got your application.
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-text-muted">
          We&apos;ll review it and reach out within 1 business day.
        </p>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="flex flex-col items-center gap-3">
          <CheckCircle2 className="text-accent-light" size={40} aria-hidden="true" />
          <h3 className="text-lg font-medium text-white">
            Thanks, we&apos;ve got your application.
          </h3>
          <p className="max-w-sm text-sm leading-relaxed text-text-muted">
            Last step: pick a time for your strategy session below.
          </p>
        </div>
        <CalendlyEmbed prefill={{ name: form.name, email: form.email }} />
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[12px] border border-card-border bg-card p-6 sm:p-8"
    >
      {/* Honeypot: hidden from users, catches bots */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
        onChange={(e) => update("botcheck", e.target.checked ? "true" : "")}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="lf-name" className={labelClass}>
            Your name
          </label>
          <input
            id="lf-name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className={inputClass}
            placeholder="Dr. Jane Smith"
          />
        </div>

        <div>
          <label htmlFor="lf-business" className={labelClass}>
            Practice / business name
          </label>
          <input
            id="lf-business"
            type="text"
            required
            autoComplete="organization"
            value={form.businessName}
            onChange={(e) => update("businessName", e.target.value)}
            className={inputClass}
            placeholder="Bright Smile Dental"
          />
        </div>


        <div>
          <label htmlFor="lf-phone" className={labelClass}>
            Phone number
          </label>
          <input
            id="lf-phone"
            type="tel"
            required
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputClass}
            placeholder="(555) 012-3456"
          />
        </div>

        <div>
          <label htmlFor="lf-email" className={labelClass}>
            Email
          </label>
          <input
            id="lf-email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputClass}
            placeholder="you@practice.com"
          />
        </div>


        <div className="sm:col-span-2">
          <label htmlFor="lf-spend" className={labelClass}>
            How much are you currently spending on marketing?
          </label>
          <select
            id="lf-spend"
            required
            value={form.marketingSpend}
            onChange={(e) => update("marketingSpend", e.target.value)}
            className={`${inputClass} ${form.marketingSpend ? "" : "text-text-tertiary"}`}
          >
            <option value="" disabled>
              Select one…
            </option>
            {MARKETING_SPEND.map((o) => (
              <option key={o.label} value={o.label} className="text-white">
                {o.label}
              </option>
            ))}
          </select>
        </div>

        <fieldset className="sm:col-span-2">
          <legend className={labelClass}>
            How are you getting clear braces and Invisalign consults right now?{" "}
            <span className="font-normal text-text-tertiary">(optional)</span>
          </legend>
          <div className="mt-2 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {CONSULT_SOURCES.map((source) => (
              <label
                key={source}
                className="flex cursor-pointer items-center gap-2.5 text-sm text-text-secondary"
              >
                <input
                  type="checkbox"
                  checked={sources.includes(source)}
                  onChange={() => toggleSource(source)}
                  className="size-4 cursor-pointer rounded border-card-border bg-bg-primary accent-[var(--color-accent)]"
                />
                {source}
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm text-red-400" role="alert">
          Something went wrong sending your details. Please try again, or email us
          at {siteConfig.email}.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-[15px] font-medium text-white transition-transform duration-150 ease-out hover:scale-[1.01] focus-visible:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          "Apply to work with us"
        )}
      </button>

      <p className="mt-3 text-center text-[12px] text-text-tertiary">
        By applying, you agree that DentaScale may call, text, or email you
        about your application, and to our{" "}
        <Link
          href="/privacy"
          className="underline underline-offset-2 hover:text-text-secondary"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}
