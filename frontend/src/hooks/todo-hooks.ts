import { useQuery } from "react-query";
import { ITodo } from "utils";
import { getTodoApi, getTodoByIdApi } from "../apis/todo";

export const useTodo = () => {
  const { isFetching, data } = useQuery("todo", () => getTodoApi());

  return {
    todoListoData: data?.data ?? [],
    isTodoListLoading: isFetching,
  };
};

export const useTodoById = (id: ITodo["id"]) => {
  const { isFetching, data } = useQuery(`todo-${id}`, () => getTodoByIdApi(id));

  return {
    todoData: data?.data ?? null,
    isTodoLoading: isFetching,
  };
};
