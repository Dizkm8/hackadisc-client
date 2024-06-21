import { GetActivityDetailDto } from "../../api/dtos/get-activity-detail-dto";
import { SimpleActivityDto } from "../../api/dtos/get-all-activities-dto";
import { ActivityDetail } from "../models/activity-detail";

export const mapSimpleActivityDtoToActivity = (
  simpleActivityDto: SimpleActivityDto
) => {
  const mappedActivity = {
    id: simpleActivityDto.id,
    title: simpleActivityDto.name,
    start: new Date(simpleActivityDto.date),
    end: new Date(simpleActivityDto.date),
    className: "!bg-pignus-500 hover:!bg-pignus-600",
  };
  mappedActivity.end.setHours(mappedActivity.end.getHours() + 1);
  return mappedActivity;
};

export const mapDetailActivityDtoToModel = (
  dto: GetActivityDetailDto
): ActivityDetail => {
  return {
    name: dto.name,
    description: dto.description,
    date: new Date(dto.date),
    category: dto.category,
    aptitude: dto.competence,
    participants: dto.participants.map((participant) => ({
      rut: participant.rut,
      username: participant.user_name,
      email: participant.email,
      area: participant.area_name,
    })),
  };
};
