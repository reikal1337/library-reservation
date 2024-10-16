import { useNavigate, useParams } from "react-router-dom";
import Modal from "../components/layout/Modal";
import BookListItem from "../components/Books/BookListItem";
import { bookList } from "../components/Books/mockBookData";
import BookReservationForm from "../components/Books/BookReservationForm";

const BookPage = () => {
  const params = useParams<{ bookId: string }>();
  const navigate = useNavigate();

  //Should be from db..
  const book = bookList.filter((book) => book.id === params.bookId);

  return (
    <div>
      <Modal
        bodyClass="bg-white my-[10%] mx-auto p-5 w-[500px]  rounded-md flex justify-center items-center "
        showModel={true}
        onClose={() => navigate("/")}
      >
        <div className="flex gap-10 justify-center items-center">
          <div className="max-w-[170px]">
            <BookListItem book={book[0]} />
          </div>

          <BookReservationForm book={book[0]} />
        </div>
      </Modal>
    </div>
  );
};

export default BookPage;
