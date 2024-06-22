export interface EnterpriseSummaryItemDto {
    company_name: string;
    worker_count: number;
    evaluation_count: number;
    intervention_count: number;
    main_company?: string;
    start_date: Date;
    end_date: Date;
    remaining_time: string;
} 

export interface GetEnterpriseSummaryDto {
    results: EnterpriseSummaryItemDto[];
}