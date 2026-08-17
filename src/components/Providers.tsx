import { MotionConfig } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <HelmetProvider>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </HelmetProvider>
  );
}
