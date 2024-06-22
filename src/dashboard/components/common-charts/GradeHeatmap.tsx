import ReactApexChart from "react-apexcharts";
import { GradeCount } from "../../models/common-statistics";
import { ApexOptions } from "apexcharts";

interface Props {
  gradeCount: GradeCount;
  height?: number;
  width?: number;
}

//TODO: finish
const GradeHeatmap = ({ gradeCount, height, width }: Props) => {
  const dynamismEnergy = ["Dinamismo", "y Energía"];
  const adaptabilityToChange = "Adaptabilidad";
  const initiative = ["Iniciativa y", "Aprendizaje Permanente"];
  const personalEffectiveness = ["Efectividad", " Personal"];
  const safeConduct = ["Conducta Segura", "y Autocuidado"];
  const workingUnderPressure = ["Trabajo", " Bajo Presión"];

  const option: ApexOptions = {
    chart: {
      height: 50,
      type: "heatmap",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#7eca27", "#2857de", "#ffcc01", "#ef4444"].reverse(),
    xaxis: {
      type: "category",
      categories: [
        dynamismEnergy,
        adaptabilityToChange,
        initiative,
        personalEffectiveness,
        safeConduct,
        workingUnderPressure,
      ],
    },
    title: {
      text: "Frecuencia de Calificaciones",
      align: "center",
    },
  };

  const series = [
    {
      name: "A",
      data: [
        gradeCount.dynamismEnergy.A,
        gradeCount.adaptabilityToChange.A,
        gradeCount.initiative.A,
        gradeCount.personalEffectiveness.A,
        gradeCount.safeConduct.A,
        gradeCount.workingUnderPressure.A,
      ],
    },
    {
      name: "B",
      data: [
        gradeCount.dynamismEnergy.B,
        gradeCount.adaptabilityToChange.B,
        gradeCount.initiative.B,
        gradeCount.personalEffectiveness.B,
        gradeCount.safeConduct.B,
        gradeCount.workingUnderPressure.B,
      ],
    },
    {
      name: "C",
      data: [
        gradeCount.dynamismEnergy.C,
        gradeCount.adaptabilityToChange.C,
        gradeCount.initiative.C,
        gradeCount.personalEffectiveness.C,
        gradeCount.safeConduct.C,
        gradeCount.workingUnderPressure.C,
      ],
    },
    {
      name: "D",
      data: [
        gradeCount.dynamismEnergy.D,
        gradeCount.adaptabilityToChange.D,
        gradeCount.initiative.D,
        gradeCount.personalEffectiveness.D,
        gradeCount.safeConduct.D,
        gradeCount.workingUnderPressure.D,
      ],
    },
  ].reverse();

  return (
    <div className="items-center mx-auto w-full overflow-scroll md:overflow-auto">
      <ReactApexChart
        options={option}
        series={series}
        type="heatmap"
        height={height}
        width={width}
      />
    </div>
  );
};

export default GradeHeatmap;
