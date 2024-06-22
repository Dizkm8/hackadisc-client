import { ActivitySummaryItem } from "../models/area-statistics";
import { getDateText } from "../../activities/components/ActivityDetailModal";

interface Props {
  summary: ActivitySummaryItem[];
  className?: string;
}

const ActivitySummaryTable = ({ summary, className }: Props) => {
  return (
    <div
      className={`mx-auto my-3 w-full md:w-2/3 overflow-x-scroll rounded-lg border-2 border-gray-100 md:overflow-hidden ${className}`}
    >
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white uppercase bg-pignus-500">
          <tr>
            <th scope="col" className="px-6 py-3">
              Actividad
            </th>
            <th scope="col" className="px-6 py-3">
              Fecha
            </th>
            <th scope="col" className="text-center px-6 py-3">
              Participantes
            </th>
          </tr>
        </thead>
        <tbody>
          {summary.map((activity) => {
            return (
              <tr
                key={
                  activity.date.toISOString() + activity.name + activity.count
                }
                className="bg-white border-b"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-700 text-wrap"
                >
                  {activity.name}
                </th>
                <td className="px-6 py-4 text-wrap">
                  {getDateText(activity.date)}
                </td>
                <td className="px-6 py-4 text-center">{activity.count}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ActivitySummaryTable;
