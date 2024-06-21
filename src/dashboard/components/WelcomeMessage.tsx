import useUserInformation from "../../auth/hooks/useUserInformation";

interface Props {
  className?: string;
}

const WelcomeMessage = ({ className }: Props) => {
  const { username } = useUserInformation();
  const enterprise = "Proyectos Castillo, Cuevas y Molina S.P.A";

  return (
    <div className={`flex flex-col justify-start items-center ${className}`}>
      <h1 className="text-7xl mb-10">
        ¡Bienvenid@ <span className="text-pignus-600">{username}!</span>
      </h1>
      <h2 className="text-4xl text-pignusBlue-400 font-semibold">
        {enterprise}
      </h2>
    </div>
  );
};

export default WelcomeMessage;
