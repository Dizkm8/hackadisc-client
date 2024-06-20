import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Login from "../../auth/Login";
import HomePage from "../../home/Page";
import { homePath, loginPath } from "./routes-paths";

const Router = createBrowserRouter([
  {
    path: loginPath,
    element: <Root />,
    children: [
      {
        path: loginPath,
        element: <Login />,
      },
      {
        path: homePath,
        element: <HomePage />,
      },
    ],
  },
]);

export default Router;
