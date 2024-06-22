import { useEffect, useState } from "react";
import agent from "../../api/agent";
import LoadingSpinner from "../../common/components/LoadingSpinner";
import ActiveActivitiesPie from "./common-charts/ActiveActivitiesPie";
import ActivityParticipantsBar from "./common-charts/ActivityParticipantsBar";
import AptitudeRadar from "./common-charts/AptitudeRadar";
import GradeHeatmap from "./common-charts/GradeHeatmap";
import WorkerStatusBar from "./common-charts/WorkerStatusBar";
import { AreaStatistics } from "../models/area-statistics";
import { mapGetAllAreaStatisticsDtoDtoToAreaStatistics } from "../utils/area-mapper";
import { GetAllAreaStatisticsDto } from "../../api/dtos/dashboards/get-all-area-statistics";

const AreaDashboard = () => {
  const [stats, setStats] = useState<AreaStatistics>();
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    agent.Dashboard.adminStatistics()
      .then((response: GetAllAreaStatisticsDto) => {
        setStats(
          mapGetAllAreaStatisticsDtoDtoToAreaStatistics(response)
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

export default AreaDashboard;
