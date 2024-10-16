type ReservationCart = {
  books: DisplayBook[];
  totalPrice: number;
};

type ReservationItem = {
  book: DisplayBook;
  type: BookType;
  days: number;
  quickPickUp: boolean;
};
