import { MdWorkspacePremium } from "react-icons/md";
import { getTextQualificationColorByNumber } from "../../../common/utils/get-qualification-color";
import { WorkerDetail } from "../../models/worker-detail";
import { aptitudesNames } from "../../types/aptitudes-constants";

interface Props {
  worker: WorkerDetail;
}

const getAptitudeInfo = (name: string, value: number) => {
  const percentage = Math.trunc(value * 100);

  return (
    <div className="flex flex-col items-center justify-center">
      <dt
        className={`mb-2 text-4xl md:text-5xl font-extrabold ${getTextQualificationColorByNumber(
          percentage
        )}`}
      >
        {`${percentage}%`}
      </dt>
      <dd className="font-semibold text-xl text-gray-500 dark:text-gray-400">
        {name}
      </dd>
    </div>
  );
};

const WorkerAptitudes = ({ worker }: Props) => {
  const {
    dynamismEnergy,
    adaptabilityToChange,
    initiative,
    personalEffectiveness,
    safeConduct,
    workingUnderPressure,
  } = worker;

  return (
    <section className="py-8 mx-auto text-center w-full">
      <h2 className="text-4xl mb-10 font-semibold">
        Competencias Transversales
        <MdWorkspacePremium className=" inline-block mx-2" />
      </h2>
      <dl className="grid max-w-screen-lg gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
        {getAptitudeInfo(aptitudesNames.dynamismEnergy, dynamismEnergy)}
        {getAptitudeInfo(
          aptitudesNames.adaptabilityToChange,
          adaptabilityToChange
        )}
        {getAptitudeInfo(aptitudesNames.initiative, initiative)}
        {getAptitudeInfo(
          aptitudesNames.personalEffectiveness,
          personalEffectiveness
        )}
        {getAptitudeInfo(aptitudesNames.safeConduct, safeConduct)}
        {getAptitudeInfo(
          aptitudesNames.workingUnderPressure,
          workingUnderPressure
        )}
      </dl>
    </section>
  );
};

export default WorkerAptitudes;
