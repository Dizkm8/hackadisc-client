import { Button, ButtonProps } from "flowbite-react";

type CButtonProps = ButtonProps & {
  colorType?: "solid" | "outline";
  loading?: boolean;
};

const CButton: React.FC<CButtonProps> = ({
  colorType = "solid",
  loading,
  className,
  ...props
}) => {
  const colorClassName =
    colorType === "solid"
      ? "text-white bg-pignus-500 border-transparent enabled:hover:bg-pignus-700 focus:ring-pignus-300"
      : "bg-transparent text-red-700 hover:text-white border-red-500 enabled:hover:bg-red-700 focus:ring-red-300";

  return (
    <Button
      {...props}
      className={`border ${colorClassName} p-0 ${className} transition-colors duration-100`}
    />
  );
};

export default CButton;
