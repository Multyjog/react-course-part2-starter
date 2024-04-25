import { useContext, useReducer } from "react";
import authReducer from "./reducers/authReducer";
import { AuthContext } from "./contexts/authContext";

const LoginStatus = () => {
  const { user, dispatchAuth } = useContext(AuthContext);
  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => dispatchAuth({ type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() => dispatchAuth({ type: "LOGIN", user: "Simon" })}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
