export interface WorkerInterventionDetail {
  id: number;
  name: string;
  category: number;
  company_name: string;
  competence: number;
  date: Date;
  description: string;
}

export interface WorkerInterventionContainerDto {
  intervention: WorkerInterventionDetail;
  is_completed: boolean;
}

export interface GetWorkerDetailDto {
  id: number;
  rut: string;
  user_name: string;
  email: string;
  area_name: string;
  company_name: string;
  post_name: string;
  state_name: string;

  dynamism_energy: number;
  adaptability_to_change: number;
  initiative: number;
  personal_effectiveness: number;
  safe_conduct: number;
  working_under_pressure: number;

  interventions_history: WorkerInterventionContainerDto[];
}
