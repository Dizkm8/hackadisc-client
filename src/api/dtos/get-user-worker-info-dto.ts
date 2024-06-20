export interface UserWorkerInfoDto {
  id: string;
  user_name: string;
  rut: string;
  post_name: string;
  company_name: string;
  latest_evaluation_letter_grade: string;
  state_name: string;
  email: string;
  area_name: string;
  state: number;
}

export interface GetUserWorkerInfoDto {
  count: number;
  next: string | null;
  previous: string | null;
  results: UserWorkerInfoDto[];
}
