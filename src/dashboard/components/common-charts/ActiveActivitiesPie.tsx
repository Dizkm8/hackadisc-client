import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { ActiveActivityItem } from "../../models/common-statistics";
import { getCategoryESNameById } from "../../../workers/utils/utils";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  activeActivities: ActiveActivityItem[];
}

const ActiveActivitiesPie = ({ activeActivities }: Props) => {
  const data = {
    labels: activeActivities.map((item) =>
      getCategoryESNameById(item.category)
    ),
    datasets: [
      {
        label: "Actividades",
        data: activeActivities.map((item) => item.count),
        backgroundColor: ["#fdf429", "#6dcfcb", "#b485b7"],
        hoverBackgroundColor: ["#e3db24", "#21b6b8", "#7c477c"],
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
        text: "Cantidad de Actividades",
        font: {
          size: 18,
        },
      },
    },
  };

  return (
    <div className="md:col-span-2 mx-auto w-full md:w-[400px] md:mt-10 overflow-scroll md:overflow-auto">
      <Pie data={data} options={options} />
    </div>
  );
};

export default ActiveActivitiesPie;
