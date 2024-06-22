import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { ActivityParticipants } from "../../models/common-statistics";
import { getCategoryESNameById } from "../../../workers/utils/utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  activityParticipants: ActivityParticipants;
}

const ActivityParticipantsBar = ({ activityParticipants }: Props) => {
  const dynamismEnergy = ["Dinamismo", "y Energía"];
  const adaptabilityToChange = "Adaptabilidad";
  const initiative = ["Iniciativa y", "Aprendizaje Permanente"];
  const personalEffectiveness = ["Efectividad", " Personal"];
  const safeConduct = ["Conducta Segura", "y Autocuidado"];
  const workingUnderPressure = ["Trabajo", " Bajo Presión"];

  let values: number[][] = Array.from({ length: 3 }, () => Array(6).fill(0));
  const competenceCorrelative: { [key: string]: number } = {
    first: 0,
    second: 1,
    third: 2,
    fourth: 3,
    fifth: 4,
    sixth: 5,
  };

  for (const [competence, item] of Object.entries(activityParticipants)) {
    const index = competenceCorrelative[competence];
    for (const entry of item) {
      values[entry.category - 1][index] = entry.count;
    }
  }

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
        label: getCategoryESNameById(1),
        data: values[0],
        fill: true,
        backgroundColor: "rgba(253, 244, 41, 0.7)",
        borderColor: "#e3db24",
        pointBackgroundColor: "#e3db24",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#e3db24",
      },
      {
        label: getCategoryESNameById(2),
        data: values[1],
        fill: true,
        backgroundColor: "rgba(109, 207, 203, 0.7)",
        borderColor: "#21b6b8",
        pointBackgroundColor: "#21b6b8",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#21b6b8",
      },
      {
        label: getCategoryESNameById(3),
        data: values[2],
        fill: true,
        backgroundColor: "rgba(180, 133, 183, 0.7)",
        borderColor: "#7c477c",
        pointBackgroundColor: "#7c477c",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#7c477c",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: "Cantidad de Participantes en Actividades",
        font: {
          size: 18,
        },
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return (
    <div className="mx-auto w-full md:w-[600px] overflow-scroll md:overflow-auto">
      <Bar data={data} options={options} />
    </div>
  );
};

export default ActivityParticipantsBar;
