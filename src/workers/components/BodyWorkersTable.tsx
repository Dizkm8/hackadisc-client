import { Label } from "flowbite-react";
import CCheckbox from "../../common/components/CCheckbox";
import DeleteIcon from "../../common/components/DeleteIcon";
import EditIcon from "../../common/components/EditIcon";
import CButton from "../../common/components/CButton";
import { UserWorker } from "../models/user-worker";

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
      return "bg-black";
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

const getDetailButtonPath = (rut: string) => `/trabajadores/${rut}`;

const commonRowClassName =
  "px-4 py-3 font-small text-gray-900 whitespace-nowrap dark:text-white text-wrap";

const getRows = (workersData: UserWorker[], defaultCheckbox: boolean) =>
  workersData.map(
    ({
      name,
      rut,
      email,
      enterprise,
      qualification,
      status,
      position,
      area,
    }) => (
      <tr
        key={rut}
        className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <td className="p-4 w-4">
          <div className="flex items-center">
            <CCheckbox
              id={rut + "-checkbox"}
              defaultChecked={defaultCheckbox}
            />
            <Label htmlFor={rut + "-checkbox"} />
          </div>
        </td>

        <td className={commonRowClassName}>{name}</td>
        <td className={`${commonRowClassName} text-nowrap`}>{rut}</td>
        <td className={commonRowClassName}>{email}</td>
        <td className={commonRowClassName}>{enterprise}</td>
        <td className="px-4 py-3 text-gray-900 whitespace-nowrap dark:text-white">
          <div className="flex items-center font-medium">
            <div
              className={`h-4 w-4 rounded-full inline-block mr-2 ${getQualificationColor(
                qualification
              )}`}
            />
            {qualification}
          </div>
        </td>
        <td className="px-4 py-3 text-wrap">
          <span
            className={`text-xs font-medium px-2 py-0.5 rounded text-wrap ${getStatusColor(
              status
            )}`}
          >
            {status}
          </span>
        </td>
        <td className={commonRowClassName}>{position}</td>
        <td className={commonRowClassName}>{area}</td>
        <td className={commonRowClassName}>
          <div className="flex items-center space-x-4">
            <CButton
              href={getDetailButtonPath(rut)}
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
    )
  );

const seeText = "Ver";
const deleteText = "Borrar";

interface Props {
  workersData: UserWorker[];
  isMainCheck: boolean;
}

const BodyWorkersTable = ({ workersData, isMainCheck }: Props) => {
  const rows = getRows(workersData, isMainCheck);

  return <tbody>{rows}</tbody>;
};

export default BodyWorkersTable;
