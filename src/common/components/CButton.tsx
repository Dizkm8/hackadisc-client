import { Button, ButtonProps } from "flowbite-react";

type CButtonProps = ButtonProps & {
  colorType?: "solid" | "outline";
  loading?: boolean;
};

const CButton: React.FC<CButtonProps> = ({
  colorType = "solid",
  loading,
  ...props
}) => {
  const colorClassName =
    colorType === "solid"
      ? "bg-pignus-500 enabled:hover:bg-pignus-700 focus:ring-pignus-300"
      : "bg-transparent text-pignus-500 border border-pignus-500 enabled:hover:bg-red-700 focus:ring-red-300";

  return (
    <Button
      {...props}
      className={`border border-transparent ${colorClassName} text-white focus:ring-4 p-0 ${props.className}`}
    />
  );
};

export default CButton;
