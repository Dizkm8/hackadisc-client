import { Label } from "flowbite-react";
import CCheckbox from "../../common/components/CCheckbox";
import DeleteIcon from "../../common/components/DeleteIcon";
import EditIcon from "../../common/components/EditIcon";
import CButton from "../../common/components/CButton";
import { UserWorker } from "../models/user-worker";
import { UserWorkerCapacitation } from "../models/user-worker-capacitation";

const getQualificationColor = (qualification: string) => {
  switch (qualification) {
    case "A":
      return "bg-pignus-500";
    case "B":
      return "bg-pignusBlue-400";
    case "C":
      return "bg-yellow-300";
    case "D":
      return "bg-red-500";
    default:
      return "bg-gray-200";
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "Evaluado":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
    case "En Intervención":
      return "bg-pignusBlue-100 text-pignusBlue-800 dark:bg-pignusBlue-900 dark:text-pignusBlue-300";
    case "Intervenido":
      return "bg-pignus-200 text-pignus-800 dark:bg-pignus-900 dark:text-pignus-300";
    default:
      return "text-black dark:text-white";
  }
};

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
            className={`h-4 w-4 rounded-full inline-block mr-2 ${getQualificationColor(
              worker.qualification
            )}`}
          />
          {worker.qualification ?? "-"}
        </div>
      </td>
      <td className="px-4 py-3 text-wrap">
        <span
          className={`text-xs font-medium px-2 py-0.5 rounded text-wrap ${getStatusColor(
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
