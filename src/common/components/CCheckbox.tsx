import { Checkbox } from "flowbite-react";

interface Props {
  id: string;
  onClick?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  className?: string;
}

const CCheckbox = ({ id, onClick, className }: Props) => {
  return (
    <Checkbox
      onClick={onClick}
      id={id}
      className={`text-pignus-500 focus:ring-pignus-500 dark:ring-offset-pignus-500 dark:focus:ring-pignus-500 ${className}`}
    />
  );
};

export default CCheckbox;
