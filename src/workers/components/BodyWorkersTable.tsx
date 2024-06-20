import { Label } from "flowbite-react";
import CCheckbox from "../../common/components/CCheckbox";
import DeleteIcon from "../../common/components/DeleteIcon";
import EditIcon from "../../common/components/EditIcon";

interface Worker {
  name: string;
  rut: string;
  email: string;
  enterprise: string;
  qualification: string;
  status: string;
  position: string;
  area: string;
}

interface Props {
  data: Worker[];
}

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

const BodyWorkersTable = ({ data }: Props) => {
  const rows = data.map(
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
            <CCheckbox id={rut + name + "checkbox"} />
            <Label htmlFor={rut + name + "checkbox"} />
          </div>
        </td>

        <td className="px-4 py-3 font-small text-gray-900 whitespace-nowrap dark:text-white">
          {name}
        </td>
        <td className="px-4 py-3 font-small text-gray-900 whitespace-nowrap dark:text-white">
          {rut}
        </td>
        <td className="px-4 py-3 font-small text-gray-900 whitespace-nowrap dark:text-white">
          {email}
        </td>
        <td className="px-4 py-3 font-small text-gray-900 whitespace-nowrap dark:text-white">
          {enterprise}
        </td>
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
        <td className="px-4 py-3">
          <span
            className={`text-xs font-medium px-2 py-0.5 rounded ${getStatusColor(
              status
            )}`}
          >
            {status}
          </span>
        </td>
        <td className="px-4 py-3 font-small text-gray-900 whitespace-nowrap dark:text-white">
          {position}
        </td>
        <td className="px-4 py-3 font-small text-gray-900 whitespace-nowrap dark:text-white">
          {area}
        </td>
        <td className="px-4 py-3 font-small text-gray-900 whitespace-nowrap dark:text-white">
          <div className="flex items-center space-x-4">
            <button className="py-2 px-3 flex items-center text-sm font-small text-center text-white bg-pignus-700 rounded-lg hover:bg-pignus-800 focus:ring-4 focus:outline-none focus:ring-pignus-300">
              <EditIcon />
              Ver
            </button>
            <button className="flex items-center text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-small rounded-lg text-sm px-3 py-2 text-center">
              <DeleteIcon />
              Borrar
            </button>
          </div>
        </td>
      </tr>
    )
  );

  return <tbody>{rows}</tbody>;
};

export default BodyWorkersTable;