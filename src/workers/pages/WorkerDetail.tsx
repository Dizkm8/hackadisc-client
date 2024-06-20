import { useParams } from "react-router-dom";

const WorkerDetailPage = () => {
  const { rut } = useParams<{ rut: string }>();

  return <h1>{rut}</h1>;
};

export default WorkerDetailPage;
