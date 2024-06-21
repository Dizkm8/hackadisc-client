export interface WorkerIntervention {
  id: number;
  name: string;
  description: string;
  category: number;
  company: string;
  aptitude: number;
  date: Date;
}

export interface WorkerInterventionContainer {
  intervention: WorkerIntervention;
  isCompleted: boolean;
}

export interface WorkerDetail {
  id: number;
  rut: string;
  name: string;
  email: string;
  area: string;
  enterprise: string;
  position: string;
  status: string;

  dynamismEnergy: number;
  adaptabilityToChange: number;
  initiative: number;
  personalEffectiveness: number;
  safeConduct: number;
  workingUnderPressure: number;

  allActivities: WorkerInterventionContainer[];
}
