import express from "express";
import cors from "cors";
import tasksRouter from "./routes/tasks.routes";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/tasks", tasksRouter);

export default app;
