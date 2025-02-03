export enum TaskStatus {
  Todo = "todo",
  Done = "done",
}

export interface Task {
  id: string;
  name: string;
  status: TaskStatus;
}

export type NewTask = Omit<Task, "id">;
