import { useState } from "react";
import { Task, TaskStatus } from "../models/todo-interface";
import { FaRegTrashCan } from "react-icons/fa6";
import { useTaskStore } from "../store/taskStore";

export default function TaskItem({ task }: { task: Task }) {
  const [isChecked, setIsChecked] = useState(setCheckbox(task));

  const deleteTask = useTaskStore((state) => state.deleteTask);
  const updateTask = useTaskStore((state) => state.updateTask);

  function toggleStatusForTodo(todo: Task) {
    setIsChecked((prev) => !prev);
    const newStatus =
      todo.status === TaskStatus.Todo ? TaskStatus.Done : TaskStatus.Todo;
    const { id, ...newTask } = { ...todo, status: newStatus };
    updateTask(id, newTask);
  }

  function setCheckbox(task: Task) {
    return task.status === TaskStatus.Done;
  }

  return (
    <div className="flex w-full items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => toggleStatusForTodo(task)}
          className="checkbox"
        />
        <span>{task.name}</span>
      </div>
      <button className="btn btn-ghost" onClick={() => deleteTask(task.id)}>
        <FaRegTrashCan />
      </button>
    </div>
  );
}
