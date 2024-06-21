import HeaderWorkersTable from "./HeaderWorkersTable";
import BodyWorkersTable from "./BodyWorkersTable";
import { useEffect, useState } from "react";
import agent from "../../api/agent";
import { GetUserWorkerInfoDto } from "../../api/dtos/get-user-worker-info-dto";
import {
  manyUserWorkerCapacitationDtoToModel,
  manyUserWorkerDtoToModel,
} from "../../common/services/dto-to-model";
import { UserWorker } from "../models/user-worker";
import CButton from "../../common/components/CButton";
import { IoMdAdd } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa6";
import CreateActivityModal from "./CreateActivityModal";
import { AptitudeNameType, getAptitudeIdByName } from "../utils/utils";
import { UserWorkerCapacitationDto } from "../../api/dtos/user-worker-capacitation-dto";

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
const addActivityText = "Nueva Actividad";
const sendActivityAndUsers = "Asignar Actividad";

interface ActivityInformation {
  activity: string;
  aptitude: AptitudeNameType;
  category: string;
  date: Date;
  description: string;
}

const WorkersTable = () => {
  const [workersData, setWorkersData] = useState<UserWorker[]>([]);
  const [isMainChecked, setIsMainChecked] = useState(false);
  const [showAddActivityModal, setShowAddActivityModal] = useState(false);
  const [activityInfo, setActivityInfo] = useState<
    ActivityInformation | undefined
  >(undefined);

  useEffect(() => {
    agent.UsersWorkers.list()
      .then((response: GetUserWorkerInfoDto) => {
        const { results } = response;
        setWorkersData(manyUserWorkerDtoToModel(results));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const updateMainCheck = (isChecked: boolean) => {
    setIsMainChecked(isChecked);
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
    agent.UsersWorkers.listByAptitude(aptitudeId)
      .then((response: UserWorkerCapacitationDto[]) => {
        setWorkersData(manyUserWorkerCapacitationDtoToModel(response));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <section className="mx-auto max-w-screen-2xl md:px-4 lg:px-12">
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden mx-5 mb-10">
          <div className="flex flex-col md:flex-row items-stretch md:items-center md:space-x-3 space-y-3 md:space-y-0 justify-between mx-4 py-4 dark:border-gray-700">
            <div className="w-full md:w-1/2">
              <form className="flex items-center">
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    placeholder={searchInputPlaceholder}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  />
                </div>
              </form>
            </div>
            <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
              <div className="flex items-center space-x-3 w-full md:w-auto">
                {activityInfo && (
                  <CButton className="w-full" colorType="blue">
                    <FaArrowUp className="mr-2 h-5 w-5" />
                    {sendActivityAndUsers}
                  </CButton>
                )}
              </div>
              <div className="flex items-center space-x-3 w-full md:w-auto">
                <CButton className="w-full" onClick={onAddActivityButtonClick}>
                  <IoMdAdd className="mr-2 h-5 w-5" />
                  {addActivityText}
                </CButton>
              </div>
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
          <nav
            className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
            aria-label="Table navigation"
          >
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              {"Showing "}
              <span className="font-semibold text-gray-900 dark:text-white">
                {"1-10 "}
              </span>
              {"of "}
              <span className="font-semibold text-gray-900 dark:text-white">
                1000
              </span>
            </span>
            <ul className="inline-flex items-stretch -space-x-px">
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  ...
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  100
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Next</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      {showAddActivityModal && (
        <CreateActivityModal onClose={onCloseAddActivityModal} />
      )}
    </>
  );
};

export default WorkersTable;
