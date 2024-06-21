import { Navigate, Outlet, useLocation } from "react-router-dom";
import useStorage from "../hooks/useStorage";
import { homePath, loginPath } from "./routes-paths";

interface Props {
  roles?: number[];
}

export default function RequireAuth({ roles }: Props) {
  const { token, role } = useStorage();
  const location = useLocation();

  if (!token) {
    return <Navigate to={loginPath} state={{ from: location }} />;
  }

  if (roles && !roles.includes(role)) {
    return <Navigate to={homePath} />;
  }

  return <Outlet />;
}
