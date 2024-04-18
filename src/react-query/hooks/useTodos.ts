import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import APIClient from "../../services/api-client";
export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const apiCLient = new APIClient<Todo>("/todos");

const useTodos = () => {
  return useQuery<Todo[]>({
    queryKey: CACHE_KEY_TODOS,
    queryFn: () => apiCLient.getAll(),
    staleTime: 10 * 1000,
  });
};

export default useTodos;
