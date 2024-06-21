export const getBgQualificationColorByLetter = (
  qualification: string
): string => {
  switch (qualification) {
    case "A":
      return "bg-pignus-500";
    case "B":
      return "bg-pignusBlue-400";
    case "C":
      return "bg-yellow-300";
    case "D":
      return "bg-red-500";
    default:
      return "bg-gray-200";
  }
};

export const getTextQualificationColorByNumber = (value: number) => {
  if (value < 25) {
    return "text-red-600";
  }
  if (value < 50) {
    return "text-yellow-300";
  }
  if (value < 75) {
    return "text-pignusBlue-300";
  }
  if (value <= 100) {
    return "text-pignus-500";
  }
  return "text-black";
};
