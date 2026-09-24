"use client";

import { SITE } from "@/lib/site";

const ACCENT = SITE.accent;

export function KapacitasDiagram() {
  return (
    <div className="rounded-xl border border-line bg-panel p-6 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-line/60 pb-4 gap-2">
        <div>
          <span className="label text-muted">KAPACITÁS ÉS TERHELHETŐSÉG ANALÍZIS</span>
          <h4 className="mt-1 text-base font-semibold text-ink sm:text-lg">
            Meglévő elosztó terhelése vs. Új tervezett ágak
          </h4>
        </div>
        <span className="text-xs text-muted">Hálózatbővítési szemléltetés</span>
      </div>

      <div className="relative mt-6 flex justify-center">
        <svg
          viewBox="0 0 800 300"
          className="w-full h-auto max-h-[300px] rounded-lg bg-bg/90"
          aria-label="Kapacitás és terhelhetőségi diagram"
        >
          {/* Main Container */}
          <rect x="30" y="30" width="740" height="240" rx="6" fill="#111116" stroke="#2A2A35" strokeWidth="2" />

          {/* Existing capacity bar background */}
          <g transform="translate(60, 60)">
            <text x="0" y="15" fill="#F0F0F5" fontSize="13" fontWeight="700">
              Fázisonkénti rendelkezésre álló keret (Mért hálózati kapacitás)
            </text>

            <rect x="0" y="30" width="680" height="35" rx="4" fill="#1A1A22" stroke="#2A2A35" />
            
            {/* Used capacity portion */}
            <rect x="0" y="30" width="380" height="35" rx="4" fill="#8888A0" opacity="0.6" />
            <text x="15" y="52" fill="#F0F0F5" fontSize="11" fontWeight="600">
              Meglévő alapterhelés (Világítás, dugaljak, háztartási gép)
            </text>

            {/* Planned new load portion */}
            <rect x="380" y="30" width="180" height="35" fill={ACCENT} />
            <text x="390" y="52" fill="#0A0A0C" fontSize="11" fontWeight="800">
              Új bővítmény (Klíma / EV / Melléképület)
            </text>

            {/* Free safety margin */}
            <rect x="560" y="30" width="120" height="35" rx="4" fill="#1AE87B20" stroke="#1AE87B" strokeDasharray="3 3" />
            <text x="575" y="52" fill="#1AE87B" fontSize="10" fontWeight="700">
              Tartalék zóna
            </text>
          </g>

          {/* Breakdown cards below */}
          <g transform="translate(60, 150)">
            <rect x="0" y="0" width="210" height="85" rx="4" fill="#1A1A22" stroke="#2A2A35" />
            <text x="15" y="25" fill="#8888A0" fontSize="10" fontWeight="700">MEGLÉVŐ ÁLLAPOT</text>

            <text x="15" y="48" fill="#F0F0F5" fontSize="12" fontWeight="600">Elosztótábla mérés</text>
            <text x="15" y="65" fill="#8888A0" fontSize="11">Vezetékek & kötések ellenőrizve</text>

            <rect x="235" y="0" width="210" height="85" rx="4" fill="#1A1A22" stroke={ACCENT} />
            <text x="250" y="25" fill={ACCENT} fontSize="10" fontWeight="700">ÚJ ÁRAMKÖR BEHÚZÁS</text>
            <text x="250" y="48" fill="#F0F0F5" fontSize="12" fontWeight="600">Dedikált kábelnyomvonal</text>
            <text x="250" y="65" fill="#8888A0" fontSize="11">Célzott túláramvédelem</text>

            <rect x="470" y="0" width="210" height="85" rx="4" fill="#1A1A22" stroke="#1AE87B" />
            <text x="485" y="25" fill="#1AE87B" fontSize="10" fontWeight="700">BIZTONSÁGOS MŰKÖDÉS</text>
            <text x="485" y="48" fill="#F0F0F5" fontSize="12" fontWeight="600">Nincs váratlan kioldás</text>
            <text x="485" y="65" fill="#8888A0" fontSize="11">Egyenletes fázisterhelés</text>
          </g>
        </svg>
      </div>

      <p className="mt-4 text-xs text-muted">
        Minden hálózatbővítést a meglévő elosztó felmérésével indítunk. Így az új áramkör beépítése nem okoz váratlan kismegszakító-kioldást.
      </p>
    </div>
  );
}
