import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "accent" | "outline" | "ghost";

interface ButtonLinkProps {
  to: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
}

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded px-6 py-3 text-sm transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-silver/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-silver text-bg hover:bg-ink",
  accent:
    "bg-amber text-bg hover:scale-[1.02] transition-transform ease-out",
  outline:
    "border border-line text-ink hover:border-silver",
  ghost: "text-muted hover:text-ink",
};

export function ButtonLink({ to, children, variant = "primary", className = "", external }: ButtonLinkProps) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (external) {
    return (
      <a href={to} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={cls}>
      {children}
    </Link>
  );
}

interface TextLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}

export function TextLink({ to, children, className = "", external }: TextLinkProps) {
  const cls = `group inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-amber transition-colors duration-150 ${className}`;
  const inner = (
    <>
      {children}
      <ArrowRight
        size={16}
        strokeWidth={2}
        className="transition-transform duration-150 group-hover:translate-x-1"
      />
    </>
  );
  if (external) {
    return (
      <a href={to} className={cls} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }
  return <Link to={to} className={cls}>{inner}</Link>;
}
