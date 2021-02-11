import { TodoDocument } from "../schema/todo";
import { ITodo } from "utils";
export const transformTodoList = (todoMongo: TodoDocument[]) => {
  const mapper: ITodo[] = todoMongo.map((todo) => {
    const todoMap: ITodo = {
      message: todo.message,
      id: todo.id,
    };
    return todoMap;
  });
  return mapper;
};

export const transformTodo = (todoMongo: TodoDocument) => ({
  message: todoMongo.message,
  id: todoMongo.id,
});
