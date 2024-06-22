import CButton from "../../common/components/CButton";
import DropzoneInput from "./DropzoneInput";
import { IoMdAdd } from "react-icons/io";
import {
  FaRegTrashAlt,
  FaRegFilePdf,
  FaCloudDownloadAlt,
} from "react-icons/fa";
import { MdDoneAll } from "react-icons/md";
import { FaDownload } from "react-icons/fa";

import { FilesActivityDetail } from "../models/activity-detail";
import { Tooltip } from "flowbite-react";

const sendButtonText = "Finalizar";
const endActivityTitle = "Añadir Documentos de Cierre";
const completedActivityTitle = "Actividad Completada";
const completedActivityText = "Archivos de cierre:";
const completedActivityTextWithoutFiles = "No se adjuntaron archivos";

interface Props {
  isCompleted: boolean;
  files: File[];
  staticFiles: FilesActivityDetail[];
  handleAddFiles: (files: File[]) => void;
  completeActivity: () => void;
  onFileDelete: (name: string) => void;
}

const BottomActivityDetailModal = ({
  isCompleted,
  staticFiles,
  files,
  handleAddFiles,
  completeActivity,
  onFileDelete,
}: Props) => {
  const getTitle = () => {
    if (isCompleted)
      return (
        <>
          {completedActivityTitle}{" "}
          <MdDoneAll className="inline-block fill-pignus-600" />
        </>
      );
    return <>{endActivityTitle}</>;
  };

  const getCompletedActivityText = () => {
    if (staticFiles.length === 0) return completedActivityTextWithoutFiles;
    return completedActivityText;
  };

  const fileDropzone = (
    <>
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
        {sendButtonText}
      </CButton>
    </>
  );

  const completedActivityItems = (
    <>
      <div className="w-full flex justify-between mb-3">
        <p>{getCompletedActivityText()}</p>
        <Tooltip content="Descargar todo">
          <FaDownload
            className="w-6 h-6 ml-3 fill-pignus-600 mr-2"
            onClick={() => {
              staticFiles.forEach(({ name, url }, index) => {
                setTimeout(() => {
                  const link = document.createElement("a");
                  link.href = url;
                  link.download = name;
                  link.click();
                }, index * 300);
              });
            }}
          />
        </Tooltip>
      </div>
      <div className="flex gap-3 flex-col h-[150px] my-1 mb-3 overflow-y-scroll">
        {staticFiles.map(({ name, url }) => (
          <div
            key={name}
            className="flex gap-3 items-center p-1 bg-gray-200 rounded-lg"
          >
            <FaCloudDownloadAlt
              className="w-5 h-5 ml-3"
              onClick={() => {
                const link = document.createElement("a");
                link.href = url;
                link.download = name;
                link.click();
              }}
            />
            <a className="text-blue-500 underline" href={url}>
              {name}
            </a>
          </div>
        ))}
      </div>
    </>
  );

  return (
    <>
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
        {getTitle()}
      </h3>
      {isCompleted ? completedActivityItems : fileDropzone}
    </>
  );
};

export default BottomActivityDetailModal;
