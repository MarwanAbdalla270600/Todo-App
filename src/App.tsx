import { useEffect } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { Task, TaskStatus } from "./models/todo-interface";
import { useTaskStore } from "./store/taskStore";

function App() {

  const tasks = useTaskStore((state) => state.tasks); 
  const initTasks = useTaskStore((state) => state.initTasks)
  const addTask = useTaskStore((state) => state.addTask); 
  const updateTask = useTaskStore((state) => state.updateTask)
  const deleteTask = useTaskStore((state) => state.deleteTask)

  useEffect(() => {
    initTasks()
  }, [])

  function toggleStatusForTodo(todo: Task) {
    const newStatus = todo.status === TaskStatus.Todo ? TaskStatus.Done : TaskStatus.Todo;
    const { id, ...newTask } = { ...todo, status: newStatus };
    updateTask(id, newTask)
  }

  return (
    <div className="container mx-auto py-4 flex flex-col items-center gap-8">
      <h1 className="text-5xl text-center">Todo App</h1>
      <div className="w-3xl flex flex-col gap-4">
        <TaskForm onCreateTodo={addTask}></TaskForm>
        {tasks.length > 0 && (
          <div className="p-4 text-2xl bg-base-200 rounded-3xl">
            <TaskList
              list={tasks}
              onDeleteTodo={deleteTask}
              onStatusToggle={toggleStatusForTodo}
            ></TaskList>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
