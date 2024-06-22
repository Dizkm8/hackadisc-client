import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Login from "../../auth/Login";
import HomePage from "../../home/Page";
import {
  activitiesPath,
  dashboardPath,
  dashboardPathV2,
  homePath,
  loginPath,
  notFoundPath,
  workerDetailPath,
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
import AreaDashboardPage from "../../home/AreaDashboardPage";

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
        element: <RequireAuth roles={[SHIFT_MANAGER]} />,
        children: [
          {
            path: dashboardPathV2,
            element: <AreaDashboardPage />,
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
