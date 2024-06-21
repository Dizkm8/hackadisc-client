import {
  ActiveInterventionItemDto,
  CompanyInfoDto,
  CompetenceScoreAverageDto,
  ContractItemDto,
  GetAllCompanyStatisticsDto,
  GradeCountDto,
  GradeCountItemDto,
  InterventionParticipantItemDto,
  InterventionParticipantsDto,
  StateCountItemDto,
  SubUnitStateCountItemDto,
} from "../../api/dtos/dashboards/get-all-company-statistics";
import {
  ActiveActivityItem,
  ActivityParticipantItem,
  ActivityParticipants,
  AptitudeScoreAverage,
  CompanyInfo,
  ContractItem,
  EnterpriseStatistics,
  GradeCount,
  GradeCountItem,
  StatusCountItem,
  SubUnitStatusCountItem,
} from "../models/enterprise-statistics";

export const mapStateCountItemDtoToStatusCountItem = (
  dto: StateCountItemDto[]
): StatusCountItem[] => {
  return dto.map((item) => ({
    status: item.state,
    count: item.count,
  }));
};

export const mapGradeCountItemDtoToGradeCountItem = (
  dto: GradeCountItemDto
): GradeCountItem => {
  return {
    A: dto.A,
    B: dto.B,
    C: dto.C,
    D: dto.D,
  };
};

export const mapGradeCountDtoToGradeCount = (
  dto: GradeCountDto
): GradeCount => {
  return {
    adaptabilityToChange: mapGradeCountItemDtoToGradeCountItem(
      dto.adaptability_to_change
    ),
    dynamismEnergy: mapGradeCountItemDtoToGradeCountItem(dto.dynamism_energy),
    initiative: mapGradeCountItemDtoToGradeCountItem(dto.initiative),
    personalEffectiveness: mapGradeCountItemDtoToGradeCountItem(
      dto.personal_effectiveness
    ),
    safeConduct: mapGradeCountItemDtoToGradeCountItem(dto.safe_conduct),
    workingUnderPressure: mapGradeCountItemDtoToGradeCountItem(
      dto.working_under_pressure
    ),
  };
};

export const mapCompetenceScoreAverageDtoToAptitudeScoreAverage = (
  dto: CompetenceScoreAverageDto
): AptitudeScoreAverage => {
  return {
    adaptabilityToChange: dto.adaptability_to_change__avg,
    dynamismEnergy: dto.dynamism_energy__avg,
    initiative: dto.initiative__avg,
    personalEffectiveness: dto.personal_effectiveness__avg,
    safeConduct: dto.safe_conduct__avg,
    workingUnderPressure: dto.working_under_pressure__avg,
  };
};

export const mapSubUnitStateCountItemDtoToSubUnitStatusCountItem = (
  dto: SubUnitStateCountItemDto[]
): SubUnitStatusCountItem[] => {
  return dto.map((item) => ({
    areaId: item.area_id,
    status: item.state,
    count: item.count,
  }));
};

export const mapActiveInterventionItemDtoToActiveActivityItem = (
  dto: ActiveInterventionItemDto[]
): ActiveActivityItem[] => {
  return dto.map((item) => ({
    category: item.category,
    count: item.count,
  }));
};

export const mapInterventionParticipantItemDtoToActivityParticipantItem = (
  dto: InterventionParticipantItemDto[]
): ActivityParticipantItem[] => {
  return dto.map((item) => ({
    category: item.category,
    count: item.count,
  }));
};

export const mapInterventionParticipantsDtoToActivityParticipants = (
  dto: InterventionParticipantsDto
): ActivityParticipants => {
  return {
    first: mapInterventionParticipantItemDtoToActivityParticipantItem(dto["1"]),
    second: mapInterventionParticipantItemDtoToActivityParticipantItem(
      dto["2"]
    ),
    third: mapInterventionParticipantItemDtoToActivityParticipantItem(dto["3"]),
    fourth: mapInterventionParticipantItemDtoToActivityParticipantItem(
      dto["4"]
    ),
    fifth: mapInterventionParticipantItemDtoToActivityParticipantItem(dto["5"]),
    sixth: mapInterventionParticipantItemDtoToActivityParticipantItem(dto["6"]),
  };
};

export const mapContractItemDtoToContractItem = (
  dto: ContractItemDto[]
): ContractItem[] => {
  return dto.map((item) => ({
    startDate: new Date(item.start_date),
    endDate: new Date(item.end_date),
    remainingTime: item.remaining_time,
  }));
};

export const mapCompanyInfoDtoToCompanyInfo = (
  dto: CompanyInfoDto
): CompanyInfo => {
  return {
    name: dto.name,
    contracts: mapContractItemDtoToContractItem(dto.contracts),
  };
};

export const mapGetAllCompanyStatisticsDtoToEnterpriseStatistics = (
  dto: GetAllCompanyStatisticsDto
): EnterpriseStatistics => {
  const aptitudeScoreAverage =
    mapCompetenceScoreAverageDtoToAptitudeScoreAverage(
      dto.competence_score_average
    );
  const gradeCount = mapGradeCountDtoToGradeCount(dto.grade_count);
  const statusCount = mapStateCountItemDtoToStatusCountItem(dto.state_count);
  const subUnitStatusCount =
    mapSubUnitStateCountItemDtoToSubUnitStatusCountItem(
      dto.subunit_state_count
    );
  const activeActivities = mapActiveInterventionItemDtoToActiveActivityItem(
    dto.active_intervention
  );
  const activitiesParticipants =
    mapInterventionParticipantsDtoToActivityParticipants(
      dto.intervention_participants
    );

  const enterpriseInfo = mapCompanyInfoDtoToCompanyInfo(dto.company_info);

  return {
    aptitudeScoreAverage,
    gradeCount,
    statusCount,
    subUnitStatusCount,
    activeActivities,
    activitiesParticipants,
    enterpriseInfo,
  };
};
