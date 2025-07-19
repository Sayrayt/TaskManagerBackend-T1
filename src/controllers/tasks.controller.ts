import { Request, Response } from "express";
import { tasksList } from "../data/tasks";
import { Task } from "../models/task.model";
import { log } from "node:console";

export const getTasks = (req: Request, res: Response) => {
  res.json(tasksList);
};

export const getTaskById = (req: Request, res: Response) => {
  const { id } = req.params;
  const task = tasksList.find((task) => task.id === id);
  res.json(task);
};

export const createTask = (req: Request, res: Response) => {
  const newTask: Task = req.body;

  if (!newTask) {
    return res.status(400).json({ message: "Задача не передана" });
  }

  tasksList.unshift(newTask);
  res.status(201).json(newTask);
};

log("tasksList", tasksList);

export const updateTask = (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedTask: Task = req.body;

  const index = tasksList.findIndex((task) => task.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Задача не найдена" });
  }

  tasksList[index] = updatedTask;
  res.status(200).json(updatedTask);
};

export const deleteTask = (req: Request, res: Response) => {
  const { id } = req.params;

  const index = tasksList.findIndex((task) => task.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Задача не найдена" });
  }

  tasksList.splice(index, 1);
  res.status(200).json({ message: "Задача удалена" });
};
