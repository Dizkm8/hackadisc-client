import { homePath } from "../router/routes-paths";

const NotFoundPage = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full h-dvh px-5">
      <img src="/logo-pignus.webp" alt="Logo Pignus" className="w-[180px]" />
      <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-pignus-600">
        404
      </h1>
      <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
        Oops... Página no encontrada
      </p>
      <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
        Lo siento, no pudimos encontrar lo que estabas buscando{" "}
      </p>
      <a
        href={homePath}
        className="sm:mx-auto text-white bg-pignus-600 hover:bg-pignus-800 focus:ring-4 focus:outline-none focus:ring-pignus-300 rounded-lg text-center px-5 py-2.5  my-4 w-full sm:w-[300px]"
      >
        Volver al Inicio
      </a>
    </section>
  );
};

export default NotFoundPage;
