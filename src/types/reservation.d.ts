type ReservationCart = {
  items: ReservationItem[];
  totalPrice: number;
};

type ReservationItem = {
  book: DisplayBook;
  type: BookType;
  days: number;
  quickPickUp: boolean;
};
