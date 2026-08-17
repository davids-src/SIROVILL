"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

export function ElosztoDiagram() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackEvent("graphic_view", { graphic_name: "eloszto_diagram" });
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
        aria-label="Elosztószekrény kapcsolási rajza illusztráció"
      >
        <title>Elosztószekrény felépítése</title>

        {/* Outer Frame - Distribution Enclosure */}
        <rect x="20" y="20" width="560" height="200" rx="8" fill="#18181F" stroke="#2A2A35" strokeWidth="1.5" />
        
        {/* DIN rail */}
        <line x1="40" y1="120" x2="560" y2="120" stroke="#2A2A35" strokeWidth="6" strokeLinecap="round" />

        {/* Betáp Wire */}
        <path d="M 40 40 L 70 40 L 70 90" stroke="#F0F0F5" strokeWidth="3" fill="none" strokeLinecap="round" />
        <text x="70" y="30" textAnchor="middle" fill="#8888A0" className="font-mono text-[10px]">
          Betáp
        </text>
        <text x="70" y="210" textAnchor="middle" fill="#8888A0" className="font-mono text-[10px]">
          hálózatból
        </text>

        {/* Főkapcsoló */}
        <g transform="translate(60, 90)">
          <rect x="0" y="0" width="40" height="60" rx="3" fill="#111116" stroke="#F0F0F5" strokeWidth="1.5" />
          <line x1="20" y1="15" x2="20" y2="35" stroke="#F0F0F5" strokeWidth="2" />
          <text x="20" y="-12" textAnchor="middle" fill="#8888A0" className="font-mono text-[10px]">
            Főkapcsoló
          </text>
          <text x="20" y="76" textAnchor="middle" fill="#8888A0" className="font-mono text-[10px]">
            áramtalanítás
          </text>
        </g>

        {/* Connection Főkapcsoló -> FI-relé */}
        <line x1="100" y1="120" x2="130" y2="120" stroke="#F0F0F5" strokeWidth="2" />

        {/* FI-relé (HIGHLIGHTED) */}
        <g transform="translate(130, 80)">
          <rect x="0" y="0" width="75" height="80" rx="4" fill="#111116" stroke="#F5B81C" strokeWidth="2" />
          <rect x="8" y="8" width="59" height="64" rx="2" fill="#F5B81C" opacity="0.15" />
          <circle cx="20" cy="25" r="5" fill="#F5B81C" />
          <rect x="35" y="20" width="25" height="40" rx="2" fill="#F5B81C" />
          <text x="37" y="-15" textAnchor="middle" fill="#F5B81C" className="font-mono text-[11px] font-bold">
            FI-relé
          </text>
          <text x="37" y="96" textAnchor="middle" fill="#F5B81C" className="font-mono text-[10px] font-semibold">
            áramütés ellen
          </text>
        </g>

        {/* Connection FI-relé -> Kismegszakítók */}
        <line x1="205" y1="120" x2="245" y2="120" stroke="#F5B81C" strokeWidth="2" />

        {/* Kismegszakítók sorozata */}
        <g transform="translate(245, 90)">
          <text x="140" y="-15" textAnchor="middle" fill="#8888A0" className="font-mono text-[10px]">
            Kismegszakítók
          </text>
          <text x="140" y="76" textAnchor="middle" fill="#8888A0" className="font-mono text-[10px]">
            körönként (világítás, konnektorok, nagyfogyasztók)
          </text>

          {[0, 45, 90, 135, 180, 225].map((offset, i) => (
            <g key={i} transform={`translate(${offset}, 0)`}>
              <rect x="0" y="0" width="35" height="60" rx="3" fill="#111116" stroke="#2A2A35" strokeWidth="1.5" />
              <rect x="12" y="10" width="11" height="25" rx="1" fill="#8888A0" />
              <circle cx="17.5" cy="48" r="2" fill="#2A2A35" />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
