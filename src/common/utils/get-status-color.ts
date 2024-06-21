export const getSpanStatusColor = (status: string) => {
  switch (status) {
    case "Evaluado":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
    case "En Intervención":
      return "bg-pignusBlue-100 text-pignusBlue-800 dark:bg-pignusBlue-900 dark:text-pignusBlue-300";
    case "Intervenido":
      return "  ";
    default:
      return "text-black dark:text-white bg-gray-200 dark:bg-gray-800";
  }
};
