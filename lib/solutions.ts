export type SolutionSlug =
  | "uj-epites"
  | "felujitas"
  | "uzlet-iroda"
  | "ipari-kereskedelmi-kivitelezes"
  | "meglevo-halozat-bovitese";

export interface SolutionItem {
  slug: SolutionSlug;
  title: string;
  cardTitle: string;
  cardText: string;
  intro: string;
  icon: "HousePlus" | "Hammer" | "Wrench" | "Building2" | "Zap" | "TrendingUp";
  visualComponent: string;
  metaTitle: string;
  metaDescription: string;
  benefits: { title: string; desc: string }[];
  targetAudience: string;
  processSteps: { title: string; desc: string }[];
  relatedServices: string[];
  relatedBlogSlugs: string[];
  faq: { question: string; answer: string }[];
}

export const SOLUTIONS: Record<SolutionSlug, SolutionItem> = {
  "uj-epites": {
    slug: "uj-epites",
    cardTitle: "Új építés",
    cardText: "Erős- és gyengeáram előkészítése akkor, amikor még minden hozzáférhető.",
    title: "Új építésnél most a legegyszerűbb jól előkészíteni mindent.",
    intro:
      "Villamos hálózat, gyengeáram, LAN-, kamera-, riasztó- és kaputelefon-előkészítés összehangolt nyomvonalakkal, amíg még hozzáférhető a szerkezet.",
    icon: "HousePlus",
    visualComponent: "uj-epites",
    metaTitle: "Új építés villanyszerelés & előkészítés | SIROVILL",
    metaDescription:
      "Erős- és gyengeáram, LAN, kamera és riasztó csővezetékezés új építésű ingatlanokhoz Fejér megyében és Budapesten. Tervezhető, rendezett nyomvonalak.",
    targetAudience: "Új családi házat, társasházat vagy irodaépületet építtető lakossági és üzleti megrendelők.",
    benefits: [
      {
        title: "Egyetlen nyomvonal-tervezés",
        desc: "Nem kell utólag falat vésni, a csövezést és a dobozolást a szerkezetkész állapotban elvégezzük.",
      },
      {
        title: "Kettős kábelezési előkészítés",
        desc: "Az erősáram és a gyengeáram (LAN, riasztó, kamera) elkülönített védőcsőben fut a zavarmentes működésért.",
      },
      {
        title: "Jövőbiztos kapacitás",
        desc: "Megfelelő átmérőjű védőcsövekkel a későbbi bővítések (napelem, EV-töltő, hőszivattyú) bontás nélkül behúzhatók.",
      },
    ],
    processSteps: [
      {
        title: "1. Tervkonzultáció",
        desc: "Tervrajz alapján átbeszéljük a kiállási pontokat, a bútorozást és a gyengeáramú igényeket.",
      },
      {
        title: "2. Nyomvonalkiépítés",
        desc: "Horonyvésés, védőcsövezés, kötődobozok és központi elosztó helyének kiépítése vakolás előtt.",
      },
      {
        title: "3. Kábelezés & Szerelvényezés",
        desc: "Vezetékek behúzása, kötési pontok elkészítése, majd festés után a szerelvények és elosztó szerelése.",
      },
      {
        title: "4. Mérés & Átadási dokumentáció",
        desc: "Folytonosság- és szigetelésmérés, az áramkörök tiszta felcímkézése és átadása.",
      },
    ],
    relatedServices: ["kabelezes-epitkezeskor", "gyengearamu-kabelezes", "okosotthon-vezerles"],
    relatedBlogSlugs: [
      "mit-erdemes-elore-kabelezni-uj-epitesnel",
      "lan-kamera-riaszto-elokeszites-epitkezes",
    ],
    faq: [
      {
        question: "Mikor érdemes bevonni a villanyszerelőt az építkezésbe?",
        answer:
          "Már a szerkezetkész állapot végén, a vakolás és az aljzatbetonozás előtt. Ekkor a nyomvonalak még bontás nélkül alakíthatók ki.",
      },
      {
        question: "Miért fontos a gyengeáram előkészítése?",
        answer:
          "A vakolás után utólag vezetéket vezetni drága és csúnya kábelcsatornákkal jár. Az előre betett védőcső stabil LAN-t és biztonságos riasztóhálózatot garantál.",
      },
    ],
  },
  felujitas: {
    slug: "felujitas",
    cardTitle: "Felújítás / bővítés",
    cardText: "Új áramkörök, elosztó, kiállások és hálózat a meglévő rendszerhez.",
    title: "Felújításkor ne csak a burkolat újuljon meg.",
    intro:
      "Elosztó, áramkörök, szerelvények és új fogyasztók kialakítása a meglévő rendszer állapotának felmérése után.",
    icon: "Hammer",
    visualComponent: "felujitas",
    metaTitle: "Villamos hálózat felújítás és korszerűsítés | SIROVILL",
    metaDescription:
      "Régi alumínium vezetékek cseréje, elosztótábla korszerűsítése és új áramkörök kiépítése lakásokban, házakban és irodákban.",
    targetAudience: "Meglévő ingatlant felújító lakástulajdonosok és ingatlanüzemeltetők.",
    benefits: [
      {
        title: "Biztonságos teljesítmény",
        desc: "Elöregedett alumíniumvezetékek és túlterhelt kötések cseréje modern rézvezetékekre és FI-relére.",
      },
      {
        title: "Nagyfogyasztók külön áramkörön",
        desc: "Klíma, indukciós főzőlap, sütő és mosógép dedikált védelmet kap.",
      },
      {
        title: "Áttekinthető biztosítéktábla",
        desc: "Szelektív kismegszakítók, érintésvédelmi relé és egyértelmű áramköri jelölések.",
      },
    ],
    processSteps: [
      {
        title: "1. Állapotfelmérés",
        desc: "Megvizsgáljuk a meglévő vezetékek, kötődobozok és a főelosztó állapotát.",
      },
      {
        title: "2. Áramköri terv",
        desc: "Meghatározzuk az új fogyasztói igényeket és a szükséges új áramkörök számát.",
      },
      {
        title: "3. Kivitelezés",
        desc: "Régi vezetékek bontása vagy kiváltása, új hornyok és elosztó kiépítése.",
      },
      {
        title: "4. Átadási próba",
        desc: "Terhelési teszt és az átadási jegyzőkönyvvel egybekötött felcímkézett átadás.",
      },
    ],
    relatedServices: ["villanyszereles-felujitas", "vilagitas-korszerusites", "villanyszerelesi-hibaelharitas"],
    relatedBlogSlugs: [
      "villamos-halozat-bovites-mikor-szukseges",
      "mit-erdemes-elore-kabelezni-uj-epitesnel",
    ],
    faq: [
      {
        question: "Bontás nélkül felújítható a villamos hálózat?",
        answer:
          "Amennyiben meglévő védőcsövek jó állapotban vannak, a vezetékek újrahúzhatók vésés nélkül. Ha régebbi védőcső nélküli MM-fal kábel van, ott horonymarásra van szükség.",
      },
      {
        question: "Mennyi ideig tart egy átlagos lakás villamos felújítása?",
        answer:
          "Egy 50-70 m²-es lakás teljes áthúzása és elosztócsere általában 3–6 munkanapot vesz igénybe.",
      },
    ],
  },
  "uzlet-iroda": {
    slug: "uzlet-iroda",
    cardTitle: "Üzleti kivitelezés",
    cardText: "Iroda, üzlet, műhely, telephely és kisebb ipari projektek.",
    title: "Üzlet és iroda villamos infrastruktúrája a napi működésre tervezve.",
    intro:
      "Munkahelyek, világítás, hálózati és technológiai kiállások, konyha, klíma és egyéb fogyasztók összehangolt kialakítása.",
    icon: "Building2",
    visualComponent: "uzlet-iroda",
    metaTitle: "Iroda és üzlethelyiség villanyszerelés | SIROVILL",
    metaDescription:
      "Üzlethelyiségek, irodák és ügyfélterek villamos kivitelezése. Munkaállomások, világítás, rack szekrény betáplálás és szünetmentes áramkörök.",
    targetAudience: "Irodabérlők, üzlet tulajdonosok, kiskereskedelmi egységek és szolgáltató központok.",
    benefits: [
      {
        title: "Zavarmentes napi munkavégzés",
        desc: "Különválasztott számítástechnikai és általános világítási/dugaszoló áramkörök.",
      },
      {
        title: "Rugalmas munkaállomások",
        desc: "Padlócsatornák, szerelvénycsatornák és kiépített rack-kapcsolatok a gyors átállásokhoz.",
      },
      {
        title: "Energiatakarékos LED világítás",
        desc: "Szabványos irodai megvilágítás és jelenlétérzékelős vezérlések.",
      },
    ],
    processSteps: [
      {
        title: "1. Igényfelmérés & Alaprajz",
        desc: "Munkaállomások, szerverszoba, teakonyha és világítási zónák egyeztetése.",
      },
      {
        title: "2. Nyomvonal és elosztó kiépítés",
        desc: "Szerelvénycsatornák, álmennyezeti nyomvonalak és alegység elosztók telepítése.",
      },
      {
        title: "3. Bekötés & Tesztelés",
        desc: "Dugaszolóaljzatok, világítótestek és hálózati pontok szerelése.",
      },
      {
        title: "4. Átadás & Dokumentálás",
        desc: "Nyomvonalrajz és felcímkézett elosztók átadása az üzemeltető részére.",
      },
    ],
    relatedServices: ["vilagitas-korszerusites", "gyengearamu-kabelezes", "ipari-villanyszereles"],
    relatedBlogSlugs: [
      "lan-kamera-riaszto-elokeszites-epitkezes",
      "villamos-halozat-bovites-mikor-szukseges",
    ],
    faq: [
      {
        question: "Tudnak munkaidőn kívül vagy hétvégén is dolgozni?",
        answer:
          "Igen, megegyezés alapján irodai környezetben vállaljuk az éjszakai vagy hétvégi munkavégzést a folyamatos üzletmenet biztosítása érdekében.",
      },
      {
        question: "Számítógépes hálózatot is kiépítenek az áram mellett?",
        answer:
          "Igen, a SIROTECH cégcsoport struktúrájában a strukturált LAN hálózatkiépítést és rack rendszert egy kézből valósítjuk meg.",
      },
    ],
  },
  "ipari-kereskedelmi-kivitelezes": {
    slug: "ipari-kereskedelmi-kivitelezes",
    cardTitle: "Ipari és kereskedelmi kivitelezés",
    cardText: "Műhelyek, telephelyek, üzletek és kisebb ipari környezetek projektalapon.",
    title: "Ipari és kereskedelmi villamos kivitelezés projektalapon.",
    intro:
      "Műhelyek, telephelyek, üzletek és kisebb ipari környezetek erősáramú kialakítása, bővítése és dokumentált átadása.",
    icon: "Zap",
    visualComponent: "ipari-kereskedelmi-kivitelezes",
    metaTitle: "Ipari & Kereskedelmi Villanyszerelés | SIROVILL",
    metaDescription:
      "Műhelyek, ipari csarnokok és telephelyek erősáramú villanyszerelése. Gépbekötés, tálcázás, alelosztók kiépítése és dokumentált átadása.",
    targetAudience: "Műhelytulajdonosok, telephely-üzemeltetők, gyártó és raktározási vállalkozások.",
    benefits: [
      {
        title: "Nagy teherbírású nyomvonalak",
        desc: "Horganyzott kábeltálcák, ipari csőhálózatok és védőcsövek telepítése.",
      },
      {
        title: "Pontos gépbekötések",
        desc: "Gyártói előírások és kapcsolási rajzok szerinti fix vagy csatlakozós gépbetáplálások.",
      },
      {
        title: "Ipari alelosztók & Védelem",
        desc: "Megfelelően méretezett kismegszakítók, motorvédők és főkapcsolók beépítése.",
      },
    ],
    processSteps: [
      {
        title: "1. Helyszíni bejárás",
        desc: "Technológiai berendezések áramigényének és a csarnok/műhely adottságainak rögzítése.",
      },
      {
        title: "2. Kábeltálca & Fővezetékek",
        desc: "Főnyomvonalak, kábeltálcák és alelosztók szerelése.",
      },
      {
        title: "3. Gépbekötés & Zónázás",
        desc: "Munkagépek, elszívók, világítási körök betáplálása.",
      },
      {
        title: "4. Terhelési teszt & Átadás",
        desc: "Fázisegyensúly ellenőrzése, feliratozás és átadási protokoll.",
      },
    ],
    relatedServices: ["ipari-villanyszereles", "vilagitas-korszerusites", "gyengearamu-kabelezes"],
    relatedBlogSlugs: [
      "villamos-halozat-bovites-mikor-szukseges",
      "mit-erdemes-elore-kabelezni-uj-epitesnel",
    ],
    faq: [
      {
        question: "Vállalnak egyedi ipari gépbekötést is?",
        answer:
          "Igen, a gyártó kapcsolási dokumentációja alapján elvégezzük a szükséges kábeltáp és védelmek kialakítását.",
      },
      {
        question: "Milyen területen vállalnak kivitelezést?",
        answer:
          "Elsődlegesen Fejér megyében (Székesfehérvár, Dunaújváros, Mór) és Budapest vonzáskörzetében.",
      },
    ],
  },
  "meglevo-halozat-bovitese": {
    slug: "meglevo-halozat-bovitese",
    cardTitle: "Hálózat bővítése",
    cardText: "Új áramkörök, fogyasztók vagy helyiségek táplálása a meglévő kapacitások felmérése után.",
    title: "Meglévő villamos hálózat bővítése kontrolláltan.",
    intro:
      "Új áramkör, fogyasztó vagy helyiség előtt felmérjük a jelenlegi rendszer terhelhetőségét és ehhez tervezzük a bővítést.",
    icon: "TrendingUp",
    visualComponent: "meglevo-halozat-bovitese",
    metaTitle: "Villamos hálózat bővítése & Új áramkörök | SIROVILL",
    metaDescription:
      "Meglévő villamos elosztó bővítése, új körök behúzása klímához, hőszivattyúhoz, autó-töltőhöz vagy melléképülethez.",
    targetAudience: "Otthonukat vagy telephelyüket új berendezésekkel bővítő ingatlantulajdonosok.",
    benefits: [
      {
        title: "Kapacitásvizsgálat",
        desc: "Megvizsgáljuk a meglévő elosztó és kismegszakítók szabad kapacitását bővítés előtt.",
      },
      {
        title: "Célzott kábelnyomvonal",
        desc: "Új fogyasztók (például EV-töltő, klíma, szauna) közvetlen áramköreinek kiépítése.",
      },
      {
        title: "Elosztóbővítés modulárisan",
        desc: "Amennyiben a meglévő tábla megtelt, kiegészítő vagy nagyobb szekrényre cseréljük.",
      },
    ],
    processSteps: [
      {
        title: "1. Kapacitásmérés",
        desc: "Átnézzük a jelenlegi kismegszakítókat, fővezeték átmérőket és a terhelhetőséget.",
      },
      {
        title: "2. Nyomvonalterv",
        desc: "Kiválasztjuk a legrövidebb, esztétikus vagy rejtett kábelútvonalat az új berendezéshez.",
      },
      {
        title: "3. Szerelés",
        desc: "Kismegszakító vagy FI-relé beépítése, kábelfektetés és csatlakozási pont kiépítése.",
      },
      {
        title: "4. Ellenőrző teszt",
        desc: "Feszültség- és terheléspróba az új berendezés bekapcsolása előtt.",
      },
    ],
    relatedServices: ["villanyszereles-felujitas", "villanyszerelesi-hibaelharitas", "ipari-villanyszereles"],
    relatedBlogSlugs: [
      "villamos-halozat-bovites-mikor-szukseges",
      "mit-erdemes-elore-kabelezni-uj-epitesnel",
    ],
    faq: [
      {
        question: "Szükséges ampermegemelés az áramszolgáltatónál?",
        answer:
          "Amennyiben a meglévő összes áramfelvétel meghaladja a rendelkezésre álló amperszámot, javasoljuk az E.ON / MVM felé történő ampermegemelést. Ebben tanácsot adunk.",
      },
      {
        question: "Lehet-e melléképületbe külön kábelt vinni?",
        answer:
          "Igen, méretezett földkábellel vagy védőcsőben vezetett kábellel, külön alelosztóval biztonságosan táplálható a melléképület.",
      },
    ],
  },
};
