import HeaderWorkersTable from "./HeaderWorkersTable";
import BodyWorkersTable from "./BodyWorkersTable";
import { useEffect, useRef, useState } from "react";
import agent from "../../api/agent";
import { GetUserWorkerInfoDto } from "../../api/dtos/get-user-worker-info-dto";
import {
  manyUserWorkerCapacitationDtoToModel,
  manyUserWorkerDtoToModel,
} from "../../common/services/dto-to-model";
import { UserWorker } from "../models/user-worker";
import CreateActivityModal from "./CreateActivityModal";
import { getAptitudeIdByName } from "../utils/utils";
import { UserWorkerCapacitationDto } from "../../api/dtos/user-worker-capacitation-dto";
import useStorage from "../../common/hooks/useStorage";
import LoadingSpinner from "../../common/components/LoadingSpinner";
import ActionButtons from "./ActionButtons";
import TablePagination from "./TablePagination";
import { ActivityInformation } from "../models/activity-information";
import SearchIcon from "../../common/components/SearchIcon";
import { AptitudeNameType } from "../../common/types/aptitude-name-type";

const columns = [
  {
    Header: "Nombre",
    accessor: "name",
  },
  {
    Header: "RUT",
    accessor: "rut",
  },
  {
    Header: "Correo electrónico",
    accessor: "email",
  },
  {
    Header: "Empresa",
    accessor: "enterprise",
  },
  {
    Header: "Nota",
    accessor: "qualification",
  },
  {
    Header: "Estado",
    accessor: "status",
  },
  {
    Header: "Cargo",
    accessor: "position",
  },
  {
    Header: "Área",
    accessor: "area",
  },
  {
    Header: "Acciones",
    accessor: "actions",
  },
];

const searchInputPlaceholder = "Buscar trabajador...";

const WorkersTable = () => {
  const [dataLoading, setDataLoading] = useState(true);
  const [workersData, setWorkersData] = useState<UserWorker[]>([]);
  const [isMainChecked, setIsMainChecked] = useState(false);
  const [showAddActivityModal, setShowAddActivityModal] = useState(false);
  const [activityInfo, setActivityInfo] = useState<
    ActivityInformation | undefined
  >(undefined);
  const { workerRuts, setWorkerRuts } = useStorage();
  const workersRef = useRef<UserWorker[]>([]);

  useEffect(() => {
    agent.UsersWorkers.list()
      .then((response: GetUserWorkerInfoDto) => {
        const { results } = response;
        setWorkersData(manyUserWorkerDtoToModel(results));
        workersRef.current = manyUserWorkerDtoToModel(results);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setDataLoading(false);
      });
  }, []);

  const updateMainCheck = (isChecked: boolean) => {
    setIsMainChecked(isChecked);
    setWorkerRuts(isChecked ? workersData.map((worker) => worker.rut) : []);
  };

  const onAddActivityButtonClick = () => {
    setShowAddActivityModal(true);
  };

  const onCloseAddActivityModal = (data?: ActivityInformation) => {
    setShowAddActivityModal(false);
    if (!data) return;

    setActivityInfo(data);
    const { aptitude } = data;
    onActivitySet(aptitude);
  };

  const onActivitySet = (aptitude: AptitudeNameType) => {
    const aptitudeId = getAptitudeIdByName(aptitude);
    setDataLoading(true);

    agent.UsersWorkers.listByAptitude(aptitudeId)
      .then((response: UserWorkerCapacitationDto[]) => {
        const mappedWorkers = manyUserWorkerCapacitationDtoToModel(response);
        setWorkersData(mappedWorkers);
        workersRef.current = manyUserWorkerCapacitationDtoToModel(response);

        const selectedWorkersRuts = mappedWorkers
          .filter((worker) => worker.isChecked)
          .map((worker) => worker.rut);
        setWorkerRuts(selectedWorkersRuts);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setDataLoading(false);
      });
  };

  const assignActivityAndUsers = () => {
    const actInfo = activityInfo as ActivityInformation;
    agent.UsersWorkers.assignUsersToActivity(actInfo, workerRuts)
      .then(() => {
        console.log("Activity assigned successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const cancelActivity = () => {
    setDataLoading(true);
    setActivityInfo(undefined);
    agent.UsersWorkers.list()
      .then((response: GetUserWorkerInfoDto) => {
        const { results } = response;
        setWorkersData(manyUserWorkerDtoToModel(results));
        workersRef.current = manyUserWorkerDtoToModel(results);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setDataLoading(false);
      });
  };

  if (dataLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <section className="mx-auto max-w-screen-2xl md:px-4 lg:px-12">
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden mx-5 mb-10">
          <div className="flex flex-col md:flex-row items-stretch md:items-center md:space-x-3 space-y-3 md:space-y-0 justify-between mx-4 py-4 dark:border-gray-700">
            <div className="w-full md:w-1/2">
              <form className="flex items-center">
                <label htmlFor="worker-search" className="sr-only">
                  Buscador
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <SearchIcon />
                  </div>
                  <input
                    id="worker-search"
                    onChange={(e) => {
                      const searchValue = e.target.value.toLowerCase();
                      setWorkersData(
                        workersRef.current.filter((worker) => {
                          return (
                            worker.name.toLowerCase().includes(searchValue) ||
                            worker.rut.toLowerCase().includes(searchValue) ||
                            worker.email.toLowerCase().includes(searchValue) ||
                            worker.enterprise
                              .toLowerCase()
                              .includes(searchValue) ||
                            worker.qualification
                              ?.toLowerCase()
                              .includes(searchValue) ||
                            worker.status.toLowerCase().includes(searchValue) ||
                            worker.position
                              .toLowerCase()
                              .includes(searchValue) ||
                            worker.area.toLowerCase().includes(searchValue)
                          );
                        })
                      );
                    }}
                    placeholder={searchInputPlaceholder}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pignus-500 focus:border-pignus-500 block w-full pl-10 p-2"
                  />
                </div>
              </form>
            </div>
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              <ActionButtons
                isActivityInfo={!!activityInfo}
                onAddActivityButtonClick={onAddActivityButtonClick}
                assignActivityAndUsers={assignActivityAndUsers}
                cancelActivity={cancelActivity}
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <HeaderWorkersTable
                columns={columns}
                updateMainCheck={updateMainCheck}
              />
              <BodyWorkersTable
                workersData={workersData}
                isMainCheck={isMainChecked}
              />
            </table>
          </div>
          <TablePagination isActivityInfo={!!activityInfo} />
        </div>
      </section>
      {showAddActivityModal && (
        <CreateActivityModal onClose={onCloseAddActivityModal} />
      )}
    </>
  );
};

export default WorkersTable;
