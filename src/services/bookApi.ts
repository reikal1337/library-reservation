import { useQuery } from "react-query";
import axiosInstance from "./endpoints";
import { AxiosError } from "axios";
import { handleAxiosError } from "../lib/utils/handleErrors";

export const fetchBooks = async (): Promise<DisplayBook[]> => {
  const { data } = await axiosInstance.get<DisplayBook[]>("/books");
  return data;
};

export const fetchBookById = async (id: number): Promise<DisplayBook[]> => {
  const { data } = await axiosInstance.get<DisplayBook[]>(`/books/${id}`);
  return data;
};

export const useFetchBooks = () => {
  const {
    data: books,
    isLoading,
    isError,
    error,
  } = useQuery<DisplayBook[], AxiosError>({
    queryKey: ["books"],
    queryFn: fetchBooks,
    cacheTime: 1000 * 60 * 60 * 2,
    refetchOnWindowFocus: false,
    retry: 2,
  });

  let errorMessages: string[] = [];

  if (isError) {
    errorMessages = handleAxiosError(error);
  }

  return { books, isLoading, isError, errorMessages };
};
