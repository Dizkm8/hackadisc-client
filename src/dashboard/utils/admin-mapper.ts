import { EnterpriseSummaryItemDto } from "../../api/dtos/dashboards/get-companies-summary";
import { EnterpriseSummaryItem } from "../models/admin-statistics";

export const mapEnterpriseSummaryItemDtoToEnterpriseSummaryItem = (
    dto: EnterpriseSummaryItemDto[]
  ): EnterpriseSummaryItem[] => {
    return dto.map((item) => ({
        name: item.company_name,
        workerCount: item.worker_count,
        evaluatedWorkerCount: item.evaluation_count,
        activityCount: item.intervention_count,
        mainEnterprise: item.main_company || "N/A",
        remainingTime: item.remaining_time,
    }));
  };
  