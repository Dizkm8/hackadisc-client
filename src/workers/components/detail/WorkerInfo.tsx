import { UserWorker } from "../../models/user-worker";

interface Props {
  worker: UserWorker;
  className?: string;
}

const WorkerInfo = ({ worker, className }: Props) => {
  const { name, rut, email, enterprise, status, position, area } = worker;

  return (
    <div className="w-full h-full">
      <div className="w-min-max h-max flex flex-col-reverse md:flex-row justify-center items-center gap-0 md:gap-5">
        <section
          className={`flex flex-col p-4 w-full md:w-3/12 gap-4 rounded-lg md:shadow-xl ${className}`}
        >
          <h1 className="text-4xl mb-2 md:mb-1 font-semibold leading-none uppercase text-gray-900 dark:text-white">
            {name}
          </h1>
          <span className="font-medium px-3 py-1 rounded bg-pignusBlue-200 text-pignusBlue-800 dark:bg-pignusBlue-900 dark:text-pignusBlue-300">
            {position}
          </span>
          <div>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Correo: </span>
              <a
                href={`mailto:${email}`}
                className="text-pignusBlue-300 underline"
              >
                {email}
              </a>
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">RUT: </span>
              {rut}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Empresa: </span>
              {enterprise}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Estado: </span>
              {status}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Área: </span>
              {area}
            </p>
          </div>
        </section>
        <img
          className="w-60 h-60 rounded-full mt-5 md:mt-0"
          src="https://media.licdn.com/dms/image/D4E35AQEu4OzdezYJNA/profile-framedphoto-shrink_400_400/0/1718143845563?e=1719450000&v=beta&t=KQF-xwuJcNXki7xjb-za-gy6DNmOhxJU1D8dK6nNv9E"
        />
      </div>
    </div>
  );
};

export default WorkerInfo;
