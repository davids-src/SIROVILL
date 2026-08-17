import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    _fbq?: (...args: unknown[]) => void;
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
    const gaId = import.meta.env.VITE_GA_ID as string | undefined;
    const fbPixelId = import.meta.env.VITE_FB_PIXEL_ID as string | undefined;

    function activate() {
      const accepted = window.localStorage.getItem("sirovill_cookie_consent") === "accepted";

      if (gaId && accepted) {
        loadScript(`https://www.googletagmanager.com/gtag/js?id=${gaId}`, "ga-gtag-src");
        if (!window.gtag) {
          window.gtag = function (...args: unknown[]) {
            (window.dataLayer = window.dataLayer || []).push(args);
          };
        }
        // apply default consent as denied, then update if pending
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
        if (!window._fbq) {
          window._fbq = function (...args: unknown[]) {
            (window.fbq = window.fbq || function (...a: unknown[]) {
              (window._fbq as (...a: unknown[]) => void).call?.(null, ...a);
            }).call?.(null, ...args);
          };
        }
        loadScript(`https://connect.facebook.net/en_US/fbevents.js`, "fb-pixel-src");
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
