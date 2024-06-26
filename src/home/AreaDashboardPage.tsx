import { useNavigate } from "react-router-dom";
import { SHIFT_MANAGER } from "../api/constants/roles";
import useUserInformation from "../auth/hooks/useUserInformation";
import AIChatManager from "../chat/components/AIChatManager";
import { homePath } from "../common/router/routes-paths";
import AreaDashboard from "../dashboard/components/AreaDashboard";
import WelcomeMessage from "../dashboard/components/WelcomeMessage";

const AreaDashboardPage = () => {
  const navigate = useNavigate();
  const { role } = useUserInformation();

  if (role !== SHIFT_MANAGER) {
    navigate(homePath);
  }

  return (
    <div className="w-full p-5 md:p-10">
      <AIChatManager />
      <WelcomeMessage />
      <hr className="mt-5 md:mt-10 mb-3 border-2 border-gray-100" />
      <AreaDashboard />
    </div>
  );
};

export default AreaDashboardPage;
