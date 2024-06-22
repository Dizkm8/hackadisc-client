export interface CompetenceScoreAverageDto {
  adaptability_to_change__avg: number;
  safe_conduct__avg: number;
  dynamism_energy__avg: number;
  personal_effectiveness__avg: number;
  initiative__avg: number;
  working_under_pressure__avg: number;
}

export interface GradeCountItemDto {
  A: number;
  B: number;
  C: number;
  D: number;
}

export interface GradeCountDto {
  adaptability_to_change: GradeCountItemDto;
  safe_conduct: GradeCountItemDto;
  dynamism_energy: GradeCountItemDto;
  personal_effectiveness: GradeCountItemDto;
  initiative: GradeCountItemDto;
  working_under_pressure: GradeCountItemDto;
}

export interface StateCountItemDto {
  state: number;
  count: number;
}

export interface ActiveInterventionItemDto {
  category: number;
  count: number;
}

export interface InterventionParticipantItemDto {
  count: number;
  category: number;
}

export interface InterventionParticipantsDto {
  1: InterventionParticipantItemDto[];
  2: InterventionParticipantItemDto[];
  3: InterventionParticipantItemDto[];
  4: InterventionParticipantItemDto[];
  5: InterventionParticipantItemDto[];
  6: InterventionParticipantItemDto[];
}

export interface ContractItemDto {
  start_date: Date;
  end_date: Date;
  remaining_time: string;
}

export interface CompanyInfoDto {
  name: string;
  contracts: ContractItemDto[];
}

export interface GetCommonStatisticsDto {
  competence_score_average: CompetenceScoreAverageDto;
  grade_count: GradeCountDto;
  state_count: StateCountItemDto[];
  active_intervention: ActiveInterventionItemDto[];
  intervention_participants: InterventionParticipantsDto;
  company_info?: CompanyInfoDto;
}
