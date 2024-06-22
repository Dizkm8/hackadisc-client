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
import { StatusCountItem } from "../../models/common-statistics";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
    statusCount: StatusCountItem[];
  }
const WorkerStatusBar = ({ statusCount }: Props) => {

  const data = {
    labels: [
      "No evaluado",
      "Evaluado",
      "En intervención",
      "Intervenido",
    ],
    datasets: [
      {
        label: "Estados",
        data: statusCount.map((item) => item.count),
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
  };

  return (
    <div className="mx-auto h-[600px] overflow-visible">
      <Bar data={data} options={options} />
    </div>
  );
};

export default WorkerStatusBar;