import { Label } from "flowbite-react";
import MainCheckbox from "../../common/components/MainCheckbox";

interface Column {
  Header: string;
  accessor: string;
}

interface Props {
  columns: Column[];
  updateMainCheck: (isChecked: boolean) => void;
}

const HeaderWorkersTable = ({ columns, updateMainCheck }: Props) => {
  return (
    <thead className="uppercase text-xs  text-center font-bold text-white bg-pignusBlue-500 dark:bg-pignusBlue-500 dark:text-white">
      <tr>
        <th scope="col" className="p-4">
          <div className="flex items-center">
            <MainCheckbox id="checkbox-all" onClick={updateMainCheck} />
            <Label htmlFor="checkbox-all" />
          </div>
        </th>
        {columns.map((column) => (
          <th scope="col" key={column.accessor} className="p-4">
            {column.Header}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default HeaderWorkersTable;
