import { bookList } from "./mockBookData";
import BookCard from "./BookCard";

const BooksList = () => {
  return (
    <ul className="w-3/5 grid grid-cols-4 ">
      {bookList.map((book) => (
        <li className="w-[170px] p-2 transition-shadow duration-300 hover:shadow-xl cursor-pointer">
          <BookCard
            key={book.id}
            imageSrc={book.imageSrc}
            name={book.name}
            year={book.year}
          />
        </li>
      ))}
    </ul>
  );
};

export default BooksList;
