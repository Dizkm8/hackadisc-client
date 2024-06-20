import { useState } from "react";
import DropdownIcon from "../../common/components/DropdownIcon";
import AddIcon from "../../common/components/AddIcon";
import HeaderWorkersTable from "./HeaderWorkersTable";
import BodyWorkersTable from "./BodyWorkersTable";

const workersData = [
  {
    name: "Juanito Perez",
    rut: "20.017.691-8",
    email: "juanito.perez@alumnos.ucn.cl",
    enterprise: "Thermosolutions",
    qualification: "A",
    status: "Evaluado",
    position: "Ingeniero de Proyectos",
    area: "Proyectos",
  },
  {
    name: "Juanito Perez",
    rut: "20.767.851-1",
    email: "juanito.perez@alumnos.ucn.cl",
    enterprise: "Thermosolutions",
    qualification: "B",
    status: "Evaluado",
    position: "Ingeniero de Proyectos",
    area: "Proyectos",
  },
  {
    name: "Juanito Perez",
    rut: "20.537.391-8",
    email: "juanito.perez@alumnos.ucn.cl",
    enterprise: "Thermosolutions",
    qualification: "C",
    status: "Intervenido",
    position: "Ingeniero de Proyectos",
    area: "Proyectos",
  },
  {
    name: "Juanito Perez",
    rut: "10.767.661-8",
    email: "juanito.perez@alumnos.ucn.cl",
    enterprise: "Thermosolutions",
    qualification: "D",
    status: "Intervenido",
    position: "Ingeniero de Proyectos",
    area: "Proyectos",
  },
  {
    name: "Juanito Perez",
    rut: "20.767.121-8",
    email: "juanito.perez@alumnos.ucn.cl",
    enterprise: "Thermosolutions",
    qualification: "B",
    status: "En Intervención",
    position: "Ingeniero de Proyectos",
    area: "Proyectos",
  },
  {
    name: "Juanito Perez",
    rut: "20.962.691-8",
    email: "juanito.perez@alumnos.ucn.cl",
    enterprise: "Thermosolutions",
    qualification: "A",
    status: "En Intervención",
    position: "Ingeniero de Proyectos",
    area: "Proyectos",
  },
  {
    name: "Juanito Perez",
    rut: "20.767.661-0",
    email: "juanito.perez@alumnos.ucn.cl",
    enterprise: "Thermosolutions",
    qualification: "D",
    status: "En Intervención",
    position: "Ingeniero de Proyectos",
    area: "Proyectos",
  },
  {
    name: "Juanito Perez",
    rut: "21.767.691-8",
    email: "juanito.perez@alumnos.ucn.cl",
    enterprise: "Thermosolutions",
    qualification: "C",
    status: "Intervenido",
    position: "Ingeniero de Proyectos",
    area: "Proyectos",
  },
];

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

const allWorkersText = "Total trabajadores: ";
const allWorkersNumber = 123456;
const searchInputPlaceholder = "Buscar trabajador...";
const addProductText = "Agregar trabajador";
const actionsText = "Acciones";

const WorkersTable = () => {
  const [showCreateWorkerModal, setShowCreateWorkerModal] = useState(false);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased">
      <div className="mx-auto max-w-screen-2xl px-4 lg:px-12">
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div className="flex-1 flex items-center space-x-2">
              <h5>
                <span className="text-gray-500">{allWorkersText}</span>
                <span className="dark:text-white">{allWorkersNumber}</span>
              </h5>
              <div
                id="results-tooltip"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                Showing 1-100 of 436 results
                <div className="tooltip-arrow" data-popper-arrow="" />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-stretch md:items-center md:space-x-3 space-y-3 md:space-y-0 justify-between mx-4 py-4 border-t dark:border-gray-700">
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
              <button className="flex items-center justify-center text-white bg-pignus-700 hover:bg-pignus-800 focus:ring-4 focus:ring-pignus-300 font-medium rounded-lg text-sm px-4 py-2 ">
                <AddIcon />
                {addProductText}
              </button>

              <div className="flex items-center space-x-3 w-full md:w-auto">
                <button className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
                  {actionsText}
                  <DropdownIcon />
                </button>
                <div className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                  <ul
                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="actionsDropdownButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Mass Edit
                      </a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Delete all
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <HeaderWorkersTable columns={columns} />
              <BodyWorkersTable data={workersData} />
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
      </div>
    </section>
  );
};

export default WorkersTable;
