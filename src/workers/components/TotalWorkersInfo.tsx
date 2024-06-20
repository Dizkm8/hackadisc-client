const allWorkersText = "Total trabajadores: ";
const allWorkersNumber = 123456;

const TotalWorkersInfo = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
      <div className="flex-1 flex items-center space-x-2">
        <h5>
          <span className="text-gray-500">{allWorkersText}</span>
          <span className="dark:text-white">{allWorkersNumber}</span>
        </h5>
        <div
          id="results-tooltip"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Showing 1-100 of 436 results
          <div className="tooltip-arrow" data-popper-arrow="" />
        </div>
      </div>
    </div>
  );
};

export default TotalWorkersInfo;
