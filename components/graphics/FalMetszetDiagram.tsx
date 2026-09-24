"use client";

import { SITE } from "@/lib/site";

const ACCENT = SITE.accent;

export function FalMetszetDiagram() {
  return (
    <div className="rounded-xl border border-line bg-panel p-6 shadow-xl">
      <div className="flex items-center justify-between border-b border-line/60 pb-4">
        <div>
          <span className="label text-muted">FALMETSZET STRUKTÚRA</span>
          <h4 className="mt-1 text-base font-semibold text-ink sm:text-lg">
            Elkülönített erősáramú és gyengeáramú nyomvonalak
          </h4>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full" style={{ background: ACCENT }} />
            <span className="text-ink font-medium">Erősáram (230V / 400V)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#8888A0]" />
            <span className="text-muted font-medium">Gyengeáram (UTP / Kamera / Riasztó)</span>
          </div>
        </div>
      </div>

      <div className="relative mt-6 flex justify-center">
        <svg
          viewBox="0 0 800 320"
          className="w-full h-auto max-h-[320px] rounded-lg bg-bg/80"
          aria-label="Falmetszet diagram erősáram és gyengeáram elkülönítéssel"
        >
          {/* Wall texture / layers */}
          <rect x="20" y="20" width="760" height="280" rx="8" fill="#111116" stroke="#2A2A35" strokeWidth="2" />
          
          {/* Wall cross section background */}
          <pattern id="brick-pattern" width="40" height="20" patternUnits="userSpaceOnUse">
            <path d="M 0 0 L 40 0 M 0 20 L 40 20 M 20 0 L 20 20 M 40 10 L 0 10" stroke="#1F1F27" strokeWidth="1" fill="none" />
          </pattern>
          <rect x="30" y="30" width="740" height="260" fill="url(#brick-pattern)" opacity="0.6" />

          {/* Erősáramú csatorna / Védőcső */}
          <g transform="translate(60, 60)">
            <rect x="0" y="0" width="310" height="200" rx="6" fill="#1A1A22" stroke={ACCENT} strokeWidth="2" strokeDasharray="6 3" />
            <rect x="15" y="15" width="280" height="40" rx="4" fill={`${ACCENT}15`} stroke={ACCENT} strokeWidth="1.5" />
            <circle cx="45" cy="35" r="10" fill={ACCENT} />
            <circle cx="85" cy="35" r="10" fill={ACCENT} />
            <circle cx="125" cy="35" r="10" fill={ACCENT} />
            <text x="150" y="40" fill="#F0F0F5" fontSize="13" fontWeight="600">
              Védőcső 1: Világítás & Dugalj
            </text>

            <rect x="15" y="75" width="280" height="40" rx="4" fill={`${ACCENT}15`} stroke={ACCENT} strokeWidth="1.5" />
            <circle cx="45" cy="95" r="10" fill={ACCENT} />
            <circle cx="85" cy="95" r="10" fill={ACCENT} />
            <text x="110" y="100" fill="#F0F0F5" fontSize="13" fontWeight="600">
              Védőcső 2: Nagyfogyasztók
            </text>

            <rect x="15" y="135" width="280" height="50" rx="4" fill="#111116" stroke="#2A2A35" />
            <text x="30" y="157" fill={ACCENT} fontSize="12" fontWeight="700">
              Zavarmentes távolság: &gt; 15-20 cm
            </text>
            <text x="30" y="174" fill="#8888A0" fontSize="11">
              Nem indukál zajt az adathálózatban
            </text>
          </g>

          {/* Szétválasztó tengely */}
          <line x1="400" y1="40" x2="400" y2="280" stroke="#2A2A35" strokeWidth="2" strokeDasharray="4 4" />
          <text x="400" y="32" textAnchor="middle" fill="#8888A0" fontSize="11" fontWeight="600">
            ELKÜLÖNÍTETT ZÓNA
          </text>

          {/* Gyengeáramú csatorna / Védőcső */}
          <g transform="translate(430, 60)">
            <rect x="0" y="0" width="310" height="200" rx="6" fill="#1A1A22" stroke="#8888A0" strokeWidth="2" strokeDasharray="6 3" />
            
            <rect x="15" y="15" width="280" height="40" rx="4" fill="#8888A015" stroke="#8888A0" strokeWidth="1.5" />
            <circle cx="45" cy="35" r="10" fill="#8888A0" />
            <circle cx="85" cy="35" r="10" fill="#8888A0" />
            <text x="110" y="40" fill="#F0F0F5" fontSize="13" fontWeight="600">
              Védőcső 3: CAT6/CAT7 LAN
            </text>

            <rect x="15" y="75" width="280" height="40" rx="4" fill="#8888A015" stroke="#8888A0" strokeWidth="1.5" />
            <circle cx="45" cy="95" r="10" fill="#8888A0" />
            <text x="70" y="100" fill="#F0F0F5" fontSize="13" fontWeight="600">
              Védőcső 4: IP Kamera & UTP
            </text>

            <rect x="15" y="135" width="280" height="50" rx="4" fill="#111116" stroke="#2A2A35" />
            <text x="30" y="157" fill="#8888A0" fontSize="12" fontWeight="700">
              Strukturált Rack csillagpont
            </text>
            <text x="30" y="174" fill="#8888A0" fontSize="11">
              Kész utólagos kábelfűzéshez
            </text>
          </g>
        </svg>
      </div>

      <p className="mt-4 text-xs text-muted text-center sm:text-left">
        A vakolás előtt kiépített kettős nyomvonal garantálja, hogy az erősáramú elektromágneses mező nem zavarja az adatátvitelt és az IP kamerák jelét.
      </p>
    </div>
  );
}
