import MainLayout from "../../common/layout/MainLayout";
import ActivitiesCalendar from "../components/ActivitiesCalendar";
import { Activity } from "../models/activity";

const ActivitiesPage = () => {
  const className = "!bg-pignus-500 hover:!bg-pignus-600 ";

  const activities = [
    {
      title: "Today's Activity",
      start: new Date(2024, 5, 21, 10, 0), // June 21, 2024, 10:00 AM
      end: new Date(2024, 5, 21, 12, 0), // June 21, 2024, 12:00 PM
      className,
    },
    {
      title: "Activity in 3 Days",
      start: new Date(2024, 5, 24, 14, 0), // June 24, 2024, 2:00 PM
      end: new Date(2024, 5, 24, 16, 0), // June 24, 2024, 4:00 PM
      className,
    },
  ];

  const onActivityClick = (activity: Activity) => {
    console.log(activity);
  };

  return (
    <MainLayout>
      <h1 className="text-center text-5xl font-semibold md:font-normal md:text-6xl my-5">
        Actividades
      </h1>
      <ActivitiesCalendar
        activities={activities}
        onActivityClick={onActivityClick}
      />
    </MainLayout>
  );
};

export default ActivitiesPage;
