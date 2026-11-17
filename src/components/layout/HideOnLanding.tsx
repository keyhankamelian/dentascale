"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

/**
 * Ad landing pages that render without the site nav and footer, so paid
 * traffic has one thing to do on the page: apply.
 */
export const LANDING_PATHS: readonly string[] = ["/apply"];

export function isLandingPath(pathname: string | null): boolean {
  return pathname !== null && LANDING_PATHS.includes(pathname);
}

/** Renders its children everywhere except on the ad landing pages. */
export function HideOnLanding({ children }: { children: ReactNode }) {
  return isLandingPath(usePathname()) ? null : <>{children}</>;
}
