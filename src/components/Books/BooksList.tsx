import BookListItem from "./BookListItem";
import LinkList from "../layout/LinkList";
import Loading from "../layout/Loading";
import DisplayErrors from "../DisplayErrors";
import { useFetchBooks } from "../../services/bookApi";

const BooksList = () => {
  const { books, isLoading, errorMessages } = useFetchBooks();
  if (isLoading) {
    return (
      <div className="h-56 w-56">
        <Loading color="#1D4ED8" />;
      </div>
    );
  }

  return (
    <>
      <ul className="w-3/5 grid grid-cols-4 ">
        {books && (
          <LinkList
            toLink="/book/"
            items={books}
            resourceName="book"
            itemComponent={BookListItem}
            itemClassName="w-[170px] p-2 transition-shadow duration-300 hover:shadow-xl cursor-pointer"
          />
        )}
      </ul>
      <DisplayErrors errors={errorMessages} />
    </>
  );
};

export default BooksList;
