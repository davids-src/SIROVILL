import { Outlet, ScrollRestoration } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CookieBanner } from "./CookieBanner";
import { Analytics } from "./Analytics";
import { usePageView } from "./Seo";

export function Layout() {
  usePageView();
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
      <Analytics />
      <ScrollRestoration />
    </div>
  );
}
