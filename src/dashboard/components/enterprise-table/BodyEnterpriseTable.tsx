import { EnterpriseSummaryItem } from "../../models/admin-statistics";

const commonRowClassName =
  "px-4 py-3 font-small text-gray-900 whitespace-nowrap dark:text-white text-wrap text-center";

const getRows = (
  enterprisesData: EnterpriseSummaryItem[],
) =>
  enterprisesData.map((enterprise) => (
    <tr
      key={enterprise.name}
      className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      <td className={commonRowClassName}>{enterprise.name}</td>
      <td className={commonRowClassName}>{enterprise.workerCount}</td>
      <td className={commonRowClassName}>{enterprise.evaluatedWorkerCount}</td>
      <td className={commonRowClassName}>{enterprise.activityCount}</td>
      <td className={commonRowClassName}>{enterprise.mainEnterprise}</td>
      <td className={commonRowClassName}>{enterprise.remainingTime}</td>
    </tr>
  ));

interface Props {
  enterprisesData: EnterpriseSummaryItem[];
}

const BodyEnterpriseTable = ({ enterprisesData }: Props) => {
  const rows = getRows(enterprisesData);

  return <tbody>{rows}</tbody>;
};

export default BodyEnterpriseTable;
