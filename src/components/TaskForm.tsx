import { useRef } from "react";
import { NewTask, TaskStatus } from "../models/todo-interface";

interface Props {
  onCreateTodo: (data: NewTask) => void;
}

export default function TaskForm({ onCreateTodo }: Props) {
  const ref = useRef<HTMLInputElement | null>(null);

  function createTodo(name: string): NewTask {
    return {
      name: name,
      status: TaskStatus.Todo,
    };
  }

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (ref.current?.value) {
      const todo = createTodo(ref.current.value);
      onCreateTodo(todo);
      ref.current.value = "";
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full flex justify-between rounded-4xl">
      <div className="join bg-base-300 w-full rounded-3xl">
        <div className="w-full">
            <input
              ref={ref}
              type="text"
              className="input w-full focus:outline-0 rounded-l-3xl text-2xl p-6 bg-base-200"
              placeholder="Enter todo..."
              required
            />
        </div>
        <button type="submit" className="btn btn-primary rounded-r-3xl h-full">
          Add Todo
        </button>
      </div>
    </form>
  );
}
