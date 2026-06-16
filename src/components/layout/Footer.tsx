import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { InstagramIcon, TikTokIcon } from "@/components/icons/BrandIcons";

export function Footer() {
  return (
    <footer className="border-t-[0.5px] border-border-subtle bg-bg-primary">
      <div className="container-page flex flex-col justify-between gap-10 py-10 sm:flex-row sm:items-start">
        {/* Left: logo + tagline */}
        <div className="flex flex-col gap-3">
          <span className="text-lg font-extralight tracking-tight text-white">
            Denta<span className="text-accent-light">Scale</span>
          </span>
          <p className="max-w-xs text-sm text-text-tertiary">
            {siteConfig.tagline}
          </p>
        </div>

        {/* Right: contact + social + copyright */}
        <div className="flex flex-col gap-4 sm:items-end">
          <Link
            href="/contact"
            className="text-sm text-text-secondary transition-colors hover:text-white"
          >
            Contact
          </Link>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-sm text-text-secondary transition-colors hover:text-white"
          >
            {siteConfig.email}
          </a>

          <div className="flex items-center gap-4">
            <Link
              href={siteConfig.social.instagram}
              className="text-text-muted transition-colors hover:text-accent-light"
              aria-label="DentaScale on Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon size={20} />
            </Link>
            <Link
              href={siteConfig.social.tiktok}
              className="text-text-muted transition-colors hover:text-accent-light"
              aria-label="DentaScale on TikTok"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TikTokIcon size={20} />
            </Link>
          </div>

          <p className="text-xs text-text-tertiary">© 2026 DentaScale</p>
        </div>
      </div>
    </footer>
  );
}
