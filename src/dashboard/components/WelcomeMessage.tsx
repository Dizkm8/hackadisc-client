import useUserInformation from "../../auth/hooks/useUserInformation";

interface Props {
  className?: string;
}

const WelcomeMessage = ({ className }: Props) => {
  const { username } = useUserInformation();
  const enterprise = "Proyectos Castillo, Cuevas y Molina S.P.A";

  return (
    <div className={`flex flex-col justify-start items-center ${className}`}>
      <h1 className="text-5xl md:text-7xl mb-3 md:mb-10 text-wrap text-center px-3">
        ¡Bienvenid@ <span className="text-pignus-600">{username}!</span>
      </h1>
      <p className="text-2xl md:text-4xl text-pignusBlue-400 font-semibold px-3 text-center text-wrap mb-5 md:mb-10">
        {enterprise}
      </p>
      <h2 className="text-center text-wrap text-2xl md:text-4xl">
        Estadísticas de <span className="text-pignus-600">Hoy</span>
      </h2>
    </div>
  );
};

export default WelcomeMessage;
