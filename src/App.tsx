import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { NewTask, Task } from "./models/todo-interface";
import { addTask } from "./services/todoService";

function App() {
  const [todos, setTodos] = useState<Task[]>([]);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  function addTodo(data: NewTask) {
    addTask(data).then((newTask) => {
      setTodos([...todos, { ...data, id: newTask.id }]);
    });
  }

  function toggleStatusForTodo(todo: Task) {
    const newStatus = todo.status === "todo" ? "done" : "todo";
    const updatedTodos = todos.map((item) =>
      item.id === todo.id ? ({ ...item, status: newStatus } as Task) : item
    );
    setTodos(updatedTodos);
  }

  function removeTodo(todo: Task) {
    setTodos(todos.filter((item) => item.id !== todo.id));
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
