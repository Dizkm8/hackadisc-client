import { Spinner } from "flowbite-react";

interface CSpinnerProps {
  className?: string;
}

const CSpinner = ({ className }: CSpinnerProps) => {
  return (
    <Spinner
      aria-label="Cargando..."
      className={`fill-pignusBlue-300 ${className}`}
    />
  );
};

export default CSpinner;
