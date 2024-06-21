import CButton from "../../common/components/CButton";
import { IoMdAdd } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa6";

const addActivityText = "Nueva Actividad";
const sendActivityAndUsers = "Asignar Actividad";

interface Props {
  isActivityInfo: boolean;
  onAddActivityButtonClick: () => void;
  assignActivityAndUsers: () => void;
}

const ActionButtons = ({
  isActivityInfo,
  onAddActivityButtonClick,
  assignActivityAndUsers,
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
          colorType="blue"
          onClick={assignActivityAndUsers}
        >
          <FaArrowUp className="mr-2 h-5 w-5" />
          {sendActivityAndUsers}
        </CButton>
      </div>
      <div className="flex items-center space-x-3 w-full md:w-auto">
        <CButton
          className="w-full"
          colorType="blue"
          onClick={assignActivityAndUsers}
        >
          <FaArrowUp className="mr-2 h-5 w-5" />
          {sendActivityAndUsers}
        </CButton>
      </div>
    </>
  );
};

export default ActionButtons;
