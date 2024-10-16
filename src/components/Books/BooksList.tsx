import { bookList } from "./mockBookData";
import BookListItem from "./BookListItem";
import LinkList from "../layout/LinkList";

const BooksList = () => {
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
