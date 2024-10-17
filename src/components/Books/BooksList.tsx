import { bookList } from "./mockBookData";
import BookListItem from "./BookListItem";
import LinkList from "../layout/LinkList";
import { useQuery } from "react-query";
import { fetchBooks } from "../../services/bookApi";
import Loading from "../layout/Loading";

const BooksList = () => {
  const {
    data: books,
    isLoading,
    isError,
  } = useQuery<DisplayBook[]>({
    queryKey: ["books"],
    queryFn: fetchBooks,
    cacheTime: 1000 * 60 * 60 * 2, //2h
    refetchOnWindowFocus: false,
    retry: 2,
  });

  if (isLoading) {
    return (
      <div className="h-56 w-56">
        <Loading color="#1D4ED8" />;
      </div>
    );
  }

  return (
    <ul className="w-3/5 grid grid-cols-4 ">
      <LinkList
        toLink="/book/"
        items={bookList}
        resourceName="book"
        itemComponent={BookListItem}
        itemClassName="w-[170px] p-2 transition-shadow duration-300 hover:shadow-xl cursor-pointer"
      />
    </ul>
  );
};

export default BooksList;
