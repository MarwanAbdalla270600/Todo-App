import { useState } from "react";
import { Task, TaskStatus } from "../models/todo-interface";
import { FaRegTrashCan } from "react-icons/fa6";

interface Props {
  task: Task;
  onStatusToggle: () => void;
  onDelete: () => void;
}

export default function TodoItem({ task, onStatusToggle ,onDelete }: Props) {
  const [isChecked, setIsChecked] = useState(setCheckbox(task));

  function toggleStatus() {
    setIsChecked(prev=>!prev)
    onStatusToggle()
  }

  function setCheckbox(task: Task) {
    return task.status === TaskStatus.Done;
  }

  return (
    <div className="w-full flex gap-4 justify-between items-center">
      <div className="flex gap-4 items-center">
        <input type="checkbox" checked={isChecked} onChange={toggleStatus} className="checkbox" />
        <span>{task.name}</span>
      </div>
      <button className="btn btn-ghost" onClick={onDelete}>
        <FaRegTrashCan />
      </button>
    </div>
  );
}
