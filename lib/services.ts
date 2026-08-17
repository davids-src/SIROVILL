export type IconName =
  | "Zap"
  | "Lightbulb"
  | "Wrench"
  | "Cable"
  | "Network"
  | "Home"
  | "Factory";

export interface ServiceCard {
  slug: string;
  cim: string;
  szoveg: string;
  ikon: IconName;
}

// 7 kártya — 7 EGYEDI slug, nincs duplikátum
export const SERVICES: ServiceCard[] = [
  {
    slug: "villanyszereles-felujitas",
    cim: "Villanyszerelés és felújítás",
    szoveg: "Konnektorok, kapcsolók, új áramkör, elosztó bővítése vagy cseréje.",
    ikon: "Zap",
  },
  {
    slug: "vilagitas-korszerusites",
    cim: "Világítás korszerűsítés",
    szoveg: "Fénycső és izzó cseréje LED-re, új világítási kör, mozgásérzékelő.",
    ikon: "Lightbulb",
  },
  {
    slug: "villanyszerelesi-hibaelharitas",
    cim: "Hibaelhárítás",
    szoveg: "Zárlatkeresés, folyton kioldó biztosíték, melegedő konnektor.",
    ikon: "Wrench",
  },
  {
    slug: "kabelezes-epitkezeskor",
    cim: "Kábelezés építkezéskor",
    szoveg: "Nyomvonal, gégecső, kötődobozok — amíg nyitva a fal.",
    ikon: "Cable",
  },
  {
    slug: "gyengearamu-kabelezes",
    cim: "Gyengeáramú kábelezés",
    szoveg: "Hálózat, kamera, riasztó, kaputelefon kábelezése.",
    ikon: "Network",
  },
  {
    slug: "okosotthon-vezerles",
    cim: "Okosotthon-vezérlés",
    szoveg: "Okos kapcsoló, redőnyvezérlés, ütemezett világítás.",
    ikon: "Home",
  },
  {
    slug: "ipari-villanyszereles",
    cim: "Ipari villanyszerelés",
    szoveg: "Gépbekötés a gyártói papír szerint, műhely, üzem, csarnok.",
    ikon: "Factory",
  },
];
