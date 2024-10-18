import React, {
  createContext,
  useReducer,
  useContext,
  useMemo,
  useEffect,
} from "react";
import { useFetchReservationPrice } from "../../services/reservationApi";

type RemoveItem = {
  id: string;
  type: BookType;
};

type ReservationCartAction =
  | { type: "ADD_ITEM"; payload: ReservationItem }
  | { type: "REMOVE_ITEM"; payload: RemoveItem }
  | { type: "UPDATE_TOTAL_PRICE"; payload: number };

interface ReservationContextProps {
  state: ReservationCart;
  addItem: (item: ReservationItem) => void;
  removeItem: (data: RemoveItem) => void;
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
    //removes book by id unless type is different.
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter(
          (item) =>
            !(
              item.book.id === action.payload.id &&
              item.type === action.payload.type
            )
        ),
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

//reservation contextAPI to store items in cart and to get from API cart price.
export const ReservationCartProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [state, dispatch] = useReducer(reservationReducer, initialCartState);
  const { postItems, newPrice } = useFetchReservationPrice();

  const addItem = async (newItem: ReservationItem) => {
    //checks if it's in cart. Can be same book but different types.
    const existingItem = state.items.find(
      (item) => item.book.id === newItem.book.id && item.type === newItem.type
    );

    if (!existingItem) {
      dispatch({
        type: "ADD_ITEM",
        payload: { ...newItem },
      });
      updateTotalPrice();
    }
  };

  const removeItem = async (data: RemoveItem) => {
    dispatch({ type: "REMOVE_ITEM", payload: data });
    updateTotalPrice();
  };

  const updateTotalPrice = () => {
    if (state.items.length == 0) {
      dispatch({ type: "UPDATE_TOTAL_PRICE", payload: 0 });
      return;
    } else {
      postItems(state.items);
    }
  };

  //useeffect checks for item or price change to update it.
  useEffect(() => {
    updateTotalPrice();
  }, [state.items, postItems]);

  useEffect(() => {
    if (state.items.length > 0) {
      if (newPrice !== undefined) {
        dispatch({ type: "UPDATE_TOTAL_PRICE", payload: newPrice });
      }
    }
  }, [newPrice]);

  const value = useMemo(
    () => ({
      state,
      addItem,
      removeItem,
      updateTotalPrice,
    }),
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
