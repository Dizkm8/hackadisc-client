import { StatusCountItem, Statistics, CompanyInfo } from "./common-statistics";

export interface SubUnitStatusCountItem extends StatusCountItem {
  areaId: number;
}

export interface MultiCompanyInfo extends CompanyInfo {
  subcompanies: CompanyInfo[];
}

export interface EnterpriseStatistics extends Statistics {
  subUnitStatusCount: SubUnitStatusCountItem[];
  enterpriseInfo: MultiCompanyInfo | CompanyInfo;
}
