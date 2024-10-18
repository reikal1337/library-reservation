import { useQuery } from "react-query";
import axiosInstance from "./endpoints";
import { AxiosError } from "axios";
import { handleAxiosError } from "../lib/utils/handleErrors";

export const fetchBooks = async (
  page: number,
  recordsPerPage: number
): Promise<{
  books: DisplayBook[];
  totalAmountOfRecords: number;
}> => {
  const response = await axiosInstance.get<DisplayBook[]>("/books", {
    params: { page, recordsPerPage },
  });

  const totalAmountOfRecords = response.headers["totalamountofrecords"]
    ? parseInt(response.headers["totalamountofrecords"], 10)
    : 0;
  return { books: response.data, totalAmountOfRecords };
};

export const fetchBookById = async (id: number): Promise<DisplayBook[]> => {
  const { data } = await axiosInstance.get<DisplayBook[]>(`/books/${id}`);
  return data;
};

export const useFetchBooks = (page: number, recordsPerPage: number) => {
  const { data, isLoading, isError, error } = useQuery<
    { books: DisplayBook[]; totalAmountOfRecords: number },
    AxiosError
  >({
    queryKey: ["books", page, recordsPerPage],
    queryFn: () => fetchBooks(page, recordsPerPage),
    staleTime: 1000 * 60 * 60 * 2,
    cacheTime: 1000 * 60 * 60 * 2,
    refetchOnWindowFocus: false,
    retry: 2,
  });

  let errorMessages: string[] = [];

  if (isError) {
    errorMessages = handleAxiosError(error);
  }

  return {
    books: data?.books,
    totalAmountOfRecords: data?.totalAmountOfRecords,
    isLoading,
    isError,
    errorMessages,
  };
};
