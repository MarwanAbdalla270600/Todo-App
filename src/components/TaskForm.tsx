import { useRef } from "react";
import { TaskStatus } from "../models/todo-interface";
import { useTaskStore } from "../store/taskStore";

export default function TaskForm() {
  const ref = useRef<HTMLInputElement | null>(null);
  const addTask = useTaskStore((state) => state.addTask);

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (ref.current?.value) {
      addTask({
        name: ref.current.value,
        status: TaskStatus.Todo,
      });
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full justify-between rounded-4xl"
    >
      <div className="join bg-base-300 w-full rounded-3xl">
        <div className="w-full">
          <input
            ref={ref}
            type="text"
            className="input bg-base-200 w-full rounded-l-3xl p-6 text-2xl focus:outline-0"
            placeholder="Enter todo..."
            required
          />
        </div>
        <button type="submit" className="btn btn-primary h-full rounded-r-3xl">
          Add Todo
        </button>
      </div>
    </form>
  );
}
