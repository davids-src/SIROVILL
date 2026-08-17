import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  accent?: string;
  glow?: boolean;
  className?: string;
}

export function Card({ children, accent, glow, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-lg border bg-surface p-6 transition-colors duration-200 ${className}`}
      style={{
        borderColor: accent ? `${accent}30` : "#2A2A35",
        boxShadow: glow && accent ? `0 0 32px 0 ${accent}0A` : undefined,
      }}
    >
      {children}
    </div>
  );
}

interface ChipProps {
  children: ReactNode;
  accent?: string;
}

export function Chip({ children, accent }: ChipProps) {
  return (
    <span
      className="label inline-block rounded-sm border px-3 py-1"
      style={{
        color: accent ?? "#8888A0",
        borderColor: accent ? `${accent}40` : "#2A2A35",
        background: accent ? `${accent}12` : "transparent",
      }}
    >
      {children}
    </span>
  );
}
