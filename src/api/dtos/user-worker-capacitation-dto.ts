import { UserWorkerInfoDto } from "./get-user-worker-info-dto";

export interface UserWorkerCapacitationDto extends UserWorkerInfoDto {
  is_checked: boolean;
}
