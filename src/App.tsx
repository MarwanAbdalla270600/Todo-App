import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { NewTask, Task, TaskStatus } from "./models/todo-interface";
import { addTask, deleteTask, getAllTasks, updateTask } from "./services/todoService";

function App() {
  const [todos, setTodos] = useState<Task[]>([]);

  useEffect(() => {
    initTasks();
  }, []);

  useEffect(() => {
    console.log(todos);
  }, [todos]);


  async function initTasks() {
    try {
      const tasks = await getAllTasks();
      setTodos(tasks as Task[]);
    } catch (err) {
      console.log("error has occured fetching tasks");
    }
  }

  async function addTodo(data: NewTask) {
    const newTask = await addTask(data)
    setTodos([...todos, { ...data, id: newTask.id }]);
  }

  async function toggleStatusForTodo(todo: Task) {
    const newStatus = todo.status === TaskStatus.Todo ? TaskStatus.Done : TaskStatus.Todo;
    const { id, ...newTask } = { ...todo, status: newStatus };
    console.log(newTask)
    await updateTask(id, newTask)
    const updatedTodos = todos.map((item) =>
      item.id === todo.id ? ({ ...item, status: newStatus } as Task) : item
    );
    setTodos(updatedTodos);
  }

  async function removeTodo(task: Task) {
    await deleteTask(task.id)
    setTodos(todos.filter((item) => item.id !== task.id));
  }

  return (
    <div className="container mx-auto py-4 flex flex-col items-center gap-8">
      <h1 className="text-5xl text-center">Todo App</h1>
      <div className="w-3xl flex flex-col gap-4">
        <TodoForm onCreateTodo={addTodo}></TodoForm>
        {todos.length > 0 && (
          <div className="p-4 text-2xl bg-base-200 rounded-3xl">
            <TodoList
              list={todos}
              onDeleteTodo={($event) => removeTodo($event)}
              onStatusToggle={($event) => toggleStatusForTodo($event)}
            ></TodoList>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
