"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { trackLead } from "@/lib/tracking";
import { siteConfig } from "@/lib/site";

const BUSINESS_TYPES = [
  "General dentistry",
  "Orthodontics",
  "Cosmetic",
  "Other",
] as const;

const initial = {
  name: "",
  businessName: "",
  businessType: "",
  phone: "",
  email: "",
  location: "",
  botcheck: "", // honeypot — real users leave this empty
};

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-lg border border-card-border bg-bg-primary px-3.5 py-2.5 text-sm text-white placeholder:text-text-tertiary transition-colors focus:border-accent focus:outline-none";
const labelClass = "mb-1.5 block text-[13px] font-medium text-text-secondary";

export function LeadForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<Status>("idle");

  function update<K extends keyof typeof initial>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");

    try {
      const res = await fetch(siteConfig.formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          business_name: form.businessName,
          business_type: form.businessType,
          phone: form.phone,
          email: form.email,
          location: form.location,
          _subject: `New lead: ${form.name} — ${form.businessName}`,
          _gotcha: form.botcheck, // Formspree honeypot — real users leave empty
        }),
      });

      if (res.ok) {
        trackLead(); // fire FB Pixel + Google conversion on success only
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-[12px] border border-card-border bg-card px-6 py-12 text-center">
        <CheckCircle2 className="text-accent-light" size={40} aria-hidden="true" />
        <h3 className="text-lg font-medium text-white">Thanks — we&apos;ve got it.</h3>
        <p className="max-w-sm text-sm leading-relaxed text-text-muted">
          We&apos;ll review your details and reach out shortly to set up your free
          strategy call.
        </p>
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

        <div className="sm:col-span-2">
          <label htmlFor="lf-type" className={labelClass}>
            Type of practice
          </label>
          <select
            id="lf-type"
            required
            value={form.businessType}
            onChange={(e) => update("businessType", e.target.value)}
            className={`${inputClass} ${form.businessType ? "" : "text-text-tertiary"}`}
          >
            <option value="" disabled>
              Select one…
            </option>
            {BUSINESS_TYPES.map((t) => (
              <option key={t} value={t} className="text-white">
                {t}
              </option>
            ))}
          </select>
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
          <label htmlFor="lf-location" className={labelClass}>
            Location (city)
          </label>
          <input
            id="lf-location"
            type="text"
            required
            autoComplete="address-level2"
            value={form.location}
            onChange={(e) => update("location", e.target.value)}
            className={inputClass}
            placeholder="Glendale, CA"
          />
        </div>
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
          "Request my free strategy call"
        )}
      </button>

      <p className="mt-3 text-center text-[12px] text-text-tertiary">
        We&apos;ll review your details and reach out to schedule your call.
      </p>
    </form>
  );
}
