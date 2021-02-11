import axios from "axios";

export { getTodoApi, createTodoApi } from "./todo";

export const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
});
