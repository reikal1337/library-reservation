import { AxiosError } from "axios";

//handle error messages and put them into array.

//From Error to strng[] of error messages.
export const handleAxiosError = (error: AxiosError<unknown>) => {
  let errorMessages: string[] = [];

  if (error) {
    if (error.response?.data) {
      if (Array.isArray(error.response.data)) {
        errorMessages = error.response.data;
      } else if (typeof error.response.data === "string") {
        errorMessages = [error.response.data];
      } else if (typeof error.response.data === "object") {
        errorMessages = Object.values(error.response.data).map(String);
      }
    }
  }
  return errorMessages;
};
