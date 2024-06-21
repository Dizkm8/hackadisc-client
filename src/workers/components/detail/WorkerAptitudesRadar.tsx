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
import { WorkerDetail } from "../../models/worker-detail";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface Props {
  worker: WorkerDetail;
}
const WorkerAptitudesRadar = ({ worker }: Props) => {
  const dynamismEnergy = ["Dinamismo", "y Energía"];
  const adaptabilityToChange = "Adaptabilidad";
  const initiative = ["Iniciativa y", "Aprendizaje Permanente"];
  const personalEffectiveness = ["Efectividad", " Personal"];
  const safeConduct = ["Conducta Segura", "y Autocuidado"];
  const workingUnderPressure = ["Trabajo", " Bajo Presión"];

  const values = [
    worker.dynamismEnergy * 100,
    worker.adaptabilityToChange * 100,
    worker.initiative * 100,
    worker.personalEffectiveness * 100,
    worker.safeConduct * 100,
    worker.workingUnderPressure * 100,
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
            size: 16,
          },
          color: "#000",
        },
        pointLabels: {
          font: {
            size: 18,
          },
          color: "#000",
        },
      },
    },
  };

  return (
    <div className="mx-auto w-[800px] overflow-visible">
      <Radar data={data} options={options} />
    </div>
  );
};

export default WorkerAptitudesRadar;
