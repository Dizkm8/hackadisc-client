import { CompanyInfoDto } from "../../api/dtos/dashboards/get-common-statistics";
import {
  SubUnitStateCountItemDto,
  GetAllCompanyStatisticsDto,
  MultiCompanyInfoDto,
} from "../../api/dtos/dashboards/get-all-company-statistics";
import { CompanyInfo } from "../models/common-statistics";

import {
  EnterpriseStatistics,
  MultiCompanyInfo,
  SubUnitStatusCountItem,
} from "../models/enterprise-statistics";
import {
  mapActiveInterventionItemDtoToActiveActivityItem,
  mapCompanyInfoDtoToCompanyInfo,
  mapCompetenceScoreAverageDtoToAptitudeScoreAverage,
  mapContractItemDtoToContractItem,
  mapGradeCountDtoToGradeCount,
  mapInterventionParticipantsDtoToActivityParticipants,
  mapStateCountItemDtoToStatusCountItem,
} from "./mapper";

export const mapSubUnitStateCountItemDtoToSubUnitStatusCountItem = (
  dto: SubUnitStateCountItemDto[]
): SubUnitStatusCountItem[] => {
  return dto.map((item) => ({
    areaId: item.area_id,
    status: item.state,
    count: item.count,
  }));
};

export const mapMultiCompanyInfoDtoToCompanyInfo = (
  dto: MultiCompanyInfoDto | CompanyInfoDto
): MultiCompanyInfo | CompanyInfo => {
  if ("sub_companies" in dto) {
    const mappedSubCompanies = dto.sub_companies
      .map(mapCompanyInfoDtoToCompanyInfo)
      .filter((item) => item) as CompanyInfo[];

    return {
      name: dto.name,
      contracts: mapContractItemDtoToContractItem(dto.contracts),
      subcompanies: mappedSubCompanies,
    };
  }

  return mapCompanyInfoDtoToCompanyInfo(dto) as CompanyInfo;
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

  const enterpriseInfo = mapMultiCompanyInfoDtoToCompanyInfo(dto.company_info);

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
