export interface EnterpriseSummaryItem {
    name: string;
    workerCount: number;
    evaluatedWorkerCount: number;
    activityCount: number;
    mainEnterprise?: string;
    remainingTime: string;
} 