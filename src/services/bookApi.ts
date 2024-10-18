import { useQuery } from "react-query";
import axiosInstance, { useFetchArray } from "./endpoints";
import { AxiosError } from "axios";
import { handleAxiosError } from "../lib/utils/handleErrors";

export function useFetchBooks(
  page: number,
  recordsPerPage: number,
  searchParams: URLSearchParams
) {
  return useFetchArray<DisplayBook>(
    page,
    recordsPerPage,
    searchParams,
    "books"
  );
}

//fetches book by id.
export const fetchBookById = async (id: number): Promise<DisplayBook> => {
  const { data } = await axiosInstance.get<DisplayBook>(`/books/${id}`);
  return data;
};

export const useFetchBookById = (id: number) => {
  const { data, isLoading, isError, error } = useQuery<DisplayBook, AxiosError>(
    {
      queryKey: ["book", id],
      queryFn: () => fetchBookById(id),
      staleTime: 1000 * 60 * 60 * 2,
      cacheTime: 1000 * 60 * 60 * 2,
      refetchOnWindowFocus: false,
      retry: 2,
    }
  );

  let errorMessages: string[] = [];

  if (isError) {
    errorMessages = handleAxiosError(error);
  }

  return {
    book: data,
    isLoading,
    isError,
    errorMessages,
  };
};
