"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

export function SzinhomersekletSkala() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackEvent("graphic_view", { graphic_name: "szinhomerseklet" });
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
        viewBox="0 0 600 220"
        className="w-full h-auto max-w-full"
        role="img"
        aria-label="Színhőmérséklet skála illusztráció"
      >
        <title>LED Színhőmérséklet Skála</title>

        {/* 5 Segments scale */}
        <g transform="translate(50, 40)">
          {/* 2700K Warm */}
          <rect x="0" y="0" width="100" height="40" rx="4 0 0 4" fill="#F5B81C" opacity="0.4" stroke="#F5B81C" strokeWidth="1" />
          {/* 3500K */}
          <rect x="100" y="0" width="100" height="40" fill="#F5B81C" opacity="0.2" stroke="#2A2A35" strokeWidth="1" />
          {/* 4000K Neutral */}
          <rect x="200" y="0" width="100" height="40" fill="#F0F0F5" opacity="0.25" stroke="#2A2A35" strokeWidth="1" />
          {/* 5000K */}
          <rect x="300" y="0" width="100" height="40" fill="#F0F0F5" opacity="0.5" stroke="#2A2A35" strokeWidth="1" />
          {/* 6500K Cool */}
          <rect x="400" y="0" width="100" height="40" rx="0 4 4 0" fill="#C0C0D0" opacity="0.8" stroke="#C0C0D0" strokeWidth="1" />
        </g>

        {/* Marker 1: 2700K */}
        <g transform="translate(100, 95)">
          <path d="M 0 0 L -6 12 L 6 12 Z" fill="#F5B81C" />
          <text x="0" y="28" textAnchor="middle" fill="#F5B81C" className="font-mono text-[11px] font-bold">
            2700K - 3000K
          </text>
          <text x="0" y="44" textAnchor="middle" fill="#8888A0" className="font-mono text-[10px]">
            Nappali, háló
          </text>
        </g>

        {/* Marker 2: 4000K */}
        <g transform="translate(300, 95)">
          <path d="M 0 0 L -6 12 L 6 12 Z" fill="#F0F0F5" />
          <text x="0" y="28" textAnchor="middle" fill="#F0F0F5" className="font-mono text-[11px] font-bold">
            4000K
          </text>
          <text x="0" y="44" textAnchor="middle" fill="#8888A0" className="font-mono text-[10px]">
            Iroda, konyha
          </text>
        </g>

        {/* Marker 3: 6500K */}
        <g transform="translate(500, 95)">
          <path d="M 0 0 L -6 12 L 6 12 Z" fill="#8888A0" />
          <text x="0" y="28" textAnchor="middle" fill="#8888A0" className="font-mono text-[11px] font-bold">
            6500K
          </text>
          <text x="0" y="44" textAnchor="middle" fill="#8888A0" className="font-mono text-[10px]">
            Műhely, raktár
          </text>
        </g>

        {/* Bottom Note */}
        <text x="300" y="195" textAnchor="middle" fill="#F5B81C" className="font-mono text-[11px]">
          Nem a watt számít, hanem a lumen és a színhőmérséklet.
        </text>
      </svg>
    </div>
  );
}
