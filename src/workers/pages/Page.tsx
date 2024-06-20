import WorkersTable from "../components/WorkersTable";

const WorkersPage = () => {
  return (
    <>
      <h1 className="text-center text-5xl font-semibold md:font-normal md:text-6xl mt-3 mb-5">
        Trabajadores
      </h1>
      <WorkersTable />
    </>
  );
};

export default WorkersPage;
