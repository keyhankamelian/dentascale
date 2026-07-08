"use client";

import { useEffect } from "react";
import { captureUtmParams } from "@/lib/utm";

/** Mounted once in the root layout to capture ad-attribution params on load. */
export function UtmCapture() {
  useEffect(() => {
    captureUtmParams();
  }, []);

  return null;
}
