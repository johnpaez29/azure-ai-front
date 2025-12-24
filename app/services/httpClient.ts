import axios, { AxiosInstance } from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

console.log('url', baseURL);
if (!baseURL) {
  throw new Error("NEXT_PUBLIC_API_BASE_URL is not defined");
}


const httpClient: AxiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default httpClient;