import { CompanyInfoDto, GetCommonStatisticsDto, StateCountItemDto } from "./get-common-statistics";


export interface SubUnitStateCountItemDto extends StateCountItemDto {
  area_id: number;
}

export interface MultiCompanyInfoDto extends CompanyInfoDto {
  sub_companies: CompanyInfoDto[];
}

export interface GetAllCompanyStatisticsDto extends GetCommonStatisticsDto {
  subunit_state_count: SubUnitStateCountItemDto[];
  company_info: MultiCompanyInfoDto | CompanyInfoDto;
}
