import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { ActivitySummaryItem } from "../models/area-statistics";
import { getDateText } from "../../activities/components/ActivityDetailModal";
interface Props {
  summary: ActivitySummaryItem[];
}

const ActivitySummaryTable = ({ summary }: Props) => {
  return (
    <div className="mx-auto my-3">
      <Table>
        <TableHead>
          <TableHeadCell>Actividad</TableHeadCell>
          <TableHeadCell>Fecha</TableHeadCell>
          <TableHeadCell>Participantes</TableHeadCell>
        </TableHead>
        <TableBody>
          {summary.map((activity) => {
            return (
              <TableRow
                key={
                  activity.date.toISOString() + activity.name + activity.count
                }
              >
                <TableCell>{activity.name}</TableCell>
                <TableCell>{getDateText(activity.date)}</TableCell>
                <TableCell>{activity.count}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default ActivitySummaryTable;
