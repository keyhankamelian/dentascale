import type { NextConfig } from "next";

/**
 * Content-Security-Policy allowlist. Kept intentionally permissive on
 * script-src/style-src ('unsafe-inline') because:
 *  - Framer Motion server-renders inline `style="opacity:...;transform:..."`
 *    on every animated element for the initial paint (no nonce support).
 *  - The Meta Pixel and Google gtag init snippets are small inline <script>
 *    tags (see app/layout.tsx), not external files.
 * A nonce-based CSP would remove the need for 'unsafe-inline' but requires
 * middleware to mint and thread a per-request nonce through both of the
 * above — a bigger change than warranted here. This policy still blocks
 * arbitrary third-party origins, which is its main practical value.
 */
const isDev = process.env.NODE_ENV !== "production";

const csp = [
  "default-src 'self'",
  // 'unsafe-eval' is only needed in dev, for React Fast Refresh/HMR's
  // debugging tooling (never used by React in production).
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://connect.facebook.net https://www.googletagmanager.com https://assets.calendly.com`,
  "style-src 'self' 'unsafe-inline' https://assets.calendly.com",
  "img-src 'self' data: https://www.facebook.com https://connect.facebook.net https://*.calendly.com",
  "font-src 'self' data:",
  "connect-src 'self' https://formspree.io https://www.facebook.com https://connect.facebook.net https://www.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com https://*.calendly.com",
  // The Calendly scheduler renders in an iframe. Without an explicit
  // frame-src it falls back to default-src 'self' and is silently blocked.
  "frame-src https://calendly.com https://*.calendly.com",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join("; ");

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
