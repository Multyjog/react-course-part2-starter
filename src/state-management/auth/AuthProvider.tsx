import { ReactNode, useContext, useReducer } from "react";
import { AuthContext } from "./authContext";

export const useAuth = () => useContext(AuthContext);

interface Login {
  type: "LOGIN";
  user: string;
}
interface Logout {
  type: "LOGOUT";
}
export type AuthAction = Login | Logout;

const authReducer = (state: string, action: AuthAction) => {
  switch (action.type) {
    case "LOGIN":
      return action.user;
    case "LOGOUT":
      return "";
    default:
      return state;
  }
};

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
