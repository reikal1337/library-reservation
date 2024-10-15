import { bookList } from "./mockBookData";
import BookCard from "./BookCard";

const BooksList = () => {
  return (
    <ul>
      {bookList.map((book) => (
        <li>
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
