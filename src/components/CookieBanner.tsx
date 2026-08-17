import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "sirovill_cookie_consent";

type Consent = "accepted" | "denied" | null;

function setGtagConsent(accepted: boolean) {
  const state = accepted ? "granted" : "denied";
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag === "function") {
    gtag("consent", "update", {
      analytics_storage: state,
      ad_storage: state,
      ad_user_data: state,
      ad_personalization: state,
    });
  } else {
    window.localStorage.setItem("sirovill_pending_consent", state);
  }
}

export function CookieBanner() {
  const [consent, setConsent] = useState<Consent>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Consent;
    setConsent(stored);

    // Default deny
    const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
    if (typeof gtag === "function") {
      gtag("consent", "default", {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    }
  }, []);

  function choose(value: "accepted" | "denied") {
    window.localStorage.setItem(STORAGE_KEY, value);
    setConsent(value);
    setGtagConsent(value === "accepted");
    window.dispatchEvent(new CustomEvent("sirovill:consent", { detail: value }));
  }

  if (consent !== null) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4">
      <div className="mx-auto flex max-w-site flex-col items-start gap-4 rounded-lg border border-line bg-panel p-5 shadow-2xl shadow-black/60 sm:flex-row sm:items-center">
        <Cookie size={20} className="shrink-0 text-amber" strokeWidth={1.5} />
        <p className="text-sm text-muted">
          Ez a weboldal sütiket használ a forgalom mérésére. A mérés csak az Ön
          hozzájárulásával indul el. Részletek az{" "}
          <Link to="/adatvedelem" className="text-ink underline underline-offset-2 hover:text-amber">
            adatvédelmi tájékoztatóban
          </Link>
          .
        </p>
        <div className="flex gap-2 sm:ml-auto">
          <button
            onClick={() => choose("denied")}
            className="rounded border border-line px-4 py-2 text-sm font-semibold text-muted transition-colors duration-150 hover:border-silver hover:text-ink"
          >
            Csak szükséges
          </button>
          <button
            onClick={() => choose("accepted")}
            className="rounded bg-amber px-4 py-2 text-sm font-semibold text-bg transition-transform duration-150 ease-out hover:scale-[1.02]"
          >
            Elfogadom
          </button>
        </div>
      </div>
    </div>
  );
}
