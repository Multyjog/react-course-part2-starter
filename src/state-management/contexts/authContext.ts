import { AuthAction } from "../reducers/authReducer";
import React, { Dispatch } from "react";

interface AuthContextType {
  user: string;
  dispatchAuth: Dispatch<AuthAction>;
}

export const AuthContext = React.createContext<AuthContextType>(
  {} as AuthContextType
  );
