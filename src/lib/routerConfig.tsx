import { createBrowserRouter } from "react-router-dom";
import BooksPage from "../pages/BooksPage";
import NotFoundPage from "../pages/NotFoundPage";
import ReservationsPage from "../pages/ReservationsPage";
import MainLayout from "../components/layout/MainLayout";
import BookPage from "../pages/BookPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "",
        element: <BooksPage />,
        children: [
          {
            path: "book/:bookId",
            element: <BookPage />,
          },
        ],
      },

      {
        path: "myreservations",
        element: <ReservationsPage />,
      },
    ],
  },
]);
