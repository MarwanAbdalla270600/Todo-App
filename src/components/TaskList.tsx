import { Task } from "../models/todo-interface";
import TaskItem from "./TaskItem";

export default function TaskList({ list }: { list: Task[] | null }) {
  return (
    <>{list?.map((task) => <TaskItem task={task} key={task.id}></TaskItem>)}</>
  );
}
