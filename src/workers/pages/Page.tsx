import WorkersTable from "../components/WorkersTable";

const WorkersPage = () => {
  return (
    <>
      <h1 className="text-5xl md:text-7xl mb-3 md:mb-10 text-wrap text-center px-3 mt-5">
        Trabajadores
      </h1>
      <WorkersTable />
    </>
  );
};

export default WorkersPage;
