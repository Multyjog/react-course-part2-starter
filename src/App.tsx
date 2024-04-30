import { useReducer } from "react";
import "./App.css";
import tasksReducer from "./state-management/reducers/tasksReducer";
import { TasksContext } from "./state-management/contexts/tasksContext";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import { AuthContext } from "./state-management/contexts/authContext";
import AuthProvider from "./state-management/AuthProvider";
import TasksProvider from "./state-management/TasksProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <TasksProvider>
          <NavBar></NavBar>
          <HomePage></HomePage>
        </TasksProvider>
      </AuthProvider>
    </>
  );
}

export default App;
