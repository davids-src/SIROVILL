"use client";

import Image from "next/image";

export interface MunkaKep {
  url: string;
  alt: string;
  caption?: string;
}

export interface MunkaGaleriaProps {
  kepek?: MunkaKep[];
}

export function MunkaGaleria({ kepek = [] }: MunkaGaleriaProps) {
  if (!kepek || kepek.length === 0) {
    return null;
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {kepek.map((kep, idx) => (
          <div key={idx} className="group relative overflow-hidden rounded-lg border border-line bg-surface/40">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={kep.url}
                alt={kep.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            {kep.caption && (
              <div className="p-3 border-t border-line/50">
                <p className="font-mono text-xs text-muted">{kep.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
