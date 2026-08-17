"use client";

import Link from "next/link";
import { Facebook, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import { SITE, DIVIZIOK, SOCIAL, NAV } from "@/lib/site";
import { SirovillLogo } from "./Navbar";
import { trackEvent } from "@/lib/analytics";

const SOCIAL_ICONS = { Facebook, Linkedin, Instagram } as const;

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line/50 bg-surface/40">
      <div className="mx-auto max-w-site px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <SirovillLogo />
            <p className="mt-4 max-w-xs text-sm text-muted">
              Villanyszerelés a SIROTECH cégcsoportban.
            </p>
            {SOCIAL.length > 0 && (
              <div className="mt-5 flex gap-3">
                {SOCIAL.filter((s) => s.href).map((s) => {
                  const Icon = SOCIAL_ICONS[s.icon];
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="text-muted transition-colors duration-150 hover:text-amber"
                    >
                      <Icon size={20} strokeWidth={1.5} />
                    </a>
                  );
                })}
              </div>
            )}
          </div>


          <div>
            <h3 className="label text-muted">Szolgáltatások</h3>
            <ul className="mt-5 space-y-3">
              <li><FooterLink href="/szolgaltatasok">Szolgáltatások áttekintő</FooterLink></li>
              <li><FooterLink href="/szolgaltatasok/villanyszereles-felujitas">Villanyszerelés és felújítás</FooterLink></li>
              <li><FooterLink href="/szolgaltatasok/vilagitas-korszerusites">Világítás korszerűsítés</FooterLink></li>
              <li><FooterLink href="/szolgaltatasok/villanyszerelesi-hibaelharitas">Hibaelhárítás</FooterLink></li>
              <li><FooterLink href="/szolgaltatasok/kabelezes-epitkezeskor">Kábelezés építkezéskor</FooterLink></li>
              <li><FooterLink href="/szolgaltatasok/gyengearamu-kabelezes">Gyengeáramú kábelezés</FooterLink></li>
              <li><FooterLink href="/szolgaltatasok/okosotthon-vezerles">Okosotthon-vezérlés</FooterLink></li>
              <li><FooterLink href="/szolgaltatasok/ipari-villanyszereles">Ipari villanyszerelés</FooterLink></li>
            </ul>
          </div>

          <div>
            <h3 className="label text-muted">SIROTECH Group</h3>
            <ul className="mt-5 space-y-3">
              {DIVIZIOK.map((d) => (
                <li key={d.nev}>
                  <a
                    href={d.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent("outbound_click", { target_site: d.href.replace("https://", ""), location: "footer" })}
                    className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors duration-150 hover:text-ink"
                  >
                    <span
                      className="inline-block h-1.5 w-1.5 rounded-full"
                      style={{ background: d.szin, boxShadow: `0 0 6px ${d.szin}` }}
                    />
                    {d.nev} — {d.szoveg}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition-opacity duration-150 group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="label mt-8 text-muted">Kapcsolat</h3>
            <ul className="mt-5 space-y-2 text-sm text-muted">
              <li>
                <a
                  href={SITE.telefonHref}
                  onClick={() => trackEvent("phone_click", { location: "footer" })}
                  className="hover:text-ink transition-colors duration-150"
                >
                  {SITE.telefon}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  onClick={() => trackEvent("email_click", { location: "footer" })}
                  className="hover:text-ink transition-colors duration-150"
                >
                  {SITE.email}
                </a>
              </li>
              <li>{SITE.cim}</li>
            </ul>

          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 border-t border-line/50 pt-7 text-sm text-muted sm:grid-cols-4">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-ink transition-colors duration-150">
              {n.label}
            </Link>
          ))}
          <Link href="/adatvedelem" className="hover:text-ink transition-colors duration-150">Adatvédelem</Link>
          <Link href="/aszf" className="hover:text-ink transition-colors duration-150">ÁSZF</Link>
        </div>

        <p className="mt-7 font-mono text-xs leading-relaxed text-muted">
          © {year} {SITE.cegnev} | Adószám: {SITE.adoszam} | Cégjegyzékszám: {SITE.cegjegyzekszam} | Nyilvántartó: {SITE.nyilvantarto} | {SITE.cim}
        </p>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm text-muted transition-colors duration-150 hover:text-ink">
      {children}
    </Link>
  );
}
