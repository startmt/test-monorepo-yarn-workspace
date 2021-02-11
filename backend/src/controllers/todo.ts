import { getTodoByIdService, getTodoService } from "../services";
import { Request, Response } from "express";
import { createTodoService } from "~/services";
import {
  IRequestCreateTodoService,
  IRequestGetTodoByIdService,
} from "~/services/todo";

export const getTodoController = async (req: Request, res: Response) => {
  try {
    const responseData = await getTodoService();
    res.send(responseData);
  } catch (e) {
    res.status(400).send("Something went wrong");
  }
};

export const createTodoController = async (
  req: Request<any, any, IRequestCreateTodoService>,
  res: Response
) => {
  try {
    const { body } = req;
    const requestBody = body;
    const responseData = await createTodoService(requestBody);
    res.status(201).end();
  } catch (e) {
    res.status(400).send("Something went wrong");
  }
};

export const getTodoByIdController = async (
  req: Request<IRequestGetTodoByIdService>,
  res: Response
) => {
  try {
    const {
      params: { id },
    } = req;
    const requestBody = { id };
    const responseData = await getTodoByIdService(requestBody);
    res.send(responseData);
  } catch (e) {
    res.status(400).send("Something went wrong");
  }
};
