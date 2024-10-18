import { useMutation } from "react-query";
import axiosInstance from "./endpoints";
import { AxiosError } from "axios";
import { handleAxiosError } from "../lib/utils/handleErrors";

export const fetchReservationPrice = async (
  items: ReservationItem[]
): Promise<number> => {
  const { data } = await axiosInstance.post<number>(
    "/reservation/get-price",
    items,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return data;
};

export const useFetchReservationPrice = () => {
  const {
    mutate: postItems,
    data: newPrice,
    isLoading,
    isError,
    error,
  } = useMutation<number, AxiosError, ReservationItem[]>(fetchReservationPrice);

  let errorMessages: string[] = [];

  if (isError) {
    errorMessages = handleAxiosError(error);
  }

  return { postItems, newPrice, isLoading, isError, errorMessages };
};
