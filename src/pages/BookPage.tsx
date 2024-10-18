import { useNavigate, useParams } from "react-router-dom";
import Modal from "../components/layout/Modal";
import BookListItem from "../components/Books/BookListItem";
import BookReservationForm from "../components/Books/BookReservationForm";
import { useFetchBookById } from "../services/bookApi";
import DisplayErrors from "../components/DisplayErrors";
import Loading from "../components/layout/Loading";

const BookPage = () => {
  const params = useParams<{ bookId: string }>();
  const navigate = useNavigate();
  const { book, isLoading, errorMessages } = useFetchBookById(
    Number(params.bookId)
  );

  console.log("book: ", book);
  return (
    <>
      <Modal
        bodyClass="bg-white my-[10%]  mx-auto p-5 w-[500px]  rounded-md flex justify-center items-center "
        showModel={true}
        onClose={() => navigate("/")}
      >
        {book && (
          <div className="flex  gap-10 justify-center items-center">
            <div className="max-w-[170px]">
              <BookListItem book={book} />
            </div>

            <BookReservationForm book={book} />
          </div>
        )}
        {isLoading && (
          <div className="h-56 w-56">
            <Loading color="#1D4ED8" />;
          </div>
        )}
      </Modal>
      <DisplayErrors errors={errorMessages} />
    </>
  );
};

export default BookPage;
