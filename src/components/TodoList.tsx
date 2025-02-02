import { Todo } from "../models/todo-interface";
import TodoItem from "./TodoItem";

interface Props {
  list: Todo[] | null;
  onStatusToggle: (todo: Todo) => void;
  onDeleteTodo: (todo: Todo) => void;
}

export default function TodoList({ list, onStatusToggle, onDeleteTodo }: Props) {
  return (
    <div className="p-4 text-2xl bg-base-200 rounded-3xl">
      {list?.map((todo) => (
        <TodoItem
          todo={todo}
          onDelete={() => onDeleteTodo(todo)}
          onStatusToggle={() => onStatusToggle(todo)}
          key={todo.id}
        ></TodoItem>
      ))}
    </div>
  );
}
