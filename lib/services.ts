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
    szoveg:
      "Dugaljak, kapcsolók, világítási körök kialakítása, áramkör-bővítés, elosztószekrény szerelése.",
    ikon: "Zap",
  },
  {
    slug: "vilagitas-korszerusites",
    cim: "Világítás korszerűsítés",
    szoveg:
      "Fénycsövek és izzók cseréje LED-re, új világítási körök, mozgásérzékelős kapcsolás.",
    ikon: "Lightbulb",
  },
  {
    slug: "villanyszerelesi-hibaelharitas",
    cim: "Hibaelhárítás",
    szoveg:
      "Zárlatkeresés, folyamatosan kioldó kismegszakító okainak feltárása, szerelvények cseréje.",
    ikon: "Wrench",
  },
  {
    slug: "kabelezes-epitkezeskor",
    cim: "Kábelezés építkezéskor",
    szoveg:
      "Erős- és gyengeáramú nyomvonalak kialakítása, amíg még nyitva a fal.",
    ikon: "Cable",
  },
  {
    slug: "gyengearamu-kabelezes",
    cim: "Gyengeáramú kábelezés",
    szoveg:
      "Hálózati kábelezés, kamera- és riasztórendszerek táp- és jelkábelezése, kaputelefon.",
    ikon: "Network",
  },
  {
    slug: "okosotthon-vezerles",
    cim: "Okosotthon-vezérlés",
    szoveg:
      "Okos kapcsolók, redőny- és világításvezérlés, ütemezett kapcsolás.",
    ikon: "Home",
  },
  {
    slug: "ipari-villanyszereles",
    cim: "Ipari villanyszerelés",
    szoveg:
      "Gépek villamos bekötése gyártói utasítás szerint, műhely- és üzemi villanyszerelés.",
    ikon: "Factory",
  },
];
