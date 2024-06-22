const ModalLoader = () => {
  return (
    <div className="absolute z-30 bg-black bg-opacity-50 w-full h-full bottom-0 top-0 left-0 right-0">
      <div className="flex justify-center items-center w-full h-full">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-pignus-500"></div>
      </div>
    </div>
  );
};

export default ModalLoader;
