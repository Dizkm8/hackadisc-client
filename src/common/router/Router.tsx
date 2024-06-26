import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Login from "../../auth/Login";
import HomePage from "../../home/Page";
import {
  aboutUsPath,
  activitiesPath,
  dashboardPath,
  homePath,
  loginPath,
  notFoundPath,
  workerDetailPath,
  workersPath,
} from "./routes-paths";
import WorkerDetailPage from "../../workers/pages/WorkerDetailPage";
import ActivitiesPage from "../../activities/pages/Page";
import NotFoundPage from "../pages/NotFoundPage";
import RequireAuth from "./RequireAuth";
import {
  MANAGER_MULTI,
  MANAGER_SINGLE,
  PIGNUS_ADMIN,
  SHIFT_MANAGER,
} from "../../api/constants/roles";
import DashboardPage from "../../dashboard/pages/Page";
import WorkersPage from "../../workers/pages/Page";
import AboutUsPage from "../../about-us/AboutUs";

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
        path: aboutUsPath,
        element: <AboutUsPage />,
      },
      {
        element: (
          <RequireAuth
            roles={[SHIFT_MANAGER, MANAGER_SINGLE, MANAGER_MULTI, PIGNUS_ADMIN]}
          />
        ),
        children: [
          {
            path: homePath,
            element: <HomePage />,
          },
        ],
      },
      {
        element: <RequireAuth roles={[SHIFT_MANAGER]} />,
        children: [
          {
            path: workersPath,
            element: <WorkersPage />,
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
      {
        element: (
          <RequireAuth
            roles={[SHIFT_MANAGER, MANAGER_SINGLE, MANAGER_MULTI, PIGNUS_ADMIN]}
          />
        ),
        children: [
          {
            path: dashboardPath,
            element: <DashboardPage />,
          },
        ],
      },
      {
        path: notFoundPath,
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default Router;
