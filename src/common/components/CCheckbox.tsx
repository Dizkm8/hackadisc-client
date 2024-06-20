import { Checkbox } from "flowbite-react";
import { useEffect, useState } from "react";

interface Props {
  id: string;
  defaultChecked?: boolean;
  className?: string;
  onClick?: (isChecked: boolean) => void;
}

const CCheckbox = ({
  id,
  defaultChecked = false,
  className,
  onClick,
}: Props) => {
  const [isCheck, setIsCheck] = useState(defaultChecked);

  const handleOnClick = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const isChecked = (e.target as HTMLInputElement).checked;
    onClick && onClick(isChecked);
  };

  useEffect(() => {
    setIsCheck(defaultChecked);
  }, [defaultChecked]);

  return (
    <Checkbox
      checked={isCheck}
      onChange={(e) => setIsCheck(e.target.checked)}
      onClick={handleOnClick}
      id={id}
      className={`text-pignus-500 focus:ring-pignus-500 dark:ring-offset-pignus-500 dark:focus:ring-pignus-500 ${className}`}
    />
  );
};

export default CCheckbox;
