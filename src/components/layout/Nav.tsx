"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/Button";

function Logo() {
  return (
    <span className="text-xl font-extralight tracking-tight text-white">
      Denta<span className="text-accent-light">Scale</span>
    </span>
  );
}

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu on route change and lock body scroll while open.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border-subtle bg-bg-primary/80 backdrop-blur-md">
        <nav
          className="container-page flex h-16 items-center justify-between"
          aria-label="Primary"
        >
        <Link href="/" aria-label={`${siteConfig.name} home`}>
          <Logo />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`text-sm transition-colors hover:text-white ${
                    active ? "text-white" : "text-text-muted"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <Button href={siteConfig.bookingUrl}>Book a free call</Button>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="text-white md:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
            <Menu size={24} aria-hidden="true" />
          </button>
        </nav>
      </header>

      {/* Mobile slide-in menu — rendered outside the backdrop-blurred <header>
          so the fixed overlay/panel are positioned against the viewport, not
          trapped inside the header's containing block. */}
      <AnimatePresence>
        {open ? (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              id="mobile-menu"
              className="fixed right-0 top-0 z-50 flex h-full w-72 max-w-[80%] flex-col gap-8 border-l border-border-divider bg-bg-secondary p-6 md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
            >
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="text-text-muted hover:text-white"
                  aria-label="Close menu"
                >
                  <X size={24} aria-hidden="true" />
                </button>
              </div>

              <ul className="flex flex-col gap-5">
                {navLinks.map((link) => {
                  const active =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        className={`text-base transition-colors hover:text-white ${
                          active ? "text-white" : "text-text-secondary"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <Button
                href={siteConfig.bookingUrl}
                className="mt-auto w-full"
                onClick={() => setOpen(false)}
              >
                Book a free call
              </Button>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
