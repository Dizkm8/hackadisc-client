import { UserWorkerInfoDto } from "../../api/dtos/get-user-worker-info-dto";
import { UserWorkerCapacitationDto } from "../../api/dtos/user-worker-capacitation-dto";
import { UserWorker } from "../../workers/models/user-worker";
import { UserWorkerCapacitation } from "../../workers/models/user-worker-capacitation";

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

export const userWorkerCapacitationDtoToModel = (
  dto: UserWorkerCapacitationDto
): UserWorkerCapacitation => ({
  ...userWorkerDtoToModel(dto),
  isChecked: dto.is_checked,
});

export const manyUserWorkerCapacitationDtoToModel = (
  dto: UserWorkerCapacitationDto[]
): UserWorkerCapacitation[] => dto.map(userWorkerCapacitationDtoToModel);
