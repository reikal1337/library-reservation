import BookListItem from "./BookListItem";
import LinkList from "../layout/LinkList";
import Loading from "../layout/Loading";
import DisplayErrors from "../DisplayErrors";
import { useFetchBooks } from "../../services/bookApi";
import { useEffect, useState } from "react";
import Pagination from "../Pagination";

const BooksList = () => {
  const recordsPerPage = 4;
  const [page, setPage] = useState(1);

  const { books, isLoading, errorMessages, totalAmountOfRecords } =
    useFetchBooks(page, recordsPerPage);

  const [totalAmountOfPages, setTotalAmountOfPages] = useState(1);

  useEffect(() => {
    if (totalAmountOfRecords) {
      setTotalAmountOfPages(Math.ceil(totalAmountOfRecords / recordsPerPage));
    }
    console.log(totalAmountOfRecords);
  }, [totalAmountOfRecords, page]);

  if (isLoading) {
    return (
      <div className="h-56 w-56">
        <Loading color="#1D4ED8" />;
      </div>
    );
  }

  return (
    <>
      <p className="">Total books: {totalAmountOfRecords}</p>
      <Pagination
        currentPage={page}
        totalAmountOfPages={totalAmountOfPages}
        onChange={(newPage) => setPage(newPage)}
        radio={2}
      />
      <ul className="w-3/5 grid grid-cols-4 mt-10">
        {books && books.length > 0 ? (
          <LinkList
            toLink="/book/"
            items={books}
            resourceName="book"
            itemComponent={BookListItem}
            itemClassName="w-[170px] p-2 transition-shadow duration-300 hover:shadow-xl cursor-pointer"
          />
        ) : (
          <h2 className="text-2xl font-semibold text-center">
            No books available!
          </h2>
        )}
      </ul>
      <DisplayErrors errors={errorMessages} />
    </>
  );
};

export default BooksList;
