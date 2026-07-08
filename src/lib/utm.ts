/**
 * Ad-attribution tracking: captures UTM params (+ Meta/Google click IDs)
 * from the URL and persists them to localStorage, so they're still
 * available when a visitor submits the lead form later — even from a
 * different page, or after browsing around the site first.
 */

const STORAGE_KEY = "dentascale_utm";

const TRACKED_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "fbclid", // Meta ads click ID
  "gclid", // Google ads click ID
] as const;

export type UtmParams = Partial<Record<(typeof TRACKED_KEYS)[number], string>>;

/**
 * Reads tracking params from the current URL and stores them, overwriting
 * any previously stored values — so the most recent ad click a visitor
 * followed is what gets credited when they eventually convert.
 */
export function captureUtmParams(): void {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const found: UtmParams = {};

  for (const key of TRACKED_KEYS) {
    const value = params.get(key);
    if (value) found[key] = value;
  }

  if (Object.keys(found).length === 0) return; // no tracking params on this load

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(found));
  } catch {
    // localStorage unavailable (private browsing, etc.) — fail silently
  }
}

export function getStoredUtmParams(): UtmParams {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as UtmParams) : {};
  } catch {
    return {};
  }
}
