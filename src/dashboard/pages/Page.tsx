import WelcomeMessage from "../components/WelcomeMessage";
import useStorage from "../../common/hooks/useStorage";
import AdminDashboard from "../components/AdminDashboard";
import EnterpriseDashboard from "../components/EnterpriseDashboard";
import AreaDashboard from "../components/AreaDashboard";
import { MANAGER_MULTI, MANAGER_SINGLE, PIGNUS_ADMIN, SHIFT_MANAGER } from "../../api/constants/roles";

const DashboardPage = () => {
  const { role } = useStorage();

  const renderDashboard = () => {
    switch (role) {
      case PIGNUS_ADMIN:
        return <AdminDashboard />;
      case MANAGER_SINGLE:
      case MANAGER_MULTI:
        return <EnterpriseDashboard />;
      case SHIFT_MANAGER:
        return <AreaDashboard />;
      default:
        return <></>;
    }
  };

  return (
    <div className="w-full p-5 md:p-10">
      <WelcomeMessage />
      {renderDashboard()}
    </div>
  );
};

export default DashboardPage;
