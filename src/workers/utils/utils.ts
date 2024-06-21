export type AptitudeNameType =
  | "ADAPTABILITY"
  | "CONDUCT"
  | "DYNAMISM"
  | "EFFECTIVENESS"
  | "INITIATIVE"
  | "PRESSURE";

export const getAptitudeIdByName = (aptitudeName: AptitudeNameType) => {
  if (aptitudeName === "ADAPTABILITY") return 1;
  if (aptitudeName === "CONDUCT") return 2;
  if (aptitudeName === "DYNAMISM") return 3;
  if (aptitudeName === "EFFECTIVENESS") return 4;
  if (aptitudeName === "INITIATIVE") return 5;
  if (aptitudeName === "PRESSURE") return 6;
  return -1;
};
