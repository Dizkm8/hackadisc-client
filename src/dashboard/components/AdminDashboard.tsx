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

const AdminDashboard = () => {
  const [stats, setStats] = useState<Statistics>();
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    agent.Dashboard.adminStatistics()
      .then((response: GetCommonStatisticsDto) => {
        setStats(
          mapGetCommonStatisticsDtoStatistics(response)
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

export default AdminDashboard;
