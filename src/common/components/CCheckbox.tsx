import { Checkbox } from "flowbite-react";

interface Props {
  id: string;
  onClick?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  defaultChecked?: boolean;
  className?: string;
}

const CCheckbox = ({
  id,
  onClick,
  defaultChecked = false,
  className,
}: Props) => {
  return (
    <Checkbox
      defaultChecked={defaultChecked}
      onClick={onClick}
      id={id}
      className={`text-pignus-500 focus:ring-pignus-500 dark:ring-offset-pignus-500 dark:focus:ring-pignus-500 ${className}`}
    />
  );
};

export default CCheckbox;
