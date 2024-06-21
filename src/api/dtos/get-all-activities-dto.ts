export interface SimpleActivityDto {
  id: number;
  name: string;
  description: string;
  date: Date;
  category_name: string;
  competence_name: string;
}

export interface GetAllActivitiesDto {
  count: number;
  next: string | null;
  previous: string | null;
  results: SimpleActivityDto[];
}
