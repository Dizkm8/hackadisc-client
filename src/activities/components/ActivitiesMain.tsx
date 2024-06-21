import { useEffect, useState } from "react";
import { Activity } from "../models/activity";
import ActivitiesCalendar from "./ActivitiesCalendar";
import agent from "../../api/agent";
import { GetAllActivitiesDto } from "../../api/dtos/get-all-activities-dto";
import {
  mapDetailActivityDtoToModel,
  mapSimpleActivityDtoToActivity,
} from "../utils/mapper";
import LoadingSpinner from "../../common/components/LoadingSpinner";
import { GetActivityDetailDto } from "../../api/dtos/get-activity-detail-dto";
import ActivityDetailModal from "./ActivityDetailModal";
import { ActivityDetail } from "../models/activity-detail";

const ActivitiesMain = () => {
  const [loadingData, setLoadingData] = useState<boolean>(true);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<
    ActivityDetail | undefined
  >(undefined);

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
    const { id } = activity;
    agent.Activities.findOne(id)
      .then((response: GetActivityDetailDto) => {
        const mappedActivity = mapDetailActivityDtoToModel(id, response);
        setSelectedActivity(mappedActivity);
      })
      .catch((error) => console.error(error));
  };

  const onActivityDetailModalClose = () => {
    setSelectedActivity(undefined);
  };

  if (loadingData) {
    return <LoadingSpinner />;
  }
  return (
    <>
      {selectedActivity && (
        <ActivityDetailModal
          activity={selectedActivity}
          onClose={onActivityDetailModalClose}
        />
      )}
      <ActivitiesCalendar
        activities={activities}
        onActivityClick={onActivityClick}
      />
    </>
  );
};

export default ActivitiesMain;
