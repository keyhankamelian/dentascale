/**
 * Brand icons. lucide-react removed brand glyphs (Instagram/TikTok) in v1,
 * so we provide minimal inline SVGs. Sized via the standard `size` prop and
 * colored with `currentColor` so they match surrounding text utilities.
 */

type IconProps = {
  size?: number;
  className?: string;
  "aria-hidden"?: boolean;
};

export function InstagramIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function TikTokIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16.5 3a5.5 5.5 0 0 0 4.5 4.7v3a8.4 8.4 0 0 1-4.5-1.3v6.1A6.5 6.5 0 1 1 10 9v3.1a3.4 3.4 0 1 0 2.4 3.25V3h4.1z" />
    </svg>
  );
}
