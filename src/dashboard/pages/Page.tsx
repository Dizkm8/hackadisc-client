import WelcomeMessage from "../components/WelcomeMessage";
import useStorage from "../../common/hooks/useStorage";
import AdminDashboard from "../components/AdminDashboard";
import EnterpriseDashboard from "../components/EnterpriseDashboard";
import {
  MANAGER_MULTI,
  MANAGER_SINGLE,
  PIGNUS_ADMIN,
} from "../../api/constants/roles";

const DashboardPage = () => {
  const { role } = useStorage();

  const renderDashboard = () => {
    switch (role) {
      case PIGNUS_ADMIN:
        return <AdminDashboard />;
      case MANAGER_SINGLE:
      case MANAGER_MULTI:
        return <EnterpriseDashboard />;
      default:
        return <></>;
    }
  };

  return (
    <div className="w-full p-5 md:p-10">
      <WelcomeMessage />
      <hr className="mt-5 md:mt-10 mb-3 border-2 border-gray-100" />
      {renderDashboard()}
    </div>
  );
};

export default DashboardPage;
