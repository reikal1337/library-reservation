import axios, { AxiosError } from "axios";
import { handleAxiosError } from "../lib/utils/handleErrors";
import { useQuery } from "react-query";

const baseUrl = import.meta.env.VITE_BACK_API_URL;

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

export default axiosInstance;

type ApiResponse<T> = {
  data: T[];
  totalAmountOfRecords: number;
};

// generic fetch function
export const fetchArrays = async <T>(
  page: number,
  recordsPerPage: number,
  searchParams: URLSearchParams | null,
  endpoint: string
): Promise<ApiResponse<T>> => {
  const response = await axiosInstance.get<T[]>(`/${endpoint}`, {
    params: {
      page,
      recordsPerPage,
      ...(searchParams ? Object.fromEntries(searchParams.entries()) : {}),
    },
  });

  const totalAmountOfRecords = response.headers["totalamountofrecords"]
    ? parseInt(response.headers["totalamountofrecords"], 10)
    : 0;
  return { data: response.data, totalAmountOfRecords };
};

// generic hook for array fetching.
export function useFetchArray<T>(
  page: number,
  recordsPerPage: number,
  searchParams: URLSearchParams | null,
  endpoint: string
): {
  data: T[] | undefined;
  totalAmountOfRecords: number | undefined;
  isLoading: boolean;
  isError: boolean;
  errorMessages: string[];
} {
  let searchParamsObject;
  if (searchParams) {
    searchParamsObject = Object.fromEntries(searchParams.entries());
  }

  const result = useQuery<ApiResponse<T>, AxiosError>({
    queryKey: [endpoint, page, recordsPerPage, searchParamsObject],
    queryFn: () => fetchArrays<T>(page, recordsPerPage, searchParams, endpoint),
    staleTime: 1000 * 60 * 60 * 2,
    cacheTime: 1000 * 60 * 60 * 2,
    refetchOnWindowFocus: false,
    retry: 2,
  });

  const { data, isLoading, isError, error } = result;

  let errorMessages: string[] = [];

  if (isError && error) {
    errorMessages = handleAxiosError(error);
  }

  return {
    data: data?.data,
    totalAmountOfRecords: data?.totalAmountOfRecords,
    isLoading,
    isError,
    errorMessages,
  };
}
