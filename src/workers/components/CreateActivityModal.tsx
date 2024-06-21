import CloseIcon from "../../common/components/CloseIcon";
import { Label } from "flowbite-react";
import ScheduleIcon from "../../common/components/ScheduleIcon";
import CDatePicker from "../../common/components/CDatePicker";
import CloseModalButton from "../../common/components/CloseModalButton";

const addActivityText = "Nueva Actividad";
const categoryInputName = "Categoria";
const aptitudesInputName = "Aptitudes";
const dateInputName = "Fecha";

const activityInput = {
  name: "Actividad",
  placeholder: "Ej: Curso de seguridad en el trabajo",
};

const descriptionInput = {
  name: "Descripción",
  placeholder:
    "Ej: Curso donde se enseñan las medidas de seguridad en el trabajo",
};

const categoryOptions = [
  {
    id: -1,
    value: "SELECT_CATEGORY",
    name: "Selecciona una Categoría",
  },
  {
    id: 1,
    value: "COURSE",
    name: "Curso",
  },
  {
    id: 2,
    value: "TRAINING",
    name: "Capacitación",
  },
  {
    id: 3,
    value: "SPEECH",
    name: "Charla",
  },
];

const aptitudesOptions = [
  {
    id: -1,
    value: "SELECT_CATEGORY",
    name: "Selecciona una Categoría",
  },
  {
    id: 1,
    value: "ADAPTABILITY",
    name: "Adaptabilidad",
  },
  {
    id: 2,
    value: "CONDUCT",
    name: "Conducta Segura y Autocuidado",
  },
  {
    id: 3,
    value: "DYNAMISM",
    name: "Dinamismo y Energía",
  },
  {
    id: 4,
    value: "EFFECTIVENESS",
    name: "Efectividad Personal",
  },
  {
    id: 5,
    value: "INITIATIVE",
    name: "Iniciativa y Aprendizaje Permanente",
  },
  {
    id: 6,
    value: "PRESSURE",
    name: "Trabajo Bajo Presión",
  },
];

interface Props {
  onClose: () => void;
}

const CreateActivityModal = ({ onClose }: Props) => {
  const onDiscard = () => {
    onClose();
  };

  return (
    <div
      id="createProductModal"
      tabIndex={-1}
      aria-hidden="true"
      className="fixed top-0 right-0 left-0 bottom-0 z-50 justify-center items-center w-full h-full bg-black bg-opacity-50 overflow-auto flex"
    >
      <div className="relative p-4 w-full max-w-3xl h-full md:h-auto mx-auto">
        <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {addActivityText}
            </h3>
            <CloseModalButton onClick={onDiscard} altText="Cerrar Formulario" />
          </div>
          <form action="#">
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
              <div>
                <Label
                  htmlFor="brand"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  {activityInput.name}
                </Label>
                <input
                  type="text"
                  name="brand"
                  id="brand"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pignus-600 focus:border-pignus-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pignus-500 dark:focus:border-pignus-500"
                  placeholder={activityInput.placeholder}
                />
              </div>

              <div>
                <Label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  {categoryInputName}
                </Label>
                <select
                  id="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pignus-500 focus:border-pignus-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pignus-500 dark:focus:border-pignus-500"
                >
                  {categoryOptions.map(({ id, value, name }) => (
                    <option key={id} value={value}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <Label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  {aptitudesInputName}
                </Label>
                <select
                  id="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pignus-500 focus:border-pignus-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pignus-500 dark:focus:border-pignus-500"
                >
                  {aptitudesOptions.map(({ id, value, name }) => (
                    <option key={id} value={value}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <Label
                  htmlFor="activity-date-picker"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  {dateInputName}
                </Label>
                <CDatePicker ariaLabel="activity-date-picker" />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  {descriptionInput.name}
                </label>
                <textarea
                  id="description"
                  rows={4}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-pignus-500 focus:border-pignus-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pignus-500 dark:focus:border-pignus-500"
                  placeholder={descriptionInput.placeholder}
                  defaultValue={""}
                />
              </div>
            </div>

            <div className="items-center justify-end space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <button
                onClick={onDiscard}
                className="w-full justify-center sm:w-auto text-red-500 inline-flex items-center bg-white hover:bg-red-100 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg border border-red-200 text-sm font-medium px-5 py-2.5 hover:text-red-900 focus:z-10 "
              >
                <CloseIcon />
                Discard
              </button>
              <button className="w-full sm:w-auto text-white justify-center inline-flex items-center bg-pignus-700 hover:bg-pignus-800 focus:ring-4 focus:outline-none focus:ring-pignus-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pignus-600 dark:hover:bg-pignus-700 dark:focus:ring-pignus-800">
                <ScheduleIcon />
                Agendar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateActivityModal;
