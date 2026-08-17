export const SITE = {
  domain: "sirovill.hu",
  baseUrl: "https://sirovill.hu",
  cegnev: "SIROTECH Informatikai és Biztonságtechnikai Kft.",
  divizio: "SIROVILL",
  accent: "#F5B81C",
  cim: "8000 Székesfehérvár, Lövölde utca 24",
  telefon: "+36 70 273 5532",
  telefonHref: "tel:+36702735532",
  email: "hello@sironic.hu",
  adoszam: "33056151-2-07",
  cegjegyzekszam: "07-09-037603",
  nyilvantarto: "Székesfehérvári Törvényszék Cégbírósága",
  szakkepesites: "Villanyszerelő — 4 0713 04 07",
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

export const SOCIAL = [
  { label: "Facebook", href: "https://facebook.com", icon: "Facebook" as const },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" as const },
  { label: "Instagram", href: "https://instagram.com", icon: "Instagram" as const },
] as const;

export const NAV = [
  { label: "Kezdőlap", href: "/" },
  { label: "Szolgáltatások", href: "/szolgaltatasok" },
  { label: "Blog", href: "/blog" },
  { label: "Rólunk", href: "/rolunk" },
  { label: "Kapcsolat", href: "/kapcsolat" },
] as const;
