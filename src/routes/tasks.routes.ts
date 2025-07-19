import express from "express";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  getTaskById,
} from "../controllers/tasks.controller";

const router = express.Router();

router.get("/", getTasks);
router.post("/", createTask);
router.get("/:id", getTaskById);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
