import { useMutation } from "react-query";
import axiosInstance from "./endpoints";
import { AxiosError, AxiosResponse } from "axios";
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

export const postReservation = async (
  reservation: CreateReservation
): Promise<AxiosResponse> => {
  const response = await axiosInstance.post<AxiosResponse>(
    "/reservation",
    reservation,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response;
};

export const useCreateReservation = () => {
  const {
    mutate: createReservation,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useMutation<AxiosResponse, AxiosError, CreateReservation>(
    postReservation
  );

  let errorMessages: string[] = [];

  if (isError) {
    errorMessages = handleAxiosError(error);
  }

  return { createReservation, isLoading, isSuccess, isError, errorMessages };
};
