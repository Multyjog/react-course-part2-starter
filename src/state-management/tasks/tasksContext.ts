import React, { Dispatch } from "react";
import { ITask, TaskAction } from "./TasksProvider";

interface ITasksContextType {
  tasks: ITask[];
  dispatch: Dispatch<TaskAction>;
}

export const TasksContext = React.createContext<ITasksContextType>(
  {} as ITasksContextType
);
