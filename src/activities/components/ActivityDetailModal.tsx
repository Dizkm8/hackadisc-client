import CButton from "../../common/components/CButton";
import CloseModalButton from "../../common/components/CloseModalButton";
import {
  getAptitudeESNameById,
  getCategoryESNameById,
} from "../../workers/utils/utils";
import { ActivityDetail } from "../models/activity-detail";
import { FaUserAltSlash } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import DropzoneInput from "./DropzoneInput";
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa";
import agent from "../../api/agent";

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

const formTexts = {
  description: "Descripción",
  participants: "Invitados",
  endActivity: "Añadir Documentos de Cierre",
  sendButton: "Finalizar",
};

interface Props {
  activity: ActivityDetail;
  onClose: () => void;
}

const ActivityDetailModal = ({ activity, onClose }: Props) => {
  const [files, setFiles] = useState<File[]>([]);

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
    setFiles([]);
  };

  const handleAddFiles = (newFiles: File[]) => {
    const [firstFile] = newFiles;
    if (!firstFile) return;

    const alreadyExists = files.some((file) => file.name === firstFile.name);
    if (alreadyExists) return;

    setFiles((prevState) => [...prevState, ...Array.from(newFiles)]);
  };

  const onFileDelete = (filename: string) => {
    setFiles((prevState) => prevState.filter((file) => file.name !== filename));
  };

  const completeActivity = () => {
    agent.Activities.complete(activity.id, files)
      .then(() => {
        handleClose();
      })
      .catch((error) => {
        console.error(error);
      });
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
              {getAptitudeESNameById(activity.aptitude)}
            </span>
            <span className="text-xs font-medium px-2 py-0.5 rounded text-nowrap bg-pignusBlue-200 text-pignusBlue-800">
              {getCategoryESNameById(activity.category)}
            </span>
          </p>
          <p>{getDateText(activity.date)}</p>
          <p className="font-semibold mt-3">{formTexts.description}</p>
          <p>{activity.description}</p>
          <p className="font-semibold mt-5">{formTexts.participants}</p>
          <div className="h-[250px] overflow-y-scroll">{getParticipants()}</div>
          <hr className="my-3 border" />
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            {formTexts.endActivity}
          </h3>
          {files && (
            <div className="flex gap-3 flex-col">
              {files.map(({ name }) => (
                <div
                  key={name}
                  className="flex gap-3 items-center p-1 bg-gray-200 rounded-lg"
                >
                  <FaRegFilePdf className="w-4 h-4 ml-3" />
                  <p className="mr-">{name}</p>
                  <button
                    className="rounded-full p-1"
                    onClick={() => onFileDelete(name)}
                  >
                    <FaRegTrashAlt className="w-5 h-5 fill-red-500 hover:fill-red-600" />
                  </button>
                </div>
              ))}
            </div>
          )}
          <DropzoneInput
            className="p-10 mt-3 mb-5"
            handleAddFiles={handleAddFiles}
          />
          <CButton
            colorType="blue"
            className="w-full py-1"
            onClick={completeActivity}
          >
            <IoMdAdd className="mr-2 h-5 w-5" />
            {formTexts.sendButton}
          </CButton>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetailModal;
