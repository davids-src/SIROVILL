export const SITE = {
  domain: "sirovill.hu",
  baseUrl: "https://sirovill.hu",
  cegnev: "SIROTECH Informatikai és Biztonságtechnikai Kft.",
  divizio: "SIROVILL",
  accent: "#F5B81C",
  cim: "8000 Székesfehérvár, Lövölde utca 24. 4/15.",
  telefon: "+36 70 273 5532",
  telefonHref: "tel:+36702735532",
  email: "hello@sironic.hu",
  adoszam: "33056151-2-07",
  cegjegyzekszam: "07-09-037603",
  nyilvantarto: "Székesfehérvári Törvényszék Cégbírósága",
  szolgaltatasiTerulet: "Fejér megye, Budapest, Közép-Dunántúl",
} as const;

export const DIVIZIOK = [
  {
    nev: "SIRONIC",
    szoveg: "Hálózatépítés, IT-üzemeltetés",
    href: "https://sironic.eu",
    szin: "#E8271A",
  },
  {
    nev: "SIRO-VÉD",
    szoveg: "Kamera, riasztó, tűzjelző",
    href: "https://siroved.hu",
    szin: "#1A6BE8",
  },
  {
    nev: "SIROSOFT",
    szoveg: "Egyedi szoftverfejlesztés",
    href: "https://sirosoft.hu",
    szin: "#1AE87B",
  },
  {
    nev: "SIROTECH",
    szoveg: "Központi oldal",
    href: "https://sirotech.hu",
    szin: "#C0C0D0",
  },
] as const;

export type SocialItem = { label: string; href: string; icon: "Facebook" | "Linkedin" | "Instagram" };
export const SOCIAL: readonly SocialItem[] = [] as const;


export const NAV = [
  { label: "Kezdőlap", href: "/" },
  { label: "Megoldások", href: "/megoldasok" },
  { label: "Szolgáltatások", href: "/szolgaltatasok" },
  { label: "B2B partner", href: "/partneri-egyuttmukodes" },
  { label: "Blog", href: "/blog" },
  { label: "Rólunk", href: "/rolunk" },
  { label: "Kapcsolat", href: "/kapcsolat" },
] as const;
