import { GetCommonStatisticsDto } from "./get-common-statistics";

export interface ActivitySummaryItemDto {
    name: string;
    count: number;
    date: Date;
}

export interface GetAllAreaStatisticsDto extends GetCommonStatisticsDto {
    intervention_summary: ActivitySummaryItemDto[];
}