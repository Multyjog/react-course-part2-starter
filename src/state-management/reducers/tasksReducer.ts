interface ITask {
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
type TaskAction = AddTask | DeleteTask;

const tasksReducer = (tasks: ITask[], action: TaskAction): ITask[] => {
  switch (action.type) {
    case "ADD":
      return [action.task, ...tasks];
    case "DELETE":
      return tasks.filter((t) => t.id !== action.taskId);
  }
};

export default tasksReducer;