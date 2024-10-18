import BookListItem from "./BookListItem";
import { capitalizeFirstLetter } from "../../lib/utils/stringFormation";

type Props = {
  book: DisplayBook;
  quickPickUp: boolean;
  type: BookType;
  days: number;
};

const BookCartCard = ({ book, quickPickUp, type, days }: Props) => {
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
    </>
  );
};

export default BookCartCard;
