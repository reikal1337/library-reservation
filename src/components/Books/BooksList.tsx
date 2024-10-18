import BookListItem from "./BookListItem";
import LinkList from "../layout/LinkList";
import Loading from "../layout/Loading";
import DisplayErrors from "../DisplayErrors";
import { useFetchBooks } from "../../services/bookApi";
import { useEffect, useState } from "react";
import Pagination from "../Pagination";
import SearchForm from "../SearchForm";
import { useSearchParams } from "react-router-dom";

const BooksList = () => {
  const recordsPerPage = 4;
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const { books, isLoading, errorMessages, totalAmountOfRecords } =
    useFetchBooks(page, recordsPerPage, searchParams);

  const [totalAmountOfPages, setTotalAmountOfPages] = useState(1);

  useEffect(() => {
    if (totalAmountOfRecords) {
      setTotalAmountOfPages(Math.ceil(totalAmountOfRecords / recordsPerPage));
    }
  }, [totalAmountOfRecords, page]);

  const handleSearch = (newSearchParams: SearchParams) => {
    const updatedSearchParams = new URLSearchParams(searchParams);

    // Delete unused params.
    Object.entries(newSearchParams).forEach(([key, value]) => {
      if (value) {
        updatedSearchParams.set(key, value.toString());
      } else {
        updatedSearchParams.delete(key);
      }
    });

    setSearchParams(updatedSearchParams);
  };

  if (isLoading) {
    return (
      <div className="h-56 w-56">
        <Loading color="#1D4ED8" />;
      </div>
    );
  }

  return (
    <>
      <p>Displayed books: {totalAmountOfRecords}</p>
      <SearchForm onSearch={handleSearch} />
      <Pagination
        currentPage={page}
        totalAmountOfPages={totalAmountOfPages}
        onChange={(newPage) => setPage(newPage)}
        radio={2}
      />
      <ul className="w-11/12 justify-center grid grid-cols sm:grid-cols-2 md:grid-cols-3 md:w-4/5 lg:w-3/5 lg:grid-cols-4 mt-10">
        {books && books.length > 0 ? (
          <LinkList
            toLink="/book/"
            items={books}
            resourceName="book"
            itemComponent={BookListItem}
            itemClassName="w-[170px] p-2 transition-shadow duration-300 hover:shadow-xl cursor-pointer"
          />
        ) : (
          <h2 className="text-2xl font-semibold text-center w-60">
            No books available!
          </h2>
        )}
      </ul>
      <DisplayErrors errors={errorMessages} />
    </>
  );
};

export default BooksList;
