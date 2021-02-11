import { ITodo } from "utils";
import { client } from ".";

export const getTodoApi = async () => {
  return await client.get<ITodo[]>("/todo");
};
export const getTodoByIdApi = async (id: ITodo["id"]) => {
  return await client.get<ITodo>(`/todo/${id}`);
};

interface ICreateTodo {
  message: string;
}

export const createTodoApi = async (todo: ICreateTodo) => {
  return await client.post("/todo", todo);
};

export const updateTodoApi = async (todo: ITodo) => {
  return await client.put("/todo", todo);
};
