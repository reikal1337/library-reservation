import { useState } from "react";
import { useReservationCart } from "../../../lib/context/ReservationContext";
import { bookList } from "../../Books/mockBookData";
import ReservationCartButton from "../../buttons/ReservationCartButton";
import NumberIndicator from "../../NumberIndicator";
import Modal from "../Modal";
import PrimaryButton from "../../buttons/PrimaryButton";

const ReservationCart = () => {
  const { state, addItem } = useReservationCart();
  const [showModel, setShowModel] = useState(false);

  const handleOpenCart = () => {
    //Should call update
    addItem(bookList[0]);
    setShowModel(true);
  };

  return (
    <div className="relative bg-opacity-45 w-full ">
      <NumberIndicator
        number={state.books.length}
        addClass="absolute -right-5 -top-3 z-10 "
      />
      <ReservationCartButton
        className="absolute text-4xl"
        onClick={handleOpenCart}
      />
      <Modal
        showModel={showModel}
        backgroundClass="fixed inset-0 w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] "
        bodyClass="w-full max-w-xl bg-white shadow-lg relative ml-auto h-full"
        onClose={() => setShowModel(false)}
      >
        <>
          <div className="overflow-auto p-6 h-[calc(100vh-135px)]">
            <div className="flex items-center gap-4 text-gray-800">
              {/* // */}
              <div className="p-6 absolute bottom-0 w-full border-t bg-white">
                <ul className="text-gray-800 divide-y">
                  <li className="flex w- flex-wrap gap-4 text-lg font-bold">
                    Total sum <span className="ml-auto mr-5">20e</span>
                  </li>
                </ul>
                <PrimaryButton onClick={() => console.log("Submiting")} />
              </div>
            </div>
          </div>
        </>
      </Modal>
    </div>
  );
};

export default ReservationCart;
