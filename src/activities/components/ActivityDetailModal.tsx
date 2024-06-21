import CloseModalButton from "../../common/components/CloseModalButton";
import { ActivityDetail } from "../models/activity-detail";
import { FaUserAltSlash } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";

const getDateText = (date: Date): string => {
  const daysOfWeek = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  const dayName = daysOfWeek[date.getDay()];

  const formattedDate = new Intl.DateTimeFormat("es-CL", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  }).format(date);

  const finalFormattedDate = `${dayName}, ${formattedDate}`;
  return finalFormattedDate;
};

const titlesTexts = {
  description: "Descripción",
  participants: "Invitados",
};

interface Props {
  activity: ActivityDetail;
  onClose: () => void;
}

const ActivityDetailModal = ({ activity, onClose }: Props) => {
  const getParticipants = () => {
    if (activity.participants.length === 0)
      return (
        <p className="flex gap-3 mt-2 italic">
          <FaUserAltSlash className="w-5 h-5" />
          Aun no hay invitados
        </p>
      );

    const participants = activity.participants.map(
      ({ rut, username, email }) => (
        <div
          key={rut}
          className="flex items-center gap-3 px-2 py-1.5 bg-gray-100 rounded-xl mb-2"
        >
          <FaUserCheck className="w-6 h-6 fill-pignus-600" />
          <div className="flex flex-col">
            <p>{username}</p>
            <p className="text-xs">{email}</p>
          </div>
        </div>
      )
    );

    return participants;
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div
      id="createProductModal"
      tabIndex={-1}
      aria-hidden="true"
      className="fixed top-0 right-0 left-0 bottom-0 z-50 justify-center items-center w-full h-full bg-black bg-opacity-50 overflow-auto flex"
    >
      <div className="relative p-4 w-full max-w-xl h-full md:h-auto mx-auto">
        <div className="relative p-4 bg-white rounded-lg shadow sm:p-5">
          <div className="flex justify-between items-center">
            <CloseModalButton
              onClick={handleClose}
              altText="Cerrar Formulario"
            />
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            {activity.name}
          </h3>
          <p>
            <span className="text-xs font-medium px-2 py-0.5 rounded text-nowrap bg-pignus-200 text-pignus-800 mr-3">
              {activity.aptitude}
            </span>
            <span className="text-xs font-medium px-2 py-0.5 rounded text-nowrap bg-pignusBlue-200 text-pignusBlue-800">
              {activity.category}
            </span>
          </p>
          <p>{getDateText(activity.date)}</p>
          <p className="font-semibold mt-3">{titlesTexts.description}</p>
          <p>{activity.description}</p>
          <p className="font-semibold mt-5">{titlesTexts.participants}</p>
          <div className="h-[300px] overflow-y-scroll">{getParticipants()}</div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetailModal;
