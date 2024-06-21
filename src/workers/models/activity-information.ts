import { AptitudeNameType } from "./aptitude-name-type";

export interface ActivityInformation {
  activity: string;
  aptitude: AptitudeNameType;
  category: string;
  date: Date;
  description: string;
}
