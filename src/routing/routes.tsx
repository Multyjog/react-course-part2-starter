import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserDetail from "./UserDetail";
import Layout from "./Layout";
import UsersPage from "./UsersPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "users",
        element: <UsersPage />,
        children: [{ path: ":id", element: <UserDetail /> }],
      },
    ],
  },
]);

export default router;
