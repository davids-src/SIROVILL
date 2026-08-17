import type { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  accent?: string;
  className?: string;
}

export function Eyebrow({ children, accent, className = "" }: EyebrowProps) {
  return (
    <p
      className={`label ${className}`}
      style={{ color: accent ?? "#8888A0" }}
    >
      {children}
    </p>
  );
}
