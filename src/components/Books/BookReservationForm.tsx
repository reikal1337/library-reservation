import React, { useState } from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import { capitalizeFirstLetter } from "../../lib/utils/stringFormation";
import { useReservationCart } from "../../lib/context/ReservationContext";

type Props = {
  book: DisplayBook;
};

const BookReservationForm = ({ book }: Props) => {
  const [bookType, setBookType] = useState<BookType>(book.type[0]);
  const [quickPickup, setQuickPickup] = useState<boolean>(false);
  const [days, setDays] = useState<number>(1);
  const { addItem } = useReservationCart();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Selected Book Type:", bookType);
    console.log("Quick Pickup:", quickPickup);
    console.log("Days:", days);
    addItem({
      book,
      type: bookType,
      days,
      quickPickUp: quickPickup,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="h-full w-[200px]">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Type of book:
        </label>
        <select
          value={bookType}
          onChange={(e) => setBookType(e.target.value as BookType)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
        >
          {book.type.map((type) => (
            <option key={type + book.id} value={type}>
              {capitalizeFirstLetter(type)}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          checked={quickPickup}
          onChange={() => setQuickPickup(!quickPickup)}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label className="ml-2 text-sm font-medium text-gray-700">
          Quick Pickup
        </label>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          For How Many Days:
        </label>
        <input
          type="number"
          min="1"
          max="180"
          value={days}
          onChange={(e) => setDays(Number(e.target.value))}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
        />
      </div>

      <PrimaryButton type="submit">Submit</PrimaryButton>
    </form>
  );
};

export default BookReservationForm;
