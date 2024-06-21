import { AptitudeNameType } from "../../common/types/aptitude-name-type";
import { CategoryNameType } from "../../common/types/category-name-type";
import { aptitudesNames } from "../types/aptitudes-constants";
import { categoriesNames } from "../types/categories-constants";

const unknown = "-";

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

export const getCategoryNameById = (categoryId: number) => {
  if (categoryId === 1) return "COURSE";
  if (categoryId === 2) return "TRAINING";
  if (categoryId === 3) return "SPEECH";
  return unknown;
};

export const getAptitudeNameById = (aptitudeId: number) => {
  if (aptitudeId === 1) return "ADAPTABILITY";
  if (aptitudeId === 2) return "CONDUCT";
  if (aptitudeId === 3) return "DYNAMISM";
  if (aptitudeId === 4) return "EFFECTIVENESS";
  if (aptitudeId === 5) return "INITIATIVE";
  if (aptitudeId === 6) return "PRESSURE";
  return unknown;
};

export const getCategoryESNameById = (categoryId: number) => {
  if (categoryId === 1) return categoriesNames.course;
  if (categoryId === 2) return categoriesNames.training;
  if (categoryId === 3) return categoriesNames.speech;
  return unknown;
};

export const getAptitudeESNameById = (aptitudeId: number) => {
  if (aptitudeId === 1) return aptitudesNames.adaptabilityToChange;
  if (aptitudeId === 2) return aptitudesNames.safeConduct;
  if (aptitudeId === 3) return aptitudesNames.dynamismEnergy;
  if (aptitudeId === 4) return aptitudesNames.personalEffectiveness;
  if (aptitudeId === 5) return aptitudesNames.initiative;
  if (aptitudeId === 6) return aptitudesNames.workingUnderPressure;
  return unknown;
};
