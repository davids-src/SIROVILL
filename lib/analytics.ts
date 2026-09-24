"use client";

export type GtagEventParams = Record<string, string | number | boolean | undefined>;

export interface TouchPoint {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  landing_page?: string;
  referrer?: string;
  timestamp?: string;
}

export interface AttributionData {
  first_touch: TouchPoint;
  last_touch: TouchPoint;
}

const ATTRIBUTION_STORAGE_KEY = "sirovill_attr_data";

export function trackEvent(name: string, params: GtagEventParams = {}) {
  if (typeof window === "undefined") return;
  const w = window as any;
  if (typeof w.gtag === "function") {
    w.gtag("event", name, params);
  }
  if (name === "generate_lead" && typeof w.fbq === "function") {
    w.fbq("track", "Lead", params);
  }
}

export function initAttribution(): AttributionData {
  if (typeof window === "undefined") {
    return { first_touch: {}, last_touch: {} };
  }

  const urlParams = new URLSearchParams(window.location.search);
  const currentLanding = window.location.pathname + window.location.search;
  const currentReferrer = document.referrer || "direct";
  const nowIso = new Date().toISOString();

  const utmSource = urlParams.get("utm_source") || undefined;
  const utmMedium = urlParams.get("utm_medium") || undefined;
  const utmCampaign = urlParams.get("utm_campaign") || undefined;
  const utmContent = urlParams.get("utm_content") || undefined;
  const utmTerm = urlParams.get("utm_term") || undefined;
  const gclid = urlParams.get("gclid") || undefined;
  const gbraid = urlParams.get("gbraid") || undefined;
  const wbraid = urlParams.get("wbraid") || undefined;
  const forras = urlParams.get("forras") || undefined;

  const currentTouch: TouchPoint = {
    utm_source: utmSource || forras,
    utm_medium: utmMedium,
    utm_campaign: utmCampaign,
    utm_content: utmContent,
    utm_term: utmTerm,
    gclid,
    gbraid,
    wbraid,
    landing_page: currentLanding,
    referrer: currentReferrer,
    timestamp: nowIso,
  };

  let existing: AttributionData = { first_touch: {}, last_touch: {} };
  try {
    const raw = localStorage.getItem(ATTRIBUTION_STORAGE_KEY);
    if (raw) existing = JSON.parse(raw);
  } catch {
    // fallback empty
  }

  const isFirstTouchEmpty = !existing.first_touch || Object.keys(existing.first_touch).length === 0;

  if (isFirstTouchEmpty) {
    existing.first_touch = currentTouch;
  }

  const hasNewMarketingParam = utmSource || utmMedium || utmCampaign || gclid || gbraid || wbraid || forras;
  if (hasNewMarketingParam || !existing.last_touch || Object.keys(existing.last_touch).length === 0) {
    existing.last_touch = currentTouch;
  }

  try {
    localStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(existing));
  } catch {
    // quota exceeded or private browsing
  }

  if (forras) {
    sessionStorage.setItem("sirovill_forras", forras);
  }

  return existing;
}

export function getAttribution(): AttributionData {
  if (typeof window === "undefined") return { first_touch: {}, last_touch: {} };
  try {
    const raw = localStorage.getItem(ATTRIBUTION_STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {
    // ignore
  }
  return initAttribution();
}

export function getSourceParam(): string {
  if (typeof window === "undefined") return "direct";
  const searchForras = new URLSearchParams(window.location.search).get("forras");
  if (searchForras) return searchForras;
  const sessionForras = sessionStorage.getItem("sirovill_forras");
  if (sessionForras) return sessionForras;
  const attr = getAttribution();
  return attr.last_touch?.utm_source || attr.first_touch?.utm_source || "direct";
}
