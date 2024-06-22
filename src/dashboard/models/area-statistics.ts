import {
    Statistics,
} from "./common-statistics";

export interface ActivitySummaryItem {
    name: string;
    count: number;
    date: Date;
}

export interface AreaStatistics extends Statistics {
    activitySummary: ActivitySummaryItem[];
}