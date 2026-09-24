"use client";

import { useState, useEffect, useRef, type FormEvent, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Check, AlertCircle, Send, Clock, MapPin, Phone, Mail } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import { SITE } from "@/lib/site";
import { trackEvent, getSourceParam, getAttribution, initAttribution } from "@/lib/analytics";

const ACCENT = SITE.accent;

const customerTypes = [
  "Magánszemély (B2C)",
  "Cég / Vállalkozás (B2B)",
] as const;

const requestTypes = [
  "Új építés",
  "Bővítés / Hálózatfejlesztés",
  "Felújítás / Átalakítás",
  "Hibaelhárítás / Javítás",
  "Karbantartás & Üzemeltetés",
] as const;

const propertyTypes = [
  "Családi ház",
  "Lakás",
  "Iroda",
  "Üzlethelyiség",
  "Műhely / Telephely",
  "Ipari csarnok",
  "Egyéb",
] as const;

const timeframes = [
  "Azonnal / Sürgős",
  "1-3 hónapon belül",
  "3-6 hónapon belül",
  "Tervezési fázisban",
] as const;

const munkaTipusok = [
  "Villanyszerelés és felújítás",
  "Világítás korszerűsítés",
  "Hibaelhárítás",
  "Kábelezés építkezéskor",
  "Gyengeáramú kábelezés",
  "Okosotthon-vezérlés",
  "Ipari villanyszerelés",
  "Egyéb",
] as const;

type Status = "idle" | "submitting" | "success" | "error";

const inputCls =
  "w-full rounded border border-line bg-bg px-4 py-3 text-sm text-ink placeholder:text-muted/50 transition-colors focus:border-silver focus:outline-none";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="label mb-2 block text-muted">
        {label}
        {required && <span style={{ color: ACCENT }}> *</span>}
      </label>
      {children}
    </div>
  );
}

function KapcsolatFormInner() {
  const searchParams = useSearchParams();
  const forras = searchParams.get("forras") || getSourceParam();

  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [gdpr, setGdpr] = useState(false);
  const [gdprError, setGdprError] = useState(false);

  const formStartedRef = useRef(false);

  useEffect(() => {
    initAttribution();
  }, []);

  const handleFormStart = () => {
    if (!formStartedRef.current) {
      formStartedRef.current = true;
      trackEvent("form_start", { form_source: forras, landing_page: typeof window !== "undefined" ? window.location.pathname : "" });
    }
  };

  const handleFieldBlur = (fieldName: string, value: string) => {
    if (value && value.trim().length > 0) {
      trackEvent("form_field_complete", { field_name: fieldName });
    }
  };

  useEffect(() => {
    if (gdpr) setGdprError(false);
  }, [gdpr]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!gdpr) {
      setGdprError(true);
      trackEvent("form_error", { form_type: "kapcsolat_form", error_type: "gdpr_not_accepted" });
      return;
    }
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    
    const nev = data.get("nev") as string;
    const email = data.get("email") as string;
    const telefon = data.get("telefon") as string;
    const customerType = data.get("customer_type") as string;
    const requestType = data.get("request_type") as string;
    const propertyType = data.get("property_type") as string;
    const location = data.get("location") as string;
    const timeframe = data.get("timeframe") as string;
    const munka = data.get("munka") as string;
    const uzenet = data.get("uzenet") as string;

    const attrData = getAttribution();

    const payload = {
      nev,
      email,
      telefon,
      customer_type: customerType,
      request_type: requestType,
      property_type: propertyType,
      location,
      timeframe,
      helyszinTipus: propertyType,
      munkaTipus: munka || requestType,
      uzenet,
      forras,
      attribution: attrData,
      gdpr: true,
    };

    try {
      const res = await fetch("/api/kapcsolat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));

      if (res.ok && json.success === true) {
        setStatus("success");
        trackEvent("generate_lead", {
          lead_source: forras,
          form_type: "kapcsolat_form",
          customer_type: customerType,
          request_type: requestType,
          project_type: propertyType,
          service: munka,
          region: location,
          cta_location: "kapcsolat_oldal",
          source_site: "sirovill.hu",
          landing_page: typeof window !== "undefined" ? window.location.pathname : "",
        });
        form.reset();
        setGdpr(false);
        formStartedRef.current = false;
      } else {
        setStatus("error");
        trackEvent("form_error", { form_type: "kapcsolat_form", error_type: "email_failed" });
        setErrorMsg(
          "Hiba történt a küldés során. Kérjük, próbálja újra, vagy hívjon minket: +36 70 273 5532."
        );
      }
    } catch {
      setStatus("error");
      trackEvent("form_error", { form_type: "kapcsolat_form", error_type: "network" });
      setErrorMsg(
        "Hiba történt a küldés során. Kérjük, próbálja újra, vagy hívjon minket: +36 70 273 5532."
      );
    }
  }

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
      <div className="lg:col-span-7">
        {status === "success" ? (
          <div
            className="rounded-lg border p-8"
            style={{ borderColor: `${ACCENT}40`, background: `${ACCENT}12` }}
          >
            <div className="flex items-start gap-3">
              <Check size={24} strokeWidth={1.5} style={{ color: ACCENT }} className="mt-0.5 shrink-0" />
              <div>
                <h2 className="text-xl font-semibold text-ink">Sikeres küldés</h2>
                <p className="mt-2 text-sm text-ink sm:text-base">
                  Köszönjük megkeresését! 1 munkanapon belül felvesszük Önnel a kapcsolatot.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-5 text-sm font-semibold text-amber transition-colors duration-150 hover:text-ink"
                >
                  Új űrlap küldése
                </button>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-5" noValidate>
            <input type="hidden" name="forras" value={forras} />

            {/* Ügyfél típusa & Igény típusa */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Ügyfél típusa" required>
                <select
                  name="customer_type"
                  required
                  className={inputCls}
                  defaultValue=""
                  onFocus={handleFormStart}
                  onChange={(e) => {
                    handleFieldBlur("customer_type", e.target.value);
                    trackEvent("customer_type_select", { customer_type: e.target.value });
                  }}
                >
                  <option value="" disabled>Válasszon…</option>
                  {customerTypes.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </Field>

              <Field label="Igény típusa" required>
                <select
                  name="request_type"
                  required
                  className={inputCls}
                  defaultValue=""
                  onFocus={handleFormStart}
                  onChange={(e) => {
                    handleFieldBlur("request_type", e.target.value);
                    trackEvent("request_type_select", { request_type: e.target.value });
                  }}
                >
                  <option value="" disabled>Válasszon…</option>
                  {requestTypes.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </Field>
            </div>

            {/* Név */}
            <Field label="Név / Cégnév" required>
              <input
                type="text"
                name="nev"
                required
                className={inputCls}
                placeholder="Név vagy cég elnevezése"
                onFocus={handleFormStart}
                onBlur={(e) => handleFieldBlur("nev", e.target.value)}
              />
            </Field>

            {/* Email & Telefon */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="E-mail" required>
                <input
                  type="email"
                  name="email"
                  required
                  className={inputCls}
                  placeholder="pelda@email.hu"
                  onFocus={handleFormStart}
                  onBlur={(e) => handleFieldBlur("email", e.target.value)}
                />
              </Field>
              <Field label="Telefonszám" required>
                <input
                  type="tel"
                  name="telefon"
                  required
                  className={inputCls}
                  placeholder="+36 30 123 4567"
                  onFocus={handleFormStart}
                  onBlur={(e) => handleFieldBlur("telefon", e.target.value)}
                />
              </Field>
            </div>

            {/* Ingatlan típusa & Helyszín */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Ingatlan típusa" required>
                <select
                  name="property_type"
                  required
                  className={inputCls}
                  defaultValue=""
                  onFocus={handleFormStart}
                  onChange={(e) => handleFieldBlur("property_type", e.target.value)}
                >
                  <option value="" disabled>Válasszon…</option>
                  {propertyTypes.map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </Field>

              <Field label="Munkavégzés helyszíne (Település)" required>
                <input
                  type="text"
                  name="location"
                  required
                  className={inputCls}
                  placeholder="pl. Székesfehérvár, Budapest..."
                  onFocus={handleFormStart}
                  onBlur={(e) => handleFieldBlur("location", e.target.value)}
                />
              </Field>
            </div>

            {/* Tervezett kezdés & Szolgáltatás */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Tervezett kezdés / Időzítés">
                <select
                  name="timeframe"
                  className={inputCls}
                  defaultValue=""
                  onFocus={handleFormStart}
                  onChange={(e) => handleFieldBlur("timeframe", e.target.value)}
                >
                  <option value="" disabled>Válasszon…</option>
                  {timeframes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </Field>

              <Field label="Szolgáltatás (opcionális)">
                <select
                  name="munka"
                  className={inputCls}
                  defaultValue=""
                  onFocus={handleFormStart}
                  onChange={(e) => {
                    handleFieldBlur("munka", e.target.value);
                    trackEvent("service_select", { service: e.target.value });
                  }}
                >
                  <option value="" disabled>Válasszon…</option>
                  {munkaTipusok.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </Field>
            </div>

            <Field label="Üzenet / Részletek">
              <textarea
                name="uzenet"
                rows={4}
                className={inputCls}
                placeholder="Milyen munkáról van szó? Bármilyen részlet segít (alapterület, kiállások száma, elosztó állapota)."
                onFocus={handleFormStart}
              />
            </Field>

            <label className="flex items-start gap-3 rounded border border-line bg-bg px-3.5 py-3 text-sm text-ink transition-colors duration-150 hover:border-silver/50">
              <input
                type="checkbox"
                checked={gdpr}
                onChange={(e) => setGdpr(e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0"
                style={{ accentColor: ACCENT }}
              />
              <span>
                Elolvastam és elfogadom az{" "}
                <a href="/adatvedelem" className="text-amber underline underline-offset-2 hover:text-ink transition-colors duration-150">
                  Adatkezelési tájékoztatót
                </a>
                .
              </span>
            </label>
            {gdprError && (
              <p className="text-xs" style={{ color: "#E8271A" }}>
                Az adatkezelési tájékoztató elfogadása kötelező.
              </p>
            )}

            {status === "error" && (
              <div
                className="flex items-start gap-2 rounded border px-4 py-3 text-sm"
                style={{ borderColor: "#E8271A40", background: "#E8271A12", color: "#F0F0F5" }}
              >
                <AlertCircle size={18} className="mt-0.5 shrink-0" style={{ color: "#E8271A" }} />
                <span>{errorMsg}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center justify-center gap-2 rounded px-6 py-3 text-sm font-semibold text-bg transition-transform duration-150 ease-out hover:scale-[1.02] disabled:opacity-50"
              style={{ background: ACCENT }}
            >
              {status === "submitting" ? "Küldés…" : "Küldés"}
              <Send size={16} />
            </button>
          </form>
        )}
      </div>

      <div className="lg:col-span-5">
        <div className="space-y-4">
          <div className="rounded-lg border border-line bg-surface p-6">
            <Eyebrow accent={ACCENT}>KÖZVETLEN KAPCSOLAT</Eyebrow>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3 text-ink">
                <Phone size={18} strokeWidth={1.5} style={{ color: ACCENT }} className="mt-0.5 shrink-0" />
                <a
                  href={SITE.telefonHref}
                  onClick={() => trackEvent("phone_click", { cta_location: "kapcsolat_sidebar", page_type: "kapcsolat" })}
                  className="hover:text-amber transition-colors duration-150"
                >
                  {SITE.telefon}
                </a>
              </li>
              <li className="flex items-start gap-3 text-ink">
                <Mail size={18} strokeWidth={1.5} style={{ color: ACCENT }} className="mt-0.5 shrink-0" />
                <a
                  href={`mailto:${SITE.email}`}
                  onClick={() => trackEvent("email_click", { cta_location: "kapcsolat_sidebar", page_type: "kapcsolat" })}
                  className="hover:text-amber transition-colors duration-150"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-ink">
                <MapPin size={18} strokeWidth={1.5} style={{ color: ACCENT }} className="mt-0.5 shrink-0" />
                <span>{SITE.cim}</span>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-line bg-surface p-6">
            <div className="flex items-center gap-3">
              <Clock size={20} strokeWidth={1.5} style={{ color: ACCENT }} />
              <span className="label text-muted">VÁLASZIDŐ</span>
            </div>
            <p className="mt-4 text-sm text-ink">1 munkanapon belül jelentkezünk az időpont-egyeztetésre.</p>
          </div>

          <div
            className="rounded-lg border p-6"
            style={{ borderColor: `${ACCENT}40`, background: `${ACCENT}12` }}
          >
            <p className="text-sm text-ink">
              A felmérés és az árajánlat díjmentes. Az ütemezést a felmérés után egyeztetjük.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function KapcsolatForm() {
  return (
    <Suspense fallback={<div className="text-muted text-sm">Betöltés…</div>}>
      <KapcsolatFormInner />
    </Suspense>
  );
}
