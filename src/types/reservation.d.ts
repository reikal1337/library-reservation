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
