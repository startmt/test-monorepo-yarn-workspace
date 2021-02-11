import {
  createTodoController,
  getTodoByIdController,
  getTodoController,
} from "~/controllers";
import { Router } from "express";

const router = Router();

const getTodoRoute = router.get("/todo", getTodoController);
const getTodoByIdRoute = router.get("/todo/:id", getTodoByIdController);

const createTodoRoute = router.post("/todo", createTodoController);

const notFound = router.all("*", (req, res) => {
  return res.status(404).send("Not Found");
});
router.use([getTodoRoute, createTodoRoute, getTodoByIdRoute, notFound]);
export default router;
