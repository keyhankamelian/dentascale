"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

const CALENDLY_CSS = "https://assets.calendly.com/assets/external/widget.css";
const CALENDLY_JS = "https://assets.calendly.com/assets/external/widget.js";

type Props = {
  url: string;
  className?: string;
  /** Pixel height of the embed. Default 700. */
  height?: number;
};

/**
 * Calendly inline embed. Loads the Calendly script once and initializes the
 * widget explicitly, so it also works after client-side route changes (when
 * the script's own auto-init has already run).
 */
export function CalendlyEmbed({ url, className = "", height = 700 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure the Calendly stylesheet is present.
    if (!document.querySelector(`link[href="${CALENDLY_CSS}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = CALENDLY_CSS;
      document.head.appendChild(link);
    }

    const init = () => {
      if (window.Calendly && ref.current) {
        ref.current.innerHTML = ""; // guard against double-init on re-render
        window.Calendly.initInlineWidget({ url, parentElement: ref.current });
      }
    };

    if (window.Calendly) {
      init();
      return;
    }

    let script = document.querySelector<HTMLScriptElement>(
      `script[src="${CALENDLY_JS}"]`,
    );
    if (!script) {
      script = document.createElement("script");
      script.src = CALENDLY_JS;
      script.async = true;
      document.body.appendChild(script);
    }
    script.addEventListener("load", init);
    return () => script?.removeEventListener("load", init);
  }, [url]);

  return (
    <div
      ref={ref}
      className={`overflow-hidden rounded-[12px] border border-card-border ${className}`}
      style={{ minWidth: 320, height }}
      aria-label="Booking calendar"
    />
  );
}
