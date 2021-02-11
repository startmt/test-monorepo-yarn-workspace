import { TodoDocument } from "../schema/todo";
import { ITodo } from "utils";
export const transformTodo = (todoMongo: TodoDocument[]) => {
  const mapper: ITodo[] = todoMongo.map((todo) => {
    const todoMap: ITodo = {
      message: todo.message,
      id: todo.id,
    };
    return todoMap;
  });
  return mapper;
};
