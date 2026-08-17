export type IconName =
  | "Zap"
  | "RefreshCw"
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

// 7 homepage cards — some map to the same detail page (5 canonical detail slugs)
export const SERVICES: ServiceCard[] = [
  {
    slug: "aramkor-bovites-elosztoszekreny",
    cim: "Épületvillamossági kivitelezés",
    szoveg:
      "Dugaljak, kapcsolók, világítási körök kialakítása, áramkör-bővítés, elosztószekrény szerelése, kismegszakítók cseréje.",
    ikon: "Zap",
  },
  {
    slug: "vilagitas-korszerusites",
    cim: "Felújítás és korszerűsítés",
    szoveg:
      "Meglévő hálózat felújítása, vezetékcsere, elavult szerelvények cseréje, világításkorszerűsítés LED-re.",
    ikon: "RefreshCw",
  },
  {
    slug: "hibaelharitas",
    cim: "Hibaelhárítás",
    szoveg: "Zárlatkeresés, hibás áramkörök javítása, szerelvények cseréje.",
    ikon: "Wrench",
  },
  {
    slug: "kabelezes-epitkezeskor",
    cim: "Kábelezés és nyomvonal",
    szoveg:
      "Erős- és gyengeáramú nyomvonalak kialakítása, alépítmény, kábeltálca — építkezéskor vagy felújításkor.",
    ikon: "Cable",
  },
  {
    slug: "kabelezes-epitkezeskor",
    cim: "Gyengeáram",
    szoveg:
      "Hálózati kábelezés, kamera- és riasztórendszerek táp- és jelkábelezése, kaputelefon, beléptetés.",
    ikon: "Network",
  },
  {
    slug: "okosotthon-vezerles",
    cim: "Okosotthon",
    szoveg: "Okos kapcsolók, redőny- és világításvezérlés, ütemezett kapcsolás.",
    ikon: "Home",
  },
  {
    slug: "aramkor-bovites-elosztoszekreny",
    cim: "Ipari bekötés",
    szoveg: "Gépek villamos bekötése a gyártói utasítás szerint.",
    ikon: "Factory",
  },
];

export const SERVICE_DETAIL_SLUGS = [
  "vilagitas-korszerusites",
  "aramkor-bovites-elosztoszekreny",
  "hibaelharitas",
  "kabelezes-epitkezeskor",
  "okosotthon-vezerles",
];
