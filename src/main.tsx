import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BooksPage } from "./pages/BooksPage.tsx";
import ReservationsPage from "./pages/ReservationsPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BooksPage />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "book/:bookId",
        element: <BooksPage />,
      },
    ],
  },
  {
    path: "/myreservations",
    element: <ReservationsPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <App />
  </StrictMode>
);
