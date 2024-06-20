import { Button, ButtonProps } from "flowbite-react";

type CButtonProps = ButtonProps & {
  loading?: boolean;
};

const CButton: React.FC<CButtonProps> = ({ loading, ...props }) => {
  return (
    <Button
      {...props}
      className={`border border-transparent bg-pignus-500 text-white focus:ring-4 focus:ring-pignus-300 enabled:hover:bg-pignus-700 ${props.className}`}
    />
  );
};

export default CButton;
