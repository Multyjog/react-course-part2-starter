import "./App.css";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import AuthProvider from "./state-management/AuthProvider";
import { TasksProvider } from "./state-management/tasks";

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
