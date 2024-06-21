import { MdWorkspacePremium } from "react-icons/md";
import { getTextQualificationColorByNumber } from "../../../common/utils/get-qualification-color";

interface Aptitude {
  id: string;
  name: string;
  value: number;
}

interface Props {
  aptitudes: Aptitude[];
}

const WorkerAptitudes = ({ aptitudes }: Props) => {
  return (
    <section className="py-8 mx-auto text-center w-full">
      <h2 className="text-4xl mb-10 font-semibold">
        Competencias Transversales
        <MdWorkspacePremium className=" inline-block mx-2" />
      </h2>
      <dl className="grid max-w-screen-lg gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
        {aptitudes.map(({ id, name, value }) => (
          <div key={id} className="flex flex-col items-center justify-center">
            <dt
              className={`mb-2 text-4xl md:text-5xl font-extrabold ${getTextQualificationColorByNumber(
                value
              )}`}
            >
              {`${value}%`}
            </dt>
            <dd className="font-semibold text-xl text-gray-500 dark:text-gray-400">
              {name}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default WorkerAptitudes;
