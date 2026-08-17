import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./Eyebrow";

interface SectionHeadingProps {
  eyebrow: string;
  h2: string;
  lead?: string;
  accent?: string;
  children?: ReactNode;
}

export function SectionHeading({ eyebrow, h2, lead, accent, children }: SectionHeadingProps) {
  return (
    <Reveal className="max-w-2xl">
      <Eyebrow accent={accent}>{eyebrow}</Eyebrow>
      <h2 className="mt-6 text-3xl font-semibold text-ink sm:text-4xl" style={{ letterSpacing: "-0.02em" }}>
        {h2}
      </h2>
      {lead && <p className="mt-5 text-base text-muted sm:text-lg">{lead}</p>}
      {children}
    </Reveal>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-site px-6 py-28 ${className}`}>
      {children}
    </section>
  );
}
