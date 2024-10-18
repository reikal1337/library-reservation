import { useEffect, useState } from "react";
import Accordion from "../components/Accordion";
import BookCartCard from "../components/Books/BookCartCard";
import DisplayErrors from "../components/DisplayErrors";
import H1 from "../components/H1";
import Loading from "../components/layout/Loading";
import { useFetchReservations } from "../services/reservationApi";
import Pagination from "../components/Pagination";

const ReservationsPage = () => {
  const { data, isLoading, errorMessages, totalAmountOfRecords } =
    useFetchReservations(1, 10);
  const recordsPerPage = 50;
  const [page, setPage] = useState(1);

  const [totalAmountOfPages, setTotalAmountOfPages] = useState(1);

  useEffect(() => {
    if (totalAmountOfRecords) {
      setTotalAmountOfPages(Math.ceil(totalAmountOfRecords / recordsPerPage));
    }
  }, [totalAmountOfRecords, page]);

  if (isLoading) {
    return (
      <div className="h-56 w-56">
        <Loading color="#1D4ED8" />;
      </div>
    );
  }
  return (
    <>
      <H1 color="#1d4ed8">Reservation Page</H1>
      <div className="mb-10">
        <Pagination
          currentPage={page}
          totalAmountOfPages={totalAmountOfPages}
          onChange={(newPage) => setPage(newPage)}
          radio={2}
        />
      </div>
      {data && (
        <Accordion
          items={data}
          renderTitle={(reservation) =>
            `Reservation #${reservation.id} - Total:  ${reservation.totalPrice}€`
          }
          renderContent={(data) => (
            <div>
              {data.reservationItems.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b py-2"
                >
                  <BookCartCard
                    book={item.book}
                    quickPickUp={item.quickPickUp}
                    type={item.type}
                    days={item.days}
                  />
                </div>
              ))}
            </div>
          )}
        />
      )}
      <DisplayErrors errors={errorMessages} />
    </>
  );
};

export default ReservationsPage;
