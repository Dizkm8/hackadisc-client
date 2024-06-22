import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { AptitudeScoreAverage } from "../../models/common-statistics";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface Props {
  averages: AptitudeScoreAverage;
}
const AptitudeRadar = ({ averages }: Props) => {
  const dynamismEnergy = ["Dinamismo", "y Energía"];
  const adaptabilityToChange = "Adaptabilidad";
  const initiative = ["Iniciativa y", "Aprendizaje Permanente"];
  const personalEffectiveness = ["Efectividad", " Personal"];
  const safeConduct = ["Conducta Segura", "y Autocuidado"];
  const workingUnderPressure = ["Trabajo", " Bajo Presión"];

  const values = [
    averages.dynamismEnergy * 100,
    averages.adaptabilityToChange * 100,
    averages.initiative * 100,
    averages.personalEffectiveness * 100,
    averages.safeConduct * 100,
    averages.workingUnderPressure * 100,
  ];
  const data = {
    labels: [
      dynamismEnergy,
      adaptabilityToChange,
      initiative,
      personalEffectiveness,
      safeConduct,
      workingUnderPressure,
    ],
    datasets: [
      {
        label: "Competencias",
        data: values,
        fill: true,
        backgroundColor: "rgba(126, 202, 39, 0.2)",
        borderColor: "#7eca27",
        pointBackgroundColor: "#7eca27",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#7eca27",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          stepSize: 25,
          font: {
            size: 14,
          },
          color: "#000",
        },
        pointLabels: {
          font: {
            size: 16,
          },
          color: "#000",
        },
      },
    },
  };

  return (
    <div className="mx-auto w-full md:w-[600px] overflow-scroll md:overflow-auto">
      <h3 className="text-center font-bold uppercase">Radar de Competencias</h3>
      <Radar data={data} options={options} />
    </div>
  );
};

export default AptitudeRadar;
