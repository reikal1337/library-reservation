type ReservationCart = {
  items: ReservationItem[];
  totalPrice: number;
};

type ReservationItem = {
  id: string;
  book: DisplayBook;
  type: BookType;
  days: number;
  quickPickUp: boolean;
};

type CreateReservationItem = {
  bookId: string;
  type: BookType;
  days: number;
  quickPickUp: boolean;
};

type CreateReservation = {
  items: CreateReservationItem[];
};
