"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

/**
 * Sticky bottom CTA for small screens, so the primary action stays reachable
 * no matter how far down the page someone has scrolled.
 *
 * It stays out of the way until the reader has scrolled past the hero (which
 * already has its own CTA), and slides away again once the lead form (#start)
 * is on screen — down there the bar would sit on top of the form's own fields.
 */
export function MobileCtaBar() {
  const [pastHero, setPastHero] = useState(false);
  const [formInView, setFormInView] = useState(false);

  useEffect(() => {
    let frame = 0;

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        setPastHero(window.scrollY > window.innerHeight * 0.7);
        frame = 0;
      });
    };

    onScroll(); // set initial state (e.g. restored scroll position)
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const form = document.getElementById("start");
    if (!form) return;

    const observer = new IntersectionObserver(
      ([entry]) => setFormInView(entry.isIntersecting),
      // Trigger slightly before the form's top edge reaches the bar itself.
      { rootMargin: "0px 0px -15% 0px" },
    );

    observer.observe(form);
    return () => observer.disconnect();
  }, []);

  const visible = pastHero && !formInView;

  return (
    <div
      aria-hidden={!visible}
      data-print-hide
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-border-subtle bg-bg-primary/95 px-4 pt-3 backdrop-blur-md transition-transform duration-300 ease-out md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <Button
        href={siteConfig.bookingUrl}
        className="w-full"
        tabIndex={visible ? undefined : -1}
      >
        Book a strategy session
      </Button>
    </div>
  );
}
