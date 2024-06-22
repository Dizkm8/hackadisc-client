import {
  ActiveInterventionItemDto,
  CompanyInfoDto,
  CompetenceScoreAverageDto,
  ContractItemDto,
  GradeCountDto,
  GradeCountItemDto,
  InterventionParticipantItemDto,
  InterventionParticipantsDto,
  StateCountItemDto,
} from "../../api/dtos/dashboards/get-common-statistics";
import {
  ActivitySummaryItemDto,
  GetAllAreaStatisticsDto,
} from "../../api/dtos/dashboards/get-all-area-statistics";
import {
  ActiveActivityItem,
  ActivityParticipantItem,
  ActivityParticipants,
  AptitudeScoreAverage,
  CompanyInfo,
  ContractItem,
  GradeCount,
  GradeCountItem,
  StatusCountItem,
} from "../models/common-statistics";

import {
  AreaStatistics,
  ActivitySummaryItem,
} from "../models/area-statistics";
import { mapActiveInterventionItemDtoToActiveActivityItem, mapCompanyInfoDtoToCompanyInfo, mapCompetenceScoreAverageDtoToAptitudeScoreAverage, mapContractItemDtoToContractItem, mapGradeCountDtoToGradeCount, mapInterventionParticipantsDtoToActivityParticipants, mapStateCountItemDtoToStatusCountItem } from "./mapper";

export const mapActivitySummaryItemDtoToActivitySummaryItemItem = (
  dto: ActivitySummaryItemDto[]
): ActivitySummaryItem[] => {
  return dto.map((item) => ({ 
    name: item.name,
    count: item.count,
    date: item.date,
  }));
};

export const mapGetAllAreaStatisticsDtoDtoToAreaStatistics = (
  dto: GetAllAreaStatisticsDto
): AreaStatistics => {
  const aptitudeScoreAverage =
    mapCompetenceScoreAverageDtoToAptitudeScoreAverage(
      dto.competence_score_average
    );
  const gradeCount = mapGradeCountDtoToGradeCount(dto.grade_count);
  const statusCount = mapStateCountItemDtoToStatusCountItem(dto.state_count);
  const activeActivities = mapActiveInterventionItemDtoToActiveActivityItem(
    dto.active_intervention
  );
  const activitiesParticipants =
    mapInterventionParticipantsDtoToActivityParticipants(
      dto.intervention_participants
    );
  const activitySummary = mapActivitySummaryItemDtoToActivitySummaryItemItem(
    dto.intervention_summary
  );
  const enterpriseInfo = mapCompanyInfoDtoToCompanyInfo(dto.company_info);

  return {
    aptitudeScoreAverage,
    gradeCount,
    statusCount,
    activeActivities,
    activitiesParticipants,
    activitySummary,
    enterpriseInfo,
  };
};
