import { motion } from "framer-motion";
import { Check, ArrowRight, ShieldCheck } from "lucide-react";
import { Seo } from "../components/Seo";
import { Section } from "../components/Section";
import { Reveal, staggerParent, staggerChild } from "../components/Reveal";
import { Eyebrow } from "../components/Eyebrow";
import { ButtonLink, TextLink } from "../components/Button";
import { Card } from "../components/Card";
import { ServiceIcon } from "../components/ServiceIcon";
import { SERVICES } from "../lib/services";
import { SITE } from "../lib/site";

const ACCENT = SITE.accent;

const nemVallalunkTartalom =
  "Nem végzünk érintésvédelmi vagy szabványossági felülvizsgálatot, és nem állítunk ki ilyen jegyzőkönyvet — ez külön jogosultsághoz kötött tevékenység. Nem foglalkozunk mérőhely-kialakítással és fogyasztásmérő bekötésével — ehhez áramszolgáltatói regisztráció szükséges.";

export function SzolgaltatasokPage() {
  // de-duplicate by slug for the overview grid (7 cards, 5 unique slugs)
  const seen = new Set<string>();
  const uniqueServices = SERVICES.filter((s) => {
    if (seen.has(s.slug)) return false;
    seen.add(s.slug);
    return true;
  });

  return (
    <>
      <Seo
        title="Szolgáltatásaink — SIROVILL"
        description="Épületvillamossági kivitelezés, felújítás, hibaelhárítás, kábelezés és okosotthon-vezérlés — cégeknek és magánszemélyeknek. A kivitelezés november 1-től indul, a felmérés már most díjmentes."
      />
      <section className="relative overflow-hidden border-b border-line/50 pt-36 pb-20 sm:pt-44">
        <div className="hero-grid absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-site px-6">
          <Reveal className="max-w-3xl">
            <Eyebrow accent={ACCENT}>SZOLGÁLTATÁSOK</Eyebrow>
            <h1
              className="mt-6 text-4xl font-bold text-ink sm:text-5xl"
              style={{ letterSpacing: "-0.04em", lineHeight: 1.05 }}
            >
              Szolgáltatásaink
            </h1>
            <p className="mt-5 text-base text-muted sm:text-lg">
              Épületvillamossági kivitelezés, felújítás, hibaelhárítás,
              kábelezés és okosotthon-vezérlés — cégeknek és
              magánszemélyeknek. A kivitelezés november 1-től indul, a
              felmérés már most díjmentes.
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerParent}
        >
          {uniqueServices.map((s, i) => (
            <motion.div key={s.cim} variants={staggerChild} custom={i}>
              <Card accent={ACCENT} glow className="h-full">
                <ServiceIcon name={s.ikon} size={24} strokeWidth={1.5} style={{ color: ACCENT }} />
                <h2 className="mt-4 text-lg font-semibold text-ink">{s.cim}</h2>
                <p className="mt-2 text-sm text-muted">{s.szoveg}</p>
                <div className="mt-5 border-t border-line/50 pt-4">
                  <TextLink to={`/szolgaltatasok/${s.slug}`} className="text-amber">
                    Részletek
                  </TextLink>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section className="border-t border-line/50">
        <Reveal className="max-w-3xl">
          <Eyebrow accent={ACCENT}>ÁTLÁTHATÓSÁG</Eyebrow>
          <h2
            className="mt-6 text-3xl font-semibold text-ink sm:text-4xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            Amit nem vállalunk
          </h2>
          <p className="mt-5 text-base text-muted sm:text-lg">{nemVallalunkTartalom}</p>
          <div
            className="mt-8 rounded-lg border p-6"
            style={{ borderColor: `${ACCENT}40`, background: `${ACCENT}12` }}
          >
            <div className="flex items-start gap-3">
              <ShieldCheck size={22} strokeWidth={1.5} style={{ color: ACCENT }} className="mt-0.5 shrink-0" />
              <p className="text-sm text-ink sm:text-base">
                Ha a munkához felülvizsgálati jegyzőkönyv szükséges, azt
                partnerünkkel biztosítjuk. Szóljon előre, és megszervezzük.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      <section className="relative overflow-hidden border-t border-line/50 py-28">
        <div className="ambient-glow absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-site px-6 text-center">
          <Reveal>
            <h2
              className="mx-auto max-w-2xl text-3xl font-semibold text-ink sm:text-4xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              Foglalja le a novemberi időpontját
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-muted sm:text-lg">
              A felmérés és az ajánlat díjmentes. Az előjegyzés most nyitva.
            </p>
            <div className="mt-9 flex justify-center">
              <ButtonLink to="/kapcsolat" variant="accent">
                Kérem az ingyenes felmérést
                <ArrowRight size={16} />
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
