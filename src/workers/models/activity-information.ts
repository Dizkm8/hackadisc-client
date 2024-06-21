import { AptitudeNameType } from "../../common/types/aptitude-name-type";
import { CategoryNameType } from "../../common/types/category-name-type";

export interface ActivityInformation {
  activity: string;
  aptitude: AptitudeNameType;
  category: CategoryNameType;
  date: Date;
  description: string;
}
