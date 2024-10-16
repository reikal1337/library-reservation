import { useNavigate, useParams } from "react-router-dom";
import Modal from "../components/layout/Modal";
import BookListItem from "../components/Books/BookListItem";
import { bookList } from "../components/Books/mockBookData";

const BookPage = () => {
  const params = useParams<{ bookId: string }>();
  const navigate = useNavigate();

  //Should be from db..
  const book = bookList.filter((book) => book.id === params.bookId);

  const handleAddtoCart = () => {};

  return (
    <div>
      <Modal showModel={true} onClose={() => navigate("/")}>
        <BookListItem book={book[0]} />
        <button onClick={handleAddtoCart}>Add to cart</button>
      </Modal>
    </div>
  );
};

export default BookPage;
