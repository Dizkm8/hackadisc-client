import HeaderEnterpriseTable from "./HeaderEnterpriseTable";
import BodyEnterpriseTable from "./BodyEnterpriseTable";
import { useEffect, useRef, useState } from "react";
import agent from "../../../api/agent";
import LoadingSpinner from "../../../common/components/LoadingSpinner";
import TablePagination from "./TablePagination";
import SearchIcon from "../../../common/components/SearchIcon";
import { EnterpriseSummaryItem} from "../../models/admin-statistics";
import { mapEnterpriseSummaryItemDtoToEnterpriseSummaryItem } from "../../utils/admin-mapper";
import { GetEnterpriseSummaryDto } from "../../../api/dtos/dashboards/get-companies-summary";

const columns = [
  {
    Header: "Nombre",
    accessor: "name",
  },
  {
    Header: "Cantidad de trabajadores",
    accessor: "workerCount",
  },
  {
    Header: "Cantidad de trabajadores evaluados",
    accessor: "evaluatedWorkerCount",
  },
  {
    Header: "Cantidad de actividades",
    accessor: "activityCount",
  },
  {
    Header: "Empresa principal",
    accessor: "mainEnterprise",
  },
  {
    Header: "Tiempo restante de contrato",
    accessor: "remainingTime",
  },
];

const searchInputPlaceholder = "Buscar empresa...";

const EnterpriseTable = () => {
  const [dataLoading, setDataLoading] = useState(true);
  const [enterpriseData, setEnterpriseData] = useState<EnterpriseSummaryItem[]>([]);
  const enterprisesRef = useRef<EnterpriseSummaryItem[]>([]);

  useEffect(() => {
    agent.Dashboard.adminCompaniesStatistics()
      .then((response: GetEnterpriseSummaryDto) => {
        const { results } = response;
        setEnterpriseData(mapEnterpriseSummaryItemDtoToEnterpriseSummaryItem(results));
        enterprisesRef.current = mapEnterpriseSummaryItemDtoToEnterpriseSummaryItem(results);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setDataLoading(false);
      });
  }, []);

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
                <label htmlFor="enterprise-search" className="sr-only">
                  Buscador
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <SearchIcon />
                  </div>
                  <input
                    id="enterprise-search"
                    onChange={(e) => {
                      const searchValue = e.target.value.toLowerCase();
                      setEnterpriseData(
                        enterprisesRef.current.filter((enterprise) => {
                          return (
                            enterprise.name.toLowerCase().includes(searchValue) ||
                            enterprise.mainEnterprise?.toLowerCase().includes(searchValue) ||
                            enterprise.remainingTime.toLowerCase().includes(searchValue)
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
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <HeaderEnterpriseTable
                columns={columns}
              />
              <BodyEnterpriseTable
                enterprisesData={enterpriseData}
              />
            </table>
          </div>
          <TablePagination />
        </div>
      </section>
    </>
  );
};

export default EnterpriseTable;
