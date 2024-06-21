import { AptitudeNameType } from "../../common/types/aptitude-name-type";
import { CategoryNameType } from "../../common/types/category-name-type";

export const getAptitudeIdByName = (aptitudeName: AptitudeNameType) => {
  if (aptitudeName === "ADAPTABILITY") return 1;
  if (aptitudeName === "CONDUCT") return 2;
  if (aptitudeName === "DYNAMISM") return 3;
  if (aptitudeName === "EFFECTIVENESS") return 4;
  if (aptitudeName === "INITIATIVE") return 5;
  if (aptitudeName === "PRESSURE") return 6;
  return -1;
};

export const getCategoryIdByName = (categoryName: CategoryNameType) => {
  if (categoryName === "COURSE") return 1;
  if (categoryName === "TRAINING") return 2;
  if (categoryName === "SPEECH") return 3;
  return -1;
};
