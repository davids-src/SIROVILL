"use client";

type GtagEvent = Record<string, string | number | boolean | undefined>;

export function trackEvent(name: string, params: GtagEvent = {}) {
  if (typeof window === "undefined") return;
  const w = window as any;
  if (typeof w.gtag === "function") {
    w.gtag("event", name, params);
  }
  if (name === "generate_lead" && typeof w.fbq === "function") {
    w.fbq("track", "Lead", params);
  }
}

export function initSourceTracking() {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const forras = params.get("forras");
  if (forras) {
    sessionStorage.setItem("sirovill_forras", forras);
  }
}

export function getSourceParam(): string {
  if (typeof window === "undefined") return "direct";
  return (
    new URLSearchParams(window.location.search).get("forras") ||
    sessionStorage.getItem("sirovill_forras") ||
    "direct"
  );
}
