import { getSpanStatusColor } from "../../../common/utils/get-status-color";
import { WorkerDetail } from "../../models/worker-detail";

interface Props {
  worker: WorkerDetail;
  className?: string;
}

const WorkerInfo = ({ worker, className }: Props) => {
  const { name, rut, email, enterprise, status, position, area } = worker;

  return (
    <div className="w-full h-full">
      <section className="w-min-max h-max flex flex-col-reverse md:flex-row justify-center items-center gap-0 md:gap-3">
        <div
          className={`flex flex-col p-4 w-full  md:w-4/12 md:shadow-xl rounded-2xl md:rounded-lg border-4 border-x-0 md:border-0  ${className}`}
        >
          <h1 className="text-4xl font-semibold leading-none uppercase text-gray-900 dark:text-white">
            {name}
          </h1>
          <p className="text-blue-800">{email}</p>
          <div className="mt-3">
            <p className="text-gray-700">
              <span className="font-semibold">Cargo: </span>
              {position}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">RUT: </span>
              {rut}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Empresa: </span>
              {enterprise}
            </p>
            <p className="text-gray-700 my-1">
              <span className="font-semibold">Estado: </span>
              <span
                className={`px-2 py-0.5 rounded text-nowrap ${getSpanStatusColor(
                  status
                )}`}
              >
                {status}
              </span>
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Área: </span>
              {area}
            </p>
          </div>
        </div>
        <img
          className="w-60 h-60 rounded-full mt-5 md:mt-0 md:ml-10"
          src="/jorge-rivera.webp"
        />
      </section>
    </div>
  );
};

export default WorkerInfo;
