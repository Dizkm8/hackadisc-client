export interface AptitudeScoreAverage {
  dynamismEnergy: number;
  adaptabilityToChange: number;
  initiative: number;
  personalEffectiveness: number;
  safeConduct: number;
  workingUnderPressure: number;
}

export interface GradeCountItem {
  A: number;
  B: number;
  C: number;
  D: number;
}

export interface GradeCount {
  adaptabilityToChange: GradeCountItem;
  safeConduct: GradeCountItem;
  dynamismEnergy: GradeCountItem;
  personalEffectiveness: GradeCountItem;
  initiative: GradeCountItem;
  workingUnderPressure: GradeCountItem;
}

export interface StatusCountItem {
  status: number;
  count: number;
}

export interface ActiveActivityItem {
  category: number;
  count: number;
}

export interface ActivityParticipantItem {
  count: number;
  category: number;
}

export interface ActivityParticipants {
  first: ActivityParticipantItem[];
  second: ActivityParticipantItem[];
  third: ActivityParticipantItem[];
  fourth: ActivityParticipantItem[];
  fifth: ActivityParticipantItem[];
  sixth: ActivityParticipantItem[];
}

export interface ContractItem {
  startDate: Date;
  endDate: Date;
  remainingTime: string;
}

export interface CompanyInfo {
  name: string;
  contracts: ContractItem[];
}

export interface Statistics {
  aptitudeScoreAverage: AptitudeScoreAverage;
  gradeCount: GradeCount;
  statusCount: StatusCountItem[];
  activeActivities: ActiveActivityItem[];
  activitiesParticipants: ActivityParticipants;
  enterpriseInfo?: CompanyInfo;
}
