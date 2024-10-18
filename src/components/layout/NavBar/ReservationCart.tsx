import { useEffect, useState } from "react";
import { useReservationCart } from "../../../lib/context/ReservationContext";
import ReservationCartButton from "../../buttons/ReservationCartButton";
import NumberIndicator from "../../NumberIndicator";
import Modal from "../Modal";
import PrimaryButton from "../../buttons/PrimaryButton";
import RegularList from "../RegularList";
import BookCartListItem from "../../Books/BookCartListItem";
import { useCreateReservation } from "../../../services/reservationApi";
import Loading from "../Loading";
import { displayErrors } from "../../../lib/utils/diplayError";

const ReservationCart = () => {
  const { state, resetCart } = useReservationCart();
  const [showModel, setShowModel] = useState(false);
  const { createReservation, isLoading, isSuccess, errorMessages } =
    useCreateReservation();

  const handleSaveCart = () => {
    const creationItems: CreateReservationItem[] = state.items.map((item) => ({
      bookId: item.book.id,
      type: item.type,
      days: item.days,
      quickPickUp: item.quickPickUp,
    }));

    const items: CreateReservation = { items: creationItems };

    createReservation(items);
  };

  useEffect(() => {
    if (isSuccess) {
      resetCart();
    }
  }, [isSuccess]);

  if (errorMessages) {
    displayErrors(errorMessages);
  }

  return (
    <div className="relative bg-opacity-45 bg-yellow-50">
      <NumberIndicator
        number={state.items.length}
        addClass="absolute -right-3 -top-3 z-10 "
      />
      <ReservationCartButton
        className="text-4xl hover:text-blue-600 transition-colors duration-300"
        onClick={() => setShowModel(true)}
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
                <ul className="text-gray-800 divide-y ">
                  {!isLoading ? (
                    <>
                      <RegularList
                        items={state.items}
                        resourceName="item"
                        itemClassName="flex h-full justify-center items-center my-2 "
                        itemComponent={BookCartListItem}
                      />

                      <li className="flex w- flex-wrap gap-4 text-lg  font-bold">
                        Total sum{" "}
                        <span className="ml-auto mr-5">
                          {state.totalPrice}&#8364;
                        </span>
                      </li>
                    </>
                  ) : (
                    <div className="h-56 w-56">
                      <Loading color="#1D4ED8" />;
                    </div>
                  )}
                </ul>
                <PrimaryButton onClick={handleSaveCart}>Save</PrimaryButton>
              </div>
            </div>
          </div>
        </>
      </Modal>
    </div>
  );
};

export default ReservationCart;
