"use client";

import { ArrowRight, ShieldCheck } from "lucide-react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Eyebrow";
import { ButtonLink, TextLink } from "@/components/Button";
import { Card } from "@/components/Card";
import { ServiceIcon } from "@/components/ServiceIcon";
import { SERVICES } from "@/lib/services";
import { SITE } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";

const ACCENT = SITE.accent;

export default function SzolgaltatasokPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line/50 pt-36 pb-20 sm:pt-44">
        <div className="hero-grid absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-site px-6">
          <Reveal className="max-w-3xl">
            <Eyebrow accent={ACCENT}>SZOLGÁLTATÁSOK</Eyebrow>
            <h1 className="mt-6 text-4xl font-bold text-ink sm:text-5xl" style={{ letterSpacing: "-0.04em", lineHeight: 1.05 }}>
              Szolgáltatásaink
            </h1>
            <p className="mt-5 text-base text-muted sm:text-lg">
              Épületvillamossági kivitelezés, felújítás, hibaelhárítás, kábelezés és okosotthon-vezérlés. Cégeknek és magánembereknek is dolgozunk.
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.06}>
              <Card accent={ACCENT} glow className="h-full">
                <ServiceIcon name={s.ikon} size={24} strokeWidth={1.5} style={{ color: ACCENT }} />
                <h2 className="mt-4 text-lg font-semibold text-ink">{s.cim}</h2>
                <p className="mt-2 text-sm text-muted">{s.szoveg}</p>
                <div className="mt-5 border-t border-line/50 pt-4">
                  <TextLink
                    to={`/szolgaltatasok/${s.slug}`}
                    className="text-amber"
                    onClick={() =>
                      trackEvent("cta_click", {
                        cta_label: "Részletek",
                        cta_location: "szolgaltatas_kartya",
                        service_slug: s.slug,
                      })
                    }
                  >
                    Részletek
                  </TextLink>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-line/50">
        <Reveal className="max-w-3xl">
          <Eyebrow accent={ACCENT}>ÁTLÁTHATÓSÁG</Eyebrow>
          <h2 className="mt-6 text-3xl font-semibold text-ink sm:text-4xl" style={{ letterSpacing: "-0.02em" }}>
            Amit nem vállalunk
          </h2>
          <p className="mt-5 text-base text-muted sm:text-lg">
            Nem végzünk érintésvédelmi vagy szabványossági felülvizsgálatot, és nem állítunk ki jegyzőkönyvet. Mérőhely-kialakítással és fogyasztásmérő bekötésével sem foglalkozunk. Ha a munkához felülvizsgálati jegyzőkönyv szükséges, azt partnerünkkel biztosítjuk — szóljon előre, és megszervezzük.
          </p>
          <div className="mt-8 rounded-lg border p-6" style={{ borderColor: `${ACCENT}40`, background: `${ACCENT}12` }}>
            <div className="flex items-start gap-3">
              <ShieldCheck size={22} strokeWidth={1.5} style={{ color: ACCENT }} className="mt-0.5 shrink-0" />
              <p className="text-sm text-ink sm:text-base">
                Ha a munkához felülvizsgálati jegyzőkönyv szükséges, azt partnerünkkel biztosítjuk. Szóljon előre, és megszervezzük.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      <section className="relative overflow-hidden border-t border-line/50 py-28">
        <div className="ambient-glow absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-site px-6 text-center">
          <Reveal>
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold text-ink sm:text-4xl" style={{ letterSpacing: "-0.02em" }}>
              Kezdjük egy felméréssel
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-muted sm:text-lg">
              Kimegyünk, megnézzük, és megmondjuk, mennyibe kerül. Ennyi.
            </p>
            <div className="mt-9 flex justify-center">
              <ButtonLink
                to="/kapcsolat?forras=zaro-cta"
                variant="accent"
                onClick={() =>
                  trackEvent("cta_click", {
                    cta_label: "Kérem az ingyenes felmérést",
                    cta_location: "zaro_cta",
                  })
                }
              >
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
