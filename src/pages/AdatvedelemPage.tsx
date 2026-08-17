import { Seo } from "../components/Seo";
import { Section } from "../components/Section";
import { Reveal } from "../components/Reveal";
import { Eyebrow } from "../components/Eyebrow";
import { SITE } from "../lib/site";

const ACCENT = SITE.accent;

export function AdatvedelemPage() {
  return (
    <>
      <Seo
        title="Adatkezelési tájékoztató — SIROVILL"
        description="A SIROVILL adatkezelési tájékoztatója a kapcsolati űrlap és a weboldal használatával kapcsolatos adatkezelésekről."
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
              Adatkezelési tájékoztató
            </h1>
          </Reveal>
        </div>
      </section>

      <Section>
        <Reveal className="max-w-3xl">
          <div className="prose-legal">
            <h2>1. Az adatkezelő adatai</h2>
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

            <h2>2. A kezelt adatkör</h2>
            <p>
              A kapcsolati űrlap kitöltésével az alábbi személyes adatokat
              kezeli az adatkezelő:
            </p>
            <ul>
              <li>Név (kötelező mező)</li>
              <li>E-mail cím (kötelező mező)</li>
              <li>Telefonszám (opcionális mező)</li>
              <li>Ingatlan / helyszín típusa (kötelező mező)</li>
              <li>Munka típusa (kötelező mező)</li>
              <li>Üzenet / részletek (opcionális mező)</li>
              <li>A megkeresés forrása (forrás paraméter, automatikusan rögzítve)</li>
            </ul>

            <h2>3. Az adatkezelés célja</h2>
            <p>
              A személyes adatok kezelése a megkeresés megválaszolása, a
              felmérés időpontjának egyeztetése, valamint ajánlatadás céljából
              történik.
            </p>

            <h2>4. Az adatkezelés jogalapja</h2>
            <p>
              Az adatkezelés jogalapja az érintett hozzájárulása (GDPR 6. cikk
              (1) bekezdés a) pont), amelyet az űrlap beküldésével, az
              adatkezelési tájékoztató elfogadásával ad meg.
            </p>

            <h2>5. Az adatok megőrzési ideje</h2>
            <p>
              A személyes adatokat az ajánlatadás lezárását követően legfeljebb
              12 hónapig őrizzük meg, amennyiben az érintett nem kéri azok
              korábbi törlését. Az adatkezelés céljának megvalósulását követően
              az adatokat haladéktalanul töröljük.
            </p>

            <h2>6. Webanalitika — Google Analytics 4 (GA4)</h2>
            <p>
              A weboldal Google Analytics 4 mérőeszközt használ a forgalmi
              adatok anonimizált mérésére. A mérés csak az Ön kifejezett
              hozzájárulása (cookie consent) esetén indul el. A hozzájárulás
              megadása előtt a mérés nem aktiválódik.
            </p>
            <p>
              A Google Analytics sütiket (cookie-kat) használ. A sütik
              tartalmazta adatok a Google szervereire kerülnek továbbításra.
              Részletes információ a Google adatkezeléséről a Google
              adatvédelmi tájékoztatójában található.
            </p>

            <h2>7. Facebook Pixel</h2>
            <p>
              A weboldal Facebook Pixel mérőeszközt használhat. A Facebook
              Pixel szintén csak az Ön kifejezett hozzájárulása esetén töltődik
              be és működik.
            </p>

            <h2>8. Az érintett jogai</h2>
            <p>Az érintett a következő jogokkal rendelkezik:</p>
            <ul>
              <li>Hozzáférési jog</li>
              <li>Helyesbítéshez való jog</li>
              <li>Törléshez való jog ("az elfeledtetéshez való jog")</li>
              <li>Az adatkezelés korlátozásához való jog</li>
              <li>Az adatok hordozhatóságához való jog</li>
              <li>A hozzájárulás bármelykor történő visszavonásának joga</li>
              <li>Tiltakozás az adatkezelés ellen</li>
            </ul>
            <p>
              A jogok érvényesítése érdekében kérjük, vegye fel velünk a
              kapcsolatot a fenti e-mail címen vagy telefonszámon.
            </p>

            <h2>9. Panasz benyújtásának lehetősége</h2>
            <p>
              Amennyiben úgy véli, hogy személyes adatai kezelése sérti a
              vonatkozó jogszabályokat, panasszal fordulhat a Nemzeti Adatvédelmi
              és Információszabadság Hatósághoz (NAIH):
            </p>
            <ul>
              <li>
                <strong className="text-ink">Név:</strong> Nemzeti Adatvédelmi és Információszabadság Hatósága
              </li>
              <li>
                <strong className="text-ink">Cím:</strong> 1055 Budapest, Falk Miksa utca 9-11.
              </li>
              <li>
                <strong className="text-ink">Telefon:</strong> +36 1 391 1400
              </li>
              <li>
                <strong className="text-ink">E-mail:</strong> ugyfelszolgalat@naih.hu
              </li>
              <li>
                <strong className="text-ink">Honlap:</strong> www.naih.hu
              </li>
            </ul>

            <h2>10. Sütik (cookie-k)</h2>
            <p>
              A weboldal sütiket használ. A sütikről és a hozzájárulás
              kezeléséről a weboldalon megjelenő cookie-banner ad tájékoztatást.
              A hozzájárulás megadása előtt csak a szükséges sütik kerülnek
              tárolásra.
            </p>

            <h2>11. Az adatkezelés biztonsága</h2>
            <p>
              Az adatkezelő megfelelő technikai és szervezeti intézkedésekkel
              biztosítja a személyes adatok biztonságát, beleértve az adatok
              illetéktelen hozzáférés elleni védelmét.
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
