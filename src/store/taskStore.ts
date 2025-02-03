import { create } from "zustand";
import { Task, NewTask } from "../models/todo-interface";
import {
  addTask,
  deleteTask,
  getAllTasks,
  updateTask,
} from "../services/taskService";

interface TaskState {
  tasks: Task[];
  initTasks: () => void;
  addTask: (task: NewTask) => void;
  updateTask: (id: string, newTask: NewTask) => void;
  deleteTask: (id: string) => void;
}


export const useTaskStore = create<TaskState>((set) => ({
  tasks: [] as Task[],

  initTasks: async () => {
    const fetchedTasks = (await getAllTasks()) as Task[];
    set(() => ({
      tasks: fetchedTasks,
    }));
  },

  addTask: async (task) => {
    const fireDocument = await addTask(task);
    const newTaskWithId = { ...task, id: fireDocument.id };
    set((state) => ({
      tasks: [...state.tasks, newTaskWithId],
    }));
  },

  updateTask: async (id, newTask) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...newTask, id: id } : task
      ),
    }));
    updateTask(id, newTask);
  },

  deleteTask: async (id) => {
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    }));
    deleteTask(id);
  },
}));
