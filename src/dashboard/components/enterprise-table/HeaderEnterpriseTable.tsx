interface Column {
  Header: string;
  accessor: string;
}

interface Props {
  columns: Column[];
}

const HeaderEnterpriseTable = ({ columns }: Props) => {
  return (
    <thead className="uppercase text-xs  text-center font-bold text-white bg-pignusBlue-500 dark:bg-pignusBlue-500 dark:text-white">
      <tr>
        {columns.map((column) => (
          <th scope="col" key={column.accessor} className="p-4">
            {column.Header}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default HeaderEnterpriseTable;
