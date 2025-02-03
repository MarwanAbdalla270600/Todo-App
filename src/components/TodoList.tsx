import { Task } from "../models/todo-interface";
import TodoItem from "./TodoItem";

interface Props {
  list: Task[] | null;
  onStatusToggle: (todo: Task) => void;
  onDeleteTodo: (todo: Task) => void;
}

export default function TodoList({ list, onStatusToggle, onDeleteTodo }: Props) {
  return (
    <>
      {list?.map((todo) => (
        <TodoItem
          task={todo}
          onDelete={() => onDeleteTodo(todo)}
          onStatusToggle={() => onStatusToggle(todo)}
          key={todo.id}
        ></TodoItem>
      ))}
    </>
  );
}
