import { ActivityInformation } from "../../workers/models/activity-information";
import {
  getAptitudeIdByName,
  getCategoryIdByName,
} from "../../workers/utils/utils";
import { AssignActivityDto } from "../dtos/assign-activity-dto";

export const mapAssignUsersToActivity = (
  activityInfo: ActivityInformation,
  workersRuts: string[]
): AssignActivityDto => {
  const category = getCategoryIdByName(activityInfo.category);
  const competence = getAptitudeIdByName(activityInfo.aptitude);

  return {
    name: activityInfo.activity,
    category,
    competence,
    date: activityInfo.date,
    description: activityInfo.description,
    ruts: workersRuts,
  };
};
