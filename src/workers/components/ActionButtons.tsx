import CButton from "../../common/components/CButton";
import { IoMdAdd } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";

const addActivityText = "Nueva Actividad";
const sendActivityAndUsersText = "Asignar Actividad";
const cancelActivityText = "Cancelar";

interface Props {
  isActivityInfo: boolean;
  onAddActivityButtonClick: () => void;
  assignActivityAndUsers: () => void;
  cancelActivity: () => void;
}

const ActionButtons = ({
  isActivityInfo,
  onAddActivityButtonClick,
  assignActivityAndUsers,
  cancelActivity,
}: Props) => {
  if (!isActivityInfo) {
    return (
      <div className="flex items-center space-x-3 w-full md:w-auto">
        <CButton className="w-full" onClick={onAddActivityButtonClick}>
          <IoMdAdd className="mr-2 h-5 w-5" />
          {addActivityText}
        </CButton>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center space-x-3 w-full md:w-auto">
        <CButton
          className="w-full"
          colorType="outline"
          onClick={cancelActivity}
        >
          <MdCancel className="mr-2 h-5 w-5" />
          {cancelActivityText}
        </CButton>
      </div>
      <div className="flex items-center space-x-3 w-full md:w-auto">
        <CButton
          className="w-full"
          colorType="blue"
          onClick={assignActivityAndUsers}
        >
          <FaArrowUp className="mr-2 h-5 w-5" />
          {sendActivityAndUsersText}
        </CButton>
      </div>
    </>
  );
};

export default ActionButtons;
