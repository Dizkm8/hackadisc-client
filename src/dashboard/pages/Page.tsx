import { useEffect } from "react";
import MainDashboards from "../components/MainDashboards";
import WelcomeMessage from "../components/WelcomeMessage";
import agent from "../../api/agent";
import { GetAllCompanyStatisticsDto } from "../../api/dtos/dashboards/get-all-company-statistics";
import { mapGetAllCompanyStatisticsDtoToEnterpriseStatistics } from "../utils/mapper";

const DashboardPage = () => {
  useEffect(() => {
    agent.CompanyDashboard.allStatistics()
      .then((response: GetAllCompanyStatisticsDto) => {
        const mappedStatistics =
          mapGetAllCompanyStatisticsDtoToEnterpriseStatistics(response);
        console.log(mappedStatistics);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="w-full h-dvh p-5 md:p-10">
      <WelcomeMessage />
      <MainDashboards />
    </div>
  );
};

export default DashboardPage;
