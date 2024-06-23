import MainLayout from "../common/layout/MainLayout";

const AboutUsPage = () => {
  return (
    <MainLayout>
      <div className="h-dvh w-screen flex flex-col justify-start items-center mt-5 gap-1 px-5 md:px-10">
        <img
          src="/logo-pignus.webp"
          alt="Logo Pignus"
          className="mt-5 w-[200px]"
        />
        <h1 className="text-7xl text-center">Sobre Nosotros</h1>
        <p className="text-2xl md:text-4xl font-bold uppercase my-5 text-center ">
          Jorge Rivera{" "}
          <span className="text-pignus-500">Desarrollador FullStack</span>
        </p>
        <img
          className="w-full lg:w-1/2 shadow-xl rounded-sm"
          src="/joge.webp"
          alt="Desarrollador FullStack Joge"
        />
      </div>
    </MainLayout>
  );
};

export default AboutUsPage;
