import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Login from "../../auth/Login";
import HomePage from "../../home/Page";
import {
  activitiesPath,
  homePath,
  loginPath,
  workerDetailPath,
} from "./routes-paths";
import WorkerDetailPage from "../../workers/pages/WorkerDetailPage";
import ActivitiesPage from "../../activities/pages/Page";
import NotFoundPage from "../pages/NotFoundPage";

const Router = createBrowserRouter([
  {
    path: loginPath,
    element: <Root />,
    errorElement: <NotFoundPage />,
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
      {
        path: activitiesPath,
        element: <ActivitiesPage />,
      },
    ],
  },
]);

export default Router;
