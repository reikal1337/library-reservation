import React, { createContext, useReducer, useContext, useMemo } from "react";

type ReservationCartAction =
  | { type: "ADD_ITEM"; payload: ReservationItem }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_TOTAL_PRICE"; payload: number };

interface ReservationContextProps {
  state: ReservationCart;
  addItem: (item: ReservationItem) => void;
  removeItem: (id: string) => void;
  updateTotalPrice: () => void;
}

const ReservationCart = createContext<ReservationContextProps | undefined>(
  undefined
);

const initialCartState: ReservationCart = {
  items: [],
  totalPrice: 0,
};

const reservationReducer = (
  state: ReservationCart,
  action: ReservationCartAction
): ReservationCart => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.book.id !== action.payload),
      };
    case "UPDATE_TOTAL_PRICE":
      return {
        ...state,
        totalPrice: action.payload,
      };
    default:
      return state;
  }
};

export const ReservationCartProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [state, dispatch] = useReducer(reservationReducer, initialCartState);

  const addItem = async (item: ReservationItem) => {
    dispatch({ type: "ADD_ITEM", payload: { ...item } });
  };

  const removeItem = async (id: string) => {
    //should call APi to get new price....

    dispatch({ type: "UPDATE_TOTAL_PRICE", payload: 0 });

    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const updateTotalPrice = async () => {
    //call api to recieve cart price.
    const price = state.totalPrice + 5;

    dispatch({ type: "UPDATE_TOTAL_PRICE", payload: price });
  };

  const value = useMemo(
    () => ({ state, addItem, removeItem, updateTotalPrice }),
    [state]
  );

  return (
    <ReservationCart.Provider value={value}>
      {children}
    </ReservationCart.Provider>
  );
};

export const useReservationCart = () => {
  const context = useContext(ReservationCart);
  if (!context) {
    throw new Error(
      "useReservationCart must be used within a ReservationProvider"
    );
  }
  return context;
};
