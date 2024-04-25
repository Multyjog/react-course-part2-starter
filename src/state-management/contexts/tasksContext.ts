import React, { Dispatch } from "react";
import { ITask, TaskAction } from "../reducers/tasksReducer";

interface ITasksContextType {
  tasks: ITask[];
  dispatch: Dispatch<TaskAction>;
}

export const TasksContext = React.createContext<ITasksContextType>(
  {} as ITasksContextType
);
