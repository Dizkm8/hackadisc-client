import { useNavigate, useParams } from "react-router-dom";
import MainLayout from "../../common/layout/MainLayout";
import WorkerInfo from "../components/detail/WorkerInfo";
import WorkerAptitudes from "../components/detail/WorkerAptitudes";
import { notFoundPath } from "../../common/router/routes-paths";
import { useEffect, useState } from "react";
import agent from "../../api/agent";
import { GetWorkerDetailDto } from "../../api/dtos/get-worker-detail-dto";
import { workerDetailDtoToWorkerDetail } from "../utils/mappers";
import { WorkerDetail } from "../models/worker-detail";

const WorkerDetailPage = () => {
  const [workerInfo, setWorkerInfo] = useState<WorkerDetail | undefined>(
    undefined
  );
  const { rut } = useParams<{ rut: string }>();
  const navigate = useNavigate();

  if (!rut) {
    navigate(notFoundPath);
    return;
  }

  useEffect(() => {
    agent.UsersWorkers.detail(rut)
      .then((response: GetWorkerDetailDto) => {
        const mappedDetails = workerDetailDtoToWorkerDetail(response);
        setWorkerInfo(mappedDetails);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <MainLayout>
      {workerInfo && (
        <>
          <WorkerInfo worker={workerInfo} className="my-10" />{" "}
          <WorkerAptitudes worker={workerInfo} />
        </>
      )}
    </MainLayout>
  );
};

export default WorkerDetailPage;
