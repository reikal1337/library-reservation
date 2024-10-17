import axiosInstance from "./endpoints";

export const fetchBooks = async (): Promise<DisplayBook[]> => {
  const { data } = await axiosInstance.get<DisplayBook[]>("/books");
  return data;
};
