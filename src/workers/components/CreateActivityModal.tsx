import CloseIcon from "../../common/components/CloseIcon";
import { Label } from "flowbite-react";
import ScheduleIcon from "../../common/components/ScheduleIcon";
import CDatePicker from "../../common/components/CDatePicker";
import CloseModalButton from "../../common/components/CloseModalButton";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import CTextInput from "../../common/components/CTextInput";
import { categoriesNames } from "../types/categories-constants";
import { aptitudesNames } from "../types/aptitudes-constants";
import { CategoryNameType } from "../../common/types/category-name-type";
import { AptitudeNameType } from "../../common/types/aptitude-name-type";

const addActivityText = "Nueva Actividad";
const categoryInputName = "Categoria";
const aptitudesInputName = "Aptitud";
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

interface CategoryItem {
  id: number;
  value: CategoryNameType | "SELECT_CATEGORY";
  name: string;
}

interface AptitudeItem {
  id: number;
  value: AptitudeNameType | "SELECT_CATEGORY";
  name: string;
}

const categoryOptions: CategoryItem[] = [
  {
    id: -1,
    value: "SELECT_CATEGORY",
    name: "Selecciona una Categoría",
  },
  {
    id: 1,
    value: "COURSE",
    name: categoriesNames.course,
  },
  {
    id: 2,
    value: "TRAINING",
    name: categoriesNames.training,
  },
  {
    id: 3,
    value: "SPEECH",
    name: categoriesNames.speech,
  },
];

const aptitudesOptions: AptitudeItem[] = [
  {
    id: -1,
    value: "SELECT_CATEGORY",
    name: "Selecciona una Categoría",
  },
  {
    id: 1,
    value: "ADAPTABILITY",
    name: aptitudesNames.adaptabilityToChange,
  },
  {
    id: 2,
    value: "CONDUCT",
    name: aptitudesNames.safeConduct,
  },
  {
    id: 3,
    value: "DYNAMISM",
    name: aptitudesNames.dynamismEnergy,
  },
  {
    id: 4,
    value: "EFFECTIVENESS",
    name: aptitudesNames.personalEffectiveness,
  },
  {
    id: 5,
    value: "INITIATIVE",
    name: aptitudesNames.initiative,
  },
  {
    id: 6,
    value: "PRESSURE",
    name: aptitudesNames.workingUnderPressure,
  },
];

const selectErrorClassName =
  "bg-red-50 border border-red-500 text-gray-600 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5";
const normalSelectClassName =
  "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pignus-500 focus:border-pignus-500 block w-full p-2.5";

const normalTextareaClassName =
  "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-pignus-500 focus:border-pignus-500";

const errorTextareaClassName =
  "block p-2.5 w-full text-sm text-gray-600 bg-red-50 rounded-lg border border-red-500 focus:ring-red-500 focus:border-red-500";

type AddActivityInputs = {
  activity: string;
  category: string;
  aptitude: string;
  description: string;
  date: string;
};

const getErrorMessage = (error: string) => {
  return <p className="text-red-500 text-xs pl-1">{error}</p>;
};

interface Props {
  onClose: (data?: any) => void;
}

const CreateActivityModal = ({ onClose }: Props) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddActivityInputs>();
  const onSubmit: SubmitHandler<AddActivityInputs> = (data) => {
    onClose(data);
  };

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
              <div>
                <Label
                  htmlFor="activity-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  {activityInput.name}
                </Label>
                <CTextInput
                  registerFunc={register("activity", {
                    required: {
                      value: true,
                      message: "Este campo es requerido",
                    },
                  })}
                  type="text"
                  id="activity-input"
                  placeholder={activityInput.placeholder}
                  color={errors.activity?.message ? "failure" : "normal"}
                />
                {errors.activity?.message &&
                  getErrorMessage(errors.activity.message)}
              </div>

              <div>
                <Label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  {categoryInputName}
                </Label>
                <select
                  {...register("category", {
                    required: {
                      value: true,
                      message: "Este campo es requerido",
                    },
                    validate: (value) => {
                      return (
                        value !== "SELECT_CATEGORY" ||
                        "Selecciona una Categoría"
                      );
                    },
                  })}
                  id="category"
                  className={
                    errors.category?.message
                      ? selectErrorClassName
                      : normalSelectClassName
                  }
                >
                  {categoryOptions.map(({ id, value, name }) => (
                    <option key={id} value={value}>
                      {name}
                    </option>
                  ))}
                </select>
                {errors.category?.message &&
                  getErrorMessage(errors.category.message)}
              </div>

              <div>
                <Label
                  htmlFor="aptitude"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  {aptitudesInputName}
                </Label>
                <select
                  {...register("aptitude", {
                    required: {
                      value: true,
                      message: "Este campo es requerido",
                    },
                    validate: (value) => {
                      return (
                        value !== "SELECT_CATEGORY" ||
                        "Selecciona una Categoría"
                      );
                    },
                  })}
                  id="aptitude"
                  className={
                    errors.category?.message
                      ? selectErrorClassName
                      : normalSelectClassName
                  }
                >
                  {aptitudesOptions.map(({ id, value, name }) => (
                    <option key={id} value={value}>
                      {name}
                    </option>
                  ))}
                </select>
                {errors.aptitude?.message &&
                  getErrorMessage(errors.aptitude.message)}
              </div>

              <div>
                <Label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  {dateInputName}
                </Label>
                <Controller
                  control={control}
                  name="date"
                  rules={{
                    required: {
                      value: true,
                      message: "Debes seleccionar una fecha",
                    },
                  }}
                  render={({ field }) => (
                    <CDatePicker
                      ariaLabel="activity-date-picker"
                      field={field}
                      color={errors.date?.message ? "failure" : "gray"}
                    />
                  )}
                />
                {errors.date?.message && getErrorMessage(errors.date.message)}
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  {descriptionInput.name}
                </label>
                <textarea
                  {...register("description", {
                    required: {
                      value: true,
                      message: "Este campo es requerido",
                    },
                  })}
                  id="description"
                  rows={4}
                  className={
                    errors.description?.message
                      ? errorTextareaClassName
                      : normalTextareaClassName
                  }
                  placeholder={descriptionInput.placeholder}
                  defaultValue={""}
                />
                {errors.description?.message &&
                  getErrorMessage(errors.description.message)}
              </div>
            </div>

            <div className="items-center justify-end space-y-4 flex flex-col-reverse md:flex-row sm:space-y-0 sm:space-x-4 gap-3 sm:gap-0">
              <button
                onClick={onDiscard}
                className="w-full justify-center sm:w-auto text-red-500 inline-flex items-center bg-white hover:bg-red-100 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg border border-red-200 text-sm font-medium px-5 py-2.5 hover:text-red-900 focus:z-10 "
              >
                <CloseIcon />
                Discard
              </button>
              <button
                type="submit"
                className="w-full sm:w-auto text-white justify-center inline-flex items-center bg-pignus-700 hover:bg-pignus-800 focus:ring-4 focus:outline-none focus:ring-pignus-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pignus-600 dark:hover:bg-pignus-700 dark:focus:ring-pignus-800"
              >
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
