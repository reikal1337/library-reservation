import { Outlet } from "react-router-dom";
import BooksList from "../components/Books/BooksList";
import H1 from "../components/H1";

const BooksPage = () => {
  return (
    <>
      <H1 color="#1d4ed8">Books Page</H1>

      <BooksList />
      <Outlet />
    </>
  );
};
export default BooksPage;
