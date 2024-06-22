import {
  AptitudeScoreAverage,
  GradeCount,
  StatusCountItem,
  ActiveActivityItem,
  ActivityParticipants,
  CompanyInfo,
} from "./common-statistics";

export interface SubUnitStatusCountItem {
  areaId: number;
  status: number;
  count: number;
}

export interface MultiCompanyInfo extends CompanyInfo {
  subcompanies: CompanyInfo[];
}

export interface EnterpriseStatistics {
  aptitudeScoreAverage: AptitudeScoreAverage;
  gradeCount: GradeCount;
  statusCount: StatusCountItem[];
  subUnitStatusCount: SubUnitStatusCountItem[];
  activeActivities: ActiveActivityItem[];
  activitiesParticipants: ActivityParticipants;
  enterpriseInfo: CompanyInfo;
}
