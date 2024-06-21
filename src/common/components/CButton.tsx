import { Button, ButtonProps } from "flowbite-react";

const getClassNames = (colorType: "solid" | "outline" | "blue") => {
  switch (colorType) {
    case "solid":
      return "text-white bg-pignus-500 border-transparent enabled:hover:bg-pignus-700 focus:ring-pignus-300";
    case "outline":
      return "bg-transparent text-red-700 hover:text-white border-red-500 enabled:hover:bg-red-700 focus:ring-red-300";
    case "blue":
      return "bg-pignusBlue-500 text-white border-transparent enabled:hover:bg-pignusBlue-700 focus:ring-pignusBlue-300";
  }
};

type CButtonProps = ButtonProps & {
  colorType?: "solid" | "outline" | "blue";
  loading?: boolean;
};

const CButton: React.FC<CButtonProps> = ({
  colorType = "solid",
  loading,
  className,
  ...props
}) => {
  const colorClassName = getClassNames(colorType);

  return (
    <Button
      {...props}
      className={`border ${colorClassName} p-0 ${className} transition-colors duration-100`}
    />
  );
};

export default CButton;
