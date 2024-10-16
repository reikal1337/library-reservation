import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./lib/routerConfig.tsx";
import { ReservationCartProvider } from "./lib/context/ReservationContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReservationCartProvider>
      <RouterProvider router={router} />
    </ReservationCartProvider>
  </StrictMode>
);
