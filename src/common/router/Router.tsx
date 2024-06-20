import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Login from "../../auth/Login";
import HomePage from "../../home/Page";
import { homePath, loginPath, workerDetailPath } from "./routes-paths";
import WorkerDetailPage from "../../workers/pages/WorkerDetailPage";

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
      {
        path: workerDetailPath,
        element: <WorkerDetailPage />,
      },
    ],
  },
]);

export default Router;
