import { useNavigate, useParams } from "react-router-dom";
import MainLayout from "../../common/layout/MainLayout";
import WorkerInfo from "../components/detail/WorkerInfo";
import WorkerAptitudes from "../components/detail/WorkerAptitudes";
import { UserWorker } from "../models/user-worker";

const getWorkerInfo = (rut: string): UserWorker => {
  return {
    name: "Jorge Rivera Mancilla",
    rut: "20.416.123-4",
    email: "jorge.rivera@pignus.cl",
    enterprise: "Pignus",
    qualification: "C",
    status: "En Intervención",
    position: "Maestro de Commits",
    area: "Proyectos",
  };
};

const WorkerDetailPage = () => {
  const { rut } = useParams<{ rut: string }>();
  const navigate = useNavigate();

  if (!rut) {
    navigate("/no-encontrado"); // TODO: Assign path from dedicated paths file
    return;
  }

  const workerInfo = getWorkerInfo(rut);

  return (
    <MainLayout>
      <WorkerInfo worker={workerInfo} className=" my-10" />
      <WorkerAptitudes />
    </MainLayout>
  );
};

export default WorkerDetailPage;
