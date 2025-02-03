import { Task } from "../models/todo-interface";
import TaskItem from "./TaskItem";

interface Props {
  list: Task[] | null;
  onStatusToggle: (todo: Task) => void;
  onDeleteTodo: (taskId: string) => void;
}

export default function TaskList({ list, onStatusToggle, onDeleteTodo }: Props) {
  return (
    <>
      {list?.map((todo) => (
        <TaskItem
          task={todo}
          onDelete={() => onDeleteTodo(todo.id)}
          onStatusToggle={() => onStatusToggle(todo)}
          key={todo.id}
        ></TaskItem>
      ))}
    </>
  );
}
