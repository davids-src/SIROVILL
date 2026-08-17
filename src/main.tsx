import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/globals.css";
import { Providers } from "./components/Providers";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { SzolgaltatasokPage } from "./pages/SzolgaltatasokPage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { RolunkPage } from "./pages/RolunkPage";
import { KapcsolatPage } from "./pages/KapcsolatPage";
import { BlogListPage } from "./pages/BlogListPage";
import { BlogPostPage } from "./pages/BlogPostPage";
import { AdatvedelemPage } from "./pages/AdatvedelemPage";
import { AszfPage } from "./pages/AszfPage";
import { NotFoundPage } from "./pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "szolgaltatasok", element: <SzolgaltatasokPage /> },
      { path: "szolgaltatasok/:slug", element: <ServiceDetailPage /> },
      { path: "rolunk", element: <RolunkPage /> },
      { path: "kapcsolat", element: <KapcsolatPage /> },
      { path: "blog", element: <BlogListPage /> },
      { path: "blog/:slug", element: <BlogPostPage /> },
      { path: "adatvedelem", element: <AdatvedelemPage /> },
      { path: "aszf", element: <AszfPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  </StrictMode>,
);
