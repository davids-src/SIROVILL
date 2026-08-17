"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-line/60 bg-bg/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-site items-center justify-between px-6">
        <Link href="/" className="flex items-center" aria-label="SIROVILL főoldal">
          <SirovillLogo />
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors duration-150 ${
                  active ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block">
          <Link
            href="/kapcsolat"
            className="inline-flex items-center rounded bg-amber px-5 py-2.5 text-sm font-semibold text-bg transition-transform duration-150 ease-out hover:scale-[1.02]"
          >
            Ingyenes felmérés
          </Link>
        </div>

        <button
          className="md:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menü"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-b border-line/60 bg-panel">
          <div className="mx-auto flex max-w-site flex-col gap-1 px-6 py-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded px-3 py-2.5 text-sm text-muted hover:bg-bg hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/kapcsolat"
              className="mt-2 inline-flex items-center justify-center rounded bg-amber px-5 py-2.5 text-sm font-semibold text-bg"
            >
              Ingyenes felmérés
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export function SirovillLogo() {
  return (
    <div className="flex h-7 items-center gap-2">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="26" height="26" rx="4" stroke="#F5B81C" strokeWidth="1.5" />
        <path d="M14 6L20 15H16V22H12V15H8L14 6Z" fill="#F5B81C" />
      </svg>
      <span className="font-display text-lg font-bold tracking-tight text-ink">
        SIROVILL
      </span>
    </div>
  );
}
