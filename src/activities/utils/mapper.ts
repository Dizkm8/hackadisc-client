import { SimpleActivityDto } from "../../api/dtos/get-all-activities-dto";

export const mapSimpleActivityDtoToActivity = (
  simpleActivityDto: SimpleActivityDto
) => {
  const mappedActivity = {
    title: simpleActivityDto.name,
    start: new Date(simpleActivityDto.date),
    end: new Date(simpleActivityDto.date),
    className: "!bg-pignus-500 hover:!bg-pignus-600",
  };
  mappedActivity.end.setHours(mappedActivity.end.getHours() + 2);
  return mappedActivity;
};
