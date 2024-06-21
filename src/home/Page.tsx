import {
  MANAGER_MULTI,
  MANAGER_SINGLE,
  PIGNUS_ADMIN,
  SHIFT_MANAGER,
} from "../api/constants/roles";
import useUserInformation from "../auth/hooks/useUserInformation";
import MainLayout from "../common/layout/MainLayout";
import DashboardPage from "../dashboard/pages/Page";
import WorkersPage from "../workers/pages/Page";

const HomePage = () => {
  const { role } = useUserInformation();

  let element = <WorkersPage />;
  if (role === SHIFT_MANAGER) {
    element = <WorkersPage />;
  } else if ([MANAGER_SINGLE, MANAGER_MULTI, PIGNUS_ADMIN].includes(role)) {
    element = <DashboardPage />;
  }

  return <MainLayout>{element}</MainLayout>;
};

export default HomePage;
