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
      "Dugaljak, kapcsolók, világítási körök, áramkör-bővítés és elosztószekrény szerelése. Ingyenes helyszíni felmérés, rögzített áras ajánlat.",
    lead: "Új konnektorok, kapcsolók, világítási körök, meglévő hálózat felújítása, elosztó bővítése. Lakásban, irodában, telephelyen.",
    mikor: [
      {
        cim: "Ha kevés a konnektor",
        szoveg:
          "Egy 20 éves lakásba szobánként két konnektort terveztek. Ma annyi minden van bedugva, hogy elosztóra elosztó jön — és a végén minden egyetlen áramkörön lóg.",
      },
      {
        cim: "Ha bővül a helyiség vagy a funkció",
        szoveg:
          "Új iroda, átalakított padlástér, garázsból lett műhely, konyhafelújítás új nagyfogyasztókkal.",
      },
      {
        cim: "Ha felújítás zajlik",
        szoveg:
          "Amíg nyitva a fal, ez pár óra munka. Utána vésni kell.",
      },
      {
        cim: "Ha az elosztószekrény tele van",
        szoveg:
          "Nincs hely a kalapsínen, vagy még olvadóbiztosítós tábla van a falon.",
      },
    ],
    mitCsinalunk: [
      "Konnektorok, kapcsolók, kötődobozok kialakítása",
      "Új áramkör húzása — külön kör a nagyfogyasztóknak",
      "Elosztó bővítése, kalapsínes szerelés",
      "Olvadóbiztosítós tábla cseréje kismegszakítósra",
      "FI-relé beépítése, ha még nincs",
      "Alumínium vezeték cseréje rézre",
    ],
    amireFigyelunk:
      "Mielőtt bővítünk, megnézzük a betápot. Hiába húzunk új áramkört, ha a főbiztosíték nem bírja el — ezt előre tisztázzuk, nem a munka közepén derül ki.\n\nA nagyfogyasztóknak külön kör jár: mosogatógép, klíma, főzőlap, műhelygép. Így ha az egyik meghibásodik, nem sötétedik el a fél lakás.",
    mitNeVarjon:
      "Felülvizsgálatot és jegyzőkönyvet nem vállalunk — ha kell, partnerünk elvégzi.",
  },

  "vilagitas-korszerusites": {
    slug: "vilagitas-korszerusites",
    h1: "Világítás korszerűsítés",
    title: "LED világítás korszerűsítés irodába, üzembe, otthonra | SIROVILL",
    description:
      "Fénycsövek és izzók cseréje LED-re, új világítási körök, mozgásérzékelős és időzített kapcsolás. Ingyenes felmérés.",
    lead: "Régi izzók és fénycsövek cseréje LED-re. Kevesebb fogyasztás, jobb fény, és nem kell háromévente létrára mászni. Irodában, üzletben, műhelyben, otthon.",
    mikor: [
      {
        cim: "Ha még fénycső világít",
        szoveg:
          "A hagyományos fénycsövek beszerzése egyre nehezebb, a fogyasztásuk pedig többszöröse egy LED-esnek.",
      },
      {
        cim: "Ha villog vagy zúg a világítás",
        szoveg:
          "Ilyenkor jellemzően az előtét adta meg magát. Csere után nincs többé villogás.",
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
      "A LED-nél nem a watt számít, hanem a lumen és a színhőmérséklet. Irodába 4000K való, nappaliba 2700-3000K. Ha ezt elrontják, a technikailag tökéletes világítás is kellemetlen lesz — sokan ezért nem szeretik a LED-et, pedig csak rossz típust vettek.\n\nMunkaterületen a lux az irányadó, nem a lámpák száma. A felmérésen ezt is megnézzük.",
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
          "Ez nem szeszély. Van oka, és addig jön elő újra, amíg meg nem találjuk.",
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
      "A hibakeresésnél az a lényeg, hogy ne csak a tünetet szüntessük meg. Ha egy kismegszakító folyton kiold, azt ki lehet cserélni nagyobbra — akkor viszont nem a hiba szűnt meg, hanem a védelem.\n\nMelegedő konnektornál ne várjon: kapcsolja le a kört, és hívjon. Ez az egyetlen hibatípus, ami tényleg sürgős — jellemzően laza sorkapocs vagy túlterhelés van mögötte.",
    extraPanel: {
      cim: "Sürgős esetben",
      szoveg:
        "Ha melegszik egy konnektor vagy égett szagot érez, kapcsolja le az adott áramkört, és hívjon. A sürgős eseteket előre soroljuk az ütemezésben.",
    },
  },

  "kabelezes-epitkezeskor": {
    slug: "kabelezes-epitkezeskor",
    h1: "Kábelezés építkezéskor",
    title: "Villanyszerelés építkezéskor — nyomvonal, csövezés | SIROVILL",
    description:
      "Erős- és gyengeáramú nyomvonalak kialakítása, amíg nyitva a fal. Nyomvonaltervezés szerkezetkész állapotban.",
    lead: "Erős- és gyengeáramú nyomvonal kialakítása, amíg nyitva a fal. Utána már csak vésve vagy kábelcsatornában megy.",
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
      "Nyomvonaltervezés alaprajz alapján",
      "Falhoronyvésés, gégecsövezés, kötődobozok elhelyezése",
      "Erős- és gyengeáram összehangolt kiépítése",
      "Kábeltálca, alépítmény kültéren",
      "Üres védőcső a későbbi bővítéshez",
    ],
    amireFigyelunk:
      "A gyengeáramot (hálózat, kamera, riasztó) elkülönítjük az erősáramtól. Ha sokáig egymás mellett futnak, az erősáram belezavar a jelbe — ebből lesz a képzaj és a téves riasztás. Nem kell külön falba tenni, elég a távolság, és merőlegesen keresztezni.\n\nAz üres védőcső a legjobb döntés az egész építkezésen. Amíg nyitva a fal, pár ezer forint. Utána vésés, javítás, festés.\n\nAmit szinte mindenki lekés: a riasztó nyitásérzékelője a tok mellé kerül. Ha az ablak már be van habozva és bevakolva, oda kábel csak bontással megy.",
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
      "A legtöbb okos kapcsolóhoz null kell a süllyesztett dobozba. Régi lakásokban ez sokszor nincs ott — a kapcsolóhoz csak a fázis megy fel. Ilyenkor vagy kábelezni kell, vagy olyan típust választani, ami null nélkül is elmegy. Ez a felmérésen kiderül, nem a telepítés napján.\n\nÉpítkezésnél ez fel sem merül, ha előre szólnak: minden dobozba behúzzuk a nullt, akkor is, ha most még hagyományos kapcsoló kerül bele.",
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
      "Gépbekötésnél a gyártói dokumentáció az irányadó — az abban előírt védelem és keresztmetszet szerint dolgozunk. Ha a papír nincs meg, azt a munka előtt tisztázzuk.\n\nIpari környezetben a mechanikai védelem ugyanolyan fontos, mint a villamos. Ahol targonca jár, ott nem elég a falra pattintott vezeték.",
    mitNeVarjon:
      "Felülvizsgálatot és jegyzőkönyvet nem vállalunk — ha kell, partnerünk elvégzi.",
  },
};
