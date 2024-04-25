import { useContext } from "react";
import LoginStatus from "./LoginStatus";
import { TasksContext } from "./contexts/tasksContext";
import { AuthContext } from "./contexts/authContext";

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
