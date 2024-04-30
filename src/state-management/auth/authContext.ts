import { AuthAction } from "./AuthProvider";
import React, { Dispatch } from "react";

interface AuthContextType {
  user: string;
  dispatch: Dispatch<AuthAction>;
}

export const AuthContext = React.createContext<AuthContextType>(
  {} as AuthContextType
);