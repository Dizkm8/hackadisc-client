import AIChatManager from "../../chat/components/AIChatManager";
import MainLayout from "../../common/layout/MainLayout";
import ActivitiesMain from "../components/ActivitiesMain";

const ActivitiesPage = () => {
  return (
    <MainLayout>
      <AIChatManager />
      <h1 className="text-5xl md:text-7xl mb-3 md:mb-10 text-wrap text-center px-3 mt-5">
        Actividades
      </h1>
      <ActivitiesMain />
    </MainLayout>
  );
};

export default ActivitiesPage;
