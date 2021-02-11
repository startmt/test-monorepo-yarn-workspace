import { Router } from "express";
import { transformTodo } from "../mapper";
import { TodoSchema } from "../schema";

const router = Router();

const getTodoRoute = router.get("/todo", async (req, res) => {
  const todo = await TodoSchema.find({}).exec();
  const todoMap = transformTodo(todo);
  res.send({ data: todoMap });
});

const createTodoRoute = router.post("/todo", async (req, res) => {
  const todo = new TodoSchema({ ...req.body });
  todo.save();
  res.status(201).end();
});

router.use([getTodoRoute, createTodoRoute]);
export default router;
