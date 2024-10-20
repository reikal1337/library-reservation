import { useMutation, useQueryClient } from "react-query";
import axiosInstance, { useFetchArray } from "./endpoints";
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
  const queryClient = useQueryClient();

  const {
    mutate: createReservation,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useMutation<AxiosResponse, AxiosError, CreateReservation>(
    postReservation,
    {
      onSuccess: () => {
        queryClient.invalidateQueries("reservation");
      },
    }
  );

  let errorMessages: string[] = [];

  if (isError) {
    errorMessages = handleAxiosError(error);
  }

  return { createReservation, isLoading, isSuccess, isError, errorMessages };
};

export function useFetchReservations(page: number, recordsPerPage: number) {
  return useFetchArray<Reservation>(page, recordsPerPage, null, "reservation");
}
