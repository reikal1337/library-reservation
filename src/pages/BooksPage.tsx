import { Outlet } from "react-router-dom";
import BooksList from "../components/Books/BooksList";

const BooksPage = () => {
  return (
    <>
      <h1 className="text-5xl mb-10">BooksPage</h1>

      <BooksList />
      <Outlet />
    </>
  );
};
export default BooksPage;
