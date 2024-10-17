import axios from "axios";

const baseUrl = import.meta.env.VITE_BACK_API_URL;

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

export default axiosInstance;
