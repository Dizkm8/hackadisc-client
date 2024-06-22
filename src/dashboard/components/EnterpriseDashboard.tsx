
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

const EnterpriseDashboard = () => {
  const [stats, setStats] = useState<EnterpriseStatistics>();
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    agent.Dashboard.companyStatistics()
      .then((response: GetAllCompanyStatisticsDto) => {
        setStats(
          mapGetAllCompanyStatisticsDtoToEnterpriseStatistics(response)
        );
      })
      .catch((error) => {
        console.error(error);
      }).finally(() => {
        setDataLoading(false);
      });
  }, []);

  if (!stats || dataLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 align-middle items-center justify-center">
      <AptitudeRadar averages={stats.aptitudeScoreAverage} />
      <GradeHeatmap gradeCount={stats.gradeCount} height={400} width={600} />
      <WorkerStatusBar statusCount={stats.statusCount} className="w-[600px]" />
      <ActivityParticipantsBar activityParticipants={stats.activitiesParticipants} className="my-auto w-[600px]" />
      <ActiveActivitiesPie activeActivities={stats.activeActivities} className="w-[600px]" />
    </div>
  );
};

export default EnterpriseDashboard;
