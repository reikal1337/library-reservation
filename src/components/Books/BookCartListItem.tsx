import { useReservationCart } from "../../lib/context/ReservationContext";
import DeleteButton from "../buttons/DeleteButton";
import BookCartCard from "./BookCartCard";

type Props = {
  item: ReservationItem;
};

const BookCartListItem = ({ item }: Props) => {
  const { book, type, days, quickPickUp } = item;
  const { removeItem } = useReservationCart();

  return (
    <>
      <BookCartCard
        book={book}
        quickPickUp={quickPickUp}
        type={type}
        days={days}
      />
      <div className="mr-10">
        <DeleteButton onClick={() => removeItem({ id: book.id, type })} />
      </div>
    </>
  );
};

export default BookCartListItem;
