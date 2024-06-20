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

const getAptitudes = () => {
  const aptitudes = [
    {
      id: "kdsjafkas",
      name: "Adaptabilidad",
      value: 50,
    },
    {
      id: "908uoijlkmsa",
      name: "Conducta Segura y Autocuidado",
      value: 10,
    },
    {
      id: "t67ghuj",
      name: "Dinamismo y Energía",
      value: 80,
    },
    {
      id: "12ewqd",
      name: "Efectividad Personal",
      value: 100,
    },
    {
      id: "0i9joansc",
      name: "Iniciativa y Aprendizaje Permanente",
      value: 35,
    },
    {
      id: "12ewdfcsxlkn",
      name: "Trabajo Bajo Presión",
      value: 48.5,
    },
  ];

  return aptitudes;
};

const WorkerDetailPage = () => {
  const { rut } = useParams<{ rut: string }>();
  const navigate = useNavigate();

  if (!rut) {
    navigate("/no-encontrado"); // TODO: Assign path from dedicated paths file
    return;
  }

  const workerInfo = getWorkerInfo(rut);
  const aptitudes = getAptitudes();

  return (
    <MainLayout>
      <WorkerInfo worker={workerInfo} className="my-10" />
      <WorkerAptitudes aptitudes={aptitudes} />
    </MainLayout>
  );
};

export default WorkerDetailPage;
