import { useReservationCart } from "../../lib/context/ReservationContext";
import { capitalizeFirstLetter } from "../../lib/utils/stringFormation";
import DeleteButton from "../buttons/DeleteButton";
import BookListItem from "./BookListItem";

type Props = {
  item: ReservationItem;
};

const BookCartListItem = ({ item }: Props) => {
  const { book, type, days, quickPickUp } = item;
  const { removeItem } = useReservationCart();

  return (
    <>
      <div>
        <BookListItem imageWidth={85} imageHeight={115} book={book} />
      </div>
      <div className="text-2xl font-semibold h-full w-full flex flex-col justify-center items-center ">
        <div>
          {quickPickUp && <p className="">&#9737;Quick Pick Up</p>}
          <p className="">&#9737;{capitalizeFirstLetter(type)}</p>

          <p className="">&#9737;For {days} days</p>
        </div>
      </div>
      <div className="mr-10">
        <DeleteButton onClick={() => removeItem(book.id)} />
      </div>
    </>
  );
};

export default BookCartListItem;
