import { useEffect, useState } from "react";
import { Activity } from "../models/activity";
import ActivitiesCalendar from "./ActivitiesCalendar";
import agent from "../../api/agent";
import { GetAllActivitiesDto } from "../../api/dtos/get-all-activities-dto";
import { mapSimpleActivityDtoToActivity } from "../utils/mapper";
import LoadingSpinner from "../../common/components/LoadingSpinner";

const ActivitiesMain = () => {
  const [loadingData, setLoadingData] = useState<boolean>(true);
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    agent.Activities.list()
      .then((response: GetAllActivitiesDto) => {
        const { results } = response;
        setActivities(
          results.map((activity) => mapSimpleActivityDtoToActivity(activity))
        );
      })
      .catch((error) => console.error(error))
      .finally(() => setLoadingData(false));
  }, []);

  const onActivityClick = (activity: Activity) => {
    console.log(activity);
  };

  if (loadingData) {
    return <LoadingSpinner />;
  }
  return (
    <ActivitiesCalendar
      activities={activities}
      onActivityClick={onActivityClick}
    />
  );
};

export default ActivitiesMain;
