import { useEffect } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { useTaskStore } from "./store/taskStore";

function App() {
  const tasks = useTaskStore((state) => state.tasks);
  const initTasks = useTaskStore((state) => state.initTasks);

  useEffect(() => {
    initTasks();
  }, []);

  return (
    <div className="mx-auto flex flex-col items-center gap-8 py-4 *:container">
      <h1 className="text-center text-5xl">Todo App</h1>
      <div className="flex flex-col gap-4 md:w-full xl:w-3xl">
        <TaskForm></TaskForm>
        {tasks.length > 0 && (
          <div className="bg-base-200 rounded-3xl p-4 text-2xl">
            <TaskList list={tasks}></TaskList>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
