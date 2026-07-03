import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "solid" | "outline";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-transform duration-150 ease-out hover:scale-[1.02] focus-visible:scale-[1.02] active:scale-100 whitespace-nowrap";

const variants: Record<Variant, string> = {
  solid: "bg-accent text-white hover:bg-accent/90",
  outline:
    "border border-card-border text-text-secondary hover:border-accent hover:text-white",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-[15px]",
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
} & Omit<ComponentProps<"a">, "href" | "className" | "children">;

/**
 * Pill-shaped link button. Solid (purple) or outlined, with hover scale.
 * External (http) hrefs open in a new tab; same-page hash links (#anchor) use a
 * plain anchor so the browser scrolls natively; other hrefs use Next routing.
 */
export function Button({
  href,
  children,
  variant = "solid",
  size = "md",
  className = "",
  ...rest
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const isExternal = /^https?:\/\//.test(href);
  const isHash = href.startsWith("#");

  if (isExternal || isHash) {
    return (
      <a
        href={href}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={classes}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
