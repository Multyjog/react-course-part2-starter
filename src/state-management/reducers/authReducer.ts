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

export default authReducer;
