import { useEffect, useState } from "react";
import agent from "../../api/agent";
import LoadingSpinner from "../../common/components/LoadingSpinner";
import ActiveActivitiesPie from "./common-charts/ActiveActivitiesPie";
import ActivityParticipantsBar from "./common-charts/ActivityParticipantsBar";
import AptitudeRadar from "./common-charts/AptitudeRadar";
import GradeHeatmap from "./common-charts/GradeHeatmap";
import WorkerStatusBar from "./common-charts/WorkerStatusBar";
import { Statistics } from "../models/common-statistics";
import { mapGetCommonStatisticsDtoStatistics } from "../utils/mapper";
import { GetCommonStatisticsDto } from "../../api/dtos/dashboards/get-common-statistics";
import EnterpriseTable from "./enterprise-table/EnterpriseTable";

const AdminDashboard = () => {
  const [stats, setStats] = useState<Statistics>();
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    agent.Dashboard.adminStatistics()
      .then((response: GetCommonStatisticsDto) => {
        setStats(mapGetCommonStatisticsDtoStatistics(response));
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
    <div className="w-full h-full gap-10 md:gap-0 grid grid-cols-1 lg:grid-cols-2 align-middle items-center justify-center pb-100">
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

      <div className="col-span-2" >
        <EnterpriseTable />
      </div>
    </div>
  );
};

export default AdminDashboard;
