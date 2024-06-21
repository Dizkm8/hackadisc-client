import { Label } from "flowbite-react";
import CCheckbox from "../../common/components/CCheckbox";
import DeleteIcon from "../../common/components/DeleteIcon";
import EditIcon from "../../common/components/EditIcon";
import CButton from "../../common/components/CButton";
import { UserWorker } from "../models/user-worker";
import { UserWorkerCapacitation } from "../models/user-worker-capacitation";
import { getBgQualificationColorByLetter } from "../../common/utils/get-qualification-color";
import { getSpanStatusColor } from "../../common/utils/get-status-color";

const getDefaultChecked = (
  workersData: UserWorker | UserWorkerCapacitation,
  defaultCheckbox: boolean
) => {
  if ("isChecked" in workersData) {
    return workersData.isChecked;
  }
  return defaultCheckbox;
};

const getDetailButtonPath = (rut: string) => `/trabajadores/${rut}`;

const commonRowClassName =
  "px-4 py-3 font-small text-gray-900 whitespace-nowrap dark:text-white text-wrap";

const getRows = (
  workersData: UserWorker[] | UserWorkerCapacitation[],
  defaultCheckbox: boolean
) =>
  workersData.map((worker) => (
    <tr
      key={worker.rut}
      className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      <td className="p-4 w-4">
        <div className="flex items-center">
          <CCheckbox
            id={worker.rut + "-checkbox"}
            workerRut={worker.rut}
            defaultChecked={getDefaultChecked(worker, defaultCheckbox)}
          />
          <Label htmlFor={worker.rut + "-checkbox"} />
        </div>
      </td>

      <td className={commonRowClassName}>{worker.name}</td>
      <td className={`${commonRowClassName} text-nowrap`}>{worker.rut}</td>
      <td className={commonRowClassName}>{worker.email}</td>
      <td className={commonRowClassName}>{worker.enterprise}</td>
      <td className="px-4 py-3 text-gray-900 whitespace-nowrap dark:text-white">
        <div className="flex items-center font-medium">
          <div
            className={`h-4 w-4 rounded-full inline-block mr-2 ${getBgQualificationColorByLetter(
              worker.qualification
            )}`}
          />
          {worker.qualification ?? "-"}
        </div>
      </td>
      <td className="px-4 py-3 text-wrap">
        <span
          className={`text-xs font-medium px-2 py-0.5 rounded text-nowrap ${getSpanStatusColor(
            worker.status
          )}`}
        >
          {worker.status}
        </span>
      </td>
      <td className={commonRowClassName}>{worker.position}</td>
      <td className={commonRowClassName}>{worker.area}</td>
      <td className={commonRowClassName}>
        <div className="flex items-center space-x-4">
          <CButton
            href={getDetailButtonPath(worker.rut)}
            className=" text-white bg-pignusBlue-500 hover:bg-pignusBlue-800 focus:ring-4 focus:ring-pignusBlue-300"
          >
            <EditIcon />
            {seeText}
          </CButton>
          <CButton colorType="outline">
            <DeleteIcon />
            {deleteText}
          </CButton>
        </div>
      </td>
    </tr>
  ));

const seeText = "Ver";
const deleteText = "Borrar";

interface Props {
  workersData: UserWorker[] | UserWorkerCapacitation[];
  isMainCheck: boolean;
}

const BodyWorkersTable = ({ workersData, isMainCheck }: Props) => {
  const rows = getRows(workersData, isMainCheck);

  return <tbody>{rows}</tbody>;
};

export default BodyWorkersTable;
