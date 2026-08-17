import { Seo } from "../components/Seo";
import { Section } from "../components/Section";
import { Reveal } from "../components/Reveal";
import { Eyebrow } from "../components/Eyebrow";
import { SITE } from "../lib/site";

const ACCENT = SITE.accent;

export function AszfPage() {
  return (
    <>
      <Seo
        title="ÁSZF — SIROVILL"
        description="A SIROVILL általános szerződési feltételei a villanyszerelési szolgáltatásokra."
      />
      <section className="relative overflow-hidden border-b border-line/50 pt-36 pb-20 sm:pt-44">
        <div className="hero-grid absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-site px-6">
          <Reveal className="max-w-3xl">
            <Eyebrow accent={ACCENT}>JOGI</Eyebrow>
            <h1
              className="mt-6 text-4xl font-bold text-ink sm:text-5xl"
              style={{ letterSpacing: "-0.04em", lineHeight: 1.05 }}
            >
              Általános szerződési feltételek
            </h1>
          </Reveal>
        </div>
      </section>

      <Section>
        <Reveal className="max-w-3xl">
          <div className="prose-legal">
            <h2>1. A szolgáltató adatai</h2>
            <p>
              <strong className="text-ink">Cégnév:</strong> {SITE.cegnev}
            </p>
            <p>
              <strong className="text-ink">Cím:</strong> {SITE.cim}
            </p>
            <p>
              <strong className="text-ink">E-mail:</strong>{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </p>
            <p>
              <strong className="text-ink">Telefon:</strong>{" "}
              <a href={SITE.telefonHref}>{SITE.telefon}</a>
            </p>
            <p>
              <strong className="text-ink">Adószám:</strong> {SITE.adoszam}
            </p>
            <p>
              <strong className="text-ink">Cégjegyzékszám:</strong> {SITE.cegjegyzekszam}
            </p>
            <p>
              <strong className="text-ink">Nyilvántartó:</strong> {SITE.nyilvantarto}
            </p>
            <p>
              <strong className="text-ink">Szakképesítés:</strong> {SITE.szakkepesites}
            </p>

            <h2>2. A szolgáltatás köre</h2>
            <p>
              A SIROVILL a SIROTECH Informatikai és Biztonságtechnikai Kft.
              villanyszerelési divíziója. A szolgáltató épületvillamossági
              kivitelezést, felújítást, korszerűsítést, hibaelhárítást,
              kábelezést és okosotthon-vezérlést végez — kizárólag a
              villanyszerelői szakképesítés ({SITE.szakkepesites}) keretébe
              tartozó tevékenységekre korlátozódva.
            </p>
            <p>
              A szolgáltató szolgáltatási területe: {SITE.szolgaltatasiTerulet}.
            </p>

            <h2>3. A kivitelezés időzítése</h2>
            <p>
              A kivitelezés 2026. november 1-től indul. A felmérés és a
              rögzített áras ajánlat már a weboldal élesítésétől díjmentesen
              elérhető. A szolgáltató nem vállal azonnali kivitelezést a
              novemberi kezdés előtt.
            </p>

            <h2>4. Felmérés és ajánlatadás</h2>
            <p>
              A szolgáltató díjmentes helyszíni felmérést kínál. A felmérés
              során a szolgáltató felméri a munkát, és rögzített áras ajánlatot
              ad. Az ajánlat a novemberi kivitelezési kezdésig érvényes marad,
              azaz az ajánlattétel időpontjában rögzített ár nem változik a
              kivitelezés megkezdéséig.
            </p>
            <p>
              A felmérés és az ajánlatadás nem jelentenek kötelezettséget a
              megrendelő felé. A szerződés a megrendelő által elfogadott
              ajánlat és a kivitelezési időpont egyeztetése után jön létre.
            </p>

            <h2>5. Nem vállalt tevékenységek</h2>
            <p>
              A szolgáltató kifejezetten nem vállalja az alábbi tevékenységeket,
              mivel ezek külön jogosultsághoz kötöttek:
            </p>
            <ul>
              <li>Érintésvédelmi felülvizsgálat</li>
              <li>Szabványossági felülvizsgálat</li>
              <li>Villámvédelmi felülvizsgálat</li>
              <li>Bármilyen felülvizsgálati jegyzőkönyv kiállítása</li>
              <li>Mérőhely-kialakítás</li>
              <li>Fogyasztásmérő bekötése</li>
              <li>EPH-mérés</li>
              <li>Tűzvédelmi minősítés</li>
            </ul>
            <p>
              Ha a munkához felülvizsgálati jegyzőkönyv szükséges, azt
              partnerünkkel biztosítjuk. A megrendelő kérheti, hogy a
              szolgáltató szervezze meg a partner bevonását.
            </p>

            <h2>6. Árazás és fizetés</h2>
            <p>
              A kivitelezés ára a felmérés utáni rögzített áras ajánlatban
              kerül meghatározásra. Az ajánlat a kivitelezés megkezdéséig nem
              változik. A fizetési feltételeket az ajánlat tartalmazza.
            </p>

            <h2>7. A kivitelezés feltételei</h2>
            <p>
              A kivitelezés megkezdése előtt a szolgáltató és a megrendelő az
              ajánlatot írásban rögzíti. A kivitelezés ütemezését a felek
              közösen egyeztetik. A szolgáltató a munkát a villanyszerelői
              szakképesítésnek megfelelő szakszerűséggel végzi.
            </p>

            <h2>8. Felelősség</h2>
            <p>
              A szolgáltató a vállalt munkáért a vonatkozó jogszabályok szerint
              felel. A szolgáltató felelősségbiztosítással rendelkezik. A
              szolgáltató nem felel az olyan károkért, amelyek a megrendelő
              által szolgáltatott hibás információk vagy a megrendelő által
              végzett beavatkozások következményei.
            </p>

            <h2>9. Elállás</h2>
            <p>
              A megrendelő az ajánlat elfogadása után, a kivitelezés
              megkezdése előtt bármikor elállhat a szerződéstől. A kivitelezés
              megkezdése utáni elállás esetén a már elvégzett munka díját a
              szolgáltató felszámítja.
            </p>

            <h2>10. Adatkezelés</h2>
            <p>
              A megrendelő személyes adatainak kezelése a külön доступható{" "}
              <a href="/adatvedelem">adatkezelési tájékoztató</a> szerint
              történik.
            </p>

            <h2>11. Vitarendezés</h2>
            <p>
              A felek törekszenek a vitás kérdések békés úton történő
              rendezésére. Amennyiben ez nem vezet eredményre, a vitás ügyben a
              szolgáltató székhelye szerinti bíróság az illetékes.
            </p>

            <h2>12. Hatály</h2>
            <p>
              Jelen általános szerződési feltételek 2026. augusztus 17-től
              hatályosak. A szolgáltató fenntartja a jogot a feltételek
              módosítására, amelyről a megrendelőket előzetesen tájékoztatja.
            </p>

            <p className="mt-8 text-xs text-muted">
              Utolsó frissítés: 2026. augusztus 17.
            </p>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
