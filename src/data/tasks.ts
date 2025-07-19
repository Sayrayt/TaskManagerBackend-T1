import { Task } from "../models/task.model";
import { v4 as uuidv4 } from "uuid";
import { format } from "date-fns";

const now = new Date();
const formatted = format(now, "dd.MM.yyyy");

let tasksList: Task[] = [
  {
    id: uuidv4(),
    title: "Исправить падение приложения",
    description: "Ошибка при открытии настроек",
    status: "To Do",
    priority: "High",
    category: "Bug",
    date: formatted,
  },
  {
    id: uuidv4(),
    title: "Добавить авторизацию",
    description: "Реализовать вход через почту и пароль",
    status: "In Progress",
    priority: "Medium",
    category: "Feature",
    date: formatted,
  },
  {
    id: uuidv4(),
    title: "Написать документацию по API",
    description: "Описание всех эндпоинтов REST API",
    status: "Done",
    priority: "Low",
    category: "Documentation",
    date: formatted,
  },
  {
    id: uuidv4(),
    title: "Рефакторинг компонента TaskItem",
    description: "Упростить логику отображения статуса",
    status: "To Do",
    priority: "Medium",
    category: "Refactor",
    date: formatted,
  },
  {
    id: uuidv4(),
    title: "Добавить юнит-тесты для TaskList",
    description: "Покрыть основной функционал тестами",
    status: "In Progress",
    priority: "High",
    category: "Test",
    date: formatted,
  },
  {
    id: uuidv4(),
    title: "Исправить отображение даты",
    description: "Некорректный формат на странице задач",
    status: "Done",
    priority: "Low",
    category: "Bug",
    date: formatted,
  },
  {
    id: uuidv4(),
    title: "Добавить тёмную тему",
    description: "Переключатель темы и сохранение в localStorage",
    status: "To Do",
    priority: "High",
    category: "Feature",
    date: formatted,
  },
  {
    id: uuidv4(),
    title: "Обновить README",
    description: "Добавить инструкции по запуску проекта",
    status: "Done",
    priority: "Medium",
    category: "Documentation",
    date: formatted,
  },
  {
    id: uuidv4(),
    title: "Разделение логики Sidebar на хуки",
    description: "Вынести управление состоянием в кастомные хуки",
    status: "In Progress",
    priority: "Medium",
    category: "Refactor",
    date: formatted,
  },
  {
    id: uuidv4(),
    title: "Покрытие e2e-тестами авторизации",
    description: "Проверка успешного и неуспешного входа",
    status: "To Do",
    priority: "High",
    category: "Test",
    date: formatted,
  },
];

export { tasksList };
