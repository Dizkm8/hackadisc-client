import { FileInput, Label } from "flowbite-react";
import DropzoneIcon from "../../common/components/DropzoneIcon";

interface Props {
  handleAddFiles: (files: File[]) => void;
  title?: React.ReactNode;
  description?: string;
  className?: string;
}

const defaultTitle = (
  <>
    <span className="font-semibold">Clickea</span> arrastra o suelta un archivo{" "}
    <span className="font-semibold">para subirlo.</span>
  </>
);

const defaultDescription = "Formatos PNG, JPG o PDF";

const DropzoneInput = ({
  handleAddFiles,
  title = defaultTitle,
  description = defaultDescription,
  className,
}: Props) => {
  const onUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) {
      return;
    }

    handleAddFiles(Array.from(files));
  };

  return (
    <Label
      htmlFor="dropzone-file"
      className={`flex h-40 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 ${className}`}
    >
      <div className="flex flex-col items-center justify-center pb-6 pt-5">
        <DropzoneIcon />
        <p className="mb-2 text-sm text-gray-500">{title}</p>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
      <FileInput onChange={onUpload} id="dropzone-file" className="hidden" />
    </Label>
  );
};

export default DropzoneInput;
