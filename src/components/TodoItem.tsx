import { useState } from "react";
import { Todo } from "../models/todo-interface";
import { FaRegTrashCan } from "react-icons/fa6";

interface Props {
  todo: Todo;
  onStatusToggle: () => void;
  onDelete: () => void;
}

export default function TodoItem({ todo, onStatusToggle ,onDelete }: Props) {
  const [isChecked, setIsChecked] = useState(false);

  function toggleStatus() {
    setIsChecked(prev=>!prev)
    onStatusToggle()
  }

  return (
    <div className="w-full flex gap-4 justify-between items-center">
      <div className="flex gap-4 items-center">
        <input type="checkbox" checked={isChecked} onChange={toggleStatus} className="checkbox" />

        <span>{todo.name}</span>
      </div>
      <button className="btn btn-ghost" onClick={onDelete}>
        <FaRegTrashCan />
      </button>
    </div>
  );
}
