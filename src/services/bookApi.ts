import { useQuery } from "react-query";
import axiosInstance from "./endpoints";
import { AxiosError } from "axios";
import { handleAxiosError } from "../lib/utils/handleErrors";

//fetches book with pagination params and get totalrecords from header.
export const fetchBooks = async (
  page: number,
  recordsPerPage: number,
  searchParams: URLSearchParams
): Promise<{
  books: DisplayBook[];
  totalAmountOfRecords: number;
}> => {
  const response = await axiosInstance.get<DisplayBook[]>("/books", {
    params: {
      page,
      recordsPerPage,
      ...Object.fromEntries(searchParams.entries()),
    },
  });

  const totalAmountOfRecords = response.headers["totalamountofrecords"]
    ? parseInt(response.headers["totalamountofrecords"], 10)
    : 0;
  return { books: response.data, totalAmountOfRecords };
};

export const useFetchBooks = (
  page: number,
  recordsPerPage: number,
  searchParams: URLSearchParams
) => {
  console.log("fetching books.");

  const searchParamsObject = Object.fromEntries(searchParams.entries());
  console.log(searchParamsObject);

  const { data, isLoading, isError, error } = useQuery<
    { books: DisplayBook[]; totalAmountOfRecords: number },
    AxiosError
  >({
    queryKey: ["books", page, recordsPerPage, searchParamsObject],
    queryFn: () => fetchBooks(page, recordsPerPage, searchParams),
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
