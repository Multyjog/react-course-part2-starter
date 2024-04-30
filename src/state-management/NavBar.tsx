import { useContext } from "react";
import LoginStatus from "./auth/LoginStatus";
import { TasksContext } from "./tasks/tasksContext";
import { AuthContext } from "./auth/authContext";

const NavBar = () => {
  const { tasks } = useContext(TasksContext);
  const { user } = useContext(AuthContext);
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-primary">{user}</span>
      <span className="badge text-bg-secondary">{tasks.length}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
