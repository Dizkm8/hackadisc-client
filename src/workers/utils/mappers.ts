import {
  GetWorkerDetailDto,
  WorkerInterventionContainerDto,
} from "../../api/dtos/get-worker-detail-dto";
import {
  WorkerDetail,
  WorkerInterventionContainer,
} from "../models/worker-detail";

export const workerDetailDtoToWorkerDetail = (
  dto: GetWorkerDetailDto
): WorkerDetail => {
  const mappedActivities: WorkerInterventionContainer[] =
    dto.interventions_history.map(
      (intv: WorkerInterventionContainerDto): WorkerInterventionContainer => ({
        isCompleted: intv.is_completed,
        intervention: {
          id: intv.intervention.id,
          name: intv.intervention.name,
          description: intv.intervention.description,
          category: intv.intervention.category,
          company: intv.intervention.company_name,
          aptitude: intv.intervention.competence,
          date: intv.intervention.date,
        },
      })
    );

  return {
    id: dto.id,
    rut: dto.rut,
    name: dto.user_name,
    email: dto.email,
    area: dto.area_name,
    enterprise: dto.company_name,
    position: dto.post_name,
    status: dto.state_name,
    dynamismEnergy: dto.dynamism_energy,
    adaptabilityToChange: dto.adaptability_to_change,
    initiative: dto.initiative,
    personalEffectiveness: dto.personal_effectiveness,
    safeConduct: dto.safe_conduct,
    workingUnderPressure: dto.working_under_pressure,
    allActivities: mappedActivities,
  };
};
