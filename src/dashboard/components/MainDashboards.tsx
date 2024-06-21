import EnterpriseAptitudeRadar from "./EnterpriseAptitudeRadar";

const MainDashboards = () => {
  const average = {
    dynamismEnergy: 0.8,
    adaptabilityToChange: 0.7,
    initiative: 0.8,
    personalEffectiveness: 0.9,
    safeConduct: 0.85,
    workingUnderPressure: 0.75,
  };

  return <EnterpriseAptitudeRadar averages={average} />;
};

export default MainDashboards;
