import { Dispatch } from "react";
import { useReducer } from "react";
import "./App.css";
import tasksReducer from "./state-management/reducers/tasksReducer";
import { TasksContext } from "./state-management/contexts/tasksContext";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <>
      <TasksContext.Provider value={{ tasks, dispatch }}>
        <NavBar></NavBar>
        <HomePage></HomePage>
      </TasksContext.Provider>
    </>
  );
}

export default App;
