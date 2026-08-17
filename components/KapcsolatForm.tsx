"use client";

import { useState, useEffect, type FormEvent, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Check, AlertCircle, Send, Clock, MapPin, Phone, Mail } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import { SITE } from "@/lib/site";

const ACCENT = SITE.accent;

const helyszinTipusok = [
  "Lakóingatlan",
  "Iroda",
  "Ipari",
  "Építkezés alatt",
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
  const forras = searchParams.get("forras") ?? "sirovill-kapcsolat";

  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [gdpr, setGdpr] = useState(false);
  const [gdprError, setGdprError] = useState(false);

  useEffect(() => {
    if (gdpr) setGdprError(false);
  }, [gdpr]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!gdpr) {
      setGdprError(true);
      return;
    }
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      nev: data.get("nev"),
      email: data.get("email"),
      telefon: data.get("telefon"),
      helyszinTipus: data.get("helyszin"),
      munkaTipus: data.get("munka"),
      uzenet: data.get("uzenet"),
      forras,
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
        form.reset();
        setGdpr(false);
      } else {
        setStatus("error");
        setErrorMsg(
          "Hiba történt a küldés során. Kérjük, próbálja újra, vagy hívjon minket: +36 70 273 5532."
        );
      }
    } catch {
      setStatus("error");
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

            <Field label="Név" required>
              <input type="text" name="nev" required className={inputCls} placeholder="Teljes név" />
            </Field>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="E-mail" required>
                <input type="email" name="email" required className={inputCls} placeholder="pelda@email.hu" />
              </Field>
              <Field label="Telefonszám">
                <input type="tel" name="telefon" className={inputCls} placeholder="+36 ..." />
              </Field>
            </div>

            <Field label="Ingatlan / helyszín típusa" required>
              <select name="helyszin" required className={inputCls} defaultValue="">
                <option value="" disabled>Válasszon…</option>
                {helyszinTipusok.map((h) => (
                  <option key={h} value={h}>{h}</option>
                ))}
              </select>
            </Field>

            <Field label="Milyen munkát szeretne?" required>
              <select name="munka" required className={inputCls} defaultValue="">
                <option value="" disabled>Válasszon…</option>
                {munkaTipusok.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </Field>

            <Field label="Üzenet / részletek">
              <textarea
                name="uzenet"
                rows={4}
                className={inputCls}
                placeholder="Milyen munkáról van szó? Bármilyen részlet segít."
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
                <a href={SITE.telefonHref} className="hover:text-amber transition-colors duration-150">{SITE.telefon}</a>
              </li>
              <li className="flex items-start gap-3 text-ink">
                <Mail size={18} strokeWidth={1.5} style={{ color: ACCENT }} className="mt-0.5 shrink-0" />
                <a href={`mailto:${SITE.email}`} className="hover:text-amber transition-colors duration-150">{SITE.email}</a>
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
              A felmérés és a rögzített áras ajánlat már most díjmentes. A kivitelezés 2026.
              november 1-től indul.
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
