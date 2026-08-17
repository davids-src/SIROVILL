"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

export function NullvezetekAbra() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackEvent("graphic_view", { graphic_name: "nullvezetek_abra" });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full rounded-lg border border-[#2A2A35] bg-[#111116] p-6">
      <svg
        viewBox="0 0 600 240"
        className="w-full h-auto max-w-full"
        role="img"
        aria-label="Süllyesztett doboz okoskapcsoló nullavezeték igény illusztráció"
      >
        <title>Okoskapcsoló Nullavezeték Bekötése</title>

        {/* Outer Wall Box (Süllyesztett doboz) */}
        <g transform="translate(180, 20)">
          {/* Deep flush box background */}
          <rect x="0" y="0" width="240" height="200" rx="12" fill="#18181F" stroke="#F5B81C" strokeWidth="1.5" />
          <text x="120" y="24" textAnchor="middle" fill="#8888A0" className="font-mono text-[11px]">
            Mélyített kapcsolódoboz (65mm)
          </text>

          {/* Wires from wall */}
          {/* L - Fázis (Barna) */}
          <path d="M -60 60 L 40 60" stroke="#C0C0D0" strokeWidth="3" strokeLinecap="round" />
          <circle cx="40" cy="60" r="4" fill="#C0C0D0" />
          <text x="-65" y="64" textAnchor="end" fill="#C0C0D0" className="font-mono text-[10px]">
            L (Fázis)
          </text>

          {/* N - Nullavezeték (Kék - HIGHLIGHTED) */}
          <path d="M -60 100 L 40 100" stroke="#F5B81C" strokeWidth="3" strokeLinecap="round" />
          <circle cx="40" cy="100" r="5" fill="#F5B81C" />
          <text x="-65" y="104" textAnchor="end" fill="#F5B81C" className="font-mono text-[11px] font-bold">
            N (Nulla) ★
          </text>

          {/* L' - Elmenő fázis (Fekete/Szürke) */}
          <path d="M -60 140 L 40 140" stroke="#8888A0" strokeWidth="3" strokeLinecap="round" />
          <circle cx="40" cy="140" r="4" fill="#8888A0" />
          <text x="-65" y="144" textAnchor="end" fill="#8888A0" className="font-mono text-[10px]">
            L' (Lámpa)
          </text>

          {/* Smart Switch Module */}
          <g transform="translate(60, 40)">
            <rect x="0" y="0" width="140" height="120" rx="8" fill="#111116" stroke="#F5B81C" strokeWidth="2" />
            <rect x="10" y="10" width="120" height="100" rx="4" fill="#F5B81C" opacity="0.1" />
            
            {/* Terminals */}
            <text x="20" y="28" fill="#C0C0D0" className="font-mono text-[9px]">L</text>
            <text x="20" y="68" fill="#F5B81C" className="font-mono text-[10px] font-bold">N</text>
            <text x="20" y="108" fill="#8888A0" className="font-mono text-[9px]">L'</text>

            <text x="80" y="64" textAnchor="middle" fill="#F5B81C" className="font-mono text-[10px] font-bold">
              OKOSKAPCSOLÓ
            </text>
            <text x="80" y="78" textAnchor="middle" fill="#8888A0" className="font-mono text-[8px]">
              relé modul
            </text>
          </g>

          {/* Bottom Highlight Notice */}
          <text x="120" y="186" textAnchor="middle" fill="#F5B81C" className="font-mono text-[10px]">
            Nullavezeték nélkül az okoskapcsoló nem működik!
          </text>
        </g>
      </svg>
    </div>
  );
}
