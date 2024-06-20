import { Label } from "flowbite-react";
import CCheckbox from "../../common/components/CCheckbox";

interface Column {
  Header: string;
  accessor: string;
}

interface Props {
  columns: Column[];
}

const HeaderWorkersTable = ({ columns }: Props) => {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center font-bold">
      <tr>
        <th scope="col" className="p-4">
          <div className="flex items-center">
            <CCheckbox id="checkbox-all" />
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
