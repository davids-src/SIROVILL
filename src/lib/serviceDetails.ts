export interface ServiceDetail {
  slug: string;
  h1: string;
  lead: string;
  bulletek: string[];
  kereszthivatkozas?: string;
}

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  "vilagitas-korszerusites": {
    slug: "vilagitas-korszerusites",
    h1: "Világítás korszerűsítés",
    lead: "Elavult izzók és fénycsövek cseréje LED-re — alacsonyabb fogyasztás, jobb fényminőség, hosszabb élettartam.",
    bulletek: [
      "Meglévő lámpatestek LED-es cseréje",
      "Új világítási körök kialakítása",
      "Mozgásérzékelős és időzített kapcsolás",
      "Ipari és irodai világítás korszerűsítése",
    ],
  },
  "aramkor-bovites-elosztoszekreny": {
    slug: "aramkor-bovites-elosztoszekreny",
    h1: "Áramkör-bővítés és elosztószekrény",
    lead: "Új áramkörök kialakítása, elosztószekrény szerelése és bővítése, kismegszakítók cseréje.",
    bulletek: [
      "Új áramkör kialakítása (pl. új helyiséghez, géphez)",
      "Elosztószekrény bővítése vagy cseréje",
      "Kismegszakítók és relék cseréje",
      "Terhelés-felmérés a bővítés előtt",
    ],
  },
  "hibaelharitas": {
    slug: "hibaelharitas",
    h1: "Hibaelhárítás",
    lead: "Zárlatkeresés, hibás áramkörök javítása, szerelvények cseréje — gyors reakcióval.",
    bulletek: [
      "Zárlat- és szakadáskeresés",
      "Kismegszakító folyamatosan kiold — okok feltárása",
      "Hibás konnektorok és kapcsolók cseréje",
      "Villódzó vagy nem működő világítás javítása",
    ],
  },
  "kabelezes-epitkezeskor": {
    slug: "kabelezes-epitkezeskor",
    h1: "Kábelezés építkezéskor",
    lead: "Erős- és gyengeáramú nyomvonalak kialakítása, amíg még nyitva a fal — hogy utólag ne kelljen vésni.",
    bulletek: [
      "Nyomvonaltervezés szerkezetkész állapotban",
      "Erősáramú és gyengeáramú kábelezés összehangolva",
      "Együttműködés a SIRONIC hálózati és a SIRO-VÉD biztonságtechnikai tervezésével",
      "Üres védőcsövek a jövőbeli bővítéshez",
    ],
    kereszthivatkozas:
      "Ha egyszerre tervezi a hálózatot és a kamerarendszert is, olvassa el kapcsolódó cikkeinket: SIRONIC hálózat-cikk és SIRO-VÉD kamera-cikk.",
  },
  "okosotthon-vezerles": {
    slug: "okosotthon-vezerles",
    h1: "Okosotthon-vezérlés",
    lead: "Okos kapcsolók, redőny- és világításvezérlés, ütemezett kapcsolás.",
    bulletek: [
      "Okos fali kapcsolók telepítése",
      "Redőnyvezérlés, ütemezéssel",
      "Világítás-ütemezés, jelenlét-szimuláció",
      "Meglévő hálózatba illesztve (SIRONIC-kal összehangolva, ha van)",
    ],
  },
};
