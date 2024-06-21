import { Label } from "flowbite-react";
import CloseModalButton from "../../common/components/CloseModalButton";
import CTextInput from "../../common/components/CTextInput";
import { ActivityDetail } from "../models/activity-detail";

const normalTextareaClassName =
  "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-pignus-500 focus:border-pignus-500";

interface Props {
  activity: ActivityDetail;
}

const ActivityDetailModal = ({ activity }: Props) => {
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
              "AAAA"
            </h3>
            <CloseModalButton
              onClick={() => console.log("Closed")}
              altText="Cerrar Formulario"
            />
          </div>
          <form>
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
              <div>
                <Label
                  htmlFor="activity-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  "AAAA"
                </Label>
                <CTextInput
                  color="normal"
                  type="text"
                  id="activity-input"
                  placeholder="AAAA"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  "AAAA"
                </label>
                <textarea
                  id="description"
                  rows={4}
                  className={normalTextareaClassName}
                  placeholder="AAAA"
                  defaultValue={""}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetailModal;
