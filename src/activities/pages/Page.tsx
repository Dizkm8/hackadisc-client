import MainLayout from "../../common/layout/MainLayout";
import ActivitiesMain from "../components/ActivitiesMain";

const ActivitiesPage = () => {
  return (
    <MainLayout>
      <h1 className="text-center text-5xl font-semibold md:font-normal md:text-6xl my-5">
        Actividades
      </h1>
      <ActivitiesMain />
    </MainLayout>
  );
};

export default ActivitiesPage;
