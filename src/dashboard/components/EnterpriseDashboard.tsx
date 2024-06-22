import { useEffect, useState } from "react";
import agent from "../../api/agent";
import { GetAllCompanyStatisticsDto } from "../../api/dtos/dashboards/get-all-company-statistics";
import { mapGetAllCompanyStatisticsDtoToEnterpriseStatistics } from "../utils/enterprise-mapper";
import ActiveActivitiesPie from "./common-charts/ActiveActivitiesPie";
import ActivityParticipantsBar from "./common-charts/ActivityParticipantsBar";
import AptitudeRadar from "./common-charts/AptitudeRadar";
import GradeHeatmap from "./common-charts/GradeHeatmap";
import WorkerStatusBar from "./common-charts/WorkerStatusBar";
import { EnterpriseStatistics } from "../models/enterprise-statistics";
import LoadingSpinner from "../../common/components/LoadingSpinner";
import EnterpriseCard from "./enterprise/EnterpriseCard";

const EnterpriseDashboard = () => {
  const [stats, setStats] = useState<EnterpriseStatistics>();
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    agent.Dashboard.companyStatistics()
      .then((response: GetAllCompanyStatisticsDto) => {
        const mappedValues =
          mapGetAllCompanyStatisticsDtoToEnterpriseStatistics(response);
        setStats(mappedValues);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setDataLoading(false);
      });
  }, []);

  if (!stats || dataLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <h2 className="text-center text-2xl mt-8 md:mt-5 md:text-3xl font-bold mb-5">
        Contrato Vigente
      </h2>
      <div className="mx-auto w-full md:w-5/6 flex gap-3 mb-10">
        {stats.enterpriseInfo.contracts.map(
          ({ startDate, endDate, remainingTime }) => (
            <EnterpriseCard
              key={startDate.toString() + endDate.toString() + remainingTime}
              startDate={startDate}
              endDate={endDate}
              remainingTime={remainingTime}
            />
          )
        )}
      </div>
      <hr className="mt-5 md:mt-10 border-2 border-gray-100 mb-10" />
      <div className="w-full h-full gap-10 md:gap-0 grid grid-cols-1 lg:grid-cols-2 align-middle items-center justify-center pb-10">
        <AptitudeRadar averages={stats.aptitudeScoreAverage} />
        <hr className="md:hidden mt-5 md:mt-10 border-2 border-gray-100" />

        <GradeHeatmap gradeCount={stats.gradeCount} height={400} width={600} />
        <hr className="md:hidden mt-5 md:mt-10 border-2 border-gray-100" />

        <WorkerStatusBar statusCount={stats.statusCount} />
        <hr className="md:hidden mt-5 md:mt-10 border-2 border-gray-100" />

        <ActivityParticipantsBar
          activityParticipants={stats.activitiesParticipants}
        />
        <hr className="md:hidden mt-5 md:mt-10 border-2 border-gray-100" />

        <ActiveActivitiesPie activeActivities={stats.activeActivities} />
      </div>
    </>
  );
};

export default EnterpriseDashboard;
