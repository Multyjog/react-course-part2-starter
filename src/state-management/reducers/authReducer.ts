interface Login {
  type: "LOGIN";
  user: string;
}
interface Logout {
  type: "LOGOUT";
}
type IAction = Login | Logout;

const authReducer = (state: string, action: IAction) => {
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
