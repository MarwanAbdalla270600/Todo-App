import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Todo } from "./models/todo-interface";

function App() {
  //const { data, error, loading } = useTodos();

  const [todos, setTodos] = useState<Todo[]>([]);

  function createId() {
    return Math.floor(Math.random() * 90000) + 10000;
  }

  function addTodo(data: Todo) {
    setTodos([...todos, data]);
  }

  function toggleStatusForTodo(todo: Todo) {
    const newStatus = todo.status === "todo" ? "done" : "todo";

    const updatedTodos = todos.map((item) =>
      item.id === todo.id
        ? { ...item, status: newStatus } as Todo 
        : item
    );
  
    setTodos(updatedTodos); // Set the updated state once
    console.log(updatedTodos); // Logs the updated todos list
  }

  function removeTodo(todo: Todo) {
    setTodos(todos.filter((item) => item.id !== todo.id));
  }

  return (
    <div className="container mx-auto py-4 flex flex-col items-center gap-8">
      <h1 className="text-5xl text-center">Todo App</h1>
      <div className="w-3xl flex flex-col gap-4">
        <TodoForm onCreateTodo={addTodo}></TodoForm>
        <TodoList
          list={todos}
          onDeleteTodo={($event) => removeTodo($event)}
          onStatusToggle={($event) => toggleStatusForTodo($event)}
        ></TodoList>
      </div>
    </div>
  );
}

export default App;
