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
import ActivitySummaryTable from "./ActivitySummaryTable";

const AreaDashboard = () => {
  const [stats, setStats] = useState<AreaStatistics>();
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    agent.Dashboard.areaStatistics()
      .then((response: GetAllAreaStatisticsDto) => {
        setStats(mapGetAllAreaStatisticsDtoDtoToAreaStatistics(response));
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
        <hr className="md:hidden mt-5 md:mt-10 border-2 border-gray-100" />
      </div>
      <ActivitySummaryTable
        summary={stats.activitySummary}
        className="mt-3 md:mt-10"
      />
    </>
  );
};

export default AreaDashboard;
