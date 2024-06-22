import { CompanySummaryItemDto } from "../../api/dtos/dashboards/get-companies-summary";
import { CompanySummaryItem } from "../models/admin-statistics";

export const mapCompanySummaryItemDtoToCompanySummaryItem = (
    dto: CompanySummaryItemDto[]
  ): CompanySummaryItem[] => {
    return dto.map((item) => ({
        name: item.company_name,
        workerCount: item.worker_count,
        evaluatedWorkerCount: item.evaluation_count,
        activityCount: item.intervention_count,
        mainEnterprise: item.main_company || "",
        remainingTime: item.remaining_time,
    }));
  };
  