import { UserWorkerInfoDto } from "../../api/dtos/get-user-worker-info-dto";
import { UserWorker } from "../../workers/models/user-worker";

export const userWorkerDtoToModel = (dto: UserWorkerInfoDto): UserWorker => ({
  name: dto.user_name,
  rut: dto.rut,
  email: dto.email,
  enterprise: dto.company_name,
  qualification: dto.latest_evaluation_letter_grade,
  status: dto.state_name,
  position: dto.post_name,
  area: dto.area_name,
});

export const manyUserWorkerDtoToModel = (
  dto: UserWorkerInfoDto[]
): UserWorker[] => dto.map(userWorkerDtoToModel);
