import { ITodo } from "utils";
import { transformTodo, transformTodoList } from "~/mapper";
import { ObjectId } from "mongodb";
import { TodoSchema } from "~/schema";
export const getTodoService = async () => {
  const todo = await TodoSchema.find({}).exec();
  const todoMap = transformTodoList(todo);
  return todoMap;
};

export interface IRequestCreateTodoService extends ITodo {}
export const createTodoService = async (data: IRequestCreateTodoService) => {
  const todo = new TodoSchema({ data });
  return todo.save();
};
export interface IRequestGetTodoByIdService {
  id: ITodo["id"];
}
export const getTodoByIdService = async (id: IRequestGetTodoByIdService) => {
  const todo = await TodoSchema.findById(new ObjectId(id.id)).exec();
  if (todo) {
    const todoMap = transformTodo(todo);
    return todoMap;
  }

  return {};
};
