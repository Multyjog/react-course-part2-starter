import { ReactNode, useReducer } from "react";
import { TasksContext } from "./tasksContext";

export interface ITask {
  id: number;
  title: string;
}
interface AddTask {
  type: "ADD";
  task: ITask;
}
interface DeleteTask {
  type: "DELETE";
  taskId: number;
}
export type TaskAction = AddTask | DeleteTask;

const tasksReducer = (tasks: ITask[], action: TaskAction): ITask[] => {
  switch (action.type) {
    case "ADD":
      return [action.task, ...tasks];
    case "DELETE":
      return tasks.filter((t) => t.id !== action.taskId);
  }
};

interface Props {
  children: ReactNode;
}

const TasksProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};
export default TasksProvider;
