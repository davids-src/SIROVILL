export interface MikorItem {
  cim: string;
  szoveg: string;
}

export interface EgyKezbolPanel {
  cim: string;
  szoveg: string;
  linkek?: { label: string; href: string }[];
}

export interface ServiceDetail {
  slug: string;
  h1: string;
  title: string;
  description: string;
  lead: string;
  mikor: MikorItem[];
  mitCsinalunk: string[];
  amireFigyelunk: string;
  mitNeVarjon?: string;
  egyKezbolPanel?: EgyKezbolPanel;
  extraPanel?: { cim: string; szoveg: string };
}

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  "villanyszereles-felujitas": {
    slug: "villanyszereles-felujitas",
    h1: "Villanyszerelés és felújítás",
    title: "Villanyszerelés, felújítás, áramkör-bővítés | SIROVILL",
    description:
      "Dugaljak, kapcsolók, világítási körök, áramkör-bővítés és elosztószekrény szerelése. Ingyenes felmérés, novemberi kezdés.",
    lead: "Új dugaljak, kapcsolók, világítási körök kialakítása, meglévő hálózat felújítása, elosztószekrény bővítése — lakóingatlanban, irodában és telephelyen egyaránt.",
    mikor: [
      {
        cim: "Ha kevés a konnektor",
        szoveg:
          "A legtöbb 15-20 évnél régebbi ingatlant még olyan eszközparkhoz tervezték, ami azóta megsokszorozódott. Ilyenkor jönnek az elosztók, a hosszabbítók, és a terhelés egyetlen áramkörre koncentrálódik.",
      },
      {
        cim: "Ha bővül a helyiség vagy a funkció",
        szoveg:
          "Új iroda, átalakított padlástér, garázsból lett műhely, konyhafelújítás új nagyfogyasztókkal.",
      },
      {
        cim: "Ha felújítás zajlik",
        szoveg:
          "Amíg nyitva a fal, olcsóbb rendbe tenni a hálózatot, mint később visszabontani.",
      },
      {
        cim: "Ha az elosztószekrény tele van",
        szoveg:
          "Nincs hova új kismegszakítót tenni, vagy még régi típusú, cserélendő szerelvények vannak benne.",
      },
    ],
    mitCsinalunk: [
      "Dugaljak, kapcsolók, csatlakozási pontok kialakítása",
      "Új áramkörök kiépítése — külön kör a nagyfogyasztóknak",
      "Elosztószekrény bővítése vagy cseréje",
      "Kismegszakítók, áram-védőkapcsolók cseréje",
      "Elavult vezetékek cseréje, alumínium helyett réz",
      "Terhelés felmérése a bővítés előtt",
    ],
    amireFigyelunk:
      "Bővítés előtt mindig megnézzük, mit bír a meglévő rendszer. Egy új áramkör önmagában nem sokat ér, ha a főbiztosíték vagy a betáplálás nem elég hozzá — ezt előre kell tisztázni, nem a munka közepén.\n\nA nagyfogyasztókat (mosogatógép, klíma, elektromos főzőlap, műhelygép) érdemes külön áramkörre tenni. Így ha egy eszköz hibásodik meg, nem az egész lakás áramtalanodik.",
    mitNeVarjon:
      "Nem végzünk érintésvédelmi vagy szabványossági felülvizsgálatot, és nem állítunk ki ilyen jegyzőkönyvet — ez külön jogosultsághoz kötött. Mérőhely-kialakítással és fogyasztásmérő bekötésével sem foglalkozunk. Ha a munkához felülvizsgálati jegyzőkönyv szükséges, azt partnerünkkel biztosítjuk.",
  },

  "vilagitas-korszerusites": {
    slug: "vilagitas-korszerusites",
    h1: "Világítás korszerűsítés",
    title: "LED világítás korszerűsítés irodába, üzembe, otthonra | SIROVILL",
    description:
      "Fénycsövek és izzók cseréje LED-re, új világítási körök, mozgásérzékelős és időzített kapcsolás. Ingyenes felmérés.",
    lead: "Elavult izzók és fénycsövek cseréje LED-re — alacsonyabb fogyasztás, jobb fényminőség, hosszabb élettartam. Irodában, üzletben, műhelyben és otthon egyaránt.",
    mikor: [
      {
        cim: "Ha még fénycső világít",
        szoveg:
          "A hagyományos fénycsövek beszerzése egyre nehezebb, a fogyasztásuk pedig többszöröse egy LED-esnek.",
      },
      {
        cim: "Ha villog vagy zúg a világítás",
        szoveg:
          "Ez jellemzően az előtét öregedésének jele — cserével a probléma véglegesen megszűnik.",
      },
      {
        cim: "Ha sötét a munkaterület",
        szoveg:
          "A rossz megvilágítás fáradtságot okoz, műhelyben és irodában pedig munkavédelmi kérdés is.",
      },
      {
        cim: "Ha feleslegesen égve maradnak a lámpák",
        szoveg:
          "Ritkán használt helyiségeknél (raktár, mosdó, folyosó, lépcsőház) a mozgásérzékelő pár hónap alatt megtérül.",
      },
    ],
    mitCsinalunk: [
      "Meglévő lámpatestek LED-esre cserélése",
      "Fénycsöves armatúrák átalakítása vagy cseréje",
      "Új világítási körök kialakítása",
      "Mozgásérzékelős kapcsolás beépítése",
      "Időzített és ütemezett kapcsolás",
      "Kültéri és munkaterületi világítás",
      "Vészvilágítás és menekülési útirányjelzés kiépítése",
    ],
    amireFigyelunk:
      "A LED-nél nem a wattszám számít, hanem a fényáram (lumen) és a színhőmérséklet. Egy irodába 4000K körüli semleges fehér való, egy nappaliba inkább 2700-3000K meleg fehér. Rossz színhőmérséklettel a technikailag tökéletes világítás is kellemetlen lesz.\n\nMunkaterületnél a megvilágítási szint (lux) az irányadó — ez helyiségtípusonként eltérő elvárás. A felmérésen ezt is megnézzük, nem csak azt, hány lámpa van.",
  },

  "villanyszerelesi-hibaelharitas": {
    slug: "villanyszerelesi-hibaelharitas",
    h1: "Villanyszerelési hibaelhárítás",
    title: "Zárlatkeresés, hibaelhárítás, kioldó biztosíték | SIROVILL",
    description:
      "Zárlat- és szakadáskeresés, hibás áramkörök javítása, folyamatosan kioldó kismegszakító okainak feltárása.",
    lead: "Zárlatkeresés, hibás áramkörök javítása, szerelvények cseréje. Megkeresésre 1 munkanapon belül jelentkezünk.",
    mikor: [
      {
        cim: "Ha folyamatosan kiold a kismegszakító vagy az életvédelmi relé",
        szoveg:
          "Ez soha nem véletlen — mindig van oka, és addig ismétlődik, amíg meg nem találjuk.",
      },
      {
        cim: "Ha egy helyiségben nincs áram",
        szoveg:
          "Miközben máshol van — ez jellemzően egy megszakadt áramkör vagy hibás csatlakozási pont.",
      },
      {
        cim: "Ha melegszik egy konnektor vagy kapcsoló",
        szoveg:
          "Ez azonnali beavatkozást igényel — a melegedés jellemzően laza kötés vagy túlterhelés jele, és tűzveszélyes.",
      },
      {
        cim: "Ha villog a világítás vagy égett szagot érez",
        szoveg: "Mindkettő olyan jel, amit nem érdemes halogatni.",
      },
    ],
    mitCsinalunk: [
      "Zárlat- és szakadáskeresés műszeres méréssel",
      "A kioldás okának feltárása (túlterhelés, szigetelési hiba, hibás eszköz)",
      "Hibás konnektorok, kapcsolók, csatlakozási pontok cseréje",
      "Laza kötések feltárása és javítása",
      "Villódzó, nem működő világítás javítása",
      "Elosztószekrény hibáinak javítása",
    ],
    amireFigyelunk:
      "A hibaelhárításnál a legfontosabb, hogy ne csak a tünetet szüntessük meg. Ha egy kismegszakító folyamatosan kiold, azt ki lehet cserélni egy nagyobbra — de akkor a védelem szűnik meg, nem a hiba. Mi mindig az okot keressük.\n\nMelegedő szerelvénynél ne várjon: kapcsolja le az adott áramkört, és szóljon minél előbb. Ez az egyetlen olyan hibatípus, ami valóban sürgős.",
    extraPanel: {
      cim: "Fontos",
      szoveg:
        "A kivitelezés 2026. november 1-től indul, így jelenleg azonnali hibaelhárításra nem tudunk kiszállni. Ha sürgős esete van, hívjon — segítünk megtalálni, kihez fordulhat.",
    },
  },

  "kabelezes-epitkezeskor": {
    slug: "kabelezes-epitkezeskor",
    h1: "Kábelezés építkezéskor",
    title: "Villanyszerelés építkezéskor — nyomvonal, csövezés | SIROVILL",
    description:
      "Erős- és gyengeáramú nyomvonalak kialakítása, amíg nyitva a fal. Nyomvonaltervezés szerkezetkész állapotban.",
    lead: "Erős- és gyengeáramú nyomvonalak kialakítása, amíg még nyitva a fal — hogy utólag ne kelljen vésni vagy kábelcsatornát tenni a falra.",
    mikor: [
      {
        cim: "Szerkezetkész állapot után, vakolás előtt",
        szoveg:
          "Ez az egyetlen olyan időszak, amikor minden kábel költséghatékonyan a helyére kerülhet.",
      },
      {
        cim: "Felújításnál, bontás után",
        szoveg: "Ugyanaz a logika: amíg csupasz a fal, minden egyszerű.",
      },
      {
        cim: "Ha még nincs eldöntve minden",
        szoveg:
          "Nem baj — pont ezért érdemes üres védőcsövet is behúzni.",
      },
    ],
    mitCsinalunk: [
      "Nyomvonaltervezés az alaprajz alapján",
      "Falhoronyvésés, csövezés, dobozolás",
      "Erősáramú és gyengeáramú vezetékek összehangolt kiépítése",
      "Alépítmény, kábeltálca kialakítása",
      "Üres védőcsövek a jövőbeli bővítéshez",
      "Együttműködés a hálózat- és biztonságtechnikai tervezéssel",
    ],
    amireFigyelunk:
      "A gyengeáramú kábelt (hálózat, kamera, riasztó) elkülönítjük az erősáramútól. Ha hosszan párhuzamosan futnak, az erősáram zavarhatja a jelet — képzaj, hibás riasztásjelzés formájában. Nem kell külön falba tenni, de távolságot kell tartani, és merőlegesen keresztezni.\n\nAz üres védőcső a legjobb ár-érték arányú döntés az egész építkezésen. Amíg nyitva a fal, néhány ezer forint. Utólag ugyanaz vésés, javítás, festés.\n\nAmit szinte mindenki lekés: a riasztó nyitásérzékelőinek kábele a nyílászárók mellé megy — ezt az ablakbeépítés előtt vagy közben kell megoldani. Ha az ablak már be van habozva és bevakolva, oda utólag csak bontással megy kábel.",
    egyKezbolPanel: {
      cim: "Egy kézből",
      szoveg:
        "Ha egyszerre tervezi a villanyt, a hálózatot és a kamerarendszert, mindhármat mi tudjuk elvégezni — ugyanaz a nyomvonal, egy egyeztetés, egy ütemezés. A hálózatot a SIRONIC, a biztonságtechnikát a SIRO-VÉD divíziónk viszi.",
      linkek: [
        { label: "SIRONIC — hálózatépítés", href: "https://sironic.eu" },
        { label: "SIRO-VÉD — kamera és riasztó", href: "https://siroved.hu" },
      ],
    },
  },

  "gyengearamu-kabelezes": {
    slug: "gyengearamu-kabelezes",
    h1: "Gyengeáramú kábelezés",
    title: "Hálózati, kamera és riasztó kábelezés | SIROVILL",
    description:
      "Strukturált hálózati kábelezés, kamera- és riasztórendszerek táp- és jelkábelezése, kaputelefon, beléptetés.",
    lead: "Hálózati kábelezés, kamera- és riasztórendszerek táp- és jelkábelezése, kaputelefon és beléptetés kiépítése — a nyomvonaltól a szerelvényig.",
    mikor: [
      {
        cim: "Ha új hálózatot építenek",
        szoveg:
          "Iroda, telephely, családi ház — mindenhol, ahol vezetékes hálózat kell.",
      },
      {
        cim: "Ha kamerarendszer készül",
        szoveg:
          "A PoE-s kamera egyetlen kábelen kap képet és tápot — de az a kábel kell.",
      },
      {
        cim: "Ha wifi-problémák vannak",
        szoveg:
          "Az access point a mennyezetre való, a tér közepére — ehhez kábel kell a mennyezetbe.",
      },
      {
        cim: "Ha kaputelefont vagy beléptetést szeretne",
        szoveg:
          "Ezek is vezetékes rendszerek, a nyomvonalat előre kell tervezni.",
      },
    ],
    mitCsinalunk: [
      "Strukturált hálózati kábelezés (Cat6 / Cat6A)",
      "Access point pozíciók kábelezése a mennyezetbe",
      "Kamerák táp- és jelkábelezése, PoE-felkészítés",
      "Riasztó érzékelők és központ kábelezése",
      "Kaputelefon és beléptetőrendszer kábelezése",
      "Patch panel és rack-szekrény bekötése",
    ],
    amireFigyelunk:
      "A falba kerülő kábelt 15-20 évig nem cseréli ki senki. Ezért Cat6 vagy Cat6A az ésszerű választás — a régebbi Cat5e ma még működik, de nem érdemes vele indulni.\n\nAz access point mennyezetre való, a helyiség közepe felé — nem a sarokba, nem a szekrény mögé. Egy jól elhelyezett többet ér, mint három rosszul elhelyezett.\n\nAz elosztószekrény (rack) ne a legmelegebb helyre kerüljön, legyen mellette saját áramkörön konnektor, és legyen hozzáférhető.",
    egyKezbolPanel: {
      cim: "Egy kézből",
      szoveg:
        "A hálózat tervezését és üzemeltetését a SIRONIC, a kamera- és riasztórendszert a SIRO-VÉD divíziónk végzi. Ha mindkettőre szüksége van, egy csapattal egyeztet.",
      linkek: [
        { label: "SIRONIC — IT és hálózat", href: "https://sironic.eu" },
        { label: "SIRO-VÉD — biztonságtechnika", href: "https://siroved.hu" },
      ],
    },
  },

  "okosotthon-vezerles": {
    slug: "okosotthon-vezerles",
    h1: "Okosotthon-vezérlés",
    title: "Okos kapcsoló, redőnyvezérlés, világítás-ütemezés | SIROVILL",
    description:
      "Okos fali kapcsolók, redőny- és világításvezérlés, ütemezett kapcsolás és jelenlét-szimuláció.",
    lead: "Okos kapcsolók, redőny- és világításvezérlés, ütemezett kapcsolás — meglévő hálózatba illesztve vagy építkezéskor kialakítva.",
    mikor: [
      {
        cim: "Ha távolról szeretné vezérelni",
        szoveg:
          "Ami eddig csak a falon volt kapcsolható, az telefonról is elérhetővé válik.",
      },
      {
        cim: "Ha üresen marad az ingatlan",
        szoveg: "Az ütemezett világítás a legolcsóbb jelenlét-szimuláció.",
      },
      {
        cim: "Ha sok a redőny",
        szoveg: "Kézzel napi kétszer végigmenni rajtuk időigényes.",
      },
      {
        cim: "Ha építkezik",
        szoveg:
          "Ilyenkor a legegyszerűbb kiépíteni — az okos kapcsolók nagy részéhez nullavezeték kell a kapcsolódobozba, ami régebbi ingatlanoknál gyakran nincs.",
      },
    ],
    mitCsinalunk: [
      "Okos fali kapcsolók telepítése",
      "Redőny- és árnyékolásvezérlés",
      "Világítás ütemezése, jelenlét-szimuláció",
      "Kapcsolódobozok előkészítése okos eszközökhöz",
      "Meglévő rendszerbe illesztés",
    ],
    amireFigyelunk:
      "A legtöbb okos kapcsolóhoz nullavezeték kell a kapcsolódobozban. Régebbi ingatlanoknál ez sokszor hiányzik — ilyenkor vagy kábelezni kell, vagy olyan eszközt választani, ami nullavezeték nélkül is működik. Ez a felmérésen derül ki, nem a telepítés napján.\n\nÉpítkezéskor ez a probléma fel sem merül, ha előre szólnak: minden kapcsolódobozba behúzzuk a nullát, akkor is, ha most még hagyományos kapcsoló kerül bele.",
  },

  "ipari-villanyszereles": {
    slug: "ipari-villanyszereles",
    h1: "Ipari villanyszerelés",
    title: "Gépbekötés, műhely villanyszerelés, ipari világítás | SIROVILL",
    description:
      "Gépek villamos bekötése gyártói utasítás szerint, műhely- és üzemi villanyszerelés, ipari világítás.",
    lead: "Gépek villamos bekötése a gyártói utasítás szerint, műhelyek és üzemek villanyszerelése, ipari világítás kialakítása.",
    mikor: [
      {
        cim: "Ha új gép érkezik",
        szoveg:
          "És be kell kötni a meglévő rendszerbe, a gyártói előírás szerint.",
      },
      {
        cim: "Ha műhelyt vagy üzemet alakít ki",
        szoveg: "Más terhelés, más igénybevétel, mint egy irodában.",
      },
      {
        cim: "Ha bővül a termelés",
        szoveg:
          "És a meglévő rendszer már nem bírja a megnövekedett terhelést.",
      },
      {
        cim: "Ha korszerűsíti a csarnokvilágítást",
        szoveg:
          "A régi típusú csarnoklámpák fogyasztása és fényminősége messze elmarad a mai LED-es megoldásoktól.",
      },
    ],
    mitCsinalunk: [
      "Gépek villamos bekötése gyártói dokumentáció alapján",
      "Ipari csatlakozók telepítése",
      "Külön áramkörök nagyfogyasztóknak",
      "Ipari elosztószekrény szerelése",
      "Csarnok- és munkaterületi világítás",
      "Kábeltálca, védőcső, ipari nyomvonal kialakítása",
    ],
    amireFigyelunk:
      "Gépbekötésnél mindig a gyártói dokumentáció az irányadó — az abban előírt védelem, keresztmetszet és csatlakozás szerint dolgozunk. Ha a dokumentáció nem elérhető, azt a munka előtt tisztázni kell.\n\nIpari környezetben a mechanikai védelem ugyanolyan fontos, mint a villamos: ahol targonca jár, ott nem elég a falra szerelt vezeték.",
    mitNeVarjon:
      "Nem végzünk gépkönyvi felülvizsgálatot, érintésvédelmi mérést, és nem állítunk ki jegyzőkönyvet. Ha a gép üzembe helyezéséhez ez szükséges, partnerünkkel biztosítjuk.",
  },
};
