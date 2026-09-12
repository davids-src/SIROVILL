"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    _fbq?: any;
    fbq?: any;
    dataLayer?: unknown[];
  }
}

function loadScript(src: string, key: string) {
  if (document.getElementById(key)) return;
  const s = document.createElement("script");
  s.id = key;
  s.src = src;
  s.async = true;
  document.head.appendChild(s);
}

export function Analytics() {
  useEffect(() => {
    const gaId = process.env.NEXT_PUBLIC_GA_ID;
    const fbPixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

    function activate() {
      const accepted =
        window.localStorage.getItem("sirovill_cookie_consent") === "accepted";

      if (gaId && accepted) {
        loadScript(
          `https://www.googletagmanager.com/gtag/js?id=${gaId}`,
          "ga-gtag-src"
        );
        if (!window.gtag) {
          window.gtag = function (...args: unknown[]) {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push(args);
          };
        }
        window.gtag("consent", "default", {
          analytics_storage: "granted",
          ad_storage: "granted",
          ad_user_data: "granted",
          ad_personalization: "granted",
          send_page_view: false,
        });
        window.gtag("js", new Date());
        window.gtag("config", gaId, { send_page_view: false });
      }

      if (fbPixelId && accepted) {
        if (!window.fbq) {
          const fbq: any = function (...args: unknown[]) {
            fbq.callMethod
              ? fbq.callMethod.apply(fbq, args)
              : fbq.queue.push(args);
          };
          if (!window._fbq) window._fbq = fbq;
          fbq.push = fbq;
          fbq.loaded = true;
          fbq.version = "2.0";
          fbq.queue = [];
          window.fbq = fbq;
        }
        loadScript(
          "https://connect.facebook.net/en_US/fbevents.js",
          "fb-pixel-src"
        );
        window._fbq("init", fbPixelId);
        window._fbq("track", "PageView");
      }
    }

    function onConsent(e: Event) {
      const detail = (e as CustomEvent).detail as string;
      if (detail === "accepted") activate();
    }

    const stored = window.localStorage.getItem("sirovill_cookie_consent");
    if (stored === "accepted") activate();

    window.addEventListener("sirovill:consent", onConsent);
    return () => window.removeEventListener("sirovill:consent", onConsent);
  }, []);

  return null;
}
