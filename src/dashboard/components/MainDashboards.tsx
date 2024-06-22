import ActiveActivitiesPie from "./common-charts/ActiveActivitiesPie";
import ActivityParticipantsBar from "./common-charts/ActivityParticipantsBar";
import AptitudeRadar from "./common-charts/AptitudeRadar";
import WorkerStatusBar from "./common-charts/WorkerStatusBar";

const MainDashboards = () => {
  const average = {
    dynamismEnergy: 0.2,
    adaptabilityToChange: 0.7,
    initiative: 0.8,
    personalEffectiveness: 0.9,
    safeConduct: 0.85,
    workingUnderPressure: 0.75,
  };
  const status = [
    {
      status: 0,
      count: 8,
    },
    {
      status: 1,
      count: 28,
    },
    {
      status: 3,
      count: 18,
    },
    {
      status: 2,
      count: 28,
    },
  ];
  const participants = {
    first: [
      {
        count: 4,
        category: 1,
      },
    ],
    second: [
      {
        count: 20,
        category: 1,
      },
      {
        count: 60,
        category: 2,
      },
    ],
    third: [],
    fourth: [
      {
        count: 19,
        category: 1,
      },
      {
        count: 52,
        category: 2,
      },
    ],
    fifth: [
      {
        count: 20,
        category: 3,
      },
    ],
    sixth: [
      {
        count: 40,
        category: 2,
      },
      {
        count: 20,
        category: 3,
      },
    ],
  };
  const activeActivities = [
    {
      category: 1,
      count: 9,
    },
    {
      category: 2,
      count: 7,
    },
    {
      category: 3,
      count: 2,
    },
  ];
  return (
    <>
      <AptitudeRadar averages={average} />
      <WorkerStatusBar statusCount={status} />
      <ActivityParticipantsBar activityParticipants={participants} />
      <ActiveActivitiesPie activeActivities={activeActivities} />
    </>
  );
};

export default MainDashboards;
