import "./App.css";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import { TasksProvider } from "./state-management/tasks";
import Counter from "./state-management/counter/Counter";

function App() {
  return (
    <>
      <TasksProvider>
        <Counter />
        <NavBar></NavBar>
        <HomePage></HomePage>
      </TasksProvider>
    </>
  );
}

export default App;
