import AIChatManager from "../../chat/components/AIChatManager";
import MainLayout from "../../common/layout/MainLayout";
import WorkersTable from "../components/WorkersTable";

const WorkersPage = () => {
  return (
    <MainLayout>
      <AIChatManager />
      <h1 className="text-5xl md:text-7xl mb-3 md:mb-10 text-wrap text-center px-3 mt-5">
        Trabajadores
      </h1>
      <WorkersTable />
    </MainLayout>
  );
};

export default WorkersPage;
