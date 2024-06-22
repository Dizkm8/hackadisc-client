import AIChatManager from "../chat/components/AIChatManager";
import MainLayout from "../common/layout/MainLayout";
import DashboardPage from "../dashboard/pages/Page";

const HomePage = () => {
  return (
    <MainLayout>
      <AIChatManager />
      <DashboardPage />
    </MainLayout>
  );
};

export default HomePage;
