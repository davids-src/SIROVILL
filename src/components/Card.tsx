import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface AccentCardProps {
  children: ReactNode;
  accent?: string;
  glow?: boolean;
  className?: string;
  hover?: boolean;
}

export function Card({ children, accent, glow, className = "", hover = true }: AccentCardProps) {
  const accentBorder = accent ? `${accent}40` : undefined;
  const baseShadow = accent && glow ? `0 0 28px -14px ${accent}` : undefined;
  const hoverShadow = accent && glow ? `0 0 56px -10px ${accent}` : undefined;

  return (
    <motion.div
      className={`rounded-lg border bg-surface p-8 ${hover ? "transition-colors duration-150" : ""} ${className}`}
      style={{
        borderColor: accentBorder ?? "#2A2A35",
        boxShadow: baseShadow,
      }}
      whileHover={
        hover
          ? {
              scale: glow ? 1.02 : 1,
              boxShadow: hoverShadow ?? `0 0 28px -18px ${accent ?? "#C0C0D0"}`,
              borderColor: `${accent ?? "#C0C0D0"}80`,
            }
          : undefined
      }
      transition={{ duration: 0.15, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

interface ChipProps {
  children: ReactNode;
  accent?: string;
}

export function Chip({ children, accent = "#F5B81C" }: ChipProps) {
  return (
    <span
      className="label inline-block rounded-sm border px-2.5 py-1"
      style={{ color: accent, borderColor: `${accent}40`, background: `${accent}12` }}
    >
      {children}
    </span>
  );
}
