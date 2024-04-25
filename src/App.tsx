import { useReducer } from "react";
import "./App.css";
import tasksReducer from "./state-management/reducers/tasksReducer";
import { TasksContext } from "./state-management/contexts/tasksContext";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import authReducer from "./state-management/reducers/authReducer";
import { AuthContext } from "./state-management/contexts/authContext";

function App() {
  const [tasks, dispatchTasks] = useReducer(tasksReducer, []);
  const [user, dispatchAuth] = useReducer(authReducer, "");

  return (
    <>
      <TasksContext.Provider value={{ tasks, dispatch: dispatchTasks }}>
        <AuthContext.Provider value={{ user, dispatchAuth }}>
          <NavBar></NavBar>
          <HomePage></HomePage>
        </AuthContext.Provider>
      </TasksContext.Provider>
    </>
  );
}

export default App;
