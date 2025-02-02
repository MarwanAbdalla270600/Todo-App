import { useEffect, useState } from "react";
import axios from "axios";

import { Todo } from "../models/todo-interface";

export default function useTodos() {
  const [data, setData] = useState<Todo[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get<Todo[]>("todos.json");
        setData(response.data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message); 
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  return { data, error, loading };
}
