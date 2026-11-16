"use client";

import { useCallback, useEffect, useRef } from "react";
import Script from "next/script";
import { siteConfig } from "@/lib/site";
import { trackSchedule } from "@/lib/tracking";

type CalendlyApi = {
  initInlineWidget: (options: {
    url: string;
    parentElement: HTMLElement;
  }) => void;
};

type Props = {
  /** Fills in the booking form so someone who just applied doesn't retype it. */
  prefill?: { name?: string; email?: string };
};

/**
 * Inline Calendly scheduler, themed to match the site.
 *
 * Initialised explicitly rather than through Calendly's auto-scan, because the
 * widget can mount after the script has already loaded (e.g. after the lead
 * form is submitted). Renders nothing when no scheduling link is configured.
 * The Calendly script and iframe both need explicit CSP allowances — see the
 * frame-src entry in next.config.ts.
 */
export function CalendlyEmbed({ prefill }: Props) {
  const { calendlyUrl } = siteConfig;
  const ref = useRef<HTMLDivElement>(null);
  const name = prefill?.name;
  const email = prefill?.email;

  // Calendly reads its palette and prefill from query params, so the
  // scheduler doesn't flash white inside a dark page.
  // Built with encodeURIComponent, not URLSearchParams: Calendly shows a
  // "+" literally, so spaces must be %20.
  const params: Record<string, string | undefined> = {
    background_color: "0f0f0f",
    text_color: "e8e8e8",
    primary_color: "7c3aed",
    hide_gdpr_banner: "1",
    name,
    email,
  };
  const query = Object.entries(params)
    .filter((entry): entry is [string, string] => Boolean(entry[1]))
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join("&");
  const themed = `${calendlyUrl}?${query}`;

  const init = useCallback(() => {
    const el = ref.current;
    const calendly = (window as unknown as { Calendly?: CalendlyApi }).Calendly;
    if (!calendlyUrl || !el || !calendly || el.childElementCount > 0) return;
    calendly.initInlineWidget({ url: themed, parentElement: el });
  }, [calendlyUrl, themed]);

  // Covers the case where the script was already loaded before this mounted.
  useEffect(init, [init]);

  // Calendly posts a message from its iframe when a booking is completed.
  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (!e.origin.endsWith("calendly.com")) return;
      const event = (e.data as { event?: string } | null)?.event;
      if (event === "calendly.event_scheduled") trackSchedule();
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  if (!calendlyUrl) return null;

  return (
    <>
      <div
        ref={ref}
        className="w-full overflow-hidden rounded-[12px] border border-card-border"
        style={{ minWidth: 320, height: 700 }}
        data-print-hide
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onReady={init}
      />
    </>
  );
}
