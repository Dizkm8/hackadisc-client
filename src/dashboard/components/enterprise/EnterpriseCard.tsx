import { CiTimer } from "react-icons/ci";

interface Props {
  startDate: Date;
  endDate: Date;
  remainingTime: string;
}

const EnterpriseCard = ({ startDate, endDate, remainingTime }: Props) => {
  return (
    <div className="w-full md:w-1/3 p-6 bg-white border border-gray-200 rounded-lg shadow ">
      <h5 className="mb-1 text-2xl tracking-tight text-pignusBlue-400 font-semibold">
        {remainingTime}
      </h5>
      <p className="font-normal text-gray-700 mb-5 uppercase">
        <CiTimer className="w-5 h-5 inline-block mr-1" />
        Tiempo restante del contrato
      </p>
      <span className="font-normal text-gray-500 mb-1">
        <span className="font-bold">Inicio: </span>
        {startDate.toLocaleDateString()}
      </span>
      <br />
      <span className="font-normal text-gray-500">
        <span className="font-bold">Término: </span>
        {endDate.toLocaleDateString()}
      </span>
    </div>
  );
};

export default EnterpriseCard;
