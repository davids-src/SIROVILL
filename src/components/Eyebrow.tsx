import type { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  accent?: string;
  className?: string;
}

export function Eyebrow({ children, accent, className = "" }: EyebrowProps) {
  return (
    <span
      className={`label inline-block ${className}`}
      style={{ color: accent ?? "#8888A0" }}
    >
      {children}
    </span>
  );
}
